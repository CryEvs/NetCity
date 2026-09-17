<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	TID=<Teacher ID>
'	CLID=<Class ID>

Dim dtMonthStart, dtMonthEnd, lngCurrMonth, lngCurrYear, dtCurrDate, dtMinMonth, dtMaxMonth

Sub InitMonths( dtStart, dtEnd )
	dtMinMonth = dtStart : dtMaxMonth = dtEnd
	lngCurrMonth = GetSafeLng( Request("Month"), 0 )
	lngCurrYear = GetSafeLng( Request("Year"), 0 )

	If lngCurrMonth = 0 Or lngCurrYear = 0 Then
		If strCurrYearID = strSchoolYearId Then
			dtCurrDate = obTokenMgr.GetData(strToken, stCurrDate)
			If IsEmpty( dtCurrDate ) Then dtCurrDate=NSDate
		Else
			dtCurrDate = dtStart
		End If
	Else
		dtCurrDate = DateSerial( lngCurrYear, lngCurrMonth, 1 )
	End If
	If DateDiff("d", dtCurrDate, dtStart, 0, 0 ) >0 Then 
		dtCurrDate = dtStart
	ElseIf DateDiff("d", dtCurrDate, dtEnd, 0, 0 ) <0 Then
		dtCurrDate = dtStart
	End If
	lngCurrMonth = Month(dtCurrDate)
	lngCurrYear = Year(dtCurrDate)
	dtMonthStart = DateSerial( lngCurrYear, lngCurrMonth, 1 )
	dtMonthEnd = DateAdd( "d", -1, DateAdd( "m", 1, dtMonthStart ) )
End Sub

Sub WriteMonth()
	Call obTokenMgr.SetData(strToken, stCurrDate, dtCurrDate )
End Sub

Function GetMonthsArr()
	Dim arr
	Dim i, nCurrIndex
	Dim lngTmpYear, lngTmpMonth

	ReDim arr(23)

	i = 0
	Do 
		nCurrIndex = i * 2
		lngTmpMonth = Month( dtMinMonth )
		lngTmpYear =  Year( dtMinMonth )
		dtMinMonth = DateSerial( lngTmpYear, lngTmpMonth, 1 )

		arr(nCurrIndex) =		lngTmpMonth & "," & lngTmpYear
		arr(nCurrIndex + 1) =	obLanguage.GetMonthName( lngTmpMonth, False ) & " " & lngTmpYear
	
		dtMinMonth = DateAdd("m", 1, dtMinMonth )
		i = i + 1
	Loop While DateDiff( "m", dtMinMonth, dtMaxMonth, 0, 0 ) >=0 And (nCurrIndex + 1) < UBound(arr)

	ReDim Preserve arr(nCurrIndex + 1)
	GetMonthsArr = arr
End Function

Sub DrawMonths( strForm )

	rw WriteHiddenTags(Array("Month", lngCurrMonth, "Year", lngCurrYear))
	DrawSimpleFilterRow obLanguage("Common","kMonth"), "MonthYear", GetMonthsArr(), lngCurrMonth & "," & lngCurrYear, False, "gotoMonth()"
End Sub

Sub scriptMonth( strForm, strAction )%>
<script>
<!--
function gotoMonth() {
	var form = document.forms['<%=strForm%>'];
	var element = form.MonthYear;
	var date = eval("Array(" + element[element.selectedIndex].value + ")" );
	form.elements["Month"].value = date[0];
	form.elements["Year"].value = date[1];
	OnChangeSelect('<%=strForm%>', '<%=strScriptName%>');
}
//-->
</script><%
End Sub
%>
