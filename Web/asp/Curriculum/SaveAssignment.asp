<!-- #INCLUDE FILE="../headernoscreen.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.
Const lngPossiblePoints = 100
Const kMaxAssignNameDB_189 = 389

Dim bJuniorLA
Dim strCMID, strIssueCMID
Dim strAssignmentID, strAssignmentDescr, strAssignmentName, nAssignmentType
Dim dtDueDate, dtStartDate, strSubjClassID
Dim blnIsManual, strAttachment
Dim strActivityName, bAll
Dim strBack, bReqMark
Dim nClassAssgn
Dim strProblemList, arrProblemList
Dim strStudentID
Dim strProblemName, strProblemParameters
Dim i, j, strSuffix, strAssignmentSuffix, strSpace, strClause
Dim strRIJ
Dim arrProblems, arrStudents
Dim bTKR, strBackPage
Dim transaction
Dim bIsHomeAssignment, nHALessonID, bIsDKRAssignment, bConsiderDKR
Dim strStudentIds, strDiagnosticWork
Dim strKTPAttachmentIds, strAttachmentIds, arrAttachmentIds
Dim bChangeKTP
Dim nWeight

Dim dtCurTime
Dim bExtraActivity


Set Request = Request.Form

bExtraActivity = (LCase(Request("extraActivity") & "") = "true")

bJuniorLA = Cbool(GetSafeStr(obTokenMgr.GetData(strToken, stJuniorLA), -1, "" ) <> "" )

strBack = GetSafeStr( Request("BACK"),200, CStr(obTokenMgr.GetData(strToken,stBackPage)) )
strActivityName		= GetSafeStr(obTokenMgr.GetData(strToken, stActName), -1, Null)
strSubjClassID		= GetSafeID(Request("CLID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubjClass), Null))
strAssignmentID		= GetSafeID(Request("AID"), GetSafeID(obTokenMgr.GetData(strToken, stCrMngmAssignmentID), Null))
strCMID				= GetSafeID(Request("CMID"), GetSafeID(obTokenMgr.GetData(strToken, stCrMngmCMID), Null))


If IsDull(strCMID) Then GenerateError "Нет доступа"

dtCurTime = NSNow()

nAssignmentType		= GetSafeLng(Request("AType"), 0)
bIsHomeAssignment	= (nAssignmentType = PreDefinedAssignmentType_HomeWork)
bIsDKRAssignment	= (nAssignmentType = PreDefinedAssignmentType_DKR)

If bIsHomeAssignment Then
	bChangeKTP			= GetSafeLng(Request("changeKTP"), 0) = 1
	nHALessonID			= GetSafeLng(Request("HALESSON"), 0)
	strKTPAttachmentIds	= GetSafeStr(Request("ktpAttachment"), -1, "")
	If Request("ISSUECMID").Count > 0 AND NOT IsDull(Request("ISSUECMID")) Then
	strIssueCMID		= GetSafeLng(Request("ISSUECMID"), Null)
	Else
		GenerateError(obLanguage("Grade", "kAssignmentIssueClassMeeting") & ", " & LCase(obLanguage("Common", "kUnselected")))
	End If

	blnIsManual			= True
Else
	blnIsManual			= CBool(Request("MN"))
End If

If bIsDKRAssignment Then
	bConsiderDKR		= (GetSafeLng(Request("CONSIDERDKR"), 0) = 1)
	strDiagnosticWork	= GetSafeStr(Request("DiagnosticWork"), -1, "-1_-1")
End If

strAssignmentName		= Trim(GetSafeStr(Request("AN"), kAssignmentNameLength, ""))
strAssignmentDescr		= GetSafeStr(Request("AD"), 2000, "")
strAttachmentIds		= GetSafeStr(Request("attachment"), -1, "")

dtStartDate		= GetSafeDate(Request("ADT"), null)
dtDueDate		= GetSafeDate(Request("DDT"), null)

strStudentIds	= GetSafeStr(Request("students"), -1, "")
bAll			= (GetSafeStr(Request("all_students"), -1, "1") <> "0")
bReqMark		= CBool(Request("ReqMark"))
nWeight			= Request("WEIGHT")
nClassAssgn		= ABS(CInt(Not bReqMark))
strRIJ			= GetSafeStr(Request("RIJ"), 1, "1")
If strRIJ = "0" Then strCMID = "0" 'do not record in journal
bTKR			= (nAssignmentType = PreDefinedAssignmentType_TKR)
	
If bReqMark Then
	If Not bAll Then
		arrStudents = Split(strStudentIds, ",")
	Else
		arrStudents = Empty
	End If
Else
	ReDim arrStudents(-1)
End If
If strAssignmentID <> "-1" Then
	' Edit assignment
	If Not blnIsManual Then
		strProblemName			= Trim(GetSafeStr(Request("PROBLEMNAME"), 200, NULL))
		strProblemParameters	= Trim(GetSafeStr(Request("PARAMETERS"), 4000, NULL))
			
		If strCMID = "0" Then
			CheckLADueDate()
		End If

		Call objNSNET.EditLAAssignment(strAssignmentID, strAssignmentName, _
			nAssignmentType, strAssignmentDescr, dtStartDate, dtDueDate, _
			strCMID, strSubjClassID, strProblemName, strProblemParameters, _
			strAttachmentIds, lngPossiblePoints, nClassAssgn, arrStudents, _
			IIF(strRIJ = "1", nWeight, -1), bConsiderDKR, strDiagnosticWork)
		TestError obLanguage("Curriculum","kCantEditAssignment")
	Else
		If Module_QA_Available() Then
			If Not objNSNET.CheckBindingAssignmentTestPlan(strAssignmentID, nAssignmentType) Then
				GenerateError(obLanguage("QualityAssessment", "kCantChangeAType"))
			End If
		End If

		transaction = objNSNET.GetTransaction()
		nClassAssgn = IIf(bTKR, 1, nClassAssgn)
			
		'Если изменяем ДЗ в КТП, с добавлением/изменением аттача
		arrAttachmentIds = objNSNET.SetLessonFileAttachments(transaction, bChangeKTP, strAttachmentIds, strKTPAttachmentIds, nHALessonID, strUserID, strAssignmentName)
		Call objNSNET.CheckEditLimits(transaction, strSubjClassID, strCMID, dtDueDate)
		If NOT IsDull(strIssueCMID) Then
		Call objNSNET.CheckEditLimits(transaction, strSubjClassID, strIssueCMID)
		End If
		Call objNSNET.EditManualAssignment_WT(transaction, strAssignmentID, _
			strAssignmentName, nAssignmentType, strAssignmentDescr, _
			dtStartDate, dtDueDate, strCMID, strIssueCMID, strSubjClassID, arrAttachmentIds, _
			nClassAssgn, arrStudents, nWeight, bConsiderDKR, strDiagnosticWork)
		TestErrorWithTransaction transaction, obLanguage("Curriculum", "kCantEditAssignment")

		objNSNET.CommitTransaction(transaction)
	End If
Else ' Create new assignment
	If Not blnIsManual Then
		strProblemList = GetSafeStr(Request("ASL"), 10000, "")
		arrProblemList = Split(strProblemList, CHR(1))

		strSuffix = ""
		If UBound(arrProblemList) > 4 Then strSuffix = "/" & UBound(arrProblemList) / 4

		ReDim arrProblems(4, UBound(arrProblemList) / 4 - 1)
		For i = 0 To UBound(arrProblems, 2)
			If strSuffix = "" Then
				strAssignmentSuffix = ""
			Else
				strSpace = ""
				For j = Len(CStr(i+1))+2 To Len(strSuffix) : strSpace = strSpace & " " : Next
				strAssignmentSuffix = " - " & strSpace & CStr(i+1) & strSuffix
			End If

			arrProblems(0, i) = arrProblemList(4*i)
			arrProblems(1, i) = GetSafeStr(arrProblemList(4*i+1), 4000, " " )
			arrProblems(2, i) = arrProblemList(4*i+2)
			arrProblems(3, i) = arrProblemList(4*i+3)
			If IsDull(arrProblems(3,i)) Then arrProblems(3,i) = Null ' lexile
			arrProblems(4,i) = strAssignmentName & strAssignmentSuffix
			If Len(arrProblems(4,i)) > kAssignmentNameLength Then arrProblems(4,i) = Left(strAssignmentName,kMaxAssignNameDB_189) & "..." & strAssignmentSuffix
		Next

		If strCMID = "0" Then
			CheckLADueDate()
		End If

		Call objNSNET.CreateAssignment(nAssignmentType, strAssignmentDescr, dtStartDate, dtDueDate, _
			strCMID, strIssueCMID, strSubjClassID, strAttachmentIds, _
			lngPossiblePoints, nClassAssgn, arrProblems, arrStudents, bJuniorLA, IIF(strRIJ = "1", nWeight, -1), strSchoolId)
	Else
		' Этот код выполняется вроде только при вызове из ChooseStudents.asp. Но для ТКР ученики не выбираются, поэтому для ТКР этот код не выполняется,
		' и поэтому проверки и соотв. спец. кода для ТКР здесь нет.
		transaction = objNSNET.GetTransaction()
		'Если изменяем ДЗ в КТП, с добавлением/изменением аттача
		arrAttachmentIds = objNSNET.SetLessonFileAttachments(transaction, bChangeKTP, strAttachmentIds, strKTPAttachmentIds, nHALessonID, strUserID, strAssignmentName)
		Call objNSNET.CheckEditLimits(transaction, strSubjClassID, strCMID, dtDueDate)		
		If NOT IsDull(strIssueCMID) Then
			Call objNSNET.CheckEditLimits(transaction, strSubjClassID, strIssueCMID)	
		End If
		Call objNSNET.CreateManualAssignment(transaction, kActivityID_Manual, strAssignmentName, nAssignmentType, kIsTKR, _
			strAssignmentDescr, dtStartDate, dtDueDate, strCMID, strIssueCMID, strSubjClassID, arrAttachmentIds, nClassAssgn, arrStudents, _
			strSchoolId, -1, -1, nWeight)
		TestErrorWithTransaction transaction, obLanguage("Curriculum", "kCantAddAssignment")
		objNSNET.CommitTransaction(transaction)
	End If

	TestError obLanguage("Curriculum","kCantAddAssignment")
End If


strBackPage = GetBackPage()
'RedirectTo strBackPage, Null 'Array("CMID", strCMID)
RedirectTo strBackPage, Array("ExtraActivity", bExtraActivity)


Function GetBackPage()
	Dim strBP

	If IsDull(strBack) Then
		if blnIsManual then
			strBP = "/angular/school/journal/assignments/"
		else
			strBP = "/angular/school/activities"
		end if
	Else
		strBP = strBack
	End If
	GetBackPage = strBP
End Function

Sub GenerateError(strText)
	Call GenerateHTMLError_Ex(strText)
End Sub

Sub GenerateHTMLError_Ex( strText )
	strBackPage = GetBackPage()
	GenerateHTMLError strText, strBackPage, strToken
End Sub
	
' Проверка, чтобы DueDate из задания из учебных курсов была внутри учебных периодов, связанных с данной предмето-группой
Sub CheckLADueDate()
	Dim isValidDate
	isValidDate = objNSNET.IsDateInSubjecrGroupTerms(strSubjClassID, dtDueDate)
	If Not isValidDate Then
		GenerateError(obLanguage("Assignment", "kErrLAAssignmentDateOutOfSGTerms"))
	End If
End Sub
%>