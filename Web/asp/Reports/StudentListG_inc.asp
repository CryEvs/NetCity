<!-- #INCLUDE FILE="../scripts/FilterGrades.asp" -->
<!-- #INCLUDE FILE="StudentListGCmn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGrade, nDGT, nClassID
Dim bPreSchool
Dim strGradeName, strDGT, strClassName
Dim objRs
Dim strGlobalYearID

Sub specialRead()
	Dim objInfo
	Call InitEmFilters()
	bIsEM = False
	Set objInfo = objNSNET.GetYearInfo(strCurrYearID)
	If objInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter") 
	End If
	strGlobalYearID = GetSafeID(objInfo("GLOBALYEARID"), Null)

	Set objInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter") 
	End If

	nGrade = GetSafeLng(obTokenMgr.GetData(strToken, stCurrGrade), Null)

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)

	If nGrade = -1 Then
		strGradeName = obLanguage("Common","kAll")
	Else
		If bPreSchool Then
			strGradeName = GetPreSchoolGradeName(nGrade)
		Else
			strGradeName = CStr(nGrade)
		End If
	End If

	If bPreSchool Then
		nDGT = GetSafeLng(Request("DGT"), Null)
		Select Case nDGT
			Case -1 : strDGT = obLanguage("Common","kAll")
			Case  0 : strDGT = obLanguage("EMReports","kDOUPermanentGroup")
			Case  1 : strDGT = obLanguage("EMReports","kDOUShortTermGroup")
			Case Else
				GenerateError obLanguage("Common","kInvalidParameter") 
		End Select
	Else
		nDGT = -1
		strDGT = ""
	End If

	nClassID = GetSafeLng(Request("PCLID"), Null)
	If nClassID = -1 Then
		strClassName = obLanguage("Common","kAll")
	Else
		strClassName = objNSNET.GetClassName(nClassID)
	End If
	ReadSingleDate()
End Sub

Sub specialMain()
	bOK = True
	' Здесь dtEndDate - дата для отчёта
	Set objRs = objNSNET.GetStudentListG(strGlobalYearID, -1, strSchoolID, strFunctionalityType, dtEndDate, NSNow(), False, nDGT, nGrade, nClassID)
	If objRs.EOF Then 
		bOK = False 
		strErrMsg = obLanguage("Common","kNoDataForFilter")
	End If 
End Sub

Function GetReportTable()
	Dim i, strReport
	i=0
	strReport = GetTableHeader(strFunctionalityType)
	While Not objRs.EOF
		i = i + 1
		strReport = strReport & GetTableLine(strFunctionalityType, i)
		objRs.MoveNext
	Wend
	GetReportTable = strReport &  "</table>"
End Function
%>
