<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateTotals()
{
	return true;
}
function ValidateForm()
{
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
%>

