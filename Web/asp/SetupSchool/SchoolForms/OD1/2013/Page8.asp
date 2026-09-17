<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(7,3,3,3,4,8);
	SumRowAllCols(7,1,3,3,2,3);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo()

End Sub
%>