<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/DopEducationView_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	strStudentID = GetSafeID(Request("SID"),Null)
	strCurrYearID = GetSafeLng(Request("CURRYEAR"),obTokenMgr.GetData(strToken,stCurrYear))
	strClassName = objNSNET.GetClassNameForStudent(strStudentID, strCurrYearID)
	hasUserRightsOnPage = True
End	Function

Sub onHead()
End Sub

Sub specialHeaderDraw()
	Response.Write GetReportHeader()
End Sub

Sub specialBottomDraw()
	Response.Write GetReportPrint()
End	Sub

Function GetReportHeader()
	Dim strReport
	strReport = GetPageTitleExcel(obLanguage("ReportNames","kRNDopEducationStudent"), Array(obLanguage("SetupSchool","kLastNameFirstName")&" "&obLanguage("Reports","kOfStudent",strFunctionalityType), objNSNET.GetUserNickName(strStudentID), obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),strClassName))
	GetReportHeader = strReport
End Function

Function GetReportPrint()
	GetReportPrint = GetPageVerExcel()
End Function
%>
