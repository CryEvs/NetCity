<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
	Dim xlsBytes, userId, assignmentId, testPlanId, requestData
	Dim objTestPlanComponent, importResult, checkResult, nSubjectId, parseAndCheckResult
	Dim result, resRequestParsing, objUploadComponent, nSGID
	Dim nSidFipi, nGrade, nGlobalYearId

	Set objUploadComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUploadComponent")
	
	Set resRequestParsing = objUploadComponent.ParseRequest()
	Set objUploadComponent = Nothing

	If Not resRequestParsing.IsSuccess Then
		Call Dispose()
		GenerateError obLanguage("Common", "kUnexpErr")
	End If
	
	Set requestData = resRequestParsing.Data

	xlsBytes = requestData("file").Param.Bytes
	userId = GetSafeLng(requestData("USERID").Param.Value, -1)
	assignmentId = GetSafeLng(requestData("ASSIGNMENTID").Param.Value, -1)
	testPlanId = GetSafeLng(requestData("TESTPLANID").Param.Value, -1)
	nSGID = GetSafeLng(requestData("SGID").Param.Value, -1)

	nSubjectId = obTokenMgr.GetData(strToken, stCurrSubject)
	strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)

	nSidFipi = PGet("SID")
	nGrade = PGet("GRADE")
	nGlobalYearId = PGet("GLOBALYEARID")
	
	Set objTestPlanComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
	TestError obLanguage("QualityAssessment", "kCantCreateObjTestPlan")
	
	Set parseAndCheckResult = objTestPlanComponent.ParseAndCheckTestPlan(xlsBytes, nSGID, nSubjectId, strSchoolYearId, assignmentId, nGlobalYearId, nGrade, nSidFipi)
	TestResult parseAndCheckResult, Null
	
	Set result = new JSONResult
	If parseAndCheckResult.Data.WithWarning Then
		Call result.AddData("showWarnings", True)
		Call result.AddData("warnings", parseAndCheckResult.Data.Warnings)
		Call result.AddData("confirms", parseAndCheckResult.Data.Confirmations)

		Call obTokenMgr.SetData(strToken, "USERID", userId)
		Call obTokenMgr.SetData(strToken, "ASSIGNMENTID", assignmentId)
		Call obTokenMgr.SetData(strToken, "SUBJECTID", nSubjectId)
		Call obTokenMgr.SetData(strToken, "SGID", nSGID)
		Call obTokenMgr.SetData(strToken, "IMPRES", parseAndCheckResult.Data)
	Else
		Set importResult = objTestPlanComponent.ImportTestPlan(userId, assignmentId, parseAndCheckResult.Data, strSchoolYearId, nSubjectId, nSGID, testPlanId, nGlobalYearId, nGrade, nSidFipi)
		TestResult importResult, obLanguage("QualityAssessment", "kCantImportTestPlan")
		Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("QualityAssessment", "kImportTestPlanSuccess")))
	End If
	
	Set importResult = Nothing
	Set objTestPlanComponent = Nothing

	Response.Write result

	Function PGet(name)
		PGet =  GetSafeLng(requestData(name).Param.Value, -1)
	End Function
%>
