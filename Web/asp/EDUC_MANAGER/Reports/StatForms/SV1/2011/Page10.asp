<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	SumColForRowRange(12, 3, 1, 3, [4, 5, 6, 7]);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section12_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	Call GetEOSumValuesForEOTypes("T120104", sourceFormId, 11, 1, 4, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T120105", sourceFormId, 11, 1, 5, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T120106", sourceFormId, 11, 1, 6, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T120107", sourceFormId, 11, 1, 7, Empty, Array(8))
	
	Call GetEOSumValuesForEOTypes("T120206", sourceFormId, 11, 2, 6, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T120207", sourceFormId, 11, 2, 7, Empty, Array(8))
	
	Call GetEOSumValuesForEOTypes("T120304", sourceFormId, 11, 3, 4, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T120305", sourceFormId, 11, 3, 5, Empty, Array(8))
End Sub
%>

