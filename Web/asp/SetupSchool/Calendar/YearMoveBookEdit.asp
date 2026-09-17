<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/timeBoxes.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/YearMoveBook_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim strDocID, bNewDoc, objDocInfo
Dim dtDocDate, nDocType, nDocSubType, strDocNumber, strDocTypeName, strClass1, strClass2, strLetter, nGrade, objNAList
Dim strStudentID, bEmptyStudents
Dim nDocTypeFilter, bAll
Dim strReason, strParamVal, strEOVal
Dim nFutureYearID, bFutureYearPresent, objFutureClassesRs, arrFutureClasses
Dim nFutureClassID, bNoAvailableFutureClasses
Dim bConditionalMoving

Dim rsMoveDocClasses, cmdSubDocStudents
Dim nLastGrade, bPreSchool, arr, arrGradesPre
Dim bAddSchool, strProgID
Dim bCommonSchool

Dim nGradeJunior_Max, nGradeMiddle_Max

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCreateCloseEditYear) Or HasUserRight(arMoveBookEdit) Or HasUserRight(arMoveBookView)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleYearMoveBook")
End Function

Sub ReadState()
	Dim i, j
	Dim bCheckExisted
	Dim objClassInfo, objYearInfo, objMovePeriods
	Dim dtMovePeriodSummerStart, dtMovePeriodSummerEnd, dtFutureYearStart

	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
	nFutureYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
	bFutureYearPresent = (nFutureYearID <> 0)
	'readonly = Not (bFutureYearPresent And IsWorkYear())

	'Бывают случаи, когда сотрудник сразу является и администратором, и завучем. Поэтому возникает ситуация, что в правах доступа у Администратора 
	'выставлено право редактировать книгу движения, а в ПД Завуча установлено право Просматривать книгу движения.  Вот и получается ниже, что 
	'сначала мы вынуждены проверить право на редактирование книги движения, а уж потом проверять правоа на просмотр. А раньше проверялось сразу право
	'на просмотри, из-за чего сотрудники с правами Администратора и Завуча сразу не могли редактировать движение
	If IIF(HasUserRight(arMoveBookEdit), False, HasUserRight(arMoveBookView)) or Not PERSON_DATA or Not (bFutureYearPresent And IsWorkYear()) Then readonly = True
	strDocID = GetSafeID(Request("DOCID"), "0")
	bNewDoc = (strDocID = "0")
	nDocType = Request("DOCTYPE")
	arr = GetArrGrades(strFunctionalityType,1,0,0)

	nDocType = GetSafeLng(nDocType, kDocType_YEAR)
	If nDocType < 0 Then nDocType = kDocType_YEAR

	nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), -1)

	If bAddSchool And Not bNewDoc Then
		' Немного повторил, что происходит ниже, т.к. здесь мне нужен правильный тип документа, а он вычисляется как-то запутанно. Ведь есть существующий документ, у него есть тип...
		Set objDocInfo = objNSNET.GetMoveDocInfo(strDocID)
		If objDocInfo.EOF Then RedirectTo "/asp/SetupSchool/Movement/MoveBook.asp", Array("DOCTYPE", nDocType)
		nDocType = GetSafeLng(objDocInfo("DOCTYPE"), Null)
	End If

	If Not readonly Then
		' Для летнего движения определяем разрешённый диапазон дат. Он из настроек - летний отчётный период по движению.
		' Сейчас здесь работа происходит только для "будущего года" (т.е. до нажатия кнопки "Открыть новый год"), поэтому год
		' для ограничения берётся этот "будущий".
		' Если сделаем, чтобы редактировалось и после нажатия кнпки "Открыть новый год", т.е. в текущем рабочем году, то надо будет брать
		' уже этот год!
		Set objMovePeriods = objNSNET.GetSYMovePeriodsInfo(nFutureYearID)
		If objMovePeriods.EOF Then GenerateError obLanguage("Common","kUnexpErr")

		dtYearStart = CDate(objMovePeriods("STARTDATE"))
		dtYearEnd = CDate(objMovePeriods("ENDDATE"))
	End If

	If bNewDoc Then
		bCheckExisted = False

		If nDocType = kDocType_STAY Then
			InitYearClasses
			If strClassID < 0 Then strClassID = objClassesRs("CLASSID")
		ElseIf nDocType = kDocType_YEAR Then
			If nDocSubType < 0 Then nDocSubType = kYearDocSubType_Simple
			'bCheckExisted = True данный флаг установили False, потому что появилась необходимость создавать несколько документов о переводе на след год
			'для понятности можно посмотреть задачу 7107 Redmine
			bCheckExisted = False
			strClassID = Request("PCLID")
		Else
		End If

		If bAddSchool Then bCheckExisted = False

		If bCheckExisted Then
			If strClassID > 0 Then
				Set objClassInfo = objNSNET.GetClassInfo(strClassID)
				nGrade = CLng(objClassInfo("GRADE"))
			End If

			strDocID = objNSNET.GetExistedMoveDocByType(strCurrYearID, nGrade, nDocType, nDocSubType)
			If strDocID > 0 Then bNewDoc = False
		End If
	End If

	If bNewDoc Then
		If nDocType < 0 Then nDocType = kDocType_YEAR
		dtDocDate = GetSafeDate(Request("DOCDATE"), NSNow())
		strDocNumber = Trim(GetSafeStr(Request("DOCNUMBER"), 20, ""))
	Else
		Set objDocInfo = objNSNET.GetMoveDocInfo(strDocID)
		If objDocInfo.EOF Then RedirectTo "/asp/SetupSchool/Movement/MoveBook.asp", Array("DOCTYPE", nDocType)
		dtDocDate = GetSafeDate(objDocInfo("DOCDATE"), Null)
		strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, "?")
		nDocTypeFilter = GetSafeLng(Request("DOCTYPE"), -1) ' for restore correct filter in parent page (MoveBook.asp)
		nDocType = GetSafeLng(objDocInfo("DOCTYPE"), Null)
		nDocSubType = GetSafeLng(objDocInfo("MBSUBTYPE"), kDocSubType_Simple)
	End If

	bConditionalMoving = (nDocSubType = kYearDocSubType_Conditional)

	If readonly Then Exit Sub

	InitYearClasses
	If nDocSubType<>kYearDocSubType_NotEnrolled Then
		nLastGrade = -1
		Select Case nDocType
		Case kDocType_YEAR, kDocType_STAY
			If Not bAddSchool Then
				Set objFutureClassesRs = objNSNET.GetYearClasses(nFutureYearID)
				
				If objFutureClassesRs.EOF Then
					GenerateError obLanguage("Filter","kNoFutureYearClasses",strFunctionalityType)
				End If
			Else
				If strProgID = "0" Then Exit Sub
				
				Set objFutureClassesRs = objNSNET.GetYearClassesForAddProgram(nFutureYearID, strProgID)
				
				If objFutureClassesRs.EOF Then
		'			GenerateHTMLError obLanguage("SetupSchoolCalendar","kNoClassesWithProgramInFutureYear"), "/asp/SetupSchool/Calendar/YearMoveBook.asp", strToken
					GenerateError obLanguage("SetupSchoolCalendar","kNoClassesWithProgramInFutureYear")
				End If
			End If

			arrFutureClasses = objFutureClassesRs.GetRows(,,Array("CLASSID", "CLASSNAME", "GRADE", "LETTER"))
			If Clng(strClassID) > 0 Then
				If objClassesRs.EOF Then Exit Sub
				Set objClassInfo = objNSNET.GetClassInfoEx(strClassID, strFunctionalityType)
				nGrade = CLng( objClassInfo( "GRADE") )

				Select Case nDocType
				Case kDocType_YEAR
					nFutureClassID = "0"
					For i = 0 To UBound(arrFutureClasses, 2)
						If arrFutureClasses(2,i) > nGrade Then
							j = i
							While arrFutureClasses(3,j) <> objClassInfo( "LETTER") And arrFutureClasses(2,j) = arrFutureClasses(2,i) And j < UBound(arrFutureClasses, 2)
								j = j + 1
							Wend
							If arrFutureClasses(3,j) = objClassInfo( "LETTER") Then nFutureClassID = arrFutureClasses(0,j) Else nFutureClassID = arrFutureClasses(0,i)
							Exit For
						End If
					Next
					If nFutureClassID = "0" And bPreSchool Then
						nFutureClassID = arrFutureClasses(0, UBound(arrFutureClasses, 2))
					End If
				Case kDocType_STAY
					For i = 0 To UBound(arrFutureClasses, 2)
						If arrFutureClasses(2,i) = nGrade Then
							j = i
							While arrFutureClasses(3,j) <> objClassInfo( "LETTER") And j < UBound(arrFutureClasses, 2)
								j = j + 1
							Wend
							If arrFutureClasses(3,j) = objClassInfo( "LETTER") Then nFutureClassID = arrFutureClasses(0,j) Else nFutureClassID = arrFutureClasses(0,0)
							Exit For
						End If
					Next
				End Select
			End If
			nLastGrade = arrFutureClasses(2,UBound(arrFutureClasses,2))
		Case kDocType_GRADUATE
		Case Else
			strClassID = "0"
		End Select
		If nLastGrade < 0 Then nLastGrade = Application("LASTGRADE")(strFunctionalityType)
		nLastGrade = nLastGrade + 1
	Else
		Set objNAList = objNSNET.GetNonAdvancedNotEnrolledStudentList(strCurrYearID)
		bAll = Not objNAList.EOF
		If strClassID="0" Then
			If bAll Then strClassID="-1"
		End If
	End If

	nGradeJunior_Max = -1
	nGradeMiddle_Max = -1
	If Not bAddSchool And Not bPreSchool And nDocType = kDocType_GRADUATE Then
		Call InitSchoolSettings(objNSNET)
		nGradeJunior_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeJunior_Max))
		nGradeMiddle_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeMiddle_Max))
	End If
End Sub

Sub WriteState()
	If bNewDoc Then WriteClass
	Call obTokenMgr.SetData(strToken,"Y_dct", Null )
End Sub

Sub Main()
	Dim cmdMoveDocClasses

	If Not bNewDoc Then
		Set cmdMoveDocClasses = objNSNET.GetMoveDocClasses_Prepare()
		Set rsMoveDocClasses = objNSNET.GetMoveDocClasses_Execute(cmdMoveDocClasses, strDocID)
		Call objNSNET.DisposeCommand(cmdMoveDocClasses)
		Set cmdSubDocStudents = objNSNET.GetMoveSubDocStudents_Prepare(strCurrYearID, nDocType)
	End If

	If Not readonly And strClassID <> "0" Then
		If nDocType <> kDocType_GRADUATE AND nDocSubType <> kYearDocSubType_NotEnrolled Then InitFutureClasses arrFutureClasses, nFutureClassID
	End If
End Sub

Sub onHead()
	Call scriptCalendar("MainForm", dtYearStart, dtYearEnd)%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/movement.min.css")%>">

	<script><!--
	function OnChSel(sFormName, sAction) {
		checkForChanges().then(function(){ ok_check_db(sFormName, sAction); }, function() {
			document.forms[sFormName].reset();
		});
	
	}<%

	If nDocType = kDocType_GRADUATE Then%>
		function OnChangeSelect(sFormName, sAction) {
				return;
		}<%
	End If%>

	var dtStartYr = <%=Date2Js(dtYearStart)%>;
	var dtEndYr = <%=Date2Js(dtYearEnd)%>;

	function CanSaveBook() {
		var form = document.MainForm;
		var docNumber = trimStr(form.DOCNUMBER.value);
		
		if(docNumber.length == 0) {
			focusAlert(form.DOCNUMBER, language.Generic.Movement.kErrEmptyDocNumber);
			
			return false;
		}

		var docDateFilter = getDateFilterInfo("DOCDATE");

		if(!docDateFilter.check()) {
			return false;
		}

		var validateMsg = language.Generic.Movement.kErrDocDateOutOfYear + '<%=( "(" & Date2Str(dtYearStart) & " - " & Date2Str(dtYearEnd) & ")")%>';
		if(!docDateFilter.checkDateInterval(dtStartYr, dtEndYr, validateMsg)) {
			return false;
		}

		return true;
	}

	function SaveBook() {
		if (!CanSaveBook()) return false;

		if(!dataWereChanged || isDBBusy()) {
			return false;
		}

		var form = document.MainForm;

		var findOnPage = function(textContent) {
			var obj = $('div.alert:contains("' + textContent + '")');

			if(obj.length != 0) {
				return true;
			}

			return false;
		}

		var textContent = "<%=obLanguage("Movement","kAddStudentsPrompt",strFunctionalityType)%>";
		
		if(findOnPage(textContent)) {
			alert("<%=obLanguage("Movement","kMoveDocIsEmpty")%>");
			return;
		}

		form.ACT.value = 'save';
		setDBBusy();
		$.show.longWork(language.Generic.SetupSchool.kSavingPleaseWait + "." + language.Generic.Curriculum.kPleaseWait + "...");
			
		DoSubmit(form,"SaveYearMoveBook.asp");
	}<%
	If Not readonly And Not bNewDoc Then%>
		function DeleteDoc() {
			if(isDBBusy()) {
				return false;
			}

			$.show.confirmation(language.Generic.Movement.kConfirmDeleteDoc).then(function() {
				var form = document.MainForm;
				form.ACT.value = 'del';
				setDBBusy();

				$.show.processing();
				DoSubmit(form,"SaveYearMoveBook.asp");
			});
		}
	<%End If%>

	function AddStudents() {
		if(isDBBusy()) {
			return false;
		}

		var urlAdd;
		<%If nDocType = kDocType_YEAR And nDocSubType = kYearDocSubType_NotEnrolled Then%>
			if(!CanSaveBook()) {
				return;
			}

			var classId = document.MainForm.PCLID
			urlAdd = classId=="-1" ? "/asp/SetupSchool/Movement/AddNonEnrollStudents.asp?":"AddYearStudents.asp";
		<%ElseIf strClassID <> "0" Then%>
			if( !CanSaveBook() ){
				return;
			}
			urlAdd = "AddYearStudents.asp";
		<%End If%>

		setDBBusy();
		DoSubmit(document.MainForm, urlAdd);
	}

	function editSubDoc(nSubDocID) {
		if(isDBBusy()) {
			return false;
		}

		<%If strClassID<>"0" Then%>
			if(!CanSaveBook()) {
				return;
			}
		<%End If%>

		var form = document.MainForm;
		form.SUBDOCID.value = nSubDocID;
		setDBBusy();

		DoSubmit(form,"AddYearStudents.asp");
	}

	function Back() {
		goBack(document.MainForm, '/asp/SetupSchool/Movement/MoveBook.asp');
	}
	//--></script><%
End Sub

Sub DrawFilters(strForm)
	Dim bIsDrawSubType

	If IsAllClasssesEnrolled() Then Exit Sub

	bIsDrawSubType = False
	Call GetDocInfo(nDocType, strDocTypeName)
	Call DrawReadonlyRow(obLanguage("Movement","kDocType"), strDocTypeName)
'	If Not bAddSchool And Not bPreSchool Then
	If Not bAddSchool Then
		If nDocType = kDocType_YEAR Or (bCommonSchool And (nDocType = kDocType_GRADUATE)) Then
			Call DrawReadonlyRow(obLanguage("Movement","kDocSubType"), GetTitleDocSubTypeYear(nDocSubType))
			bIsDrawSubType = True
		End If
	End If

	obTokenMgr.SetData strToken, stDrawSubType, bIsDrawSubType

	If readonly Then
		Call DrawReadonlyRow(obLanguage("Movement","kDocNumber"), strDocNumber)
		Call DrawReadonlyRow(obLanguage("Movement","kDocDate"), Date2Str(dtDocDate))
	Else
		Call DrawInputRow(obLanguage("Movement","kDocNumber"), strDocNumber, "DOCNUMBER", "text", 35, 20, "")
		Call DrawDateInfoRow(obLanguage("Movement","kDocDate"), dtDocDate, "DOCDATE", "")
		
		If strClassID <> "0" Then
			DrawYearClasses "MainForm", bAll, obLanguage("SetupSchoolCalendar", "kNo_NotEnrolledClasses", strFunctionalityType)

			If nDocSubType <> kYearDocSubType_NotEnrolled Then
				If nDocType <> kDocType_GRADUATE Then
					DrawFutureClasses arrFutureClasses, nFutureClassID
				Else
					Call DrawReadonlyRow(obLanguage("Movement","kClassEnroll",strFunctionalityType), obLanguage("Common","kLastGradeName"))
				End If
			Else
				Call DrawExGrade(-nGrade - 1, "dataChanged();", false)
			End If
		End If
	End If
End Sub

Sub DrawButtons()
	ButtonSave "SaveBook();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
	If Not(strClassID = "0" Or bNoAvailableFutureClasses) Then ButtonAdd "AddStudents()", obLanguage("Movement", "kAddStudentsToDoc", strFunctionalityType)
	If Not bNewDoc Then ButtonDel "DeleteDoc();", obLanguage("Common","kRemove")
End Sub

Function IsAllClasssesEnrolled()
	'Work only after InitYearClasses
	IsAllClasssesEnrolled = (bNewDoc And strClassID = "0")
End Function

Sub onDrawPage()
	bExit = False%>

	<FORM NAME="MainForm" ACTION="YearMoveBookEdit.asp" METHOD="POST" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DOCTYPE", nDocType,"DOCSUBTYPE", nDocSubType,"DOCID", strDocID, "BACK", strScriptName, "ACT", "save"))%>

		<%If nDocType = kDocType_YEAR And nDocSubType=kYearDocSubType_NotEnrolled Then%>
			<%=WriteHiddenTags(Array("BackPage","/asp/SetupSchool/Calendar/YearMoveBookEdit.asp","GoalPage","/asp/SetupSchool/Calendar/SaveYearMoveBook.asp"))%>
		<%End If

		If Not readonly And strClassID <> "0" And nDocSubType <> kYearDocSubType_NotEnrolled And nDocType = kDocType_GRADUATE Then%>
			<%=WriteHiddenTags(Array("Grade", nLastGrade))%><%
		End If
		
		Call DrawButtonsFilters(Not readonly And Not IsAllClasssesEnrolled(), "MainForm")%>

		<div class="row">
			<div class="col-md-10"><%
				If IsAllClasssesEnrolled() Then
					Call DrawInfo(obLanguage("SetupSchoolCalendar","kAllClassesEnrolled",strFunctionalityType), False)
				Else
					DrawStudents
					WriteHiddenTags(Array( "DOCTYPEFILTER", nDocTypeFilter, "SUBDOCID", 0))
				End If%>
			</div>
		</div>
	</FORM><%

	If Not IsEmpty(cmdSubDocStudents) Then Call objNSNET.DisposeCommand(cmdSubDocStudents)
End Sub

Sub DrawStudents()
'on error resume next
	Dim strSubDocID, strClasses, objDocStudents
	Dim strTH, strTH_Award, strActive

	If bNewDoc Then 
		Call DrawInfo(obLanguage("Movement","kAddStudentsPrompt",strFunctionalityType), False)
		Exit Sub
	End If
	strActive = False%>

	<hr /><%
	
	OpenPanel obLanguage("Common","kStudents",strFunctionalityType), "students", False%>
		<div role="tabpanel"><%
			If nDocType = kDocType_GRADUATE And CLng(strFunctionalityType) <> kFuncType_Add Then
				strTH_Award = "<th>" & obLanguage("SetupSchoolCalendar","kAward") & "</th>"
				If bConditionalMoving Then
					strTH = "<th>" & obLanguage("Movement","kPassDebtDate") & "</th>"
				End If
				strTH = strTH & "<th>" & obLanguage("Movement","kDepartReason") & "</th><th>" & obLanguage("Movement","kDepartTo") & "</th>"%>

				<div class="row">
					<div class="col-md-12">
						<ul class="nav nav-pills subdoc-list" role="tablist"><%
							While Not rsMoveDocClasses.EOF
								strSubDocID			= GetSafeID(rsMoveDocClasses("SUBDOCID"), Null)
								strClasses			= GetMoveSubDocClasses(rsMoveDocClasses, nDocType, arr)%>

								<li role="presentation" <%=IIF(Not strActive, "class=""active""", "")%>>
									<a href="#<%=strSubDocID%>" role="tab" data-toggle="tab"><%=strClasses%></a>
								</li><%
			
								strActive = True
								rsMoveDocClasses.MoveNext
							WEnd%>
						</ul>
					</div>
				</div>
				
				<div class="row" style="margin-top: 10px;">
					<div class="col-md-12">
						<div class="tab-content"><%
							rsMoveDocClasses.MoveFirst
							strActive = False

							While Not rsMoveDocClasses.EOF
								strSubDocID			= GetSafeID(rsMoveDocClasses("SUBDOCID"), Null)
								Set objDocStudents	= objNSNET.GetMoveSubDocStudents_Execute(cmdSubDocStudents, strSubDocID)
								strClasses			= GetMoveSubDocClasses(rsMoveDocClasses, nDocType, arr)
								nGrade				= GetSafeLng(rsMoveDocClasses("GRADEFROM"), -1)

								If Not bPreSchool And nGrade <> nGradeJunior_Max Then
									Call InitAwardArray(nGrade = nGradeMiddle_Max, bConditionalMoving)
								End If%>

								<div role="tabpanel" class="tab-pane <%=IIF(Not strActive, "active", "")%>" id="<%=strSubDocID%>">
									<table class="table table-bordered table-condensed">
										<tr style="background-color: #FEE6C5;">
											<th>
												<%=IIF(readonly, strClasses, ShowAnchor("editSubDoc(" & strSubDocID & ")", obLanguage("SetupSchoolCalendar","kEditSubDoc",strFunctionalityType), strClasses, ""))%>
											</th>

											<%=IIf(Not bPreSchool And nGrade <> nGradeJunior_Max, strTH_Award & strTH, strTH)%>
										</tr><%

										While Not objDocStudents.EOF
											strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)%>
											<tr>
												<td><%=DB2HTML(objDocStudents("NICKNAME"))%></td><%

												If Not bPreSchool And nGrade <> nGradeJunior_Max Then Call DrawAward(objDocStudents("AWARDTYPE"))

												If bConditionalMoving Then%>
													<td><%=Date2Str(objDocStudents("PASSDATE"))%></td><%
												End If

												strReason = GetSafeStr(objDocStudents("ITEMNAME"), -1, " ")%>
												<td><%=strReason%></td><%

												strParamVal = GetSafeStr(objDocStudents("EOID"), -1, "-1")
												If strParamVal = "-1" Then strEOVal = " " Else strEOVal = objNSNET.GetEOFullName(strParamVal)%>
												<td><%=DB2HTML(strEOVal)%></td>
											</tr><%
					
											objDocStudents.MoveNext
										WEnd%>
									</table>
								</div><%
			
								strActive = True
								rsMoveDocClasses.MoveNext
							WEnd%>
						</div>
					</div>
				</div><%
			Else%>
				<div class="row">
					<div class="col-md-12">
						<ul class="nav nav-pills nav-stacked subdoc-list" role="tablist"><%
							While Not rsMoveDocClasses.EOF
								strSubDocID			= GetSafeID(rsMoveDocClasses("SUBDOCID"), Null)
								strClasses			= GetMoveSubDocClasses(rsMoveDocClasses, nDocType, arr)%>

								<li role="presentation" <%=IIF(Not strActive, "class=""active""", "")%>>
									<a href="#<%=strSubDocID%>" role="tab" data-toggle="tab"><%=strClasses%></a>
								</li><%
			
								strActive = True
								rsMoveDocClasses.MoveNext
							WEnd%>
						</ul>
					</div>
				</div>

				<div class="row" style="margin-top: 10px;">
					<div class="col-md-12">
						<div class="tab-content"><%
							rsMoveDocClasses.MoveFirst
							strActive = False

							While Not rsMoveDocClasses.EOF
								strSubDocID			= GetSafeID(rsMoveDocClasses("SUBDOCID"), Null)
								Set objDocStudents	= objNSNET.GetMoveSubDocStudents_Execute(cmdSubDocStudents, strSubDocID)
								strClasses			= GetMoveSubDocClasses(rsMoveDocClasses, nDocType, arr)%>

								<div role="tabpanel" class="tab-pane <%=IIF(Not strActive, "active", "")%>" id="<%=strSubDocID%>">
									<table class="table table-bordered table-condensed">
										<tr style="background-color: #FEE6C5;">
											<th>
												<%=IIF(readonly, strClasses, ShowAnchor("editSubDoc(" & strSubDocID & ")", obLanguage("SetupSchoolCalendar","kEditSubDoc",strFunctionalityType), strClasses, ""))%>
											</th>
											<%If bConditionalMoving Then%>
												<th><%=obLanguage("Movement","kPassDebtDate")%></th>
											<%End If%>
											<%=strTH%>
										</tr><%
										While Not objDocStudents.EOF
											strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)%>
											<tr>
												<td><%=DB2HTML(objDocStudents("NICKNAME"))%></td>
												<%If bConditionalMoving Then%>
													<td><%=Date2Str(objDocStudents("PASSDATE"))%></td>
												<%End If%>
											</tr><%

											objDocStudents.MoveNext
										WEnd%>
									</table>
								</div><%

								strActive = True
								rsMoveDocClasses.MoveNext
							WEnd%>
						</div>
					</div>
				</div><%
			End If%>
	</div><%
	ClosePanel
End Sub

Sub InitYearClasses()
	Dim strFuncTypeTmp

	strProgID = "0"
	strClassID = GetSafeID( Request("PCLID"), strClassID)
	strFuncTypeTmp = strFunctionalityType

	If CLng(nDocType) = kDocType_GRADUATE And Application("MSSQL") = "0" And Application("IsCollege") Then
		strFuncTypeTmp = kFuncType_Profession
	End If

	Set objClassesRs = objNSNET.GetNotEnrolledClasses(strCurrYearID, nDocType, nDocSubType, strFuncTypeTmp, nFutureYearID)
	If strClassID = "-1" And nDocType = kDocType_YEAR Then Exit Sub

	If objClassesRs.EOF Then strClassID = "0" : Exit Sub

	If bAddSchool Then
		Do
			If Clng(objClassesRs("CLASSID")) = CLng(strClassID) Then
				strProgID = GetSafeID(objClassesRs("PROGID"), "-1")
				objClassesRs.MoveFirst
				Exit Sub
			End If

			objClassesRs.MoveNext
		Loop While Not objClassesRs.EOF

		objClassesRs.MoveFirst
		strProgID = GetSafeID(objClassesRs("PROGID"), "-1")
	Else
		Do
			If Clng(objClassesRs("CLASSID")) = CLng(strClassID) Then nGrade = CLng(objClassesRs("GRADE")) : objClassesRs.MoveFirst : Exit Sub
			
			objClassesRs.MoveNext
		Loop While Not objClassesRs.EOF

		objClassesRs.MoveFirst
	End If

	strClassID = GetSafeID(objClassesRs("CLASSID"), NULL)
	nGrade = CLng(objClassesRs("GRADE"))
End Sub

Sub InitFutureClasses(arrClasses, nCurID)
	Dim nDrawedCount, arrOptions, i
	Dim nCntClasses

	nDrawedCount = 0
	nCntClasses = UBound(arrClasses, 2)
	Redim arrOptions(2, nCntClasses)

	If UBound(arrClasses, 2) > 0 Then
		For i = 0 To UBound(arrClasses, 2)
			If isMustDraw(arrClasses(2, i), nDocType) Then
				arrOptions(0,nDrawedCount) = arrClasses(0, i) : arrOptions(1, nDrawedCount) = arrClasses(1, i) : arrOptions(2, nDrawedCount) = arrClasses(2, i)
				nDrawedCount = nDrawedCount + 1
			End If
		Next
	ElseIf UBound(arrClasses, 2) = 0 And isMustDraw(arrClasses(2,0), nDocType) Then
		arrOptions(0, nDrawedCount) = arrClasses(0,0) : arrOptions(1, nDrawedCount) = arrClasses(1, 0) : arrOptions(2, nDrawedCount) = arrClasses(2, 0)
		nDrawedCount = nDrawedCount + 1
	End If

	If nDrawedCount > 0 Then
		bNoAvailableFutureClasses = False
		ReDim Preserve arrOptions(2, nDrawedCount - 1)
		arrClasses = arrOptions
	Else
		bNoAvailableFutureClasses = True
		arrClasses = null
	End If
End Sub

Sub DrawFutureClasses(arrClasses, nCurID)
	Dim nCountToDraw, i

	If IsArray(arrClasses) Then nCountToDraw = UBound(arrClasses, 2) + 1 Else nCountToDraw = 0

	OpenFormGroup obLanguage("Movement","kClassEnroll",strFunctionalityType)
		If nCountToDraw = 0 Then
			Response.Write obLanguage("Filter","kNoFutureYearClasses",strFunctionalityType)
		ElseIf nCountToDraw = 1 Then
			Response.Write "<nobr>" & arrClasses(1, 0) & "</nobr><input type=hidden name=""FUTURECLASSID"" value=""" & arrClasses(0,0) & """>"
		Else
			Response.Write "<select Name=""FUTURECLASSID"" onChange=""dataChanged();"" class=""form-control"">"

			For i = 0 to nCountToDraw - 1
				Response.Write "<option value=""" & arrClasses(0, i) & """ " & IIF(nCurID = arrClasses(0, i), "selected", "") & ">" & arrClasses(1, i) & "</option>"
			Next

			Response.Write "</select>"
		End If
	CloseFormGroup
End Sub

Function isMustDraw(nClassGrade, nDocType)
	isMustDraw = False

	Select Case nDocType
		Case kDocType_YEAR : If (nClassGrade > nGrade) Or bPreSchool Then isMustDraw = True
		Case kDocType_STAY :  If nClassGrade = nGrade Then isMustDraw = True
	End Select
End Function

Function GetFIrstSelectOptionString(bAll)
	GetFIrstSelectOptionString = IIF(bAll, obLanguage("Filter","kNotEnrolled"), null)
End Function
%>