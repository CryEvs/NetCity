<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strBackPage
Dim arrUsers, i, nRes, userCnt
Dim bStaff, strStaffName, strResultMessage
Dim users
strBackPage = obTokenMgr.GetData(strToken,stBackPage)

users = Request.Form("StaffID")
Call objNSNET.ReuseUsers(Null, strSchoolID, strCurrYearID, rlTeacher, users)
TestError obLanguage("Common","kUnexpErr")

If False Then
	Call obTokenMgr.SetData(strToken, stWasSaved, strResultMessage)
End If

RedirectTo "/angular/school/users/staff/", null

%>
