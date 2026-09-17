<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim arrReport
Dim strClassID, strStudentID
Dim strSIDArray
Dim bNoSeparate

Dim rsStudents, rsParentPay
Dim strReportSchoolYearName
Dim strCurrStudentID
Dim fCurrDebt_Init

Sub specialRead()
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	strStudentID = GetSafeID(Request("SID"), "0")

	bNoSeparate = (strStudentID = "0")
	If Not bNoSeparate Then
		strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	End If

	obTokenMgr.SetData strToken, stSeparate, IIf( bNoSeparate,"1", "0")
	strReportSchoolYearName = obTokenMgr.GetData(strToken, "CurrYearName")
End Sub

Sub specialMain()
	Dim i
	Dim dtYearStart_1, dtYearEnd_1, dtYearEnd_30
	Dim nCnt

	If bNoSeparate Then
		Call CalcCurrYearLimits( dtYearStart, dtYearEnd )

		dtYearStart_1 = DateSerial(Year(dtYearStart), Month(dtYearStart), 1)
		dtYearEnd_1 = DateSerial(Year(dtYearEnd), Month(dtYearEnd), 1)

		dtYearEnd_30 = DateAdd("m", 1, dtYearEnd_1)
		dtYearEnd_30 = DateAdd("d", -1, dtYearEnd_30)

		Set rsStudents = objNSNET.GetParentPayForDates(strSchoolID, strCurrYearID, strClassID, dtYearStart_1, dtYearEnd_30)
		If rsStudents.EOF Then
			GenerateError obLanguage("Filter","kNoStudents",strFunctionalityType)
		End If

		nCnt = rsStudents.RecordCount
		ReDim arrReport(nCnt - 1)

		i = 0
		Set rsParentPay = rsStudents("rsParentPay").Value
		While Not rsStudents.EOF
			strCurrStudentID = GetSafeID(rsStudents("STUDENTID"), Null)
			Call GetReport(i)

			i = i + 1
			rsStudents.MoveNext
		WEnd

	Else
		If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then
			GenerateError obLanguage("Common","kNoAccess")
		End If
		Set rsParentPay = objNSNET.GetParentPayForStudent(strCurrYearID, strStudentID)
		ReDim arrReport(0)

		strCurrStudentID = strStudentID
		Call GetReport(0)

	End If

End Sub
	
Function GetTableHeaderString()
End Function

Function GetReportTable()
	Dim strReport, strReportHeader
	Dim strAddress, strDopEducDirections
	Dim strStudentID
	Dim dtPayMonth
	Dim strParent
	Dim nAttCount, nNoAttCount
	Dim fToPay, fPayVal, fContent, fCompens
	Dim strNorm, strNormAbbrev, strNormVal, strAverVal

	strReportHeader = GetTableHeader() & _
		"<tr><th>" & obLanguage("Common","kYear") & "</th>" & _
		"<th>" & obLanguage("Common","kMonth") & "</th>" & _
		"<th>" & obLanguage("Reports","kYesAttendance") & "</th>" & _
		"<th>" & obLanguage("Reports","kNoAttendance") & "</th>" & _
		"<th>" & obLanguage("Reports","kAttendanceNorm") & "</th>" & _
		"<th>" & obLanguage("Reports","kToPay_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kPayValS_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kForContentS_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kToCompensS_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kOverpayDebt_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kCorrection_2") & "</th>" & _
		"<th>" & obLanguage("Reports","kLegalAgent_2") & "</th></tr>"
	strReport = strReportHeader
	
	strReport = strReport & _
		"<td colspan=""9"" class=""cell-text""><b>&nbsp; " & obLanguage("Common","kBalanceAtStart") & " " & _
		strReportSchoolYearName & " " & obLanguage("Common","OfSchoolYear") & ":</b></td>" & _
		"<td class=""cell-num"">" & DB2HTML(fCurrDebt_Init) & "</td>" & _
		"<td>&nbsp;</td><td>&nbsp;</td></tr>"

	nAttCount = 0
	nNoAttCount = 0
	fToPay = 0
	fPayVal = 0
	fContent = 0
	fCompens = 0

	While Not rsParentPay.EOF
		dtPayMonth = rsParentPay("STARTMONTH")
		If IsDull(rsParentPay("PARENTID")) Then
			strParent = ""
		Else
			strParent = GetSafeStr(rsParentPay("LASTNAME"), -1, "") & " " & GetSafeStr(rsParentPay("FIRSTNAME"), -1, "") & " " & GetSafeStr(rsParentPay("MIDDLENAME"), -1, "")
		End If
		
		strNorm = ""
		strNormAbbrev = GetSafeStr(rsParentPay("ABBREV"), -1, "")
		If strNormAbbrev <> "" Then
			strNormVal = rsParentPay("NORMVAL")
			strAverVal = rsParentPay("AVERVAL")
			strNorm = strNormAbbrev & " (" & DB2HTML(strNormVal) & "/" & DB2HTML(strAverVal) & ")"
		End If

		strReport = strReport & _
			"<tr><td class=""cell-num"">" & Year(dtPayMonth) & "</td>" & _
			"<td class=""cell-text"">" & obLanguage.GetMonthName(Month(dtPayMonth), False) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(rsParentPay("YESATTENDCOUNT")) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(rsParentPay("NOATTENDCOUNT")) & "</td>" & _
			"<td class=""cell-text"">" & strNorm & "</td>" & _
			"<td class=""cell-num-1"">" & DB2HTML(rsParentPay("TOPAY")) & "</td>" & _
			"<td class=""cell-num-2"">" & DB2HTML(rsParentPay("PAYVAL")) & "</td>" & _
			"<td class=""cell-num-2"">" & DB2HTML(rsParentPay("CONTENT")) & "</td>" & _
			"<td class=""cell-num-2"">" & DB2HTML(RoundNullableDouble(rsParentPay("COMPENS"), 2)) & "</td>" & _
			"<td class=""cell-num-2"">" & DB2HTML(rsParentPay("DEBT")) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(rsParentPay("CORRECTION")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(strParent) & "</td></tr>"

		If Not IsDull(rsParentPay("YESATTENDCOUNT")) Then
			nAttCount = nAttCount + CLng(rsParentPay("YESATTENDCOUNT"))
		End If
		If Not IsDull(rsParentPay("NOATTENDCOUNT")) Then
			nNoAttCount = nNoAttCount + CLng(rsParentPay("NOATTENDCOUNT"))
		End If
		fToPay = fToPay + CDbl(rsParentPay("TOPAY"))
		fPayVal = fPayVal + CDbl(rsParentPay("PAYVAL"))
		fContent = fContent + Round(CDbl(rsParentPay("CONTENT")), 2)
		fCompens = fCompens + CDbl(rsParentPay("COMPENS"))

		rsParentPay.MoveNext
	WEnd

	strReport = strReport & _
		"<tr class=""totals"">" & "<td>" & obLanguage("Reports","kTotal_2") & "</td>" & _
		"<td>&nbsp;</td>" & _
		"<td>" & nAttCount & "</td>" & _
		"<td>" & nNoAttCount & "</td>" & _
		"<td>&nbsp;</td>" & _
		"<td>" & fToPay & "</td>" & _
		"<td>" & fPayVal & "</td>" & _
		"<td>" & fContent & "</td>" & _
		"<td>" & fCompens & "</td>" & _
		"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"
	strReport = strReport & "</table>"

	GetReportTable = strReport
End Function

Function GetTitleArray()
	Dim arrTitle
	Dim objPPStudentInfo
	Dim strClass_DepartDate, strClass_DepartDate_Val

	Set objPPStudentInfo = objNSNET.GetStudentInfoForParentPay(strCurrYearID, strSchoolID, strCurrStudentID)
	If objPPStudentInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	fCurrDebt_Init = 0
	If Not IsDull(objPPStudentInfo("DEBT")) Then
		fCurrDebt_Init = CDbl(objPPStudentInfo("DEBT"))
	End If

	strClass_DepartDate_Val = ""
	If Not IsDull(objPPStudentInfo("CLASSNAME")) Then
		strClass_DepartDate = obLanguage("Common","kClass",strFunctionalityType)
		strClass_DepartDate_Val = objPPStudentInfo("CLASSNAME")
	Else
		strClass_DepartDate = obLanguage("Reports","kDepartDate_2")
		If Not IsDull(objPPStudentInfo("DOCDATE_OUT")) Then
			strClass_DepartDate_Val = Date2Str(objPPStudentInfo("DOCDATE_OUT"))
		End If
	End If

	arrTitle = Array(obLanguage("Common","kSchoolYear"), strReportSchoolYearName, obLanguage("Common","kLastName"), objPPStudentInfo("LASTNAME"), _
		obLanguage("Common","kFirstName"), objPPStudentInfo("FIRSTNAME"), obLanguage("Common","kMiddleName"), objPPStudentInfo("MIDDLENAME"), _
		obLanguage("Common","kBDate"), Date2Str(objPPStudentInfo("BIRTHDATE")), _
		obLanguage("Reports","kEnrollDate_2"), Date2Str(objPPStudentInfo("DOCDATE_IN")), _
		strClass_DepartDate, strClass_DepartDate_Val, _
		obLanguage("Reports","kParentPayVal"), objPPStudentInfo("LAST_NORMVAL"), _
		obLanguage("Reports","kParentAverVal"), objPPStudentInfo("LAST_AVERVAL"), _
		obLanguage("Reports","kRuleResolution_2"), objPPStudentInfo("LAST_PAYNORMTITLE"))
	GetTitleArray = arrTitle
End Function
%>
