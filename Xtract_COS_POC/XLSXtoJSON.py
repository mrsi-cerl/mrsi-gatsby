import pandas as pd
import os
import sys
import json
import pprint
from pathlib import Path
from tkinter import *
from tkinter import filedialog

window = Tk()
window.withdraw()
infilepath = filedialog.askopenfilename(initialdir=".",
                                        title="Select Excel File to convert",
                                        filetypes= (("Excel Files","*.xlsx"),
                                        ("all files","*.*")))
inpathlength = (len(str(infilepath).strip()))
#print(inpathlength)
if inpathlength > 0:
    # Figure out the json file name
    ext = os.path.splitext(infilepath)[1]
    #print(ext)
    outfilepath = infilepath.replace(ext, '.json')
    #print(outfilepath)

    # Load the Excel file
    excel_data = pd.read_excel(infilepath)

    # Convert Excel data to JSON
    json_data = excel_data.to_json(orient='records')

    # Write formatted JSON data to a file
    with open(outfilepath, 'w') as json_file:
        json_file.write(
            json.dumps(json.loads(json_data), indent=2)
        )
    print("Data file written to:" + outfilepath)
else:
    print ("No file chosen, aborting...")
