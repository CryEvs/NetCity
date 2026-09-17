<!-- #INCLUDE FILE=../headernoscreen_Year.asp -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim nYearId, strBackPage
Dim objContextComponent, changeYearResult

nYearId = GetSafeLng(Request("SCHOOLYEARID"), strSchoolYearID)
strBackPage = Request.ServerVariables("HTTP_REFERER")

Call ChangeYear(nYearId)

RedirectTo strBackPage, null
%>
