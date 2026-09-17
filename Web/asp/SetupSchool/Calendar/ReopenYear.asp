<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngSetupSchoolCalendar.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
If Not HasUserRight(arCreateCloseEditYear) Then GenerateError kErrPageAccess

Call objNSNET.ReOpenYear(strSchoolYearId)
TestError kCantReopenYear

RedirectTo "Years.asp", null
%>
