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
	SumRowAllCols('02.1', 2, 3, 3, 3, 10);
	SumRowAllColsByIndex('02.1', 1, 3, 3, [2,11,12,15,16,17]);
	SumRowAllCols('02.1', 18, 3, 3, 19, 21);

	SumRowAllCols('02.1', 2, 4, 4, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 4, 4, [2,11,12,15,16,17])

	SumRowAllCols('02.1', 2, 5, 5, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 5, 5, [2,11,12,15,16,17])
	
	SumRowAllCols('02.1', 2, 6, 6, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 6, 6, [2,11,12,15,16,17])
	SumRowAllCols('02.1', 18, 6, 6, 19, 21)
	
	SumRowAllCols('02.1', 2, 7, 7, 3, 10)
	SumRowAllColsByIndex('02.1', 1, 7, 7, [2,11,12,15,16,17])
	
	ValidateIncludedRows('02.1', 1, [2, 11, 12, 15, 16, 17 ], 3, 8);
	
	ValidateDividedRows('02.1', 1, [18, 22, 23], 3, 8);
	ValidateIncludedRows('02.1', 2, [3, 4, 5, 6, 7, 8, 9, 10], 3, 8);
	ValidateIncludedRows('02.1', 12, [13, 14], 3, 8);
	ValidateIncludedRows('02.1', 18, [19, 20, 21], 3, 8);
	
	ValidateDividedCols('02.1', 3, [4, 5], 1, 17);
	ValidateIncludedCols('02.1', 6, [7], 1, 17);

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
	Set obj85KChildTypeDisabilityInfo = objNSNET.Get85KSection21Info(4, 4, Array("113", "102, 110, 111, 115", "103, 117, 118", "104, 108", "109", "105", "112"), Empty, Empty, strCurrYearID, dtPresentationDate)

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

	Set objCountDevCom = objNSNET.Get85KSection21Info(6, Empty, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11603", count)
	Set objCountDevCom = objNSNET.Get85KSection21Info(7, 4, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11703", count)

	Set objCountDevCom = objNSNET.Get85KSection21Info("1, 2, 3, 4", 4, Array("101", "106", "107", "113", "102, 111, 110", "103", "104, 108", "109", "105", "112"), Empty, 1050, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12203", objCountDevCom("PUPILCOUNT"))

	Set objCountDevCom = objNSNET.Get85KSection21Info("1, 2, 3, 4", 4, Array("101", "106", "107", "113", "102, 111, 110", "103", "104, 108", "109", "105", "112"), "3, 8", Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12303", objCountDevCom("PUPILCOUNT"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(4, 4, Array("113", "102, 110, 111, 115", "103, 117, 118", "104, 108", "109", "105", "112"), "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)

	Call SetLoadedOSHValue("T02.10304", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.10404", objCountDevCom("type2"))
	Call SetLoadedOSHValue("T02.10504", objCountDevCom("type3"))
	Call SetLoadedOSHValue("T02.10604", objCountDevCom("type4"))
	Call SetLoadedOSHValue("T02.10704", objCountDevCom("type5"))
	Call SetLoadedOSHValue("T02.10804", objCountDevCom("type6"))
	Call SetLoadedOSHValue("T02.10904", objCountDevCom("type7"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(1, 4, Array("101"), "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11104", objCountDevCom("type1"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("106", "107"), "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11204", objCountDevCom("PUPILCOUNT"))
	Call SetLoadedOSHValue("T02.11304", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.11404", objCountDevCom("type2"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(3, Empty, Empty, "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11504", count)

	Set objCountDevCom = objNSNET.Get85KSection21Info(6, Empty, Empty, "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11604", count)
	Set objCountDevCom = objNSNET.Get85KSection21Info(7, 4, Empty, Empty, "4, 5, 6, 7, 8", Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11704", count)

	Set objCountDevCom = objNSNET.Get85KSection21Info(4, 4, Array("113", "102, 110, 111, 115", "103, 117, 118", "104, 108", "109", "105", "112"), Empty, 1048, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.10305", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.10405", objCountDevCom("type2"))
	Call SetLoadedOSHValue("T02.10505", objCountDevCom("type3"))
	Call SetLoadedOSHValue("T02.10605", objCountDevCom("type4"))
	Call SetLoadedOSHValue("T02.10705", objCountDevCom("type5"))
	Call SetLoadedOSHValue("T02.10805", objCountDevCom("type6"))
	Call SetLoadedOSHValue("T02.10905", objCountDevCom("type7"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(1, Empty, Array("101"), Empty, Empty, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11105", count)

	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("114"), Empty, 1048, strCurrYearID, dtPresentationDate, "I вид (глухие)")
	Call SetLoadedOSHValue("T02.11205", objCountDevCom("type1"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("106", "107"), Empty, 1048, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11305", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.11405", objCountDevCom("type2"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(3, Empty, Empty, Empty, 1048, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11505", objCountDevCom("PUPILCOUNT"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(6, Empty, Empty, Empty, 1048, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11605", count)
	Set objCountDevCom = objNSNET.Get85KSection21Info(7, 4, Empty, Empty, 1048, strCurrYearID, dtPresentationDate)
	count = objCountDevCom("PUPILCOUNT")
	Call SetLoadedOSHValue("T02.11705", count)

	Set objCountDevCom = objNSNET.Get85KGroupCount(4, 4, Array("113", "102, 110, 111, 115", "103, 117, 118", "104, 108", "109", "105", "112"), Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.10306", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.10406", objCountDevCom("type2"))
	Call SetLoadedOSHValue("T02.10506", objCountDevCom("type3"))
	Call SetLoadedOSHValue("T02.10606", objCountDevCom("type4"))
	Call SetLoadedOSHValue("T02.10706", objCountDevCom("type5"))
	Call SetLoadedOSHValue("T02.10806", objCountDevCom("type6"))
	Call SetLoadedOSHValue("T02.10906", objCountDevCom("type7"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(1, Empty, Array("101"), Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11106", objCountDevCom("type1"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(2, Empty, Array("106", "107"), Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11206", objCountDevCom("GROUPCOUNT"))
	Call SetLoadedOSHValue("T02.11306", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.11406", objCountDevCom("type2"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(3, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11506", objCountDevCom("GROUPCOUNT"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(6, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11606", objCountDevCom("GROUPCOUNT"))
	Set objCountDevCom = objNSNET.Get85KGroupCount(7, 4, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11706", objCountDevCom("GROUPCOUNT"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(Empty, Empty, Empty, "3, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12306", objCountDevCom("GROUPCOUNT"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(4, 4, Array("113", "102, 110, 111, 115", "103, 117, 118", "104, 108", "109", "105", "112"), "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.10307", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.10407", objCountDevCom("type2"))
	Call SetLoadedOSHValue("T02.10507", objCountDevCom("type3"))
	Call SetLoadedOSHValue("T02.10607", objCountDevCom("type4"))
	Call SetLoadedOSHValue("T02.10707", objCountDevCom("type5"))
	Call SetLoadedOSHValue("T02.10807", objCountDevCom("type6"))
	Call SetLoadedOSHValue("T02.10907", objCountDevCom("type7"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(1, Empty, Array("101"), "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11107", objCountDevCom("type1"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(2, Empty, Array("106", "107"), "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11207", objCountDevCom("GROUPCOUNT"))
	Call SetLoadedOSHValue("T02.11307", objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.11407", objCountDevCom("type2"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(3, Empty, Empty, "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11507", objCountDevCom("GROUPCOUNT"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(6, Empty, Empty, "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11607", objCountDevCom("GROUPCOUNT"))
	Set objCountDevCom = objNSNET.Get85KGroupCount(7, 4, Empty, "4, 5, 6, 7, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.11707", objCountDevCom("GROUPCOUNT"))
End Sub
%>

