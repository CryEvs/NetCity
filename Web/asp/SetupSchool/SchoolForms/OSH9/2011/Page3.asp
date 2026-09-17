<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
%>
<script><!--

	isInfoFormValid();
    function CalculateOSH() {
        SumRowAllCols(2, 2, 3, 3, 3, 6);
        SumRowAllCols(2, 7, 3, 3, 8, 12);
        SumRowAllCols(2, 13, 3, 3, 14, 15);
        SumRowAllCols(2, 16, 3, 3, 17, 30);
        SumRowAllCols(2, 31, 3, 3, 32, 38);
        SumRowAllCols(2, 43, 3, 3, 44, 45);
        SumRowAllCols(2, 46, 3, 3, 47, 54);
        SumRowAllCols(2, 57, 3, 3, 58, 59);
        SumRowAllCols(2, 60, 3, 3, 61, 62);
        SumRowAllCols(2, 65, 3, 3, 66, 82);
        SumRowAllCols(2, 83, 3, 3, 84, 85);
        SumRowAllCols(2, 86, 3, 3, 87, 90);
        SumRowAllCols(2, 91, 3, 3, 92, 94);
        SumRowAllCols(2, 97, 3, 3, 98, 100);
        SumRowAllCols(2, 101, 3, 3, 102, 104);
        SumRowAllCols(2, 105, 3, 3, 106, 113);
        SumRowAllCols(2, 114, 3, 3, 115, 134);
        SumRowAllCols(2, 135, 3, 3, 136, 145);
        SumRow(2, 55, [3], 56, 56);
        SumRow(2, 63, [3], 64, 64);
        SumRow(2, 95, [3], 96, 96);
        SumRowByIndex(2, 1, [3], [2, 7, 13, 16, 31, 43, 46, 57, 60, 65, 83, 86, 91, 97, 101, 105, 114, 135, 39, 41, 55, 63, 95, 146]);
        return true;
    }
//--></script>
<%
End Sub
%>
