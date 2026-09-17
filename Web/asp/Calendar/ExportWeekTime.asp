<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/PublicWeekTime_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitleExcel(GetPageTitle(), GetArrPageTitle())
	Response.Write strTable
	Response.Write GetPageVerExcel()
End Sub
%>
