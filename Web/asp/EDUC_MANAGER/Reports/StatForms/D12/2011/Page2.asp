<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	ValidateDividedRows(1, 6, [7], 3, 5);
	SumColForRowRange(1, 6, 1, 15, [3, 4, 5]);
	SumRowAllColsByIndex(1, 1, 3, 6, [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15]);
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
	Dim objTable, sourceFormId

	sourceFormId = GetSourceFormId()
	
	Call GetEOSumValuesForEOTypes("T010203", sourceFormId, 15, 2, 3, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010204", sourceFormId, 15, 2, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010205", sourceFormId, 15, 2, 5, Empty,  Array(2,5,7))
	
	Call GetEOSumValuesForEOTypes("T010303", sourceFormId, 15, 3, 3, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010304", sourceFormId, 15, 3, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010305", sourceFormId, 15, 3, 5, Empty,  Array(2,5,7))
	
	Call GetEOSumValuesForEOTypes("T010403", sourceFormId, 15, 4, 3, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010404", sourceFormId, 15, 4, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010405", sourceFormId, 15, 4, 5, Empty,  Array(2,5,7))
	
	Call GetEOSumValuesForEOTypes("T010504", sourceFormId, 15, 5, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010505", sourceFormId, 15, 5, 5, Empty,  Array(2,5,7))
	
	Call GetEOSumValuesForEOTypes("T010603", sourceFormId, 15, 6, 3, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010604", sourceFormId, 15, 6, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010605", sourceFormId, 15, 6, 5, Empty,  Array(2,5,7))
	
	Call GetEOSumValuesForEOTypes("T010703", sourceFormId, 15, 7, 3, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010704", sourceFormId, 15, 7, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010705", sourceFormId, 15, 7, 5, Empty,  Array(2,5,7))
	
	Call GetEOSumValuesForEOTypes("T010804", sourceFormId, 15, 8, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T010805", sourceFormId, 15, 8, 5, Empty,  Array(2,5,7))
	
	Set objTable = objSchoolFormComponent.CalcTableStatFormParameters(strEMID, strCommonYearID, , , ,sourceFormId, 15, 9, 14, 3, 5, bFormSpec)
	Call CommonProcessParams(objTable)
	
	Call GetEOSumValuesForEOTypes("T011503", sourceFormId, 15, 16, 3, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T011504", sourceFormId, 15, 16, 4, Empty,  Array(2,5,7))
	Call GetEOSumValuesForEOTypes("T011505", sourceFormId, 15, 16, 5, Empty,  Array(2,5,7))
End Sub

Sub CommonProcessParams(objTable)
	Dim i, j, nValue, nRow, nCol, strFieldName
	
	While Not objTable.EoF
		nRow = GetSafeLng(objTable("CELLROW"), Null)
		nCol = GetSafeLng(objTable("CELLCOLUMN"), Null)
		nValue = GetSafeLng(objTable("SUMMA"), 0)
		
		If nValue > 0 Then
			strFieldName = GetFieldName(1, nRow, nCol)
			Call SetLoadedRIKValue(strFieldName, nValue)
		End If
		objTable.MoveNext
	WEnd
End Sub
%>
