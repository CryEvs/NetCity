<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {

	SumColAllRows(4, 3, 1, 6, 4, 5);
	SumColAllRows(4, 6, 1, 6, 7, 8);
	SumRowAllColsByIndex(4, 1, 4, 8, [2,3,5,6]);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<%
End Sub
%>