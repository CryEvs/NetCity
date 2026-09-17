<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<%' © 2007-2015 IRTech. All rights reserved.
Dim objServerSettingsComponent, saveResult
Dim bBlockAccess, bRestrictNumericPass

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")

bBlockAccess = (GetSafeLng(Request("BlockAccess"), 0) = 1)
bRestrictNumericPass = (GetSafeLng(Request("RestrictNumericPasswords"), 0) = 1)

Set objServerSettingsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")

Set saveResult = objServerSettingsComponent.SaveServerSetting(Empty, ServerSetting_IpFilter, bBlockAccess)
If Not saveResult.IsSuccess Then
	GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
End If

Set saveResult = objServerSettingsComponent.SaveServerSetting(Empty, ServerSetting_RestrictNumericPasswords, bRestrictNumericPass)
TestError "!"
If Not saveResult.IsSuccess Then
	GenerateError obLanguage("ServAdmin","kCantSaveServerSettings")
End If

Call WriteJsonResult(obLanguage("ServAdmin","kSaveSecuritySettings"), False, 0)
%>
