<% ' © 2007-2015 IRTech. All rights reserved.
Dim dtMinDate, dtMaxDate

Sub ChangeMinMaxDates(byref dtMinDate, byref dtMaxDate)
End Sub

Sub InitDateRange(dtMinDate, dtMaxDate, byref dtStartDate, byref dtEndDate)
	Call CalcCurrYearLimits( dtMinDate, dtMaxDate )
	Call ChangeMinMaxDates(dtMinDate, dtMaxDate)
	
	dtStartDate = Get_Date(GetSafe("ADT",Null), stStartDate, dtMinDate)
	dtEndDate = Get_Date(GetSafe("DDT",Null), stEndDate, dtMaxDate)
	
	If Not IsBetween( dtStartDate, dtMinDate, dtMaxDate) Then dtStartDate = dtMinDate
	If Not IsBetween( dtEndDate, dtMinDate, dtMaxDate) Then dtEndDate = dtMaxDate
	bIsCheckDates = True
End Sub

Function IsBetween( theDate, dtMinDate, dtMaxDate)
	If DateDiff("d", theDate, dtMinDate, 0, 0 ) > 0 Then IsBetween = False: Exit Function
	IsBetween = ( DateDiff("d", theDate, dtMaxDate, 0, 0 ) >= 0 )
End Function

Sub InitSingleDate(dtMinDate, dtMaxDate, byref dtEndDate)
	dtEndDate = Get_Date(GetSafe("DDT",Null), stEndDate, NSDate())

	If DateDiff("d",dtToday,dtMinDate,0,0)>0 Then dtEndDate = dtMinDate
	If DateDiff("d",dtToday,dtMaxDate,0,0)<0 Then dtEndDate = dtMaxDate

	bIsCheckDates = True
End Sub

Sub InitDate()
	Dim dtTmp
	' Возможны даты от начала учебного года до конца уч. года по движению.
	Call CalcCurrYearLimits(dtStartDate, dtTmp)
	Call CalcMoveCurrYearLimits(dtTmp, dtEndDate, False)

	dtMinDate = dtStartDate
	dtMaxDate = dtEndDate
	bIsCheckDates = True
	Call InitSingleDate(dtMinDate, dtMaxDate, dtToday)
End Sub

' Возможны даты от начала до конца уч. года.
Sub InitDateFullYear()
	Call CalcCurrYearLimits(dtStartDate, dtEndDate)

	dtMinDate = dtStartDate
	dtMaxDate = dtEndDate
	bIsCheckDates = True
	Call InitSingleDate(dtMinDate, dtMaxDate, dtToday)
End Sub

Function Get_Date(req, st, defVal)
	Get_Date = req
	If IsDull(Get_Date) Then
		Get_Date = obTokenMgr.GetData(strToken, st)
		If IsDull(Get_Date) Then Get_Date = defVal
	End If
	If Not IsDate(Get_Date) Then Get_Date = Str2Date(Get_Date)
	Get_Date = GetSafeDate( Get_Date, Null )
End Function

Sub WriteDateRange(dtStartDate, dtEndDate)
	Call obTokenMgr.SetData(strToken,stStartDate, dtStartDate)
	Call obTokenMgr.SetData(strToken,stEndDate, dtEndDate)
End Sub

Sub CheckDates( fieldStart, fieldEnd )
%>
<script>
function checkDates(){
	var startDateFilter = getDateFilterInfo("<%=fieldStart%>");
	var endDateFilter = getDateFilterInfo("<%=fieldEnd%>");
	var minDate = <%=Date2Js(dtMinDate)%>;
	var maxDate = <%=Date2Js(dtMaxDate)%>;

	if(startDateFilter){
		if(!startDateFilter.check())
			return false;
		if(!startDateFilter.checkDateInterval(minDate, maxDate))
			return false;
	}

	if(endDateFilter) {
		if(!endDateFilter.check())
			return false;
		if(!endDateFilter.checkDateInterval(minDate, maxDate))
			return false;
	}
	
	if(startDateFilter) {
		if(endDateFilter) {
			if (startDateFilter.date() > endDateFilter.date()){
				$.show.error( language.Generic.Common.kMsgStartBeforeEnd );
				return false;
			}
			endDateFilter.element.value = startDateFilter.element.value;
		}
	}
	return true;
}
</script>
	<%
End Sub

Sub CheckDate(strVarName, fieldName, bRequered)%>
	var <%=strVarName%>_filter = getDateFilterInfo("<%=fieldName%>");
	var <%=strVarName%> = <%=strVarName%>_filter.date();

	if(!<%=strVarName%>_filter.check(null, <%=Bool2Js(bRequered)%>) ) {
		return false;
	}
	<%
End Sub

'скрипты инициализации школьного календаря
Sub scriptCalendar(strForm, dtCalendarMinDate, dtCalendarMaxDate)
	scriptCalendarEx strForm, dtCalendarMinDate, dtCalendarMaxDate, Empty
End Sub

'скрипты инициализации классного календаря
Sub scriptClassCalendar(strForm, dtCalendarMinDate, dtCalendarMaxDate, strClassId)
	scriptCalendarEx strForm, dtCalendarMinDate, dtCalendarMaxDate, Array("context", Array("classId", strClassId))
End Sub

'скрипты инициализации классного календаря
Sub scriptIupClassCalendar(strForm, dtCalendarMinDate, dtCalendarMaxDate, strClassIdIup)
	scriptCalendarEx strForm, dtCalendarMinDate, dtCalendarMaxDate, Array("context", Array("iupClassId", strClassIdIup))
End Sub

'скрипты инициализации календаря ПГ
Sub scriptSgCalendar(strForm, dtCalendarMinDate, dtCalendarMaxDate, strSgId)
	scriptCalendarEx strForm, dtCalendarMinDate, dtCalendarMaxDate, Array("context", Array("sgId", strSgId))
End Sub

'базовые скрипты инициализации календаря
Sub scriptCalendarEx(strForm, dtCalendarMinDate, dtCalendarMaxDate, arrCalendarSettings)
	Call scriptCalendarCommon()
	Call scriptInitCalendarSettings(dtCalendarMinDate, dtCalendarMaxDate, arrCalendarSettings)%>

	<script type="text/javascript">
		function initDateInput() {
			var settings = initCalendarSettings();

			dateInput.initDateInputs(settings.calendarMinDate, settings.calendarMaxDate, settings.calendarSettings);
		}

		$(document).ready(function() {
			initDateInput();
		});
	</script><%
	
	If bIsCheckDates Then
		dtMinDate = dtCalendarMinDate
		dtMaxDate = dtCalendarMaxDate
		Call CheckDates( "ADT", "DDT" )
	End If
End Sub

Sub scriptInitCalendarSettings(dtCalendarMinDate, dtCalendarMaxDate, arrCalendarSettings)%>
	<script type="text/javascript">
		function initCalendarSettings() {
			var calendarMinDate, calendarMaxDate, calendarSettings;
			var settings = {};

			<%If Not IsDull(dtCalendarMinDate) Then%>
				settings.calendarMinDate = <%=Date2Js(dtCalendarMinDate)%>;
			<%End If%>

			<%If Not IsDull(dtCalendarMaxDate) Then%>
				settings.calendarMaxDate = <%=Date2Js(dtCalendarMaxDate)%>;
			<%End If%>

			<%If Not IsEmpty(arrCalendarSettings) Then%>
				settings.calendarSettings = <%=GetCalendarSettingsJson(arrCalendarSettings)%>;
			<%End If%>

			return settings;
		}
	</script><%
End Sub

Sub scriptCalendarCommon()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/eternicode-bootstrap-datepicker/css/datepicker_build.min.css")%>"/>
	<script src="<%=GetVersionedResLink("/vendor/eternicode-bootstrap-datepicker/js/bootstrap-datepicker.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/eternicode-bootstrap-datepicker/js/locales/bootstrap-datepicker.ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/js/libs/date.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/js/dateInput.js")%>" type="text/javascript"></script>
	<script type="text/javascript">
		/*временная прокси функция на dateInput*/
		function getDateFilterInfo(fieldName) {
			return dateInput.getDateFilterInfo(fieldName);
		}

		/*краткий вариант конвертации строки в дату. с учетом текущих рег. настроек*/
		function str2date( strDate ) {
			return dateUtils.str2date(strDate);
		}

		/*краткий вариант конвертации даты в строку. с учетом текущих рег. настроек*/
		function date2str( dtDate ) {
			return dateUtils.date2str( dtDate );
		}
	</script><%
End Sub

Function GetCalendarSettingsJson(arrCalendarSettings)
	Dim objCalendarSettings
	Set objCalendarSettings = comHelper.ArrayHelper.ToKeyValue(arrCalendarSettings)
	If Not IsEmpty(objCalendarSettings("context")) Then
		Set objCalendarSettings("context") = comHelper.ArrayHelper.ToKeyValue(objCalendarSettings("context"))
	End If
	GetCalendarSettingsJson = comHelper.JsonHelper.SerializeObject(objCalendarSettings)
End Function

Sub DrawDateRange()
	Call DrawDateRangeEx("ADT", dtStartDate, "DDT", dtEndDate)
End Sub

Sub DrawDateRangeEx(StartName, dtStartDate, EndName, dtEndDate)
	Call DrawDateRangeItem(StartName, dtStartDate, "kStartDate")
	Call DrawDateRangeItem(EndName, dtEndDate, "kEndDate")
End Sub
%>
