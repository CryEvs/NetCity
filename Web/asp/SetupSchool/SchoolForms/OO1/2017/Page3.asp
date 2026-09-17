<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()%>
<script><!--
BindChangeTrigger("01.2", 3, 3, [2]);
BindChangeTrigger("01.2", 3, 5, [4]);
BindChangeTrigger("01.2", 3, 6, [7,8,9,10,11,12,13,14,15,16]);
BindChangeTrigger("01.2", 3, 17, [6]);
BindChangeTrigger("01.2", 3, 28, [27]);
BindChangeTrigger("01.2", 3, 30, [29]);

LaunchTrigger("01.2", 3, 3, [2]);
LaunchTrigger("01.2", 3, 5, [4]);
LaunchTrigger("01.2", 3, 6, [7,8,9,10,11,12,13,14,15,16]);
LaunchTrigger("01.2", 3, 17, [6]);
LaunchTrigger("01.2", 3, 28, [27]);
LaunchTrigger("01.2", 3, 30, [29]);
isInfoFormValid();

function CalculateOSH()
{
	ValidateTrigger2("01.2", 3, 3, [2]);
	ValidateTrigger2("01.2", 3, 5, [4]);
	ValidateTrigger("01.2", 3, 6, [7,8,9,10,11,12,13,14,15,16]);
	ValidateTrigger2("01.2", 3, 17, [6]);
	ValidateTrigger2("01.2", 3, 26, [25]);
	ValidateTrigger2("01.2", 3, 28, [27]);
	ValidateTrigger2("01.2", 3, 30, [29]);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.2_inc.asp" -->
	<%
End Sub%>