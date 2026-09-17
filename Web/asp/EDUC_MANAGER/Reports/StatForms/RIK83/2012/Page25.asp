<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 25
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	var strSection = '04';

	SumRowAllCols(strSection, 1, 3, 10, 2, 11);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objRes

	Call ClearForm

	Call Calculate(46, 3, 3)
	Call Calculate(29, 4, 13)
	Call Calculate(36, 5, 13)
	Call Calculate(37, 6, 13)
End Sub

Sub Calculate(nRow, nColInsert, nColSelect)
	Dim objRes, strSectionNum, sourceFormId

	sourceFormId = GetSourceFormId()

	strSectionNum = "04"

	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 2, nColInsert), GetFormFieldName(strSectionNum, 2, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(2))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 3, nColInsert), GetFormFieldName(strSectionNum, 3, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(5))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 4, nColInsert), GetFormFieldName(strSectionNum, 4, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(6))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 5, nColInsert), GetFormFieldName(strSectionNum, 5, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(7))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 7, nColInsert), GetFormFieldName(strSectionNum, 7, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(11))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 8, nColInsert), GetFormFieldName(strSectionNum, 8, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(10))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 9, nColInsert), GetFormFieldName(strSectionNum, 9, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(12))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 10, nColInsert), GetFormFieldName(strSectionNum, 10, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(13))
	Call GetSplitEOSumValuesForEOTypes(GetFormFieldName(strSectionNum, 11, nColInsert), GetFormFieldName(strSectionNum, 11, nColInsert + 4), sourceFormId, 1, nRow, nColSelect, Empty, Array(9))

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), Array(27), , sourceFormId, 1, nRow, nRow, nColSelect, nColSelect, objRes, False, bFormSpec)
	Call CommonProcessParams(objRes, GetFormFieldName(strSectionNum, 6, nColInsert))

	Call objSchoolFormComponent.CalcTableStatFormParametersFilterSettlementType(strEMID, strCommonYearID, Array(6), Array(27), , sourceFormId, 1, nRow, nRow, nColSelect, nColSelect, objRes, True, bFormSpec)
	Call CommonProcessParams(objRes,  GetFormFieldName(strSectionNum, 6, nColInsert + 4))
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
			Call SetLoadedRIKValue(GetFormFieldName("04", nRow, nCol), "")
		Next
	Next
End Sub%>