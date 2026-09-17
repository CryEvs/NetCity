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
	isInfoFormValid();
	function CalculateOSH() {
		SumRow(3, 4, [3, 4], 1, 3);
		ValidateIncludedRows(3, 4, [5], 3, 4);
		SumRow(4, 15, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 1, 14);
		ValidateDividedCols(4, 4, [5, 6, 7], 1, 16);
		ValidateIncludedRows(4, 18, [19], 3, 3);
        ValidateIncludedRows(4, 20, [21], 3, 3);
        ValidateIncludedRows(4, 22, [23], 3, 3);
		ValidateIncludedRows(4, 24, [25], 3, 3);
		ValidateIncludedRowsWithIncludedRows(4, [20,22], [24], 3, 3);
		return true;
	}
//--></script>
<%
	End If
%>
<%
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
	Call ClearAvtoCalcFields("T03",1,4,4,4)

	Call ClearAvtoCalcFields("T04",1,14,3,4)
	Call ClearAvtoCalcFields("T04",1,14,6,7)
	For nCol = 9 To 23 Step 2
		Call ClearAvtoCalcFields("T04",1,14,nCol,nCol)
	Next

	' Call ClearAvtoCalcFields("T04",17,17,0,0) ' От Тольятти, 2011_09_16. 1. Раздел 4 строка 17 рассчитывать по признаку «Дети-сироты» и «Детей, остав. без попеч. родителей» НЕ НАДО, т.к. здесь должны учитываться дети, проживающие в детском доме, но приходящие учится в школу.
	Call ClearAvtoCalcFields("T04",20,20,3,3)
	Call ClearAvtoCalcFields("T04",22,22,3,3)
	Call ClearAvtoCalcFields("T04",27,29,3,3)

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
	Call SetLoadedOSHValue( "T042003", nHomeSKO)
	Call SetLoadedOSHValue( "T042203", nHomeCommon)
	Call SetLoadedOSHValue( "T042703", nScopeRestrict)
	Call SetLoadedOSHValue( "T042803", nInvalid)
	Call SetLoadedOSHValue( "T042903", nFamily)
End Sub
%>
