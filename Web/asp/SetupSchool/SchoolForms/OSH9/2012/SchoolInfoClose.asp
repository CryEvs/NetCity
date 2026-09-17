<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>

Const kErrorOshInfo = "Невозможно перенести данные Формы № ""ОШ-9""."
Dim objStatFormComponent

On Error Resume Next

Set objStatFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
If Not HasUserRight(arProfileEditSchoolInfo) Then GenerateError obLanguage("Common","kErrPageAccess")
strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)

Call objStatFormComponent.CloseSchoolYearOSHForm(strSchoolID, strCurrYearID, StatForm_Osh9)
TestError kErrorOshInfo

Response.Redirect "/asp/Reports/StatReports/StatReports.asp?VER=" & getVer() & "&AT=" & strToken
%>
