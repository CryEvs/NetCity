<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim objSmsComponent, strPhoneNumber, strBalance, result
	
Call InitializeComponents()
strPhoneNumber	= GetSafeStr(Request("PHONENUMBER"), -1, "")
strBalance		= objSmsComponent.GetBalance(strPhoneNumber)

TestError Err.Description
	
Set result = new JSONResult
Call result.AddData("balance", strBalance)
Response.Write result

Sub InitializeComponents()
	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
End Sub%>