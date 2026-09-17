<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="ChildrenNotAttendingDOUAgeCategory_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialFilters( strForm )
	Dim arrAgeCategory
	arrAgeCategory = InitarrType(arrAgeCategory)
	FilterGlobalYear
	If bExit Then Exit Sub
	DrawEM_PreSchools
	If bExit Then Exit Sub
	DrawFilterRow "", obLanguage("EMReports","kAges")+obLanguage("EMReports","kCategory"), "AGECATEGORY", arrAgeCategory, "", "", -1, True
End Sub

Sub SpecialRead()
	'Для того чтобы отрисовывать УЧЕБНЫЕ ГОДА подотчетных УО из фильтров, если их нет берет самое вышестоящее
	InitEM_NotArchivedGlobalYears
	If objCommonYears.EOF Then Exit Sub

	InitEM_PreSchools
End Sub

%>
