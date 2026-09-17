<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjGroups.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strClassName, objStudsRs, objStudsNotAssToGroupsRs
Dim bEmpty 'empty student list
Dim strTermID, bNotAssigned

Function GetPageTitle()
	GetPageTitle = obLanguage("ClassManagement","kTitleEnrollmentGroup",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbEnrlClass
 End Function

Function hasUserRightsOnPage()
	If HasUserRight( arClassMgmViewClassSubjAll ) Then hasUserRightsOnPage = True : Exit Function
	hasUserRightsOnPage = HasUserRight(arClassMgmEnrollClass)
End Function

Sub ReadState()
	' clear all parameters
	bEmpty = True
	bGroupEmpty = False

	strClassID_IUP = GetSafeStr(Request("PCLID_IUP"), -1, Null)
	Call InitIUPClassID(strClassID_IUP)

	strTermID= GetSafeID(Request("TERMID"), Null)

	Call InitSubjectsWithGroups_IUP(False, strTermID)
	If strSubjectID = "0" Then Exit Sub

	If bIsIupGrade Then
		strCSGID = GetSafeID(Request("ID"), "0")
		Call InitIupLevelsForTermGradeSubj(strTermID, strIupGrade, strSubjectID, (strCSGID = "-1"))
		' Здесь должен быть strIupLevelID <> "0", иначе InitSubjectsWithGroups_IUP вернул бы strSubjectID = "0"
	End If

	Call InitClassSubjectsGroups_IUP()
	bNotAssigned = (strCSGID = "-1")
End Sub

Sub Main
	Set objStudsNotAssToGroupsRs = Nothing
	If strSubjectID <> "0" Then
		' get students for defined class/subject/group
		If bNotAssigned Then
			If bIsIupGrade Then
				Set objStudsRs = objNSNET.GetStudentListNotAssToSubjectGroups_IUP(strIupGrade, strSubjectID, strIupLevelID, strTermID)
			Else
				Set objStudsRs = objNSNET.GetStudentListNotAssToSubjectGroups(strClassID, strSubjectID, strTermID)
			End If
		Else
			Set objStudsRs = objNSNET.GetStudentListForSubjectGroup(strCSGID, strTermID)
		End If
		bEmpty = objStudsRs.EOF
	Else
		Set objStudsRs = Nothing
	End If
End Sub

Sub onHead()
%>
<script>
<!--
var bReloadPage = false;
function OnChangeSelect(sFormName, sAction) <%'This function overwrited for Subject and Group changing%>
{
	bReloadPage = true;
	ok(sFormName, sAction);
}
function Back() {
	DoSubmit( document.EnrollmentGroup, "Enrollment.asp" );
}
//-->
</script>
<%
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	If bIsIupGrade Then
		DrawTitleRow obLanguage("Movement","kExGrade"), strIupGrade
	Else
		DrawTitleRow obLanguage("Common","kClass",strFunctionalityType), objNSNET.GetClassName(strClassID)
	End If
	DrawTitleRow obLanguage("Common","kPeriod"), objNSNET.GetTermName(strTermID)
	Call DrawSubjects_Ex( strForm, obLanguage("Filter","kNoClassSubjectsWithGroups",strFunctionalityType), False ) 
	If bExit Then Exit Sub

	If bIsIupGrade Then
		Call DrawIupLevels(strForm, bNotAssigned)
	End If

	Call DrawClassSubjectGroups(strForm)
End Sub

Sub DrawStudentList(strTableWidth, strTableTitle, strTableFooter, objRs)
	Dim nCount
	nCount = 0%>
	<table class="table table-condensed table-bright-striped table-thin table-hover table-xs">
	<tr><th width="5%"><%=obLanguage("Filter","kN_PP")%></th><th><%=strTableTitle%></th></tr><%
	While Not objRs.EOF
		nCount = nCount + 1
		%><tr><td class="text-right"><%=nCount%></td><td><%=DB2HTML(objRs("NAME"))%></td></tr><%
		objRs.MoveNext
	Wend
	%></table><%
End Sub

Sub DrawStudents()
	Dim strTableWidth

	strTableWidth = "45%"
	If bEmpty Then
		strTableWidth = "60%"
		DrawInfo IIf(bNotAssigned, obLanguage("Common","kNoDataForFilter"), obLanguage("ClassManagement","kNoStudentsInGroup",strFunctionalityType)), False
	Else
		Call DrawStudentList(strTableWidth, obLanguage("Common","kStudents",strFunctionalityType), obLanguage("ClassManagement","kTotalEnroll") &":", objStudsRs)
	End If
End Sub

Sub onDrawPage()
	%><form NAME="EnrollmentGroup" METHOD="post" ACTION="EnrollmentGroup.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("PCLID_IUP", strClassID_IUP, "TERMID", strTermID, "SUBJNAME", "") )%>
	<%Call DrawButtonsFilters(False, "EnrollmentGroup")

	If Not bExit Then 
		Call DrawStudents()
	End If
	%></form><%
End Sub
%>
