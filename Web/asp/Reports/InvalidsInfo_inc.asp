<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim objInfo, bEmpty
Dim dtEndDate, strEndDate
Dim strSchoolNum, nSchoolCityID
Dim strGlobalYearID
Dim isUDOD
Dim bPreSchool

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNInvalidsInfo")
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Reports","kTitleStateOn2") & " " & strEndDate
End Function
Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kDate"), strEndDate)
End Function

Sub specialRead()
	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
End Sub

Sub specialMain()
	Dim objSchoolInfo, objSYInfo
	Dim objFuncType

	bPreSchool = CLng(strFunctionalityType)=kFuncType_PreSchool
	Set objInfo = objNSNET.GetInvalidsInfo(strCurrYearID, dtEndDate)
	bEmpty = objInfo.EOF
	If bEmpty Then
		strErrMsg = obLanguage("Reports","kNoInvalids")
	Else
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
		If objSchoolInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If

		Set objFuncType = objNSNET.GetFuctionalityType(kFuncType_Add)
		isUDOD = Not objFuncType.EOF

		strSchoolNum = GetSafeStr(objSchoolInfo("SCHOOLNUMBER"), -1, "")
		nSchoolCityID = GetSafeLng(objSchoolInfo("CITYID"), Null)

		Set objSYInfo = objNSNET.GetYearInfo(strCurrYearID)
		If objSYInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		strGlobalYearID = GetSafeID(objSYInfo("GLOBALYEARID"), Null)
	End If
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print-text"">"
End Function
Function GetReportTable()
	Dim strReportHeader
	Dim strAddress, strDopEducDirections
	Dim strStudentID
	Dim objHealthViol

	strReportHeader = GetHeader_Table() & "<tr>" & _
		"<th>" & obLanguage("Reports","kSchoolNo2") & "</th>" & _
		"<th>" & obLanguage("Common","kLastName") & "</th>" & _
		"<th>" & obLanguage("Common","kFirstName") & "</th>" & _
		"<th>" & obLanguage("Common","kMiddleName") & "</th>" & _
		"<th>" & obLanguage("Reports","kBirthDate2") & "</th>" & _
		"<th>" & obLanguage("Common","kHomeAddress") & "</th>" & _
		"<th>" & obLanguage("Common","kClass",strFunctionalityType) & "</th>" & _
		"<th>" & obLanguage("Reports","kViolationKind") & "</th>" & _
		"<th>" & obLanguage("ClassManagement","kClassType",strFunctionalityType) & "</th>"

		If Not bPreSchool Then strReportHeader = strReportHeader & "<th>" & obLanguage("Reports","kEducationForm") & "</th>"
		If (isUDOD) Then strReportHeader = strReportHeader & "<th>" & obLanguage("Reports","kDopEducationDir") & "</th>"

		strReportHeader = strReportHeader & _
		"<th>" & obLanguage("Reports","kBlankNumber") & "</th>" & _
		"<th>" & obLanguage("Reports","kBlankStart") & "</th>" & _
		"<th>" & obLanguage("Reports","kBlankEnd") & "</th>"

		strReportHeader = strReportHeader & "<th>" & obLanguage("Reports","kNote2") & "</th></tr>"
	strReport = strReportHeader
	Set objHealthViol = objInfo.Fields()("rsHealthViol").Value
	While Not objInfo.EOF
		strStudentID= GetsafeID(objInfo("USERID"), Null)
		strAddress = GetAddress( strStudentID)
		If (isUDOD) Then strDopEducDirections = GetDopEducDirections(strStudentID)
		strReport = strReport & _
		"<td class=""text-nowrap"">" & DB2HTML(strSchoolNum) & "</td>" & _
		"<td>" & DB2HTML(GetSafeStr(objInfo("LASTNAME"), -1, "")) & "</td>" & _
		"<td>" & DB2HTML(GetSafeStr(objInfo("FIRSTNAME"), -1, "")) & "</td>" & _
		"<td>" & DB2HTML(GetSafeStr(objInfo("MIDDLENAME"), -1, "")) & "</td>" & _
		"<td class=""cell-date"">" & Date2Str(objInfo("BIRTHDATE")) & "</td>"

		strReport = strReport & _
		"<td>" & DB2HTML(strAddress) & "</td>" & _
		"<td>" & DB2HTML(GetSafeStr(objInfo("CLASSNAME"), -1, "")) & "</td>" & _
		"<td>" & GetHealthViol(objHealthViol) & "</td>" & _
		"<td>" & DB2HTML(GetSafeStr(objInfo("CLASSTYPE"), -1, "")) & "</td>"

		If Not bPreSchool Then strReport = strReport & "<td>" & DB2HTML(GetSafeStr(objInfo("EDUCFORM"), -1, "")) & "</td>"
		If (isUDOD) Then strReport = strReport & "<td>" & strDopEducDirections & "</td>"

		strReport = strReport & _
		"<td class='cell-num'>" & DB2HTML(GetSafeStr(objInfo("COMMISSNUM"), -1, "")) & "</td>" & _
		"<td class='cell-date'>" & Date2Str(objInfo("STARTDATE")) & "</td>" & _
		"<td class='cell-date'>" & Date2Str(objInfo("ENDDATE")) & "</td>"

		strReport = strReport & "<td></td></tr>"

		objInfo.MoveNext
	WEnd
	strReport = strReport & "</table>"

	GetReportTable = strReport
End Function

Function GetAddress(nStudID)
	Dim strAddress, rsUserAddr

	Set rsUserAddr = objNSNET.GetUserAddress(nStudID, 1) ' 1 - фактический адрес
	If rsUserAddr.EOF Then GetAddress = "" : Exit Function

	If nSchoolCityID <> rsUserAddr("CITYID") Then
		strAddress = strAddress & GetSafeStr(rsUserAddr("CITYNAME"), -1, "") & " "
	End If

	strAddress = strAddress & GetSafeStr(rsUserAddr("ADDRESS"), -1, "") & " "

	GetAddress = strAddress
End Function

Function GetDopEducDirections(strStudID)
	Dim objDirs, strDir
	Dim strDirections

	Set objDirs = objNSNET.GetStudentDopDirections(strGlobalYearID, strStudID, dtEndDate)
	strDirections = ""

	If objDirs.EOF Then
		GetDopEducDirections = "&nbsp;"
		Exit Function
	End If

	While Not objDirs.EOF
		strDir = GetSafeStr(objDirs("DIRECTIONNAME"), -1, "")
		If Not IsDull(strDirections) Then
			strDirections = strDirections & "<br>"
		End If
		strDirections = strDirections & DB2HTML(strDir)
		objDirs.MoveNext
	WEnd

	GetDopEducDirections = strDirections
End Function

Function GetHealthViol(objHealthViol)
	Dim strCurr
	Dim strAll

	If objHealthViol.EOF Then
		GetHealthViol = "&nbsp;"
		Exit Function
	End If

	strAll = ""
	While Not objHealthViol.EOF
		strCurr = GetSafeStr(objHealthViol("ITEMNAME"), -1, "")
		If Not IsDull(strAll) Then
			strAll = strAll & "<br>"
		End If
		strAll = strAll & DB2HTML(strCurr)
		objHealthViol.MoveNext
	WEnd

	GetHealthViol = strAll
End Function
%>
