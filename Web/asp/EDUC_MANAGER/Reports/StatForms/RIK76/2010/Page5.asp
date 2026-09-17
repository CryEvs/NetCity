<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColAllRows(2, 5, 1, 4, 3, 4);
	SumColAllRows(3, 5, 1, 20, 3, 4);
	SumRowAllCols(2, 4, 3, 5, 1, 3);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub
%>

