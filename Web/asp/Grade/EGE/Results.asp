<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/EGE/EGE_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

DIm objView, arrResultRows
Dim bAll, nGlobalYearId

Function hasUserRightsOnPage()
	hasUserRightsOnPage = False
	bAll = HasUserRight(arBrowseResultsEGEAllClasses)
	If HasUserRight(arBrowseResultsEGEAllClasses) Then hasUserRightsOnPage = True : Exit Function
	If HasUserRight(arBrowseResultsEGEHisClassesOrSubjects) Then hasUserRightsOnPage = True : Exit Function
	If HasUserRole(rlParent) Or HasUserRole(rlStudent) Then hasUserRightsOnPage = True : Exit Function
	If bIsEMForSchool Then hasUserRightsOnPage = True
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EGE","kEGEResults")
End Function

Function GetPageMenuItem()
	If bIsStaff Then
		GetPageMenuItem = MenuItem_miTotalAttestat
	Else
		GetPageMenuItem = MenuItem_miStudentDiary
	End If
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbEgeResults
 End Function

Sub ReadState()
	Call InitEgeComponent()
	If bIsStaff Then 
		nEgeSubjectId = GetSafeLng(Request("EGE_SUBJECTID"), -1)
		nEgeClassId = GetSafeLng(Request("EGE_CLASSID"), -1)
		If nEgeSubjectId <> -1 And nEgeClassId <> -1 Then
			If Not objEgeComponent.IsSafeEgeSubjectId(nEgeClassId, nEgeSubjectId) Then
				nEgeSubjectId = -1
			End If
		End If
	ElseIf HasUserRole(rlParent) Then
		strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
		Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false)
		If strStudentID = "0" AND Not rsStudents.EOF Then strStudentID = GetSafeID(rsStudents("STUDENTID"),"0")
	Else
		strStudentID = strUserID
	End If
End Sub

Sub WriteState()
End Sub

Sub Main()
	Dim objYearInfo
	Set objYearInfo = objNSNET.GetYearInfo(strCurrYearId)
	nGlobalYearId = CLng(objYearInfo("GLOBALYEARID"))
	If bIsStaff Then
		If bAll Then 
			arrEgeClasses = objEgeComponent.GetSchoolEgeClassesAll(strCurrYearId)
			arrEgeSubjects = objEgeComponent.GetSchoolEgeSubjects(strCurrYearId, nEgeClassId)
			Set objView = objEgeComponent.GetSchoolResultsView(strCurrYearId, nEgeClassId, nEgeSubjectId)
			arrResultRows = objView.Rows
		Else
			arrEgeClasses = objEgeComponent.GetEgeClassListForTeacherAndChief(strUserID, strSchoolYearID)
			arrEgeSubjects = objEgeComponent.GetEgeSubjectsListForTeacherEgeClass(strUserID, strSchoolYearID, nEgeClassId)
			arrResultRows = objEgeComponent.GetTeacherResultsView(strCurrYearId, strUserID, nEgeClassId, nEgeSubjectId)
		End If
	Else
		arrResultRows = objEgeComponent.GetStudentResultsView(strCurrYearId, strStudentID)
	End If
End Sub

Sub onHead()%>
	<style>
		.monos {
			font-family: Consolas, DejaVu Sans Mono, Liberation Mono, Lucida Console, Courier New, Batang, Gulim, Dotum;
			font-size: 12px;
		}
	</style>

	<script>
		function goEgePersons() {
			DoSubmit( document.Results, "Persons.asp");
		}
	</script><%
End Sub

Sub onDrawPage()%>
	<form name="Results" method="post" action="Results.asp">
		<%=WriteObligatoryTags()%><%

		Call DrawButtonsFilters(True, "Results")
		Call DrawEgeResults()%>
	</form><%
End Sub

Sub DrawEgeResults()
	If bIsStaff And bAll Then
		If objView.UnrelatedPersonsExists Then
			Call DrawWarning(obLanguage("EGE","kWrnExistsUnknownEgePersons"))
		End If
	End If

	Call DrawEgeResultsTable(arrResultRows)
End Sub

Sub DrawLinkButtons()
	If Not bIsStaff Then Exit Sub

	If Not HasUserRole(rlAdmin) And Not HasUserRole(rlPrincipal) Then Exit Sub
	Call Button("goEgePersons()", obLanguage("EGE","kEgePersons"), obLanguage("EGE","kEgePersons"), Null)
End Sub

Sub DrawFilters(strForm)
	IF bIsStaff Then
		Call DrawEnumFilterRow("Results", obLanguage("Common","kClass", strFunctionalityType), "EGE_CLASSID", arrEgeClasses, nEgeClassId, obLanguage("Common","kAll"))
		Call DrawEnumFilterRow("Results", obLanguage("Common","kSubject"), "EGE_SUBJECTID", arrEgeSubjects, nEgeSubjectId, obLanguage("Common","kAll"))
	ElseIf HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents
	End If
End Sub%>