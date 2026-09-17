<% ' © 2007-2012 IRTech. All rights reserved.
Dim rsCities, rsStates, rsProvinces, rsCountries, nPID, nCityID, nProvinceID, nStateID, nCountryID, bNoCountries, bNoState, bNoProvince, bNoCities
Dim level

Sub ReadLevel()
	On Error Resume Next
	Dim oldState
	level = Request("level")
	If IsEmpty(level) Then level = obTokenMgr.GetData(strToken,"level") Else Call obTokenMgr.SetData(strToken,"level", level )
	If level ="district" Then level ="city"
	Call obTokenMgr.SetData(strToken,stBackPage, strScriptName)
	nStateID = 0
	
	InitCountries
	bNoCountries = rsCountries.EOF
	If bNoCountries Then Exit Sub
	
	nCountryID = GetSafeLng( Request("Country"),0)
	If nCountryID =0 Then
		If level <> "" Then
			nCountryID = GetSafeLng( obTokenMgr.GetData(strToken,"Country"), 0)
		Else
			nCountryID = GetSafeLng( Request.Cookies("SALoginCookies")("Country"), 0)
			If nCountryID = 0 Then nCountryID =GetSafeLng(objNSNET.GetCountryIdByCountSchool(),0)
		End If
	End If
	nCountryID = objNSNET.GetSafeCountryID(nCountryID)
	If nCountryID = 0 Then nCountryID = GetSafeLng(rsCountries("COUNTRYID"),0)

	oldState = obTokenMgr.GetData(strToken,"State")
	If nCountryID <> obTokenMgr.GetData(strToken,"Country") Then
		Call obTokenMgr.SetData(strToken,"Country", nCountryID)
		Response.Cookies("SALoginCookies")("Country") = nCountryID
		nStateID = obTokenMgr.GetData(strToken,"State_")
		If IsDull(nStateID) Then
			nStateID = GetSafeLng( Request("State"), GetSafeLng( oldState, 0))
		Else
			Call obTokenMgr.SetData(strToken,"State_", "")
		End If
		nStateID = objNSNET.GetSafeCountryStateID(nStateID,nCountryID)
	Else
		level = "state" 
	End If 
	nPID = nCountryID

	InitStates
	bNoState = rsStates.EOF
	If bNoState Then Exit Sub
	If level = "" Then
		nStateID = GetSafeLng( Request.Cookies("SALoginCookies")("State"), 0 )
		If nStateID = 0 Then nStateID =GetSafeLng(objNSNET.GetStateIdByCountSchool(nCountryID),0)
	ElseIf level <> "country" Then
		nStateID = GetSafeLng( Request("State"), GetSafeLng( oldState, 0))
	ElseIf nStateID<=0 Then
		nStateID = GetSafeLng(rsStates("STATE_PROVINCEID"),0)
	End If
	nStateID = objNSNET.GetSafeCountryStateID(nStateID,nCountryID)
	If nStateID = 0 Then nStateID = GetSafeLng(rsStates("STATE_PROVINCEID"),0)
	If nStateID <> oldState Then
		Call obTokenMgr.SetData(strToken,"State_", oldState)
		Call obTokenMgr.SetData(strToken,"State", nStateID)
		Response.Cookies("SALoginCookies")("State") = nStateID
	Else
		level = "province" 
	End If 
	nPID = nStateID

	'nLevel = GetSafeLng(Request("HLEVEL"),kMixedLevel)
	InitProvinces
	bNoProvince = rsProvinces.EOF
	nProvinceID = -1
	If Not bNoProvince Then
		If level = "" Then
			nProvinceID = GetSafeLng( Request.Cookies("SALoginCookies")("Province"), 0 )
			If nProvinceID = 0 Then nProvinceID = GetSafeLng(objNSNET.GetProvinceIdByCountSchool(nStateID), 0)
		ElseIf level = "province" Or level = "city" Then
			nProvinceID = obTokenMgr.GetData(strToken,"Province_")
			If IsDull(nProvinceID) Then
				nProvinceID = GetSafeLng( Request("Province"), GetSafeLng(obTokenMgr.GetData(strToken,"Province"), 0) )
			Else
				Call obTokenMgr.SetData(strToken,"Province_", "")
			End If
		Else
			nProvinceID = GetSafeLng( Request("Province"), GetSafeLng( obTokenMgr.GetData(strToken,"Province"), 0))
		End If
	End If
	nProvinceID = objNSNET.GetSafeStateProvinceID(nProvinceID,nStateID)
	If nProvinceID > 0 Then nProvinceID = objNSNET.GetSafeStateProvinceID(nProvinceID,nStateID)
	If nProvinceID = 0 Then nProvinceID = -1
	If nProvinceID <> obTokenMgr.GetData(strToken,"Province") Then
		Call obTokenMgr.SetData(strToken,"Province", nProvinceID)
	Else
		level = "city" 
	End If 
	nPID = nProvinceID

	Set rsCities = objNSNET.GetCityList(nStateID, nProvinceID)
	TestError obLanguage("ServAdmin","kErrCities")
	bNoCities = rsCities.EOF
	If Not bNoCities Then
		If level = "" Then
			nCityID = GetSafeLng( Request.Cookies("SALoginCookies")("City"), 0 )
			If nCityID = 0 Then nCityID = GetSafeLng(objNSNET.GetCityIdByCountSchool(nStateID, nProvinceID), 0)
		ElseIf level = "city" Then
			nCityID = obTokenMgr.GetData(strToken,"City_")
			If IsDull(nCityID) Then
				nCityID = GetSafeLng( Request("City"), GetSafeLng(obTokenMgr.GetData(strToken,"City"), 0) )
			Else
				Call obTokenMgr.SetData(strToken,"City_", "")
			End If
		Else
			nCityID = GetSafeLng(rsCities("CITYID"),0)
		End If
		nCityID = objNSNET.GetSafeStateProvinceCityID(nCityID,nStateID,nProvinceID)
		If nCityID = 0 Then nCityID = GetSafeLng(rsCities("CITYID"),0)
		Response.Cookies("SALoginCookies")("City") = nCityID
		Response.Cookies("SALoginCookies").Expires = DateAdd("m", 1, NSNow() )
		nPID = nCityID
		If nCityID <> obTokenMgr.GetData(strToken,"City") Then
			Call obTokenMgr.SetData(strToken,"City", nCityID)
		Else
			level = "street" 
		End If 
	Else
		level = "state" 
		nCityID = 0
	End If
End Sub

Sub InitCountries 
	On Error Resume Next
	Set rsCountries = objNSNET.GetCountryList()
	TestError obLanguage("ServAdmin","kErrCountries")
End Sub

Sub InitStates
	On Error Resume Next
	Set rsStates = objNSNET.GetStateList(nCountryID)
	TestError obLanguage("ServAdmin","kErrStates")
End Sub

Sub InitProvinces
	On Error Resume Next
	Set rsProvinces = objNSNET.GetProvinceList(nStateID)
	TestError obLanguage("ServAdmin","kErrStates")
End Sub

Sub InitStatesProvinsesCities
		Set rsStates = objNSNET.GetStateList(nCountryID)
		Set rsProvinces = objNSNET.GetProvinceList(nStateID)
		Set rsCities = objNSNET.GetCityList(nStateID, nProvinceID)
End Sub

Sub WriteStateData
		Call obTokenMgr.SetData(strToken,"Country", nCountryID)
		Call obTokenMgr.SetData(strToken,"State", nStateID)
		Call obTokenMgr.SetData(strToken,"Province", nProvinceID)
		Call obTokenMgr.SetData(strToken,"City", nCityID)
End Sub
%>
