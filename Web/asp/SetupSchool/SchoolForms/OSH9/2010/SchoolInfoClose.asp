<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kErrorOshInfo = "Невозможно перенести данные Формы № ""ОШ-9""."
Dim objStatFormComponent

On Error Resume Next

Set objStatFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
If Not HasUserRight(arProfileEditSchoolInfo) Then GenerateError obLanguage("Common","kErrPageAccess")
strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)

Call objStatFormComponent.CloseSchoolYearOshForm(strSchoolID, strCurrYearID, StatForm_Osh9)
TestError kErrorOshInfo

Response.Redirect "/asp/Reports/StatReports/StatReports.asp?VER=" & getVer() & "&AT=" & strToken
%>
