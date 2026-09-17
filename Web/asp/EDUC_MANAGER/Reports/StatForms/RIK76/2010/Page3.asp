<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();

function CalculateOSH() {
	SumColAllRows('01.2', 5, 2, 23, 3, 4);
	SumColAllRows('01.2', 8, 2, 23, 6, 7);
	SumRowAllColsByIndex('01.2', 1, 3, 8, [2,3,11,12,13,15,16,17]);
	
	ValidateDividedRows('01.2', 3, [4, 5, 6, 8, 9, 10], 3, 8);
	ValidateDividedRows('01.2', 6, [7], 3, 8);
	ValidateDividedRows('01.2', 13, [14], 3, 8);
	ValidateDividedRows('01.2', 19, [20], 3, 8);
	ValidateIncludedCols('01.2', 5, [8], 1, 23);

	if(GetParamaterValue('01.2', 24, null) > GetParamaterValue('01.2', 1, 5)) {
		alert(language.Generic.SchoolInfo.kerrOshCalculate);
		GetParameter('01.2', 24, null).focus();
		return false;
	}

	if(GetParamaterValue('01.2', 27, null) > GetParamaterValue('01.2', 1, 5)) {
		alert(language.Generic.SchoolInfo.kerrOshCalculate);
		GetParameter('01.2', 27, null).focus();
		return false;
	}

	if(GetParamaterValue('01.2', 25, null) > GetParamaterValue('01.2', 24, null)) {
		alert(language.Generic.SchoolInfo.kerrOshCalculate);
		GetParameter('01.2', 25, null).focus();
		return false;
	}

	if (GetParamaterValue('01.2', 26, null) > (
		GetParamaterValue('01.2', 2, 5) + 
		GetParamaterValue('01.2', 3, 5) +
		GetParamaterValue('01.2', 11, 5) + 
		GetParamaterValue('01.2', 12, 5) )) {
		alert(language.Generic.SchoolInfo.kerrOshCalculate);
		GetParameter('01.2', 26, null).focus();
		return false;
	}

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.2_inc.asp" -->
	<%
End Sub

%>

