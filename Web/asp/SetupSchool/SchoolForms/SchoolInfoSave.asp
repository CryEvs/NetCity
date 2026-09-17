<!-- #INCLUDE FILE="../../headernoscreen_Year.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim backPage, pageNum, nFormId, strFormName, IsLicence, strSchoolNumber, dtFoundingDate
Dim i, name, value
Dim dctParams
Dim objSchoolFormComponent
Dim strRevisionPath
Dim objHelper, statFormEnum
Dim bIsMNS
Dim respPrms
Dim bCanEditExtraSchoolInfo
Dim objSchoolInfo, transaction
Dim strEOID, strCityID, strEOLegalFormID
Dim strEOLegalFormID83, strEOFormID, strEditSchoolShortName
Dim strAddSavingInfo
Dim bIsSchoolForm
Dim uow, component
Dim strAttachmentIds
Dim reason, reasonDocId
Dim strAuthorityID


bCanEditExtraSchoolInfo = (GetSafeLng(obTokenMgr.GetData(strToken, stEditExtraSchoolInfo), 0) = 1)

pageNum		= GetSafeLng(Request("PAGE"), -1)
nFormId		= GetSafeLng(Request("FORMID"), -1)
bIsMNS		= Not IsDull(Request("MNS"))
respPrms	= Array("SV", "Y")
bIsSchoolForm = Not (nFormId = -1 And pageNum = -1)

reason		= GetSafeStr(Request("reason"), -1, "")
reasonDocId	= Request("reasonDocId")

strAttachmentIds = Request("attachment")

If Not bIsSchoolForm And Not HasUserRight(arProfileEditSchoolInfo) And Not bCanEditExtraSchoolInfo Then GenerateError obLanguage("Common","kErrPageAccess")

If bIsMNS Then respPrms = Array("SV", "Y", "MNS", ""&Abs(CInt(bIsMNS))&"")

Set dctParams = Server.CreateObject("NetCity.Storage")
For i = 1 To Request.Form.Count
	name = Request.Form.key(i)
	value = Left(Trim(Request.Form(i)), 1000)

	If Left(name, 1) = "T" Then 'or name="SCHOOLTYPE" Then
		Call dctParams.Add(name, CStr(value))
	End If
Next



If (dctParams.Count > 0) Or bCanEditExtraSchoolInfo Then
	backPage = Request("BACK")
	
	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent") 
	Set uow = component.GetEditSchoolInfoWork(strSchoolID, strUserID) 

	If  bIsSchoolForm Then
		Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
		If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("Common","kErrSaveSchoolInfo",strFunctionalityType)

		Call objSchoolFormComponent.SaveFormInfo(nFormId, strCurrYearID, pageNum, -1, dctParams, bIsMNS)
			
		TestError obLanguage("StatReports","kErrSaveSchoolFormInfo")
			
		Set objHelper = comHelper.AspHelper
		Set statFormEnum = objHelper.GetEnum(objHelper.Enums.SchoolForm, nFormId)
		TestError obLanguage("StatReports", "kErrSaveSchoolFormInfo")
			
		strFormName = statFormEnum.ToString()
		strRevisionPath = objSchoolFormComponent.GetSafeRevisionPathByYear(strCurrYearID, nFormId, -1, -1)

		'TODO. Перенести файлы в соответствующие с StatForm enum папки
		If nFormId = StatForm_K85 Then
			strFormName = "85K"
		ElseIf nFormId = StatForm_Rik83 Then
			strFormName = "83RIK"
		ElseIf nFormId = StatForm_Od1 Then
			strFormName = "OD1"
		ElseIf nFormId = StatForm_Do1 Then
			strFormName = "1DO"
		End If

		backPage = GetSafeStr(backPage, -1, strFormName & "/" & strRevisionPath & "/Page" & pageNum & ".asp")
	Else
		'Карточка ОО
		backPage = GetSafeStr(backPage, -1, "SchoolInfo.asp")

		'If Not bCanEditExtraSchoolInfo Then - закомментировал, иначе "T00SmallOrganization" не сохраняется
			Call uow.SaveSchoolInfoCard(kMainSchoolInfoPage, dctParams, null, reason, reasonDocId ) 
			TestError obLanguage("Common","kErrSaveSchoolInfo", strFunctionalityType)
		'End If

		strSchoolName = Trim(GetSafeStr(Request("FullName"), -1, Null))
		Call obTokenMgr.SetData(strToken, "SCHOOLNAME", strSchoolName)
		strSchoolNumber = Trim(GetSafeStr(Request("SchoolNumber"), -1, IIf(bCanEditExtraSchoolInfo, Null, "")))

		If bCanEditExtraSchoolInfo Then
			Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
			If objSchoolInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
			strEOID = GetSafeID(objSchoolInfo("EOID"), Null)
			strCityID = GetSafeID(objSchoolInfo("CITYID"), Null)
			strEOLegalFormID = GetSafeID(Request("EOLEGALFORMID"), Null)
			strEOLegalFormID83 = GetSafeID(Request("EOLEGALFORM83ID"), Null)
			strAuthorityID = GetSafeID(Request("AUTHORITYID"), -1)
			strEOFormID = GetSafeID(Request("EOFORMID"), Null)
			strEditSchoolShortName = Trim(GetSafeStr(Request("ShortName"), -1, Null))

			Call uow.EditEO(strEditSchoolShortName, strEOFormID, strEOLegalFormID, strCityID, strEOLegalFormID83)
			Call uow.EditSchoolNumber(strSchoolNumber)
			Call uow.EditAuthorityId(strAuthorityID)
		End If
		Call uow.EditFullSchoolName(strSchoolName)
		If IsDull(Request("FoundingDate")) Then
			Call uow.ClearFoundingDate()
		Else
			Call uow.EditSchoolFoundingDate(GetSafeDate(Request("FoundingDate"), Null))
		End If

		If IsDull(Request("DIRECTORID")) or (Left(Request("DIRECTORID"), 2) = "-1") Then
			Call uow.ClearDirector()
		Else
			Call uow.EditDirector(GetSafeID(Request("DIRECTORID"), Null))
		End If
		TestError obLanguage("Common","kErrSaveSchoolInfo", strFunctionalityType)
		Call uow.Commit()
		Call uow.Dispose()
		TestError obLanguage("Common","kErrSaveSchoolInfo", strFunctionalityType)
	End If
End If

If Not bIsSchoolForm Then
	Call WriteJsonResult(obLanguage("Common", "kSchoolInfoWasSaved", strFunctionalityType) & strAddSavingInfo, False, 0)
Else
	Call WriteJsonResult(obLanguage("StatReports", "kSchoolFormInfoWasSaved"), False, 0)
End If
%>
