<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim bEmpty
Dim nEOTypeID, strEOTypeName
Dim strGYName
Dim nEMSchoolID, strEMSchoolName
Dim nGrade, strGradeName
Dim strLastName, strFirstName
Dim objDopEducation

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNChildrenAddEducation")
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kEOType"), strEOTypeName, _
		obLanguage("Common","kSchoolYear"), strGYName, _
		obLanguage("Reports","kEMSchool_2"), strEMSchoolName, _
		obLanguage("EMReports","kGrade"), strGradeName, _
		obLanguage("Common","kLastName"), strLastName, _
		obLanguage("Common","kFirstName"), strFirstName)
End Function

Sub specialRead()
	SetScriptTimeOut 900

	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	nEOTypeID = CLng(GetSafe("EOTYPEID", Null))
	nEMSchoolID = CLng(GetSafe("EMSCHOOLID", -1))
	nGrade = CLng(GetSafe("GR", -1))

	strLastName = Trim(GetSafeStr(Request("LastName"), -1, ""))
	strFirstName = Trim(GetSafeStr(Request("FirstName"), -1, ""))

	If strLastName = "" Or strFirstName = "" Then
		GenerateError obLanguage("Common","kUnexpErr")
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stEMSchoolID, nEMSchoolID)
	Call obTokenMgr.SetData(strToken, stCurrGrade, nGrade)
End Sub

Sub specialMain()
	Dim arrGrades
	Dim objInfo

	strEOTypeName = ""
	Set objInfo = objNSNET.GetEOTypeInfo(nEOTypeID)
	If Not objInfo.EOF Then
		strEOTypeName = GetSafeStr(objInfo("NAME"), -1, "")
	End If

	strGYName = objNSNET.GetGlobalYearName(nGlobalYearID)

	If nEMSchoolID = -1 Then
		strEMSchoolName = obLanguage("Common","kAll")
	Else
		strEMSchoolName = objNSNET.GetSchoolName(nEMSchoolID)
	End If

	arrGrades = GetArrGrades(nEOTypeID,1,1,0)
	strGradeName = arrGrades(1, nGrade+1)

	On Error Resume Next
	Set objDopEducation = objNSNET.GetStudentDopEducation(filterEMID, 0, 0, Array(nEOTypeID, nGlobalYearID, nEMSchoolID, nGrade, strLastName, strFirstName, ""))
	TestError obLanguage("EMReports","kCantGetAddEducation")
	bEmpty = objDopEducation.EOF
	If bEmpty Then strErrMsg = obLanguage("EMReports","kEmptyAddEducation")
End Sub

Function GetReportTable()
	Dim strReport

	strReport = GetHeader_Table()
	strReport = strReport & _
	"<tr><th rowspan=""2"">" & obLanguage("Filter","kFIO") & "</th><th rowspan=""2"">" & obLanguage("Reports","kBirthdate") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("EMReports","kMOY") & "</th><th rowspan=""2"">" & obLanguage("EMReports","kClassGroup") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("SetupSchool","kUDODName") & "</th><th rowspan=""2"">" & obLanguage("SetupSchool","kOtrasl") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("SetupSchool","kUDODReason") & "</th><th rowspan=""2"">" & obLanguage("SetupSchool","kProgramDirection") & "</th><th rowspan=""2"">" & obLanguage("SetupSchool","kProgramName") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("SetupSchool","kProgramDescr") & "</th><th rowspan=""2"">" & obLanguage("SetupSchool","kYearNum") & "</th><th colspan=""2"">" & obLanguage("SetupSchool","kProgramHours") & "</th><th rowspan=""2"">" & obLanguage("SetupSchool","kCombining") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("SetupSchool","kEnrollDate") & "</th><th rowspan=""2"">" & obLanguage("SetupSchool","kDepartDate") & "</th></tr>" & _
		"<tr><th>" & obLanguage("SetupSchool","kForYear") & "</th><th>" & obLanguage("SetupSchool","kForWeek") & "</th>" & _
	"</tr>"

	While Not objDopEducation.EOF
		strReport = strReport & _
		"<tr><td class=""cell-text"">" & DB2HTML(objDopEducation("LASTNAME")) & " " & DB2HTML(objDopEducation("FIRSTNAME")) & " " & DB2HTML(objDopEducation("MIDDLENAME")) & "</td>" & _
			"<td class=""cell-date"">" & DB2HTML(objDopEducation("BIRTHDATE")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("MAIN_EO")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("MAIN_CLASS")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("EONAME")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("OTRASL")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("REASONNAME")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("DIRECTIONNAME")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("PROGRAMNAME")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML_BR(objDopEducation("PROG_DESCR")) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(objDopEducation("GRADE")) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(objDopEducation("YEARHOURS")) & "</td>" & _
			"<td class=""cell-num"">" & DB2HTML(objDopEducation("WEEKHOURS")) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objDopEducation("CLASSNAME")) & "</td>" & _
			"<td class=""cell-text"">" & (obLanguage("SetupSchool","kDocNumber2") & " " & DB2HTML(objDopEducation("DOCNUMBER1")) & " " & obLanguage("SetupSchool","kFrom2") & " " & Date2Str(objDopEducation("DOCDATE1"))) & "</td>"
			If Not IsDull(objDopEducation("DOCDATE2")) Then
				strReport = strReport & _
				"<td class=""cell-text"">" & (obLanguage("SetupSchool","kDocNumber2") & " " & DB2HTML(objDopEducation("DOCNUMBER2")) & " " & obLanguage("SetupSchool","kFrom2") & " " & Date2Str(objDopEducation("DOCDATE2"))) & "</td>"
			Else
				strReport = strReport & _
				"<td>&nbsp;</td>"
			End If
		strReport = strReport & "</tr>"
		objDopEducation.MoveNext
	Wend

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

%>
