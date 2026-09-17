<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2018 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>
<script> 
<!--
function CalculateOSH()
{
	ValidateIncludedCols('03.1', 3, [4, 6], 1, 3);
	ValidateIncludedCols('03.1', 4, [5], 1, 3);
	ValidateIncludedCols('03.1', 6, [7], 1, 3);
	ValidateIncludedRows('03.1', 1, [2], 3, 8);
	ValidateIncludedRows('03.1', 1, [3], 3, 8);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function

Sub AutoCalcEMInfo()
End Sub

Sub AutoCalc()
End Sub
%>