<!-- #INCLUDE FILE=../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE=../SchoolSettings_inc.asp -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kEnrollFrom_Class = 1 ' Раньше было, что можно было зачислить из класса без приказа, но в связи с новыми правилами движения это устарело.
							' Теперь используется в ОДОах.
Const kEnrollFrom_WithoutClass = 2
Const kEnrollFrom_Pool = 3
Const kEnrollFrom_QAdd = 4
Const kEnrollBy_Import = 5
Const kEnrollBy_ExtImport = 6
Const kEnrollFrom_ESPool = 7
Const kEnrollFrom_RegionPool = 8

Const kResult_OK = 0
Const kResult_IN_LATER_DOC = -4
Const kResult_IN_SCHOOL = -5
Const kResult_Have_Results_Attend_MoveDoc = -6
Const kRemoveResult_TOTAL = -1
Const kRemoveResult_RESULT = -2
Const kRemoveResult_ATTEND = -3
Const kRemoveResult_NOT_IN_CLASS = -4
Const kRemoveResult_IN_ADDSCHOOL = -7
Const kRemoveResult_NotHaveReturnToPoolDoc = -8
Const kRemoveResult_HasDOUParentPay = -9
Const kRemoveResult_StudentNotInActivePool = -10
Const kDocNumExists = -2
Const kAddResult_TOTAL = -21
Const kAddResult_RESULT = -22
Const kAddResult_ATTEND = -23
Const kAddResult_IN_CLASS = -24
Const kAddErrNotifyEServices = -25
Const kAddErrRegionInvalidSelection = -26
Const kAddErrRegionNoPoolStudentsAdded = -27
Const kAddErrRegionServerError = -28
Const kRemoveStudentsFromMovDocException = -999

Const kMoveDocAction_Create = "CREATE"
Const kMoveDocAction_Update = "UPDATE"
Const kMoveDocAction_DeleteStudents = "DELETESTUDENTS"

Const kDocTermType_Undefined = 0

Const kEnrollSource_Pool = "pool"
Const kEnrollSource_Pool_OutOfSystem = "pool_out_of_system"
Const kEnrollSource_QuickAdd = "quickadd"
Const kEnrollSource_SchoolStudents = "school_students"
Const kEnrollSource_Import = "import" 
Const kEnrollSource_Attached = "attached"
Const kEnrollSource_EsPool = "espool"
Const kEnrollSource_Class = "enrolled"
Const kEnrollSource_Graduate_Attached = "graduate_attached"

Dim bIsSummerMove, bSimpleSubTupes

Dim dtMoveYearStart, dtMoveYearEnd
Dim arrDocSubTypes

Dim dctMoveDoc, dctSubDoc, strClassesKey
Dim nHiddenDocSubType ' Это значение для ОДО. Используется, чтобы не выводить даже readonly строку в фильтре, вместо этого - заполняется эта переменная, затем сохраняется в hidden.

Dim strAfterOpenMessage

Sub InitMoveYearPeriods
	Call CalcMoveCurrYearLimits(dtMoveYearStart, dtMoveYearEnd, True)
End Sub

Function IsYearMoveDoc(nDocType)
	IsYearMoveDoc = (nDocType=kDocType_YEAR or nDocType=kDocType_STAY or nDocType=kDocType_GRADUATE)
End Function

'Call After InitMoveYearPeriods
Sub InitMoveBookMode
	'Если еще не наступила дата начала года по движению то движение работает в "летнем" режиме, т.е. с соответствующими подтипами документов
	If bFutureMode Then
		bIsSummerMove = True
	ElseIf GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False) Then
		bIsSummerMove = True
	ElseIf DateDiff("d", NSNow(), dtMoveYearStart, 0, 0) > 0 Then
		bIsSummerMove = True
	Else
		bIsSummerMove = False
	End If
	'todo. разобраться с этим. возможно это уже лишнее.
	bIsSummerMove = False
	If nDocType = kDocType_OUT Then
		bSimpleSubTupes = True
	ElseIf CLng(strFunctionalityType) = kFuncType_PreSchool Then
		bSimpleSubTupes = True
	ElseIf nDocType = kDocType_MOVE Then
		bSimpleSubTupes = False
	Else
		bSimpleSubTupes = Not bIsSummerMove
	End If 
End Sub

Sub DrawSelectDocType(strForm, bWithCommonDocTypes, bWithYearDocTypes, strChange, bAll)
	Dim arrList
	Set arrList = Server.CreateObject("System.Collections.ArrayList")
	If bWithYearDocTypes Then
		arrList.Add kDocType_YEAR : arrList.Add obLanguage("Movement","kDocName_YEAR")
		If CLng(strFunctionalityType) <> kFuncType_Add And CLng(strFunctionalityType) <> kFuncType_PreSchool Then
			arrList.Add kDocType_STAY : arrList.Add obLanguage("Movement","kDocName_STAY")
		End If
		arrList.Add kDocType_GRADUATE : arrList.Add obLanguage("Movement","kDocName_GRADUATE")
	End If
	If bWithCommonDocTypes Then
		arrList.Add kDocType_OUT : arrList.Add obLanguage("Movement", "kDocName_OUT", strFunctionalityType)
		arrList.Add kDocType_ENROLL : arrList.Add obLanguage("Movement", "kDocName_ENROLL", strFunctionalityType)
		'If Not bFutureMode Then
		'отключаем в связи с тем, что зачисление из прикрепленных теперь будет реализовано как перевод из прикрепленных в класс
		arrList.Add kDocType_MOVE : arrList.Add obLanguage("Movement", "kDocName_MOVE", strFunctionalityType)
		'End If
	End If
	DrawSimpleFilterRow obLanguage("Movement","kDocType"), "DOCTYPE", arrList.ToArray(), nDocType, bAll, strChange
End Sub

Function InitDocSubTypes(nDocType)
	Dim arrDocSubTypes, nUBound

	If nDocType =  kDocType_YEAR Then
		If (CLng(strFunctionalityType) = kFuncType_PreSchool) Then
			arrDocSubTypes = Array( _
				kYearDocSubType_Simple, obLanguage("Movement","kDocSubTypeName_Simple"), _
				kYearDocSubType_NotEnrolled, obLanguage("Movement","kYearDocSubTypeName_NotEnrolled") _
			)
			InitDocSubTypes = arrDocSubTypes
			Exit Function
		End If
		
		arrDocSubTypes = Array( _
			kYearDocSubType_Simple, obLanguage("Movement","kDocSubTypeName_Simple"), _
			kYearDocSubType_AfterExams, obLanguage("Movement","kYearDocSubTypeName_AfterExams") _
		)

		If (CLng(strFunctionalityType) = kFuncType_Common) Then
			nUBound = UBound(arrDocSubTypes)
			ReDim Preserve arrDocSubTypes(nUBound + 4)
			arrDocSubTypes(nUBound + 1) = kYearDocSubType_Adapted
			arrDocSubTypes(nUBound + 2) = obLanguage("Movement","kYearDocSubTypeName_Adapted")
			arrDocSubTypes(nUBound + 3) = kYearDocSubType_Conditional
			arrDocSubTypes(nUBound + 4) = obLanguage("Movement","kDocSubTypeName_Conditional")
		End If

		nUBound = UBound(arrDocSubTypes)
		ReDim Preserve arrDocSubTypes(nUBound + 2)
		arrDocSubTypes(nUBound + 1) = kYearDocSubType_NotEnrolled
		arrDocSubTypes(nUBound + 2) = obLanguage("Movement","kYearDocSubTypeName_NotEnrolled")
	ElseIf nDocType =  kDocType_GRADUATE Then
		If (CLng(strFunctionalityType) = kFuncType_Common) Then
			arrDocSubTypes = Array( _
				kDocSubType_Simple, obLanguage("Movement","kDocSubTypeName_Simple"), _
				kYearDocSubType_Conditional, obLanguage("Movement","kDocSubTypeName_Conditional"), _
				kmdstNoClassEnroll, obLanguage("Movement","kmdstTitleNoClassEnroll") _
			)
		Else
			arrDocSubTypes = Array( _
				kDocSubType_Simple, obLanguage("Movement","kDocSubTypeName_Simple") _
			)
		End If
	ElseIf nDocType = kDocType_ENROLL Or nDocType = kDocType_OUT Then
		arrDocSubTypes = Array(kmdstAllClassesEnroll, obLanguage("Movement","kmdstTitleAllGradesEnroll"), kmdstNoClassEnroll, obLanguage("Movement","kmdstTitleNoClassEnroll"))
	ElseIf nDocType = kDocType_MOVE Then
		If (CLng(strFunctionalityType) = kFuncType_Common) Then
			arrDocSubTypes = Array( _
				kDocSubType_Simple, obLanguage("Movement","kDocSubTypeName_Simple"), _
				kClassesDocSubType_FromNotEnrolled, obLanguage("Movement","kClassesDocSubTypeName_FromNotEnrolled"), _
				kClassesDocSubType_Stay, obLanguage("Movement","kClassesDocSubTypeName_Stay") _
			)
		Else
			arrDocSubTypes = Array( _
				kDocSubType_Simple, obLanguage("Movement","kDocSubTypeName_Simple"), _
				kClassesDocSubType_FromNotEnrolled, obLanguage("Movement","kClassesDocSubTypeName_FromNotEnrolled") _
			)
		End If
	Else
		arrDocSubTypes = Array(kYearDocSubType_Simple, obLanguage("Movement","kDocSubTypeName_Simple"))
	End If
	InitDocSubTypes = arrDocSubTypes
End Function

Sub DrawSelectDocSubType(nDocType, strChange, bAll)
	Dim arrDocSubTypes
	arrDocSubTypes = InitDocSubTypes(nDocType)
	If bAddSchool Then
		WriteHiddenTags(Array("DOCSUBTYPE", nDocSubType))
	Else
		DrawSimpleFilterRow obLanguage("Movement","kDocSubType"), "DOCSUBTYPE", arrDocSubTypes, nDocSubType, strChange, bAll
	End If
End Sub

Function CheckDocSubType(nDocType, nDocSubType, bAll)
	Dim arrDocTypeSubTypes, i
	CheckDocSubType = -1
	If bAll Then
		If nDocType = -1 Or nDocSubType = -1 Then
			Exit Function
		End If
	End If

	arrDocTypeSubTypes = InitDocSubTypes(nDocType)

	For i = 0 To UBound(arrDocTypeSubTypes) Step 2
		If nDocSubType = arrDocTypeSubTypes(i) Then
			CheckDocSubType = nDocSubType
			Exit Function 'valid
		End If
	Next

	CheckDocSubType = arrDocTypeSubTypes(0)
End Function

Function GetDefualtDocSubType(nDocType)
	nDocType = GetSafeLng(nDocType, 0)
	If nDocType < kDocType_OUT Or nDocType > kDocType_GRADUATE Then
		GenerateError obLanguage("Movement","kErrUnknownDocType")
	End If

	Select Case nDocType
		Case kDocType_OUT, _
			kDocType_ENROLL
			GetDefualtDocSubType = kmdstAllClassesEnroll

		Case Else
			GetDefualtDocSubType = kDocSubType_Simple
	End Select
End Function

Function GetSafeDocSubType(nDocType, nSetSubDocType, bAll)
	Dim bYearDoc, nDefaultSubType, arrDocTypeSubTypes, i
	Dim nSubType

	bYearDoc = (nDocType = kDocType_YEAR or nDocType = kDocType_STAY or nDocType = kDocType_GRADUATE)
	nDefaultSubType = IIF(bYearDoc, kYearDocSubType_Simple, kmdstAllClassesEnroll) 

	If bAddSchool Then
		'в моделе ОДОД не используются поддокументы вовсе.
		'GetSafeDocSubType = nDefaultSubType
		' #21959. Оказывается важно задавать точные подтипы - для MovementSourceInfoResponse GetSourceInfo(...) - в ClassStudentsSource.cs
		GetSafeDocSubType = IIF(nDocType = kDocType_MOVE, kDocSubType_Simple, nDefaultSubType)
		Exit Function
	End If

	nSubType = GetSafeLng(nSetSubDocType, nDefaultSubType)
	GetSafeDocSubType = CheckDocSubType(nDocType, nSubType, bAll)
End Function

Sub DrawExGrade(strInputName, selectedGradeId, strChange, bAll, InfoName)
'	Будущие параллели для прикреплённых к ОО
	Dim arrGrades
	arrGrades = GetArrGrades(strFunctionalityType, 0, bAll, 1)
	DrawSelectInfoRow InfoName, selectedGradeId, strInputName, arrGrades, "", "", Null, strChange
End Sub


Sub GetDocInfo(nDocTypeID, strDocTypeName)
	Select Case nDocTypeID
	Case kDocType_OUT		strDocTypeName = obLanguage("Movement","kDocName_OUT",strFunctionalityType)
	Case kDocType_ENROLL		strDocTypeName = obLanguage("Movement","kDocName_ENROLL",strFunctionalityType)
	Case kDocType_MOVE		strDocTypeName = obLanguage("Movement","kDocName_MOVE",strFunctionalityType)
	Case kDocType_YEAR		strDocTypeName = obLanguage("Movement","kDocName_YEAR")
	Case kDocType_STAY		strDocTypeName = obLanguage("Movement","kDocName_STAY")
	Case kDocType_GRADUATE		strDocTypeName = obLanguage("Movement","kDocName_GRADUATE")
	Case Else		GenerateError obLanguage("Movement","kErrUnknownDocType")
	End Select
End Sub

Function GetTitleDocSubType(nDocTypeID)
	Select Case nDocTypeID
	Case kmdstAllClassesEnroll							GetTitleDocSubType = obLanguage("Movement","kmdstTitleAllGradesEnroll")
	Case kmdstNoClassEnroll								GetTitleDocSubType = obLanguage("Movement","kmdstTitleNoClassEnroll")
	Case kDocSubType_Simple								GetTitleDocSubType = obLanguage("Movement","kDocSubTypeName_Simple")
	Case kClassesDocSubType_FromNotEnrolled				GetTitleDocSubType = obLanguage("Movement","kClassesDocSubTypeName_FromNotEnrolled")
	Case kClassesDocSubType_Stay						GetTitleDocSubType = obLanguage("Movement","kClassesDocSubTypeName_Stay")
	Case Else GetTitleDocSubType = GetTitleDocSubTypeYear(nDocTypeID)
	End Select
End Function

Function GetTitleDocSubTypeYear(nDocTypeID)
	Select Case nDocTypeID
	Case kYearDocSubType_Simple		 GetTitleDocSubTypeYear = obLanguage("Movement","kDocSubTypeName_Simple")
	Case kYearDocSubType_AfterExams  GetTitleDocSubTypeYear = obLanguage("Movement","kYearDocSubTypeName_AfterExams")
	Case kYearDocSubType_Adapted	 GetTitleDocSubTypeYear = obLanguage("Movement","kYearDocSubTypeName_Adapted")
	Case kYearDocSubType_Conditional GetTitleDocSubTypeYear = obLanguage("Movement","kDocSubTypeName_Conditional")
	Case kYearDocSubType_NotEnrolled GetTitleDocSubTypeYear = obLanguage("Movement","kYearDocSubTypeName_NotEnrolled")
	Case Else GenerateError "Неизвестный подтип документа"
	End Select
End Function

Function GetMoveDocClasses(objRs, nDocType, arrPreGrades, nDocSubType)
	Dim strClasses, strClassName
	Dim bPre, nIndx

	bPre = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	strClasses = ""
	Select Case nDocType
	Case kDocType_MOVE
		While Not objRs.EOF
			strClassName = objRs("NAMEFROM")
			If IsDull(strClassName) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")
			If strClassName <> "0" Then strClasses = strClasses & DB2HTML(strClassName) & " => "
			strClassName = GetSafeStr(objRs("NAMETO"), -1, "?")
			strClasses = strClasses & DB2HTML(strClassName) & "<br>"
			objRs.MoveNext
		WEnd
	Case kDocType_ENROLL
		While Not objRs.EOF
			strClassName = objRs("NAMEFROM")
			If IsDull(strClassName) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")
			If strClassName <> "0" Then strClasses = strClasses & DB2HTML(strClassName) & " => "
			strClassName = objRs("NAMETO")
			If IsDull( strClassName ) Then strClassName = GetSafeStr(objRs("GRADETO"), -1, "?")

			If bPre And nDocSubType = kmdstNoClassEnroll And strClassName <> "?" Then
				nIndx = GetSafeLng(strClassName, -1)
				If nIndx >= 0 And nIndx <= UBound(arrPreGrades, 2) Then
					strClassName = arrPreGrades(1, nIndx)
				End If
			End If

			strClasses = strClasses & DB2HTML(strClassName) & "<br>"
			objRs.MoveNext
		WEnd
	Case kDocType_OUT
		While Not objRs.EOF
			strClassName = objRs("NAMEFROM")
			If IsDull( strClassName ) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")

			If bPre And nDocSubType = kmdstNoClassEnroll And strClassName <> "?" Then
				nIndx = GetSafeLng(strClassName, -1)
				If nIndx >= 0 And nIndx <= UBound(arrPreGrades, 2) Then
					strClassName = arrPreGrades (1, nIndx)
				End If
			End If

			strClasses = strClasses & DB2HTML(strClassName) & "<br>"
			objRs.MoveNext
		WEnd
	Case kDocType_GRADUATE
		While Not objRs.EOF
			strClassName = objRs("NAMEFROM")
			If IsDull( strClassName ) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")

			If bPre And nDocSubType = kmdstNoClassEnroll And strClassName <> "?" Then
				nIndx = GetSafeLng(strClassName, -1)
				If nIndx >= 0 And nIndx <= UBound(arrPreGrades, 2) Then
					strClassName = arrPreGrades (1, nIndx)
				End If
			End If

			strClasses = strClasses & DB2HTML(strClassName) & " => " & obLanguage("Movement","kDocName_GRADUATE") & "<br>"
			objRs.MoveNext
		WEnd
	Case kDocType_YEAR
		While Not objRs.EOF
			strClassName = objRs("NAMEFROM")
			If IsDull( strClassName ) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")
			strClasses = strClasses & DB2HTML(strClassName) & " => "
			strClassName = objRs("NAMETO")

			If IsDull(strClassName) Then
				If bPre Then
					If Not IsDull(objRs("GRADETO")) Then
						strClassName = arrPreGrades(1, GetSafeLng(objRs("GRADETO"), Null))
						strClassName = Trim(strClassName)
					End If
				Else
					strClassName = objRs("GRADETO")
				End If
			End If
			If IsDull( strClassName ) Then strClassName = "?"
			strClasses = strClasses & DB2HTML(strClassName) & "<br>"
			objRs.MoveNext
		WEnd
	Case kDocType_STAY
		While Not objRs.EOF
			strClassName = GetSafeStr(objRs("NAMEFROM"), -1, "?")
			strClasses = strClasses & DB2HTML(strClassName) & " => "
			strClassName = objRs("NAMETO")

			If IsDull(strClassName) Then
				If bPre Then
					If Not IsDull(objRs("GRADEFROM")) Then
						strClassName = objRs("NAMEFROM") & " " & arrPreGrades(1, GetSafeLng(objRs("GRADEFROM"), Null))
						strClassName = Trim(strClassName)
					End If
				Else
					strClassName = objRs("GRADETO")
				End If

				If IsDull(strClassName) Then strClassName = "?"
			End If
			 
			strClasses = strClasses & DB2HTML(strClassName) & "<br>"
			objRs.MoveNext
		WEnd
	End Select

	If strClasses = "" Then strClasses = DB2HTML(strClasses)
	GetMoveDocClasses = strClasses
End Function

Function GetMoveSubDocClasses(objRs, nDocType, arrPreGrades)
	Dim strClasses, strClassName
	Dim bPre
	Dim strGrade

	If objRs.EOF Then GenerateError obLanguage("Common","kUnexpErr")

	bPre = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	strClasses = ""
	Select Case nDocType
	Case kDocType_MOVE
		strClassName = objRs("NAMEFROM")
		If IsDull(strClassName) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")
		If strClassName <> "0" Then strClasses = strClasses & DB2HTML(strClassName) & " => "
		strClassName = GetSafeStr(objRs("NAMETO"), -1, "?")
		strClasses = strClasses & DB2HTML(strClassName) & "<br>"
	Case kDocType_ENROLL
		strClassName = objRs("NAMEFROM")
		If IsDull( strClassName ) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")
		If strClassName <> "0" Then strClasses = strClasses & DB2HTML(strClassName) & " => "
		strClassName = objRs("NAMETO")
		strGrade = objRs("GRADETO")
		If IsDull( strClassName ) Then strClassName = GetSafeStr(strGrade, -1, "?")
		If bPre And nDocSubType = kmdstNoClassEnroll And strClassName<>"?" Then strClassName = arrPreGrades(1, GetSafeLng(strGrade, 0))
		strClasses = strClasses & DB2HTML(strClassName) & "<br>"
	Case kDocType_OUT
		strClassName = objRs("NAMEFROM")
		strGrade = objRs("GRADEFROM")
		If IsDull( strClassName ) Then strClassName = GetSafeStr(strGrade, -1, "?")
		If bPre And nDocSubType = kmdstNoClassEnroll And strClassName<>"?" Then strClassName = arrPreGrades(1, GetSafeLng(strGrade, 0))
		strClasses = strClasses & DB2HTML(strClassName) & "<br>"
	Case kDocType_GRADUATE
		strClassName = objRs("NAMEFROM")
		strGrade = objRs("GRADEFROM")
		If IsDull( strClassName ) Then strClassName = GetSafeStr(strGrade, -1, "?")
		If bPre And nDocSubType = kmdstNoClassEnroll And strClassName<>"?" Then strClassName = arrPreGrades(1, GetSafeLng(strGrade, 0))
		strClasses = strClasses & DB2HTML(strClassName) & " => " & obLanguage("Movement","kDocName_GRADUATE")
	Case kDocType_YEAR
		strClassName = objRs("NAMEFROM")
		If IsDull( strClassName ) Then strClassName = GetSafeStr(objRs("GRADEFROM"), -1, "?")
		strClasses = strClasses & DB2HTML(strClassName) & " => "
		strClassName = objRs("NAMETO")

		If IsDull(strClassName) Then
			If bPre Then
				If Not IsDull(objRs("GRADETO")) Then
					strClassName = arrPreGrades(1, GetSafeLng(objRs("GRADETO"), Null))
					strClassName = Trim(strClassName)
				End If
			Else
				strClassName = objRs("GRADETO")
			End If

			If IsDull(strClassName) Then strClassName = "?"
		End If
		strClasses = strClasses & DB2HTML(strClassName) & "<br>"
	Case kDocType_STAY
		strClassName = GetSafeStr(objRs("NAMEFROM"), -1, "?")
		strClasses = strClasses & DB2HTML(strClassName) & " => "
		strClassName = objRs("NAMETO")
		If IsDull( strClassName ) Then
			If bPre Then
				If Not IsDull(objRs("GRADEFROM")) Then
					strClassName = objRs("NAMEFROM") & " " & arrPreGrades(1, GetSafeLng(objRs("GRADEFROM"), Null))
					strClassName = Trim(strClassName)
				End If
			Else
				strClassName = objRs("GRADETO")
			End If
			If IsDull( strClassName ) Then strClassName = "?"
		End If
		strClasses = strClasses & DB2HTML(strClassName) & "<br>"
	End Select

	GetMoveSubDocClasses = strClasses
End Function

Function GetDocTypeName(nDocType)
	Select Case nDocType
	Case -1		GetDocTypeName = obLanguage("Common","kAll")
	Case kDocType_OUT		GetDocTypeName = obLanguage("Movement","kDocName_OUT",strFunctionalityType)
	Case kDocType_ENROLL		GetDocTypeName = obLanguage("Movement","kDocName_ENROLL",strFunctionalityType)
	Case kDocType_MOVE		GetDocTypeName = obLanguage("Movement","kDocName_MOVE",strFunctionalityType)
	Case kDocType_YEAR		GetDocTypeName = obLanguage("Movement","kDocName_YEAR")
	Case kDocType_STAY		GetDocTypeName = obLanguage("Movement","kDocName_STAY")
	Case kDocType_GRADUATE		GetDocTypeName = obLanguage("Movement","kDocName_GRADUATE")
	Case Else		GenerateError obLanguage("Movement","kErrUnknownDocType")
	End Select
End Function

Sub DrawMoveBookTable(objDocs, bLink)
	Dim strDocID, nDocumentType, strDocTypeName
	Dim strClasses
	Dim cmdMoveDocClasses, rsMoveDocClasses
	Dim cmdMoveDocStudentCnt, cmdMoveDocStudentName
	Dim nStudentCnt, strStudentName
	Dim arr%>

	<table class="table table-xs table-print table-bordered table-thin table-striped table-hover print-block">
		<tr>
			<th><%=obLanguage("Movement","kDocNumberBR")%></th>
			<th><%=obLanguage("Movement","kDocDateBR")%></th><%

			If nDocType = -1 Then%>
				<th><%=obLanguage("Movement","kDocType")%></th><%
			End If%>

			<th><%=obLanguage("Movement","kClassOutEnrollBR",strFunctionalityType)%></th>
			<th><%
				RW obLanguage("Common","kLastName")

				If nDocType = kDocType_ENROLL Then
					RW "<br>"&obLanguage("Common","kArriveFrom")
				ElseIf nDocType = kDocType_OUT And CLng(strFunctionalityType)<>kFuncType_Add Then RW "<br>"&obLanguage("Movement","kDepartTo")
				End If%>
			</th>
		</tr><%

		If CLng(strFunctionalityType) = kFuncType_PreSchool Then arr = GetArrGrades(strFunctionalityType,1,0,0)

		Set cmdMoveDocClasses = objNSNET.GetMoveDocClasses_Prepare()
		While Not objDocs.EOF
			strDocID = GetSafeID(objDocs("DOCID"), Null)
			Set rsMoveDocClasses = objNSNET.GetMoveDocClasses_Execute(cmdMoveDocClasses, strDocID)

			nDocumentType = GetSafeLng(objDocs("DOCTYPE"), Null)
			Call GetDocInfo(nDocumentType, strDocTypeName)
			strClasses = GetMoveDocClasses(rsMoveDocClasses, nDocumentType, arr, objDocs("MBSUBTYPE"))

			strStudentName = ""
			nStudentCnt = GetSafeLng(objDocs("CNT"), Null)

			If bLink Then
				Response.Write "<tr><td class=""text-center"" valign=""top"">" & ShowAnchor("editDoc(" & strDocID & "," & nDocumentType &")", obLanguage("Movement","kEditOrViewDoc"), DB2HTML(objDocs("DOCNUMBER")), "")
			Else
				Response.Write "<tr><td class=""text-center"" valign=""top"">" & DB2HTML(objDocs("DOCNUMBER"))
			End If

			Response.Write "</td><td class=""text-center"" valign=""top"">" & Date2Str(objDocs("DOCDATE"))
			If nDocType = -1 Then
				Response.Write "</td><td valign=""top"">" & strDocTypeName
			End If

			Response.Write "</td><td class=""text-center"" valign=""top"">" & strClasses
			Response.Write "</td><td valign=""top"">"

			If nStudentCnt = 1 Then
				If Not IsDull(objDocs("NICKNAME")) Then strStudentName = objDocs("NICKNAME")
				RW DB2HTML(strStudentName)
			Else
				RW obLanguage("Movement","kQuantity") & ":&nbsp;" & nStudentCnt
			End If
			RW "</td></tr>"

			objDocs.MoveNext
		WEnd
		Call objNSNET.DisposeCommand(cmdMoveDocClasses)%>
	</table><%
End Sub


' objClsRs should exists before this call!!!
' Call If Not objClsRs.EOF (or strClassID <> "0") only!!!
' return flag - is the single class in this school only (in this case the moving between classes is not impossible!)
Function InitYearClassesMoveTo(objClsRs)
	Dim strID

	If IsDull(Request("MoveToClassID")) Then
		strMoveToClassID = GetSafeID( obTokenMgr.GetData( strToken, stMoveToClass), "0")
	Else
		strMoveToClassID = GetSafeID( Request("MoveToClassID"), "0")
	End If
	strMoveToClassID = GetSafeIDForRs(strMoveToClassID, objClsRs, "CLASSID")

	strMoveToClassID = CStr(strMoveToClassID)
	If strMoveToClassID = "0" Or strMoveToClassID = CStr(strClassID) Then
		Do While Not objClsRs.EOF
			strID = CStr(objClsRs("CLASSID"))
			If strID <> CStr(strClassID) Then strMoveToClassID = strID : Exit Do
			objClsRs.MoveNext
		Loop

		objClsRs.MoveFirst ' move to begin of recordset after scrolling
	End If

	InitYearClassesMoveTo = (strMoveToClassID = "0" Or strMoveToClassID = strClassID) ' return flag
End Function

Function IsAvailableStudent(strID)
	' scan all subdocs, look for strID
	If Not (dctMoveDoc Is Nothing) Then
		For Each strClassesKey In dctMoveDoc
			Set dctSubDoc = dctMoveDoc(strClassesKey)
			If dctSubDoc.Exists(CStr(strID)) Then
				IsAvailableStudent = strClassesKey ' curr student in curr order already, return ClassesKey
				Exit Function
			End If
		Next
	End If

	IsAvailableStudent = ""
End Function

Function IsSelectedStudent(strStudentID)
	IsSelectedStudent = dctSelectedUsers.Exists(strStudentID & "")
End Function

Sub DrawStudentsCheckBox(strStudentID, rsMSL, bSuitableForEnroll, strRwSpan)
	Dim bSelected, arrClasses, nClassID, strClassName, nEOID, nDepartEOID

	strClassesKey = IsAvailableStudent(strStudentID)

	If Not IsDull(strClassesKey) Then
		' ученик уже в редактируемом приказе, вместо чекбокса для выбора выводим имя класса в скобках
		arrClasses = Split(strClassesKey, "_", 2)
		nClassID = GetSafeLng(arrClasses(0), -1)
		If nClassID > 0 Then strClassName = objNSNET.GetClassName(nClassID) Else strClassName=obLanguage("Common","kNo")%>

		<TD <%=strRwSpan%>><b>(<%=DB2HTML(strClassName)%>)</b></TD><%
	Else ' common
		bSelected = IsSelectedStudent(strStudentID)%>
		<td width="30px" align="center" <%=strRwSpan%>>
			<input type="checkbox" name="Students" value="<%=strStudentID%>" <%If Not bSuitableForEnroll Then%>onclick="changeUnsuitable(this)"<%End If%> <%If bSelected Then RW "checked >" : WriteHiddenTags(Array("oldUsers",strStudentID)) Else RW ">" End If
			If CLng(strFunctionalityType)<>kFuncType_Add Then
				If IsNull(rsMSL) Then
					nEOID = -1
					nDepartEOID = -1
				Else 
					If rsMSL.Fields.Exists("EOID") Then
						nEOID = GetSafeLng(rsMSL("EOID"), -1)
					Else
						nEOID = -1
					End If

					If rsMSL.Fields.Exists("DEPARTEOID") Then
						nDepartEOID = GetSafeLng(rsMSL("DEPARTEOID"), -1)
					Else
						nDepartEOID = -1
					End If
				End If
				WriteHiddenTags(Array("EOID_" & strStudentID, nEOID, "DEPARTEOID_" & strStudentID, nDepartEOID))
			End If %>
		</td><%
	End If
End Sub

Sub GetMoveDocClassesID(strClassesKey, nDocType, strDocClass1ID, strDocClass2ID)
	Dim arrDocClasses

	arrDocClasses = Split(strClassesKey, "_", 2)
	strDocClass1ID = arrDocClasses(0)
	If nDocType = kDocType_MOVE Then strDocClass2ID = arrDocClasses(1) Else strDocClass2ID = ""
End Sub

Function GetErrorMessage( nReasonCode )
	'kDocNumExists - остался только в YearMoveBook
	Select Case nReasonCode
		'Case kDocNumExists : GenerateError obLanguage("Movement","kErrDocNumExists")
		Case kRemoveResult_TOTAL : GetErrorMessage = obLanguage("Movement","kCantRemoveStudent_TOTAL",strFunctionalityType).Format(Array(""))
		Case kRemoveResult_RESULT : GetErrorMessage = obLanguage("Movement","kCantRemoveStudent_RESULT",strFunctionalityType).Format(Array(""))
		Case kRemoveResult_ATTEND : GetErrorMessage = obLanguage("Movement","kCantRemoveStudent_ATTEND",strFunctionalityType).Format(Array(""))
		Case kRemoveResult_NOT_IN_CLASS : GetErrorMessage = obLanguage("Movement","kCantRemoveStudent_NOT_IN_CLASS",strFunctionalityType).Format(Array(""))
		Case kRemoveResult_IN_ADDSCHOOL : GetErrorMessage = obLanguage("Movement","kCantRemoveStudent_IN_ADDSCHOOL",strFunctionalityType)
		Case kRemoveResult_HasDOUParentPay : GetErrorMessage = obLanguage("Movement","kCantRemoveStudent_HasDOUParentPay")
		Case kAddResult_TOTAL : GetErrorMessage = obLanguage("Movement","kCantAddStudent_TOTAL",strFunctionalityType).Format(Array(""))
		Case kAddResult_RESULT : GetErrorMessage = obLanguage("Movement","kCantAddStudent_RESULT",strFunctionalityType).Format(Array(""))
		Case kAddResult_ATTEND : GetErrorMessage = obLanguage("Movement","kCantAddStudent_ATTEND",strFunctionalityType).Format(Array(""))
		Case kAddResult_IN_CLASS : GetErrorMessage = obLanguage("Movement","kCantAddStudent_IN_CLASS",strFunctionalityType).Format(Array(""))
		Case kAddErrNotifyEServices : GetErrorMessage = obLanguage("PoolStudents","kErrEServicesNotify")
		Case kAddErrRegionInvalidSelection : GetErrorMessage = obLanguage("PoolStudents","kErrRegionInvalidSelection")
		Case kAddErrRegionNoPoolStudentsAdded : GetErrorMessage = "" 'obLanguage("PoolStudents","kErrRegionNoPoolStudentsAdded") - сообщение об ошибке не должно генерироваться
		Case kAddErrRegionServerError : GetErrorMessage = obLanguage("PoolStudents","kRegionServerError")
	End Select
End Function

Function MakeErrMessage_StudentNotInActivePool()
	Dim strErrMsg

	strErrMsg = obLanguage("Movement","kDelDoc_StudentNotInActivePool",strFunctionalityType)
	If obContext.ServerSettings.SystemSettings.ModuleRegion Then
		strErrMsg = Replace(strErrMsg, "%", obLanguage("Movement","kMayBeStudentEnrolledToOtherRegion"))
	Else
		strErrMsg = Replace(strErrMsg, "%", "")
	End If

	MakeErrMessage_StudentNotInActivePool = strErrMsg
End Function%>