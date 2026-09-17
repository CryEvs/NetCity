<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
	<script> <!--
		isInfoFormValid();
		function CalculateOSH() {
			SumRow(19, 1, [3, 4, 5, 6], 2, 9);

			return true;
		}
		//--></script>
	<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section19_inc.asp" -->
	<%
End Sub
%>
