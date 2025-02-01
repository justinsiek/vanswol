import xlrd

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

if __name__ == "__main__":
    sh, columns = open_file("./agenda.xls")
