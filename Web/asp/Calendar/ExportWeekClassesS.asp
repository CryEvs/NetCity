<!-- #INCLUDE VIRTUAL="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Calendar/PublicWeekClassesS_inc.asp" -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitleExcel(GetPageTitle, GetArrPageTitle())
	If objScheduleRs.RecordCount = 0 And Not bHasEvents Then 
		Response.Write GetWarningExcel( obLanguage("Calendar","kWarnNoStudentSchedule",strFunctionalityType))
	Else
		Call DrawSubjTable()
	End If
	Response.Write GetPageVerExcel()
End Sub
%>
