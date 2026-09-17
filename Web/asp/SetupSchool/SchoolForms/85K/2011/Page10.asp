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
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.3_inc.asp" -->
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
	Dim objSenInfo, totSen1, totSen2, totSen3, totSen4, totSen5, totSen6, pedSen1, pedSen2, pedSen3, pedSen4, pedSen5, pedSen6, prms, iNames
	prms = Array("32", "33")
	iNames = Array("'Штатный сотрудник'", "'Администрация', 'Педагогический персонал'")
	Set objSenInfo = objNSNET.Get85KSection33Exper(prms, iNames, strSchoolYearID)
	totSen1 = objSenInfo("totSen1")
	totSen2 = objSenInfo("totSen2")
	totSen3 = objSenInfo("totSen3")
	totSen4 = objSenInfo("totSen4")
	totSen5 = objSenInfo("totSen5")
	totSen6 = objSenInfo("totSen6")
	pedSen1 = objSenInfo("pedSen1")
	pedSen2 = objSenInfo("pedSen2")
	pedSen3 = objSenInfo("pedSen3")
	pedSen4 = objSenInfo("pedSen4")
	pedSen5 = objSenInfo("pedSen5")
	pedSen6 = objSenInfo("pedSen6")

	Call SetLoadedOSHValue("T03.30104", totSen1)
	Call SetLoadedOSHValue("T03.30105", totSen2)
	Call SetLoadedOSHValue("T03.30106", totSen3)
	Call SetLoadedOSHValue("T03.30107", totSen4)
	Call SetLoadedOSHValue("T03.30108", totSen5)
	Call SetLoadedOSHValue("T03.30109", totSen6)
	Call SetLoadedOSHValue("T03.30111", pedSen1)
	Call SetLoadedOSHValue("T03.30112", pedSen2)
	Call SetLoadedOSHValue("T03.30113", pedSen3)
	Call SetLoadedOSHValue("T03.30114", pedSen4)
	Call SetLoadedOSHValue("T03.30115", pedSen5)
	Call SetLoadedOSHValue("T03.30116", pedSen6)

	prms = Array("32", "6", "33")
	iNames = Array("'Штатный сотрудник'", "Заведующая,Заместитель заведующей по ВМР", "'Администрация'")
	Set objSenInfo = objNSNET.Get85KSection33Exper(prms, iNames, strSchoolYearID)
	totSen1 = objSenInfo("totSen1")
	totSen2 = objSenInfo("totSen2")
	totSen3 = objSenInfo("totSen3")
	totSen4 = objSenInfo("totSen4")
	totSen5 = objSenInfo("totSen5")
	totSen6 = objSenInfo("totSen6")
	pedSen1 = objSenInfo("pedSen1")
	pedSen2 = objSenInfo("pedSen2")
	pedSen3 = objSenInfo("pedSen3")
	pedSen4 = objSenInfo("pedSen4")
	pedSen5 = objSenInfo("pedSen5")
	pedSen6 = objSenInfo("pedSen6")

	Call SetLoadedOSHValue("T03.30204", totSen1)
	Call SetLoadedOSHValue("T03.30205", totSen2)
	Call SetLoadedOSHValue("T03.30206", totSen3)
	Call SetLoadedOSHValue("T03.30207", totSen4)
	Call SetLoadedOSHValue("T03.30208", totSen5)
	Call SetLoadedOSHValue("T03.30209", totSen6)
	Call SetLoadedOSHValue("T03.30211", pedSen1)
	Call SetLoadedOSHValue("T03.30212", pedSen2)
	Call SetLoadedOSHValue("T03.30213", pedSen3)
	Call SetLoadedOSHValue("T03.30214", pedSen4)
	Call SetLoadedOSHValue("T03.30215", pedSen5)
	Call SetLoadedOSHValue("T03.30216", pedSen6)

	prms = Array("32", "33")
	iNames = Array("'Штатный сотрудник'", "'Педагогический персонал'")
	Set objSenInfo = objNSNET.Get85KSection33Exper(prms, iNames, strSchoolYearID)
	totSen1 = objSenInfo("totSen1")
	totSen2 = objSenInfo("totSen2")
	totSen3 = objSenInfo("totSen3")
	totSen4 = objSenInfo("totSen4")
	totSen5 = objSenInfo("totSen5")
	totSen6 = objSenInfo("totSen6")
	pedSen1 = objSenInfo("pedSen1")
	pedSen2 = objSenInfo("pedSen2")
	pedSen3 = objSenInfo("pedSen3")
	pedSen4 = objSenInfo("pedSen4")
	pedSen5 = objSenInfo("pedSen5")
	pedSen6 = objSenInfo("pedSen6")

	Call SetLoadedOSHValue("T03.30304", totSen1)
	Call SetLoadedOSHValue("T03.30305", totSen2)
	Call SetLoadedOSHValue("T03.30306", totSen3)
	Call SetLoadedOSHValue("T03.30307", totSen4)
	Call SetLoadedOSHValue("T03.30308", totSen5)
	Call SetLoadedOSHValue("T03.30309", totSen6)
	Call SetLoadedOSHValue("T03.30311", pedSen1)
	Call SetLoadedOSHValue("T03.30312", pedSen2)
	Call SetLoadedOSHValue("T03.30313", pedSen3)
	Call SetLoadedOSHValue("T03.30214", pedSen4)
	Call SetLoadedOSHValue("T03.30215", pedSen5)
	Call SetLoadedOSHValue("T03.30316", pedSen6)
End Sub
%>
