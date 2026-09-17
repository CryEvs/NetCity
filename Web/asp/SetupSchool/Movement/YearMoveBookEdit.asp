<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE="CommonMoveBookEdit_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="YearMoveBook_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim nGradeJunior_Max, nGradeMiddle_Max
Dim nSubDocGrade
Dim nSubDocIndex
Dim nFutureYearID

Sub SpecialReadState(objForm)
	Dim dtToday

	nGradeJunior_Max = -1
	nGradeMiddle_Max = -1
	If Not bAddSchool And Not bPreSchool And nDocType = kDocType_GRADUATE Then
		Call InitSchoolSettings(objNSNET)
		nGradeJunior_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeJunior_Max))
		nGradeMiddle_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeMiddle_Max))
	End If

	nFutureYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleYearMoveBook")
End Function

Sub InitMoveDocDates()
	' Для летнего движения определяем разрешённый диапазон дат. Он из настроек - летний отчётный период по движению.
	' Сейчас здесь работа происходит только для "будущего года" (т.е. до нажатия кнопки "Открыть новый год"), поэтому год
	' для ограничения берётся этот "будущий".
	' Если сделаем, чтобы редактировалось и после нажатия кнпки "Открыть новый год", т.е. в текущем рабочем году, то надо будет брать
	' уже этот год!
	If nFutureYearID > 0 Then
		Set objMovePeriods = objNSNET.GetSYMovePeriodsInfo(nFutureYearID)
	Else
		Set objMovePeriods = objNSNET.GetSYMovePeriodsInfo(strCurrYearId)
	End If
	If objMovePeriods.EOF Then GenerateError obLanguage("Common","kUnexpErr")

	dtMoveDocStart = CDate(objMovePeriods("STARTDATE"))
	dtMoveDocEnd = CDate(objMovePeriods("ENDDATE"))


	If BNewDoc Then

		'при создании нового документа корректируем дату (изначально установлен dtToday) чтобы дата докмента умещалась в интервал: dtMoveDocStart <= dtDocDate <= dtMoveDocEnd
		If DateDiff("d", dtDocDate, dtMoveDocStart, 0, 0) > 0 Then
			dtDocDate = dtMoveDocStart
		ElseIf DateDiff("d", dtDocDate, dtMoveDocEnd, 0, 0) < 0 Then
			dtDocDate = dtMoveDocEnd
		End If
		
	End If


End Sub

Sub InitMoveDirections()
	If nDocType = kDocType_GRADUATE And nDocSubType = kYearDocSubType_NotEnrolled Then
		bWithMoveInDirection = False
		bWithMoveOutDirection = False
		'bNoMoveDirection = True
		obTokenMgr.SetData strToken, stCurrClass, Null
		Exit Sub
	End If

	bWithMoveOutDirection = True
	If nDocSubType = kmdstNoClassEnroll Then 
		obTokenMgr.SetData strToken, stCurrClass, Null
		Call InitYearClasses()
		bWithMoveInDirection = True
		Exit Sub
	End If

	Set objClassesRs = objNSNET.GetNotEnrolledClasses(nYearID, nDocType, nDocSubType, strFunctionalityType, nFutureYearID)
	If objClassesRs.EOF Then strClassID = "0"

	If objClassesRs.EOF Then 
		bNoMoveDirection = True
	End If

	'для документов о переводе на след. год необходимо инициализировать класс зачисления
	If nDocType = kDocType_YEAR Or nDocType = kDocType_STAY Then
		bWithMoveInDirection = True
		Set objClassesRsMoveTo = objNSNET.GetYearClasses(nFutureYearID)
		If Not bNoMoveDirection Then bNoMoveDirection = objClassesRsMoveTo.EOF
	End If
End Sub

Sub DrawMovementDirection()
	Dim strFieldClassName
	strFieldClassName = "CLASSNAME"

	'остальное движение
	If bWithMoveOutDirection Then
		'класс выбытия
		If strClassID = "0" Then
			If bAddSchool And nDocType = kDocType_YEAR Then
				DrawInfo obLanguage("Filter","kNoYearClasses",strFunctionalityType), False
				Exit Sub
			Else
				Call DrawInfo(obLanguage("SetupSchoolCalendar","kAllClassesEnrolled",strFunctionalityType), False)
			End If
			bNoMoveDirection = True
			Exit Sub
		Else
			Call DrawSelectInfoRow(obLanguage("Movement","kClassOut",strFunctionalityType), strClassID, "CLASSID_FROM", objClassesRs, "CLASSID", strFieldClassName, Null, "")
		End If
	End If


	If bWithMoveInDirection Then
		If nDocType <> kDocType_GRADUATE Then
			'класс зачисления
			If strClassID = "0" Then
				DrawInfo obLanguage("Filter","kNoYearClasses",strFunctionalityType), False
				bNoMoveDirection = True
			End If
			If nDocType = kDocType_YEAR And nDocSubType = kmdstNoClassEnroll Then
				Call DrawExGrade("GRADE_TO", 0, "dataChanged();", false, obLanguage("Movement","kExGradeTo"))
			ElseIf objClassesRsMoveTo.EOF Then
				DrawInfo obLanguage("Filter","kNoYearClasses",strFunctionalityType), False
			Else
				Call DrawSelectInfoRow(obLanguage("Movement","kClassEnroll",strFunctionalityType), strMoveToClassID, "CLASSID_TO", objClassesRsMoveTo, "CLASSID", strFieldClassName, Null, "")
			End If
		End If
	End If
End Sub

Function IsAllClasssesEnrolled()
	'Work only after InitYearClasses
	IsAllClasssesEnrolled = (bNewDoc And strClassID = "0")
End Function

Sub DrawExtraHeaders(outNColNum)

	If bConditionalMoving Then
		%><th><%=obLanguage("Movement","kPassDebtDate")%></th><%
		outNColNum = outNColNum + 1
	End If

	If nDocType = kDocType_GRADUATE Then

		If Not bPreSchool Then
			%><th><%=obLanguage("SetupSchoolCalendar","kAward",strFunctionalityType)%></th><%
			outNColNum = outNColNum + 1
		End If

		%><th><%=obLanguage("Movement","kDepartReason")%></th><%
		outNColNum = outNColNum + 1
		
		If Not bAddSchool Then%>
			<th><%=obLanguage("Movement","kDepartTo")%></th><%
			outNColNum = outNColNum + 1
		End If

	End If
End Sub

Sub DrawStudentsExtraInfo(nStudentId, objDocStudents)

	Dim strPassDate, bHasTransferDocStay
	Dim strParamVal, strReason, strEOVal

	If bConditionalMoving Then
		%><td><%=Date2Str(objDocStudents("PASSDATE"))%></td><%
	End If

	If nDocType = kDocType_GRADUATE Then
		If Not bPreSchool Then
			If nSubDocGrade <> nGradeJunior_Max Then
				Call DrawAward(objDocStudents("AWARDTYPE"))
			Else
				Call DrawEmptyCell
			End If
		End If

		strReason = GetSafeStr(objDocStudents("ITEMNAME"), -1, " ")
		%><td><%=strReason%></td><%

		If Not bAddSchool Then
			strParamVal = GetSafeStr(objDocStudents("EOID"), -1, "-1")
			If strParamVal = "-1" Then strEOVal = " " Else strEOVal = objNSNET.GetEOFullName(strParamVal)
			%><td><%=DB2HTML(strEOVal)%></td><%
		End If
	End If
End Sub

Sub SpecialMain()
End Sub

Sub InitSubDoc(rsMoveDocClasses)
	nSubDocGrade = GetSafeLng(rsMoveDocClasses("GRADEFROM"), -1)

	If Not bPreSchool And nSubDocGrade <> nGradeJunior_Max Then
		Call InitAwardArray(nSubDocGrade = nGradeMiddle_Max, bConditionalMoving, bAddSchool)
	End If
End Sub
%>