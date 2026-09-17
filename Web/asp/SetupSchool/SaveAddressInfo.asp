<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strEditUserID, strAct
Dim strCityID, strDistrictID, strLocationID, strHouse, strRoom, strCorp, strZipCode
Dim nIsFactAddress, nIsForAll
Dim nResult
Dim strBackPage

Dim component, uow

strEditUserID = GetSafeID(Request("UID"), NULL )
strAct = GetSafeStr(Request("ACT"), -1, Null)
strBackPage = obTokenMgr.GetData(strToken, stBackPage)

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetEditUserInfoWork(strUserId, strEditUserID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

If strAct <> "set_equal" Then
	nIsFactAddress = GetSafeLng(Request("IsFactAddress"), Null)
	If nIsFactAddress < 0 Or nIsFactAddress > 1 Then GenerateHTMLError obLanguage("Common","kInvalidParameter"), strBackPage, strToken
End If
nIsForAll = GetSafeLng(Request("IsForAll"), Null)
If nIsForAll < 0 Or nIsForAll > 1 Then GenerateHTMLError obLanguage("Common","kInvalidParameter"), strBackPage, strToken

On Error Resume Next
If strAct = "edit" Or strAct = "set_equal" Then
	If strAct = "edit" Then
		strCityID = GetSafeID(Request("City"), null)
		strDistrictID = GetSafeID(Request("DistrictID"), "-1")
		If strDistrictID = "-1" Then strDistrictID = Null
		strLocationID = GetSafeID(Request("LocationID"), "-1")
		strHouse = GetSafeStr(Request("House"), -1, Null)
		strCorp = GetSafeStr(Request("Corp"), -1, "")
		strRoom = Request("Room")
		strZipCode = GetSafeStr(Request("ZipCode"), 10, "")
		nResult = uow.SetUserAddressByRefIds(strDistrictID, strLocationID, strHouse, strCorp, strRoom, nIsFactAddress = 1, nIsForAll = 1, strCityID, strZipCode)
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantSetUserAddress"))
		If nResult = "-1" Then 
		    Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchool","kAddressWasSaved")) & " " & obLanguage("SetupSchool","kIndexNotDefined"))
		Else
		    Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchool","kAddressWasSaved")))
		End If
	Else ' set_equal
		nResult = uow.SetRegEqualHomeAddress(nIsForAll = 1)
		Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantSetUserAddress"))
		If nResult < 0 Then
			GenerateHTMLError obLanguage("SetupSchool","kCantSetUserAddress"), strBackPage, strToken
		End If
		Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchool","kAddressSetEqual")) )
	End If
ElseIf strAct = "delete" Then
	Call uow.RemoveUserAddress(nIsFactAddress = 1, nIsForAll = 1)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantDeleteUserAddress"))
	Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchool","kAddressWasDeleted")) )
Else
	GenerateHTMLError obLanguage("Common","kInvalidParameter"), strBackPage, strToken
End If

Call uow.Commit()
Call uow.Dispose()

RedirectTo GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER" )), null
%>
