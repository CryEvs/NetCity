<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColForRowRange(11, 5, 1, 7, [3, 4]);

	//ValidateIncludedRows(11, 1, [2, 3], 3, 4 );
	//ValidateIncludedRows(11, 4, [5], 3, 4 );
	ValidateIncludedRows(11, 6, [7], 3, 4 );
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
	Dim sourceFormId

	Call ClearForm

	sourceFormId = GetSourceFormId()

	If Not IsMns() Then
		Call GetSplitEOCountValues("T110103", "T110104", sourceFormId, 4, 16, 3, Null, bFormSpec)
		Call GetSplitEOSumValuesEx("T110203", "T110204", sourceFormId, 4, 16, 3, Null, bFormSpec)
	End If
	Call GetSplitEOSumValues("T110303", "T110304", sourceFormId, 4, 16, 4, Null)

	If Not IsMns() Then
		Call GetSplitEOCountValues("T110403", "T110404", sourceFormId, 8, 5, 3, Null, bFormSpec)
	End If
	Call GetSplitEOSumValues("T110503", "T110504", sourceFormId, 8, 6, 3, Null)

	If Not IsMns() Then
		Call GetSplitEOSumValuesEx("T110603", "T110604", sourceFormId, 8, 1, 3, Null, bFormSpec)
		Call GetSplitEOSumValuesEx("T110703", "T110704", sourceFormId, 8, 2, 3, Null, bFormSpec)
	End If
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 4
		For nRow = 1 to 7
			Call SetLoadedRIKValue(GetFormFieldName(11, nRow, nCol), "")
		Next
	Next
End Sub
%>

