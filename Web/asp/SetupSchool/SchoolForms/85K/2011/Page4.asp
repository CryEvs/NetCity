<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('02.1', 2, 3, 3, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 3, 3, [2,11,12,15])
	SumRowAllCols('02.1', 16, 3, 3, 17, 19)

	SumRowAllCols('02.1', 2, 4, 4, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 4, 4, [2,11,12,15])

	SumRowAllCols('02.1', 2, 5, 5, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 5, 5, [2,11,12,15])
	
	SumRowAllCols('02.1', 2, 6, 6, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 6, 6, [2,11,12,15])
	SumRowAllCols('02.1', 16, 6, 6, 17, 19)
	
	SumRowAllCols('02.1', 2, 7, 7, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 7, 7, [2,11,12,15])
	
	ValidateIncludedRows('02.1', 1, [2, 11, 12, 15], 3, 8);
	
	ValidateDividedRows('02.1', 1, [16, 20, 21], 3, 8);
	ValidateIncludedRows('02.1', 2, [3, 4, 5, 6, 7, 8, 9, 10], 3, 8);
	ValidateIncludedRows('02.1', 12, [13, 14], 3, 8);
	ValidateIncludedRows('02.1', 16, [17, 18, 19], 3, 8);
	
	ValidateIncludedCols('02.1', 3, [4], 1, 15);
	ValidateIncludedCols('02.1', 5, [6], 1, 15);
	ValidateIncludedCols('02.1', 7, [8], 1, 15);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function

Sub AutoCalcEMInfo( )
End Sub

Sub AutoCalc()
	Dim obj85KChildTypeDisabilityInfo, count, type1, type2, type3, type4, type5, type6, type7, sum, i
	Set obj85KChildTypeDisabilityInfo = objNSNET.Get85KSection21Info(4, Empty, Array("113", "102, 111, 110", "103, 117, 118", "104, 108", "109", "105", "112"), Empty, Empty, strCurrYearID, dtPresentationDate)

	Set type1 = obj85KChildTypeDisabilityInfo("type1")
	Set type2 = obj85KChildTypeDisabilityInfo("type2")
	Set type3 = obj85KChildTypeDisabilityInfo("type3")
	Set type4 = obj85KChildTypeDisabilityInfo("type4")
	Set type5 = obj85KChildTypeDisabilityInfo("type5")
	Set type6 = obj85KChildTypeDisabilityInfo("type6")
	Set type7 = obj85KChildTypeDisabilityInfo("type7")

	Call SetLoadedOSHValue("T02.10303", type1.Value)
	Call SetLoadedOSHValue("T02.10403", type2.Value)
	Call SetLoadedOSHValue("T02.10503", type3.Value)
	Call SetLoadedOSHValue("T02.10603", type4.Value)
	Call SetLoadedOSHValue("T02.10703", type5.Value)
	Call SetLoadedOSHValue("T02.10803", type6.Value)
	Call SetLoadedOSHValue("T02.10903", type7.Value)

	Dim objCountDevCom
	Set objCountDevCom = objNSNET.Get85KSection21Info(1, 4, Array("101"), Empty, Empty, strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")
	Call SetLoadedOSHValue("T02.11103", type1)

	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("106", "107"), Empty, Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	type1 = objCountDevCom("type1")
	type2 = objCountDevCom("type2")

	Call SetLoadedOSHValue("T02.11203", count)
	Call SetLoadedOSHValue("T02.11303", type1)
	Call SetLoadedOSHValue("T02.11403", type2)

	Set objCountDevCom = objNSNET.Get85KSection21Info(3, Empty, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11503", count)
	
	Set objCountDevCom = objNSNET.Get85KSection21Info(Empty, 4, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11603", count)

	sum = 0
	Set objCountDevCom = objNSNET.Get85KSection21Info(4, Empty, Array("113", "102, 111, 110", "103, 117, 118", "104, 108", "109", "105", "112"), Empty, 1050, strCurrYearID, dtPresentationDate)
	For i = 1 to 7
		sum = sum + objCountDevCom(i)
	Next
	Set objCountDevCom = objNSNET.Get85KSection21Info(1, Empty, Array("101"), Empty, 1050, strCurrYearID, dtPresentationDate)
	sum = sum + objCountDevCom(1)
	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("106", "107"), Empty, 1050, strCurrYearID, dtPresentationDate)
	sum = sum + objCountDevCom(1) + objCountDevCom(2)
	Set objCountDevCom = objNSNET.Get85KSection21Info(3, Empty, Empty, Empty, 1050, strCurrYearID, dtPresentationDate)
	sum = sum + objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.12003", sum)

	sum = 0
	Set objCountDevCom = objNSNET.Get85KSection21Info(4, Empty, Array("113", "102, 111, 110", "103, 117, 118", "104, 108", "109", "105", "112"), "3, 8", Empty, strCurrYearID, dtPresentationDate)
	For i = 1 to 7
		sum = sum + objCountDevCom(i)
	Next
	Set objCountDevCom = objNSNET.Get85KSection21Info(1, Empty, Array("101"), "3, 8", Empty, strCurrYearID, dtPresentationDate)
	sum = sum + objCountDevCom(1)
	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("106", "107"), "3, 8", Empty, strCurrYearID, dtPresentationDate)
	sum = sum + objCountDevCom(1) + objCountDevCom(2)
	Set objCountDevCom = objNSNET.Get85KSection21Info(3, Empty, Empty, "3, 8", Empty, strCurrYearID, dtPresentationDate)
	sum = sum + objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.12103", sum)

	Set objCountDevCom = objNSNET.Get85KSection21Info(4, Empty, Array("113", "102, 110, 111", "103, 117, 118", "104, 108", "109", "105", "112"), "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")
	type2 = objCountDevCom("type2")
	type3 = objCountDevCom("type3")
	type4 = objCountDevCom("type4")
	type5 = objCountDevCom("type5")
	type6 = objCountDevCom("type6")
	type7 = objCountDevCom("type7")

	Call SetLoadedOSHValue("T02.10304", type1)
	Call SetLoadedOSHValue("T02.10404", type2)
	Call SetLoadedOSHValue("T02.10504", type3)
	Call SetLoadedOSHValue("T02.10604", type4)
	Call SetLoadedOSHValue("T02.10704", type5)
	Call SetLoadedOSHValue("T02.10804", type6)
	Call SetLoadedOSHValue("T02.10904", type7)

	Set objCountDevCom = objNSNET.Get85KSection21Info(1, Empty, Array("113", "101"), "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")

	Call SetLoadedOSHValue("T02.11104", type1)

	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("106"), "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	type1 = objCountDevCom("type1")

	Call SetLoadedOSHValue("T02.11204", count)
	Call SetLoadedOSHValue("T02.11304", type1)

	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("107"), "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")
	Call SetLoadedOSHValue("T02.11404", type1)

	Set objCountDevCom = objNSNET.Get85KSection21Info(3, Empty, Empty, "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11504", count)

	Set objCountDevCom = objNSNET.Get85KGroupCount(4, Empty, Array("113", "102, 110, 111", "103, 117, 118", "104, 108", "109", "105", "112"), Empty, strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")
	type2 = objCountDevCom("type2")
	type3 = objCountDevCom("type3")
	type4 = objCountDevCom("type4")
	type5 = objCountDevCom("type5")
	type6 = objCountDevCom("type6")
	type7 = objCountDevCom("type7")

	Call SetLoadedOSHValue("T02.10305", type1)
	Call SetLoadedOSHValue("T02.10405", type2)
	Call SetLoadedOSHValue("T02.10505", type3)
	Call SetLoadedOSHValue("T02.10605", type4)
	Call SetLoadedOSHValue("T02.10705", type5)
	Call SetLoadedOSHValue("T02.10805", type6)
	Call SetLoadedOSHValue("T02.10905", type7)

	Set objCountDevCom = objNSNET.Get85KGroupCount(1, Empty, Array("101"), Empty, strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")
	Call SetLoadedOSHValue("T02.11105", type1)

	Set objCountDevCom = objNSNET.Get85KGroupCount(2, Empty, Array("106", "107"), Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("GROUPCOUNT")
	type1 = objCountDevCom("type1")
	type2 = objCountDevCom("type2")

	Call SetLoadedOSHValue("T02.11205", count)
	Call SetLoadedOSHValue("T02.11305", type1)
	Call SetLoadedOSHValue("T02.11405", type2)

	Set objCountDevCom = objNSNET.Get85KGroupCount(3, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("GROUPCOUNT")
	Call SetLoadedOSHValue("T02.11505", count)

	Set objCountDevCom = objNSNET.Get85KGroupCount(4, Empty, Array("113", "102, 110, 111", "103, 117, 118", "104, 108", "109", "105", "112"), "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")
	type2 = objCountDevCom("type2")
	type3 = objCountDevCom("type3")
	type4 = objCountDevCom("type4")
	type5 = objCountDevCom("type5")
	type6 = objCountDevCom("type6")
	type7 = objCountDevCom("type7")

	Call SetLoadedOSHValue("T02.10306", type1)
	Call SetLoadedOSHValue("T02.10406", type2)
	Call SetLoadedOSHValue("T02.10506", type3)
	Call SetLoadedOSHValue("T02.10606", type4)
	Call SetLoadedOSHValue("T02.10706", type5)
	Call SetLoadedOSHValue("T02.10806", type6)
	Call SetLoadedOSHValue("T02.10906", type7)

	Set objCountDevCom = objNSNET.Get85KGroupCount(1, Empty, Array("101"), "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	type1 = objCountDevCom("type1")
	Call SetLoadedOSHValue("T02.11106", type1)

	Set objCountDevCom = objNSNET.Get85KGroupCount(2, Empty, Array("106", "107"), "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	count = objCountDevCom("GROUPCOUNT")
	type1 = objCountDevCom("type1")
	type2 = objCountDevCom("type2")

	Call SetLoadedOSHValue("T02.11206", count)
	Call SetLoadedOSHValue("T02.11306", type1)
	Call SetLoadedOSHValue("T02.11406", type2)

	Set objCountDevCom = objNSNET.Get85KGroupCount(3, Empty, Empty, "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	count = objCountDevCom("GROUPCOUNT")
	Call SetLoadedOSHValue("T02.11506", count)
End Sub
%>

