<!-- #INCLUDE FILE="../../Reports/TitleListDouCmn_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nGlobalYearId
Dim strEOLegalFormID, strEOLegalFormName
Dim arrTotals
Dim strCurrSchoolID, strCurrSchoolName


Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage( "EMReportNames", IIf(bTotalBySchools, "kRNTotalTitleListDou","kRNTitleListDouEM") )
End Function

Function GetPageTitleEx()
	GetPageTitle = obLanguage("SetupSchool","kTitleStateOn") & " " & strEndDate
End Function

Function GetPageParams()
	Dim arrParams, nUBound

	arrParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("SchoolInfo","kEOLegalForm"), IIf(strEOLegalFormID <> "-1", strEOLegalFormName, obLanguage("Common","kAll")) , _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate _
		)

	If bTotalBySchools Then
		nUBound = UBound(arrParams)
		ReDim Preserve arrParams(nUBound + 2)

		arrParams(nUBound + 1) = obLanguage("MenuFolders","kFNClasses",1)
		arrParams(nUBound + 2) = IIf(nFilterStep = -1, obLanguage("Common","kAll"), IIf(nFilterStep = 1, obLanguage("EMReports","kDOUGroupStepEarly"), obLanguage("EMReports","kDOUGroupPreSchool")))
	End If

	GetPageParams = arrParams
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	SetScriptTimeOut 1800
	strEOLegalFormID = GetSafe("EOLEGALFORMID", Null)
	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)

	bTotalBySchools = (GetSafe("Regime", "") = "2") ' bTotalBySchools = True - это Сводный отчёт
	If bTotalBySchools Then
		nFilterStep = CLng(GetSafe("DGStep", "-1"))
	Else
		nFilterStep = -1
	End If
End Sub

Sub specialMain()
	Dim strSYID
	Dim nMinGrade, nMaxGrade
	Dim objEOLegalFormInfo

	Dim objData
	Dim bEmpty, nInd
	Dim strCurrFounderName

	bOK = True

	Call GetParamsInfo()

	If strEOLegalFormID <> "-1" Then
		Set objEOLegalFormInfo = objNSNET.GetEOLegalFormInfo(strEOLegalFormID)
		If objEOLegalFormInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		strEOLegalFormName = GetSafeStr(objEOLegalFormInfo("NAME"), -1, "")
	End If

	Set objData = objNSNET.GetTitleListDou(filterEMID, nGlobalYearID, strEOLegalFormID, bTotalBySchools, dtEndDate)
	bEmpty = objData.EOF

	If bEmpty Then
		strErrMsg = obLanguage("EMReports","kNoDataForFilter")
		bOK = False
	Else
		If bTotalBySchools Then
			ReDim arrTotals(-1)
			nInd = -1
			While Not objData.EOF
				strCurrSchoolID = GetSafeID(objData("SCHOOLID"), Null)
				strCurrSchoolName = GetSafeStr(objData("EONAME"), -1, "")
				strCurrFounderName = GetSafeStr(objData("FNAME"), -1, "")

				arrData = GetReportArray(objData)
				arrData(0, 0) = strCurrSchoolName
				arrData(0, 1) = strCurrFounderName

				nInd = nInd + 1
				ReDim Preserve arrTotals(nInd)
				arrTotals(nInd) = arrData
			WEnd
		Else
			arrData = GetReportArray(objData)
		End If
	End If
End Sub

Function CanContinue(objRs)
	Dim strTmpSchoolID

	If bTotalBySchools Then
		If objRs.EOF Then
			CanContinue = False
		Else
			strTmpSchoolID = GetSafeID(objRs("SCHOOLID"), Null)
			CanContinue = (strTmpSchoolID = strCurrSchoolID)
		End If
	Else
		CanContinue = (Not objRs.EOF)
	End If
End Function

Function GetBottom()
	GetBottom = ""
End Function

Function GetManager()
	GetManager = ""
End Function

Function GetReportTable()
	If bTotalBySchools then
		GetReportTable = GetReportTable_TotalBySchools()
	Else
		GetReportTable = GetReportTable_Sum()
	End If
End Function

Function GetReportTable_TotalBySchools()
	Dim i

	strReport = strReport & GetTableHeader()
	For i = 0 To UBound(arrTotals)
		arrData = arrTotals(i)

		strReport = strReport & "<tr class=""text-buttom"">"
		If subEms Then 
			strReport = strReport & "<td rowspan=""2"" class=""cell-text"">" & DB2HTML(arrData(0, 1)) & "</td>"
		End If
		strReport = strReport & "<td rowspan=""2"" class=""cell-text"">" & DB2HTML(arrData(0, 0)) & "</td>"

		strReport = strReport & GetRow(0, "")
		strReport = strReport & GetRow(5, "text-buttom")
	Next
	strReport = strReport & "</table>"

	GetReportTable_TotalBySchools = strReport
End Function
%>
