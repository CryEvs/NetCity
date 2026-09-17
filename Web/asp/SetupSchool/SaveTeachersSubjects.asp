<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim strEditUserID, strSubjectID, arrData, strBackPage, i, cnt
Dim component, uow

strSubjectID = GetSafeID(Request("SBJID"), "0")
strBackPage = GetSafeStr(Request("BackPage"), 255, "/asp/SetupSchool/Calendar/EditSchoolSubjects.asp")
If ( strSubjectID = "0") Then
	strEditUserID = GetSafeID(Request("UID"), NULL )

	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
	Set uow = component.GetEditUserInfoWork(strUserId, strEditUserID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

	cnt = Request("SUBJS").Count
	ReDim arrData(cnt-1)
	For i = 1 To cnt
		arrData(i-1) = Request("SUBJS")(i)
	Next

	Call uow.SetSubjectsToTeacher(arrData)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))

	Call uow.Commit()
	Call uow.Dispose()

	Call obTokenMgr.SetData(strToken, stUsersStaffUserID, strEditUserID)
	RedirectTo strBackPage, Array("UID", strEditUserID)
Else
	cnt = Request("NEWTEACHERS").Count
	If cnt > 0 Then
		ReDim arrData(cnt-1)
		For i = 1 To cnt
			arrData(i-1) = Request("NEWTEACHERS")(i)
		Next
		Call objNSNET.AssignTeachersToSubject(strSubjectID, arrData)
	Else
		cnt = Request("DELTEACHERS").Count
		If cnt > 0 Then
			ReDim arrData(cnt-1)
			For i = 1 To cnt
				arrData(i-1) = Request("DELTEACHERS")(i)
			Next
			Call objNSNET.CancelSubjectForTeachers(strSubjectID, arrData)
		End If
	End If
	RedirectTo strBackPage, Array("SBJID", strSubjectID)
End If
%>
