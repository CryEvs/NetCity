<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols('07.1', 7, 3, 31, 8, 14);
	SumRowAllCols('07.1', 2, 3, 31, 3, 6);
	SumRowAllColsByIndex('07.1', 1, 3, 31, [2,7,15,16]);
	SumRowAllCols('07.1', 17, 3, 3, 19, 20);

	ValidateIncludedCols('07.1', 3, [6], 1, 16);
	ValidateIncludedCols('07.1', 3, [7,8], 1, 16);
	ValidateIncludedCols('07.1', 3, [9], 1, 16);
	ValidateIncludedCols('07.1', 3, [10,11,12,13], 1, 16);
	ValidateIncludedCols('07.1', 14, [15], 1, 16);
	ValidateIncludedCols('07.1', 16, [17], 1, 16);
	ValidateIncludedCols('07.1', 18, [19], 1, 16);
	ValidateIncludedCols('07.1', 3, [16,18,20,21], 1, 16);
	ValidateIncludedCols('07.1', 3, [22,23,24,25,26], 1, 16);
	ValidateIncludedCols('07.1', 3, [27,28,29], 1, 16);
	ValidateIncludedCols('07.1', 29, [30], 1, 16);
	ValidateIncludedCols('07.1', 30, [31], 1, 16);
	ValidateIncludedCells('07.1', 1, 3, [17], 3);
	ValidateIncludedCells('07.1', 17, 3, [18], 3);
	ValidateIncludedCells('07.1', 8, 3, [21], 3);
	ValidateIncludedCells('07.1', 2, 3, [22], 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section7.1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objEmpl
	Dim cellRow, cellCol, cellValue
	Dim sourceFormId

	sourceFormId = GetSourceFormId()
	
	Set objEmpl = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), , , sourceFormId, 6, 1, 16, 3, 31)
	While Not objEmpl.EOF
		cellRow = objEmpl("CELLROW")
		cellCol = objEmpl("CELLCOLUMN")
		cellValue = objEmpl("SUMMA")

		Call SetLoadedRIKValue( GetFormFieldName("07.1", cellRow, cellCol), cellValue )
		objEmpl.MoveNext
	WEnd

	Call GetEOSumValuesForEOTypes("T07.11703", sourceFormId, 6, 17, 3, Empty, Array(3) )
	Call GetEOSumValuesForEOTypes("T07.11803", sourceFormId, 6, 18, 3, Empty, Array(3)  )
	Call GetEOSumValuesForEOTypes("T07.11903", sourceFormId, 6, 19, 3, Empty, Array(3)  )
	Call GetEOSumValuesForEOTypes("T07.12003", sourceFormId, 6, 20, 3, Empty, Array(3)  )
	Call GetEOSumValuesForEOTypes("T07.12103", sourceFormId, 6, 21, 3, Empty, Array(3)  )
	Call GetEOSumValuesForEOTypes("T07.12203", sourceFormId, 6, 22, 3, Empty, Array(3)  )
End Sub
%>