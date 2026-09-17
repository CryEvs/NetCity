<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strEditUserID, strBackPage, strParamID, strSYDepend
Dim arrItems, i, cnt

Dim component, uow

If Not hasUserRightsOnPage() Then Call onAccessError()

strEditUserID = GetSafeID(Request("UID"), Null)
strParamID = GetSafeID(Request("MChoiceParamID"), Null)

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetEditUserInfoWork(strUserId, strEditUserID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

cnt = Request("MCHOICEITEMS").Count
If cnt = 0 Then
	arrItems = Empty
Else
	ReDim arrItems(cnt-1)
	For i = 1 To cnt
		arrItems(i-1) = Request("MCHOICEITEMS")(i)
	Next
End If

Call uow.SetMChoiceParam(strParamID, arrItems)
Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kErrCannotUpdate"))

Call uow.Commit()
Call uow.Dispose()

Call WriteJsonResult(obLanguage("Common", "kDataSaved"), False, 0)

Function hasUserRightsOnPage()
	If objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlStudent) Then
		hasUserRightsOnPage = hasRightsToEditStudentOrParent()
	ElseIf (objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlParent) And InStr(UCase(Request.ServerVariables("HTTP_REFERER" )),"PARENT" ) > 0 ) Then
		hasUserRightsOnPage = hasRightsToEditStudentOrParent()
	Else 'Staff
		hasUserRightsOnPage = HasUserRight(arUsersEditStaff)
	End If
End	Function

Function hasRightsToEditStudentOrParent()
	Dim strClassID
	If HasUserRight(arUsersEditStudents) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arUsersEditStudentsPsyInfo) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arUsersEditStudentsMedInfo) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then
		strClassID = GetSafeID( obTokenMgr.GetData(strToken, stStudClassID), "0" )
		If strClassID <> "0" Then
			If objNSNET.IsClassChief(strClassID, strUserID) Then hasRightsToEditStudentOrParent = True: Exit Function
		End If
	End If
	hasRightsToEditStudentOrParent = False
End Function
%>