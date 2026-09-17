<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Calendar/PublicWeekTeachers_inc.asp" -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitlePrint( obLanguage("Calendar","kScheduleOn") & nWeekInYear & obLanguage("Calendar","kWeekFrom")&": "&obLanguage("Calendar","kFrom")&" " & Date2Str(BDate) &" "&obLanguage("Calendar","kTo")&" "& Date2Str(BDate+6), GetArrPageTitle())
	If bEmptyScheduleTimes Then
		Response.Write GetWarningPrint(obLanguage("Calendar","kNoClassMeetings"))
	Else
		Call DrawTeachersTable(True)
	End If
	Response.Write GetPageVerPrint()
End Sub
%>
