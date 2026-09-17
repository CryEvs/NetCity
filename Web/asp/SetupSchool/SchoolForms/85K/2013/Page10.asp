<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumColAllRows('03.3', 3, 1, 3, 4, 9)
	SumColAllRows('03.3', 10, 1, 3, 11, 16)
	
	ValidateIncludedRows('03.3', 1, [2,3], 4, 9);
	ValidateIncludedRows('03.3', 1, [2,3], 11, 16);

	SumColAllRows('04.1', 3, 1, 2, 4, 8);
	
	ValidateDividedCols('04.1', 3, [8], 1, 2);
	ValidateDividedRows('04.1', 1, [2], 3, 8);
	ValidateDividedRows('04.1', 2, [3], 3, 3);
	ValidateDividedRows('04.1', 3, [5], 3, 3);
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
	Dim objSenInfo, totSen1, totSen2, totSen3, totSen4, totSen5, totSen6, pedSen1, pedSen2, pedSen3, pedSen4, pedSen5, pedSen6, prms, iNames, i
	prms = Array("32", "33")
	iNames = Array("'Штатный сотрудник'", "'Администрация', 'Педагогический персонал'")
	Set objSenInfo = objNSNET.Get85KSection33Exper(prms, iNames, strSchoolYearID)
	For i = 0 To 5
		Call SetLoadedOSHValue("T03.301" & FormatValueIndex(i + 4), objSenInfo(2*i+1))
		Call SetLoadedOSHValue("T03.301" & FormatValueIndex(i + 11), objSenInfo(2*i + 2))
	Next

	prms = Array("32", "33", "6")
	iNames = Array("'Штатный сотрудник'", "'Администрация'", "Заведующая ДОУ,Заместитель заведующей по ВМР")
	Set objSenInfo = objNSNET.Get85KSection33Exper(prms, iNames, strSchoolYearID)
	For i = 0 To 5
		Call SetLoadedOSHValue("T03.302" & FormatValueIndex(i + 4), objSenInfo(2*i+1))
		Call SetLoadedOSHValue("T03.302" & FormatValueIndex(i + 11), objSenInfo(2*i + 2))
	Next

	prms = Array("32", "33")
	iNames = Array("'Штатный сотрудник'", "'Педагогический персонал'")
	Set objSenInfo = objNSNET.Get85KSection33Exper(prms, iNames, strSchoolYearID)
	For i = 0 To 5
		Call SetLoadedOSHValue("T03.303" & FormatValueIndex(i + 4), objSenInfo(2*i+1))
		Call SetLoadedOSHValue("T03.303" & FormatValueIndex(i + 11), objSenInfo(2*i + 2))
	Next
End Sub
%>
