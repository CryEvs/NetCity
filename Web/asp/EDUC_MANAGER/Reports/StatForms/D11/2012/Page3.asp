<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {

	SumColAllRows(2, 4, 1, 146, 5, 6);

	SumRowAllCols(2, 2, 4, 6, 3, 6);
	SumRowAllCols(2, 7, 4, 6, 8, 12);
	SumRowAllCols(2, 13, 4, 6, 14, 15);
	SumRowAllCols(2, 16, 4, 6, 17, 30);
	SumRowAllCols(2, 31, 4, 6, 32, 38);
	SumRowAllColsByIndex(2, 39, 4, 6, [40]);
	SumRowAllColsByIndex(2, 41, 4, 6, [42]);
	SumRowAllCols(2, 43, 4, 6, 44, 45);
	SumRowAllCols(2, 46, 4, 6, 47, 54);
	SumRowAllColsByIndex(2, 55, 4, 6, [56]);
	SumRowAllCols(2, 57, 4, 6, 58, 59);
	SumRowAllCols(2, 60, 4, 6, 61, 62);
	SumRowAllColsByIndex(2, 63, 4, 6, [64]);
	SumRowAllCols(2, 65, 4, 6, 66, 82);
	SumRowAllCols(2, 83, 4, 6, 84, 85);
	SumRowAllCols(2, 86, 4, 6, 87, 90);
	SumRowAllCols(2, 91, 4, 6, 92, 94);
	SumRowAllColsByIndex(2, 95, 4, 6, [96]);
	SumRowAllCols(2, 97, 4, 6, 98, 100);
	SumRowAllCols(2, 101, 4, 6, 102, 104);
	SumRowAllCols(2, 105, 4, 6, 106, 113);
	SumRowAllCols(2, 114, 4, 6, 115, 134);
	SumRowAllCols(2, 135, 4, 6, 136, 145);
	SumRowAllColsByIndex(2, 1, 4, 17, [02,07,13,16,31,39,41,43,46,55,57,60,63,65,83,86,91,95,97,101,105,114,135,146]);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<%
End Sub
%>