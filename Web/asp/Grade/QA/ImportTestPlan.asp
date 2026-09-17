<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
	Dim parseAndCheckResult, assignmentId, userId, importResult, objTestPlanComponent, nSubjectId, nSGID
	Dim nSidFipi, nGrade, nGlobalYearId, nTestPlanId
	
	userId =  obTokenMgr.GetData(strToken, "USERID")
	assignmentId = obTokenMgr.GetData(strToken, "ASSIGNMENTID")
	nSubjectId =  obTokenMgr.GetData(strToken, "SUBJECTID")
	nSGID =  obTokenMgr.GetData(strToken, "SGID")

	nSidFipi = GetSafeLng(Request("SID"), nSubjectId) 
	nGrade = GetSafeLng(Request("GRADE"), -1)
	nGlobalYearId = GetSafeLng(Request("GLOBALYEARID"), -1)
	nTestPlanId = GetSafeLng(Request("TESTPLANID"), 0)
	
	Set parseAndCheckResult = obTokenMgr.GetData(strToken, "IMPRES")
	If Not IsObject(parseAndCheckResult) Then
		GenerateError "Не получен объект проверки импортируемого файла тест плана."
	End If
	
	Set objTestPlanComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
	TestError obLanguage("QualityAssessment", "kCantCreateObjTestPlan")

	Set importResult = objTestPlanComponent.ImportTestPlan(userId, assignmentId, parseAndCheckResult, strSchoolYearId, nSubjectId, nSGID, nTestPlanId, nGlobalYearId, nGrade, nSidFipi)
	TestResult importResult, obLanguage("QualityAssessment", "kCantImportTestPlan")

	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("QualityAssessment", "kImportTestPlanSuccess")))
	WriteJsonResult obLanguage("QualityAssessment", "kImportTestPlanSuccess"), False, 0%>