<!-- #INCLUDE VIRTUAL="/asp/Reports/CountComposByYearsCmn_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim strEOTypeID
Dim objSchoolsYears, bSchools
Dim bShowEOTypes, strEOTypeName

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true 
End Function

Function GetPageParams()
	GetPageParams = Array( _
	obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
	obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(nGlobalYearID), _
	obLanguage("Common","kDate"), strEndDate)
End Function

Sub specialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))

	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	bAge = GetSafeBool(GetSafe("Age", false), false)
End Sub

Sub specialMain()
	Dim strSYID, bTmp
	Set objSchoolsYears = objNSNET.GetEMShoolsYearsList(nGlobalYearID, -1, kFuncType_Add, filterEMID, EXCLUDE_SOME_UDODS)
	bSchools = Not objSchoolsYears.EOF
	If Not bSchools Then
		strErrMsg = obLanguage("EMReports","kNoAddSchoolYearsInDB")
	Else
		If bAge Then
			Call InitArraysForAge()
		Else
			Call InitArrays()
		End If
		While Not objSchoolsYears.EOF
			strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)

			If bAge Then
				bTmp = GetReportInfoForSYForAge(strSYID, nGlobalYearID)
			Else
				bTmp = GetReportInfoForSY(strSYID, nGlobalYearID)
			End If

			objSchoolsYears.MoveNext
		Wend
	End If
End Sub

Function GetBottom()
	GetBottom = ""
End Function
%>
