<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Movement/MoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/heavySession_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim strFirstName, strLastName, strMiddleName
Dim i, nIgnored, nAdded, nUsed, nErrors, nEditUserID, nStudentID, strSave
Dim arrUsers, rsSimilar, Item, arrItem, nUserID, strRole, arrClass, nClass, nClassID
Dim strNewUserID, bPoolStudent, bIgnoreParents
Dim strBackPage, dctSelectedUsers
Dim nResult, bClassForPoolStudentIgnored, trDocID, arrSubDocs
Dim transManager, transaction
Dim bIsStudentsQadd, objForm
Dim bAnyParents
Dim dtBirthDate
Dim nCurrRole

nUsed = 0 : nIgnored = 0 : nAdded = 0 : nErrors = 0 : nClass = 0
strBackPage = GetSafeStr(obTokenMgr.GetData(strToken, stBackPage), 255, Null)
arrUsers = obTokenMgr.GetData(strToken,"arrUsers")
bIsStudentsQadd = (CLng(Request("Role")) = rlStudent)
bAnyParents = False
nCurrRole = CLng(Request("Role"))

If bIsStudentsQadd Then
	'теперь быстрый ввод учащихся выполняется полностью в рамках процесса создания документа о движении
	 GenerateError obLanguage("Common","kUnexpErr")
End If

Set transaction = objNSNET.GetTransaction()
If CLng(Request("Role")) <> rlParent Then
	If Not HasUserRight(arUsersEditStaff) Then Call GenerateError (obLanguage("Common","kErrPageAccess"))
Else
	If Not HasUserRight(arUsersEditStudents) Then Call GenerateError (obLanguage("Common","kErrPageAccess"))
End If

For i = 0 To Request("nItems")
	nUserID = GetSafeLng(Request("USE"&i), -1)
	Select Case nUserID
	Case -1
		arrItem = arrUsers(i)
		strLastName = arrItem(3)
		strFirstName = arrItem(4)
		strMiddleName = arrItem(5)
		strRole = arrItem(11)
		If Not IsDull(arrItem(9)) Then dtBirthDate = Str2Date( arrItem(9) ) Else dtBirthDate = Null
		nEditUserID = objNSNET.CreateUser(transaction, strSchoolID, strCurrYearID, arrItem(0), arrItem(1), arrItem(2), strFirstName, strMiddleName, strLastName, arrItem(6), arrItem(7), arrItem(8), dtBirthDate, arrItem(10), strRole)
		If nEditUserID >0 Then
			nAdded = nAdded + 1
			Call objNSNET.SetUserSettings(transaction, nEditUserID, -1, -1 , arrItem(12), -1,"")
		Else
			nErrors = nErrors + 1 : Err.Clear
		End If
	Case 0
		nIgnored = nIgnored + 1
	Case Else
		arrItem = arrUsers(i)

		' #27460. При быстром вводе Сотрудника надо передавать выбранные Роли, иначе они теряются.
		nEditUserID = objNSNET.ReuseUser(transaction, nUserID, IIf(nCurrRole = 0, arrItem(11), nCurrRole), strSchoolID, strCurrYearID, arrItem(0), arrItem(1))

		If nEditUserID > 0 Then
			nUsed = nUsed + 1
			Call objNSNET.SetUserSettings(transaction, nEditUserID, -1, -1, arrItem(12), -1,"")
		Else
			nErrors = nErrors + 1 : Err.Clear
		End If
	End Select
Next

strSave = strSave & obLanguage("SetupSchool","kAdded")& nAdded
If nUsed > 0 Then strSave = strSave &"\n"& obLanguage("SetupSchool","kUsed")& nUsed
If nIgnored > 0 Then strSave = strSave &"\n"& obLanguage("SetupSchool","kIgnored")& nIgnored
If nErrors > 0 Then strSave = strSave &"\n"& obLanguage("SetupSchool","kErrors")& nErrors
If bAnyParents Then strSave = strSave &"\n"& obLanguage("SetupSchool","kParentsUserNameSeeInPersonalCard")

Call objNSNET.CommitTransaction(transaction)

Call obTokenMgr.SetData(strToken,stWasSaved, strSave )
Call obTokenMgr.SetData(strToken,"arrUsers", Null )
Call obTokenMgr.SetData(strToken,"strClassName", arrClass(Ubound(arrClass)))
Call obTokenMgr.SetData(strToken,"arrClass", Null )

RedirectTo strBackPage, null

Sub GenerateError(strErrorMsg)
	' перекрыта, т.к. сюда попадаем с промежуточной стр. "SaveInfoQAdd.asp"
	GenerateHTMLErrorWT transaction, strErrorMsg, strBackPage, strToken
End Sub

Sub AddToDictionaryStudents(strUID,nClassID, EnrollFrom)
	if EnrollFrom<>-kEnrollFrom_Pool then EnrollFrom="2"
	'EnrollFrom используем для верного определения места, откуда зачисляется ученик...если из пула передаем -3 в компоненту!
	dctSelectedUsers.Item(strUID) = Array("-1", EnrollFrom, nClassID)
End Sub

%>
