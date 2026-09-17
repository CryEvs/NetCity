<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 11
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumRowAllColsByIndex(12, 3,3,20,[4,5,6,8,9,10]);
	SumRowAllColsByIndex(12, 1,3,20,[2,3,11,12,13,14,15,16]);
	ValidateIncludedCols(12, 3, [5,7,9,11,13,15,17,19], 1, 16 );
	ValidateIncludedCols(12, 19, [20], 1, 16 );
	ValidateIncludedCols(12, 17, [18], 1, 16 );
	ValidateIncludedCols(12, 15, [16], 1, 16 );
	ValidateIncludedCols(12, 13, [14], 1, 16 );
	ValidateIncludedCols(12, 11, [12], 1, 16 );
	ValidateIncludedCols(12, 9, [10], 1, 16 );
	ValidateIncludedCols(12, 7, [8], 1, 16 );
	ValidateIncludedCols(12, 5, [6], 1, 16 );
	ValidateIncludedCols(12, 3, [4], 1, 16 );
	
	
	ValidateIncludedRows(12, 6, [7], 3, 20);
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section12_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objSchoolsList
	Dim arrCounts
	Dim i

	If Not IsMns() Then
		Set objSchoolsList = objNSNET.GetEMSchools(filterEMID, kWizardSteps, bFormSpec)
		arrCounts = GetSchoolsListByForms(objSchoolsList)
		For i = 2 To 16
			Call SetLoadedRIKValue( "T12" & LPad2(i) & "03", arrCounts(i,1) + arrCounts(i,2))
			Call SetLoadedRIKValue( "T12" & LPad2(i) & "04", arrCounts(i,2) )
		Next
	End If
End Sub
%>
