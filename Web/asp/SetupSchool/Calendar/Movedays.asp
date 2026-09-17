<!-- #INCLUDE FILE=../../header1.asp -->
<!-- #INCLUDE FILE="../../scripts/filterYears.asp" -->
<!-- #INCLUDE FILE=../../scripts/dateInput.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kstrFormName = "EditForm"
Const kNameFrom = "FromD"
Const kNameTo = "ToD"

Dim rsEvents
Dim rsClassmeetingsDays

Dim strBackPage

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleMoveDays")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrYear
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arPostSchoolEvent)
End Function

Sub ReadState()
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	strBackPage = GetSafeStr( Request("BackPage"), -1, "MoveDays.asp")
End Sub

Sub Main()
	Set rsEvents = objNSNET.GetMovedDayList(strCurrYearID)
	Set rsClassmeetingsDays = objNSNET.GetClassMeetingDays(strSchoolID, dtYearStart, dtYearEnd)
End Sub

Sub SpecialOnHead()%>
	<SCRIPT><!--
		function Back() {
			goBack(document.View, 'YearView.asp');
		}
	//--></SCRIPT><%
End Sub

Sub onHead()
	Call scriptCalendarCommon() %>
	
	<script><!--
		function initLocaleCalendar(){
			var classMeetingsDays = <%=comHelper.DataSetAdapterHelper.ToJson(rsClassmeetingsDays, Array("day"))%>;
			var daysIndexer = _.chain(classMeetingsDays)
					.map(function(cm){ cm.day = Date.parse(cm.day); return cm; } )
					.indexBy("day")
					.value();

			var dateRange = {
				min: <%=Date2Js(dtYearStart)%>,
				max: <%=Date2Js(dtYearEnd)%>
			};

			var datesListWithin = [], datesListWithout = [];
			var testDay = <%=Date2Js(dtYearStart)%>;

			while (!testDay.equals(dateRange.max)) {
				if( daysIndexer[testDay] ){
					datesListWithin.push(new Date(testDay));
				} else {
					datesListWithout.push(new Date(testDay));
				}
				testDay.addDays(1);
			}

			var fromDayDateInput = $(".input-group.date").has($("[name=<%=kNameFrom%>"));
			var toDayDateInput = $(".input-group.date").has($("[name=<%=kNameTo%>"));

			var fromDaySettings = {
				disabledDates: datesListWithout,
				disabledTooltip: "<%=obLanguage("Calendar","kErrCantMoveFromThisDay")%>"
			};

			var toDaySettings = {
				disabledDates: datesListWithin,
				disabledTooltip: "<%=obLanguage("Calendar","kErrCantMoveToThisDay")%>"
			};

			dateInput.initDateInput(fromDayDateInput, dateRange.min, dateRange.max, fromDaySettings);
			dateInput.initDateInput(toDayDateInput,	dateRange.min, dateRange.max, toDaySettings);
		}

		function CanSaveEvent() {
			var form = document.<%=kstrFormName%>;
			var name = trimStr(form.Desc.value);

			if (name.length == 0) {
				alert(language.Generic.SetupSchoolCalendar.kErrDescriptionEmpty );
				form.Desc.focus();
				return false;
			}

			var startDateFilter = getDateFilterInfo("<%=kNameFrom%>");
			var endDateFilter = getDateFilterInfo("<%=kNameTo%>");

			if(!startDateFilter.check()) {
				return false;
			}

			if(!endDateFilter.check()) {
				return false;
			}

			if(startDateFilter.date() - endDateFilter.date() == 0) {
				focusAlert(startDateFilter.element, language.Generic.SetupSchoolCalendar.kErrMsgEqual);

				return false;
			}

			return $.show.confirmation(language.Generic.SetupSchoolCalendar.kConfirmMoveDay)
		}

		function SaveEvent() {
			if(isDBBusy()) return false;

			var form = document.<%=kstrFormName%>;

			extDeferred.when(CanSaveEvent).then(function() {
				setDBBusy();
				DoSubmit(form, "");
				$.show.processing();
			});
		}

		function addMoveDay() {
			$.show.dialog({
				title: "<%=obLanguage("SetupSchoolCalendar","kTitleMoveDayEdit") %>",
				message: $("#<%=kstrFormName%>"),
				onshown: initLocaleCalendar,
				buttons: [{label: language.Generic.Common.kSave, action: SaveEvent, cssClass: 'btn-primary'}]
			});
		}
	//--></script><%
End Sub

Sub DrawButtons()
	If readonly Then Exit Sub
	ButtonAdd "addMoveDay();", obLanguage("SetupSchoolCalendar","kTitleMoveDayEdit")
End Sub

Sub onDrawPage()%>
	<form name="View" action="Movedays.asp" method="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("BackPage", "MoveDays.asp"))%><%
		DrawButtonPanel
		If rsEvents.EOF Then%>
			<div class="row">
				<div class="col-md-6"><%
					Call DrawInfo(obLanguage("SetupSchoolCalendar","kNoMovedDaysInYear"), False)%>
				</div>
			</div><%
		Else%>
			<div class="row">
				<div class="col-md-8">
					<%DrawMoveDaysTable%>
				</div>
			</div><%
		End If%>
	</form><%

	If readonly Then Exit Sub
	DrawAddForm
End Sub


Sub DrawMoveDaysTable
	%>
	<table class="table table-bordered table-condensed">
		<tr>
			<th colspan="2"><%=obLanguage("SetupSchoolCalendar","kMoveDay")%></th>
			<th rowspan="2"><%=obLanguage("SetupSchoolCalendar","kMoveDayReason")%></th>
		</tr>
		<tr>
			<th><%=obLanguage("SetupSchoolCalendar","kStrFrom")%></th>
			<th><%=obLanguage("SetupSchoolCalendar","kStrTo")%></th><%

			While Not rsEvents.EOF
				%><tr>
					<td><%=Date2Str(rsEvents("DATEFROM"))%></td>
					<td><%=Date2Str(rsEvents("DATETO"))%></td>
					<td><%=DB2HTML(rsEvents("DESCRIPTION"))%></td>
				</tr><%
				rsEvents.MoveNext
			WEnd%>
	</table>
	<%
End Sub
		
Sub DrawAddForm	
	%>
	<script id="<%=kstrFormName%>" type="text/html">
		<form NAME="<%=kstrFormName%>" ACTION="MoveDaySave.asp" METHOD="POST" class="form-horizontal">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("backpage", strBackPage))%>
			<div class="container-fluid">
				<%  Call SetFiltersWidth("col-md-12", "col-md-4", "col-md-8")
					Call DrawDateInfoRow(obLanguage("SetupSchoolCalendar","kStrFrom"), Null, kNameFrom, obLanguage("SetupSchoolCalendar","kChooseWorkday"))
					Call DrawDateInfoRow(obLanguage("SetupSchoolCalendar","kStrTo"), Null, kNameTo, obLanguage("SetupSchoolCalendar","kChooseFreeday"))
					Call DrawInputRow(obLanguage("SetupSchoolCalendar","kMoveDayReason"), "", "Desc", "area", 40, 5, "")
					Call RestoreDefFiltersWidth%>
			</div>
		</form>
	</script>
	<%
End Sub
%>