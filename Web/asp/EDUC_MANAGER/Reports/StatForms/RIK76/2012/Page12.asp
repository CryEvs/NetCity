<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 12
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumRowAllColsByIndex(13, 3,3,8,[4,5,6,8,9,10]);
	SumRowAllColsByIndex(13, 1,3,8,[2,3,11,12,13,15,16,17]);
	SumColForRowRange(13, 5, 1,17,[3,4]);
	SumColForRowRange(13, 8, 1,17,[6,7]);
	
	ValidateIncludedRows(13, 6, [7], 3, 8);
	ValidateIncludedRows(13, 13, [14], 3, 8);
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section13_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objCityRes, objProvinceRes, sourceFormId

	sourceFormId = GetSourceFormId()

	Call objSchoolFormComponent.CalcSplittedStatFormParametersByEoForm(strEMID, strCommonYearID, sourceFormId, 21, 15, 4, Null, objCityRes, objProvinceRes, bFormSpec)
	Call ClearForm
	Call CommonProcessParams(objCityRes, 0)
	Call CommonProcessParams(objProvinceRes, 1)

	CalcCountStudentCorr
End Sub

Sub CommonProcessParams(objRS, nColumnDispl)
	Dim arrCounts
	Dim nValue
	Dim strFieldName
	Dim nRowNum, nAddRowNum

	ReDim arrCounts(17)
	While Not objRS.EOF
		nRowNum = FormID2RowNum(CInt(objRS("EOFORMID")), nAddRowNum) ' Здесь nAddRowNum не используется
		If nRowNum >= 0 Then
			If nRowNum >= 14 Then
				nRowNum = nRowNum + 1
			End If

			arrCounts(nRowNum) = arrCounts(nRowNum) + GetSafeLng(objRS("SUMMA"), 0)
			nValue = arrCounts(nRowNum)
			If nValue > 0 Then
				strFieldName = GetFormFieldName(13, nRowNum, 3 + nColumnDispl)
				Call SetLoadedRIKValue(strFieldName, nValue)
			End If
		End If

		objRS.MoveNext
	WEnd
End Sub

Sub CalcCountStudentCorr()
	Dim sumRow14CityRes, sumRow14ProvinceRes, sumRow13CityRes, sumRow13ProvinceRes, sourceFormId

	sourceFormId = GetSourceFormId()

	'Расчет строк 13, 14 в столбцах 3, 4
	Call objSchoolFormComponent.CalcSplittedStatFormParameter(strEMID, strCommonYearID, Array(2, 5, 6, 7, 10, 13), , sourceFormId, 20, 15, 4, Null, sumRow14CityRes, sumRow14ProvinceRes, bFormSpec)
	Call objSchoolFormComponent.CalcSplittedStatFormParameter(strEMID, strCommonYearID, Array(11), , sourceFormId, 4, 27, 3, Null, sumRow13CityRes, sumRow13ProvinceRes, bFormSpec)

	sumRow13CityRes = sumRow13CityRes + sumRow14CityRes
	sumRow13ProvinceRes = sumRow13ProvinceRes + sumRow14ProvinceRes

	If sumRow14CityRes > 0 Then Call SetLoadedRIKValue( "T131403", sumRow14CityRes )
	If sumRow14ProvinceRes > 0 Then Call SetLoadedRIKValue( "T131404", sumRow14ProvinceRes )

	If sumRow13CityRes > 0 Then Call SetLoadedRIKValue( "T131303", sumRow13CityRes )
	If sumRow13ProvinceRes > 0 Then Call SetLoadedRIKValue( "T131304", sumRow13ProvinceRes )
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 4
		For nRow = 1 to 17
			Call SetLoadedRIKValue(GetFormFieldName(13, nRow, nCol), "")
		Next
	Next
End Sub
%>
