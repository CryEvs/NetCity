<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMaxRows = 66
const kMinFormId = 10, kMaxFormId = 15

Dim arrRowsWithAddRows
Dim dcSchoolStudents

Function GetFormPageNum()
	GetFormPageNum = 17
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColAllRows(8, 3, 1, 81, 4, 11);

	ValidateIncludedRows(8, 19, [20], 3, 11);
	ValidateIncludedRows(8, 21, [22], 3, 11);
	ValidateIncludedRows(8, 26, [27], 3, 11);
	ValidateIncludedRows(8, 49, [50], 3, 11);
	ValidateIncludedRows(8, 49, [51], 3, 11);
	ValidateIncludedRows(8, 49, [53], 3, 11);
	ValidateIncludedRows(8, 53, [54], 3, 11);
	ValidateIncludedRows(8, 49, [55], 3, 11);
	ValidateIncludedRows(8, 55, [56], 3, 11);
	ValidateIncludedRows(8, 57, [58], 3, 11);
	ValidateIncludedRows(8, 57, [61], 3, 11);
	ValidateIncludedRows(8, 49, [65], 3, 11);
	ValidateIncludedRows(8, 65, [66], 3, 11); 

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objTechBase
	Dim arrCounts, nSettlementType, nEoFormId
	Dim arrFormIdWithCol
	Dim inc, j, nRowNum, nColNum, cellValue, nAddRow
	Dim sourceFormId
	
	'Соответствие между FormId и номером столбца раздела
	ReDim arrFormIdWithCol(kMaxFormId)

	arrFormIdWithCol(10) = 4
	arrFormIdWithCol(11) = 5
	arrFormIdWithCol(12) = 6
	arrFormIdWithCol(14) = 7
	arrFormIdWithCol(15) = 8

	sourceFormId = GetSourceFormId()
	Call ClearAvtoCalcFields("T08",1,81,3,11)

	Set dcSchoolStudents = objSchoolFormComponent.GetStatFormParametersDictionary(strEmId, strCommonYearId, Array(3), , sourceFormId, 2, 1, 5, Empty)

	'Рассчитывается первая строка
	Set objTechBase = objNSNET.GetEMUdodSchools(strEmId, kWizardSteps)

	ReDim arrCounts(11)
	While Not objTechBase.EOF
		nColNum = 0
		nEoFormId = CInt(objTechBase("EOFORMID"))
		If nEoFormId <= kMaxFormId Then
			nColNum = arrFormIdWithCol(nEoFormId)
		End If
		
		If nColNum > 0 Then
			arrCounts(nColNum) = arrCounts(nColNum) + 1
		End If
		objTechBase.MoveNext
	Wend
	
	For j = 4 To 11
		Call SetLoadedRIKValue( GetFormFieldName(8, 1, j), arrCounts(j) )
	Next
	
	Call InizializeAddRows()

	For j = kMinFormId To kMaxFormId
		nColNum = arrFormIdWithCol(j)

		'Число учреждений, не имеющих никаких мастерских
		cellValue = arrCounts(nColNum) - objSchoolFormComponent.CalcCountStatFormParameter(strEmId, strCommonYearId, Array(3), Array(j), sourceFormId, 7, 5, 3, Empty)
		Call SetLoadedRIKValue( GetFormFieldName(8, 6, nColNum), cellValue )

		If nColNum > 0 Then
			Set objTechBase = objSchoolFormComponent.CalcTableStatFormParameters(strEmId, strCommonYearId, Array(3), Array(j), , sourceFormId, 7, 1, 66, 3, 3)
			While Not objTechBase.EOF
				nRowNum = objTechBase("CELLROW")
				nAddRow = arrRowsWithAddRows(nRowNum)

				inc = GetInc(nRowNum)

				If nAddRow = 30 or nAddRow = 33 or nAddRow = 35 Then
					Call IsCalcStudents(nAddRow, nColNum, j)
				ElseIf nAddRow > 0 Then
					Call GetEOCountValuesForEOTypesAndEoForms(GetFormFieldName(8, nAddRow, nColNum), sourceFormId, 7, nRowNum, 3, Empty, Array(3), Array(j))
				End If

				cellValue = objTechBase("SUMMA")
				Call SetLoadedRIKValue( GetFormFieldName(8, nRowNum + inc, nColNum), cellValue )
				objTechBase.MoveNext
			WEnd
		End If
	Next
End Sub

Sub InizializeAddRows()
	ReDim arrRowsWithAddRows(kMaxRows)

	'Связь строк раздела первичной формы с дополнительными
	arrRowsWithAddRows(1) = 1
	'arrRowsWithAddRows(5) = 6
	arrRowsWithAddRows(7) = 9
	arrRowsWithAddRows(12) = 15
	arrRowsWithAddRows(13) = 17
	arrRowsWithAddRows(20) = 25
	arrRowsWithAddRows(22) = 30
	arrRowsWithAddRows(24) = 33
	arrRowsWithAddRows(26) = 35
	arrRowsWithAddRows(30) = 39
	arrRowsWithAddRows(31) = 41
	arrRowsWithAddRows(33) = 44
	arrRowsWithAddRows(34) = 46
	arrRowsWithAddRows(39) = 52
	arrRowsWithAddRows(62) = 76
End Sub

Function GetInc(nRowNum)
	Dim inc

	If nRowNum >= 1 And nRowNum < 5 Then
		inc = 1
	ElseIf nRowNum >= 5 And nRowNum < 7 Then
		inc = 2
	ElseIf nRowNum >= 7 And nRowNum < 12 Then
		inc = 3
	ElseIf nRowNum >= 12 And nRowNum < 13 Then
		inc = 4
	ElseIf nRowNum >= 13 And nRowNum < 20 Then
		inc = 5
	ElseIf nRowNum >= 20 And nRowNum < 24 Then
		inc = 6
	ElseIf nRowNum >= 24 And nRowNum < 26 Then
		inc = 7
	ElseIf nRowNum >= 26 And nRowNum < 27 Then
		inc = 8
	ElseIf nRowNum >= 27 And nRowNum < 30 Then
		inc = 9
	ElseIf nRowNum >= 30 And nRowNum < 31 Then
		inc = 10
	ElseIf nRowNum >= 31 And nRowNum < 33 Then
		inc = 11
	ElseIf nRowNum >= 33 And nRowNum < 34 Then
		inc = 12
	ElseIf nRowNum >= 34 And nRowNum < 39 Then
		inc = 13
	ElseIf nRowNum >= 39 And nRowNum < 62 Then
		inc = 14
	ElseIf nRowNum >= 62 And nRowNum <= 66 Then
		inc = 15
	End If

	GetInc = inc
End Function

Sub IsCalcStudents(addRow, colNum, formId)
	Dim rowNum
	Dim repSchools, sumRepSchools

	Select case addRow
		case 30
			rowNum = 22
		case 33
			rowNum = 24
		case 35
			rowNum = 26
	End Select

	Set repSchools = objSchoolFormComponent.GetStatFormParameters(strEmId, strCommonYearId, Array(3), Array(formId), GetSourceFormId(), 7, rowNum, 3)
	sumRepSchools = 0
	While Not repSchools.EOF
		If repSchools("PVALUE") = 1 Then sumRepSchools = sumRepSchools + dcSchoolStudents(GetSafeStr(repSchools("SCHOOLID"), -1, ""))
		repSchools.MoveNext
	WEnd
	Call SetLoadedRIKValue( GetFormFieldName(8, addRow, colNum), sumRepSchools )
End Sub
%>