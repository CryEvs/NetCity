<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()%>
<script><!--
BindChangeTrigger("01.1", 3, 3, [4,5,6,7,8,9,13]);
LaunchTrigger("01.1", 3, 3, [4,5,6,7,8,9,13]);
isInfoFormValid();

function CalculateOSH()
{
	ValidateTrigger("01.1", 3, 3, [4,5,6,7,8,9,13]);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.1_inc.asp" -->
	<%
End Sub%>