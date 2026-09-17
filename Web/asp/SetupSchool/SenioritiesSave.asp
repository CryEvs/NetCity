<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Seniorities_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strStaffID
Dim strSenType, strSenID, dtStart, dtEnd
Dim arrSenEdit, arrSenNew
Dim i, cnt, nCntNew
Dim strAction

Dim component, uow

strAction = GetSafeStr(Request("ACT"),-1,"")
strStaffID = GetSafeID(Request("UID"), Null)
If Not checkRights(strStaffID) Then GenerateError obLanguage("Common","kErrPageAccess")

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetEditUserInfoWork(strUserId, strStaffID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

If strAction = "delete" Then
	strSenID = GetSafeID(Request("delSenID"), Null)
	Call uow.RemoveSeniority(strSenID)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantDeleteSeniority"))
Else

	arrSenEdit = Empty
	cnt = Request("SenID").Count
	If cnt > 0 Then
		ReDim arrSenEdit(2, cnt-1)
		For i = 1 To cnt
			strSenID = GetSafeID(Request("SenID")(i), Null)
			dtStart = GetSafeDate(Request("Start_" & strSenID), Null)
			dtEnd = Null
			If Not IsDull(CStr(Request("End_" & strSenID))) Then
				dtEnd = GetSafeDate(Request("End_" & strSenID), Null)
			End If

			arrSenEdit(0, i-1) = strSenID
			arrSenEdit(1, i-1) = dtStart
			arrSenEdit(2, i-1) = dtEnd
		Next
	End If

	arrSenNew = Empty
	cnt = Request("SenType").Count
	If cnt > 0 Then
		nCntNew = 0
		ReDim arrSenNew(2, cnt-1)
		For i = 1 To cnt
			strSenType = GetSafeID(Request("SenType")(i), Null)
			If Not IsDull(CStr(Request("NewStart_" & strSenType))) Then
				dtStart = GetSafeDate(Request("NewStart_" & strSenType), Null)
				dtEnd = Null
				If Not IsDull(CStr(Request("NewEnd_" & strSenType))) Then
					dtEnd = GetSafeDate(Request("NewEnd_" & strSenType), Null)
				End If
				nCntNew = nCntNew + 1
				arrSenNew(0, nCntNew-1) = strSenType
				arrSenNew(1, nCntNew-1) = dtStart
				arrSenNew(2, nCntNew-1) = dtEnd
			End If
		Next
		If nCntNew = 0 Then
			arrSenNew = Empty
		Else
			ReDim Preserve arrSenNew(2, nCntNew-1)
		End If
	End If

	Call uow.SetSeniority(arrSenEdit, arrSenNew)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantSaveSeniority"))
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchoolUI", "kSaveSeniorities")))
End If

Call uow.Commit()
Call uow.Dispose()

'If strAction <> "delete" Then
'	Call WriteJsonResult(obLanguage("SetupSchoolUI", "kSaveSeniorities"), False, 0)
'Else
	RedirectTo "SenioritiesEdit.asp", Array("UID", strStaffID)
'End If
%>
