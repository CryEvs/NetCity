<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CuriculumPlan_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub onDrawPage()
	If strTable<>"" Then Response.Write GetPageTitleExcel(strHeader, GetArrPageTitle()) & strTable & GetPageVerExcel()
End Sub
%>
