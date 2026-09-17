<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumCol(3, 3, [1,2], 4, 14);
	SumCol(3, 15, [1,2], 16, 22);
	SumCol(3, 23, [1,2], 24, 33);

	SumRowAllColsByIndex(3, 3, 3, 33, [1,2]);
	SumRowAllColsByIndex(3, 7, null, null, [5,6]);


	SumCol(4, 3, [1,2], 4, 14);
	SumCol(4, 15, [1,2], 16, 22);
	SumCol(4, 23, [1,2], 24, 33);

	SumRowAllColsByIndex(4, 3, 3, 33, [1,2]);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<%
End Sub
%>