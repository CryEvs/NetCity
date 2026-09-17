<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 7
End Function
Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
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
