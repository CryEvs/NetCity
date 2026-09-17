<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kMax_PayVal = 999999

Const kInd_NORMID = 0
Const kInd_ABBREV = 1
Const kInd_NORMVAL = 2
Const kInd_AVERVAL = 3
Const kInd_NOATTENDANCE = 4


Dim rsStudents
Dim bAll, bEditSelfViewAll
Dim strTeacherID
Dim bRight_arJournalEditAll

Dim bEmpty
Dim dtYearStart_1, dtYearEnd_1, dtYearEnd_30
Dim dtLastPayMonth, nMonthsCount

Dim nMonth, nYear, nNumMonth
Dim dtStartMonth, dtEndMonth
Dim bCanSave
Dim rsPayNorms, bEmptyPayNorms, arrPayNorms
Dim nDayInMonth
Dim strPayNormID
Dim bOutDebt
Dim strDecimalSymbol

Function hasUserRightsOnPage()
	bAll = True
	bRight_arJournalEditAll = HasUserRight(arJournalEditAll)
	If HasUserRight(arJournalEditAll) Then hasUserRightsOnPage =True :Exit Function
	If HasUserRight(arJournalViewAll) Then hasUserRightsOnPage =True :Exit Function

	bAll = False
	If HasUserRight(arJournalEditSelf) Then hasUserRightsOnPage =True :Exit Function
	hasUserRightsOnPage = HasUserRight(arJournalViewSelf)
End Function

Sub GetRightsOnPage()
	bEditSelfViewAll=False
	If readonly Then Exit Sub
	If HasUserRight(arJournalEditAll) Then Exit Sub
	If HasUserRight(arJournalEditSelf) Then
		If HasUserRight(arJournalViewAll) Then bEditSelfViewAll = True
	Else
		readonly = True
	End If
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kParentPayForMonth")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbParentPay
 	bTabInternalPage = True
End Function

Sub ReadState()
	Dim bIsClassChief
	Dim arrClasses, nCnt

	strTeacherID = strUserID

	strDecimalSymbol = GetDecimalSymbol()
	Call GetRightsOnPage()

	If bAll Then Call InitYearClassesAll() Else Call InitTeacherClasses(False)
	bOutDebt = (strClassID = "-1")
	If objClassesRs.EOF Then Exit Sub

	arrClasses = objClassesRs.GetRows(,,Array("CLASSID", "CLASSNAME"))
	If bAll Then
		nCnt = UBound(arrClasses, 2)
		nCnt = nCnt + 1
		ReDim Preserve arrClasses(1, nCnt)
		arrClasses(0, nCnt) = -1
		arrClasses(1, nCnt) = obLanguage("Grade","kOutDebt")
	End If
	' Сверху сделали из objClassesRs - arrClasses, в конец arrClasses добавляем ещё элемент, если надо.
	' Заменяем objClassesRs на arrClasses, после этого DrawYearClasses сама разберётся, что надо отрисовать массив
	objClassesRs = arrClasses

	bIsClassChief = objNSNET.IsClassChief(strClassID, strUserID)
	If Not readonly And bEditSelfViewAll And Not bIsClassChief Then
		If objNSNET.GetSafeYearTeacherClassID(strCurrYearID, strUserID, GetSafeID(strClassID,"0"))<>strClassID Then readonly=true
	End If
	If Not readonly And Not bRight_arJournalEditAll Then
		readonly = Not bIsClassChief
	End If

	nYear = GetSafeLng(Request("NYear"), 0)
	If nYear <> 0 Then
		nMonth = GetSafeLng(Request("NMonth"), Null)
		nNumMonth = GetSafeLng(Request("NumMonth"), Null)
		dtStartMonth = DateSerial(nYear, nMonth, 1)
	Else
		dtStartMonth = obTokenMgr.GetData(strToken, stParentPayStartMonth)
		If Not IsDate(dtStartMonth) Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		nYear = Year(dtStartMonth)
		nMonth = Month(dtStartMonth)
		nNumMonth = obTokenMgr.GetData(strToken, stParentPayNumMonth)
	End If
	dtEndMonth = DateAdd("m", 1, dtStartMonth)
	dtEndMonth = DateAdd("d", -1, dtEndMonth)
	nDayInMonth = DateDiff("d", dtStartMonth, dtEndMonth, 0, 0) + 1
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stParentPayStartMonth, dtStartMonth)
	Call obTokenMgr.SetData(strToken, stParentPayNumMonth, nNumMonth)
	WriteClass
End Sub

Sub Main()
	Dim i
	Dim strAbbr, strNormVal, strAverVal
	Dim nAccessMonth
	Dim objSchoolInfo, strSchool_EMID

	strPayNormID = "0"
	bEmpty = True
	If strClassID = "0" Then Exit Sub

	Set rsPayNorms = objNSNET.GetPayNormsForMonth(strSchoolID, dtStartMonth)
	bEmptyPayNorms = rsPayNorms.EOF
	If Not bEmptyPayNorms Then
		strPayNormID = GetSafeID(rsPayNorms("PAYNORMID"), Null)
	End If
	If bOutDebt Then
		Set rsStudents = objNSNET.GetParentPayForMonth_OutDebt(strCurrYearID, strSchoolID, nNumMonth)
	Else
		Set rsStudents = objNSNET.GetParentPayForMonth(strCurrYearID, strClassID, dtStartMonth, dtEndMonth, nNumMonth, strPayNormID)
	End If
	bEmpty = rsStudents.EOF

	readonly = readonly Or bEmptyPayNorms

	If Not readonly Then
		' Здесь смотрим внешнее "разрешение". Оно может выставить readonly, т.е. запретить редактирование.
		' "Разрешение" смотрим для того же УО, для которого взяли нормативы.
		strSchool_EMID = GetSafeID(rsPayNorms("EMID"), "0")
		If strSchool_EMID = "0" Then
			readonly = True
		Else
			nAccessMonth = objNSNET.GetParentPayAccessMonth(strSchool_EMID)
			If nAccessMonth = 0 Then
				readonly = True
			ElseIf nAccessMonth <> -1 Then
				readonly = (nMonth <> nAccessMonth)
			End If
		End If
	End If

	If Not readonly Then
		arrPayNorms = rsPayNorms.GetRows(,,Array("NORMID", "ABBREV", "NORMVAL", "AVERVAL", "NOATTENDANCE"))
		' чтобы десятичный разделитель был представлен, как в других местах, и не зависел от того, что придёт из базы -
		' формируем здесь "ABBREV (NORMVAL)".
		For i = 0 To UBound(arrPayNorms, 2)
			strAbbr = CStr(arrPayNorms(kInd_ABBREV, i))
			strNormVal = CStr(arrPayNorms(kInd_NORMVAL, i))
			strAverVal = CStr(arrPayNorms(kInd_AVERVAL, i))
			strAbbr = strAbbr & " (" & strNormVal & "/" & strAverVal & ")"
			arrPayNorms(kInd_ABBREV, i) = strAbbr
		Next
	End If

	If readonly Or bEmpty Then
		bCanSave = False
	Else
		bCanSave = False
		Do While Not rsStudents.EOF
			If IsDull(rsStudents("PAY_NEXT")) Then
				bCanSave = True
				Exit Do
			End If
			rsStudents.MoveNext
		Loop
		rsStudents.MoveFirst
	End If

	If bEmpty Then Exit Sub
End Sub

Sub onHead()
Dim i, strNormVal
If strClassID = "0" Then Exit Sub
%>
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/Curriculum/Float_js_inc.asp" -->
<SCRIPT><!--
	function Back(){
		goBack(document.forms.MainForm, 'ParentPay.asp');
	}

<%If bCanSave Then%>

var sDecimalSymbol = "<%=strDecimalSymbol%>";
var arrPayNrms = new Array();
var arrPayAvers = new Array();
var arrNoAttendance = new Array();
arrPayNrms[0] = 0;
arrPayAvers[0] = 0;
arrNoAttendance[0] = false;
<%
For i = 0 To UBound(arrPayNorms, 2)
	strNormVal = CStr(arrPayNorms(kInd_NORMVAL, i))
	strNormVal = Replace(strNormVal, strDecimalSymbol, ".")
%>
	arrPayNrms[<%=(i + 1)%>]=<%=strNormVal%>;<%
	strNormVal = CStr(arrPayNorms(kInd_AVERVAL, i)) ' Здесь получается значение AVERVAL, просто используется одна переменная strNormVal - и для NORMVAL, и AVERVAL
	strNormVal = Replace(strNormVal, strDecimalSymbol, ".")
%>
	arrPayAvers[<%=(i + 1)%>]=<%=strNormVal%>;
	
	arrNoAttendance[<%=(i + 1)%>]=<%If arrPayNorms(kInd_NOATTENDANCE, i) Then%>true<%Else%>false<%End If%>;<%
Next%>

var nMaxACount = <%=nDayInMonth%>;
var fEpsilon = 0.00001;
var fMaxPayVal_js = <%=kMax_PayVal%>;
var bOutDebt_js = <%If bOutDebt Then%>true<%Else%>false<%End If%>

function AddNorm(sStudID){
	$("#DivNorm_" + sStudID).clone().attr("id", "NewDivNorm").css("padding-bottom", "2px").appendTo( $("#DivNorm_" + sStudID).parent().parent().parent() );
	$("#NewDivNorm").find('input').val('');
	$("#NewDivNorm").find('select').val(0);
	$("#NewDivNorm").attr("id", "");
}

function str2float_pp(sValIn) {
	var fVal = 0;
	var sVal = trimStr(sValIn);

	if (sVal != '') {
		sVal = sVal.replace(",", ".");

		if(!isNaN(sVal)) {
			fVal = parseFloat(sVal);
		}
	}

	return fVal;
}

function RecalcStudent(sStudID){
	if(isDBBusy()) return;
	dataChanged();

	var elAC = "AC_" + sStudID;
	var elNorm = "Norm_" + sStudID;
	var $ACs = $("input[name=" + elAC + "]", $("form[name=MainForm]"));
	var $Norms = $("select[name=" + elNorm + "]", $("form[name=MainForm]"));
	var nLen = $ACs.length;
	var fToPay = 0;

	var fLastNorm = 0;
	var fLastAver = 0;
	var maxACount = -1;

	if (bOutDebt_js){
		var sToPay = $("#ToPay_" + sStudID).text();
		fToPay = str2float_pp(sToPay);
		var sLastNorm = $("#LastNorm_" + sStudID).val();
		fLastNorm = str2float_pp(sLastNorm);
		var sLastAver = $("#LastAver_" + sStudID).val();
		fLastAver = str2float_pp(sLastAver);
	}
	else{
		if (nLen > 0){
			for( var i = 0; i < nLen; i++ ) {
				var sACount = trimStr($ACs[i].value);
				if (sACount != ''){
					var nACount = str2lng(sACount);
					if( !(isNaN(nACount) || nACount < 0 || nACount > nMaxACount) ) {
						var nNormInd = $Norms[i].selectedIndex;
						if (nNormInd != 0){
							fToPay += nACount * arrPayNrms[nNormInd];
							if (!arrNoAttendance[nNormInd] && nACount >= maxACount){
								maxACount = nACount;
								fLastNorm = arrPayNrms[nNormInd];
								fLastAver = arrPayAvers[nNormInd];
							}
						}
					}
				}
			}
		}
//		var sToPay = '&nbsp;';
		var sToPay = '0';
		if (fToPay > fEpsilon)
			sToPay = fToPay.toFixed(2).replace(".", sDecimalSymbol);

	//	$("#ToPay_" + sStudID).text(sToPay);
		$("#ToPay_" + sStudID).html(sToPay);
	}

	var sDebtPrev = $("#Debt_Prev_" + sStudID).text();
	var fDebtPrev = str2float_pp(sDebtPrev);

	var elPayVal = "PayVal_" + sStudID;
	var sPayVal = $("input[name=" + elPayVal + "]", $("form[name=MainForm]"))[0].value;
	var fPayVal = str2float_pp(sPayVal);

	var fContent = CalcContent(fDebtPrev, fToPay, fPayVal);
//	var sContent = '&nbsp;';
	var sContent = '0';
	if (fContent > fEpsilon)
		sContent = fContent.toFixed(2).replace(".", sDecimalSymbol);
	$("#Content_" + sStudID).html(sContent);

	var fCompens = CalcCompens(fContent, fLastNorm, fLastAver);
	var sCompens = '0';
	if (fCompens > fEpsilon)
		sCompens = fCompens.toFixed(2).replace(".", sDecimalSymbol);
	$("#Compens_" + sStudID).html(sCompens);


	var fDebt = fDebtPrev + fPayVal - fToPay;
//	var sDebt = '&nbsp;';
	var sDebt = '0';
	if (Math.abs(fDebt) > fEpsilon)
		sDebt = fDebt.toFixed(2).replace(".", sDecimalSymbol);
	$("#Debt_" + sStudID).html(sDebt);
}

function CalcContent(fDebtPrev, fToPay, fPayVal){
	var fCont = 0;
	if ((fPayVal + fDebtPrev) > (fToPay + fEpsilon))
		if (fDebtPrev > fEpsilon)
			fCont = fToPay;
		else
			fCont = fToPay - fDebtPrev;
	else
		if (fDebtPrev > fEpsilon)
			fCont = fPayVal + fDebtPrev;
		else
			fCont = fPayVal;
	return fCont;
}

function CalcContent_(fDebtPrev, fToPay, fPayVal){ // from Tlt!
	var fCont = 0;
	if (fDebtPrev > 0)
		if ((fPayVal + fDebtPrev) > fToPay)
			fCont = fToPay;
		else
			fCont = fPayVal + fDebtPrev;
	else
		if ((fPayVal + fDebtPrev) > fToPay)
			fCont = fToPay - fDebtPrev;
		else
			fCont = fPayVal;
	return fCont;
}

function CalcCompens(fContent, fLastNorm, fLastAver){
	var fComp = 0;
	if ((fContent > fEpsilon) && (fLastNorm > fEpsilon) && (fLastAver > fEpsilon))
		fComp = fContent * fLastAver / fLastNorm;

	return fComp;
}

function saveParentPay(){
	if( isDBBusy() ) return false;
	var form = document.forms['MainForm'];

	var $Students = $("input[name=StudID]", $("form[name=MainForm]"));
	var nLen = $Students.length;
	var sStudID = '';
	if (nLen > 0){
		for( var i = 0; i < nLen; i++ ) {

			sStudID = $Students[i].value;
			if (!checkPay(sStudID))
				return;
		}
	}

	setDBBusy();
	DoSubmit( form, "SaveParentPay.asp" );
}

function checkPay(sStudID){
	var elAC = "AC_" + sStudID;
	var elNorm = "Norm_" + sStudID;
	var $ACs = $("input[name=" + elAC + "]", $("form[name=MainForm]"));
	var $Norms = $("select[name=" + elNorm + "]", $("form[name=MainForm]"));
	var nLen = $ACs.length;
	if (!bOutDebt_js)
		if (nLen > 0){
			var nACountSumm = 0;
			for( var i = 0; i < nLen; i++ ) {
				var sACount = trimStr($ACs[i].value);
				var nNormInd = $Norms[i].selectedIndex;

				if (sACount != ''){
					var nACount = str2lng(sACount);
					if (isNaN(nACount) || nACount < 0 || nACount > nMaxACount){
						alert(language.Generic.Grade.kErr_AttendCount + '<%=( " " & nDayInMonth & " " )%>' + language.Generic.Grade.kOrMakeFieldEmpty);
						$ACs[i].focus();
						return false;
					}

					if (nNormInd == 0){
						alert(language.Generic.Grade.kErr_AttendCount_Without_Norm);
						$ACs[i].focus();
						return false;
					}

					nACountSumm = nACountSumm + nACount;
				}
			}
			if (nACountSumm > nMaxACount){
				alert(language.Generic.Grade.kErr_AttendCountSumm + '<%=( " " & nDayInMonth)%>');
				$ACs[0].focus();
				return false;
			}
		}

	if (!checkInputVal("PayVal_" + sStudID, 0, language.Generic.Grade.kPayValS))
		return false;

	if (!checkInputVal("Correction_" + sStudID, -fMaxPayVal_js, language.Generic.Grade.kCorrection))
		return false;

	if (bOutDebt_js){
		checkInputVal("LastNorm_" + sStudID, -fMaxPayVal_js, "");
		checkInputVal("LastAver_" + sStudID, -fMaxPayVal_js, "");
	}

	return true;
}

function checkInputVal(inputName, fMinVal, fieldName){
	var fPayVal = 0;
	var elPayVal = $("input[name=" + inputName + "]", $("form[name=MainForm]"))[0];

	var fPayVal = str2floatEx(elPayVal);
	if (fPayVal != '') {
		if(isNaN(fPayVal) || (fPayVal < (fMinVal - fEpsilon)) || (fPayVal > (fMaxPayVal_js + fEpsilon))) {
			var message = language.Generic.Grade.kErr_PayVal.replace("{0}", fieldName).replace("{1}", fMinVal).replace("{2}", fMaxPayVal_js);
			alert(message + ' ' + language.Generic.Grade.kOrMakeFieldEmpty);
			elPayVal.focus();

			return false;
		}
	}

	return true;
}

<%End If%>
//-->
</SCRIPT><%
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="SaveParentPay.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("NYear","", "NMonth","", "NumMonth","", "PayNormID",strPayNormID))%><%

		Call DrawButtonsFilters(bCanSave, "MainForm")

		If strClassID = "0" Then Response.Write "</form>" : Exit Sub

		If rsStudents.EOF Then
			Call DrawInfo(obLanguage("Filter", "kNoStudents", strFunctionalityType), False)
			rw "</form>"
			
			Exit Sub
		End If

		If bEmptyPayNorms Then%>
			<div class="row">
				<div class="col-md-8"><%
					Call DrawMessage(obLanguage("Grade","kNoPayNormsForMonth"), "danger", False)%>
				</div>
			</div><%
		End If%>

		<div class="row">
			<div class="col-md-12"><%
				Call DrowPayTable()%>
			</div>
		</div>
	</form><%
End Sub

Sub DrawButtons()
	ButtonSave "saveParentPay();", obLanguage("Common","kSave")
End Sub

Sub DrawFilters(strForm)
	Call DrawReadonlyRow( obLanguage("Common","kMonth") & ":", obLanguage.GetMonthName(nMonth, False) & " " & nYear)
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)) : If bExit Then Exit Sub
End Sub

Sub DrowPayTable()
	Dim i, strReport, nRow
	Dim strName, strStudID
	Dim rsPayNorms, rsParents
	Dim nNumMonth_Last
	Dim fDebt_Prev, fDebt
	Dim fToPay, fPayVal, fContent, fCompens, fCorrection
	Dim bPayNext, bRO
	Dim strNormID, strNormID_Prev
	Dim strParentID, strParentName, strParentID_Prev
	Dim strAttendCount, strNormAbbrev, strNormVal, strAverVal
	Dim strLastNorm, strLastAver
	Dim bFirstNorm
	Dim strPayID, bNewPay
	Dim cmdStudentLastPP, bNormForOldPP%>

	<table class="table table-bordered table-condensed">
		<tr>
			<th><%=obLanguage("Common","kStudents",strFunctionalityType)%></th>
			<th><%=DB2HTML_BR(obLanguage("Grade","kOverpayDebt"))%></th>
			<th><%=obLanguage("Grade","kAttendanceNorm")%></th>
			<th><%=obLanguage("Grade","kToPay")%></th>
			<th><%=obLanguage("Grade","kPayValS")%></th>
			<th><%=obLanguage("Grade","kForContentS")%></th>
			<th><%=obLanguage("Grade","kToCompensS")%></th>
			<th><%=DB2HTML_BR(obLanguage("Grade","kOverpayDebt"))%></th>
			<th><%=obLanguage("Grade","kCorrection")%></th>
			<th><%=obLanguage("Grade","kLegalAgent")%></th>
		</tr><%

		If Not bOutDebt Then
			Set rsParents = rsStudents("rsParents").Value
		Else
			Set cmdStudentLastPP = objNSNET.GetStudentLastPay_Prepare(strSchoolID)
		End If

		nRow = 0
		While Not rsStudents.EOF
			nRow = nRow + 1
			strName = CStr(rsStudents("NICKNAME"))
			strStudID = GetSafeID(rsStudents("STUDENTID"), Null)
			strPayID = GetSafeID(rsStudents("PAYID"), "0")
			bNewPay = (strPayID = "0")

			bNormForOldPP = False
			Set rsPayNorms = rsStudents("rsPayNorms").Value
			If rsPayNorms.EOF And bOutDebt Then
				' Для выбывших выпускников - если в текущем месяце с ним не связаны нормативы, то берём последний норматив для него
				Set rsPayNorms = objNSNET.GetStudentLastPay_Execute(cmdStudentLastPP, strStudID)
				bNormForOldPP = True
			End If

			fDebt_Prev = rsStudents("DEBT_PREV")
			If IsDull(fDebt_Prev) Then
				fDebt_Prev = rsStudents("DEBT_INIT")
			End If

			fToPay = rsStudents("TOPAY")
			fPayVal = rsStudents("PAYVAL")
			fContent = rsStudents("CONTENT")
			fCompens = RoundNullableDouble(rsStudents("COMPENS"), 2)
			fCorrection = rsStudents("CORRECTION")
			fDebt = rsStudents("DEBT")
			If IsDull(fDebt) Then
				fDebt = fDebt_Prev
			End If

			bRO = readonly Or Not IsDull(rsStudents("PAY_NEXT"))
			If Not bRO Then

				If bOutDebt Then
					Set rsParents = objNSNET.GetParentsListForStudent(strStudID)
				End If

				If Not bOutDebt Then
					strNormID_Prev = GetSafeID(rsStudents("NORMID_PREV"), "0")
				Else
					strNormID_Prev = "-1"
				End If
				If bNewPay Then
	'				If Not bOutDebt Then
	'					strNormID_Prev = GetSafeID(rsStudents("NORMID_PREV"), "0")
	'				End If
					strParentID = GetSafeID(rsStudents("PARENTID_PREV"), "0")
				Else
					strParentID = GetSafeID(rsStudents("PARENTID"), "0")
				End If

			Else
				strParentName = GetSafeStr(rsStudents("PARENTNAME"), -1, "")
			End If%>

			<tr align="center" valign="top">
				<td align="left"><nobr><%=(nRow & ". " & DB2HTML(strName))%><%If Not bRO Then%><input type="hidden" name="StudID" value="<%=strStudID%>"><%End If%></nobr></td>
				<td id="Debt_Prev_<%=strStudID%>"><%=DB2HTML(fDebt_Prev)%></td>
				<td style="width: 220px;" nowrap <%If Not bRO Then%>align="left"<%End If%>><%

					strLastNorm = "0"
					strLastAver = "0"
					If rsPayNorms.EOF Then
						If bRO Or bOutDebt Then
							Response.Write "&nbsp;"
						Else%>
							<table style="width:100%;">
								<tr>
									<td style="width: 90%; padding-bottom: 2px;">
										<div id="DivNorm_<%=strStudID%>">
											<table style="width: 100%;">
												<tr>
													<td style="width:20%;">
														<input class="form-control" type="text" name="AC_<%=strStudID%>" size="<%=TextInputSize(3)%>" maxlength="2" value="" OnKeyUp="RecalcStudent(<%=strStudID%>);">
													</td>
													<td style="width:80%; padding-left: 2px;">
														<select class="form-control" name="Norm_<%=strStudID%>" OnChange="RecalcStudent(<%=strStudID%>);">
															<option value="0"></option>
															<%PopulateSelectArray arrPayNorms, strNormID_Prev%>
														</select>
													</td>
												</tr>
											</table>
										</div>
									</td>
									<td style="text-align:center;">
										<a href="javascript:AddNorm(<%=strStudID%>)" title="<%=obLanguage("Grade","kAddNorm")%>" style="text-decoration:none;">
											<i class="icon-plus"></i>
										</a>
									</td>
								</tr>
							</table><%
						End If
					Else
						bFirstNorm = True%>

						<table style="width:100%;"><%
							While Not rsPayNorms.EOF%>
								<tr><%
				'					strNormID = GetSafeID(rsPayNorms("NORMID"), Null)
									strNormID		= GetSafeID(rsPayNorms("NORMID"), strNormID_Prev)
									strAttendCount	= CLng(rsPayNorms("ATTENDCOUNT"))
									strNormAbbrev	= CStr(rsPayNorms("ABBREV"))
									strNormVal		= rsPayNorms("NORMVAL")
									strAverVal		= rsPayNorms("AVERVAL")

									If bRO Or bOutDebt Then
										Response.Write "<td><div>" & IIf(bNormForOldPP, "", strAttendCount & " - ") & strNormAbbrev & " (" & DB2HTML(strNormVal) & "/" & DB2HTML(strAverVal) & ")" & "</div></td>"

										If Not bRO And (strAttendCount > 0 Or bNormForOldPP) Then
											strLastNorm = CStr(strNormVal)
											strLastAver = CStr(strAverVal)
										End If
									Else%>
										<td style="width: 90%; padding-bottom: 2px;">
											<div <%=IIF(bFirstNorm, "id=""DivNorm_" & strStudID & """", "")%>>
												<table style="width: 100%;">
													<tr>
														<td style="width:20%;">
															<input class="form-control" type="text" name="AC_<%=strStudID%>" size="<%=TextInputSize(3)%>" maxlength="2" value="<%=strAttendCount%>" OnKeyUp="RecalcStudent(<%=strStudID%>);">
														</td>
														<td style="width:80%; padding-left: 2px;">
															<select class="form-control" name="Norm_<%=strStudID%>" OnChange="RecalcStudent(<%=strStudID%>);"><option value="0"></option><%PopulateSelectArray arrPayNorms, strNormID%></select>
														</td>
													</tr>
												</table>
											</div>
										</td>
										<td style="text-align:center;"><%
											If bFirstNorm Then%>
												<a href="javascript:AddNorm(<%=strStudID%>)" title="<%=obLanguage("Grade","kAddNorm")%>" style="text-decoration:none;">
													<i class="icon-plus"></i>
												</a><%
											End If%>
										</td><%
									End If

									bFirstNorm = False
									rsPayNorms.MoveNext%>

								</tr><%
							WEnd%>
						</table><%
					End If

					If bOutDebt And Not bRO Then%>
						<input type="hidden" id="LastNorm_<%=strStudID%>" name="LastNorm_<%=strStudID%>" value="<%=Replace(strLastNorm, strDecimalSymbol, ".")%>">
						<input type="hidden" id="LastAver_<%=strStudID%>" name="LastAver_<%=strStudID%>" value="<%=Replace(strLastAver, strDecimalSymbol, ".")%>"><%
					End If%>
				</td>

				<td id="ToPay_<%=strStudID%>"><%=DB2HTML(fToPay)%></td>
				<td><%
					If bRO Then%>
						<%=DB2HTML(fPayVal)%><%
					Else%>
						<input type="text" name="PayVal_<%=strStudID%>" id="PayVal_<%=strStudID%>" size="<%=TextInputSize(8)%>" maxlength="8" value="<%=Double2Value(fPayVal)%>" OnKeyUp="RecalcStudent(<%=strStudID%>);"><%
					End If%>
				</td>
				<td id="Content_<%=strStudID%>"><%=DB2HTML(fContent)%></td>
				<td id="Compens_<%=strStudID%>"><%=DB2HTML(fCompens)%></td>
				<td id="Debt_<%=strStudID%>"><%=DB2HTML(fDebt)%></td>
				<td><%
					If bRO Then%>
						<%=DB2HTML(fCorrection)%><%
					Else%>
						<input class="form-control" type="text" name="Correction_<%=strStudID%>" id="Correction_<%=strStudID%>" size="<%=TextInputSize(8)%>" maxlength="8" value="<%=Double2Value(fCorrection)%>" OnChange="dataChanged();"><%
					End If%>
				</td>

				<td align="left"><%
					If bRO Then%>
						<%=DB2HTML(strParentName)%><%
					Else
						If rsParents.EOF Then
							If Not bNewPay And strParentID <> "0" Then%>
								<select class="form-control" name="ParentID_<%=strStudID%>" OnChange="dataChanged();"><option value="0"></option><option value="<%=strParentID%>" selected><%=DB2HTML(strParentName)%></option></select><%
							Else%>
								&nbsp;<%
							End If
						Else%>
							<select class="form-control" name="ParentID_<%=strStudID%>" OnChange="dataChanged();"><option value="0"></option><%PopulateSelect rsParents, "PARENTID", "NICKNAME", strParentID%></select><%
						End If
					End If%>
				</td>

			</tr><%
			rsStudents.MoveNext
		Wend%>
	</table><%

	If bOutDebt Then
		Call objNSNET.DisposeCommand(cmdStudentLastPP)
	End If
End Sub

Function Double2Value (inVal)
	If IsDull(inVal) Then
		Double2Value = ""
	Else
		Double2Value = CDbl(inVal) & ""
	End If
End Function%>