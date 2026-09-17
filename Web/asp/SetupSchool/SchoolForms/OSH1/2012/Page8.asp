<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
function CalculateOSH()
{
	SumCol(17, 6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 5);
	SumCol(17, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 9);
	ValidateIncludedRows(17, 1, [2, 3, 4, 5, 6], 3, 10);
	return true;
}
//--></script>
<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section17_inc.asp" -->
	<%
End Sub
%>
