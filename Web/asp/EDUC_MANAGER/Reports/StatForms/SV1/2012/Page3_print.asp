<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim print

Sub ReadState()
	readonly = TRUE
	strCommonYearID = GetSafeStr(obTokenMgr.GetData( strToken, "stCommYearID" ),-1,"")
	Call InitEmFilters()
	Call InitializeCommonYears
End Sub
%>
<!-- #INCLUDE VIRTUAL="/asp/EDUC_MANAGER/Reports/StatForms/SV1/FormCV1_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->
<%
Sub onDrawPage()
	print = TRUE
	LoadEmInfo( 3 )
%>
<!-- #INCLUDE FILE=Sections/Section2_inc.asp -->
<!-- #INCLUDE FILE=Sections/Section3_inc.asp -->
<%
End Sub
%>


<!-- #INCLUDE VIRTUAL="/asp/EDUC_MANAGER/Reports/StatForms/PagePrint_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/EDUC_MANAGER/Reports/StatForms/SV1/FormCV1_inc.asp" -->
<% ' © 2007-2012 IRTech. All rights reserved.
Sub SectionsInclude()
	%>
		<!-- #INCLUDE FILE=Sections/Section2_inc.asp -->
		<!-- #INCLUDE FILE=Sections/Section3_inc.asp -->	<%
End Sub
%>
