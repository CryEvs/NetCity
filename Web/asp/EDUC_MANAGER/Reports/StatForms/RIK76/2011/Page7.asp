<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim arrStudentsCount, arrHighSchoolStudents

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColForRowRange(5, 7, 1, 19, [3, 5]);
	SumColForRowRange(5, 8, 1, 19, [4, 6]);
	SumRowAllCols(5, 20, 3, 13, 1, 19);
	
	ValidateIncludedCols(5, 3, [4], 1, 19);
	ValidateIncludedCols(5, 5, [6], 1, 19);
	ValidateIncludedCols(5, 7, [9, 10, 11, 12], 1, 19);
	ValidateIncludedCols(5, 12, [13], 1, 19);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objCityRes, objProvinceRes, sourceFormId

	sourceFormId = GetSourceFormId()

	Call objSchoolFormComponent.CalcSplittedTableStatFormParameters(strEMID, strCommonYearID, Array(2,5,6,7,10,11,13), , Array(43, 44, 45), sourceFormId, 5, 1, 19, 3, 9, objCityRes, objProvinceRes, bFormSpec)
	Call ClearForm
	Call CommonProcessParams(objCityRes, 0)
	Call CommonProcessParams(objProvinceRes, 2)

	Call GetEOSumValuesForEOTypes("T0521", sourceFormId, 5, 21, 3, Null, Array(2,5,6,7,10,13))
	Call GetEOSumValues("T060103", sourceFormId, 2, 15, 3, Null)
End Sub

Sub CommonProcessParams(objRS, nColumnDispl)
	Dim nRow, nCol, nValue
	Dim strFieldName
	Dim nCnt, arrValue

	While Not objRS.EOF
		nRow = GetSafeLng(objRS("CELLROW"), Null)

		nCol = GetSafeLng(objRS("CELLCOLUMN"), Null)
		If nCol = 3 Or nCol = 4 Then
			nCol = nCol + nColumnDispl
		Else
			nCol = nCol + 4
		End If

		nValue = GetSafeLng(objRS("SUMMA"), 0)
		If nValue > 0 Then
			strFieldName = GetFormFieldName(5, nRow, nCol)

			If nCol >= 9 And nColumnDispl > 0 Then
				' для сельской местности надо сложить с уже сохранённым значением для города
				arrValue = GetLoadedRIKValue(strFieldName)
				If IsArray(arrValue) Then
					nCnt = GetSafeLng(arrValue(1), 0)
					nValue = nValue + nCnt
				End If
			End If

			Call SetLoadedRIKValue(strFieldName, nValue)
		End If
		objRS.MoveNext
	WEnd
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 13
		For nRow = 1 to 19
			Call SetLoadedRIKValue(GetFormFieldName(5, nRow, nCol), "")
		Next
	Next
End Sub
%>
