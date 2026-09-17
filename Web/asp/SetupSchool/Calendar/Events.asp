<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nViewType, rsEvents, strTitle, bCanEdit, strBackPage, bFix
Dim hasDescription

Function GetPageTitle()
	If bFix Then GetPageTitle = strTitle Else GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleEvents")
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = bIsStaff
End Function

Sub ReadState()
	readonly = objNSNET.IsYearClosed(strCurrYearID)
	strBackPage = obTokenMgr.GetData(strToken,"BACK")
	If IsDull(strBackPage) Then strBackPage = "YearView.asp"
	nViewType = Request("EventType")
	bFix = GetSafeBool(obTokenMgr.GetData(strToken,"FixEventType"), False)

	If IsDull(nViewType) Then
		nViewType = GetSafeLng(obTokenMgr.GetData(strToken, "stEventsMonthViewType"), kHoliday)
	Else
		nViewType = GetSafeLng(nViewType, kHoliday)
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, "stEventsMonthViewType", nViewType)
	If nViewType = kClassEvent Then Call WriteClass()
End Sub

Sub Main()
	hasDescription = False

	If nViewType = kClassEvent Then
		hasDescription = True
		Call InitYearClassesAll() ' Сметреть можно все мероприятия
		Set rsEvents = objNSNET.GetClassEventList(-1, IIf(strClassID = "-1", Empty, Array(strClassID)), strCurrYearID, Null, Null)
		strTitle = obLanguage("SetupSchoolCalendar","kClassEvents",strFunctionalityType)
	Else
		Select Case nViewType
			Case kSchoolEvent strTitle = obLanguage("SetupSchoolCalendar","kSchoolEvents",strFunctionalityType)
				hasDescription = True
			Case kVacation strTitle = obLanguage("SetupSchoolCalendar","kVacations")
			Case kHoliday strTitle = obLanguage("SetupSchoolCalendar","kHolidays")
			Case Else GenerateError obLanguage("Common","kUnexpErr")
		End Select
		If nViewType <> kVacation Then
			Set rsEvents = objNSNET.GetSchoolEventList(nViewType, strCurrYearID)
		Else
			Set rsEvents = objNSNET.GetAllSchoolEventList(nViewType, strCurrYearID)
		End If
	End If

	bCanEdit = False
	If Not readonly Then
		If nViewType = kClassEvent Then
			If HasUserRight(arClassMgmPostClassEventAll) Then
				bCanEdit = True
			ElseIf HasUserRight(arClassMgmPostClassEventSelf) Then
				If strClassID <> "0" And strClassID <> "-1" Then
					bCanEdit = objNSNET.IsClassChief(strClassID, strUserId)
				End If
			End If
		Else
			bCanEdit = HasUserRight(arPostSchoolEvent)
		End If
	End If
End Sub

Sub onHead()
	shortReportName = GetShortReportName()
	printPostFix="Print"
	Call DrawCommonScripts()%>

	<SCRIPT><!--
	function editEvent(eventID) {
		var form = document.forms['View'];

		<%If nViewType = kClassEvent Then%>
			if((eventID == 0) && form.PCLID.selectedIndex  == 0) {
				alert(language.SetupSchoolCalendar.kAlertChooseClass);
				form.PCLID.focus();

				return;
			}
		<%End If%>

		form.eventID.value = eventID;
		ok( 'View', 'EditEvent.asp' );
	}

	function deleteEvents() {
		if(isDBBusy()) return false;

		var form = document.forms['View'];
		var chkBox = form.elements.delEvent, chkCls;

		if (chkBox) {
			if (chkBox.length) {
				for (var j = 0; j < chkBox.length; j++)
					if (chkBox[j].checked == true) {
						chkCls=1; 
						break;
					}
			}
			else if (chkBox.checked == true)
				chkCls = 1;
		}
		if(chkCls > 0) {
			$.show.confirmation('<%=IIF(nViewType=kVacation, obLanguage("SetupSchoolCalendar","kDeleteVacations"), obLanguage("Common","kMsgAreYouSure"))%>').then(function(){
				setDBBusy();
				ok( 'View', 'DeleteEvent.asp' );
			});
		}
		else {
			alert(language.Generic.Common.kErrMsgNoChecks); 
			return;
		};
	}

	function Back() {
		goBack(document.View, '<%=strBackPage%>');
	}
	//--></SCRIPT><%
End Sub

Sub DrawFilters(strForm)
	If Not bFix Then
		Dim arrViews

		arrViews = Array(_
			kHoliday, obLanguage("SetupSchoolCalendar","kHolidays"), _
			kVacation, obLanguage("SetupSchoolCalendar","kVacations"), _
			kSchoolEvent, obLanguage("SetupSchoolCalendar","kSchoolEvents", strFunctionalityType), _
			kClassEvent, obLanguage("SetupSchoolCalendar","kClassEvents", strFunctionalityType) _
		)

		Call DrawSimpleFilterRow(obLanguage("Common","kView"), "EventType", arrViews, nViewType, False, "ok('" & strForm & "','')")
	End If

	If nViewType = kClassEvent Then Call DrawYearClasses(strForm, True, obLanguage("Filter","kNoYearClasses",strFunctionalityType))
End Sub

Sub DrawButtons()
	If bCanEdit Then
		ButtonAdd "editEvent(0);", obLanguage("SetupSchoolCalendar","kAddEvent")
		If Not rsEvents.EOF Then ButtonDel "deleteEvents();", obLanguage("Common","kRemove")
	End If
End Sub

Sub DrawLinkButtons
	If Not rsEvents.EOF Then DrawPrintButtons
End Sub

Sub onDrawPage()
	Dim strDate, strEventID%>

	<form name="View" action="<%=strScriptName%>" method="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("eventID", "", "BackPage", strScriptName))%>

		<%Call DrawButtonsFilters(True, "View")

		If bExit Then rw "</form>" : Exit Sub%>

		<div class="row">
			<div class="col-md-12"><%
				If rsEvents.EOF Then
					Call DrawInfo(obLanguage("SetupSchoolCalendar","kNoEvents"), False)
				Else%>
					<table class="table table-bordered table-condensed table-thin print-block">
						<tr>
							<th><%=obLanguage("Common","kDate")%></th>
							<th><%=obLanguage("Common","kName")%></th>

							<%If hasDescription Then %><th><%=obLanguage("Common","kRoom",strFunctionalityType)%></th><%End If%>
							<%If nViewType <> kClassEvent Then%><th><%=obLanguage("SetupSchoolCalendar","kPeriodicity")%></th><%End IF%>
							<%If hasDescription Then %><th><%=obLanguage("SetupSchoolCalendar","kDescr")%></th><%End If%>
							<%If bCanEdit Then%><%=ShowDelCellHeader(1)%><%End If%></tr><%

							While Not rsEvents.EOF
								strEventID = rsEvents("eventID")
								RW "<tr>"
								RW "<td nowrap>"
								Call WriteTimeInterval(nViewType, rsEvents("STARTTIME"), rsEvents("ENDTIME"))
								RW "</td><td>" & ShowAnchor("editEvent( " & strEventID & ")", obLanguage("SetupSchoolCalendar","kEditEvent"), DB2HTML(rsEvents("EVENTNAME")), "" ) & "</td>"
								If hasDescription Then RW "<td>" & DB2HTML(rsEvents("ROOM")) & "</td>"

								If nViewType <> kClassEvent Then
									RW "<td>"
									RW obLanguage("SetupSchoolCalendar", IIF(DB2HTML(rsEvents("PERIODICITY")) = "Y","kYearPeriod","kNotPeriodicity"))
									RW "</td>"
								End IF

								If hasDescription Then RW "<td>" & DB2HTML(rsEvents("EVENTDESCRIPTION")) & "</td>"
								If bCanEdit Then RW "<td align=""center""><INPUT TYPE=""checkbox"" NAME=""delEvent"" VALUE=""" & strEventID & """></td>"
								RW "</tr>"

								rsEvents.MoveNext
							WEnd%>
					</table><%
				End If%>
			</div>
		</div>
	</form><%
End Sub%>