<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<%
End Sub
%>
