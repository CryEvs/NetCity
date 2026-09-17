<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(5, 6, 3, 4, 1, 5);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function

Sub AutoCalcEMInfo()
End Sub

Sub AutoCalc()
	Dim objAgeInfo, countPupils(5,1), rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	Set objAgeInfo = objNSNET.GetStudentsByAge(strSchoolYearId, DateSerial(Year(rsYear("ENDDATE")), 1, 1))

	While Not objAgeInfo.EOF
		If objAgeInfo("AGE") < 5 Then
			countPupils(0,0) = countPupils(0,0) + objAgeInfo("STUDENTS")
			countPupils(0,1) = countPupils(0,1) + objAgeInfo("GIRLS")
		ElseIf objAgeInfo("AGE") >= 5 and objAgeInfo("AGE") <= 9 Then
			countPupils(1,0) = countPupils(1,0) + objAgeInfo("STUDENTS")
			countPupils(1,1) = countPupils(1,1) + objAgeInfo("GIRLS")
		ElseIf objAgeInfo("AGE") >= 10 and objAgeInfo("AGE") <= 14 Then
			countPupils(2,0) = countPupils(2,0) + objAgeInfo("STUDENTS")
			countPupils(2,1) = countPupils(2,1) + objAgeInfo("GIRLS")
		ElseIf objAgeInfo("AGE") >= 15 and objAgeInfo("AGE") <= 17 Then
			countPupils(3,0) = countPupils(3,0) + objAgeInfo("STUDENTS")
			countPupils(3,1) = countPupils(3,1) + objAgeInfo("GIRLS")
		ElseIf objAgeInfo("AGE") >= 18 Then
			countPupils(4,0) = countPupils(4,0) + objAgeInfo("STUDENTS")
			countPupils(4,1) = countPupils(4,1) + objAgeInfo("GIRLS")
		End If
		objAgeInfo.MoveNext
	WEnd

	Call SetLoadedOSHValue("T050103", countPupils(0,0))
	Call SetLoadedOSHValue("T050104", countPupils(0,1))
	Call SetLoadedOSHValue("T050203", countPupils(1,0))
	Call SetLoadedOSHValue("T050204", countPupils(1,1))
	Call SetLoadedOSHValue("T050303", countPupils(2,0))
	Call SetLoadedOSHValue("T050304", countPupils(2,1))
	Call SetLoadedOSHValue("T050403", countPupils(3,0))
	Call SetLoadedOSHValue("T050404", countPupils(3,1))
	Call SetLoadedOSHValue("T050503", countPupils(4,0))
	Call SetLoadedOSHValue("T050504", countPupils(4,1))
End Sub
%>