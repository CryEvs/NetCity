<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	SumRowAllColsByIndex(10, 2, 3, 30, [3, 4, 5, 6]);
	SumRowAllColsByIndex(10, 8, 3, 30, [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
	SumRowAllColsByIndex(10, 7, 3, 30, [8, 28, 29, 30, 31, 32, 33, 34]);
	SumRowAllColsByIndex(10, 1, 3, 30, [2, 7, 37, 38]);
	SumRowAllColsByIndex(10, 39, 3, 3, [41, 42]);
	
	ValidateIncludedRows(10, 39, [40], 3, 3);
	ValidateIncludedRows(10, 1, [43], 3, 3);
	ValidateIncludedRows(10, 2, [46], 3, 3);
	ValidateIncludedRows(10, 8, [45], 3, 3);
	ValidateDividedCols(10, 3, [5], 3, 30);
	ValidateDividedCols(10, 3, [6, 7], 3, 30);
	ValidateDividedCols(10, 3, [8], 3, 30);
	ValidateDividedCols(10, 3, [9, 10, 11, 12], 3, 30);
	ValidateDividedCols(10, 13, [14], 3, 30);
	ValidateDividedCols(10, 3, [15, 16, 17, 18, 19, 20], 3, 30);
	ValidateDividedCols(10, 3, [21, 22, 23, 24, 25]);
	ValidateDividedCols(10, 3, [26, 27, 28, 29, 30], 3, 30);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section10_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objFirstPart, objSecondPart
	Dim sourceFormId

	sourceFormId = GetSourceFormId()
	
	Set objFirstPart = objSchoolFormComponent.CalcTableStatFormParameters(strEMID, strCommonYearID, Array(8), , ,sourceFormId, 9, 3, 6, 3, 30)
	Set objSecondPart = objSchoolFormComponent.CalcTableStatFormParameters(strEMID, strCommonYearID, Array(8), , ,sourceFormId, 9, 9, 38, 3, 30)
	
	Call CommonProcessParams(objFirstPart)
	Call CommonProcessParams(objSecondPart)
	
	Call GetEOSumValuesForEOTypes("T104003", sourceFormId, 9, 40, -1, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T104103", sourceFormId, 9, 41, -1, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T104203", sourceFormId, 9, 42, -1, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T104303", sourceFormId, 9, 43, -1, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T104403", sourceFormId, 9, 44, -1, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T104503", sourceFormId, 9, 45, -1, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T104603", sourceFormId, 9, 46, -1, Empty, Array(8))
End Sub

Sub CommonProcessParams(objTable)
	Dim i, j, nValue, nRow, nCol, strFieldName
	
	While Not objTable.EoF
		nRow = GetSafeLng(objTable("CELLROW"), Null)
		nCol = GetSafeLng(objTable("CELLCOLUMN"), Null)
		nValue = GetSafeLng(objTable("SUMMA"), 0)
		
		If nValue > 0 Then
			strFieldName = GetFieldName(10, nRow, nCol)
			Call SetLoadedRIKValue(strFieldName, nValue)
		End If
		objTable.MoveNext
	WEnd
End Sub
%>

