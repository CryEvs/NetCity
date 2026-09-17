<!-- #INCLUDE FILE="../../headernoscreen.asp" -->
<% ' © 2007-2011 IRTech. All rights reserved.
Dim nWeekEndSet, Item

If Not HasUserRight(arCreateCloseEditYear) Then GenerateError obLanguage("Common","kErrPageAccess")
nWeekEndSet = 0
For Each Item In Request.Form("WeekEndDays")
	nWeekEndSet = nWeekEndSet + CLng(Item)
Next

Call objNSNET.EditSchoolYear(strCurrYearID, nWeekEndSet)
TestError( obLanguage("SetupSchoolCalendar","kCantChangeYear") )

RedirectTo "/angular/school/calendar/years/", Null
%>
