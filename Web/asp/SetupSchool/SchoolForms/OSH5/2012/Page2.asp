<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	return true;
}
//--></script>
<%
	End If
End Sub
%>
