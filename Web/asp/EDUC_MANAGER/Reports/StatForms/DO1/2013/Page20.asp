<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const kMinFormId = 10, kMaxFormId = 15

Function GetFormPageNum()
	GetFormPageNum = 20
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols(11, 1, 3, 20, 2, 9);

	ValidateIncludedCols(11, 3, [4], 1, 9);
	ValidateIncludedCols(11, 5, [6], 1, 9);
	ValidateIncludedCols(11, 7, [8], 1, 9);
	ValidateIncludedCols(11, 9, [10], 1, 9);
	ValidateIncludedCols(11, 11, [12], 1, 9);
	ValidateIncludedCols(11, 13, [14], 1, 9);
	ValidateIncludedCols(11, 15, [16], 1, 9);
	ValidateIncludedCols(11, 17, [18], 1, 9);
	ValidateIncludedCols(11, 19, [20], 1, 9);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section11_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objSchoolsList
	Dim i, arrCounts, nSettlementType, nRowNum, nEoFormId
	Dim arrFormIdWithRow
	
	' Соответствие между идентификатором вида учреждения и номером строки раздела
	ReDim arrFormIdWithRow(kMaxFormId)

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
			arrCounts(nRowNum, 0) = arrCounts(nRowNum, 0) + 1
			arrCounts(nRowNum, nSettlementType) = arrCounts(nRowNum, nSettlementType) + 1
		End If
		objSchoolsList.MoveNext
	Wend

	For i = 2 To 9
		Call SetLoadedRIKValue( GetFormFieldName(11, i, 3), arrCounts(i,0) )
		Call SetLoadedRIKValue( GetFormFieldName(11, i, 4), arrCounts(i,2) )
	Next
End Sub
%>