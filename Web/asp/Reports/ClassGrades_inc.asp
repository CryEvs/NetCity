<!-- #INCLUDE FILE="../scripts/assignment.asp" -->
<!-- #INCLUDE FILE="GradingScale_inc.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nMaxMark

Dim objRs, objAssignmentListRs, strClassGroup
Dim strSubjClassID, i, strClassName, strSubjectName
Dim strAccYear, strTeacherName, strAccDate, strSubjClassName, strSubjectGroupName
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate
Dim strActivityID

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports", "kRNClassSubjectReport1") & " " & strClassName
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Reports", "kRNClassSubjectReport2", strFunctionalityType) & " " & strSubjectGroupName
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kSchoolYear"),strAccYear, _
		obLanguage("Common","kPeriod"), strAccDate, _
		obLanguage("Filter","kTeacherGB",strFunctionalityType),strTeacherName, _
		obLanguage("Filter","kCourseGB"),strSubjectGroupName, _
		obLanguage("Filter","kClassGB",strFunctionalityType),strClassName )
End Function


Function GetTableHeader()
End Function

Function GetTableHeaderString()
End Function

Sub specialMain()
	Dim objCSGInfo

	Call InitAssignmentTypesHelper()
	ReadDateRange
	nMaxMark = GetSafeLng(obTokenMgr.GetData(strToken, stMaxMark), 5)

	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")
	Call InitIUPClassID(strClassID_IUP)
	TestError(obLanguage("Reports","kClassNotSelected"))

	If bIsIupGrade Then
		strClassName = strIupGrade & " *"
	Else
		strClassName = objNSNET.GetClassName(strClassID)
	End If

	strSubjClassID =  GetSafe("SCLID", 0)
	Set objCSGInfo = objNSNET.GetClassSubjectGroupInfo(strSubjClassID)
	strTeacherName = objCSGInfo("NICKNAME")
	strSubjClassName = strClassName & "/" & objCSGInfo("NAME")
	strSubjectGroupName = objCSGInfo("NAME")
	strSubjectName = objCSGInfo("SUBJECTNAME")
	strAccDate = "с " & Date2Str(dtStartDate) & " по " & Date2Str(dtEndDate)
	If IsNull(objCSGInfo("GROUPID")) Then
		strClassGroup = obLanguage("Reports","kInClass_report",strFunctionalityType)
	Else
		strClassGroup = obLanguage("Reports","kInSubGroup")
	End If

	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")

	Set objAssignmentListRs = objNSNET.GetLASummaryReport(strSubjClassID, dtStartDate, dtEndDate)
	TestError obLanguage("Reports","kCantGetReportData")

	If objAssignmentListRs.EOF Then
		strErrMsg = obLanguage("Reports","kNoCompletedAssignments",strFunctionalityType)
	End If
End Sub

Function GetReportTable()
	Dim dbl2, dbl3, dbl4, strType
	Dim strNameList, strAssignID
	Dim dblTotal5, dblTotal4, dblTotal3, dblSumScore, lngNumOfTests
	Dim dblTotalTotal5, dblTotalTotal4, dblTotalTotal3, lngTotalNumOfTests
	dblTotalTotal5 = 0
	dblTotalTotal4 = 0
	dblTotalTotal3 = 0
	lngTotalNumOfTests = 0
	strActivityID = ""

		strReport = strReport & GetTableHeader() & _
			"<th WIDTH=5% ROWSPAN=2>" & obLanguage("Reports","kOrderNumberS") & "</th>" & _
			"<th WIDTH=""10%"" ROWSPAN=2>" & obLanguage("Assignment","kATAssignmentType") & "</th>" & _
			"<th WIDTH=""19%"" ROWSPAN=2>" & obLanguage("Reports","kTheme") & "</th>" & _
			"<th WIDTH=""7%"" ROWSPAN=2>" & obLanguage("Common","kDate") & "</th>" & _
			"<th WIDTH=""7%"" ROWSPAN=2>" & DB2HTML_BR(obLanguage("Reports","kStudentsCountS",strFunctionalityType)) & "<br>"&strClassGroup&"</th>" & _
			"<th WIDTH=""7%"" ROWSPAN=2>" & obLanguage("Reports","kCertified") & "</th>" & _
			"<th WIDTH=""16%"" COLSPAN=4>" & obLanguage("Reports","kGotMark") & "</th>" & _
			"<th WIDTH=""13%"" ROWSPAN=2>" & obLanguage("Reports","kLastNameGot2") & "</th>" & _
			"<th WIDTH=""6%"" ROWSPAN=2>" & obLanguage("Reports","kAverageMarkS") & "</th>" & _
			"<th WIDTH=""5%"" ROWSPAN=2>" & obLanguage("Reports","kResultPercentS") & "</th>" & _
			"<th WIDTH=""5%"" ROWSPAN=2>" & obLanguage("Reports","kQualityPercentS") & "</th></TR>" & _
			GetTableHeaderString() & "<th WIDTH=""4%"">""5""</th>" & _
			"<th WIDTH=""4%"">""4""</th>" & _
			"<th WIDTH=""4%"">""3""</th>" & _
			"<th WIDTH=""4%"">""2""</th></TR>"
		While Not objAssignmentListRs.EOF
			If strActivityID <> objAssignmentListRs("ACTIVITYID") Then
				If strActivityID <> "" Then
					strReport = strReport & "<tr><th COLSPAN=""14"">&nbsp;</th></tr>"
				End If
				strActivityID = objAssignmentListRs("ACTIVITYID")
				If strActivityID<>kActivityID_Manual Then
					strReport = strReport & GetTableHeaderString & "<th COLSPAN=""14""><b>" & _
						DB_2_HTML(objAssignmentListRs("ACTIVITYNAME")) & "</b></th></tr>"
				End If
				i = 1
			End If
			strNameList=""
			strAssignID = CLng(objAssignmentListRs("ASSIGNMENTID"))
			dblTotal5 = 0
			dblTotal4 = 0
			dblTotal3 = 0
			dblSumScore = 0
			lngNumOfTests = 0
			strType = objAssignmentListRs("NAME")
			If  IsNull(strType) Then
				strType ="&nbsp; &nbsp; --"
			Else
				strType = DB_2_HTML(strType)
			End If
			strReport = strReport & "<tr>" & _
				"<td class=""cell-num"">&nbsp;" & Cstr(i) &"</td>" & _
				"<td class=""cell-text"">" & strType & "</td>" & _
				"<td class=""cell-text"">" & DB_2_HTML(objAssignmentListRs("ASSIGNMENTNAME")) & "</td>" & _
				"<td class=""cell-date"">" & Date2Str(objAssignmentListRs("DUEDATE")) & "</td>" & _
				"<td class=""cell-num"">" & DB_2_HTML(objAssignmentListRs("STUDENTCNT")) & "</td>"
			strType = objAssignmentListRs("ASSIGNMENTID")
			While (Not objAssignmentListRs.EOF) AND (strAssignID = CLng(strType))
				'nMaxMark = k_5 ' почему-то только 5-балльная
				dbl3 = GetGradingCommon(objAssignmentListRs("RES"))

				Select Case dbl3
				Case 5 : dblTotal5 = dblTotal5 + 1
				Case 4 : dblTotal4 = dblTotal4 + 1
				Case 3 : dblTotal3 = dblTotal3 + 1
				End Select
				If dbl3>0 Then lngNumOfTests = lngNumOfTests + 1
				dblSumScore = dblSumScore + dbl3
				If dbl3 < 3 Then
					If strNameList="" Then
						strNameList = DB_2_HTML(objAssignmentListRs("LASTNAME"))
					Else
						strNameList = strNameList & "<br>" & DB_2_HTML(objAssignmentListRs("LASTNAME"))
					End If
				End If
				objAssignmentListRs.MoveNext
				if Not objAssignmentListRs.EOF then strType = objAssignmentListRs("ASSIGNMENTID")
			WEnd
			i = i + 1
			if strNameList = "" Then strNameList = "&nbsp; &nbsp; -"
			dbl2 = lngNumOfTests - dblTotal5 - dblTotal4 - dblTotal3
			dbl3 = ((lngNumOfTests - dbl2) * 100)/lngNumOfTests
			dbl4 = ((dblTotal5 + dblTotal4) * 100)/lngNumOfTests
	
			strReport = strReport & _
				"<td class=""cell-num"">" & Cstr(lngNumOfTests) & "</td>" & _
				"<td class=""cell-num"">" & Cstr( dblTotal5) &"</td>" & _
				"<td class=""cell-num"">" & Cstr( dblTotal4) &" </td>" & _
				"<td class=""cell-num"">" & Cstr( dblTotal3) &"</td>" & _
				"<td class=""cell-num"">" & Cstr( dbl2) &"</td>" & _
				"<td class=""cell-text"">" & strNameList & "</td>" & _
				"<td class=""сell-num-2"">" & FormatNumber(dblSumScore/lngNumOfTests , 2) & "</td>" & _
				"<td class=""сell-num-2"">" & FormatNumber(dbl3 , 2 ) & "</td>" & _
				"<td class=""сell-num-2"">" & FormatNumber( dbl4, 2 ) & "</td></tr>"
			dblTotalTotal5 = dblTotalTotal5 + dblTotal5
			dblTotalTotal4 = dblTotalTotal4 + dblTotal4
			dblTotalTotal3 = dblTotalTotal3 + dblTotal3
			lngTotalNumOfTests = lngTotalNumOfTests + lngNumOfTests
		WEnd
		dbl3 = ((dblTotalTotal5+dblTotalTotal4+dblTotalTotal3) * 100)/lngTotalNumOfTests
		dbl4 = ((dblTotalTotal5 + dblTotalTotal4) * 100)/lngTotalNumOfTests
		strReport = strReport & _
		"<tr class=""totals""><td colspan=5>" & obLanguage("Reports","kCommonResultPercent",strFunctionalityType) & " " & FormatNumber(dbl3, 2) & "</td><td colspan=9>" & _
		obLanguage("Reports","kCommonQualityPercent",strFunctionalityType) & " " & FormatNumber(dbl4, 2) & "</td></tr></table>"
		GetReportTable = strReport
End Function

%>
