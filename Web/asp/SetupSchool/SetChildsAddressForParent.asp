<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strEditUserID, strAddressID, strBackPage, strIsFactAddress
Dim component, uow, bIsFactAddr

strBackPage = Request("BackPage")
strEditUserID = GetSafeID(Request("UID"), Null)
strIsFactAddress = GetSafeLng(Request("IsFactAddress"), Null)
strAddressID = GetSafeID(Request("AddrID"), Null)



If Not IsDull(strAddressID) Then 

	If(strIsFactAddress=1) Then 
		bIsFactAddr = True
	Else
		bIsFactAddr = False
	End If

	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
	Set uow = component.GetEditUserInfoWork( strUserId, strEditUserID, strSchoolId, strCurrYearId, strCurrGlobalYearId )
	Call uow.SetUserAddress(strAddressID, bIsFactAddr)
	
	Call uow.Commit()
	Call uow.Dispose()

	Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchool","kAddressWasSaved")) )

End IF
RedirectTo GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER" )), Array("UID", strEditUserID)
%>
