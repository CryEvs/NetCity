<!-- #INCLUDE FILE="../headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim objMailComponent, strEMail, result

Set result = new JSONResult
Call InitializeComponents()

strEMail = GetSafeStr(Request("ITEMNAME"), -1, "")
Call objMailComponent.SendEmailMessage("", strEMail, obLanguage("ServAdmin", "kSubjectTestMail"), obLanguage("ServAdmin", "kNoticeTestMail"))
	
If Err.number <> 0 Then
	result.IsError = True
	result.Message = obLanguage("ServAdmin", "kFailedToSend") & ": " & Err.Description
	Call result.AddData("Result", "ERROR")
End If

Response.Write result

Sub InitializeComponents()
	Set objMailComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMailComponent")
End Sub%>
