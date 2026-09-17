<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> 
<!--
function CalculateOSH()
{
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
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