from db_table import db_table

def lookup_agenda(column, value):
    session_schema = {
        "id": "integer PRIMARY KEY",
        "type": "text",
        "parent_session_id": "integer",
        "title": "text NOT NULL",
        "date": "text NOT NULL",
        "time_start": "text NOT NULL",
        "time_end": "text NOT NULL",
        "location": "text",
        "description": "text"
    }

    speakers = db_table("speakers", {
        "id": "integer PRIMARY KEY",
        "name": "text NOT NULL"
    })

    session_speakers = db_table("session_speakers", {
        "session_id": "integer",
        "speaker_id": "integer",
        "PRIMARY KEY (session_id, speaker_id)": "",
        "FOREIGN KEY (session_id)": "REFERENCES sessions(id)",
        "FOREIGN KEY (speaker_id)": "REFERENCES speakers(id)"
    })

    sessions_table = db_table("sessions", session_schema)
    all_sessions = sessions_table.select()
    matched = {}

    if column == "speaker":
        speaker = speakers.select(["id"], {"name": value})
        if speaker:
            speaker_id = speaker[0]["id"]
            speaker_sessions = session_speakers.select(["session_id"], {"speaker_id": speaker_id})
            session_ids = [s["session_id"] for s in speaker_sessions]
            matched = {
                session["id"]: session
                for session in all_sessions
                if session["id"] in session_ids
            }
    else:
        matched = {
            session["id"]: session
            for session in all_sessions
            if session.get(column) and session[column].lower() == value.lower()
        }

    for session in all_sessions:
        parent_id = session.get("parent_session_id")
        if parent_id is not None and parent_id in matched:
            matched[session["id"]] = session
    
    results = list(matched.values())
    
    if not results:
        print("No sessions found")
    else:
        for session in results:
            session_speaker_rows = session_speakers.select(["speaker_id"], {"session_id": session["id"]})
            speaker_ids = [row["speaker_id"] for row in session_speaker_rows]
            session_speakers_list = []
            for speaker_id in speaker_ids:
                speaker = speakers.select(["name"], {"id": speaker_id})[0]
                session_speakers_list.append(speaker["name"])
            
            print(f"\nTitle: {session['title'].strip()}\n")
            print(f"Type: {session['type']}")
            print(f"Date: {session['date']}")
            print(f"Time: {session['time_start']} - {session['time_end']}")
            print(f"Location: {session['location']}")


            if session_speakers_list:
                print(f"Speakers: {', '.join(session_speakers_list)}\n")
            if session['description']:
                print(f"Description: {session['description']}")

            print("-" * 70)

if __name__ == "__main__":
    lookup_agenda("speaker", "Luis Ceze")
