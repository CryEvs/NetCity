<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE FILE="Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Const indId		= 0
Const indName	= 1
Const indMark	= 2
Const indThisCSG	= 3
Const indPass	= 4
Const indAtOpt	= 4
Const indYearMark	= 5

Dim nType, periodID, nUStudents, nMaxMark, nMinMark, nMaxMarkLength
Dim strInvGrade, strSubjClassID, strActivityId
Dim arrStudentMarksRs, arrAverageMarks
Dim objSGExamTypes, bEmptyExamTypes
Dim bExam, bYearType, bTotalType
Dim arrMarksExamVerbal, arrMarksExamWritten
Dim bOfferedPossible
Dim bWeight
Dim objCmdTotalMarks, arrTerms, strClassID
Dim arrYearMarks
Dim strExamTitle, bAtOpt
Dim bIsGradeSystemPass, nGradeSystem
Dim dictStudID2YearMarksIndex
Dim bExamEGE
Dim bPass
Dim strBackPage
Dim bEditConditional ' Флаг для редактирования Условников в уже закрытом году
Dim isNotRated ' Флаг для неоцениваемых классогрупп
Dim nNextYearID ' ид. следующего года, нужен для Условников

Function GetPageTitle()
	Select Case nType
		Case kTermType : GetPageTitle = obLanguage("Grade","kEditTotal")
		Case kYearType : GetPageTitle = obLanguage("Grade","kEditTotal") & " " & obLanguage("Grade","kForYear")
		Case kTotalType : GetPageTitle = obLanguage("Grade","kEditTotal")
		Case Else : GetPageTitle = obLanguage("Grade","kEditTotal") & " " & obLanguage("Grade","kForExam") & ": " & GreenText(DB2HTML(strExamTitle)) 
	End Select
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miJournal
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbTotals
	bTabInternalPage = True
End Function

Sub ReadState()
	Dim objPeriodTypeInfo
	isNotRated = False
	strSubjClassID = obTokenMgr.GetData(strToken, stCurrSubjClass)

	bEditConditional = False
	nNextYearID = 0
	nType = GetSafeLng(Request("TYPE"), 0)
	If nType > kTermType Then 
		periodID = strCurrYearID
		bEditConditional = (GetSafeLng(Request("EditConditional"), 0) = 1)
		If bEditConditional Then
			nNextYearID = GetSafeLng(Request("NextYearID"), 0)
		End If
	Else
		periodID = GetSafeID(Request("TERM"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), Null))
	End If

	If (CBool(objNSNET.IsYearClosed(strCurrYearID)) And Not bEditConditional) Or Not (HasUserRight(arTotalsEditAll) Or HasUserRight(arTotalsEditSelf)) Then GenerateError obLanguage("Common","kErrPageAccess")

	bYearType = (nType = kYearType)
	bTotalType = (nType = kTotalType)

	Set objPeriodTypeInfo = objNSNET.GetPeriodTypeInfo(nType)
	If objPeriodTypeInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	bExam = (GetSafeStr(objPeriodTypeInfo("ISEXAM"), 1, Null) = "Y")
	bExamEGE = (bExam And (nType = kExamEGEType))

	strExamTitle = GetSafeStr(objPeriodTypeInfo("TITLE"), -1, "")

	strClassID = obTokenMgr.GetData(strToken, stCurrClass)

	strBackPage = GetSafeStr(Request("BACK"), 200, "/angular/school/journal/totals")
End Sub

Function onLoad()
	If bEmptyExamTypes Then
		onLoad = ""
	Else
		onLoad = "JavaScript:prepare();"
	End If
End Function

Sub Main()
	Dim objStudentMarksRs
	Dim i, bYearMarksExists
	Dim objTerms, objYearMarksRs
	Dim arrFields
	Dim objCSGInfo

	bEmptyExamTypes = False
	bYearMarksExists = False
	bAtOpt = False
	
	Set objStudentMarksRs = objNSNET.GetPeriodStudentsMarksList(strSubjClassID, nType, periodID, bEditConditional, nNextYearID)
	If objStudentMarksRs.EOF Then GenerateError obLanguage("Filter","kNoStudentsInClassForPeriod",strFunctionalityType)
	If bExam Then
		Set objSGExamTypes = objNSNET.GetSGExamTypes(strSubjClassID, nType)
		If objSGExamTypes.EOF Then
			bEmptyExamTypes = True
			Exit Sub
		End If
		bAtOpt = GetSafeStr(objSGExamTypes("CHOICE"), 1, Null) = "Y"

		arrStudentMarksRs = objStudentMarksRs.GetRows( ,,Array("ID","NAME","MARK","THISCSG","STUDENTID") ) ' arrStudentMarksRs - нужно для списка студентов (обрабатывается через arrStudentMarksRs и для bExam, и нет)
		nUStudents = Ubound( arrStudentMarksRs, 2 )
		bIsGradeSystemPass = False
		nGradeSystem = kGradingSystem_Mark
	Else
		arrFields = Array("ID","NAME","MARK","THISCSG","GRADINGSYS")
		If bTotalType Then
			ReDim Preserve arrFields(UBound(arrFields) + 1)
			arrFields(UBound(arrFields)) = "ISYEARMARKEXISTS"
		End If
		arrStudentMarksRs = objStudentMarksRs.GetRows( ,,arrFields )
		nUStudents = Ubound( arrStudentMarksRs, 2 )
		If bYearType Then
			Set objCmdTotalMarks = objNSNET.GetStudentTotalsForSG_Prepare(strSubjClassID)
			Set objTerms = objNSNET.GetSubjectGroupTermList(strSubjClassID)
			arrTerms = objTerms.GetRows(,,Array("TERMID", "TERMNAME"))
		End If
		If bTotalType Then
			Set dictStudID2YearMarksIndex = CreateObject("NetCity.DictionaryStorage")
			For i = 0 To Ubound( arrStudentMarksRs, 2 )
				dictStudID2YearMarksIndex(CStr(arrStudentMarksRs(indId, i))) = i
				If Not IsNull(arrStudentMarksRs(indYearMark, i)) Then bYearMarksExists = True
			Next
		End If
		Set objCSGInfo = objNSNET.GetSubjectGroupInfo(strSubjClassID)
		If objCSGInfo.EOF Then
			GenerateError obLanguage("Common","kUnexpErr")
		Else
			bIsGradeSystemPass = (GetSafeLng(objCSGInfo("GRADINGSYS"), Null) = kGradingSystem_Pass)
			isNotRated = (GetSafeLng(objCSGInfo("GRADINGSYS"), Null) = kGradingSystem_NotRated)
			nGradeSystem = IIf(bIsGradeSystemPass, kGradingSystem_Pass, kGradingSystem_Mark)
		End If
	End If

	objStudentMarksRs.Close()
	Set objStudentMarksRs = Nothing
	Call InitSchoolSettings( objNSNET )
	bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")
	If bExamEGE Then
		nMaxMark = kEGEMaxMark
		nMinMark = kEGEMinMark
	Else
		nMaxMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
		nMinMark = arrSchoolSettings( 1, kSSIndex_MinMark )
	End If

	' Здесь arrMarkTypes - должен быть точно для bIsGradeSystemPass, а dictMarkVal2MarkType - для всех возможных значений.
	' Это связано с тем, что если можно редактировать, то там arrMarkTypes должен точно соответствовать bIsGradeSystemPass.
	' Но на стр. возможны значения, полученные в соседней подгруппе, причём она может быть связана с другой системой оценивания (бальная/зачётная),
	' Они будут "только для чтения", но для их показывания должен быть полный dictMarkVal2MarkType.
	' Поэтому сначала вызываем GetMarkTypes для bIsGradeSystemPass - заполняем arrMarkTypes,
	' Затем второй раз вызываем GetMarkTypesInfo для True - перезаполняем dictMarkVal2MarkType
	Call GetMarkTypes(bIsGradeSystemPass, isNotRated, nMinMark, nMaxMark)
	Set dictMarkVal2MarkType = Nothing
	Call GetMarkTypesInfo(True, nMinMark, nMaxMark)

	nMaxMarkLength = Len(CStr(nMaxMark))
	strInvGrade = obLanguage("Grade","kErrInvGrade1") & nMinMark & obLanguage("Grade","kErrInvGrade2") & nMaxMark & obLanguage("Grade","kErrInvGrade3")

	bOfferedPossible = False
	arrAverageMarks = Null
	If bIsGradeSystemPass Then Exit Sub
	If nType = kTermType Then
		If kIsTKR Then Exit Sub
		arrAverageMarks = GetAverageMarks()
		If isNull(arrAverageMarks) Then Exit Sub
		For i = 0 To nUStudents
			If IsNull(arrStudentMarksRs(2,i)) Then bOfferedPossible = True: Exit Sub
		Next
	Else
		bOfferedPossible = (nType = kTotalType And bYearMarksExists)
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stIsGradeSystemPass, bIsGradeSystemPass)
	If nType = kTermType Then 
		Call obTokenMgr.SetData(strToken, stCurrTerm, periodId)
	End If
End Sub

Sub onHead()
	Dim i

%>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/grade/css/edit-total.css")%>">
<%If Not bEmptyExamTypes Then%>
<script language="JavaScript" src="<%=GetVersionedJsLink("tableExt.js")%>"></script>
<%End If %>
<script><!--
function changeMarkType(elMarkType)
{
	<%If Not bIsGradeSystemPass Then%>
	var elMark = $(elMarkType).parents('tr:first').find('input[name=Mark]')[0];
	var nMarkType = parseInt( elMarkType.value );

	if( nMarkType > 0 )
	{
		changeElem(elMark, elMark.value);
		elMark.disabled = false;
		elMark.style.backgroundColor='';
		elMark.focus();
	}else{
		changeElem(elMark, nMarkType);
		elMark.disabled = true;
		elMark.style.backgroundColor='lightgray';
	}
	<%End If%>
}

$(document).ready(function ()
{
	$('select[name=MarkType]')//ищет все select
		.change( function() {
			changeMarkType(this);
		});
	$('input[name^=AtOpt]')//ищет все input
		.click( function() {
			var elMark = $(this).parents('tr:first').find('input[name=Mark]');
			if ( trimStr(elMark.val())!='' ) restoreCheck(this); else dataChanged();
		});
	
	if ($('input[name=autoExpose]').length != 0) {
		$('input[name=autoExpose]').click(function () {
			var bOfferentMarkInputs = $('input[marktype=bOfferedMark]'); //ищет все input с предлагаемыми оценками
			if(bOfferentMarkInputs.length>0)
				for (var i = 0; i < bOfferentMarkInputs.length; i++) {
					if (bOfferentMarkInputs[i].value != "") {
							bOfferentMarkInputs[i].value = "";//очищает поля
							bOfferentMarkInputs[i].style.backgroundColor='';
					} else{
						txt = $(bOfferentMarkInputs[i]).parent().prev().text();
						txt = txt.replace(",",".");
						val = parseFloat(txt);
						if( ! isNaN(val)){
							bOfferentMarkInputs[i].value = Math.round(val);
							bOfferentMarkInputs[i].style.backgroundColor='#D4FFFF';
							bOfferentMarkInputs[i].style.color='blue';
						}
					}
				}
		});
		
		$('input[marktype=bOfferedMark]').change(function () {
			$(this).attr("marktype", "");
			$(this).css({"color": "","background-color": ""});
		});
		$('input[name=autoExpose]').click();//прячем предлагаемые оценки при входе на страницу
	}
<%If Not bEmptyExamTypes Then%>
	$("input[name=Mark]:enabled").navigateInputs({
		getCellInputOptions: function(elem) {
			return {
				maxMark: <%=nMaxMark %>,
				minMark: <%=nMinMark %>,
				maxLength: (<%=nMaxMark %> + "").length
			};
		},
		getNextInput: function(elem, selector, step) {
			var row = elem.parentNode.parentNode;
			var elemIndex = $(selector, row).index(elem);
			var nextRowIndex = row.rowIndex + step;
			var rowsCnt = row.parentNode.rows.length;
			while( nextRowIndex > 0 && nextRowIndex < rowsCnt ){
				var nextRowElements = $(selector, $('tr', row.parentNode)[nextRowIndex]);
				if (nextRowElements.length > 0 && nextRowElements[elemIndex]) {
					return nextRowElements[elemIndex];
				}
				nextRowIndex = nextRowIndex + step;
			}
		}
	});
<%End If %>

});

function Back() {
	goBack(document.Gradebook, '<%=strBackPage%>');
}

function SetExamTypes(){
	checkForChanges().then(function() {
		ok('Gradebook','CSGExamTypes.asp');
	});
}

<%If Not bEmptyExamTypes Then%>

function resetForm(){
	$.when(!dataWereChanged || $.show.confirmation(language.Generic.Grade.kResetDataWithoutSave)).then(function(){
	postTo("EditTotal.asp", {
								TYPE: <%=GetSafeID(Request("TYPE"),"0") %>, 
								TERM: <%=GetSafeID(Request("TERM"),"0") %>, 
								PCLID: <%=GetSafeID(Request("PCLID"),"0") %>, 
								SCLID: <%=GetSafeID(Request("SCLID"),"0") %>,
								EditConditional: <%=IIf(bEditConditional, "1", "0") %>,
								NextYearID: <%=nNextYearID %>
							});
	});
}

function updateDisabledMarks(form){
	var elMarkTypes = $('select[name=MarkType]');
	if( elMarkTypes.length > 0 ) {
		elMarkTypes.change();
		elMarkTypes[0].focus();
	}
}

function SaveGrades(){
	var defArgs = new Array();

	if(isDBBusy()) return false;

	var form = document.forms['Gradebook'];
	if (!form.SID) return;

	<%If Not bIsGradeSystemPass Then%>
		if( !isValidMarks(form) ) return false;
		if($('input[name=Mark][value=0]').length > 0)
		{
			defArgs = function(){return $.when(!dataWereChanged || $.show.confirmation(language.Generic.Grade.kZeroMarkConfirm)).promise();};
		}
	<%End If%>

	extDeferred.when(defArgs).then(function(){
		<%If Not bIsGradeSystemPass Then%>
			unsetDisabledMarks(form);
		<%End If%>
		setDBBusy();
		ok('Gradebook', '');
	});
}

function hasGrade(val, elMarkType)
{
	return (val.length > 0 && parseInt(getListValue(elMarkType))>0);
}

function isInValidGrade(val)
{
	var grade = parseInt(val);
	return ( isNaN(grade) || grade < <%=nMinMark%> || grade > <%=nMaxMark%> );
}

function isValidMarks(form)
{
	var markElem;
	if (form.Mark.length){
		var marks = $('input[name=Mark]:enabled').filter(function(index)
		{
			var val = this.value;
			var elMarkType = form.MarkType[index];
			return hasGrade(val, elMarkType) && isInValidGrade(val);
		});
		if( marks.length > 0 ) {
			markElem = marks[0];
		}
	}
	else{
		var val = form.Mark.value;
		if( hasGrade(val, form.MarkType) && isInValidGrade(val) ){
			markElem = form.Mark; // в этом поле ошибочное значение
		}
	}
	if( markElem ) {
		alert('<%=strInvGrade%>');
		markElem.focus();
		return false;
	}
	// if($('input[name=Mark][value=0]').length > 0)
	//    if (dataWereChanged && !confirm(language.Generic.Grade.kZeroMarkConfirm)) return false;
	return true;
}
function unsetDisabledMarks(form)
{
	$('input[name=Mark]').removeAttr("disabled");
}
function prepare()
{
	$('select[name=MarkType][value=-1]').change();
	$('select[name=MarkType][value=-2]').change();
	$('select[name=MarkType][value=-3]').change();
	$('select[name=MarkType][value=-4]').change();
	$('select[name=MarkType][value=-5]').change();
}
function restoreCheck(obj) {
	if (!obj.checked){
		alert(language.Grade.kCantResetChoiceCheck);
		obj.checked=true;
	}
}
function keyHandler(obj) { return !obj.disabled; } // hack for OmniWeb

function changeElem(el, val) {
	if(val < 0)
	{
		mtype = $(el).parent().find("[name=MarkType]")[0];
		val = mtype.options[mtype.selectedIndex].text;
	}
	else if (val != "")
	{
		val = parseInt(val);
		if (isNaN(val))
			val="";
	}
	el.value = val;
	$(el).change(); // почему-то не вызывался автоматически
	dataChanged();
}
function SetAllNotRated() {
	mtypes = $("[name=Mark]").each(function(i, el){
		if (el.value=='')
			$(el).parent().find("[name=MarkType]").val(<%=markNotRated%>).trigger('change');
	});
}
<%
End If%>
//--></script>
<%
End Sub

Function Point( m, arrA, j )
	Dim i
	For i = 0 To Ubound( arrA, 2 )
		If CLng( arrA( m, i ) ) = CLng( j ) Then
			Point = i
			Exit Function
		End If
	Next
	GenerateError obLanguage("Grade","kErrInvalidAssignID")
End Function

Function RoundMark( strMark )
	Dim nMarkMod
	nMarkMod = (strMark * 100) Mod 100
	If nMarkMod > 30 And nMarkMod < 70 Then RoundMark = "" : Exit Function

	RoundMark = Round( strMark )
End Function

Function GetAverageMarks()
	Dim i, j, k
	Dim nUIndex, nAssIDsIndex, nAvgMARK, nNumMARK, nCountAID, nRes
	Dim strAverage, strStudentId, bAverageExist
	Dim objAssRs, objCmdAssResults, objStudRs, objTermInfo, objDays, objStudResRs
	Dim arrAss, arrAllRes, arrStud, arrAssIDs, arrStudRes, arrDaysRs, arrRes
	Dim arrAMarks()
	Dim dtTermStart, dtTermEnd
	Dim strAType, strCMID, strCurrAType, strCurrCMID, nCorrRes, n
	Dim nWeight, bShowWeightedAvg, bActualMark, nTotalWeight
	Dim dtToday, dtDueDate
	Dim gradeComponent, gradingManager
	
	bAverageExist=False
	GetAverageMarks = Null

	Set objStudRs = objNSNET.GetStudentListForSubjGroup(strSubjClassID, CLng(periodID), Empty, Empty, False)
	TestError obLanguage("Grade","kErrStudents",strFunctionalityType)
	If objStudRs.EOF Then Exit Function
	arrStud = objStudRs.GetRows(,,Array("LASTNAME", "FIRSTNAME", "ID","NAME"))

	dtToday = NSNow()
	dtToday = DateSerial(Year(dtToday), Month(dtToday), Day(dtToday))

	Set objTermInfo = objNSNET.GetTermInfo(periodID)
	If Not objTermInfo.EOF Then
		dtTermStart = objTermInfo("STARTDATE")
		dtTermEnd = objTermInfo("ENDDATE")
	Else
		Call GenerateError( obLanguage("Filter","kErrTermNotFound") )
	End If

	Set objDays = objNSNET.GetAssignmentCountPerDaysForSG(strSubjClassID, dtTermStart, dtTermEnd, obLanguage("Assignment","kATTKRThemeS"))
	If objDays.EOF Then Exit Function
	arrDaysRs = objDays.GetRows(,,Array("ADAY", "ACOUNT"))

	nCountAID = 0
	For i = 0 To Ubound( arrDaysRs, 2 )
		If CLng( arrDaysRs(1, i) ) > 0 Then nCountAID = nCountAID + CLng( arrDaysRs(1, i) ) - 1
	Next
	k = Ubound( arrDaysRs, 2 ) + nCountAID

	Set objAssRs = objNSNET.GetAssignmentsForSG(strSubjClassID, dtTermStart, dtTermEnd, obLanguage("Assignment","kATTKRThemeS"))
	If objAssRs.EOF Then Call GenerateError( obLanguage("Grade","kScheduleUndefined", strFunctionalityType) )
	arrAss = objAssRs.GetRows(,,Array("ADAY", "AID", "TYP", "PP", "CLASSMEETINGID", "ACID", "ANAME"))

	nUIndex = UBound( arrAss, 2 )
	ReDim arrAssIDs( nUIndex )

	For i = 0 To nUIndex
		If Not IsNull( arrAss(1, i) ) Then
			arrAssIDs( nAssIDsIndex ) = CLng( arrAss(1, i) )
			nAssIDsIndex = nAssIDsIndex + 1
		End if
	Next

	If nAssIDsIndex > 0 Then
		Redim Preserve arrAssIDs( nAssIDsIndex - 1 )
	Else
		arrAssIDs = Null
	End If

	If Not IsNull( arrAssIDs ) Then
		Set objCmdAssResults = objNSNET.GetAssignmentResults_Prepare(strSubjClassID, arrAssIDs)
	End If

	Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	Set gradingManager = gradeComponent.GetGradingManager(strCurrYearId, strSubjClassID)

	Redim arrAllRes( UBound( arrStud, 2 ) )
	ReDim arrStudRes( 11, k )
	For i = 0 To UBound( arrStud, 2 )
		strStudentID = arrStud( 2, i )
		For j=0 To UBound( arrAss, 2 )
			arrStudRes(0, j) = arrAss(0, j)
			arrStudRes(4, j) = NULL
			arrStudRes(5, j) = NULL
			arrStudRes(6, j) = arrAss(4, j)
			If Not IsNull(arrAss(1, j)) Then
				arrStudRes(1, j)=arrAss(1, j)
				arrStudRes(2, j)=arrAss(2, j)
				arrStudRes(3, j)=arrAss(3, j)
				arrStudRes(7, j)=arrAss(5, j)
			End if
			arrStudRes(8, j) = Empty ' CMID
			arrStudRes(9, j) = Empty ' AType
			arrStudRes(10, j) = Empty ' AWeight
			arrStudRes(11, j) = Empty ' ADueDate
		Next

		arrAllRes(i) = NULL
		If Not IsNull( arrAssIDs ) Then
			Set objStudResRs = objNSNET.GetAssignmentResults_Execute( objCmdAssResults, strStudentID )
			If Not objStudResRs.EOF Then
				arrRes = objStudResRs.GetRows(,,ARRAY("ASSIGNMENTID", "RESULT", "CLASSMEETINGID", "TYPE", "WEIGHT", "DUEDATE")) ' arrRes(0, x) is AssignmentID
				arrAllRes(i) = arrRes
				For j=0 To Ubound(arrRes, 2)
					k = Point(1, arrStudRes, arrRes(0, j))
					
					arrStudRes(3, k) = nMaxMark
					If Not IsNull(arrRes(1, j)) Then
						arrStudRes(4, k) = gradingManager.GradeScaleAssignResult(arrRes(0, j), arrRes(1, j))
					Else
						arrStudRes(4, k) = 0
					End If
					arrStudRes(8, k) = arrRes(2, j) ' CMID
					arrStudRes(9, k) = arrRes(3, j) ' AType
					arrStudRes(10, k) = arrRes(4, j) ' AWeight
					arrStudRes(11, k) = arrRes(5, j) ' ADueDate
				Next
			Else
				arrAllRes(i) = NULL
			End If
		End If
	
		bShowWeightedAvg = False
		nTotalWeight = 0
		nAvgMARK = 0 : nNumMARK = 0

		If Not IsNull(arrAllRes(i)) Then
			For j=0 To Ubound( arrStudRes, 2 )
				nRes = arrStudRes(4, j)
				nWeight = GetSafeLng(arrStudRes(10, j), 0)
			
				bActualMark = True
				If kIsTKR Then
					' берём только ТКР-оценки (по алгоритму), остальные - обнуляем;
					' здесь предполагаем, что если есть коррекц. оценка, то озенка за тему - обязательно есть.
					' 9.04.2009. Сейчас только одна оценка по ТКР - "за тему".
					strAType = arrStudRes(9, j)
					If strAType = obLanguage("Assignment","kATTKRThemeS") Then
						If GetSafeLng(nRes, 0) < 0 Then nRes = 0
					Else
						nRes = 0
						bActualMark = False
					End If
				End If
				nRes = GetSafeLng(nRes, 0)

				If bWeight And bActualMark And (nRes = 0) Then
					' Не учитываем "весовые" оценки, дата сдачи которых ещё не прошла
					dtDueDate = arrStudRes(11, j)
					If IsDull(dtDueDate) Then
						bActualMark = False
					Else
						bActualMark = DateDiff( "d", dtToday, dtDueDate, 0, 0 ) < 0
					End If
				End If

				If bActualMark Then
					If Not bWeight Then
						If nRes <> 0 Then
							nNumMARK = nNumMARK + 1
							nAvgMARK = nAvgMARK + nRes
						End If
					Else
						nTotalWeight = nTotalWeight + nWeight
						If nRes <> 0 Then
							nAvgMARK = nAvgMARK + (nRes - nMinMark) * nWeight
						End If
						bShowWeightedAvg = True
					End If
				End If
			Next
		End If

		If Not bWeight Then
			If nNumMARK = 0 Then 
				strAverage = Empty 
			Else 
				strAverage = FormatNumber( nAvgMARK / nNumMARK, 2 )
			End If
		Else
			If Not bShowWeightedAvg Then
				strAverage = Empty
			Else
				If nTotalWeight = 0 Then nTotalWeight = 1
				strAverage = FormatNumber( (nAvgMARK / nTotalWeight) + nMinMark, 2 )
			End If
		End If

		Redim Preserve arrAMarks( 1, i )
		arrAMarks( 0, i) = arrStud( 2, i )
		arrAMarks( 1, i ) = strAverage
		If Not bAverageExist Then bAverageExist = Not IsEmpty(strAverage)
	Next
	Call objNSNET.DisposeCommand(objCmdAssResults)
	If bAverageExist Then GetAverageMarks = arrAMarks
End Function

Sub DrawLegend
	
	%><%=ShowCheckbox("autoExpose", 1, True, obLanguage("Grade","kAutoExpose"), "") %>
	<div class="legend">
		<div>
			<p><span class="legend-label text-center" style="background-color:#D4FFFF; color:blue">4</span><span class="legend-description"> — <%=obLanguage("Grade","kOfferedMarks")%></span></p>
			<p><span class="legend-label text-center">4</span><span class="legend-description"> — <%=obLanguage("Grade","kFixedMarks")%></span></p>
		</div>
	</div>
	<%
	If bExam Then
		DrawInfo obLanguage("Grade","kChoiceExamMark",strFunctionalityType)
	End If
End Sub

Sub DrawLinkButtons()
	If bExam Then
		Button "SetExamTypes()", obLanguage("Grade","kExamTypes"), obLanguage("Grade","kExamTypes"), "glyphicon glyphicon-check"
	End If
End Sub

Sub DrawButtons()
	Dim hint 
	hint = obLanguage("Grade","kSetAllNotRated")
	If Not bEmptyExamTypes Then
		ButtonSave "SaveGrades()", obLanguage("Common","kSave")
		ButtonReset "resetForm()", obLanguage("Common","kReset")
		If isNotRated Then Button "SetAllNotRated()", hint, hint, ""
	End If
End Sub

Sub DrawFilters(strForm)
	DrawTitleRow obLanguage("Common","kSubject"), objNSNET.GetSubjectClassName(strSubjClassID )
	If nType = kTermType Then
		DrawTitleRow obLanguage("Common","kSchoolPeriod"), objNSNET.GetTermName(periodID)
	End If
End Sub

Sub onDrawPage()
	If Not bIsDebug Then On Error Resume Next%>
	<form NAME="Gradebook" ACTION="SaveTotal.asp" METHOD="post" onsubmit="return false;">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("TYPE", nType, "PERIODID", periodID, "BACKPAGE", strBackPage, "EditConditional", IIf(bEditConditional, "1", "0")))%>

	<%Call DrawButtonsFilters(True, "Gradebook")
		
	If bEmptyExamTypes Then
		DrawInfo obLanguage("Grade","kEmptyExamTypesForClassSubject",strFunctionalityType), False
	Else
		If bOfferedPossible Then
			Call DrawLegend()
		ElseIf bTotalType Then
			DrawInfo obLanguage("Grade","kEmptyYearMarksForTotals"), False
		End If%>
		<div class="row">
			<div class="col-md-12"><%Call DrawTotalsTable()%></div>
		</div><%
	End If

	%></form><%

	If bExamEGE Then
		DrawInfo DB2Html(Replace(obLanguage("Grade","kEGEMarksPoint"), "%", kEGEMaxMark)), False
	End If
End Sub

Sub DrawTotalsTable()
	Dim	i, j, k, objRs
	Dim strMark, nMarkType, bOptCheck
	Dim rsStudentTotals, nMark
	Dim ind
	Dim bMayEditStudent, strAvgMark
	Dim arrStudentOnIndividualEducForm

	Set arrStudentOnIndividualEducForm = obTokenMgr.GetData( strToken, stStudentsOnIndividualEducForm )
	%><table class="table table-bordered table-xs table-middle-cells table-hover table-thin-sm">
		<tr>
			<th><%=obLanguage("Common","kStudents",strFunctionalityType)%></th><%
			If nType = kTermType Then
				%><th class="text-nowrap"><%=obLanguage("Common","kAverageMark")%></th><%
			ElseIf bTotalType Then
				%><th class="text-center"><%=obLanguage("Common","kYear")%></th><%
			ElseIf bYearType Then
				For i=0 To UBound(arrTerms, 2)
					%><th class="text-nowrap"><%=DB2HTML(arrTerms(1, i))%></th><%
				Next
			End If%>
			<th><%=obLanguage("Common","kMark")%></th>
		</tr><%
		ind = -1
		For j = 0 To nUStudents
			Call GetMarkAndType(arrStudentMarksRs, j, strMark, nMarkType)
			%><tr <%=IIF(arrStudentOnIndividualEducForm.Contains(arrStudentMarksRs(indId, j)), " class=""individual-educ""", "")%>>
				<td class="text-nowrap text-left student-name text-nowrap"><span><%=(j+1)%>. <%=DB2HTML(arrStudentMarksRs(indName, j))%></span><%
					' Можно редактировать оценку ученика, есди она получена именно в выбранной сейчас классо-предмето-группе
					bMayEditStudent = (GetSafeLng(arrStudentMarksRs(indThisCSG, j), 1) = 1)
					If bMayEditStudent And bTotalType Then
						' Для Итоговых оценок - если нет соответствующей годовой оценки, то нельзя редактировать итоговую
						bMayEditStudent = Not IsDull(arrStudentMarksRs(indYearMark, j))
					End If
					If bMayEditStudent Then
						%><input name="SID" type="hidden" value="<%=arrStudentMarksRs( indId, j )%>"><%
					End If
				%></td><%
				If nType = kTermType Then
					strAvgMark = ""
					If Not isNull( arrAverageMarks ) Then
						k = 0
						While arrStudentMarksRs( indId, j ) <> arrAverageMarks( 0, k )
							k = k + 1
						Wend
						strAvgMark = arrAverageMarks( 1, k )
					End If
					%><td class="text-center"><%=DB2HTML(strAvgMark)%></td><%
				ElseIf bExam Then
					bOptCheck = Not IsDull(arrStudentMarksRs(indAtOpt, j))
				ElseIf bYearType Then
					Set rsStudentTotals = objNSNET.GetStudentTotalsForSG_Execute(objCmdTotalMarks, arrStudentMarksRs( indId, j ))
					If rsStudentTotals.EOF Then GenerateError obLanguage("Grade","kCannotGetTotals")
					For i=0 To UBound(arrTerms, 2)
						If GetSafeID(arrTerms(0, i), Null) <> GetSafeID(rsStudentTotals("TERMID"), Null) Then
							%><td>&nbsp;</td><%
						Else
							nMark = rsStudentTotals("MARK").Value
							bPass = (GetSafeLng(rsStudentTotals("GRADINGSYS"), nGradeSystem) = kGradingSystem_Pass)
							%><td class="text-center"><%=DB2HTML(GetMark(nMark, bPass))%></td><%
							rsStudentTotals.MoveNext
						End If
					Next
				End If

			bPass = (GetSafeLng(arrStudentMarksRs(indPass, j), nGradeSystem) = kGradingSystem_Pass) ' LocalPass, may be different from one student to another

			If bMayEditStudent Then
				ind = ind + 1
				Call DrawMarkInfo(arrStudentMarksRs(indId, j), strMark, nMarkType, ind, arrAverageMarks, k, bAtOpt, bOptCheck) ' Теперь здесь надо передавать в качестве индекса ind, а не j
			Else
				If bExam Then
					If strMark = "" Then
						If bOptCheck Then strMark = "." ' Отметка, что экзамен "по выбору"
					Else
						If nMarkType < 0 Then strMark = GetMark2Type(strMark)
					End If
				ElseIf (bPass Or nMarkType < 0) And Not IsDull(strMark) Then
					strMark = GetMark2Type(strMark)
				ElseIf bTotalType Then
					%><td>&nbsp;</td><%
				End If
				%><td class="text-center"><%=DB2HTML(strMark)%></td><%
			End If
			%></tr><%
		Next
	If bYearType Then Call objNSNET.DisposeCommand(objCmdTotalMarks)
	%></table><%
End Sub

Sub GetMarkAndType(arrMarks, ind, strMark, nMarkType)
	If IsNull( arrMarks( indMark, ind ) ) Then
		strMark = ""
		nMarkType = 0
	Else
		strMark = arrMarks( indMark, ind )
		If CLng(strMark) > 0 And (Not bIsGradeSystemPass Or bExam) Then
			nMarkType = 1
		Else
			nMarkType = CLng( strMark )
		End If
	End If
End Sub

Sub DrawMarkInfo(strStudentID, strMark, nMarkType, ind, arrAvMarks, nAvMarkIndex, bAtOpt, bOptCheck)
	Dim i
	Dim strTotMark, bOfferedMark
	Dim strYearMark, nYearMarkType
	Dim indStudent

	strMark = CStr(strMark)
	bOfferedMark = False
	If bTotalType Then
		strStudentID = CStr(strStudentID)
		If dictStudID2YearMarksIndex.Exists(strStudentID) Then
			indStudent = dictStudID2YearMarksIndex(strStudentID)
			If GetSafeLng(arrStudentMarksRs(indThisCSG, indStudent), 1) = 1 Then
				strYearMark = arrStudentMarksRs(indYearMark, indStudent)
				If strYearMark <> "" Then
					%><td class="text-center"><%=GetMark(strYearMark, bPass)%></td><%
					If bOfferedPossible Then
						If strMark = "" Then
							strMark = strYearMark
							nMarkType = nYearMarkType
							bOfferedMark = True'(Clng(strYearMark)>0)
						End If
					End If
				End If
			End If
		End If
	End If%>
<td class="text-center">
	<select name="MarkType" class="form-control form-control-inline" onchange="dataChanged();"><%
		If bIsGradeSystemPass Then%>
			<option <%If nMarkType = 0 Then rw "selected"%> value="0">&nbsp;</option><%
		Else%>
			<option <%If ( nMarkType = 0 ) Or ( nMarkType = 1 ) Then rw "selected"%> value="1"><%=obLanguage("Common","kMark_")%>:</option><%
		End If
		For i = 1 To UBound(arrMarkTypes)
			rw "<option value=""" & arrMarkTypes(i,0) & """"
			If strMark = CStr(arrMarkTypes(i,0)) Then rw " selected"
			rw ">" & arrMarkTypes(i,1) & "</option>"
		Next%>
	</select><%
	If Not bIsGradeSystemPass Then
		strTotMark = ""
		If strMark <> "" Then
			strTotMark = strMark
			If nMarkType < 0 Then strTotMark = GetMark2Type(strTotMark)
		ElseIf bOfferedPossible Then
			If nType = kTermType Then
				If Not isNull( arrAvMarks ) Then
					If Not IsEmpty(arrAvMarks( 1, nAvMarkIndex )) Then
						strTotMark = RoundMark( arrAvMarks( 1, nAvMarkIndex ) )
						If strTotMark <> "" Then bOfferedMark = True
					End If
				End If
			End If
		End If

		rw " "
		DrawInputEx strTotMark, "Mark", "text", "text-center form-control-inline", 3, IIf(kIsTKR, 5, 4), _
			"autocomplete=""off"" onKeyDown=""return keyHandler(this)""" & IIF(nMarkType < 0, " disabled style=""background-color: lightgray;""", "") & IIF(bOfferedMark, " markType=""bOfferedMark""", "")  , _
			Null
		If bAtOpt Then
			%> <input type="checkbox" name="AtOpt_<%=ind%>" value="1"<%If bOptCheck Then rw " checked"%>><%
		End If
	End If%>
</td><%
End Sub
%>
