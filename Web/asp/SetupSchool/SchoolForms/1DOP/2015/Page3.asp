<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
const rowcount = 2
const colcount = 7

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>
<script> 
<!--
function CalculateOSH()
{
	ValidateIncludedCols('02', 3, [4, 6], 1, 2);
	ValidateIncludedCols('02', 3, [5, 7], 1, 2);
	ValidateIncludedCols('02', 4, [5], 1, 2);
	ValidateIncludedCols('02', 6, [7], 1, 2);
	ValidateIncludedRows('02', 1, [2], 3, 7);

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

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function

Sub AutoCalcEMInfo()
End Sub

Sub AutoCalc()
	Dim rsEmploees
	Dim i, j

	Set rsEmploees = objNSNET.GetOdoEmploeesCount(strSchoolyearid)
	TestError obLanguage("Common","kUnexpErr")

	If Not rsEmploees.EOF Then
		For i = 1 to rowcount
			For j = 3 to colcount
				Call SetLoadedOSHValue("T02" + FormatValueIndex(i) + FormatValueIndex(j), GetSafeLng(rsEmploees((i-1)*5+j-3), 0))
			Next
		Next
	End If
End Sub
%>