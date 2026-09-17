<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="StudentGrades_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetPageTitleFor( strPageName, arrPageParams )
	GetPageTitleFor = GetPageTitlePrintWithUserPhoto(GetPageTitle() & " " & GetTitleEx(), strStudentID, GetPageParams())
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">"
End Function

%>
