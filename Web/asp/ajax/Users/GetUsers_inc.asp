<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objUserList

On Error Resume Next

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
End Function

Sub ReadYearConnectionState()
	Dim bArchived
	bArchived = GetSafeBool(obTokenMgr.GetData(strToken,"IsArchived"), False)
	If bArchived Then SetArchConnection
End Sub

Sub ReadState()
	SetScriptTimeOut 900
	Call ReadCommonUsersFilter(UserListForRole())
	Call ReadFilter()
	nCurrPage = GetSafeLng(Request("cp"), GetSafeLng( obTokenMgr.GetData( strToken, stCurrPage ),0) )
	nPageSize = GetSafeLng( Request("PageSize"), GetSafeLng( obTokenMgr.GetData( strToken, stPageSize ), kDefaultUsersPageSize) )
	If nPageSize <=0 Then nPageSize = kDefaultUsersPageSize
End Sub

Sub ReadFilter()
	'Stub
End Sub

Sub WriteState()
	Call WriteCommonUsersFilter(UserListForRole())
	Call WriteFilter()
End Sub

Sub WriteFilter()
	'Stub
End Sub

Sub Main()
	Set objUserList = LoadData()
End Sub

Function LoadData()
	'Load data stub
	LoadData = Nothing
End Function

Function AdditionalData()
	'Additional data stub
	AdditionalData = Null
End Function

Function GetData(userList)
	GetData = "null"
End Function

Sub SendData
	Dim jsonRes
	Set jsonRes = New JSONResult
	Call jsonRes.AddData("pageSize", nPageSize)
	Call jsonRes.AddData("currPage", nCurrPage + 1)
	Call jsonRes.AddData("pageCount", pageCount)
	If Not objUserList is Nothing Then
		Call jsonRes.AddJsonData("users", GetData(objUserList))
		Call jsonRes.AddData("addData", AdditionalData)
		objUserList.Close
		Set objUserList = Nothing
	End If
	Response.Write jsonRes
	Set jsonRes = Nothing
End Sub

Call ReadYearConnectionState()
Call ReadState()
TestError "Ошибка загрузки списка пользователей"
Call Main()
TestError "Ошибка загрузки списка пользователей"
Call WriteState()
Call SendData()
TestError "Ошибка загрузки списка пользователей"
%>
