<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim dtStartDate, dtEndDate

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	bIsCheckDates=True
	bIsHeavyReport = True

	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
End Sub

Sub ChangeMinMaxDates(byref dtMinDate, byref dtMaxDate)
	Dim dtConstMinDate, objSYInfo

	Set objSYInfo = objNSNET.GetYearInfo(strCurrYearID)
	If objSYInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	dtConstMinDate = DateSerial(Year(objSYInfo("STARTDATE")), kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)
	dtMinDate = GetMinFromDates(dtMinDate, dtConstMinDate)
End Sub

Sub specialWrite()
End Sub

Sub Main()
End Sub

Sub specialHead()
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub

Sub specialFilters( strForm )
	Call DrawDateRange()
End Sub
%>
