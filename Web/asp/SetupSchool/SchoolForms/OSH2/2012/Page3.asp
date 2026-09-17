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
		SumRow(3, 2, [3, 4], 3, 5);
		SumRow(3, 6, [3, 4], 7, 12);
		SumRow(3, 13, [3, 4], 14, 16);
		SumRow(3, 18, [3, 4], 19, 22);
		SumRowByIndex(3, 1, [3, 4], [2, 6, 13, 17]);
		ValidateCell(3, 2, 3, [26], null);
        return true;
    }
   
//--></script>
<%
	End If
End Sub %>
