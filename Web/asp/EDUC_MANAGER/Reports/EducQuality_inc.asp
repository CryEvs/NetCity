<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<!-- #INCLUDE FILE="../../Reports/EducQualityCmn_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim nGlobalYearId
Dim strEOTypeID, strEOTypeName

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true 
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames",IIf(bSecondaryEduc, "kRNSecondaryEducQuality","kRNGeneralEducQuality"))
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kEOType"), strEOTypeName )
End Function

Sub specialRead()
	SetScriptTimeOut 1800
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strEOTypeID = GetSafe("EOTYPEID", Null)
	Call ReadStateCmn()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, "stCurrEOTypeID", strEOTypeID)
End Sub

Sub specialMain()
	Dim nPrevGlobalYearID
	Dim strErrMessage, objInfo

	strEOTypeName = obLanguage("Common","kAll")
	If strEOTypeID <> "-1" Then
		Set objInfo = objNSNET.GetEOTypeInfo(strEOTypeID)
		If Not objInfo.EOF Then
			strEOTypeName = GetSafeStr(objInfo("NAME"), -1, "")
		End If
	End If

	nPrevGlobalYearID = GetPrevGlobalYearID()
	bNoPrevYear = (CLng(nPrevGlobalYearID) = 0)
	If bNoPrevYear Then
		strErrMsg = obLanguage("Reports","kNoPrevYear")
	Else
		strErrMessage = ""
		Set objEducQuality = objNSNET.GetEducQualityReportForEM(filterEMID, nPrevGlobalYearID, strEOTypeID, bSecondaryEduc, strErrMessage)
		If objEducQuality Is Nothing Then
			If strErrMessage <> "" Then
				GenerateError strErrMessage
			Else
				GenerateError obLanguage("Common","kUnexpErr")
			End If
		End If
	End If
	strSchoolShortName = obLanguage("Common","kAll")
End Sub

Function GetPrevGlobalYearID()
	Dim objCommonYears, nCurrGYID

	' Здесь важна сортировка в GetEMGlobalYearsList!!!
	GetPrevGlobalYearID = 0
	Set objCommonYears = objNSNET.GetEMGlobalYearsList(filterEMID, -1, True)
	Do While Not objCommonYears.EOF
		nCurrGYID = GetSafeLng(objCommonYears("GLOBALYEARID"), Null)
		If CLng(nGlobalYearID) = nCurrGYID Then
			objCommonYears.MoveNext
			If Not objCommonYears.EOF Then
				GetPrevGlobalYearID = GetSafeLng(objCommonYears("GLOBALYEARID"), Null)
			End If
			Exit Function
		End If
		objCommonYears.MoveNext
	Loop
End Function
%>
