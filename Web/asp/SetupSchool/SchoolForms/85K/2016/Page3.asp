<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Const kRegimeTypeShort = 4
Const kRegimeTypeNight = 5

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('02.1', 2, 3, 9, 3, 10);
	SumRowAllColsByIndex('02.1', 1, 3, 9, [2, 11, 12, 15, 16, 17, 18]);

	ValidateDividedCols('02.1', 3, [4,5], 1, 18);
	ValidateIncludedCols('02.1', 7, [8], 1, 18);
	ValidateIncludedRows('02.1', 12, [13,14], 3, 7);
	ValidateIncludedRows('02.1', 18, [19,20], 3, 7);

	ValidateIncludedCells('02.1', 1, 3, [21], 3);
	ValidateIncludedCells('02.1', 1, 3, [22], 3);
	ValidateIncludedCells('02.1', 1, 3, [23], 3);
	ValidateIncludedCells('02.1', 1, 6, [21], 6);
	ValidateIncludedCells('02.1', 1, 6, [22], 6);
	ValidateIncludedCells('02.1', 1, 6, [23], 6);
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
	Dim objCountDevCom

	Call CalcColumnWithPupils(3, Empty, Empty)

	' Заполнение гр. 3 стр. 21
	Set objCountDevCom = objNSNET.Get85KSection21Info(Empty, kRegimeTypeShort, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12103", objCountDevCom("PUPILCOUNT"))

	' Заполнение гр.3 стр. 22
	Set objCountDevCom = objNSNET.Get85KSection21Info(Empty, kRegimeTypeNight, Empty, Empty, Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12203", objCountDevCom("PUPILCOUNT"))

	' Заполнение гр. 3 стр. 23
	Set objCountDevCom = objNSNET.Get85KSection21Info(Empty, Empty, Empty, "3, 8", Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12303", objCountDevCom("PUPILCOUNT"))
	
	Call CalcColumnWithPupils(4, "4, 5, 6, 7, 8", Empty)
	Call CalcColumnWithPupils(5, Empty, 1048)
	Call CalcColumnWithPupils(6, Empty, 1057)
	Call CalcColumnWithGroups(7, Empty)
	
	' Заполнение гр. 7 стр. 21
	Set objCountDevCom = objNSNET.Get85KGroupCount(Empty, kRegimeTypeShort, Empty, Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12107", objCountDevCom("GROUPCOUNT"))

	' Заполнение гр. 7 стр. 22
	Set objCountDevCom = objNSNET.Get85KGroupCount(Empty, kRegimeTypeNight, Empty, Empty, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12207", objCountDevCom("GROUPCOUNT"))
	
	' Заполнение гр. 7 стр. 23
	Set objCountDevCom = objNSNET.Get85KGroupCount(Empty, Empty, Empty, "3, 8", strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.12307", objCountDevCom("GROUPCOUNT"))

	Call CalcColumnWithGroups(8, "4, 5, 6, 7, 8")
End Sub

Sub CalcColumnWithPupils(column, strAgeInterval, parameterID)
	'Заполнение строк для графы column

	Dim objCountDevCom, strColumn, i

	Set objCountDevCom = objNSNET.Get85KSection21Info(4, Empty, Array("113", "102, 110, 111, 115", "103, 117, 118", "104, 108", "109", "105", "112"), strAgeInterval, parameterID, strCurrYearID, dtPresentationDate)
	strColumn = FormatValueIndex(column)

	'Заполнение стр. 3-9
	For i = 1 to 7
		Call SetLoadedOSHValue("T02.1" & FormatValueIndex(i + 2) & strColumn, objCountDevCom("type" & i))
	Next

	'Заполнение стр. 11
	Set objCountDevCom = objNSNET.Get85KSection21Info(1, Empty, Array("101"), strAgeInterval, parameterID, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.111" & strColumn, objCountDevCom("type1"))

	'Заполнение стр. 12-14
	Set objCountDevCom = objNSNET.Get85KSection21Info(2, Empty, Array("106", "107"), strAgeInterval, parameterID, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.112" & strColumn, objCountDevCom("PUPILCOUNT"))
	Call SetLoadedOSHValue("T02.113" & strColumn, objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.114" & strColumn, objCountDevCom("type2"))
	
	'Заполнение стр. 15
	Set objCountDevCom = objNSNET.Get85KSection21Info(3, Empty, Empty, strAgeInterval, parameterID, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.115" & strColumn, objCountDevCom("PUPILCOUNT"))

	'Заполнение стр. 16-18
	Set objCountDevCom = objNSNET.Get85KSection21Info(5, Empty, Empty, strAgeInterval, parameterID, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.116" & strColumn, objCountDevCom("PUPILCOUNT"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(6, Empty, Empty, strAgeInterval, parameterID, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.117" & strColumn, objCountDevCom("PUPILCOUNT"))

	Set objCountDevCom = objNSNET.Get85KSection21Info(7, Empty, Empty, strAgeInterval, parameterID, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.118" & strColumn, objCountDevCom("PUPILCOUNT"))
End Sub

Sub CalcColumnWithGroups(column, strAgeInterval)
	'Заполнение строк для графы column

	Dim objCountDevCom, strColumn, i

	Set objCountDevCom = objNSNET.Get85KGroupCount(4, Empty, Array("113", "102, 110, 111, 115", "103, 117, 118", "104, 108", "109", "105", "112"), strAgeInterval, strCurrYearID, dtPresentationDate)
	strColumn = FormatValueIndex(column)
	
	'Заполнение стр. 3-9
	For i = 1 To 7
		Call SetLoadedOSHValue("T02.1" & FormatValueIndex(i + 2) & strColumn, objCountDevCom("type" & i))
	Next
	
	'Заполнение стр. 11
	Set objCountDevCom = objNSNET.Get85KGroupCount(1, Empty, Array("101"), strAgeInterval, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.111" & strColumn, objCountDevCom("type1"))

	'Заполнение стр. 12-14
	Set objCountDevCom = objNSNET.Get85KGroupCount(2, Empty, Array("106", "107"), strAgeInterval, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.112" & strColumn, objCountDevCom("GROUPCOUNT"))
	Call SetLoadedOSHValue("T02.113" & strColumn, objCountDevCom("type1"))
	Call SetLoadedOSHValue("T02.114" & strColumn, objCountDevCom("type2"))

	'Заполнение стр. 15
	Set objCountDevCom = objNSNET.Get85KGroupCount(3, Empty, Empty, strAgeInterval, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.115" & strColumn, objCountDevCom("GROUPCOUNT"))

	'Заполнение стр. 16-18
	Set objCountDevCom = objNSNET.Get85KGroupCount(5, Empty, Empty, strAgeInterval, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.116" & strColumn, objCountDevCom("GROUPCOUNT"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(6, Empty, Empty, strAgeInterval, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.117" & strColumn, objCountDevCom("GROUPCOUNT"))

	Set objCountDevCom = objNSNET.Get85KGroupCount(7, Empty, Empty, strAgeInterval, strCurrYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.118" & strColumn, objCountDevCom("GROUPCOUNT"))
End Sub%>