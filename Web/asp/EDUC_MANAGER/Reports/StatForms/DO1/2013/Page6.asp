<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols(5, 1, 3, 9, 2, 9);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objStudents
	Dim arrFormIdWithRow
	Dim i, nRowNum
	Dim cellRow, cellValue
	Dim sourceFormId
	
	'Соответствие между FormId и номером строки раздела
	ReDim arrFormIdWithRow(kMaxFormId)

	arrFormIdWithRow(10) = 2
	arrFormIdWithRow(11) = 3
	arrFormIdWithRow(12) = 4
	arrFormIdWithRow(14) = 5
	arrFormIdWithRow(15) = 6

	sourceFormId = GetSourceFormId()
	
	For i = kMinFormId To kMaxFormId
		nRowNum = arrFormIdWithRow(i)
		If nRowNum > 0 Then
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(5, nRowNum, 3), sourceFormId, 4, 1, 3, Empty, Array(3), Array(i))
			Set objStudents = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(i), , sourceFormId, 4, 2, 7, 3, 3)

			While Not objStudents.EOF
				cellRow = objStudents("CELLROW")
				cellValue = objStudents("SUMMA")
				Call SetLoadedRIKValue( GetFormFieldName(5, nRowNum, cellRow + 2), cellValue )
				objStudents.MoveNext
			WEnd
		End If
	Next
End Sub
%>