<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()%>
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
	<!-- #INCLUDE FILE="Sections/Section2.2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = False
End Function

Sub AutoCalcEMInfo( )
End Sub
%>

