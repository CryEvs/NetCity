<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strTeacherID, strSubjectID, strSubjectName

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNTeacherReport",strFunctionalityType)
End Function

Sub specialRead()
	strTeacherID = GetSafeID(obTokenMgr.GetData(strToken,stCurrTeacher), Null)
	strSubjectID = GetSafeID(obTokenMgr.GetData(strToken,stCurrSubject), Null)
	strSubjectName = objNSNET.GetSubjectName(strSubjectID)
End Sub

Function GetPageParams()
	If strTeacherID <> "-1" Then
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
				obLanguage("Filter","kTeacherGB",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID), _
				obLanguage("Common","kSubject"), strSubjectName)
	Else
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
			obLanguage("Common","kSubject"), strSubjectName)
	End If
End Function

Function GetReportTable()
	GetReportTable = GetTotalsTable()
End Function

Function GetTableHeader()
End Function

const kSOU_b = "0"
const kSOU_p = "4"

Function GetTotalsTable()
	Dim SOUType, strViewType, strBads
	Dim rsTerms, rsEvents, dtStart, dtEnd, dayDiff, workdays, dayDiffE, dtEndE, dtStartE
	SOUType = IIF(GetSafe( "kSOU_Filter","kSOU_p") = "kSOU_p", kSOU_p, kSOU_b)
	strBads = GetSafe( "kMark_2_str","") = "kShow"
	strViewType = GetSafe( "strViewType","") = "kCommonType"
	GetTotalsTable = GetTableByPass(strSubjectID, strCurrYearID, strTeacherID, 0, SOUType, strBads, strViewType)
	GetTotalsTable = GetTotalsTable & GetTableByPass(strSubjectID, strCurrYearID, strTeacherID, 1, SOUType, strBads, strViewType)
	If IsDull(GetTotalsTable) Then GetTotalsTable = GetWarningPrint(obLanguage("Reports","kNoPeriodMarks")) : Exit Function
	If Not isComplexTeacherReport Then Exit Function
	GetTotalsTable = GetTotalsTable & "<h3>"&obLanguage("Reports","kPerodWeeks")&"</h3>"
	GetTotalsTable = GetTotalsTable & "<table cellspacing=""5"" width=""70%""><tr><td class=""text-valing-top"">"
	GetTotalsTable = GetTotalsTable & "<table class=""table-print"">"
	Set rsEvents = objNSNET.GetSchoolEventList(kVacation, strCurrYearID)
	GetTotalsTable = GetTotalsTable & "<tr><th>"&obLanguage("Common","kVacationHeader")&"</th><th>"&obLanguage("Calendar","kFrom")&"</th><th>"&obLanguage("Calendar","kTo")&"</th><th>недель</th></tr>"
	While Not rsEvents.EOF
		dtStart = rsEvents("STARTTIME")
		dtEnd = rsEvents("ENDTIME")
		dayDiff = (dtEnd - dtStart+1)
		GetTotalsTable = GetTotalsTable & "<tr><th>"&rsEvents("EVENTNAME")&"</th><td class=""cell-date"">"&Date2Str(dtStart)&"</td><td class=""cell-date"">"&dtEnd&"</td><td class=""cell-num-2"">"&Round(dayDiff/7,2)  &"</td></tr>"
		rsEvents.MoveNext()
	Wend
	GetTotalsTable = GetTotalsTable & "</table>"
	Set rsTerms =objNsNet.GetTermList(strCurrYearID)
	If rsTerms.EOF Then
		GetTotalsTable = GetTotalsTable &  obLanguage("Common","kDefineTermsTypes") 
	Else
	GetTotalsTable = GetTotalsTable & "</td><td><table class=""table-print"">"
	GetTotalsTable = GetTotalsTable & "<tr><th>"&obLanguage("Common","kPeriod")&"</th><th>"&obLanguage("Calendar","kFrom")&"</th><th>"&obLanguage("Calendar","kTo")&"<th>недель</th><th>учебных<br>недель</th></tr>"
	While Not rsTerms.EOF
		dtStart = rsTerms("STARTDATE")
		dtEnd = rsTerms("ENDDATE")
		dayDiff = (dtEnd - dtStart+1)
		rsEvents.MoveFirst()
		workdays = dayDiff
		GetTotalsTable = GetTotalsTable & "<tr><th>"&rsTerms("TERMNAME")&"</th><td class=""cell-date"">"&Date2Str(dtStart)&"</td><td class=""cell-date"">"&dtEnd
		Do While Not rsEvents.EOF
			dtStartE = rsEvents("STARTTIME")
			If dtStartE > dtEnd Then Exit Do
			dtEndE = rsEvents("ENDTIME")
			If dtStart <= dtEndE Then
				If dtStartE <= dtStart Then
					dtStartE = dtStart
					dtStart = dtEndE+1 ' для исключения дублей  при пересечении каникул с краем периода
				End If
				If dtEndE >= dtEnd Then
					dtEndE = dtEnd
					dtEnd = dtStartE-1 ' для исключения дублей  при пересечении каникул с краем периода
				End If
				dayDiffE = (dtEndE - dtStartE+1)
				workdays = workdays - dayDiffE
			End If
			rsEvents.MoveNext()
		Loop
		GetTotalsTable = GetTotalsTable & "</td><td class=""cell-num"">"&roundToWeek(dayDiff) &"</td><td class=""cell-num-2"">"&roundToWeek(workdays)&"</td></tr>"
		rsTerms.MoveNext()
	Wend
	GetTotalsTable = GetTotalsTable & "</table></td></tr></table>"
	End If
	GetTotalsTable = GetTotalsTable & "<p>"&obLanguage("Reports","kPerodWeeksNote")&"</p>"

End Function

Function roundToWeek(dayDiff)
	roundToWeek = Round(dayDiff/7,2)
End Function

Function GetTableByPass(strSubjectID, strCurrYearID, strTeacherID, nPass, nLevels, showBadList, showEmptyLines)
	Dim objComponent, arrRows
	Set objComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMarkComponent")
	arrRows = objComponent.GetTeacherSubjectAllTotals( strSubjectID, strCurrYearID, strTeacherID, nPass, nLevels, showBadList, showEmptyLines, isComplexTeacherReport )
	If IsDull(arrRows) Then Exit Function

	GetTableByPass = GetTableByPass & arrRows
End Function

%>
