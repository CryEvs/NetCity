<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>

<script> 
<!--
isInfoFormValid();
function CalculateOSH()
{
	SumColAllRows('01.1', 5, 2, 20, 3, 4);
	SumColAllRows('01.1', 8, 2, 20, 6, 7);
	SumColAllRows('01.1', 11, 2, 20, 9, 10);
	SumRowAllColsByIndex('01.1', 3, 3, 11, [4,5,6,8,9,10]);
	SumRowAllColsByIndex('01.1', 1, 3, 11, [2,3,11,12,13,14,15,16]);

	ValidateDividedRows('01.1', 3, [4, 5, 6, 8, 9, 10], 3, 11);
	ValidateDividedRows('01.1', 6, [7], 3, 11);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
	Dim objSchoolsList
	Dim arrCounts
	Dim i

	If Not isMns() Then
		Set objSchoolsList = objNSNET.GetEMSchools(filterEMID, kWizardSteps, bFormSpec)
		arrCounts = GetSchoolsListByForms(objSchoolsList)
		For i = 2 To 20
			Call SetLoadedRIKValue( "T01.1" & LPad2(i) & "03", arrCounts(i,1) )
			Call SetLoadedRIKValue( "T01.1" & LPad2(i) & "04", arrCounts(i,2) )
		Next

		Call GetSplitEOCountValues("T01.11803","T01.11804", StatForm_Osh1, 8, 1, 3, Null, bFormSpec)
		Call GetSplitEOCountValues("T01.11903","T01.11904", StatForm_Osh1, 7, 1, 3, Null, bFormSpec)
		Call GetSplitEOCountValues("T01.12003","T01.12004", StatForm_Osh1, 7, 1, 5, Null, bFormSpec)
	End If
End Sub
%>

