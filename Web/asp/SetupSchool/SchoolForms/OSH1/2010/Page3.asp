<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../SchoolSettings_inc.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()

	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;
	form.T041503.value = GetValueInt(form.T040103) + GetValueInt(form.T040203) + GetValueInt(form.T040303) + GetValueInt(form.T040403) + GetValueInt(form.T040503) + GetValueInt(form.T040603) + GetValueInt(form.T040703) + GetValueInt(form.T040803) + GetValueInt(form.T040903) + GetValueInt(form.T041003) + GetValueInt(form.T041103) + GetValueInt(form.T041203) + GetValueInt(form.T041303) + GetValueInt(form.T041403);
	form.T041504.value = GetValueInt(form.T040104) + GetValueInt(form.T040204) + GetValueInt(form.T040304) + GetValueInt(form.T040404) + GetValueInt(form.T040504) + GetValueInt(form.T040604) + GetValueInt(form.T040704) + GetValueInt(form.T040804) + GetValueInt(form.T040904) + GetValueInt(form.T041004) + GetValueInt(form.T041104) + GetValueInt(form.T041204) + GetValueInt(form.T041304) + GetValueInt(form.T041404);
	form.T041505.value = GetValueInt(form.T040105) + GetValueInt(form.T040205) + GetValueInt(form.T040305) + GetValueInt(form.T040405) + GetValueInt(form.T040505) + GetValueInt(form.T040605) + GetValueInt(form.T040705) + GetValueInt(form.T040805) + GetValueInt(form.T040905) + GetValueInt(form.T041005) + GetValueInt(form.T041105) + GetValueInt(form.T041205) + GetValueInt(form.T041305) + GetValueInt(form.T041405);
	form.T041506.value = GetValueInt(form.T040106) + GetValueInt(form.T040206) + GetValueInt(form.T040306) + GetValueInt(form.T040406) + GetValueInt(form.T040506) + GetValueInt(form.T040606) + GetValueInt(form.T040706) + GetValueInt(form.T040806) + GetValueInt(form.T040906) + GetValueInt(form.T041006) + GetValueInt(form.T041106) + GetValueInt(form.T041206) + GetValueInt(form.T041306) + GetValueInt(form.T041406);
	form.T041507.value = GetValueInt(form.T040107) + GetValueInt(form.T040207) + GetValueInt(form.T040307) + GetValueInt(form.T040407) + GetValueInt(form.T040507) + GetValueInt(form.T040607) + GetValueInt(form.T040707) + GetValueInt(form.T040807) + GetValueInt(form.T040907) + GetValueInt(form.T041007) + GetValueInt(form.T041107) + GetValueInt(form.T041207) + GetValueInt(form.T041307) + GetValueInt(form.T041407);
	form.T041508.value = GetValueInt(form.T040108) + GetValueInt(form.T040208) + GetValueInt(form.T040308) + GetValueInt(form.T040408) + GetValueInt(form.T040508) + GetValueInt(form.T040608) + GetValueInt(form.T040708) + GetValueInt(form.T040808) + GetValueInt(form.T040908) + GetValueInt(form.T041008) + GetValueInt(form.T041108) + GetValueInt(form.T041208) + GetValueInt(form.T041308) + GetValueInt(form.T041408);
	form.T041509.value = GetValueInt(form.T040109) + GetValueInt(form.T040209) + GetValueInt(form.T040309) + GetValueInt(form.T040409) + GetValueInt(form.T040509) + GetValueInt(form.T040609) + GetValueInt(form.T040709) + GetValueInt(form.T040809) + GetValueInt(form.T040909) + GetValueInt(form.T041009) + GetValueInt(form.T041109) + GetValueInt(form.T041209) + GetValueInt(form.T041309) + GetValueInt(form.T041409);
	form.T041510.value = GetValueInt(form.T040110) + GetValueInt(form.T040210) + GetValueInt(form.T040310) + GetValueInt(form.T040410) + GetValueInt(form.T040510) + GetValueInt(form.T040610) + GetValueInt(form.T040710) + GetValueInt(form.T040810) + GetValueInt(form.T040910) + GetValueInt(form.T041010) + GetValueInt(form.T041110) + GetValueInt(form.T041210) + GetValueInt(form.T041310) + GetValueInt(form.T041410);
	form.T041511.value = GetValueInt(form.T040111) + GetValueInt(form.T040211) + GetValueInt(form.T040311) + GetValueInt(form.T040411) + GetValueInt(form.T040511) + GetValueInt(form.T040611) + GetValueInt(form.T040711) + GetValueInt(form.T040811) + GetValueInt(form.T040911) + GetValueInt(form.T041011) + GetValueInt(form.T041111) + GetValueInt(form.T041211) + GetValueInt(form.T041311) + GetValueInt(form.T041411);
	form.T041512.value = GetValueInt(form.T040112) + GetValueInt(form.T040212) + GetValueInt(form.T040312) + GetValueInt(form.T040412) + GetValueInt(form.T040512) + GetValueInt(form.T040612) + GetValueInt(form.T040712) + GetValueInt(form.T040812) + GetValueInt(form.T040912) + GetValueInt(form.T041012) + GetValueInt(form.T041112) + GetValueInt(form.T041212) + GetValueInt(form.T041312) + GetValueInt(form.T041412);
	form.T041513.value = GetValueInt(form.T040113) + GetValueInt(form.T040213) + GetValueInt(form.T040313) + GetValueInt(form.T040413) + GetValueInt(form.T040513) + GetValueInt(form.T040613) + GetValueInt(form.T040713) + GetValueInt(form.T040813) + GetValueInt(form.T040913) + GetValueInt(form.T041013) + GetValueInt(form.T041113) + GetValueInt(form.T041213) + GetValueInt(form.T041313) + GetValueInt(form.T041413);
	form.T041514.value = GetValueInt(form.T040114) + GetValueInt(form.T040214) + GetValueInt(form.T040314) + GetValueInt(form.T040414) + GetValueInt(form.T040514) + GetValueInt(form.T040614) + GetValueInt(form.T040714) + GetValueInt(form.T040814) + GetValueInt(form.T040914) + GetValueInt(form.T041014) + GetValueInt(form.T041114) + GetValueInt(form.T041214) + GetValueInt(form.T041314) + GetValueInt(form.T041414);
	form.T041515.value = GetValueInt(form.T040115) + GetValueInt(form.T040215) + GetValueInt(form.T040315) + GetValueInt(form.T040415) + GetValueInt(form.T040515) + GetValueInt(form.T040615) + GetValueInt(form.T040715) + GetValueInt(form.T040815) + GetValueInt(form.T040915) + GetValueInt(form.T041015) + GetValueInt(form.T041115) + GetValueInt(form.T041215) + GetValueInt(form.T041315) + GetValueInt(form.T041415);
	form.T041516.value = GetValueInt(form.T040116) + GetValueInt(form.T040216) + GetValueInt(form.T040316) + GetValueInt(form.T040416) + GetValueInt(form.T040516) + GetValueInt(form.T040616) + GetValueInt(form.T040716) + GetValueInt(form.T040816) + GetValueInt(form.T040916) + GetValueInt(form.T041016) + GetValueInt(form.T041116) + GetValueInt(form.T041216) + GetValueInt(form.T041316) + GetValueInt(form.T041416);
	form.T041517.value = GetValueInt(form.T040117) + GetValueInt(form.T040217) + GetValueInt(form.T040317) + GetValueInt(form.T040417) + GetValueInt(form.T040517) + GetValueInt(form.T040617) + GetValueInt(form.T040717) + GetValueInt(form.T040817) + GetValueInt(form.T040917) + GetValueInt(form.T041017) + GetValueInt(form.T041117) + GetValueInt(form.T041217) + GetValueInt(form.T041317) + GetValueInt(form.T041417);
	form.T041518.value = GetValueInt(form.T040118) + GetValueInt(form.T040218) + GetValueInt(form.T040318) + GetValueInt(form.T040418) + GetValueInt(form.T040518) + GetValueInt(form.T040618) + GetValueInt(form.T040718) + GetValueInt(form.T040818) + GetValueInt(form.T040918) + GetValueInt(form.T041018) + GetValueInt(form.T041118) + GetValueInt(form.T041218) + GetValueInt(form.T041318) + GetValueInt(form.T041418);
	form.T041519.value = GetValueInt(form.T040119) + GetValueInt(form.T040219) + GetValueInt(form.T040319) + GetValueInt(form.T040419) + GetValueInt(form.T040519) + GetValueInt(form.T040619) + GetValueInt(form.T040719) + GetValueInt(form.T040819) + GetValueInt(form.T040919) + GetValueInt(form.T041019) + GetValueInt(form.T041119) + GetValueInt(form.T041219) + GetValueInt(form.T041319) + GetValueInt(form.T041419);
	form.T041520.value = GetValueInt(form.T040120) + GetValueInt(form.T040220) + GetValueInt(form.T040320) + GetValueInt(form.T040420) + GetValueInt(form.T040520) + GetValueInt(form.T040620) + GetValueInt(form.T040720) + GetValueInt(form.T040820) + GetValueInt(form.T040920) + GetValueInt(form.T041020) + GetValueInt(form.T041120) + GetValueInt(form.T041220) + GetValueInt(form.T041320) + GetValueInt(form.T041420);
	form.T041521.value = GetValueInt(form.T040121) + GetValueInt(form.T040221) + GetValueInt(form.T040321) + GetValueInt(form.T040421) + GetValueInt(form.T040521) + GetValueInt(form.T040621) + GetValueInt(form.T040721) + GetValueInt(form.T040821) + GetValueInt(form.T040921) + GetValueInt(form.T041021) + GetValueInt(form.T041121) + GetValueInt(form.T041221) + GetValueInt(form.T041321) + GetValueInt(form.T041421);
	form.T041522.value = GetValueInt(form.T040122) + GetValueInt(form.T040222) + GetValueInt(form.T040322) + GetValueInt(form.T040422) + GetValueInt(form.T040522) + GetValueInt(form.T040622) + GetValueInt(form.T040722) + GetValueInt(form.T040822) + GetValueInt(form.T040922) + GetValueInt(form.T041022) + GetValueInt(form.T041122) + GetValueInt(form.T041222) + GetValueInt(form.T041322) + GetValueInt(form.T041422);
	form.T041523.value = GetValueInt(form.T040123) + GetValueInt(form.T040223) + GetValueInt(form.T040323) + GetValueInt(form.T040423) + GetValueInt(form.T040523) + GetValueInt(form.T040623) + GetValueInt(form.T040723) + GetValueInt(form.T040823) + GetValueInt(form.T040923) + GetValueInt(form.T041023) + GetValueInt(form.T041123) + GetValueInt(form.T041223) + GetValueInt(form.T041323) + GetValueInt(form.T041423);

	form.T0305.value = GetValueInt(form.T0301) + GetValueInt(form.T0302) + GetValueInt(form.T0303);

	if (GetValueInt(form.T0305) < GetValueInt(form.T0304))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0304.focus();
		return false;
	}

	form.T030504.value = GetValueInt(form.T030104) + GetValueInt(form.T030204) + GetValueInt(form.T030304);

	if (GetValueInt(form.T0418) < GetValueInt(form.T0419))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0419.focus();
		return false;
	}
	if (GetValueInt(form.T0420) < GetValueInt(form.T0421))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0421.focus();
		return false;
	}
	if (GetValueInt(form.T0422) < GetValueInt(form.T0423))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0423.focus();
		return false;
	}
	if (GetValueInt(form.T0424) < GetValueInt(form.T0425))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0425.focus();
		return false;
	}
	return true;
}
//--></script>
<%
	End If

End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Function GetOSH1Tab4LineName( theGrade, theColumn )
	Dim nGrade

	If theGrade = 0 Or theGrade = 1 Then
		nGrade = theGrade + 1
	Else
		nGrade = theGrade + 2
	End If

	GetOSH1Tab4LineName = "T04" & FormatValueIndex( nGrade ) & theColumn
End Function

Sub AutoCalc( )
	Dim objClassInfo, objGradeInfo, objClassStudentsInfo, objCountStudentsStay
	Dim nGrade, nClasses, nStudents, nGirls
	Dim nMinorClasses, n5_9Classes, n10_11Classes, nGradeMinorMax
	Dim nCol
	Dim arrHealthViol2NCol, nItemOrderNo
	Dim nHomeSKO, nHomeCommon, nFamily, nInvalid, nOrphanWithoutCare, nScopeRestrict

	' Массив соответствия поля ITEMORDERNO для значения "Тип ограничения возможностей здоровья" - номеру колонки в таблице.
	' ITEMORDERNO - индекс в массиве, номер колонки - значение в массиве.
	arrHealthViol2NCol = Array(0,9,11,13,15,17,19,21,23)

	Call ClearAvtoCalcFields("T03",1,5,0,0)
	Call ClearAvtoCalcFields("T03",1,5,4,4)

	Call ClearAvtoCalcFields("T04",1,14,3,4)
	Call ClearAvtoCalcFields("T04",1,14,6,7)
	For nCol = 9 To 23 Step 2
		Call ClearAvtoCalcFields("T04",1,14,nCol,nCol)
	Next

	' Call ClearAvtoCalcFields("T04",17,17,0,0) ' От Тольятти, 2011_09_16. 1. Раздел 4 строка 17 рассчитывать по признаку «Дети-сироты» и «Детей, остав. без попеч. родителей» НЕ НАДО, т.к. здесь должны учитываться дети, проживающие в детском доме, но приходящие учится в школу.
	Call ClearAvtoCalcFields("T04",20,20,0,0)
	Call ClearAvtoCalcFields("T04",22,22,0,0)
	Call ClearAvtoCalcFields("T04",27,29,0,0)

	Call InitSchoolSettings( objNSNET )

	' Page 3 Section 3 Column 3
	If Not bIsMNS Then
		Set objClassInfo = objNSNET.GetOSH1SmallClassCount( strCurrYearID, dtPresentationDate, False )
		TestError( kClassInfoUnavalable )
		If Not objClassInfo.EoF Then
			nClasses = GetSafeLng( objClassInfo("CLASSESCOUNT"), 0 )
			Call SetLoadedOSHValue( "T0304", nClasses )
		End If
	End If

	nMinorClasses = 0
	n5_9Classes = 0
	n10_11Classes = 0
	'If arrSchoolSettings( 1, kSSIndex_GradeSenior_Max ) = 10 Then
	'	nGradeMinorMax = kGradeMinorMax10
	'Else
	'	nGradeMinorMax =kGradeMinorMax11_12
	'End If
	nGradeMinorMax =kGradeMinorMax11_12

	If Not bIsMNS Then
		Set objGradeInfo = objNSNET.GetOSH1GradeInfo( strCurrYearID,0)
		TestError( kClassInfoUnavalable )
		Do While Not objGradeInfo.EoF
			nGrade = GetSafeLng( objGradeInfo("GRADE"), kUndefinedValue )
			nClasses = GetSafeLng( objGradeInfo("CLASSESCOUNT"), 0 )	
			If kMinOSHGrade <= nGrade And nGrade <= kMaxOSHGrade Then
				Call SetLoadedOSHValue( GetOSH1Tab4LineName( nGrade, "03" ), nClasses )
				If kGradeMinorMin <= nGrade And nGrade <= nGradeMinorMax Then
					nMinorClasses = nMinorClasses + nClasses
				ElseIf k5_9MinOSHGrade <= nGrade And nGrade <= k5_9MaxOSHGrade Then
					n5_9Classes = n5_9Classes + nClasses
				ElseIf k5_9MaxOSHGrade + 1 <= nGrade And nGrade <= nGradeMinorMax + 8 Then
					n10_11Classes = n10_11Classes + nClasses
				End If
			End If
			objGradeInfo.MoveNext
		Loop
		Call SetLoadedOSHValue( "T0301", nMinorClasses )
		Call SetLoadedOSHValue( "T0302", n5_9Classes )
		Call SetLoadedOSHValue( "T0303", n10_11Classes )
	End If

	nMinorClasses = 0
	n5_9Classes = 0
	n10_11Classes = 0
	If arrSchoolSettings( 1, kSSIndex_GradeSenior_Max ) = 10 Then
		nGradeMinorMax = kGradeMinorMax10
	Else
		nGradeMinorMax =kGradeMinorMax11_12
	End If

	If Not bIsMNS Then
		Set objGradeInfo = objNSNET.GetOSH1GradeInfo( strCurrYearID,1)
		TestError( kClassInfoUnavalable )
		Do While Not objGradeInfo.EoF
			nGrade = GetSafeLng( objGradeInfo("GRADE"), kUndefinedValue )
			nClasses = GetSafeLng( objGradeInfo("CLASSESCOUNT"), 0 )	
			If kMinOSHGrade <= nGrade And nGrade <= kMaxOSHGrade Then
				'Call SetLoadedOSHValue( GetOSH1Tab4LineName( nGrade, "03" ), nClasses )
				If kGradeMinorMin <= nGrade And nGrade <= nGradeMinorMax Then
					nMinorClasses = nMinorClasses + nClasses
				ElseIf k5_9MinOSHGrade <= nGrade And nGrade <= k5_9MaxOSHGrade Then
					n5_9Classes = n5_9Classes + nClasses
				ElseIf k5_9MaxOSHGrade + 1 <= nGrade And nGrade <= nGradeMinorMax + 8 Then
					n10_11Classes = n10_11Classes + nClasses
				End If
			End If
			objGradeInfo.MoveNext
		Loop
		Call SetLoadedOSHValue( "T030104", nMinorClasses )
		Call SetLoadedOSHValue( "T030204", n5_9Classes )
		Call SetLoadedOSHValue( "T030304", n10_11Classes )
	End If

	' Табл 4 Число дошкольных групп
	If Not bIsMNS Then
		Set objGradeInfo = objNSNET.GetOSH1PreschoolGroupsInfo(strCurrYearID, NetCity_Common_Enums_EoType_PreSchool, 1, 1)
		Call SetLoadedOSHValue( "T041603", objGradeInfo("ALLCLASSES") )
	End If

	' Табл 4 Число дошкольников стр 16 стл 04
	Set objClassStudentsInfo = objNSNET.GetOSH1PreschoolStudentsInfo(strCurrYearID, dtPresentationDate, NetCity_Common_Enums_EoType_PreSchool, 1, 1, bIsMNS)
	Call SetLoadedOSHValue( "T041604", objClassStudentsInfo("ALLSTUDENTS"))

	'Заполняем второгодников в таблицу 4
	Set objCountStudentsStay = objNSNET.GetCountStudInGradeByDocTypeOnDateInPrevYear(strCurrYearID, kDocType_STAY, dtPresentationDate, bIsMNS)
	Do While Not objCountStudentsStay.EoF
		Call SetLoadedOSHValue( GetOSH1Tab4LineName( objCountStudentsStay("GRADEFROM"), "06" ), objCountStudentsStay("CNT_STUD"))
		objCountStudentsStay.MoveNext
	Loop
	
	' Page 3 Table 4
	Set objClassStudentsInfo = objNSNET.GetOSH1ClassStudentsInfo( strCurrYearID, dtPresentationDate, 0, bIsMNS)
	TestError( kClassStudentsInfoUnavalable )
	Do While Not objClassStudentsInfo.EoF
		nGrade = GetSafeLng( objClassStudentsInfo("GRADE"), kUndefinedValue )
		nStudents = GetSafeLng( objClassStudentsInfo("STUDENTSCOUNT"), 0 )
		nGirls = GetSafeLng( objClassStudentsInfo("GIRLS"), 0 )
		If kMinOSHGrade <= nGrade And nGrade <= kMaxOSHGrade Then
			Call SetLoadedOSHValue( GetOSH1Tab4LineName( nGrade, "04" ), nStudents )
			Call SetLoadedOSHValue( GetOSH1Tab4LineName( nGrade, "07" ), nGirls )
		End If
		objClassStudentsInfo.MoveNext
	Loop

	'Считаем кол-во студентов в классах типа 6(СКО) по "Типу ограничения возможностей здоровья" (SCOPE_RESTRICT)
	Set objClassStudentsInfo = objNSNET.GetOSH1_SKOClass_StudentsCount_ByScopeRestrict(strCurrYearID, dtPresentationDate, kClassType_SKO, bIsMNS)
	TestError( kClassStudentsInfoUnavalable )
	Do While Not objClassStudentsInfo.EoF
		nGrade = GetSafeLng( objClassStudentsInfo("GRADE"), kUndefinedValue )
		nStudents = GetSafeLng( objClassStudentsInfo("STUDENTSCOUNT"), 0 )
		nItemOrderNo = GetSafeLng( objClassStudentsInfo("ITEMORDERNO"), 0 )
		If kMinOSHGrade <= nGrade And nGrade <= kMaxOSHGrade And 1 <= nItemOrderNo And nItemOrderNo <= 8 Then
			Call SetLoadedOSHValue( GetOSH1Tab4LineName( nGrade, FormatValueIndex(arrHealthViol2NCol(nItemOrderNo)) ), nStudents )
		End If
		objClassStudentsInfo.MoveNext
	Loop

	nHomeSKO = 0
	nHomeCommon = 0
	nFamily = 0
	nInvalid = 0
	nOrphanWithoutCare = 0
	nScopeRestrict = 0

	Call objNSNET.GetStudCountsByEducFormAndSocial(strCurrYearID, dtPresentationDate, nHomeSKO, nHomeCommon, nFamily, nInvalid, nOrphanWithoutCare, nScopeRestrict, bIsMNS)
	TestError( kClassStudentsInfoUnavalable )
	'Call SetLoadedOSHValue( "T0417", nOrphanWithoutCare) ' От Тольятти, 2011_09_16. 1. Раздел 4 строка 17 рассчитывать по признаку «Дети-сироты» и «Детей, остав. без попеч. родителей» НЕ НАДО, т.к. здесь должны учитываться дети, проживающие в детском доме, но приходящие учится в школу.
	Call SetLoadedOSHValue( "T0420", nHomeSKO)
	Call SetLoadedOSHValue( "T0422", nHomeCommon)
	Call SetLoadedOSHValue( "T0427", nScopeRestrict)
	Call SetLoadedOSHValue( "T0428", nInvalid)
	Call SetLoadedOSHValue( "T0429", nFamily)
End Sub
%>
