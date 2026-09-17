<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Function GetFormPageNum()
	GetFormPageNum = 18
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColAllRows(9, 3, 1, 9, 4, 11);
	SumRowAllColsByIndex(9, 1, 3, 11, [2,3]);
	SumRowAllCols(9, 3, 3, 11, 4, 8);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objResources
	Dim j, nRowNum, nColNum, cellValue
	
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
			Set objResources = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(j), , GetSourceFormId(), 8, 1, 9, 3, 3)
			While Not objResources.EOF
				nRowNum = objResources("CELLROW")
				cellValue = objResources("SUMMA")
				Call SetLoadedRIKValue(GetFormFieldName(9, nRowNum, nColNum), cellValue )
				objResources.MoveNext
			WEnd
		End If
	Next
End Sub
%>