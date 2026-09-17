<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/MoveDoc_inc.asp" -->
<!-- #INCLUDE FILE="TitleListCmn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strSchoolPrincipal
Dim bEmpty

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNTitleList")
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("SetupSchool","kTitleStateOn")& " " & strEndDate
End Function
Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kDate"), strEndDate)
End Function

Sub specialRead()
	ReadSingleDate
	strTotalByAll = "Всего по школе"
	bTotalBySchools = False
End Sub

Sub specialMain()
	Dim i, j

	bOK = True
	Call InitSchoolSettings( objNSNET )
	nGradeJuniorMin = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Min))
	nGradeJuniorMax = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max))
	nGradeMiddleMin = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Min))
	nGradeMiddleMax = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max))
	nGradeSeniorMin = CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Min))
	nGradeSeniorMax = CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Max))

	ReDim arrData(26, kMaxGrade)
	For i = 0 To 26
		For j = 0 To kMaxGrade
			arrData(i, j) = 0
		Next
	Next

	Call GetParamsInfo()
	bEmpty = Not GetReportData(arrData, strCurrYearID)
	If bEmpty Then
		strErrMsg = obLanguage("Reports","kNoClasses",strFunctionalityType)
		bOK = False
	End If
	strSchoolPrincipal = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00fio1") 
End Sub

Function GetBottom()
	GetBottom = "<div class=""normaltext""><br><br>" & obLanguage("SetupSchoolUI","kOUDirector",strFunctionalityType) & " <b>" & strSchoolPrincipal & "</b></div>"
End Function
%>
