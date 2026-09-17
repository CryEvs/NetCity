<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/timeBoxes.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kFirstDayOfWeek = 2
Const MAX_LESSON = 18

Dim objTimes, dtStartDate, dtEndDate
Dim nSchTimesCount
Dim arrRelays
Dim nWeekDay
Dim strSTVariantID, strSTVariantName

Function GetPageTitle()
	If readonly Then
		GetPageTitle = obLanguage("Calendar","kPreview") & " " & obLanguage("Calendar","kTitleLessonTime", strFunctionalityType)
	Else 
		GetPageTitle = obLanguage("Calendar","kAssign") & " " & obLanguage("Calendar","kTitleLessonTime", strFunctionalityType)
	End If

	If Not IsDull(strSTVariantName) Then
		GetPageTitle = GetPageTitle & ". " & obLanguage("Calendar","kLessonTimeVariant") & " " & GreenText(DB2HTML(strSTVariantName))
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbTimes
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarCreateCalendar)
End Function

Sub ReadState()
	nWeekDay			= GetSafeLng(Request("WeekDay"), vbMonday)
	strSTVariantID		= GetSafeID(Request("STVariantID"), GetSafeID(obTokenMgr.GetData(strToken, stSTVariantID), "-1"))

	If strSTVariantID = "-1" Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	strSTVariantName = GetSafeStr(Request("STVariantName"), -1, GetSafeStr(obTokenMgr.GetData(strToken, stSTVariantName), -1, ""))
End Sub

Sub Main
	Dim objRelays

	Set objTimes = objNSNET.GetScheduleTimeListForDay(strCurrYearID, CStr(strSTVariantID), -1, True, nWeekDay)
	nSchTimesCount = objTimes.RecordCount
	Set objRelays = objNSNET.GetScheduleRelays()
	If objRelays.EOF Then GenerateError obLanguage("Calendar","kCantGetScheduleRelays")
	arrRelays = objRelays.GetRows()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stSTVariantID, strSTVariantID)
	Call obTokenMgr.SetData(strToken, stSTVariantName, strSTVariantName)
End Sub

Sub onHead()%>
<SCRIPT><!--

<%If Not readonly Then%>

function SaveChanges() {
	if(isDBBusy()) return false;

	extDeferred.when(isValidEdit).then(function() {
		var saveForm = document.TimesForm;
		saveForm.act.value = 'save';
		jsSaveForm(saveForm);
	});
}

function RemoveLesson() {
	if(isDBBusy()) return false;

	var form = document.TimesForm;
	var chkBox = form.DeleteID;
	var bOk = false;

	if(chkBox)
		if(chkBox.length) {
			for(var i = 0; i < chkBox.length; i++) {
				if( chkBox[i].checked )
					bOk = true;
			}
		}
		else
			bOk = chkBox.checked;

	if(bOk) {
		checkForChanges().then(function() {
			$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function() {
				form.act.value = 'remove';
				setDBBusy();
				ok('TimesForm', '');
			});
		});
	}
	else
		alert(language.Generic.Calendar.kNoCheckedLessons);
}

function AddNew() {
	if(isDBBusy()) return;

	checkForChanges().then(function() {
		var addBtn = function(dialog) { 
			var form = document.addNewLesson;
			var tNRelay;

			if(form.NewTimeRelay != undefined)
				tNRelay = getListValue(form.NewTimeRelay);
			else
				tNRelay = 1;

			if(tNRelay == '-1'){
				alert(language.Generic.Calendar.kSetRelay);
				return;
			}

			var tNNum = getListValue(form.NewTimeNum);
			if(tNNum == '-1') {
				alert(language.Generic.Calendar.kSetLessonNumber);
				return;
			}

			extDeferred.when(isValidNew).then(function() {
				document.addNewLesson.act.value = 'add';
				document.addNewLesson.WeekDay.value = $('[name=WeekDay]').val();

				setDBBusy();
				ok('addNewLesson', 'SaveScheduleTimes.asp');
			});
		};

		$.show.dialog({
			title: language.Calendar.kAddLesson1,
			message: $('#addNewLessonTempl'),
			buttons: [{label: language.Calendar.kAddLesson1, action: addBtn, cssClass: 'btn-primary'}]
		});
	});
}

function applyToWeek() {
	extDeferred.when(checkForChanges, $.show.getConfirmation(language.Generic.Calendar.kAllDaysConfirm)).then(function() {
		var saveForm = document.TimesForm;
		saveForm.act.value = 'toweek';
		jsSaveForm(saveForm);
	});
}

function isCrossNew(TimeRelay, TimeNum, endH, endM, startH) {
	var form = document.addNewLesson;

	if (TimeRelay != null)
		var tRelay = str2lng(getListValue(TimeRelay)), tNum = str2lng(getListValue(TimeNum));
	else
		var tRelay = 1, tNum = str2lng(getListValue(TimeNum));

	if (form.NewTimeRelay != undefined)
		var tNRelay = str2lng(getListValue(form.NewTimeRelay)), tNNum = str2lng(getListValue(form.NewTimeNum));
	else
		var tNRelay = 1, tNNum = str2lng(getListValue(form.NewTimeNum));
	var isTimeLarger;

	if(getTimeAHM(0, endH, endM) >= getTimeAHM(0, form.NewStartTH, form.NewStartTM))
		isTimeLarger = (tRelay * 100 + tNum) < (tNRelay * 100 + tNNum);
	else
		isTimeLarger = (tRelay * 100 + tNum) >= (tNRelay * 100 + tNNum);

	<%If CLng(strFunctionalityType)=kFuncType_PreSchool Then %>
		if( getListValue(form.NewTimeNum) == getListValue(TimeNum))
			{
				alert(language.Generic.Calendar.kCrossName);
				return false;
			}
	<%Else%>
			if(form.NewTimeRelay != undefined && getListValue(TimeRelay) != undefined){
				if( getListValue(form.NewTimeNum) == getListValue(TimeNum) && getListValue(form.NewTimeRelay) == getListValue(TimeRelay) )
				{
					alert(language.Generic.Calendar.kCrossName);
					return false;
				}
			}
	<%End If %>

	if( isTimeLarger )
	{
		return extDeferred.wrapPromise($.show.getConfirmation(language.Generic.Calendar.kTimeNoOrdered + '. ' + language.Generic.Common.kContinue), function(){}, function(){startH.focus();});
	}

	<%If CLng(nSchTimesCount) > 1 Then %>
		if(isCrossLesson(tNum))
		{
			return extDeferred.wrapPromise($.show.getConfirmation(language.Generic.Calendar.kCrossLessonTime.replace('{0}', tNum) + '. ' + language.Generic.Common.kContinue), function(){}, function(){startH.focus();});
		}
	<%End If%>

	return true;
}

function isCrossAll() {
	var form = document.TimesForm;
	var startH = form.StartTH, startM = form.StartTM;
	var endH = form.EndTH, endM = form.EndTM;
	var NstartH = form.NewStartTH, NstartM = form.NewStartTM;
	var NendH = form.NewEndTH, NendM = form.NewEndTM;
	var stGreater,stSmaller,eGreater,eSmaller;

	var isStartBetween = false,isEndBetween = false;
	for(var i = 0; i < form.TimeNum.length; i++)
	{
		stGreater = getTimeAHM(0, startH[i], startM[i]) <= getTimeAHM(0, NstartH, NstartM);
		stSmaller = getTimeAHM(0, endH[i], endM[i]) >= getTimeAHM(0, NstartH, NstartM);

		eGreater = getTimeAHM(0, startH[i], startM[i]) <= getTimeAHM(0, NendH, NendM);
		eSmaller = getTimeAHM(0, endH[i], endM[i]) >= getTimeAHM(0, NendH, NendM);

		isStartBetween = isStartBetween || (stGreater && stSmaller);
		isEndBetween = isEndBetween || (eGreater && eSmaller);
	}
	return (isStartBetween || isEndBetween);
}

function isCrossLesson(lessonNum)
{
	var form = document.TimesForm;
	
	var arrSelectLesNum = $(form).find('select[name="TimeNum"]');
	var selectLesNum = _.filter(arrSelectLesNum, function(elem){return $(elem).val() == lessonNum;});
	var index = $(selectLesNum).parents('tr').index() - 1;

	var addNewForm = document.addNewLesson;

	var startH = form.StartTH, startM = form.StartTM;
	var endH = form.EndTH, endM = form.EndTM;

	var NstartH = addNewForm.NewStartTH, NstartM = addNewForm.NewStartTM;
	var NendH = addNewForm.NewEndTH, NendM = addNewForm.NewEndTM;

	var isStartBetween, isEndBetween;

	isStartBetween = getTimeAHM(0, startH[index], startM[index]) < getTimeAHM(0, NendH, NendM);
	isEndBetween = getTimeAHM(0, endH[index], endM[index]) > getTimeAHM(0, NstartH, NstartM);

	return (isStartBetween && isEndBetween);
}

function isValidNew() {
	var defArgs = new Array();

	var form = document.TimesForm;
	var addNewForm = document.addNewLesson;

	var startH = form.StartTH, startM = form.StartTM, startA = form.StartTA;
	var endH = form.EndTH, endA = form.EndTA, endM = form.EndTM;

	var newstartH = addNewForm.NewStartTH, newstartM = addNewForm.NewStartTM, newstartA = addNewForm.NewStartTA;
	var newendH = addNewForm.NewEndTH, newendM = addNewForm.NewEndTM, newendA = addNewForm.NewEndTA;

	if(errorData((startA ? newstartA : 0), newstartH, newstartM, (startA ? newendA : 0), newendH, newendM))
		return false;

	<%If nSchTimesCount > 0 Then%>
		if(form.TimeNum) {
			<%If nSchTimesCount > 1 Then%>
				for(var i = 0; i < form.TimeNum.length; i++) {	
					if (form.TimeRelay != undefined) {
						defArgs.push(isCrossNew(form.TimeRelay[i], form.TimeNum[i], endH[i], endM[i], startH[i]));
					}
					else{
						defArgs.push(isCrossNew(null, form.TimeNum[i], endH[i], endM[i], startH[i]));
					}
				}
			<%Else%>
				if (form.TimeRelay != undefined) {
					defArgs.push(isCrossNew(form.TimeRelay, form.TimeNum, endH, endM, startH));
				}
				else {
					defArgs.push(isCrossNew(null, form.TimeNum, endH, endM, startH));
				}
			<%End If%>
		}
	<%End If%>

	return extDeferred.when(defArgs);
}

function isCrossOldAll(i) {
	var form = document.TimesForm;

	var startH = form.StartTH, startM = form.StartTM;
	var endH = form.EndTH, endM = form.EndTM;

	var NstartH = form.StartTH[i], NstartM = form.StartTM[i];
	var NendH = form.EndTH[i], NendM = form.EndTM[i];

	if (form.TimeRelay != undefined)
		var tRelay = str2lng(getListValue(form.TimeRelay[i]));
	else
		var tRelay = 1;

	var tNum = str2lng(getListValue(form.TimeNum[i]));
	var nRelay = tRelay * 100 + tNum;
	var stGreater,stSmaller,eGreater,eSmaller;
	var tRelayj, tNumj, nRelayj, nRelayGreater;
	var isStartBetween = false, isEndBetween = false;

	for(var j = 0; j < form.TimeNum.length; j++) {
		if(i != j) {
			stGreater = getTimeAHM(0, startH[j], startM[j]) <= getTimeAHM(0, NstartH, NstartM);
			stSmaller = getTimeAHM(0, endH[j], endM[j]) >= getTimeAHM(0, NstartH, NstartM);

			eGreater = getTimeAHM(0, startH[j], startM[j]) <= getTimeAHM(0, NendH, NendM);
			eSmaller = getTimeAHM(0, endH[j], endM[j]) >= getTimeAHM(0, NendH, NendM);

			isStartBetween = isStartBetween || (stGreater && stSmaller);
			isEndBetween = isEndBetween || ( eGreater && eSmaller );

			if (form.TimeRelay != undefined)
				tRelayj = str2lng(getListValue(form.TimeRelay[j]));
			else
				tRelayj = 1;

			tNumj = str2lng(getListValue(form.TimeNum[j]));
			nRelayj = tRelayj * 100 + tNumj;

			nRelayGreater = nRelay >= nRelayj;

			if( (!stGreater && !eGreater && nRelayGreater) || (stGreater && eGreater && !nRelayGreater) )
				return true;
		}
	}

	return (isStartBetween || isEndBetween);
}

function isValidEdit() {
	var form = document.TimesForm;

	var startH = form.StartTH, startM = form.StartTM;
	var endH = form.EndTH, endM = form.EndTM, endA = form.EndTA;

	if(form.TimeNum) {
		<%If nSchTimesCount > 1 Then%>
			if(form.TimeNum.length)
			{
				for(var i = 0; i < form.TimeNum.length; i++)
				{
					if( !CheckTimeNum(i) )
					{
						alert(language.Generic.Calendar.kCrossName);
						return false;
					}
				}

				if( errorData(0, startH[0], startM[0], 0, endH[0], endM[0]) )
					return false;
				for(var i = 1; i < startH.length; i++)
				{
					if( errorData( 0, startH[i], startM[i], 0, endH[i], endM[i]) )
						return false;

					if(isCrossOldAll(i) )
					{
						return $.show.getConfirmation(language.Generic.Calendar.kCrossTime + '. ' + language.Generic.Common.kContinue);
					}
				}
			}
		<%ElseIf nSchTimesCount = 1 Then%>
			if( errorData(0, startH, startM, 0, endH, endM) )
				return false;
		<%End If%>
	}
	return true;
}

function CheckTimeNum(intNumber)
{
	var form = document.TimesForm;
	var iNum = form.TimeNum[intNumber].selectedIndex;

	<%If CLng(strFunctionalityType)=kFuncType_PreSchool Then %>
		for(var i = 0; i < form.TimeNum.length; i++)
		{
			if( intNumber != i )
			{
				if( iNum == form.TimeNum[i].selectedIndex )
					return false;
			}
		}
	<%Else%>
		if (form.TimeRelay[intNumber] != undefined)
			var iRel = form.TimeRelay[intNumber].selectedIndex;

		for(var i = 0; i < form.TimeNum.length; i++) {
			if(form.TimeRelay[i] != undefined){
				if( intNumber != i && iRel == form.TimeRelay[i].selectedIndex )
				{
					if( iNum == form.TimeNum[i].selectedIndex )
						return false;
				}
			}
		}
	<%End If %>

	return true;
}

function getTimeAHM( tA, tH, tM ) {
	var tmpTime;
	if(tA) {
		if(getListValue(tA) == 'AM') {
			tmpTime = str2lng(getListValue(tH));

			if(tmpTime == 12)
				tmpTime = 0;
		}
		else {
			tmpTime = str2lng(getListValue(tH));

			if(tmpTime != 12)
				tmpTime += 12;
		}
	}
	else
		tmpTime = str2lng(getListValue(tH));

	return 60 * tmpTime + str2lng(getListValue(tM));
}

function invalid( tA, tH, tM )
{
	if( getListValue(tH) == -1 )
		tH.focus();
	else if( getListValue(tM) == -1 )
		tM.focus();
	else if( tA && (getListValue(tA) == -1))
		tA.focus();
	else
		return false;

	alert(language.Generic.Calendar.kGivTime);

	return true;
}
function errorData( sA, sH, sM, eA, eH, eM )
{
	if( invalid(sA, sH, sM) || invalid(eA, eH, eM) )
		return true;
	else if( getTimeAHM(sA, sH, sM) >= getTimeAHM(eA, eH, eM) )
	{
		alert(language.Generic.Calendar.kStartTimeMust );
		sH.focus();
		return true;
	}
	return false;
}
<%End If 'If Not readonly ...%>

function Back() {
	if(isDBBusy()) return false;
	checkForChanges().then(function(){
			setDBBusy();
			ok('TimesForm', 'STVariants.asp');
		});
}

//--></SCRIPT>
<%
End Sub

Sub DrawLinkButtons()
	If Not objTimes.EOF Then
		Button "applyToWeek()", obLanguage("Calendar","kApplyToAllDays"), obLanguage("Calendar","kApplyToAllDays"), "glyphicon glyphicon-indent-left"
	End If
End Sub

Sub DrawButtons()
	If Not objTimes.EOF Then
		ButtonSave "SaveChanges()", obLanguage("Common","kSave")
	End If

	ButtonReset "resetScreen('TimesForm');", obLanguage("Common","kReset")
	ButtonAdd "AddNew()", obLanguage("Calendar", "kAddLesson1", strFunctionalityType)
	
	If Not objTimes.EOF Then
		ButtonDel "RemoveLesson()", obLanguage("Calendar","kRemoveLesson")
	End If
End Sub

Sub DrawFilters(strForm)
	Dim i, nDayNumEng

	OpenFormGroup obLanguage("Calendar","kDayOfWeek")%>
		<select class="form-control" name="WeekDay" onChange="OnChangeSelect('<%=strForm%>','<%=strScriptName%>');"><%
			For i = 1 To 7
				nDayNumEng = i + 1
				If nDayNumEng > 7 Then nDayNumEng = 1%>
				<option value="<%=nDayNumEng%>" <%If nDayNumEng = nWeekDay Then%>selected<%End If%>><%=WeekdayName(nDayNumEng, False, vbSunday)%></option><%
			Next%>
		</select><%
	CloseFormGroup
End Sub

Sub onDrawPage()
	Dim i, SchTimeNum%>

	<form name="TimesForm" method="post" action="SaveScheduleTimes.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>

		<%Call DrawButtonsFilters(Not readonly, "TimesForm")%>

		<div class="row">
			<div class="col-md-10"><%
				If objTimes.EOF Then
					Call DrawInfo(obLanguage("Calendar", "kNoTimes", strFunctionalityType), False)
				Else%>
					<table class="table table-bordered table-condensed table-sm">
						<tr><%
							If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
								%><th style="width: 70px;"><%=obLanguage("Calendar","kRelay")%></th><%
							End If%>

							<th style="width: 70px;"><%=obLanguage("Calendar","kNLesson", strFunctionalityType)%></th>
							<th><%=obLanguage("Common","kStartTime")%></th>
							<th><%=obLanguage("Common","kEndTime")%></th><%
								
							If Not readonly Then
								If Not objTimes.EOF Then%><th><%=obLanguage("Common","kRemove")%></th><%End If
							End If%>
						</tr><%
						While Not objTimes.EOF%>
							<tr><%
								SchTimeNum = objTimes("SCHEDULETIMENUMBER")
								If IsNull(SchTimeNum) Then SchTimeNum = 1

								If readonly Then
									If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
										Call DrawReadonlyCell( objTimes("RELAY") )
									End If

									Call DrawReadonlyCell(SchTimeNum )
									Call DrawReadonlyCell(Time2Str(objTimes("STARTTIME")))
									Call DrawReadonlyCell(Time2Str(objTimes("ENDTIME")))
								Else%>
									<input type="hidden" name="TimeID" value="<%=objTimes("SCHEDULETIMEID")%>"><%

									If CLng(strFunctionalityType) <> kFuncType_PreSchool Then%>
										<td>
											<select class="form-control" name="TimeRelay" OnChange="dataChanged()"><%
												For i = 0 To UBound(arrRelays, 2)
													Response.Write "<option value=""" & arrRelays(0, i) & """"
													If arrRelays(0, i) = objTimes("RELAY") Then Response.Write " selected"
													Response.Write ">" & arrRelays(0, i) & "</option>"
												Next%>
											</select>
										</td><%
									End If%>
									<td>
										<select class="form-control" name="TimeNum" OnChange="dataChanged()"><%
											For i = 0 To MAX_LESSON
												Response.Write "<option value=""" & i & """"
												If i = SchTimeNum Then Response.Write " selected"
												Response.Write ">" & i & "</option>"
											Next%>
										</SELECT>
									</td>
									<td><%ShowTimeBox "StartT", objTimes("STARTTIME") %></td>
									<td><%ShowTimeBox "EndT", objTimes("ENDTIME") %></td>
									<td>
										<%If objTimes("USED") > 0 Then%>
											<%=obLanguage("Common","kEmploy")%>
										<%Else%>
											<input type="checkbox" name="DeleteID" value="<%=objTimes("SCHEDULETIMEID")%>">
										<%End If%>
									</td><%
								End If%>
							</tr><%

							objTimes.MoveNext
						Wend%>
					</table>
				<%End If%>
			</div>
		</div>
		<input type="hidden" name="act" value="">
	</form>
	
	<script id="addNewLessonTempl" type="text/html">
		<form class="form-horizontal" id="addNewLesson" name="addNewLesson" method="post">
			<%=WriteObligatoryTags()%><%
			SetFiltersWidth "", "col-md-4", "col-md-8"

			If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
				OpenFormGroup obLanguage("Calendar","kRelay")%>
					<select class="form-control" name="NewTimeRelay">
						<option value="-1">&nbsp;&nbsp;</option><%
						For i = 0 To UBound(arrRelays, 2)%>
							<option value="<%=arrRelays(0, i)%>"><%=arrRelays(0, i)%></option><%
						Next%>
					</select><%
				CloseFormGroup
			End If
			
			OpenFormGroup obLanguage("Calendar","kNLesson", strFunctionalityType)%>
				<select class="form-control" name="NewTimeNum">
					<option value="-1">&nbsp;&nbsp;</option>
					<%For i = 0 To MAX_LESSON%>
						<option value="<%=i%>"><%=i%></option>
					<%Next%>
				</select><%
			CloseFormGroup

			OpenFormGroup obLanguage("Common","kStartTime")
				ShowTimeBox "NewStartT", Null
			CloseFormGroup

			OpenFormGroup obLanguage("Common","kEndTime")
				ShowTimeBox "NewEndT", Null
			CloseFormGroup%>

			<input type="hidden" name="act" value="add">
			<input type="hidden" name="WeekDay" value=""><%
			
			RestoreDefFiltersWidth%>
		</form>
	</script><%
End Sub

Sub DrawReadonlyCell(strInfo)
	%><td><%=DB2HTML(strInfo)%></td><%
End Sub%>