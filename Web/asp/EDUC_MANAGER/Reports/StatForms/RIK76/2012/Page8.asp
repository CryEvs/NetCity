<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	ValidateDividedRows(8, 1, [2], 3, 3);
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
	If Not IsMns() Then
		Call GetEOSumValues("T070103", StatForm_Osh1, 10, 1, 3, Null)
		Call GetEOSumValues("T070203", StatForm_Osh1, 10, 3, 3, Null)
		Call GetEOSumValues("T070303", StatForm_Osh1, 10, 5, 3, Null)

		Call GetEOSumValues("T070403", StatForm_Osh1, 10, 2, 3, Null)
		Call GetEOSumValues("T070503", StatForm_Osh1, 10, 4, 3, Null)
		Call GetEOSumValues("T070603", StatForm_Osh1, 10, 6, 3, Null)

		Call GetEOSumValues("T080103", StatForm_Osh1, 11, 1, 3, Null)
		Call GetEOSumValues("T080203", StatForm_Osh1, 11, 2, 3, Null)
		Call GetEOSumValues("T080303", StatForm_Osh1, 11, 3, 3, Null)
	End If
End Sub
%>
