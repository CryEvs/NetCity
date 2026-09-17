<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanCmn.asp -->
<!-- #INCLUDE FILE=Classic_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objSubjectGroupsCountsRs, objClassesRs

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCuriculumPlan
 End Function

Sub ReadStateSpecial()
	Call obTokenMgr.SetData(strToken, stIsIUPCuriculum, False)
End Sub

Sub SpecialMain()
	Set objComponentListAll = objNSNET.GetComponentList(strCurrYearId)
	Set objClassesRs = objNSNET.GetYearClasses_2(strCurrYearId)
	Set objSubjectGroupsCountsRs = objNSNET.GetClassSubjectGroupsCounts(strCurrYearId)
	objSubjectGroupsCountsRs.Filter = "sg_cnt > 1"

	Set objCuriculum = objNSNET.GetCurriculumStat(strCurrYearId, strSchoolId, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExist(strTermID)
	bIsSubjectExists = objNSNET.DoesSubjectExist(strTermID)
End Sub

Sub onHeadSpecial()
	%><script>
		var specificOptions = {
			getPlanObjectName: function(planObject){ 
				return "<%=obLanguage("SetupSchoolCurPlan","kConf_PlanGreaterLimit_4",strFunctionalityType)%> <b>" + planObject.className + "</b>"; 
			}
		};
		var modelExt = {
			sgClassesCnt: <%=comHelper.DataSetAdapterHelper.ToJSON(objSubjectGroupsCountsRs, Array("classid", "subjectid", "cnt"), Array("PCLASSID", "SUBJECTID", "sg_cnt")) %>,
			classes: _.indexBy(<%=comHelper.DataSetAdapterHelper.ToJSON(objClassesRs, Array("classId", "grade", "className")) %>, "classId"),
			components: <%=comHelper.DataSetAdapterHelper.ToJSON(objComponentListAll, Array("componentId", "componentName")) %>
		};
	</script><%
	objComponentListAll.MoveFirst
End Sub

Sub DrawCuriculumView(strForm)
	Call DrawSimpleFilterRow(obLanguage("Common","kView"), "Curiculum_View", Array( _
			1, obLanguage("SetupSchoolCurPlan","kPlanViewByClasses",strFunctionalityType), _
			0, obLanguage("SetupSchoolCurPlan","kPlanViewByGrades",strFunctionalityType)), _
			nCuriculum_View, False, "OnChangeSelect('" & strForm & "','CuriculumPlan.asp')")
End Sub
%>
