<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->
<!-- #INCLUDE FILE="sa_constants.asp" -->

<% ' © 2007-2018 IRTech. All rights reserved.
On Error Resume Next
Dim nAreaID, strAreaName, nPID, bOk, strAreaPar, strArea, objRS, nProvinceID, nSettlementTypeID, nParentCityID, bAvailabilityOfStreet
Dim strDefaultName, nAtoTypeID
Dim strBackPage
Dim strEOFormID, strEOLegalFormID, strFullSchoolName, strEditSchoolID ,strSchoolNumber
Dim transaction
Dim nStateID, nCityID, strEMName, strPassword, nLevel, arrSchools, arrSchools2, arrFounders, arrCreatives, strEOLegalFormID83
Dim nParentFounderID, strShortName
Dim uow, component

Sub ReadState()
	Dim rsEOInfo
	If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")

	nPID = GetSafeLng(Request("PID"), -1)
	strAreaPar = GetSafeStr(Request("Area"), 200, obTokenMgr.GetData(strToken, "Area"))
	If strAreaPar = "district" Or strAreaPar = "street" Then Call obTokenMgr.SetData(strToken, "Area", "city")
	nAreaID = GetSafeLng(Request("Founders"), GetSafeLng(Request("AreaID"), 0))

	If strAreaPar = "EO" Then
		strEOFormID = GetSafeLng(Request("EOFORMID"), 0)
		strEOLegalFormID = GetSafeLng(Request("EOLEGALFORMID"), 0)
		strEOLegalFormID83 = GetSafeLng(Request("EOLEGALFORM83ID"), 0)
		strFullSchoolName = GetSafeStr(Request("FullName"), 400, "")
		strSchoolNumber = GetSafeStr(Request("SchoolNumber"), 200, "")
		strEditSchoolID = GetSafeLng(Request("EditSchoolID"), 0)

		If strEditSchoolID = 0 Then
			Set rsEOInfo = objNSNET.GetEOInfo(nAreaID)
			If Not rsEOInfo.EOF Then strEditSchoolID = rsEOInfo("SCHOOLID")
		End If
	ElseIf strAreaPar = "founder" Then
		GenerateError("code moved from this code!")
		nStateID = GetSafeLng( obTokenMgr.GetData(strToken,"State"), 0)
		nPID = nStateID
	End If

	strBackPage = obTokenMgr.GetData(strToken, "Back")
End Sub

Sub Main()
	On Error Resume Next
	Dim nResult, nCount, i

	If GetSafeLng( Request("Move"),0 ) = 2 Then
		Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("ServAdmin","kEOTemplateCreated")))
		Call objNSNET.GenEOTemplate(nPID)
	Else
		strAreaName = Trim(Request("NAME"))
		If nAreaID > 0 Then
			Select Case strAreaPar
			Case "EO"
				Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
				If strEditSchoolID > 0 Then 
					Set uow = component.GetEditSchoolInfoWork(strEditSchoolID, strUserID)
					Call uow.EditEO(strAreaName, strEOFORMID, strEOLegalFormID, obTokenMgr.GetData(strToken,"City"), strEOLegalFormID83)
					Call uow.EditFullSchoolName(strFullSchoolName) 
					Call uow.EditSchoolNumber(strSchoolNumber)
					Call uow.EditSchoolDistrict(GetSafeLng(Request("District"),-1))
				Else
					Set uow = component.GetEditEoInfoWork(nAreaID, strUserID)
					Call uow.EditEO(strAreaName, strEOFORMID, strEOLegalFormID, obTokenMgr.GetData(strToken,"City"), strEOLegalFormID83)
				End If
				TestError "Ошибка редактирования образовательной организации"
				Dim nOtraslID
				nOtraslID = GetSafeLng(Request("Otrasl"), 0)
				If nOtraslID > 0 Then Call uow.SetOtrasl(nOtraslID)
				arrFounders = Split(Request("EOFID"), ",")
				Call uow.SetFounders(arrFounders)
				TestError obLanguage("ServAdmin","kCantCreate")
				'если креативов(творческие объединения) пользователь не менял, тогда не меняем креативов в базе
				If Request("CRTCNT") <> "" Then
					arrCreatives = Split(Request("CRTCNT"), ",")
					Call uow.SetCreatives(arrCreatives)
					TestError obLanguage("ServAdmin","kCantCreate")
				End If
				Call uow.Commit()
				Call uow.Dispose()
			Case "street"
				nAtoTypeID = Request("ATO_TYPEID")
				Call objNSNET.EditLocation(nAreaID, strAreaName, nAtoTypeID)
			Case "district"
				Call objNSNET.EditDistrict(nAreaID, strAreaName)
			Case "city"
				nSettlementTypeID = Request("SETTLEMENTTYPEID")
				nProvinceID = Request("Province")
				If IsDull(nProvinceID) Then
					nProvinceID=Null
				ElseIf CLng(nProvinceID) <=0 Then
					nProvinceID=Null
				End If
				nParentCityID = Request("AvailableParentCity")
				If IsDull(nParentCityID) Then nParentCityID=-1
				bAvailabilityOfStreet = Request("AvailabilityOfStreet")
				nAtoTypeID = CLng(Request("ATO_TYPEID"))
				If nAtoTypeID <> CLng(objNSNET.GetAtoTypeID("г", 4)) Then
					If nSettlementTypeID>2 Then nSettlementTypeID = 1
				Else
					If nSettlementTypeID<=2 Then nSettlementTypeID = 3
				End If
				Dim bDelKladr
				bDelKladr = (GetSafeID(Request("KLADR"), "0") = "0")
				Call objNSNET.EditCity(nAreaID, nProvinceID, strAreaName, nSettlementTypeID, nParentCityID, bAvailabilityOfStreet, nAtoTypeID, bDelKladr)
				Call obTokenMgr.SetData(strToken,"City", nAreaID)
			Case "province"
				nPID = GetSafe("State", 0)
				Call objNSNET.EditProvince(nAreaID, strAreaName)
			Case "state"
				nPID = GetSafe("Country", 0)
				Call objNSNET.EditState(nAreaID, strAreaName)
			Case "country"	Call objNSNET.EditCountry(nAreaID, strAreaName)
			Case Else GenerateError obLanguage("Common","kInvalidParameter")
			End Select
			TestError( obLanguage("ServAdmin","kCantRename") )
		Else
			Select Case strAreaPar
			Case "EO"
				nAreaID = objNSNET.CreateEO(obTokenMgr.GetData(strToken,"City"), strAreaName, strEOFormID, strEOLegalFormID, strEOLegalFormID83)
				TestError obLanguage("ServAdmin","kCantCreate")
				Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
				Set uow = component.GetEditEoInfoWork(nAreaID, strUserID)
				nOtraslID = GetSafeLng(Request("Otrasl"), 0)
				If nOtraslID > 0 Then Call uow.SetOtrasl(nOtraslID)
				arrFounders = Split(Request("EOFID"), ",")
				Call uow.SetFounders(arrFounders)
				arrCreatives = Split(Request("CRTCNT"), ",")
				Call uow.SetCreatives(arrCreatives)
				Call uow.Commit()
				Call uow.Dispose()
				If nAreaID > 0 Then
					Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("ServAdmin","kSuccessCreateArea")))
				End If
			Case "street"
				nAtoTypeID = CLng(Request("ATO_TYPEID"))
				nAreaID = objNSNET.CreateLocation(GetSafe("City", 0), strAreaName, nAtoTypeID)
				If nAreaID > 0 Then
					Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("ServAdmin","kSuccessCreateArea")))
				End If
			Case "district"
				nAreaID = objNSNET.CreateDistrict(GetSafe("City", 0), strAreaName)
				If nAreaID > 0 Then
					Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("ServAdmin", "kSuccessCreateArea")))
				End If
			Case "city"
				nSettlementTypeID = Request("SETTLEMENTTYPEID")
				bAvailabilityOfStreet = Request("AvailabilityOfStreet")
				nAtoTypeID = CLng(Request("ATO_TYPEID"))

				nProvinceID = Request("Province")
				If IsDull(nProvinceID) Then
					Set nProvinceID=Nothing
				ElseIf CLng(nProvinceID) <=0 Then
					Set nProvinceID=Nothing
				End If

				nParentCityID = Request("AvailableParentCity")
				If IsDull(nParentCityID) Or nParentCityID = "-1" Then
					Set nParentCityID=Nothing
				End If
				If nAtoTypeID <> CLng(objNSNET.GetAtoTypeID("г", 4)) Then
					If nSettlementTypeID>2 Then nSettlementTypeID = 1
					If nSettlementTypeID = 1 Then
						If nAtoTypeID = CLng(objNSNET.GetAtoTypeID("пгт", 4)) Then
							nSettlementTypeID = 2
						ElseIf nAtoTypeID = CLng(objNSNET.GetAtoTypeID("городок", 4)) Then
							nSettlementTypeID = 2
						End If
					End If
				Else
					If nSettlementTypeID<=2 Then nSettlementTypeID = 3
				End If

				nAreaID = objNSNET.CreateCity(CLng(GetSafe("State", 0)), nProvinceID, strAreaName, nSettlementTypeID, nParentCityID, bAvailabilityOfStreet, nAtoTypeID)
				If nAreaID > 0 Then
					Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("ServAdmin", "kCityCreated")))
					Call obTokenMgr.SetData(strToken, "City", nAreaID)
				End If
			Case "province"
				nPID = GetSafe("State", 0)
				nAreaID = objNSNET.CreateProvince(nPID, strAreaName)

				If nAreaID > 0 Then
					Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("ServAdmin", "kProvinceCreated")))
					Call obTokenMgr.SetData(strToken, "Province", nAreaID)
				End If
			Case "state"
				nPID = GetSafe("Country", 0)
				nAreaID = objNSNET.CreateState(nPID, strAreaName)

				If nAreaID > 0 Then
					Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("ServAdmin", "kStateCreated")))
					Call obTokenMgr.SetData(strToken, "State", nAreaID)
				End If
			Case "country"
				nAreaID = objNSNET.CreateCountry(strAreaName)

				If nAreaID > 0 Then
					Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("ServAdmin", "kCountryCreated")))
					Call obTokenMgr.SetData(strToken, "Country", nAreaID)
				End If
			Case Else GenerateError obLanguage("Common","kInvalidParameter")
			End Select
			TestError(obLanguage("ServAdmin","kCantCreate"))
		End If
	End If

	If strAreaPar = "district" Or strAreaPar = "street" Then
		RedirectTo strBackPage, Null
	ElseIf nAreaID > 0 Then
		If strAreaPar="EO" Then
			RedirectTo strBackPage, Array("Area", "EO", "AreaID", nAreaID, "PID", nPID, "City", obTokenMgr.GetData(strToken,"City"), "EditSchoolID", Request("EditSchoolID"), "act", Request("act"), "District", Request("District"),"SchoolNumber", Request("SchoolNumber"))
		Else
			RedirectTo strBackPage, Array("AreaID", nAreaID, "PID", nPID)
		End If
	Else
		RedirectTo strBackPage, Array("PID", nPID)
	End If
End Sub

Function addArrayToArray(arr1, arrAdd)
	Dim nAdd, nArr, newLenght, i
	nAdd = UBound(arrAdd)+1
	nArr = UBound(arr1)+1
	newLenght = nArr+nAdd-1
	ReDim Preserve arr1(newLenght)
	For i=nArr To newLenght
		arr1(i)=arrAdd(i-nArr)
	Next
	addArrayToArray = arr1
End Function

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function

%>
