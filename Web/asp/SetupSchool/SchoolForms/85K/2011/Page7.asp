<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllColsByIndex('02.7', 1, 3, 3, [2,3,4,5,6,7,8,9,10,11]);
	
	SumRowAllColsByIndex('02.8', 1, 3, 7, [2,3,4]);
	ValidateIncludedCols('02.8', 3, [4], 2, 4);
	ValidateIncludedCols('02.8', 5, [6], 2, 4);
	ValidateIncludedCols('02.8', 5, [7], 2, 4);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.7_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.8_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo( )
End Sub
%>