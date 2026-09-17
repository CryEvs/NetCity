<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColAllRows(2, 5, 1, 4, 3, 4);
	SumColAllRows(3, 5, 1, 19, 3, 4);
	SumColAllRows(3, 5, 21, 22, 3, 4);
	SumRowAllCols(2, 4, 3, 5, 1, 3);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
	Dim sourceFormId, arrEOTypes

	Call ClearForm

	sourceFormId = GetSourceFormId()
	arrEOTypes = Array(2,5,6,7,13)

	If Not IsMns() Then
		Call GetSplitEOSumValuesForEOTypes("T020103", "T020104", sourceFormId, 3, 1, 3, Null, arrEOTypes)
		Call GetSplitEOSumValuesForEOTypes("T020203", "T020204", sourceFormId, 3, 2, 3, Null, arrEOTypes)
		Call GetSplitEOSumValuesForEOTypes("T020303", "T020304", sourceFormId, 3, 3, 3, Null, arrEOTypes)
	End If

	Call GetSplitGEOSumValuesArrForEOTypes("T030103", "T030104", Array( _
		GetFormParameter(sourceFormId, 2, 1, 3, Null), _
		GetFormParameter(sourceFormId, 2, 2, 3, Null), _
		GetFormParameter(sourceFormId, 2, 3, 3, Null), _
		GetFormParameter(sourceFormId, 2, 4, 3, Null), _
		GetFormParameter(sourceFormId, 2, 5, 3, Null)), arrEOTypes)

	Call GetSplitEOSumValuesForEOTypes("T030203", "T030204", sourceFormId, 2, 4, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T030303", "T030304", sourceFormId, 2, 5, 3, Null, arrEOTypes)

	Call GetSplitGEOSumValuesArrForEOTypes("T030403", "T030404", Array( _
		GetFormParameter(sourceFormId, 2, 6, 3, Null), _
		GetFormParameter(sourceFormId, 2, 7, 3, Null), _
		GetFormParameter(sourceFormId, 2, 8, 3, Null), _
		GetFormParameter(sourceFormId, 2, 9, 3, Null), _
		GetFormParameter(sourceFormId, 2, 10, 3, Null)), arrEOTypes)

	Call GetSplitEOSumValuesForEOTypes("T030503", "T030504", sourceFormId, 2, 10, 3, Null, arrEOTypes)

	Call GetSplitGEOSumValuesArrForEOTypes("T030603", "T030604", Array( _
		GetFormParameter(sourceFormId, 2, 11, 3, Null), _
		GetFormParameter(sourceFormId, 2, 12, 3, Null), _
		GetFormParameter(sourceFormId, 2, 13, 3, Null), _
		GetFormParameter(sourceFormId, 2, 14, 3, Null)), arrEOTypes)

	Call GetSplitEOSumValuesForEOTypes("T030703", "T030704", sourceFormId, 2, 12, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T030803", "T030804", sourceFormId, 2, 13, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T030903", "T030904", sourceFormId, 2, 14, 3, Null, arrEOTypes)

	Call GetSplitEOSumValuesForEOTypes("T031003", "T031004", sourceFormId, 2, 16, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031103", "T031104", sourceFormId, 2, 17, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031203", "T031204", sourceFormId, 2, 18, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031303", "T031304", sourceFormId, 2, 19, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031403", "T031404", sourceFormId, 2, 20, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031503", "T031504", sourceFormId, 2, 21, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031603", "T031604", sourceFormId, 2, 22, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031703", "T031704", sourceFormId, 2, 23, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031803", "T031804", sourceFormId, 2, 24, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T031903", "T031904", sourceFormId, 2, 25, 3, Null, arrEOTypes)

	Call GetSplitEOSumValuesForEOTypes("T032103", "T032104", sourceFormId, 2, 26, 3, Null, arrEOTypes)
	Call GetSplitEOSumValuesForEOTypes("T032203", "T032204", sourceFormId, 2, 27, 3, Null, arrEOTypes)
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 4
		For nRow = 1 to 3
			Call SetLoadedRIKValue(GetFormFieldName(2, nRow, nCol), "")
		Next
	Next
	
	For nCol = 3 to 4
		For nRow = 1 to 19
			Call SetLoadedRIKValue(GetFormFieldName(3, nRow, nCol), "")
		Next
	Next
	
	For nCol = 3 to 4
		For nRow = 21 to 22
			Call SetLoadedRIKValue(GetFormFieldName(3, nRow, nCol), "")
		Next
	Next
End Sub
%>
