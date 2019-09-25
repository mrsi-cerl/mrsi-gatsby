$root_path="C:\Users\RDCERJRM\Desktop\test-folder\"
$save_location="C:\Users\RDCERJRM\Desktop\listfiles.json"



$ls = Get-ChildItem -Path $root_path -Recurse | Select-Object -Property LastWriteTime, FullName, Name, Extension, Length


$JSON = $( $ls | Where-Object{$_} | ForEach-Object{

"{`n" + 
"`"name`"`: `"$($_.Name)`"," + 
"`n" +
"`"LastModified`"`: `"$($_.LastWriteTime)`"," + 
"`n" +
"`"Key`"`: `"$($($_.FullName  -replace [Regex]::Escape($root_path), '') -replace '[\\]', '/')`"," + 
"`n" +
"`"extension`"`: `"$($_.Extension)`"," + 
"`n" +
"`"Size`"`: `"$($_.Length)`"" + 
"`n" +
"}"

}) -join ",`n"


$( "[ $JSON ]" ) -join ",`n" | Out-File -FilePath $save_location