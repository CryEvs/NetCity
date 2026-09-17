<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
On Error Resume Next

Dim nTeacherID, strClassName, strClassLetter, nClassID, nProfileID, nGradeID, arrTeachers, bIupClass, arrVacations, arrClassesForms, arrPreClassEducPrograms
Dim i, n, cnt
Dim arrData
Dim strAction, bAddNew, isWizard, aBackPage, errMsg, succMsg
Dim nMoveClassID, nMoveDocID, strErrMessage, strMoveClassName
Dim objDocInfo, strDocNumber, dtDocDate
Dim nProfileEducID
Dim objAddProgram, strProgAttr, nProgID
Dim nDOUGroupTypeID, nDOUGroupAgeID, nDOUGroupAgeCategoryID
Dim strNoInformika
Dim nSeatsForTransfer, nSubGroupsCount
Dim nCapacity
Dim transaction, result
Dim nStayRegimeID, strCorpus, nRoomID, nPlannedOccupancy
Dim nSeatsForShort
Dim nAddSpecialID
Dim bCommonSchool, bPreSchool, bAddSchool

SetScriptTimeOut 900
If Not HasUserRight(arClassMgmCreateClass) Then GenerateError obLanguage("Common","kErrPageAccess")
strAction = Request("ACT")
aBackPage = GetSafeStr( obTokenMgr.GetData(strToken,stBackPage), -1, "Classes.asp")

bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)

If strAction = "delete" Then
	cnt = Request("delClass").Count
	If cnt > 0 Then ' delete Classes
		ReDim arrData(cnt-1)
		For i = 1 To cnt
			arrData(i-1) = GetSafeID(Request("delClass")(i), NULL)
		Next

		nMoveDocID = 0
		nMoveClassID = objNSNET.RemoveClasses(arrData, nMoveDocID)
		TestError obLanguage("ClassManagement","kErrDeleteClasses",strFunctionalityType)
		If nMoveClassID <> 0 Then
			strErrMessage = obLanguage("ClassManagement","kErrClassInMovement",strFunctionalityType)
			strMoveClassName = objNSNET.GetClassName(nMoveClassID)
			If strMoveClassName <> "" Then
				strErrMessage = strErrMessage & ":\n" & strMoveClassName
				Set objDocInfo = objNSNET.GetMoveDocInfo(nMoveDocID)
				If Not objDocInfo.EOF Then
					dtDocDate = GetSafeDate(objDocInfo("DOCDATE"), Null)
					strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, Null)
					strErrMessage = strErrMessage & ", \'" & strDocNumber & "\' " & obLanguage("ClassManagement","kFrom") & " " & Date2Str(dtDocDate)
				End If
			End If
			Call obTokenMgr.SetData( strToken, stWasSaved, strErrMessage )
		End If
	End If
ElseIf strAction = "editprofile" Then
	nProfileID = GetSafeID( Request.Form("PROFID"), 0 )
	nClassID =  GetSafeID( Request.Form("PCLID"), 0 )
	Call objNSNET.SetClassProfile(nClassID, nProfileID)
	TestError obLanguage("SetupSchoolCalendar","kErrSetClassProfile") & ": " & err.description
ElseIf strAction = "editprofileeduc" Then ' class chief changed here also
	arrTeachers = Split(GetSafeStr( Request.Form("TID"), -1, "" ),", ")
	nClassID =  GetSafeID( Request.Form("PCLID"), Null )
	nCapacity = GetSafeLng( Request("CAPACITY"), 0)
	nRoomID = GetSafeLng( Request("ROOMID"), -1 )
	strClassLetter = GetSafeStr( Request.Form("LETTER"), 30, "" )

	If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
		nPlannedOccupancy = Request("PLANNEDOCCUPANCY")
		If IsDull(nPlannedOccupancy) Then
			nPlannedOccupancy = Empty
		Else
			nPlannedOccupancy = CLng(nPlannedOccupancy)
		End If
	End If

	If bCommonSchool Then
		arrClassesForms = Array()

		If Request("CLASSFORMS").Count > 0 Then
			arrClassesForms = Split(GetSafeStr( Request("CLASSFORMS"), -1, Null ),", ")
		End If
	End If

	If bAddSchool Then
		nProfileEducID = -1 ' Пока не меняется.
		Set result = objNSNET.EditClass(nClassID, strClassLetter, nCapacity, 0, nProfileEducID, arrTeachers, false, nPlannedOccupancy)
		TestResult result, obLanguage("ClassManagement","kErrClassEditType")
	Else
		nProfileEducID = GetSafeID( Request.Form("PROFILEEDUCID"), 1 )

		If bPreSchool Then
			nGradeID = GetSafeLng( Request.Form("GRADEID"), 0 )
			nDOUGroupTypeID = GetSafeLng( Request.Form("GROUPTYPEID"), -1 )

			' массив образовательных программ
			arrPreClassEducPrograms = Array()
			if Request("EDUCPROGRAMID").Count > 0 Then
				arrPreClassEducPrograms = Split(GetSafeStr( Request("EDUCPROGRAMID"), -1, Null ),", ")
			End If

			' сохранение образовательных программ группы
			Call objNSNET.SavePreClassEducPrograms(nClassID, arrPreClassEducPrograms)
			TestError obLanguage("Common","kUnexpErr")

			nAddSpecialID = -1
			If nDOUGroupTypeID = 3 Or nDOUGroupTypeID = 4 Then
				nAddSpecialID = GetSafeLng( Request("ADDSPECID"), -1)
			End If

			nDOUGroupAgeCategoryID = GetSafeID( Request.Form("AGECATEGORYID"), -1 )
			strNoInformika = GetSafe( Request.Form("NOINFORMIKA"), "N")
			nDOUGroupAgeID = GetSafeID( Request.Form("GROUPAGEID"), -1 )
			If bDisableHealthData Then
				nProfileEducID = 0 ' В данном случае nProfileEducID - это "Специализация группы" для детсада, здесь она не меняется.
			End If
			nStayRegimeID = GetSafeID( Request.Form("STAYREGIMEID"), -1 )
			nSeatsForTransfer = GetSafeLng( Request.Form("SeatsForTransfer"), 0 )
			nSubGroupsCount = GetSafeLng( Request.Form("SubGroupsCount"), 1 )
			nSeatsForShort = IIf(nStayRegimeID = "4", 0, GetSafeLng(Request.Form("SeatsForShort"), 0))

			Call objNSNET.PreClassesValidate(strNoInformika = "Y", nSeatsForTransfer, nSeatsForShort, nRoomID)
			TestError null
			Set result = objNSNET.EditPreClass(nClassID, nGradeID, strClassLetter, nCapacity, nProfileEducID, -1, Empty, nDOUGroupTypeID, nDOUGroupAgeCategoryID, nDOUGroupAgeID, _
							nStayRegimeID, IIF(strNoInformika = "Y", True, False), nSeatsForTransfer, nSubGroupsCount, nPlannedOccupancy, nSeatsForShort, nAddSpecialID)
		Else
			bIupClass = (Request("IS_IUP") = "1")
			Set result = objNSNET.EditClass(nClassID, strClassLetter, nCapacity, nProfileEducID, -1, arrTeachers, bIupClass, nPlannedOccupancy)
		End If
		TestResult result, obLanguage("ClassManagement","kErrClassEditType")

		If bIupClass Then Call obTokenMgr.SetData(strToken, ExistsIupClasses, True)
		If Not IsDull(result.Message) Then
			Call obTokenMgr.SetData(strToken, stWasSaved, CStr(result.Message))
		End If
	End If
	TestError obLanguage("ClassManagement","kErrClassEditType")

	' добавление связи класс-помещение/кабинет
	Call objNSNET.SaveClassRoom(nClassID, nRoomID)
	TestError obLanguage("Common","kUnexpErr")

	If bCommonSchool Then
		' сохранение видов класса
		Call objNSNET.SaveClassForms(nClassID, arrClassesForms)
		TestError obLanguage("Common","kUnexpErr")
	End If
ElseIf strAction = "addnew" Then
	'nTeacherID = GetSafeLng( Request("NEWTEACHERID"), NULL) ' for new class
	arrTeachers = Split(GetSafeStr( Request("NEWTEACHERID"), -1, Null ),", ") ' for new class
	If Request("VACATIONS").Count > 0 Then
		arrVacations = Split(GetSafeStr( Request("VACATIONS"), -1, Null ),", ")
	Else
		arrVacations = Array()
	End If

	If bCommonSchool Then
		arrClassesForms = Array()

		If Request("CLASSFORMS").Count > 0 Then
			arrClassesForms = Split(GetSafeStr( Request("CLASSFORMS"), -1, Null ),", ")
		End If
	End If

	nProfileID = GetSafeLng( Request("NEWPROFILEID"), NULL) ' for new class
	nCapacity = GetSafeLng( Request("CAPACITY"), 0) ' for new class
	nRoomID = GetSafeLng( Request("ROOMID"), -1 ) ' для нового класса
	If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
		nPlannedOccupancy = Request("PLANNEDOCCUPANCY")
		If IsDull(nPlannedOccupancy) Then
			nPlannedOccupancy = Empty
		Else
			nPlannedOccupancy = CLng(nPlannedOccupancy)
		End If
	End If
	nGradeID = GetSafeLng( Request.Form("GRADEID"), 0 )
	nProfileEducID = GetSafeLng( Request("NEWPROFILEEDUCID"), IIf(bPreSchool, 101, 1)) ' for new class
	strClassName = Trim(CStr(Request("LETTER2")))
	strClassLetter = Trim(CStr(Request("LETTER2")))
	bIupClass = (Request("IS_IUP") = "1")
	If bPreSchool Then
		' Если детсад и не обрабатываем сведения о здоровье, то специализация группы - дефолтная.
		If bDisableHealthData Then
			nProfileEducID = objNSNET.GetDefaultPreClassType()
		End If
		nDOUGroupTypeID = GetSafeLng( Request("NEWGROUPTYPEID"), 1) ' for new class group type (for DOU only)

		' массив образовательных программ
		arrPreClassEducPrograms = Array()
		if Request("EDUCPROGRAMID").Count > 0 Then
			arrPreClassEducPrograms = Split(GetSafeStr( Request("EDUCPROGRAMID"), -1, Null ),", ")
		End If
		
		nAddSpecialID = -1
		If nDOUGroupTypeID = 3 Or nDOUGroupTypeID = 4 Then
			nAddSpecialID = GetSafeLng( Request("ADDSPECID"), -1)
		End If

		nDOUGroupAgeCategoryID = GetSafeLng( Request("NEWGROUPAGECATEGORYID"), NULL) ' for new class group age category (for DOU only)
		
		strNoInformika = GetSafe( Request("NOINFORMIKA"), "N" )
		nDOUGroupAgeID = GetSafeLng( Request("NEWGROUPAGEID"), NULL) ' for new class group age (for DOU only)
		Dim arr
		arr = GetArrGrades (strFunctionalityType,1,0,0)
		strClassName = Trim(strClassName & " " & arr(1,nGradeID))

		nStayRegimeID = GetSafeLng(Request("STAYREGIMEID"), 1)
		nSeatsForTransfer = GetSafeLng(Request("SeatsForTransfer"), 0)
		nSubGroupsCount = GetSafeLng(Request("SubGroupsCount"), 1)
		nSeatsForShort = IIf(nStayRegimeID = 4, 0, GetSafeLng(Request("SeatsForShort"), 0))

	ElseIf bAddSchool Then
		nProgID = GetSafeLng(Request("NEWPROGID"), Null)
		Set objAddProgram = objNSNET.GetAddProgram(nProgID, strCurrYearID, -1)
		If objAddProgram.EOF Then GenerateError obLanguage("SetupSchool","kCantGetAddProgramInfo")
		strProgAttr = GetSafeStr(objAddProgram("PROG_ATTR"), -1, Null)

		strClassName = CStr(nGradeID) & strClassName & " " & strProgAttr
	Else
		strClassName = CStr(nGradeID) & strClassName
	End If

	errMsg = obLanguage("ClassManagement","kErrClassCreate") & obLanguage("Common", "kClass_v", strFunctionalityType)
	transaction = objNSNET.GetTransaction()
	isWizard = (Instr(UCASE(aBackPage), "WIZARD") > 0)
	nClassID = objNSNET.CreateClass(transaction, strCurrYearID, strClassName, strClassLetter, nGradeID, nProfileID, nProfileEducID, nCapacity, arrTeachers, bIupClass, Not isWizard, nPlannedOccupancy, nAddSpecialID)
	TestErrorWithTransaction transaction, errMsg
	
	If bPreSchool Then
		If isWizard Then nRoomID = objNSNET.FindOrCreateRoom_WT(transaction, strSchoolId, strClassName, 1, 0)
		If Not isWizard Then Call objNSNET.PreClassesValidate(strNoInformika = "Y", nSeatsForTransfer, nSeatsForShort, nRoomID)
		TestError null
	End If

	If bAddSchool Then
		Call objNSNET.EditClassType(transaction, nClassID, -1, 0, GetSafeLng( Request("NEWPROGID"), -1), Null)
	ElseIf bPreSchool Then
		Call objNSNET.PreClassesEdit(transaction, nClassID, nDOUGroupTypeID, nDOUGroupAgeCategoryID, nDOUGroupAgeID, nStayRegimeID, IIF(strNoInformika="Y", True, False), nSeatsForTransfer, nSubGroupsCount, nSeatsForShort)

		' сохранение образовательных программ группы
		Call objNSNET.SavePreClassEducPrograms_WT(transaction, nClassID, arrPreClassEducPrograms)
		TestError obLanguage("Common","kUnexpErr")
	End If
	TestErrorWithTransaction transaction, errMsg

	succMsg = obLanguage("Common","kClass", strFunctionalityType) & " " & obLanguage("ClassManagement","kBindedWithTermType", strFunctionalityType)
	If isWizard And bPreSchool Then
		succMsg = succMsg & "."
	Else
		succMsg = succMsg & " """ & objNSNET.GetClassPeriodType_WT(transaction, nClassID) & """."
	End If

	Call obTokenMgr.SetData( strToken, stWasSaved, succMsg)
	If bIupClass Then Call obTokenMgr.SetData(strToken, ExistsIupClasses, True)

	' добавление связи класс-помещение/кабинет
	If nRoomID <> -1 and nClassID > 0 Then
		Call objNSNET.SaveClassRoom_WT(transaction, nClassID, nRoomID)
		TestError errMsg
	End If

	Call objNSNET.SaveClassVacations_WT(transaction, nClassID, arrVacations)

	If bCommonSchool Then
		' сохранение видов класса
		Call objNSNET.SaveClassForms_WT(transaction, nClassID, arrClassesForms)
		TestError obLanguage("Common","kUnexpErr")
	End If

	objNSNET.CommitTransaction(transaction)
End If

If bIsAjaxCall Then 
	Call WriteJsonResult(obLanguage("Common","kDataSaved"), False, 0)
Else
	RedirectTo aBackPage, null
End If
%>
