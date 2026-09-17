<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 14
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumRowAllColsByIndex(15, 1,3,5,[3,5]);
	SumRowAllColsByIndex(15, 2,3,5,[4,6]);
	
	ValidateIncludedRows(15, 3, [4], 3, 5);
	ValidateIncludedRows(15, 5, [6], 3, 5);
	ValidateIncludedRows(15, 7, [8], 3, 5);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section15_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	Call GetEOSumValues("T150303", sourceFormId, 22, 1, 3, Null)
	Call GetEOSumValues("T150304", sourceFormId, 22, 1, 4, Null)
	Call GetEOSumValues("T150305", sourceFormId, 22, 1, 5, Null)
	Call GetEOSumValues("T150403", sourceFormId, 22, 2, 3, Null)
	Call GetEOSumValues("T150404", sourceFormId, 22, 2, 4, Null)
	Call GetEOSumValues("T150405", sourceFormId, 22, 2, 5, Null)

	Call GetEOSumValues("T150503", sourceFormId, 22, 3, 3, Null)
	Call GetEOSumValues("T150504", sourceFormId, 22, 3, 4, Null)
	Call GetEOSumValues("T150505", sourceFormId, 22, 3, 5, Null)
	Call GetEOSumValues("T150603", sourceFormId, 22, 4, 3, Null)
	Call GetEOSumValues("T150604", sourceFormId, 22, 4, 4, Null)
	Call GetEOSumValues("T150605", sourceFormId, 22, 4, 5, Null)
	
	Call GetEOSumValues("T150703", sourceFormId, 22, 5, 3, Null)
	Call GetEOSumValues("T150704", sourceFormId, 22, 5, 4, Null)
	Call GetEOSumValues("T150705", sourceFormId, 22, 5, 5, Null)
	Call GetEOSumValues("T150803", sourceFormId, 22, 6, 3, Null)
	Call GetEOSumValues("T150804", sourceFormId, 22, 6, 4, Null)
	Call GetEOSumValues("T150805", sourceFormId, 22, 6, 5, Null)
End Sub
%>

