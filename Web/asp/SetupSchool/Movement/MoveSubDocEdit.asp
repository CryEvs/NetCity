<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/timeBoxes.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/MoveMent/MoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/MoveMent/YearMoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/MoveMent/MoveBookPlaceReasons_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nDocID, objDocInfo, nSubDocID
Dim dtDocDate, nDocType, strDocNumber, strDocTypeName, objNAList
Dim strStudentID, bEmptyStudents
Dim nDocTypeFilter, bAll, strBackPage
Dim nReasonID, objDepartReasons, strParamVal, strEOVal, objMovEOS
Dim arr, strTmpClassName
Dim nFutureClassID, nFutureGrade, nDocSubType
Dim rsMoveDocClasses, cmdSubDocStudents, objDocStudents
Dim bEditingInFutureYear
Dim bCommonSchool, bPreSchool, bAddSchool
Dim nGradeJunior_Max, nGradeMiddle_Max
Dim nGrade, nStep
Dim nTmpFuncType
Dim bConditionalMoving, arrStudsRequiredDate
Dim dtConditMove_Start, dtConditMove_End
Dim bAllTransferDocStay
Dim bEditingConditionalMoving
Dim bEnrolled

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCreateCloseEditYear) Or HasUserRight(arMoveBookEdit)
End Function

Function GetPageTitle()
	GetPageTitle = IIF((nDocType = kDocType_GRADUATE) Or bConditionalMoving, obLanguage("Movement","kEditStudentsInDoc",strFunctionalityType), obLanguage("Movement","kDelStudentsFromDoc",strFunctionalityType))
End Function

Sub ReadState()
	Dim nFutureYearID, bFutureYearPresent
	Dim minGrade, maxGrade
	Dim objClassInfo

	Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

	bCommonSchool	= (CLng(strFunctionalityType) = kFuncType_Common)
	bAddSchool		= (CLng(strFunctionalityType) = kFuncType_Add)
	bPreSchool		= (CLng(strFunctionalityType) = kFuncType_PreSchool)
	strBackPage		= GetSafeStr( Request("BACK"), 200, "YearMoveBookEdit.asp" )
	dtDocDate		= GetSafeDate(Request("DOCDATE"), NSNow())
	strDocNumber	= Trim(GetSafeStr(Request("DOCNUMBER"), 20, ""))
	nDocType		= GetSafeLng(Request("DOCTYPE"), kDocType_YEAR)
	nDocSubType		= GetSafeLng(Request("DOCSUBTYPE"), -1)
	Call GetDocInfo(nDocType, strDocTypeName)
	nSubDocID				= GetSafeLng(Request("SUBDOCID"), Null)
	nDocID				= GetSafeLng(Request("DOCID"), 0)
	nFutureYearID			= objNSNET.GetSchoolFutureYear(strSchoolID)
	bFutureYearPresent		= (nFutureYearID <> 0)
	readonly				= Not bFutureYearPresent

	bConditionalMoving = (nDocSubType = kYearDocSubType_Conditional)
	bEditingConditionalMoving = bConditionalMoving
	bEditingInFutureYear = Not IsWorkYear()

	If Not readonly Then readonly = Not IsWorkYear()
	If bEditingInFutureYear Then readonly = False

	If bAddSchool And Not readonly Then
		readonly = Not bFutureYearPresent
	End If

	'места и причины выбытия выпускников можно редактировать до окончания второго периода по движению в новом году.
	If (nDocType = kDocType_GRADUATE And bEditingInFutureYear) Or bConditionalMoving Then
		Dim objTmpMovPeriods, objTmpYearInfo, nGlobalYearID, nSchYID, nDocGYID
		
		If nFutureYearID > 0 Then
			'если есть будущий год - то нужно строго использовать именно его для определения периодов по движению
			Set objTmpYearInfo = objNSNET.GetYearInfo(nFutureYearID)
			nGlobalYearID = Clng(objTmpYearInfo("GLOBALYEARID"))
		Else
			'иначе нужно определить если год закрыт - то это означает что данные редактируются в прошлом году - значит нужно + 1
			Set objTmpYearInfo = objNSNET.GetYearInfo(strCurrYearId)
			nGlobalYearID = Clng(objTmpYearInfo("GLOBALYEARID")) + 1
		End If
		Set objTmpMovPeriods = objNSNET.GetMovePeriodsInfo(nGlobalYearID)

		If nDocType = kDocType_GRADUATE And bEditingInFutureYear And Not readonly Then
			objTmpMovPeriods.MoveNext

			If NSNow() > CDate(objTmpMovPeriods("ENDDATE")) Then
				readonly = True
				bEditingInFutureYear = False
			End If
		End If

		If bConditionalMoving Then
			nSchYID = objNSNET.GetSchoolYearBySchoolAndGlobalYear(strSchoolID, nGlobalYearID)
			If nSchYID <> 0 Then
				Set objTmpYearInfo = objNSNET.GetYearInfo(nSchYID)
				If Not objTmpYearInfo.EOF Then
					If objTmpYearInfo("CLOSED") = "Y" Then
						readonly = True
						bEditingConditionalMoving = False
					End If
				End If
			End If

			If nDocType = kDocType_YEAR And bEditingInFutureYear Then
				readonly = True ' В этом случае Дата сдачи задолженности редактируется только через bEditingConditionalMoving
			End If

			Set objDocInfo = objNSNET.GetMoveDocInfo(nDocID)
			' Здесь условное движение при переходе на след. год, поэтому сдавать задолженность можно в граничных датах уже для следующего года ().
			nDocGYID = GetSafeLng(objDocInfo("GLOBALYEARID"), Null) + 1
			Set objTmpMovPeriods = objNSNET.GetMovePeriodsInfo(nDocGYID)
			dtConditMove_Start = CDate(objTmpMovPeriods("STARTDATE"))
			objTmpMovPeriods.MoveLast
			dtConditMove_End = CDate(objTmpMovPeriods("ENDDATE"))
		End If
	End If

	nGrade = -1
	If nDocSubType <> kYearDocSubType_NotEnrolled Then
		Set objDocInfo = objNSNET.GetYearSubDocInfo(nSubDocID)
		strClassID = GetSafeLng(objDocInfo("CLASSID1"), 0)
		If nDocType <> kDocType_GRADUATE Then nFutureClassID = GetSafeLng(objDocInfo("CLASSID2"), Null)

		If nDocType = kDocType_GRADUATE Then
			strTmpClassName = obLanguage("Common","kLastGradeName")
		Else
			strTmpClassName = objNSNET.GetClassName(nFutureClassID)
		End If
	Else
		Set objDocInfo = objNSNET.GetYearSubDocInfo(nSubDocID)
		If nDocType = kDocType_GRADUATE Then
			nGrade = GetSafeLng(objDocInfo("GRADEFROM"), -1)
		Else
			strClassID = GetSafeLng(objDocInfo("CLASSID1"), -1)
			nFutureGrade=objDocInfo("GRADETO")

			strTmpClassName = nFutureGrade
		End If
	End If

	nStep = -1
	If (nGrade = -1) And (strClassID > 0) Then
		Set objClassInfo = objNSNET.GetClassInfo(strClassID)
		If Not objClassInfo.EOF Then nGrade = GetSafeLng(objClassInfo("GRADE"), -1)
	End If

	nGradeJunior_Max = -1
	nGradeMiddle_Max = -1
	If Not bAddSchool And Not bPreSchool And nDocType = kDocType_GRADUATE Then
		Call InitSchoolSettings(objNSNET)
		nGradeJunior_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeJunior_Max))
		nGradeMiddle_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeMiddle_Max))
		If nGrade <> -1 Then
			nStep = IIf(nGrade = nGradeJunior_Max, 1, IIF(nGrade = nGradeMiddle_Max, 2, 3))
		End If
	End If

	If nDocType = kDocType_GRADUATE Then
		If Not bPreSchool And nGrade <> nGradeJunior_Max Then
			Call InitAwardArray(nGrade = nGradeMiddle_Max, bConditionalMoving, bAddSchool)
		End If
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stMovStepFrom, nStep)
End Sub

Sub Main()
	Dim bHasTransferDocStay, bHasTransferDocSimple, nUBound
	Dim nCountTransferDocStay

	nTmpFuncType = CLng(strFunctionalityType)

	bEnrolled = True
	If nDocType = kDocType_GRADUATE And CLng(strFunctionalityType)<>kFuncType_Add Then
		If Not bPreSchool And nGrade = nGradeJunior_Max Then
			' Для школ (точнее - не детсадов), если выпуск из младшей ступени, то действуем как для детсадов
			nTmpFuncType = kFuncType_PreSchool
		End If
	End If

	Set cmdSubDocStudents = objNSNET.GetMoveSubDocStudents_Prepare(strCurrYearID, nDocType)
	Set objDocStudents = objNSNET.GetMoveSubDocStudents_Execute(cmdSubDocStudents, nSubDocID)

	bAllTransferDocStay = False
	If bConditionalMoving And bEditingConditionalMoving And Not objDocStudents.EOF Then
		nCountTransferDocStay = 0
		ReDim arrStudsRequiredDate(-1)
		While Not objDocStudents.EOF
			bHasTransferDocStay = (GetSafeLng(objDocStudents("HasTransferDocStay"), 0) = 1)

			' #24474
			' HasTransferDocStay имеет более высокий приоритет, чем HasTransferDocSimple,
			' т.е. обнаружив HasTransferDocStay уже не смотрим HasTransferDocSimple - оно может быть результатом уже последующего движения.
			' Это согласуется с Sub DrawPassDate()
			If bHasTransferDocStay Then
				nCountTransferDocStay = nCountTransferDocStay + 1
			Else
				bHasTransferDocSimple = (GetSafeLng(objDocStudents("HasTransferDocSimple"), 0) = 1)
				If bHasTransferDocSimple Then ' У таких нельзя удалять дату ликвидации задолженности
					strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)
					nUBound = UBound(arrStudsRequiredDate)
					ReDim Preserve arrStudsRequiredDate(nUBound + 1)
					arrStudsRequiredDate(nUBound + 1) = CLng(strStudentID)
				End If
			End If

			objDocStudents.MoveNext
		WEnd
		objDocStudents.MoveFirst
		bAllTransferDocStay = (nCountTransferDocStay = objDocStudents.RecordCount)
		If bAllTransferDocStay Then
			bEditingConditionalMoving = False
		End If
	End If
End Sub

Sub onHead()
	If bConditionalMoving Then
		Call scriptCalendar("MainForm", dtConditMove_Start, dtConditMove_End)
	End If%>
	<script><!--
		var nDocType = <%=nDocType%>;
		var nFuncTypeArrayIndex = <%=nTmpFuncType%> - 1;
	--></script>

	<script language="JavaScript" src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/movement/js/movement.js")%>" type="text/javascript"></script>
	<script><!--
	function SaveBook() {
		<% 
		Dim nStudID, strElName, i
		If bConditionalMoving And IsArray(arrStudsRequiredDate) Then%>

			var reqStudentIds = <%=comHelper.JsonHelper.SerializeObject(arrStudsRequiredDate)%>;
			var dateInputs = $("input[name*=PassDate_]");
			var minDate = <%=Date2Js(dtConditMove_Start)%>;
			var maxDate = <%=Date2Js(dtConditMove_End)%>;
			
			var invalidDateMsg_Range = language.Generic.Common.kErrInvalidDateInRange.replace("{0}", date2str(minDate)).replace("{1}", date2str(maxDate));
			var invalidDateMsg_RangeAndEmpty = invalidDateMsg_Range + "\n" + language.Generic.Common.kInvalidDateNotEmpty;

			var valid = true;
			dateInputs.each(function(){
				var dateinput = this;
				var studentId = parseInt(dateinput.name.split("_")[1]);
				var required = reqStudentIds.indexOf(studentId) > -1;
				var dateInfo = getDateFilterInfo(dateinput.name);
				valid = dateInfo.checkDateInterval(minDate, maxDate, required ? invalidDateMsg_RangeAndEmpty : invalidDateMsg_Range, !required);
				if (!valid)
					return false;
			})

			if (!valid)
				return false;
		<%
		End If%>

		var saveForm = document.forms['MainForm'];
		jsSaveForm(saveForm).then(function(response){
			Back();
		});
	}

	function Back() {
		goBack( document.MainForm, '<%=strBackPage%>' );
	}
	//-->
	</script><%
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact form-inline"
End Function

Sub DrawFilters(strForm)
	Dim bIsDrawSubType, strDocSubType

	Call DrawReadonlyRow(obLanguage("Movement","kDocType"), strDocTypeName)

	bIsDrawSubType = GetSafeBool(obTokenMgr.GetData(strToken, stDrawSubType), False)
	If bIsDrawSubType Then
		strDocSubType = GetTitleDocSubTypeYear(nDocSubType)
		Call DrawReadonlyRow(obLanguage("Movement","kDocSubType"), strDocSubType)
	End If

	Call DrawReadonlyRow(obLanguage("Movement","kDocNumber"), strDocNumber)
	Call DrawReadonlyRow(obLanguage("Movement","kDocDate"), Date2Str(dtDocDate))

	If nDocSubType <> kYearDocSubType_NotEnrolled Then
		Dim strFilter

		If CLng(strClassID) > 0 Then 
			strFilter = objNSNET.GetClassName(strClassID)
		Else 
			strFilter = obLanguage("Filter","kNotEnrolled")
		End If

		Call DrawReadonlyRow(obLanguage("Common","kClass",strFunctionalityType), strFilter)
		Call DrawReadonlyRow(obLanguage("Movement", "kClassEnroll", strFunctionalityType), strTmpClassName)
	End If
End Sub

Sub DrawButtons()
	If nSubDocID <> 0 And ((nDocType = kDocType_GRADUATE) Or bConditionalMoving) Then
		If (Not readonly) Or bEditingConditionalMoving Then 
			ButtonSave "SaveBook();", obLanguage("Common","kSave")
		End If
	End If
End Sub

Sub onDrawPage()
	bExit = False%>

	<FORM NAME="MainForm" ACTION="SaveMoveSubDoc.asp" METHOD="POST" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DOCTYPE", nDocType, "DOCID", nDocID, "DOCSUBTYPE",nDocSubType,"BACK", strBackPage, "SaveMode", ""))%><%

		Call DrawButtonsFilters(True, "MainForm")%>

		<div class="row">
			<div class="col-md-12">
				<%
				If Not bExit Then DrawStudents
				rw WriteHiddenTags(Array("DOCTYPEFILTER", nDocTypeFilter, "SUBDOCID", nSubDocID))
				%>
			</div>
		</div>
	</FORM><%
End Sub

Sub DrawStudents()
	Dim nColNum
	Dim strPassDate
	Dim bOpenedCondition
	Dim nIndex

	If Not readonly Then Call GetDepartReasons(nDocType, nTmpFuncType, nStep)
	If nDocType = kDocType_GRADUATE Then 
		Call InitMoveEOs_Js(nDocType, strSchoolID, nTmpFuncType, nStep)
		Call DrawOutSideTypesScript(strSchoolID)
	End If%>

	<table class="table table-bordered table-xs table-hover table-middle-cells table-striped table-thin">
		<%
		Dim strEOID, strClasses%>

		<tr>
		<th><%=obLanguage("Filter","kN_PP")%></th>
		<th><%=obLanguage("Common","kDisplayName")%></th><%

		If nDocType = kDocType_GRADUATE Then
			If Not bPreSchool And nGrade <> nGradeJunior_Max Then%><th><%=obLanguage("SetupSchoolCalendar","kAward",strFunctionalityType)%></th><%End If
			If bConditionalMoving Then%><th><%=obLanguage("Movement","kPassDebtDate")%></th><%End If%>
			<th><%If Not bAddSchool Then%><%=obLanguage("Movement","kDepartTo")%><br><%End If%><%=obLanguage("Movement","kDepartReason")%></th>
			<%Call DrawEditColumnHeader(1)%></tr><%
			nIndex = 0

			While Not objDocStudents.EOF
				strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)
				nIndex = nIndex + 1%>
				<tr>
					<td><%=nIndex%></td>
					<td><%=DB2HTML(objDocStudents("NICKNAME"))%><input type="hidden" name="AWARD___<%=strStudentID%>" value="<%=objDocStudents("AWARDTYPE")%>"></td><%

					If Not bPreSchool And nGrade <> nGradeJunior_Max Then
						If Not readonly Then
							Call DrawAwardList(strStudentID, objDocStudents("AWARDTYPE"))
						Else
							Call DrawAward(objDocStudents("AWARDTYPE"))
						End If
					End If
							
					If bConditionalMoving Then%>
						<td><%
							Call DrawPassDate(strStudentID, objDocStudents)%>
						</td><%
					End If%>

					<td id="STUDENT_<%=strStudentID%>"><%
						If Not bAddSchool Then
							strEOID = objDocStudents("EOID")
							Call DrawSelectEOs(strStudentID, strEOID)
							RW "<br class='mini'>"
							Call DrawSelectOST(strStudentID, objDocStudents("OUTSIDETYPE"), objDocStudents("OUTSIDETYPENAME"))
							RW "<br class='mini'>"
						End If
						nReasonID = GetSafeLng(objDocStudents("REASON"), -1)
						Call DrawSelectReasons(kDocType_GRADUATE, strStudentID, nReasonID)
						%><input type="hidden" name="incStudent" value="<%=strStudentID%>">
					</td><%

					Call DrawEditColumnCell(strStudentID)%>
				</tr><%

				objDocStudents.MoveNext
			WEnd
		Else
			If bConditionalMoving Then%><th><%=obLanguage("Movement","kPassDebtDate")%></th><%End If

			While Not objDocStudents.EOF
				strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)
				nIndex = nIndex + 1%>
				<tr>
					<td><%=nIndex%></td>
					<td><%=DB2HTML(objDocStudents("NICKNAME"))%></td><%
					If bConditionalMoving Then%>
						<td><%
							Call DrawPassDate(strStudentID, objDocStudents)%>
							<input type="hidden" name="incStudent" value="<%=strStudentID%>">
						</td><%
					End If%>
				</tr><%

				objDocStudents.MoveNext
			WEnd
		End If

		Call objNSNET.DisposeCommand(cmdSubDocStudents)

		%>
	</table><%
End Sub

Function IsOpenedCondition(objList)
	Dim bOpenedCondition

	bOpenedCondition = False
	If bCommonSchool And bEnrolled Then
		' Проверяем, есть ли незакрытая "условность". Смотрим только обычные школы, и зачисленных в классы.
		bOpenedCondition = Not IsDull(objList("COND_MOV_STUDID")) And IsDull(objList("PASSDATE")) And IsDull(objList("CLS_STAY_STUDID"))
	End If
	IsOpenedCondition = bOpenedCondition
End Function

Sub DrawPassDate(theStudentID, objRs)
	Dim strPassDate
	Dim bHasTransferDocSimple, bHasTransferDocStay

	bHasTransferDocSimple = (GetSafeLng(objRs("HasTransferDocSimple"), 0) = 1)
	bHasTransferDocStay = (GetSafeLng(objRs("HasTransferDocStay"), 0) = 1)

	If bHasTransferDocStay Then
		RW obLanguage("Movement","kClassesDocSubTypeName_Stay")
		RW WriteHiddenTags(Array("PassDate_" & theStudentID, ""))
	Else
		If IsDull(objRs("PASSDATE")) Then
			strPassDate = ""
		Else
			strPassDate = objRs("PASSDATE")
		End If

		If bEditingConditionalMoving Then
			Call DrawDateInput("PassDate_" & theStudentID, strPassDate, obLanguage("Movement","kPassDebtDate"))
		Else
			RW Date2Str(objRs("PASSDATE"))
		End If
	End If
End Sub

Sub DrawAwardList(theStudentID, nAward)%>
	<td><%
		Call DrawSelectArr(arrAward, "AWARD" & theStudentID, nAward, Null, "")%>
	</td><%
End Sub

Sub DrawGraduateColumns(theStudentID)
	If Not bPreSchool And nGrade <> nGradeJunior_Max Then
		Call DrawAwardList(theStudentID, nAwardDefault)
	End If%>

	<td><%
		If Not bAddSchool Then
			Call DrawSelectEOs(strStudentID, -1)
			%><br class='mini'><%
			Call DrawSelectOST(strStudentID, 0, "В пределах города")
			%><br class='mini'><%
		End If
		Call DrawSelectReasons(nDocType, strStudentID, "")%>
	</td><%

	Call DrawEditColumnCell(strStudentID)
End Sub

Sub DrawEditColumnCell(strStudentID)
	If readonly Then Exit Sub%>
	
	<td align="center"><%
		rw "<a href=""javascript:void(0);"" style=""text-decoration: none;"" onclick=""javascript:editStudentMoveInfo(" & strStudentID & ", this," & IIF(bEditReferences, "true", "false") & ")""><i class=""icon-edit""></i></a>"%>
	</td><%
End Sub

Sub DrawEditColumnHeader(nRowSpan)
	If readonly Then Exit Sub%>
	
	<th rowspan="<%=nRowSpan%>">&nbsp;</th><%
End Sub

Function onLoad()
	Dim strError

	OnLoad = ""

	If CLng(strFunctionalityType) = kFuncType_Common And nDocType = kDocType_GRADUATE Then
		onLoad = OnLoad & "JavaScript:correctArrEOTypeReasons('" & nStep & "');"
	End IF
End Function
%>