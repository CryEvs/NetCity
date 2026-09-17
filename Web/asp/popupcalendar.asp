<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/ScreenNonPrint.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strTargetForm, strTargetField, strAddStyle, strCurrDate, dtCurrDate, strPrevField, strNextField
Dim strStartDate, strEndDate, dtStartDate, dtEndDate
Dim nCurrYear, nCurrMonth, nStartYear, nEndYear
Dim lngDayOfWeek, nDays
Dim rsCMDays

Function GetTitle()
	GetTitle = obLanguage("Common","kCalendar")
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub ReadState()
	strCurrDate = Request("Current")
	If IsDull( strCurrDate ) Then dtCurrDate = NSDate() : strCurrDate = Date2Str( dtCurrDate ) Else dtCurrDate = Str2Date( strCurrDate )
	strTargetForm = GetSafeStr( Request("TargetForm"), 100, "NULL" )
	strTargetField = GetSafeStr( Request("TargetField"), 100, "NULL" )
	strPrevField = GetSafeStr( Request("PrevField"), 100, "" )
	strNextField = GetSafeStr( Request("NextField"), 100, "" )
	strStartDate = Request("Start")
	strEndDate = Request("End")
End Sub

Sub Main()
	Dim strTmpDate, dtTmpDate, dtEndMonth, dtStartMonth
	strTmpDate = Request("TmpDate") 
	If IsDull( strTmpDate ) Then strTmpDate = strCurrDate
	dtTmpDate = Str2Date( strTmpDate )

	nCurrYear = Year(dtTmpDate)

	If IsDull( strStartDate ) Then dtStartDate = NormalizeDate( DateSerial( nCurrYear - 20, 1, 1 ) ) Else dtStartDate = Str2Date( strStartDate )
	If IsDull( strEndDate ) Then dtEndDate = NormalizeDate( DateSerial( nCurrYear+5, 12, 31 ) ) Else dtEndDate = Str2Date( strEndDate )
	nStartYear = Year(dtStartDate) : nEndYear = Year(dtEndDate)

	If DateDiff("d", dtTmpDate, dtStartDate, 0, 0) > 0 Then dtTmpDate = dtStartDate
	If DateDiff("d", dtTmpDate, dtEndDate, 0, 0) < 0 Then dtTmpDate = dtEndDate
	
	nCurrMonth = Month(dtTmpDate) : nCurrYear = Year(dtTmpDate)

	dtStartMonth = DateSerial( nCurrYear, nCurrMonth, 1 )
	dtEndMonth = DateAdd( "d", -1, DateAdd( "m", 1, dtStartMonth ) )
	nDays = Day( dtEndMonth )
	lngDayOfWeek = Weekday( dtStartMonth, GetFirstDayOfWeek )

	If Not IsDull(strCurrYearID) Then
		If strCurrYearID <> "0" Then
			If strTargetField = "FromD" Or strTargetField = "ToD"  Then Set rsCMDays = objNSNET.GetClassMeetingDays(strSchoolID, dtStartMonth, dtEndMonth)
			arrHoliDays = InitDays( kHoliday, dtStartMonth, dtEndMonth)
			arrVacations = InitDays( kVacation, dtStartMonth, dtEndMonth)
			InitYearInfo
		End If
	End If
End Sub

Sub onHead()
	Call onHeadNonPrint()
%><SCRIPT>
<!--
function StrDateConvert( ye, mo, da, datFormat )
{
	var deli, strRes;
	strRes="";
	var aaa, formatArr, dateArr,i;
	formatArr = datFormat.split("\001" );
	deli = formatArr[3];
	for (i = 0 ; i< 3; i++){
		if (formatArr[i] == "m")
			strRes+=mo.toString() + deli;
		else if (formatArr[i] == "mm"){
			strRes+= (( mo<10 )?"0":"")+mo.toString() + deli;}
		else if (formatArr[i] == "d")
			strRes+=da.toString() + deli;
		else if (formatArr[i] == "dd"){
			strRes+=(( da<10 )?"0":"")+da.toString() + deli;}
		else if (formatArr[i] == "yy"){
			ye = ye % 100;
			strRes+=(( ye<10 )?"0":"")+ye.toString() + deli;}
		else if (formatArr[i] == "yyyy")
			strRes+=ye.toString() + deli;
	}
	return strRes.slice(0,-1);
}
function setDay( day )
{
	if ( window.opener && !window.opener.closed )
	{
		var doc = window.opener.document;
		if( doc )
		{
			var form = doc.forms['<%=strTargetForm%>'];
			if( form )
			{
				var element = form.elements['<%=strTargetField%>'];
				if( element )
				{
					element.value = StrDateConvert( <%=nCurrYear%>, <%=nCurrMonth%>, day, '<%=strDateFormat%>');
<%If Not IsDull(strPrevField) Then%>
					element = form.elements['<%=strPrevField%>'];
					if( element )
					{
						var dt=new Date(<%=nCurrYear%>, <%=nCurrMonth%>-1, day-1);
						element.value = StrDateConvert( dt.getFullYear(), dt.getMonth()+1, dt.getDate(), '<%=strDateFormat%>');
					}
<%End If%>
<%If Not IsDull(strNextField) Then%>
					element = form.elements['<%=strNextField%>'];
					if( element )
					{
						var dt=new Date(<%=nCurrYear%>, <%=nCurrMonth%>-1, day+1);
						element.value = StrDateConvert( dt.getFullYear(), dt.getMonth()+1, dt.getDate(), '<%=strDateFormat%>');
					}
<%End If%>
					if( $(element).attr('LabelSync') != null )
						$(element).prev('u').children('span').text(element.value);
										
					window.opener.dataChanged();
					if (window.opener.CheckAndSubmit) window.opener.CheckAndSubmit();
	}	}	}	}
	window.close();
}

function gotoMonth()
{
	var form = document.forms['Calendar'];
	var elMonth = form.elements['Month'];
	form.elements["TmpDate"].value = StrDateConvert( <%=nCurrYear%>, elMonth[elMonth.selectedIndex].value, 1, '<%=strDateFormat%>');
	forceClosing = true;
	form.submit();
}

function gotoYear()
{
	var form = document.forms['Calendar'];
	var elYear = form.elements['Year'];
	form.elements["TmpDate"].value =StrDateConvert( elYear[elYear.selectedIndex].value, <%=nCurrMonth%>, 1, '<%=strDateFormat%>');
	forceClosing = true;
	form.submit();
}

var forceClosing = false;
function ResetOpener(){if( !forceClosing && opener ) opener.wndCalendar=null;}
//-->
</SCRIPT>
<%
End Sub

Function onUnload()
	onUnload="ResetOpener();"
End Function
Function getBGColor()
	getBGColor = Application("FOREGROUNDCOLOR")(strFunctionalityType)
End Function

Sub onDrawPage()
	Dim nMonth, lngTmpStartMonth, lngTmpEndMonth, lngTmpYear, i
	Dim lngCur, strDate, dtDate, strHasLink, bgColor, currentDay

	If nCurrYear = nStartYear Then lngTmpStartMonth = Month(dtStartDate) Else lngTmpStartMonth = 1
	If nCurrYear = nEndYear Then lngTmpEndMonth = Month(dtEndDate) Else lngTmpEndMonth = 12
%>
	<FORM NAME="Calendar" METHOD="GET">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("TargetForm",strTargetForm, "TargetField",strTargetField, "PrevField",strPrevField, "NextField",strNextField, "Current",strCurrDate, "Start",strStartDate, "End",strEndDate, "TmpDate",""))%>
	<table align=center>
	<tr><td>
	<table class="xlTable" border="1">
	<tr><th colspan="7" bgcolor="#cccccc" class="select">
		<select name="Month" OnChange="gotoMonth()"><%
		For i = lngTmpStartMonth To lngTmpEndMonth%>
			<option <%If i = nCurrMonth Then rw "selected "%>value="<%=i%>"><%= obLanguage.GetMonthName(i,FALSE)%></option><%
		Next%>
		</select>
		<select NAME="Year" OnChange="gotoYear()"><%
		For lngTmpYear = nStartYear To nEndYear%>
			<option <%If lngTmpYear=nCurrYear Then rw "selected "%>value="<%=lngTmpYear%>"><%= lngTmpYear%></option><%
		Next%>
		</select>
	</th></tr>
	<tr bgcolor="#CCCCCC"><%For lngCur = 1 To 7%><th><%=WeekDayName(lngCur, True, 0)%></th><%Next%></tr>
	<tr align="right" ><%
		For lngCur = 1 To lngDayOfWeek - 1
			rw "<td>&nbsp;</td>"
		Next
		For lngCur = 1 To nDays
			If lngDayOfWeek = 8 Then%></tr><tr align=right><%lngDayOfWeek = 1
			End If
			dtDate = DateSerial( nCurrYear, nCurrMonth, lngCur )
			strDate = FormatDateTime( dtDate, vbLongDate )
			bgColor = IIf( IsVacationIterate(dtDate) , " bgcolor=""#FFCCCC"" " ,"") 
			If DateDiff("d", dtStartDate, dtDate, 0, 0) >= 0 And DateDiff("d", dtDate, dtEndDate, 0, 0) >= 0 Then
				If IsFreeDay( dtDate ) Then strAddStyle=" style=""color:red""" Else strAddStyle=" style=""color:blue"""
				strHasLink = HasLink( lngCur )
				currentDay = IIf(DateDiff("d", dtDate, dtCurrDate, 0, 0) = 0, "<b>"&lngCur&"</b>", lngCur)
				If IsNull( strHasLink ) Then
					rw "<td" & bgColor & ">"
					rw ShowAnchor( "setDay("&lngCur&")", strDate, currentDay, strAddStyle )
					rw "</td>"
				Else
					rw "<td" & bgColor & strAddStyle & ">"
					rw "<del>" & ShowAnchor( "alert('"&strHasLink&"');", strDate, currentDay, strAddStyle )
					rw "</del></td>"
				End If
			Else
				rw "<td>" & lngCur & "</td>"
			End If
			lngDayOfWeek = lngDayOfWeek + 1
		Next
		For lngCur = lngDayOfWeek To 7%><td>&nbsp;</td><%Next%>
	</tr>
	</table>
	</td></tr>
	<tr><th><%ButtonCancel "window.close();",obLanguage("Common","kBack")%></th></tr>
	</table>
	</FORM><%
End Sub

Function GenerateError( strText )
	If Not bIsDebug Then On Error Resume Next
	Response.Clear
	rw "<HTML lang="&strCurrLng&"><HEAD></HEAD><BODY style=""margin-top: 0; margin-bottom: 0; background-color : #6785cd;"">"& obLanguage("Common","kErrorMsg") &": " & strText & "</BODY></HTML>"
	Response.End
End Function

Function HasLink( theDay )
	If strTargetField = "FromD" Then
		HasLink = obLanguage("Calendar","kErrCantMoveFromThisDay")
		If rsCMDays.EOF Then Exit Function
		If theDay = rsCMDays("DAY_M") Then rsCMDays.MoveNext : HasLink = Null : Exit Function
	ElseIf strTargetField = "ToD" Then
		HasLink = Null
		If rsCMDays.EOF Then Exit Function
		If theDay = rsCMDays("DAY_M") Then rsCMDays.MoveNext : HasLink = obLanguage("Calendar","kErrCantMoveToThisDay") : Exit Function
	Else
		HasLink = Null : Exit Function
	End If
End Function
%>
