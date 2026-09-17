<!-- #INCLUDE FILE=headernoscreen_PopupNo_AuthNo.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim obSecurityComponent

On Error Resume Next
Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
TestError obLanguage("Security","LoginError")

Session("AccessDenied") = False

Call obSecurityComponent.DoLogin()

Call GenerateLoginError

Sub GenerateLoginError()
	If Session("AccessDenied") Then
		Session("AccessDenied") = false
		If bIsAjaxCall Then
			Call WriteJsonResult_Ex(Err.Description, True, 403, 403)
		Else
			RedirectError Err.Description, ""
		End If
	Elseif Err.Number <> 0 Or Not IsDull(Err.Description) Then
		GenerateError(Err.Description)
	Else
		GenerateError( obLanguage("Security","LoginError"))
	End if
End Sub%>