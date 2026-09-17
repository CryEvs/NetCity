<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dtRelativeBirthDate, strRelatioshipType
Dim strLastName, strFirstName, strMiddleName
Dim i, cnt, nIndex
Dim nStaffID
Dim objFamilyInfo
Dim arrRelatives, bRelativeExist
Dim bSkip
Dim transaction
Dim component, uow

If Not (HasUserRight(arUsersEditStaff) Or HasUserRight(arEditInfoSelf)) Then GenerateError obLanguage("Common","kErrPageAccess")

nStaffID = GetSafeLng(Request("UID"), Null)
Set objFamilyInfo = objNSNET.GetStaffFamilyInfo(nStaffID)

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetEditUserInfoWork(strUserId, nStaffID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

Select Case Request("ACT")
	Case "delete"
		cnt = Request("delRelative").Count
		If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
		ReDim arrRelatives(cnt-1)
		' (i) - RelativeID
		For i = 1 To cnt
			nIndex = Request("delRelative")(i)
			arrRelatives(i-1) = GetSafeID(Request("RELATIVEID")(nIndex), Null)
		Next
		Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchool","kRelativeInfoRemove")) )
		Call uow.RemoveStaffRelatives(arrRelatives)
	Case "add"
		bRelativeExist = False
		If Not IsDull(Request("RelatioshipTypeNew")) Then
			' create new relative
			dtRelativeBirthDate = GetSafeDate(Trim(Request("BirthDateNew")),"")
			strRelatioshipType = GetSafeLng(Request("RelatioshipTypeNew"), Null)
			strLastName = GetSafeStr(Trim(Request("LastNameNew")), kMaxLastname, "")
			strFirstName = GetSafeStr(Trim(Request("FirstNameNew")), kMaxLastname, "")
			strMiddleName = GetSafeStr(Trim(Request("MiddleNameNew")), kMaxLastname, "")
			Do While Not objFamilyInfo.EOF
				If Trim(objFamilyInfo("FIRSTNAME")) = strFirstName And Trim(objFamilyInfo("MIDDLENAME")) = strMiddleName And Trim(objFamilyInfo("LASTNAME")) = strLastName And CInt(objFamilyInfo("RELATIONSHIPTYPEID")) = CInt(strRelatioshipType) Then bRelativeExist = True
				objFamilyInfo.MoveNext	
			Loop
			If bRelativeExist Then
				Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("SetupSchool","kRelativeExist")) )
			Else
				Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("SetupSchool","kRelativeInfoAdd")) )
				Call uow.SetStaffRelatives(strRelatioshipType, strLastName, strFirstName, strMiddleName, dtRelativeBirthdate)
			End If 
		End If
End Select

Call uow.Commit()
Call uow.Dispose()

RedirectTo GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER" )), Array("UID", nStaffID)
%>
