<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols(4, 1, 3, 6, 2, 10);

	ValidateIncludedCols(4, 3, [4], 1, 10);
	ValidateIncludedCols(4, 5, [6], 1, 10);

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
	Dim cityRes, provinceRes

	Call ClearAvtoCalcFields("T04",1,10,3,6)

	Call objSchoolFormComponent.CalcSplittedTableStatFormParameters(strEmId, strCommonYearId, Array(3), , , GetSourceFormId(), 2, 1, 9, 5, 5, cityRes, provinceRes)
	Call CommonProcessParams(cityRes, provinceRes, 5, true)
	Call CommonProcessParams(provinceRes, Empty, 6, false)
End Sub

Sub CommonProcessParams(objRS, addObjRS, nColumnDispl, isAdded)
	Dim nRow, nRowNum, others, section
	Dim arrVal(10)
	Dim i

	section = 4

	While Not objRS.EOF
		nRow = GetSafeLng(objRS("cellRow"), 0)
		nRowNum = GetRowNum(nRow)

		If nRowNum = 10 Then
			arrVal(10) = arrVal(10) + GetSafeLng(objRS("SUMMA"), 0)
		ElseIf nRowNum > 0 Then
			arrVal(nRowNum) = GetSafeLng(objRS("SUMMA"), 0)
		End If
		objRS.MoveNext
	WEnd

	If isAdded and IsObject(addObjRS) Then
		While Not addObjRS.EOF
			nRow = GetSafeLng(addObjRS("cellRow"), 0)
			nRowNum = GetRowNum(nRow)

			If nRowNum > 0 Then
				arrVal(nRowNum) = arrVal(nRowNum) + GetSafeLng(addObjRS("SUMMA"), 0)
			End If
			addObjRS.MoveNext
		WEnd
		addObjRS.MoveFirst
	End If

	For i = 1 To Ubound(arrVal) Step 1
		If arrVal(i) Then Call SetLoadedRIKValue( GetFormFieldName(section, i, nColumnDispl), arrVal(i) )
	Next
End Sub

Function GetRowNum(row)
	GetRowNum = row
	Select case row
		case 2
			GetRowNum = 5
		case 3
			GetRowNum = 9
		case 5
			GetRowNum = 6
		case 6
			GetRowNum = 7
		case 7
			GetRowNum = 3
		case 8, 9
			GetRowNum = 10
	End Select
End Function
%>