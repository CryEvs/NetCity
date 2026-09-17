<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim arrayValues

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	ValidateDividedRows(2, 19, [20], 4, 13);
	ValidateDividedRows(2, 21, [22], 4, 13);
	ValidateDividedRows(2, 26, [27], 4, 13);
	ValidateDividedRows(2, 49, [50,51], 4, 13);
	ValidateDividedRows(2, 49, [53], 4, 13);
	ValidateDividedRows(2, 49, [55], 4, 13);
	ValidateDividedRows(2, 49, [65], 4, 13);
	ValidateDividedRows(2, 53, [54], 4, 13);
	ValidateDividedRows(2, 55, [56], 4, 13);
	ValidateDividedRows(2, 57, [58,59,60], 4, 13);
	ValidateDividedRows(2, 57, [61,62,63,64], 4, 13);
	ValidateDividedRows(2, 65, [66], 4, 13);
	SumColForRowRange(2, 3, 1, 80, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
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

Sub AutoCalcEMInfo( )
	Dim objCityRS, objProvinceRes
	Dim arrPivotParams
	Dim sourceFormId

	sourceFormId = GetSourceFormId()
	
	arrPivotParams = Array(_
		GetFormParameter(sourceFormId, 13, 1, 3, Null), _
		GetFormParameter(sourceFormId, 13, 2, 3, Null), _
		GetFormParameter(sourceFormId, 13, 3, 3, Null), _
		GetFormParameter(sourceFormId, 13, 4, 3, Null), _
		GetFormParameter(sourceFormId, 13, 5, 3, Null), _
		GetFormParameter(sourceFormId, 13, 6, 3, Null), _
		GetFormParameter(sourceFormId, 13, 7, 3, Null), _
		GetFormParameter(sourceFormId, 13, 8, 3, Null), _
		GetFormParameter(sourceFormId, 13, 9, 3, Null), _
		GetFormParameter(sourceFormId, 13, 10, 3, Null), _
		GetFormParameter(sourceFormId, 13, 11, 3, Null), _
		GetFormParameter(sourceFormId, 13, 12, 3, Null), _
		GetFormParameter(sourceFormId, 13, 13, 3, Null), _
		GetFormParameter(sourceFormId, 13, 14, 3, Null), _
		GetFormParameter(sourceFormId, 13, 15, 3, Null), _
		GetFormParameter(sourceFormId, 13, 16, 3, Null), _
		GetFormParameter(sourceFormId, 13, 17, 3, Null), _
		GetFormParameter(sourceFormId, 13, 18, 3, Null), _
		GetFormParameter(sourceFormId, 13, 19, 3, Null), _
		GetFormParameter(sourceFormId, 13, 20, 3, Null), _
		GetFormParameter(sourceFormId, 13, 21, 3, Null), _
		GetFormParameter(sourceFormId, 13, 22, 3, Null), _
		GetFormParameter(sourceFormId, 13, 23, 3, Null), _
		GetFormParameter(sourceFormId, 13, 24, 3, Null), _
		GetFormParameter(sourceFormId, 13, 25, 3, Null), _
		GetFormParameter(sourceFormId, 13, 26, 3, Null), _
		GetFormParameter(sourceFormId, 13, 27, 3, Null), _
		GetFormParameter(sourceFormId, 13, 28, 3, Null), _
		GetFormParameter(sourceFormId, 13, 29, 3, Null), _
		GetFormParameter(sourceFormId, 13, 30, 3, Null), _
		GetFormParameter(sourceFormId, 13, 31, 3, Null), _
		GetFormParameter(sourceFormId, 13, 32, 3, Null), _
		GetFormParameter(sourceFormId, 13, 33, 3, Null), _
		GetFormParameter(sourceFormId, 13, 34, 3, Null), _
		GetFormParameter(sourceFormId, 13, 35, 3, Null), _
		GetFormParameter(sourceFormId, 13, 36, 3, Null), _
		GetFormParameter(sourceFormId, 13, 37, 3, Null), _
		GetFormParameter(sourceFormId, 13, 38, 3, Null), _
		GetFormParameter(sourceFormId, 13, 39, 3, Null), _
		GetFormParameter(sourceFormId, 13, 40, 3, Null), _
		GetFormParameter(sourceFormId, 13, 41, 3, Null), _
		GetFormParameter(sourceFormId, 13, 42, 3, Null), _
		GetFormParameter(sourceFormId, 13, 43, 3, Null), _
		GetFormParameter(sourceFormId, 13, 44, 3, Null), _
		GetFormParameter(sourceFormId, 13, 45, 3, Null), _
		GetFormParameter(sourceFormId, 13, 46, 3, Null), _
		GetFormParameter(sourceFormId, 13, 47, 3, Null), _
		GetFormParameter(sourceFormId, 13, 48, 3, Null), _
		GetFormParameter(sourceFormId, 13, 49, 3, Null), _
		GetFormParameter(sourceFormId, 13, 50, 3, Null), _
		GetFormParameter(sourceFormId, 13, 51, 3, Null), _
		GetFormParameter(sourceFormId, 13, 52, 3, Null), _
		GetFormParameter(sourceFormId, 13, 53, 3, Null), _
		GetFormParameter(sourceFormId, 13, 54, 3, Null), _
		GetFormParameter(sourceFormId, 13, 55, 3, Null), _
		GetFormParameter(sourceFormId, 13, 56, 3, Null), _
		GetFormParameter(sourceFormId, 13, 57, 3, Null), _
		GetFormParameter(sourceFormId, 13, 58, 3, Null), _
		GetFormParameter(sourceFormId, 13, 59, 3, Null), _
		GetFormParameter(sourceFormId, 13, 60, 3, Null), _
		GetFormParameter(sourceFormId, 13, 61, 3, Null), _
		GetFormParameter(sourceFormId, 13, 62, 3, Null), _
		GetFormParameter(sourceFormId, 13, 63, 3, Null), _
		GetFormParameter(sourceFormId, 13, 64, 3, Null), _
		GetFormParameter(sourceFormId, 13, 65, 3, Null), _
		GetFormParameter(sourceFormId, 4, 15, 4, Null) _
		)
		
	Call GetSplittedPivot(strEMID, strCommonYearID, sourceFormId ,arrPivotParams,Array(2, 5, 6, 7, 9, 10, 11, 12, 13), Empty, false, objCityRS, objProvinceRes)
	Call CommonProcessParams(objProvinceRes)
End Sub

Sub CommonProcessParams(objTable)
	Dim i, j, nValue, strFieldName, nEoTypeId, nEoFormId, nStudentCount
	ReDim arrayValues(79,9)
	
	While Not objTable.EoF
		nEoTypeId = GetSafeLng(objTable("EOTYPEID"), 0)
		nEoFormId = GetSafeLng(objTable("EOFORMID"), 0)
		nStudentCount = GetSafeLng(objTable("VALUE65"), 0)
		
		nValue = GetSafeLng(objTable("VALUE"), 0)
		Call FillArray(0, nEoTypeId, nEoFormId, 1)
		Call FillArray(1, nEoTypeId, nEoFormId, nValue)
		
		Call Fill(1, 3, 2, False, nEoTypeId, nEoFormId, objTable)
		
		nValue = GetSafeLng(objTable("VALUE4"), 0)
		If nValue = 0 Then 
			Call FillArray(5, nEoTypeId, nEoFormId, 1)
		Else 
			Call FillArray(6, nEoTypeId, nEoFormId, nValue)
		End If
		
		nValue = GetSafeLng(objTable("VALUE5"), 0)
		If nValue > 0 Then Call FillArray(7, nEoTypeId, nEoFormId, nValue)
		
		Call FillCountAndSum(6, 8, nEoTypeId, nEoFormId, objTable)
		
		Call Fill(7, 10, 10, True, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(11, 14, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(12, 16, nEoTypeId, nEoFormId, objTable)
		
		Call Fill(13, 14, 18, True, nEoTypeId, nEoFormId, objTable)
		
		Call Fill(15, 18, 20, False, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(19, 24, nEoTypeId, nEoFormId, objTable)
		
		nValue = GetSafeLng(objTable("VALUE20"), 0)
		If nValue > 0 Then Call FillArray(26, nEoTypeId, nEoFormId, nValue)	
		
		nValue = GetSafeLng(objTable("VALUE21"), 0)
		If nValue > 0 Then Call FillArray(27, nEoTypeId, nEoFormId, 1)	
		
		nValue = GetSafeLng(objTable("VALUE22"), 0)
		If nValue > 0 Then 
			Call FillArray(28, nEoTypeId, nEoFormId, nValue)	
			Call FillArray(29, nEoTypeId, nEoFormId, nStudentCount)
		End If
		
		nValue = GetSafeLng(objTable("VALUE23"), 0)
		If nValue > 0 Then Call FillArray(30, nEoTypeId, nEoFormId, 1)
		
		nValue = GetSafeLng(objTable("VALUE24"), 0)
		If nValue > 0 Then 
			Call FillArray(31, nEoTypeId, nEoFormId, nValue)
			Call FillArray(32, nEoTypeId, nEoFormId, nStudentCount)
		End If
		
		nValue = GetSafeLng(objTable("VALUE25"), 0)
		If nValue > 0 Then 
			Call FillArray(33, nEoTypeId, nEoFormId, 1)
			Call FillArray(34, nEoTypeId, nEoFormId, nStudentCount)
		End If
		
		Call Fill(26, 28, 35, True, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(29, 38, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(30, 40, nEoTypeId, nEoFormId, objTable)
		
		nValue = GetSafeLng(objTable("VALUE31"), 0)
		If nValue > 0 Then Call FillArray(42, nEoTypeId, nEoFormId, nValue)
		
		Call FillCountAndSum(32, 43, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(33, 45, nEoTypeId, nEoFormId, objTable)
		
		Call Fill(34, 37, 47, False, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(38, 51, nEoTypeId, nEoFormId, objTable)
		
		Call Fill(39, 41, 53, False, nEoTypeId, nEoFormId, objTable)
		
		Call Fill(42, 49, 56, True, nEoTypeId, nEoFormId, objTable)
		
		nValue = GetSafeLng(objTable("VALUE50"), 0)
		If nValue > 0 Then Call FillArray(64, nEoTypeId, nEoFormId, nValue)
		
		nValue = GetSafeLng(objTable("VALUE51"), 0)
		If nValue > 0 Then Call FillArray(65, nEoTypeId, nEoFormId, nValue)
		
		Call Fill(52, 60, 66, True, nEoTypeId, nEoFormId, objTable)
		
		Call FillCountAndSum(61, 75, nEoTypeId, nEoFormId, objTable)
		
		Call Fill(62, 64, 77, True, nEoTypeId, nEoFormId, objTable)
		
		objTable.MoveNext
	WEnd
	
	For i = 0 to 79
		For j = 0 to 9
			Call SetLoadedRIKValue( GetFieldName(2, i + 1, j + 4),  arrayValues(i,j))
		Next
	Next
End Sub

Sub Fill(startValue, endValue, startRow, bIsCount, nEoTypeId, nEoFormId, objTable)
	Dim i, nValue
	
	For i = startValue to endValue
		nValue = GetSafeLng(objTable("VALUE" & i), 0)
		If nValue > 0 Then 
			nValue = IIF(bIsCount, 1, nValue)
			Call FillArray(startRow, nEoTypeId, nEoFormId, nValue)
		End If
		startRow = startRow + 1
	Next
End Sub

Sub FillCountAndSum(startValue, startRow, nEoTypeId, nEoFormId, objTable)
	Dim nValue
	
	nValue = GetSafeLng(objTable("VALUE" & startValue), 0)
	If nValue > 0 Then 
		Call FillArray(startRow, nEoTypeId, nEoFormId, 1)
		Call FillArray(startRow + 1, nEoTypeId, nEoFormId, nValue)
	End If
End Sub
		
Sub FillArray(nRow, nEoTypeId, nEoFormId, nValue)
	Dim nCol
	If nEoTypeId = 2 Then
		nCol = 0	
	ElseIf nEoTypeId = 5 Then
		nCol = 1
	ElseIf nEoTypeId = 6 Then
		If nEoFormId = 27 Then 
			nCol = 4
		Else
			nCol = 2
		End If
	ElseIf nEoTypeId = 7 Then
		nCol = 3
	ElseIf nEoTypeId = 11 Then
		nCol = 5
	ElseIf nEoTypeId = 10 Then
		nCol = 6
	ElseIf nEoTypeId = 12 Then
		nCol = 7	
	ElseIf nEoTypeId = 13 Then
		nCol = 8
	ElseIf nEoTypeId = 9 Then
		nCol = 9
	End If
	
	arrayValues(nRow, nCol) = IIF(isDull(arrayValues(nRow, nCol)), nValue, arrayValues(nRow, nCol) + nValue)
End Sub
%>