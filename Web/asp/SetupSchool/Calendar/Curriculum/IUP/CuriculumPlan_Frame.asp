<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmn_Frame.asp -->
<!-- #INCLUDE FILE=IUP_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub SpecialMain()
	Set objCuriculum = objNSNET.GetCurriculumStatIUP(strCurrYearId, strTermID, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExistIUP(strTermID)
	bIsSubjectExists = objNSNET.DoesSubjectExistIUP(strTermID)

	nOldCompIDCompare = -1
End Sub

Sub OnNewComponent()
	Set objSubjectFields = objNSNET.GetSubjectFieldsIUP(strTermID, strCompID, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))

	If strOldCompID<>-1 Then Call fillEnd()
	If (strOldCompID=0) And bIsSubjectExists Then Call Total( 0 )
	arrIsAvailableColumn = GetAvailableColumnsIUP( Empty, arrCuriculumGrades, nPCount, strCurrYearID, strCompID )

	strComponentName = DB2HTML_BR(CStr(objCuriculum("COMPONENTNAME")))
	strSubjName = DB2HTML_BR(CStr(objCuriculum("SUBJECTNAME")))

	%><tr class="<%=IIF(strOldCompID<>-1, "component-row", "total-row") %>">
	<td class="text-compact" <%If Not objSubjectFields.EOF Then%> rowspan="2"<%End If%>>
		<b><%=strComponentName%></b>
		</td>
	<td class="text-compact"><b><%=strSubjName%></b></td><%
End Sub

Sub PrepareTotalData()
	Set objRsTotal = objNSNET.GetCurriculumPlanIUP(strTermID, nFilterGradeMin, nFilterGradeMax)
End Sub
%>
