<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

On Error Resume Next


Const SCHOOL_IMPORT_PATTERN = "ssssSssssssssss" '15
Const UDOD_IMPORT_PATTERN = "ssssSsssssssssss" ' 16
Const SCHOOL_IMPORT_PATTERN_PLUS = "ssssSssssssssssssssssssss" '25
Const UDOD_IMPORT_PATTERN_PLUS = "ssssSsssssssssssssssssssss" ' 26

Dim bOk, nPos, arrItem, strLine, strErrorLines, strWarningLines, i, iSuccess, strSeparator
Dim strGender, strClass, nClassID, dtBirthDate
Dim nStudents, nFathers, nMothers
Dim strUniqueCode
Dim arrImportStudents
Dim rsSimilarOtherSchools
Dim bPreSchool, arr
Dim bAddSchool
Dim nDocSubType
Dim nArrUBound, dtDocDate
Dim dictIndexesSuccess2Common
Dim nLineCount
Dim nFatherPos, nMotherPos, nAddSchoolPos
Dim objUserComponent
Dim strSnils
Dim strBirthCertifSeriaOut, strBirthCertifNumberOut
Dim strPassportSeriaOut, strPassportNumberOut

If IMPORT_WITH_DOCS Then
	nFatherPos = 19
	nMotherPos = 12
	nAddSchoolPos = 26
Else
	nFatherPos = 7
	nMotherPos = 11
	nAddSchoolPos = 16
End If

SetScriptTimeOut 9000

strUniqueCode = ""
Do
	Randomize
	strUniqueCode = GetSafeLng(Left(Rnd() * 10000, 4), "1234")
Loop While Len(strUniqueCode) <> 4

strSeparator = GetSafeStr(obTokenMgr.GetData(strToken, "Separator"), 1, ",")

Call obTokenMgr.SetData(strToken, "strUniqueCode", strUniqueCode)%>

<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/MoveDoc_inc.asp --><%

If Not HasUserRight(arMoveBookEdit) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim objForm
Set objForm = Server.CreateObject("NetCity.Storage")
Set objUserComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")

If GetSafeLng(CLng(Request("DOCID")), 0) > 0 Then objForm.Add "DOCID", CLng(Request("DOCID"))
objForm.Add "DOCDATE", CStr(Request("DOCDATE"))
dtDocDate = GetSafeDate(objForm("DOCDATE"), Null)
objForm.Add "DOCTYPE", GetSafeLng(Request("DOCTYPE"), Null)
nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), Null)
objForm.Add "DOCSUBTYPE", nDocSubType
objForm.Add "DOCNUMBER", CStr(Request("DOCNUMBER"))
objForm.Add "CLASSID", CStr(Request("PCLID"))
objForm.Add "ENROLLFROM", GetSafeLng(Request("ENROLLFROM"), Null)
Call obTokenMgr.SetData(strToken, "QA_dct", objForm)

If IsObject(obTokenMgr.GetData(strToken, "ImportStudents")) Then obTokenMgr.SetData strToken, "ImportStudents", Null
Redim arrImportStudents(1)
Dim objImportComponent
Dim resParseLine, strImportFileText

Set objImportComponent		= obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IImportComponent")
strImportFileText			= obTokenMgr.GetData(strToken, "ImportFile")
Call InitPreSchool()
bAddSchool = CLng(strFunctionalityType) = kFuncType_Add

strErrorLines = ""
strWarningLines = ""
nPos = 0 : i = 0 : iSuccess = 0
Dim nLenImportFile
nLenImportFile = Len(strImportFileText)

Dim kMaleLet, kFemaleLet, kWarn, kDuble, kChild, kErrClass, kMother, kFather, kFIOExists, kFIOExistsInOtherSchools
Dim strFIOExistsInOtherSchools
Dim kChild_r, kImportToSameProgram, kExistsInSameProgram, kSeeImportLine
Dim kInThisEO, kInOtherEO, kSomeChildrensFoundInUDOD, kSomeChildrensFoundInEO, kSeeStudentFirstImportLine
Dim kSomeFathersFoundInEO, kFatherFoundInEO, kSomeMothersFoundInEO, kMotherFoundInEO
Dim kSchoolYear, kFathersIgnored, kMotherIgnored, kStudentFoundInPool, kButPoolDateMoreThenDocDate, kStudentFoundInEO

kMaleLet						= obLanguage("Common","kMaleLet")
kFemaleLet						= obLanguage("Common","kFemaleLet")
kWarn							= obLanguage("Import","kWarn3")
kDuble							= obLanguage("Import","kDuble")
kFIOExists						= obLanguage("Import","kFIOExists")
kFIOExistsInOtherSchools		= obLanguage("Import","kFIOExistsInOtherSchools")
kImportToSameProgram			= obLanguage("Import","kImportToSameProgram")
kExistsInSameProgram			= obLanguage("Import","kExistsInSameProgram")
kChild							= LCase(obLanguage("Common","Ученик", strFunctionalityType))
kChild_r						= LCase(obLanguage("Common","kStudent_r", strFunctionalityType))
kSeeImportLine					= obLanguage("Import","kSeeImportLine")
kErrClass						= obLanguage("Import","kErrClass",strFunctionalityType)
kMother							= LCase(obLanguage("Common","kMother"))
kFather							= LCase(obLanguage("Common","kFather"))
kInThisEO						= obLanguage("Import","kInThisEO")
kInOtherEO						= obLanguage("Import","kInOtherEO")
kSomeChildrensFoundInUDOD		= obLanguage("Import","kSomeChildrensFoundInUDOD")
kSomeChildrensFoundInEO			= obLanguage("Import","kSomeChildrensFoundInEO")
kSeeStudentFirstImportLine		= obLanguage("Import","kSeeStudentFirstImportLine")
kSomeFathersFoundInEO			= obLanguage("Import","kSomeFathersFoundInEO")
kFatherFoundInEO				= obLanguage("Import","kFatherFoundInEO")
kSomeMothersFoundInEO			= obLanguage("Import","kSomeMothersFoundInEO")
kMotherFoundInEO				= obLanguage("Import","kMotherFoundInEO")
kSchoolYear						= obLanguage("Common","kSchoolYear")
kFathersIgnored					= obLanguage("Import","kFathersIgnored")
kMotherIgnored					= obLanguage("Import","kMotherIgnored")
kStudentFoundInPool				= obLanguage("Import","kStudentFoundInPool")
kButPoolDateMoreThenDocDate		= obLanguage("Import","kButPoolDateMoreThenDocDate")
kStudentFoundInEO				= obLanguage("Import","kStudentFoundInEO")

Err.Clear

nLineCount = objImportComponent.GetLineCount(strImportFileText)
TestError obLanguage("Import","kErrImport")

Response.Write nLineCount
Response.Write Chr(1)
Response.Flush

Call AnalyzeFile
TestError obLanguage("Import","kErrImport")

Response.Write Chr(1)
Response.Flush

' количество записей, которые будут импортированы
Response.Write iSuccess
Response.Write Chr(1)
Response.Flush

If strErrorLines <> "" Then
	Response.Write obLanguage("Import","kFailed")
	Response.Write "<br /><table class=""table table-bordered table-striped"">" & strErrorLines & "</table>"
End If

If strWarningLines <> "" Then
	Response.Write obLanguage("Import","kWarnings")
	Response.Write "<br /><table class=""table table-bordered table-striped"">" & strWarningLines & "</table>"
End If

Response.Write "<div class=""well""><b>" & obLanguage("Import","kSuccess") & iSuccess & "</b></div>"
If iSuccess > 0 Then
	Response.Write "<div class=""alert alert-warning"">" & obLanguage("Import","kAssignedPassword") & "<b>" & strUniqueCode & "</b><br>" & obLanguage("Import","kRememberTheUniqueCode") & "</div>"
End If

Response.Flush

If Not Response.IsClientConnected Then
	Response.End
End If

Call obTokenMgr.SetData(strToken, "ImportStudents", arrImportStudents)

Sub AnalyzeFile()
	Dim strPattern
	Dim nViolationPos, nUserID, objSimilars
	Dim nRef, theItem
	Dim strEOName, strClassName, strSYName
	Dim bIgnore
	Dim dictIgnoreFathers, dictIgnoreMothers, nCurIndex
	Dim bFoundInPool, strFoundInPoolMessage
	Dim bFoundInSchool, strFoundInSchoolMessage
	Dim dictPoolCategories, nCategoryID, strCategoryName
	Dim strPoolCategories, dtPoolDate
	Dim strLineCopy
	Dim bFoundNotEmpty
	Dim strPassportSeriaOut, strPassportNumberOut

	Set dictIgnoreFathers = Server.CreateObject("NetCity.Storage")
	Set dictIgnoreMothers = Server.CreateObject("NetCity.Storage")

	Set dictIndexesSuccess2Common = Server.CreateObject("NetCity.Storage")

	If bAddSchool Then
		Set dictPoolCategories = GetPoolCategories(strPoolCategories)
	End If
	
	If IMPORT_WITH_DOCS Then
		strPattern = IIf(bAddSchool, UDOD_IMPORT_PATTERN_PLUS, SCHOOL_IMPORT_PATTERN_PLUS)
	Else
		strPattern = IIf(bAddSchool, UDOD_IMPORT_PATTERN, SCHOOL_IMPORT_PATTERN)
	End If
	Do While nPos < nLenImportFile
		If Not Response.IsClientConnected Then
			Response.End
		End If

		strLine = objImportComponent.GetLine(strImportFileText, nPos)
		Set resParseLine = objImportComponent.ParseLine(strLine, strPattern, strSeparator)
		i = i + 1

		If Not (IMPORT_WITH_DOCS And i <= 3) Then ' Ислючить строки шапки (с 1 по 3) в новом импорте
			Response.Write i & " "
			Response.Flush

			strLineCopy = strLine
			strLine = IIF(IMPORT_WITH_DOCS, i-3, i) & ". " & strLine
			strLine = "<span class=""wrapword"">" & strLine & "</span>"

			arrItem = resParseLine.Data

			bFoundNotEmpty = False

			If Not IsEmpty(arrItem) Or (Not IsDull(strLineCopy) And UBound(Split(strLineCopy, strSeparator)) <> Len(strLineCopy)) Then 
				bFoundNotEmpty = True
			End If

			If Not resParseLine.IsSuccess Then
				If bFoundNotEmpty Then 
					strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & IIF(IsDull(resParseLine.Message), obLanguage("Import","kErrParamNum"), resParseLine.Message) & "</td></tr>"
				End If
				bOk = False
			ElseIf Not IsArray(arrItem) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrParam") & "</td></tr>"
				Exit Do
			Else
				ReDim Preserve arrItem(UBound(arrItem) + 4)
				nArrUBound = UBound(arrItem)
				arrItem(nArrUBound - 3) = 0 ' ученик
				arrItem(nArrUBound - 2) = 0 ' отец
				arrItem(nArrUBound - 1) = 0 ' мать
				arrItem(nArrUBound) = 0 ' доп. информация
				strGender = UCase(Left(Trim(arrItem(5)), 1))

				If Len(strGender) <> 1 Or ((strGender <> kMaleLet) And (strGender <> kFemaleLet)) Then
					strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrGender") & "</td></tr>"
					bOk = False
				Else
					Call CheckClassName()

					If bOk Then
						arrItem(5) = strGender
						If nDocSubType<>kmdstNoClassEnroll Then
							arrItem(1) = nClassID
						Else
							arrItem(1) = -nClassID
						End If
					End If
				End If
			End If
		End If

		If bOk Then
			arrItem(2) = CalcName(arrItem(2))	 ' LastName
			arrItem(3) = CalcName(arrItem(3))	 ' FirstName
			arrItem(4) = CalcName(arrItem(4))	 ' MiddleName

			If IsDull(arrItem(2)) Or IsDull(arrItem(3)) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrFirstOrLastName") & "</td></tr>"
				bOk = False
			End If
		End If

		If bOk Then
			dtBirthDate = ImportItem2Date(arrItem(6))
			If IsNull(dtBirthDate) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrInvalidStudentBirthDay") & "</td></tr>"
				bOk = False
			Else
				arrItem(6) = dtBirthDate
			End If
		End If

		If bOk Then
			arrItem(nFatherPos) = CalcName(arrItem(nFatherPos))				' Father's LastName
			arrItem(nFatherPos + 1) = CalcName(arrItem(nFatherPos + 1))		' Father's FirstName
			arrItem(nFatherPos + 2) = CalcName(arrItem(nFatherPos + 2))		' Father's MiddleName

			arrItem(nMotherPos) = CalcName(arrItem(nMotherPos))				' Mother's LastName
			arrItem(nMotherPos + 1) = CalcName(arrItem(nMotherPos + 1))		' Mother's FirstName
			arrItem(nMotherPos + 2) = CalcName(arrItem(nMotherPos + 2))		' Mother's MiddleName

			If IsBadFirstLetter(arrItem(2)) Or IsBadFirstLetter(arrItem(3)) Or IsBadFirstLetter(arrItem(4)) Or _
				IsBadFirstLetter(arrItem(nFatherPos)) Or IsBadFirstLetter(arrItem(nFatherPos + 1)) Or IsBadFirstLetter(arrItem(nFatherPos + 2)) Or _
				IsBadFirstLetter(arrItem(nMotherPos)) Or IsBadFirstLetter(arrItem(nMotherPos + 1)) Or IsBadFirstLetter(arrItem(nMotherPos + 2)) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Common","kErrFirstLetter") & "</td></tr>"
				bOk = False
			End If
		End If
		If bOk And IMPORT_WITH_DOCS Then
			If Not IsDull(arrItem(11)) Or Not (IsDull(arrItem(7)) Or IsDull(arrItem(8))) Or Not (IsDull(arrItem(9)) Or IsDull(arrItem(10))) Then
				If Not IsDull(arrItem(11)) Then
					strSnils = CheckSnils(arrItem(11))
					If strSnils = "not_valid" Then
						strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "СНИЛС учащегося неверен" & "</td></tr>"
						bOk = False
					Else
						arrItem(11) = strSnils
					End If
				End If
				If bOk And Not (IsDull(arrItem(7)) Or IsDull(arrItem(8))) Then
					If Not IsValidPassport(arrItem(7), arrItem(8), strPassportSeriaOut, strPassportNumberOut) Then
						strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "Данные о паспорте учащегося неверны" & "</td></tr>"
						bOk = False
					Else
						arrItem(7) = strPassportSeriaOut
						arrItem(8) = strPassportNumberOut
					End If
				End If
				If bOk And Not (IsDull(arrItem(9)) Or IsDull(arrItem(10))) Then
					If Not IsValidBirthCertif(arrItem(9), arrItem(10), strBirthCertifSeriaOut, strBirthCertifNumberOut) Then
						strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "Данные о свидетельстве о рождении учащегося неверны" & "</td></tr>"
						bOk = False
					Else
						arrItem(9) = strBirthCertifSeriaOut
						arrItem(10) = strBirthCertifNumberOut
					End If
				End If
			Else
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "Хотя бы один из документов учащегося должен быть заполнен" & "</td></tr>"
				bOk = False
			End If

			If IsDull(arrItem(7)) Then arrItem(7) = ""
			If IsDull(arrItem(8)) Then arrItem(8) = ""
			If IsDull(arrItem(9)) Then arrItem(9) = ""
			If IsDull(arrItem(10)) Then arrItem(10) = ""
			If IsDull(arrItem(11)) Then arrItem(11) = ""
		End If

		If bOk Then
			If Not IsDull(arrItem(nFatherPos)) Then
				dtBirthDate = ImportItem2Date(arrItem(nFatherPos + 3))
				If IsNull(dtBirthDate) Then
					strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrInvalidFatherBirthDay") & "</td></tr>"
					bOk = False
				Else
					arrItem(nFatherPos + 3) = dtBirthDate
				End If

				If IMPORT_WITH_DOCS Then
					If Not IsDull(arrItem(nFatherPos + 6)) Or Not (IsDull(arrItem(nFatherPos + 4)) Or IsDull(arrItem(nFatherPos + 5))) Then
						If Not IsDull(arrItem(nFatherPos + 6)) Then
							strSnils = CheckSnils(arrItem(nFatherPos + 6))
							If strSnils = "not_valid" Then
								strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "СНИЛС отца неверен" & "</td></tr>"
								bOk = False
							Else
								arrItem(nFatherPos + 6) = strSnils
							End If
						End If
						If bOk And Not (IsDull(arrItem(nFatherPos + 4)) Or IsDull(arrItem(nFatherPos + 5))) Then
							If Not IsValidPassport(arrItem(nFatherPos + 4), arrItem(nFatherPos + 5), strPassportSeriaOut, strPassportNumberOut) Then
								strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "Данные о паспорте отца неверны" & "</td></tr>"
								bOk = False
							Else
								arrItem(nFatherPos + 4) = strPassportSeriaOut
								arrItem(nFatherPos + 5) = strPassportNumberOut
							End If
						End If
					Else
						strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "Хотя бы один из документов отца должен быть заполнен" & "</td></tr>"
						bOk = False
					End If
				End If
			End If

			If IMPORT_WITH_DOCS Then
				If IsDull(arrItem(nFatherPos + 3)) Then arrItem(nFatherPos + 3) = ""
				If IsDull(arrItem(nFatherPos + 4)) Then arrItem(nFatherPos + 4) = ""
				If IsDull(arrItem(nFatherPos + 5)) Then arrItem(nFatherPos + 5) = ""
				If IsDull(arrItem(nFatherPos + 6)) Then arrItem(nFatherPos + 6) = ""
			End If
		End If

		If bOk Then
			If Not IsDull(arrItem(nMotherPos)) Then
				dtBirthDate = ImportItem2Date(arrItem(nMotherPos + 3))
				If IsNull(dtBirthDate) Then
					strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrInvalidMotherBirthDay") & "</td></tr>"
					bOk = False
				Else
					arrItem(nMotherPos + 3) = dtBirthDate
				End If

				If IMPORT_WITH_DOCS Then
					If Not IsDull(arrItem(nMotherPos + 6)) Or Not (IsDull(arrItem(nMotherPos + 4)) Or IsDull(arrItem(nMotherPos + 5))) Then
						If Not IsDull(arrItem(nMotherPos + 6)) Then
							strSnils = CheckSnils(arrItem(nMotherPos + 6))
							If strSnils = "not_valid" Then
								strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "СНИЛС матери неверен" & "</td></tr>"
								bOk = False
							Else
								arrItem(nMotherPos + 6) = strSnils
							End If
						End If
						If bOk And Not (IsDull(arrItem(nMotherPos + 4)) Or IsDull(arrItem(nMotherPos + 5))) Then
							If Not IsValidPassport(arrItem(nMotherPos + 4), arrItem(nMotherPos + 5), strPassportSeriaOut, strPassportNumberOut) Then
								strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "Данные о паспорте матери неверны" & "</td></tr>"
								bOk = False
							Else
								arrItem(nMotherPos + 4) = strPassportSeriaOut
								arrItem(nMotherPos + 5) = strPassportNumberOut
							End If
						End If
					Else
						strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & "Хотя бы один из документов матери должен быть заполнен" & "</td></tr>"
						bOk = False
					End If
				End If
			End If

			If IMPORT_WITH_DOCS Then
				If IsDull(arrItem(nMotherPos + 3)) Then arrItem(nMotherPos + 3) = ""
				If IsDull(arrItem(nMotherPos + 4)) Then arrItem(nMotherPos + 4) = ""
				If IsDull(arrItem(nMotherPos + 5)) Then arrItem(nMotherPos + 5) = ""
				If IsDull(arrItem(nMotherPos + 6)) Then arrItem(nMotherPos + 6) = ""
			End If
		End If

		If bOk And bAddSchool Then
			nCategoryID = -1
			strCategoryName = UCase(Trim(arrItem(nAddSchoolPos)))
			If Not IsDull(strCategoryName) Then
				If dictPoolCategories.Exists(strCategoryName) Then
					nCategoryID = dictPoolCategories(strCategoryName)
				End If
			End If

			If nCategoryID = -1 Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrInvalidPoolCategory") & DB2HTML(strPoolCategories) & "</td></tr>"
				bOk = False
			Else
				arrItem(nAddSchoolPos) = nCategoryID
			End If
		End If

		If bOk Then
			nViolationPos = GetSimilarSFM()
			If nStudents > 0 Then
				'strErrorLines = strErrorLines & strLine & kWarn & kChild & kFIOExists & " - " & obLanguage("Import","kIgnored") &" )<br>"
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>"
				strErrorLines = strErrorLines & IIf(bAddSchool, kChild_r & kImportToSameProgram,  kChild & kFIOExists) & ". "
				strErrorLines = strErrorLines & kSeeImportLine & " " & nViolationPos & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
				bOk = False
			End If
		End If

		' Выше этого - анализ внутри файла импорта
		' Ниже этого - анализ базы данных
		bFoundInPool = False ' флаг выставляется только для первой записи в импорте для ученика, найденного в пуле, остальные его строки идут уже без этого флага,
							' это чтобы сообщение об одном ученике, что он будет взят из пула - было 1 раз, и не дублировалось далее
		strFoundInPoolMessage = ""
		bFoundInSchool = False ' аналогично
		strFoundInSchoolMessage = ""
		If bOk Then
			If arrItem(nArrUBound - 3) = 0 Then ' Это для обычной школы, или для ОДОа - но для самого первого ученика среди дублей
				nUserID = 0
				' Сначала ищем точно в данной ОО (школа, ОДО)
				Set objSimilars = objNSNET.GetSimilarUsersFromSchools(strSchoolID, rlStudent, arrItem(2), arrItem(3), arrItem(4), arrItem(6))
				If Not objSimilars.EOF Then
					If Not bAddSchool Then
						nUserID = -1 ' нашли в данной школе
						strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kInThisEO & " " & kChild & kFIOExists & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
						bOk = False
					Else
						If objSimilars.RecordCount > 1 Then
							'bOk = False
							nUserID = -1 ' в данном ОДОе больше одного такого найдено, кого брать - неизвестно!
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kSomeChildrensFoundInUDOD & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
							arrItem(nArrUBound) = -1 ' значит, что надо игнорировать
							arrItem(1) = -1 ' в класс тоже прописываем признак, что надо игнорировать
							'bOk = False - здесь это выставлять в общем случае нельзя, т.к. ниже строки импорта могут ссылаться на эту запись, поэтому используем arrItem(nArrUBound)
						Else
							nUserID = GetSafeLng(objSimilars("USERID"), Null) ' Нашли в данном ОДОе, работаем с ним
							arrItem(nArrUBound - 3) = nUserID
						End If
					End If
				End If

				If nUserID = 0 Then
					' Точно в данном ОО - не нашли, ищем во всех школах (точнее - не ОДОах)
					Set objSimilars = objNSNET.GetSimilarUsersFromSchools(-1, rlStudent, arrItem(2), arrItem(3), arrItem(4), arrItem(6))

					If Not objSimilars.EOF Then
						If Not bAddSchool Then
							nUserID = -1 ' нашли в другой школе
							strEOName = GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")
							strClassName = GetSafeStr(objSimilars("CLASSNAME"), -1, "")
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kInOtherEO & " " & kChild & kFIOExists & " (" & DB2HTML(strEOName) & ", " & DB2HTML(strClassName) & ")" & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
							bOk = False
						Else
							If objSimilars.RecordCount > 1 Then
								nUserID = -1 ' в других школах больше одного такого найдено, кого брать - неизвестно!
								strEOName = GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")
								strClassName = GetSafeStr(objSimilars("CLASSNAME"), -1, "")
								strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kSomeChildrensFoundInEO & " (" & DB2HTML(strEOName) & ", " & DB2HTML(strClassName) & "; "
								objSimilars.MoveNext
								strEOName = GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")
								strClassName = GetSafeStr(objSimilars("CLASSNAME"), -1, "")
								strErrorLines = strErrorLines & DB2HTML(strEOName) & ", " & DB2HTML(strClassName) & ")" & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
								arrItem(nArrUBound) = -1 ' значит, что надо игнорировать
								arrItem(1) = -1 ' в класс тоже прописываем признак, что надо игнорировать
								'bOk = False - здесь это выставлять в общем случае нельзя, т.к. ниже строки импорта могут ссылаться на эту запись, поэтому используем arrItem(nArrUBound)
							Else
								nUserID = GetSafeLng(objSimilars("USERID"), Null) ' Нашли в одной школе, работаем с ним
								arrItem(nArrUBound - 3) = nUserID
								bFoundInSchool = True
								' !!! - вывести сообщение ...
								strEOName = GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")
								strClassName = GetSafeStr(objSimilars("CLASSNAME"), -1, "")
								strFoundInSchoolMessage = kStudentFoundInEO & " (" & DB2HTML(strEOName) & ", " & DB2HTML(strClassName) & ") " & " - " & obLanguage("Import","kRecordWasUsed")
							End If
						End If
					End If
				End If

				If nUserID = 0 Then
					' Ищем в активном пуле
					Set objSimilars = objNSNET.GetSimilarStudentsFromPool(arrItem(2), arrItem(3), arrItem(4), arrItem(6))
					If Not objSimilars.EOF Then
						' далее - для зачисления в обычную школу - надо, чтобы не было нарушения между датой выбытия в пул и датой текущего документа,
						' если нет без нарушения - то игнорируем запись
						Do While Not objSimilars.EOF
							If bAddSchool Then
								bFoundInPool = True ' флаг выставляется только для первой записи в импорте для ученика, найденного в пуле ...
							Else
								If IsDull(objSimilars("DOCDATE")) Then ' - это искусственно взятые в пул, при зачислении в ОДО, их тоже можно брать
									bFoundInPool = True
								Else
									dtPoolDate = GetSafeDate(objSimilars("DOCDATE"), Null)
									If DateDiff("d", dtDocDate, dtPoolDate, 0, 0) <= 0 Then
										bFoundInPool = True
									Else
										' date violation
										If strFoundInPoolMessage = "" Then ' формируем только одну запись о нарушении
											strFoundInPoolMessage = kStudentFoundInPool & kButPoolDateMoreThenDocDate & _
												" (" & obLanguage("PoolStudents","kPoolSchool") & ": " & DB2HTML(GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")) & "; " & _
												obLanguage("PoolStudents","kPoolYear") & ": " & DB2HTML(GetSafeStr(objSimilars("SCHOOLYEARNAME"), -1, "")) & "; " & _
												obLanguage("PoolStudents","kPoolData") & ": " & Date2Str(objSimilars("DOCDATE")) & ") " & " - " & obLanguage("Import","kIgnored")
										End If
									End If
								End If
							End If
							If bFoundInPool Then
								Exit Do
							Else
								objSimilars.MoveNext
							End If
						Loop

						If Not bFoundInPool Then
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & strFoundInPoolMessage & "</td></tr>"
							bOk = False
						Else
							nUserID = GetSafeLng(objSimilars("USERID"), Null) ' Нашли первого похожего в пуле, работаем с ним (что может быть несколько найдено - игнорируем)
							arrItem(nArrUBound - 3) = nUserID ' Для обычной школы в arrItem(nArrUBound - 3) может быть не 0 - это значит, что найден в пуле
							arrItem(nArrUBound) = 1 ' значит, что взят из пула
							bFoundInPool = True ' флаг выставляется только для первой записи в импорте для ученика, найденного в пуле ...
							' !!! - вывести сообщение ...
							strFoundInPoolMessage = kStudentFoundInPool & " ("
							If GetSafeLng(objSimilars("CATEGORYID"), -1) = 1 Then
								strFoundInPoolMessage = strFoundInPoolMessage & obLanguage("PoolStudents","kPoolSchool") & ": " & DB2HTML(GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")) & "; " & _
									obLanguage("PoolStudents","kPoolYear") & ": " & DB2HTML(GetSafeStr(objSimilars("SCHOOLYEARNAME"), -1, "")) & "; " & _
									obLanguage("PoolStudents","kPoolData") & ": " & Date2Str(objSimilars("DOCDATE"))
							Else
								strFoundInPoolMessage = strFoundInPoolMessage & obLanguage("PoolStudents","kCategory") & ": " & DB2HTML(GetSafeStr(objSimilars("CATEGORYNAME"), -1, ""))
							End If

							strFoundInPoolMessage = strFoundInPoolMessage & ") " & " - " & obLanguage("Import","kRecordWasUsed")
						End If
					End If ' If Not objSimilars.EOF ...
				End If
			End If ' If arrItem(nArrUBound - 3) = 0 ...
		End If ' If bOk ...

		If bOk Then
			' Продолжаем, если нет глобального выхода (bOk = False)
			' Для ОДОа и найденного уже существующего ученика - надо проверить его действующую связь с программой для объединения - куда пытаются зачислить в данной строке
			If bAddSchool Then
				nUserID = 0
				If arrItem(nArrUBound - 3) <> 0 Then
					If arrItem(nArrUBound - 3) > 0 Then
						nUserID = arrItem(nArrUBound - 3)
					Else
						nRef = -(arrItem(nArrUBound - 3))
						theItem = arrImportStudents(nRef)
						If theItem(nArrUBound) = -1 Then ' главную запись - надо игнорировать
							arrItem(1) = -1 ' это значит, что надо игнорировать и текущую запись - поэтому сбрасываем класс
							' Здесь можно сформировать ошибку, и далее не продолжать
							strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kSeeStudentFirstImportLine & " " & nRef & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
							bOk = False
						Else
							nUserID = theItem(nArrUBound - 3)
							If nUserID > 0 Then
								arrItem(nArrUBound - 3) = nUserID ' меняем ссылку на прямое значение
							End If
							arrItem(nArrUBound) = theItem(nArrUBound)
						End If
					End If
				End If

				If nUserID <> 0 Then
					If objNSNET.IsStudentInClassWithSameAddProgram(nUserID, arrItem(1)) Then
						' найденный ученик уже связан с программой данного объединения
						strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kChild & kExistsInSameProgram & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
						arrItem(1) = -1 ' сбрасываем класс, это значит, что надо игнорировать
						'bOk = False - здесь это выставлять в общем случае нельзя, т.к. ниже строки импорта могут ссылаться на эту запись, поэтому используем arrItem(1)
					End If
				End If
			End If
		End If

		If bOk Then
			bIgnore = ((arrItem(1) = -1) Or (arrItem(nArrUBound) = -1)) ' Строки, которые игнорируются

			If Not bIgnore Then
				iSuccess = iSuccess + 1
				nCurIndex = Ubound(arrImportStudents)

				If bFoundInSchool Then
					strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & strFoundInSchoolMessage : bOK = False
				End If

				If bFoundInPool Then
					strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & strFoundInPoolMessage : bOK = False
				End If

				If (nFathers = 0) And (Not IsDull(arrItem(nFatherPos))) Then ' аналогично arrItem(nArrUBound - 2) = 0 and ...
					nUserID = 0
					' Сначала ищем точно в данной ОО (школа, ОДО)
					Set objSimilars = objNSNET.GetSimilarUsersFromSchools(strSchoolID, rlParent, arrItem(nFatherPos), arrItem(nFatherPos + 1), arrItem(nFatherPos + 2), arrItem(nFatherPos + 3))
					If Not objSimilars.EOF Then
						If objSimilars.RecordCount > 1 Then
							nUserID = -1 ' в данной ОО больше одного такого найдено, кого брать - неизвестно!
							'arrItem(nArrUBound - 2) = -1 ' значит, что надо игнорировать - так делать нельзя, это будет ссылка на 1-ый элемент, используем пока dictIgnoreFathers, после цикла - почистим отцов согласно dictIgnoreFathers
							dictIgnoreFathers(nCurIndex) = 0
							strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & kSomeFathersFoundInEO : bOK = False
						Else
							nUserID = GetSafeLng(objSimilars("USERID"), Null) ' Нашли в данной ОО, работаем с ним
							arrItem(nArrUBound - 2) = nUserID
						End If
					End If

					If nUserID = 0 Then
						' Точно в данной ОО - не нашли, ищем во всех ОО, в том числе и в ОДОах
						Set objSimilars = objNSNET.GetSimilarUsersFromSchools(-1, rlParent, arrItem(nFatherPos), arrItem(nFatherPos + 1), arrItem(nFatherPos + 2), arrItem(nFatherPos + 3))
						If Not objSimilars.EOF Then
							nUserID = GetSafeLng(objSimilars("USERID"), Null) ' Нашли первого похожего в одной школе, работаем с ним (что может быть несколько найдено - игнорируем)
							arrItem(nArrUBound - 2) = nUserID
							strEOName = GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")
							strSYName = GetSafeStr(objSimilars("SCHOOLYEARNAME"), -1, "")
							strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & kFatherFoundInEO & " (" & DB2HTML(strEOName) & ", " & kSchoolYear & ": " & DB2HTML(strSYName) & ")" & " - " & obLanguage("Import","kRecordWasUsed")
							bOK = False
						End If
					End If
				ElseIf arrItem(nArrUBound - 2) < 0 Then ' ссылка ...
					nRef = -(arrItem(nArrUBound - 2))
					theItem = arrImportStudents(nRef)

					If dictIgnoreFathers.Exists(nRef) Then ' главную запись - надо игнорировать
						dictIgnoreFathers(nCurIndex) = 0 ' это значит, что надо игнорировать и текущую запись - поэтому добавляем текущий индекс
						strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & kFathersIgnored : bOK = False
					Else
						nUserID = theItem(nArrUBound - 2)
						If nUserID > 0 Then
							arrItem(nArrUBound - 2) = nUserID ' меняем ссылку на прямое значение
						End If
					End If
				End If

				If (nMothers = 0) And (Not IsDull(arrItem(nMotherPos))) Then ' аналогично arrItem(nArrUBound - 1) = 0 and ...
					nUserID = 0
					' Сначала ищем точно в данной ОО (школа, ОДО)
					Set objSimilars = objNSNET.GetSimilarUsersFromSchools(strSchoolID, rlParent, arrItem(nMotherPos), arrItem(nMotherPos + 1), arrItem(nMotherPos + 2), arrItem(nMotherPos + 3))
					If Not objSimilars.EOF Then
						If objSimilars.RecordCount > 1 Then
							nUserID = -1 ' в данной ОО больше одного такого найдено, кого брать - неизвестно!
							'arrItem(nArrUBound - 1) = -1 ' значит, что надо игнорировать - так делать нельзя, это будет ссылка на 1-ый элемент, используем пока dictIgnoreMothers, после цикла - почистим отцов согласно dictIgnoreMothers
							dictIgnoreMothers(nCurIndex) = 0
							strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & kSomeMothersFoundInEO : bOK = False
						Else
							nUserID = GetSafeLng(objSimilars("USERID"), Null) ' Нашли в данной ОО, работаем с ним
							arrItem(nArrUBound - 1) = nUserID
						End If
					End If

					If nUserID = 0 Then
						' Точно в данной ОО - не нашли, ищем во всех ОО, в том числе и в ОДОах
						Set objSimilars = objNSNET.GetSimilarUsersFromSchools(-1, rlParent, arrItem(nMotherPos), arrItem(nMotherPos + 1), arrItem(nMotherPos + 2), arrItem(nMotherPos + 3))
						If Not objSimilars.EOF Then
							nUserID = GetSafeLng(objSimilars("USERID"), Null) ' Нашли первого похожего в одной школе, работаем с ним (что может быть несколько найдено - игнорируем)
							arrItem(nArrUBound - 1) = nUserID
							strEOName = GetSafeStr(objSimilars("SCHOOLNAME"), -1, "")
							strSYName = GetSafeStr(objSimilars("SCHOOLYEARNAME"), -1, "")
							strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & kMotherFoundInEO & " (" & DB2HTML(strEOName) & ", " & kSchoolYear & ": " & DB2HTML(strSYName) & ")" & " - " & obLanguage("Import","kRecordWasUsed")
							bOK = False
						End If
					End If
				ElseIf arrItem(nArrUBound - 1) < 0 Then ' ссылка ...
					nRef = -(arrItem(nArrUBound - 1))
					theItem = arrImportStudents(nRef)
					If dictIgnoreMothers.Exists(nRef) Then ' главную запись - надо игнорировать
						dictIgnoreMothers(nCurIndex) = 0 ' это значит, что надо игнорировать и текущую запись - поэтому добавляем текущий индекс
						strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br />") & kMothersIgnored : bOK = False
					Else
						nUserID = theItem(nArrUBound - 1)
						If nUserID > 0 Then
							arrItem(nArrUBound - 1) = nUserID ' меняем ссылку на прямое значение
						End If
					End If
				End If

				If Not bOK Then strWarningLines = strWarningLines & "</td></tr>"
			End If ' If Not bIgnore

			dictIndexesSuccess2Common(Ubound(arrImportStudents)) = i

			arrImportStudents(Ubound(arrImportStudents)) = arrItem
			Redim Preserve arrImportStudents(1+Ubound(arrImportStudents))
		End If ' bOk
	Loop

	Call ClearIgnoredParents(dictIgnoreFathers, dictIgnoreMothers)
End Sub

Sub ClearIgnoredParents(dictFathers, dictMothers)
	Dim theItem, j

	For j = 1 To UBound(arrImportStudents) - 1
		theItem = arrImportStudents(j)
		If dictFathers.Exists(j) Then
			theItem(nFatherPos) = ""
			theItem(nArrUBound - 2) = 0
		End If
		If dictMothers.Exists(j) Then
			theItem(nMotherPos) = ""
			theItem(nArrUBound - 1) = 0
		End If
	Next
End Sub

Function CheckSnils(strVal)
	CheckSnils = objUserComponent.CheckSnils(strVal)
End Function

Function IsValidBirthCertif(strCertifSeria, strCertifNumber, ByRef strBirthCertifSeriaOut, ByRef strBirthCertifNumberOut)
	IsValidBirthCertif = objUserComponent.CheckBirthCertif(strCertifSeria, strCertifNumber, strBirthCertifSeriaOut, strBirthCertifNumberOut)
End Function

Function IsValidPassport(strPassportSeria, strPassportNumber, ByRef strPassportSeriaOut, ByRef strPassportNumberOut)
	IsValidPassport = objUserComponent.CheckPassport(strPassportSeria, strPassportNumber, strPassportSeriaOut, strPassportNumberOut)
End Function


Function GetSimilarSFM()
	Dim theItem, j
	Dim bSameAddPrograms, objClassInfo1, objClassInfo2

	GetSimilarSFM = 0
	nStudents = 0 : nFathers = 0 : nMothers = 0
	For j = 1 To UBound(arrImportStudents)-1
		theItem = arrImportStudents(j)

		If nStudents = 0 Then
			If strGender = theItem(5) Then
				If arrItem(2) = theItem(2) Then
					If arrItem(3) = theItem(3) Then
						If arrItem(4) = theItem(4) Then
							If DateDiff("d", arrItem(6), theItem(6), 0, 0) = 0 Then
								If arrItem(nArrUBound - 3) = 0 Then
									arrItem(nArrUBound - 3) = -j ' Ссылка на первую запись для дубля ученика
								End If
								
								If bAddSchool Then
									bSameAddPrograms = False
									If (arrItem(1) <> -1) And (theItem(1) <> -1) Then
										bSameAddPrograms = (arrItem(1) = theItem(1))
										If Not bSameAddPrograms Then
											Set objClassInfo1 = objNSNET.GetClassInfo(arrItem(1))
											Set objClassInfo2 = objNSNET.GetClassInfo(theItem(1))
											bSameAddPrograms = (GetSafeID(objClassInfo1("PROGID"), "0") = GetSafeID(objClassInfo2("PROGID"), "0"))
										End If
									End If

									If bSameAddPrograms Then
										' Попытка зачислить ученика в одно объединение (класс) или в разные объединения, но по одной программе. Это не допускается.
										nStudents = 1
									End If
								Else
									nStudents = 1
								End If
								
								If nStudents = 1 Then
									' Далее ходить по строке не имеет смысла, она будет проигнорирована.
									GetSimilarSFM = dictIndexesSuccess2Common(j)
									Exit Function
								End If
							End If
						End If
					End If
				End If
			End If
		End If

		If nFathers = 0 Then
			If theItem(1) <> -1 And theItem(nArrUBound) <> -1 Then ' Строки, которые игнорируются - не смотрим
				If arrItem(nFatherPos) <> "" And arrItem(nFatherPos) = theItem(nFatherPos) Then
					If arrItem(nFatherPos + 1) = theItem(nFatherPos + 1) Then
						If arrItem(nFatherPos + 2) = theItem(nFatherPos + 2) Then
							If DateDiff("d", arrItem(nFatherPos + 3), theItem(nFatherPos + 3), 0, 0) = 0 Then
								arrItem(nArrUBound - 2) = -j ' Ссылка на первую запись для дубля отца
								nFathers = 1
							End If
						End If
					End If
				End If
			End If
		End If

		If nMothers = 0 Then
			If theItem(1) <> -1 And theItem(nArrUBound) <> -1 Then ' Строки, которые игнорируются - не смотрим
				If arrItem(nMotherPos)<>"" And arrItem(nMotherPos) = theItem(nMotherPos) Then
					If arrItem(nMotherPos + 1) = theItem(nMotherPos + 1) Then
						If arrItem(nMotherPos + 2) = theItem(nMotherPos + 2) Then
							If DateDiff("d", arrItem(nMotherPos + 3), theItem(nMotherPos + 3), 0, 0) = 0 Then
								arrItem(nArrUBound - 1) = -j ' Ссылка на первую запись для дубля матери
								nMothers = 1
								'Exit Sub
							End If
						End If
					End If
				End If
			End If
		End If

		'If nStudents = 1 And nFathers = 1 And nMothers = 1 Then Exit Sub  - если nStudents = 1, то сразу выход.
	Next
End Function

Function GetValidClassName(theClassName)
	Dim strGrade, lngGrade, n
	Dim strCurGradeName, bInsSpace
	Dim nLen_ClassName, nLen_CurGradeName

	If IsDull(theClassName) Then GetValidClassName = "" : Exit Function

	If bPreSchool Then
		nLen_ClassName = Len(theClassName)

		For n = 0 To UBound(arr, 2)
			strCurGradeName = arr(1, n)
			nLen_CurGradeName = Len(strCurGradeName)
			If nLen_ClassName >= nLen_CurGradeName Then
				If LCase(Right(theClassName, nLen_CurGradeName)) = strCurGradeName Then
					bInsSpace = False
					If nLen_ClassName > nLen_CurGradeName Then
						bInsSpace = Mid(theClassName, nLen_ClassName - nLen_CurGradeName, 1) <> " "
					End If

					GetValidClassName = Left(theClassName, nLen_ClassName - nLen_CurGradeName) & IIf(bInsSpace, " ", "") & strCurGradeName
					Exit Function
				End If
			End If
		Next

		GetValidClassName = Null
		Exit Function
	End If

	strGrade = ""
	For n = 1 To Len(theClassName)
		If Not IsNumeric(Mid(theClassName,n,1)) Then Exit For
		strGrade = strGrade & Mid(theClassName,n,1)
	Next
	If strGrade="" Then
		GetValidClassName = Null
	Else
		lngGrade = CLng(strGrade)
		If (lngGrade<0) Or (lngGrade>12) Then GetValidClassName = Null Else GetValidClassName = theClassName
	End If
End Function

Function CalcName( ByVal theName )
	Dim strName
	strName = Left( Trim( theName ), 20 )
	If Not IsDull(strName) Then strName = Ucase(Left(strName, 1)) & Right(strName, Len(strName) - 1)
	CalcName = strName
End Function

Function IsBadFirstLetter(theName)
	Dim strFLetter

	IsBadFirstLetter = False
	If IsDull(theName) Then
		Exit Function
	End If
	strFLetter = UCase(Left(theName, 1))
	If strFLetter <> obLanguage("Common","kYoLetter") And (obLanguage.Compare(strFLetter,obLanguage("Common","kFirstLetter")) < 0 Or obLanguage.Compare(strFLetter,obLanguage("Common","kLastLetter")) > 0 ) Then
		IsBadFirstLetter = True
	End If
End Function

Sub InitPreSchool()
	bPreSchool = False
	If CLng(strFunctionalityType) = kFuncType_PreSchool Then
		bPreSchool = True
		arr = GetArrGrades(strFunctionalityType,1,0,0)
	End If
End Sub

Sub CheckClassName()
	nClassID = 0
	strClass = Trim(arrItem(1))

	' В простом случае GetValidClassName - не вызываем, т.к. там валидация именно для такого случая не вполне корректная.
	' Например, пришло "11". Непонятно, что из этого параллель, что буква. Поэтому напрямую проверяем наличие.
	If bPreSchool And nDocSubType<>kmdstNoClassEnroll Then strClass = GetValidClassName(strClass)

	If strClass = "" Then
		strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrClassUndefined",strFunctionalityType) & "</td></tr>"
		bOk = False
		Exit Sub
	End If

	If IsNull(strClass) Then
		strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kErrClass & "</td></tr>"
		bOk = False
		Exit Sub
	End If

	IF nDocSubType <> kmdstNoClassEnroll Then
		nClassID = objNSNET.GetClassID(Empty, strCurrYearID, strClass)
		IF nDocSubType < kmdstAllClassesEnroll And nDocSubType > 0 Then nClassID = objNSNET.GetSafeYearGradeClassIDByDocSubType(nDocSubType, strCurrYearID, nClassID)
		If nClassID <= 0 Then
			strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & IIF(nDocSubType < kmdstAllClassesEnroll And nDocSubType > 0, obLanguage("Import","kWarnClassByDocSubType",strFunctionalityType), obLanguage("Import","kWarnClass",strFunctionalityType)) & "</td></tr>"
			bOk = False
		Else
			arrItem(5) = strGender
			arrItem(1) = nClassID
			bOk = True
		End If
	Else
		if Not CheckNoClassEnrollGrade(strClass) Then
			strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kErrClass & "</td></tr>"
			bOk = False
		Else
			bOk = True
		End If
	End If
End Sub

Function CheckNoClassEnrollGrade(strClass)
	Dim j

	CheckNoClassEnrollGrade = True
	If bPreSchool Then
		For j = 0 to Ubound(arr, 2)
			If arr(1, j) = strClass Then
				nClassID = arr(0, j)
				Exit Function
			End If
		Next

		CheckNoClassEnrollGrade = False
	Else
		nClassID = GetSafeLng(strClass, -1)
		if nClassID > 12 or nClassID < 0 Then CheckNoClassEnrollGrade = False
	End If
End Function

Function ImportItem2Date(strItem)
	Dim dtItem

	strItem = Trim(strItem)
	If Not IsDull(strItem) Then
		dtItem = Str2Date(strItem)
		If DateDiff("d", dtItem, NSDate(), 0,0) <= 0 Then dtItem = Null
	Else
		dtItem = Null
	End If

	ImportItem2Date = dtItem
End Function

Function GetPoolCategories(ByRef strCategories)
	Dim dict, objPoolCategories, nCategoryID, strCategoryName

	Set dict = Server.CreateObject("NetCity.Storage")
	Set objPoolCategories = objNSNET.GetPoolCategories("1, 1000")

	If objPoolCategories.EOF Then
		GenerateError obLanguage("Import","kCantGetPoolCategories")
	End If
	strCategories = ""

	While Not objPoolCategories.EOF
		nCategoryID = GetSafeLng(objPoolCategories("CATEGORYID"), Null)
		strCategoryName = GetSafeStr(objPoolCategories("CATEGORYNAME"), -1, Null)
		If strCategories <> "" Then
			strCategories = strCategories & ", "
		End If
		strCategories = strCategories & strCategoryName
		dict(UCase(strCategoryName)) = nCategoryID
		objPoolCategories.MoveNext
	WEnd

	Set GetPoolCategories = dict
End Function

Sub WriteAjaxErrorResponse(nErrorCode, strText)
	Response.Write Chr(2)
	Response.Write strText
	Response.Write Chr(2)

	Response.Flush
End Sub%>