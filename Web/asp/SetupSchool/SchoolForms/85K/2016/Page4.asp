<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	SumColAllRows('02.2', 3, 1, 4, 4, 11);

	ValidateIncludedRows('02.2', 1, [2], 3, 11);
	ValidateIncludedRows('02.2', 1, [3], 3, 11);
	ValidateIncludedRows('02.2', 2, [4], 3, 11);
	ValidateIncludedRows('02.2', 3, [4], 3, 11);

	ValidateIncludedRows('02.3', 1, [2], 3, 4);
	ValidateIncludedCols('02.3', 3, [4], 1, 2);

	SumRowAllCols('02.4', 1, 4, 4, 2, 7);
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
	Dim objCountPupil
	Dim rsYear, dtOnDate
	Dim objValue

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	dtOnDate = DateSerial(Year(rsYear("ENDDATE")), 1, 1)

	'Раздел 2.2
	Call ClearAvtoCalcFields("T02.2",1,4,4,11)

	'Заполнение гр. 4-11 стр. 1-2
	Set objCountPupil = objNSNET.Get85KSection22CountPupil("Ж", strSchoolYearID, dtOnDate, -1, -1, 10, False)
	Call FillDistribStudentsByAge(objCountPupil, 1)
	
	'Заполнение гр. 4-11 стр. 3-4
	Set objCountPupil = objNSNET.Get85KSection22CountPupil("Ж", strSchoolYearID, dtOnDate, 1057, -1, 10, False)
	Call FillDistribStudentsByAge(objCountPupil, 3)

	'Раздел 2.4
	Set objValue = objNSNET.Get85KSection26AllChildren(strSchoolYearID)
	Call SetLoadedOSHValue("T02.40204", objValue("allChildren").Value)

End Sub

Sub FillDistribStudentsByAge(objRecordSet, rowStart)
	Dim sumPupils, sumGirls
	Dim column

	sumPupils = 0
	sumGirls = 0
	Do While Not objRecordSet.Eof
		column = objRecordSet("ages") + 4

		If column >= 11 Then
			sumPupils = sumPupils + objRecordSet("pupilcount")
			sumGirls = sumGirls + objRecordSet("girls")
		Else
			Call SetLoadedOSHValue("T02.2" & FormatValueIndex(rowStart) & FormatValueIndex(column), objRecordSet("pupilcount"))
			Call SetLoadedOSHValue("T02.2" & FormatValueIndex(rowStart + 1) & FormatValueIndex(column), objRecordSet("girls"))
		End If
		objRecordSet.MoveNext
	Loop
	Call SetLoadedOSHValue("T02.2" & FormatValueIndex(rowStart) & FormatValueIndex(11), sumPupils)
	Call SetLoadedOSHValue("T02.2" & FormatValueIndex(rowStart + 1) & FormatValueIndex(11), sumGirls)
End Sub

Sub FillAttendance(cellName, age, reason, oprFlag)
	Dim objCntDays, countDays

	'Посещение воспитанниками ОУ в текущем уч. году с сентября по декабрь
	Set objCntDays = objNSNET.Get85KSEction23CountDays(strSchoolYearID, 9, 12, age, reason, oprFlag)
	countDays = objCntDays("numDays")

	'Посещение воспитанниками ОУ в предыдущем уч. году с января по август
	Set objCntDays = objNSNET.Get85KSEction23CountDays(objNSNET.GetPrevSchoolYearId(strSchoolYearID), 1, 8, age, reason, oprFlag)
	countDays = countDays + objCntDays("numDays")

	Call SetLoadedOSHValue(cellName, countDays)
End Sub

Sub FillAttendanceFromParentPay()
	Dim fullAttendance, attendanceWithGrade

	fullAttendance = objNSNET.GetAttendanceFromParentPay(strSchoolYearID)
	attendanceWithGrade = objNSNET.GetAttendanceFromParentPay(strSchoolYearID, 4, 8)

	' Заполнение ячеек первой строки таблицы 2.3
	Call SetLoadedOSHValue("T02.30103", fullAttendance)
	Call SetLoadedOSHValue("T02.30104", attendanceWithGrade)
End Sub
%>