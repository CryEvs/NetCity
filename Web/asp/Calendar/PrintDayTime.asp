<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/PublicDayTime_inc.asp -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitlePrint(GetPageTitle(), GetArrPageTitle())
	Call DrawPrintTable_DayTime()
	Response.Write GetPageVerPrint()
End Sub
%>
