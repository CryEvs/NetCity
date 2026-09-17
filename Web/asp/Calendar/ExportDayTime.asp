<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/PublicDayTime_inc.asp -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitleExcel(GetPageTitle(), GetArrPageTitle())
	Call DrawPrintTable_DayTime()
	Response.Write GetPageVerExcel()
End Sub
%>
