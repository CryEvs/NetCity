
<% ' © 2007-2012 IRTech. All rights reserved.

Sub GetEOSumValuesEx(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
	Dim strValue

	strValue = objSchoolFormComponent.CalcStatFormParameter(strEMID, strCommonYearID, , , nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetEOSumValues(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter)
	Dim bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	Call GetEOSumValuesEx(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
End Sub

Sub GetEOCount(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter)
	Dim strValue
	strValue = objSchoolFormComponent.CalcCountStatFormParameter(strEMID, strCommonYearID, , , nForm, nSectionNum, nRow, nCol, strLetter)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetEOCountWithPValue(EMParamID, arrEoTypes, arrEoForms, nForm, nSectionNum, nRow, nCol, strLetter, strPvalues)
	Dim strValue
	strValue = objSchoolFormComponent.CalcCountStatFormParameterWithPValue(strEMID, strCommonYearID, arrEoTypes, arrEoForms, nForm, nSectionNum, nRow, nCol, strLetter, strPvalues)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetGEOSumValues(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter)
	Dim strValue, bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	strValue = objSchoolFormComponent.CalcStatFormParameter(strEMID, strCommonYearID, Array(2, 5, 6, 7), , nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetEOSumValuesForEOTypesAndEOForms(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter, arrEOTypes, arrEOForms )
	Dim strValue
	strValue = objSchoolFormComponent.CalcStatFormParameter(strEMID, strCommonYearID, arrEOTypes, arrEOForms, nForm, nSectionNum, nRow, nCol, strLetter)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetEOSumValuesForEOTypes(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter, arrEOTypes )
	Dim strValue, bFormSpec

	bFormSpec = GetSafeLng(Request("FS"), 0)
	strValue = objSchoolFormComponent.CalcStatFormParameter(strEMID, strCommonYearID, arrEOTypes, , nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetEOCountValuesForEOTypes(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter, arrEOTypes)
	Dim strValue

	strValue = objSchoolFormComponent.CalcCountStatFormParameter(strEMID, strCommonYearID, arrEOTypes, , nForm, nSectionNum, nRow, nCol, strLetter)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetEOCountValuesForEOTypesAndEoForms(EMParamID, nForm, nSectionNum, nRow, nCol, strLetter, arrEOTypes, arrEOForms)
	Dim strValue

	strValue = objSchoolFormComponent.CalcCountStatFormParameter(strEMID, strCommonYearID, arrEOTypes, arrEOForms, nForm, nSectionNum, nRow, nCol, strLetter)
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamID, strValue )
End Sub

Sub GetEOCountValuesForCommonYear(EMParamED, SchoolParamID)
	Dim strValue, strTempValue
	Dim strTemp

	Call objNSNET.CalcSimpleEMParameter(strEMID, strCommonYearID, SchoolParamID, "", "", False, True, strTempValue, strTemp )
	strValue = strTempValue
	If strValue > 0 Then Call SetLoadedRIKValue( EMParamED, strValue )
End Sub

Sub GetSplitEOCountValues(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
	Dim nCityRes, nProvinceRes

	Call objSchoolFormComponent.CalcSplittedCountStatFormParameter(strEMID, strCommonYearID, , , nForm, nSectionNum, nRow, nCol, strLetter, nCityRes, nProvinceRes, bFormSpec)

	If nCityRes > 0 Then Call SetLoadedRIKValue(EMCityParamID, nCityRes)
	If nProvinceRes > 0 Then Call SetLoadedRIKValue(EMProvinceParamID, nProvinceRes)
End Sub

Sub GetSplitEOSumValuesEx(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
	Dim nCityRes, nProvinceRes

	Call objSchoolFormComponent.CalcSplittedStatFormParameter(strEMID, strCommonYearID, , , nForm, nSectionNum, nRow, nCol, strLetter, nCityRes, nProvinceRes, bFormSpec)

	If nCityRes > 0 Then Call SetLoadedRIKValue( EMCityParamID, nCityRes )
	If nProvinceRes > 0 Then Call SetLoadedRIKValue( EMProvinceParamID, nProvinceRes )
End Sub

Sub GetSplitEOSumValues(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter)
	Dim bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	Call GetSplitEOSumValuesEx(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
End Sub

Sub GetSplitEOSumValuesForEOTypes(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter, arrEOTypes)
	Dim nCityRes, nProvinceRes, bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	Call objSchoolFormComponent.CalcSplittedStatFormParameter(strEMID, strCommonYearID, arrEOTypes, , nForm, nSectionNum, nRow, nCol, strLetter, nCityRes, nProvinceRes, bFormSpec)

	If nCityRes > 0 Then Call SetLoadedRIKValue( EMCityParamID, nCityRes )
	If nProvinceRes > 0 Then Call SetLoadedRIKValue( EMProvinceParamID, nProvinceRes )
End Sub

Sub GetSplitEOSumValuesForEOForms(EMCityParamID, EMProvinceParamID, arr, arrEOFormIDs)
	Dim nCityRes, nProvinceRes, bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	Call objSchoolFormComponent.CalcSplittedStatFormParameterArr(strEMID, strCommonYearID, ,arrEOFormIDs, arr, nCityRes, nProvinceRes, bFormSpec)

	If nCityRes > 0 Then Call SetLoadedRIKValue(EMCityParamID, nCityRes)
	If nProvinceRes > 0 Then Call SetLoadedRIKValue(EMProvinceParamID, nProvinceRes)
End Sub

Function GetPivot(nEmID, nGlobalYearId, nStatForm, arrParams, arrEoTypes, arrEoForms, bFilterEmptyVals)
	Dim objDsPivot

	Set objDsPivot = objSchoolFormComponent.GetEmAutoCalcPivot(nEmID, nGlobalYearId, nStatForm, arrEoTypes, arrEoForms, bFilterEmptyVals, arrParams)
	Set GetPivot = objDsPivot
End Function

Sub GetSplittedPivot(nEmID, nGlobalYearId, nStatForm, arrParams, arrEoTypes, arrEoForms, bFilterEmptyVals, objCityRes, objProvinceRes)
	Dim bFormSpec

	bFormSpec = GetSafeLng(Request("FS"), 0)
	Call objSchoolFormComponent.GetEmAutoCalcSplittedPivot(nEmID, nGlobalYearId, nStatForm, arrEoTypes, arrEoForms, bFilterEmptyVals, arrParams, objCityRes, objProvinceRes, bFormSpec)
End Sub

Sub GetSplitGEOSumValuesEx(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
	Dim nCityRes, nProvinceRes

	Call objSchoolFormComponent.CalcSplittedStatFormParameter(strEMID, strCommonYearID, Array(2,5,6,7,11,13), , nForm, nSectionNum, nRow, nCol, strLetter, nCityRes, nProvinceRes, bFormSpec)

	If nCityRes > 0 Then Call SetLoadedRIKValue( EMCityParamID, nCityRes )
	If nProvinceRes > 0 Then Call SetLoadedRIKValue( EMProvinceParamID, nProvinceRes )
End Sub

Sub GetSplitGEOSumValues(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter)
	Dim bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	Call GetSplitGEOSumValuesEx(EMCityParamID, EMProvinceParamID, nForm, nSectionNum, nRow, nCol, strLetter, bFormSpec)
End Sub

Sub GetSplitGEOSumValuesArr(EMCityParamID, EMProvinceParamID, arr)
	Dim nCityRes, nProvinceRes, bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	Call objSchoolFormComponent.CalcSplittedStatFormParameterArr(strEMID, strCommonYearID, Array(2,5,6,7,11,13), , arr, nCityRes, nProvinceRes, bFormSpec)

	If nCityRes > 0 Then Call SetLoadedRIKValue(EMCityParamID, nCityRes)
	If nProvinceRes > 0 Then Call SetLoadedRIKValue(EMProvinceParamID, nProvinceRes)
End Sub

Sub GetSplitGEOSumValuesArrForEOTypes(EMCityParamID, EMProvinceParamID, arr, arrEOTypes)
	Dim nCityRes, nProvinceRes, bFormSpec

	bFormSpec = GetSafeLng(Request("FS"),0)
	Call objSchoolFormComponent.CalcSplittedStatFormParameterArr(strEMID, strCommonYearID, arrEOTypes, , arr, nCityRes, nProvinceRes, bFormSpec)

	If nCityRes > 0 Then Call SetLoadedRIKValue(EMCityParamID, nCityRes)
	If nProvinceRes > 0 Then Call SetLoadedRIKValue(EMProvinceParamID, nProvinceRes)
End Sub

Sub SetLoadedRIKValue(theID, theValue)
	dictSchoolInfo(theID) = Array(theID, theValue)
End Sub

Function GetLoadedRIKValue( theID )
	GetLoadedRIKValue = ""
	If IsEmpty(dictSchoolInfo) Then Exit Function
	If Not dictSchoolInfo.Contains(theID) Then Exit Function
	GetLoadedRIKValue = dictSchoolInfo(theID)
End Function

Function GetFormParameter(StatForm, SectionNum, Row, Col, Letter)
	Set GetFormParameter = Server.CreateObject("NetCity.Common.ObjectModel.SchoolForms.FormParameter")
	GetFormParameter.Form = StatForm
	GetFormParameter.SectionNum = SectionNum
	GetFormParameter.Row = Row
	If Not IsDull(Col) Then
		GetFormParameter.SetCol(Col)
	End If
	GetFormParameter.Letter = Letter
End Function

Function GetDO1RowNum(nRowNumByFirstForm)
	Dim nRowNum

	Select Case nRowNumByFirstForm
		Case 1
			nRowNum = 1
		Case 2
			nRowNum = 2
		Case 7
			nRowNum = 3
		Case 9
			nRowNum = 4
		Case 10
			nRowNum = 5
		Case 12
			nRowNum = 6
		Case 15
			nRowNum = 7
		Case 16
			nRowNum = 8
		Case Else
			nRowNum = 0
	End Select

	GetDO1RowNum = nRowNum
End Function
%>
