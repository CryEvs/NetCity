<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudents_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim strBackPage, strEoName

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementMovements
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbMovePoolStudents
End Function

Function GetPageTitle()
	GetPageTitle = IIf(bByDirecting, obLanguage("PoolStudents","kTitleDistributedStudentsList"), obLanguage("FilterUsers","kStudentList",0))
End Function

Sub ReadStateSpecial()
	strBackPage = strScriptName
	nPageType = kPageType_SCHOOL
End Sub

Sub InitFunctionTypes
End Sub

Sub onHeadSpecial()
	%>
	<script src="<%=GetVersionedResLink("/vendor/pages/movement/js/movement.js")%>" type="text/javascript"></script>
	<%
End Sub

Sub InitPoolSchools
	Dim objSchoolInfo

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)

	If objSchoolInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strEoName = GetSafeStr(objSchoolInfo("SCHOOLNAME"), -1, Null)
	strPoolSchoolID = GetSafeID(objSchoolInfo("EOID"), Null)
	strFuncTypeID = GetSafeID(objSchoolInfo("FUNCTIONALITYTYPEID"), Null)
End Sub

Sub DrawFuncTypes(strForm)
End Sub

Sub DrawPoolSchools(strForm)
	DrawTitleRow obLanguage("PoolStudents","kPoolSchool"), strEoName%>
	<input type="hidden" name="POOLSCHOOL" value="<%=strPoolSchoolID%>">
	<input type="hidden" name="FUNCTYPE" value="<%=strFuncTypeID%>"><%
End Sub

Sub DrawFiltersSpecial(strForm)
	Dim arr

	' #21872
	arr = Array("1", obLanguage("PoolStudents","kOut"), "6", obLanguage("PoolStudents","kGraduation"))
	Call DrawSimpleFilterRow(obLanguage("PoolStudents","kAccessCategory"), "ViewType", arr, nViewType, Null, "changeView()")
End Sub
%>