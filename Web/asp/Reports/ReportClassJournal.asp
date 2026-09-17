<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTeachers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim dtEndDate, dtStartDate, bStartNewPage, bPrintOtherAssignements, bShowHours
Dim bOk, objTeachersOfSubjectRs, objCSG, nTeacherOfSubjectId

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	bOk = False
	bStartNewPage = True
	bPrintOtherAssignements = True
	bShowHours = False

	If bAll Then
		Call InitYearClasses()
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses(False)
	End If
End Sub

Sub Main()
	If objClassesRs.EOF Then Exit Sub ' for Classes test objClassesRs.EOF but not strClassID = "0" because GetClassListForYearStudent do not set strClassID = "0" for objClassesRs.EOF. It is for using one style.

	bIsIupGrade = False
	Call InitSubjectGroups_IUP()

	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	If strSubjClassID = "0" Then Exit Sub
	
	' strClassID should be OK here
	Set rsStudents = objNSNET.GetStudentListForSubjGroup(strSubjClassID, Empty, dtStartDate, dtEndDate, False, strStudentID)
	bOk = Not rsStudents.EOF
End Sub

Sub specialWrite()
	WriteClass
	Call obTokenMgr.SetData(strToken,stCurrSubjClass, strSubjClassID)
	Call WriteDateRange(dtStartDate, dtEndDate)
End Sub

Sub specialHead()
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate)
	'If Not bOk Then Exit Sub
%>
<script>
<!--
var oldClassId;
var oldSubjectGroupId;

$(document).ready(function(){
	oldClassId =  $('select[name=PCLID_IUP]').val();
	oldSubjectGroupId = $('select[name=SCLID]').val();

	$('select[name=PCLID_IUP]').removeAttr('onchange').change( onChangeClass );
	$('select[name=SCLID]').removeAttr('onchange').change( onChangeSubject );
	$('*[name=TID]').removeAttr('onchange');
	$('input[name=ADT]').attr('LabelSync',true);
	$('input[name=DDT]').attr('LabelSync',true);

	<%If strSubjClassID = "0" Then%>
		$('.form-group:gt(0)').hide();
		$('#buttonPanel').hide();
	<%Else%>
		$('.SGID').hide();
	<%End If%>
});

function onChangeDate(elem) {
	var newdate = $(elem).val();
	$(elem).prevAll('u:first:has(font)').children('font').html(newdate);
}

function onChangeClass(elem) {
	var elem = $(this)

	jsSubmit({
		action: '/asp/ajax/GetSubjectGroups4Class.asp',
		data: {"CLASSID_IUP": this.value}, 
		showProcessing: true, 
		onSuccess: onSuccessChangeClass,
		onError: function(){
			elem.val(oldClassId);
		}
	});
}

function onChangeSubject() {
	var elem = $(this)

	if(this.value == -1) {
		hidefilter("TID");
		return;
	}

	jsSubmit({
		action: '/asp/ajax/GetTeachers4SubjectGroup.asp',
		data: {"SGID": this.value}, 
		showProcessing: true, 
		onSuccess: onSuccessChangeSubject,
		onError: function(){
			elem.val(oldSubjectGroupId);
		}
	});
}

function setSelectOptions( nameElement, options, withAll, selectedId ) {
	$('*[name=' + nameElement + ']').replaceWith('<select class="form-control" name="' + nameElement + '"></select>');
	$('*[name=' + nameElement + ']').siblings('input[disabled]').remove();
	var selectElement = $('select[name=' + nameElement + ']')[0];
	var curOption;
	if (withAll) {
		curOption = new Option(language.Generic.Common.kAll,'-1', false, true );
		selectElement.options.add(curOption);
	}
	for (var i=0; i < options.length; i++) {
		curOption = new Option(options[i].name,options[i].id, false, selectedId == options[i].id );
		selectElement.options.add(curOption); 
	}
}
function showfilter(nameElem) {
	var form = document.Reports;
	$('.form-group:has(select[name=' + nameElem + '])', form).show();
}
function hidefilter(nameElem) {
	var form = document.Reports;
	$('.form-group:has(select[name=' + nameElem + '])', form).hide();
}
function showAlert(nameElem) {
	var form = document.Reports;
	$('.form-group:has(div select[name="SCLID"]):has(div div.alert)', form).show();
}
function hideAlert(nameElem) {
	var form = document.Reports;
	$('.form-group:has(div select[name="SCLID"]):has(div div.alert)', form).hide();
}
function onSuccessChangeClass(response, statustext) {
	var form = document.Reports;
	oldClassId = $('select[name=PCLID_IUP]').val();

	if( response.data.subjects.length > 0 ) {
		hideAlert("SCLID")
		showfilter("SCLID")
		$('.form-group:gt(0)').show();
		$('.printButtons').show();

		setSelectOptions("SCLID", response.data.subjects, true );
	} else {
		showAlert("SCLID")
	}
	if($('select[name=SCLID]').val() == '-1') {
		hidefilter("TID");
	}
}

function onSuccessChangeSubject(response) {
	oldSubjectGroupId = $('select[name=SCLID]').val();
	if( response.data.teachers.length > 0 ) {
		setSelectOptions("TID", response.data.teachers, false, response.data.teacher);
		showfilter("TID");
	}
}
function checkAssCnt(e) {
	e=getEvent(e);
	keycode = getKeyCode(e);
	element = getTargetElement(e);

	if ( keycode == 48 && element.value == '')
		return false;
	if ( keycode == 8 )
		return true;
	keychar = String.fromCharCode(keycode)
	numcheck = /\d/
	return numcheck.test(keychar)
}
function checkzero(e) {
	if( e.value=='0')
		e.value=1;
}
//--></script><%
End Sub

Sub specialFilters(strForm)
	Call DrawYearClasses(strForm, False, IIf(bAll, obLanguage("Filter", "kNoYearClasses", strFunctionalityType), obLanguage("Filter", "kYouNotChiefAndHasNoSubj",strFunctionalityType)))

	If bExit Then Exit Sub

	Call DrawSubjectGroupFilter(strForm)
	Call DrawDateIntervalRow
	Call DrawNumAssDaysFilter
	Call DrawEveryTableNewPageFilter
End Sub

Sub DrawSubjectGroupFilter(strForm)
	If strSubjClassID = "0" Then
		OpenFormGroup obLanguage("Filter", "kCourseGB")
		DrawInfo obLanguage("Filter","kNoCoursesGB"), False
		%><select name="SCLID"></select><%
		CloseFormGroup
	Else
		DrawFilterRow strForm, obLanguage("Filter", "kCourseGB"), "SCLID", oSubjClassesRs, "ID", "NAME", strSubjClassID, True
	End If
End Sub

Sub DrawTeacherFilter
	If strSubjClassID = "0" Then
		OpenFormGroup obLanguage("Common", "kTeacher", strFunctionalityType)
		%><select name="TID"></select><%
		CloseFormGroup
	Else
		Set objCSG = objNSNET.GetClassSubjectGroupInfo(strSubjClassID)
		nTeacherOfSubjectId = objCSG("TEACHERID")
		Set objTeachersOfSubjectRs = objNSNET.GetTeachers(strCurrYearID, objCSG("SUBJECTID"))
		DrawFilterRow "Reports", obLanguage("Common", "kTeacher", strFunctionalityType), "TID", objTeachersOfSubjectRs, "TEACHERID", "NICKNAME", nTeacherOfSubjectId, False
	End If
End Sub

Sub DrawNumAssDaysFilter()
	OpenFormGroup obLanguage("Reports","kAssignmentCntOnPage")
	%><input type="text" maxlength="3" size="5" name="ACNT" value="40" onkeypress="return checkAssCnt(event);" onkeyup="checkzero(this);"/><%
	CloseFormGroup
End Sub

Sub DrawEveryTableNewPageFilter()
	Call DrawTeacherFilter

	OpenFormGroup ""
	rw ShowCheckbox("StartNewPage", "1", bStartNewPage, obLanguage("Reports", "kStartNewPage"), "")
	rw ShowCheckbox("PrintOtherAssignements", "1", bPrintOtherAssignements, obLanguage("Reports", "kPrintOtherAssignement"), "")
	rw ShowCheckbox("ShowHours", "1", bShowHours, obLanguage("Reports", "kPrintJournalHours"), "")
	CloseFormGroup
End Sub
%>
