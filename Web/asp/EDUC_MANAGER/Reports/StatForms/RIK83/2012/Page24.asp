<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 24
End Function

Sub SpecialOnHead()
%>
<script> <!--
function CalculateOSH() {
	var strSection = '03';

	SumRowAllCols(strSection, 1, 3, 10, 2, 11);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objRes

	Call ClearForm

	Call Calculate(45, 3)
	Call Calculate(29, 4)
	Call Calculate(36, 5)
	Call Calculate(37, 6)
End Sub

Sub Calculate(nRow, nCol)
	Dim objRes, sourceFormId

	sourceFormId = GetSourceFormId()

	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 2, nCol), GetFormFieldName("03", 2, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(2))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 3, nCol), GetFormFieldName("03", 3, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(5))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 4, nCol), GetFormFieldName("03", 4, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(6))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 5, nCol), GetFormFieldName("03", 5, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(7))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 7, nCol), GetFormFieldName("03", 7, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(11))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 8, nCol), GetFormFieldName("03", 8, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(10))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 9, nCol), GetFormFieldName("03", 9, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(12))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 10, nCol), GetFormFieldName("03", 10, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(13))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName("03", 11, nCol), GetFormFieldName("03", 11, nCol + 4), sourceFormId, 1, nRow, 3, Empty, Array(9))

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), Array(27), , sourceFormId, 1, nRow, nRow, 3, 3, objRes, False, bFormSpec)
	Call CommonProcessParams(objRes, GetFormFieldName("03", 6, nCol))

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), Array(27), , sourceFormId, 1, nRow, nRow, 3, 3, objRes, True, bFormSpec)
	Call CommonProcessParams(objRes,  GetFormFieldName("03", 6, nCol + 4))
End SUb

Sub CommonProcessParams(objRS, strFieldName)
	Dim nValue

	While Not objRS.EOF
		nValue = GetSafeLng(objRS("SUMMA"), 0)
		If nValue > 0 Then
			Call SetLoadedRIKValue(strFieldName, nValue)
		End If
		objRS.MoveNext
	WEnd
End Sub

Sub ClearForm()
	Dim nRow, nCol

	For nCol = 3 to 10
		For nRow = 1 to 11
			Call SetLoadedRIKValue(GetFormFieldName("03", nRow, nCol), "")
		Next
	Next
End Sub%>