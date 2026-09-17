<!-- #INCLUDE VIRTUAL=/asp/headerprint_s.asp -->
<!-- #INCLUDE FILE   ="MonthBirth_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/Calendar/PublicMonthBirth_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub	onDrawPage()
	Response.Write GetPageTitlePrint(obLanguage("Calendar","kTitleMonthBirth") & ": " & obLanguage.GetMonthName( Month( dtCurrDate ), False ), GetArrPageTitle())
	If Not IsArray( arrMonthBirth ) Then
		Response.Write GetWarningPrint(obLanguage("Calendar","kNoBirthdays"))
	Else
		Call DrawMonthBirth()
	End If
	Response.Write GetPageVerPrint()
End	Sub
%>
