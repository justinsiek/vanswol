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
    
    sessions_table = db_table("sessions", session_schema)
    all_sessions = sessions_table.select()
    
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
            print(session["id"])

if __name__ == "__main__":
    lookup_agenda("title", "Session 4A: Virtualization:")
