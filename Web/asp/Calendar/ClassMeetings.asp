<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterWeeks.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/DateInput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kMaxShowIntersect = 15
Const kWeekLen = 7

Dim objRs, rsRooms, strRadio, objTimes, objPeriodsRs, strPeriodID, oldPeriodID
Dim nPattern, nCMCurrSubjCount, arrWeek, nCMCount, arrClassCM, arrNewDay
Dim dtDate
Dim objTeachersRs, strTeacherId, strSubjID
Dim nLessonCount, nLssns
Dim dtStart, dtEnd, dtYearStart, dtYearEnd
Dim dtClMeet_ArbitrDate_Start, dtClMeet_ArbitrDate_End
Dim arrCmnTimes
Dim strTermName, objTermInfo

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarCreateCalendar)
End Function

Function GetPageTitle()
	If readonly then
		GetPageTitle = obLanguage("Calendar","kPageTitleClosed1") & obTokenMgr.GetData(strToken, "CurrYearName") & obLanguage("Calendar","kPageTitleClosed2")
	Else
		GetPageTitle = obLanguage("Calendar","kTitleCM") & obLanguage("Calendar", "kSchoolSchedule", strFunctionalityType)
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClassMeets
 End Function

Sub ReadState()
	Dim i, objClassSubjectInfo

'	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
'=====Init Class, Subject, Teacher============================================================
	'Call InitYearClasses_IUP() #13557
	Call InitYearClasses_IUP_Ex(True)

	Call InitSubjectGroupsBySubject_IUP()
	If strSubjClassID = "0" Then Exit Sub

	Set objClassSubjectInfo = objNSNET.GetSubjectGroupInfo(strSubjClassID)
	strSubjID = GetSafeID(objClassSubjectInfo("SUBJECTID"), Null)
	strTeacherID = GetSafeID(objClassSubjectInfo("TEACHERID"), Null)
	Set objTeachersRs = objNSNET.GetTeachers(strCurrYearID, strSubjID)

'======Init Term, Week=============================================================
	Call InitTermsForSubjectGroup(False)
	If strTermID = "0" Then Exit Sub
	Call TermLimits(strTermID)

	Call InitWeek(dtTermStart, dtTermEnd)

	dtStart = IIF(DateDiff("d", dtWeekStart, dtTermStart, 0, 0) > 0, dtTermStart, dtWeekStart)
	dtEnd = IIF(DateDiff("d", dtWeekEnd, dtTermEnd, 0, 0) < 0 , dtTermEnd, dtWeekEnd)
	dtDate = dtWeekStart
'=====
	nLessonCount = objNSNET.GetCuriculumLessonsCount(strSubjClassID, strTermID)
	Call CalcAllTermsLimits( dtYearStart, dtYearEnd )

	If IsDull(Request("BACK"))Then Call obTokenMgr.SetData(strToken,stBackPage, Null) Else Call obTokenMgr.SetData(strToken,stBackPage, CStr(Request("BACK")))

'======Last arbitrary dates=============================================================
	If IsDull(obTokenMgr.GetData(strToken, stClMeet_ArbitrDate_Start)) Then
		dtClMeet_ArbitrDate_Start = Empty
		dtClMeet_ArbitrDate_End = Empty
	Else
		dtClMeet_ArbitrDate_Start = GetSafeDate(obTokenMgr.GetData(strToken, stClMeet_ArbitrDate_Start), Null)
		dtClMeet_ArbitrDate_End = GetSafeDate(obTokenMgr.GetData(strToken, stClMeet_ArbitrDate_End), Null)
	End If

	Set objTermInfo = objNSNET.GetTermInfo(strTermID)
	strTermName = GetSafeStr(objTermInfo("TERMNAME"), -1, "")
End Sub

Sub WriteState()
	If readonly then Exit Sub
	WriteClass_IUP
	Call obTokenMgr.SetData(strToken,stCurrSubjClass, strSubjClassID)
	WriteTerm
	Call obTokenMgr.SetData(strToken, stCurrDate, dtDate)
	Call obTokenMgr.SetData(strToken, stCMStartDate, dtStart)
End Sub

Sub Main
	Dim bClassMeetings

	Set objTimes = objNSNET.GetScheduleTimeList2(strCurrYearID, strSubjClassID)
	If objTimes.EOF Then Exit Sub

	Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(objTimes, "TIMENAME", Array("RELAY", "SCHEDULETIMENUMBER"), "{0} / {1}")
	arrCmnTimes = GetCommonTimes(objTimes)

	If strSubjClassID = "0" Then Exit Sub

	bClassMeetings = GetDaysArr()

	nPattern = Request("pattern")
	If IsDull(nPattern) Then nPattern = IIf(bClassMeetings, 1, 0)

	If Not bIsIupGrade Then 
		'Для ИУП групп (ППГ) не ищем пересечения расписания как в обычных КПГ.
		'В случае с КПГ правило простое - не должно быть пересечений расписания КПГ по выбранному классу.
		Call GetWeekClassMeetings(strClassID, strSubjClassID)
	End If

	Set rsRooms = objNSNET.GetRooms(strSchoolID, True)
End Sub

Function GetCommonTimes(objTimes)
	Dim arrTimes
	Dim nCnt, i, nIndex
	Dim strTimeNameOld, strTimeNameCurr, strTimeNumber
	Dim strSTID, nWeekDayNum

	nCnt = objTimes.RecordCount - 1
	ReDim arrTimes(3, nCnt)
	strTimeNameOld = ""
	nIndex = -1

	While Not objTimes.EOF
		strSTID = GetSafeID(objTimes("SCHEDULETIMEID"), Null)
		strTimeNameCurr = GetSafeStr(objTimes("TIMENAME"), -1, Null)
		nWeekDayNum = GetSafeLng(objTimes("WEEKDAYNUM"), Null)
		strTimeNumber = GetSafeStr(objTimes("SCHEDULETIMENUMBER"), -1, Null)
	
		If strTimeNameCurr <> strTimeNameOld Then
			nIndex = nIndex + 1
			' В роли ID используется просто индекс. Для проверки на клиенте (java code) пересечений для выбранного CSGID внутри себя,
			' т.е. для этого все данные есть на самой странице - достаточно использовать этот индекс. Но для обнаружения
			' пересечений с др. занятиями этого класса (сравнение с GetWeekClassMeetingList->arrSchTimesJava) очевидно нужны абсолютные значения SCHEDULETIMEID.
			arrTimes(0, nIndex) = CStr(nIndex)
			arrTimes(1, nIndex) = strTimeNameCurr
			arrTimes(2, nIndex) = Array("0", "0", "0", "0", "0", "0", "0")
			arrTimes(3, nIndex) = strTimeNumber
			strTimeNameOld = strTimeNameCurr
		End If

		arrTimes(2, nIndex)(nWeekDayNum - 1) = strSTID

		objTimes.MoveNext
	WEnd
	objTimes.MoveFirst

	If nIndex = -1 Then GenerateError obLanguage("Common","kUnexpErr")

	ReDim Preserve arrTimes(3, nIndex)
	GetCommonTimes = arrTimes
End Function

Function onUnload()
	If Not (readonly OR strSubjClassID = "0") Then onUnload = "closeExport();"
End Function

Sub onHead()
	Dim i, j

	If readonly Or strSubjClassID = "0" Then Exit Sub
	Call scriptSgCalendar("ClassesAndPeriods", dtYearStart, dtYearEnd, strSubjClassID)%>

<SCRIPT><!--
	var arrWeekDates = new Array(7);
	<%For i = 0 To 6%>
		arrWeekDates[<%=i%>] = '<%=Date2Str(DateAdd("d", i, dtWeekStart))%>';
	<%Next%>

	function canSubmit() {
		return checkForChanges; 
	}

	$(function() {
		$('select[name="WD"]').on('change', function() {
			var $this = $(this);
			var $row = $this.parent().parent();
			var selectedValue = $this.find(':selected').val();

			if(selectedValue == "-1") {
				$('select[name="Mtimes"]', $row).val(-1);
				$('select[name="Room"]', $row).val(-1);
			}
		});
	});

	function isValidSchedule() {
		var form		= document.ClassesAndPeriods;

		var els			= $('select[name=WD]', form);
		var meet		= $('select[name=Mtimes]', form);
		var rooms		= $('select[name=Room]', form);
		var teachers	= $('select[name=TEACHERID]', form);
		var dates		= $('input[name=Date]', form);

		for(var i = 0; i < dates.length; i++) {
			var wd					= $(els[i]).find(':selected').val();
			var mtime				= $(meet[i]).find(':selected').val();
			var selectedRoom		= $(rooms[i]).find(':selected').val();
			var selectedTeacher		= $(teachers[i]).find(':selected').val();

			if(wd == "-1" && mtime == "-1" && (selectedRoom == "-1" || selectedRoom == undefined) && selectedTeacher != "-1") continue;

			if(wd != "-1" || mtime != "-1" || selectedTeacher != "-1" || selectedRoom != "-1" && selectedRoom !== undefined) {
				if(selectedTeacher == "-1") {
					focusAlert(teachers[i], language.Generic.Calendar.kFieldCannotBeEmpty);
					
					return false;
				}

				if(wd == "-1") {
					focusAlert(els[i], language.Generic.Calendar.kFieldCannotBeEmpty);
					
					return false;
				}

				if(mtime == "-1") {
					focusAlert(meet[i], language.Generic.Calendar.kFieldCannotBeEmpty);
					
					return false;
				}
			}
		}
		
		return true;
	}

	function CheckInterval(form) {
		if(form.changePeriod[form.changePeriod.selectedIndex].value == "0") {
			alert(language.Generic.Calendar.kErrMsgInputDataRange);

			return false;
		}

		if(form.changePeriod[form.changePeriod.selectedIndex].value == 'period') {
			if(form.StartChngPeriod.value == '') {
				alert(language.Generic.Calendar.kErrMsgInputDataRangeStart);

				return false;
			}

			if(form.EndChngPeriod.value == '') {
				alert(language.Generic.Calendar.kErrMsgInputDataRangeEnd);

				return false;
			}
		}

		var dtStartPeriod = str2date(form.StartChngPeriod.value);
		var dtEndPeriod = str2date(form.EndChngPeriod.value);

		if(dtStartPeriod == null) {
			alert(language.Generic.Calendar.kErrMsgInvalidDataRangeStart);

			return false;
		}

		if(dtEndPeriod == null) {
			alert(language.Generic.Calendar.kErrMsgInvalidDataRangeEnd);

			return false;
		}

		var dtStartYr = <%=Date2Js(dtYearStart)%>;
		var dtEndYr = <%=Date2Js(dtYearEnd)%>;

		if(dtStartPeriod > dtEndPeriod) {
			alert(language.Generic.Calendar.kErrorStartDateGTDueDate);

			return false;
		}

		if(dtStartPeriod < dtStartYr) {
			alert(language.Generic.Calendar.kErrorStartDateLTStartYear);

			return false;
		}

		if(dtEndPeriod > dtEndYr) {
			alert(language.Generic.Calendar.kErrorEndDateGTEndYear);

			return false;
		}

		return true;
	}

	var arrSchTimesJava = new Array();<%

	If Not bIsIupGrade Then
		'ДЛЯ ППГ не заполняем расписание, потому как нет проверки на пересечение
		If Not IsDull(nCMCount) Then
			For i = 0 To nCMCount%>
				arrSchTimesJava[<%=i%>] = new Array('<%=Date2Str(arrClassCM(0,i))%>',<%=arrClassCM(1,i) %>, <%=arrClassCM(2,i)%>,'<%=DB2Java(arrClassCM(3,i))%>','<%=arrClassCM(4,i)%>');<%
			Next
		End If
	End If%>

	var arrWeekSchTimes = new Array();<%
	If IsArray(arrCmnTimes) Then
		For i = 0 To Ubound(arrCmnTimes, 2)%>
			arrWeekSchTimes[<%=i%>] = new Array();<%
			For j = 0 To 6%>
				arrWeekSchTimes[<%=i%>][<%=j%>] = <%=arrCmnTimes(2, i)(j)%>;<%
			Next
		Next
	End If%>

	var wndExp = null;
	function ExportCM() {
		var form = document.ChangeTermForm;
		form.target = "_blank";

		DoSubmit(form, "ExportCM.asp");

		form.target = "_self";
	}

	function ExportCM_R() {
		var form = document.ChangeTermForm;
		form.target = "_blank";
		DoSubmit(form, "ExportCM_R.asp");
		form.target = "_self";
	}

	function ShowFormDeleteLessons() {
		checkForChanges().then(function() {
			var form = document.ChangeTermForm;
			form.target = "_self";
			DoSubmit(form, "DeleteLessons.asp");
			form.target = "_self";
		});
	}

	function closeExport() {
		if(wndExp && !wndExp.closed) {
			wndExp.forceClosing = true;
			wndExp.close();
		}
	}

	function ImportCM() {
		checkForChanges().then(function() {
			var applyBtn = function(dialog) {
				var form = document.TimeForm;
				if(!CheckInterval(form)) return;

				if(!$('input[name="pattern"]:checked').length) {
					alert(language.Generic.Calendar.kSelectWeekCntInPattern);
					return;
				}

				var sWeekPattern = $('input[name="pattern"]:checked').val();

				$.show.fileDialog({
					title: language.Generic.Calendar.kTitle2,
					fileExts: ['.nsxml'],
					submitParams: { ImportStart: document.TimeForm.StartChngPeriod.value, 
									ImportEnd: document.TimeForm.EndChngPeriod.value,
									ImportPattern: sWeekPattern
					},
					target: 'nsxml',
					content: language.Generic.Calendar.kImportName,
					invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFile + 'nsxml',
					url: '/asp/Calendar/importCMSave.asp'
				});

				dialog.successClose();
			};

			dialog = $.show.dialog({
				size: BootstrapDialog.SIZE_WIDE,
				title: language.Generic.Calendar.kSelectRangeAndWeekPattern,
				message: $('#timeForm'),
				buttons: [{label: language.Generic.Buttons.kApply, action: applyBtn, cssClass: 'btn-primary'}],
				onshown: function() {
					initDateInput();
				}
			});
		});
	}

	function saveSchedule() {
		var confirms = new Array();

		if(!isValidSchedule()) return;

		var form = document.ClassesAndPeriods;

		var sAskIntersect = '';
		var nCntIntersect = 0;
		
		var CMTime, CMWD;
		var nj = -1;
		var sMTimeID;
		var dCurrWeekWDDate;
		var dtStartPeriod = str2date(form.StartChngPeriod.value);
		var dtEndPeriod = str2date(form.EndChngPeriod.value);
		var res = true;

		$(form).find('select[name="WD"]').each(function(index, value) {
			var parent = $(value).parent().parent();

			CMWD = $(value).find('option:selected').val();
			CMTime = parent.find('select[name="Mtimes"]').val();

			//сравниваем с другими существующими занятиями
			if(!CheckAllSchTimes(index, CMWD, CMTime)) {
				alert(language.Generic.Calendar.kEditLessonExist);
				res = false;

				return false;
			}

			if((CMWD != "-1") && (CMTime != "-1")) {
				sMTimeID = arrWeekSchTimes[CMTime][CMWD-1];

				if(sMTimeID == '0') {
					<%If CLng(strFunctionalityType) <> kFuncType_PreSchool Then%>
						alert(language.Calendar.kErrorInvalidRelayLessonNum);
					<%Else%>
						alert(language.Calendar.kErrorInvalidLessonNum);
					<%End If%>

					res = false;

					return false;
				}

				parent.find('input[name="MtimesID"]').val(sMTimeID);
			}
		
			dCurrWeekWDDate = str2date(parent.find('input[name="Date"]').val());

			if(dCurrWeekWDDate >= dtStartPeriod && dCurrWeekWDDate <= dtEndPeriod) {
				if((nj = FindCollision(CMWD, CMTime)) >= 0) {
					sAskIntersect += arrSchTimesJava[nj][0] + ' - ' + arrSchTimesJava[nj][4] + ' ' + '<%=obLanguage("Calendar","kLessonExist")%>' + arrSchTimesJava[nj][3] + '.\n';
					nCntIntersect ++;

					if(nCntIntersect >= <%=kMaxShowIntersect%>) {
						confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Calendar.kInThisClass +' \n' + sAskIntersect + '<%=obLanguage("Common","kContinue")%>'), function() {
							sAskIntersect = '';
							nCntIntersect = 0;
						}));
					}
				}
			}
		});

		if(!res) return;

		if(sAskIntersect != '') {
			confirms.push($.show.getConfirmation(language.Calendar.kInThisClass + '\n' + sAskIntersect + '<%=obLanguage("Common","kContinue")%>'));
		}

		extDeferred.when(confirms)
			.then(function() {
				if(!form.StartChngPeriod.value) {
					return;
				}

				$(document).trigger('showProcessing');
				DoSubmit(form, "SaveClassMeetings.asp");
			});
	}

	function FindCollision(wd, Mtimes) {
		<%If nCMCount >= 0 Then%>
			if((wd != "-1") && (Mtimes != "-1")) {
				for(var j = 0; j < arrSchTimesJava.length; j++) {
					if ((wd == arrSchTimesJava[j][1]) && (arrWeekSchTimes[Mtimes][wd-1] == arrSchTimesJava[j][2])) {
						return j;
					}
				}
			}
		<%End If%>
		
		return -1;
	}

	function CheckAllSchTimes(index, CMWD, CMTime) {
		var res = true;
		var form = document.ClassesAndPeriods;

		$(form).find('select[name="WD"]').each(function(_index, _value) {
			var _parent = $(_value).parent().parent();

			var wd = $(_value).find('option:selected').val();
			var Mtimes = _parent.find('select[name="Mtimes"]').val();

			if((wd != "-1") && (Mtimes != "-1")) {
				if(_index != index) {
					if(wd == CMWD && Mtimes == CMTime) {
						res = false;
					}
				}
			}
		});

		return res;
	}

	function setDateByWeekDay(obj, strForm, i, displ) {
		var strField = 'Date';
		var form = document[strForm];
		var nIndex = obj.selectedIndex + displ;
		var nArrLength = form.elements[strField].length;

		if(nIndex > 0) {
			nIndex = nIndex - 1;
			if(nArrLength > 0) {
				form.elements[strField][i].value = arrWeekDates[nIndex];
			}
			else {
				form.elements[strField].value = arrWeekDates[nIndex];
			}
		}
		else {
			if(nArrLength > 0) {
				form.elements[strField][i].value = '';
			}
			else {
				form.elements[strField].value = '';
			}
		}
	}

	function changeTimeLimits(obj, form) {
		var strVal = obj[obj.selectedIndex].value;

		if(strVal == '0') {
			form.StartChngPeriod.value = ' ';
			form.EndChngPeriod.value = ' ';
		}
		else if(strVal == 'year') {
			$(form.StartChngPeriod).datepicker('setDate', '<%=Date2Str(dtYearStart)%>');
			$(form.EndChngPeriod).datepicker('setDate', '<%=Date2Str(dtYearEnd)%>');
		}
		else if(strVal == 'term') {
			$(form.StartChngPeriod).datepicker('setDate', '<%=Date2Str(dtTermStart)%>');
			$(form.EndChngPeriod).datepicker('setDate', '<%=Date2Str(dtTermEnd)%>');
		}
		else if(strVal == 'week') {
			$(form.StartChngPeriod).datepicker('setDate', '<%=Date2Str(dtWeekStart)%>');
			$(form.EndChngPeriod).datepicker('setDate', '<%=Date2Str(dtWeekEnd)%>');
		}
		else if(strVal == 'period') {
			<%If Not IsDull(dtClMeet_ArbitrDate_Start) Then%>
				$(form.StartChngPeriod).datepicker('setDate', '<%=Date2Str(dtClMeet_ArbitrDate_Start)%>');
				$(form.EndChngPeriod).datepicker('setDate', '<%=Date2Str(dtClMeet_ArbitrDate_End)%>');
			<%End If%>

			form.StartChngPeriod.focus();
		}

		dataChanged();
	}

	function CheckNewSchTimes(CMWD, CMTime) {
		var res = true;
		var form = document.ClassesAndPeriods;

		$(form).find('select[name="WD"]').each(function(index, value) {
			var parent = $(value).parent().parent();

			var wd = $(value).find('option:selected').val();
			var Mtimes = parent.find('select[name="Mtimes"]').val();

			if((wd != "-1") && (Mtimes != "-1")) {
				if(wd == CMWD && Mtimes == CMTime) {
					res = false;
				}
			}
		});

		return res;
	}

	function addLesson() {
		checkForChanges().then(function() {
			var addBtn = function(dialog) {
				var form = document.AddLesson;

				if(!CheckInterval(form)) return;

				var CMWD = $(form).find('select[name="WD"] :selected').val();
				var CMTime = $(form).find('select[name="Mtimes"] :selected').val();

				if(CMWD == '-1') {
					alert(language.Generic.Calendar.kFieldLessonDayCannotBeEmpty);
					return;
				}

				if(CMTime == '-1') {
					alert(language.Generic.Calendar.kFieldLevelLessonCannotBeEmpty);
					return;
				}

				if(!CheckNewSchTimes(CMWD, CMTime)) {
					alert(language.Calendar.kNewLessonExist);
					return;
				}

				var sMTimeID = arrWeekSchTimes[CMTime][CMWD-1];

				if(sMTimeID == '0') {
					<%If CLng(strFunctionalityType) <> kFuncType_PreSchool Then%>
						alert(language.Calendar.kErrorInvalidRelayLessonNum);
					<%Else%>
						alert(language.Calendar.kErrorInvalidLessonNum);
					<%End If%>

					form.Mtimes.focus();

					return;
				}
				form.MtimesID.value = sMTimeID;

				$('form[name="AddLesson"] input[name="StartDayWeek"]').val($('select[name="DATE"]').val());

				$(document).trigger('showProcessing');
				DoSubmit(document.AddLesson, "SaveClassMeetings.asp");
			};

			$.show.dialog({
				size: BootstrapDialog.SIZE_WIDE,
				title: language.Generic.Calendar.kAddLesson,
				message: $('#addNewLesson'),
				buttons: [{label: language.Generic.Buttons.kAdd, action: addBtn, cssClass: 'btn-primary'}],
				onshown: function() {
					initDateInput();
				}
			});
		});
	}

	function deleteLessons() {
		checkForChanges().then(function() {
			var deleteBtn = function(dialog) {
				if(!CheckInterval(document.DeleteLessons)) return;

				$(document).trigger('showProcessing');
				DoSubmit(document.DeleteLessons, "SaveClassMeetings.asp");
			};

			$.show.dialog({
				size: BootstrapDialog.SIZE_WIDE,
				title: language.Generic.Calendar.kBtnCancelLessons,
				message: $('#deleteLessons'),
				buttons: [{label: language.Generic.Common.kOk, action: deleteBtn, cssClass: 'btn-primary'}],
				onshown: function() {
					initDateInput();
				}
			});
		});
	}

	var dialog = null;
	function applySchedule() {
		var applyBtn = function(dialog) {
			if(!CheckInterval(document.TimeForm)) return;

			if(!$('input[name="pattern"]:checked').length) {
				alert(language.Generic.Calendar.kSelectWeekCntInPattern);
				return;
			}

			$('form[name="ClassesAndPeriods"] input[name="StartChngPeriod"]').val($('form[name="TimeForm"] input[name="StartChngPeriod"]').val());
			$('form[name="ClassesAndPeriods"] input[name="StartDayWeek"]').val($('select[name="DATE"]').val());

			$('form[name="ClassesAndPeriods"] input[name="EndChngPeriod"]').val($('form[name="TimeForm"] input[name="EndChngPeriod"]').val());
			$('form[name="ClassesAndPeriods"] input[name="pattern"]').val($('form[name="TimeForm"] input[name="pattern"]:checked').val());

			var changePeriod = $('form[name="TimeForm"] select[name="changePeriod"]').val();
			$('form[name="ClassesAndPeriods"] input[name="changePeriod"]').val(changePeriod);

			saveSchedule();
		};

		dialog = $.show.dialog({
			size: BootstrapDialog.SIZE_WIDE,
			title: language.Generic.Calendar.kApplySchedule,
			message: $('#timeForm'),
			buttons: [{label: language.Generic.Buttons.kApply, action: applyBtn, cssClass: 'btn-primary'}],
			onshown: function() {
				initDateInput();
			}
		});
	}
//--></SCRIPT><%
End Sub

Sub DrawFilters(strForm)
	Dim strChange

	If readonly Then Exit Sub
	'If objTimes.EOF Then Exit Sub
	Call DrawYearClasses_IUP(strForm, False, obLanguage("Filter", "kNoYearClasses", strFunctionalityType))
	Call DrawSubjectGroups_IUP(strForm, False, True) : If bExit Then Exit Sub

	If objTimes.EOF Then
		DrawWarning obLanguage("Calendar","kCantDefineSTVariantForSG")

		Exit Sub
	End If

	Call DrawTerms(strForm) : If bExit Then Exit Sub
	strChange = "OnChangeSelect('" & strForm & "','" & strScriptName & "');"
	Call DrawWeekWithArrows(strForm, dtTermStart, dtTermEnd, kStartNWeek + DateDiff("ww", dtYearStart, dtTermStart, 0, 0), obLanguage("Calendar","kPrevWeek"), obLanguage("Calendar","kNextWeek"))
End Sub

Sub DrawButtons()
	Call DropDownButtonEx(obLanguage("Buttons","kSave"), "glyphicon glyphicon-floppy-save", "btn-primary", Array("saveSchedule();", "", "", obLanguage("Calendar","kSelectedWeek"), "applySchedule();", "", "", obLanguage("Calendar","kInInterval")))

	Call ButtonReset("resetScreen('ClassesAndPeriods')", obLanguage("Common","kCancel"))
	Call ButtonAddEx("addLesson();", obLanguage("Calendar", "kAddLesson"), obLanguage("Calendar", "kAddLesson"))

	Call DropDownButtonEx(obLanguage("Calendar","kTitleDelLessons"), "glyphicon glyphicon-minus-sign", "btn-danger", Array("ShowFormDeleteLessons();", "", "", obLanguage("Calendar", "kForSeveralClass", strFunctionalityType), "deleteLessons();", "", "", obLanguage("Calendar", "kForSelectSubject")))
End Sub

Sub DrawLinkButtons
	Call ButtonExportCommonEx("ExportCM();", obLanguage("Calendar","kSaveXML"), obLanguage("Buttons","kExport"))
	Call ButtonExportCommonEx("ExportCM_R();", obLanguage("Calendar","kSaveXML_R"), obLanguage("Buttons","kExport"))
	Call ButtonImport("ImportCM();", "Импорт")
End Sub

Sub onDrawPage()
	Dim i%>

	<FORM NAME="ChangeTermForm" METHOD="post" ACTION="ClassMeetings.asp" TARGET="_self">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ImportStart", "", "ImportEnd", "", "ImportPattern", ""))%>

		<%Call DrawButtonsFilters(Not readonly And Not objTimes.EOF And strSubjClassID <> "0", "ChangeTermForm")%>
	</FORM><%

	If readonly Then Exit Sub
	If objTimes.EOF Then Exit Sub
	If bExit Then Exit Sub

	i = 0%>

	<FORM NAME="ClassesAndPeriods" METHOD="post" ACTION="SaveClassMeetings.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("StartDayWeek", "", "pattern", "1", "StartChngPeriod", Date2Str(dtWeekStart), "EndChngPeriod", Date2Str(dtWeekEnd), "ACT", "save", "changePeriod", ""))%>

		<div class="row">
			<div class="col-md-12"><%
				If nLssns <= 0 Then
					If nCMCurrSubjCount <> 0 Then
						Call DrawMessage(obLanguage("Calendar","kAllZero"), "info", False)
					End If
				Else%>
					<table class="table table-bordered table-condensed table-thin">
						<tr>
							<th colspan="2">
								<%=obLanguage("Calendar","kLessonDay")%>
							</th>
							<th><%
								If CLng(strFunctionalityType) <> kFuncType_PreSchool Then%>
									<%=obLanguage("Calendar","kLevelLesson")%><%
								Else%>
									<%=obLanguage("Calendar","kLesson", strFunctionalityType)%><%
								End If%>
							</th>
							<th>
								<%=obLanguage("Common","kRoom",strFunctionalityType)%>
							</th>
							<th>
								<%=obLanguage("Filter","kTeacherGB",strFunctionalityType)%>
							</th>
						</tr><%
						For i = 0 To UBound(arrWeek, 2)%>
							<tr>
								<td><%
									DrawSelectWeekDay "WD", arrNewDay, arrWeek(0, i), IIf(arrWeek(5, i), Null, obLanguage("Common","kNo")), "dataChanged(); setDateByWeekDay(this, 'ClassesAndPeriods', " & i & ", " & IIF(arrWeek(5, i), 1, 0) & ");", "form-control-inline"%>
								</td>
								<td>
									<input class="form-control" type="text" name="Date" value="<%If Not IsDull(arrWeek(1, i)) Then Response.Write Date2Str(arrWeek(1, i))%>"
										size="<%=TextInputSize(10)%>"
										disabled
										onChange="document.forms['ClassesAndPeriods'].WD[<%=i%>].focus();"
										onClick="document.forms['ClassesAndPeriods'].WD[<%=i%>].focus();"
										onFocus="document.forms['ClassesAndPeriods'].WD[<%=i%>].focus();">
								</td>
								<td><%
									DrawSelectSchedTimes "Mtimes", arrCmnTimes, arrWeek(6, i), ""%>
									<input type="hidden" name="MtimesID" value="">
								</td>
								<td><%
									If Not rsRooms.BOF Then rsRooms.MoveFirst
									DrawSelectRs rsRooms, "Room", "RoomID", "RoomName", IIF(IsDull(arrWeek(2, i)), "", arrWeek(2, i)), " ", ""%>
								</td>
								<td><%
									DrawSelect objTeachersRs, "TEACHERID", "TEACHERID", "NICKNAME", arrWeek(4, i), " "%>
									<input type="hidden" name="WD_Old" value="<%=arrWeek(0, i)%>">
									<input type="hidden" name="Mtimes_Old" value="<%=arrWeek(3, i)%>">
								</td>
							</tr><%
						Next%>
					</table><%
				End If%>
			</div>
		</div>
	</FORM>
	
	<script id="addNewLesson" type="text/html">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal" name="AddLesson">
						<%=WriteObligatoryTags()%>
						<%=WriteHiddenTags(Array("StartDayWeek", "", "ACT", "add"))%><%
						SetFiltersWidth "", "col-md-3", "col-md-9"

						OpenFormGroup obLanguage("Calendar","kLessonDay")
							DrawSelectWeekDay "WD", arrNewDay, "-1", "", "dataChanged(); setDateByWeekDay(this, 'AddLesson', 0, 0);", "form-control-inline"%>
							<input	type="text" name="Date" class="form-control form-control-inline" value="" size="<%=TextInputSize(10)%>"
								disabled readonly
								style="margin-left:10px; padding-bottom:3px;"
								onChange="document.AddLesson.WD.focus();"
								onClick ="document.AddLesson.WD.focus();"
								onFocus ="document.AddLesson.WD.focus();"><%
						CloseFormGroup

						OpenFormGroup IIF(CLng(strFunctionalityType) <> kFuncType_PreSchool, obLanguage("Calendar","kLevelLesson"), obLanguage("Calendar", "kLesson", strFunctionalityTYpe))%>
							<%DrawSelectSchedTimes "Mtimes", arrCmnTimes, "", ""%>
							<input type="hidden" name="MtimesID" value=""><%
						CloseFormGroup

						OpenFormGroup obLanguage("Common","kRoom",strFunctionalityType)
							If Not rsRooms.BOF Then rsRooms.MoveFirst
							DrawSelectRs rsRooms, "Room", "RoomID", "RoomName", Null, " ", ""
						CloseFormGroup

						OpenFormGroup obLanguage("Filter","kTeacherGB",strFunctionalityType)
							DrawSelect objTeachersRs, "TEACHERID", "TEACHERID", "NICKNAME", strTeacherId, Null%>
							<input type="hidden" name="WD_Old" value="">
							<input type="hidden" name="Mtimes_Old" value=""><%
						CloseFormGroup

						Call DrawSimpleFilterRow(obLanguage("Calendar","kRange"), "changePeriod", Array("week", obLanguage("Calendar","kWeekRange"), "term", strTermName, "year", obLanguage("Calendar","kAllRanges"), "period", obLanguage("Calendar","kAnyRange")), "week", Null, "changeTimeLimits(this, document.AddLesson)")

						OpenFormGroup obLanguage("Calendar","kDateRange")
							DrawDateInterval "StartChngPeriod", dtWeekStart, "EndChngPeriod", dtWeekEnd
						CloseFormGroup

						OpenFormGroup obLanguage("Calendar","kWeekPattern")%>
							<label class="radio-inline">
								<input type="radio" name="pattern" value="1" onchange="dataChanged();" checked> <%=obLanguage("Calendar","kBothWeek")%>
							</label>
							<label class="radio-inline">
								<input type="radio" name="pattern" value="2" onchange="dataChanged();"> <%=obLanguage("Calendar","kBoth")%>
							</label><%
						CloseFormGroup
				
						RestoreDefFiltersWidth%>
					</form>
				</div>
			</div>
		</div>
	</script>
	
	<script id="deleteLessons" type="text/html">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<form name="DeleteLessons" class="form-horizontal">
						<%=WriteObligatoryTags()%>
						<%=WriteHiddenTags(Array("StartDayWeek", "", "pattern", "0"))%><%

						SetFiltersWidth "", "col-md-3", "col-md-9"

						Call DrawSimpleFilterRow(obLanguage("Calendar","kRange"), "changePeriod", Array("week", obLanguage("Calendar","kWeekRange"), "term", strTermName, "year", obLanguage("Calendar","kAllRanges"), "period", obLanguage("Calendar","kAnyRange")), "week", Null, "changeTimeLimits(this, document.DeleteLessons)")

						OpenFormGroup obLanguage("Calendar","kDateRange")
							DrawDateInterval "StartChngPeriod", dtWeekStart, "EndChngPeriod", dtWeekEnd
						CloseFormGroup

						RestoreDefFiltersWidth%>
					</form>
				</div>
			</div>
		</div>
	</script>
	
	<script id="timeForm" type="text/html">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<form name="TimeForm" class="form-horizontal">
						<%=WriteObligatoryTags()%>
						<%=WriteHiddenTags(Array("StartDayWeek", ""))%><%

						SetFiltersWidth "", "col-md-3", "col-md-9"

						Call DrawSimpleFilterRow(obLanguage("Calendar","kRange"), "changePeriod", Array("week", obLanguage("Calendar","kWeekRange"), "term", strTermName, "year", obLanguage("Calendar","kAllRanges"), "period", obLanguage("Calendar","kAnyRange")), "term", Null, "changeTimeLimits(this, document.TimeForm)")

						OpenFormGroup obLanguage("Calendar","kDateRange")
							DrawDateInterval "StartChngPeriod", dtTermStart, "EndChngPeriod", dtTermEnd
						CloseFormGroup

						OpenFormGroup obLanguage("Calendar","kWeekPattern")%>
							<label class="radio-inline">
								<input type="radio" name="pattern" value="1" onchange="dataChanged();" checked> <%=obLanguage("Calendar","kBothWeek")%>
							</label>
							<label class="radio-inline">
								<input type="radio" name="pattern" value="2" onchange="dataChanged();"> <%=obLanguage("Calendar","kBoth")%>
							</label><%
						CloseFormGroup

						RestoreDefFiltersWidth%>
					</form>
				</div>
			</div>
		</div>
	</script><%
End Sub

Function GetDaysArr()
	Dim i, j, dtCurrDate, CurrDayOfWeek
	Dim objRs

	Set objRs = objNSNET.GetClassMeetingList(strSubjClassID, dtStart, dtEnd)
	GetDaysArr = Not objRs.EOF

	nLssns = nLessonCount - 1
	If nLssns >= 0 Then Redim arrDay(6, nLssns) Else Redim arrDay(6, 0)

	i = 0: j = 0
	Redim arrNewDay(1, j)

	dtCurrDate = dtWeekStart
	While DateDiff("d",dtCurrDate, dtWeekEnd, 0, 0) >= 0
		CurrDayOfWeek = Weekday(dtCurrDate, vbSunday)

		Redim Preserve arrNewDay(1, j)
		arrNewDay(0, j) = CurrDayOfWeek
		arrNewDay(1, j) = dtCurrDate

		Do While Not objRs.EOF
			If objRs("DAY") <> dtCurrDate Then Exit Do
			If i > nLssns Then Redim Preserve arrDay(6,i)
			arrDay(0,i) = CurrDayOfWeek
			arrDay(1,i) = dtCurrDate
			arrDay(2,i) = objRs("ROOMID")
			arrDay(3,i) = objRs("SCHEDULETIMEID")
			arrDay(4,i) = objRs("TEACHERID")
			If IsDull( arrDay(4,i) ) Then arrDay(4,i) = strTeacherID
			arrDay(5,i) = Not IsNull(objRs("CLASSMEETINGID"))
			arrDay(6,i) = objRs("TIMENAME")
			i = i + 1
			objRs.MoveNext
		Loop

		dtCurrDate = DateAdd("d", 1, dtCurrDate)
		j = j + 1
	WEnd

	nCMCurrSubjCount = i

	For i = 0 To Ubound(arrDay, 2)
		If IsDull(arrDay(4, i)) Then arrDay(4, i) = strTeacherID
	Next

	If nCMCurrSubjCount > nLessonCount Then nLssns = nCMCurrSubjCount Else nLssns = nLessonCount
	arrWeek = arrDay
	Set objRs = Nothing
End Function

Sub DrawSelect(objSelRS, strName, strID, strDisplay, curNMeet, strNull)
	objSelRS.MoveFirst

	IF IsNull(curNMeet) Then curNMeet = "-1"

	Response.Write "<SELECT Name='" & strName & "' onChange=""dataChanged()"" class=""form-control"">"

	If Not IsNull(strNull) Then Response.Write "<OPTION Value=""-1"" " & IIF(curNMeet = "-1", "selected", "") & ">" & strNull & "</OPTION>"
	PopulateSelect objSelRS, strID, strDisplay, curNMeet

	Response.Write "</SELECT>"
End Sub

Sub DrawSelectWeekDay(strName, arrDay, curDay, strNull, strOnChange, strAddClass)
	Dim i%>

	<select Name="<%=strName%>" onChange="<%=strOnChange%>" class="form-control <%=IIF(Not IsDull(strAddClass), strAddClass, "")%>"><%
		If Not IsNull(strNull) Then Response.Write "<option value=""-1"" >" & strNull & "</option>"

		For i = 0 To Ubound(arrDay, 2)%>
			<option value="<%=arrDay(0, i)%>"<%If arrDay(0, i) = curDay Then Response.Write " selected"%>>
				<%Response.Write WeekDayName(arrDay(0, i), True, vbSunday)%>
			</option><%
		Next%>
	</select><%
End Sub

Sub GetWeekClassMeetings(ByVal strClassID, ByVal strExceptSubjClassID)
	Dim objCMRs, i

	Set objCMRs = objNSNET.GetWeekClassMeetingList(strClassID, strExceptSubjClassID, dtStart, dtEnd)
	If Not objCMRs.EOF Then
		arrClassCM = objCMRs.GetRows(,, Array("DAY", "DAY", "SCHEDULETIMEID", "NAME", "TIMENAME")) '0-Day,1 -weekday,2-schtimeid, 3-classname
		nCMCount = Ubound(arrClassCM, 2)
		For i = 0 To nCMCount
			arrClassCM(1, i) = Weekday(arrClassCM(1,i), vbSunday)
		Next
	Else
		nCMCount = -1
	End If

	Set objCMRs = Nothing
End Sub

Sub CalcAllTermsLimits(dtYearStart, dtYearEnd)
	Dim strTermID, objRs

	objTerms.MoveFirst

	strTermID = objTerms("TERMID")
	Set objRs = objNSNET.GetTermInfo(strTermID)
	If objRs.EOF Then GenerateError obLanguage("Filter","kErrTermNotFound")
	dtYearStart = objRs("STARTDATE")
	objRs.Close

	Do
		objTerms.MoveNext
		If objTerms.EOF Then Exit Do
		strTermID = objTerms("TERMID")
	Loop

	Set objRs = objNSNET.GetTermInfo(strTermID)
	If objRs.EOF Then GenerateError obLanguage("Filter","kErrTermNotFound")
	dtYearEnd = objRs("ENDDATE")

	objRs.Close
	objTerms.MoveFirst
End Sub

'Внимание! Здесь совпадение для селекции определяется не по ID, а по имени, т.к. используются "обобщённые" значения
'для расписания звонков. Поэтому ф-ции GetScheduleTimeList2 и GetClassMeetingList - должны одинаково формировать эти имена!
Sub DrawSelectSchedTimes(strName, arrTimes, curTimeName, strNull)
	Dim i, strTimeName%>

	<select Name="<%=strName%>" onChange="dataChanged();" class="form-control form-control-inline"><%
		If Not IsNull(strNull) Then Response.Write "<option value=""-1"" >" & DB2HTML(strNull) & "</option>"

		For i = 0 To Ubound(arrTimes, 2)
			If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
				strTimeName = arrTimes(1, i)
			Else
				strTimeName = arrTimes(3, i)
			End If%>

			<option value="<%=DB2Value(arrTimes(0, i))%>"<%If arrTimes(1, i) = curTimeName Then Response.Write " selected"%>>
				<%Response.Write DB2HTML(strTimeName)%>
			</option><%
		Next%>
	</select><%
End Sub%>