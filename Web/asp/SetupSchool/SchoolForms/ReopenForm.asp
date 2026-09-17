<!-- #INCLUDE FILE="../../headernoscreen_Year.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim backPage, nFormId
Dim objSchoolFormComponent

If Not HasUserRight(arProfileEditSchoolInfo) Then  GenerateError obLanguage("Common","kErrPageAccess")

Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("Common","kErrSaveSchoolInfo",strFunctionalityType)

nFormId = GetSafeLng(Request("FORMID"), -1)
backPage = "StatForms.asp"

Call objSchoolFormComponent.ReopenSchoolForm(strSchoolYearID, nFormId)
TestError obLanguage("Common","kErrSaveSchoolInfo",strFunctionalityType)

RedirectTo backPage & "?", Array("SV", "Y")
%>
