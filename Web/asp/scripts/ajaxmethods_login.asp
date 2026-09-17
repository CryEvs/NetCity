<%@ Language=VBScript %>
<!-- #INCLUDE FILE=common.asp -->
<!-- #INCLUDE FILE=populate.asp -->
<!-- #INCLUDE FILE=stdhead.asp -->
<!-- #INCLUDE FILE=PopupNo.asp -->
<!-- #INCLUDE FILE=login.asp -->
<%
	Session.CodePage = 65001
	Response.Charset = "utf-8"
	Response.Expires = 1440
	Response.CacheControl = "Public, max-age=86400" 

	Dim strMethod, objRs
	Dim result
	Const kUnsel = -100

	strMethod = GetSafeStr(Request("method"),-1,"")
	strCountryID = GetSafeLng( Request(kCID), 0 )
	strStateID = GetSafeLng( Request(kSID), 0 )
	strProvinceID = GetSafeLng( Request(kPID), 0 )
	strCityID = GetSafeLng( Request(kCN), 0 )
	strSchoolTypeID = GetSafeLng( Request(kSFT), 0 )
	strSchoolID = GetSafeLng( Request(kSCID), 0 )
	strLastElement = GetSafeStr( Request(kLSTNAME), -1, "")

	nEmCountryId = GetSafeLng(Request(kEM_CID), 0)
	nEmStateId = GetSafeLng(Request(kEM_SID), 0)
	nEmHLevelID = GetSafeLng(Request(kEM_HL), 0)
	nEmId = GetSafeLng(Request(kEM_EMID), 0)
	bEmLoginForm = (Request("login") = "message-em")

	Set result = new JSONResult
	If strMethod = kPrepareLoginForm Then
		Dim arrNames
		Dim arrFields
		
		arrNames = Array("id", "name")

		Call result.AddData("lastElem", strLastElement)

		Select Case strLastElement
		Case kCID
			Set objRs = objNSNET.GetSchoolStateList(strCountryID)
			arrFields = Array("STATE_PROVINCEID","STATEPROVINCENAME")
		Case kSID
			Set objRs = objNSNET.GetSchoolProvinceListAll(strStateID)
			arrFields = Array("PROVINCEID","PROVINCENAME")
		Case kPID
			Set objRs = objNSNET.GetSchoolCityList(strStateID, strProvinceID)
			arrFields = Array("CITYID","NAME")
		Case kCN
			Set objRs = objNSNET.GetSchoolFuncTypesList(strCityID)
			arrFields = Array("FUNCTIONALITYTYPEID","NAME")
		Case kSFT
			Set objRs = objNSNET.GetFuncCitySchools( strSchoolTypeID, strCityID )
			arrFields = Array("SCHOOLID","SCHOOLNAME")
		Case kEM_CID
			Set objRs = objNSNET.GetEMStateList(nEmCountryID)
			arrFields = Array("STATE_PROVINCEID","STATEPROVINCENAME")
		Case kEM_SID
			Set objRs = objNSNET.GetEMHierarchyLevel(nEmStateID)
			arrFields = Array("HLEVEL","NAME")
		Case kEM_HL
			Set objRs = objNSNET.GetFoundersCommon( nEmStateID, -1, kEducManagement, nEmHLevelID, false ) 
			arrFields = Array("EMID","FNAME")
		End Select

		If Not objRs.EOF Then
			Call result.AddJsonData("items", objRs.ToJSON(arrNames, arrFields))
		Else 
			Call result.AddData("items", "[]")
		End If
	ElseIf strMethod = "InitLoginForm" Then
		If bEmLoginForm Then
			Call InitEmLoginForm
		Else
			Call InitLoginForm
		End If
	End If
	TestError obLanguage("Login", "kErrorAjaxListLoading")
	Response.Write result
	Response.End

Sub InitLoginForm()
	Dim nCountryID, nSchoolID, nStateID, nProvinceID, nCityID, nSchoolTypeID
	Dim nMainCountryID, nMainStateID, nMainProvinceID, nMainCityID
	Dim bSafe, arrOut

	arrOut = Array("id", "name")

	nCountryID = GetSafeLng( Request(kCID), kUnsel )
	nStateID = GetSafeLng( Request(kSID), kUnsel )
	nProvinceID = GetSafeLng( Request(kPID), kUnsel )
	nCityID = GetSafeLng( Request(kCN), kUnsel )
	nSchoolTypeID = GetSafeLng( Request(kSFT), FuncType_School )
	nSchoolID = GetSafeLng( Request(kSCID), kUnsel )

	If nCountryID = kUnsel And nSchoolID = kUnsel Then
		'если в запросе нет данных о нас. пункте и стране (т.е. точно нет выбора) то пытаемся определить основной нас. пункт (с максимальным кол-вом организаций)
		If objNSNET.TryGetMainCityInfo(nMainCityID, nMainProvinceID, nMainStateID, nMainCountryID) Then
			nCountryID = nMainCountryID
			nStateID = nMainStateID
			nProvinceID = nMainProvinceID
			nCityID = nMainCityID
		End If
	End If

	Set objRs = objNSNET.GetSchoolCountryList()
	Call result.AddJsonData("countries", objRs.ToJSON(arrOut, Array("COUNTRYID", "COUNTRYNAME")))
	bSafe = GetSafeInitFromRs(objRs, "COUNTRYID", nCountryID)
	Call result.AddData(kCID, nCountryID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetSchoolStateList(nCountryID)
	Call result.AddJsonData("states", objRs.ToJSON(arrOut, Array("STATE_PROVINCEID", "STATEPROVINCENAME")))
	bSafe = GetSafeInitFromRs(objRs, "STATE_PROVINCEID", nStateID)
	Call result.AddData(kSID, nStateID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetSchoolProvinceListAll(nStateID)
	Call result.AddJsonData("provinces", objRs.ToJSON(arrOut, Array("PROVINCEID", "PROVINCENAME")))
	bSafe = GetSafeInitFromRs(objRs, "PROVINCEID", nProvinceID)
	Call result.AddData(kPID, nProvinceID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetSchoolCityList(nStateID, nProvinceID)
	Call result.AddJsonData("cities", objRs.ToJSON(arrOut, Array("CITYID", "NAME")))
	bSafe = GetSafeInitFromRs(objRs, "CITYID", nCityID)
	Call result.AddData(kCN, nCityID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetSchoolFuncTypesList(nCityID)
	Call result.AddJsonData("funcs", objRs.ToJSON(arrOut, Array("FUNCTIONALITYTYPEID", "NAME")))
	bSafe = GetSafeInitFromRs(objRs, "FUNCTIONALITYTYPEID", nSchoolTypeID)
	Call result.AddData(kSFT, nSchoolTypeID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetFuncCitySchools( nSchoolTypeID, nCityID ) 
	Call result.AddJsonData("schools", objRs.ToJSON(arrOut, Array("SCHOOLID", "SCHOOLNAME")))
	bSafe = GetSafeInitFromRs(objRs, "SCHOOLID", nSchoolID)
	Call result.AddData(kSCID, nSchoolID)
End Sub

Sub InitEMLoginForm()
	Dim nEmCountryID, nEmStateID, nEmHLevelID, nEmId
	Dim bSafe, arrOut

	arrOut = Array("id", "name")
	nEmCountryID = GetSafeLng( Request(kEM_CID), kUnsel )
	nEmStateID = GetSafeLng( Request(kEM_SID), kUnsel )
	nEmHLevelID = GetSafeLng( Request(kEM_HL), kUnsel )
	nEmId = GetSafeLng( Request(kEM_EMID), kUnsel )

	Set objRs = objNSNET.GetEmCountryList()
	Call result.AddJsonData("countries", objRs.ToJSON(arrOut, Array("COUNTRYID", "COUNTRYNAME")))
	bSafe = GetSafeInitFromRs(objRs, "COUNTRYID", nEmCountryID)
	Call result.AddData(kEM_CID, nEmCountryID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetEMStateList(nEmCountryID)
	Call result.AddJsonData("states", objRs.ToJSON(arrOut, Array("STATE_PROVINCEID", "STATEPROVINCENAME")))
	bSafe = GetSafeInitFromRs(objRs, "STATE_PROVINCEID", nEmStateID)
	Call result.AddData(kEM_SID, nEmStateID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetEMHierarchyLevel(nEmStateID)
	Call result.AddJsonData("hlevels", objRs.ToJSON(arrOut, Array("HLEVEL", "NAME")))
	bSafe = GetSafeInitFromRs(objRs, "HLEVEL", nEmHLevelID)
	Call result.AddData(kEM_HL, nEmHLevelID)
	If Not bSafe Then Exit Sub

	Set objRs = objNSNET.GetFoundersCommon( nEmStateID, -1, kEducManagement, nEmHLevelID, false ) 
	Call result.AddJsonData("ems", objRs.ToJSON(arrOut, Array("EMID", "FNAME")))
	bSafe = GetSafeInitFromRs(objRs, "EMID", nEmId)
	Call result.AddData(kEM_EMID, nEmId)
End Sub

Function GetSafeInitFromRs(objRs, strFieldName, ByRef vFielVal)
	Dim bSafe
	bSafe = objRs.ExistsByField(strFieldName, vFielVal)
	If Not bSafe Then 
		If objRs.EOF Then
			vFielVal = kUnsel
		Else
			vFielVal = objRs(strFieldName)
		End If
	End If
	GetSafeInitFromRs = Not (vFielVal = kUnsel)
End Function
%>
