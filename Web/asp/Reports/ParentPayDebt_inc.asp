<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim lngCurrMonth, lngCurrYear, rsStudents

Dim nNumMonth, bEmpty

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNParentPayDebt")
End Function
Function GetPageParams()
	Dim filters
	filters = Array(_
		Empty , "", _
		obLanguage("Reports","kMDOU2"), strSchoolName, _
		obLanguage("Common","kYear"),lngCurrYear, _
		obLanguage("Common","kMonth"),obLanguage.GetMonthName(lngCurrMonth) _
		)
	If strFunctionalityType = kFuncType_EM Then
		filters(0) = obLanguage("Common","kEMName")
		filters(1) = objNSNET.GetEducManagementName(filterEMID)
	End If
	GetPageParams = filters
End Function

Sub specialRead()
	Dim dtYearStart_1
	Dim dtCurrMonth

	lngCurrMonth = Request("Month")
	lngCurrYear = Request("Year")

	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)

	dtYearStart_1 = DateSerial(Year(dtYearStart), Month(dtYearStart), 1)
	dtCurrMonth = DateSerial(lngCurrYear, lngCurrMonth, 1)
	nNumMonth = DateDiff("m", dtYearStart_1, dtCurrMonth) + 1
End Sub

Sub specialMain()
	Set rsStudents = objNSNET.GetParentPayDebtForMonthNum(strCurrYearID, strSchoolID, nNumMonth)
	bEmpty = rsStudents.EOF
End Sub

Function GetReportTable( )
	GetReportTable = GetParentPayInfoTable()
End Function

Function GetParentPayInfoTable( )
	Dim strReport
	Dim nNum
	Dim strClass_DepartDate_Val
	Dim strStudentID, strAddress

	strReport = "<table class=""table-print-text"">"
	strReport = strReport & "<tr><th>" & obLanguage("Reports","kOrderNumberS") & "</th><th>" & obLanguage("Common","kClass",strFunctionalityType) & "/<br>" & obLanguage("Reports","kDepartDate_2") & "</th><th>"& obLanguage("Reports","kChild_FI") & "</th><th>" & obLanguage("Reports","kDebt") & "</th><th>" & obLanguage("Reports","kLegalAgent_FIO") & "</th><th>" & obLanguage("Common","kHomeAddress") & "</th><th>" & obLanguage("Reports","kPhone_2") & "</th></tr>"

	nNum = 0
	While Not rsStudents.EOF
		strStudentID = GetSafeID(rsStudents("STUDENTID"), Null)
		strClass_DepartDate_Val = "&nbsp;"
		If Not IsDull(rsStudents("CLASSNAME")) Then
			strClass_DepartDate_Val = DB2HTML(rsStudents("CLASSNAME"))
		Else
			If Not IsDull(rsStudents("DOCDATE_OUT")) Then
				strClass_DepartDate_Val = Date2Str(rsStudents("DOCDATE_OUT"))
			End If
		End If
		strAddress = GetAddress( strStudentID)

		nNum = nNum + 1
		strReport = strReport & "<tr>"
		strReport = strReport & "<td class=""cell-num"">" & nNum & "</td><td>" & strClass_DepartDate_Val & _
			"</td><td>" & DB2HTML(GetSafeStr(rsStudents("LASTNAME"), -1, "") & " " & GetSafeStr(rsStudents("FIRSTNAME"), -1, "")) & _
			"</td><td>" & rsStudents("DEBT") & _
			"</td><td>" & DB2HTML(GetSafeStr(rsStudents("P_LASTNAME"), -1, "") & " " & GetSafeStr(rsStudents("P_FIRSTNAME"), -1, "") & " " & GetSafeStr(rsStudents("P_MIDDLENAME"), -1, "")) & _
			"</td><td>" & DB2HTML(strAddress) & "</td><td>" & DB2HTML(GetSafeStr(rsStudents("HOMEPHONE"), -1, "")) & "</td>"
		strReport = strReport & "</tr>"
		rsStudents.MoveNext
	Wend
	GetParentPayInfoTable = strReport & "</table><br>"
End Function

Function GetAddress(nStudID)
	Dim strAddress, rsUserAddr

	Set rsUserAddr = objNSNET.GetUserAddress(nStudID, 1) ' 1 - фактический адрес
	If rsUserAddr.EOF Then GetAddress = "" : Exit Function

	strAddress = strAddress & GetSafeStr(rsUserAddr("ADDRESS"), -1, "") & " "
	GetAddress = strAddress
End Function
%>
