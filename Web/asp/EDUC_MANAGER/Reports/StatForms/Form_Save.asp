<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->
<% ' © 2007-2008 IRTech. All rights reserved.

const kMessageMaxLen = 1000

Dim backPage, pageNum, strPageNum, nGroup
Dim nFormId, i, name, value, nCommonYearID
Dim dctParams
Dim bFormSpec

Dim objSchoolFormComponent
Call InitEmFilters()
Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("Common","kErrSaveSchoolInfo",strFunctionalityType)

nFormId = GetSafeLng(Request("FORMID"), Null)
nCommonYearID = GetSafeLng(obTokenMgr.GetData( strToken, "stCommYearID" ), Null)
pageNum = GetSafeLng(Request("PAGE"), -1)

bFormSpec = GetSafeLng(Request("FS"),0)

backPage = GetSafeStr(obTokenMgr.GetData( strToken, "Back" ), -1, Request.ServerVariables("HTTP_REFERER" ))

Set dctParams = Server.CreateObject("NetCity.Storage")
For i = 1 To Request.Form.Count
	name = Request.Form.key(i)
	value = Left(Trim(Request.Form(i)), 250)
	If Left(name, 1) = "T" Then
		Call dctParams.Add(name, CStr(value))
	End If
Next

If dctParams.Count > 0 Then
	Call objSchoolFormComponent.SaveEMFormInfo(nFormId, filterEMID, pageNum, nCommonYearID, -1, dctParams, bFormSpec)
End If
TestError obLanguage("Common","kErrSaveSchoolInfo",strFunctionalityType)

Call WriteJsonResult(GetSafeStr(Request("message"), kMessageMaxLen, null), False, 0)
%>
