<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Const MaxSubjNameSize = 100
Const MaxShortNameSize = 70

Dim strSubjectID, strSubjectName, nGlobalSubjectID, strSubjectAbbr, nSubjectFieldID
Dim i, nRes, arrSubjects, strAction, bCreateNewGlobalSubject
Dim nCodeBookGradeSchoolId, nCodeBookEGEId, nCodeBookOGEId, nPrevCodeBookGradeSchoolId, nPrevCodeBookEGEId, nPrevCodeBookOGEId
Dim objQAComponent
	
If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
strSubjectID = GetSafeID(Request("SBJID"), "0")
strAction = Request("ACT")
Call obTokenMgr.SetData(strToken, "EditSubjectAct", strAction)

nCodeBookGradeSchoolId = GetSafeID(Request("CODEBOOKGRADESCHOOLID"), 0)
nCodeBookEGEId = GetSafeID(Request("CODEBOOKEGEID"), 0)
nCodeBookOGEId = GetSafeID(Request("CODEBOOKOGEID"), 0)
nPrevCodeBookGradeSchoolId = CLng(GetSafeID(Request("PREVCODEBOOKGRADESCHOOLID"), 0))
nPrevCodeBookEGEId = CLng(GetSafeID(Request("PREVCODEBOOKEGEID"), 0))
nPrevCodeBookOGEId = CLng(GetSafeID(Request("PREVCODEBOOKOGEID"), 0))

strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)
	
If Request("SUBJS").Count > 0 Then 'remove
	ReDim arrSubjects(Request("SUBJS").Count-1)
	For i = 0 To UBound(arrSubjects)
		arrSubjects(i) = GetSafeID(Request("SUBJS")(i+1), NULL)
	Next
	Call objNSNET.RemoveSubjects(arrSubjects)
	TestError obLanguage("SetupSchoolCalendar","kCantRemoveSubject")
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kWasRemoved")))
Else
	If strSubjectID = "0" Then 'If strAction = "new"
		strSubjectName = Trim( GetSafeStr( Request("SUBJECTNAME"), MaxSubjNameSize, NULL ) )
		strSubjectAbbr = Trim( GetSafeStr( Request("SUBJECTABBREV"), MaxShortNameSize, NULL ) )
		nGlobalSubjectID = GetSafeID(Request("GLOBALSUBJID"), 0)
		nSubjectFieldID = GetSafeID(Request("SBJFIELDID"), -1)

		bCreateNewGlobalSubject = Not IsDull(Request("newGlobalSubject"))
		nGlobalSubjectID = IIF(bCreateNewGlobalSubject, 0, nGlobalSubjectID)
		
		nRes = objNSNET.CreateSubject(strSchoolID, strSubjectName, strSubjectAbbr, nSubjectFieldID, nGlobalSubjectID)
		TestError obLanguage("SetupSchoolCalendar", "kCantCreateNewSubject")

		Call objQAComponent.BindSubjectAndCodeBook(nCodeBookGradeSchoolId, nRes, strCurrYearID, nPrevCodeBookGradeSchoolId)
		TestError obLanguage("QualityAssessment","kBindSubjectAndCodeBookError")

		Call objQAComponent.BindSubjectAndCodeBook(nCodeBookEGEId, nRes, strCurrYearID, nPrevCodeBookEGEId)
		TestError obLanguage("QualityAssessment","kBindSubjectAndCodeBookError")
		
		Call objQAComponent.BindSubjectAndCodeBook(nCodeBookOGEId, nRes, strCurrYearID, nPrevCodeBookOGEId)
		TestError obLanguage("QualityAssessment","kBindSubjectAndCodeBookError")
		
		strAction = "edit"
	
		If Err.Number = 0 Then
			Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kSuccessCreateNewSubject")))
		End If
	Else 'if strAction = "edit"
		strSubjectName = Trim( GetSafeStr(Request("SUBJECTNAME"), MaxSubjNameSize, NULL))
		strSubjectAbbr = Trim( GetSafeStr(Request("SUBJECTABBREV"), MaxShortNameSize, NULL))
		nGlobalSubjectID = GetSafeID(Request("GLOBALSUBJID"), 0)
		nSubjectFieldID = GetSafeID(Request("SBJFIELDID"), -1)

		bCreateNewGlobalSubject = Not IsDull(Request("newGlobalSubject"))
		nGlobalSubjectID = IIF(bCreateNewGlobalSubject, 0, nGlobalSubjectID)

		nRes = objNSNET.EditSubject(strSchoolID, strSubjectID, strSubjectName, strSubjectAbbr, nSubjectFieldID, nGlobalSubjectID)

		TestError obLanguage("SetupSchoolCalendar", "kCantChangeSubjects")
		
		Call objQAComponent.BindSubjectAndCodeBook(nCodeBookGradeSchoolId, strSubjectID, strCurrYearID, nPrevCodeBookGradeSchoolId)
		TestError obLanguage("QualityAssessment","kBindSubjectAndCodeBookError")
		
		Call objQAComponent.BindSubjectAndCodeBook(nCodeBookEGEId, strSubjectID, strCurrYearID, nPrevCodeBookEGEId)
		TestError obLanguage("QualityAssessment","kBindSubjectAndCodeBookError")
		
		Call objQAComponent.BindSubjectAndCodeBook(nCodeBookOGEId, strSubjectID, strCurrYearID, nPrevCodeBookOGEId)
		TestError obLanguage("QualityAssessment","kBindSubjectAndCodeBookError")
		
		If Err.Number = 0 Then
			Call WriteJsonResult(CStr(obLanguage("SetupSchoolCalendar","kSuccessChangeSubject")), False, 0)
		End If
	End If
End If

RedirectTo GetSafeStr(Request("BackPage"), -1, "SchoolSubjects.asp") & "?", Array("SBJID", nRes, "ACT", strAction)%>