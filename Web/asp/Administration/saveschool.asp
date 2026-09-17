<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
On Error resume next
Const kSchoolNameMaxLen = 200
Dim lngSchoolID, lngUserID, strError1
Dim strAct, nEditSchoolID, nDistrictID, strCity, strEOID, strFullName, strSchoolNumber
Dim lngResult
Dim arrTokens, i, strActiveUserID, strActiveSchoolID, bDelSchoolInUse, objRs, strAdminName, strPassword

strAct = GetSafeStr(Request("act"), -1, Null)

If strAct = "new" Then
	strEOID = GetSafeID(Request("EOID"), Null)
	strFullName = Trim(GetSafeStr(obTokenMgr.GetData(strToken,"FullName"), kSchoolNameMaxLen, ""))
	strSchoolNumber = GetSafeStr(Request("SchoolNumber"), kSchoolNameMaxLen,  "")
	If IsDull(strFullName) Then
		Set objRs = objNSNET.GetEOInfo(strEOID)
		strFullName = objRs("EONAME")
	End If
	If IsDull(strSchoolNumber) Then
		Set objRs = objNSNET.GetEOInfo(strEOID)
		strSchoolNumber = objRs("EONAME")
	End If
	nDistrictID = GetSafeLng(Request("District"), -1)
	Call obTokenMgr.SetData(strToken,"District", nDistrictID)
	strCity = GetSafeID(Request("City"), Null)
	strAdminName = GetSafeStr(Request("LON"), 200, "")
	strPassword = GetSafeStr(Request("NP3"), 35, "")
	lngSchoolID = objNSNET.CreateSchool(strEOID, strFullName, strSchoolNumber,nDistrictID, strCity, bETokenAuthentication, strAdminName, strPassword, strError1)
	TestError(obLanguage("ServAdmin","kCantCreateSchool"))
	Select Case lngSchoolID
		Case 0	strError1 = obLanguage("ServAdmin","kUnknownError")
		Case -1	strError1 = obLanguage("ServAdmin","kInvalidSchoolName")
		Case -2	strError1 = obLanguage("ServAdmin","kCityOrDistrictUndef")
		Case -3	strError1 = obLanguage("ServAdmin","kSchoolNameExists")
		Case -4	strError1 = obLanguage("ServAdmin","kEONameExists")
		Case -100	strError1 = obLanguage("ServAdmin","kTooManySchools")
		Case Else	 strError1 = obLanguage("ServAdmin","kSchoolWasCreated")
	End Select
ElseIf strAct = "edit" Then
	nEditSchoolID = GetSafeLng(Request("EditSchoolID"), Null)
	strFullName = Trim(GetSafeStr(Request("FullName"), kSchoolNameMaxLen, Null))
	strSchoolNumber = GetSafeStr(Request("SchoolNumber"), kSchoolNameMaxLen, Null)
	Call objNSNET.EditFullSchoolName(nEditSchoolID, -2, strFullName, strSchoolNumber)
	TestError(obLanguage("ServAdmin","kCantChangeSchoolName"))
	strError1 = obLanguage("ServAdmin","kSchoolInfoWasChanged")
ElseIf strAct = "del" Then
	nEditSchoolID = GetSafeLng(Request("EditSchoolID"), Null)
	strSchoolNumber = GetSafeStr(Request("SchoolNumber"), kSchoolNameMaxLen, Null)
	bDelSchoolInUse = False
	If Not bDelSchoolInUse Then
		Server.ScriptTimeOut = Server.ScriptTimeOut * 100
		lngResult = objNSNET.RemoveSchool(nEditSchoolID)
		TestError obLanguage("ServAdmin","kCantRemoveSchool") & obLanguage("ServAdmin","kCantRemoveSchoolSupport")
		If lngResult = 0 Then strError1 = obLanguage("ServAdmin","kSchoolWasRemoved")
	End If
Else
	GenerateError obLanguage("Common","kInvalidParameter")
End If

Call obTokenMgr.SetData(strToken, stWasSaved, strError1)

RedirectTo "createschool.asp", null
%>
