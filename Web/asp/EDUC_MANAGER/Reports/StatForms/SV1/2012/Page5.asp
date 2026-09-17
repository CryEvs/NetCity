<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	ValidateDividedRows(6, 1, [2], 4, 7);
	SumColForRowRange(6, 3, 1, 3, [4,5,6,7]);
	SumColForRowRange(7, 3, 1, 2, [4,5,6,7, 8, 9, 10, 11]);
	ValidateDividedRows(7, 1, [2], 3, 11);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
    Dim i, j
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

    For i = 1 to 3
        For j = 4 to 7
            Call GetEOSumValuesForEOTypes(GetFieldName(6,i,j), sourceFormId, 5, i, j, Empty, Array(8))
        Next
    Next
	Call GetEOSumValuesForEOTypes(GetFieldName(6,4,3), sourceFormId, 5, 4, -1, Empty, Array(8))
	
	For i = 1 to 2
        For j = 4 to 11
            Call GetEOSumValuesForEOTypes(GetFieldName(7,i,j), sourceFormId, 6, j-2, i+2, Empty, Array(8))
        Next
    Next
End Sub
%>

