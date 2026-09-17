<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()%>
<script><!--
BindChangeTrigger('01.6', 3, 1, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);
LaunchTrigger('01.6', 3, 1, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);

BindChangeTrigger('01.6', 3, 40, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);
LaunchTrigger('01.6', 3, 40, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);

function CalculateOSH()
{
	ValidateTrigger_Value_Is_One_Then_Any('01.6', 3, 1, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);
	ValidateTrigger2('01.6', 3, 40, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);
	ValidateTrigger2('01.6', 3, 3, [2]);
	ValidateTrigger2('01.6', 3, 5, [4]);
	ValidateTrigger2('01.6', 3, 17, [6]);
	ValidateTrigger2('01.6', 3, 26, [25]);
	ValidateTrigger2('01.6', 3, 28, [27]);
	ValidateTrigger2('01.6', 3, 30, [29]);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.6_inc.asp" -->
	<%
End Sub%>