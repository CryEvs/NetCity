<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
%>
<script><!--

	isInfoFormValid();
    function CalculateOSH() {
        SumCol(1, 3, [1], 4, 9);
        SumColAllRows(1, 3, 4, 7, 4, 9);
        SumColAllRows(1, 3, 9, 13, 4, 9);
        SumColAllRows(1, 3, 15, 16, 4, 9);
        SumColAllRows(1, 3, 18, 31, 4, 9);
        SumColAllRows(1, 3, 33, 39, 4, 9);
        SumColAllRows(1, 3, 4, 7, 4, 9);
        SumCol(1, 3, [41], 4, 9);
        SumCol(1, 3, [43], 4, 9);   
        SumColAllRows(1, 3, 45, 46, 4, 9);
        SumColAllRows(1, 3, 48, 55, 4, 9);
        SumCol(1, 3, [57], 4, 9);
        SumColAllRows(1, 3, 59, 60, 4, 9);
        SumColAllRows(1, 3, 62, 63, 4, 9);  
        SumCol(1, 3, [65], 4, 9);
        SumColAllRows(1, 3, 67, 83, 4, 9);
        SumColAllRows(1, 3, 85, 86, 4, 9);
        SumColAllRows(1, 3, 88, 91, 4, 9);
        SumColAllRows(1, 3, 93, 95, 4, 9);  
        SumCol(1, 3, [97], 4, 9);
        SumColAllRows(1, 3, 99, 101, 4, 9); 
        SumColAllRows(1, 3, 103, 105, 4, 9);
        SumColAllRows(1, 3, 107, 114, 4, 9);
        SumColAllRows(1, 3, 116, 135, 4, 9);
        SumColAllRows(1, 3, 137, 146, 4, 9);
    	SumCol(1, 3, [147], 4, 9);

        SumRowAllCols(1, 3, 3, 9, 4, 7);
        SumRowAllCols(1, 8, 3, 9, 9, 13);
        SumRowAllCols(1, 14, 3, 9, 15, 16);
        SumRowAllCols(1, 17, 3, 9, 18, 31);
        SumRowAllCols(1, 32, 3, 9, 33, 39);
        SumRowAllCols(1, 44, 3, 9, 45, 46);
        SumRowAllCols(1, 47, 3, 9, 48, 55);
        SumRowAllCols(1, 58, 3, 9, 59, 60);
        SumRowAllCols(1, 61, 3, 9, 62, 63);
        SumRowAllCols(1, 66, 3, 9, 67, 83);
        SumRowAllCols(1, 84, 3, 9, 85, 86);
        SumRowAllCols(1, 87, 3, 9, 88, 91);
        SumRowAllCols(1, 92, 3, 9, 93, 95);
        SumRowAllCols(1, 98, 3, 9, 99, 101);
        SumRowAllCols(1, 102, 3, 9, 103, 105);
        SumRowAllCols(1, 106, 3, 9, 107, 114);
        SumRowAllCols(1, 115, 3, 9, 116, 135);
        SumRowAllCols(1, 136, 3, 9, 137, 146);
        SumRow(1, 40, [3,4,5,6,7,8,9], 41, 41);
        SumRow(1, 42, [3, 4, 5, 6, 7, 8, 9], 43, 43);
        SumRow(1, 56, [3, 4, 5, 6, 7, 8, 9], 57, 57);
        SumRow(1, 64, [3, 4, 5, 6, 7, 8, 9], 65, 65);
        SumRow(1, 96, [3, 4, 5, 6, 7, 8, 9], 97, 97);
        SumRowByIndex(1, 2, [3, 4, 5, 6, 7, 8, 9], [3, 8, 14, 17, 32, 40, 42, 44, 47, 56, 58, 61, 64, 66, 84, 87, 92, 96, 98, 102, 106, 115, 136, 147]);
        return true;
    }
//--></script>
<%
End Sub
%>
