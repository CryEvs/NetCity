<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->
<% ' © 2007-2014 IRTech. All rights reserved.

Dim strReport, nViewType, strTitle
Dim strTermName, strTitleAddString, strClassID, strClassName
Dim rsEvents, hasDescription

Sub onDrawPage()
	Response.Write strReport
End Sub

Sub ReadState()
	nViewType = GetSafeLng(obTokenMgr.GetData(strToken, "stEventsMonthViewType"), kHoliday)
	if nViewType = kClassEvent Then strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
End Sub

Sub Main()
	If nViewType = kClassEvent Then
		Set rsEvents = objNSNET.GetClassEventList(-1, IIF(strClassID="-1",Empty,Array(strClassID)), strCurrYearID, Null, Null)
		If strClassID="-1" Then
			strClassName=obLanguage("Common","kAll")
		Else
			strClassName=objNSNET.GetClassName(strClassID)
		End IF
	Else
		Set rsEvents = objNSNET.GetSchoolEventList(nViewType, strCurrYearID, Null, Null)
	End If
	hasDescription = False
	Select Case nViewType
			Case kClassEvent strTitle = obLanguage("SetupSchoolCalendar","kClassEvents",strFunctionalityType)
				hasDescription = True
			Case kSchoolEvent strTitle = obLanguage("SetupSchoolCalendar","kSchoolEvents",strFunctionalityType)
				hasDescription = True
			Case kVacation strTitle = obLanguage("SetupSchoolCalendar","kVacations")
			Case kHoliday strTitle = obLanguage("SetupSchoolCalendar","kHolidays")
			Case Else GenerateError obLanguage("Common","kUnexpErr")
	End Select
	strReport=GetReport()
End Sub

Function GetReport()
	Dim arr
	arr = Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Common","kClass",strFunctionalityType),strClassName)
	If nViewType <> kClassEvent then Redim Preserve arr(Ubound(arr)-2)

	strReport = GetPageTitleFor(strTitle & strTitleAddString, arr)
	GetReport = strReport & GetTable() & GetPageVer()
End Function

Function GetTable()
	GetTable=""
	GetTable=GetTable & "<table class='ThinTable' border='1'>"
	GetTable=GetTable & "<tr><th>" & obLanguage("Common","kDate") & _
		"</th><th>" & obLanguage("Common","kName") & "</th>"
		If hasDescription Then GetTable = GetTable & "<th>" & obLanguage("Common","kRoom",strFunctionalityType) & "</th>"
		IF nViewType <> kClassEvent Then GetTable = GetTable & "<th>" & obLanguage("SetupSchoolCalendar","kPeriodicity") & "</th>"
		If hasDescription Then GetTable = GetTable & "<th>" & obLanguage("SetupSchoolCalendar","kDescr") & "</th>" & "</tr>"
	Do While Not rsEvents.EOF 
		GetTable=GetTable & "<tr>"
		GetTable=GetTable & "<td nowrap>" & WriteDateTimeInterval(nViewType, rsEvents("STARTTIME"), rsEvents("ENDTIME")) & "</td>"
		GetTable=GetTable & "<td align='left'>" & DB2HTML(rsEvents("EVENTNAME")) & "</td>"
		If hasDescription Then GetTable = GetTable & "<td>" & DB2HTML(rsEvents("ROOM")) & "</td>" 
		If nViewType <> kClassEvent Then GetTable = GetTable & "<td>" & IIF(DB2HTML(rsEvents("PERIODICITY"))="Y", obLanguage("SetupSchoolCalendar","kYearPeriod"), obLanguage("SetupSchoolCalendar","kNotPeriodicity"))  & "</td>"
		If hasDescription Then GetTable=GetTable & "<td>" & DB2HTML(rsEvents("EVENTDESCRIPTION")) & "</td>"
		GetTable=GetTable & "</tr>"
	rsEvents.MoveNext
	Loop
	GetTable=GetTable & "</table>"
End Function
%>
