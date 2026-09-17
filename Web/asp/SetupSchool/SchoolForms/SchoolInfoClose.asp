<!-- #INCLUDE FILE="../../headernoscreen_Year.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
Dim objStatFormComponent
Dim nFormId, strFormName
Dim bIsMNS
Dim objHelper, statFormEnum

nFormId = GetSafeLng(Request("FORMID"), -1)
bIsMNS = Not IsDull(Request("MNS"))

On Error Resume Next

Set objStatFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
If Not HasUserRight(arProfileEditSchoolInfo) Then GenerateError obLanguage("Common","kErrPageAccess")
strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)

Set objHelper = comHelper.AspHelper
Set statFormEnum = objHelper.GetEnum(objHelper.Enums.SchoolForm, nFormId)
TestError obLanguage("Common","kUnexpErr")
strFormName = statFormEnum.ToString()

If nFormId = StatForm_K85 Then
	strFormName = "85K"
ElseIf nFormId = StatForm_Rik83 Then
	strFormName = "83RIK"
ElseIf nFormId = StatForm_Od1 Then
	strFormName = "OD1"
ElseIf nFormId = StatForm_Do1 Then
	strFormName = "1DO"
End If

Call objStatFormComponent.CloseSchoolYearOshForm(strSchoolID, strCurrYearID, nFormId, bIsMNS)
TestError obLanguage("SchoolInfo", "kErrorOshInfo").Format(Array(strFormName))

Call WriteJsonResult(obLanguage("SchoolInfo","kStatFormClosed" ), False, 0)
%>
