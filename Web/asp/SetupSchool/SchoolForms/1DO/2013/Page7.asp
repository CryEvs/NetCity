<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()
%>


<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(6, 2, 3, 31, 3, 6);
	SumRowAllCols(6, 7, 3, 31, 8, 14);
	SumRowAllColsByIndex(6, 1, 3, 31, [2,7,15,16]);
	SumRowAllCols(6, 17, 3, 3, 19, 20);

	ValidateIncludedRows(6, 17, [18], 3, 3);
	ValidateIncludedCols(6, 3, [6], 1, 16);
	ValidateIncludedCols(6, 3, [7,8], 1, 16);
	ValidateIncludedCols(6, 3, [9], 1, 16);
	ValidateIncludedCols(6, 3, [10,11,12,13], 1, 16);
	ValidateIncludedCols(6, 14, [15], 1, 16);
	ValidateIncludedCols(6, 3, [16,18], 1, 16);
	ValidateIncludedCols(6, 16, [17], 1, 16);
	ValidateIncludedCols(6, 18, [19], 1, 16);
	ValidateIncludedCols(6, 3, [22,23,24,25,26], 1, 16);
	ValidateIncludedCols(6, 3, [27,28,29], 1, 16);
	ValidateIncludedCols(6, 29, [30], 1, 16);
	ValidateIncludedCols(6, 30, [31], 1, 16);

	ValidateIncludedCells(6, 8, 3, [21], 3);
	ValidateIncludedCells(6, 2, 3, [22], 3);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
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
	Dim sectionBlocksBasePosts, i, isOthers, rowNums, k, blockBasePosts, postsNames, posStatus, objCountEmplInfo

	SetScriptTimeOut 900
	'Заполнение основной таблицы
	sectionBlocksBasePosts = Array(Empty, Array("руководител%,директор%", "%зам% руководител%,%зам% директор%", "главный бухгалтер"), Array("учител", "%педагог доп% образования%", "педагог-организатор", "социальн% педагог", "тренер-преподавател", "методист"), Empty, Empty)

	For i = 1 To Ubound(sectionBlocksBasePosts)

		Select case i
			case 1
				isOthers = true
				rowNums = Array(3,4,5,6)
				posStatus = PosStatuses_ManagPerson
			case 2
				rowNums = Array(8,9,10,11,12,13,14)
				posStatus = PosStatuses_TeachStaff
			case 3
				isOthers = false
				rowNums = Array(15)
				posStatus = PosStatuses_TeachSupportStaff
			case 4
				rowNums = Array(16)
				posStatus = PosStatuses_ServiceStaff
		End Select
		
		blockBasePosts = Empty
		postsNames = Empty ' в параметр записывается строка должностей через запятую
		If IsArray(sectionBlocksBasePosts(i)) Then
			blockBasePosts = sectionBlocksBasePosts(i)
			postsNames = Join(blockBasePosts, ",")
			For k = 0 To Ubound(blockBasePosts)
				Call CalcByBlockSection(blockBasePosts(k), rowNums(k), false, posStatus)
			Next
		End If

		Call CalcByBlockSection(postsNames, rowNums(k), isOthers, posStatus)
		k = 0
	Next

	'Справка
	Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(Array("32"), Array("'Штатный сотрудник'"), strSchoolYearId, , PosStatuses_MedicalStaff)
	Call SetLoadedOSHValue("T061803", objCountEmplInfo("countEmploees"))
	Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(Array("6", "32"), Array("врач", "'Штатный сотрудник'"), strSchoolYearId, , PosStatuses_MedicalStaff)
	Call SetLoadedOSHValue("T061903", objCountEmplInfo("countEmploees"))
	Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(Array("6", "32"), Array("%мед%сестр%%", "'Штатный сотрудник'"), strSchoolYearId, , PosStatuses_MedicalStaff)
	Call SetLoadedOSHValue("T062003", objCountEmplInfo("countEmploees"))
	Set objCountEmplInfo = objNSNET.Get85KSection32DistrAge(Array(6, 32), Array("учител", "'Штатный сотрудник'"), strSchoolYearId, dtPresentationDate, Array(0, 30), , PosStatuses_TeachStaff)
	Call SetLoadedOSHValue("T062103", objCountEmplInfo("ages1"))
	Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(Array("6", "32", "34"), Array("руководител", "'Штатный сотрудник'"), strSchoolYearId, , PosStatuses_ManagPerson)
	Call SetLoadedOSHValue("T062203", objCountEmplInfo("countEmploees"))
End Sub

Sub CalcByBlockSection(itemNames, rowNum, isOthers, posStatus)
	Dim objCountEmplInfo, strRowNum, i, agesIntrvls, categories, education

	Dim prms1, prms2, prms3, prms4, prms5, prms6
	Dim itms1, itms2, itms3, itms4, itms5, itms6
	
	prms1 = Array("6", "32")
	prms2 = Array("6", "32", "10")
	prms3 = Array("8", "6", "32")
	prms4 = Array("4", "6", "32")
	prms5 = Array(6, 32)
	prms6 = Array(6, 32, 48)

	itms1 = Array(itemNames, "'Штатный сотрудник'")
	itms2 = Array(Empty, itemNames, "'Штатный сотрудник'")
	itms3 = Array(itemNames, "'Совместитель'")

	If itemNames = Empty Then
		prms1 = Array("32")
		prms2 = Array("32", "10")
		prms3 = Array("8", "32")
		prms4 = Array("4", "32")
		prms5 = Array(32)
		prms6 = Array(32, 48)

		itms1 = Array("'Штатный сотрудник'")
		itms2 = Array(Empty, "'Штатный сотрудник'")
		itms3 = Array("'Совместитель'")
	End If

	strRowNum = FormatValueIndex(rowNum)
	categories = Array("'Высшая'", "'Первая'", "'Вторая'", "'Не имеет','Соответствие'")
	education = Array("'Высшее профессиональное', 'Высшее педагогическое'", "'Высшее педагогическое'", "'Среднее профессиональное', 'Среднее педагогическое'", "'Среднее педагогическое'", "'Начальное профессиональное'", "'Среднее (полное) общее'")
	
	Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(prms1, itms1, strSchoolYearId, isOthers, posStatus)
	Call SetLoadedOSHValue("T06" & strRowNum & "03", objCountEmplInfo("countEmploees"))
	Call SetLoadedOSHValue("T06" & strRowNum & "06", objCountEmplInfo("countFEmploees"))

	Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(prms2, itms1, strSchoolYearId, isOthers, posStatus)
	Call SetLoadedOSHValue("T06" & strRowNum & "09", objCountEmplInfo("countEmploees"))

	For i = 0 To Ubound(categories)
		itms2(0) = categories(i)
		Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(prms3, itms2, strSchoolYearId, isOthers, posStatus)
		Call SetLoadedOSHValue("T06" & strRowNum & FormatValueIndex(i + 10), objCountEmplInfo("countEmploees"))
	Next

	Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(prms1, itms3, strSchoolYearId, isOthers, posStatus)
	Call SetLoadedOSHValue("T06" & strRowNum & "14", objCountEmplInfo("countEmploees"))
	Call SetLoadedOSHValue("T06" & strRowNum & "15", objCountEmplInfo("countFEmploees"))

	For i = 0 To Ubound(education)
		itms2(0) = education(i)
		Set objCountEmplInfo = objNSNET.Get85KSection31CountEmploees(prms4, itms2, strSchoolYearId, isOthers, posStatus)
		Call SetLoadedOSHValue("T06" & strRowNum & FormatValueIndex(i + 16), objCountEmplInfo("countEmploees"))
	Next

	Set objCountEmplInfo = objNSNET.Get85KSection33Exper(prms1, itms1, strSchoolYearId, Array(posStatus), Array(0, 2, 2, 5, 5, 10, 10, 20, 20, 999), isOthers)
	For i = 22 To 26
		Call SetLoadedOSHValue("T06" & strRowNum & FormatValueIndex(i), objCountEmplInfo(2*(i-22)+1))
	Next

	Set objCountEmplInfo = objNSNET.Get85KSection32DistrAge(prms5, itms1, strSchoolYearId, dtPresentationDate, Array(0, 24, 25, 34, 35, 999), isOthers, posStatus)
	For i = 27 To 29
		Call SetLoadedOSHValue("T06" & strRowNum & FormatValueIndex(i), objCountEmplInfo("ages" & (i-26)))
	Next

	Set objCountEmplInfo = objNSNET.Get85KSection32DistrAge(prms6, itms1, strSchoolYearId, dtPresentationDate, Array(35, 999), isOthers, posStatus)
	Call SetLoadedOSHValue("T06" & strRowNum & "30", objCountEmplInfo("ages1"))
	Call SetLoadedOSHValue("T06" & strRowNum & "31", objCountEmplInfo("fAges1"))
End Sub
%>