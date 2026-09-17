<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/PublicWeekTime_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitlePrint(GetPageTitle(), GetArrPageTitle())
	Response.Write strTable
	Response.Write GetPageVerPrint()
End Sub
%>
