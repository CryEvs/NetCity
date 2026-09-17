<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strYearName, dtStart, dtEnd, strYearID
Dim nResult

strYearID  = GetSafeID(Request("YearID"),"0")
strYearName  = GetSafeStr(Request("NYN"),50,"")
dtStart = GetSafeDate( Request.Form("SDY"), NULL )
dtEnd = GetSafeDate( Request.Form("EDY"), NULL )

nResult = objNSNET.EditGlobalYear(strYearID, strYearName, dtStart, dtEnd)
TestError( obLanguage("SetupSchoolCalendar","kCantChangeYear") )
If nResult = 1 Then
	GenerateError obLanguage("SetupSchoolCalendar","kTermsNotInYearDates")
End If

RedirectTo "Refs.asp", Array("ParamID", "-4")
%>
