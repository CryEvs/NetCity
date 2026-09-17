<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllColsByIndex('07.3', 1, 3, 31, [2,3,7,8]);

	ValidateIncludedRows('07.3', 3, [4,5,6], 3, 31)
	ValidateIncludedCols('07.3', 3, [6], 1, 8);
	ValidateIncludedCols('07.3', 3, [7,8], 1, 8);
	ValidateIncludedCols('07.3', 3, [9], 1, 8);
	ValidateIncludedCols('07.3', 3, [10,11,12,13], 1, 8);
	ValidateIncludedCols('07.3', 14, [15], 1, 8);
	ValidateIncludedCols('07.3', 16, [17], 1, 8);
	ValidateIncludedCols('07.3', 18, [19], 1, 8);
	ValidateIncludedCols('07.3', 3, [16,18,20,21], 1, 8);
	ValidateIncludedCols('07.3', 3, [22,23,24,25,26], 1, 8);
	ValidateIncludedCols('07.3', 3, [27,28,29], 1, 8);
	ValidateIncludedCols('07.3', 29, [30], 1, 8);
	ValidateIncludedCols('07.3', 30, [31], 1, 8);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section7.3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objEmpl
	Dim cellRow, cellCol, cellValue
	
	Set objEmpl = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(11), , GetSourceFormId(), 6, 1, 16, 3, 31)
	While Not objEmpl.EOF
		cellRow = GetDO1RowNum(CInt(objEmpl("CELLROW")))
		cellCol = objEmpl("CELLCOLUMN")
		cellValue = objEmpl("SUMMA")

		If cellRow > 0 Then Call SetLoadedRIKValue( GetFormFieldName("07.3", cellRow, cellCol), cellValue )
		objEmpl.MoveNext
	WEnd
End Sub
%>