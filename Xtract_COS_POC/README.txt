Google Sheets (with Chrome or Edge)
=================================================================================================
Install the "Sheets to JSON" extension from the chrome web store:
https://chromewebstore.google.com/detail/sheets-to-json/enmkalgdnmcaljdfkojckdbhkjmffmoa

Go to Google Sheets:
https://docs.google.com/spreadsheets/

Create a new spreadsheet and place this formula in cell A1:
=IMPORTHTML("https://mrsi.erdc.dren.mil/cos/poc/", "table", 1)

When warned about the sheet accessing external data, select "Allow Access"

Press the "JSON" button on the right end of the toolbar, the click the "Download JSON" button in the dialog that pops up.

A file download will start with the data as json.

If you save your spreadsheet, you can come back to it later and refresh the data to update it.

Microsoft Excel (with Python script)
*These instructions are for Windows, but Mac should work similarly
=================================================================================================
Connect an Excel spreadsheet to the COS POC page of the MRSI portal site:
	Open a new "Blank workbook."
	Select "Data" from the menu (if the ribbon is collapsed) and "Get Data" from the left end of the ribbon.
	Next select "From Other Sources" followed by "From Web."
	In the "From Web" dialog, select the "Basic" radio button (the default) and enter the URL for the COS POC page:
		https://mrsi.erdc.dren.mil/cos/poc/
	and click "OK."
	You don't need to do anything in the next dialog, just click the "Connect" button.
	A Navigator dialog will appear, from which you should select "COS Points of Contact" under the HTML Tables section.
	Click the "Load" button: the contacts table will load into the Excel spreadsheet
	The following 3 steps are optional (but I highly recommend them):
		On the right side of the screen will be a Queries & Connections dialog with "COS Points of Contact" listed: double-click it.
		Another view of the table will open. Choose 'Use First Row as Headers' from the middle of the ribbon.
 		Click 'Close & Load' on the left end of the ribbon. The column headers should update in the spreadsheet.

Save your spreadsheet to a convenient place, the set up the Python converter as follows.
If you save your spreadsheet, you can come back to it later and just refresh the data to update it.

***NOTE: This is a one-time setup thing, you don't need to do this every time you run the script. ***
Fetch and install some dependencies for the python script @ the command line (Powershell works just fine):
	winget install gsudo		(If you don't have it already.)
	gsudo pip install pandas	(I'm using gsudo here to install as Administrator so the libraries are global to the machine.)
	gsudo pip install openpyxl

Make sure you have the latest version of the python script from the git repository (\mrsi-gatsby\Xtract_COS_POC\XLSXtoJSON.py

Run the script:
	python.exe .\XLSXtoJSON.py (you will need to supply a different path if you're not running from the directory housing the script)

The script will prompt you to pick an Excel (.xlsx) file to convert and place the converted .json file in the same directory with the same
name as the selected file, but with a .json extension. Note that when you run the script, it will overwrite any .json file with the same name without warning.


LibreOffice Calc (with vb script)
*These instructions were prepared using Linux, but Mac and Windows should work similarly
=================================================================================================
In LibreOffice Calc open a new spreadsheat, the select "Data" from the ribbon followed by "External Links."

In the resultant dialog, enter https://mrsi.erdc.dren.mil/cos/pos as the "URL of External Data Source" and pick "HTML_table" under
"Available Tables/Ranges," the click "OK." Calc will import the data, which you should then save to an .ods file. If you forget to save the file, the vb script will throw an error when you attempt to run it.

***NOTE: This is a one-time setup thing, you don't need to do this every time you run the script. ***
Make sure you have the latest version of the python script from the git repository (\mrsi-gatsby\Xtract_COS_POC\ODStoJSON.vbs.
Copy the contents of the .vbs file and paste them into Calc under "Tools" -> "Edit Macros" -> "My Macros & Dialogs" -> "Standard" -> "Module1"

Return to your spreadsheet and from the left side of the ribbon under the "Tools" tab, click "Run Macro." This will open a "Macro Selector" dialog. Find and select the macro named "JSONExport" and click the "Run" button. The script will place the converted .json file in the same directory with your spreadsheet and it will have the same name as the active sheet (as it appears on the little tab at the bottom of the Calc window). If you didn't rename it, you should end up with a file called something like "Sheet1.json" with the converted data in it. Note that when you run the script, it will overwrite any .json file with the same name without warning.

Test test test