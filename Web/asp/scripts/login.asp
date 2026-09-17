<%
	Dim blnLoggedOut, bLogin
	Dim bHideCountry, bHideState, bHideProvince, bHideCity, bHideSchoolType, bHideSchool
	Dim strStateName, strProvinceName, strCountryName, strSchoolTypeName, bSelectPopulated, bCookiesFounded

	Dim bEmLoginForm
	Dim strStateID, strProvinceID, strCityID, strCountryID, strSchoolTypeID
	Dim nEmCountryId, nEmStateId, nEmHLevelID, nEmId
	Dim nLT, nVer

	Const kCID = "CID"
	Const kSID = "SID"
	Const kPID = "PID"
	Const kCN = "CN"
	Const kSFT = "SFT"
	Const kSCID = "SCID"
	Const kLSTNAME = "LASTNAME"

	Const kEM_CID = "EM_CID"
	Const kEM_SID = "EM_SID"
	Const kEM_HL = "HLEVEL"
	Const kEM_EMID = "EMID"

	Const nBaseLT = 594161239
	Const nBaseVer = 61
	Const nBaseGV = 897695341

	Function isOneEntry(ByRef objectRs)
	  If Not objectRs.EOF Then
		objRs.MoveNext
		If objRs.EOF Then 
			isOneEntry = True
		Else
			isOneEntry = False
		End If
		objRs.MoveFirst
	  Else
		isOneEntry = False
	  End If
	End Function

	Sub getCookiesJSArray()
		Dim JSArrays
		If bCookiesFounded Then
			JSArrays = "["
			JSArrays = JSArrays + "[["+Chr(34)+kCID+Chr(34)+"],["+strCountryID+"]]" + ","
			JSArrays = JSArrays + "[["+Chr(34)+kSID+Chr(34)+"],["+strStateID+"]]" + ","
			JSArrays = JSArrays + "[["+Chr(34)+kPID+Chr(34)+"],["+strProvinceID+"]]" + ","
			JSArrays = JSArrays + "[["+Chr(34)+kCN+Chr(34)+"],["+strCityID+"]]" + ","
			JSArrays = JSArrays + "[["+Chr(34)+kSFT+Chr(34)+"],["+strSchoolTypeID+"]]" + ","
			JSArrays = JSArrays + "[["+Chr(34)+kSCID+Chr(34)+"],["+strSchoolID+"]]"
			JSArrays = JSArrays + "]"           
		Else
			JSArrays = "[]"
		End If
		Response.Write JSArrays
	End Sub
%>