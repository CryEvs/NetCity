<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Calendar/PublicWeekTeachers_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitleExcel( obLanguage("Calendar","kScheduleOn") & nWeekInYear & obLanguage("Calendar","kWeekFrom")&": "&obLanguage("Calendar","kFrom")&" " & Date2Str(BDate) &" "&obLanguage("Calendar","kTo")&" "& Date2Str(BDate+6), GetArrPageTitle())
	If bEmptyScheduleTimes Then
		Response.Write GetWarningExcel(obLanguage("Calendar","kNoClassMeetings"))
	Else
		Call DrawTeachersTable(False)
	End If
	Response.Write GetPageVerExcel()
End Sub
%>
