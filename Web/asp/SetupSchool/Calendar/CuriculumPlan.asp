<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->

<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CuriculumPlanDraw_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

'Const kMinCurHours = 0.01 - см. valMinCurHours в JavaScript. Если здесь определить 0.01, то она появляется в JavaScript как 0,01 (десятичный разделитель меняется!) и выдаёт ошибку.
Const kMinCurHours = "0.01" ' Надо обязательно определить как строку, чтобы избежать неправильного преобразования (в 0,01 в JavaScript)!

Dim objComponentList, objSubjectList, objCuriculum, objComponentListAll
Dim objRs, i, j, k, strComponentID, nSubj,nComp,bMoveNext
Dim strCompID, strSubjID, strOldCompID, strOldSubjID, strCuriculumGradeID, strValue
Dim arrIsAvailableColumn,arrCuriculumGrades,arrProfiles,nPCount,lngProfileID,nPrRecord
Dim bIsFieldExists, bIsSubjectExists
Dim strTable, strHeader, strComponentName, strSubjName
Dim nCuriculum_Grades, nCuriculum_Grade, nCuriculum_View, nCuriculum_SubjGroups, bCuriculum_SubjGroups
Dim arrClasses, nClassRecord
Dim nClassRowCnt, bClassesExists, nClassRecordCurr
Dim bViewByGrade ' то же самое, что nCuriculum_View=0, только короче
Dim arrGradeClassesValues
Dim arrCompClassNames
Dim bPreSchool, arrPreSchoolGrades
Dim strAttr
Dim nColsCount
Dim nRowSpan, nColWidth
Dim nScrolBarWidth

Dim kAttr

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCurPlan","kTitleCurriculumPlan")
End Function
Function GetPageMenuItem()
	GetPageMenuItem = miSetupSchoolCalendar
End Function
Function GetPageTabItem()
	GetPageTabItem = tbCuriculumPlan
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub ReadState()
	nColWidth = 30
	kAttr = " width=""" & nColWidth & """ "
	strAttr = kAttr

	If Request("COMPID").Count > 1 Then
		strComponentID = Request("COMPID")(Request("COMPID").Count)
	Else
		strComponentID = GetSafeID( Request("COMPID"), GetSafeID( obTokenMgr.GetData(strToken,"COMPID"), "0") )
	End If
	strComponentID = objNSNET.GetSafeComponentID(strComponentID, strCurrYearID)

	If IsDull(Request("Curiculum_Grades")) Then
		nCuriculum_Grades = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grades), -1)
	Else
		nCuriculum_Grades = GetSafeLng(Request("Curiculum_Grades"), Null)
	End If
	If IsDull(Request("Curiculum_Grade")) Then
		nCuriculum_Grade = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grade), -1)
	Else
		nCuriculum_Grade = GetSafeLng(Request("Curiculum_Grade"), Null)
	End If
	If IsDull(Request("Curiculum_View")) Then
		nCuriculum_View = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_View), 1)
	Else
		nCuriculum_View = GetSafeLng(Request("Curiculum_View"), Null)
	End If
	bViewByGrade = (nCuriculum_View = 0)
	If IsDull(Request("Curiculum_SubjGroups")) Then
		nCuriculum_SubjGroups = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_SubjGroups), 1)
	Else
		nCuriculum_SubjGroups = GetSafeLng(Request("Curiculum_SubjGroups"), Null)
	End If
	If nCuriculum_View <> 1 Or nCuriculum_SubjGroups <> 1 Then readonly = True
	If bIsEMForSchool Or bIsRegionEMForSchool Then readonly = True
End Sub

Sub SetupTableDrawParams()
	nScrolBarWidth = IIf( isIE,18,20)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, "nScrolBarWidth", nScrolBarWidth)
	Call obTokenMgr.SetData(strToken, "COMPID", strComponentID)
	Call obTokenMgr.SetData(strToken, stCuriculum_Grades, nCuriculum_Grades)
	Call obTokenMgr.SetData(strToken, stCuriculum_Grade, nCuriculum_Grade)
	Call obTokenMgr.SetData(strToken, stCuriculum_View, nCuriculum_View)
	Call obTokenMgr.SetData(strToken, stCuriculum_SubjGroups, nCuriculum_SubjGroups)
End Sub

Sub Main
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If

	Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

	nFilterGradeMin = -1
	nFilterGradeMax = -1
	If nCuriculum_Grades <> -1 Then
		Set objGrades = objNSNET.GetStageGradeList(strCurrYearID, nCuriculum_Grades)
		If nCuriculum_Grade >= 0 Then nCuriculum_Grade = objNSNET.GetSafeStageGradeID(nCuriculum_Grade, strCurrYearID, nCuriculum_Grades )
		If nCuriculum_Grade >= 0 Then
			nFilterGradeMin = nCuriculum_Grade
			nFilterGradeMax = nCuriculum_Grade
		Else
			Call InitSchoolSettings( objNSNET )
			If nCuriculum_Grades = 1 Then ' Младшая
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeJunior_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeJunior_Max)
			ElseIf nCuriculum_Grades = 2 Then ' Средняя
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeMiddle_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeMiddle_Max)
			ElseIf nCuriculum_Grades = 3 Then ' Старшая
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeSenior_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeSenior_Max)
			Else
				GenerateError obLanguage("Common","kInvalidParameter")
			End If
		End If
		nFilterGradeMin = CLng(nFilterGradeMin)
		nFilterGradeMax = CLng(nFilterGradeMax)
		If minGrade < nFilterGradeMin Then minGrade = nFilterGradeMin
		If maxGrade > nFilterGradeMax Then maxGrade = nFilterGradeMax
	End If

	Set objComponentList = objNSNET.GetAccessComponentList(strSchoolID, strCurrYearId, nFilterGradeMin, nFilterGradeMax)
	Set objComponentListAll = objNSNET.GetComponentList(strCurrYearId)
	strComponentID= GetSafeComponentID( strComponentID, objComponentList)

	Set objSubjectList = objNSNET.GetNotCurriculumSubjectList(strSchoolID, strCurrYearId, strComponentID, nFilterGradeMin, nFilterGradeMax)
	Set objCuriculum = objNSNET.GetCurriculumStat(strCurrYearID, strSchoolId, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExist(strCurrYearID)
	bIsSubjectExists = objNSNET.DoesSubjectExist(strCurrYearID)

	If bPreSchool Then bCuriculum_SubjGroups = False Else bCuriculum_SubjGroups = True
	Call SetupTableDrawParams()
End Sub

Sub onHead()
%>
<!-- #INCLUDE FILE=Float_js_inc.asp -->
<SCRIPT charset="windows-1251"><!--
<%Call DrawPrintScripts("PrintCuriculumPlan.asp","ExportCuriculumPlan.asp")
If Not objCuriculum.EOF Then %>
var valEps = 0.000001;
var valMinCurHours = <%=kMinCurHours%>;
function getFirstValFromMultiOrSingleElem(elem){
	return elem.length ? elem[0].value : elem.value;
}



function canSaveComponent( sCompID, nGrades, nClsInComp, nSubj, cName, curBox, curGr, bAddNew ) {
	var formList = parent.frames['piframe'].document.forms["List"];
	var el = formList.elements['HOURS'];
	var gr = formList.elements['Gr'];
	var elNClsInGr = formList.elements['NClsInGr'];
	var plan = formList.elements['Plan'];
	var elPSubjID = formList.elements['PSUBJID'];
	var lim = new Array(nClsInComp);
	var nSubjWithAdd = bAddNew ? nSubj + 1 : nSubj;
	var arrPSubj = new Array(nSubjWithAdd);
	var arrSubjGroupsHours = new Array(nSubjWithAdd);
	var strPSubjID = '';
	var ind = 0;
	var i, j;
	var elClsName = formList.elements['ClassName_' + sCompID];

	for (i=0;i<nClsInComp;i++) lim[i]=0.0;
	for (i=0;i<nSubjWithAdd;i++) arrPSubj[i]=0;
	for (i=0;i<nSubjWithAdd;i++){
		arrSubjGroupsHours[i] = new Array(nClsInComp);
		for (j=0;j<nClsInComp;j++) arrSubjGroupsHours[i][j]=0;
	}

	var indSubj = -1;
	if (el.length){
		for (i=curBox;i<curBox+nSubj*nClsInComp;i++) {

			ind = (i-curBox)%nClsInComp;
			if (ind == 0){
				indSubj++;
				strPSubjID = (indSubj == 0) ? getFirstValFromMultiOrSingleElem(elPSubjID) : elPSubjID[indSubj].value;
				if (strPSubjID != '')
					arrPSubj[indSubj] = strPSubjID;
			}
			var n1 = str2floatEx(el[i]);
			if (!isNaN(n1) && n1!=''){
				if (strPSubjID != ''){
					arrSubjGroupsHours[indSubj][ind] = n1;
					for (j=0;j<indSubj;j++)
						if ((arrPSubj[j] == strPSubjID) && (arrSubjGroupsHours[j][ind] > valEps)){
							if (arrSubjGroupsHours[j][ind] < (n1 - valEps))
								arrSubjGroupsHours[j][ind] = 0;
							else
								arrSubjGroupsHours[indSubj][ind] = 0;
							break;
						}
				}
				else
					lim[ind] = lim[ind] + n1;
			}
		}
	}
	else{
		var n1 = str2floatEx(el);
		if (!isNaN(n1) && n1!='')
			lim[0] = n1;
	}

	if (bAddNew)
		if (el.length){
			indSubj = nSubjWithAdd - 1;
			var elPSubjID = formList.elements['PSUBJID_ADD'];
			if (elPSubjID.length){
				var elSubjID = formList.elements['SUBJID'];
				if (!elSubjID.options) <%
				' if elSubjID.options, then it is a single element with name 'SUBJID'
				' and it is a ComboBox with added Subject.
				' Do not call elSubjID.length in this case because the number of Options will return!
				%>
					if (elSubjID.length)
						elSubjID = formList.elements['SUBJID'][elSubjID.length - 1]; //get last element, it is an added Subject
				strPSubjID = elPSubjID[elSubjID.selectedIndex].value;
			}
			else
				strPSubjID = elPSubjID.value;
			if (strPSubjID != '')
				arrPSubj[indSubj] = strPSubjID;

			for (i=el.length-nClsInComp;i<el.length;i++) {
				var n1 = str2floatEx(el[i]);
				if (!isNaN(n1) && n1!='') {
					ind = i+nClsInComp-el.length;

					if (strPSubjID != ''){
						arrSubjGroupsHours[indSubj][ind] = n1;
						for (j=0;j<indSubj;j++)
							if ((arrPSubj[j] == strPSubjID) && (arrSubjGroupsHours[j][ind] > valEps)){
								if (arrSubjGroupsHours[j][ind] < (n1 - valEps))
									arrSubjGroupsHours[j][ind] = 0;
								else
									arrSubjGroupsHours[indSubj][ind] = 0;
								break;
							}
					}
					else
						lim[ind] = lim[ind] + n1;
				}
			}
		}
		else{
			var n1 = str2floatEx(el);
			if (!isNaN(n1) && n1!='')
				lim[0] = n1;
		}

	if (el.length){
		for (i=0;i<nClsInComp;i++) // add max for Subject Groups
			for (j=0;j<nSubjWithAdd;j++){
				if (arrSubjGroupsHours[j][i] > valEps)
					lim[i]=lim[i]+arrSubjGroupsHours[j][i];
			}
	}

	if (nGrades>1) {
		var nCurrClass = 0;
		for (i=0;i<nGrades;i++){
			var nClsInGr = elNClsInGr[curGr+i].value;
			for (j=0;j<nClsInGr;j++){
				if (lim[nCurrClass] > parseFloat(plan[curGr+i].value) + valEps) {
					if (!confirm(language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1+lim[nCurrClass]+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_2+plan[curGr+i].value+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3+cName +language.SetupSchoolCurPlan.kConf_PlanGreaterLimit_4+elClsName[nCurrClass].value+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5)) {
						if (nSubj>0)
							el[curBox + nCurrClass].focus();
						else
							el[el.length-nClsInComp+i].focus();
						return false;
					}
				}
				nCurrClass++;
			}
		}
	}
	else {
		var nPlan = plan.length ? plan[curGr].value : plan.value;
		var nClsInGr = elNClsInGr.length ? elNClsInGr[curGr].value : elNClsInGr.value;
		var nCurrClass = 0;
		for (j=0;j<nClsInGr;j++){
			if (lim[nCurrClass] > parseFloat(nPlan) + valEps) {
				var sClsName = (nCurrClass == 0) ? getFirstValFromMultiOrSingleElem(elClsName) : elClsName[nCurrClass].value;
				if (!confirm(language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1+lim[nCurrClass]+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_2+nPlan+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3+cName +language.SetupSchoolCurPlan.kConf_PlanGreaterLimit_4+sClsName+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5)) {
					if (nSubj>0)
						el[curBox + nCurrClass].focus();
					else
						if (el.length) el[el.length-1].focus(); else el.focus();
					return false;
				}
			}
			nCurrClass++;
		}
	}
	return true;
}


function canAddToPlan( sCompID, nGrades, nClsInComp, nSubj, cName, nCompNum ) {
	var formList = parent.frames['piframe'].document.forms["List"];
	var curBox = 0;
	var curGr = 0;
	var nGr = formList.elements['NGr'];
	var elClsInComp = formList.elements['NClsInComp'];
	var subj = formList.elements['NSubj'];
	if (nGr.length)
		for (var c=0;c<nGr.length;c++) {
			if (nCompNum==c) break;

			var nGradesTmp = parseInt(nGr[c].value);
			var nClsInCompTmp = parseInt(elClsInComp[c].value);
			var nSubjTmp = parseInt(subj[c].value);

			curBox = curBox+nSubjTmp*nClsInCompTmp;
			curGr = curGr+nGradesTmp;
		}
	return canAddToPlanBoxGr(sCompID, nGrades, nClsInComp, nSubj, cName, curBox, curGr);
}


function canAddToPlanBoxGr( sCompID, nGrades, nClsInComp, nSubj, cName, curBox, curGr ) {
	var formList = parent.frames['piframe'].document.forms["List"];
	var formAdd = parent.document.forms["AddToPlan"];
	var el = formAdd.elements['HOURS'];
	var frameEl = formList.elements['HOURS'];
	var gr = formList.elements['Gr'];
	var elNClsInGr = formList.elements['NClsInGr'];
	var plan = formList.elements['Plan'];
	var elPSubjID = formList.elements['PSUBJID'];
	var lim = new Array(nClsInComp);
	var nSubjWithAdd = nSubj + 1;
	var arrPSubj = new Array(nSubjWithAdd);
	var arrSubjGroupsHours = new Array(nSubjWithAdd);
	var strPSubjID = '';
	var ind = 0;
	var i, j;
	var elClsName = formList.elements['ClassName_' + sCompID];

	for (i=0;i<nClsInComp;i++) lim[i]=0.0;
	for (i=0;i<nSubjWithAdd;i++) arrPSubj[i]=0;
	for (i=0;i<nSubjWithAdd;i++){
		arrSubjGroupsHours[i] = new Array(nClsInComp);
		for (j=0;j<nClsInComp;j++) arrSubjGroupsHours[i][j]=0;
	}

	var indSubj = -1;
	if (frameEl.length){
		for (i=curBox;i<curBox+nSubj*nClsInComp;i++) {

			ind = (i-curBox)%nClsInComp;
			if (ind == 0){
				indSubj++;
				strPSubjID = (indSubj == 0) ? getFirstValFromMultiOrSingleElem(elPSubjID) : elPSubjID[indSubj].value;
				if (strPSubjID != '')
					arrPSubj[indSubj] = strPSubjID;
			}
			var n1 = str2floatEx(frameEl[i]);
			if (!isNaN(n1) && n1!=''){
				if (strPSubjID != ''){
					arrSubjGroupsHours[indSubj][ind] = n1;
					for (j=0;j<indSubj;j++)
						if ((arrPSubj[j] == strPSubjID) && (arrSubjGroupsHours[j][ind] > valEps)){
							if (arrSubjGroupsHours[j][ind] < (n1 - valEps))
								arrSubjGroupsHours[j][ind] = 0;
							else
								arrSubjGroupsHours[indSubj][ind] = 0;
							break;
						}
				}
				else
					lim[ind] = lim[ind] + n1;
			}
		}
	}
	else{
		var n1 = str2floatEx(frameEl);
		if (!isNaN(n1) && n1!='')
			lim[0] = n1;
	}

	if (el.length){
		indSubj = nSubjWithAdd - 1;
		var elPSubjID = formAdd.elements['PSUBJID_ADD'];
		if (elPSubjID.length){
			var elSubjID = formAdd.elements['SUBJID'];
			if (!elSubjID.options) <%
			' if elSubjID.options, then it is a single element with name 'SUBJID' and it is a ComboBox with added Subject.
			' Do not call elSubjID.length in this case because the number of Options will return!
			%>
				if (elSubjID.length)
					elSubjID = formAdd.elements['SUBJID'][elSubjID.length - 1]; //get last element, it is an added Subject
			strPSubjID = elPSubjID[elSubjID.selectedIndex].value;
		}
		else
			strPSubjID = elPSubjID.value;
		if (strPSubjID != '')
			arrPSubj[indSubj] = strPSubjID;

		for (i=el.length-nClsInComp;i<el.length;i++) {
			var n1 = str2floatEx(el[i]);
			if (!isNaN(n1) && n1!='') {
				ind = i+nClsInComp-el.length;

				if (strPSubjID != ''){
					arrSubjGroupsHours[indSubj][ind] = n1;
					for (j=0;j<indSubj;j++)
						if ((arrPSubj[j] == strPSubjID) && (arrSubjGroupsHours[j][ind] > valEps)){
							if (arrSubjGroupsHours[j][ind] < (n1 - valEps))
								arrSubjGroupsHours[j][ind] = 0;
							else
								arrSubjGroupsHours[indSubj][ind] = 0;
							break;
						}
				}
				else
					lim[ind] = lim[ind] + n1;
			}
		}
	}
	else{
		var n1 = str2floatEx(el);
		if (!isNaN(n1) && n1!='')
			lim[0] = n1;
	}

	if (el.length){
		for (i=0;i<nClsInComp;i++) // add max for Subject Groups
			for (j=0;j<nSubjWithAdd;j++){
				if (arrSubjGroupsHours[j][i] > valEps)
					lim[i]=lim[i]+arrSubjGroupsHours[j][i];
			}
	}

	if (nGrades>1) {
		var nCurrClass = 0;
		for (i=0;i<nGrades;i++){
			var nClsInGr = elNClsInGr[curGr+i].value;
			for (j=0;j<nClsInGr;j++){
				if (lim[nCurrClass] > parseFloat(plan[curGr+i].value) + valEps) {
					if (!confirm(language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1+lim[nCurrClass]+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_2+plan[curGr+i].value+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3+cName +language.SetupSchoolCurPlan.kConf_PlanGreaterLimit_4+elClsName[nCurrClass].value+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5)) {
						if (el.length) el[nCurrClass].focus(); else el.focus();
						return false;
					}
				}
				nCurrClass++;
			}
		}
	}
	else {
		var nPlan = plan.length ? plan[curGr].value : plan.value;
		var nClsInGr = elNClsInGr.length ? elNClsInGr[curGr].value : elNClsInGr.value;
		var nCurrClass = 0;
		for (j=0;j<nClsInGr;j++){
			if (lim[nCurrClass] > parseFloat(nPlan) + valEps) {
				var sClsName = (nCurrClass == 0) ? getFirstValFromMultiOrSingleElem(elClsName) : elClsName[nCurrClass].value;
				if (!confirm(language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1+lim[nCurrClass]+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_2+nPlan+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3+cName +language.SetupSchoolCurPlan.kConf_PlanGreaterLimit_4+sClsName+language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5)) {
					if (el.length) el[nCurrClass].focus(); else el.focus();
					return false;
				}
			}
			nCurrClass++;
		}
	}
	return true;
}


function isEmptyVal(val){
	var sVal;
	if(!isNaN(val)) {
		sVal = val.toString();
	}
	else {
		sVal = val;
	}
	return (sVal=='');
}

function checkEmptyVals(el){
		var errCnt = -1;
		if (el.length){
			for (var i=0;i<el.length;i++) {
				var val = str2floatEx(el[i]);
				if (!isEmptyVal(val)) {
					if (isNaN(val) || (val < (valMinCurHours - valEps))) { errCnt=i; break; }
				}
			}
			if (errCnt!=-1) {
				alert(language.Generic.SetupSchoolCurPlan.kEnterNumberGreaterEqual_0p1); el[errCnt].focus(); return false;
			}
		}
		else {
			var val = str2floatEx(el);
			if (!isEmptyVal(val)) {
				if (isNaN(val) || (val < (valMinCurHours - valEps))) {
					alert(language.Generic.SetupSchoolCurPlan.kEnterNumberGreaterEqual_0p1); el.focus(); return false;
				}
			}
		}
}

function doSave(){
	if( isDBBusy() ) return false;
	var formList = parent.frames['piframe'].document.forms["List"];
	var el = formList.elements['HOURS'];
	if (el) {
		checkEmptyVals(el);

		var addComp = -1;
		if (formList.elements['AddComp'])
			addComp = formList.elements['AddComp'].value;
		var nGr = formList.elements['NGr'];
		var elClsInComp = formList.elements['NClsInComp'];
		var elClsCompID = formList.elements['CLASS_COMPID'];
		var subj = formList.elements['NSubj'];
		var cname = formList.elements['CName'];
		var curBox = 0;
		var curGr = 0;
		if (nGr.length)
			for (var c=0;c<nGr.length;c++) {
				var nGrades = parseInt(nGr[c].value);
				var nClsInComp = parseInt(elClsInComp[c].value);
				var sCompID = elClsCompID[c].value;
				var nSubj = parseInt(subj[c].value);
				var bAddNew = false;
				if (formList.elements['PSUBJID_ADD'])
					if (addComp)
						if (addComp==c) bAddNew = true;
				if (!canSaveComponent( sCompID, nGrades, nClsInComp, nSubj, cname[c].value, curBox, curGr, bAddNew )) return false;
				curBox = curBox+nSubj*nClsInComp;
				curGr = curGr+nGrades;
			}
		else {
			var nGrades = parseInt(nGr.value);
			var nClsInComp = parseInt(elClsInComp.value);
			var sCompID = elClsCompID.value;
			var nSubj = parseInt(subj.value);
			var bAddNew = false;
			if (formList.elements['PSUBJID_ADD'])
				bAddNew = (addComp > 0);
			if (!canSaveComponent( sCompID, nGrades, nClsInComp, nSubj, cname.value, curBox, curGr, bAddNew )) return false;
		}
	}
	setDBBusy();
	DoSubmit( formList, "" );
}


function SaveAddToPlan(){
	if( isDBBusy() ) return false;
	var formAdd = document.forms["AddToPlan"];
	var formList = parent.frames['piframe'].document.forms["List"];
	var el = formList.elements['HOURS'];
	if (el) {
		checkEmptyVals(el);

		var addComp = -1;
		var elClsCompID = formList.elements['CLASS_COMPID'];

		if (elClsCompID.length){
			var sCurAddComp = getListValue(formAdd.elements['COMPID']);
			for (var i=0;i<elClsCompID.length;i++) {
				if (elClsCompID[i].value == sCurAddComp){
					addComp = i;
					break;
				}
			}
		}
		else{
			if (formList.elements['AddComp'])
				addComp = formList.elements['AddComp'].value;
		}

		var nGr = formList.elements['NGr'];
		var elClsInComp = formList.elements['NClsInComp'];
		var subj = formList.elements['NSubj'];
		var cname = formList.elements['CName'];
		var curBox = 0;
		var curGr = 0;
		if (nGr.length){
			var nGrades = parseInt(nGr[addComp].value);
			var nClsInComp = parseInt(elClsInComp[addComp].value);
			var sCompID = elClsCompID[addComp].value;
			var nSubj = parseInt(subj[addComp].value);
			if (!canAddToPlan( sCompID, nGrades, nClsInComp, nSubj, cname[addComp].value, addComp )) return false;
		}else {
			var nGrades = parseInt(nGr.value);
			var nClsInComp = parseInt(elClsInComp.value);
			var sCompID = elClsCompID.value;
			var nSubj = parseInt(subj.value);
			if (!canAddToPlan( sCompID, nGrades, nClsInComp, nSubj, cname.value, addComp )) return false;
		}
	}
	setDBBusy();
	DoSubmit( formAdd, "" );
}

function OnCompUpdate()
{
	$('#compAdder').hide();
	$('#waitMesssage').slideDown();
	AjaxSubmitFormCommon("form[name=Filter] select, form[name=AddToPlan]", "curiculumplan_a.asp",
	function(data, textStatus)
	{
		<%' G Serge: http://my.opera.com/LoRd1990/blog/2007/12/23/http-e-code-tnt43-com-archives-5
		%>
		if (/^\[ *-[0-9] *,.+\]$/.test(data))
		{
			var json = eval(data);
			alert(json[1]);
			return;
		}
		$('#waitMesssage').slideUp();
		$('#compAdder').replaceWith(data);
		$('#compAdder').show();
	},
	function(XMLHttpRequest, textStatus, errorThrown)
	{
		$('#waitMesssage').slideUp();
		<%If bIsDebug Then%>
			alert(language.Generic.Common.kUnexpErr + "\n" + XMLHttpRequest.responseText);
		<%Else%>
			alert(language.Generic.Common.kUnexpErr);
		<%End If%>
	},
	"html");
}

<%End If%>
//--></SCRIPT><%
End Sub

Sub DrawFilters( strForm )%>
	<tr><th ALIGN="LEFT"><%=obLanguage("SetupSchoolCurPlan","kGrades")%>:</th>
		<td class="select">
		<select name="Curiculum_Grades" onChange="OnChangeSelect('<%=strForm%>','CuriculumPlan.asp');">
			<option <%If nCuriculum_Grades=-1 Then %>selected<%End If%> value="-1"><%=obLanguage("SetupSchoolCurPlan","kGradesAll")%></option>
			<option <%If nCuriculum_Grades=1 Then %>selected<%End If%> value="1"><%=obLanguage("SetupSchoolCurPlan","kGradeJunior")%></option>
			<option <%If nCuriculum_Grades=2 Then %>selected<%End If%> value="2"><%=obLanguage("SetupSchoolCurPlan","kGradeMiddle")%></option>
			<option <%If nCuriculum_Grades=3 Then %>selected<%End If%> value="3"><%=obLanguage("SetupSchoolCurPlan","kGradeSenior")%></option>
		</select>
	</td></tr><%
	If nCuriculum_Grades <> -1 Then
	 %>
	<tr><th ALIGN="LEFT"><%=obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)%>:</th>
		<td class="select">
		<select name="Curiculum_Grade" onChange="OnChangeSelect('<%=strForm%>','CuriculumPlan.asp');">
		<option <%If nCuriculum_Grade = -1 Then %>selected<%End If%> value="-1"><%=obLanguage("Common","kAll")%></option>
		<%If Not bPreSchool Then
			Call PopulateSelect(objGrades,"GRADE","GRADE",nCuriculum_Grade)
		Else
			Call PopulateSelectPartOfArrByRs(GetArrGrades(strFunctionalityType,1,0,0), objGrades, "GRADE", nCuriculum_Grade)
		End If%>
		</select>
	</td></tr>
	<%End If %>
	<tr><th ALIGN="LEFT"><%=obLanguage("Common","kView")%>:</th>
		<td class="select">
		<select name="Curiculum_View" onChange="OnChangeSelect('<%=strForm%>','CuriculumPlan.asp');">
			<option <%If nCuriculum_View=1 Then %>selected<%End If%> value="1"><%=obLanguage("SetupSchoolCurPlan","kPlanViewByClasses",strFunctionalityType)%></option>
			<option <%If nCuriculum_View=0 Then %>selected<%End If%> value="0"><%=obLanguage("SetupSchoolCurPlan","kPlanViewByGrades",strFunctionalityType)%></option>
		</select>
	</td></tr><%
	If bCuriculum_SubjGroups Then%>
		<tr><th ALIGN="LEFT"><%=obLanguage("SetupSchoolCurPlan","kSubjectGroups")%>:</th>
			<td class="select">
			<select name="Curiculum_SubjGroups" onChange="OnChangeSelect('<%=strForm%>','CuriculumPlan.asp');">
				<option <%If nCuriculum_SubjGroups=1 Then %>selected<%End If%> value="1"><%=obLanguage("SetupSchoolCurPlan","kSubjectGroups_Subjects")%></option>
				<option <%If nCuriculum_SubjGroups=0 Then %>selected<%End If%> value="0"><%=obLanguage("SetupSchoolCurPlan","kSubjectGroups_GroupName")%></option>
			</select>
		</td></tr><%
	End If
End Sub

Sub DrawButtons()
	If objCuriculum.EOF Then Exit Sub
	If Not readonly Then
		If Not objComponentListAll.EOF Then
			ButtonSave "doSave()", obLanguage("Common","kSave")
			ButtonReset "dataWereChanged = false;parent.frames['piframe'].document.forms['List'].reset();", obLanguage("Common","kReset")
		End If
	End If
	DrawPrintButtons()
End Sub


Sub onDrawPage()
	Dim strSubjectFieldName, nRowCount, strTDAdd
	Dim strFieldID, strFieldIDForCurSubject
	Dim nCntClsInGrade, nCntClsInComp, arrParentIDs, arrGradeClasses
	Dim strClassID, strCell
	Dim strSRC
%><FORM NAME="Filter" METHOD="post" ACTION="CuriculumPlan.asp">
<%=WriteObligatoryTags()%>
<%Call DrawButtonsFilters(True, "Filter")%>
</FORM><%
	If objCuriculum.EOF Then%><H3 ALIGN="CENTER"><%=obLanguage("SetupSchoolCurPlan","kCurriculumEmpty")%>. <%=obLanguage("SetupSchoolCurPlan","kFillHours")%></H3><%
		Exit Sub
	End If
	Call GetCurriculumColumns( arrCuriculumGrades, arrProfiles, nPCount, arrClasses )
	If nPCount <= 0 Then%><H3 ALIGN="CENTER"><%=obLanguage("SetupSchoolCurPlan","kGradeProfileNotDefined",strFunctionalityType)%></H3><%
		Exit Sub
	End If
	Call DrawExcelForm() %>
	<TABLE border="0" cellspacing="0" cellpadding="5">
		<TR><TD valign="top" >
			<span id="ProcessMessage"><%=obLanguage("Curriculum","kPleaseWait")%>...</span>
			<table cellpadding="0" cellspacing="0" border="0" id="FullPlanTable" style="visibility:hidden;"><tr><td>
			<TABLE border="1" cellpadding="0" cellspacing="0" <%=IIF(isFF,"","")%> id="PlanTableHeader" class="PlanTable"><%
	strTable = "<table class=""ThinTable"" border=""1"" cellpadding=""0"" cellspacing=""0"">"

	Call PrintTableHeader(IIf(bIsFieldExists, obLanguage("SetupSchoolCalendar","kSubjectFields"), "&nbsp;"), False)
	%></TABLE></td><td width="<%=nScrolBarWidth%>">&nbsp;</td></tr>

	<tr><td colspan="<%=nColsCount+1%>">
	<%strSRC = "CuriculumPlan_Frame.asp?" & Ver() & "&AT=" & strToken & "&CC=" & nColsCount%>
	<iframe height="500" MARGINWIDTH="0" MARGINHEIGHT="0" FRAMEBORDER="0" SCROLLING="auto"  NAME="piframe" id="piframe" SRC="<%=strSRC%>"></iframe>
	</td></tr></table><%


	%></TD></TR></TABLE><BR><%
	Call obTokenMgr.SetData(strToken, stTempString, strHeader)
	Call obTokenMgr.SetData(strToken, stPrintTable, strTable)
	strTable = strTable & "</TABLE>"
	If readonly Then Exit Sub
	If objComponentListAll.EOF Then Response.Write "<h3>"& obLanguage("SetupSchoolCalendar","kCurriculumLimitsNotDefined") &"</h3></FORM>": Exit Sub
	If objComponentList.EOF Then Exit Sub%>
<FORM NAME="AddToPlan" METHOD="post" ACTION="CuriculumPlanSave.asp" target="_parent">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags( Array("GradeMin", nFilterGradeMin, "GradeMax", nFilterGradeMax, "bAdd", "True") )%>
<H3><%=obLanguage("SetupSchoolCurPlan","kAddToPlan")%>:</H3>
<div id='waitMesssage' style="display: none"><%= obLanguage("SetupSchoolCalendar","kWaitMessage") %></div>
<TABLE id="compAdder" width="1%" class="ThinTable" border="1" cellpadding="0" cellspacing="0"><%
	Call PrintTableHeader(obLanguage("SetupSchoolCurPlan","kComponentLarge"), True)%>
	<TR>
	<TD class="select">
		<SELECT NAME="COMPID" onchange="OnCompUpdate();">

		<%PopulateSelect objComponentList, "COMPONENTID", "COMPONENTNAME", strComponentID
		arrIsAvailableColumn = GetAvailableColumns( Empty, arrCuriculumGrades, nPCount, strCurrYearID, strComponentID )
		%>

		</SELECT>
	</TD><%
	If NOT objSubjectList.EOF Then%>
		<TD class="select"><SELECT NAME="SUBJID"><%arrParentIDs = PopulateSelectSubject(objSubjectList, "SUBJECTID", "SUBJECTNAME", NULL)%></SELECT><%
		For i=0 To UBound(arrParentIDs)%>
			<INPUT type="hidden" name="PSUBJID_ADD" value="<%=arrParentIDs(i)%>"><%
		Next%>
		</TD><%
		For nPrRecord=0 To nPCount-1
			nClassRowCnt = GetClassRowCnt(nPrRecord)
			bClassesExists = IsArray(arrClasses(nPrRecord, 0))

			If arrIsAvailableColumn(nPrRecord) And bClassesExists Then
				For i = 0 To (arrClasses(nPrRecord, 1) - 1)
					Call PrintHours("", -1, -1, readonly)
				Next
			Else
				Response.write "<TD colspan=""" &nClassRowCnt& """>&nbsp;</TD>"
			End If
		Next
	Else%>
		<TD<%=strAttr%>><INPUT TYPE="hidden" NAME="SUBJID" VALUE="0">&nbsp;</TD><%
		For nPrRecord=0 To nPCount-1
			nClassRowCnt = GetClassRowCnt(nPrRecord)%>
			<TD colspan="<%=nClassRowCnt%>"><%
			For i = 1 To nClassRowCnt%>
				<INPUT TYPE="hidden" NAME="HOURS" VALUE=""><%
			Next%>
			&nbsp;</TD><%
		Next
	End If%></TR></TABLE>
	<br><br><%
	' don't use ButtonSave here
	rw ShowButton("add" ,"add", "JavaScript:SaveAddToPlan()", obLanguage("Common","kAdd"), obLanguage("Common","kAdd"))
	%>
	<br>&nbsp;
</FORM><%
	objSubjectList.Close
	objCuriculum.Close
	Set objSubjectList = Nothing
	Set objCuriculum = Nothing
End Sub

Sub PrintTableHeader(strSubjectFields,bAddTable)
	Dim strCell, bTableAdd, nClassCnt, arrGradeClasses
	bTableAdd = Not (strSubjectFields=obLanguage("SetupSchoolCurPlan","kComponentLarge"))
	nRowSpan = IIf(bViewByGrade, 2, 3)%>
	<TR bgcolor="#E7EFF7"><TH <%=IIF(bAddTable,"","id='sfecol'") %> width="1px" rowspan="<%=nRowSpan%>"><%=strSubjectFields%></TH><TH <%=IIF(bAddTable,"","id='secol'") %> width="1px" rowspan="<%=nRowSpan%>"><%=obLanguage("Common","kSubject")%></TH><%
	If bTableAdd Then strTable = strTable & "<tr><th rowspan=""" & nRowSpan & """>" & strSubjectFields & "</th><th rowspan=""" & nRowSpan & """>" & obLanguage("Common","kSubject") & "</th>"
	nColsCount = 2
	lngProfileID = arrProfiles(0)
	k = GetClassRowCnt(0)
	strCell = ""

	For i = 1 To nPCount-1
		If arrProfiles(i)=lngProfileID Then
			k = k + GetClassRowCnt(i)
		Else
			strCell = strCell & "<TH colspan=""" &k& """>" & DB2HTML_BR(objNSNET.GetProfileName(lngProfileID)) & "</TH>"
			lngProfileID = arrProfiles(i)
			k = GetClassRowCnt(i)
		End If
	Next
	strCell = strCell & "<TH colspan=""" &k& """>" & DB2HTML_BR(objNSNET.GetProfileName(lngProfileID)) & "</TH></TR>"

	Response.Write strCell & "<TR bgcolor=""#E7EFF7"">"
	If bTableAdd Then strTable = strTable & strCell & "<TR>"

	strCell = ""
	For i = 0 To nPCount-1
		strCell = strCell & "<TH " & IIF(bViewByGrade And Not bAddTable, "id=""cc" & nColsCount - 1 & """","") & " colspan=""" & GetClassRowCnt(i) & """>"
		If bPreSchool And arrCuriculumGrades(i) >= 0 And arrCuriculumGrades(i) <= 8 Then
			strCell = strCell & DB2HTML(arrPreSchoolGrades(arrCuriculumGrades(i)))
		Else
			strCell = strCell & arrCuriculumGrades(i)
		End If
		If bViewByGrade And Not bAddTable Then nColsCount = nColsCount + 1
		strCell = strCell & "</TH>"
	Next
	Response.Write strCell & "</TR>"
	If bTableAdd Then strTable = strTable & strCell & "</TR>"

	If Not bViewByGrade Then
		Response.Write "<TR bgcolor=""#E7EFF7"">"
		If bTableAdd Then strTable = strTable & "<TR>"
		strCell = ""
		For i = 0 To nPCount-1
			arrGradeClasses = arrClasses(i, 0)
			If IsArray(arrGradeClasses) Then
				For j = 0 To Ubound(arrGradeClasses, 2)
					strCell = strCell & "<TH " & IIF(bAddTable, "", "id=""cc" & nColsCount - 1 & """") & " >" & DB2HTML(arrGradeClasses(1, j)) & "</TH>"
					If Not bAddTable Then nColsCount = nColsCount + 1
				Next
			Else
				strCell = strCell & "<TH " & IIF(bAddTable, "", "id=""cc" & nColsCount - 1 & """") & " >&nbsp;</TH>"
				If Not bAddTable Then nColsCount = nColsCount + 1
			End If
		Next
		Response.Write strCell & "</TR>"
		If bTableAdd Then strTable = strTable & strCell & "</TR>"
	End If
End Sub


Function GetClassNumInGrade(arrGradeClasses, nClassID)
	Dim i
	For i = 0 To UBound(arrGradeClasses, 2)
		If arrGradeClasses(0, i) = nClassID Then
			GetClassNumInGrade = i
			Exit Function
		End If
	Next
	GenerateError obLanguage("SetupSchoolCurPlan","kErrClassNotFound",strFunctionalityType)
End Function

Function GetClassRowCnt(i)
	Dim cnt
	cnt = 1
	If Not bViewByGrade Then
		If IsArray(arrClasses(i, 0)) Then cnt = arrClasses(i, 1)
	End If
	GetClassRowCnt = cnt
End Function

Function PopulateSelectSubject( objRs, strIDField, strNameField, strCurID )
	If Not bIsDebug Then On Error Resume Next
	Dim strID, bSelected, strCCurID, nCount
	Dim arrParentIDs
	bSelected = False
	strCCurID = ""
	nCount = 0
	If Not IsNull(strCurID) Then strCCurID = CStr( strCurID )
	ReDim arrParentIDs(objRs.RecordCount - 1)
	While Not objRs.EOF
		strID = CStr(objRs(strIDField))
		Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
		If (IsNull(strCurID) Or strID = strCCurID) And Not bSelected Then
			Response.Write " SELECTED "
			bSelected = True
		End If
		Response.Write ">" & DB2HTML(objRs(strNameField))
		Response.Write "</OPTION>"
		arrParentIDs(nCount) = GetSafeID(objRs("PARENTSUBJECTID"), "")
		nCount = nCount + 1
		objRs.MoveNext
	WEnd
	PopulateSelectSubject = arrParentIDs
End Function

Function GetSafeComponentID(ID, rs)
	GetSafeComponentID = ID
	If Not rs.EOF Then
		While Not rs.EOF
			If rs("COMPONENTID") = ID Then
				rs.MoveFirst
				Exit Function
			End If
			rs.MoveNext
		Wend
		rs.MoveFirst
		GetSafeComponentID = rs("COMPONENTID")
	End If
End Function
%>
