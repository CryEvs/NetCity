<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dtStartDate, dtEndDate, dtToday, strToday
Dim strRepType

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	strRepType = GetSafeStrParam(Request("ReportType"), GetSafeStrParam(obTokenMgr.GetData(strToken, "stRepType_DouComplect"), "1"))
	Call InitDate()
End Sub

Sub specialWrite()
	Call obTokenMgr.SetData(strToken, "stRepType_DouComplect", strRepType)
	If strRepType="1" Then
		Call obTokenMgr.SetData(strToken, "DDT", strToday)
	End If
End Sub

Sub InitDate()
	' Возможны даты от начала до конца уч. года.
	Call CalcCurrYearLimits(dtStartDate, dtEndDate)

	dtToday = NSDate()
	If DateDiff("d", dtEndDate, dtToday, 0, 0) > 0 Then
		dtToday = dtEndDate
	ElseIf DateDiff("d", dtStartDate, dtToday, 0, 0) < 0 Then
		dtToday = dtStartDate
	End If

	If strRepType ="2" Then
		dtMinDate = dtStartDate
		dtMaxDate = dtEndDate
		bIsCheckDates = True
		Call InitSingleDate(dtMinDate, dtMaxDate, dtToday)
	End If

	strToday = Date2Str(dtToday)
End Sub

Sub specialHead()
	If strRepType ="2" Then
		Call scriptCalendar("Reports", dtStartDate, dtEndDate)
	End If
End Sub

Sub specialFilters(strForm)
	Call DrawSimpleFilterRow(obLanguage("Reports","kTypeReport"), "ReportType", Array(1, obLanguage("Reports","kWithDirectedToGroup"), 2, obLanguage("Reports","kWithoutDirectedToGroup")), strRepType, False, SelectChangeHandler(strForm))
	If strRepType = "1" Then 
		Call DrawTextRow(obLanguage("Common", "kDate"), strToday, "")
	Else
		Call DrawDateInfoRow(obLanguage("Common", "kDate"), dtToday, "DDT", "")
	End If
End Sub

Sub WriteMoreHiddenTags( )
	If strRepType = "1" Then 
		WriteHiddenTags(Array("DDT", strToday))
	End If
End Sub
%>
