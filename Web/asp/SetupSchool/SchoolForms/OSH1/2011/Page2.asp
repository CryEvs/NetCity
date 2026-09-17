<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE=../../../SchoolSettings_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--	
	isInfoFormValid();
function CalculateOSH() {
	SumCol(1, 10, [1, 2, 3, 4, 5, 6, 7, 8], 3, 9);
	SumCol(1, 10, [9], 3, 3);
	ValidateIncludedRows(2, 20, [21], 3, 3);
	ValidateDividedRows(2, 21, [22, 24], 3, 3);
	ValidateIncludedRows(2, 22, [23], 3, 3);
	ValidateIncludedRows(2, 24, [25], 3, 3);
	ValidateIncludedRows(2, 28, [29], 3, 3);
	ValidateIncludedRows(2, 30, [31], 3, 3);
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
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Function IsMovementAware()
	IsMovementAware = True
End Function

Function GetOSH1Tab2LineName( theGrade )
	theGrade = theGrade + 1
	GetOSH1Tab2LineName = "T02" & FormatValueIndex( theGrade ) & "03"
End Function

Sub AutoCalc( )
	On Error Resume Next
	Dim objYearAndGraduateInfo, objAwardsInfo, cntAwards
	Dim nGrade, nAwardType, nStudents
	DIm objLastYearTrainingLang, objCountStudInClassByDate
	Dim i, bExists
	Dim nGraduateSKOCount
	
	Call ClearAvtoCalcValue()

	' Page 1-2 Table 2

	'Копируем Языки обучения с прошлого года - это надо делать при создании формы, стоб потом не затирать
	'Set objLastYearTrainingLang = objNSNET.GetLastYearOSHParamValue(strCurrYearID,kFormPageNum,"-1")
	Set objCountStudInClassByDate = objNSNET.GetStudCountByClass(strCurrYearID, dtPresentationDate, bIsMNS)
	'GetStudCountByClass - Исключает СПЕЦИАЛЬНОЕ КОРРЕКЦИОННОЕ ОБУЧЕНИЕ
	'If Not objLastYearTrainingLang.EoF or GetOSHValue("T010101", 2)<>"" Then
		Do While Not objCountStudInClassByDate.EoF
			Call SetLoadedOSHValue("T01010" & objCountStudInClassByDate("ordNum")+3, objCountStudInClassByDate("STUD_CNT"))
			'Call SetLoadedOSHValue("T01010" & objCountStudInClassByDate("ordNum")+3, objCountStudInClassByDate("STUD_CNT"))
			objCountStudInClassByDate.MoveNext
		Loop
	'End If
	'Do While Not objLastYearTrainingLang.EoF
		'Call SetLoadedOSHValue(objLastYearTrainingLang("NAME"), objLastYearTrainingLang("VALUE"))
		'objLastYearTrainingLang.MoveNext
	'Loop


	Call InitSchoolSettings( objNSNET )
	' Перед авторасчётом чистим ячейки, которые будут авторасчитываться
	For i = kMinOSHGrade To kMaxOSHGrade
		Call SetLoadedOSHValue(GetOSH1Tab2LineName(i), "")
	Next
	Call SetLoadedOSHValue("T021603", "")
	Call SetLoadedOSHValue("T022603", "")
	Call SetLoadedOSHValue("T022703", "")
	Call SetLoadedOSHValue("T023003", "")

	Set objYearAndGraduateInfo = objNSNET.GetOSH1YearAndGraduateInfo(strCurrYearID, bIsMNS )

	TestError( kYearAndGraduateInfoUnavalable )
	Do While Not objYearAndGraduateInfo.EoF
		nGrade = GetSafeLng( objYearAndGraduateInfo("GRADE"), kUndefinedValue )
		nStudents = GetSafeLng( objYearAndGraduateInfo("STUDENTSCOUNT"), 0 )
		If kMinOSHGrade <= nGrade And nGrade <= kMaxOSHGrade Then
			Call SetLoadedOSHValue( GetOSH1Tab2LineName( nGrade ), nStudents )
		End If
		objYearAndGraduateInfo.MoveNext
	Loop

	Set objAwardsInfo = objNSNET.GetOSH1AwardsInfo( strCurrYearID, bIsMNS )
	TestError(kAwardsInfoUnavalable)
	' Для стр.16 надо брать тех выпускников, у которых нет аттестата о среднем (полном) общем образовании.
	' Соответственно сейчас у них должен быть тип "Без аттестата ..." или "Аттест. об осн. общем обр" - последнее значсение в школах вроде не должно использоваться, но в интерфейсе оно есть.
	' 2011_09_09. Оставил только "Без аттестата ..."
	Do While Not objAwardsInfo.EoF
		nAwardType = GetSafeLng( objAwardsInfo("AWARDTYPE"), kUndefinedValue )
		cntAwards = GetSafeLng(objAwardsInfo("STUDENTSCOUNT"), 0)
		If nAwardType = kAwardType_Silver Then
			Call SetLoadedOSHValue( "T022703", cntAwards )
		Elseif nAwardType = kAwardType_Gold Then
			Call SetLoadedOSHValue( "T022603", cntAwards )
		Elseif nAwardType = kAwardType_None Then
			Call SetLoadedOSHValue( "T021603", cntAwards )
		End If
		objAwardsInfo.MoveNext
	Loop

	nGraduateSKOCount = objNSNET.GetOSH1_GraduateFromSKOCount(strCurrYearID, kClassType_SKO, bIsMNS)
	TestError(kAwardsInfoUnavalable)
	Call SetLoadedOSHValue( "T023003", nGraduateSKOCount )
End Sub

' индекс b устарел (напр. T010105b)
Sub ClearAvtoCalcValue()
	Dim ArrayClearValues, nCount,i

	ArrayClearValues = Array("T010104","T010105","T010106","T010107","T010108","T010109")
	nCount = Ubound(ArrayClearValues)
	For i=0 to nCount
		Call SetLoadedOSHValue( ArrayClearValues(i), "")
	Next
End Sub
%>
