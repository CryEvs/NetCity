<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 8
End Function
Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
    function CalculateOSH() {
		SumRowAllCols(9, 8, 3, 30, 9, 27);
        SumRowAllColsByIndex(9, 7, 3, 30, [8, 28, 29, 30, 31, 32, 33, 34]);
        SumRowAllCols(9, 2, 3, 30, 3, 6);
    	SumRowAllColsByIndex(9, 1, 3, 30, [2, 7, 37, 38]);
		SumRow(9, 39, [null], 41, 42);
		
        ValidateIncludedRows(9, 7, [35, 36], 3, 30);
        ValidateCell(9, 39, null, [40], null);
		ValidateCell(9, 1, 3, [43], null);
		ValidateCell(9, 1, 13, [44], null);
		ValidateCell(9, 8, 3, [45], null);
		ValidateCell(9, 2, 3, [46], null);
    	ValidateDividedCols(9, 3, [5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 1, 38);
        
        return true;
    }
//--></script>
<%
	End If
End Sub
%>
