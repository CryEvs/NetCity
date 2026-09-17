<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 9
End Function
Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section10_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section11_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
function CalculateOSH() {
    ValidateIncludedCols(10, 12, [15], 1, 1);
    ValidateIncludedCols(10, 13, [16], 1, 1);
    ValidateIncludedCols(10, 14, [17], 1, 1);
    SumCol(11, 3, [1, 2, 3], 4, 7);
	return true;
}
//--></script>
<%
	End If
End Sub
%>

