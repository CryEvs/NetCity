<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strRegime

Sub SpecialRead()
	strRegime = GetSafe("Regime", "") ' пишем в токен
	Set objCommonYears = objNSNET.GetEMGlobalYearsList(strFilterEMID, -1, True)
	If objCommonYears.EOF Then
		bExit = True
		Exit Sub
	End If

	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	SetDefault_EndDate
End Sub

Sub SpecialWrite()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
End Sub

Sub SpecialFilters( strForm )
	If bExit Then Exit Sub

	Call InitEOLegalForms()
	Call DrawEOLegalForms(strForm)

	Call FilterYearAndOneDate()

	If strRegime = "2" Then
		Call DrawDOUGroupStepsFilter()
	End If
End Sub
%>
