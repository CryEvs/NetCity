<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmn_Frame.asp -->
<!-- #INCLUDE FILE=Classic_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub SpecialMain()
	Set objCuriculum = objNSNET.GetCurriculumStat(strCurrYearId, strSchoolID, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExist(strTermID)
	bIsSubjectExists = objNSNET.DoesSubjectExist(strTermID)

	nOldCompIDCompare = 0
End Sub

Sub OnNewComponent()
	Set objSubjectFields = objNSNET.GetSubjectFields(strTermID, strCompID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID, (nCuriculum_SubjGroups=0))

	If strOldCompID<>-1 Then Call fillEnd()
	If (strOldCompID=0) And bIsSubjectExists Then Call Total( 0 )
	arrIsAvailableColumn = GetAvailableColumns( Empty, arrCuriculumGrades, nPCount, strCurrYearID, strCompID )

	strComponentName = DB2HTML_BR(CStr(objCuriculum("COMPONENTNAME")))
	strSubjName = DB2HTML_BR(CStr(objCuriculum("SUBJECTNAME")))
	
	%><tr class="<%=IIF(strOldCompID<>-1, "component-row", "total-row") %>">
	<td class="text-compact" <%If ((strOldCompID=-1) And bIsSubjectExists) Or (Not objSubjectFields.EOF) Then%> rowspan="2"<%End If%>>
		<b><%=strComponentName%><%If strOldCompID <>-1 Then%>&nbsp;<%=obLanguage("SetupSchoolCurPlan","kComponentSmall")%><%End If%></b>
	</td>
	<td class="text-compact"><b><%=strSubjName%></b></td><%
End Sub

Sub PrepareTotalData()
	Set objRsTotal = objNSNET.GetCurriculumPlan(strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)
End Sub
%>
