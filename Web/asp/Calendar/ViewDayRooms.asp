<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/DayRooms_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="SchedCommon_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/DateInput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub specialReadState()
	Call InitStVariants()
End Sub

Sub specialWriteState()
	Call obTokenMgr.SetData(strToken,stCalendarDayViewType, "/asp/Calendar/ViewDayRooms.asp")
	Call obTokenMgr.SetData(strToken,stSchoolSession, nRelay)
End Sub

Sub onHead()
	Call CommonHeadFunctions()%>

	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>">

	<script><!--
		dateInput.onChange(function() {
			ok_check_db('View', '');
		});

		function exportToExcel() {
			// опции
			var opts = {
				viewHeader: true
			};

			// плагин
			var printUtilsPlugin = $.fn.printUtils();

			var printBlock = $(".print-block");
			var copyBlock = printUtilsPlugin.clone(printBlock);

			// события
			var events = copyBlock.find("td.event");
			_.each(events, function(item) {
				var eventEl = $(item);
				// название мероприятия
				var eventName = eventEl.find('input[name="FULLEVENTNAME"]').val();

				eventEl.text(eventName);
			});

			return copyBlock.printUtils().toExcel(opts);
		};
	//--></script><%
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarViewAll)
End Function

Sub specialFilters(strForm)
	Call DrawSimpleFilterRow(obLanguage("Calendar","kSubjectNames"), "ViewFullSubjectName", Array(0, obLanguage("Calendar","kDisableOut"), 1, obLanguage("Calendar","kEnableOut")), strViewFullSubjects, False, "changeView()")
	If bManyVariants Then
		DrawFilterRow strForm, obLanguage("Calendar","kLessonTimeVariant"), "VARIANTID", objStVariants, "VARIANTID", "VARIANTNAME", strStVariantID, True
	End If
End Sub

Sub DrawLinkButtons
	If Not bEmptyRooms Then Call DrawPrintButtons()
End Sub

Sub onDrawPage()%>
	<form NAME="View" METHOD="post" ACTION="/asp/Calendar/ViewDayRooms.asp" >
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("SCLID", "", "PCLID_IUP", "", "SJID", "", "TID", "", "EventType", "", "EventID", "", "BackPage", strScriptName))%>

		<%Call DrawButtonsFiltersSingleRow("View")%>
	</form>
	
	<div class="row">
		<div class="col-md-9"><%
			If objTimesRs.EOF Then Call DrawInfo(obLanguage("Calendar","kNoSchedTimes"), False) : Exit Sub
			If bEmptyRooms Then Call DrawInfo(obLanguage("Calendar","kNoSheduleRooms",strFunctionalityType), False) : Exit Sub

			Call DrawRoomsTable()%>
		</div>
	</div><%
End Sub%>