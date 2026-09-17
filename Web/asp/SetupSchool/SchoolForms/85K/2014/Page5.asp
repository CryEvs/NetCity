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
	SumRowAllCols('02.5', 1, 3, 4, 2, 9);

	ValidateIncludedCols('02.5', 3, [4], 1, 9);

	SumRowAllCols('02.6', 1, 4, 4, 2, 7);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.5_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.6_inc.asp" -->
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
	Dim objValue, rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)

	'Раздел 2.5
	Set objValue = objNSNET.Get85KSEction25AvgYearSum(strSchoolYearID, DateSerial(Year(rsYear("STARTDATE")), 12, 1))
	Call SetLoadedOSHValue("T02.51003", Round(objValue("avgsum") / 12))
	
	'Раздел 2.6
	Set objValue = objNSNET.Get85KSection26AllChildren(strSchoolYearID)
	Call SetLoadedOSHValue("T02.60204", objValue("allChildren").Value)
End Sub
%>