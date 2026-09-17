<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 13
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumRowAllColsByIndex(14, 3,3,8,[4,5,6,8,9,10]);
	SumRowAllColsByIndex(14, 1,3,8,[2,3,11,12,13,15,16,17]);
	SumColForRowRange(14, 5, 1,17,[3,4]);
	SumColForRowRange(14, 8, 1,17,[6,7]);
	
	ValidateIncludedRows(14, 6, [7], 3, 8);
	ValidateIncludedRows(14, 13, [14], 3, 8);
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section14_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objCityRes, objProvinceRes, sourceFormId

	sourceFormId = GetSourceFormId()

	Call objSchoolFormComponent.CalcSplittedStatFormParametersByEoForm(strEMID, strCommonYearID, sourceFormId, 21, 15, 13, Null, objCityRes, objProvinceRes, bFormSpec)
	Call ClearForm
	Call CommonProcessParams(objCityRes, 0)
	Call CommonProcessParams(objProvinceRes, 1)

	Call GetSplitEOSumValues("T141303", "T141304", sourceFormId, 20, 15, 13, Null)
End Sub

Sub CommonProcessParams(objRS, nColumnDispl)
	Dim arrCounts
	Dim nValue
	Dim strFieldName
	Dim nRowNum, nAddRowNum

	ReDim arrCounts(17)
	While Not objRS.EOF
		nRowNum = FormID2RowNum(CInt(objRS("EOFORMID")), nAddRowNum)
		If nRowNum >=0 Then
			If nRowNum >= 14 Then
				nRowNum = nRowNum + 1
			End If

			arrCounts(nRowNum) = arrCounts(nRowNum) + GetSafeLng(objRS("SUMMA"), 0)
			nValue = arrCounts(nRowNum)
			If nValue > 0 Then
				strFieldName = GetFormFieldName(14, nRowNum, 3 + nColumnDispl)
				Call SetLoadedRIKValue(strFieldName, nValue)
			End If
		End If

		objRS.MoveNext
	WEnd
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 4
		For nRow = 1 to 17
			Call SetLoadedRIKValue(GetFormFieldName(14, nRow, nCol), "")
		Next
	Next
End Sub
%>
