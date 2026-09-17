<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Movement/MoveBook_inc.asp" -->

<% ' © 2007-2009 IRTech. All rights reserved.
'On Error Resume Next

Dim strFirstName, strLastName, strMiddleName
Dim i, nIgnored, nAdded, nUsed, nErrors, nEditUserID, nStudentID, strSave
Dim arrUsers, rsSimilar, Item, arrItem, nUserID, strRole, arrClass, nClass, nClassID
Dim strNewUserID, bPoolStudent, bIgnoreParents
Dim strBackPage, dctSelectedUsers
Dim nResult, bClassForPoolStudentIgnored, strDocID, arrSubDocs, arrActualParams
Dim transaction

nUsed = 0 : nIgnored = 0 : nAdded = 0 : nErrors = 0 : nClass = 0
strBackPage = GetSafeStr(obTokenMgr.GetData(strToken, stBackPage), 255, "/angular/em/users/")
arrUsers = obTokenMgr.GetData(strToken,"arrUsers")
transaction = objNSNET.GetTransaction()

For i = 0 To Request("nItems")
		nUserID = GetSafeLng(Request("USE"&i), -1)
		Select Case nUserID
		Case -1
			arrItem = arrUsers(i)
			strLastName = arrItem(2)
			strFirstName = arrItem(3)
			strMiddleName = arrItem(4)
			strRole = arrItem(10)
			nEditUserID = objNSNET.CreateEMUser_WT(transaction, strEMID, arrItem(0), arrItem(1), strFirstName, strMiddleName, strLastName, arrItem(5), arrItem(6), arrItem(7), arrItem(8), CLng(strRole))
			If nEditUserID >0 Then
				Call SetActualParams(arrItem(12),arrItem(13))
				Call objNSNET.SaveUserRoleSpecificInfo_WT(transaction, nEditUserID, strCurrYearID, arrActualParams, kRoleType_EM)
				Call objNSNET.SetUserSettings(transaction, nEditUserID, -1, -1, CLng(arrItem(11)), -1, "")
				nAdded = nAdded + 1
			Else
				nErrors = nErrors + 1 : Err.Clear
			End If
		Case 0
			nIgnored = nIgnored + 1
		Case Else
			arrItem = arrUsers(i)
			If nEditUserID > 0 Then nUsed = nUsed + 1 Else nErrors = nErrors + 1 : Err.Clear
		End Select
Next

strSave = strSave & obLanguage("SetupSchool","kAdded")& nAdded
If nUsed > 0 Then strSave = strSave &"\n"& obLanguage("SetupSchool","kUsed")& nUsed
If nIgnored > 0 Then strSave = strSave &"\n"& obLanguage("SetupSchool","kIgnored")& nIgnored
If nErrors > 0 Then strSave = strSave &"\n"& obLanguage("SetupSchool","kErrors")& nErrors

Call obTokenMgr.SetData(strToken,stWasSaved, strSave )
Call obTokenMgr.SetData(strToken,"arrUsers", Null )

objNSNET.CommitTransaction(transaction)
RedirectTo strBackPage, null

Sub GenerateError(strErrorMsg)
	' перекрыта, т.к. сюда попадаем с промежуточной стр. "SaveInfoQAdd.asp"
	GenerateHTMLError strErrorMsg, strBackPage, strToken
End Sub

Sub SetActualParams (sPosition, sWorkPhone)
		If Trim(sWorkPhone)<>"" Then
			ReDim arrActualParams(3, 1)
		Else
			ReDim arrActualParams(3, 0)
		End If
		arrActualParams(0, 0) = "4001" ' ID Должность
		arrActualParams(1, 0) = "S" ' Строковое значение
		arrActualParams(2, 0) = "N" ' Не зависит от учебного года
		arrActualParams(3, 0) = sPosition
		If Trim(sWorkPhone)<>"" Then
			arrActualParams(0, 1) = "4002" ' ID Рабочий телефон
			arrActualParams(1, 1) = "S" ' Строковое значение
			arrActualParams(2, 1) = "N" 'Не зависит от учебного года
			arrActualParams(3, 1) = sWorkPhone
		End If
End Sub
%>
