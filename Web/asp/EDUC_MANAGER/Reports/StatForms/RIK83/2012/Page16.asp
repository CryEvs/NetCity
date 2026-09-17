<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 16
End Function

Sub SpecialOnHead()
%>
<script> <!--
function CalculateOSH() {
	var strSection = '02.4';
	var rowsCount = 8;

	SumRowAllColsByIndex(strSection, 1, 3, 30, [2, 3, 6, 8]);

	ValidateDividedRows(strSection, 3, [4], 3, 30);
	ValidateDividedRows(strSection, 3, [5], 3, 30);

	ValidateIncludedRowsWithIncludedRows(strSection, [3, 6], [7], 3, 30);

	ValidateDividedCols(strSection, 3, [5, 8], 1, rowsCount);
	ValidateIncludedCols(strSection, 3, [6, 7], 1, rowsCount);
	ValidateIncludedCols(strSection, 3, [9, 10, 11, 12], 1, rowsCount);
	ValidateDividedCols(strSection, 13, [14], 1, rowsCount);
	ValidateIncludedCols(strSection, 3, [15, 17, 19, 20], 1, rowsCount);
	ValidateDividedCols(strSection, 15, [16], 1, rowsCount);
	ValidateDividedCols(strSection, 17, [18], 1, rowsCount);
	ValidateIncludedCols(strSection, 3, [21, 22, 23, 24, 25], 1, rowsCount);
	ValidateIncludedCols(strSection, 3, [26, 27, 28], 1, rowsCount);
	ValidateDividedCols(strSection, 28, [29], 1, rowsCount);
	ValidateDividedCols(strSection, 29, [30], 1, rowsCount);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.4_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objRes, sourceFormId

	sourceFormId = GetSourceFormId()

	Call ClearForm

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), , , sourceFormId, 1, 1, 2, 3, 30, objRes, True, bFormSpec)
	Call CommonProcessParams(objRes, 0)

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), , , sourceFormId, 1, 7, 8, 3, 30, objRes, True, bFormSpec)
	Call CommonProcessParams(objRes, -4)

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), , , sourceFormId, 1, 36, 36, 3, 30, objRes, True, bFormSpec)
	Call CommonProcessParams(objRes, -31)

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), , , sourceFormId, 1, 38, 40, 3, 30, objRes, True, bFormSpec)
	Call CommonProcessParams(objRes, -32)
End Sub

Sub CommonProcessParams(objRS, nRowDifference)
	Dim nRow, nCol, nValue
	Dim strFieldName

	While Not objRS.EOF
		nRow = GetSafeLng(objRS("CELLROW"), Null)

		If Not IsDull(nRow) Then
			nRow = nRow + nRowDifference
		End If

		nCol = GetSafeLng(objRS("CELLCOLUMN"), Null)
		
		nValue = GetSafeLng(objRS("SUMMA"), 0)
		If nValue > 0 Then
			strFieldName = GetFormFieldName("02.4", nRow, nCol)

			Call SetLoadedRIKValue(strFieldName, nValue)
		End If
		objRS.MoveNext
	WEnd
End Sub

Sub ClearForm()
	Dim nRow, nCol

	For nCol = 3 to 30
		For nRow = 1 to 8
			Call SetLoadedRIKValue(GetFormFieldName("02.4", nRow, nCol), "")
		Next
	Next
End Sub%>