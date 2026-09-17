<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	BindChangeTrigger(13, 3, 14, [15, 16, 17, 18, 19]);
	BindChangeTrigger(13, 3, 22, [23]);
	BindChangeTrigger(13, 3, 24, [25]);
	BindChangeTrigger(13, 3, 43, [44, 45, 46, 47, 48, 49, 50, 51, 52]);

	LaunchTrigger(13, 3, 14, [15, 16, 17, 18, 19]);
	LaunchTrigger(13, 3, 22, [23]);
	LaunchTrigger(13, 3, 24, [25]);
	LaunchTrigger(13, 3, 43, [44, 45, 46, 47, 48, 49, 50, 51, 52]);
	isInfoFormValid();
	
	function CalculateOSH() {
		ValidateTrigger(13, 3, 14, [15, 16, 17, 18, 19]);
		ValidateTrigger(13, 3, 22, [23]);
		ValidateTrigger(13, 3, 24, [25]);
		ValidateTrigger(13, 3, 43, [44, 45, 46, 47, 48, 49, 50, 51, 52]);
		ValidateIncludedRows(13, 16, [17], 3, 3);
		ValidateIncludedRows(13, 20, [21], 3, 3);
		ValidateDividedRows(13, 36, [37, 38, 39, 41, 51], 3, 3);
		ValidateIncludedRows(13, 39, [40], 3, 3);
		ValidateIncludedRows(13, 41, [42], 3, 3);
		ValidateIncludedRows(13, 51, [52], 3, 3);
		SumRow(14, 7, [3, 4, 5, 6], 1, 6);
		ValidateIncludedCols(14, 3, [4], 1, 7);
		ValidateIncludedCols(14, 5, [6], 1, 8);
		ValidateIncludedRows(14, 7, [8], 5, 6);
		return true;
	}
//--></script>
<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section13_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section14_inc.asp" -->
	<%
End Sub
%>
