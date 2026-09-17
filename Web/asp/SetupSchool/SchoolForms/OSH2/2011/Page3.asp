<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE=../../../SchoolSettings_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
    function CalculateOSH() {
        ValidateIncludedRows(3, 5, [6,7,8,9], 3, 4);
        ValidateIncludedRows(3, 10, [11], 3, 4);
        SumRow(3, 15, [3, 4], 16, 21);
        SumRow(3, 22, [3, 4], 23, 25);
        SumRow(3, 27, [3, 4], 28, 30);
        SumRowByIndex(3, 2, [3, 4], [3, 13, 14]);
        SumRowByIndex(3, 3, [3, 4], [4, 5, 10, 12]);
        SumRowByIndex(3, 1, [3, 4], [2, 15, 22, 26]);
        return true;
    }
   
//--></script>
<%End If%>
<%End Sub %>
