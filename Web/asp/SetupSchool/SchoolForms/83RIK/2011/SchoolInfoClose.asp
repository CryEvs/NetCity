<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>

Const kErrorOshInfo = "Невозможно перенести данные Формы № ""83-РИК""."
Dim objStatFormComponent

On Error Resume Next

Set objStatFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
If Not HasUserRight(arProfileEditSchoolInfo) Then GenerateError obLanguage("Common","kErrPageAccess")
strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)

Call objStatFormComponent.CloseSchoolYearOshForm(strSchoolID, strCurrYearID, StatForm_Rik83)
TestError kErrorOshInfo

Response.Redirect "/asp/Reports/StatReports/StatReports.asp?VER=" & getVer() & "&AT=" & strToken
%>
