<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE FILE   ="Year_inc.asp" -->
<!-- #INCLUDE FILE   ="TermTypesSave_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strCompID, strSubjID, strHours
Dim arrGrades,arrProfiles,nPCount,arrIsAvailableColumn
Dim j,i,k,m, strSQL, objInsCmd, objSTTLCmd, bRollback
Dim lngReturnClass, lngReturnSubj, lngReturnProfile, lngResult, strClassName, strSubjName, strProfileName, strMsg
Dim dctTermTypes, arrGradeSet
Dim arrClasses, bClassesExists, arrGradeClasses, strClassID
Dim lngNCreated, lngNFailed
Dim transaction
Dim bAddToPlan

bRollback = False
Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

nFilterGradeMin = GetSafeLng(Request("GradeMin"), -1)
nFilterGradeMax = GetSafeLng(Request("GradeMax"), -1)
If nFilterGradeMin <> -1 And nFilterGradeMax <> -1 Then
	If minGrade < nFilterGradeMin Then minGrade = nFilterGradeMin
	If maxGrade > nFilterGradeMax Then maxGrade = nFilterGradeMax
End If
bAddToPlan = (Request("bAdd") = "True")

Call GetCurriculumColumns( arrGrades, arrProfiles, nPCount, arrClasses )

transaction = objNSNET.GetTransaction()
If Not bAddToPlan Then 
    Call objNSNET.ClearCurriculum_WT(transaction, strCurrYearID, nFilterGradeMin, nFilterGradeMax, True)
    TestErrorWithTransaction transaction,obLanguage("SetupSchoolCurPlan","kErrCantSaveCurriculumPlan")
End If
Set objInsCmd = objNSNET.CreateCurriculum_Prepare_WT(transaction, strCurrYearID)
'Set objSTTLCmd = objNSNET.GetSchoolTermTypeListForProfile_Prepare_WT(transaction, strCurrYearID)  иcпользуется только в Мастере WIZARD\PlanSave.asp

Set dctTermTypes = CreateObject("NetCity.Storage")

k=1
For j=1 To Request("COMPID").Count
	strCompID = GetSafeID( Request("COMPID")(j), NULL )
	strSubjID = GetSafeID( Request("SUBJID")(j), NULL )
	arrIsAvailableColumn = GetAvailableColumns( transaction,arrGrades, nPCount, strCurrYearID, strCompID )
	For i=0 To nPCount-1
		If arrIsAvailableColumn(i) Then
			bClassesExists = IsArray(arrClasses(i, 0))
			If bClassesExists Then
				arrGradeClasses = arrClasses(i, 0)
				For m = 0 To Ubound(arrGradeClasses, 2)
					strClassID = arrGradeClasses(0, m)
					strHours = Request("HOURS")(k) & ""
					k = k + 1
					If strHours <> "" Then
' ВНИМАНИЕ! При вызове ф-ции из Контрола, в которую передаётся параметр double, надо передавать именно
' число: CDbl(strHours), а не строку: strHours. Это связано стем, что CDbl для преобразования использует Session.LCID,
' а в данном случае у нас Request("HOURS") как раз и сформатирован с учётом Session.LCID (использовалась ф-я str2floatEx).
' Если использовать просто строку strHours, то преобразование её в число произойдёт автоматически, но, очевидно,
' Session.LCID рассматриваться не будет. Эта проблема появилась от необходимости одинаковой интерпретации десят. точки на Клиенте и на Сервере.
' Использование Session.LCID для Клиента и на Сервера, вроде, обеспечивает одинаковость.
						Call objNSNET.CreateCurriculum_Execute(objInsCmd, arrGrades(i), strSubjID, strCompID, arrProfiles(i), strClassID, CDbl(strHours))
						TestErrorWithTransaction transaction,obLanguage("SetupSchoolCurPlan","kErrCantSaveCurriculumPlan")

'						Call CollectTermTypesGrades(dctTermTypes, arrProfiles(i), arrGrades(i)) иcпользуется только в Мастере WIZARD\PlanSave.asp
					End If
				Next
			End If
		End If
	Next
Next

lngResult = objNSNET.CheckCurriculumHours_WT(transaction, strCurrYearID, minGrade, maxGrade, lngReturnClass, lngReturnSubj, lngReturnProfile)
TestErrorWithTransaction transaction,obLanguage("SetupSchoolCurPlan","kErrCantCheckHours")

If lngResult<0 Then
	If lngReturnSubj>0 Then strSubjName = objNSNET.GetSubjectName_WT(transaction, lngReturnSubj) Else strSubjName=""
	If lngReturnProfile>0 Then strProfileName = objNSNET.GetProfileName_WT(transaction, lngReturnProfile) Else strProfileName=""
	bRollback = True
	strMsg = vbCrLf & obLanguage("SetupSchoolCurPlan","kCurriculumNotChanged") & "." & vbCrLf & vbCrLf & obLanguage("Common","kClass",strFunctionalityType) & ": "
	If lngResult=-1 Then
		If lngReturnClass>0 Then strClassName = objNSNET.GetClassName_WT(transaction, lngReturnClass) Else strClassName=""
		strMsg = strMsg & strClassName
	ElseIf lngResult=-2 Then
		strMsg = strMsg & lngReturnClass ' Grade here, but not a Class name
	End If
	strMsg = strMsg & vbCrLf & obLanguage("Common","kSubject") & ": " & strSubjName & vbCrLf & obLanguage("Common","kProfile", strFunctionalityType) & ": " & strProfileName
	If lngResult=-1 Then
		Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCurPlan","kNoCurrForSubjectWithClass",strFunctionalityType)) & "." & strMsg)
	ElseIf lngResult=-2 Then
		Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCurPlan","kNoCurrForSubjectWithCalendarThematicPlan")) & "." & strMsg)
	End If
Else
	lngNCreated = objNSNET.GenerateCSGByCurriculum_WT(transaction, strCurrYearID, minGrade, maxGrade, lngNFailed)
	TestErrorWithTransaction transaction,obLanguage("SetupSchoolCurPlan","kErrCantGenerateCSG",strFunctionalityType)
	strMsg = ""
	If lngNCreated > 0 Then
		strMsg = obLanguage("SetupSchoolCurPlan","kNumberPairClassSubjectWasCreated",strFunctionalityType) & lngNCreated & "."
	End If
	If lngNFailed > 0 Then
		If strMsg <> "" Then strMsg = strMsg & vbCrLf
		strMsg = strMsg & obLanguage("SetupSchoolCurPlan","kNumberPairClassSubjectWasNotCreated_1",strFunctionalityType) & lngNFailed & obLanguage("SetupSchoolCurPlan","kNumberPairClassSubjectWasNotCreated_2",strFunctionalityType)
	End If
	If strMsg <> "" Then
		Call obTokenMgr.SetData( strToken, stWasSaved, strMsg)
	End If

	Call obTokenMgr.SetData(strToken, stCurrPlannerTreeFilter, "")
'	Call UpdateSchoolsTermTypes(dctTermTypes) - сейчас синхронизация (вернее только добавление) перенесена на этап создания класса. В Визарде синхр. осталась также и на этом этапе (этап в Визарде - Преподавание)
End If

If bRollback Then objNSNET.RollbackTransaction(transaction) Else objNSNET.CommitTransaction(transaction)
objNSNET.DisposeCommand(objInsCmd)

RedirectTo "CuriculumPlan.asp?", null

' иcпользуется только в Мастере WIZARD\PlanSave.asp 
' а здесь не используется
Sub CollectTermTypesGrades(transaction, dctTermTypes, nProfileID, nGradeID)
	Dim objTermTypes, objRS, nTermTypeID
	Dim nUbound2, i

	arrGradeSet = dctTermTypes.Item(nProfileID)
	If IsEmpty(arrGradeSet) Then
		ReDim arrGradeSet(2, 0) ' 0 - TermTypeID, 1 - GradeSet, 2 - default TermTypeID defines on demand

		Set objTermTypes = objNSNET.GetSchoolTermTypeListForProfile_Execute(objSTTLCmd, nProfileID)
		Call TestErrorWithTransaction (transaction,obLanguage("Common","kUnexpErr"))
		If objTermTypes.EOF Then
			arrGradeSet(0, 0) = 0
		Else
			arrGradeSet(0, 0) = -1 ' undefined
		End If
	Else
		Set objTermTypes = Nothing
	End If

	If arrGradeSet(0, 0) = 0 Then
		arrGradeSet(1, 0) = arrGradeSet(1, 0) Or 2^nGradeID
		dctTermTypes.Item(nProfileID) = arrGradeSet
		Exit Sub
	Else
		' find TermTypeID for Grade
		nTermTypeID = objNSNET.GetSafeSchoolTermTypeID_WT(transaction, strCurrYearID, nGradeID, nProfileID)
		Call TestErrorWithTransaction (transaction,obLanguage("Common","kUnexpErr"))

		If nTermTypeID = 0 Then
			' find default in array
			If CLng(arrGradeSet(2, 0)) = 0 Then
				' its time to define default TermTypeID from DB
				If objTermTypes Is Nothing Then
					Set objTermTypes = objNSNET.GetSchoolTermTypeListForProfile_Execute(objSTTLCmd, nProfileID)
					Call TestErrorWithTransaction (transaction,obLanguage("Common","kUnexpErr"))
					If objTermTypes.EOF Then Call GenerateErrorWithTransaction (transaction, obLanguage("Common","kUnexpErr"))
				End If
				nTermTypeID = CLng(objTermTypes("TERMTYPEID"))
				Do
					If CLng(objTermTypes("GRADESET")) <> 0 Then
						nTermTypeID = CLng(objTermTypes("TERMTYPEID"))
						Exit Do
					End If
					objTermTypes.MoveNext
					If objTermTypes.EOF Then Exit Do
				Loop
				arrGradeSet(2, 0) = nTermTypeID ' save default value in array
			Else
				' get it
				nTermTypeID = arrGradeSet(2, 0)
			End If
		End If

		' save Grade in GradeSet for its TermTypeID
		If arrGradeSet(0, 0) = -1 Then
			' undefined, it is possible for Empty arrGradeSet at the top.
			arrGradeSet(0, 0) = nTermTypeID
			arrGradeSet(1, 0) = 2^nGradeID
		Else
			nUbound2 = Ubound(arrGradeSet, 2)
			For i = 0 To nUbound2
				If arrGradeSet(0, i) = nTermTypeID Then
					arrGradeSet(1, i) = arrGradeSet(1, i) Or 2^nGradeID
					dctTermTypes.Item(nProfileID) = arrGradeSet
					Exit Sub
				End If
			Next
			' create new entry
			ReDim Preserve arrGradeSet(2, nUbound2 + 1)
			arrGradeSet(0, nUbound2 + 1) = nTermTypeID
			arrGradeSet(1, nUbound2 + 1) = 2^nGradeID
		End If
	End If

	dctTermTypes.Item(nProfileID) = arrGradeSet
End Sub
%>
