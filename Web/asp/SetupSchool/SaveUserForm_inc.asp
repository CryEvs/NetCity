
<% ' © 2007-2015 IRTech. All rights reserved.
Dim bSave, strSavePage
Dim strEditUserID, nRoleType
Dim strFirstName, strMiddleName, bNoMiddleName, strLastName, strGender
Dim rsSimilar, rsSimilarOtherSchools, bFullAccessEditing
Dim dtBDate, arrJsOutProps, strDisplayName
Dim bAddSchoolPartEdit

strEditUserID = GetSafeID(Request("UID"), NULL)
bFullAccessEditing = (Request("FullAccessEditing") = 1)
bAddSchoolPartEdit = GetSafeBool(obTokenMgr.GetData(strToken, stAddSchoolPartEdit), False)

If bFullAccessEditing And Not bAddSchoolPartEdit Then
	strGender = GetSafeStr(Request("Gender"), 1, NULL)
	If strGender <> obLanguage("Common","kMaleLet") AND strGender <> obLanguage("Common","kFemaleLet") Then GenerateError(obLanguage("Common","kInvalidParameter"))
	strFirstName = Trim(GetSafeStr( Request("FN"), kMaxLastname, "" ))

	bNoMiddleName = GetSafeLng( Request("NoMiddleName"), 0 ) = 1
	strMiddleName = IIf(bNoMiddleName, "", Trim(GetSafeStr( Request("MN"), kMaxLastname, "" )))

	strLastName = Trim(GetSafeStr( Request("LN"), kMaxLastname, NULL ))
	If IsDull( Request("BDT") ) Then dtBDate = Empty Else dtBDate = Str2Date( Request("BDT") )
	
	strDisplayName = strLastName
	If strFirstName <> "" Then
		strDisplayName = strDisplayName & " " & strFirstName
		If strMiddleName <> "" Then strDisplayName = strDisplayName & " " & strMiddleName
	End If
End If

nRoleType = GetSafeLng(obTokenMgr.GetData(strToken,"ROLEID"), Null)
strSavePage = GetSafeStr(obTokenMgr.GetData(strToken,stSavePage), -1, Null)

'If Not bFullAccessEditing Or strFunctionalityType = kFuncType_Add And (nRoleType = rlStudent Or nRoleType = rlParent) Then
If Not bFullAccessEditing Or bAddSchoolPartEdit Then
	'нет ищем дублей - сразу сохраняем
	ServerRedirect strSavePage
End If

Set rsSimilar = objNSNET.GetSimilarUsers(strSchoolID, nRoleType, UCase(strLastName), UCase(strFirstName), UCase(strMiddleName), dtBDate, strGender, strEditUserID)
Set rsSimilarOtherSchools = objNSNET.GetSimilarUsersFromOtherSchools(strSchoolID, nRoleType, UCase(strLastName), UCase(strFirstName), UCase(strMiddleName), strGender, strEditUserID)
If rsSimilar.EOF And rsSimilarOtherSchools.EOF Then
	'нет дублей - сразу сохраняем
	ServerRedirect strSavePage
End If

Dim jsresult 
Set jsresult = new JSONResult

arrJsOutProps = Array("userid", "firstname", "lastname", "nickname", "gender", "birthdate")
Call jsresult.AddJsonData("similarUsers", comHelper.DataSetAdapterHelper.ToJSON(rsSimilar, arrJsOutProps))
Call comHelper.ArrayHelper.AppendArray(arrJsOutProps, Array("schoolname"))
If nRoleType = rlStudent Then
	Call comHelper.ArrayHelper.AppendArray(arrJsOutProps, Array("classname"))
End If
Call jsresult.AddJsonData("similiarUsersOtherSchools", comHelper.DataSetAdapterHelper.ToJSON(rsSimilarOtherSchools, arrJsOutProps))
Call jsresult.AddData("displayName", strDisplayName)
Call jsresult.AddData("roleName", GetRoleName(nRoleType))
Call jsresult.AddData("roleType", nRoleType)
Call jsresult.AddData("savePage", strSavePage)

TestError obLanguage("Common","kUnexpErr")

Response.Write jsresult
Response.End

Function GetRoleName(nRoleType)
	Select Case nRoleType
		Case rlStudent: GetRoleName = obLanguage("Common","kStudent",strFunctionalityType)
		Case rlParent: GetRoleName = obLanguage("Common","kParent")
		Case Else GetRoleName = obLanguage("Common","kStaff")
	End Select
End Function%>