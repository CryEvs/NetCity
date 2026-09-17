<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim objSmsComponent, strFirstName, strLastName, strMiddleName, bDate, strMobilePhone
Dim objUserComponent
Dim result
	
Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
Set objUserComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")

strFirstName	= GetSafeStrParam(Request("FIRSTNAME"), Null)
strLastName		= GetSafeStrParam(Request("LASTNAME"), Null)
strMiddleName	= GetSafeStrParam(Request("MIDDLENAME"), Null)
bDate			= GetSafeDate(Request("BIRTHDATE"), Null)
strMobilePhone	= GetSafeStrParam(Request("MOBILEPHONE"), Null)

Call objUserComponent.SaveUserPersonalData(strUserID, strFirstName, strLastName, strMiddleName, bDate)
TestError err.Description

Call objNSNET.SetMobilePhoneForUser(strUserID, strMobilePhone)
TestError err.Description
	
Set result = objSmsComponent.Subscribe(strUserId, strSchoolId)
TestError err.Description
	
Call obTokenMgr.SetData(strToken, stWasSaved, result.Message)

RedirectTo "MarksBySms.asp", Null%>