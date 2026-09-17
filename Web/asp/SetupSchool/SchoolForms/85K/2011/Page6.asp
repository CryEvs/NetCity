<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()%>

<script>
<!--
function CalculateOSH()
{
	SumRowAllColsByIndex('02.5', 1, 3, 4, [2,3,4,5,6,7,8,9]);
	
	SumRowAllColsByIndex('02.6', 1, 4, 5, [2,3,4,5,6,7]);
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

Sub AutoCalcEMInfo( )
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function

Sub AutoCalc()
	Dim objAvgYearSum
	Set objAvgYearSum = objNSNET.Get85KSEction25AvgYearSum(strSchoolYearID, dtPresentationDate)
	Call SetLoadedOSHValue("T02.51003", Round(objAvgYearSum("avgsum") / 12))

	Call SetLoadedOSHValue("T02.60201", "русский")
	Call SetLoadedOSHValue("T02.60203", 155)
	Call SetLoadedOSHValue("T02.60204", objAvgYearSum("avgsum").Value)
End Sub
%>