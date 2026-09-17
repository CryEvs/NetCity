<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()%>

<script> 
<!--

BindChangeTrigger("04.4", 3, 5, [6]);
LaunchTrigger("04.4", 3, 5, [6]);
isInfoFormValid();

function CalculateOSH()
{
	ValidateIncludedRows("04.3", 7, [8,9], 3, 3);

	ValidateIncludedRows("04.4", 1, [2], 3, 3);
	ValidateTrigger("04.4", 3, 5, [6]);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4.3_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section4.4_inc.asp" -->
	<%
End Sub%>