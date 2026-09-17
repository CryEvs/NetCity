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
	isInfoFormValid();
function CalculateOSH()
{
	SumRow(5,20,[3,4,5,6,7,8,9],1,19);
	ValidateIncludedCols(5,3,[4],1,19);
	ValidateIncludedCols(5,3,[5,6,7,8],1,19);
	ValidateIncludedCols(5, 8, [9], 1, 19);
	SumRow(6, 2, [3], 3, 10);
	return true;
}
//--></script>
<%
	End If
%>

<%
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
