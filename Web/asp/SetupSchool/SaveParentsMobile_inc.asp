<!-- #INCLUDE VIRTUAL="/asp/scripts/SmsAccess_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.


Dim strMobileOld, strMobileNew
Dim bDel, bAdd, bRepl
Dim strParamID_Mobile

Sub PreSaveUserInfo()
	Dim objParam

	strParamID_Mobile = CStr(UserParams_mobilephone)
	If strParamID_Mobile = "0" Then GenerateError obLanguage("SetupSchool","kCantGetParam_Mobile")
	Set objParam = objNSNET.GetUserParamValue(strEditUserID, strParamID_Mobile, strSchoolID, strCurrYearID)
	If objParam.EOF Then
		strMobileOld = ""
	Else
		strMobileOld = GetSafeStr(objParam("PARAMVALUE"), -1, "")
	End If
End Sub

Sub PreSaveUserInfo_WT(transaction)
	Dim objParam

	strParamID_Mobile = CStr(UserParams_mobilephone)
	If strParamID_Mobile = "0" Then GenerateErrorWithTransaction transaction,obLanguage("SetupSchool","kCantGetParam_Mobile")
	Set objParam = objNSNET.GetUserParamValue_WT(transaction, strEditUserID, strParamID_Mobile, strSchoolID, strCurrYearID)
	If objParam.EOF Then
		strMobileOld = ""
	Else
		strMobileOld = GetSafeStr(objParam("PARAMVALUE"), -1, "")
	End If
End Sub

Sub RegParentMobilePhone(transaction)

	Dim  bEnableSms 
	bEnableSms = obContext.ServerSettings.SmsSettings.EnableSms

	'если в настройках сервера не разрешена отправка СМС
	If bEnableSms = false Then
		Exit Sub
	End If

	Dim objParam
	Dim bWebGate, strResult, strXML

	Dim objCmdMobileReg, dtCurDate

	'Если включен функционал отправки школьных СМС СМартс то регистрация номеров в шлюзе не нужна
	If SendingSchoolSmsAvailable() Then Exit Sub



	Set objParam = objNSNET.GetUserParamValue_WT(transaction, strEditUserID, strParamID_Mobile, strSchoolID, strCurrYearID)
	
	If objParam.EOF Then
		strMobileNew = ""
	Else
		strMobileNew = GetSafeStr(objParam("PARAMVALUE"), -1, "")
	End If

	If strMobileOld <> strMobileNew Then
		Call InitSchoolSettings( objNSNET )
		bWebGate = (arrSchoolSettings( 1, kSSIndex_SMSGate ) = "0")

		bDel = False
		bAdd = False
		bRepl = False
		If strMobileOld <> "" And strMobileNew <> "" Then
			bRepl = True
		Else 
			If strMobileOld <> "" Then
				' удаляем	
				bDel = True
			End If

			If strMobileNew <> "" Then
				' добавляем
				bAdd = True
			End If
		End If

		strResult = "1"
		
		If bWebGate Then
			Dim objSmsComponent

			Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")

			strXML = GetMobileRegistryXML()
			strResult = SendSMSXML(strXML, kWebGateAction_Registr)

			Call objSmsComponent.RemoveStudentParentMobilePhoneFromCache(strEditUserID)

			If strResult <> "0" Then ' Сейчас только 0/1.
				strResult = "1"
			End If

		End If
		' save mobile registry to log
		dtCurDate = NSNow()
		Set objCmdMobileReg = objNSNET.AddSMSRegistry_Prepare_WT(transaction, dtCurDate)

		If bDel Then
			Call objNSNET.AddSMSRegistry_Execute(objCmdMobileReg, strSchoolID, strMobileOld, 0, CLng(strResult))
		End If
		If bAdd Then
			Call objNSNET.AddSMSRegistry_Execute(objCmdMobileReg, strSchoolID, strMobileNew, 1, CLng(strResult))
		End If
		If bRepl Then
			Call objNSNET.AddSMSRegistry_Execute(objCmdMobileReg, strSchoolID, strMobileOld&","&strMobileNew, 3, CLng(strResult))
		End If
	End If
End Sub


Function GetMobileRegistryXML()
	Dim strXML
	Dim objHelper
	Set objHelper = comHelper.AspHelper
	
	Call GetXMLKeyParameters()

	strXML = "" & _
	"<?xml version=""1.0"" encoding=""windows-1251""?>" & _
	"<root>" & _
		"<id>" & strXMLID & "</id>" & _
		"<serverid>" & strServerID & "</serverid>" & _
		"<password>" & objHelper.MD5(CStr(strUniSchoolID) & strXMLID) & "</password>" & _
		"<actions>"
		If bDel Then
			strXML = strXML & _
			"<action type=""0"">" & strMobileOld & "</action>"
		End If
		If bAdd Then
			strXML = strXML & _
			"<action type=""1"">" & strMobileNew & "</action>"
		End If
		If bRepl Then
			strXML = strXML & _
			"<action type=""3""><oldNum>" & strMobileOld & "</oldNum><newNum>" & strMobileNew & "</newNum></action>"
		End If
		
		strXML = strXML & _
		"</actions>" & _
	"</root>"
	
	GetMobileRegistryXML = strXML
End Function
%>
