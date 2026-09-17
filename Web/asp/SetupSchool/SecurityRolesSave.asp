<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
If Not HasUserRight(arProfileDefineSecurityRoles) Then GenerateError obLanguage("Common","kErrPageAccess")

On Error Resume Next
	
Dim nRoleID, arrRights, i, nLogoutTime, n, nRight, nCnt, maxSessionIdleTime
Dim nJournalEditTimeLimit, bNeedToSetJournaTimeLimit
Dim arrAddParamsValues
Dim transaction
	
nRoleID = GetSafeID(Request("ROLEID"),NULL)
maxSessionIdleTime = obContext.ServerSettings.SecuritySettings.MaxSessionIdleTime
If CInt(nRoleID) = rlStudent Then
	nLogoutTime = GetSafeLng(Request("LOGOUTTIME"), IIf(Not IsDull(maxSessionIdleTime), IIf(60 > maxSessionIdleTime, maxSessionIdleTime, 60), 60))
Else
	nLogoutTime = GetSafeLng(Request("LOGOUTTIME"), IIf(Not IsDull(maxSessionIdleTime), IIf(15 > maxSessionIdleTime, maxSessionIdleTime, 15), 15))
End If

' #22426
' Этот параметр должен быть не меньше, чем вызовов ProcessRadioButton, больше вроде можно.
' Вызовы ProcessRadioButton периодически добавлялись, а за этим параметром не следили.
'If CLng(strFunctionalityType) <> kFuncType_PreSchool Then nCnt = 13 Else nCnt = 10
nCnt = 20
ReDim arrRights(Request.Form("RIGHTS").Count + nCnt)

n = 0
For i = 1 To Request.Form("RIGHTS").Count
	nRight = CLng(Request.Form("RIGHTS")(i))
	arrRights(n) = nRight
	If nRight = arJournalEditLimitedTime Then nJournalEditTimeLimit = CInt(Request("JOURNALEDITTIMELIMIT")) : bNeedToSetJournaTimeLimit = True
	n = n + 1
Next

If CInt(nRoleID) = rlTeacher Then
	ProcessRadioButton("R_STAFF") 
	ProcessRadioButton("R_STUDENT") 
	If CLng(strFunctionalityType) <> kFuncType_PreSchool Then ProcessRadioButton("R_ENROLL")
	ProcessRadioButton("R_MOVE_BOOK")
	ProcessRadioButton("R_CECREATE")
	ProcessRadioButton("R_PLVIEW")
	ProcessRadioButton("R_PLCREATE")
	ProcessRadioButton("R_CALVIEW")
	ProcessRadioButton("R_JVIEW")
	ProcessRadioButton("R_JEDIT")
	ProcessRadioButton("R_STAT_REPORTS")
	If CLng(strFunctionalityType) <> kFuncType_PreSchool Then ProcessRadioButton("R_TVIEW") : ProcessRadioButton("R_TEDIT") : ProcessRadioButton("R_RESULTS_EGE")
	ProcessRadioButton("R_LAVIEW")
	If Module_IndividualSupport_Available() Then ProcessRadioButton("R_INDIVIDUAL_SUPPORT")
ElseIf Not IsArrayContainsItem(Array(rlMinorStaff, rlStudent, rlParent), CInt(nRoleID)) Then
	ProcessRadioButton("R_STAFF") : ProcessRadioButton("R_STUDENT")
	ProcessRadioButton("R_MOVE_BOOK")
	ProcessRadioButton("R_STAT_REPORTS")
	'If CLng(strFunctionalityType) <> kFuncType_Add Then ProcessRadioButton("R_STAT_REPORTS")
	If CLng(strFunctionalityType) <> kFuncType_PreSchool And IsArrayContainsItem(Array(rlAdmin, rlPrincipal), CInt(nRoleID)) Then ProcessRadioButton("R_RESULTS_EGE")
	If Module_IndividualSupport_Available() Then ProcessRadioButton("R_INDIVIDUAL_SUPPORT")
ElseIf Not IsArrayContainsItem(Array(rlMinorStaff, rlStudent), CInt(nRoleID)) Then
	If Module_IndividualSupport_Available() Then ProcessRadioButton("R_INDIVIDUAL_SUPPORT")
End If

If CInt(nRoleID) = rlAdmin Then
	arrRights(n) = arProfileDefineSecurityRoles
	n = n + 1
End If

Call MarkUserToUpdateRights(-1)

transaction = objNSNET.GetTransaction()
ReDim Preserve arrRights(n-1)
Call objNSNET.SaveSchoolRoleRights_WT(transaction, strSchoolID, nRoleID, arrRights)
Call TestErrorWithTransaction(transaction,obLanguage("Secure","kErrUpdateRights"))

If bNeedToSetJournaTimeLimit Then Call objNSNET.SetJournalEditTimeLimit( transaction, strSchoolID, nJournalEditTimeLimit )

Call objNSNET.SetSchoolLogoutTime_WT(transaction, strSchoolID, nRoleID, nLogoutTime)
Call TestErrorWithTransaction(transaction,obLanguage("Secure", "kErrUpdateLogoutTime"))
objNSNET.CommitTransaction(transaction)

Call obTokenMgr.SetData(strToken,stSecurityRolesWasSaved, "Y")
Call WriteJsonResult(obLanguage("Secure","kRightsSaved"), False, 0)

Sub ProcessRadioButton(strFieldName)
	Dim strRightID

	strRightID = CStr(Request.Form(strFieldName))

	If strRightID <> "0" Then
		arrRights(n) = strRightID
		n = n + 1
	End If
End Sub%>
