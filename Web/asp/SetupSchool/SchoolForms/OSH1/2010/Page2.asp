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
function CalculateOSH()
{
	var form = document.SchoolEdit;

	form.T010110.value = GetValueInt(form.T010103) + GetValueInt(form.T010104b) + GetValueInt(form.T010105b) + GetValueInt(form.T010106b) + GetValueInt(form.T010107) + GetValueInt(form.T010108) + GetValueInt(form.T010109);
	form.T010210.value = GetValueInt(form.T010203) + GetValueInt(form.T010204b) + GetValueInt(form.T010205b) + GetValueInt(form.T010206b) + GetValueInt(form.T010207) + GetValueInt(form.T010208) + GetValueInt(form.T010209);
	form.T010310.value = GetValueInt(form.T010303) + GetValueInt(form.T010304b) + GetValueInt(form.T010305b) + GetValueInt(form.T010306b) + GetValueInt(form.T010307) + GetValueInt(form.T010308) + GetValueInt(form.T010309);
	form.T010410.value = GetValueInt(form.T010403) + GetValueInt(form.T010404) + GetValueInt(form.T010405) + GetValueInt(form.T010406) + GetValueInt(form.T010407) + GetValueInt(form.T010408) + GetValueInt(form.T010409);
	form.T010510.value = GetValueInt(form.T010503) + GetValueInt(form.T010504) + GetValueInt(form.T010505) + GetValueInt(form.T010506) + GetValueInt(form.T010507) + GetValueInt(form.T010508) + GetValueInt(form.T010509);
	form.T010610.value = GetValueInt(form.T010603) + GetValueInt(form.T010604) + GetValueInt(form.T010605) + GetValueInt(form.T010606) + GetValueInt(form.T010607) + GetValueInt(form.T010608) + GetValueInt(form.T010609);
	form.T010710.value = GetValueInt(form.T010703) + GetValueInt(form.T010704) + GetValueInt(form.T010705) + GetValueInt(form.T010706) + GetValueInt(form.T010707) + GetValueInt(form.T010708) + GetValueInt(form.T010709);
	form.T010810.value = GetValueInt(form.T010803) + GetValueInt(form.T010804) + GetValueInt(form.T010805) + GetValueInt(form.T010806) + GetValueInt(form.T010807) + GetValueInt(form.T010808) + GetValueInt(form.T010809);
	form.T010910.value = GetValueInt(form.T010903);

	if (GetValueInt(form.T0222) < GetValueInt(form.T0223))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0223.focus();
		return false;
	}
	if (GetValueInt(form.T0223) < GetValueInt(form.T0224))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0224.focus();
		return false;
	}
	if (GetValueInt(form.T0224) < GetValueInt(form.T0225))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0225.focus();
		return false;
	}
	if (GetValueInt(form.T0223) < GetValueInt(form.T0226))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0226.focus();
		return false;
	}
	if (GetValueInt(form.T0226) < GetValueInt(form.T0227))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0227.focus();
		return false;
	}
	if (GetValueInt(form.T0230) < GetValueInt(form.T0231))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0231.focus();
		return false;
	}
	if (GetValueInt(form.T0232) < GetValueInt(form.T0233))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0233.focus();
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
	Dim strSuffix, nGrade

	strSuffix = ""
	If theGrade < 3 Then
		nGrade = theGrade + 1
	'Elseif theGrade = 3 Then
		'по 3 классу в строке 04 показываются обучающиеся, переведенные в 5 класс
		'(обучающиеся по программе десятилетней школы,
		'в строке 05-обучающиеся, переведенные в 4-й класс
		'(обучающиеся по программе одиннадцатилетней(двенадцатилетней) школы
		'If arrSchoolSettings( 1, kSSIndex_GradeSenior_Max ) = 10 Then
		'	nGrade = theGrade + 1
		'Else
		'	nGrade = theGrade + 2
		'End If
	Else
		nGrade = theGrade + 2
		If theGrade = 11 Then
			'по 11 классу по строке 13а)
			'указывается число обучающихся, окончивших школу с аттестатом
			'о среднем(полном)общем образовании,а в
			'строке 13 б)- число обучающихся, переведенных в 12 класс.
			If arrSchoolSettings( 1, kSSIndex_GradeSenior_Max ) = 12 Then
				strSuffix = "b"
			Else
				strSuffix = "a"
			End If
		End If
	End If

	GetOSH1Tab2LineName = "T02" & FormatValueIndex( nGrade ) & strSuffix
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
			Call SetLoadedOSHValue("T01010" & objCountStudInClassByDate("ordNum")+3 & IIF(objCountStudInClassByDate("ordNum")<4,"b",""), objCountStudInClassByDate("STUD_CNT"))
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
	Call SetLoadedOSHValue("T0218", "")
	Call SetLoadedOSHValue("T0228", "")
	Call SetLoadedOSHValue("T0229", "")
	Call SetLoadedOSHValue("T0232", "")

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
			Call SetLoadedOSHValue( "T0229", cntAwards )
		Elseif nAwardType = kAwardType_Gold Then
			Call SetLoadedOSHValue( "T0228", cntAwards )
		Elseif nAwardType = kAwardType_None Then
			Call SetLoadedOSHValue( "T0218", cntAwards )
		End If
		objAwardsInfo.MoveNext
	Loop

	nGraduateSKOCount = objNSNET.GetOSH1_GraduateFromSKOCount(strCurrYearID, kClassType_SKO, bIsMNS)
	TestError(kAwardsInfoUnavalable)
	Call SetLoadedOSHValue( "T0232", nGraduateSKOCount )
End Sub

' индекс b устарел (напр. T010105b)
Sub ClearAvtoCalcValue()
	Dim ArrayClearValues, nCount,i

	ArrayClearValues = Array("T010104b","T010105b","T010106b","T010107","T010108","T010109")
	nCount = Ubound(ArrayClearValues)
	For i=0 to nCount
		Call SetLoadedOSHValue( ArrayClearValues(i), "")
	Next
End Sub
%>
