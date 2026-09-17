<!-- #INCLUDE File="ReportOnDate_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	RPTID=<Report ID>

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialRead()
    Dim strAge

	strReportFileName = "CountComposByYears.asp"
	strReportExportFileName = "CountComposByYearsExport.asp"

    strAge = GetSafeStr(Request("Age"), 1, "0")
    Call obTokenMgr.SetData(strToken, stReportAgeCompos, strAge)
End Sub
%>
