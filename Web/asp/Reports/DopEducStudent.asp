<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/DopEducationView_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Dim strStudentName

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
End Function

Sub specialRead()
	strStudentID = GetSafeID(Request("SID"),Null)
	strCurrYearID = GetSafeLng(Request("CURRYEAR"),obTokenMgr.GetData(strToken,stCurrYear))
	strClassName = objNSNET.GetClassNameForStudent(strStudentID, strCurrYearID)
	strStudentName = objNSNET.GetUserNickName(strStudentID)
End Sub

Sub specialHeaderDraw()
	Response.Write GetReportHeader()
End Sub

Sub specialBottomDraw()
	Response.Write GetReportPrint()
End	Sub

Function GetReportHeader()
	Dim strReport
	strReport = GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNDopEducationStudent"), strStudentID, Array(obLanguage("SetupSchool","kLastNameFirstName")&" "&obLanguage("Reports","kOfStudent",strFunctionalityType), strStudentName, obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),strClassName))
	GetReportHeader = strReport
End Function

Function GetReportPrint()
	GetReportPrint = GetPageVerPrint()
End Function
%>
