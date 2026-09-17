<!-- #INCLUDE FILE=../headerajax.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.
On Error Resume Next
Dim nAreaID, bOk, strAreaPar, strArea, nResult, oldID
Dim strError

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")

strAreaPar = GetSafeStr(Request("Area"), 200, obTokenMgr.GetData(strToken, "Area"))
If strAreaPar = "district" Or strAreaPar = "street" Then Call obTokenMgr.SetData(strToken, "Area", "city")
nAreaID = GetSafeLng(Request("Founders"), GetSafeLng(Request("AreaID"), Null))

oldID = GetSafeLng( Request("oldID"),0 )
If oldID>0 Then
	If oldID = nAreaID Then GenerateError obLanguage("ServAdmin","kCantReplaceToSelf")
	Select Case strAreaPar
	Case "EO"	
		Call objNSNET.ReplaceEO(oldID, nAreaID)
	Case "street"
		bOk = objNSNET.IsLocationImportedFromKladr(oldID, "", 0)
		If bOk Then GenerateError obLanguage("ServAdmin","kCantReplace") & obLanguage("ServAdmin","kLocationImportedFromKladr")
		Call objNSNET.ReplaceLocation(oldID, nAreaID)
	Case "district"
		Call objNSNET.ReplaceDistrict(oldID, nAreaID)
	Case "city"
		bOk = objNSNET.IsCityImportedFromKladr(oldID)
		If bOk Then GenerateError obLanguage("ServAdmin","kCantReplace") & obLanguage("ServAdmin","kCityImportedFromKladr")
		Call objNSNET.ReplaceCity(oldID, nAreaID)
		Call obTokenMgr.SetData(strToken,"City", nAreaID)
	Case "province"
		bOk = objNSNET.IsProvinceImportedFromKladr(oldID)
		If bOk Then GenerateError obLanguage("ServAdmin","kCantReplace") & obLanguage("ServAdmin","kProvinceImportedFromKladr")
		Call objNSNET.ReplaceProvince(oldID, nAreaID)
		Call obTokenMgr.SetData(strToken,"Province", nAreaID)
	Case "state"
		bOk = objNSNET.IsStateImportedFromKladr(oldID)
		If bOk Then GenerateError obLanguage("ServAdmin","kCantReplace") & obLanguage("ServAdmin","kStateImportedFromKladr")
		Call objNSNET.ReplaceState(oldID, nAreaID)
		Call obTokenMgr.SetData(strToken,"State", nAreaID)
	Case "country"
		If oldID<>2 Then Call objNSNET.ReplaceCountry(oldID, nAreaID)
		Call obTokenMgr.SetData(strToken,"Country", nAreaID)
	Case Else GenerateError obLanguage("Common","kInvalidParameter")
	End Select
	TestError( obLanguage("ServAdmin","kCantReplace") )
	Call WriteJsonResult(obLanguage("SetupSchoolUI","kRecordWasReplaced"), False, 0)
Else
	Select Case strAreaPar
	Case "founder"
		strArea = obLanguage("ServAdmin","kFounder")
		bOk = CBool(objNSNET.RemoveFounder(nAreaID))
	Case "EO"	strArea = obLanguage("Common","kEO")
		bOk = CBool(objNSNET.RemoveEO(nAreaID))
	Case "street"
		strArea = LCase(obLanguage("Common","kStreet"))
		bOk = CBool(objNSNET.RemoveLocation(nAreaID))
	Case "district"
		strArea = LCase(obLanguage("Common","kDistrict")) & ":"
		If Request("Move")="1" Then
			bOk = CBool(objNSNET.MoveDistrict(nAreaID))
		Else
			bOk = CBool(objNSNET.RemoveDistrict(nAreaID))
		End If
	Case "city"
		strArea = LCase(obLanguage("Common","kCity"))
		nResult = objNSNET.RemoveCity(nAreaID)
		bOk = CBool(nResult<>1)
		Select Case nResult
			Case 0: Call obTokenMgr.SetData(strToken,"City", Null)
			Case 2: GenerateError obLanguage("ServAdmin","kRemoveCityIsNotAllowed")
			Case 3: GenerateError obLanguage("ServAdmin","kRemoveCityIsNotAllowedByAddress")
			Case 4: GenerateError obLanguage("ServAdmin","kRemoveCityIsNotAllowedByParentCity")
		End Select
	Case "province"
		strArea =LCase(obLanguage("Common","kProvince"))
		bOk = CBool(objNSNET.RemoveProvince(nAreaID))
		Call obTokenMgr.SetData(strToken,"Province", Null)
	Case "state"
		strArea =LCase(obLanguage("Common","kState"))
		bOk = objNSNET.IsStateImportedFromKladr(nAreaID)
		If bOk Then GenerateError  obLanguage("ServAdmin","kCantDeleteBecause") & obLanguage("ServAdmin","kStateImportedFromKladr")
		bOk = CBool(objNSNET.RemoveState(nAreaID))
		Call obTokenMgr.SetData(strToken,"State", Null)
	Case "country"
		strArea =LCase(obLanguage("Common","kCountry"))
		If nAreaID=2 Then GenerateError  obLanguage("ServAdmin","kCantDeleteBecause") & obLanguage("ServAdmin","kStateImportedFromKladr")
		bOk = CBool(objNSNET.RemoveCountry(nAreaID))
		Call obTokenMgr.SetData(strToken,"Country", Null)
	Case Else GenerateError obLanguage("Common","kInvalidParameter")
	End Select

	TestError obLanguage("ServAdmin","kCantDeleteBecause")  & " " & strArea
	If Not bOk Then GenerateError obLanguage("ServAdmin","kCantDeleteBecause") & obLanguage("ServAdmin","kBecauseOf") & " "&strArea&" "& LCase(obLanguage("Common","kEmploy"))
	Call WriteJsonResult(obLanguage("SetupSchoolUI","kRecordWasDeleted"), False, 0)

End If
%>
