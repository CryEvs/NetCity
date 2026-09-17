<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols(6, 1, 3, 14, 2, 9);
	SumColAllRows(6, 8, 1, 9, 3, 7);
	SumColAllRows(6, 14, 1, 9, 9, 13);

	ValidateIncludedCols(6, 3, [9], 1, 9);
	ValidateIncludedCols(6, 4, [10], 1, 9);
	ValidateIncludedCols(6, 5, [11], 1, 9);
	ValidateIncludedCols(6, 6, [12], 1, 9);
	ValidateIncludedCols(6, 7, [13], 1, 9);
	ValidateIncludedCols(6, 8, [14], 1, 9);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objStudents
	Dim arrFormIdWithRow
	Dim i, nRowNum, strRowNum
	Dim cellRow, cellCol, cellValue
	
	'Соответствие между FormId и номером строки раздела
	ReDim arrFormIdWithRow(kMaxFormId)

	arrFormIdWithRow(10) = 2
	arrFormIdWithRow(11) = 3
	arrFormIdWithRow(12) = 4
	arrFormIdWithRow(14) = 5
	arrFormIdWithRow(15) = 6
	
	For i = kMinFormId To kMaxFormId
		nRowNum = arrFormIdWithRow(i)
		If nRowNum > 0 Then
			strRowNum = FormatValueIndex(nRowNum)
			Set objStudents = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(i), , GetSourceFormId(), 5, 1, 6, 3, 4)

			While Not objStudents.EOF
				cellRow = objStudents("CELLROW")
				cellCol = objStudents("CELLCOLUMN")

				If cellCol = 3 Then
					cellRow = cellRow + 2
				Else
					cellRow = cellRow + 8
				End If

				cellValue = objStudents("SUMMA")
				Call SetLoadedRIKValue(GetFormFieldName(6, nRowNum, cellRow), cellValue )
				objStudents.MoveNext
			WEnd
		End If
	Next
End Sub
%>