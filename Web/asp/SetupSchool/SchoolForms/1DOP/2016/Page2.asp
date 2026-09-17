<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> 
<!--
function CalculateOSH()
{
	ValidateIncludedCols('01.1', 3, [4], 1, 11);
	ValidateIncludedCols('01.1', 3, [5], 1, 11);
	ValidateIncludedCols('01.1', 3, [7], 1, 11);
	ValidateIncludedCols('01.1', 5, [6], 1, 11);
	ValidateIncludedCols('01.1', 7, [8], 1, 11);

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