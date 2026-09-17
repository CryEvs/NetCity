<!-- #INCLUDE FILE="../headernoscreen_YearNoPopUp.asp" -->
<!-- #INCLUDE FILE="ImportKLADR_inc.asp" -->

<% ' © 2007-2018 IRTech. All rights reserved.
Dim nAreaID, strAreaPar, bSaveAll, strWarn
Dim i, bIsAdminOfServer, bFromCreateOUPage
Dim strBackPage, bKLADR, kLeft, kRight, lengK
Dim strAbbr, KLADRCode, strProvinceName, strAreaName, ka, arrN
strBackPage = obTokenMgr.GetData(strToken, stBackPage)
on error resume next
lengK = 15
bIsAdminOfServer = objNSNET.IsAdminOfServer(strUserID)
bFromCreateOUPage = (Request("FromCreateOU") = 1)
bKLADR = (GetSafeID(Request("KLADR"), "0") <> "0")
strAreaPar = obTokenMgr.GetData(strToken, "Area")
If Request("SaveAll")=1 Then bSaveAll = true
nStateID = GetSafeLng( obTokenMgr.GetData(strToken,"State"),0)
Select Case strAreaPar
Case "street"
	nCityID = GetSafeLng( obTokenMgr.GetData(strToken,"City"),0)
	lengK = 19
	kLeft = 15
	kRight = 4
Case "city"
	kLeft = 11
	kRight = 6
	nProvinceID = GetSafeLng( obTokenMgr.GetData(strToken,"Province"),0)
	If IsDull(nProvinceID) Then
		Set nProvinceID = Nothing
	ElseIf CLng(nProvinceID) <= 0 Then
		Set nProvinceID = Nothing
	End If
Case "province"
	kLeft = 5
	kRight = 3
Case "state"
	kLeft = 2
	kRight = 2
End Select

If bSaveAll Then
	Call GetArrayFromString
Else
	ka = Request("KLADRArea")
	strAreaName = Right(ka, Len(ka)-lengK)
	KLADRCode = GetAreaCode(ka)
	strWarn = obLanguage("Common","kInRegion") + Request("StateName")
	Select Case strAreaPar
	Case "street"
		arrN = Split(strAreaName, ", ")
		strAbbr = GetAtoType(arrN(1))
		strAreaName = arrN(0)
		nAreaID = objNSNET.SaveLocationFromKLADR(nCityID, strAreaName, KLADRCode, strAbbr)
		TestError( obLanguage("ServAdmin","kCantCreate") )
		If nAreaID <> -1 Then
			Call obTokenMgr.SetData(strToken,"Street_", nAreaID)
			If Not bIsAdminOfServer Then WriteToLog kUETWarning, obLanguage("Common","kInCity") + Request("CityName") + obLanguage("Common","kAddedStreet") + strAreaName +""""
		End If
	Case "city"
		arrN = Split(strAreaName, ", ")
		strAbbr = GetAtoType(arrN(1))
		strAreaName = arrN(0)
		Call SetConnection()
		nAreaID = objNSNET.SaveCityFromKladr(nStateID, nProvinceID, strAreaName, KLADRCode, 7, strAbbr)
		TestError( obLanguage("ServAdmin","kCantCreate") )
		If nAreaID <> -1 Then
			Call obTokenMgr.SetData(strToken,"City_", nAreaID)
			Call obTokenMgr.SetData(strToken,"City", nAreaID)
			strProvinceName = Request("ProvinceName")
			If Request("ProvinceName") <> "" Then
				strProvinceName = obLanguage("Common","kProvince_") + Request("ProvinceName")
			End If
			If Not bIsAdminOfServer Then
				WriteToLog kUETWarning, obLanguage("Common","kInRegion") + Request("StateName") + "" + strProvinceName + obLanguage("Common","kAddedVillage") + strAbbr + ". " + strAreaName +""""
			End If
		End If
	Case "province"
		nAreaID = objNSNET.SaveProvinceFromKLADR(nStateID, strAreaName, KLADRCode)
		TestError( obLanguage("ServAdmin","kCantCreate") )
		If nAreaID <> -1 Then
			Call obTokenMgr.SetData(strToken,"Province_", nAreaID)
			If Not bIsAdminOfServer Then WriteToLog kUETWarning, obLanguage("Common","kInRegion") + Request("StateName") + obLanguage("Common","kAddedRural") + strAreaName +""""
		End If
	Case "state"
		nAreaID = objNSNET.SaveStateFromKLADR(strAreaName, KLADRCode)
		TestError( obLanguage("ServAdmin","kCantCreate") )
	Case Else GenerateError obLanguage("Common","kInvalidParameter")
	End Select
	If nAreaID <> -1 Then
		If Not bIsAdminOfServer Then WriteToLog kUETWarning, obLanguage("Common","kInRegion") + Request("StateName") + obLanguage("Common","kAddedRural") + strAreaName +""""
	End If

	TestError( obLanguage("ServAdmin","kCantCreate") )
	If Not bFromCreateOUPage Then
		Call obTokenMgr.SetData(strToken,stWasSaved, IIf( nAreaID = -1, _
			obLanguage("Common","kImportedFromKLADRElementsPresentInAppropriateDir"), _
			obLanguage("Common","kImportedFromKLADRElementAdded")) )
	End If
End If
TestError( obLanguage("ServAdmin","kCantCreate") )

Call obTokenMgr.SetData(strToken,"KLADR", "1")

If bFromCreateOUPage Then
	RedirectTo "CreateOU.asp?", Array("Self_CreateOU", 1, "level", "eoType")
ElseIf bKLADR Then
	RedirectTo strBackPage & "?", Array("Self_KLADR", 1, "level", "city")
Else
	%><script>
		var form = window.opener.document.forms[0];
		var wndop = window.opener;
		form.target = '_parent';
		wndop.DoSubmit(form, '<%=IIf(bIsAdminOfServer,strBackPage,"AddressInfoEdit.asp")%>');
		window.close();
	</script><%
End If

Sub GetArrayFromString
	on error resume next
	Dim nCount, arrTemp, arrN, arrAll, arrAreaNames, arrAreaCode, arrAbbr, strWS, bAtoTyped
	ReDim arrAll(1)
	bAtoTyped = (strAreaPar <> "province" And strAreaPar <> "state")
	arrAll = Split(Request("AllValue"),IIF(bAtoTyped, ".__,", ","))
	nCount = 0
	ReDim arrTemp(1), arrAreaNames(UBound(arrAll)), arrAreaCode(UBound(arrAll)), arrAbbr(UBound(arrAll))
	For i=0 To UBound(arrAll)
		arrTemp = Split(arrAll(i), "__")
		arrN = Split(arrTemp(1), ", ")
		If bAtoTyped Then arrAbbr(i) = GetAtoType(arrN(1))
		arrAreaCode(i) = GetAreaCode(arrTemp(0))
		arrAreaNames(i) = arrN(0)
	Next
	Select Case strAreaPar
	Case "street"
		SetScriptTimeOut 900
		nCount = objNSNET.SaveLocationFromKLADRAll(nCityID, arrAreaNames, arrAreaCode, arrAbbr)
	Case "city"
		SetScriptTimeOut 900
		nAreaID = objNSNET.SaveCityFromKladrAll(nStateID, nProvinceID, arrAreaNames, arrAreaCode, 7, 1, arrAbbr)
		nCount = UBound(arrAll) + 1
		If nAreaID > 0 Then Call obTokenMgr.SetData(strToken,"City_", nAreaID)
	Case "province"
		nCount = objNSNET.SaveProvinceFromKLADRAll(nStateID, arrAreaNames, arrAreaCode)
	Case "state"
		nCount = objNSNET.SaveStateFromKLADRAll(arrAreaNames, arrAreaCode)
	End Select
	TestError( obLanguage("ServAdmin","kCantCreate") )

	If Not bFromCreateOUPage Then
		If nCount > 0 Then
			strWS = obLanguage("Common","kImportedItemsFromKLADR") & nCount & " "&obLanguage("Calendar","kOf")&" " & UBound(arrAll) + 1
		Else
			strWS = obLanguage("Common","kImportedFromKLADRElementsPresentInAppropriateDir")
		End If
		Call obTokenMgr.SetData(strToken,stWasSaved, strWS)
	End If
End Sub

Function GetAtoType(abbr)
	GetAtoType = Replace(abbr, "__", "")
End Function

Function GetAreaCode(code)
	GetAreaCode = Right(Left(code, kLeft), kRight)
End Function
%>

