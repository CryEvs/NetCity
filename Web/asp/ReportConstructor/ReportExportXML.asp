<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim objReportManagerComp
Dim nReportIDs
Dim resultString
Dim isXML
Dim i
Redim nReportIDs(Request.Form("RPTID").Count-1)

For i = 1 To Request.Form("RPTID").Count
	nReportIDs(i-1) = CLng(Request.Form("RPTID").Item(i))
Next

Set objReportManagerComp = obComponentMgr.Resolve("NetCity.Components.Abstraction.IReportManagerComponent")
resultString = objReportManagerComp.ExportReports(nReportIDs)

isXML = InStr(resultString, "<?")
If (isXML <> 1) Then 
		WriteToLog kUETError, "Ошибка при создании файла отчетов : " + resultString
		GenerateError "Ошибка при создании файла отчетов"
End If

Response.Clear()
Response.AddHeader "Content-Disposition", "attachment; filename=Reports.NSR"
Response.ContentType = "text/xml"
Response.Write resultString
Response.End()
%>
