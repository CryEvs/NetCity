<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{	
    SumRowAllCols(5,2,3,31,3,6);
	SumRowAllCols(5,7,3,31,8,13);
	SumRowAllColsByIndex(5,1,3,31,[2,7,14,15]);
	SumRowAllCols(5,16,3,3,18,19);

	ValidateIncludedRows(5,16,[17],3,3);

	ValidateIncludedCols(5,3,[6],1,15);
    ValidateIncludedCols(5,3,[7,8],1,15);
    ValidateIncludedCols(5,3,[9],1,15);
    ValidateIncludedCols(5,3,[10,11,12,13],1,15);

	ValidateIncludedCols(5,14,[15],1,15);

    ValidateIncludedCols(5,3,[16],1,15);
    ValidateIncludedCols(5,16,[17],1,15);
    ValidateIncludedCols(5,3,[18],1,15);
    ValidateIncludedCols(5,18,[19],1,15);
    ValidateIncludedCols(5,3,[20],1,15);
    ValidateIncludedCols(5,3,[21],1,15);
	ValidateIncludedCols(5,3,[16,18,20,21],1,15);

	ValidateIncludedCols(5,3,[22,23,24,25,26],1,15);

    ValidateIncludedCols(5,3,[27,28,29],1,15);
    ValidateIncludedCols(5,29,[30],1,15);
    ValidateIncludedCols(5,30,[31],1,15);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo()

End Sub
%>