<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 12
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
		<script> <!--
			isInfoFormValid();
		function CalculateOSH()
		{
			SumRow(21, 15, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 1, 14);
			SumCol(21, 4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, 12);
			ValidateIncludedCols(21, 3, [4], 1, 15);
			ValidateIncludedCols(21, 3, [13], 1, 15);
			return true;
		}
		//--></script>
		<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section21_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalc( )
	On Error Resume Next
	Dim startDate, objChildInvalidInfo, objChildTypeDisabilityInfo
	Call ClearAvtoCalcValue()
	
	startDate = #22/09/2011#
	Set objChildTypeDisabilityInfo = objNSNET.GetOSH1ChildTypeDisabilityInfo(strCurrYearID, startDate, false, bIsMNS)
	Set objChildInvalidInfo = objNSNET.GetOSH1ChildInvalidInfo(strCurrYearID, startDate, false, bIsMNS)
	
	Call LoadCell("STUDENTCOUNT", "03", objChildTypeDisabilityInfo)
	Call LoadCell("type1", "05", objChildTypeDisabilityInfo)
	Call LoadCell("type2", "06", objChildTypeDisabilityInfo)
	Call LoadCell("type3", "07", objChildTypeDisabilityInfo)
	Call LoadCell("type4", "08", objChildTypeDisabilityInfo)
	Call LoadCell("type5", "09", objChildTypeDisabilityInfo)
	Call LoadCell("type6", "10", objChildTypeDisabilityInfo)
	Call LoadCell("type7", "11", objChildTypeDisabilityInfo)
	Call LoadCell("type8", "12", objChildTypeDisabilityInfo)
	Call LoadCell("STUDENTCOUNT", "13", objChildInvalidInfo)
End Sub

Sub LoadCell(nameCol, numberCol, objInfo)
	Dim NumberRow
	Do While Not objInfo.EoF
		NumberRow = CLng(objInfo("GRADE")) + 1
		NumberRow = IIF(NumberRow > 2, NumberRow + 1, NumberRow)
		NumberRow = IIF(NumberRow<10, "0" & NumberRow, NumberRow)
		Call SetLoadedOSHValue( "T21" & NumberRow & numberCol, objInfo(nameCol))
		objInfo.MoveNext
	Loop
	objInfo.MoveFirst
End Sub

Sub ClearAvtoCalcValue()
	Dim ArrayClearValues, nCount, i, j, row, col

	ArrayClearValues = Array("T210103","T210203","T210303","T210403","T210503","T210603","T210703","T210803","T210903","T211003","T211103","T211203","T211303","T211403")
	nCount = Ubound(ArrayClearValues)
	For i=0 to nCount
		Call SetLoadedOSHValue( ArrayClearValues(i), 0)
	Next
	
	For j=5 to 13
		For i = 1 to 14 
			row = IIF(i<10, "0" & i, i)
			col = IIF(j<10, "0" & j, j)
			Call SetLoadedOSHValue("T21" &  row & col, 0)
		Next
	Next
End Sub
%>
