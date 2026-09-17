<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmn.asp -->
<!-- #INCLUDE FILE=IUP_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbIUP
 End Function

Sub ReadStateSpecial()
	Call obTokenMgr.SetData(strToken, stIsIUPCuriculum, True)
End Sub

Sub SpecialMain()
	Set objComponentListAll = objNSNET.GetComponentListIUP(strCurrYearId)
	Set objCuriculum = objNSNET.GetCurriculumStatIUP(strCurrYearId, strTermID, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExistIUP(strTermID)
	bIsSubjectExists = objNSNET.DoesSubjectExistIUP(strTermID)
End Sub

Function GetIupLevelsArr
	Dim i, arrGradeIupLevels, gradeIupLevelInfo
	Dim arrIupLevelsWithIds
	Dim test
	For i = 0 To Ubound(arrClasses, 1)
		If Not IsEmpty(arrClasses(i, 0)) Then
			arrGradeIupLevels = comHelper.ArrayHelper.TwoDimensionToKeyValues(arrClasses(i, 0), Array("classId", "shortName", "levelName"))
			Set test = arrGradeIupLevels(0)
			For Each gradeIupLevelInfo In arrGradeIupLevels
				gradeIupLevelInfo("gradeId") = arrClasses(i, 2)
			Next
			If IsEmpty(arrIupLevelsWithIds) Then
				arrIupLevelsWithIds = arrGradeIupLevels
			Else
				 Call comHelper.ArrayHelper.AppendArray(arrIupLevelsWithIds, arrGradeIupLevels)
			End If
		End If
	Next

	GetIupLevelsArr = arrIupLevelsWithIds
End Function

Sub DrawSpecificLegend()
	If IsObject(dctInvalidIUPGrades) Then
		If dctInvalidIUPGrades.Count > 0 Then
			%>
			<div>
				<p><span class="legend-label legend-iup-no-classes"></span><span class="legend-description"> — <%=obLanguage("SetupSchoolCurPlan","kNoIUPClassesForGradeAndTermType",strFunctionalityType)%></span></p>
			</div>
			<%
		End If
	End If
End Sub

Sub onHeadSpecial()
	%><script>
		var specificOptions = {
			prepareClassId: function(rawClassId) {
				return rawClassId + "";
			},
			getPlanObjectName: function(planObject){ 
				return "\n<%=obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)%>: <b>" + planObject.gradeId + "</b>\n<%=obLanguage("Curriculum","kIupLevel")%>: <b>" + planObject.levelName + "</b>"; 
			}
		}
		<%If Not IsEmpty(arrClasses) Then %>
		var modelExt = {
			classes: _.indexBy(<%=comHelper.JsonHelper.SerializeObject(GetIupLevelsArr()) %>, "classId"),
		};
		<%End If %>
	</script><%
End Sub

Sub DrawCuriculumView(strForm)
End Sub

%>
