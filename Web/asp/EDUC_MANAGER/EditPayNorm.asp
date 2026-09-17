<!-- #INCLUDE FILE="em_screen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kMaxLen_RuleResol = 1000
Const kMaxLen_Comment = 300

Const kMax_NormVal = 999.99
Const kMax_NormVal_js = "999.99"


Dim strPNID
Dim bNewTable
Dim objDOUPayNormInfo, strPayNormTitle, dtStartDate
Dim objPayNorms
Dim nStartMonth, nStartYear
Dim nPayNormCnt

Dim nStartYear_Min, nStartYear_Max
Dim nYearToday
Dim bFirstTable ' этот флажок означает, что редактируется или создаётся самая первая таблица
Dim dtStartDate_LastTable
Dim strErrStartDate_MustBeLaterPrevTable
Dim strErrStartDate_LaterUsedPrevTable
Dim strErrStartDate_NotLaterUsedTable
Dim strPNID_Prev
Dim dtUsedMaxPrev, dtUsedMinThis
Dim bTableIsUsed

Function GetPageTitle()
	GetPageTitle = obLanguage("EM","kTitleEditPayNorms")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Management
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_DOUPay
 End Function

Sub ReadState()
	strPNID = GetSafeID(Request("EditPNID"), GetSafeID(obTokenMgr.GetData(strToken, stPayNormID), "0"))
	bNewTable = (strPNID = "0")
End Sub

Sub Main()
	Call InitYears()
	
	strPayNormTitle = ""
	nStartMonth = 1
	nStartYear = nYearToday

	nPayNormCnt = 0
	bTableIsUsed = False
	If Not bNewTable Then
		Set objDOUPayNormInfo = objNSNET.GetDOUPayNormInfo(strPNID)
		If objDOUPayNormInfo.EOF Then
			GenerateError obLanguage("Common","kUnexpErr")
		End If

		strPayNormTitle		= GetSafeStr(objDOUPayNormInfo("PAYNORMTITLE"), -1, Null)
		dtStartDate			= CDate(objDOUPayNormInfo("STARTDATE"))
		nStartMonth			= Month(dtStartDate)
		nStartYear			= Year(dtStartDate)
		bTableIsUsed		= Not IsDull(objDOUPayNormInfo("USED"))

		Set objPayNorms = objNSNET.GetPayNorms(strPNID)

		nPayNormCnt = objPayNorms.RecordCount
	End If

End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stPayNormID, strPNID)
End Sub

Function F_Min(n1, n2)
	F_Min = IIf(n1 <= n2, n1, n2)
End Function

Function F_Max(n1, n2)
	F_Max = IIf(n1 <= n2, n2, n1)
End Function

Sub InitYears
	Dim objDOUPayNorms, objGlobalYears, bNoGlobalYears
	Dim nGlobalYear_Min, nStartYear_LastTable
	Dim dtToday

	dtToday = NSNow()
	nYearToday = Year(dtToday)

	Set objDOUPayNorms = objNSNET.GetDOUPayNorms(strEMID) ' order by STARTDATE desc
	bFirstTable = objDOUPayNorms.EOF

	strPNID_Prev = "0"
	If Not bFirstTable Then
		If Not bNewTable Then
			objDOUPayNorms.MoveNext
		End If

		If Not objDOUPayNorms.EOF Then
			strPNID_Prev = GetSafeID(objDOUPayNorms("PAYNORMID"), Null)
		End If

		If Not bNewTable Then
			bFirstTable = objDOUPayNorms.EOF
		End If
	End If

	If bFirstTable Then
		Set objGlobalYears = objNSNET.GetGlobalYears(0) ' order by STARTDATE desc
		bNoGlobalYears = objGlobalYears.EOF
		If bNoGlobalYears Then
			nStartYear_Min = nYearToday - 3
		Else
			objGlobalYears.MoveLast
			nGlobalYear_Min = Year(CDate(objGlobalYears("STARTDATE")))
			nStartYear_Min = F_Min(nYearToday - 3, nGlobalYear_Min)
		End If
		nStartYear_Max = nYearToday + 1
	Else
		dtStartDate_LastTable = CDate(objDOUPayNorms("STARTDATE"))
		nStartYear_LastTable = Year(dtStartDate_LastTable)

		nStartYear_Min = nStartYear_LastTable
		nStartYear_Max = F_Max(nYearToday, nStartYear_LastTable) + 1
		strErrStartDate_MustBeLaterPrevTable = obLanguage("EM","kErrStartDate_MustBeLaterPrevTable") & " (" & Date2Str(dtStartDate_LastTable) & ")"
	End If

	dtUsedMaxPrev = Null
	dtUsedMinThis = Null
	Call objNSNET.GetDOUPayNorm_UsedLimits(strPNID, strPNID_Prev, dtUsedMaxPrev, dtUsedMinThis)
	If Not IsDull(dtUsedMaxPrev) Then
		strErrStartDate_LaterUsedPrevTable = obLanguage("EM","kErrStartDate_LaterUsedPrevTable") & " (" & Date2Str(dtUsedMaxPrev) & ")"
	End If
	If Not IsDull(dtUsedMinThis) Then
		strErrStartDate_NotLaterUsedTable = obLanguage("EM","kErrStartDate_NotLaterUsedTable") & " (" & Date2Str(dtUsedMinThis) & ")"
	End If
End Sub

Sub onHead()%>
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/Curriculum/Float_js_inc.asp" -->
<SCRIPT><!--
var bNew = <%=Bool2JS(bNewTable)%>;
var valEps = 0.000001;

<%If Not bFirstTable Then%>
	var dtStart_last = <%=Date2Js(dtStartDate_LastTable)%>;
<%End If%>

<%If Not IsDull(dtUsedMaxPrev) Then%>
	var dtUsedMax_prev = <%=Date2Js(dtUsedMaxPrev)%>;
<%End If%>

<%If Not IsDull(dtUsedMinThis) Then%>
	var dtUsedMin_this = <%=Date2Js(dtUsedMinThis)%>;
<%End If%>

//функция для валидации основной информации(месяц, год и Руководящее постановление) о таблице нормативов
function isValidMainInfo() {
	var form = document.forms.MainForm;

	var nStart_Year = getListValue(form.elements["Start_Year"]);
	var nStart_Month = getListValue(form.elements["Start_Month"]);
	var dtStart = dateUtils.getUTCDate(nStart_Year, nStart_Month - 1, 1);

	<%If Not bFirstTable Then%>
		if(dtStart <= dtStart_last) {
			alert('<%=strErrStartDate_MustBeLaterPrevTable%>');
			form.elements["Start_Month"].focus();

			return false;
		}
	<%End If%>

	<%If Not IsDull(dtUsedMaxPrev) Then%>
		if(dtStart <= dtUsedMax_prev) {
			alert('<%=strErrStartDate_LaterUsedPrevTable%>');
			form.elements["Start_Month"].focus();

			return false;
		}
	<%End If%>

	<%If Not IsDull(dtUsedMinThis) Then%>
		if(dtStart > dtUsedMin_this) {
			alert('<%=strErrStartDate_NotLaterUsedTable%>');
			form.elements["Start_Month"].focus();

			return false;
		}
	<%End If%>

	var sRuleResol = trimStr(form.elements["RuleResol"].value);
	if(sRuleResol == "") {
		alert(language.Generic.EM.kErrorEmptyRuleResol);
		form.elements["RuleResol"].focus();

		return false;
	}

	if(!checkAreaLength(form.elements["RuleResol"], <%=kMaxLen_RuleResol%>, '<%=obLanguage("EM","kRuleResolution")%>')) return false;

	return true;
}

function savePayNorm() {
	var form = document.forms.MainForm;

	if(!isValidMainInfo()) return;
	if(!bNew && !checkNorms(form)) return;

	form.ACT.value = 'save';
	jsSaveForm(form);
}

function addNorm() {
	var cancelBtn = function(dialog) { dialog.close(); };
	var addBtn = function(dialog) {
		if(!checkNewNorm()) return;

		<%If bNewTable Then %>
			var addNormForm		= document.forms.addNorm;
			var mainForm		= document.forms.MainForm;

			var nStart_Year		= getListValue(mainForm.elements["Start_Year"]);
			var nStart_Month	= getListValue(mainForm.elements["Start_Month"]);
			var strRuleResol	= $('textarea[name=RuleResol]').val();
			
			addNormForm.Start_Year.value = nStart_Year;
			addNormForm.Start_Month.value = nStart_Month;
			addNormForm.RuleResol.value = strRuleResol;
		<%End If%>

		$(document).trigger('showProcessing');
		ok('addNorm', 'SavePayNorm.asp');
	};

	var showDialog = function() {
		$.show.dialog({
			title: language.Generic.EM.kAddNewNorm,
			message: $('#addNormTmpl'),
			buttons: [{label: language.Generic.Buttons.kAdd, action: addBtn, cssClass: 'btn-primary'}]
		});
	}

	<%If bNewTable Then %>
		if(!isValidMainInfo()) return;
	<%End If%>

	<%If bNewTable Then %>
		showDialog();
	<%Else%>
		checkForChanges().then(showDialog);
	<%End If%>
}

function checkNorms(form){
	var elAbbrev = form.elements["Abbrev"];
	var elNormVal = form.elements["NormVal"];
	var elAverVal = form.elements["AverVal"];
	var elComment = form.elements["Comment"];

	var bError = false;
	if(elAbbrev.length) {
		bError = false;

		for(var i = 0; i < elAbbrev.length; i++) {
			var sAbbrev = trimStr(elAbbrev[i].value);
			var sNormVal = trimStr(elNormVal[i].value);
			var sAverVal = trimStr(elAverVal[i].value);
			var sComment = trimStr(elComment[i].value);

			if(sAbbrev == "") {
				elAbbrev[i].focus();
				bError = true;
			}
			else if(sNormVal == "") {
				elNormVal[i].focus();
				bError = true;
			}
			else if(sAverVal == "") {
				elAverVal[i].focus();
				bError = true;
			}
			else if(sComment == "") {
				elComment[i].focus();
				bError = true;
			}

			if(bError) {
				alert(language.Generic.EM.kDefineNorm);
				return false;
			}

			for(var j = i + 1; j < elAbbrev.length; j++) {
				var sAbbrevNext = trimStr(elAbbrev[j].value);

				if(sAbbrevNext.toUpperCase() == sAbbrev.toUpperCase()) {
					elAbbrev[i].focus();
					alert(language.Generic.EM.kErrorNormNamesTheSame);

					return false;
				}
			}

			if(!isCurrValValid(elNormVal[i])) return false;
			if(!isCurrValValid(elAverVal[i])) return false;
			if(!checkAreaLength(elComment[i], <%=kMaxLen_Comment%>, '<%=obLanguage("EM","kNormComment")%>')) return false;
		}
	}
	else {
		var sAbbrev = trimStr(elAbbrev.value);
		var sNormVal = trimStr(elNormVal.value);
		var sAverVal = trimStr(elAverVal.value);
		var sComment = trimStr(elComment.value);

		bError = false;
		if(sAbbrev == "") {
			elAbbrev.focus();
			bError = true;
		}
		else if(sNormVal == "") {
			elNormVal.focus();
			bError = true;
		}
		else if(sAverVal == "") {
			elAverVal.focus();
			bError = true;
		}
		else if(sComment == "") {
			elComment.focus();
			bError = true;
		}

		if(bError) {
			alert(language.Generic.EM.kDefineNorm);
			return false;
		}

		if(!isCurrValValid(elNormVal)) return false;
		if(!isCurrValValid(elAverVal)) return false;
		if(!checkAreaLength(elComment, <%=kMaxLen_Comment%>, '<%=obLanguage("EM","kNormComment")%>')) return false;
	}

	return true;
}

function isCurrValValid(elVal) {
	var fParseNormVal = str2floatEx(elVal);

	if(isNaN(fParseNormVal) || (fParseNormVal < (0 - valEps)) || (fParseNormVal > (<%=kMax_NormVal_js%> + valEps)) ) {
		alert(language.Generic.EM.kEnterNormSummFrom_0_To_ + "<%=( kMax_NormVal)%>");
		elVal.focus();

		return false;
	}

	return true;
}

function checkNewNorm() {
	var addNormForm = document.addNorm;
	var mainForm = document.MainForm;

	var sAbbrevNew = trimStr(addNormForm.elements["Abbrev_New"].value);
	var sNormVal = trimStr(addNormForm.elements["NormVal_New"].value);
	var sAverVal = trimStr(addNormForm.elements["AverVal_New"].value);
	var sComment = trimStr(addNormForm.elements["Comment_New"].value);
	var elAbbrev = mainForm.elements["Abbrev"];

	var bError = false;
	if(sAbbrevNew == "") {
		addNormForm.elements["Abbrev_New"].focus();
		bError = true;
	}
	else if(sNormVal == "") {
		addNormForm.elements["NormVal_New"].focus();
		bError = true;
	}
	else if(sAverVal == "") {
		addNormForm.elements["AverVal_New"].focus();
		bError = true;
	}
	else if(sComment == "") {
		addNormForm.elements["Comment_New"].focus();
		bError = true;
	}

	if(bError) {
		alert(language.Generic.EM.kDefineNewNorm);

		return false;
	}

	if($('input[name="Abbrev"]', mainForm).length) {
		if(elAbbrev.length) {
			for(var i = 0; i < elAbbrev.length; i++) {
				var sAbbrev = trimStr(elAbbrev[i].value);
				if(sAbbrevNew.toUpperCase() == sAbbrev.toUpperCase()) {
					addNormForm.elements["Abbrev_New"].focus();
					alert(language.Generic.EM.kErrorNormNamesTheSame);

					return false;
				}
			}
		}
		else {
			var sAbbrev = trimStr(elAbbrev.value);

			if(sAbbrevNew.toUpperCase() == sAbbrev.toUpperCase()) {
				addNormForm.elements["Abbrev_New"].focus();
				alert(language.Generic.EM.kErrorNormNamesTheSame);

				return false;
			}
		}
	}

	if(!isCurrValValid(addNormForm.elements["NormVal_New"])) return false;
	if(!isCurrValValid(addNormForm.elements["AverVal_New"])) return false;
	if(!checkAreaLength(addNormForm.elements["Comment_New"], <%=kMaxLen_Comment%>, '<%=obLanguage("EM","kNormComment")%>')) return false;

	return true;
}

function Back() {
	goBack(document.forms.MainForm, 'PayNorms.asp');
}

function deleteNormTable(){
	$.show.confirmation(language.Generic.EM.kConfirmOnDeleteNormsInfo).then(function() {
		var form = document.forms['MainForm'];
		form.ACT.value = 'deleteAll';

		$(document).trigger('showProcessing');
		DoSubmit(form, "SavePayNorm.asp");
	});
}

function deleteSelectedNorms() {
	var form = document.forms['MainForm'];
	var chkBox = form.elements.delNorm, chkItems = 0;

	if (chkBox) {
		if (chkBox.length) {
			for (var j = 0; j < chkBox.length; j++)
				if (chkBox[j].checked == true) {
					chkItems = chkItems + 1;
				}
		}
		else if (chkBox.checked == true) {
			chkItems = 1;
		}
	}

	if (chkItems > 0) {
		if(chkItems == <%=nPayNormCnt%>) {
			alert(language.Generic.EM.kErrCantDeleteAllNorms);
			return;
		}

		$.show.confirmation(language.Generic.EM.kConfirmOnDeleteSelectedNorms).then(function() {
			form.ACT.value = 'delete';

			$(document).trigger('showProcessing');
			DoSubmit(form, "SavePayNorm.asp");
		});
	}
	else {
		alert(language.Generic.Common.kErrMsgNoChecks); 
	}
}
//--></SCRIPT><%
End Sub

Sub onDrawPage()%>
	<FORM Name="MainForm" METHOD="POST" ACTION="SavePayNorm.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("EditPNID", "0", "ACT", "edit", "PNID_Prev", strPNID_Prev))%><%

		Call DrawButtonsFilters(True, "MainForm")
		
		If Not IsEmpty(objPayNorms) Then
			If Not objPayNorms.EOF Then%>
				<div class="row">
					<div class="col-md-10 col-lg-8"><%
						Call DrawNormsTable()%>
					</div>
				</div><%
			End If
		End If%>
	</FORM>
	
	<script id="addNormTmpl" type="text/html">
		<form class="form-horizontal" id="addNorm" name="addNorm" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("ACT", "add", "PNID_Prev", strPNID_Prev))%><%
			
			If bNewTable Then%>
				<%=WriteHiddenTags(Array("Start_Month", "", "Start_Year", "", "RuleResol", ""))%>
			<%End If

			SetFiltersWidth "", "col-md-4", "col-md-8"

			Call DrawInputTextRow(obLanguage("EM","kNorm"), "", "Abbrev_New", TextInputSize(10), 10, "dataChanged()", "")
			Call DrawInputTextRow(obLanguage("EM","kNormSumm"), "", "NormVal_New", TextInputSize(7), 7, "dataChanged()", "")
			Call DrawInputTextRow(obLanguage("EM","kNormAver"), "", "AverVal_New", TextInputSize(7), 7, "dataChanged()", "")
			Call DrawCheckBox(obLanguage("EM","kDouPayKind") & ", " & obLanguage("EM","kForNoAttendance"), "NoAttendance_New", "1", false, "dataChanged()")
			Call DrawInputRowEx(obLanguage("EM","kNormComment"), "", "Comment_New", "area", 80, 2, "", "")

			RestoreDefFiltersWidth%>
		</form>
	</script><%
End Sub

Sub DrawButtons()
	ButtonSave "savePayNorm();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")

	ButtonAdd "addNorm();", obLanguage("EM", "kAddNewNorm")
	If Not bNewTable Then
		If Not bTableIsUsed Then ButtonDel "deleteNormTable();", obLanguage("EM","kDeleteNormsInfo")
		If Not objPayNorms.EOF Then Call ButtonDelEx("deleteSelectedNorms()", obLanguage("EM","kDeleteSelectedNorms"), obLanguage("EM","kDeleteSelectedNorms"))
	End If
End Sub

Sub DrawFilters(strForm)
	SetFiltersWidth "", "col-md-5 col-lg-5", "col-md-7 col-lg-5"

	Call DrawStartNorms()
	Call DrawInputRow(obLanguage("EM","kRuleResolution"), strPayNormTitle, "RuleResol", "area", 70, 2, "")

	RestoreDefFiltersWidth
End Sub

Sub DrawStartNorms()
	Dim nYear, i
	Dim arrMonth

	ReDim arrMonths(12)
	arrMonths(1) = "Январь"
	arrMonths(2) = "Февраль"
	arrMonths(3) = "Март"
	arrMonths(4) = "Апрель"
	arrMonths(5) = "Май"
	arrMonths(6) = "Июнь"
	arrMonths(7) = "Июль"
	arrMonths(8) = "Август"
	arrMonths(9) = "Сентябрь"
	arrMonths(10) = "Октябрь"
	arrMonths(11) = "Ноябрь"
	arrMonths(12) = "Декабрь"

	OpenFormGroup obLanguage("EM","kStartNorms")%>
		<select name="Start_Month" onChange="dataChanged();" class="form-control form-control-inline">
			<%For i = 1 To 12%>
				<option value="<%=i%>" <%If i = nStartMonth Then%>selected<%End If%>><%=arrMonths(i)%></option>
			<%Next%>
		</select>
		<select name="Start_Year" onChange="dataChanged();" class="form-control form-control-inline">
			<%For nYear = nStartYear_Min To nStartYear_Max%>
				<option value="<%=nYear%>" <%If nYear = nStartYear Then%>selected<%End If%>><%=nYear%></option>
			<%Next%>
		</select><%
	CloseFormGroup
End Sub

Sub DrawNormsTable()
	Dim strNID
	Dim bUsed
	Dim bNoAttendance

	If bNewTable Then
		Call DrawInfo(obLanguage("EM","kNoNormsInTable"), False)
	Else%>
		<table class="table table-bordered table-xs table-hover table-middle-cells">
			<tr><th colspan="6"><%=obLanguage("EM","kNormsTable")%></th></tr>
			<tr class="text-center">
				<th><%=obLanguage("EM","kNorm")%></th>
				<th><%=obLanguage("EM","kNormSumm")%></th>
				<th><%=DB2HTML_BR(obLanguage("EM","kNormAver"))%></th>
				<th><%=obLanguage("EM","kDouPayKind")%></th>
				<th><%=obLanguage("EM","kNormComment")%></th>
				<%=ShowDelCellHeader(1)%>
			</tr><%

			While Not objPayNorms.EOF
				strNID = GetSafeID(objPayNorms("NORMID"), Null)
				bUsed = Not IsDull(objPayNorms("USED"))
				bNoAttendance = GetSafeBool(objPayNorms("NOATTENDANCE"), False)%>

				<tr class="text-center">
					<td>
						<input type="text" name="Abbrev" class="form-control" size="<%=TextInputSize(10)%>" maxlength="<%=10%>" value="<%=DB2Value(objPayNorms("ABBREV"))%>" OnChange="dataChanged()"><input type="hidden" name="NormID" value="<%=strNID%>"><input type="hidden" name="USED" value="<%=IIF(bUsed, 1, 0)%>">
					</td>
					<td>
						<input type="text" name="NormVal" class="form-control" size="<%=TextInputSize(7)%>" maxlength="<%=7%>" value="<%=CDbl(objPayNorms("NORMVAL"))%>" OnChange="dataChanged()" <%If bUsed Then%>disabled<%End If%>>
					</td>
					<td>
						<input type="text" name="AverVal" class="form-control" size="<%=TextInputSize(7)%>" maxlength="<%=7%>" value="<%=CDbl(objPayNorms("AVERVAL"))%>" OnChange="dataChanged()" <%If bUsed Then%>disabled<%End If%>>
					</td>
					<td>
						<INPUT TYPE="checkbox" NAME="NoAttendance_<%=strNID%>" VALUE="1" <%If bNoAttendance Then%> checked <%End If%> <%If bUsed Then%> disabled title="<%=obLanguage("Common","kEmploy")%>" <%Else%> OnClick="dataChanged()" <%End If%>>&nbsp;<%=obLanguage("EM","kForNoAttendance")%>
					</td>
					<td>
						<%=ShowTextArea("Comment", 2, 80, "", objPayNorms("COMMENT"))%>
					</td>
					<td align="center"><%
						If bUsed Then%>
							<INPUT TYPE="checkbox" checked disabled title="<%=obLanguage("Common","kEmploy")%>"><%
						Else%>
							<INPUT TYPE="checkbox" NAME="delNorm" VALUE="<%=strNID%>" OnClick="dataChanged()"><%
						End If%>
					</td>
				</tr><%

				objPayNorms.MoveNext
			WEnd%>
		</table><%
	End If
End Sub%>