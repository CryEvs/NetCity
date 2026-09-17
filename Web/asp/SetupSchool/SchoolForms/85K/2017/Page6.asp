<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('03.2', 1, 3, 12, 2, 12);

	SumColAllRows('03.3', 3, 1, 1, 4, 9);
	SumColAllRows('03.3', 10, 1, 1, 11, 16);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.2_inc.asp" -->
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
	On Error Resume Next

	Dim prms, iNames, agesIntrvls
	Dim rsYear, nDtPresentationDate
	Dim strPedJobsByOthers
	Dim pedJobs
	Dim i

	' Раздел 3.2
	Call ClearAvtoCalcFields("T03.2",2,12,3,12)

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	nDtPresentationDate = DateSerial(Year(rsYear("ENDDATE")), 1, 1)

	agesIntrvls = Array(0, 24, 25, 29, 30, 34, 35, 39, 40, 44, 45, 49, 50, 54, 55, 59, 60, 64, 65, 999)
	strPedJobsByOthers = "Воспитател%,Старш% воспитател%,Музыкальный руководитель,Инструктор по физической культуре,Учитель-логопед,Учитель-дефектолог,Педагог-психолог,Социальный педагог,Педагог-организатор,Педагог доп. образования"
	pedJobs = Split(strPedJobsByOthers, ",")

	prms = Array(6, 32)
	iNames = Array("", "'Штатный сотрудник'")

	'Заполнение стр. 2-11
	For i = 2 To 11
		iNames(0) = pedJobs(i-2)
		Call CalcStaffAge(prms, iNames, nDtPresentationDate, agesIntrvls, i, false, PosStatuses_TeachStaff)
	Next
	
	'Заполнение стр. 12
	iNames(0) = strPedJobsByOthers
	Call CalcStaffAge(prms, iNames, nDtPresentationDate, agesIntrvls, 12, true, PosStatuses_TeachStaff)

	' Раздел 3.3
	'Заполнение стр. 1
	Call CalcStaffExperience(Array("32"), Array("'Штатный сотрудник'"), 1, Array(PosStatuses_TeachStaff))
End Sub

Sub CalcStaffAge(prms, iNames, stateOnDate, agesIntrvls, rowNum, isOthers, posStatus)
	Dim objCountEmplForAge
	Dim strRowNum, i

	strRowNum = FormatValueIndex(rowNum)
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, stateOnDate, agesIntrvls, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.2" & strRowNum & "03", objCountEmplForAge("countEmploees"))
	For i = 3 To 12
		Call SetLoadedOSHValue("T03.2" & strRowNum & FormatValueIndex(i), objCountEmplForAge("ages" & (i-2)))
	Next
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