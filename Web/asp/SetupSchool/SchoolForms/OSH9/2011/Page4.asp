<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
%>
<script><!--

	isInfoFormValid();
    function CalculateOSH() {
        SumCol(3, 3, [1, 2], 4, 9);
        return true;
    }
//--></script>
<%
End Sub
%>
