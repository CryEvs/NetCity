<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>
<script> <!--
	isInfoFormValid();
	
	function CalculateOSH() {
		SumColAllRows(2, 15, 1, 6, 3, 14);
		ValidateIncludedCols(2, 15, [16], 1, 6);
		return true;
	}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<%
End Sub
 %>
