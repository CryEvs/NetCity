<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColAllRows(1, 3, 1, 9, 4, 5);
	SumRowAllCols(1, 1, 3, 17, 2, 9);

	ValidateIncludedCols(1, 3, [6], 1, 9);
	ValidateIncludedCols(1, 3, [7], 1, 9);
	ValidateIncludedCols(1, 3, [8], 1, 9);
	ValidateIncludedCols(1, 3, [9], 1, 9);
	ValidateIncludedCols(1, 3, [10], 1, 9);
	ValidateIncludedCols(1, 3, [11], 1, 9);
	ValidateIncludedCols(1, 3, [12,13,14,15], 1, 9);
	ValidateIncludedCols(1, 3, [16], 1, 9);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objSchoolsList
	Dim i, arrCounts, nSettlementType, nRowNum, nEoFormId
	Dim arrFormIdWithRow
	Dim strRowNum
	Dim sourceFormId
	
	'Соответствие между FormId и номером строки раздела
	ReDim arrFormIdWithRow(kMaxFormId)

	sourceFormId = GetSourceFormId()

	arrFormIdWithRow(10) = 2
	arrFormIdWithRow(11) = 3
	arrFormIdWithRow(12) = 4
	arrFormIdWithRow(14) = 5
	arrFormIdWithRow(15) = 6

	Set objSchoolsList = objNSNET.GetEMUdodSchools(strEmId, kWizardSteps)

	ReDim arrCounts(9, 2)
	
	While Not objSchoolsList.EOF
		If objSchoolsList("SETTLEMENTTYPEID") = 1 Then nSettlementType = 2 Else nSettlementType = 1

		nRowNum = 0
		nEoFormId = CInt(objSchoolsList("EOFORMID"))
		If nEoFormId <= kMaxFormId Then
			nRowNum = arrFormIdWithRow(nEoFormId)
		End If
		
		If nRowNum > 0 Then
			arrCounts(nRowNum, nSettlementType) = arrCounts(nRowNum, nSettlementType) + 1
		End If
		objSchoolsList.MoveNext
	Wend
	
	For i = 2 To 9
		Call SetLoadedRIKValue( GetFormFieldName(1, i, 4), arrCounts(i,1) )
		Call SetLoadedRIKValue( GetFormFieldName(1, i, 5), arrCounts(i,2) )
	Next

	For i = kMinFormId To kMaxFormId
		nRowNum = arrFormIdWithRow(i)
		If nRowNum > 0 Then
			strRowNum = FormatValueIndex(nRowNum)

			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(1, nRowNum, 6), sourceFormId, 1, 3, 3, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(1, nRowNum, 7), sourceFormId, 1, 4, 3, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(1, nRowNum, 8), sourceFormId, 1, 5, 3, Empty, Array(3), Array(i) )
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(1, nRowNum, 9), sourceFormId, 1, 6, 3, Empty, Array(3), Array(i) )
			Call GetEOCountWithPValue(GetFormFieldName(1, nRowNum, 10), Array(3), Array(i), sourceFormId, 1, 2, 3, Empty, "Получили лицензию в отчетном году,Получили лицензию до начала отчетного года")
			Call GetEOCountWithPValue(GetFormFieldName(1, nRowNum, 11), Array(3), Array(i), sourceFormId, 1, 2, 3, Empty, "Получили лицензию в отчетном году")
			Call GetEOCountWithPValue(GetFormFieldName(1, nRowNum, 12), Array(3), Array(i), sourceFormId, 1, 1, 3, Empty, "Высшая категория")
			Call GetEOCountWithPValue(GetFormFieldName(1, nRowNum, 13), Array(3), Array(i), sourceFormId, 1, 1, 3, Empty, "I категория")
			Call GetEOCountWithPValue(GetFormFieldName(1, nRowNum, 14), Array(3), Array(i), sourceFormId, 1, 1, 3, Empty, "II категория")
			Call GetEOCountWithPValue(GetFormFieldName(1, nRowNum, 15), Array(3), Array(i), sourceFormId, 1, 1, 3, Empty, "III категория")
			Call GetEOCountValuesForEOTypesAndEoForms(GetFormFieldName(1, nRowNum, 16), sourceFormId, 1, 7, 3, Empty, Array(3), Array(i))
			Call GetEOSumValuesForEOTypesAndEOForms(GetFormFieldName(1, nRowNum, 17), sourceFormId, 1, 7, 3, Empty, Array(3), Array(i) )
		End If
	Next
End Sub
%>