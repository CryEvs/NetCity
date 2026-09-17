<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE FILE="importStudExt_inc.asp" -->
<!-- #INCLUDE VIRTUAL="asp/SetupSchool/MoveDoc_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nPos, strSeparator, bErrAddRow, bPreSchool, arrPreGrades
Dim strFLastName, strFFirstName, strFMiddleName, dtFBirthDate, nFSnilsPos, strFSnils
Dim strMLastName, strMFirstName, strMMiddleName, dtMBirthDate, nMSnilsPos, strMSnils
Dim nSNILSPos, strSNILS

' Убираю 2 шаблона для bDisableHealthData = True
' #18262 Добавляем 8 полей для каждого Родителя, итого 16 полей
' #19171 Добавляем для Паспорта новое поле "Код подразделения", получается для Детсада - 2 для Родителей, для Школы - 3 для всех.
' #20800 Добавляем 2 параметра

Const PRESCHOOL_EXT_IMPORT_PATTERN = _
"sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
' 86

Const EXT_IMPORT_PATTERN = _
"sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
' 98

Sub ProcessFile()
	Dim nLenImportFile
	Dim resParseLine, strLine
	Dim strCurrPattern
	Dim rsInOtherSchools, nIndexFather, nIndexMother
	Dim bShowMnsForms, bModuleTalentStudents

	' title
	bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool
	if bPreSchool Then arrPreGrades = GetArrGrades (strFunctionalityType, 1, 0, 0)

	strSeparator = GetSafeStr(obTokenMgr.GetData(strToken, "Separator"), 1, ",")

	If bPreSchool Then
		strCurrPattern = PRESCHOOL_EXT_IMPORT_PATTERN
		nSNILSPos = 71
	Else
		strCurrPattern = EXT_IMPORT_PATTERN
		nSNILSPos = 84 ' см. importStudentsExtSave.asp
	End If

	bShowMnsForms = obContext.ServerSettings.SystemSettings.ShowMnsForms
	bModuleTalentStudents = obContext.ServerSettings.SystemSettings.ModuleTalentStudents
	If Not bShowMnsForms Then ' #19661. Корректируем шаблон.
		strCurrPattern = Left(strCurrPattern, Len(strCurrPattern) - 1)
	End If
	If Not bModuleTalentStudents Then ' #20800. Корректируем шаблон.
		strCurrPattern = Left(strCurrPattern, Len(strCurrPattern) - 2)
	End If

	For j = 1 To 4
		strLine = objImportComponent.GetLine(strImportFileText, nPos)
		Set resParseLine = objImportComponent.ParseLine(strLine, strCurrPattern, strSeparator)
		If Not resParseLine.IsSuccess Then Exit For
	Next

	'Const kDimens=64 определена в Inc-файле используется для импорта в 1с
	' arrItem(со 2 по 52) используются в importStudXML для 1с необходимо их синхронизировать при перенумерациях
	nLenImportFile = Len(strImportFileText)
	Do While nPos < nLenImportFile
		If Not Response.IsClientConnected Then
			Response.End
		End If

		strLine = objImportComponent.GetLine(strImportFileText, nPos)
		Set resParseLine = objImportComponent.ParseLine(strLine, strCurrPattern, strSeparator)
		i = i + 1
		Response.Write i & " "
		Response.Flush
		arrItem = resParseLine.Data

		strLine = "<span class=""wrapword"">" & strLine & "</span>"

		If Not resParseLine.IsSuccess Then
			strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & resParseLine.Message & "</td></tr>"
			bOk = False
		ElseIf Not IsArray(arrItem) Then
			strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrParam") & "</td></tr>"
			Exit Do
		Else
			strGender = UCase(Left(Trim(arrItem(7)), 1))
			If Len(strGender) <> 1 Or ((strGender <> obLanguage("Common","kMaleLet")) And (strGender <> obLanguage("Common","kFemaleLet"))) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrGender") & "</td></tr>"
				bOk = False
			Else
				strClass = Trim(arrItem(2))
				strClass = CorrectClassName(strClass)
				' strClass = GetValidClassName(strClass)
				' Аналогично простому импорту GetValidClassName - не вызываем, т.к. там валидация именно для такого случая не вполне корректная.
				' Например, пришло "11". Непронятно, что из этого параллель, что буква. Поэтому напрямую проверяем наличие.
				If IsNull(strClass) Then
					strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrClass",strFunctionalityType) & "</td></tr>"
					bOk = False
				Else
					arrItem(7) = strGender
					arrItem(2) = strClass
					bOk = True
				End If
			End If
		End If

		If bOk Then
			strRecord = Trim(CStr(arrItem(1)))
			arrItem(3) = CalcName(arrItem(3))	 ' LastName
			arrItem(4) = CalcName(arrItem(4))	 ' FirstName
			arrItem(5) = CalcName(arrItem(5))	 ' MiddleName

			If IsDull(arrItem(3)) Or IsDull(arrItem(4)) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrFirstOrLastName") & "</td></tr>"
				bOk = False
			End If
		End If

		If bOk Then
			dtBirthDate = GetSafeBirthDate(6)

			If bPreSchool Then
				nIndexMother = 25
				nIndexFather = 37
			Else
				nIndexMother = 31
				nIndexFather = 43
			End If

			strFLastName	= CalcName(arrItem(nIndexFather))
			strFFirstName	= CalcName(arrItem(nIndexFather + 1))
			strFMiddleName	= CalcName(arrItem(nIndexFather + 2))
			dtFBirthDate = GetSafeBirthDate(nIndexFather + 3)
			nFSnilsPos = nIndexFather + 10

			strMLastName	= CalcName(arrItem(nIndexMother))
			strMFirstName	= CalcName(arrItem(nIndexMother + 1))
			strMMiddleName	= CalcName(arrItem(nIndexMother + 2))
			dtMBirthDate = GetSafeBirthDate(nIndexMother + 3)
			nMSnilsPos = nIndexMother + 10

			arrItem(nIndexFather) = strFLastName	 ' Father's LastName
			arrItem(nIndexFather + 1) = strFFirstName	 ' Father's FirstName
			arrItem(nIndexFather + 2) = strFMiddleName	 ' Father's MiddleName

			arrItem(nIndexMother) = strMLastName ' Mother's LastName
			arrItem(nIndexMother + 1) = strMFirstName ' Mother's FirstName
			arrItem(nIndexMother + 2) = strMMiddleName ' Mother's MiddleName

			If IsBadFirstLetter(arrItem(3)) Or IsBadFirstLetter(arrItem(4)) Or IsBadFirstLetter(arrItem(5)) Or _
				IsBadFirstLetter(strFLastName) Or IsBadFirstLetter(strFFirstName) Or IsBadFirstLetter(strFMiddleName) Or _
				IsBadFirstLetter(strMLastName) Or IsBadFirstLetter(strMFirstName) Or IsBadFirstLetter(strMMiddleName) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Common","kErrFirstLetter") & "</td></tr>"
				bOk = False
			End If
		End If

		If bOk Then
			bErrAddRow = False
			Call GetSimilarSFM()

			If nStudents > 0 Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & LCase(obLanguage("Common","kStudent",strFunctionalityType)) & obLanguage("Import","kFIOExistsInImportFile") & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
			Else
				nStudents = objNSNET.GetYearSimilarUsersCount(strSchoolID, rlStudent, arrItem(3), arrItem(4), arrItem(5), IIf(IsDull(dtBirthDate), Empty, dtBirthDate), strGender)
				If nStudents > 1 Then
					strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kStudentFIOExists_Grater2") & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
				Else
					IF nDocSubType <> kmdstNoClassEnroll or IsDull(nDocSubType) Then
						if strClass <> "" Then 
							nClassID = objNSNET.GetClassID(Empty, strCurrYearId, strClass)
							nClassID = objNSNET.GetSafeYearGradeClassIDByDocSubType(nDocSubType, strCurrYearId, nClassID)
							If nClassID <= 0 Then
								strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & IIF(bFutureMode, obLanguage("Import","kWarnClassByDocSubType",strFunctionalityType), obLanguage("Import","kWarnClass2")) & "</td></tr>"
								bErrAddRow = True
							End If
						Else
							bErrAddRow = True
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kWarnNotClass") & "</td></tr>"
						End IF
					Else
						if CheckNoClassEnrollGrade(strClass) Then
							nClassID = -nClassID
						Else
							bErrAddRow = True
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kWarnClass2") & "</td></tr>"
						End if 
					End If

					arrItem(2) = nClassID
					If nStudents = 0 And Not bErrAddRow Then
						If bMoveBook Then 
							iNew = iNew + 1
							'strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br/>") & arrItem(3) & " " & arrItem(4) & " " & arrItem(5) & " - " & obLanguage("Import","kNewStudent")
							'bOK = False
						Else
							bErrAddRow = True 
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kNewStudent") & "</td></tr>"
						End IF
					ElseIf nStudents > 0 And Not bErrAddRow Then
						If bMoveBook Then 
							bErrAddRow = True
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kWarnStudentAdd") & "</td></tr>"
						Else 
							strWarningLines = strWarningLines & "<tr><td>" & strRecord & "</td><td>" & arrItem(3) & " " & arrItem(4) & " " & arrItem(5)
							bOK = False
						End If
					End If

					If IsDull(arrItem(6)) And Not bErrAddRow Then
						strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br/>") & obLanguage("Import","kWarnBDay")
						bOK = False
					End If

					strSNILS = Trim(arrItem(nSNILSPos))
					If Not IsDull(strSNILS) And Not bErrAddRow Then
						If Not IsValidSnilsFormat(strSNILS) Then
							arrItem(nSNILSPos) = ""
							strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br/>") & obLanguage("Import","kInvalidSnilsFormat")
							bOK = False
						End If
					End If

					' #18262. Check father and mother SNILS
					strFSnils = Trim(arrItem(nFSnilsPos))
					If Not IsDull(strFSnils) And Not bErrAddRow Then
						If Not IsValidSnilsFormat(strFSnils) Then
							arrItem(nFSnilsPos) = ""
							strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br/>") & obLanguage("Import","kInvalidSnilsFormat")
							bOK = False
						End If
					End If

					strMSnils = Trim(arrItem(nMSnilsPos))
					If Not IsDull(strMSnils) And Not bErrAddRow Then
						If Not IsValidSnilsFormat(strMSnils) Then
							arrItem(nMSnilsPos) = ""
							strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br/>") & obLanguage("Import","kInvalidSnilsFormat")
							bOK = False
						End If
					End If

					If Not bErrAddRow Then
						If bPreSchool Then 
							Call CheckAddress(arrItem, nStudents = 0, 3, 4, 5, 10, 11, 12, 17, 18, 19) ' arrItem may be changed here!
						Else
							Call CheckAddress(arrItem, nStudents = 0, 3, 4, 5, 15, 16, 17, 22, 23, 24) ' arrItem may be changed here! Населенный пункт, Район, Улица
						End If

						If (iNew > iSuccess And bMoveBook) or Not bMoveBook Then 
							nFathers = 0
							If Not IsDull(strFLastName) Then
								nFathers = objNSNET.GetYearSimilarUsersCount(strSchoolID, rlParent, strFLastName, strFFirstName, strFMiddleName, IIf(IsDull(dtFBirthDate), Empty, dtFBirthDate), obLanguage("Common","kMaleLet") )
								If nFathers > 1 Then
									strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br>") & LCase(obLanguage("Common","kFather")) & " " & strFLastName & " " & strFFirstName & " " & strFMiddleName & " - " & obLanguage("Import","kParentFIOExists_Grater2") & " - " & obLanguage("Import","kParentIgnored")
									bOK = False
								Else
									iSuccessParents = iSuccessParents + 1
									If nFathers = 0 Then

										strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br>") & LCase(obLanguage("Common","kFather")) & " " & strFLastName & " " & strFFirstName & " " & strFMiddleName & " - "
										Set rsInOtherSchools = objNSNET.GetSimilarUsersFromOtherSchoolsMunicipality(strSchoolID, rlParent, UCase(strFLastName), UCase(strFFirstName), UCase(strFMiddleName), obLanguage("Common","kMaleLet"), 0)
										If rsInOtherSchools.EOF Then
											strWarningLines = strWarningLines & obLanguage("Import","kNewParent")
											iNewParents = iNewParents + 1
										Else
											strWarningLines = strWarningLines & Replace(obLanguage("Import","kFatherFoundInEO_2"), "%", DB2HTML(rsInOtherSchools("SCHOOLNAME"))) & ", " & obLanguage("Import","kRecordWasUsed")
											iOtherSchoolsParents = iOtherSchoolsParents + 1
											arrItem(nIndexFather) = "0" ' признак, что надо использовать запись об родителе из другой школы
											arrItem(nIndexFather + 1) = GetSafeID(rsInOtherSchools("USERID"), Null)
										End If

										bOK = False
									End If
								End If
							End If

							nMothers = 0
							If Not IsDull(strMLastName) Then
								nMothers = objNSNET.GetYearSimilarUsersCount(strSchoolID, rlParent, strMLastName, strMFirstName, strMMiddleName, IIf(IsDull(dtMBirthDate), Empty, dtMBirthDate), obLanguage("Common","kFemaleLet") )
							
								If nMothers > 1 Then
									strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br>") & LCase(obLanguage("Common","kMother")) & " " & strMLastName & " " & strMFirstName & " " & strMMiddleName & " - " & obLanguage("Import","kParentFIOExists_Grater2") & " - " & obLanguage("Import","kParentIgnored")
									bOK = False
								Else
									iSuccessParents = iSuccessParents + 1
									If nMothers = 0 Then

										strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strRecord & "</td><td>", "<br>") & LCase(obLanguage("Common","kMother")) & " " & strMLastName & " " & strMFirstName & " " & strMMiddleName & " - "

										Set rsInOtherSchools = objNSNET.GetSimilarUsersFromOtherSchoolsMunicipality(strSchoolID, rlParent, UCase(strMLastName), UCase(strMFirstName), UCase(strMMiddleName), obLanguage("Common","kFemaleLet"), 0)
										If rsInOtherSchools.EOF Then
											strWarningLines = strWarningLines & obLanguage("Import","kNewParent")
											iNewParents = iNewParents + 1
										Else
											strWarningLines = strWarningLines & Replace(obLanguage("Import","kMotherFoundInEO_2"), "%", DB2HTML(rsInOtherSchools("SCHOOLNAME"))) & ", " & obLanguage("Import","kRecordWasUsed")
											iOtherSchoolsParents = iOtherSchoolsParents + 1
											arrItem(nIndexMother) = "0" ' признак, что надо использовать запись об родителе из другой школы
											arrItem(nIndexMother + 1) = GetSafeID(rsInOtherSchools("USERID"), Null)
										End If

										bOK = False
									End If
								End If
							End If

							iSuccess = iSuccess+1
							arrImportStudents(Ubound(arrImportStudents)) = arrItem
							Redim Preserve arrImportStudents(1+Ubound(arrImportStudents))
						End If

					End If
				End If
			End If

			If Not bOK and Not bErrAddRow Then strWarningLines = strWarningLines & "</td></tr>"
		End If	'bOk
	Loop
End Sub

Function CheckNoClassEnrollGrade(strClass)
	Dim i

	CheckNoClassEnrollGrade = True
	If bPreSchool Then
		For i = 0 to Ubound(arrPreGrades,2)
			If arrPreGrades(1, i) = strClass Then 
				nClassID = arrPreGrades(0, i)
				Exit Function
			End If
		Next

		CheckNoClassEnrollGrade = False
	Else
		nClassID = GetSafeLng(strClass, -1)
		if nClassID > 12 or nClassID < 0 Then CheckNoClassEnrollGrade = False
	End If
End Function

Function IsValidSnilsFormat(strVal)
	Dim regEx

	Set regEx = New RegExp
	regEx.Global = True
	regEx.Pattern = kRegExp_Snils
	IsValidSnilsFormat = regEx.Test(strVal)
End Function

Function GetSafeBirthDate(ind)
	Dim dtBDate

	arrItem(ind) = Trim(arrItem(ind))
	If Not IsDull(arrItem(ind)) Then
		dtBDate = Str2Date(arrItem(ind))
		If DateDiff("d", dtBDate, NSDate(), 0, 0) <= 0 Then
			arrItem(ind) = Null
			dtBDate = Null
		End If
	Else
		dtBDate = Null
	End If
	GetSafeBirthDate = dtBDate
End Function
%>