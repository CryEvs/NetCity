<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim arrJournalFilling
Dim strSchoolShortName
Dim nEMId
Dim nFuncType

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNJournalFilling",nFuncType)
End Function

Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kStartDate"), strStartDate, _
		obLanguage("Common","kEndDate"), strEndDate)
End Function

Sub specialRead()
	SetScriptTimeOut 2700
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	nFuncType = CLng(GetSafe("FuncTp", ""))
End Sub

Sub WriteState()
End Sub

Sub specialMain()
	Dim strErrMessage, arrayList, strYearName
	strErrMessage = ""
	nEMId = CLng(filterEMID)
	strYearName = objNSNET.GetGlobalYearName(nGlobalYearId)
	Call obTokenMgr.SetData(strToken, "CurrYearName", strYearName)
	Set arrayList = objNSNET.GetJournalFillingReportForEM(nEMId, nFuncType, nGlobalYearId, dtStartDate, dtEndDate, strErrMessage)
	If arrayList Is Nothing Then
		GenerateError IIF(Not isDull(strErrMessage), strErrMessage, obLanguage("Common","kUnexpErr") )
	End If
	arrJournalFilling = arrayList.ToArray()
End Sub

Function GetTableHeader()
	'ЕСЛИ ЕСТЬ ПОДЧИНЕННЫЕ УО, ТО ДОБАВЛЯЕМ КОЛОНКУ- "УПРАВЛЕНИЕ"
	GetTableHeader = "<table class=""table-print-num""><tr>"
	GetTableHeader = GetTableHeader & "<th class=""text-nowrap"">" & obLanguage("Reports","kOrderNumberS")
	GetTableHeader = GetTableHeader & GetManagementColumn(1)
	GetTableHeader = GetTableHeader & _
		"</th><th>" & obLanguage("Messages","kToFuncType",nFuncType) & _
		"</th><th>" & obLanguage("Reports","kTeachersCount",nFuncType) & _
		"</th><th>" & obLanguage("Reports","kStudentsCount_s",nFuncType) & _
		"</th><th>" & obLanguage("Reports","kClassesCountS",nFuncType)
			
	If nFuncType <> kFuncType_Add Then
		GetTableHeader = GetTableHeader & _
			"</th><th>" & obLanguage("Common","kParentsCount") & _
			"</th><th>" & obLanguage("Reports","kStudentsWithParentPercent",nFuncType)
	End If

	If nFuncType <> kFuncType_PreSchool Then
		GetTableHeader = GetTableHeader & _
			"</th><th>" & obLanguage("Common","kSubjectPlansCount") & _
			"</th><th>" & obLanguage("Reports","kWeekLessonsCount",nFuncType)

		If nFuncType = kFuncType_Common Then
			GetTableHeader = GetTableHeader & _
				"</th><th>" & obLanguage("Common","kTotalMarksPercent") & _
				"</th><th>" & obLanguage("Common","kMarksCount")
		End If

		GetTableHeader = GetTableHeader & _
			"</th><th>" & obLanguage("Common","kMissOutCount") & _
			"</th><th>" & obLanguage("Reports","kLessonThemesPercent",nFuncType)

		If nFuncType = kFuncType_Common Then
			GetTableHeader = GetTableHeader & _
				"</th><th>" & obLanguage("Common","kHomeAssignmentsPercent")
		End If
	End If

	GetTableHeader = GetTableHeader & _
		"</th><th>" & obLanguage("Common","kParentsTreatmentsCount")

	If nFuncType <> kFuncType_PreSchool Then
		GetTableHeader = GetTableHeader & _
			"</th><th>" & obLanguage("Reports","kStudentsTreatmentsCount",nFuncType)
	End If

	GetTableHeader = GetTableHeader & _
		"</th><th>" & obLanguage("Common","kStaffTreatmentsCount") & "</th></tr>"
End Function

Function GetReportTable()
	Dim strReport, i, objFilling
	strReport = GetTableHeader()
	For Each objFilling In arrJournalFilling
		i = i + 1
		strReport = strReport & "<tr class=""text-nowrap"">" &_
		"<td>" & i & "</td>"
		If subEms Then
			strReport = strReport & "<td class=""cell-text"">" & DB2HTML(objFilling.FounderName) & "</td>"
		End If

		strReport = strReport & _
		"<td class=""cell-text"">" & DB2HTML(objFilling.SchoolShortName) & "</td>" & _
		"<td>" & DB2HTML(objFilling.TeachersCount) & "</td>" & _
		"<td>" & DB2HTML(objFilling.StudentsCount) & "</td>" & _
		"<td>" & DB2HTML(objFilling.ClassesCount) & "</td>"

		If nFuncType <> kFuncType_Add Then
			strReport = strReport & _
			"<td>" & DB2HTML(objFilling.ParentsCount) & "</td>" & _
			"<td>" & PercentCell(objFilling.StudentsWithParentPercent) & "</td>"
		End If

		If nFuncType <> kFuncType_PreSchool Then
			strReport = strReport & _
			"<td>" & DB2HTML(objFilling.SubjectPlansCount) & "</td>" & _
			"<td>" & DB2HTML(objFilling.WeekLessonsCount) & "</td>"

			If nFuncType = kFuncType_Common Then
				strReport = strReport & _
				"<td>" & PercentCell(objFilling.TotalMarksPercent) & "</td>" & _
				"<td>" & DB2HTML(objFilling.MarksCount) & "</td>"
			End If

			strReport = strReport & _
			"<td>" & DB2HTML(objFilling.MissOutCount) & "</td>" & _
			"<td>" & PercentCell(objFilling.LessonThemesPercent) & "</td>"

			If nFuncType = kFuncType_Common Then
				strReport = strReport & _
				"<td>" & PercentCell(objFilling.HomeAssignmentsPercent) & "</td>"
			End If
		End If

		strReport = strReport & _
		"<td>" & DB2HTML(objFilling.ParentsTreatmentsCount) & "</td>"

		If nFuncType <> kFuncType_PreSchool Then
			strReport = strReport & _
			"<td>" & DB2HTML(objFilling.StudentsTreatmentsCount) & "</td>"
		End If

		strReport = strReport & _
		"<td>" & DB2HTML(objFilling.StaffTreatmentsCount) & "</td>"

		strReport = strReport & "</tr>"
	Next

	GetReportTable = strReport & "</TABLE>"
End Function

Function PercentCell(value)
	PercentCell = DB2HTML(IIF(CLng(value) >= 0, value, "-" ))
End Function
%>
