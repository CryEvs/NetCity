<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim objSmsComponent, strPhoneNumber, result, smartsApplicationObj, bGetRemainingMoney

Dim strLastName, strFirstName, strMiddleName, strContactPhoneNumber, dtCompletionDate
Dim strBankName, strBIK, strCorrespondentAccount, strCurrentAccount, strINN, strKPP
Dim objUnsubscribeResult
	
Call InitializeComponents()

bGetRemainingMoney = GetRequestBool("GetRemainingMoney", "true")

If bGetRemainingMoney Then
	strLastName					= GetSafeStr(Request("lastName"), -1, "")
	strFirstName				= GetSafeStr(Request("firstName"), -1, "")
	strMiddleName				= GetSafeStr(Request("middleName"), -1, "")
	strContactPhoneNumber		= GetSafeStr(Request("contactPhoneNumber"), -1, "")
	dtCompletionDate			= GetSafeDate(Request("completionDate"), Now())
	strBankName					= GetSafeStr(Request("bankName"), -1, "")
	strBIK						= GetSafeStr(Request("BIK"), -1, "")
	strCorrespondentAccount		= GetSafeStr(Request("correspondentAccount"), -1, "")
	strCurrentAccount			= GetSafeStr(Request("currentAccount"), -1, "")
	strINN						= GetSafeStr(Request("INN"), -1, "")
	strKPP						= GetSafeStr(Request("KPP"), -1, "")

	Set smartsApplicationObj = Server.CreateObject("SmartsApplication")
	smartsApplicationObj.LastName						= strLastName
	smartsApplicationObj.FirstName						= strFirstName
	smartsApplicationObj.MiddleName						= strMiddleName
	smartsApplicationObj.ContactPhoneNumber				= strContactPhoneNumber
	smartsApplicationObj.CompletionDate					= dtCompletionDate
	smartsApplicationObj.BankName						= strBankName
	smartsApplicationObj.BIK							= strBIK
	smartsApplicationObj.CorrespondentAccount			= strCorrespondentAccount
	smartsApplicationObj.CurrentAccount					= strCurrentAccount
	smartsApplicationObj.INN							= strINN
	smartsApplicationObj.KPP							= strKPP
End If

strPhoneNumber = GetSafeStr(Request("PHONENUMBER"), -1, "")

If bGetRemainingMoney Then
	Set objUnsubscribeResult = objSmsComponent.Unsubscribe(strPhoneNumber, strSchoolId, strUserId, smartsApplicationObj)
Else
	Set objUnsubscribeResult = objSmsComponent.Unsubscribe(strPhoneNumber, strSchoolId, strUserId, Null)
End If

If objUnsubscribeResult.isSuccess Then
	Call obTokenMgr.SetData(strToken, stWasSaved, Cstr(obLanguage("SMS", "kSmsMailingDeactivated")))
Else
	Call obTokenMgr.SetData(strToken, stWasSaved, objUnsubscribeResult.Message)
End If
	
Set result = new JSONResult
Response.Write result

Sub InitializeComponents()
	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
End Sub%>
