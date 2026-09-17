<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColForRowRange(4, 11, 1, 17, [3, 7]);
	SumColForRowRange(4, 12, 1, 17, [4, 8]);
	SumColForRowRange(4, 13, 1, 17, [5, 9]);
	SumColForRowRange(4, 14, 1, 17, [6, 10]);

	SumRowAllCols(4,7,3,15,1,6);
	SumRowAllCols(4,13,3,15,8,12);
	SumRowAllCols(4,17,3,15,14,16);
	SumRowAllColsByIndex(4,18,3,15,[7,13,17]);

	ValidateIncludedCols(4, 4, [5], 1, 6);
	ValidateIncludedCols(4, 4, [6], 1, 6);
	ValidateIncludedCols(4, 4, [5], 8, 12);
	ValidateIncludedCols(4, 4, [6], 8, 12);
	ValidateIncludedCols(4, 4, [5], 14, 16);
	ValidateIncludedCols(4, 4, [6], 14, 16);

	ValidateIncludedCols(4, 8, [9], 1, 6);
	ValidateIncludedCols(4, 8, [10], 1, 6);
	ValidateIncludedCols(4, 8, [9], 8, 12);
	ValidateIncludedCols(4, 8, [10], 8, 12);
	ValidateIncludedCols(4, 8, [9], 14, 16);
	ValidateIncludedCols(4, 8, [10], 14, 16);

	ValidateDividedCols(4, 12, [15], 1, 6);
	ValidateDividedCols(4, 12, [15], 8, 12);
	ValidateDividedCols(4, 12, [15], 14, 16);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objCityRes, objProvinceRes, sourceFormId

	sourceFormId = GetSourceFormId()

	Call objSchoolFormComponent.CalcSplittedTableStatFormParameters(strEMID, strCommonYearID, Array(2,5,6,7,13), , , sourceFormId, 4, 1, 14, 3, 7, objCityRes, objProvinceRes, bFormSpec)
	Call ClearForm
	Call CommonProcessParams(objCityRes, 0)
	Call CommonProcessParams(objProvinceRes, 4)

	Call GetGEOSumValues("T0419", sourceFormId, 4, 26, 3, Null)

	Call GetSplitEOSumValuesForEOForms("T042003", "T042006", Array( _
		GetFormParameter(sourceFormId, 4, 1, 4, Null), _
		GetFormParameter(sourceFormId, 4, 2, 4, Null), _
		GetFormParameter(sourceFormId, 4, 3, 4, Null), _
		GetFormParameter(sourceFormId, 4, 4, 4, Null), _
		GetFormParameter(sourceFormId, 4, 5, 4, Null), _
		GetFormParameter(sourceFormId, 4, 6, 4, Null)), _
		Array(7,8,9,18))
	Call GetSplitEOSumValuesForEOForms("T042004", "T042007", Array( _
		GetFormParameter(sourceFormId, 4, 1, 4, Null), _
		GetFormParameter(sourceFormId, 4, 2, 4, Null), _
		GetFormParameter(sourceFormId, 4, 3, 4, Null), _
		GetFormParameter(sourceFormId, 4, 4, 4, Null), _
		GetFormParameter(sourceFormId, 4, 5, 4, Null), _
		GetFormParameter(sourceFormId, 4, 6, 4, Null)), _
		Array(19))
	Call GetSplitEOSumValuesForEOForms("T042005", "T042008", Array( _
		GetFormParameter(sourceFormId, 4, 1, 4, Null), _
		GetFormParameter(sourceFormId, 4, 2, 4, Null), _
		GetFormParameter(sourceFormId, 4, 3, 4, Null), _
		GetFormParameter(sourceFormId, 4, 4, 4, Null), _
		GetFormParameter(sourceFormId, 4, 5, 4, Null), _
		GetFormParameter(sourceFormId, 4, 6, 4, Null)), _
		Array(20,21,22,23,24,27,28,29))
End Sub

Sub CommonProcessParams(objRS, nColumnDispl)
	Dim nRow, nCol, nValue
	Dim strFieldName
	Dim nCnt, arrValue

	While Not objRS.EOF

		nRow = GetSafeLng(objRS("CELLROW"), Null)
		If nRow >= 7 And nRow <= 11 Then
			nRow = nRow + 1
		ElseIf nRow >= 12 Then
			nRow = nRow + 2
		End If

		nCol = GetSafeLng(objRS("CELLCOLUMN"), Null)
		If nCol = 7 Then
			' Для девочек
			nCol = 15
		Else
			nCol = nCol + nColumnDispl
		End If

		nValue = GetSafeLng(objRS("SUMMA"), 0)
		If nValue > 0 Then
			strFieldName = GetFormFieldName(4, nRow, nCol)

			If nCol = 15 And nColumnDispl > 0 Then
				' Для девочек - для сельской местности надо сложить с уже сохранённым значением для города
				arrValue = GetLoadedRIKValue(strFieldName)
				If IsArray(arrValue) Then
					nCnt = GetSafeLng(arrValue(1), 0)
					nValue = nValue + nCnt
				End If
			End If

			If (Not ((nCol=3 or nCol=7) and IsMns())) Then
				Call SetLoadedRIKValue(strFieldName, nValue)
			End If
		End If
		objRS.MoveNext
	WEnd
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 10
		For nRow = 1 to 16
			Call SetLoadedRIKValue(GetFormFieldName(4, nRow, nCol), "")
		Next
	Next
	
	For nRow = 1 to 16
		Call SetLoadedRIKValue(GetFormFieldName(4, nRow, 15), "")
	Next
	
	For nCol = 3 to 8
		Call SetLoadedRIKValue(GetFormFieldName(4, 20, nCol), "")
	Next
End Sub
%>

