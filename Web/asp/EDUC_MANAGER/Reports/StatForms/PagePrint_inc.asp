<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE FILE="EmFilter_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim print
Dim formNumber

Sub ReadState()
	formNumber = GetFormNumber()
	readonly = TRUE
	strCommonYearID = GetSafeStr(obTokenMgr.GetData( strToken, "stCommYearID" ),-1,"")
	Call InitEmFilters()
	Call InitializeCommonYears
	print = TRUE
End Sub

Sub onDrawPage()
	LoadEmInfo( formNumber )
	Call SectionsInclude()
End Sub
%>
