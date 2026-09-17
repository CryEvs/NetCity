<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Dim arrFormIdWithRow

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColAllRows(2, 3, 1, 9, 4, 5);
	SumRowAllCols(2, 1, 3, 17, 2, 9);

	ValidateIncludedCols(2, 3, [6], 1, 9);
	ValidateIncludedCols(2, 3, [7], 1, 9);
	ValidateIncludedCols(2, 3, [8], 1, 9);
	ValidateIncludedCols(2, 3, [9], 1, 9);
	ValidateIncludedCols(2, 3, [10], 1, 9);
	ValidateIncludedCols(2, 3, [11], 1, 9);
	ValidateIncludedCols(2, 3, [12], 1, 9);
	ValidateIncludedCols(2, 3, [13], 1, 9);
	ValidateIncludedCols(2, 3, [14], 1, 9);
	ValidateIncludedCols(2, 3, [15], 1, 9);
	ValidateIncludedCols(2, 16, [17], 1, 9);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim cityRes, provinceRes, objJoints
	Dim i, nRowNum
	Dim cellRow, cellValue
	Dim sourceFormId
	
	' Соответствие между идентификатором вида учреждения и номером строки раздела
	ReDim arrFormIdWithRow(kMaxFormId)

	sourceFormId = GetSourceFormId()

	arrFormIdWithRow(10) = 2
	arrFormIdWithRow(11) = 3
	arrFormIdWithRow(12) = 4
	arrFormIdWithRow(14) = 5
	arrFormIdWithRow(15) = 6

	Call ClearAvtoCalcFields("T02",1,9,3,17)
	
	Call objSchoolFormComponent.CalcSplittedStatFormParametersByEoForm(strEmId, strCommonYearId, sourceFormId, 2, 1, 3, Empty, cityRes, provinceRes)
	Call CommonProcessParams(cityRes, 4)
	Call CommonProcessParams(provinceRes, 5)
	
	For i = kMinFormId To kMaxFormId
		nRowNum = arrFormIdWithRow(i)

		If nRowNum > 0 Then
			Set objJoints = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(i), , sourceFormId, 2, 2, 10, 3, 3)
			While Not objJoints.EOF
				cellRow = CInt(objJoints("CELLROW"))
				cellValue = objJoints("SUMMA")
				Call SetLoadedRIKValue( GetFormFieldName(2, nRowNum, cellRow + 4), cellValue )
				objJoints.MoveNext
			WEnd

			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(2, nRowNum, 15), sourceFormId, 2, 1, 4, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(2, nRowNum, 16), sourceFormId, 3, 1, 3, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(2, nRowNum, 17), sourceFormId, 3, 2, 3, Empty, Array(3), Array(i) )
		End If
	Next
End Sub

Sub CommonProcessParams(objRS, nColumnDispl)
	Dim nRowNum, nEoFormID

	While Not objRS.EOF
		nRowNum = 0
		nEoFormID = CInt(objRS("EOFORMID"))
		If nEoFormId <= kMaxFormId Then
			nRowNum = arrFormIdWithRow(nEoFormID)
		End If

		If nRowNum > 0 Then
			Call SetLoadedRIKValue( GetFormFieldName(2, nRowNum, nColumnDispl), GetSafeLng(objRS("SUMMA"), 0) )
		End If
		objRS.MoveNext
	WEnd
End Sub
%>