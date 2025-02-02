from db_table import db_table
import sys

def lookup_agenda(column, value):
    try:
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
        
        try:
            all_sessions = sessions_table.select()
        except Exception as e:
            raise Exception(f"Failed to fetch sessions: {e}")

        matched = {}

        if column == "speaker":
            try:
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
            except Exception as e:
                raise Exception(f"Failed to fetch speaker sessions: {e}")
        else:
            matched = {
                session["id"]: session
                for session in all_sessions
                if session.get(column) and str(session[column]).lower() == str(value).lower()
            }

        for session in all_sessions:
            parent_id = session.get("parent_session_id")
            if parent_id is not None and parent_id in matched:
                matched[session["id"]] = session
        
        results = list(matched.values())
        
        if not results:
            print("No sessions found")
            return

        for session in results:
            try:
                session_speaker_rows = session_speakers.select(["speaker_id"], {"session_id": session["id"]})
                speaker_ids = [row["speaker_id"] for row in session_speaker_rows]
                session_speakers_list = []
                for speaker_id in speaker_ids:
                    speaker = speakers.select(["name"], {"id": speaker_id})[0]
                    session_speakers_list.append(speaker["name"])
                
                print(f"\nTitle: {session['title'].strip()}\n")
                print(f"Type: {session.get('type', 'N/A')}")
                print(f"Date: {session.get('date', 'N/A')}")
                print(f"Time: {session.get('time_start', 'N/A')} - {session.get('time_end', 'N/A')}")
                print(f"Location: {session.get('location', 'N/A')}")

                if session_speakers_list:
                    print(f"Speakers: {', '.join(session_speakers_list)}\n")
                if session.get('description'):
                    print(f"Description: {session['description']}")

                print("-" * 70)

            except Exception as e:
                print(f"Error displaying session: {e}")
                continue

    except Exception as e:
        print(f"Error: {e}")
        return

if __name__ == "__main__":

    column = sys.argv[1]
    value = " ".join(sys.argv[2:])

    valid_columns = ["speaker", "type", "title", "date", "location", "description", "time_start", "time_end"]
    if column not in valid_columns:
        print(f"Invalid column. Must be one of: {', '.join(valid_columns)}")
        sys.exit(1)
        
    lookup_agenda(column, value)
