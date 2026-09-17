<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/MarkTKR_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/populate.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
'	SID=<Students IDs>
'	G{studentID}=<Grade for Student>

Dim transaction
Dim strBackPage
Dim nClassMeetingId, nNewAssignmentID, strNewAssignmentName
Dim nSubjectGroupId, nLessonId, bSaveJournal
Dim bTKR, nDwVariantId, nDwTestPlanId

strBackPage = GetSafeStr( Request("BACK"), 200, "Journal.asp" )
bTKR = (CLng(Request("TKRAssign")) = 1)
nSubjectGroupId = GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubjClass), Null)
nClassMeetingId = GetSafeLng( Request("CMID"), NULL )
nLessonId = GetSafeLng(Request("LESSONID"), -1)
bSaveJournal = CBool(GetSafeLng(Request("bSaveJournal"), 0))



On Error Resume Next
Call Main()

If IsEmpty(transaction) Then
	TestError obLanguage("Common","kUnexpErr")
Else
	TestErrorWithTransaction transaction, obLanguage("Common","kUnexpErr")
End If

If bIsAjaxCall Then
	Dim result
	Set result = new JSONResult
	If nNewAssignmentID > 0 Then
		Call result.AddData("assignmentId", nNewAssignmentID)
		Call result.AddData("assignmentName", strNewAssignmentName)
	End If
	Response.Write result
Else
	RedirectTo strBackPage & "?", Array("CMID", GetSafeLng( Request("CMID"), 0 ))
End If

Sub Main()
	Dim bNewAssignment
	Dim arrData, arrAssigns, nAssignCnt, arrDKRAssigns
	Dim dtCurTime
	Dim strSgTermAccess
	Dim nMarkType, bCreateAssignment
	If Not HasUserRight(arJournalEditSelf) And Not HasUserRight(arJournalEditAll) Then 
		GenerateError obLanguage("Common","kErrPageAccess")
	End If

	On Error Resume Next
	strSgTermAccess = obTokenMgr.GetData(strToken, stAvailableSGTERMID)
	If IsDull(strSgTermAccess) Then 
		GenerateError obLanguage("Common","kNoAccess")
	End If
	If InStr(strSgTermAccess, nSubjectGroupId & "|") = 0 Then
		GenerateErrorWithTransaction transaction, obLanguage("Common","kNoAccess")
	End If

	bNewAssignment = (CStr(Request("RegimeAddAssign")) = "1")

	' #14330. Вынес вверх перед открытием транзакции, повторил условия.
	If Request.Form("SID").Count > 0 Then
		If bSaveJournal or bNewAssignment Then
			Call BindRequest(nAssignCnt, arrData, arrAssigns, arrDKRAssigns)
			TestError obLanguage("Grade","kErrSaveGrades")
		End If
	End If

	transaction = objNSNET.GetTransaction()

	If bNewAssignment Then
		Call CreateNewAssignement()
	End If

	dtCurTime = NSNow()
	If Request.Form("SID").Count > 0 Then
		If bSaveJournal or bNewAssignment Then
			
			Call objNSNET.SaveStudentsResults_WT(transaction, nSubjectGroupId, dtCurTime, nClassMeetingId, arrData, arrAssigns, true, strSchoolID, arrDKRAssigns)
			TestErrorWithTransaction transaction,obLanguage("Grade","kErrSaveGrades")
			
			Call EditManualClassAssignment(nAssignCnt, arrAssigns)
			TestErrorWithTransaction transaction,obLanguage("Grade","kErrSaveGrades")
		End If
	End If
	
	Call BindLesson()

	objNSNET.CommitTransaction(transaction)
	transaction = Empty
End Sub

Sub BindLesson()
	Dim arr

	If nLessonId <> -1 Then
		arr = convert1Dto2D(Array(nClassMeetingId, nLessonId))
		Call objNSNET.SaveClassMeetingLessons_WT(transaction, arr)
		TestErrorWithTransaction transaction, obLanguage("Grade","kErrCantChangeLesson")
	End If
End Sub

Sub CreateNewAssignement()
	Dim nAssignmentType, nClassAssignment, dtAssignmentDate
	Dim arrData, arrStudents

	On Error Resume Next

	strNewAssignmentName = Trim(GetSafeStr(Request("AN"), kAssignmentNameLength, Null))
	nAssignmentType = GetSafeLng(Request("AType"), Null)
	nDwTestPlanId = GetSafeLng(Request("dwTestPlanId"), -1)
	nDwVariantId = GetSafeLng(Request("dwVariantId"), -1)

	dtAssignmentDate = GetSafeDate(obTokenMgr.GetData(strToken, stAssignmentDate), Null)
	nClassAssignment = 1 ' По умолчанию, создаем задание с необязательной оценкой
	ReDim arrStudents(-1)
	
	nNewAssignmentID = objNSNET.CreateManualAssignment_WT(transaction, kActivityID_Manual, strNewAssignmentName, _
			nAssignmentType, kIsTKR, "", dtAssignmentDate, dtAssignmentDate, _
			nClassMeetingId, nSubjectGroupId, _
			nClassAssignment, arrStudents, strSchoolId, nDwTestPlanId, nDwVariantId)
	TestErrorWithTransaction transaction, obLanguage("Grade","kErrCreateAssignment")
End Sub

Sub BindRequest(ByRef nAssignCnt, ByRef arrData, ByRef arrAssigns, ByRef arrDKRAssigns)
	Dim strStudentID, strGrade, i, j, strReason, bTKR
	Dim strReasons, arrReasons
	Dim strAID, nDKRAssignCnt
	Dim gradeComponent, gradingManager

	Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	Set gradingManager = gradeComponent.GetGradingManager(strCurrYearId, nSubjectGroupId)

	Call gradingManager.PrepareForClassmeeting(nClassMeetingId)

	nAssignCnt = Request("AID").Count
	ReDim arrAssigns(nAssignCnt - 1)
	For i = 0 To nAssignCnt - 1
		arrAssigns(i) = GetSafeLng(Request("AID")(i+1), Null)
	Next

	nDKRAssignCnt = Request("DKRAID").Count
	If nDKRAssignCnt > 0 Then
		ReDim arrDKRAssigns(nDKRAssignCnt - 1)
		For i = 0 To nDKRAssignCnt - 1
			arrDKRAssigns(i) = GetSafeLng(Request("DKRAID")(i+1), Null)
		Next
	End If

	If kIsTKR Then Call GetMarkTypes_TKR()

	ReDim arrData(1 + nAssignCnt, Request.Form("SID").Count-1)
	' arrData(0, i) - StudentID
	' arrData(1, i) - mark for AID_1
	' arrData(2, i) - mark for AID_2
	' ...
	' arrData(N-1, i) - mark for AID last
	' arrData(N, i) - reason

	strReasons = GetSafeStr(Request("Reason").Item,-1,"")
	If strReasons = "" Then ' Почему-то Split не хожет пустую строку сделать массивом из одного элемента, хотя другие значения делает.
		ReDim arrReasons(0)
		arrReasons(0) = strReasons
	Else
		arrReasons = Split(strReasons, ",")
	End If

	For i = 0 To UBound(arrData, 2)
		strStudentID = GetSafeLng(Request("SID")(i+1), Null)
		arrData(0, i) = strStudentID

		'*****************************************************************************
		' Marks ...
		For j = 0 To nAssignCnt - 1
			strAID = arrAssigns(j)
			bTKR = (Request("TKR_" & strAID) = strAID)

			strGrade = GetCurrMark(i + 1, strAID, strStudentID, bTKR, gradingManager)
			arrData(1 + j, i) = strGrade
		Next
		' Marks ...
		'*****************************************************************************
		strReason = Trim(arrReasons(i))
		If strReason <> "" Then
			arrData(nAssignCnt + 1, i) = strReason
		Else 
			arrData(nAssignCnt + 1, i) = Empty
		End If
	Next

	Set gradeComponent = Nothing
	Set gradingManager = Nothing
End Sub

Sub EditManualClassAssignment(nAssignCnt, arrAssigns)
	Dim j, nClassAssignment
		
	For j = 0 To nAssignCnt - 1
		nClassAssignment = 1
		If Request("M_" & arrAssigns(j)).Count > 0 Then nClassAssignment = 0 'Обязательная оценка
		Call objNSNET.EditManualClassAssignment_WT(transaction, arrAssigns(j), nClassAssignment)
	Next
End Sub

Function GetCurrMark(ind, strAID, strStudentID, bTKR, gradingManager)
	Dim strMark, nMarkType
	Dim lngMark
	strMark = GetSafeStr(Request("G_" & strAID)(ind), -1, "")

	If bTKR Then
		nMarkType = GetSafeLng(Request("MarkType_" & strAID)(ind), NULL)
		If nMarkType < 0 Then
			If -nMarkType > UBound(arrMarkTypes_TKR) Then nMarkType = 0
			strMark = nMarkType
		End If
	End If

	If strMark <> "" Then
		lngMark = GetSafeLng(strMark, Null)
		GetCurrMark = gradingManager.ThousandsPointScale(strAID, lngMark)
		TestErrorWithTransaction transaction, obLanguage("Grade","kErrIncorrectMark")
	ElseIf IsMandatory(strStudentID, strAID) Then 
		' still mandatory - set RESULT=NULL
		GetCurrMark = Null
	Else
		' remove old grade, if exists
		GetCurrMark = Empty
	End If
End Function

Function IsMandatory(strSID, strAID)
	Dim nCnt, strElName
	Dim ind

	IsMandatory = False
	strElName = "M_" & strAID
	nCnt = Request(strElName).Count
	For ind = 0 To nCnt - 1
		If CStr(Request(strElName)(ind+1)) = CStr(strSID) Then ' still mandatory - set RESULT=NULL
			IsMandatory = True
			Exit For
		End If
	Next
End Function
%>
