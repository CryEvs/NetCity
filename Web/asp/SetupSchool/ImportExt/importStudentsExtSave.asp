<!-- #INCLUDE FILE="importExtSave_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

On Error Resume Next

Dim nIndexFather, nIndexMother
Dim strFLastName, strFFirstName, strFMiddleName, strFDisplayName, dtFBirthDate
Dim strMLastName, strMFirstName, strMMiddleName, strMDisplayName, dtMBirthDate
Dim arrImportStudents
Dim bNewUser, bMovBook
Dim bFather, bNewFather, nFatherID, bHasFather
Dim bMother, bNewMother, nMotherID, bHasMother
Dim strClass, nClassID, bSetClass, objStudentClass
Dim iSuccessParents, iErrorsParents
Dim transaction
Dim bAddInMoveDoc, dctSelectedUsers, strDocID, strCHR
Dim timeout, objLangList, arrLangList

Dim component, uow, editUserInfo
Dim iOtherSchoolsParents
Dim strParentGender
Dim bPreSchool

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetImportStudentsWork(strUserId, strSchoolId, strCurrYearId, strCurrGlobalYearId)

timeout = 60 * 30	'30 minutes

Set dctSelectedUsers = CreateObject("NetCity.Storage")

strBackPage = GetSafeStr(Request("Back"), 255, "")
If Instr(UCase(strBackPage),"STUDENTS.ASP") Then bMovBook=False Else bMovBook=True
If IsArray(obTokenMgr.GetData(strToken,"ImportStudents") ) Then arrImportStudents = obTokenMgr.GetData(strToken,"ImportStudents") Else RedirectTo strBackPage, null
strUniqueCode = GetSafeStr(obTokenMgr.GetData(strToken,"strUniqueCode"),4,"1234")

Function GetDisplName(strLName, strFName, strMName)
	GetDisplName = strLName
	If strFName <> "" Then GetDisplName = GetDisplName & " " & Left(strFName,1) & "."
	If strMName <> "" Then GetDisplName = GetDisplName & " " & Left(strMName,1) & "."
End Function

' Определяем STATEPROVID для адреса
Call InitStateProvID()
iSuccess = 0: iErrors = 0
iImport = 0
iSuccessParents = 0: iErrorsParents = 0
iOtherSchoolsParents = 0
Set transaction = uow.Transaction

TestError obLanguage("Common","kUnexpErr")
Set objLangList = objNSNET.GetForeignLanguages_WT(transaction, False)
arrLangList = objLangList.GetRows(,,Array("NAME", "FOREIGNLANGID"))

bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool

For i = 0 To UBound(arrImportStudents)-1
	Call OnNewImportRecord()

	arrItem = arrImportStudents(i)
	strGender = arrItem(7)
	strClass = arrItem(2)

	strLastName = arrItem(3)
	strFirstName = arrItem(4)
	strMiddleName = arrItem(5)
	strDisplayName = strLastName
	If strFirstName<>"" Then strDisplayName = strDisplayName & " " & strFirstName

	If Not IsDull(arrItem(6)) Then dtBirthDate = Str2Date(arrItem(6)) Else dtBirthDate = Null

	If bPreSchool Then
		nIndexMother = 25
		nIndexFather = 37
	Else
		nIndexMother = 31
		nIndexFather = 43
	End If

	strFLastName	= arrItem(nIndexFather)
	strFFirstName	= arrItem(nIndexFather + 1)
	strFMiddleName	= arrItem(nIndexFather + 2)
	If Not IsDull(arrItem(nIndexFather + 3)) Then dtFBirthDate = Str2Date(arrItem(nIndexFather + 3)) Else dtFBirthDate = Null

	strMLastName	= arrItem(nIndexMother)
	strMFirstName	= arrItem(nIndexMother + 1)
	strMMiddleName	= arrItem(nIndexMother + 2)
	If Not IsDull(arrItem(nIndexMother + 3)) Then dtMBirthDate = Str2Date(arrItem(nIndexMother + 3)) Else dtMBirthDate = Null


	strFDisplayName = GetDisplName(strFLastName, strFFirstName, strFMiddleName)
	bFather = Not IsDull(strFLastName) ' Флаг, что в импорте заданы сведения об отце и далее они будут обрабатываться, определяется по первому полю для отца
	nFatherID = 0

	strMDisplayName = GetDisplName(strMLastName, strMFirstName, strMMiddleName)
	bMother = Not IsDull(strMLastName) ' Аналогично отцу
	nMotherID = 0

	' Вроде имеет значение только для (Not bMovBook)
	bHasFather = False
	bHasMother = False

	strComment = ""

	strImpUserID = ""
	Set rsSimilar = objNSNET.GetSimilarUsers_WT(transaction, strSchoolID, rlStudent, UCase(strLastName), UCase(strFirstName), UCase(strMiddleName), IIf(IsDull(dtBirthDate), Empty, dtBirthDate), strGender, -1 )
	If Not bMovBook Then
		Dim objParentList
		bNewUser = False

		If Not rsSimilar.EOF Then
			strImpUserID = GetSafeID(rsSimilar("USERID"), Null)
		End If
		Set objParentList = objNSNET.GetParentsListForStudent(CLng(strImpUserID))
		If (objParentList.EOF) Then
			bNewFather = True
			bNewMother = True
		Else
			'bNewFather = False
			'bNewMother = False
			While Not objParentList.EOF
				strParentGender = GetSafeStr(objParentList("GENDER"), -1, "")
				If strParentGender = obLanguage("Common","kMaleLet") Then
					bHasFather = True
				ElseIf strParentGender = obLanguage("Common","kFemaleLet") Then
					bHasMother = True
				End If
				objParentList.MoveNext
			WEnd
			bNewFather = Not bHasFather
			bNewMother = Not bHasMother
		End If
	Else
		bNewUser = True
		If Not rsSimilar.EOF Then
			If rsSimilar.RecordCount > 1 Then
				GenerateErrorWithTransaction transaction,obLanguage("Import","kStudentFIOExists_Grater2") & " (" & obLanguage("Import","kLine") & " " & i & ")"
			End If
			strImpUserID = GetSafeID(rsSimilar("USERID"), Null)
			bNewUser = False
		End If
		If Not bMovBook Then bNewUser = False

		bNewFather = True
		bNewMother = True
	End If

	If Not bMovBook Or bNewUser Then
		If bFather And (bNewFather Or bHasFather) Then
			If strFLastName = "0" Then ' признак, что надо использовать запись об родителе из другой школы, выставляется в importStudentsExt.asp
				nFatherID = GetSafeID(strFFirstName, Null) ' а здесь сохранён ид.
				bNewFather = False
				iOtherSchoolsParents = iOtherSchoolsParents + 1
			Else
				Set rsSimilar = objNSNET.GetSimilarUsers_WT(transaction, strSchoolID, rlParent, UCase(strFLastName), UCase(strFFirstName), UCase(strFMiddleName), IIf(IsDull(dtFBirthDate), Empty, dtFBirthDate), obLanguage("Common","kMaleLet"), -1)
				If Not rsSimilar.EOF Then
					If rsSimilar.RecordCount > 1 Then
						bFather = False
					Else
						nFatherID = GetSafeID(rsSimilar("USERID"), Null)
					End If
					bNewFather = False
				ElseIf bHasFather Then
					' У ученика в системе уже есть отец, при этом в файле импорта указан другой отец, поэтому таких "отцов" не обрабатываем.
					' По-хорошему, об этом надо выводить предупреждение при первичном анализе файла импорта в importStudentsExt.asp
					bFather = False
				End If
			End If
		End If

		If bMother And (bNewMother Or bHasMother) Then
			If strMLastName = "0" Then ' признак, что надо использовать запись об родителе из другой школы
				nMotherID = GetSafeID(strMFirstName, Null)
				bNewMother = False
				iOtherSchoolsParents = iOtherSchoolsParents + 1
			Else
				Set rsSimilar = objNSNET.GetSimilarUsers_WT(transaction, strSchoolID, rlParent, UCase(strMLastName), UCase(strMFirstName), UCase(strMMiddleName), IIf(IsDull(dtMBirthDate), Empty, dtMBirthDate), obLanguage("Common","kFemaleLet"), -1)
				If Not rsSimilar.EOF Then
					If rsSimilar.RecordCount > 1 Then
						bMother = False
					Else
						nMotherID = GetSafeID(rsSimilar("USERID"), Null)
					End If
					bNewMother = False
				ElseIf bHasMother Then
					' См. комментарий для отца выше.
					bMother = False
				End If
			End If
		End If

		If bNewUser Then
			nNewUserID = -1
			Err.Clear
			nNewUserID = objNSNET.CreateUser(transaction, strSchoolID, strCurrYearID,_
				strLastName, objHelper.MD5(CStr(strLastName) & CStr(strUniqueCode)), strDisplayName, strFirstName, strMiddleName, strLastName, strGender, "", "", dtBirthDate, strComment, rlStudent)
			If Err <> 0 Then
				Err.Clear
				iErrors = iErrors+1
			Else
				If nNewUserID > 0 Then
					Set editUserInfo = uow.EditUserInfo(nNewUserID)
					iSuccess = iSuccess+1
					Call editUserInfo.SetUserSettings(-1, -1, 1, -1, "")
					strImpUserID = CStr(nNewUserID)
				Else
					iErrors = iErrors+1
				End If
			End If
		End If

		If bFather And (bNewFather Or bHasFather) Then
			If bNewFather Then
				nFatherID = -1
				Err.Clear
				nFatherID = objNSNET.CreateUser(transaction, strSchoolID, strCurrYearID,_
					"о" & strFLastName, objHelper.MD5(CStr(strFLastName) & CStr(strUniqueCode)), strFDisplayName, strFFirstName, strFMiddleName, strFLastName, obLanguage("Common","kMaleLet"), "", "", dtFBirthDate, "", rlParent)
				If Err <> 0 Then
					Err.Clear
				End If
			End If

			If nFatherID > 0 Then
				Set editUserInfo = uow.EditUserInfo(nFatherID)

				If bNewFather Then
					Call editUserInfo.SetUserSettings(-1, -1, 1, -1, "")
				End If

				Call SaveCommonParentInfo_WT(editUserInfo.Transaction, nIndexFather)
				' Атрибутивные параметры для Родителя, отца
				Call attribParams.RemoveAll()
				Call SaveAttrParam_WT(transaction, 2012, arrItem(nIndexFather + 10)) ' СНИЛС
				Call SaveAttrParam_WT(transaction, 2001, arrItem(nIndexFather + 11)) ' Степень родства
				Call editUserInfo.SetAttributeParams(attribParams)
				Call attribParams.RemoveAll()

				If bNewFather Then
					iSuccessParents = iSuccessParents + 1
				End If
			Else
				bFather = False
				iErrorsParents = iErrorsParents + 1
			End If
		End If

		If bMother And (bNewMother Or bHasMother) Then
			If bNewMother Then
				nMotherID = -1
				Err.Clear
				nMotherID = objNSNET.CreateUser(transaction, strSchoolID, strCurrYearID,_
					"м" & strMLastName, objHelper.MD5(CStr(strMLastName) & CStr(strUniqueCode)), strMDisplayName, strMFirstName, strMMiddleName, strMLastName, obLanguage("Common","kFemaleLet"), "", "", dtMBirthDate, "", rlParent)
				If Err <> 0 Then
					Err.Clear
				End If
			End If

			If nMotherID > 0 Then
				Set editUserInfo = uow.EditUserInfo(nMotherID)

				If bNewMother Then
					Call editUserInfo.SetUserSettings(-1, -1, 1, -1, "")
				End If

				Call SaveCommonParentInfo_WT(editUserInfo.Transaction, nIndexMother)
				' Атрибутивные параметры для Родителя, матери
				Call attribParams.RemoveAll()
				Call SaveAttrParam_WT(transaction, 2012, arrItem(nIndexMother + 10)) ' СНИЛС
				Call SaveAttrParam_WT(transaction, 2001, arrItem(nIndexMother + 11)) ' Степень родства
				Call editUserInfo.SetAttributeParams(attribParams)
				Call attribParams.RemoveAll()

				If bNewMother Then
					iSuccessParents = iSuccessParents + 1
				End If
			Else
				bMother = False
				iErrorsParents = iErrorsParents + 1
			End If
		End If

		If strImpUserID <> "" Then
			Set editUserInfo = uow.EditUserInfo(strImpUserID)
			' внутри ф-ции есть предварительная проверка на существование
			If bFather And nFatherID > 0 Then Call editUserInfo.SetParentToStudent(nFatherID)
			If bMother And nMotherID > 0 Then Call editUserInfo.SetParentToStudent(nMotherID)

			'***********************************************************************************
			' Class
			If bMovBook Then
				nClassID = GetSafeLng(strClass,-9999)
				If nClassID=-9999 or Err <> 0 Then
					Err.Clear
					iErrors = iErrors+1
				Else
					dctSelectedUsers.Item(nNewUserID) = Array("-1", "2", nClassID)
				End if
			End If
		End If
		'***********************************************************************************
		If strImpUserID <> "" Then
			
			strNation = Trim(CStr(arrItem(8)))
			If CLng(strFunctionalityType) = kFuncType_PreSchool Then
				strHomePhone = Trim(CStr(arrItem(23)))
				strMobilePhone = Trim(CStr(arrItem(24)))
				strEMail	= ""
				strPassSer	= ""
				strPassNum	= ""
				strPassSubdiv = ""
				dtPassDate	= ""
				strPassInfo	= ""
			Else
				strHomePhone = Trim(CStr(arrItem(28)))
				strMobilePhone = Trim(CStr(arrItem(29)))
				strEMail	= Trim(CStr(arrItem(30)))
				strPassSer	= Trim(CStr(arrItem(9)))
				strPassNum	= Trim(CStr(arrItem(10)))
				strPassSubdiv = Trim(CStr(arrItem(11)))
				dtPassDate	= Trim(CStr(arrItem(12)))
				strPassInfo	= Trim(CStr(arrItem(13)))
			End If

			Call SaveCommonUserInfo_WT(editUserInfo.Transaction)
			Call editUserInfo.SetMobilePhone(strMobilePhone)

			Call SaveAddress_WT(editUserInfo.Transaction)
			Call SaveAttribParams_WT(editUserInfo.Transaction)

			Call AddParamsToComment_WT(editUserInfo.Transaction)
			Call SaveLanguages_WT(editUserInfo.Transaction)
			Call SetComment_WT(editUserInfo.Transaction)

			iImport = iImport + 1
		End If
	End If
	' Сброс параметров
	Call attribParams.RemoveAll()
Next

if bMovBook Then strCHR = chr(10) :Else strCHR = "\n"

strSave = strSave & obLanguage("Import","kSuccessImport") & iImport
strSave = strSave & strCHR & obLanguage("Import","kNewRecords") & iSuccess
If iErrors > 0 Then strSave = strSave & strCHR & obLanguage("Import","kErrCreateNewUser") & iErrors

strSave = strSave & strCHR & obLanguage("Import","kSuccessImportParents") & iSuccessParents
If iErrorsParents > 0 Then strSave = strSave & strCHR & obLanguage("Import","kErrCreateNewParents") & iErrorsParents
If iOtherSchoolsParents > 0 Then strSave = strSave & strCHR & obLanguage("Import","kParentsFromOtherEOs") & iOtherSchoolsParents

Call obTokenMgr.SetData(strToken,stWasSaved, strSave )

Call obTokenMgr.SetData(strToken, stSelectedUsers, dctSelectedUsers)

If bMovBook Then
	If iSuccess>0 Then
		Call obTokenMgr.SetData(strToken, stTransaction, transaction)
		ServerRedirect "/asp/SetupSchool/Movement/SaveMoveBook.asp"
	Else
		Dim objForm
		Call uow.Rollback()
		Set objForm = obTokenMgr.GetData(strToken, "QA_dct")
		RedirectTo "/asp/SetupSchool/Movement/MoveBookEdit.asp", Array("ENROLLFROM",4,"DOCTYPE","2", "DOCID", objForm("DOCID"))
	End If
Else
	Call uow.Commit()
	Call uow.Dispose()
	RedirectTo strBackPage, null
End If
'****************************************************************************************************************

' Save parameters

Sub SaveAddress_WT(transaction)
	' Фактический
	If CLng(strFunctionalityType) = kFuncType_PreSchool Then
		strCity = Trim(CStr(arrItem(10)))
	Else
		strCity = Trim(CStr(arrItem(15)))
	End If
	If Not IsDull(strCity) Then
		If CLng(strFunctionalityType) = kFuncType_PreSchool Then
			strDistrict = Trim(CStr(arrItem(11)))
			strLocation = Trim(CStr(arrItem(12)))
			strHouse = Trim(CStr(arrItem(13)))
			strCorp = Trim(CStr(arrItem(14)))
			strRoom = Trim(CStr(arrItem(15)))
			strZipCode = Trim(CStr(arrItem(9)))
		Else
			strDistrict = Trim(CStr(arrItem(16)))
			strLocation = Trim(CStr(arrItem(17)))
			strHouse = Trim(CStr(arrItem(18)))
			strCorp = Trim(CStr(arrItem(19)))
			strRoom = Trim(CStr(arrItem(20)))
			strZipCode = Trim(CStr(arrItem(14))) ' Т.е. индекс
		End If
		strLocationType = Trim(CStr(arrItem(Ubound(arrItem)-1)))
		Call SetUserAddress_WT(transaction, strImpUserID, 1 )
	End If

	' Регистрации
	If CLng(strFunctionalityType) = kFuncType_PreSchool Then
		strCity = Trim(CStr(arrItem(17)))
	Else
		strCity = Trim(CStr(arrItem(22)))
	End If
	If Not IsDull(strCity) Then
		If CLng(strFunctionalityType) = kFuncType_PreSchool Then
			strDistrict = Trim(CStr(arrItem(18)))
			strLocation = Trim(CStr(arrItem(19)))
			strHouse = Trim(CStr(arrItem(20)))
			strCorp = Trim(CStr(arrItem(21)))
			strRoom = Trim(CStr(arrItem(22)))
			strZipCode = Trim(CStr(arrItem(16)))
		Else
			strDistrict = Trim(CStr(arrItem(23)))
			strLocation = Trim(CStr(arrItem(24)))
			strHouse = Trim(CStr(arrItem(25)))
			strCorp = Trim(CStr(arrItem(26)))
			strRoom = Trim(CStr(arrItem(27)))
			strZipCode = Trim(CStr(arrItem(21)))
		End If
		strLocationType = Trim(CStr(arrItem(Ubound(arrItem))))
		Call SetUserAddress_WT(transaction, strImpUserID, 0 )
	End If
End Sub

Sub SaveAttribParams_WT(transaction)
	Dim bShowMnsForms, bModuleTalentStudents
	Dim nDispl

	bShowMnsForms = obContext.ServerSettings.SystemSettings.ShowMnsForms
	bModuleTalentStudents = obContext.ServerSettings.SystemSettings.ModuleTalentStudents

	' Здесь индекс в arrItem() - для полного набора параметров, в реальности в зависимости от настроек параметров может быть меньше, при этом для коррекции индекса используется nDispl
	nDispl = 0
	If CLng(strFunctionalityType) = kFuncType_PreSchool Then

		Call SaveAttrParam_WT(transaction, 1001, arrItem(51)) ' Группа здоровья
		Call SaveAttrParam_WT(transaction, 1031, arrItem(52)) ' Физ.группа
		Call SaveAttrParam_WT(transaction, 1030, arrItem(53)) ' Заболевания

		Call SaveAttrParam_WT(transaction, 1014, arrItem(54)) ' № личного дела

		Call SaveAttrParam_WT(transaction, 1018, arrItem(55)) ' Психолого-педагогическая  характеристика
		Call SaveAttrParam_WT(transaction, 1019, arrItem(56)) ' Дополнительная контактная  информация
		Call SaveAttrParam_WT(transaction, 1020, arrItem(57)) ' Наличие ПК дома

		' Медицинский полис
		Call SaveAttrParam_WT(transaction, 1022, arrItem(58)) ' Серия
		Call SaveAttrParam_WT(transaction, 1023, arrItem(59)) ' № полиса
		Call SaveAttrParam_WT(transaction, 1024, arrItem(60)) ' Дата выдачи
		Call SaveAttrParam_WT(transaction, 1025, arrItem(61)) ' Кем выдано
		
		Call SaveAttrParam_WT(transaction, 1032, arrItem(62)) ' Состав семьи
		Call SaveAttrParam_WT(transaction, 1026, arrItem(63)) ' Социальное положение
		
		Call SaveAttrParam_WT(transaction, 1044, arrItem(64)) ' Номер сертификата доп. образования
		Call SaveAttrParam_WT(transaction, 1045, arrItem(65)) ' Дата сертификата доп. образования

		Call SaveAttrParam_WT(transaction, 1071, arrItem(66)) ' Программа обучения (для детсада, EDUC_PROG_PRESCHOOL)

		Call SaveAttrParam_WT(transaction, 1048, arrItem(67)) ' Ограничение возможностей

		Call SaveAttrParam_WT(transaction, 1050, arrItem(68)) ' Режим пребывания
		Call SaveAttrParam_WT(transaction, 1054, arrItem(69)) ' Планирует уйти из ДОО ...
		Call SaveAttrParam_WT(transaction, 1051, arrItem(70)) ' Льгота на питание
		Call SaveAttrParam_WT(transaction, 1052, arrItem(71)) ' СНИЛС

		' #19661. Далее параметр может быть или не быть, поэтому далее используем nDispl.
		If Not bShowMnsForms Then
			nDispl = nDispl + 1
		Else
			' 31.01.2014 - добавили ещё 1 параметр, Малочисленные народы Севера.
			Call SaveAttrParam_WT(transaction, 1053, arrItem(72 - nDispl)) ' Малочисленные народы Севера
		End If

		' 10.12.2015 - добавили ещё 6 параметров, #13633 (7-ой пар-р "Адрес регистрации по месту пребывания" обрабатывается где Адреса)
		Call SaveAttrParam_WT(transaction, 1055, arrItem(73 - nDispl)) ' Тип финансирования обучения
		Call SaveAttrParam_WT(transaction, 1067, arrItem(74 - nDispl)) ' Уровень бюджета

		Call SaveAttrParam_WT(transaction, 1057, arrItem(75 - nDispl)) ' Группа инвалидности
		Call SaveAttrParam_WT(transaction, 1058, arrItem(76 - nDispl)) ' Категория инвалидности
		Call SaveAttrParam_WT(transaction, 1059, arrItem(77 - nDispl)) ' Срок действия группы инвалидности
		Call SaveAttrParam_WT(transaction, 1060, arrItem(78 - nDispl)) ' Адаптированная программа
		Call SaveAttrParam_WT(transaction, 4003, arrItem(79 - nDispl)) ' Потребность в длительном лечении

		Call SaveAttrParam_WT(transaction, 1061, arrItem(80 - nDispl)) ' Место рождения

		' 1.02.106 #14189, ещё параметр "Занимает вакантное место ОВЗ"
		Call SaveAttrParam_WT(transaction, 1065, arrItem(81 - nDispl)) ' Занимает вакантное место ОВЗ

		Call SaveAttrParam_WT(transaction, 1070, arrItem(82 - nDispl)) ' Отказ от предоставления ПДн

		' #20800
		If Not bModuleTalentStudents Then
			nDispl = nDispl + 2
		Else
			Call SaveAttrParam_WT(transaction, 1080, arrItem(83 - nDispl)) ' Одаренный ребенок
			Call SaveAttrParam_WT(transaction, 1090, arrItem(84 - nDispl)) ' Направление одаренности
		End If
		Call SaveAttrParam_WT(transaction, 1072, arrItem(85 - nDispl)) ' Горячее питание
		Call SaveAttrParam_WT(transaction, 1073, arrItem(86 - nDispl)) ' Нуждается в подвозе к месту обучения
		Call SaveAttrParam_WT(transaction, 1074, arrItem(87 - nDispl)) ' Обеспечен подвоз к месту обучения
	Else
		Call SaveAttrParam_WT(transaction, 1039, arrItem(57)) ' ИНН

		Call SaveAttrParam_WT(transaction, 1001, arrItem(58)) ' Группа здоровья до 18
		Call SaveAttrParam_WT(transaction, 1069, arrItem(59)) ' Группа здоровья старше 18

		Call SaveAttrParam_WT(transaction, 1031, arrItem(60)) ' Физ.группа

		Call SaveAttrParam_WT(transaction, 1030, arrItem(61)) ' Заболевания

		Call SaveAttrParam_WT(transaction, 1014, arrItem(62)) ' № личного дела

		Call SaveAttrParam_WT(transaction, 1018, arrItem(63)) ' Психолого-педагогическая  характеристика
		Call SaveAttrParam_WT(transaction, 1019, arrItem(64)) ' Дополнительная контактная  информация
		Call SaveAttrParam_WT(transaction, 1020, arrItem(65)) ' Наличие ПК дома

		' Медицинский полис
		Call SaveAttrParam_WT(transaction, 1022, arrItem(66)) ' Серия
		Call SaveAttrParam_WT(transaction, 1023, arrItem(67)) ' № полиса
		Call SaveAttrParam_WT(transaction, 1024, arrItem(68)) ' Дата выдачи
		Call SaveAttrParam_WT(transaction, 1025, arrItem(69)) ' Кем выдано
		
		Call SaveAttrParam_WT(transaction, 1032, arrItem(70)) ' Состав семьи
		Call SaveAttrParam_WT(transaction, 1026, arrItem(71)) ' Социальное положение

		' 17.10.2008 - добавили ещё 2 параметра - Номер и Дата сертификата доп. образования.
		Call SaveAttrParam_WT(transaction, 1044, arrItem(72)) ' Номер сертификата доп. образования
		Call SaveAttrParam_WT(transaction, 1045, arrItem(73)) ' Дата сертификата доп. образования
		Call SaveAttrParam_WT(transaction, 1029, arrItem(74)) ' Девиантное поведение

		' 1.02.2016 - #14075 - добавили ещё 2 параметра - Бросил обучение и Принимаемые меры
		Call SaveAttrParam_WT(transaction, 1063, arrItem(75)) ' Бросил обучение
		Call SaveAttrParam_WT(transaction, 1064, arrItem(76)) ' Принимаемые меры

		Call SaveAttrParam_WT(transaction, 1041, arrItem(77)) ' Форма обучения
		Call SaveAttrParam_WT(transaction, 1042, arrItem(78)) ' Программа обучения
		' 19.01.2009 - добавили ещё 2 параметра, для ЕГЭ - Предметы для ЕГЭ по сокр. программе, Ограничение возможностей.
		Call SaveAttrParam_WT(transaction, 1037, arrItem(79)) ' Предметы для ЕГЭ
		Call SaveAttrParam_WT(transaction, 1047, arrItem(80)) ' Предметы для ЕГЭ по сокр. программе
		Call SaveAttrParam_WT(transaction, 1038, arrItem(81)) ' Тип документа для ЕГЭ

		Call SaveAttrParam_WT(transaction, 1048, arrItem(82)) ' Ограничение возможностей

		' 17.02.2011 - добавили ещё 1 параметр, Льгота на питание.
		Call SaveAttrParam_WT(transaction, 1051, arrItem(83)) ' Льгота на питание
		' 16.01.2013 - добавили ещё 1 параметр, СНИЛС.
		Call SaveAttrParam_WT(transaction, 1052, arrItem(84)) ' СНИЛС

		' #19661. Далее параметр может быть или не быть, поэтому далее используем nDispl.
		If Not bShowMnsForms Then
			nDispl = nDispl + 1
		Else
			' 31.01.2014 - добавили ещё 1 параметр, Малочисленные народы Севера.
			Call SaveAttrParam_WT(transaction, 1053, arrItem(85 - nDispl)) ' Малочисленные народы Севера
		End If

		' 10.12.2015 - добавили ещё 6 параметров, #13633 (7-ой пар-р "Адрес регистрации по месту пребывания" обрабатывается где Адреса)
		Call SaveAttrParam_WT(transaction, 1055, arrItem(86 - nDispl)) ' Тип финансирования обучения
		Call SaveAttrParam_WT(transaction, 1067, arrItem(87 - nDispl)) ' Уровень бюджета

		Call SaveAttrParam_WT(transaction, 1057, arrItem(88 - nDispl)) ' Группа инвалидности
		Call SaveAttrParam_WT(transaction, 1058, arrItem(89 - nDispl)) ' Категория инвалидности
		Call SaveAttrParam_WT(transaction, 1059, arrItem(90 - nDispl)) ' Срок действия группы инвалидности
		Call SaveAttrParam_WT(transaction, 1060, arrItem(91 - nDispl)) ' Адаптированная программа
		Call SaveAttrParam_WT(transaction, 4003, arrItem(92 - nDispl)) ' Потребность в длительном лечении

		Call SaveAttrParam_WT(transaction, 1061, arrItem(93 - nDispl)) ' Место рождения

		Call SaveAttrParam_WT(transaction, 1070, arrItem(94 - nDispl)) ' Отказ от предоставления ПДн

		' #20800
		If Not bModuleTalentStudents Then
			nDispl = nDispl + 2
		Else
			Call SaveAttrParam_WT(transaction, 1080, arrItem(95 - nDispl)) ' Одаренный ребенок
			Call SaveAttrParam_WT(transaction, 1090, arrItem(96 - nDispl)) ' Направление одаренности
		End If
		Call SaveAttrParam_WT(transaction, 1072, arrItem(97 - nDispl)) ' Горячее питание
		Call SaveAttrParam_WT(transaction, 1073, arrItem(98 - nDispl)) ' Нуждается в подвозе к месту обучения
		Call SaveAttrParam_WT(transaction, 1074, arrItem(99 - nDispl)) ' Обеспечен подвоз к месту обучения
	End If

	Call editUserInfo.SetAttributeParams(attribParams)
End Sub

Sub AddParamsToComment_WT(transaction)
	Dim strComment, strNewComment, bExit, bSave
	Dim strParamVal

	bExit = False
	bExit = True
	If bExit Then Exit Sub ' раньше при импорте информация дублировалась в коментарий, сейчас это будет отключено
	
	strComment = objNSNET.GetUserComment_WT(transaction, strImpUserID, strCurrYearID)
	If IsDull(strComment) Then strComment = ""

	strNewComment = ""
	bSave = False

	If Not bExit And UBound(arrItem)>=kDimens+1 Then
		strParamVal = Trim(CStr(arrItem(kDimens+1)))
		If Not IsDull(strParamVal) Then
			strNewComment = IIf(strComment = "", "", vbCrLf) & "1c: " & strParamVal
			If Len(strComment & strNewComment) > kAttrParamMaxLen Then
				bExit = True
			Else
				strComment = strComment & strNewComment
				bSave = True
			End If
		End If
	End If
	If Not bExit And bSave Then
		Call editUserInfo.SetComment(strComment)
	End If
End Sub

Sub SaveLanguages_WT(transaction)
	Dim strLang1, strLang2
	Dim strLang1_ID, strLang2_ID
	Dim strLangInit1_ID, strLangInit2_ID
	Dim objInfo
	Dim bToComment1, bToComment2

	If bPreSchool Then
		strLang1 = Trim(CStr(arrItem(50)))
		strLang2 = Trim(CStr(arrItem(51)))
	Else
		strLang1 = Trim(CStr(arrItem(56)))
		strLang2 = Trim(CStr(arrItem(57)))
	End If
	If IsDull(strLang1) And IsDull(strLang2) Then Exit Sub
	' get already defined values
	Set objInfo = objNSNET.GetStudentInfo2_WT(transaction, strImpUserID)
	If objInfo.EOF Then Call GenerateErrorWithTransaction (transaction, obLanguage("Common","kInvalidParameter"))
	strLangInit1_ID = GetSafeLng(objInfo("LANG_ID"), -1)
	strLangInit2_ID = GetSafeLng(objInfo("LANG_ID2"), -1)
	' get ...

	strLang1_ID = CheckToComment(strLang1, strLangInit1_ID, "kForeignLanguage")
	strLang2_ID = CheckToComment(strLang2, strLangInit2_ID, "kForeignLanguage2")
	Call editUserInfo.SaveStudentInfo(strLang1_ID, strLang2_ID)
End Sub

Function CheckToComment(strLang, defVal, strForeignLanguage)
	CheckToComment = ""
	If Not IsDull(strLang) Then
		If IsArray(arrLangList) Then CheckToComment = GetLangID(strLang)
		If CheckToComment = -1 Then
			Call AddOneParamToComment(obLanguage("Import",strForeignLanguage), strLang)
		End If
	Else
		CheckToComment = defVal
	End If
End Function

Function GetLangID(strLang)
	Dim nCnt, strCurrName
	Dim j ' i - нельзя, чтобы пересекался с глобальным i!

	nCnt = 0
	GetLangID = -1
	For j = 0 To UBound(arrLangList, 2)
		strCurrName = GetSafeStr(arrLangList(0,j), -1, Null)
		If InStr(UCase(strCurrName), UCase(strLang)) > 0 Then
			nCnt = nCnt + 1
			GetLangID = GetSafeLng(arrLangList(1,j), Null)
		End If
	Next
	If nCnt <> 1 Then GetLangID = -1
End Function

' #18262. Как SaveCommonUserInfo_WT в importExtSave_inc.asp
Function SaveCommonParentInfo_WT(transaction, ind)
	Dim nRes, strTmpNation
	Dim strTmpPassSer, strTmpPassNum, strTmpPassSubdiv, dtTmpPassDate, strTmpPassInfo

	strTmpNation = Trim(CStr(arrItem(ind + 4)))
	If Not IsDull(strTmpNation) Then
		nRes = objNSNET.GetNationIdByName(transaction, strTmpNation)
		If nRes = 0 Then
			'Call AddOneParamToComment(obLanguage("Common","kNation"), strNation)
		Else
			Call editUserInfo.SetNation(nRes)
		End If
	End If

	strTmpPassSer	= Trim(CStr(arrItem(ind + 5)))
	strTmpPassNum	= Trim(CStr(arrItem(ind + 6)))
	strTmpPassSubdiv = Trim(CStr(arrItem(ind + 7)))
	dtTmpPassDate	= Trim(CStr(arrItem(ind + 8)))
	strTmpPassInfo	= Trim(CStr(arrItem(ind + 9)))

	If IsDull(dtTmpPassDate) Then dtTmpPassDate = Null Else dtTmpPassDate = Str2Date(dtTmpPassDate)
	'Call editUserInfo.SetCommonShortInfo(strHomePhone, strEMail, dtBirthDate, strMiddleName)
	Call editUserInfo.SetPassport(strTmpPassSer, strTmpPassNum, strTmpPassSubdiv, dtTmpPassDate, strTmpPassInfo)
End Function
%>
