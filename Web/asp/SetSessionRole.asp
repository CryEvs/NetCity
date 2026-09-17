<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->

<% ' © 2013 IRTech. All rights reserved.
Dim strBackPage, nSessionRole, obSecurityComponent
Dim bPWDExpired

nSessionRole = CLng(Request("SESSIONROLE"))

Set obSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")

Dim setRoleResult
Set setRoleResult = obSecurityComponent.SetSessionRole(strToken, nSessionRole)
If Not setRoleResult.IsSuccess Then
	GenerateError setRoleResult.Message
End If

' в методе obSecurityComponent.SetSessionRole уточняется экран входа пользователя, 
' поэтому получение strBackPage вставил после obSecurityComponent.SetSessionRole
strBackPage = IdentifyNextPage()

If (InStr(LCase(strBackPage), "setsessionrole.asp") > 0) Or IsDull(strBackPage) Then strBackPage = "/about.asp?AL=Y"

RedirectTo strBackPage, null
%>