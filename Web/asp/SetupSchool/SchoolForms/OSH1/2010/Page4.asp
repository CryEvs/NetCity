<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;

	form.T052003.value = GetValueInt(form.T050103) + GetValueInt(form.T050203) + GetValueInt(form.T050303) + GetValueInt(form.T050403) + GetValueInt(form.T050503) + GetValueInt(form.T050603) + GetValueInt(form.T050703) + GetValueInt(form.T050803) + GetValueInt(form.T050903) + GetValueInt(form.T051003) + GetValueInt(form.T051103) + GetValueInt(form.T051203) + GetValueInt(form.T051303) + GetValueInt(form.T051403) + GetValueInt(form.T051503) + GetValueInt(form.T051603) + GetValueInt(form.T051703) + GetValueInt(form.T051803) + GetValueInt(form.T051903);

	form.T052004.value = GetValueInt(form.T050104) + GetValueInt(form.T050204) + GetValueInt(form.T050304) + GetValueInt(form.T050404) + GetValueInt(form.T050504) + GetValueInt(form.T050604) + GetValueInt(form.T050704) + GetValueInt(form.T050804) + GetValueInt(form.T050904) + GetValueInt(form.T051004) + GetValueInt(form.T051104) + GetValueInt(form.T051204) + GetValueInt(form.T051304) + GetValueInt(form.T051404) + GetValueInt(form.T051504) + GetValueInt(form.T051604) + GetValueInt(form.T051704) + GetValueInt(form.T051804) + GetValueInt(form.T051904);

	form.T052005.value = GetValueInt(form.T050105) + GetValueInt(form.T050205) + GetValueInt(form.T050305) + GetValueInt(form.T050405) + GetValueInt(form.T050505) + GetValueInt(form.T050605) + GetValueInt(form.T050705) + GetValueInt(form.T050805) + GetValueInt(form.T050905) + GetValueInt(form.T051005) + GetValueInt(form.T051105) + GetValueInt(form.T051205) + GetValueInt(form.T051305) + GetValueInt(form.T051405) + GetValueInt(form.T051505) + GetValueInt(form.T051605) + GetValueInt(form.T051705) + GetValueInt(form.T051805) + GetValueInt(form.T051905);

	form.T052006.value = GetValueInt(form.T050106) + GetValueInt(form.T050206) + GetValueInt(form.T050306) + GetValueInt(form.T050406) + GetValueInt(form.T050506) + GetValueInt(form.T050606) + GetValueInt(form.T050706) + GetValueInt(form.T050806) + GetValueInt(form.T050906) + GetValueInt(form.T051006) + GetValueInt(form.T051106) + GetValueInt(form.T051206) + GetValueInt(form.T051306) + GetValueInt(form.T051406) + GetValueInt(form.T051506) + GetValueInt(form.T051606) + GetValueInt(form.T051706) + GetValueInt(form.T051806) + GetValueInt(form.T051906);

	form.T052007.value = GetValueInt(form.T050107) + GetValueInt(form.T050207) + GetValueInt(form.T050307) + GetValueInt(form.T050407) + GetValueInt(form.T050507) + GetValueInt(form.T050607) + GetValueInt(form.T050707) + GetValueInt(form.T050807) + GetValueInt(form.T050907) + GetValueInt(form.T051007) + GetValueInt(form.T051107) + GetValueInt(form.T051207) + GetValueInt(form.T051307) + GetValueInt(form.T051407) + GetValueInt(form.T051507) + GetValueInt(form.T051607) + GetValueInt(form.T051707) + GetValueInt(form.T051807) + GetValueInt(form.T051907);

	form.T052008.value = GetValueInt(form.T050108) + GetValueInt(form.T050208) + GetValueInt(form.T050308) + GetValueInt(form.T050408) + GetValueInt(form.T050508) + GetValueInt(form.T050608) + GetValueInt(form.T050708) + GetValueInt(form.T050808) + GetValueInt(form.T050908) + GetValueInt(form.T051008) + GetValueInt(form.T051108) + GetValueInt(form.T051208) + GetValueInt(form.T051308) + GetValueInt(form.T051408) + GetValueInt(form.T051508) + GetValueInt(form.T051608) + GetValueInt(form.T051708) + GetValueInt(form.T051808) + GetValueInt(form.T051908);

	form.T052009.value = GetValueInt(form.T050109) + GetValueInt(form.T050209) + GetValueInt(form.T050309) + GetValueInt(form.T050409) + GetValueInt(form.T050509) + GetValueInt(form.T050609) + GetValueInt(form.T050709) + GetValueInt(form.T050809) + GetValueInt(form.T050909) + GetValueInt(form.T051009) + GetValueInt(form.T051109) + GetValueInt(form.T051209) + GetValueInt(form.T051309) + GetValueInt(form.T051409) + GetValueInt(form.T051509) + GetValueInt(form.T051609) + GetValueInt(form.T051709) + GetValueInt(form.T051809) + GetValueInt(form.T051909);

	form.T0602.value = GetValueInt(form.T0603) + GetValueInt(form.T0604) + GetValueInt(form.T0605) + GetValueInt(form.T0606) + GetValueInt(form.T0607) + GetValueInt(form.T0608) + GetValueInt(form.T0609) + GetValueInt(form.T0610);

	return true;
}
//--></script>
<%
	End If
End Sub

Sub DrawPage()%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
<%End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalc( )
	'ClearFields
	Call ClearAvtoCalcFields("T05",1,19,3,9)
	Call ClearAvtoCalcFields("T05",21,21,0,0)
	Call ClearAvtoCalcFields("T07",1,1,3,6)
	
	' Page 4 Table 5
	Dim objStudentsAgeInfo, objSeniorStudentsAgeInfo, objRelaysClassesCnt, objRelaysClassesStudentsCnt
	Dim nAge, nStudents, nGirls
	Dim Sum,SumGirl

	Sum = 0
	SumGirl = 0
	Set objStudentsAgeInfo = objNSNET.GetOSH1StudentsAgeInfo( strCurrYearID, dtPresentationDate, 0, bIsMNS)
	TestError( kStudentsAgeInfoUnavalable )	
	Do While Not objStudentsAgeInfo.EoF
		nAge = GetSafeLng( objStudentsAgeInfo("AGE"), kUndefinedValue )
		nStudents = GetSafeLng( objStudentsAgeInfo("STUDENTSCOUNT"), 0 )
		nGirls = GetSafeLng( objStudentsAgeInfo("GIRLS"), kUndefinedValue )		
		If nAge >= kMinAge Then 
			If nAge >= kMaxAge Then
				Sum=Sum + nStudents
				SumGirl= SumGirl + nGirls
			Else
			Call SetLoadedOSHValue( "T05" & FormatValueIndex( nAge - kMinAge+1) & "03", nStudents )
			Call SetLoadedOSHValue( "T05" & FormatValueIndex( nAge - kMinAge+1) & "04", nGirls )
			End If
		End If
		objStudentsAgeInfo.MoveNext
	Loop
	Call SetLoadedOSHValue( "T05" & FormatValueIndex(20) & "03", Sum )
	Call SetLoadedOSHValue( "T05" & FormatValueIndex(20) & "04", SumGirl )

	Sum = 0
	Set objSeniorStudentsAgeInfo = objNSNET.GetOSH1SeniorStudentsAgeInfo( strCurrYearID, dtPresentationDate, True, bIsMNS )
	TestError( kSeniorStudentsAgeInfoUnavalable )	
	Do While Not objSeniorStudentsAgeInfo.EoF
		nAge = GetSafeLng( objSeniorStudentsAgeInfo("AGE"), kUndefinedValue )
		nStudents = GetSafeLng( objSeniorStudentsAgeInfo("STUDENTSCOUNT"), kUndefinedValue )
		If nAge >= kMinSeniorAge Then
			If nAge > kMaxAge Then nAge = kMaxAge
			Call SetLoadedOSHValue( "T05" & FormatValueIndex( nAge - kMinAge+1 ) & "08", nStudents )
		End If
		objSeniorStudentsAgeInfo.MoveNext
	Loop	
	'Call SetLoadedOSHValue( "T05" & FormatValueIndex(20) & "05",Sum)

	Sum = 0
	Set objSeniorStudentsAgeInfo = objNSNET.GetOSH1_StudentsAgeForGrade( strCurrYearID, dtPresentationDate, 1, bIsMNS )
	TestError( kSeniorStudentsAgeInfoUnavalable )	
	Do While Not objSeniorStudentsAgeInfo.EoF
		nAge = GetSafeLng( objSeniorStudentsAgeInfo("AGE"), kUndefinedValue )
		nStudents = GetSafeLng( objSeniorStudentsAgeInfo("STUDENTSCOUNT"), kUndefinedValue )
		If nAge >= kMinAge Then
			If nAge > kMaxAge Then nAge = kMaxAge
			Call SetLoadedOSHValue( "T05" & FormatValueIndex( nAge - kMinAge+1 ) & "06", nStudents )
		 End If
		objSeniorStudentsAgeInfo.MoveNext
	Loop	
	'Call SetLoadedOSHValue( "T05" & FormatValueIndex(20) & "06",Sum)

	Sum = 0
	Set objSeniorStudentsAgeInfo = objNSNET.GetOSH1_StudentsAgeForGrade( strCurrYearID, dtPresentationDate, 9, bIsMNS )
	TestError( kSeniorStudentsAgeInfoUnavalable )	
	Do While Not objSeniorStudentsAgeInfo.EoF
		nAge = GetSafeLng( objSeniorStudentsAgeInfo("AGE"), kUndefinedValue )
		nStudents = GetSafeLng( objSeniorStudentsAgeInfo("STUDENTSCOUNT"), kUndefinedValue )
		If nAge >= kMinAge Then 
			If nAge > kMaxAge Then nAge = kMaxAge
			Call SetLoadedOSHValue( "T05" & FormatValueIndex( nAge - kMinAge+1 ) & "07", nStudents )
		 End If
		objSeniorStudentsAgeInfo.MoveNext
	Loop
	'Call SetLoadedOSHValue( "T05" & FormatValueIndex(20) & "07",Sum)

	Set objSeniorStudentsAgeInfo = objNSNET.GetOSH1_StudentsAgeForGrade( strCurrYearID, dtPresentationDate, kGraduateGrade, bIsMNS )
	TestError( kSeniorStudentsAgeInfoUnavalable )	
	Do While Not objSeniorStudentsAgeInfo.EoF
		nAge = GetSafeLng( objSeniorStudentsAgeInfo("AGE"), kUndefinedValue )
		nStudents = GetSafeLng( objSeniorStudentsAgeInfo("STUDENTSCOUNT"), kUndefinedValue )
		If nAge >= kMinAge Then 
			If nAge > kMaxAge Then nAge = kMaxAge
			Call SetLoadedOSHValue( "T05" & FormatValueIndex( nAge - kMinAge+1 ) & "09", nStudents )
		 End If
		objSeniorStudentsAgeInfo.MoveNext
	Loop

	'Кол-во учеников в классах типа 6(СКО) старше 16...
	Set objStudentsAgeInfo = objNSNET.GetOSH1StudentsAgeInfo( strCurrYearID, dtPresentationDate,1, bIsMNS)
	TestError( kStudentsAgeInfoUnavalable )
	Call SetLoadedOSHValue( "T0521",objStudentsAgeInfo("STUDENTSCOUNT"))
	
	'Table 7
	Set objRelaysClassesCnt = objNSNET.GetOSH1ClassesRelaysInfo( strCurrYearID, dtPresentationDate )
	Set objRelaysClassesStudentsCnt = objNSNET.GetOSH1ClassesRelaysStudentsCntInfo( strCurrYearID, dtPresentationDate, bIsMNS )
	If Not bIsMNS Then
		Call SetLoadedOSHValue( "T070103", objRelaysClassesCnt("RELAY2") )
	End If
	Call SetLoadedOSHValue( "T070104", objRelaysClassesStudentsCnt("RELAY2") )
	If Not bIsMNS Then
		Call SetLoadedOSHValue( "T070105", objRelaysClassesCnt("RELAY3") )
	End If
	Call SetLoadedOSHValue( "T070106", objRelaysClassesStudentsCnt("RELAY3") )
End Sub
%>
