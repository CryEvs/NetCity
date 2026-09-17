<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()
%>

<script> 
<!--
function CalculateOSH()
{
	ValidateIncludedRows(7, 39, [40], 3, 3);
	ValidateIncludedRows(7, 41, [42], 3, 3);
	ValidateIncludedRows(7, 36, [39], 3, 3);
	ValidateIncludedRows(7, 36, [51], 3, 3);
	ValidateIncludedRows(7, 51, [52], 3, 3);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
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