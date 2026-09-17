<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

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
	SumColAllRows('01.2', 5, 2, 23, 3, 4);
	SumColAllRows('01.2', 8, 2, 23, 6, 7);
	SumRowAllColsByIndex('01.2', 3, 3, 8, [4,5,6,8,9,10]);
	SumRowAllColsByIndex('01.2', 1, 3, 8, [2,3,11,12,13,15,16,17]);
	SumRowAllColsByIndex('01.2', 24, 3, 3, [26, 28, 30]);
	SumRowAllColsByIndex('01.2', 25, 3, 3, [27, 29, 31]);
	
	ValidateDividedRows('01.2', 6, [7], 3, 8);
	ValidateDividedRows('01.2', 13, [14], 3, 8);
	ValidateDividedRows('01.2', 19, [20], 3, 8);
	ValidateIncludedCols('01.2', 5, [8], 1, 23);
	ValidateIncludedRows('01.2', 26, [27], 3, 3);
	ValidateIncludedRows('01.2', 28, [29], 3, 3);
	ValidateIncludedRows('01.2', 30, [31], 3, 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.2_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim arrCounts
	Dim i
	Dim objSchoolList, objStudentsCount
	Dim nSettlementType
	Redim arrCounts(17,2)
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	Call ClearForm
	Set objStudentsCount = objSchoolFormComponent.CalcStatFormParameterByFormAndSettlementType(filterEMID, strCommonYearID, _
		GetFormParameter(sourceFormId, 4, 15, 4, Null), bFormSpec)
	Call CalcStudentsCount(objStudentsCount,arrCounts)

	For i = 2 To 17
		If i <> 13 Then
			Call SetLoadedRIKValue( "T01.2" & LPad2(i) & "03", arrCounts(i,1) )
			Call SetLoadedRIKValue( "T01.2" & LPad2(i) & "04", arrCounts(i,2) )
		End If
	Next
	
	Call CalculateKRO(arrCounts)

	Call GetSplitEOSumValues("T01.21803", "T01.21804", sourceFormId, 4, 17, 3, Null)
	Call GetSplitEOSumValues("T01.21903", "T01.21904", sourceFormId, 8, 3, 3, Null)
	Call GetSplitEOSumValues("T01.22003", "T01.22004", sourceFormId, 8, 4, 3, Null)
	Call GetSplitEOSumValues("T01.22103", "T01.22104", sourceFormId, 7, 1, 4, Null)
	Call GetSplitEOSumValues("T01.22203", "T01.22204", sourceFormId, 7, 1, 6, Null)
	Call GetSplitEOSumValuesForEOTypes("T01.22303", "T01.22304", sourceFormId, 4, 27, 3, Null, Array(2, 5, 6, 7, 10, 13))


	' Sum ???
	Call GetEOSumValues("T01.22603", sourceFormId, 4, 20, 3, Null)
	Call GetEOSumValues("T01.22703", sourceFormId, 4, 21, 3, Null)
	Call GetEOSumValues("T01.22803", sourceFormId, 4, 22, 3, Null)
	Call GetEOSumValues("T01.22903", sourceFormId, 4, 23, 3, Null)
	Call GetEOSumValues("T01.23003", sourceFormId, 4, 24, 3, Null)
	Call GetEOSumValues("T01.23103", sourceFormId, 4, 25, 3, Null)

	Call GetEOSumValuesForEOTypes("T01.23203", sourceFormId, 4, 28, 3, Null, Array(2, 5, 6, 7, 10, 13) ) 'Исключены коррекционные школы 11
	Call GetEOSumValues("T01.23303", sourceFormId, 4, 29, 3, Null)
End Sub

Sub CalcStudentsCount(objRs,arrCounts)
	Dim nSettlementType

	While Not objRs.EOF
		If objRs("SETTLEMENTTYPEID") = 1 Then nSettlementType = 2 Else nSettlementType = 1
		Select Case CInt(objRs("EOFORMID"))
			Case 7,8,9
				arrCounts(2,nSettlementType) = arrCounts(2,nSettlementType) + objRs("SUMMA")
			Case 18,19,20,21,22,23,24,25,26
				Select Case CInt(objRs("EOFORMID"))
					Case 18
						 arrCounts(4,nSettlementType) = arrCounts(4,nSettlementType) + objRs("SUMMA")
					Case 19
						 arrCounts(5,nSettlementType) = arrCounts(5,nSettlementType) + objRs("SUMMA")
					Case 20, 24
						 arrCounts(6,nSettlementType) = arrCounts(6,nSettlementType) + objRs("SUMMA")
					Case 21
						 arrCounts(8,nSettlementType) = arrCounts(8,nSettlementType) + objRs("SUMMA")
					Case 22,25
						 arrCounts(9,nSettlementType) = arrCounts(9,nSettlementType) + objRs("SUMMA")
					Case 23,26
						 arrCounts(10,nSettlementType) = arrCounts(10,nSettlementType) + objRs("SUMMA")
				 End Select
			Case 28,29
				arrCounts(11,nSettlementType) = arrCounts(11,nSettlementType) + objRs("SUMMA")
			Case 27
				arrCounts(12,nSettlementType) = arrCounts(12,nSettlementType) + objRs("SUMMA")
			Case 34,35,36,37,38
				arrCounts(17,nSettlementType) = arrCounts(16,nSettlementType) + objRs("SUMMA")
			Case 39,40
				arrCounts(15,nSettlementType) = arrCounts(14,nSettlementType) + objRs("SUMMA")
			Case 41,42,43,44,45
				arrCounts(13,nSettlementType) = arrCounts(13,nSettlementType) + objRs("SUMMA")
			Case 51,52,53
				arrCounts(16,nSettlementType) = arrCounts(16,nSettlementType) + objRs("SUMMA")
			Case 46,47,48,49,50,53
				arrCounts(18,nSettlementType) = arrCounts(18,nSettlementType) + objRs("SUMMA")
				Select Case CInt(objRs("EOFORMID"))
					Case 46
						 arrCounts(2,nSettlementType) = arrCounts(2,nSettlementType) + objRs("SUMMA")
					Case 47,48
						 arrCounts(3,nSettlementType) = arrCounts(3,nSettlementType) + objRs("SUMMA")
					Case 49,50
						 arrCounts(13,nSettlementType) = arrCounts(13,nSettlementType) + objRs("SUMMA")
				 End Select
		End Select
		objRs.MoveNExt
	Wend
End Sub

Sub CalculateKRO(arrCounts)
	Dim nCityRes, nCityResAll, nProvinceRes, nProvinceResAll, nSumCityRes, nSumProvinceRes, i, sourceFormId
	
	For i = 9 To 23 Step 2
		Call objSchoolFormComponent.CalcSplittedStatFormParameter(strEMID, strCommonYearID, , , sourceFormId, 4, 15, i, Null, nCityResAll, nProvinceResAll, bFormSpec)
		Call objSchoolFormComponent.CalcSplittedStatFormParameter(strEMID, strCommonYearID, , Array(41,42,43,44,45), sourceFormId, 4, 15, i, Null, nCityRes, nProvinceRes, bFormSpec)

		nCityRes = nCityResAll - nCityRes
		nProvinceRes = nProvinceResAll - nProvinceRes
		nSumCityRes = nSumCityRes + nCityRes
		nSumProvinceRes = nSumProvinceRes + nProvinceRes
	Next
	
	Call SetLoadedRIKValue( "T01.21303", arrCounts(13,1) + nSumCityRes)
	Call SetLoadedRIKValue( "T01.21304", arrCounts(13,2) + nSumProvinceRes)
	
	Call SetLoadedRIKValue( "T01.21403", nSumCityRes)
	Call SetLoadedRIKValue( "T01.21404", nSumProvinceRes)
End Sub

Sub ClearForm()
	Dim nRow, nCol
	For nCol = 3 to 4
		For nRow = 2 to 23
			Call SetLoadedRIKValue("T01.2" & LPad2(nRow) & LPad2(nCol), "")
		Next
	Next
End Sub
%>

