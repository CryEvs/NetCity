<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()
%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(8, 3, 3, 3, 4, 8);
	SumRowAllCols(8, 1, 3, 3, 2, 3);

	ValidateIncludedRows(8, 3, [9], 3, 3);
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