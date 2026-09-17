<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	SumColForRowRange(3, 8, 1, 8, [4,6,7]);
	SumRowAllColsByIndex(3, 7, 3, 10, [4,5,6]);
	SumRowAllColsByIndex(3, 8, 3, 10, [1,2,3,7]);
	ValidateDividedCols(3, 8, [9,10], 1, 6);
	ValidateDividedRows(3, 9, [10], 3, 3);
	ValidateDividedRows(3, 11, [12], 3, 3);
	ValidateDividedRows(3, 17, [18], 3, 3);
	ValidateCell(3, 5, 8, [17], 3);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim i, j, ArrValue
	ReDim ArrValue(2,0)

	ArrValue = CalcStringValue()
	For i = 1 To 3
		Call SetLoadedRIKValue( GetFieldName(2, i, 3), ArrValue((i-1),0)) 
	Next
	For i = 1 To 6
		For j = 1 to 8
			if j <> 6 Then 
				Call GetEOSumValuesForEOTypes(GetFieldName(3, i, j+2), GetSourceFormId(), 3, i, j + 2, Empty, Array(8))
			End if
		Next
	Next
	For i = 8 To 16
		Call GetEOSumValuesForEOTypes(GetFieldName(3, i+1, 3), GetSourceFormId(), 3, i, -1,  Empty, Array(8))
	Next
End Sub

Function CalcStringValue()
	Dim arrAssignments,objCityRS,objProvinceRes,objCityRSk,objProvinceResk,arrCounts
	Dim arrPivotParams
	ReDim arrCounts(2,0)
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	arrPivotParams = Array( _
		GetFormParameter(sourceFormId, 0, 1, 7, Null), _
		GetFormParameter(sourceFormId, 3, 7, 8, Null))

	Set objCityRS = GetPivot(strEMID, strCommonYearID, sourceFormId, arrPivotParams, Array(7), Empty, true)

	While Not objCityRS.EOF
			IF UCase(objCityRS("VALUE")) = "ДНЕМ" Then  
				arrCounts(0,0) = arrCounts(0,0) + CInt(iif(IsNull(objCityRS("VALUE1")),0,objCityRS("VALUE1")))
			End If    
			IF UCase(objCityRS("VALUE")) = "ВЕЧЕРОМ" Then  
				arrCounts(1,0) = arrCounts(1,0) + CInt(iif(IsNull(objCityRS("VALUE1")),0,objCityRS("VALUE1")))
			End If
			IF UCase(objCityRS("VALUE")) = "В ДВЕ СМЕНЫ" Then  
				arrCounts(2,0) = arrCounts(2,0) + CInt(iif(IsNull(objCityRS("VALUE1")),0,objCityRS("VALUE1")))
			End If
		objCityRS.MoveNext
	Wend
	CalcStringValue = arrCounts
End Function
%>

