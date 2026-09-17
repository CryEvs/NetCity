<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE=../../../SchoolSettings_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
    function CalculateOSH() {
        ValidateIncludedRows(5, 2, [3], 3, 6);
        ValidateIncludedRows(5, 4, [5, 6, 7, 8], 3, 6);
        ValidateIncludedRows(5, 9, [10], 3, 6);
        SumRowByIndex(6, 1, [3, 4, 5, 6], [2, 4, 9, 11]);
        return true;
    }
   
//--></script>
<%
	End If
End Sub %>
