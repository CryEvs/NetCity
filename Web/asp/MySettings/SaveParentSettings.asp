<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/SchoolSettings_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/SaveParentsMobile_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/MySettings/UserSettings_inc.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim objRs
Dim objCmdMobileReg
Dim transaction, strErr
Call InitComponents()
Call InitVariables()
If Not objNSNETWork.IsUserInYear(CLng(strUserID), CLng(strCurrYearID)) Then
	If Not objNSNETArch.IsCanConnect(FALSE, strErr) Then GenerateError obLanguage("Common","kErrNoAccessDB_Arch") & ": " & strErr
	If Not objNSNETArch.IsUserInYear(strUserID, strCurrYearID) Then GenerateHTMLError obLanguage("MySettings","kErrUserNotInYear"), strBackPage, strToken
End If
'если включили параметр readonly, не сохраняем личные данные пользователя(в основном чтобы убрать конфликты репликации)
If Not readonly Then
	Call PreSaveUserInfo()
	transaction = objNSNET.GetTransaction()
	Call SaveUsersettings()
	Call RegParentMobilePhone(transaction)
	objNSNET.CommitTransaction(transaction)
	Call objNSNET.DisposeCommand(objCmdMobileReg)
	Call ChangeLanguage()
	Call WriteState()
End If

If CLng(obTokenMgr.GetData(strToken,stCurrYear)) <> CLng(strCurrYearID) Then
	Call ChangeYear(strCurrYearID)
	RedirectTo strBackPage, null
End If

rw result
%>
