<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Function GetFormPageNum()
	GetFormPageNum = 19
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols(10, 3, 3, 20, 4, 8);
	SumRowAllColsByIndex(10, 2, 3, 20, [3,9,10]);
	SumRowAllColsByIndex(10, 1, 3, 20, [2,11,18,19]);
	SumRowAllCols(10, 11, 3, 20, 12, 17);
	SumColAllRows(10, 3, 1, 20, 4, 11);
	SumColAllRows(10, 12, 1, 20, 13, 20);

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
	Dim objResources
	Dim j, nRowNum, nColNum, cellColumn, cellValue, inc
	
	'Соответствие между FormId и номером столбца раздела
	ReDim arrFormIdWithCol(kMaxFormId)

	arrFormIdWithCol(10) = 4
	arrFormIdWithCol(11) = 5
	arrFormIdWithCol(12) = 6
	arrFormIdWithCol(14) = 7
	arrFormIdWithCol(15) = 8
	
	For j = kMinFormId To kMaxFormId
		nColNum = arrFormIdWithCol(j)
		If nColNum > 0 Then
			Set objResources = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(j), , GetSourceFormId(), 9, 1, 20, 3, 4)
			While Not objResources.EOF
				nRowNum = objResources("CELLROW")
				cellColumn = objResources("CELLCOLUMN")

				inc = 0
				If cellColumn = 4 Then inc = 9

				cellValue = objResources("SUMMA")
				Call SetLoadedRIKValue( GetFormFieldName(10, nRowNum, nColNum + inc), cellValue )
				objResources.MoveNext
			WEnd
		End If
	Next
End Sub
%>