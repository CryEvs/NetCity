<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE=../scripts/Calendar_inc.asp -->
<!-- #INCLUDE FILE=../scripts/FiltersCommon.asp -->
<!-- #INCLUDE FILE="../scripts/assignment.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const bgcol			= "#EAEAEA"

Dim objAttendanceRs
Dim strAccMonth, strAccClass
Dim strClassID, strStudID
Dim lngMonth, lngYear
Dim nViewType
Dim objDayListRs, strDaySelected
Dim nClassMeeting

Function hasUserRightsOnPage()
	If HasUserRight(arJournalEditAll) Then hasUserRightsOnPage =true :Exit Function
	hasUserRightsOnPage = HasUserRight(arJournalEditSelf)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kEditAttendance")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miJournal
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbAttendance
 End Function

Function LocationPath()
	LocationPath = GetSystemLocationPath()
End Function

Sub ReadState()
	If readonly Then GenerateError obLanguage("Common","kUnexpErr")
	lngMonth = GetSafeLng( Request("Month"), NULL )
	lngYear = GetSafeLng( Request("Year"), NULL )
	strClassID = CStr(Request("PCLID"))
	strStudID = CStr(Request("StudID"))
	nViewType = GetSafeLng( Request("ViewType"), IIF(strFunctionalityType = kFuncType_PreSchool, 2, 1))
	strAccClass = objNSNET.GetClassInfo(strClassID)("CLASSNAME")
	strAccMonth = obLanguage.GetMonthName(lngMonth) & " " & lngYear

	IF nViewType = 1 Then
		Set objDayListRs = objNSNET.GetClassmeetingDayList(strClassID, DateSerial(lngYear,lngMonth,1), DateAdd("d",-1,DateSerial(lngYear,lngMonth+1,1))) 
		If Not objDayListRs.EOF Then strDaySelected = GetSafeStr(Request("AttendanceDay"),-1,"-1")
		If strDaySelected <> "-1" Then strDaySelected = GetSafeDate( strDaySelected, DateSerial(lngYear,lngMonth,1) )
	End If
End Sub

Sub Main()
	Dim dtStart, dtEnd
	IF nViewType=1 And strDaySelected <> "-1" Then
		dtStart = strDaySelected
		dtEnd = strDaySelected
	Else
		dtStart =  DateSerial(lngYear,lngMonth,1)
		dtEnd = DateAdd("d",-1,DateSerial(lngYear,lngMonth+1,1) )  
	End If
	
	Set objAttendanceRs = objNSNET.GetStudentClassMeetingsAttendance(strStudID, strClassID, dtStart, dtEnd, IIF(nViewType=1, False, True))
End Sub

Sub onHead()
%>
	<script><!--
		var bPreSchool = <%=IIF((strFunctionalityType = kFuncType_PreSchool),"true","false")%>;
		function Back() {
			var bToDay = <%=Bool2JS(Request("FD")=1)%>;
			if( bToDay ) {
				document.forms.EditAtt.ViewType.value = 2;
				goBack(document.EditAtt, 'EditAttendance.asp');
				return
			}
			goBack(document.EditAtt, '/angular/school/journal/attendance/');
		}

		function EditDay(day) {
			checkForChanges().then(function() {
				setDBBusy();
				document.forms.EditAtt.ViewType.value = 1;
				document.forms.EditAtt.AttendanceDay.value = day;
				ok('EditAtt','EditAttendance.asp?FD=1');
			});
		}

		function DelAttendance(pressedLink) {
			var curRow;
			var reasonbox;
			var subjReasons, strikeText;

			curRow = $(pressedLink).parents().filter('tr');

			//зачеркнуть, если в столбце есть причины
			subjReasons = curRow.find('td[name="SR"]');
			strikeText = subjReasons.text();
			if (trimStr(strikeText) != '') {
				subjReasons.contents().each(function(index, el) {
					if (el.nodeType == 3 && trimStr(el.nodeValue) != '') {
						$(el).wrap('<s>');
					}
				});
			}

			reasonbox = curRow.find('input:checked');
			$(pressedLink).data("cleaned", true);
			if (reasonbox.length) {
				reasonbox.prop("checked", false).trigger("change");
			}
		}

		function Save() {
			var saveForm = document.forms['EditAtt'];
			saveForm.action = 'SaveAttendance.asp<%=IIF(Request("FD")=1,"?FD=1","")%>';
			arrAtt = []
			$('tr').not($('tr').eq(0)).each(function() {
				var cleaned = $(this).find('a.danger').data("cleaned");

				rItem = $(this).find('td input:checked');
				if (rItem.length) {
					arrAtt.push(rItem.val());
				}
				else {
					if (!cleaned)
						arrAtt.push(-1);
					else
						arrAtt.push(-2);
				}
			})
			jsSaveForm(saveForm, {arrAtt: arrAtt})
				.done(SetAttendance);
		}

		function SetAttendance() {
			var _viewType = $('select[name=ViewType]').val();
			$('.table.table-hover tr')
				.slice(1)
				.each( function() {
					var reason;
					var cleanedLink = $(this).find('a.danger')
					var cleaned = cleanedLink.data("cleaned");

					curInputRadio = $(this).find('input:checked');
					if (curInputRadio.length)
						reason = curInputRadio.val();
					else {
						reason = '&nbsp;';
						if (!cleaned)
							return
					}
					
					cleanedLink.data("cleaned", false);

					if (_viewType != 1) {
						var countSubjects = 1;
						var foundDelimSubjects = $('input[name=CMID]', this).val().match(/;/g);
						if ( foundDelimSubjects ) {
							countSubjects += foundDelimSubjects.length;
						}
						
						var tdSubjReasons = $('td[name=SR]', this);
						var countReasons = tdSubjReasons.html().split(reason).length - 1;

						if(tdSubjReasons.html().indexOf(reason) < 0 || countReasons < countSubjects) {
							var strSubjReasons = '';

							if(reason != '&nbsp;') {
								for(var i = 0; i < countSubjects; i++) {
									strSubjReasons += reason + '<br>';
								}
							}
							tdSubjReasons.html(strSubjReasons);
						}
					}
				});
		}

		function resetForm() {
			//в случае восстановления данных зачеркивание будет отменено
			$('s').contents().unwrap();
			resetScreen('EditAtt');
		}

	//-->
	</script>
<%
End Sub

Sub DrawButtons()
	If Not objAttendanceRs.EOF Then
		ButtonSave "Save();", obLanguage("Common","kSave")
		ButtonReset "resetForm();", obLanguage("Common","kReset")
	End If
End Sub

Sub DrawFilters( dumb )
	DrawTitleRow obLanguage("Common","kClass",strFunctionalityType), strAccClass
	DrawTitleRow obLanguage("Common","kMonth"), strAccMonth
	DrawTitleRow obLanguage("Common","kStudent",strFunctionalityType), objNSNET.GetUserNickName(strStudID)
	
	If strFunctionalityType<>kFuncType_PreSchool Then
		DrawSimpleFilterRow obLanguage("Grade","kAttendanceMarkType"), "ViewType", Array(1, obLanguage("Grade","kSubjectAttendance"), 2, obLanguage("Grade","kDayAttendance")), nViewType, False, SelectChangeHandler("EditAtt")
	End If
	IF nViewType = 1 Then 
		Call DrawFilterRow("EditAtt", obLanguage("Common","kDate"), "AttendanceDay", objDayListRs, "Day", "Day", strDaySelected, True)
	Else
		%><input type='hidden' name='AttendanceDay'><%
	End If
End Sub

Sub onDrawPage()
	%><form name="EditAtt" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("Month",lngMonth,"Year", lngYear, "PCLID", strClassID, "StudID", strStudID, "ClSubjID", strStudID))%><%
		
		Call DrawButtonsFilters(True, null)

		If objAttendanceRs.EOF Then 
			DrawInfo obLanguage("Grade","kNoAbsenceInfo"), False
		Else
			%><div class="row">
				<div class="col-md-6 col-lg-4"><%Call DrawAttTable()%></div>
			  </div><%
			rw GetAttendanceLegend()
		End If
	%></form><%
End Sub

Sub DrawAttTable()
	Dim strDay, strAtt, strSubjAbbr, strReason, nCMID, strSubjReasons
	Dim objSubjectsRs, bExistsAttendance
	Dim strSubjID, bUseExemption
		
	nClassMeeting = 1%>

	<table class="table table-hover table-condensed table-thin">
		<tr>
			<th><%=obLanguage("Common","kDate")%></th>
			<th><%=obLanguage("Common","kSubject")%></th>
			<th <%=IIF(nViewType<>1 And strFunctionalityType<>kFuncType_PreSchool,"colspan='2'","")%>><%=obLanguage("Grade","kReason")%></th>
		</tr><%
		While Not objAttendanceRs.EOF
			IF nViewType = 1 Then
				strDay = Date2Str_NoYear(objAttendanceRs("DAY"))
				strSubjAbbr = DB2HTML(objAttendanceRs("SUBJECTABBREV"))
				nCMID = CLng(objAttendanceRs("CMID"))
				strSubjID = GetSafeStrParam(objAttendanceRs("ID"), Null)
				bUseExemption = objNSNET.UseExemption(strSubjID)
			Else
				bUseExemption = False 'Тип пропуска "ОСВ" недоступен при выставлении за целый день
				bExistsAttendance = False
				If strFunctionalityType=kFuncType_PreSchool Then
					strDay = Date2Str_NoYear(objAttendanceRs("DAY"))
				Else
					strDay = "<a href=""JavaScript:EditDay('" & objAttendanceRs("DAY") & "');"">" &  Date2Str_NoYear(objAttendanceRs("DAY")) & "</a>"
				End IF
				strSubjAbbr = ""
				strSubjReasons = ""
				nCMID = ""
				Set objSubjectsRs = objAttendanceRs("rootToSubjects").Value
				While Not objSubjectsRs.EOF
					strSubjAbbr = strSubjAbbr & DB2HTML(objSubjectsRs("SUBJECTABBREV")) & "<br>" 
					strReason = DB2HTML(objSubjectsRs("REASON"))
					strSubjReasons = strSubjReasons & strReason & "<br>" 
					nCMID = nCMID & objSubjectsRs("CMID") & ";"
					If Not bExistsAttendance Then bExistsAttendance = Not IsNull(objSubjectsRs("REASON"))
					objSubjectsRs.MoveNext
				Wend
				strSubjAbbr = Left(strSubjAbbr,Len(strSubjAbbr)-4)
				nCMID = Left(nCMID,Len(nCMID)-1)
			End IF

			strAtt = objAttendanceRs("REASON")%>
			<tr>
				<td class="text-center"><%=strDay%></td>
				<td class="text-left"><input type="hidden" name="CMID" value="<%=nCMID%>"><%=strSubjAbbr%></td><%
				If nViewType <> 1 And strFunctionalityType <> kFuncType_PreSchool Then%>
					<td name="SR"><%=strSubjReasons%></td><%
				End If%>
				<td class="text-left"><%Call DrawReasonBox( strAtt, bUseExemption, bExistsAttendance)%></td>
			</tr><%
			nClassMeeting = nClassMeeting + 1
			objAttendanceRs.MoveNext
		WEnd%>
	</table><br><%
End Sub

Sub DrawReasonBox( strAtt , useExemption, bExistsAttendance)
		Dim arr

		arr = Array(obLanguage("Assignment","kARMissedUPS"), obLanguage("Assignment","kARMissedUPS"), obLanguage("Assignment","kARMissedIllS"), obLanguage("Assignment","kARMissedIllS"), obLanguage("Assignment","kARMissedNPS"), obLanguage("Assignment","kARMissedNPS"), obLanguage("Assignment","kARMissedS"), obLanguage("Assignment","kARMissedS"), obLanguage("Assignment","kARWasLateS"), obLanguage("Assignment","kARWasLateS"))
		If useExemption Then
			ReDim Preserve arr(Ubound(arr) + 2)
			arr(UBound(arr) - 1) = obLanguage("Assignment","kARReleasedS")
			arr(UBound(arr)) = obLanguage("Assignment","kARReleasedS")
		End If

		Call DrawRadioListInline("", strAtt, "RSN_" & Date2Str_NoYear(objAttendanceRs("DAY")) & "_" & nClassMeeting, arr, "", "", "dataChanged();", False)
		
		Call DrawContextButtons(Array("DelAttendance(this); return false", obLanguage("Assignment", "kClearAssignMarks"), "danger", "glyphicon glyphicon-remove"), True, , "ctx-btns-icons-md")
End Sub


%>
