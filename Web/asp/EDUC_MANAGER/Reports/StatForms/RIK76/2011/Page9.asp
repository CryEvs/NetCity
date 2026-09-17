<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColForRowRange(10, 7, 1, 12, [3, 5]);
	SumColForRowRange(10, 8, 1, 12, [4, 6]);
	SumRowAllColsByIndex(10,13,3,8, [1,3,5,7,9,11]);
	SumRowAllColsByIndex(10,14,3,8, [2,4,6,8,10,12]);

	ValidateIncludedCols(10, 3, [4], 1, 12 );
	ValidateIncludedCols(10, 5, [6], 1, 12 );
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section10_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
	Dim objCityRes, objProvinceRes, sourceFormId

	sourceFormId = GetSourceFormId()

	If Not IsMns() Then
		Call GetEOSumValues("T090103", sourceFormId, 12, 1, 3, Null)
	End If
	Call GetEOSumValues("T090203", sourceFormId, 12, 2, 3, Null)
	Call GetEOSumValues("T090303", sourceFormId, 12, 3, 3, Null)

	Call objSchoolFormComponent.CalcSplittedTableStatFormParameters(strEMID, strCommonYearID, , , , sourceFormId, 14, 1, 8, 3, 6, objCityRes, objProvinceRes, bFormSpec)
	Call ClearForm
	Call CommonProcessParams(objCityRes, 0)
	Call CommonProcessParams(objProvinceRes, 2)
End Sub

Sub CommonProcessParams(objRS, nColumnDispl)
	Dim nRow, nCol, nValue
	Dim strFieldName
	Dim nCnt, arrValue

	While Not objRS.EOF
		nRow = GetSafeLng(objRS("CELLROW"), Null)
		nCol = GetSafeLng(objRS("CELLCOLUMN"), Null)
		
		nRow = nRow * 2 - 1
		If nCol > 4 Then
			nCol = nCol - 2
			nRow = nRow + 1
		End If
		nCol = nCol + nColumnDispl

		If nRow = 16 Then
			nRow = 15
		End If

		nValue = GetSafeLng(objRS("SUMMA"), 0)
		If nValue > 0 Then
			strFieldName = GetFormFieldName(10, nRow, nCol)
			If (Not (nRow Mod 2 <> 0 and nRow <= 11 and IsMns())) Then
				Call SetLoadedRIKValue(strFieldName, nValue)
			End If
		End If
		objRS.MoveNext
	WEnd
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 6
		For nRow = 1 to 15
			Call SetLoadedRIKValue(GetFormFieldName(10, nRow, nCol), "")
		Next
	Next
End Sub
%>

