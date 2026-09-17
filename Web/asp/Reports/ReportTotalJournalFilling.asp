<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nViewType, dtStartDate, dtEndDate
Dim nTeachersType

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRole(rlParent) or HasUserRole(rlStudent) Then hasUserRightsOnPage = False: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	'bIsCheckDates = True
	'bIsHeavyReport = True

	nViewType = GetSafeLng(Request("ViewType"), GetSafeLng(obTokenMgr.GetData(strToken, stViewTypeBySubjOrTeacher), 1))
	nTeachersType = GetSafeLng(Request("TeachersType"), GetSafeLng(obTokenMgr.GetData(strToken, stTeachersType), -1))
	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
End Sub

Sub specialWrite()
End Sub

Sub Main()
End Sub

Sub specialHead()
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub

Sub specialFilters( strForm )
	Call DrawSimpleFilterRow(obLanguage("Reports","strViewType"), "ViewType", Array(1, obLanguage("Calendar","kForSubjects_2", strFunctionalityType), 2, obLanguage("Calendar","kForTeachers_2", strFunctionalityType)), nViewType, False, "$('#DivTeachersType').toggleClass('hidden');")
	%><div id="DivTeachersType" <%=IIF(nViewType = 1, "class=""hidden""", "") %>><%
		Call DrawSimpleFilterRow(obLanguage("Reports","kShowTeachers", strFunctionalityType), "TeachersType", Array(-1, obLanguage("Common", "kAll_2"), 1, obLanguage("Reports", "kNotFilledLessons", strFunctionalityType)), nTeachersType, False, ";")
	%></div><%
	Call DrawDateIntervalRowEx(obLanguage("Common","kPeriod"), "ADT", dtStartDate, "DDT", dtEndDate)
End Sub
%>
