import pandas
import os
import json
from tkinter import filedialog

inniefilepath = filedialog.askopenfilename(initialdir=".",
                                        title="Select Excel File to convert",
                                        filetypes= (("Excel Files","*.xlsx"),
                                        ("all files","*.*")))
if len(str(inniefilepath).strip()) > 0:  #Did they actually pick a file?
    # Figure out the json file name
    ext = os.path.splitext(inniefilepath)[1]
    outtiefilepath = inniefilepath.replace(ext, '.json')

    # Load the Excel file
    excel_data = pandas.read_excel(inniefilepath)

    # Convert Excel data to JSON
    json_data = excel_data.to_json(orient='records')

    # Write formatted JSON data to a file
    with open(outtiefilepath, 'w') as json_file:
        json_file.write(
            json.dumps(json.loads(json_data), indent=2)
        )
    print("Data file written to:" + outtiefilepath)

else:
    print ("No file chosen, aborting...")
