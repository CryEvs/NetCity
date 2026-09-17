<!-- #INCLUDE VIRTUAL="/asp/headerexcel_s.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/PublicDayRooms_inc.asp -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitleExcel(GetPageTitle(), GetArrPageTitle())
	readonly = True
	If objTimesRs.EOF Then
		Response.Write GetWarningExcel(obLanguage("Calendar","kNoSchedTimes"))
	ElseIf bEmptyRooms Then
		Response.Write GetWarningExcel(obLanguage("Calendar","kNoSheduleRooms"))
	Else
		Call DrawRoomsTable()
	End If
	Response.Write GetPageVerExcel()
End Sub
%>
