<% ' © 2007-2015 IRTech. All rights reserved.

Dim errKladr, bReplace, rsAreas, bAll, nStateID, rsCities, nProvinceID, oProvinceID, rsProvinces, rsLocations, nCityID
bAll = false

Sub SetConnection()
	On Error Resume Next
	Call CheckFile("KLADR.DBF")
	Call CheckFile("STREET.DBF")
End Sub

Sub CheckFile(kladrFile)
	If Not objNSNET.ExistKladr(Application("KLADRFolder") & kladrFile) Then GenerateError errKladr & obLanguage("Common","kErrFileMiss")& "  " & kladrFile
End Sub

Function WriteObligatoryTags()%>
	<input type="hidden" name="LoginType" value="<%=IIF(bIsEducManager, 2, IIF(bIsAdminInterface, 1, 0) )%>">
	<input type="hidden" name="AT" value="<%=strToken%>">
	<input type="hidden" name="VER" VALUE="<%=DateDiff("s", #1/1/1999#, Now, 0, 0 )%>"><%
End Function

Function GetPageTitle()
    GetPageTitle = obLanguage("Common","kImportKLADRFull")
End Function%>