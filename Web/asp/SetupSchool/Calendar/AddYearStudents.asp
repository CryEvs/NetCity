<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/timeBoxes.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/YearMoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/MoveMent/MoveBookPlaceReasons_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strDocID, bNewDoc, objDocInfo, nSubDocID
Dim dtDocDate, nDocType, strDocNumber, strDocTypeName, objNAList
Dim strStudentID, bEmptyStudents
Dim nDocTypeFilter, bAll, strBackPage
Dim nReasonID, objDepartReasons, strParamVal, strEOVal, objMovEOS
Dim arr, strTmpClassName
Dim nFutureClassID, nFutureGrade, nDocSubType, bDisablecheckAllStudents
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
	If nSubDocID = 0 Then
		GetPageTitle = obLanguage("Movement","kAddStudentsToDoc",strFunctionalityType)
	Else
		GetPageTitle = IIF((nDocType = kDocType_GRADUATE) Or bConditionalMoving, obLanguage("Movement","kEditStudentsInDoc",strFunctionalityType), obLanguage("Movement","kDelStudentsFromDoc",strFunctionalityType))
	End If
End Function

Sub ReadState()
	Dim objForm
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
	If nDocType < 0 Then nDocType = kDocType_YEAR
	nDocSubType		= CINT(Request("DOCSUBTYPE"))
	Call GetDocInfo(nDocType, strDocTypeName)
	nSubDocID				= GetSafeLng(Request("SUBDOCID"), 0)
	strDocID				= GetSafeID(Request("DOCID"), "0")
	bNewDoc					= (strDocID = "0")
	nFutureYearID			= objNSNET.GetSchoolFutureYear(strSchoolID)
	bFutureYearPresent		= (nFutureYearID <> 0)
	bEditingInFutureYear	= (Request("OE").Count > 0)
	readonly				= Not bFutureYearPresent

	bConditionalMoving = (nDocSubType = kYearDocSubType_Conditional)
	bEditingConditionalMoving = bConditionalMoving

	If Not readonly Then readonly = Not IsWorkYear()
	If bEditingInFutureYear Then readonly = False

	If bAddSchool And Not readonly Then
		readonly = Not bFutureYearPresent
	End If

	'места и причины выбытия выпускников можно редактировать до окончания второго периода по движению в новом году.
	If (nDocType = kDocType_GRADUATE And bEditingInFutureYear And Not readonly) Or bConditionalMoving Then
		Dim objTmpMovPeriods, objTmpYearInfo, nGlobalYearID, nInitailGlobalYearID, nSchYID, nDocGYID

		Set objTmpYearInfo = objNSNET.GetYearInfo(strCurrYearID)
		nInitailGlobalYearID = Clng(objTmpYearInfo("GLOBALYEARID"))
		nGlobalYearID = nInitailGlobalYearID
		If objTmpYearInfo("CLOSED")="Y" Then nGlobalYearID = nInitailGlobalYearID + 1
		Set objTmpMovPeriods = objNSNET.GetMovePeriodsInfo(nGlobalYearID)

		If nDocType = kDocType_GRADUATE And bEditingInFutureYear And Not readonly Then
			objTmpMovPeriods.MoveNext

			If NSNow() > CDate(objTmpMovPeriods("ENDDATE")) Then
				readonly = True
				bEditingInFutureYear = False
			End If
		End If

		If bConditionalMoving Then
			If Not bNewDoc Then
				nSchYID = objNSNET.GetSchoolYearBySchoolAndGlobalYear(strSchoolID, nInitailGlobalYearID + 1)
				If nSchYID <> 0 Then
					Set objTmpYearInfo = objNSNET.GetYearInfo(nSchYID)
					If Not objTmpYearInfo.EOF Then
						If objTmpYearInfo("CLOSED") = "Y" Then
							readonly = True
							bEditingConditionalMoving = False
						End If
					End If
				End If
			End If

			If nDocType = kDocType_YEAR And bEditingInFutureYear Then
				readonly = True ' В этом случае Дата сдачи задолженности редактируется только через bEditingConditionalMoving
			End If

			If bNewDoc Then
				nDocGYID = nInitailGlobalYearID + 1
			Else
				Set objDocInfo = objNSNET.GetMoveDocInfo(strDocID)
				' Здесь условное движение при переходе на след. год, поэтому сдавать задолженность можно в граничных датах уже для следующего года ().
				nDocGYID = GetSafeLng(objDocInfo("GLOBALYEARID"), Null) + 1
			End If
			Set objTmpMovPeriods = objNSNET.GetMovePeriodsInfo(nDocGYID)
			objTmpMovPeriods.MoveFirst
			dtConditMove_Start = CDate(objTmpMovPeriods("STARTDATE"))
			objTmpMovPeriods.MoveLast
			dtConditMove_End = CDate(objTmpMovPeriods("ENDDATE"))
		End If
	End If

	Set objForm = Server.CreateObject( "NetCity.Storage" )
	objForm.Add "DOCID", strDocID
	objForm.Add "DOCDATE", dtDocDate
	objForm.Add "DOCTYPE", nDocType
	objForm.Add "DOCNUMBER", strDocNumber
	objForm.Add "BACK", strBackPage
	objForm.Add "DOCSUBTYPE", nDocSubType

	If nDocSubType <> kYearDocSubType_NotEnrolled Then
		If nSubDocID = 0 Then
			strClassID = GetSafeLng(Request("PCLID"), 0)
			nFutureClassID = Clng( Request("FUTURECLASSID"))
			objForm.Add "PCLID", strClassID
			objForm.Add "FUTURECLASSID", nFutureClassID
		Else
			Set objDocInfo = objNSNET.GetYearSubDocInfo(nSubDocID)
			strClassID = GetSafeLng(objDocInfo("CLASSID1"), 0)
			If nDocType <> kDocType_GRADUATE Then nFutureClassID = GetSafeLng(objDocInfo("CLASSID2"), Null)
		End If

		If nDocType = kDocType_GRADUATE Then
			strTmpClassName = obLanguage("Common","kLastGradeName")
		Else
			strTmpClassName = objNSNET.GetClassName(nFutureClassID)
		End If
	Else
		If nSubDocID = 0 Then
			strClassID = GetSafeLng(Request("PCLID"), -1)
			nFutureGrade = Clng( Request("FUTUREGRADE"))
			objForm.Add "PCLID", strClassID
			objForm.Add "FUTUREGRADE", nFutureGrade
		Else
			Set objDocInfo = objNSNET.GetYearSubDocInfo(nSubDocID)
			strClassID = GetSafeLng(objDocInfo("CLASSID1"), -1)
			nFutureGrade=objDocInfo("GRADETO")
		End If

		strTmpClassName = nFutureGrade
	End If
	Call obTokenMgr.SetData(strToken,"Y_dct", objForm)

	nGrade = -1
	nStep = -1
	If strClassID > 0 Then
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

	If nDocType = kDocType_GRADUATE And Not bAddSchool Then
		If Not bPreSchool And nGrade <> nGradeJunior_Max Then
			Call InitAwardArray(nGrade = nGradeMiddle_Max, bConditionalMoving)
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
	If strClassID = "-1" Then
		bEnrolled = False
		Set objNAList = objNSNET.GetNonAdvancedNotEnrolledStudentList(strCurrYearID)
		If objNAList.EOF Then bAll=False : strClassID="0" Else bAll = True : strClassID="-1"
	Else
		bEnrolled = True
		If nDocType = kDocType_GRADUATE And CLng(strFunctionalityType)<>kFuncType_Add Then
			If Not bPreSchool And nGrade = nGradeJunior_Max Then
				' Для школ (точнее - не детсадов), если выпуск из младшей ступени, то действуем как для детсадов
				nTmpFuncType = kFuncType_PreSchool
			End If
		End If

		If nSubDocID = 0 Then
			Set objNAList = objNSNET.GetNonAdvancedClassStudentList(strClassID, strCurrYearID)
		Else
			Set cmdSubDocStudents = objNSNET.GetMoveSubDocStudents_Prepare(strCurrYearID, nDocType)
			Set objDocStudents = objNSNET.GetMoveSubDocStudents_Execute(cmdSubDocStudents, nSubDocID)

			bAllTransferDocStay = False
			If bConditionalMoving And bEditingConditionalMoving And Not objDocStudents.EOF Then
				nCountTransferDocStay = 0
				ReDim arrStudsRequiredDate(-1)
				While Not objDocStudents.EOF
					bHasTransferDocStay = (GetSafeLng(objDocStudents("HasTransferDocStay"), 0) = 1)
					If bHasTransferDocStay Then
						nCountTransferDocStay = nCountTransferDocStay + 1
					End If

					bHasTransferDocSimple = (GetSafeLng(objDocStudents("HasTransferDocSimple"), 0) = 1)
					If bHasTransferDocSimple Then ' У таких нельзя удалять дату ликвидации задолженности
						strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)
						nUBound = UBound(arrStudsRequiredDate)
						ReDim Preserve arrStudsRequiredDate(nUBound + 1)
						arrStudsRequiredDate(nUBound + 1) = CLng(strStudentID)
					End If
					objDocStudents.MoveNext
				WEnd
				objDocStudents.MoveFirst
				bAllTransferDocStay = (nCountTransferDocStay = objDocStudents.RecordCount)
				If bAllTransferDocStay Then
					bEditingConditionalMoving = False
				End If
			End If
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
	<script language="JavaScript" src="/asp/SetupSchool/Movement/Movement.js"></script>
	<script><!--
	function CanAddStudents() {
		var i, form = document.MainForm;
		var elStudents = form.delStudent;

		var bChecked = false;
		if(!elStudents)
			elStudents = form.incStudent;

		if(elStudents) {
			if(elStudents.length){
				for(i = 0; i < elStudents.length; i++)
					if(elStudents[i].checked) {
						bChecked = true;
						break;
					}
			}
			else {
				if(elStudents.checked)
					bChecked = true;
			}
		}

		if(!bChecked){
			alert(language.SetupSchoolCalendar.kSelectStudents);
			return false;
		}

		return true;
	}
	function checkAll(bDel) {
		var form = document.MainForm;
		var elCheckAll = form.checkAllStudents;
		var elStudents = form.incStudent;

		if(bDel) elStudents = form.delStudent;

		if (!elStudents)
			return;

		if(elStudents.length) {
			for(i = 0; i < elStudents.length; i++)
				elStudents[i].checked = elCheckAll.checked;
		}
		else
			elStudents.checked = elCheckAll.checked;

		dataChanged();
	}

	function AddStudents(sSaveMode) {
		if (CanAddStudents()) {
			document.MainForm.elements["SaveMode"].value = sSaveMode;
			ok_check_db( "MainForm", "SaveYearMoveBook.asp" );
		}
	}

	function SaveBook() {<% 
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

		document.MainForm.elements["SaveMode"].value = "SAVE";
		ok_check_db( "MainForm", "SaveYearMoveBook.asp" );
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
		If (Not readonly) Or bEditingConditionalMoving Then ButtonSave "SaveBook();", obLanguage("Common","kSave")
	End If

	If nSubDocID = 0 Then
		ButtonAdd "AddStudents('SAVE')", obLanguage("Movement","kAddStudentsToDoc",strFunctionalityType)
	Else
		If Not readonly And Not bEditingInFutureYear Then ButtonDel "AddStudents('DELETESTUDENTS')", obLanguage("Movement","kDelStudentsFromDoc",strFunctionalityType)
	End If
End Sub

Sub onDrawPage()
	bExit = False%>

	<FORM NAME="MainForm" ACTION="YearMoveBookEdit.asp" METHOD="POST" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DOCTYPE", nDocType, "DOCID", strDocID, "DOCSUBTYPE",nDocSubType,"BACK",strBackPage,"SaveMode", ""))%><%

		Call DrawButtonsFilters(True, "MainForm")%>

		<div class="row">
			<div class="col-md-12"><%
				If Not bExit Then DrawStudents
				If Not bNewDoc Then WriteHiddenTags(Array("DOCTYPEFILTER", nDocTypeFilter, "SUBDOCID", nSubDocID))%>
			</div>
		</div>
	</FORM><%
End Sub

Sub DrawStudents()
	Dim nColNum
	Dim strPassDate
	Dim bOpenedCondition

	If Not readonly Then Call GetDepartReasons(nDocType, nTmpFuncType, nStep)
	If nDocType = kDocType_GRADUATE And CLng(strFunctionalityType) <> kFuncType_Add Then 
		Call GetMoveEOs(nDocType, strSchoolID, nTmpFuncType, arrMovEOS, nStep)
		Call GetOutsideTypes(strSchoolID)
	End If%>

	<table class="table table-bordered table-xs table-hover table-middle-cells table-striped table-thin"><%
		If nSubDocID = 0 Then%>
			<tr>
				<th style="width: 10%;"><%=obLanguage("SetupSchoolCalendar","kInclude")%></th>
				<th><%=obLanguage("Common","kDisplayName")%></th><%

				If nDocType = kDocType_GRADUATE And CLng(strFunctionalityType) <> kFuncType_Add Then
					nColNum = nColNum + 4

					If Not bPreSchool And nGrade <> nGradeJunior_Max Then%><th rowspan="2"><%=obLanguage("SetupSchoolCalendar","kAward")%></th><%End If%>

					<th rowspan="2"><%=obLanguage("Movement","kDepartTo")%><br><%=obLanguage("Movement","kDepartReason")%></th><%
					
					Call DrawEditColumnHeader(2)
					Response.Write "</tr><tr><th><INPUT TYPE=""checkbox"" NAME=""checkAllStudents"" OnClick=""checkAll(0);""></th><th>" & obLanguage("Filter","kAllStudents",strFunctionalityType) & "</th></TR>"

					While Not objNAList.EOF
						strStudentID = objNAList("STUDENTID")
						bOpenedCondition = IsOpenedCondition(objNAList)%>

						<tr><%
							If bOpenedCondition Then%>
								<td align="center" title="<%=obLanguage("Movement","kUnresolvedConditionalMove")%>">X</td><%
							Else%>
								<td align="center"><input type="checkbox" name="incStudent" value="<%=strStudentID%>" OnClick="dataChanged();"></td><%
							End If%>
							<td><%=DB2HTML(objNAList("NICKNAME"))%></td><%
							Call DrawGraduateColumns(strStudentID)%>
						</tr><%

						objNAList.MoveNext()
					WEnd
				Else
					Response.Write "</tr>"
					Response.Write "<tr><th><INPUT TYPE=""checkbox"" NAME=""checkAllStudents"" OnClick=""checkAll(0);""></th><th>"&obLanguage("Filter","kAllStudents",strFunctionalityType)&"</th></TR>"
					
					While Not objNAList.EOF
						bOpenedCondition = IsOpenedCondition(objNAList)%>
						<tr><%
							If bOpenedCondition Then%>
								<td align="center" title="<%=obLanguage("Movement","kUnresolvedConditionalMove")%>">X</td><%
							Else%>
								<td align="center"><input type="checkbox" name="incStudent" value="<%=objNAList("STUDENTID")%>" OnClick="dataChanged();"></td><%
							End If%>
							<td><%=DB2HTML(objNAList("NICKNAME"))%></td>
						</tr><%
						
						objNAList.MoveNext()
					WEnd
				End If
		Else ' nSubDocID <> 0

			Dim strEOID, strClasses%>

			<tr><%If Not readonly And Not bEditingInFutureYear Then%><%=ShowDelCellHeader(1)%><%End If%>
			<th><%=obLanguage("Common","kDisplayName")%></th><%

			If nDocType = kDocType_GRADUATE And CLng(strFunctionalityType) <> kFuncType_Add Then
				If Not bPreSchool And nGrade <> nGradeJunior_Max Then%><th><%=obLanguage("SetupSchoolCalendar","kAward")%></th><%End If
				If bConditionalMoving Then%><th><%=obLanguage("Movement","kPassDebtDate")%></th><%End If%>
				<th><%=obLanguage("Movement","kDepartTo")%><br><%=obLanguage("Movement","kDepartReason")%></th><%

				Call DrawEditColumnHeader(1)%></tr><%

				If Not readonly Then
					If Not bEditingInFutureYear Then
						Response.Write _
							"<tr>" & _
								"<th><INPUT TYPE=""checkbox"" NAME=""checkAllStudents"" OnClick=""checkAll(1);""></th>" & _
								"<th>" & obLanguage("Filter","kAllStudents",strFunctionalityType) & "</th>" & _
								IIf(Not bPreSchool And nGrade <> nGradeJunior_Max, "<th>&nbsp;</th>", "") & _
								IIf(bConditionalMoving, "<th>&nbsp;</th>", "") & _
								"<th>&nbsp;</th><th>&nbsp;</th>" & _
							"</tr>"
					End If
				End If

				While Not objDocStudents.EOF
					strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)%>

					<tr><%
						If Not readonly Then
							If Not bEditingInFutureYear Then%>
								<td align="center">
									<input type="checkbox" name="delStudent" value="<%=strStudentID%>" OnClick="dataChanged();">
								</td><%
							End If
						End If%>

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
							strEOID = objDocStudents("EOID")
							Call DrawSelectEOs(arrMovEOS, strStudentID, strEOID)
							RW "<br class='mini'>"
							Call DrawSelectOST(strStudentID, objDocStudents("OUTSIDETYPE"), objDocStudents("OUTSIDETYPENAME"))
							RW "<br class='mini'>"
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

				If Not readonly Then
					Response.Write "<tr><th><INPUT TYPE=""checkbox"" NAME=""checkAllStudents"" OnClick=""checkAll(1);""></th><th>" & _
						obLanguage("Filter","kAllStudents",strFunctionalityType) & "</th>" & _
						IIf(bConditionalMoving, "<th>&nbsp;</th>", "") & "</tr>"
				End If
				bDisablecheckAllStudents = true

				While Not objDocStudents.EOF
					strStudentID = GetSafeID(objDocStudents("STUDENTID"), Null)%>
					<tr><%
						If Not readonly Then%>
							<td align="center"><%
								If nDocType <> kDocType_Year And nDocType <> kDocType_Stay Then
									bDisablecheckAllStudents = false
									%><input type="checkbox" name="delStudent" value="<%=strStudentID%>" OnClick="dataChanged();"><%
								ElseIf objDocStudents("NOT_AVAILABLE_TO_MOVE")=0 Then
									bDisablecheckAllStudents = false
									%><input type="checkbox" name="delStudent" value="<%=strStudentID%>" OnClick="dataChanged();"><%
								Else
									%><span style="cursor:help;" onclick="alert(language.Generic.Movement.kNotAvailableToMove);"><b>X</b></span><%
								End If%>
							</td><%
						End If%>
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
		End If

		If bDisablecheckAllStudents Then%>
			<script>
				if (document.MainForm.checkAllStudents)
					document.MainForm.checkAllStudents.disabled = true;

				if (document.MainForm.btn_delete) {
					$(document.MainForm.btn_delete.parentNode).removeAttr("onclick");
					$(document.MainForm.btn_delete.parentNode).removeAttr("href");
					$(document.MainForm.btn_delete.parentNode).css('cursor', '');

					document.MainForm.btn_delete.style.visibility = "hidden";
				}
			</script><%
		End IF%>
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
		Call DrawSelectEOs(arrMovEOS, strStudentID, -1)
		%><br class='mini'><%
		Call DrawSelectOST(strStudentID, 0, "В пределах города")
		%><br class='mini'><%
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