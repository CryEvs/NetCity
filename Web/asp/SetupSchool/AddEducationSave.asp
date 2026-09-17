<!-- #INCLUDE FILE=../headernoscreen.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strStudentID, strClassName, strClassID
Dim strEOID, strTypeID
Dim arrCreatives, i, cnt, nIndex

Dim component, uow

strStudentID = GetSafeID(Request("UID"), Null)
strEOID = GetSafeID(Request("EOID"), Null)

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetEditUserInfoWork(strUserId, strStudentID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

If Not (HasUserRight(arUsersEditStudents) or HasUserRight(arEditInfoSelf) ) Then 
	GenerateError obLanguage("Common","kErrPageAccess")
ElseIf Not HasUserRight(arUsersEditStudents) Then
	strClassName = objNSNET.GetClassNameForStudent(strStudentID, strCurrYearID)
	If Not isDull(strClassName) Then 
		strClassID = objNSNET.GetClassID(Empty, strCurrYearID, strClassName)
		If Not objNSNET.IsClassChief(strClassID, strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")
	Else 
		GenerateError obLanguage("Common","kErrPageAccess")
	End If
End If

If Request("ACT") = "delete" Then
	cnt = Request("delCreative").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrCreatives(1, cnt-1)
	' (0, i) - EOID, (1, i) - TYPEID
	For i = 1 To cnt
		nIndex = Request("delCreative")(i)
		arrCreatives(0, i-1) = GetSafeID(Request("DEL_EOID")(nIndex), Null)
		arrCreatives(1, i-1) = GetSafeID(Request("DEL_TYPEID")(nIndex), Null)
	Next

	Call uow.RemoveStudentCreatives(arrCreatives)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantDeleteCreatives"))

ElseIf Request("ACT") = "add" Then
	' create new Student creative
	strTypeID = GetSafeID(Request("TYPEID"), Null)

	Call uow.SetStudentCreative(strEOID, strTypeID)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantCreateCreative"))
Else
	GenerateError obLanguage("Common","kInvalidParameter")
End If

Call uow.Commit()
Call uow.Dispose()

RedirectTo "AddEducationEdit.asp", Array("UID", strStudentID, "EOID", strEOID)
%>
