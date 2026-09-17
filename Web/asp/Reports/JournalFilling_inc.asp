<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim	dtStartDate, dtEndDate, strStartDate, strEndDate
Dim objJournalFilling
Dim strSchoolShortName

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNJournalFilling",strFunctionalityType)
End Function

Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kStartDate"), strStartDate, _
		obLanguage("Common","kEndDate"), strEndDate)
End Function


Sub specialRead()
	SetScriptTimeOut 900
	ReadDateRange
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stStartDate, dtStartDate)
	Call obTokenMgr.SetData(strToken, stEndDate, dtEndDate)
End Sub

Sub specialMain()
	Dim strErrMessage

	strErrMessage = ""
	Set objJournalFilling = objNSNET.GetJournalFillingReport(strCurrYearID, dtStartDate, dtEndDate, strErrMessage)
	If objJournalFilling Is Nothing Then
		If strErrMessage <> "" Then
			GenerateError strErrMessage
		Else
			GenerateError obLanguage("Common","kUnexpErr") 
		End If
	End If
	strSchoolShortName = objNSNET.GetSchoolName(strSchoolID)
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num"">" & _
		"<tr><th class=""text-nowrap"">" & obLanguage("Reports","kOrderNumberS") & _
		"</th><th>" & obLanguage("Reports","kNameEducInst") & "</th><th>" & obLanguage("Common","kTeachersCount") & _
		"</th><th>" & obLanguage("Reports","kStudentsCount_s",strFunctionalityType) & "</th><th>" & obLanguage("Reports","kClassesCountS",strFunctionalityType) & _
		"</th><th>" & obLanguage("Common","kParentsCount") & "</th><th>" & obLanguage("Reports","kStudentsWithParentPercent",strFunctionalityType) & _
		"</th><th>" & obLanguage("Common","kSubjectPlansCount") & "</th><th>" & obLanguage("Common","kWeekLessonsCount") & _
			"<br />(" & Date2Str(objJournalFilling.WeekLessonsCountDay) & " - " & Date2Str(DateAdd("d", 6, objJournalFilling.WeekLessonsCountDay)) & ")" & _
		"</th><th>" & obLanguage("Common","kTotalMarksPercent") & "</th><th>" & obLanguage("Common","kYearMarksPercent") & "</th><th>" & obLanguage("Common","kMarksCount") & _
		"</th><th>" & obLanguage("Common","kMissOutCount") & "</th><th>" & obLanguage("Reports","kLessonThemesPercent",strFunctionalityType) & _
		"</th><th>" & obLanguage("Common","kHomeAssignmentsPercent") & "</th><th>" & obLanguage("Common","kParentsTreatmentsCount") & _
		"</th><th>" & obLanguage("Reports","kStudentsTreatmentsCount",strFunctionalityType) & _
		"</th><th>" & obLanguage("Common","kStaffTreatmentsCount") & "</th></tr>"
End Function

Function GetReportTable()
	Dim strReport
	
	strReport = GetTableHeader()

	strReport = strReport & "<tr class=""text-nowrap"">" & _
		"<td>1</td>" & _
		"<td class=""cell-text"">" & DB2HTML(strSchoolShortName) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.TeachersCount) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.StudentsCount) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.ClassesCount) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.ParentsCount) & "</td>" & _
		"<td>" & PercentCell(objJournalFilling.StudentsWithParentPercent) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.SubjectPlansCount) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.WeekLessonsCount) & "</td>" & _
		"<td>" & PercentCell(objJournalFilling.TotalMarksPercent) & "</td>" & _
		"<td>" & PercentCell(objJournalFilling.YearTotalMarksPercent) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.MarksCount) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.MissOutCount) & "</td>" & _
		"<td>" & PercentCell(objJournalFilling.LessonThemesPercent) & "</td>" & _
		"<td>" & PercentCell(objJournalFilling.HomeAssignmentsPercent) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.ParentsTreatmentsCount) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.StudentsTreatmentsCount) & "</td>" & _
		"<td>" & DB2HTML(objJournalFilling.StaffTreatmentsCount) & "</td>"
	strReport = strReport & "</tr>"

	GetReportTable = strReport & "</table>"
End Function

Function PercentCell(value)
	PercentCell = DB2HTML(IIF(CLng(value) >= 0, value, "-" ))
End Function
%>
