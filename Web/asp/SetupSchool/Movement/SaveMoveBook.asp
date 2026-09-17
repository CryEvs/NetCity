<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/heavySession_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim nDocID, dtDocDate, strDocNumber, nDocType, nDocSubType, nEnrollFrom
Dim strClassID, nCount, strMoveToClassID, nFutureClassID
Dim arrData, i, nStudentID, strReason, strEOID
Dim nResult, nFailedStudentID, strFailedStudentName
Dim bGroups, nSubjCount, arrGroups, j
Dim strSubjectID, strGroupKey, strGroupID
Dim bEqualTermTypes
Dim bElseBranch

Dim objForm
Dim arrSelectedUsersData
Dim nMoveDocAction, bUpdateSaveMode

Dim arrSubDocs, nSubDocCount, nSD, strSubDocID
Dim strDocClass1ID, strDocClass2ID
Dim strStudentSubDoc
Dim strSubDocSubjectsName
Dim strError, strErrDetail, nID, strDocSchoolID, strDocSchoolName
Dim bAddSchool
Dim strStudentIDs, objViol, bViolation
Dim objDocInfo, dtDocDateOld, bCheckDocDate
Dim bEmptyDoc
Dim strTmpYearID
Dim strStudentID
Dim objActiveTransaction, transMarker
Dim nRealDocID
Dim bStubFutureMode
Dim objRegionImportResult, bIsStudsGetFromRegionPool, nPrevDocId

Set objActiveTransaction = obTokenMgr.GetData(strToken, stTransaction )
Call obTokenMgr.SetData(strToken, stTransaction, Null)

'Теперь движение всегда выполняется по общему принципу
bStubFutureMode = False
bAddSchool = (strFunctionalityType = kFuncType_Add)

nMoveDocAction = GetSafeStr(Request("SAVEMODE"), -1, kMoveDocAction_Create)
Select Case nMoveDocAction
Case kMoveDocAction_Update, kMoveDocAction_DeleteStudents
	Dim arrDocStudents
	Dim nDocStudents
	Dim arrStudentDocsParamsToSave, arrDelStudents
	nDocID = GetSafeLng(Request("DOCID"), Null)
	nDocType = GetSafeLng(Request("DOCTYPE"), Null)
	nDocSubType = -1
	If nDocType = kDocType_ENROLL or nDocType = kDocType_OUT Then
		nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), Null)
	End If
	nDocSubType = GetSafeDocSubType(nDocType, nDocSubType)
	dtDocDate = GetSafeDate(Request("DOCDATE"), Null)
	strDocNumber = GetSafeStr(Trim(CStr(Request("DOCNUMBER"))), 20, Null)

	Dim nFailedStudent, nFailedReasonCode
	nFailedStudentID = 0: nFailedReasonCode = 0
	strError = ""
	If nMoveDocAction = kMoveDocAction_Update Then
		nRealDocID = nDocID
		Call AreCheckDocDate()
		Call CheckDocDate()
		If Not objNSNET.IsValidDateToMoveDoc(Nothing, nDocID, nDocType, dtDocDate, nFailedStudentID, nFailedReasonCode) Then
			'TODO поменять сообщения на другие.
			Select Case nFailedReasonCode
				Case kRemoveResult_TOTAL : strError = obLanguage("Movement","kChangeDocDate_Student_TOTAL",strFunctionalityType)
				Case kRemoveResult_RESULT : strError = obLanguage("Movement","kChangeDocDate_Student_RESULT",strFunctionalityType)
				Case kRemoveResult_ATTEND : strError = obLanguage("Movement","kChangeDocDate_Student_ATTEND",strFunctionalityType)
				Case Else :	strError = obLanguage("Movement","kErrChangeDocDate")
			End Select
			If nFailedStudentID > 0 Then strError = strError & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
			Call obTokenMgr.SetData( strToken, stWasSaved, strError )
		End If
	End If

	If strError = "" Then
		arrDocStudents = Split(Request("STUDENTS"),", ")
		If ( Len(Request("DELSTUDENTS")) > 0 ) And nMoveDocAction = kMoveDocAction_DeleteStudents Then 
			arrDelStudents = Request("DELSTUDENTS") 
		Else
			arrDelStudents = Empty
		End If
		If nMoveDocAction = kMoveDocAction_Update Then
			If bAddSchool Then
				arrStudentDocsParamsToSave = Empty
			Else
				nDocStudents = UBound(arrDocStudents)
				ReDim arrStudentDocsParamsToSave(nDocStudents,1)
				If nDocType = kDocType_OUT Then
					For i = 0 to nDocStudents
						strStudentID = arrDocStudents(i)
						arrStudentDocsParamsToSave(i,0) = strStudentID
						arrStudentDocsParamsToSave(i,1) = Array(Request("EOS_" & strStudentID).Item, Request("REASON_" & strStudentID).Item, Request("OST_" & strStudentID).Item)
					Next
				ElseIf nDocType = kDocType_ENROLL Then
					For i = 0 to nDocStudents
						strStudentID = arrDocStudents(i)
						arrStudentDocsParamsToSave(i,0) = strStudentID
						arrStudentDocsParamsToSave(i,1) = Array(Request("EOS_" & strStudentID).Item, 0, Request("OST_" & strStudentID).Item)
					Next
				End IF
			End If
		Else
			arrStudentDocsParamsToSave = Empty
		End IF
		nRealDocID = nDocID

		nDocID = objNSNET.UpdateMoveDoc(objActiveTransaction, strCurrYearID, nDocID, nDocType, dtDocDate, strDocNumber, bStubFutureMode, strFunctionalityType, arrStudentDocsParamsToSave, arrDelStudents, nFailedStudentID, nID)
		Call TestErrorWithTransaction(objActiveTransaction, ErrorMessage)
		Call EndTransaction(true)
		If nDocID < 0 Then
			strFailedStudentName = ""
			If nFailedStudentID > 0 Then
				strFailedStudentName = objNSNET.GetUserNickName(nFailedStudentID)
			End If
			strError = ""
			strErrDetail = ""
			Select Case nDocID
			Case kResult_IN_LATER_DOC :
				Set objDocInfo = objNSNET.GetMoveDocInfo(nID) ' nID = later DocID
				If objDocInfo.EOF Then GenerateHTMLError_Ex obLanguage("Common","kInvalidParameter") & " objDocInfo"
				strDocSchoolID = GetSafeID(objDocInfo("SCHOOLID"), Null)
				If strSchoolID = strDocSchoolID Then
					dtDocDate = GetSafeDate(objDocInfo("DOCDATE"), Null)
					strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, Null)
					strErrDetail = obLanguage("Movement","kMoveDocStudent",strFunctionalityType) & ": " & strFailedStudentName & ", " & obLanguage("Movement","kMoveDoc") & ": " & strDocNumber & " " & obLanguage("Movement","kMoveDocFrom") & " " & Date2Str(dtDocDate)
				Else
					strDocSchoolName = objNSNET.GetSchoolName(strDocSchoolID)
					strErrDetail = obLanguage("Movement","kMoveDocStudent",strFunctionalityType) & ": " & strFailedStudentName & ", " & obLanguage("Movement","kMoveDoc") & " " & obLanguage("Movement","kMoveDocSchool",strFunctionalityType) & " '" & strDocSchoolName & "'"
				End If
				strError = obLanguage("Movement","kDelDoc_InLaterDoc",strFunctionalityType) & " (" & strErrDetail & ")"
			Case kResult_IN_SCHOOL :
				strDocSchoolName = objNSNET.GetSchoolName(nID) ' nID = SchoolID
				strError = obLanguage("Movement","kDelDoc_InSchool",strFunctionalityType) & " '" & strDocSchoolName & "'" & " (" & strFailedStudentName & ")"
			Case kRemoveResult_TOTAL :
				strError = obLanguage("Movement","kDelDoc_Student_TOTAL",strFunctionalityType) & " (" & strFailedStudentName & ")"
			Case kRemoveResult_RESULT :
				strError = obLanguage("Movement","kDelDoc_Student_RESULT",strFunctionalityType) & " (" & strFailedStudentName & ")"
			Case kRemoveResult_ATTEND :
				strError = obLanguage("Movement","kDelDoc_Student_ATTEND",strFunctionalityType) & " (" & strFailedStudentName & ")"
			Case kRemoveResult_IN_ADDSCHOOL :
				strError = obLanguage("Movement","kCantRemoveStudent_IN_ADDSCHOOL",strFunctionalityType) & " (" & strFailedStudentName & ")"
			Case kRemoveResult_HasDOUParentPay :
				strError = obLanguage("Movement","kCantRemoveStudent_HasDOUParentPay") & " (" & strFailedStudentName & ")"
			Case kRemoveResult_StudentNotInActivePool
				strError = MakeErrMessage_StudentNotInActivePool() & " (" & strFailedStudentName & ")"
			Case kRemoveStudentsFromMovDocException :
				strError = obLanguage("Common","kUnexpErr")
				If strFailedStudentName <> "" Then
					strError = strError & "\n (" & strFailedStudentName & ")"
				End If
			End Select
			nDocID = Request("DOCID")
			Call obTokenMgr.SetData( strToken, stWasSaved, strError )
		ElseIf nDocID = 0 Then
			'При удаление всех учеников восстанавливаем параметры удаленного документа 
			If isObject(obTokenMgr.GetData(strToken, "QA_dct")) Then
				Set objForm = obTokenMgr.GetData(strToken, "QA_dct")
				objForm("DOCID")=nDocID
			Else
				Set objForm = Server.CreateObject("NetCity.Storage")
				objForm.Add "DOCDATE", dtDocDate
				objForm.Add "DOCSUBTYPE", nDocSubType
				objForm("DOCID") = nDocID
				objForm.Add "DOCTYPE", nDocType
				objForm.Add "DOCNUMBER", strDocNumber
			End if
			Call obTokenMgr.SetData(strToken, "QA_dct",objForm)
		End If
	End If
Case Else
	If GetSafeLng(Request("DOCTYPE"), -1) = kDocType_MOVE Then
		'Сохранение документа о переводе из класса в класс
		Call GetSaveDocInfo()
		nRealDocID = nDocID
		Call GatherSaveData()
		Call AreCheckDocDate()
		Call CheckDocDate()
		Call SaveClassesMoveDoc()
	Else
		Set objForm = obTokenMgr.GetData(strToken, "QA_dct")
		nDocID = GetSafeLng(objForm("DOCID"),0)
		If Not nDocID > 0 Then nDocID = Empty
		nRealDocID = nDocID
		dtDocDate = GetSafeDate(objForm("DOCDATE"), Null)
		strDocNumber = GetSafeStr(Trim(CStr(objForm("DOCNUMBER"))), 20, Null)
		nDocType = GetSafeLng(objForm("DOCTYPE"), Null)
		nDocSubType = -1
		strClassID = objForm("CLASSID")
		nFutureClassID = objForm("FUTUREGRADE")
		If Not IsDull(nFutureClassID) Then strClassID = GetSafeLng(nFutureClassID, 0)
		SetNullableLng strClassID
		If nDocType = kDocType_Enroll Then
			nDocSubType = GetSafeLng(objForm("DOCSUBTYPE"), Null)
			nEnrollFrom = GetSafeLng(objForm("ENROLLFROM"), 0)
			If nEnrollFrom = kEnrollFrom_Pool Then
				If Not IsDull(Request("ByDirecting")) Then nEnrollFrom = CLng(kEnrollFrom_ESPool)
			Else
				If nEnrollFrom <> kEnrollFrom_RegionPool Then
					If nEnrollFrom > kEnrollBy_Import Then nEnrollFrom = Clng(kEnrollBy_Import)
				End If
			End If
			'Класс. Для импорта и быстрого ввода будет использоваться другой. Пришедший для каждого ученика свой.
			If nEnrollFrom = kEnrollBy_Import Or nEnrollFrom = kEnrollFrom_QAdd Then Set strClassID = Nothing
		Else
			If IsDull(objForm("DOCSUBTYPE")) Then nDocSubType = -1 Else nDocSubType = GetSafeLng(objForm("DOCSUBTYPE"), Null)
			If IsObject(strClassID) Then If strClassID Is Nothing Then strClassID=-CLng(obTokenMgr.GetData(strToken, "lngGrade"))
			Set nEnrollFrom = Nothing
		End If
		nDocSubType = GetSafeDocSubType(nDocType, nDocSubType)
		Call GetStudentsData()
		Call AreCheckDocDate()
		Call CheckDocDate()
		nFailedStudentID = 0

		nPrevDocId = nDocID
		nDocID = objNSNET.SaveMoveDoc(objActiveTransaction, strCurrYearID, nDocID, dtDocDate, nDocType, nDocSubType, nEnrollFrom, strDocNumber, strClassID, arrSelectedUsersData, bStubFutureMode, bAddSchool, nFailedStudentID, objRegionImportResult)
		Call TestErrorWithTransaction(objActiveTransaction, ErrorMessage)
		If nDocID < 0 Then strError = GetErrorMessage(nDocID)
		
		If strError <> "" Then
			If nFailedStudentID <> 0 Then
				strError = strError & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
			End If
			GenerateHTMLError_Ex strError
		End If

		If bInformContingent Then
			Call objNSNET.TriggerMovementEvents(objActiveTransaction, nDocID, strClassID, arrSelectedUsersData)
		End If
	End If
End Select

bIsStudsGetFromRegionPool = True
If nDocType = kDocType_Enroll Then 
	If nEnrollFrom = kEnrollFrom_RegionPool Then
		bIsStudsGetFromRegionPool = IsAnyStudentsImportedFromRegion()
		If Not bIsStudsGetFromRegionPool Then
			nDocID = nPrevDocId
		End If
	End If
End If

Call EndTransaction(bIsStudsGetFromRegionPool)
Call TestError_Ex(ErrorMessage)
Call SetSaveMessage( SuccessMessage )

Call DoRedirect()

Function IsAnyStudentsImportedFromRegion()
	Dim objStudentImportResult

	IsAnyStudentsImportedFromRegion = False
	If Not IsObject(objRegionImportResult) Then
		Exit Function
	End If

	For Each objStudentImportResult In objRegionImportResult.StudentsImportResults
		If objStudentImportResult.ImportResult = ImportResult_NewPerson Or objStudentImportResult.ImportResult = ImportResult_PersonExistsNotInSchool Then
			IsAnyStudentsImportedFromRegion = True
			Exit Function
		End If
	Next
End Function

Function GetRegionImportResult()
	Dim strResult, strDispl
	Dim NewStudentsCount, UsedExistingStudentsCount, StudentsInSchool
	Dim NewParentsCount, UsedExistingParentsCount, ParentsInSchool
	Dim objStudentImportResult, objParentImportResult

	If Not IsObject(objRegionImportResult) Then
		GetRegionImportResult = ""
		Exit Function
	End If

	NewStudentsCount = 0
	UsedExistingStudentsCount = 0
	StudentsInSchool = ""
	NewParentsCount = 0
	UsedExistingParentsCount = 0
	ParentsInSchool = ""

	'strDispl = "&nbsp;&nbsp;&nbsp;&nbsp;"
	strDispl = ""

	For Each objStudentImportResult In objRegionImportResult.StudentsImportResults
		Select Case objStudentImportResult.ImportResult
			Case ImportResult_NewPerson : NewStudentsCount = NewStudentsCount + 1
			Case ImportResult_PersonExistsNotInSchool : UsedExistingStudentsCount = UsedExistingStudentsCount + 1
			Case ImportResult_PersonInSchool : StudentsInSchool = StudentsInSchool & "<br />" & strDispl & objStudentImportResult.ExistsInSchool
		End Select

		For Each objParentImportResult In objStudentImportResult.ParentsImportResults
			Select Case objParentImportResult.ImportResult
				Case ImportResult_NewPerson : NewParentsCount = NewParentsCount + 1
				Case ImportResult_PersonExistsNotInSchool : UsedExistingParentsCount = UsedExistingParentsCount + 1
				Case ImportResult_PersonInSchool : ParentsInSchool = ParentsInSchool & "<br />" & strDispl & objParentImportResult.ExistsInSchool
			End Select
		Next
	Next

	strResult = obLanguage("PoolStudents","kStudentsImportFromRegion") & ": - " & NewStudentsCount + UsedExistingStudentsCount & " (" & obLanguage("PoolStudents","kNewRecords") & " - " & NewStudentsCount & ")"
	If StudentsInSchool <> "" Then
		strResult = strResult & ".<br />" & obLanguage("PoolStudents","kStudentsFoundInLocalAndNotImport") & ":" & StudentsInSchool
	End If

	strResult = strResult & ".<br />" & obLanguage("PoolStudents","kParentsImportFromRegion") & ": - " & NewParentsCount + UsedExistingParentsCount & " (" & obLanguage("PoolStudents","kNewRecords") & " - " & NewParentsCount & ")"
	If ParentsInSchool <> "" Then
		strResult = strResult & ".<br />" & obLanguage("PoolStudents","kParentsFoundInLocalAndUsed") & ":" & ParentsInSchool
	End If

	GetRegionImportResult = strResult
End Function

Function SuccessMessage()
	If Not bIsStudsGetFromRegionPool Then
		SuccessMessage = obLanguage("PoolStudents","kErrRegionNoPoolStudentsAdded")
	Else
		SuccessMessage = IIF(nRealDocID>0,obLanguage("Movement","kMoveDocSuccessfulSaved"),obLanguage("Movement","kMoveDocSuccessfulCreated"))
	End If
	If nEnrollFrom = kEnrollFrom_RegionPool Then
		SuccessMessage = SuccessMessage & ".<br/>" & GetRegionImportResult()
	End If
End Function

Function ErrorMessage()
	ErrorMessage = IIF(nRealDocID>0, obLanguage("Movement","kCantEditMoveDoc"), obLanguage("Movement","kCantCreateMoveDoc"))
End Function

Sub TestErrorWithTransaction(transaction, strText)
	If Err <> 0 Then
		Call EndTransaction(false)
		If Not bIsDebug Then
			GenerateHTMLError_Ex( strText )
		Else
			GenerateHTMLError_Ex( strText & " (" & Err.Source & ": " & Replace(Err.Description, CHR(10), " ") & ", " & Err.Number & ")" )
		End If
	End If
End Sub

Sub EndTransaction( bCommit )
	Dim trans
	If Not IsEmpty(objActiveTransaction) Then
		Set trans = objActiveTransaction
		objActiveTransaction = Empty
		If bCommit Then
			Call objNSNET.CommitTransaction(trans)
		Else
			Call objNSNET.RollBackTransaction(trans)
		End If
		If nDocType = kDocType_Enroll And ( nEnrollFrom = kEnrollBy_Import Or nEnrollFrom = kEnrollFrom_QAdd ) Then
			Call ReleaseHeavySession()
		End If
	End If
End Sub

Sub SetSaveMessage(message)
	Dim strOldMessage, objNewMessage
	strOldMessage = obTokenMgr.GetData( strToken, stWasSaved)
	If strError <> "" Then Exit Sub
	If Not IsNull(strOldMessage) And Not IsEmpty(strOldMessage) Then
		ReDim objNewMessage(2)
		objNewMessage(0) = strOldMessage
		objNewMessage(1) = message
	Else
		objNewMessage = message
	End If
	Call obTokenMgr.SetData( strToken, stWasSaved, objNewMessage )
End Sub

Sub GetSaveDocInfo()
	nDocID = GetSafeLng(Request("DOCID"), Null)
	dtDocDate = GetSafeDate(Request("DOCDATE"), Null)
	strDocNumber = GetSafeStr(Trim(CStr(Request("DOCNUMBER"))), 20, Null)
	nDocType = GetSafeLng(Request("DOCTYPE"), Null)
	nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), Null)
	strSubDocSubjectsName = ""
End Sub

Function UseDctStudentSource
	UseDctStudentSource = False
	If nMoveDocAction <> kMoveDocAction_Create Then Exit Function
	If nDocType = kDocType_Enroll Then
		' Раньше было, что можно было зачислить из класса без приказа, если не ОДО проверяем этот реликтовый случай.
		If Not bAddSchool And nEnrollFrom = kEnrollFrom_Class Then Exit Function
	ElseIf nDocType = kDocType_Out Then
		'выбытие из незачисленных
		If nDocSubType <> kmdstNoClassEnroll Then Exit Function
	End If
	UseDctStudentSource = True
End Function

'Процедура получения словаря добавляемых учеников и преобразования его в масив
Sub GetStudentsData()
	Dim dctSelectedUsers, nCnt
	Dim strStudentID
	Dim arrTemp, i
	Dim bFromEditPage

	bFromEditPage = InStr(UCase(Request.ServerVariables("HTTP_REFERER")), "MOVEBOOKEDIT.ASP" ) > 0
	If UseDctStudentSource Then
		nCnt = 0
		Select Case nDocType
		Case kDocType_Enroll, kDocType_Out
			If Not IsObject(obTokenMgr.GetData(strToken, stSelectedUsers)) Then GenerateHTMLError_Ex obLanguage("Common","kInvalidParameter") & " Not IsObject"
			'Преобразование Dictionary в массив.
			Set dctSelectedUsers = obTokenMgr.GetData(strToken, stSelectedUsers)
			ReDim arrSelectedUsersData(UBound(dctSelectedUsers.Keys), 1)
			For Each strStudentID in dctSelectedUsers
				arrSelectedUsersData(nCnt, 0) = strStudentID
				arrSelectedUsersData(nCnt, 1) = dctSelectedUsers(strStudentID)
				nCnt = nCnt + 1
			Next
			Call obTokenMgr.SetData(strToken, stSelectedUsers, Null)
		End Select
	Else
		arrTemp = Split(Request("Students"),", ")
		ReDim arrSelectedUsersData(UBound(arrTemp), 1)
		For i = 0 To UBound(arrTemp)
			arrSelectedUsersData(i,0) = arrTemp(i)
			arrSelectedUsersData(i,1) = Array(-1, -1, GetSafeLng(Request("Grade_"&arrTemp(i)),0))
		Next
	End If
End Sub

Sub GatherSaveData()
	nSubDocCount = Request("SubDoc").Count
	If nSubDocCount = 0 Then GenerateHTMLError_Ex obLanguage("Common","kInvalidParameter") & " nSubDocCount"
	bEmptyDoc = (nSubDocCount = 0)
	ReDim arrSubDocs(nSubDocCount-1, 2) ' index 0: SUBDOCID - for existing DOC; ClassID1 - for new DOC
										' index 1: ClassID2 - for new DOC and for existing DOC
										' index 2: arrData
	For nSD = 1 To nSubDocCount
		If nDocID = 0 Then
			strClassesKey = GetSafeStr(Request("SubDoc")(nSD), -1, Null)
			Call GetMoveDocClassesID(strClassesKey, nDocType, strDocClass1ID, strDocClass2ID)

			' for ASP - strClassID is used for kDocType_ENROLL
			' but for CONTROL strMoveToClassID should be used for kDocType_ENROLL
			arrSubDocs(nSD-1, 0) = CLng(strDocClass1ID)
			arrSubDocs(nSD-1, 1) = CLng(strDocClass2ID)
			strSubDocSubjectsName = "SubDocSubjects_" & strClassesKey
			strStudentSubDoc = "Student_" & strClassesKey
		Else
			strSubDocID = GetSafeLng(Request("SubDoc")(nSD), Null)
			arrSubDocs( nSD-1, 0 ) = strSubDocID
			arrSubDocs( nSD-1, 1 ) = GetSafeLng(Request("ClassID2")(nSD), "0")
			strStudentSubDoc = "Student_" & strSubDocID
		End If

		' Fill arrData
		bEqualTermTypes = False
		nSubjCount = 0

		nCount = Request(strStudentSubDoc).Count
		If nCount = 0 Then GenerateHTMLError_Ex obLanguage("Common","kInvalidParameter") & " nCount"
		ReDim arrData(nCount-1,3) ' index 0 - StudentID
								   ' index 1 - Reason for kDocType_OUT,
								   ' Group array for new Doc and kDocType_MOVE if Subjects with Groups exists for new class
		bElseBranch = False

		If nDocID = 0 Then
			bEqualTermTypes = (CStr(Request("EqualTermTypes_" & strClassesKey)) = "1")
			If bEqualTermTypes Then
				strSubDocSubjectsName = "SubDocSubjects_" & strClassesKey
				nSubjCount = Request(strSubDocSubjectsName).Count
				ReDim arrGroups(nSubjCount-1, 1) ' index 0 - SubjectID; index 1 - GroupID
				If nSubjCount = 0 Then
					' Здесь arrData(1, i-1) = Null - говорит о том, что все предметы - без подгрупп, но для них всё равно надо копировать итог. оценки!
					' В С# для проверки на Null используется Convert.IsDBNull()
					For i = 1 To nCount
						nStudentID = GetSafeLng(Request(strStudentSubDoc)(i), Null)
						arrData(i-1,0) = nStudentID
						arrData(i-1,1) = Null
					Next
				Else ' work with Groups
					For i = 1 To nCount
						nStudentID = GetSafeLng(Request(strStudentSubDoc)(i), Null)
						arrData(i-1,0) = nStudentID
						For j = 1 To nSubjCount
							strSubjectID = Request(strSubDocSubjectsName)(j)
							strGroupKey = "GROUP_" & nStudentID & "_" & strSubjectID
							strGroupID = GetSafeLng(Request(strGroupKey), Null)
							arrGroups(j-1,0) = strSubjectID
							arrGroups(j-1,1) = strGroupID
						Next
						arrData(i-1,1) = arrGroups
					Next
				End If
			Else
				bElseBranch = True
			End If
		Else
			bElseBranch = True
		End If

		If bElseBranch Then
			For i = 1 To nCount
				nStudentID = GetSafeLng(Request(strStudentSubDoc)(i), Null)
				arrData(i-1,0) = nStudentID
				Set arrData(i-1,1) = Nothing
			Next
		End If

		arrSubDocs( nSD-1, 2 ) = arrData
	Next
End Sub

Sub AreCheckDocDate()
	' Делаем проверку на правильность даты документа - чтобы была не меньше даты предыдущего документа и
	' не больше даты последующего (для нового дока - конечно же проверка только по предыд. доку).
	' Для этого сначала собираем все id учеников - по подготовленным массивам.
	' Здесь игнорируем тип дока "Выпускники", т.к. для них здесь дата дока не меняется.
	' Кроме того, в уже сушествующих доках - могло быть такое нарушение, для них делаем проверку, только если менялась дата.
	bCheckDocDate = True
	If bEmptyDoc Then
		bCheckDocDate = False
	ElseIf nDocType = kDocType_Enroll Then
		If nEnrollFrom = kEnrollBy_Import Or nEnrollFrom = kEnrollFrom_QAdd Then bCheckDocDate = False
	Else
		If nDocID > 0 And nDocType = kDocType_Move Then
			Set objDocInfo = objNSNET.GetMoveDocInfo(nDocID)
			dtDocDateOld = CDate(objDocInfo("DOCDATE"))
			If DateDiff("d", dtDocDateOld, dtDocDate, 0, 0) = 0 Then
				bCheckDocDate = False
			End If
		End If
	End If
End Sub

Sub CheckDocDate()
	' Для обычных школ и доп. школ - несколько по-разному возвращаются значения для objViol из компоненты.
	' Для обычных школ - это простой запрос, если нет нарушений, то objViol.EOF, иначе Not objViol.EOF.
	' Для доп. - если нет нарушений, то Nothing, иначе objViol, который уже принципиально не может быть objViol.EOF.
	'Dim strDelStudents, arrDels

	Dim strCurrClsID, bWasChecked

	On Error Resume Next
	If bCheckDocDate Then
		bViolation = False
		bWasChecked = False
		strStudentIDs = ""
		If nDocType = kDocType_Move Then
			If Not nDocID > 0 Then
				For nSD = 1 To nSubDocCount
					arrData = arrSubDocs( nSD-1, 2 )
					For i = 0 To UBound(arrData, 1)
						nStudentID = arrData(i,0)
						strStudentIDs = strStudentIDs & nStudentID & ","
					Next

					If bAddSchool Then
						bWasChecked = True
						' Здесь приходится проверять для каждого поддокумента, и, если обнаружено нарушение, то выходить...
						If Len(strStudentIDs) > 0 Then
							strCurrClsID = arrSubDocs( nSD-1, 1 )
							strStudentIDs = Left(strStudentIDs, Len(strStudentIDs) - 1)
							Set objViol = objNSNET.GetViolationMoveStudent_AddSchool(strStudentIDs, 0, dtDocDate, strCurrClsID)
							TestError_Ex obLanguage("Movement","kCantCheckMoveDoc")
							bViolation = Not objViol.EOF
							If bViolation Then
								Exit For ' For nSD = 1 To nSubDocCount ...
							Else
								strStudentIDs = ""
							End If
						End If
					End If

				Next
			End If
		ElseIf Not IsEmpty(arrSelectedUsersData) Then
			For i = 0 To UBound(arrSelectedUsersData,1)
				nStudentID = arrSelectedUsersData(i, 0)
				strStudentIDs = strStudentIDs & nStudentID & ","
			Next
		End If

		If Not bWasChecked Then
			If Len(strStudentIDs) > 0 Then strStudentIDs = Left(strStudentIDs, Len(strStudentIDs) - 1)

			If bAddSchool Then
				Set objViol = objNSNET.GetViolationMoveStudent_AddSchool(strStudentIDs, IIF(nDocID > 0, nDocID, 0), dtDocDate, strClassID)
			Else
				Set objViol = objNSNET.GetViolationMoveStudent(strStudentIDs, IIF(nDocID > 0, nDocID, 0), dtDocDate)
			End If
			TestError_Ex obLanguage("Movement","kCantCheckMoveDoc")

			bViolation = Not objViol.EOF
		End If

		If bViolation Then
			GenerateHTMLError_Ex obLanguage("Movement","kStudentDocDataViolation") & ":" & vbCrLf & obLanguage("Common","Ученик",strFunctionalityType) & " - " & _
				objViol("LASTNAME") & " " & objViol("FIRSTNAME") & " " & objViol("MIDDLENAME") & ", " & objViol("SCHOOLNAME") & " (" & objViol("CITYNAME") & ")." & vbCrLf & _
				"'" & objViol("DOCNUMBER") & "', " & Date2Str(objViol("DOCDATE")) & ", " & objViol("NOUNNAME") & ", " & objViol("CLASSNAME1") & "=>" & objViol("CLASSNAME2")
		End If
	End If
End Sub

Sub SaveClassesMoveDoc()
	on error resume next
	Dim nNewDocID
	If nDocID = 0 Then
		' create new move document
		nFailedStudentID = 0 : nResult = 0 : nNewDocID = 0 
		nResult = objNSNET.CreateMoveDoc(strCurrYearID, dtDocDate, strDocNumber, nDocType, nDocSubType, arrSubDocs, bAddSchool, nFailedStudentID, nNewDocID)
		TestError_Ex ErrorMessage

		strError = ""
		strError = GetErrorMessage(nResult)

		nDocID = nNewDocID
		If strError <> "" And nFailedStudentID <> 0 Then
			GenerateHTMLError_Ex strError & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
		End If

		' здесь надо сбросить накопительный Dictionary.
		Call obTokenMgr.SetData(strToken, stMoveDoc, Null)
	Else
		' edit existing move document
		nResult = objNSNET.EditMoveDoc(strCurrYearID, nDocID, dtDocDate, strDocNumber, arrSubDocs, bAddSchool)
		TestError_Ex ErrorMessage

		If nResult = kDocNumExists Then GenerateHTMLError_Ex obLanguage("Movement","kErrDocNumExists")
	End If
End Sub

'******************************************************************************************************************************
' ВНИМАНИЕ!!! Если меняете что-нибудь в ф-ции DoRedirect, то аналогично надо изменить в GenerateHTMLError_Ex. И наоборот.

Sub DoRedirect()
	If nDocType = kDocType_Move Then 
		RedirectTo "/asp/SetupSchool/Movement/ClassesMoveBookEdit.asp", Array("DOCTYPE", nDocType, "DOCID", nDocID)
	ElseIf nDocID=0 Then
		RedirectTo "/asp/SetupSchool/Movement/MoveBook.asp",NULL
	Else
		RedirectTo "/asp/SetupSchool/Movement/MoveBookEdit.asp", Array("DOCTYPE", nDocType, "DOCSUBTYPE", nDocSubType, "DOCID", nDocID, "RestoreParams", IIF(nDocID=0,1,""))
	End If
End Sub

Sub TestError_Ex( objErr )
	If Err<> 0 Then
		If bIsDebug Then Call SetDetailedErrMessage(objErr)
		GenerateHTMLError_Ex( objErr ) 
	End If
End Sub

Sub GenerateHTMLError_Ex( strText )
	Dim strDest

	nRealDocID = GetSafeLng(nRealDocID, 0)
	nDocID = nRealDocID
	
	If nDocType = kDocType_Move Then 
		strDest = "/asp/SetupSchool/Movement/ClassesMoveBookEdit.asp?DOCTYPE=" & nDocType & "&DOCID=" & nDocID
		If nDocID = 0 Then
			strDest = strDest & "&RestoreParams=1"
			Set objForm = Server.CreateObject("NetCity.Storage")
			objForm.Add "DOCDATE", dtDocDate
			objForm.Add "DOCNUMBER", strDocNumber
			Call obTokenMgr.SetData(strToken, "QA_dct",objForm)
		End If
	Else
		strDest = "/asp/SetupSchool/Movement/MoveBookEdit.asp?DOCTYPE=" & nDocType & "&DOCSUBTYPE=-1&DOCID=" & nDocID & "&RestoreParams=" & IIF(nDocID=0,1,"")
	End If
	Call EndTransaction(false)
	Call obTokenMgr.SetData( strToken, stWasSaved, Null )
	Call GenerateHTMLError( strText, strDest, strToken )
End Sub

'******************************************************************************************************************************

%>
