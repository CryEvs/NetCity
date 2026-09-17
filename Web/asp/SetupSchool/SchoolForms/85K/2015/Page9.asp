<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumColAllRows('03.3', 3, 1, 3, 4, 9);
	SumColAllRows('03.3', 10, 1, 3, 11, 16);

	SumColAllRows('04.1', 3, 1, 2, 4, 7);

	ValidateIncludedRows('03.3', 1, [2,3], 3, 16);

	ValidateIncludedRows('04.1', 1, [2], 3, 8);
	ValidateIncludedCols('04.1', 3, [8], 1, 2);
	ValidateIncludedCells('04.1', 2, 3, [3,4], 3);
	ValidateIncludedCells('04.1', 1, 3, [5], 3);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.3_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section4.1_inc.asp" -->
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
	Dim prms, iNames
	
	'Заполнение стр. 1
	prms = Array("32")
	iNames = Array("'Штатный сотрудник'")
	Call CalcStaffExperience(prms, iNames, 1, Array(PosStatuses_ManagPerson, PosStatuses_TeachStaff))

	'Заполнение стр. 2
	prms = Array("32", "6")
	iNames = Array("'Штатный сотрудник'", "Заведующ%,Заместител% заведующ%")
	Call CalcStaffExperience(prms, iNames, 2, Array(PosStatuses_ManagPerson))

	'Заполнение стр. 3
	prms = Array("32")
	iNames = Array("'Штатный сотрудник'")
	Call CalcStaffExperience(prms, iNames, 3, Array(PosStatuses_TeachStaff))
End Sub

Sub CalcStaffExperience(prms, iNames, rowNum, posStatuses)
	Dim objSenInfo
	Dim strRowNum
	Dim i
	
	strRowNum = FormatValueIndex(rowNum)
	Set objSenInfo = objNSNET.Get85KSection33Exper(prms, iNames, strSchoolYearID, posStatuses)

	For i = 0 To 5
		Call SetLoadedOSHValue("T03.3" & strRowNum & FormatValueIndex(i + 4), objSenInfo(2*i+1))
		Call SetLoadedOSHValue("T03.3" & strRowNum & FormatValueIndex(i + 11), objSenInfo(2*i + 2))
	Next
End Sub%>