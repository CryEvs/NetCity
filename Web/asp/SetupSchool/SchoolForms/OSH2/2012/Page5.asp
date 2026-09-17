<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE=../../../SchoolSettings_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
    function CalculateOSH() {
        ValidateIncludedRows(5, 1, [2, 3, 4], 3, 3);
        ValidateIncludedRows(5, 5, [6], 3, 3);
        ValidateIncludedRows(5, 9, [10, 11, 12, 13], 3, 3);
        ValidateIncludedRows(5, 14, [15], 3, 3);
        SumRowByIndex(5, 7, [3], [8, 9, 14, 16]);
        return true;
    }
   
//--></script>
<%
	End If
End Sub %>
