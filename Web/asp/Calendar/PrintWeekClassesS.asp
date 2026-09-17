<!-- #INCLUDE VIRTUAL=/asp/headerprint_s.asp -->
<!-- #INCLUDE VIRTUAL="/asp/Calendar/PublicWeekClassesS_inc.asp" -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitlePrint(GetPageTitle, GetArrPageTitle())
	If objScheduleRs.RecordCount = 0 And Not bHasEvents Then 
		Response.Write GetWarningPrint( obLanguage("Calendar","kWarnNoStudentSchedule",strFunctionalityType) )
	Else
		Call DrawSubjTable()
	End If
	Response.Write GetPageVerPrint()
End Sub
%>
