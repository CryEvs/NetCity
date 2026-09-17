<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> <!--
function CalculateOSH() {
	SumRowAllCols('01.1', 2, 3, 30, 3, 6);
	SumRowAllCols('01.1', 8, 3, 30, 9, 28);

	SumRowAllColsByIndex('01.1', 7, 3, 30, [8, 29, 30, 31, 32, 33, 34, 35]);
	SumRowAllColsByIndex('01.1', 1, 3, 30, [2, 7, 38, 40]);
	SumRowAllColsByIndex('01.1', 41, null, null, [43, 44]);

	ValidateIncludedCells('01.1', 41, null, [42], null); 

	ValidateDividedRows('01.1', 7, [36], 3, 30);
	ValidateDividedRows('01.1', 7, [37], 3, 30);

	ValidateIncludedRowsWithIncludedRows('01.1', [7, 38], [39], 3, 30);

	ValidateDividedCols('01.1', 3, [5, 8], 1, 40);
	ValidateIncludedCols('01.1', 3, [6, 7], 1, 40);
	ValidateEqIncludedCols('01.1', 3, [9, 10, 11, 12], 1, 40);
	ValidateDividedCols('01.1', 13, [14], 1, 40);
	ValidateIncludedCols('01.1', 3, [15, 17, 19, 20], 1, 40);
	ValidateDividedCols('01.1', 15, [16], 1, 40);
	ValidateDividedCols('01.1', 17, [18], 1, 40);
	ValidateIncludedCols('01.1', 3, [21, 22, 23, 24, 25], 1, 40);
	ValidateIncludedCols('01.1', 3, [26, 27, 28], 1, 40);
	ValidateDividedCols('01.1', 28, [29], 1, 40);
	ValidateDividedCols('01.1', 29, [30], 1, 40);

	ValidateCell('01.1', 8, 3, [45], null);
	ValidateCell('01.1', 2, 3, [46], null);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objRes, sourceFormId

	sourceFormId = GetSourceFormId()

	Call ClearForm

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(2,5,6,7,9,10,11,12,13), , , sourceFormId, 1, 1, 40, 3, 30, objRes, False, bFormSpec)
	Call CommonProcessParams(objRes, True, 0)

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(2,5,6,7,9,10,11,12,13), , , sourceFormId, 1, 41, 44, -1, -1, objRes, False, bFormSpec)
	Call CommonProcessParams(objRes, False, 0)

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(2,5,6,7,9,10,11,12,13), , , sourceFormId, 1, 47, 48, -1, -1, objRes, False, bFormSpec)
	Call CommonProcessParams(objRes, False, -2)
End Sub

Sub CommonProcessParams(objRS, bExistColumn, nRowDifference)
	Dim nRow, nCol, nValue
	Dim strFieldName

	While Not objRS.EOF
		nRow = GetSafeLng(objRS("CELLROW"), Null)

		If Not IsDull(nRow) Then
			nRow = nRow + nRowDifference
		End If

		If bExistColumn Then 
			nCol = GetSafeLng(objRS("CELLCOLUMN"), Null)
		Else
			nCol = -1 'Для случаев, где один столбец, например, справки к разделам
		End If
		
		nValue = GetSafeLng(objRS("SUMMA"), 0)
		If nValue > 0 Then
			strFieldName = GetFormFieldName("01.1", nRow, nCol)

			Call SetLoadedRIKValue(strFieldName, nValue)
		End If
		objRS.MoveNext
	WEnd
End Sub

Sub ClearForm()
	Dim nRow, nCol

	For nCol = 3 to 30
		For nRow = 1 to 40
			Call SetLoadedRIKValue(GetFormFieldName("01.1", nRow, nCol), "")
		Next
	Next

	For nRow = 41 to 46
		Call SetLoadedRIKValue("T01.1" & nRow, "")
	Next
End Sub
%>