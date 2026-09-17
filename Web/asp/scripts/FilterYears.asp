<!-- #INCLUDE FILE="FiltersCommon.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim syRs, strErr
Dim dtYearStart, dtYearEnd, nWeekEndSet
Dim BDate, strBDate

Sub InitYears()
	bExit = False
	If Not objNSNET.IsCanConnect(TRUE, strErr) Then GenerateError obLanguage("Common","kErrNoAccessDB_Work") & ": " & strErr
	Set syRs = objNSNETWork.GetSchoolYearList(strSchoolID, True)
End Sub

Sub DrawYears( theStrForm )
	DrawFilterRow theStrForm, obLanguage("Common","kSchoolYear"), "CURRYEAR", syRs, "SCHOOLYEARID", "SCHOOLYEARNAME", strCurrYearID, False
End Sub

Sub InitYearInfo()
	Dim objRs
	Set objRs = objNSNET.GetYearInfo(strCurrYearID)
	dtYearStart = CDate(objRs("STARTDATE"))
	dtYearEnd = CDate(objRs("ENDDATE"))
	nWeekEndSet = CLng(objRs("WEEKENDSET"))
	Set objRs = Nothing
End Sub

Sub CalcCurrYearLimits( byref outStart, byref outEnd )
	Dim rsYear
	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	outStart = rsYear("STARTDATE")
	outEnd = rsYear("ENDDATE")
	rsYear.Close
End Sub

'/////////////////////////////////////////////////////////////////////////////////////
' BDate...
Sub InitBDate()
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	
	BDate = Get_Date(Request("DATE"), stCurrDate, IIF(strCurrYearID = strSchoolYearID, NSDate, dtYearStart))
	If Not IsYearDay(BDate) Then BDate = dtYearStart
	strBDate = Date2Str( BDate )
End Sub

Sub DrawBDate()
	OpenFormGroup obLanguage("Common","kDay")
	Call DrawDateInput("DATE", BDate, "")
	CloseFormGroup
End Sub

Sub DrawBDateWithBtns()
	OpenFormGroup obLanguage("Common","kDay")
	Call DrawDateInputEx("DATE", BDate, "", Array("prev()", obLanguage("Calendar","kViewPrevDay"), "glyphicon glyphicon-circle-arrow-left", "", "next()", obLanguage("Calendar","kViewNextDay"), "glyphicon glyphicon-circle-arrow-right", ""))
	CloseFormGroup
End Sub

Sub NavigationFunctions(strForm, strInputName, stepD, dtStart, dtEnd)%>
	function prev() {
		
		<%If DateDiff("d", dtStart, DateAdd("d", -stepD, BDate), 0, 0 ) >= 0 Then%>
		if(isDBBusy()) return;

		var form = document.forms['<%=strForm%>'];

		form.<%=strInputName%>.value = '<%=Date2Str(DateAdd("d", -stepD, BDate))%>';

		setDBBusy();
		DoSubmit(form, "");
		<%End If%>
	}

	function next() {
		<%If DateDiff("d", dtEnd, DateAdd("d", stepD, BDate), 0, 0 ) <= 0 Then%>
		if(isDBBusy()) return;

		var form = document.forms['<%=strForm%>'];

		form.<%=strInputName%>.value = '<%=Date2Str(DateAdd("d", stepD, BDate))%>';

		setDBBusy();
		DoSubmit(form, "");
		<%End If%>
	}<%
End Sub

Sub WriteBDate()
	Call obTokenMgr.SetData(strToken, stCurrDate, BDate)
End Sub

Function IsWeekEnd(dtDate)
	IsWeekEnd = ((2 ^ (Weekday(dtDate) - 1)) And nWeekEndSet) <> 0
End Function

Function IsBetween( theDate, dtMinDate, dtMaxDate)
	If DateDiff("d", theDate, dtMinDate, 0, 0 ) > 0 Then IsBetween = False: Exit Function
	IsBetween = ( DateDiff("d", theDate, dtMaxDate, 0, 0 ) >= 0 )
End Function

Function IsYearDay( theDate )
	IsYearDay = IsBetween( theDate, dtYearStart, dtYearEnd)
End Function
%>
