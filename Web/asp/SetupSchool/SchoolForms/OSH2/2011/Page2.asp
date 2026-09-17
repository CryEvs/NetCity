<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE=../../../SchoolSettings_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
    function CalculateOSH() {
        SumRow(2, 1, [3], 2, 3);
        SumRow(2, 3, [3], 4, 8);
        return true;
    }
   
//--></script>
<%End If%>
<%End Sub %>
