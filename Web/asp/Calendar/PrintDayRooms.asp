<!-- #INCLUDE VIRTUAL=/asp/headerprint_s.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/PublicDayRooms_inc.asp -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitlePrint(GetPageTitle(), GetArrPageTitle())
	readonly = True
	If objTimesRs.EOF Then
		Response.Write GetWarningPrint(obLanguage("Calendar","kNoSchedTimes"))
	ElseIf bEmptyRooms Then
		Response.Write GetWarningPrint(obLanguage("Calendar","kNoSheduleRooms"))
	Else
		Call DrawRoomsTable()
	End If
	Response.Write GetPageVerPrint()
End Sub
%>
