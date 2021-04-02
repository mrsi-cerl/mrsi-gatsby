$root_path="D:\inetpub\wwwroot\MRSI\"
$save_location="d:\temp\s3ListBucket.json"

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


$( "[ $JSON ]" ) -join ",`n" | Out-File -Encoding ASCII -FilePath $save_location

Write-Host "Done. The updated file is in $save_location"