<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function
Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	BindChangeTrigger(7, 3, 14, [15, 16, 17, 18, 19]);
	BindChangeTrigger(7, 3, 22, [23]);
	BindChangeTrigger(7, 3, 24, [25]);
	BindChangeTrigger(7, 3, 43, [44, 45, 46, 47, 48, 49, 50, 51, 52]);

	LaunchTrigger(7, 3, 14, [15, 16, 17, 18, 19]);
	LaunchTrigger(7, 3, 22, [23]);
	LaunchTrigger(7, 3, 24, [25]);
	LaunchTrigger(7, 3, 43, [44, 45, 46, 47, 48, 49, 50, 51, 52]);
	isInfoFormValid();
	
	function CalculateOSH() {
		ValidateTrigger(7, 3, 14, [15, 16, 17, 18, 19]);
		ValidateTrigger(7, 3, 22, [23]);
		ValidateTrigger(7, 3, 24, [25]);
		ValidateTrigger(7, 3, 43, [44, 45, 46, 47, 48, 49, 50, 51, 52]);
		ValidateIncludedRows(7, 16, [17], 3, 3);
		ValidateIncludedRows(7, 20, [21], 3, 3);
		ValidateDividedRows(7, 36, [37, 38, 39, 51], 3, 3);
		ValidateIncludedRows(7, 39, [40], 3, 3);
		ValidateIncludedRows(7, 41, [42], 3, 3);
		ValidateIncludedRows(7, 51, [52], 3, 3);
		return true;
	}

//--></script>
<%
	End If
End Sub
%>
