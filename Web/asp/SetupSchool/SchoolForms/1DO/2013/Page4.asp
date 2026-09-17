<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
%>

<script> 
<!--
function CalculateOSH()
{
	ValidateIncludedRows(3, 1, [2], 3, 7);
	ValidateIncludedCols(3, 4, [5], 1, 2);
	ValidateIncludedCols(3, 4, [6], 1, 2);
	ValidateIncludedCols(3, 4, [7], 1, 2);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	'if readonly Then
	'	IsServerSideAutoCalc = False
	'Else
	'	IsServerSideAutoCalc = True
	'End If
End Function

Sub AutoCalcEMInfo()

End Sub

Sub AutoCalc()

End Sub
%>