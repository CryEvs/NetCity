<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
function CalculateOSH()
{
	SumRowByIndex(18, 1, [3, 4], [2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
	SumRow(18, 2, [3, 4], 3, 6);
}
//--></script>
<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section18_inc.asp" -->
	<%
End Sub
%>
