<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()
%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(9, 3, 3, 4, 4, 8);
	SumRowAllCols(9, 11, 3, 4, 12, 17);
	SumRowAllColsByIndex(9, 2, 3, 4, [3,9,10]);
	SumRowAllColsByIndex(9, 1, 3, 4, [2,11,18,19]);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
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