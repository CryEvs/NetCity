<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
	Dim nSubjectId, nSGID, nTestPlanId, assignmentId
	Dim objTestPlanComponent, objDownloadComponent, exportResult, transferResult
	Dim nGrade, nGlobalYearId
	
	nSubjectId = obTokenMgr.GetData(strToken, stCurrSubject)

	if nSubjectId = Empty Then 
		nSubjectId = GetSafeLng(Request("SID"), nSubjectId) 
	End if

	nGrade = GetSafeLng(Request("GRADE"), -1)
	nGlobalYearId = GetSafeLng(Request("GLOBALYEARID"), -1)

	nSGID = GetSafeLng(Request("SGID"), 0)
	nTestPlanId = GetSafeLng(Request("TESTPLANID"), 0)
	assignmentId = GetSafeLng(Request("ASSIGNMENTID"), -1)

	strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)

	Set objTestPlanComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
	Set exportResult = objTestPlanComponent.ExportTestPlan(nSubjectId, strCurrYearID, nTestPlanId, nSGID, assignmentId, nGrade, nGlobalYearId)
	
	TestError obLanguage("Curriculum", "kCantExportVariant")

	Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
	Set transferResult = objDownloadComponent.TransferData(exportResult.Data, obLanguage("QualityAssessment", "kTestPlan") & ".xls" )
	Call obComponentMgr.ReleaseComponent(objDownloadComponent)

	If Not transferResult.IsSuccess Then
		GenerateError transferResult.Message
	End If


	Set exportResult = Nothing
	Set objDownloadComponent = Nothing

	TestError obLanguage("Common", "kLoadError")
%>