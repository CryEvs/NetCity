<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('03.2', 4, 3, 11, 5, 15);
	SumRowAllColsByIndex('03.2', 1, 3, 11, [2, 4]);
	SumColAllRows('03.2', 3, 1, 15, 4, 11);

	ValidateIncludedRows('03.2', 2, [3], 3, 11);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.2_inc.asp" -->
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

	Dim objCountEmplForAge, prms, iNames, agesIntrvls
	Dim rsYear, nDtPresentationDate
	Dim strPedJobsByOthers
	Dim pedJobs
	Dim i

	Call ClearAvtoCalcFields("T03.2",2,3,4,11)
	Call ClearAvtoCalcFields("T03.2",5,15,4,11)

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	nDtPresentationDate = DateSerial(Year(rsYear("ENDDATE")), 1, 1)

	agesIntrvls = Array(0, 24, 25, 29, 30, 39, 40, 44, 45, 49, 50, 54, 55, 59, 60, 999)
	strPedJobsByOthers = "Воспитател%,Старш% воспитател%,Музыкальный руководитель,Инструктор по физической культуре,Учитель-логопед,Учитель-дефектолог,Педагог-психолог,Социальный педагог,Педагог-организатор,Педагог доп. образования"
	pedJobs = Split(strPedJobsByOthers, ",")
	
	'Заполнение стр. 2
	prms = Array(32)
	iNames = Array( "'Штатный сотрудник'")
	Call CalcStaffAge(prms, iNames, nDtPresentationDate, agesIntrvls, 2, false, PosStatuses_ManagPerson)

	'Заполнение стр. 3
	prms = Array(6, 32)
	iNames = Array("Заведующ%,Заместител% заведующ%", "'Штатный сотрудник'")
	Call CalcStaffAge(prms, iNames, nDtPresentationDate, agesIntrvls, 3, false, PosStatuses_ManagPerson)
	
	'Заполнение стр. 5-14
	For i = 5 To 14
		iNames(0) = pedJobs(i-5)
		Call CalcStaffAge(prms, iNames, nDtPresentationDate, agesIntrvls, i, false, PosStatuses_TeachStaff)
	Next
	
	'Заполнение стр. 15
	iNames(0) = strPedJobsByOthers
	Call CalcStaffAge(prms, iNames, nDtPresentationDate, agesIntrvls, 15, true, PosStatuses_TeachStaff)
End Sub

Sub CalcStaffAge(prms, iNames, stateOnDate, agesIntrvls, rowNum, isOthers, posStatus)
	Dim objCountEmplForAge
	Dim strRowNum, i

	strRowNum = FormatValueIndex(rowNum)
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, stateOnDate, agesIntrvls, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.2" & strRowNum & "03", objCountEmplForAge("countEmploees"))
	For i = 4 To 11
		Call SetLoadedOSHValue("T03.2" & strRowNum & FormatValueIndex(i), objCountEmplForAge("ages" & (i-3)))
	Next
End Sub%>