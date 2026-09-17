<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<!-- #INCLUDE FILE="../../Reports/PMPKRecommendCmn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim objStudents, bEmpty, bEmptySchools
Dim strGYName, strEOTypeID, strEOTypeName
Dim strEMSchoolID, strEMSchoolName
Dim strViolationID, strViolationName
Dim dtEndDate, strEndDate
Dim arrEMSchools, objEMSchools
Dim nSYID, nSchoolCityID
Dim objEMSchoolsForSyId

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNPMPKRecommendationEM")
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Reports","kTitleStateOn2") & " " & strEndDate
End Function
Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID) ,_
		obLanguage("Common","kEOType"), IIf(strEOTypeID <> "-1", strEOTypeName, obLanguage("Common","kAll")), _
		obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Reports","kEMSchool_2"), strEMSchoolName, _
		obLanguage("Common","kDate"), strEndDate, _
		obLanguage("Reports","kViolationKind"), strViolationName _
		)
End Function


Sub specialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))

	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	
	strEOTypeID = GetSafeID(obTokenMgr.GetData(strToken, "stCurrEOTypeID"), Null)
	strEMSchoolID = GetSafeID(Request("EMSCHOOLID"), -1)
	strViolationID = GetSafeID(Request("Viol_ID"), Null)
	Set objEMSchoolsForSyId = objNSNET.GetSchoolYearForGlobalYear(strEMSchoolID, nGlobalYearID)
	If Not objEMSchoolsForSyId.EOF Then 
		nSYID = GetSafeLng(objEMSchoolsForSyId("SCHOOLYEARID"), Null)
	Else
		nSYID = Null
	End If

	nSchoolCityID = 0
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stEMSchoolID, strEMSchoolID)
	Call obTokenMgr.SetData(strToken, stViolationID, strViolationID)
End Sub

Sub specialMain()
	Dim strSchName
	Dim objInfo

	strEOTypeName = ""
	Set objInfo = objNSNET.GetEOTypeInfo(strEOTypeID)
	If Not objInfo.EOF Then
		strEOTypeName = GetSafeStr(objInfo("NAME"), -1, "")
	End If

	strGYName = objNSNET.GetGlobalYearName(nGlobalYearID)

	If strEMSchoolID = "-1" Then
		strEMSchoolName = obLanguage("Common","kAll")
	Else
		strEMSchoolName = objNSNET.GetSchoolName(strEMSchoolID)
	End If

	If strViolationID = "-1" Then
		strViolationName = obLanguage("Common","kAll")
	Else
		strViolationName = ""
		Set objInfo = objNSNET.GetUserParamItemInfo(strViolationID)
		If Not objInfo.EOF Then
			strViolationName = GetsafeStr(objInfo("ITEMNAME"), -1, "")
		End If
	End If
	Set objEMSchools = objNSNET.GetEMSchoolsForEOType(filterEMID, kWizardSteps, strEOTypeID, nGlobalYearID)
	bEmptySchools = objEMSchools.EOF
	If bEmptySchools Then
		Response.Write GetWarningPrint(obLanguage("Reports","kNoStudentsWithPMPK"))
		Exit Sub
	End If
	
	If strEMSchoolID = "-1" Then
		arrEMSchools = objEMSchools.GetRows(,,Array("SCHOOLID", "SCHOOLNAME", "SCHOOLYEARID","FOUNDERID", "FNAME", "TREE_LEVEL" ))
	Else
		ReDim arrEMSchools(4, 0)
		arrEMSchools(0, 0) = Clng(strEMSchoolID)
		arrEMSchools(1, 0) = strEMSchoolName
		arrEMSchools(2, 0) = nSYID
		arrEMSchools(3, 0) = GetSafeLng(objEMSchools("FOUNDERID"), Null)
		arrEMSchools(4, 0) = objNSNET.GetFounderName(objEMSchools("FOUNDERID"))
	End If

End Sub

Function GetReportTable()
	Dim strReport
	Dim strReport_1_School
	Dim nInd
	Dim objPMPKInfo, i
	Dim nCurrSYID, strCurrSchoolName

	strReport = GetReportHeader()
	bEmpty = True

	'//выбранный в фильтре отчета тип функциональности
	dim strFuncType

	if strEOTypeID = 1 Then
		strFuncType = kFuncType_PreSchool
	Else
		strFuncType = kFuncType_Common
	End If

	nInd = 0
	For i = 0 To UBound(arrEMSchools, 2)
		nCurrSYID = arrEMSchools(2, i)
		strCurrSchoolName = arrEMSchools(1, i)
		Set objPMPKInfo = objNSNET.GetPMPKRecommend(nCurrSYID, dtEndDate, strViolationID, strFuncType)
		If bEmpty Then
			bEmpty = objPMPKInfo.EOF
		End If
		If subEms Then 
			If currFounderID <> arrEMSchools(3,i) Then 
				currFounderID = arrEMSchools(3,i)
				strReport = strReport & "<tr><th colspan=""16"">" & DB2HTML(arrEMSchools(4,i)) & "</th></tr>"
			End If
		End if
		strReport_1_School = GetReport_1_School(objPMPKInfo, nInd, strCurrSchoolName)
		strReport = strReport & strReport_1_School
	Next
	GetReportTable = strReport & "</table>"

	If bEmpty Then
		GetReportTable = ""
	End If
End Function
%>
