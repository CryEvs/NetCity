<!-- #INCLUDE FILE="../scripts/assignment.asp" -->
<!-- #INCLUDE FILE="GradingScale_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const START_TABLE			= "<table class=""table-print"" WIDTH=""100%"">"
Const END_TABLE				= "</table><br />"
Const START_LANAME_TABLE	= "<table border=""0"" width=""100%"" cellspacing=""5"" cellpadding=""2""><TR><TD STYLE=""FONT-SIZE:10pt;FONT-WEIGHT:BOLD;TEXT-ALIGN=CENTER"">"
Const END_LANAME_TABLE		= "</td></tr></table>"

Dim bIsNumber
Dim objRs, objAssignmentListRs
Dim strStudentID, strStudentName, strSubjClassID, strActivityID, strAccYear, strTeacherName, strClassName, strSubjectName
Dim nMaxMark
Dim nMinMark, bWeight, nWeight, nTotalWeight, bActualMark
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNStudentGradeReport",strFunctionalityType)& ": "& strStudentName
End Function
Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), strAccYear, _
		obLanguage("Common","kPeriod"), obLanguage("Reports","kFrom") & " " & strStartDate & " " & obLanguage("Reports","kTo") & " " & strEndDate, _
		obLanguage("Filter","kTeacherGB",strFunctionalityType),  strTeacherName, _
		 filterClasses, strClassName, _
		obLanguage("Filter","kCourseGB"), strSubjectName _
		)
End Function

Sub specialRead
	nMaxMark = GetSafeLng(obTokenMgr.GetData(strToken, stMaxMark), 5)
	strStudentID = GetSafeID(Request("SID"), NULL )
	strSubjClassID =  obTokenMgr.GetData(strToken,stCurrSubjClass) 
	ReadDateRange
End Sub

Sub specialMain()
	Dim strSIDArray, objCSGInfo
	Set objAssignmentListRs = objNSNET.GetStudentSummaryReport(strStudentID, strSubjClassID, dtStartDate, dtEndDate)
	TestError obLanguage("Reports","kCantGetReportData")
	
	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")
	Call InitIUPClassID(strClassID_IUP)
	TestError(obLanguage("Reports","kClassNotSelected"))

	If bIsIupGrade Then
		strClassName = strIupGrade & " *"
	Else
		strClassName = objNSNET.GetClassName(strClassID)
	End If

	Set objCSGInfo = objNSNET.GetClassSubjectGroupInfo(strSubjClassID)
	strTeacherName = objCSGInfo("NICKNAME")
	strSubjectName = objCSGInfo("NAME")
	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")
	strStudentName = objNSNET.GetUserNickName(strStudentID)
	strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then GenerateError obLanguage("Common","kNoAccess")

	If objAssignmentListRs.EOF Then
		strErrMsg = obLanguage("Reports","kNoStudentAssignments",strFunctionalityType)
		Exit Sub
	End If
	Call InitSchoolSettings( objNSNET )
	Call InitAssignmentTypesHelper()
	bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")
	nMinMark = CLng(arrSchoolSettings( 1, kSSIndex_MinMark ))

End Sub

Function GetReportTable()
	Dim bSelfPaced
	Dim dblTotalEarned, lngNumOfTests, lngNumOfComplTests, dblSumScoreSP, lngNumOfTestsSP
	Dim dblTotalTotalEarned, lngTotalNumOfTests, lngTotalNumOfComplTests, dblTotalSumScoreSP, lngTotalNumOfTestsSP
	Dim strType, dtDueDate, dtToday
	Dim result

	dblTotalEarned = 0
	lngNumOfTests = 0 
	lngNumOfComplTests = 0 
	dblSumScoreSP = 0 
	lngNumOfTestsSP = 0
	nTotalWeight = 0
	dtToday = NSNow()
	dtToday = DateSerial(Year(dtToday), Month(dtToday), Day(dtToday))

	dblTotalTotalEarned = 0
	lngTotalNumOfTests = 0 
	lngTotalNumOfComplTests = 0 
	dblTotalSumScoreSP = 0 
	lngTotalNumOfTestsSP = 0 
	strActivityID = ""
	
		Dim i, dbl
		i = 0
		While Not objAssignmentListRs.EOF
			i = i + 1
			If strActivityID <> objAssignmentListRs("ACTIVITYID") Then
				If strActivityID <> "" Then 
					If bSelfPaced Then
						strReport = strReport & SummarySP( lngNumOfTestsSP, dblSumScoreSP )
						dblTotalSumScoreSP = dblTotalSumScoreSP + dblSumScoreSp
						lngTotalNumOfTestsSP = lngTotalNumOfTestsSP + lngNumOfTestsSP
						dblTotalEarned = 0
						lngNumOfTests = 0 
						lngNumOfComplTests = 0
						dblSumScoreSP = 0 
						lngNumOfTestsSP = 0 
					Else
						strReport = strReport & Summary( lngNumOfTests, lngNumOfComplTests, dblTotalEarned, strActivityId )
						dblTotalTotalEarned = dblTotalTotalEarned + dblTotalEarned
						lngTotalNumOfTests = lngTotalNumOfTests + lngNumOfTests
						lngTotalNumOfComplTests = lngTotalNumOfComplTests + lngNumOfComplTests
						dblTotalEarned = 0
						lngNumOfTests = 0 
						lngNumOfComplTests = 0
						dblSumScoreSP = 0 
						lngNumOfTestsSP = 0 
						strActivityID = objAssignmentListRs("ACTIVITYID")
					End If
					strReport = strReport & END_TABLE
				Else
					strActivityID = objAssignmentListRs("ACTIVITYID")
				End If

				bIsNumber = (strActivityID <> kActivityID_Manual)
				If bIsNumber Then arrGradingScales = GetGrScale(strActivityID, strSubjClassID)
				
				bSelfPaced = objAssignmentListRs("SELFPACED") = "Y"
				If bSelfPaced Then
					strReport = strReport & "<tr><th colspan=""6"">" & _
						db_2_html(objAssignmentListRs("ACTIVITYNAME")) & "</th></tr>" & _
						"<tr>" & _
						"<th colspan=""4"">" & obLanguage("Reports","kTestName") & "</th>" & _
						"<th class=""text-nowrap"">" & obLanguage("Assignment","kATDueDate") & "</th>" & _
						"<th>" & obLanguage("Reports","kResult") & "</th>"
				Else
					strReport = strReport & "<h3 class=""body"">"
					If strActivityID = kActivityID_Manual Then
						strReport = strReport & obLanguage("Common","kJournal",strFunctionalityType)
					Else
						strReport = strReport & obLanguage("Reports","kEducationalCourse") & ": <i>" & db_2_html(objAssignmentListRs("ACTIVITYNAME")) & "</i>"
					End If
					strReport = strReport & "</h3>"
					strReport = strReport & GetTableHeader() & "<tr>"&_
						"<th>" & obLanguage("Assignment","kATAssignmentType") & "</th>" & _
						"<th>" & obLanguage("Assignment","kATAssignmentTheme") & "</th>" & _
						"<th>" & obLanguage("Assignment","kATDueDate") & "</th>" 
					If strActivityID=kActivityID_Manual Then 
						strReport = strReport &"<th>" & obLanguage("Common","kMark") & "</th>" 
					Else
						strReport = strReport &"<th>" & obLanguage("Reports","kMarkingDate") & "</th>" 
						strReport = strReport &"<th>" & obLanguage("Common","kMark") & "</th>"
					End If
				End If
				strReport = strReport & "</tr>"
			End If
			
			If bSelfPaced Then
				If Not IsNull(objAssignmentListRs("DONEDATE")) Then
					strReport = strReport & "<tr>" & _
						"<th colspan=""4"" class=""text-left"">" & db_2_html(objAssignmentListRs("PROBLEMNAME")) & "</th>"&_
						"<th>" & Date2Str(objAssignmentListRs("DONEDATE")) & "</th>" & _
						"<th>" & FormatNumber(objAssignmentListRs("SCORE"), 0 ) & "</th>"
					dblSumScoreSP = dblSumScoreSP + CDbl(objAssignmentListRs("SCORE"))
					lngNumOfTestsSP = lngNumOfTestsSP + 1
					strReport = strReport & "</tr>"
				End If
			Else
				strType = objAssignmentListRs("NAME")
				If IsNull(strType) Then 
					strType ="&nbsp; &nbsp; --"
				Else
					strType = db_2_html(strType)
				End If
				nWeight = GetSafeLng(objAssignmentListRs("WEIGHT"), 0)
				bActualMark = True
				dtDueDate = objAssignmentListRs("DUEDATE")
				strReport = strReport & "<tr>" & _
					"<td class=""cell-text"">" & strType & "</td>" & _
					"<td class=""cell-text"">" & db_2_html(objAssignmentListRs("ASSIGNMENTNAME")) & "</td>" & _
					"<td class=""cell-date"">" & Date2Str(dtDueDate) & "</td>"
				result = objAssignmentListRs("RES")
				If IsNull(result) Then
					If bWeight Then
						' Не учитываем весовые "точки", которые находятся в будущем
						If IsDull(dtDueDate) Then
							bActualMark = False
						ElseIf DateDiff( "d", dtToday, dtDueDate, 0, 0 ) >= 0 Then
							bActualMark = False
						End If
					End If
					If bActualMark Then
						If bIsNumber Then strReport = strReport & "<td>&nbsp;</td>"
						strReport = strReport & "<td>-</td>"
					End If
				Else
					If bIsNumber Then
						strReport = strReport & "<td>" & Date2Str(objAssignmentListRs("DONEDATE")) & "</td>"
						dbl = GetGrading( result )
					Else ' классный журнал
						dbl = GetGrading_Manual( result )
					End If
					strReport = strReport & "<td class=""cell-num"">" & dbl & "</td>"
					If bWeight Then
						dblTotalEarned = dblTotalEarned + (dbl - nMinMark) * nWeight
					Else
						dblTotalEarned = dblTotalEarned + dbl
					End If
					lngNumOfComplTests = lngNumOfComplTests + 1
				End If
				If bActualMark Then
					If bWeight Then nTotalWeight = nTotalWeight + nWeight
				End If

				lngNumOfTests = lngNumOfTests + 1
				strReport = strReport & "</tr>"
			End If
			objAssignmentListRs.MoveNext
		WEnd
		If bSelfPaced Then
			dblTotalSumScoreSP = dblTotalSumScoreSP + dblSumScoreSP
			lngTotalNumOfTestsSP = lngTotalNumOfTestsSP + lngNumOfTestsSP
			strReport = strReport & SummarySP( lngNumOfTestsSP, dblSumScoreSP )
		Else
			dblTotalTotalEarned = dblTotalTotalEarned + dblTotalEarned
			lngTotalNumOfTests = lngTotalNumOfTests + lngNumOfTests
			lngTotalNumOfComplTests = lngTotalNumOfComplTests + lngNumOfComplTests
			strReport = strReport & Summary( lngNumOfTests, lngNumOfComplTests, dblTotalEarned, strActivityId )
		End If 
		If lngTotalNumOfTests > lngNumOfTests Then
			strReport = strReport & END_TABLE & START_LANAME_TABLE & obLanguage("Reports","kAssignmentsTotal") & END_LANAME_TABLE & START_TABLE
			strReport = strReport & Summary( lngTotalNumOfTests,lngTotalNumOfComplTests, dblTotalTotalEarned, strActivityId )
		End If
		If lngTotalNumOfTestsSP > lngNumOfTestsSP Then
			strReport = strReport & END_TABLE & START_LANAME_TABLE & obLanguage("Reports","kTestsTotal") & END_LANAME_TABLE & START_TABLE
			strReport = strReport & SummarySP( lngTotalNumOfTestsSP, dblTotalSumScoreSP )
		End If
		strReport = strReport & END_TABLE
	GetReportTable = strReport
End Function    

Function Summary( lngNumOfTests, lngNumOfComplTests, dblTotalEarned, strActivityId )
	If Not bIsDebug Then On Error Resume Next
	Dim strCell2
	strCell2 = IIF( strActivityID = kActivityID_Manual, "", "<td>&nbsp;</td>" )
	Summary = "<tr class=""totals""><td>&nbsp;</td><td class=""text-nowrap""><i><b>&nbsp;" & obLanguage("Reports","kAssignmentsCount") & ": " & FormatNumber(lngNumOfTests,0)
	If lngNumOfTests > lngNumOfComplTests Then
		Summary = Summary & "<br />&nbsp;"& obLanguage("Reports","kAssignmentsCompleted") &": " & FormatNumber(lngNumOfComplTests,0)
	End If
	Summary = Summary & "</b></i></td>" & strCell2 & "<td class=""text-nowrap"" colspan=""2""><i><b>"& obLanguage("Common","kAverageMark") &": "
	If lngNumOfComplTests > 0 Then 
	  If bWeight Then
		If nTotalWeight = 0 Then nTotalWeight = 1
		Summary = Summary & FormatNumber( (dblTotalEarned / nTotalWeight) + nMinMark, 2 ) &"</b></i></td></tr>"
	  Else
		Summary = Summary & FormatNumber( dblTotalEarned / lngNumOfComplTests, 2 ) &"</b></i></td></tr>"
	  End If
	Else
	  Summary = Summary & " 0.00" & "</b></i></td></tr>"
	End if
End Function

Function SummarySP( lngNumOfTests, dblSumScore )
	If Not bIsDebug Then On Error Resume Next
	Dim dblScore
	If lngNumOfTests > 0 Then
		dblScore = dblSumScore/lngNumOfTests
	Else
		dblScore = 0
	End If
	
	SummarySP = "<tr class=""totals""><td class=""text-nowrap""><i>" & obLanguage("Reports","kTestsCount") & ": "&FormatNumber(lngNumOfTests,0)&"</I></td><td colspan=""3"">&nbsp;</td><td class=""text-nowrap""><i>" & obLanguage("Reports","kAverageResult") & ": "&FormatNumber(dblScore,2)&"</i></td></tr>"
End Function

Function GetTableHeader()
End Function
%>
