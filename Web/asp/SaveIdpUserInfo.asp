<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2015 IRTech. All rights reserved.
On Error Resume Next

Dim strWorkPage
Dim strSnils, strMobilePhone, strEMail
Dim bSaveMobilePhone, bSaveEmail

strWorkPage = GetSafeStrParam(obTokenMgr.GetData(strToken, stNextPage), Null)

strSnils = GetSafeStr(Request("SNILS"), -1, "")
strMobilePhone = GetSafeStr(Request("MOBILEPHONE"), -1, "")
strEMail = GetSafeStr(Request("EMAIL"), -1, "")

bSaveMobilePhone = Not IsEmpty(Request("MP"))
bSaveEmail = Not IsEmpty(Request("EM"))

Call Save()

RedirectTo strWorkPage, Null

Sub Save()
	Dim component, uow

	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
	Set uow = component.GetEditUserInfoWork(strUserId, strUserId, strSchoolId, strCurrYearId, strCurrGlobalYearId)

	If Not IsDull(strSnils) Then
		Call uow.SetSnils(strSnils)
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
	End If

	If Not IsDull(strMobilePhone) And bSaveMobilePhone Then
		Call uow.SetMobilePhone(strMobilePhone)
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
	End If

	If Not IsDull(strEMail) And bSaveEmail Then
		Call uow.SetEmail(strEMail)
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))
	End If

	Call uow.Commit()
	Call uow.Dispose()
End Sub
%>