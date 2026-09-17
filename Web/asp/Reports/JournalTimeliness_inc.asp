<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim nDaysCount, dtMaxDate

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNJournalTimeliness")
End Function
Function GetPageParams()
	GetPageParams = Array( obLanguage("Reports","kTimelinessDaysCnt"), nDaysCount )
End Function

Sub specialRead()
	nDaysCount = GetSafeLng(Request("DCnt"), Null)
	Call obTokenMgr.SetData(strToken, stDaysCount, nDaysCount)
End Sub

Sub specialMain()
	Dim dtToday

	dtToday = NSNow()
	dtToday = DateSerial(Year(dtToday), Month(dtToday), Day(dtToday))
	dtMaxDate = DateAdd("d", 1 - nDaysCount, dtToday)
End Sub

Function GetReportTable()
	Dim rsSubjects, nInd

	Set rsSubjects = objNSNET.GetJournalTimeliness(strCurrYearID, dtMaxDate)
	If Not rsSubjects.EOF Then
		GetReportTable="<table class=""table-print-text"">" & _
		"<tr><th>" & obLanguage("Filter","kN_PP") & "</th><th>" & obLanguage("Reports","kFIOstud") & "</th><th>" & filterClasses & "</th><th>" & obLanguage("Common","kSubject") & "</th><th>" & obLanguage("Reports","kLastMarkChangeDate") & "</th></tr>"
		nInd = 0
		While not rsSubjects.EOF
			nInd = nInd + 1
			GetReportTable = GetReportTable & "<tr><td>" & nInd & "</td><td>" & rsSubjects("NICKNAME") & "</td><td>" & rsSubjects("NAME") & "</td><td>" & rsSubjects("SGNAME") & "</td>"
			GetReportTable = GetReportTable & "<td class=""cell-date"">" & GetEventTime(rsSubjects) & "</td></tr>"
			rsSubjects.MoveNext
		Wend
		GetReportTable = GetReportTable & "</table>"
	Else
		GetReportTable = GetReportTable & "<div class=""message""><b>" & obLanguage("Constructor", "kEmptyReport") & "</b></div>"
	End If
End Function

Function GetEventTime(rsSubjects)
	GetEventTime = Date2Str(rsSubjects("MAX_DAY")) & "&nbsp;"
End Function
%>
