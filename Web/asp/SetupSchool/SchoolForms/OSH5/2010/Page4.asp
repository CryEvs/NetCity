<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;
	form.T050103.value = GetValueInt(form.T050104) + GetValueInt(form.T050105) + GetValueInt(form.T050106) + GetValueInt(form.T050107);
	form.T050203.value = GetValueInt(form.T050204) + GetValueInt(form.T050205) + GetValueInt(form.T050206) + GetValueInt(form.T050207);
	form.T050303.value = GetValueInt(form.T050304) + GetValueInt(form.T050305) + GetValueInt(form.T050306) + GetValueInt(form.T050307);
	return true;
}
//--></script>
<%
	End If
%>                                                                                                

<%
End Sub

Function IsMovementAware()
	IsMovementAware = True
End Function

Sub AutoCalcShoolInfo( objDataCon )
	Dim objYearAndGraduateInfo, objAwardsInfo
	Dim objStudentsAgeInfo, objSeniorStudentsAgeInfo	
	Dim nGrade, nAwardType, nStudents, nStudents4, nAge, nGirls, nGraduated
	Dim nGraduateSecondary, dtOnDate, dtPresentationDate
	
	Dim n15AgeStudents, n1617AgeStudents
	Dim n1829AgeStudents, n30AgeStudents
	Dim n15AgeStudentsGraduated, n1617AgeStudentsGraduated
	Dim n1829AgeStudentsGraduated, n30AgeStudentsGraduated
	Dim nGirlsTotal
	Dim rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	dtOnDate = DateSerial(Year(rsYear("ENDDATE")), 1, 1)
	dtPresentationDate = DateAdd( "d", 15, dtOnDate )
	
	' Page 4 Table 4
	Set objYearAndGraduateInfo = objDataCon.GetOSH1YearAndGraduateInfo(strCurrYearID, False )
	TestError( kYearAndGraduateInfoUnavalable )
	Do While Not objYearAndGraduateInfo.EoF
		nGrade = GetSafeLng( objYearAndGraduateInfo("GRADE"), kUndefinedValue )
		nStudents = GetSafeLng( objYearAndGraduateInfo("STUDENTSCOUNT"), 0 )
		If nGrade = 4 Then ' 4 and 5 grades as one column
			nStudents4 = nStudents
		Elseif nGrade = 5 Then
			Call SetLoadedOSHValue( "T0401" & FormatValueIndex( nGrade - 2 ), nStudents + nStudents4 )
		ElseIf kMinOSHGrade <= nGrade And nGrade <= kMaxOSHGrade Then
			Call SetLoadedOSHValue( "T0401" & FormatValueIndex( nGrade - 2 ), nStudents )
		End If
		objYearAndGraduateInfo.MoveNext
	Loop

	Set objAwardsInfo = objDataCon.GetOSH1AwardsInfo(strCurrYearID, False )
	TestError( kAwardsInfoUnavalable )	
	nGraduateSecondary = 0
	Do While Not objAwardsInfo.EoF
		nAwardType = GetSafeLng( objAwardsInfo("AWARDTYPE"), kUndefinedValue )
		nStudents = GetSafeLng( objAwardsInfo("STUDENTSCOUNT"), 0 )
		If nAwardType = kAwardType_Silver Then
			nGraduateSecondary = nGraduateSecondary + nStudents
			Call SetLoadedOSHValue( "T0405", nStudents )
		Elseif nAwardType = kAwardType_Gold Then
			nGraduateSecondary = nGraduateSecondary + nStudents
			Call SetLoadedOSHValue( "T0404", nStudents )
		Elseif nAwardType = kAwardType_General Then
			Call SetLoadedOSHValue( "T0402a", nStudents )
		Elseif nAwardType = kAwardType_Secondary Then
			nGraduateSecondary = nGraduateSecondary + nStudents
		Elseif nAwardType = kAwardType_None Then
			Call SetLoadedOSHValue( "T0406", nStudents )
		End If
		objAwardsInfo.MoveNext
	Loop
	Call SetLoadedOSHValue( "T0403a", nGraduateSecondary )
	
	' Page 4 Table 5	
	Set objStudentsAgeInfo = objDataCon.GetOSH5StudentsAgeInfo(strCurrYearID, dtOnDate )
	TestError( kStudentsAgeInfoUnavalable )	
	n15AgeStudents = 0
	n1617AgeStudents = 0
	n1829AgeStudents = 0
	n30AgeStudents = 0
	n15AgeStudentsGraduated = 0
	n1617AgeStudentsGraduated = 0
	n1829AgeStudentsGraduated = 0
	n30AgeStudentsGraduated	 = 0
	nGirlsTotal = 0
	Do While Not objStudentsAgeInfo.EoF
		nAge = GetSafeLng( objStudentsAgeInfo("AGE"), kUndefinedValue )
		nStudents = GetSafeLng( objStudentsAgeInfo("STUDENTSCOUNT"), 0 )
		nGirls = GetSafeLng( objStudentsAgeInfo("GIRLS"), 0 )
		nGraduated = GetSafeLng( objStudentsAgeInfo("GRADUATED"), 0 )
		
		nGirlsTotal = nGirlsTotal + nGirls
		If nAge <= 15 Then 
			n15AgeStudents = n15AgeStudents + nStudents
			n15AgeStudentsGraduated = n15AgeStudentsGraduated + nGraduated
		Elseif nAge = 16 Or nAge = 17 Then
			n1617AgeStudents = n1617AgeStudents + nStudents
			n1617AgeStudentsGraduated = n1617AgeStudentsGraduated + nGraduated
		Elseif 18 <= nAge And nAge <= 29 Then
			n1829AgeStudents = n1829AgeStudents + nStudents
			n1829AgeStudentsGraduated = n1829AgeStudentsGraduated + nGraduated
		Elseif 30 <= nAge Then
			n30AgeStudents = n30AgeStudents + nStudents
			n30AgeStudentsGraduated = n30AgeStudentsGraduated + nGraduated
		End If
		objStudentsAgeInfo.MoveNext
	Loop
	
	Call SetLoadedOSHValue( "T050104", n15AgeStudents )
	Call SetLoadedOSHValue( "T050304", n15AgeStudentsGraduated )
	Call SetLoadedOSHValue( "T050105", n1617AgeStudents )
	Call SetLoadedOSHValue( "T050305", n1617AgeStudentsGraduated )
	Call SetLoadedOSHValue( "T050106", n1829AgeStudents )
	Call SetLoadedOSHValue( "T050306", n1829AgeStudentsGraduated )
	Call SetLoadedOSHValue( "T050107", n30AgeStudents )
	Call SetLoadedOSHValue( "T050307", n30AgeStudentsGraduated )

	Call SetLoadedOSHValue( "T0504", nGirlsTotal )
	
	Set objSeniorStudentsAgeInfo = objDataCon.GetOSH1SeniorStudentsAgeInfo(strCurrYearID, dtPresentationDate, False )
	TestError( kSeniorStudentsAgeInfoUnavalable )
	n15AgeStudents = 0
	n1617AgeStudents = 0
	n1829AgeStudents = 0
	n30AgeStudents = 0
	Do While Not objSeniorStudentsAgeInfo.EoF
		nAge = GetSafeLng( objSeniorStudentsAgeInfo("AGE"), kUndefinedValue )
		nStudents = GetSafeLng( objSeniorStudentsAgeInfo("STUDENTSCOUNT"), kUndefinedValue )
		If nAge <= 15 Then 
			n15AgeStudents = n15AgeStudents + nStudents
		Elseif nAge = 16 Or nAge = 17 Then
			n1617AgeStudents = n1617AgeStudents + nStudents
		Elseif 18 <= nAge And nAge <= 29 Then
			n1829AgeStudents = n1829AgeStudents + nStudents
		Elseif 30 <= nAge Then
			n30AgeStudents = n30AgeStudents + nStudents
		End If
		objSeniorStudentsAgeInfo.MoveNext
	Loop
	
	Call SetLoadedOSHValue( "T050204", n15AgeStudents )
	Call SetLoadedOSHValue( "T050205", n1617AgeStudents )
	Call SetLoadedOSHValue( "T050206", n1829AgeStudents )
	Call SetLoadedOSHValue( "T050207", n30AgeStudents )
End Sub
%>
