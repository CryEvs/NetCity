<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AverageMarkReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/GradingScale_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Dim strClassID, strStudentID, strDateString
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim objSubjectsRs
Dim strSIDArray, bNoMarks, objDSCon

Dim nSubjectsCnt
Dim strActivityID, strSubjClassID, bIsNumber, nMaxMark

Sub specialRead()
	Call InitSchoolSettings( objNSNET )

	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	strStudentID = GetSafeID(Request("SID"), "0")
	strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	strMarksType = GetSafeStr(Request("MT"), 1, "T")
	ReadDateRange
	nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))
End Sub

Sub OnDrawPage()
	Response.Write strReport
End Sub

Sub Main()
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then 
		GenerateError obLanguage("Common","kNoAccess")
	End If
	strDateString = obLanguage("Reports","kFrom") & " " & Date2Java(dtStartDate) & _
		" " & obLanguage("Reports","kTo") & " " & Date2Java(dtEndDate)
	bNoMarks = False

	Set objSubjectsRs = objNSNET.GetAverageMarksForDate(strClassID, strStudentID, strCurrYearID, dtStartDate, dtEndDate, strMarksType)

	If Not objSubjectsRs.EOF Then
		nSubjectsCnt = objSubjectsRs.RecordCount
		bNoMarks = Not objSubjectsRs.Exists("MarksCnt > 0")
	Else
		bNoMarks = True
	End If
	strReport = GetReport()
	obTokenMgr.SetData strToken, stMarksType, strMarksType
End Sub

Function GetReportTable()
	Dim rsStudentMarks, strReport
	strReport = GetTableHeader()
		
	While Not objSubjectsRs.EOF
		strReport = strReport & "<th>" & DB_2_HTML(objSubjectsRs("SUBJECTABBREV")) & "</th>"
		objSubjectsRs.MoveNext
	Wend

	strReport = strReport & DrawTableForTotalOrSubTotal( objSubjectsRs, "StudentAvgRes", "ClassAvgRes" )

	GetReportTable = strReport & "</tr></table>"
End Function

Function DrawTableForTotalOrSubTotal( objRs, strStudentFieldName, strClassFieldName )
	Dim rsMarks, rsClassMarks, strReport
	Dim strMark
	Dim dblSum, nCnt
	
	strReport = ""
	If Not objRs.BOF Then objRs.MoveFirst

	strReport = strReport & "</tr><tr class=""text-nowrap " & kGraphTableDataRow & """>" &_
		"<td class=""cell-text " & kGraphTableDataNameCell & """>" & obLanguage("Reports","kStudentAverageMark",strFunctionalityType) & "</td>"

	While Not objRs.EOF
		strMark = GetSafeStr(objRs(strStudentFieldName), -1, "&nbsp;")
		strReport = strReport & "<td>" & strMark & "</td>"
		objRs.MoveNext	
	Wend

	strReport = strReport & "</tr><tr class=""text-nowrap " & kGraphTableDataRow & """>" &_
		"<td class=""cell-text " & kGraphTableDataNameCell & """>" & obLanguage("Reports","kClassAverageMark") & "</td>"
		
	If Not objRs.BOF Then objRs.MoveFirst
	While Not objRs.EOF
		strMark = GetSafeStr(objRs(strClassFieldName), -1, "&nbsp;")
		strReport = strReport & "<td>" & strMark & "</td>"
		objRs.MoveNext	
	Wend
	DrawTableForTotalOrSubTotal = strReport
End Function
%>
