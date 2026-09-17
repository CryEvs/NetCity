<!-- #INCLUDE FILE=headernoscreen_YearNo.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strWorkPage
Dim obSecurityComponent, result

strWorkPage = GetSafeStr(Request("WorkPage"), -1, "")

On Error Resume Next

Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
TestError obLanguage("Login","kErrCantGetSecurityComponent")
Set result = obSecurityComponent.DeleteHealthData()
TestError obLanguage("Login","kErrCantDeleteHealthData")
If Not result.IsSuccess Then
	GenerateError obLanguage("Login","kErrCantDeleteHealthData") & ": " & result.Message
End If

Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Login","kDeleteHealthDataSuccess")))
RedirectTo strWorkPage, null
%>
