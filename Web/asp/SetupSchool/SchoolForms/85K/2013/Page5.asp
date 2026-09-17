<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumColAllRows('02.2', 3, 1, 2, 4, 11);
	SumColAllRows('02.2', 3, 3, 4, 8, 11);
	    
	ValidateIncludedRows('02.2', 1, [2], 3, 14);
	ValidateIncludedRows('02.2', 1, [3], 8, 14);
	ValidateIncludedRows('02.2', 3, [4], 8, 14);
	ValidateIncludedRows('02.2', 1, [5], 3, 3);
	ValidateIncludedCols('02.2', 3, [12,13,14], 1, 4);
	
	ValidateIncludedCols('02.3', 3, [4], 1, 4);
	SumRowAllColsByIndex('02.3', 2, 3, 4, [3,4]);
	
	ValidateIncludedCols('02.4', 3, [4], 1, 2);
	ValidateIncludedRows('02.4', 1, [2], 3, 4);

	SumColAllRows('02.2', 3, 1, 2, 4, 11);
	SumColAllRows('02.2', 3, 3, 4, 8, 11);

	SumRowAllColsByIndex('03.1', 1, 3, 3, [2, 4, 15, 16, 17, 20]);
	SumRowAllColsByIndex('03.1', 1, 8, 8, [2, 4, 15, 16, 17, 20]);
	SumRowAllColsByIndex('03.1', 1, 9, 9, [2, 4, 15, 16, 17, 20]);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.3_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.4_inc.asp" -->
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
	Dim objCountPupil, rows, i, j, nDtPresentationDate, sum, objCntDays, numDays, uuu

	For i = 1 To 2
		For j = 4 To 14
			Call SetLoadedOSHValue("T02.2" & FormatValueIndex(i) & FormatValueIndex(j), 0)
		next
	next
	
	Set objCountPupil = objNSNET.Get85KSection22CountPupil(Empty, strSchoolYearID, DateSerial(2014, 1, 1), -1, -1, 7, False)
	Do While Not objCountPupil.Eof
		Call SetLoadedOSHValue("T02.201" & FormatValueIndex(objCountPupil("ages") + 4), objCountPupil("pupilcount"))
		objCountPupil.MoveNext
	Loop
	
	nDtPresentationDate = DateSerial(Year(dtPresentationDate)+1, 9, 1)
	Set objCountPupil = objNSNET.Get85KSection22CountPupil(Empty, strSchoolYearID, nDtPresentationDate, -1, -1, "5, 6, 7", True)
	Do While Not objCountPupil.Eof
		Call SetLoadedOSHValue("T02.201" & FormatValueIndex((objCountPupil("ages") Mod 5) + 12), objCountPupil("pupilcount"))
		objCountPupil.MoveNext
	Loop
	Set objCountPupil = objNSNET.Get85KSection22CountPupil("Ж", strSchoolYearID, DateSerial(2014, 1, 1), -1, -1, 7, False)
	Do While Not objCountPupil.Eof
		Call SetLoadedOSHValue("T02.202" & FormatValueIndex(objCountPupil("ages") + 4), objCountPupil("girls"))
		objCountPupil.MoveNext
	Loop
	Set objCountPupil = objNSNET.Get85KSection22CountPupil("Ж", strSchoolYearID, nDtPresentationDate, -1, -1, "5, 6, 7", True)
	Do While Not objCountPupil.Eof
	Call SetLoadedOSHValue("T02.202" & FormatValueIndex((objCountPupil("ages") Mod 5) + 12), objCountPupil("girls"))
		objCountPupil.MoveNext
	Loop

	sum = 0
	Set objCountPupil = objNSNET.Get85KSection22CountPupil(Empty, strSchoolYearID, DateSerial(2014, 1, 1), 1026, 3, 7, False)
	Do While Not objCountPupil.Eof
		sum = sum + objCountPupil("pupilcount")
		objCountPupil.MoveNext
	Loop
	Call SetLoadedOSHValue("T02.20503", sum)

	Set objCntDays = objNSNET.Get85KSEction23CountDays(strSchoolYearID, 1, 2)
	numDays = objCntDays("numDays")
	Call SetLoadedOSHValue("T02.30103", numDays)

	Set objCntDays = objNSNET.Get85KSEction23CountDays(strSchoolYearID, 1, 2, "4, 5, 6, 7, 8")
	numDays = objCntDays("numDays")
	Call SetLoadedOSHValue("T02.30104", numDays)

	Set objCntDays = objNSNET.Get85KSEction23CountDays(strSchoolYearID, 1, 2, "", "УП")
	numDays = objCntDays("numDays")
	Call SetLoadedOSHValue("T02.30303", numDays)

	Set objCntDays = objNSNET.Get85KSEction23CountDays(strSchoolYearID, 1, 2, "4, 5, 6, 7, 8", "УП")
	numDays = objCntDays("numDays")
	Call SetLoadedOSHValue("T02.30304", numDays)

	Set objCntDays = objNSNET.Get85KSEction23CountDays(strSchoolYearID, 1, 2, "", "УП", true)
	numDays = objCntDays("numDays")
	Call SetLoadedOSHValue("T02.30403", numDays)

	Set objCntDays = objNSNET.Get85KSEction23CountDays(strSchoolYearID, 1, 2, "4, 5, 6, 7, 8", "УП", true)
	numDays = objCntDays("numDays")
	Call SetLoadedOSHValue("T02.30404", numDays)
End Sub
%>