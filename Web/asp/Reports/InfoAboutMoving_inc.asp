<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim	dtStartDate, dtEndDate, strStartDate, strEndDate
Dim objResult
Dim strSchoolPrincipal

Function GetReportNameAndNumber()
	GetReportNameAndNumber = "<div class=""report-title-school"">"&obLanguage("ReportNames",IIf(Request("ViewType")<>"1", "kFormN2","kFormN3"))&"</div>"
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","KRNInfoAboutMoving",strFunctionalityType)
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Common","kFromDate") & strStartDate & obLanguage("Common","kToDate") & strEndDate
End Function
Function GetPageParams()
	GetPageParams = Null
End Function

Function GetReportTable()
	Dim strReport
	If (Request("ViewType")<>"1") Then
		strReport = strReport & GetReportTable1()
	Else
		strReport = strReport & GetReportTable3()
	End if
	GetReportTable = strReport
End Function

Sub specialRead()
	ReadDateRange
End Sub

Sub specialMain()
'	Dim dtMoveYearStart, dtTemp
	Dim objGrades
'	Call CalcMoveCurrYearLimits(dtMoveYearStart, dtTemp, False)
	Call InitSchoolSettings(objNSNET) ' Настройки школы - нужны во всех режимах

	If (Request("ViewType")<>"1") Then
'		If DateDiff("d", dtStartDate, dtMoveYearStart, 0, 0) > 0 Then dtStartDate = dtMoveYearStart

		Set objResult = objNSNET.GetInfoAboutMoving(strCurrYearID, dtStartDate, dtEndDate)
		If objResult.EOF Then
			strErrMsg = obLanguage("Reports","kNoClasses",strFunctionalityType)
			bOK = False
			strReport = GetReport()
			Exit Sub
		End If
		bOk = True
	Else
		Set objResult = objNSNET.GetMovingReasons(strSchoolID, dtStartDate, dtEndDate)
	End If
	strSchoolPrincipal = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00fio1")
End Sub

Function GetTableString()
End Function

Function GetBr()
End Function

Function GetReportTable_3()
	Dim rsOut, rsIn, arrSteps, i, j, i0, arrSum, arrTot, cntCells, nCntOtherState, nCntOtherCity, nCntOut, strReport1, nCntOther
	strReport = GetTableHeader3()
	GetReportTable3 = strReport

	arrSteps = Array(CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max)), CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)), CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max)), 13)
	cntCells = 22
	Redim arrSum(cntCells), arrTot(cntCells)
	cntCells = cntCells
	For i0 = 0 to cntCells
		arrSum(i0) = 0 : arrTot(i0) = 0
	Next

	i0=1 : j=0 : i = arrSteps(j)
	Do While Not objResult.EOF
		strReport = strReport & "<tr><td>" & DB2HTML(objResult("GRADE")) & "</td>"

		Set rsOut = objResult("out_formstypes").Value
		If Not rsOut.EOF Then
			arrSum(0) = arrSum(0) +  CLng(rsOut("cntMOY"))
			arrSum(1) = arrSum(1) +  CLng(rsOut("cntEvening"))
			arrSum(2) = arrSum(2) +  CLng(rsOut("cntGOY"))
			arrSum(3) = arrSum(3) +  CLng(rsOut("cntNOY"))
			nCntOther = CLng(rsOut("cntMOY")) + CLng(rsOut("cntEvening")) + CLng(rsOut("cntGOY")) + CLng(rsOut("cntNOY"))
			strReport = strReport  &"<td>"&RepValue(rsOut("cntMOY"))& "</td><td>"& RepValue(rsOut("cntEvening"))& "</td><td>"& RepValue(rsOut("cntGOY"))& "</td><td>"& RepValue(rsOut("cntNOY"))& "</td>"
'			nCntOut = CLng(rsOut("cntOut"))
		Else
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
            nCntOther = 0
		End If
		Set rsOut = objResult("out_reason").Value
		If Not rsOut.EOF Then
			arrSum(4) = arrSum(4) +  CLng(rsOut("cntNPO"))
			arrSum(5) = arrSum(5) +  CLng(rsOut("cntSPO"))
			arrSum(8) = arrSum(8) +  CLng(rsOut("cntOther")) - nCntOther
			arrSum(9) = arrSum(9) +  CLng(rsOut("cntAge18"))
			arrSum(10) = arrSum(10) +  CLng(rsOut("cntWorkCours"))
			nCntOut = CLng(rsOut("cntAll"))
			strReport = strReport  &"<td>"& RepValue(rsOut("cntNPO"))& "</td><td>"& RepValue(rsOut("cntSPO"))& "</td>"
			strReport1 = "<td>"& RepValue( CLng(rsOut("cntOther"))-nCntOther)& "</td><td>"& RepValue(rsOut("cntAge18"))& "</td><td>"& RepValue(rsOut("cntWorkCours"))& "</td>"
		Else
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td>"
			strReport1 = "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			nCntOut = 0
		End If
		Set rsOut = objResult("out_city").Value
		If Not rsOut.EOF Then
			nCntOtherState = CLng(rsOut("cntOtherState"))
			nCntOtherCity = CLng(rsOut("cntOtherCity"))
			nCntOut = nCntOut + nCntOtherCity
			nCntOtherCity = nCntOtherCity - nCntOtherState
			arrSum(6) = arrSum(6) +  nCntOtherCity
			arrSum(7) = arrSum(7) +  nCntOtherState
			strReport = strReport  &"<td>"& RepValue(nCntOtherCity)& "</td><td>"& RepValue(nCntOtherState)& "</td>"
		Else
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td>"
		End If
		arrSum(11) = arrSum(11) +  nCntOut
		strReport = strReport &strReport1 &"<th>"& RepValue(nCntOut)& "</th>"
		Set rsIn = objResult("in_formstypes").Value
		If Not rsIn.EOF Then
			arrSum(12) = arrSum(12) +  CLng(rsIn("cntMOY"))
			arrSum(13) = arrSum(13) +  CLng(rsIn("cntEvening"))
			arrSum(14) = arrSum(14) +  CLng(rsIn("cntGOY"))
			arrSum(15) = arrSum(15) +  CLng(rsIn("cntNOY"))
			strReport = strReport  &"<td>"& RepValue(rsIn("cntMOY"))& "</td><td>"& RepValue(rsIn("cntEvening"))& "</td><td>"& RepValue(rsIn("cntGOY"))& "</td><td>"& RepValue(rsIn("cntNOY"))& "</td>"
		Else
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
		End If
		Set rsIn = objResult("moved_in").Value
		If Not rsIn.EOF Then
			nCntOtherState = CLng(rsIn("cntOtherState"))
			nCntOtherCity = CLng(rsIn("cntOtherCity"))  - nCntOtherState
			arrSum(18) = arrSum(18) +  nCntOtherCity
			arrSum(19) = arrSum(19) +  nCntOtherState
			arrSum(20) = arrSum(20) +  CLng(rsIn("cntOther"))
			arrSum(21) = arrSum(21) +  CLng(rsIn("cntIn"))
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>"& RepValue(nCntOtherCity)& "</td><td>"& RepValue(nCntOtherState)& "</td><td>"& RepValue(rsIn("cntOther"))& "</td><th>"& RepValue(rsIn("cntIn"))& "</th></tr>"
		Else
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><th>&nbsp;</th></tr>"
		End If
		Do While CInt(objResult("GRADE")) >i
			i0=i+1 : j=j+1 : i = arrSteps(j)
		Loop
		If CInt(objResult("GRADE")) <=i Then
			If CInt(objResult("GRADE")) = i Then
				strReport = strReport & "<tr><th class=""xtl"">" & i0&"-"&i & "</th>"
				For i0 = 0 to cntCells
					arrTot(i0) = arrTot(i0) + arrSum(i0)
					strReport = strReport & "<th>" & arrSum(i0) & "</th>"
					arrSum(i0) = 0
				Next
				i0=i+1 : j=j+1 : i = arrSteps(j)
			End If
		End If

		objResult.MoveNext
	Loop
	strReport = strReport & "<tr><th>" & obLanguage("Reports","kTotal_2") & "</th>"
	For i0 = 0 to cntCells
		strReport = strReport & "<th>" & arrTot(i0) & "</th>"
	Next
	strReport = strReport & "</table>"

	strReport = strReport & "<br><br><div class=""normaltext"">" & obLanguage("SetupSchoolUI","kOUDirector",strFunctionalityType) & " <b>" & strSchoolPrincipal & "</b><br><br>Исполнитель (заместитель директора по УВР)<br>ФИО полностью <br>контактный телефон</div>"
	GetReportTable3 = strReport
End Function


Function GetReportTable3()
	Dim strRepTmp, nCntTmp, nGrade, bTotal
	Dim rsOut, rsIn, arrSteps, i, j, i0, arrSum, arrTot, cntCells, nCntOtherState, nCntOtherCity, nCntOut, strReport1, nCntOther
	Dim bGradeSkip
	strReport = GetTableHeader3()
	strRepTmp = GetTableHeader3_()
	GetReportTable3 = strReport

	arrSteps = Array(CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max)), CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)), CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max)), 13)
	cntCells = 37
	Redim arrSum(cntCells), arrTot(cntCells)
	cntCells = cntCells
	For i0 = 0 to cntCells
		arrSum(i0) = 0 : arrTot(i0) = 0
	Next
	i0=1 : j=0 : i = arrSteps(j)
	If Not objResult.EOF Then
	    nGrade=CInt(objResult("GRADE"))
	    If nGrade > 1 Then nGrade = 1 : bGradeSkip = True
	Else
	    nGrade = 1
	    bGradeSkip = True
	End If
	Do While Not objResult.EOF Or nGrade<=11
		If Not bGradeSkip Then
    		strReport = strReport & "<tr><td>" & DB2HTML(nGrade) & "</td>"
		    Set rsOut = objResult("out_city").Value
		    If Not rsOut.EOF Then
			    nCntOtherState = CLng(rsOut("cntOtherState"))
			    nCntOtherCity = CLng(rsOut("cntOtherCity"))
    '			nCntOut = nCntOut + nCntOtherCity
			    nCntOtherCity = nCntOtherCity - nCntOtherState
			    arrSum(3) = arrSum(3) +  nCntOtherCity
			    arrSum(2) = arrSum(2) +  nCntOtherState
			    strReport = strReport  &"<td>"& RepValue(nCntOtherState)& "</td><td>"& RepValue(nCntOtherCity)& "</td>"
		    Else
			    strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td>"
			    nCntOtherCity=0
			    nCntOtherState=0
		    End If
		    Set rsOut = objResult("out_formstypes").Value
		    If Not rsOut.EOF Then
			    nCntOther = CLng(rsOut("cntMOY")) - CLng(rsOut("cntEvening"))
			    arrSum(5) = arrSum(5) +  nCntOther
			    arrSum(6) = arrSum(6) +  CLng(rsOut("cntEvening"))
			    arrSum(7) = arrSum(7) +  CLng(rsOut("cntNOY"))
			    arrSum(8) = arrSum(8) +  CLng(rsOut("cntNPON"))
			    arrSum(9) = arrSum(9) +  CLng(rsOut("cntSPON"))
			    arrSum(10) = arrSum(10) +  CLng(rsOut("cntGOY"))
			    arrSum(11) = arrSum(11) +  CLng(rsOut("cntSK"))
			    arrSum(12) = arrSum(12) +  CLng(rsOut("cntNPO"))
			    arrSum(13) = arrSum(13) +  CLng(rsOut("cntSPO"))
			    arrSum(14) = arrSum(14) +  CLng(rsOut("cntVTK"))
			    nCntOut = CLng(rsOut("cntOut"))
			    strReport = strReport  &"<td>"& RepValue(nCntOut)& "</td><td>"&RepValue(nCntOther)& "</td><td>"& RepValue(CLng(rsOut("cntEvening")))& "</td>"
			    strReport = strReport  &"<td>"& RepValue(CLng(rsOut("cntNOY")))& "</td><td>"& RepValue(CLng(rsOut("cntNPON")))& "</td><td>"& RepValue(CLng(rsOut("cntSPON")))& "</td>"
			    strReport = strReport  &"<td>"& RepValue(CLng(rsOut("cntGOY")))& "</td><td>"&RepValue(CLng(rsOut("cntSK")))& "</td><td>"& RepValue(CLng(rsOut("cntNPO")))& "</td><td>"& RepValue(CLng(rsOut("cntSPO")))& "</td><td>"& RepValue(CLng(rsOut("cntVTK")))& "</td>"
		    Else
			    strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			    strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			    strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			    nCntOut = 0
		    End If
		    Set rsOut = objResult("out_reason").Value
		    If Not rsOut.EOF Then
			    arrSum(15) = arrSum(15) +  CLng(rsOut("cntWorkCours"))
			    arrSum(16) = arrSum(16) +  CLng(rsOut("cntBadMark"))
			    arrSum(17) = arrSum(17) +  CLng(rsOut("cntNoWork"))
			    arrSum(18) = arrSum(18) +  CLng(rsOut("cntAge18"))
			    arrSum(19) = arrSum(19) +  CLng(rsOut("cntDeath"))
			    arrSum(21) = arrSum(21) +  CLng(rsOut("cntAll"))
			    nCntOther = CLng(rsOut("cntWorkCours")) + CLng(rsOut("cntBadMark"))+  CLng(rsOut("cntNoWork"))+  CLng(rsOut("cntAge18")) + CLng(rsOut("cntDeath"))
			    strReport = strReport  &"<td>"& RepValue(CLng(rsOut("cntWorkCours")))& "</td><td>"& RepValue(CLng(rsOut("cntBadMark")))& "</td>"
			    strReport = strReport  &"<td>"& RepValue(CLng(rsOut("cntNoWork")))& "</td><td>"& RepValue(CLng(rsOut("cntAge18")))& "</td><td>"& RepValue(CLng(rsOut("cntDeath")))& "</td>"
			    strReport = strReport  &"<td>"& RepValue(CLng(rsOut("cntAll"))-(nCntOut+nCntOther+nCntOtherCity + nCntOtherState))& "</td><td>"& RepValue(CLng(rsOut("cntAll")))&"</td>"
		    Else
			    strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
		    End If
		    arrSum(4) = arrSum(5) +  arrSum(6) +arrSum(7) + arrSum(10)
		    arrSum(20) = arrSum(21) - (arrSum(2) + arrSum(3) + arrSum(4) + arrSum(17) + arrSum(18) + arrSum(19) + arrSum(15) + arrSum(16) )
    '		strReport = strReport &strReport1 &"<th>"& RepValue(nCntOut)& "</th>"
    '	Loop
    strReport = strReport&"</tr>"
    strRepTmp = strRepTmp & "<tr><td>" & DB2HTML(nGrade) & "</td>"
    '	Do While Not objResult.EOF
		    Set rsIn = objResult("moved_in").Value
		    If Not rsIn.EOF Then
			    nCntOtherState = CLng(rsIn("cntOtherState"))
			    nCntOtherCity = CLng(rsIn("cntOtherCity"))  - nCntOtherState
			    arrSum(24) = arrSum(24) +  nCntOtherCity
			    arrSum(23) = arrSum(23) +  nCntOtherState
			    strRepTmp = strRepTmp  &"<td>"& RepValue(nCntOtherState)& "</td><td>"& RepValue(nCntOtherCity)& "</td>"
			    nCntOut = CLng(rsIn("cntIn"))
			    nCntTmp = CLng(rsIn("cntOther"))
			    arrSum(37) = arrSum(37) +  nCntOut
			    Set rsIn = objResult("in_formstypes").Value
			    If Not rsIn.EOF Then
			        nCntOther = CLng(rsIn("cntMOY")) - CLng(rsIn("cntEvening"))
			        arrSum(25) = arrSum(25) +  CLng(rsIn("cntMOY"))+CLng(rsIn("cntNOY"))+CLng(rsIn("cntGOY"))
			        arrSum(26) = arrSum(26) +  nCntOther
				    arrSum(27) = arrSum(27) +  CLng(rsIn("cntEvening"))
				    arrSum(28) = arrSum(28) +  CLng(rsIn("cntNOY"))
				    arrSum(29) = arrSum(29) +  CLng(rsIn("cntNPON"))
				    arrSum(30) = arrSum(30) +  CLng(rsIn("cntSPON"))
				    arrSum(31) = arrSum(31) +  CLng(rsIn("cntGOY"))
				    arrSum(32) = arrSum(32) +  CLng(rsIn("cntSK"))
				    arrSum(33) = arrSum(33) +  CLng(rsIn("cntNPO"))
				    arrSum(34) = arrSum(34) +  CLng(rsIn("cntSPO"))
				    arrSum(35) = arrSum(35) +  CLng(rsIn("cntVTK"))
				    strRepTmp = strRepTmp  &"<td>"& RepValue(CLng(rsIn("cntMOY"))+CLng(rsIn("cntNOY"))+CLng(rsIn("cntGOY")))& "</td>"
				    strRepTmp = strRepTmp  &"<td>"& RepValue(nCntOther)& "</td><td>"& RepValue(CLng(rsIn("cntEvening")))& "</td><td>"& RepValue(CLng(rsIn("cntNOY")))& "</td>"
				    strRepTmp = strRepTmp  &"<td>"& RepValue(CLng(rsIn("cntNPON")))& "</td><td>"& RepValue(CLng(rsIn("cntSPON")))& "</td><td>"& RepValue(CLng(rsIn("cntGOY")))& "</td>"
				    strRepTmp = strRepTmp  &"<td>"&RepValue(CLng(rsIn("cntSK")))& "</td><td>"& RepValue(CLng(rsIn("cntNPO")))& "</td><td>"& RepValue(CLng(rsIn("cntSPO")))& "</td><td>"& RepValue(CLng(rsIn("cntVTK")))& "</td>"
			    Else
				    strRepTmp = strRepTmp  &"<td>&nbsp;</td>"
				    strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
				    strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			    End If
			    strRepTmp = strRepTmp  &"<td>"&RepValue(nCntTmp)& "</td><td>"& RepValue(nCntOut)& "</td>"
			    arrSum(36) = arrSum(36) + nCntTmp
		    Else
			    strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td>"
			    strRepTmp = strRepTmp  &"<td>&nbsp;</td>"
			    strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			    strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			    strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td>"
		    End If
		Else
			strReport = strReport & "<tr><td>" & DB2HTML(nGrade) & "</td>"
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td>"
			strReport = strReport  &"<td>&nbsp;</td>"
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			strReport = strReport  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			strReport = strReport&"</tr>"
			strRepTmp = strRepTmp & "<tr><td>" & DB2HTML(nGrade) & "</td>"
			strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td>"
			strRepTmp = strRepTmp  &"<td>&nbsp;</td>"
			strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td>"
		End IF
		Do While nGrade>i
			i0=i+1 : j=j+1 : i = arrSteps(j)
		Loop

		If Not bGradeSkip Then objResult.MoveNext
		If nGrade<=i Then
			bTotal=True
			If Not objResult.EOF Then
			    bGradeSkip = (CInt(objResult("GRADE")) <> nGrade+1)
			    If bGradeSkip Then
		            nGrade = nGrade + 1
		        Else
		            nGrade = CInt(objResult("GRADE"))
		        End If
			Else
			    If nGrade < 11 Then bGradeSkip = True
			    nGrade = nGrade + 1
			End If
			If nGrade <=i Then bTotal=False
			If bTotal Then
				strReport = strReport & "<tr class=""subtotals""><td>'" & i0&"-"&i & "</td>"
				strRepTmp = strRepTmp & "<tr class=""subtotals""><td>'" & i0&"-"&i & "</td>"
				For i0 = 2 to 21
					arrTot(i0) = arrTot(i0) + arrSum(i0)
					strReport = strReport & "<td>" & arrSum(i0) & "</td>"
					arrSum(i0) = 0
				Next
				For i0 = 23 to cntCells
					arrTot(i0) = arrTot(i0) + arrSum(i0)
					strRepTmp = strRepTmp & "<td>" & arrSum(i0) & "</td>"
					arrSum(i0) = 0
				Next
				i0=i+1 : j=j+1 : i = arrSteps(j)
			End If
		End If
	Loop
	strReport = strReport & "<tr class=""totals""><td>" & obLanguage("Reports","kTotal_2") & "</td>"
	For i0 = 2 to 21
		strReport = strReport & "<td>" & arrTot(i0) & "</td>"
	Next
	strRepTmp = strRepTmp & "<tr class=""totals""><td>" & obLanguage("Reports","kTotal_2") & "</td>"
	For i0 = 23 to cntCells
		strRepTmp = strRepTmp & "<td>" & arrTot(i0) & "</td>"
	Next
	strReport = strReport & "</table>"
	strReport = strReport & strRepTmp & "</table>"

	strReport = strReport & "<br><br><div class=""normaltext"">" & obLanguage("SetupSchoolUI","kOUDirector",strFunctionalityType) & " <b>" & strSchoolPrincipal & "</b><br><br>Исполнитель (заместитель директора по УВР)<br>ФИО полностью <br>контактный телефон</div>"
	GetReportTable3 = strReport

End Function

Function GetReportTable1()
	Dim bDateIn
	Dim strReport, i, j

	Dim objMovedInOutRs, objStudentClassesOnStartDate, objStudentClassesOnEndDate, objAttendanceRs, objMovedOutStudentsCnt
	Dim arrSummary
	Dim nClassCnt, nStudCntOnStart, nMovedInCnt, nMovedOutCnt, nStudCntOnEnd, nMovedOutForFailureCnt, nMovedOutOtherReasonCnt, nMissStudentCnt, nMissForGoodReasonCnt

	Dim bShowStep_1, bShowStep_2, bShowStep_3
	Dim strRep_CurrGrade, strRep_CurrStep
	Dim strRep_PrevStep_1, strRep_PrevStep_2

	ReDim arrSummary(3,10)

	For i = 0 to 3
		For j = 0 to 10
			arrSummary(i,j) = 0
		Next
	Next

	If Not bOk Then
		strReport = strReport & GetwarningPrint(strErrMsg)
	Else
		bShowStep_1 = False
		bShowStep_2 = False
		bShowStep_3 = False

		strReport = GetTableHeader()
		While not objResult.EOF
			Set objMovedInOutRs = objResult("MOVED_IN_OUT").Value
			Set objStudentClassesOnStartDate = objResult("STUDS_COUNT_ON_START").Value
			Set objStudentClassesOnEndDate = objResult("STUDS_COUNT_ON_END").Value
			Set objMovedOutStudentsCnt = objResult("MOVED_OUT_BY_REASON").Value
			Set objAttendanceRs = objResult("ATTENDANCE").Value
			If Not objMovedInOutRs.EOF Then
				nClassCnt = CLng(objMovedInOutRs("CLASSCOUNT"))
				nMovedInCnt = CLng(objMovedInOutRs("MOVED_IN"))
				nMovedOutCnt = CLng(objMovedInOutRs("MOVED_OUT"))
			Else
				nClassCnt = 0
				nMovedInCnt = 0
				nMovedOutCnt = 0
			End If
			If Not objStudentClassesOnStartDate.EOF Then
				nStudCntOnStart = CLng(objStudentClassesOnStartDate("COUNT"))
			Else
				nStudCntOnStart = 0
			End If
			If Not objStudentClassesOnEndDate.EOF Then
				nStudCntOnEnd = CLng(objStudentClassesOnEndDate("COUNT"))
			Else
				nStudCntOnEnd = 0
			End If
			If Not objMovedOutStudentsCnt.EOF Then
				nMovedOutForFailureCnt = CLng(objMovedOutStudentsCnt("OUT_FOR_FAILURE"))
				nMovedOutOtherReasonCnt = CLng(objMovedOutStudentsCnt("OTHER_OUT"))
			Else
				nMovedOutForFailureCnt = 0
				nMovedOutOtherReasonCnt = 0
			End If
			If Not objAttendanceRs.EOF Then
				nMissStudentCnt = CLng(objAttendanceRs("ALL_COUNT"))
				nMissForGoodReasonCnt = CLng(objAttendanceRs("GOOD_REASON"))
			Else
				nMissStudentCnt = 0
				nMissForGoodReasonCnt = 0
			End If
			arrSummary(3,0) = arrSummary(3,0) + nClassCnt
			arrSummary(3,1) = arrSummary(3,1) + nStudCntOnStart
			arrSummary(3,2) = arrSummary(3,2) + nMovedInCnt
			arrSummary(3,3) = arrSummary(3,3) + nMovedOutCnt
			arrSummary(3,4) = arrSummary(3,4) + nClassCnt
			arrSummary(3,5) = arrSummary(3,5) + nStudCntOnEnd
			arrSummary(3,6) = arrSummary(3,6) + nMovedOutOtherReasonCnt
			arrSummary(3,7) = arrSummary(3,7) + nMovedOutForFailureCnt
			arrSummary(3,8) = arrSummary(3,8) + nMissStudentCnt
			arrSummary(3,9) = arrSummary(3,9) + nMissForGoodReasonCnt

			strRep_CurrGrade = "<tr><td>" & DB2HTML(objResult("GRADE")) & "</td><td>" & RepValue(nClassCnt) & "</td><td>" & RepValue(nStudCntOnStart) & "</td><td>" & RepValue(nMovedInCnt) & "</td><td>" & RepValue(nMovedOutCnt) & "</td><td>" & RepValue(nClassCnt) & "</td><td>" & RepValue(nStudCntOnEnd) & "</td><td>" & RepValue(nMovedOutOtherReasonCnt) & "</td><td>" & RepValue(nMovedOutForFailureCnt) & "</td><td>" & RepValue(nMissStudentCnt) & "</td><td>" & RepValue(nMissForGoodReasonCnt) & "</td><td>&nbsp;</td></tr>"
			strRep_PrevStep_1 = ""
			strRep_PrevStep_2 = ""
			strRep_CurrStep = ""

			If CInt(objResult("GRADE")) <= CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max)) Then
				arrSummary(0,0) = arrSummary(0,0) + nClassCnt
				arrSummary(0,1) = arrSummary(0,1) + nStudCntOnStart
				arrSummary(0,2) = arrSummary(0,2) + nMovedInCnt
				arrSummary(0,3) = arrSummary(0,3) + nMovedOutCnt
				arrSummary(0,4) = arrSummary(0,4) + nClassCnt
				arrSummary(0,5) = arrSummary(0,5) + nStudCntOnEnd
				arrSummary(0,6) = arrSummary(0,6) + nMovedOutOtherReasonCnt
				arrSummary(0,7) = arrSummary(0,7) + nMovedOutForFailureCnt
				arrSummary(0,8) = arrSummary(0,8) + nMissStudentCnt
				arrSummary(0,9) = arrSummary(0,9) + nMissForGoodReasonCnt
				If CInt(objResult("GRADE")) = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max)) Then
					strRep_CurrStep = GetStepTotal(" 1-4", arrSummary, 0)
					bShowStep_1 = True
				End IF
			ElseIf CInt(objResult("GRADE")) <= CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)) Then

				If Not bShowStep_1 Then
					strRep_PrevStep_1 = GetStepTotal(" 1-4", arrSummary, 0)
					bShowStep_1 = True
				End If

				arrSummary(1,0) = arrSummary(1,0) + nClassCnt
				arrSummary(1,1) = arrSummary(1,1) + nStudCntOnStart
				arrSummary(1,2) = arrSummary(1,2) + nMovedInCnt
				arrSummary(1,3) = arrSummary(1,3) + nMovedOutCnt
				arrSummary(1,4) = arrSummary(1,4) + nClassCnt
				arrSummary(1,5) = arrSummary(1,5) + nStudCntOnEnd
				arrSummary(1,6) = arrSummary(1,6) + nMovedOutOtherReasonCnt
				arrSummary(1,7) = arrSummary(1,7) + nMovedOutForFailureCnt
				arrSummary(1,8) = arrSummary(1,8) + nMissStudentCnt
				arrSummary(1,9) = arrSummary(1,9) + nMissForGoodReasonCnt
				If CInt(objResult("GRADE")) = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)) Then
					strRep_CurrStep = GetStepTotal(" 5-9", arrSummary, 1)
					bShowStep_2 = True
				End If
			ElseIf CInt(objResult("GRADE")) <= CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max)) Then

				If Not bShowStep_1 Then
					strRep_PrevStep_1 = GetStepTotal(" 1-4", arrSummary, 0)
					bShowStep_1 = True
				End If

				If Not bShowStep_2 Then
					strRep_PrevStep_2 = GetStepTotal(" 5-9", arrSummary, 1)
					bShowStep_2 = True
				End If

				arrSummary(2,0) = arrSummary(2,0) + nClassCnt
				arrSummary(2,1) = arrSummary(2,1) + nStudCntOnStart
				arrSummary(2,2) = arrSummary(2,2) + nMovedInCnt
				arrSummary(2,3) = arrSummary(2,3) + nMovedOutCnt
				arrSummary(2,4) = arrSummary(2,4) + nClassCnt
				arrSummary(2,5) = arrSummary(2,5) + nStudCntOnEnd
				arrSummary(2,6) = arrSummary(2,6) + nMovedOutOtherReasonCnt
				arrSummary(2,7) = arrSummary(2,7) + nMovedOutForFailureCnt
				arrSummary(2,8) = arrSummary(2,8) + nMissStudentCnt
				arrSummary(2,9) = arrSummary(2,9) + nMissForGoodReasonCnt
				If CInt(objResult("GRADE")) = CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max)) Then
					strRep_CurrStep = GetStepTotal(" 10-11", arrSummary, 2)
					bShowStep_3 = True
				End IF
			End If

			strReport = strReport & strRep_PrevStep_1 & strRep_PrevStep_2 & strRep_CurrGrade & strRep_CurrStep

			objResult.MoveNext
		Wend

		If Not bShowStep_1 Then
			strReport = strReport & GetStepTotal(" 1-4", arrSummary, 0)
		End If

		If Not bShowStep_2 Then
			strReport = strReport & GetStepTotal(" 5-9", arrSummary, 1)
		End If

		If Not bShowStep_3 Then
			strReport = strReport & GetStepTotal(" 10-11", arrSummary, 2)
		End If


		strReport = strReport & "<tr class=""totals""><td>" & obLanguage("Reports","kTotal_2") & "</td>"
		For i = 0 to 10
			strReport = strReport & "<td>" & arrSummary(3,i) & "</td>"
		Next
		strReport = strReport & "</tr>"

		strReport = strReport & "</table>"

		strReport = strReport & "<br><br><div class=""normaltext"">" & obLanguage("SetupSchoolUI","kOUDirector",strFunctionalityType) & " <b>" & strSchoolPrincipal & "</b><br><br>Исполнитель (заместитель директора по УВР)<br>ФИО полностью<br>контактный телефон</div>"
	End IF

	GetReportTable1 = strReport
End Function


Function GetStepTotal(strStepName, arrSumm, nInd)
	Dim strRep, i

	strRep = "<tr class=""subtotals""><td>" & obLanguage("Reports","kTotal_2") & strStepName & "</td>"
	For i = 0 to 10
		strRep = strRep & "<td>" & arrSumm(nInd,i) & "</td>"
	Next
	strRep = strRep & "</tr>"
	GetStepTotal = strRep
End Function


Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num"">" & _
			"<tr><th rowspan=""2"">" & obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType) & "</th><th rowspan=""2"">" & obLanguage("Common","kClasses_b",strFunctionalityType) & obLanguage("Reports","kOnStartDate") & "</th><th rowspan=""2"">" & obLanguage("Common","kStudents_r_b",strFunctionalityType) & obLanguage("Reports","kOnStartDate") & "</th><th rowspan=""2"">" & obLanguage("Reports","kInto") & "</th><th rowspan=""2"">" & obLanguage("Reports","kOut") & "</th><th rowspan=""2"">" & obLanguage("Common","kClasses_b",strFunctionalityType) & obLanguage("Reports","kOnEndDate") & "</th><th rowspan=""2"">" & obLanguage("Common","kStudents_r_b",strFunctionalityType) & obLanguage("Reports","kOnEndDate")  & "</th><th rowspan=""2"">" & obLanguage("Reports","kMovedOutForOtherReason",strFunctionalityType) & "</th><th rowspan=""2"">" & obLanguage("Reports","kMovedOutForFailure",strFunctionalityType) & "</th><th colspan=""2"">" & obLanguage("Reports","kSkippedLessons",strFunctionalityType) & "</th><th rowspan=""2"">" & obLanguage("Reports","kNoVisitedMore50") & "</th></tr><tr><th>" & obLanguage("Reports","kTotalNumber") & "</th><th>" & obLanguage("Reports","kOfThemExcused") & "</th></tr>"
End Function

Function GetTableHeader3()
dim i, strH
strH = "<table class=""table-print-num""><tr><th rowspan=""5"">" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th colspan=""20"">" & obLanguage("Reports","kOut") & "</th></tr>"
strH=strH & "<tr><th colspan=""13"">Место</th><th colspan=""6"">Причина</th><th rowspan=""4"">" &obLanguage("Reports","kTotalNumber")  & "</th></tr>"
strH=strH & "<tr class=""text-nowrap""><th rowspan=""3"">" & obLanguage("Reports","kIn_") &obLanguage("Reports","kNonRegionEO")  & "</th><th rowspan=""3"">" & obLanguage("Reports","kIn_") &obLanguage("Reports","kRegionEO")  & "</th><th colspan=""11"">" &obLanguage("Reports","kIn_") & obLanguage("Reports","kEOCity")  & "</th>"
strH=strH & "<th rowspan=""3"">" & obLanguage("Reports","kWorkCours") & "</th><th rowspan=""3"">" & obLanguage("Reports","kBadMark") & "</th><th rowspan=""3"">" & obLanguage("Reports","cntNoWork") & "</th><th rowspan=""3"">" & obLanguage("Reports","kAge18") & "</th><th rowspan=""3"">" & obLanguage("Common","kDeath") & "</th><th rowspan=""3"">" & obLanguage("Reports","kOtherReason") & "</th></tr>"
strH=strH & "<tr class=""text-nowrap""><th rowspan=""2"">" & obLanguage("Reports","kTotalNumber")  & "</th><th colspan=""2"">" & obLanguage("Reports","kIn_") &"МОО"  & "</th><th colspan=""3"">" &obLanguage("Reports","kIn_") & obLanguage("Reports","kNonGosEO")  & "</th><th colspan=""5"">" &obLanguage("Reports","kIn_") & obLanguage("Reports","kGosEO")  & "</th></tr>"
strH=strH & "<tr class=""text-nowrap""><th>" & obLanguage("Reports","kIn_") & "дневн."  & "</th><th>" & obLanguage("Reports","kIn_") &obLanguage("Reports","kEveningEO") & "</th><th>" &obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kIn_") & "НПО"  & "</th><th>" &obLanguage("Reports","kIn_") & "СПО"  & "</th><th>"
strH=strH &obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kSKO")  & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kNPO")  & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kSPO") & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kVTK")  & "</th></tr>"
For i = 1 to 21
	strH=strH & "<th>"&i&"</th>"
Next
	GetTableHeader3=strH & "</tr>"
End Function
Function GetTableHeader3_()
'	GetTableHeader3_ = "<br><p><br><table class=""ThinTable""  border=""1"" cellspacing=""0"">" & _
'			"<tr><th rowspan=""3"">" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th colspan=""10"">" & obLanguage("Reports","kInto")& "</th></tr><td colspan=""2"">" & obLanguage("Reports","kOut_") & obLanguage("Reports","kEOCity") & "</td><td rowspan=""2"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kGosEO")& "</td><td rowspan=""2"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kNonGosEO")  & "</td><td rowspan=""2"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kPTUEO") & "</td><td rowspan=""2"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kCollegeEO") & "</td><td rowspan=""2"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kRegionEO") & "</td><td rowspan=""2"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kNonRegionEO")  & "</td><td rowspan=""2"">" & obLanguage("Reports","kOtherReason") & "</td><th rowspan=""2"">" & obLanguage("Reports","kTotalNumber")&"</th></tr><tr><td>" & obLanguage("Reports","kTotalNumber") & "</td><td>" & obLanguage("Reports","kFromThem")& obLanguage("Reports","kOut_") &obLanguage("Reports","kEveningEO")& "</td></tr>"
dim i, strH
strH = "<br><br><table class=""table-print-num""><tr><th rowspan=""5"">" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th colspan=""15"">" & obLanguage("Reports","kInto") & "</th></tr>"
strH=strH & "<tr><th colspan=""13"">Место</th><th>&nbsp;</th><th rowspan=""4"">" &obLanguage("Reports","kTotalNumber")  & "</th></tr>"
strH=strH & "<tr><th rowspan=""3"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kNonRegionEO")  & "</th><th rowspan=""3"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kRegionEO")  & "</th><th colspan=""11"">" &obLanguage("Reports","kOut_") & obLanguage("Reports","kEOCity")  & "</th>"
strH=strH & "<th rowspan=""3"">" & obLanguage("Reports","kOtherReason") & "</th></tr>"
strH=strH & "<tr><th rowspan=""2"">" & obLanguage("Reports","kTotalNumber")  & "</th><th colspan=""2"">" & obLanguage("Reports","kOut_") &"МОУ"  & "</th><th colspan=""3"">" &obLanguage("Reports","kOut_") & obLanguage("Reports","kNonGosEO")  & "</th><th colspan=""5"">" &obLanguage("Reports","kOut_") & obLanguage("Reports","kGosEO")  & "</th></tr>"
strH=strH & "<tr><th>" & obLanguage("Reports","kOut_") & "дневн."  & "</th><th>" & obLanguage("Reports","kOut_") &obLanguage("Reports","kEveningEO") & "</th><th>" &obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kOut_") & "НПО"  & "</th><th>" &obLanguage("Reports","kOut_") & "СПО"  & "</th><th>"
strH=strH & obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kSKO")  & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kNPO")  & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kSPO") & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kVTK")  & "</th></tr>"
For i = 1 to 16
	strH=strH & "<th>"&i&"</th>"
Next
	GetTableHeader3_=strH & "</tr>"
End Function

Function RepValue(value)
	If CLng(value) = 0 Then RepValue = "&nbsp;" Else RepValue = value
End Function
%>
