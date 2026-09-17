<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Dim arrFormIdWithRow

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColAllRows(3, 3, 1, 12, 4, 5);
	SumRowAllCols(3, 1, 3, 18, 2, 9);

	ValidateIncludedCols(3, 3, [6], 1, 12);
	ValidateIncludedCols(3, 3, [7], 1, 12);
	ValidateIncludedCols(3, 3, [8], 1, 12);
	ValidateIncludedCols(3, 3, [9], 1, 12);
	ValidateIncludedCols(3, 3, [10], 1, 12);
	ValidateIncludedCols(3, 3, [11], 1, 12);
	ValidateIncludedCols(3, 3, [12], 1, 12);
	ValidateIncludedCols(3, 3, [13], 1, 12);
	ValidateIncludedCols(3, 3, [14], 1, 9);
	ValidateIncludedCols(3, 3, [15], 1, 12);
	ValidateIncludedCols(3, 3, [16], 1, 9);
	ValidateIncludedRows(3, 1, [10], 3, 18);
	ValidateIncludedRows(3, 1, [11], 3, 18);
	ValidateIncludedRows(3, 1, [12], 3, 18);
	ValidateIncludedCols(3, 17, [18], 1, 12);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim cityRes, provinceRes, objStudents
	Dim i, nRowNum, strRowNum
	Dim cellRow, cellCol, cellValue
	Dim sourceFormId
	
	' Соответствие между идентификатором вида учреждения и номером строки раздела
	ReDim arrFormIdWithRow(kMaxFormId)

	sourceFormId = GetSourceFormId()

	arrFormIdWithRow(10) = 2
	arrFormIdWithRow(11) = 3
	arrFormIdWithRow(12) = 4
	arrFormIdWithRow(14) = 5
	arrFormIdWithRow(15) = 6

	Call ClearAvtoCalcFields("T03",1,12,3,18)
	
	Call objSchoolFormComponent.CalcSplittedStatFormParametersByEoForm(strEmId, strCommonYearId, sourceFormId, 2, 1, 5, Empty, cityRes, provinceRes)
	Call CommonProcessParams(cityRes, 4)
	Call CommonProcessParams(provinceRes, 5)
	
	Call GetSplitEOSumValuesForEOTypes("T031004", "T031005", sourceFormId, 2, 1, 8, Empty, ArraY(3))
	Call GetSplitEOSumValuesForEOTypes("T031104", "T031105", sourceFormId, 2, 1, 9, Empty, Array(3))
	Call GetSplitEOSumValuesForEOTypes("T031204", "T031205", sourceFormId, 2, 1, 10, Empty, Array(3))
	
	'Строки со 2 по 9
	For i = kMinFormId To kMaxFormId
		nRowNum = arrFormIdWithRow(i)

		If nRowNum > 0 Then
			strRowNum = FormatValueIndex(nRowNum)
			Set objStudents = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(i), , sourceFormId, 2, 2, 10, 5, 5)
			While Not objStudents.EOF
				cellRow = CInt(objStudents("CELLROW"))
				If cellRow = 10 Then cellRow = cellRow + 1
				cellValue = objStudents("SUMMA")
				Call SetLoadedRIKValue( GetFormFieldName(3, nRowNum, cellRow + 4), cellValue )
				objStudents.MoveNext
			WEnd

			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(3, nRowNum, 14), sourceFormId, 2, 1, 6, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(3, nRowNum, 16), sourceFormId, 2, 1, 7, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(3, nRowNum, 17), sourceFormId, 3, 1, 4, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(3, nRowNum, 18), sourceFormId, 3, 2, 4, Empty, Array(3), Array(i) )
		End If
	Next
	
	'Строки с 10 по 12
	Set objStudents = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), , , sourceFormId, 2, 2, 10, 8, 10)
	While Not objStudents.EOF
		cellRow = objStudents("CELLROW")
		cellCol = objStudents("CELLCOLUMN")
		cellValue = objStudents("SUMMA")
		If cellRow = 10 Then cellRow = cellRow + 1
		Select Case cellCol
			Case 8
				cellCol = 10
			Case 9
				cellCol = 11
			Case 10
				cellCol = 12
		End Select
		Call SetLoadedRIKValue( GetFormFieldName(3, cellCol, cellRow + 4), cellValue )
		objStudents.MoveNext
	WEnd

	Call GetEOSumValuesForEOTypes("T031017", sourceFormId, 3, 1, 5, Empty, Array(3))
	Call GetEOSumValuesForEOTypes("T031018", sourceFormId, 3, 2, 5, Empty, Array(3))
	Call GetEOSumValuesForEOTypes("T031117", sourceFormId, 3, 1, 6, Empty, Array(3))
	Call GetEOSumValuesForEOTypes("T031118", sourceFormId, 3, 2, 6, Empty, Array(3))
	Call GetEOSumValuesForEOTypes("T031217", sourceFormId, 3, 1, 7, Empty, Array(3))
	Call GetEOSumValuesForEOTypes("T031218", sourceFormId, 3, 2, 7, Empty, Array(3))
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
			Call SetLoadedRIKValue( GetFormFieldName(3, nRowNum, nColumnDispl), GetSafeLng(objRS("SUMMA"), 0) )
		End If
		objRS.MoveNext
	WEnd
End Sub
%>