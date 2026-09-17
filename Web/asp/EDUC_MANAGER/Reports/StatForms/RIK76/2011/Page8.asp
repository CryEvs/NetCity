<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

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
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	If Not IsMns() Then
		Call GetEOSumValues("T070103", sourceFormId, 10, 1, 3, Null)
		Call GetEOSumValues("T070203", sourceFormId, 10, 3, 3, Null)
		Call GetEOSumValues("T070303", sourceFormId, 10, 5, 3, Null)

		Call GetEOSumValues("T070403", sourceFormId, 10, 2, 3, Null)
		Call GetEOSumValues("T070503", sourceFormId, 10, 4, 3, Null)
		Call GetEOSumValues("T070603", sourceFormId, 10, 6, 3, Null)

		Call GetEOSumValues("T080103", sourceFormId, 11, 1, 3, Null)
		Call GetEOSumValues("T080203", sourceFormId, 11, 2, 3, Null)
	End If
End Sub
%>
