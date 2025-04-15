REM  *****  BASIC  *****

'From https://gist.github.com/ceruleancerise
'Exports sheet(s) to JSON in this file's directory under their sheet name.'
'Booleans are exported as int (1 = true, 0 = false).'

SUB JSONExportAll

    sheets = ThisComponent.Sheets
    numSheets = sheets.Count

    FOR i = 0 TO (numSheets - 1)
    	sheet = Sheets(i)
    	ThisComponent.getCurrentController.setActiveSheet(sheet)
    	JSONExport
    NEXT i

END SUB

'--------------------------------------'

SUB JSONExport
	sheet = ThisComponent.getCurrentController.getActiveSheet

	numCols = 0
	cell = sheet.getCellByPosition(0, 0)
	WHILE cell.Type <> com.sun.star.table.CellContentType.EMPTY
		numCols = numCols + 1
		cell = sheet.getCellByPosition(numCols, 0)
	WEND

	numRows = 0
	cell = sheet.getCellByPosition(0, 0)
	WHILE cell.Type <> com.sun.star.table.CellContentType.EMPTY
		numRows = numRows + 1
		cell = sheet.getCellByPosition(0, numRows)
	WEND

	'Properties is the keys for the values.'
	propertyRange = sheet.getCellRangeByPosition(0, 0, numCols - 1, 0)
	propertyArray = propertyRange.getDataArray()(0) '2D Array, but only need row.'
	cells = sheet.getCellRangeByPosition(0, 0, numCols - 1, numRows - 1).getDataArray()

	fileName = GetDirectory + sheet.Name + ".json"
	file = Freefile
	OPEN fileName FOR OUTPUT AS file

	'tabChr = CHR(9)
	tabChr = "  "
	doubleQuoteChr = CHR(34)

	PRINT #file, ("[")
	FOR r = 1 TO (numRows - 1):

		PRINT #file, (tabChr + "{")

		FOR c = 0 TO (numCols - 1):

			_key = propertyArray(c)
			keyStr = doubleQuoteChr + _key + doubleQuoteChr

			'Don't add quotes if value is a number.'
			_val = cells(r)(c)
			valStr = _val
			IF (NOT IsNumeric(_val)) THEN
				valStr = doubleQuoteChr + _val + doubleQuoteChr
			ENDIF

			line = tabChr + tabChr + keyStr + ": " + valStr
			IF (c < numCols - 1) THEN
				line = line + ","
			ENDIF

			PRINT #file, (line)

		NEXT c

		endLine = tabChr + "}"
		IF (r < numRows - 1) THEN
			endLine = endLine + ","
		ENDIF
		PRINT #file, (endLine)

	NEXT r
	PRINT #file, ("]")
	CLOSE #file

END SUB

'--------------------------------------'

FUNCTION GetDirectory() AS STRING

	fileName = ThisComponent.getUrl()
	fileNameSegments = Split(fileName, "/")
	numFileNameSegments = UBound(fileNameSegments) + 1

	dirName = ""

	FOR i = 0 TO (numFileNameSegments - 2)
		dirName = dirName + fileNameSegments(i) + "/"
	NEXT i

	GetDirectory = dirName

END FUNCTION
