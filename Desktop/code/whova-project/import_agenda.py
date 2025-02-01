import xlrd
from db_table import db_table

def open_file(path):
    try:
        book = xlrd.open_workbook(path)
        sh = book.sheet_by_index(0)

        HEADER_ROW = 14 

        columns = []
        for col in range(sh.ncols):
            columns.append(sh.cell_value(HEADER_ROW, col))
            
        print("Columns:")
        for idx, column in enumerate(columns):
            print(f"{idx}: {column}")
            
        return sh, columns
        
    except FileNotFoundError:
        print(f"Error: Could not find file at {path}")
        return None, None
    except Exception as e:
        print(f"Error: Could not open file at {path}")
        return None, None

def create_tables():
    sessions = db_table("sessions", {
        "id": "integer PRIMARY KEY",
        "type": "text",
        "parent_session_id": "integer", 
        "title": "text NOT NULL",
        "date": "text",
        "time_start": "text",
        "time_end": "text",
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

if __name__ == "__main__":
    sessions, speakers, session_speakers = create_tables()
    
    sh, columns = open_file("./agenda.xls")
