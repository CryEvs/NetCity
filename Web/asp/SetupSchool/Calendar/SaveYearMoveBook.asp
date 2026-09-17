<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_Year.asp -->
<!-- #INCLUDE VIRTUAL="asp/SetupSchool/Movement/MoveBook_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

On Error Resume Next

'Const kDocNumExists = -2
'Const kResult_IN_LATER_DOC = -4
'Const kRemoveResult_StudentNotInActivePool = -10

Dim nDocType, strClassID, nFutureYearID, nFutureClassID, strDocID, dtDocDate, strDocNumber, dctDoc
Dim nCount
Dim i, strStudentID, strLetter, nGrade, arrStudents, nDocSubType
Dim nResult, strReason
Dim rsExists
Dim nSubDocID
Dim bPreSchool, bAddSchool
Dim transaction
Dim dctSelectedUsers
Dim bNotEnrolledYearModeDocUpdateMode
Dim strErr, strErrDetail, bNotInNotEnrolledFromClass
Dim bNewDoc, bDocDeleted, strSaveMode
Dim strNotification
Dim bCheckDocDate, bDocDateChanged
Dim DeleteDocResult
Dim bConditionalMoving, dtPassDate, strPassDateFieldName
Dim bIsPastEditingGraduateDocs

If Not IsObject(obTokenMgr.GetData(strToken, "Y_dct")) Then
	Set dctDoc = Request
Else
	Set dctDoc = obTokenMgr.GetData(strToken, "Y_dct")
End If
strDocID = GetSafeID(dctDoc("DOCID"), "0")
bNewDoc = (strDocID = "0")
dtDocDate = GetSafeDate(dctDoc("DOCDATE"), NSNow())
nDocType = GetSafeLng(dctDoc("DOCTYPE"), kDocType_YEAR)

nFutureClassID = GetSafeLng(dctDoc("FUTURECLASSID"),-1)
If nFutureClassID<0 Then nFutureClassID = GetSafeLng(dctDoc("FUTUREGRADE"), -1)
nDocSubType = GetSafeLng(dctDoc("DOCSUBTYPE"), -1)
nDocSubType = GetSafeDocSubType(nDocType, nDocSubType)

Call obTokenMgr.SetData(strToken,"Y_dct", Null )
bNotInNotEnrolledFromClass = (nDocSubType=kYearDocSubType_NotEnrolled And nDocType=kDocType_YEAR And IsDull(Request("incStudent")))

bConditionalMoving = (nDocSubType = kYearDocSubType_Conditional)

nFutureYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
bIsPastEditingGraduateDocs = IsPastEditingGraduateDocs()
If bIsPastEditingGraduateDocs Then
	nFutureYearID = strSchoolYearId
End If
strDocNumber = Trim(GetSafeStr(dctDoc("DOCNUMBER"), 20, ""))

If bNotInNotEnrolledFromClass Then
	If IsObject(obTokenMgr.GetData(strToken, stSelectedUsers)) Then
		Set dctSelectedUsers = obTokenMgr.GetData(strToken, stSelectedUsers)
	Else
		bNotEnrolledYearModeDocUpdateMode = True
		'GenerateError obLanguage("Common","kInvalidParameter")
	End If
End IF

Server.ScriptTimeOut = Server.ScriptTimeOut * 10

' create new move document
strSaveMode = Request("SAVEMODE")
nCount = Request("delStudent").Count

bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)

nSubDocID = GetSafeLng( Request("SUBDOCID"), 0 )
If nCount > 0 and strSaveMode = "DELETESTUDENTS" Then
	Set DeleteDocResult = objNSNET.DeleteStudentsFromYearMoveBook(strCurrYearID, nFutureYearID, strDocID, nSubDocID, nDocType, CStr(Request("delStudent")), MODULE_REGION)
	TestError_Ex obLanguage("Movement","kCantEditMoveDoc")
	If Not DeleteDocResult.ValidationResult.IsSuccess Then
		GenerateHTMLError DeleteDocResult.ValidationResult.Message, GetReturnPage, strToken
	End If
	bDocDeleted = DeleteDocResult.DocDeleted
Else
	IF bNotInNotEnrolledFromClass Then
		If bNotEnrolledYearModeDocUpdateMode Then nCount = 0 Else nCount = dctSelectedUsers.Count
	Else
		nCount = Request("incStudent").Count
	End If
	If nCount > 0 Then

		If bNotInNotEnrolledFromClass Then
			Call GetStudentsData()
			Set nFutureClassID=Nothing
		ElseIf CLng(strFunctionalityType)=kFuncType_Add Then
			ReDim arrStudents(nCount-1)
			If nDocType = kDocType_GRADUATE Then Set nFutureClassID = Nothing
			For i = 1 To nCount
				arrStudents( i-1 ) = GetSafeID(Request("incStudent")(i), Null)
			Next
		ElseIf nDocType <> kDocType_GRADUATE Then

			If bConditionalMoving Then
				ReDim arrStudents(1, nCount-1)
				For i = 1 To nCount
					strStudentID = GetSafeLng(Request("incStudent")(i), Null)
					arrStudents( 0, i-1 ) = strStudentID

					strPassDateFieldName = "PassDate_" & strStudentID
					If IsDull(Request(strPassDateFieldName)) Then arrStudents( 1, i-1 ) = Null Else arrStudents( 1, i-1 ) = Str2Date(Request(strPassDateFieldName))
				Next
			Else
				ReDim arrStudents(nCount-1)
				For i = 1 To nCount
					arrStudents( i-1 ) = GetSafeID(Request("incStudent")(i), Null)
				Next
			End If

		Else
			Set nFutureClassID = Nothing
			nGrade = Null
			strLetter = Null
			If bPreSchool Then
				ReDim arrStudents(4, nCount-1)
				For i = 1 To nCount
					strStudentID = GetSafeLng(Request("incStudent")(i), Null)
					arrStudents( 0, i-1 ) = strStudentID
					strReason = GetSafeLng(Request("REASON_" & strStudentID), Null)
					If strReason <> -1 Then arrStudents(1, i-1) = strReason Else Set arrStudents(1, i-1) = Nothing
					arrStudents(2, i-1) = GetSafeLng(Request("EOS_" & strStudentID), Null)
					If CLng( arrStudents(2, i-1) ) = -1 Then Set arrStudents(2, i-1) = Nothing
					arrStudents( 3, i-1 ) = Null
					arrStudents( 4, i-1 ) = GetSafeLng(Request("OST_"&strStudentID), -1)
				Next
			Else
				ReDim arrStudents(IIf(bConditionalMoving, 5, 4), nCount-1)
				For i = 1 To nCount
					strStudentID = GetSafeLng(Request("incStudent")(i), Null)
					arrStudents( 0, i-1 ) = strStudentID

					strReason = GetSafeLng(Request("REASON_" & strStudentID), IIf(bConditionalMoving, -2, Null))
					If strReason = -2 Then
						strReason = CLng(-1)
						arrStudents(1, i-1) = strReason
					Else
						If strReason <> -1 Then arrStudents(1, i-1) = strReason Else Set arrStudents(1, i-1) = Nothing
					End If
					arrStudents(2, i-1) = GetSafeLng(Request("EOS_" & strStudentID), Null)
					If CLng( arrStudents(2, i-1) ) = -1 Then Set arrStudents(2, i-1) = Nothing

					If IsDull(Request("AWARD"&strStudentID)) Then
						arrStudents( 3, i-1 ) = 0 ' Для выпуска из 4 класса - нет никакого аттестата
					Else
						arrStudents( 3, i-1 ) = GetSafeLng(Request("AWARD"&strStudentID), Null)
					End If

					arrStudents( 4, i-1 ) = GetSafeLng(Request("OST_"&strStudentID), -1)

					If bConditionalMoving Then
						strPassDateFieldName = "PassDate_" & strStudentID
						If IsDull(Request(strPassDateFieldName)) Then arrStudents( 5, i-1 ) = Null Else arrStudents( 5, i-1 ) = Str2Date(Request(strPassDateFieldName))
					End If
				Next
			End If
		End If

		If nSubDocID=0 Then
			If IsDull(dctDoc("PCLID")) Then Set strClassID=Nothing Else strClassID = GetSafeLng(dctDoc("PCLID"), Null)
		Else
			Dim rsSubDocInfo
			Set rsSubDocInfo=objNSNET.GetMoveSubDocInfo(nSubDocID)
			If rsSubDocInfo.EOF Then
				strClassID = Null
			Else
				strClassID = rsSubDocInfo("CLASSID1")
				nFutureClassID = GetSafeLng(rsSubDocInfo("CLASSID2"), -1)
			End If
		End If
		
		Call AreCheckDocDate()
		Call CheckDocDate()

		transaction = objNSNET.GetTransaction()

		If strDocID = "0" Then

			' #20369. "Плохая" работа с типом Integer в ASP. Если Компонента принимает int?, то АСП должна Обязательно передавать Long!!! Или Nothing для Null.
			If isDull(nDocSubType) Then
				nDocSubType = Nothing
			Else
				nDocSubType = CLng(nDocSubType)
			End If

			nResult = objNSNET.CreateYearDoc_WT(transaction, strCurrYearID, dtDocDate, strDocNumber, nDocType, nDocSubType)
			TestError_Ex obLanguage("Movement","kCantCreateMoveDoc")
			strDocID = nResult
		Else
			nResult = objNSNET.EditYearDoc_WT(transaction, strCurrYearID, strDocID, dtDocDate, strDocNumber )
			TestError_Ex obLanguage("Movement","kCantEditMoveDoc")
		End If
		If nResult = kDocNumExists Then
			Call GenerateHTMLErrorWT(transaction, obLanguage("Movement","kErrDocNumExists"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken)
		End If

		If Not isCNull(strClassID) Then If strClassID="-1" Then Set strClassID=Nothing
		nResult = objNSNET.CreateYearSubDoc_WT(transaction, strDocID, dtDocDate, strCurrYearID, nFutureYearID, strClassID, nFutureClassID, arrStudents, nDocType, nDocSubType)
		If nResult <> 0 Or Err.Number <> 0 Then Call GenerateHTMLErrorWT(transaction, obLanguage("Common","kUnexpErr"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken)

		objNSNET.CommitTransaction(transaction)
	Else
		If strDocID <> "0" Then
			If dctDoc("ACT") = "save" Then
				Call AreCheckDocDate()
				Call CheckDocDate()
				nResult = objNSNET.EditYearDoc(strCurrYearID, strDocID, dtDocDate, strDocNumber )
				TestError obLanguage("Movement","kCantEditMoveDoc")
				If nResult = kDocNumExists Then Call GenerateHTMLError(obLanguage("Movement","kErrDocNumExists"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken)
			Else
				Set DeleteDocResult = objNSNET.DeleteYearDoc(strCurrYearID, nFutureYearID, strDocID, nDocType, MODULE_REGION)
				TestError obLanguage("Movement","kCantDeleteMoveDoc")
				If Not DeleteDocResult.IsSuccess Then
					GenerateHTMLError DeleteDocResult.ValidationResult.Message, GetReturnPage, strToken
				End If
				bDocDeleted = True
			End If
		End If
	End If
End If
TestError obLanguage("Movement","kCantEditMoveDoc")

Call obTokenMgr.SetData(strToken, stSelectedUsers, Null)

If strErr = "" Then
	If bNewDoc Then
		strNotification = obLanguage("Movement","kMoveDocSuccessfulCreated")
	ElseIf bDocDeleted Then
		strNotification = obLanguage("Movement","kMoveDocSuccessfulDeleted")
	Else
		strNotification = obLanguage("Movement","kMoveDocSuccessfulSaved")
	End If
	Call obTokenMgr.SetData( strToken, stWasSaved, strNotification )
	RedirectTo dctDoc("BACK"), Array("DOCTYPE", nDocType, "DOCID", strDocID, "DOCSUBTYPE", nDocSubType)
Else
	Call obTokenMgr.SetData( strToken, stWasSaved, strErr )
	RedirectTo "YearMoveBookEdit.asp?", Array("DOCID", strDocID, "DOCTYPE", nDocType, "DOCSUBTYPE", nDocSubType)
End If

Sub TestError_Ex( objErr )
	If Err<> 0 Then
		If Not IsEmpty(transaction) Then objNSNET.RollbackTransaction(transaction)
		If bIsDebug Then Call SetDetailedErrMessage(objErr)
		GenerateHTMLError objErr, GetReturnPage, strToken
	End If
End Sub

'Процедура получения словаря добавляемых учеников и преобразования его в масив
Sub GetStudentsData()
	Dim nCnt
	'Преобразование Dictionary в массив.
	nCnt = 0
	ReDim arrStudents(UBound(dctSelectedUsers.Keys))
	For Each strStudentID in dctSelectedUsers
		arrStudents(nCnt) = strStudentID
		nCnt = nCnt + 1
	Next
End Sub

' См. аналогичную ф-цию в SaveMoveBook.asp
Sub AreCheckDocDate()
	Dim objDocInfo, dtDocDateOld

	If bIsPastEditingGraduateDocs Then
		bCheckDocDate = False
		bDocDateChanged = False
		Exit Sub
	End If

	bCheckDocDate = IsArray(arrStudents) 'True
	bDocDateChanged = False
	If Not bNewDoc Then
		Set objDocInfo = objNSNET.GetMoveDocInfo(strDocID)
		dtDocDateOld = CDate(objDocInfo("DOCDATE"))
		If DateDiff("d", dtDocDateOld, dtDocDate, 0, 0) <> 0 Then
			bDocDateChanged = True
		End If
	End If
End Sub

Function IsPastEditingGraduateDocs
	If nDocType <> kDocType_GRADUATE And Not bConditionalMoving Then IsPastEditingGraduateDocs = False : Exit Function
	If bNewDoc Then IsPastEditingGraduateDocs = False : Exit Function
	If CBool(objNSNET.IsYearClosed(strCurrYearID)) Then IsPastEditingGraduateDocs = True : Exit Function
	IsPastEditingGraduateDocs = (Not IsWorkYear() And nFutureYearID = 0)
End Function

Function GetReturnPage
	GetReturnPage = "/asp/SetupSchool/Calendar/YearMoveBookEdit.asp?DOCTYPE=" & nDocType & "&DOCSUBTYPE=" & nDocSubType & "&DOCID=" & strDocID
End Function

' См. аналогичную ф-цию в SaveMoveBook.asp
Sub CheckDocDate()
%>
<SCRIPT LANGUAGE="JSCRIPT" RUNAT=SERVER>
function jGetArrayRank( arrTest ){
	return arrTest.dimensions();
}
</SCRIPT>
<%
	Dim strStudentIDs, objViol, bViolation, i
	Dim nStudentID
	Dim strErrText, strDest
	Dim nArrayRank

	On Error Resume Next
	If bCheckDocDate Then
		bViolation = False
		strStudentIDs = ""

		nArrayRank = jGetArrayRank(arrStudents)
		If nArrayRank = 2 Then
			For i = 0 To UBound(arrStudents, 2)
				nStudentID = arrStudents(0, i)
				strStudentIDs = strStudentIDs & nStudentID & ","
			Next
		Else
			For i = 0 To UBound(arrStudents)
				nStudentID = arrStudents(i)
				strStudentIDs = strStudentIDs & nStudentID & ","
			Next
		End If

		If Len(strStudentIDs) > 0 Then strStudentIDs = Left(strStudentIDs, Len(strStudentIDs) - 1)

		If bAddSchool Then
			Set objViol = objNSNET.GetViolationMoveStudent_AddSchool(strStudentIDs, strDocID, dtDocDate, strClassID)
		Else
			Set objViol = objNSNET.GetViolationMoveStudent(strStudentIDs, strDocID, dtDocDate)
		End If
		TestError obLanguage("Movement","kCantCheckMoveDoc")

		bViolation = Not objViol.EOF

		strDest = "/asp/SetupSchool/Calendar/YearMoveBookEdit.asp?DOCTYPE=" & nDocType & "&DOCSUBTYPE=" & nDocSubType & "&DOCID=" & strDocID
		If bViolation Then
			strErrText = obLanguage("Movement","kStudentDocDataViolation") & ":" & vbCrLf & obLanguage("Common","Ученик",strFunctionalityType) & " - " & _
				objViol("LASTNAME") & " " & objViol("FIRSTNAME") & " " & objViol("MIDDLENAME") & ", " & objViol("SCHOOLNAME") & " (" & objViol("CITYNAME") & ")." & vbCrLf & _
				"'" & objViol("DOCNUMBER") & "', " & Date2Str(objViol("DOCDATE")) & ", " & objViol("NOUNNAME") & ", " & objViol("CLASSNAME1") & "=>" & objViol("CLASSNAME2")
			Call GenerateHTMLError( strErrText, strDest, strToken )
		End If
	End If

	If Not bDocDateChanged Then Exit Sub

	If bAddSchool Then
		Set objViol = objNSNET.GetViolationMoveStudent_AddSchool("", strDocID, dtDocDate, strClassID)
	Else
		Set objViol = objNSNET.GetViolationMoveStudent("", strDocID, dtDocDate)
	End If
	TestError obLanguage("Movement","kCantCheckMoveDoc")

	bViolation = Not objViol.EOF

	If bViolation Then
		strErrText = obLanguage("Movement","kStudentDocDataViolation") & ":" & vbCrLf & obLanguage("Common","Ученик",strFunctionalityType) & " - " & _
			objViol("LASTNAME") & " " & objViol("FIRSTNAME") & " " & objViol("MIDDLENAME") & ", " & objViol("SCHOOLNAME") & " (" & objViol("CITYNAME") & ")." & vbCrLf & _
			"'" & objViol("DOCNUMBER") & "', " & Date2Str(objViol("DOCDATE")) & ", " & objViol("NOUNNAME") & ", " & objViol("CLASSNAME1") & "=>" & objViol("CLASSNAME2")
		Call GenerateHTMLError( strErrText, strDest, strToken )
	End If
End Sub

Function MakeErrMessage_StudentNotInActivePool()
	Dim strErrMsg

	strErrMsg = obLanguage("Movement","kDelDoc_StudentNotInActivePool",strFunctionalityType)
	If MODULE_REGION Then
		strErrMsg = Replace(strErrMsg, "%", obLanguage("Movement","kMayBeStudentEnrolledToOtherRegion"))
	Else
		strErrMsg = Replace(strErrMsg, "%", "")
	End If
	MakeErrMessage_StudentNotInActivePool = strErrMsg
End Function

Function isCNull( strPar )
	On Error Resume Next
	Dim bRet
	bRet = ( strPar is Nothing)
	If Err.number <> 0 Then Err.Clear : bRet = False
	isCNull = bRet
End Function
%>
