<!-- #INCLUDE FILE="../../Reports/StudentListGCmn_inc.asp" -->

<%' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim nCurrFuncType
Dim objRs, strFuncTypeName, nGrade, strGradeName
Dim strEMSchoolID, strEMSchoolName, nTypeGroup, strTypeGroupName

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNStudentListG",0)
End Function

Function GetPageParams()
	Dim arrFilters, nUbound, bPreSchool
	bPreSchool=(Clng(nCurrFuncType) = kFuncType_PreSchool)
	arrFilters = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate, _
		obLanguage("Common","kEOType"), strFuncTypeName, _
		obLanguage("EMReports","kEMSchool"), strEMSchoolName, _
		obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType), strGradeName)
	If bPreSchool Then
		nUbound = UBound(arrFilters)
		ReDim Preserve arrFilters(nUbound + 2)
		arrFilters(nUbound + 1) = obLanguage("EMReports","kDOUGroupType")
		arrFilters(nUbound + 2) = strTypeGroupName 'strDGT
	End If

	GetPageParams = arrFilters
End Function

Sub SpecialRead()
	Dim arrGrades
	SetScriptTimeOut 9000
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))

	bIsEM = True
	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	nCurrFuncType = Clng(obTokenMgr.GetData(strToken, "FUNCTIONALITYTYPEID"))
	strFuncTypeName = objNSNET.GetFuctionalityTypeName(nCurrFuncType)
	strEMSchoolID = GetSafe("EMSCHOOLID", -1)
	If strEMSchoolID = "-1" Then strEMSchoolName = obLanguage("Common","kAll") Else strEMSchoolName = objNSNET.GetSchoolName(strEMSchoolID)
	nTypeGroup = GetSafe("DGT", -1)
	Select Case nTypeGroup
		Case "-1" strTypeGroupName = obLanguage("Common","kAll")
		Case "0" strTypeGroupName = obLanguage("EMReports","kDOUPermanentGroup")
		Case "1" strTypeGroupName = obLanguage("EMReports","kDOUShortTermGroup")
	End Select
	nGrade = GetSafe("GR", -1)
	arrGrades = GetArrGrades(nCurrFuncType,1,1,0)
	strGradeName = arrGrades(1, nGrade+1)
	bOk = True
	strErrMsg = ""
End Sub

Sub SpecialMain()
	' Здесь strEndDate - дата для отчёта
	Set objRs = objNSNET.GetStudentListG(nGlobalYearID, filterEMID, strEMSchoolID, nCurrFuncType, dtEndDate, NSNow(), False, nTypeGroup, nGrade, -1)
	If objRs.EOF Then 
		bOK = False 
		strErrMsg = obLanguage("EMReports","kErrMovedInStudentList")
	End If
End Sub

Function GetReportTable()
	Dim i, strReport
	i=0
	Response.Write GetTableHeader(nCurrFuncType)
	
	While Not objRs.EOF
		i = i + 1
		strReport = GetTableLine(nCurrFuncType, i)

		Response.Write strReport
		objRs.MoveNext
		If i=1000 Then Response.Flush: i=0
	Wend
	Response.Write "</table>"
End Function
%>
