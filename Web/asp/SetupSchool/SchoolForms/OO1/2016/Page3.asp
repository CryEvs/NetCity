<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()%>
<script><!--
BindChangeTrigger("01.2", 3, 2, [1]);
BindChangeTrigger("01.2", 3, 4, [3]);
BindChangeTrigger("01.2", 3, 5, [6,7,8,9,10,11,12,13,14,15]);
BindChangeTrigger("01.2", 3, 16, [5]);
BindChangeTrigger("01.2", 3, 27, [26]);
BindChangeTrigger("01.2", 3, 29, [28]);

LaunchTrigger("01.2", 3, 2, [1]);
LaunchTrigger("01.2", 3, 4, [3]);
LaunchTrigger("01.2", 3, 5, [6,7,8,9,10,11,12,13,14,15]);
LaunchTrigger("01.2", 3, 16, [5]);
LaunchTrigger("01.2", 3, 27, [26]);
LaunchTrigger("01.2", 3, 29, [28]);
isInfoFormValid();

function CalculateOSH()
{
	ValidateTrigger2("01.2", 3, 2, [1]);
	ValidateTrigger2("01.2", 3, 4, [3]);
	ValidateTrigger("01.2", 3, 5, [6,7,8,9,10,11,12,13,14,15]);
	ValidateTrigger2("01.2", 3, 16, [5]);
	ValidateTrigger2("01.2", 3, 25, [24]);
	ValidateTrigger2("01.2", 3, 27, [26]);
	ValidateTrigger2("01.2", 3, 29, [28]);

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