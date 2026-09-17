<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/timeBoxes.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->
<!-- #INCLUDE FILE="MoveBookPlaceReasons_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.


'StateParams
Dim nYearID, nYearName
Dim objMovePeriods, nDeltaYears

Dim bCommonSchool, bAddSchool, bPreSchool, bEmptyStudents, bRestoreParams, bNewDoc, bEditRight
Dim bShowGenderAndBDate
'DocParams
Dim strDocID, nDocType, dtDocDate, dtAdminDate, strDocNumber, nDocYearID
'Filters
Dim strSourceId, strDocTypeName, nDocTypeFilter, nDocSubType

'Other
Dim objDocInfo, strMoveEOID, objDocStudents
Dim strClass1, strClass2, arr
Dim strStudentID

Dim objClassesRsMoveTo, strMoveToClassID

Dim strDelName
Dim rsMoveDocClasses, cmdSubDocStudents, strReason
Dim strClassID1, strClassID2
Dim bNoMoveDirection, bWithMoveInDirection, bWithMoveOutDirection
Dim arrTerms, nTermsCnt, nTermTypeID
Dim nTermNameSize

Dim bSecondSummerAllowed

Dim objActivePeriods, dtMovePeriodStart, dtMovePeriodEnd, bNoActivePeriods
Dim dtMoveDocStart, dtMoveDocEnd
Dim objYearInfo

Dim bMayDelete
Dim bConditionalMoving
Dim objMovementComponent
Dim arrMovementSources
Dim sBackPage

Dim dtSafeYearStart

Dim bShowAdminDate, dtAdminDateStart

Function hasUserRightsOnPage()
	If HasUserRight(arMoveBookEdit) Then
		hasUserRightsOnPage = True
		bEditRight = True
		Exit Function
	End If

	If HasUserRight(arMoveBookView) Then
		hasUserRightsOnPage = True
		bEditRight = False
	Else
		hasUserRightsOnPage = False
	End If
End Function

Function GetPageTitle()
	If Not readonly Then
		If bNewDoc Then GetPageTitle = obLanguage("Movement","kTitleMBCreate") Else GetPageTitle = obLanguage("Movement","kTitleMBEdit")
	Else
		GetPageTitle = obLanguage("Movement","kTitleMBView")
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementMovements
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbMoveBook
	bTabInternalPage = True
End Function

Function GetCurrDocTypeName()
	Dim strName

	strName = ""
	Select Case nDocType
		Case kDocType_YEAR: strName = obLanguage("Movement","kDocName_YEAR")
		Case kDocType_STAY: strName = obLanguage("Movement","kDocName_STAY")
		Case kDocType_GRADUATE: strName = obLanguage("Movement","kDocName_GRADUATE")
		Case kDocType_OUT: strName = obLanguage("Movement","kDocName_OUT",strFunctionalityType)
		Case kDocType_ENROLL: strName = obLanguage("Movement","kDocName_ENROLL",strFunctionalityType)
		Case kDocType_MOVE: strName = obLanguage("Movement","kDocName_MOVE",strFunctionalityType)
	End Select

	GetCurrDocTypeName = strName
End Function

Sub InitSavedDocInfo(nDocID)
	Dim objDocInfo

	Set objDocInfo = objNSNET.GetMoveDocInfo(nDocID)
	if objDocInfo.EOF Then
		Call GenerateHTMLError (obLanguage("Movement","kCantEditMoveDoc"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken)
	end if 
	
	bValidateCurReason = True
	dtDocDate = CDate(objDocInfo("DOCDATE"))
	dtAdminDate = CDate(objDocInfo("ADMINDATE"))
	strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, "?")
	nDocType = GetSafeLng(objDocInfo("DOCTYPE"), Null)
	nDocSubType = GetSafeDocSubType(nDocType, objDocInfo("MBSUBTYPE"), False)
	nDocYearID = GetSafeLng(objDocInfo("SCHOOLYEARID"), Null)
End Sub

Sub SpecialReadState(objForm)
End Sub

Sub InitMovePeriods()
	Set objActivePeriods = objNSNET.GetActiveMovePeriods(strCurrYearID)
	If Not readonly Then
		If objActivePeriods.EOF Then
			readonly = True
			bNoActivePeriods = True
		End If
	End If
End Sub

Sub InitMoveDocDates()

	Dim objMinTermEnd, dtMinTermEnd
	Dim dtPrevTermsEnd
	Dim strErrInfo, strErrInfo1, strErrInfo2, strErrInfo3
	Dim dtConstMinDate

	'ЕСЛИ ЭТО БУДУЩИЙ ГОД
	If bFutureMode Then
		If Not objActivePeriods.ExistsByField("PERIODID", 1) Then
			' Для летнего движения важен факт наличия разрешения именно для летнего периода
			readonly = True
			bNoActivePeriods = True
		End If

		' Для летнего движения определяем разрешённый диапазон дат. Он из настроек - летний отчётный период по движению.
		Set objMovePeriods = objNSNET.GetSYMovePeriodsInfo(strCurrYearID)
		If objMovePeriods.EOF Then
			GenerateError obLanguage("Movement","kCantGetMovePeriodsInfo")
		End If
		dtMoveDocStart = CDate(objMovePeriods("STARTDATE"))
		dtMoveDocEnd = CDate(objMovePeriods("ENDDATE"))

		If nDocType = kDocType_ENROLL Then
			dtConstMinDate = DateSerial(Year(dtSafeYearStart), kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)
			dtMoveDocStart = GetMinFromDates(dtMoveDocStart, dtConstMinDate)
		End If

		nTermTypeID = kDocTermType_Undefined


		If BNewDoc Then
			'при создании нового документа корректируем дату (изначально установлен dtToday) чтобы дата докмента умещалась в интервал: dtMoveDocStart <= dtDocDate <= dtMoveDocEnd
			If DateDiff("d", dtDocDate, dtMoveDocStart, 0, 0) > 0 Then
				dtDocDate = dtMoveDocStart
			ElseIf DateDiff("d", dtDocDate, dtMoveDocEnd, 0, 0) < 0 Then
				dtDocDate = dtMoveDocEnd
			End If
		End If


		Exit Sub
	End If

	dtMovePeriodStart = Null
	dtMovePeriodEnd = Null

	If Not readonly Then
		If objActivePeriods.RecordCount = 1 Then
			' Даты периода по движению привязываются к текущему уч. году,
			' Смещение определяем между годами - текущего уч. года и первого периода по движению
			Set objMovePeriods = objNSNET.GetSYMovePeriodsInfo(strCurrYearID)
			If objMovePeriods.EOF Then
				GenerateError obLanguage("Movement","kCantGetMovePeriodsInfo")
			End If
			nDeltaYears = Year(dtYearStart) - Year(objMovePeriods("STARTDATE"))

			dtMovePeriodStart = DateAdd("yyyy", nDeltaYears, objActivePeriods("STARTDATE"))
			dtMovePeriodEnd = DateAdd("yyyy", nDeltaYears, objActivePeriods("ENDDATE"))
		End If
	End If

		' Разрешён диапазон дат от dtYearStart до dtMoveYearEnd
	' 3.12.2008. Теперь диапазон может быть ограничен dtMovePeriodStart и dtMovePeriodEnd
	' Перенесено выше

	' Для Зачисления и Перевода, теперь и выбытия (28.12.2009) dtMoveYearEnd = dtMinTermEnd (т.е. летом после тек. уч. года - нельзя)
	' Для Зачисления в школу - позволяем начинать сразу после самого раннего окончания последнего уч. периода (для разных типов уч. периодов) за прошлый год.
	' Для упрощения берём данные за тек. год и вычитаем 1 год.
	bSecondSummerAllowed = True
	Set objMinTermEnd = objNSNET.GetMinEndFromLastTerms(strCurrYearID)

	If Not objMinTermEnd.EOF Then
		If Not IsDull(objMinTermEnd("MIN_ENDDATE")) Then
			dtMinTermEnd = CDate(objMinTermEnd("MIN_ENDDATE"))

			If nDocType = kDocType_ENROLL Then
				dtPrevTermsEnd = dtMinTermEnd
				dtPrevTermsEnd = DateAdd("d", 1, dtPrevTermsEnd)
				dtPrevTermsEnd = DateAdd("yyyy", -1, dtPrevTermsEnd)
				If DateDiff("d", dtPrevTermsEnd, dtYearStart, 0, 0) > 0 Then
					dtYearStart = dtPrevTermsEnd
				End If
			End If

			If (nDocType = kDocType_ENROLL) Or (nDocType = kDocType_MOVE) Or (nDocType = kDocType_OUT) Then
				dtMoveYearEnd = dtMinTermEnd
				bSecondSummerAllowed = False
			End If
		End If
	End If

	'базовые ограничения на дату документа (если все отчетные периоды разрешены)
	dtMoveDocStart = dtYearStart
	dtMoveDocEnd = dtMoveYearEnd

	If Not IsDull(dtMovePeriodStart) Then
		'если дата документа ограничена одним конкретным отчетным периодом то ограничения более строгие
		' здесь происходит сочетание новых правил управления датами документов - учебные периоды по движению -
		' со старыми - где определяются и корректируются возможные даты начала и конца для документов (см. выше)
		dtMoveDocStart = GetMaxFromDates(dtMovePeriodStart, dtMoveDocStart)
		dtMoveDocEnd = GetMinFromDates(dtMovePeriodEnd, dtMoveDocEnd)

		' здесь может оказаться dtMoveDocStart > dtMoveDocEnd, т.е. создание такого нового документа - невозможно,
		' а существующий документ - должен быть только readonly
		If DateDiff("d", dtMoveDocStart, dtMoveDocEnd, 0, 0) < 0 Then
			If Not readonly Then
				readonly = True
			End If
			If bNewDoc Then
				strDocTypeName = GetCurrDocTypeName()

				strErrInfo1 = obLanguage("Movement","kDocTypeDatesAllowed")
				strErrInfo1 = Replace(strErrInfo1, "s_DocType", strDocTypeName)
				strErrInfo1 = Replace(strErrInfo1, "s_Start", Date2Str(dtYearStart))
				strErrInfo1 = Replace(strErrInfo1, "s_End", Date2Str(dtMoveYearEnd))

				strErrInfo2 = obLanguage("Movement","kMovePeriodAllowed")
				strErrInfo2 = Replace(strErrInfo2, "s_Start", Date2Str(dtMovePeriodStart))
				strErrInfo2 = Replace(strErrInfo2, "s_End", Date2Str(dtMovePeriodEnd))

				strErrInfo3 = obLanguage("Movement","kDocImpossible")

				strErrInfo = strErrInfo1 & " " & strErrInfo2 & " " & strErrInfo3
				Call GenerateHTMLError (strErrInfo, "/asp/SetupSchool/Movement/MoveBook.asp", strToken)
			End If
		End If
	End If

	If BNewDoc Then

		'при создании нового документа корректируем дату (изначально установлен dtToday) чтобы дата докмента умещалась в интервал: dtMoveDocStart <= dtDocDate <= dtMoveDocEnd
		If DateDiff("d", dtDocDate, dtMoveDocStart, 0, 0) > 0 Then
			dtDocDate = dtMoveDocStart
		ElseIf DateDiff("d", dtDocDate, dtMoveDocEnd, 0, 0) < 0 Then
			dtDocDate = dtMoveDocEnd
		End If

		dtAdminDate = dtDocDate

	ElseIf Not readonly And Not IsDull(dtMovePeriodStart) Then
		'если открываем существующий документ и есть ограничение по отчетным периодам - то дополнительно уточняем признак readonly
		If DateDiff("d", dtDocDate, dtMovePeriodStart, 0, 0) > 0 Or DateDiff("d", dtDocDate, dtMovePeriodEnd, 0, 0) < 0 Then
			readonly = true
		End If
	End If

	' 28.10.2009. Сделано так, чтобы для существующего документа, который не "readonly", - если дата не меняется, то её и не проверяем.
	' Это связано с тем, что сейчас возможный диапазон дат определяется как сочетание старого правила (где определялся практически целый
	' год с поправкой на термы для определённых типов документов) и нового правила (разрешение админом сервера периодов движения).
	' Полностью перейти на новое правило и отказаться от старого - я пока не решился. Но иногда из-за не совсем соответствия этих
	' правил друг другу, даже если дату существующего документа не трогать, то проверка на дату определит несоответствие допустимому
	' диапазону. Теперь сделано так, чтобы проверки при неизменении даты не было.
	' Хотя может что-то из-за этого и испортится?...

	If bShowAdminDate Then
		dtAdminDateStart = DateSerial(strCurrGlobalYearId, kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)
	End If
End Sub

' Подготовка термов (уч. периодов) для их динамического показа согласно дате документа.
' Если в документе есть классы, учащиеся по разным типам уч. периодов, то уч. период не показывается, даже "лето", хотя он есть у всех.
Sub GetTerms()
	Dim objTermTypes
	Dim arrDocClasses, dctDocClasses
	Dim objTerms
	Dim arrTermsReal, i, j, nRealTermsUBound, nExitIndex
	Dim dtMinTermsEndCurr

	nTermTypeID = kDocTermType_Undefined
	nTermsCnt = 0
	nTermNameSize = 0

	If bNewDoc Then
		Exit Sub
	End If

	If rsMoveDocClasses.EOF Or nDocSubType = kmdstNoClassEnroll Then
		Exit Sub
	End If

	Set dctDocClasses = Server.CreateObject("NetCity.Storage") ' collect all classes in document
	While Not rsMoveDocClasses.EOF
		dctDocClasses(GetSafeStr(rsMoveDocClasses("CLASSID1"), -1, "")) = ""
		dctDocClasses(GetSafeStr(rsMoveDocClasses("CLASSID2"), -1, "")) = ""
		rsMoveDocClasses.MoveNext
	WEnd
	rsMoveDocClasses.MoveFirst

	If dctDocClasses.Exists("") Then dctDocClasses.Remove("")
	arrDocClasses = dctDocClasses.Keys

	Set objTerms = Nothing

	If UBound(arrDocClasses) > 0 Then
		Set objTermTypes = objNSNET.GetClassesTermTypes(arrDocClasses)
		If objTermTypes.EOF Then
			GenerateHTMLError obLanguage("Common","kNoTermsInYear"), "/asp/SetupSchool/Calendar/Years.asp", strToken
		End If

		If IsDull(objTermTypes("MAX_ENDDATE")) Then
			GenerateHTMLError obLanguage("Common","kNoTermsInYear"), "/asp/SetupSchool/Calendar/Years.asp", strToken
		End If

		Set objTerms = objNSNET.GetClassesTermList(arrDocClasses)

		arrTermsReal = objTerms.GetRows(,, Array("TERMID", "TERMTYPEID", "TERMNAME","STARTDATE","ENDDATE"))
		nRealTermsUBound = UBound(arrTermsReal, 2)
		nTermsCnt = nRealTermsUBound + IIf(bSecondSummerAllowed, 3, 2)

		ReDim arrTerms(4, nTermsCnt-1)
		' несколько изменяем список периодов:
		' в начало добавляем период "лето" - от начала учебного года до начала учебного года по движению,
		' считаем, что первый терм начинается с начала учебного года по движению,
		' добавляем период "лето" - от конца последнего настоящего периода до конца года по движению,
		' итак - добавляем два периода "лето".
		arrTerms(0, 0) = 0
		arrTerms(1, 0) = 0
		arrTerms(2, 0) = obLanguage("Movement","kSummer")
		arrTerms(3, 0) = dtYearStart
		arrTerms(4, 0) = DateAdd("d", -1, dtMoveYearStart)

		'устанавливаем для всех типов периодов все первым периодам начало - начало уч. года по движению
		While Not objTermTypes.EOF
			nTermTypeID = GetSafeLng(objTermTypes("TERMTYPEID"), Null) ' known
			For i = 0 To nRealTermsUBound
				If arrTermsReal(1, i) = nTermTypeID Then
					arrTermsReal(3, i) = dtMoveYearStart ' считаем за начало первого периода - начало уч. года по движению
					Exit For
				End If
			Next
			objTermTypes.MoveNext
		Wend

		nExitIndex = -1
		For i = 0 To nRealTermsUBound
			arrTerms(0, i+1) = arrTermsReal(0, i)
			arrTerms(1, i+1) = arrTermsReal(1, i)
			arrTerms(2, i+1) = arrTermsReal(2, i)
			arrTerms(3, i+1) = arrTermsReal(3, i)
			arrTerms(4, i+1) = arrTermsReal(4, i)
		
			If Not bSecondSummerAllowed Then
				If DateDiff("d", arrTerms(4, i+1), dtMoveYearEnd, 0, 0) < 0 Then
					' ограничиваем
					arrTerms(4, i+1) = dtMoveYearEnd
					nExitIndex = i
					Exit For
				End If
			End If
		Next

		If Not bSecondSummerAllowed Then
			If (nExitIndex > -1) And (nExitIndex < nRealTermsUBound) Then
				nTermsCnt = nExitIndex + 2
				ReDim Preserve arrTerms(4, nTermsCnt-1)
			End If
		Else
			arrTerms(0, nTermsCnt-1) = 0
			arrTerms(1, nTermsCnt-1) = 0
			arrTerms(2, nTermsCnt-1) = obLanguage("Movement","kSummer")
			arrTerms(3, nTermsCnt-1) = DateAdd("d", 1, CDate(arrTerms(3, nTermsCnt-2)))
			arrTerms(4, nTermsCnt-1) = dtMoveYearEnd
		End If

		nTermNameSize = Len(arrTerms(1, 1)) + 4
	End If
End Sub

Sub ReadState()

	Dim objForm
	Dim objTemp

	If Not PERSON_DATA Then readonly = True

	nYearID = strCurrYearID

	strAfterOpenMessage = GetSafeStr(Request("OUTERMESSAGE"), -1, "")

	Set objYearInfo = objNSNET.GetYearInfo(nYearID)
	If objYearInfo.EOF Then GenerateError obLanguage("Common","kUnexpErr")

	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	dtSafeYearStart = dtYearStart
	Call CalcMoveCurrYearLimits(dtMoveYearStart, dtMoveYearEnd, True)

	InitMoveYearPeriods
	InitMoveBookMode

	nYearName = GetSafeStr(objYearInfo("SCHOOLYEARNAME"), -1, Null)
	bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)

	Set objTemp = objNSNET.GetSchoolInfo(strSchoolID)
	strMoveEOID = CLng(objTemp("EOID"))

	bRestoreParams = Not IsDull(Request("RestoreParams")) And IsObject(obTokenMgr.GetData(strToken, stMoveDocState))
	If bRestoreParams Then
		Set objForm = obTokenMgr.GetData(strToken, stMoveDocState)
		strDocID = GetSafeID(objForm("DOCID"), "0")
		bNewDoc = (strDocID = "0")
		nDocType = GetSafeLng(CLng(objForm("DOCTYPE")), kDocType_ENROLL)
		dtDocDate = objForm("DOCDATE")
		dtAdminDate = objForm("ADMINDATE")
		strDocNumber = objForm("DOCNUMBER")
		nDocYearID = objForm("DOCYEARID")
		nDocSubType = GetSafeDocSubType(nDocType, objForm("DOCSUBTYPE"), False)

		Call obTokenMgr.SetData(strToken, stMoveDocState, Null)
	Else
		Set objForm = Request
		strDocID = GetSafeID(objForm("DOCID"), "0")
		bNewDoc = (strDocID = "0")
		If bNewDoc Then
			If readonly Then 
				Call GenerateHTMLError (obLanguage("Movement","kCantCreateMoveDoc"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken)
			End If
			nDocType = GetSafeLng(objForm("DOCTYPE"), Null)
			dtDocDate = GetSafeDate(objForm("DOCDATE"), NSDate())
			dtAdminDate = GetSafeDate(objForm("ADMINDATE"), NSDate())
			strDocNumber = GetSafeStr(objForm("DOCNUMBER"),-1,"")
			nDocYearID = strCurrYearID
			nDocSubType = GetSafeDocSubType(nDocType, objForm("DOCSUBTYPE"), False)
		Else
			Call InitSavedDocInfo(strDocID)
		End If
	End If

	GetSourcesArr
	nTermTypeID = kDocTermType_Undefined
	Call SpecialReadState(objForm)
	Set objForm = Nothing
	arrDocSubTypes = InitDocSubTypes(nDocType)

	Call GetDocInfo(nDocType, strDocTypeName)

	If Not bEditRight Then readonly = True
	bShowGenderAndBDate = True

	bShowAdminDate = bCommonSchool And (nDocType = kDocType_ENROLL) ' before InitMoveDocDates()

	Call InitMovePeriods()
	Call InitMoveDocDates()

	If Not bNewDoc Then
		If bPreSchool Then
			arr = GetArrGrades(strFunctionalityType,1,0,0)
		End If
	End If

	Call InitMoveDirections() 

	bShowGenderAndBDate = bShowGenderAndBDate And (nDocType<>kDocType_GRADUATE And nDocType<>kDocType_OUT)

	'Todo. определять возможность удаления - на основании источников
	bMayDelete = True
	bConditionalMoving = (nDocSubType = kYearDocSubType_Conditional)
	
	If InStr(Request("BACK"), "MoveBookEdit.asp") > 0 Or IsDull(Request("BACK")) Then
		sBackPage = "MoveBook.asp"
	Else
		sBackPage = GetSafeStr(Request("BACK"), -1, "MoveBook.asp")
	End If
End Sub

Sub GetSourcesArr()
	On Error Resume Next

	Set objMovementComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMovementComponent")
	Set arrMovementSources = objMovementComponent.GetSources(nYearID, nDocType, nDocSubType)
	TestError "Ошибка инициализации реестров учащихся для движения"
End Sub

Sub Main()
	On Error Resume Next

	Call InitMoveDocData()
	Call SpecialMain()
End Sub

Sub SpecialMain()
	GetTerms
End Sub

Sub InitMoveDocData()
	Dim cmdMoveDocClasses

	bEmptyStudents = True
	If strDocID > 0 Then
		Set cmdMoveDocClasses = objNSNET.GetMoveDocClasses_Prepare()
		Set rsMoveDocClasses = objNSNET.GetMoveDocClasses_Execute(cmdMoveDocClasses, strDocID)
		Set cmdSubDocStudents = objNSNET.GetMoveSubDocStudents_Prepare(strCurrYearID, nDocType)
		Call objNSNET.DisposeCommand(cmdMoveDocClasses)
		bEmptyStudents = rsMoveDocClasses.EOF
	End If
End Sub

Sub SpecialWriteState()
End Sub

Sub WriteState()
	If bNewDoc Then 
		WriteClass
	End If

	Call SpecialWriteState()

	If Not bNewDoc Then
		Call obTokenMgr.SetData(strToken, stMovDocID, strDocID)
	End If
	Call obTokenMgr.SetData(strToken, "ExcelFile", Empty)
End Sub

Function onLoad()
End Function

Function GetMaxFromDates(dt1, dt2)
	If DateDiff("d", dt1, dt2, 0, 0) > 0 Then
		GetMaxFromDates = dt2
	Else
		GetMaxFromDates = dt1
	End If
End Function

Sub OnDrawScripts()
End Sub

Function ShowMovementTerm()
	ShowMovementTerm = nTermTypeID <> kDocTermType_Undefined And nDocType <> kDocType_YEAR And nDocType <> kDocType_STAY And nDocType <> kDocType_GRADUATE
End Function

Sub onHead()
	Dim i, dtCurr

	If Not readonly And nDocType = kDocType_OUT Then Call GetDepartReasons(nDocType, strFunctionalityType, -1)
	If Not readonly Then
		Call scriptCalendar("MainForm", IIf(bShowAdminDate, dtAdminDateStart, dtMoveDocStart), dtMoveDocEnd)
	End If

	Call OnDrawScripts()

	If Not readonly And nDocType = kDocType_ENROLL Then
		%><script src="<%=GetVersionedResLink("/vendor/pages/common/js/queue.js")%>" type="text/javascript"></script><%
	End If 
	%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/movement/js/movebookedit.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/movement/js/movement.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/movement/js/importValidation.min.js")%>" type="text/javascript"></script>
	<script><!--

		<%If Not bNewDoc Then Call DrawPrintScripts("PrintMoveDoc.asp","ExportMoveDoc.asp")%>

		function Back() {
			checkForChanges().then(function() {
				ok('MainForm','<%=sBackPage%>');
			});
		}

		var bEOOrReasonChanged;
		var readonly = <%=Bool2Js(readonly) %>;
		var summerMove = <%=Bool2Js(bIsSummerMove)%>;
		var noMoveDirection =  <%=Bool2Js(bNoMoveDirection)%>;
		var termTypeId = <%=nTermTypeID%>;
		var docDateRange = {
			start: <%=Date2Js(dtMoveDocStart)%>,
			end: <%=Date2Js(dtMoveDocEnd)%>
		}
		var editPage = "<%=strScriptName%>";
		var adminDateStart = <%If bShowAdminDate Then%><%=Date2Js(dtAdminDateStart)%><%Else%>null<%End If%>;

		var arrTerms = [];
		<%If nTermTypeID <> kDocTermType_Undefined Then%>
			arrTerms = <%=comHelper.JsonHelper.SerializeObject(comHelper.ArrayHelper.TwoDimensionToKeyValues(arrTerms, Array("id", "typeId", "termName", "termStart", "termEnd")))%>;
			_.each(arrTerms, function(term){ 
				term.termStart = moment.utc(term.termStart).toDate();
				term.termEnd = moment.utc(term.termEnd).toDate(); 
			});
		<%End If %>

		var movementSources = <%=comHelper.JsonHelper.SerializeObject(arrMovementSources)%>;
			
		<% If nDocSubType <> kmdstNoClassEnroll Then %>
		var educGroupsFrom = <%=objClassesRs.ToJSON(Array("id", "name", "grade", "letter", "progid"), Array("classId", "classname", "grade", "letter", "progid"))%>;
		<%Else %>
		var educGroupsFrom = [];
		<%End If %>

		<%If Not IsEmpty(objClassesRsMoveTo) Then%>
		var educGroupsTo = <%=objClassesRsMoveTo.ToJSON(Array("id", "name", "grade", "letter", "progid"), Array("classId", "classname", "grade", "letter", "progid"))%>;
		<%Else %>
		var educGroupsTo = [];
		<%End If %>
	
		var moveDoc = {
			id: <%=strDocID%>,
			docDate: <%=Date2Js(dtDocDate)%>,
			adminDate: <%=Date2Js(dtAdminDate)%>,
			docType: <%=nDocType%>,
			docSubType: <%=nDocSubType%>,
			schoolYearId: <%=nDocYearID%>
		};
		//требуется в movement.js
		var nDocType = moveDoc.docType;

		var ctrl = new moveBookEditCtrl(moveDoc, readonly, summerMove, termTypeId, docDateRange, movementSources, arrTerms, noMoveDirection, educGroupsFrom, educGroupsTo, editPage, adminDateStart);
		$(document).ready(function() {
			<%
			If Not IsDull(strAfterOpenMessage) Then %>
				alert("<%=DB2Java(strAfterOpenMessage)%>");<%
				strAfterOpenMessage = "" 
			End If
			%>
		});

		function ShowEnrollHelp(url) {
			openPopupWindow("_help", url, 950, 660);
		};
	//--></script><%

	%>

	<style type="text/css">
		.wrapword {
			white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
			white-space: -pre-wrap; /* Opera 4-6 */
			white-space: -o-pre-wrap; /* Opera 7 */
			white-space: pre-wrap; /* css-3 */
			word-wrap: break-word; /* Internet Explorer 5.5+ */
			word-break: break-all;
			white-space: normal;
			display: inline-block;
		}
	</style>
	<%
End Sub

Sub DrawButtons()
	If Not readonly Then
		If Not bNewDoc Then ButtonSave "ctrl.savedoc();", obLanguage("Common","kSave")
		ButtonReset "ctrl.reset();", obLanguage("Common","kReset")
		Call ButtonAddEx("ctrl.addStudentsToDoc()", obLanguage("Movement","kAddStudentsToDoc", strFunctionalityType), obLanguage("Movement","kAddStudentsToDoc", strFunctionalityType))
		If Not bEmptyStudents And bMayDelete Then ButtonDelEx "ctrl.deleteStudents()", obLanguage("Movement","kDelStudentsFromDoc", strFunctionalityType), obLanguage("Movement","kDelStudentsFromDoc", strFunctionalityType)
		If bMayDelete Then
			ButtonDelEx "ctrl.deleteDoc()", obLanguage("Movement","kDeleteMoveDoc"), obLanguage("Movement","kDeleteMoveDoc")
		End If
	End If
End Sub

Sub DrawLinkButtons
	If Not readonly And nDocType = kDocType_ENROLL And obContext.ServerSettings.UserAccountsSettings.QueueImportMode Then
		Button "taskQueue.showQueuedTasks();", "Очередь выполнения процессов импорта учащихся", "Очередь выполнения процессов импорта учащихся", "glyphicon glyphicon-time"
	End If

	If Not bNewDoc Then
		If bAddSchool And nDocType = kDocType_ENROLL Then
			If obContext.ServerSettings.SystemSettings.IntegrationPFDOType = 1 Then
				Button "ctrl.educContractBlanks();", "Бланк договора", "Бланк договора", ""
			End If
		End If
		Call DrawPrintButtons()
	End If
End Sub

Sub DrawFilters(strForm)
	Dim bIsDrawSubType, bDrawYearDocs
	bIsDrawSubType = False

	bDrawYearDocs = GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False) And Not bFutureMode

	OpenPanel obLanguage("Movement", "kDocument"), "filters", False
		Call DrawReadonlyRow(obLanguage("Common","kSchoolYear"), nYearName)

		if bNewDoc Then
			Call DrawSelectDocType("MainForm", True, bDrawYearDocs,  "ctrl.onChangeDocType(this);", False)
		Else
			rw WriteHiddenTags(Array("DOCTYPE", nDocType))
			Call DrawReadonlyRow(obLanguage("Movement","kDocType"), strDocTypeName)
		End If

		If bAddSchool Then
			'в модуле ОДОД не показываем подтипы совсем
			WriteHiddenTags(Array("DOCSUBTYPE", nDocSubType))
		Else
			if bNewDoc Then
				'для еще не созданных документов даем возможность смены подтипов
				DrawSimpleFilterRow obLanguage("Movement","kDocSubType"), "DOCSUBTYPE", arrDocSubTypes, nDocSubType, False, "OnChangeSelect('MainForm','" & strScriptName & "');"
			Else
				'иначе рисуем readonly
				WriteHiddenTags(Array("DOCSUBTYPE", nDocSubType))
				Call DrawReadonlyRow(obLanguage("Movement","kDocSubType") & ":", GetTitleDocSubType(nDocSubType))
			End If
			bIsDrawSubType = True
		End If

		obTokenMgr.SetData strToken, stDrawSubType, bIsDrawSubType

		If readonly Then
			Call DrawReadonlyRow(obLanguage("Movement","kDocNumber"), strDocNumber)
		Else
			Call DrawInputRow(obLanguage("Movement","kDocNumber"), strDocNumber, "DOCNUMBER", "text", 35, 20, "")
		End If
	
		Call DrawDocDate()

		If bShowAdminDate Then
			Call DrawAdminDate()
		End If

	ClosePanel
End Sub

Sub DrawDocDate()

	OpenFormGroup obLanguage("Movement","kDocDate")
		%>
		<div class="row">
			<div class="<%=IIF(ShowMovementTerm, "col-md-6", "col-md-12")%>" <%=IIF(ShowMovementTerm, "style=""padding-right:2px;""", "")%>>
			<%If readonly Then
				%><input class="form-control" type="text" disabled="disabled" value="<%=Date2Str(dtDocDate)%>" /><%
			Else
				Call DrawDateInput("DOCDATE", Date2Str(dtDocDate), "")
			End If
			%></div><%

		If ShowMovementTerm Then
			%>
			<div class="col-md-6" style="padding-left: 2px;">
				<input OnKeyPress="return false;" class="form-control" type="text" name="TermName" size="<%=TextInputSize(nTermNameSize)%>" readonly>
			</div>
			<%
		End If

		%></div><%
	CloseFormGroup
End Sub

Sub DrawAdminDate()
	OpenFormGroup obLanguage("Movement","kAdminDate")
		%>
		<div class="row">
			<div class="col-md-12">
			<%If readonly Then
				%><input class="form-control" type="text" disabled="disabled" value="<%=Date2Str(dtAdminDate)%>" /><%
			Else
				Call DrawDateInput("ADMINDATE", Date2Str(dtAdminDate), "")
			End If
			%></div>
		</div><%
	CloseFormGroup
End Sub

Sub DrawMovementDirection()
	Dim strFieldClassName
	strFieldClassName = "CLASSNAME"

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
		End If
		If (nDocType = kDocType_OUT Or nDocType = kDocType_MOVE) and nDocSubType = kmdstNoClassEnroll Then
			'для перевода из класса в класс или выбытия учеников из школы из Списока прикрепленных обучающихся не рисуем фильтры
		Else
			Call DrawSelectInfoRow(obLanguage("Movement","kClassOut",strFunctionalityType), strClassID, "CLASSID_FROM", objClassesRs, "CLASSID", strFieldClassName, Null, "")
		End If
	End If
		
	If bWithMoveInDirection Then
		'класс зачисления
		If strClassID = "0" Then
			DrawInfo obLanguage("Filter","kNoYearClasses",strFunctionalityType), False
			bNoMoveDirection = True
		End If
		If (nDocType = kDocType_ENROLL Or nDocType = kDocType_YEAR) and nDocSubType = kmdstNoClassEnroll Then
			'зачисление в прикрепленные - рисуем параллель
			Call DrawExGrade("GRADE_TO", 0, "dataChanged();", false, obLanguage("Movement","kExGradeTo"))
		Else
			Call DrawSelectInfoRow(obLanguage("Movement","kClassEnroll",strFunctionalityType), strMoveToClassID, "CLASSID_TO", objClassesRsMoveTo, "CLASSID", strFieldClassName, Null, "")
		End If
	End If
End Sub

Sub DrawEnrollFromOptions()
	Dim objSourceInfo

	If arrMovementSources.Count = 1 Then
		'id источника перемещен в MainForm
		Exit Sub
	End If
	%>
	<p><%=(obLanguage("Movement","kChooseSourceSelector",strFunctionalityType))%></p>
	<%
	For Each objSourceInfo in arrMovementSources
		if objSourceInfo.Id <> kEnrollSource_Pool_OutOfSystem Then
			DrawEnrollRadio objSourceInfo.Id, objSourceInfo.Title
		End If
	Next
End Sub

Sub DrawEnrollRadio(kVal, sTxt)
	Dim url

	url = GetEnrollHelpUrl(kVal)%>

		<div class="radio">
			<label>
				<input type="radio" name="ENROLLFROM" value="<%=kVal%>" <%If strSourceId = kVal Then rw " checked"%> />
				<%=sTxt%>
			</label>
			&nbsp;&nbsp;
			<%=ShowAnchor ("ShowEnrollHelp('"&url&"')", obLanguage("Common","kCBHelp"), "<span class=""icon-question-sign"" style=""font-size: 1.5em""></span>", "")%>

		</div>
	<%
End Sub

Function GetEnrollHelpUrl(strSourceId)
	Select Case strSourceId
		Case "quickadd"
			GetEnrollHelpUrl = "/Help/StudentQAdd.htm"
		Case "import"
			GetEnrollHelpUrl = "/asp/SetupSchool/importExt.asp?RT=2&FT=" & IIf(bAddSchool, 3, IIf(bPreSchool, 1, 2))
		Case "pool"
			GetEnrollHelpUrl = "/Help/MoveStudentsList.htm"
		Case "regionpool"
			GetEnrollHelpUrl = "/Help/MoveStudentsList.htm"
		Case "school_students"
			GetEnrollHelpUrl = "/Help/MoveStudentsListODO.htm"
		Case "espool"
			GetEnrollHelpUrl = "/Help/MoveStudentsList.htm"
		Case "regionAddSchoolsStudents"
			GetEnrollHelpUrl = "/Help/MoveStudentsListODO.htm"
		Case "navigator"
			GetEnrollHelpUrl = "/Help/NavigatorEnrollment.htm"
	End Select
End Function

Sub DrawMoveWarnings()
End Sub

Sub onDrawPage()
	bExit = False
	bMayDelete = (Not bNewDoc) And bMayDelete
	%>

	<script><!--
		<%If nDocType = kDocType_ENROLL Then %>
			$(document).ready(function() {
				$('button[onclick*="setEOEqualDepartEO"]').hide();
			});
		<%End If %>
	//--></script>

	<form name="MainForm" action="MoveBookEdit.asp" method="POST" class="form-horizontal form-xs">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DOCID", strDocID, "Delete", "", "SAVEMODE", "", "BackPage", strScriptName, "OUTERMESSAGE", "", "DOCYEARID", nDocYearID))%>
		<%If arrMovementSources.Count = 1 Then 
			rw WriteHiddenTags(Array("ENROLLFROM", arrMovementSources(0).Id))
		End If %>
		<%Call WriteSpecialHiddenTags()


		If bNoActivePeriods Then
			%>
			<div class="row">
				<div class="col-md-10 col-lg-8"><%
					Call DrawMessage(obLanguage("Movement","kMovementForbidden"), "danger", False)%>
				</div>
			</div>
			<%
		End If

		Call SetFiltersWidth("col-md-8 col-lg-5", "col-md-4 col-lg-4", "col-md-8 col-lg-8")
		Call DrawButtonsFilters(True, "MainForm")

		Call DrawMoveWarnings()
			
		If Not ReadOnly Then 
			%>
			<script id="addStudentsToDocTempl" type="text/html">
				<form name="addStudentsToDoc" class="form-horizontal">
					<div id="move-direction">
						<%Call DrawMovementDirection()%>
					</div>
					<%Call DrawEnrollFromOptions()%>
				</form>
			</script><%
		End If

		If Not bExit Then
			%>
			<div class="row">
				<div class="col-md-12 col-lg-10">
					<%OpenPanel obLanguage("Common","kStudents",strFunctionalityType), "students", False%>
						<div class="row">
							<div class="col-md-12">
								<%DrawStudents%>
							</div>
						</div>
					<%ClosePanel%>
				</div>
			</div>
			<%
		End If

		If Not bNewDoc Then WriteHiddenTags(Array("DOCTYPEFILTER", Request("DOCTYPE"), "SUBDOCID" , 0, "BACK", strScriptName))
		If readonly Then WriteHiddenTags(Array("DOCNUMBER", strDocNumber, "DOCDATE", Date2Str(dtDocDate)))%>
	</form><%

	If Not bNewDoc Then 
		Call DrawExcelForm()
	End If

	If Not IsEmpty(cmdSubDocStudents) Then
		Call objNSNET.DisposeCommand(cmdSubDocStudents)
	End If
End Sub

Sub DrawHeaders(outNColNum)
	outNColNum = 0
%>
	<tr>
		<th class="min text-nowrap"><%=obLanguage("Filter","kN_PP")%></th>
		<th style="width: 20%"><%=obLanguage("Common","kDisplayName")%></th><%
		outNColNum = 2
		If bShowGenderAndBDate Then
			%>
			<th><%=obLanguage("Common","kGender")%></th>
			<th><%=obLanguage("Common","kBDate")%></th>
			<%
			outNColNum = outNColNum + 2
		End If

		Call DrawExtraHeaders(outNColNum)

		If Not readonly Then
			If bMayDelete Then
				%><th class="min NotPrintable"><%=DB2Html(obLanguage("Common","kDeletingMark"))%></th><%
				outNColNum = outNColNum + 1
			End If
		End If
	%>
	</tr>
<%
End Sub

Sub DrawExtraHeaders(outNColNum)
End Sub

Sub DrawStudentsExtraInfo(nStudentId, objDocStudents)
End Sub

Sub InitSubDoc(rsMoveDocClasses)
End Sub

Sub WriteSpecialHiddenTags
End Sub

Sub DrawStudents()
	Dim nColNum, nStudentIndex, strSubDocID

	If bNewDoc Then
		DrawInfo obLanguage("Movement","kAddStudentsPrompt",strFunctionalityType), False
		Exit Sub
	End If

	%><table class="table table-bordered table-striped table-xs print-block"><%
	Call DrawHeaders(nColNum)
	nStudentIndex = 1
	While Not rsMoveDocClasses.EOF
		strSubDocID = GetSafeID(rsMoveDocClasses("SUBDOCID"), Null)
		Set objDocStudents = objNSNET.GetMoveSubDocStudents_Execute(cmdSubDocStudents, strSubDocID)

		Call InitSubDoc(rsMoveDocClasses)
		Call DrawSubDocRow(rsMoveDocClasses, nColNum)

		While Not objDocStudents.EOF
			Call DrawStudentRow(nStudentIndex, strSubDocID, objDocStudents)
			objDocStudents.MoveNext
		WEnd
		rsMoveDocClasses.MoveNext
	WEnd
	%></table><%
End Sub

Sub DrawSubDocRow(rsMoveDocClasses, nColNum)
	Dim strSubDocID, bDrawDelCheck
	Dim strClasses
	Dim strClassID2

	strSubDocID = GetSafeLng(rsMoveDocClasses("SUBDOCID"), Null)
	strClasses = GetMoveSubDocClasses(rsMoveDocClasses, nDocType, arr)
	strClassID2 = GetSafeLng(rsMoveDocClasses("CLASSID2"), 0)
	bDrawDelCheck = Not readonly And bMayDelete
	%>
		<tr>
			<td class="text-left" colspan="<%=IIF(bDrawDelCheck, nColNum-1, nColNum)%>" style="background-color: #D0E8FF;">
				<b><%=IIF(nDocType=kDocType_GRADUATE Or bConditionalMoving, ShowAnchor("ctrl.editSubDoc(" & strSubDocID & ")", obLanguage("Common","kEdit"), strClasses, ""), strClasses)%></b>
				<input type="hidden" name="SubDoc" value="<%=strSubDocID%>">
				<input type="hidden" name="ClassID2" value="<%=strClassID2%>">
			</td>
			<%If bDrawDelCheck Then%>
			<td class="text-center" style="background-color: #D0E8FF;">
				<input type="checkbox" value="<%=strSubDocID%>" onClick="ctrl.toggleSubDocChecks(this)"/>
			</td>
			<%End If%>
		</tr>
	<%
End Sub

Sub DrawStudentRow(nStudentIndex, strSubDocID, objDocStudents)
	Dim strSubDocStudentId, strStudentSubDoc
	
	strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)
	strStudentSubDoc = "Student_" & strSubDocID
	strSubDocStudentId = GetSafeID(objDocStudents("ID"), Null)
	%>
	<tr id="ROW_<%=strStudentID%>">
		<td><%=nStudentIndex%><%=WriteHiddenTags(Array( "STUDENTS", strStudentID, strStudentSubDoc, strStudentID))%></td>
		<td><%=DB2HTML(objDocStudents("NICKNAME"))%></td><%
					
		If bShowGenderAndBDate Then
			%>
			<td class="text-center min"><%=DB2HTML(objDocStudents("GENDER"))%></td>
			<td class="text-center min"><%=Date2Str(objDocStudents("BIRTHDATE"))%></td>
			<%
		End If

		Call DrawStudentsExtraInfo(strStudentID, objDocStudents)

		If Not readonly And bMayDelete Then
			Call DrawDelCell("DELSTUDENTS", strSubDocStudentId, strSubDocID)
		End If
	%></tr><%
	nStudentIndex = nStudentIndex + 1
End Sub

Sub DrawEditColumnCell(strStudentID)
	%>
	<td class="text-center">
		<div class="ctx-btns-icons ctx-btns-icons-center ctx-btns-icons-md"><a class="primary" href="javascript:void(0);" onclick="javascript:editStudentMoveInfo(<%=strStudentID%>, this, <%=Bool2Js(bEditReferences)%>)"><span class="glyphicon glyphicon-pencil"></span></a></div>
	</td>
	<%
End Sub

Sub DrawEditColumnHeader()
	%><th class="min"><%=obLanguage("SetupSchoolPortfolio", "kEditingS")%></th><%
End Sub

Sub DrawEmptyHeader()
	%><th class="min"></th><%
End Sub

Sub DrawEmptyCell()
	%><td></td><%
End Sub

Sub DrawDelCell(strDelName, strSubDocStudentId, strSubDocID)
	%><td class="text-center"><input type="checkbox" name="<%=strDelName%>" value="<%=strSubDocStudentId%>" subdocid="<%=strSubDocID%>" /></td><%
End Sub

Sub DrawCantDelCell()
	%><td align="center">X</td><%
End Sub

Sub DrawMovEOS(strEOID, nOSType, strOSTypeName, bRO)
	Dim strEOVal

	If bRO Then
		strEOID = GetSafeID(strEOID, "-1")
		If strEOID = "-1" Then strEOVal = " " Else strEOVal = GetEONAMEByID(strEOID, True)%>
		
		<td><%=strEOVal%>
		<%If Not bAddSchool Then%>
			<br class='mini'/>
			<%=DB2HTML(strOSTypeName)%>
		<%End If%>
		</td><%
	Else
		If IsNull(strEOID) Then strEOID = ""%>
		<td>
			<%Call DrawSelectEOs(strStudentID, strEOID)
			If Not bAddSchool Then
				%><br class='mini'/><%
				Call DrawSelectOST(strStudentID, nOSType, strOSTypeName)
			End If%>
		</td><%
	End If
End Sub

Sub DrawDepartEO(strDepartEOName, strStudentID, bRO)
	Dim bExist, nDepartEOID, arrTmp

	If IsDull(strDepartEOName) Then
		strDepartEOName = obLanguage("Movement","kNotSelected")
		nDepartEOID = -1
	Else
		arrTmp = Split(strDepartEOName, "\/")
		nDepartEOID = GetSafeLng(arrTmp(0), -1)
		strDepartEOName = DB2HTML(GetSafeStr(arrTmp(1), -1, obLanguage("Movement","kNotSelected")))
	End If

	If bRO Then
		%><td><%=DB2HTML(strDepartEOName)%></td><%
	Else
		%><td>
			<%=ButtonWithClass("setEOEqualDepartEO()", "", "", "glyphicon glyphicon-circle-arrow-left", "btn-xs")%>
			<input type="hidden" name="DEPARTEOID_<%=strStudentID%>" id="DEPARTEOID_<%=strStudentID%>" value="<%=nDepartEOID%>" />
			<span id="DEPARTEONAME_<%=strStudentID%>"><%=strDepartEOName%></span>
		</td><%
	End If
End Sub

Sub DrawReason(nReasonID)
	%><td><%
		If Not readonly Then
			Call DrawSelectReasons(nDocType, strStudentID, nReasonID)
		Else
			rw DB2HTML(objDocStudents("ITEMNAME"))
		End If
	%></td><%
End Sub%>