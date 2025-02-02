import xlrd
from db_table import db_table

def open_file(path):
    try:
        book = xlrd.open_workbook(path)
        sh = book.sheet_by_index(0)
        return sh
    except FileNotFoundError:
        print(f"Error: Could not find file at {path}")
        return None
    except Exception as e:
        print(f"Error: Could not open file at {path}: {e}")
        return None

def create_tables():
    sessions = db_table("sessions", {
        "id": "integer PRIMARY KEY",
        "type": "text",
        "parent_session_id": "integer",
        "title": "text NOT NULL",
        "date": "text NOT NULL",
        "time_start": "text NOT NULL",
        "time_end": "text NOT NULL",
        "location": "text",
        "description": "text"
    })
    print("Created sessions table")

    speakers = db_table("speakers", {
        "id": "integer PRIMARY KEY",
        "name": "text NOT NULL"
    })
    print("Created speakers table")

    session_speakers = db_table("session_speakers", {
        "session_id": "integer",
        "speaker_id": "integer",
        "PRIMARY KEY (session_id, speaker_id)": "",
        "FOREIGN KEY (session_id)": "REFERENCES sessions(id)",
        "FOREIGN KEY (speaker_id)": "REFERENCES speakers(id)"
    })
    print("Created session_speakers table")

    return sessions, speakers, session_speakers

def import_data(sheet, sessions):
    DATE_IDX = 0
    TIME_START_IDX = 1
    TIME_END_IDX = 2
    SESSION_TYPE_IDX = 3
    TITLE_IDX = 4
    LOCATION_IDX = 5
    DESCRIPTION_IDX = 6
    SPEAKERS_IDX = 7

    DATA_START_ROW = 15

    last_session_id = 0

    for i, row in enumerate(range(DATA_START_ROW, sheet.nrows)):
        row_data = [sheet.cell_value(row, col) for col in range(sheet.ncols)]

        session = {
            "id": i,
            "type": row_data[SESSION_TYPE_IDX],
            "parent_session_id": last_session_id if row_data[SESSION_TYPE_IDX] != "Session" else None,
            "title": row_data[TITLE_IDX],
            "date": row_data[DATE_IDX],
            "time_start": row_data[TIME_START_IDX],
            "time_end": row_data[TIME_END_IDX],
            "location": row_data[LOCATION_IDX] if row_data[LOCATION_IDX] else None,
            "description": row_data[DESCRIPTION_IDX] if row_data[DESCRIPTION_IDX] else None,
        }

        if row_data[SESSION_TYPE_IDX] == "Session":
            last_session_id = i

        print("\n", session)
        sessions.insert(session)

if __name__ == "__main__":
    sessions, speakers, session_speakers = create_tables()
    sh = open_file("./agenda.xls")
    import_data(sh, sessions)