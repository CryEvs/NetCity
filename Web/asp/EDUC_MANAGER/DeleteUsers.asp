<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strBackPage, strEditUserID, nRoleTypeForDelete
strBackPage = Request("Back")

If Not HasUserRight(arEMUsersEdit) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim arrUsers, i, nRes
ReDim arrUsers(Request.Form("deluser").Count-1)

For i = 0 To UBound(arrUsers)
    strEditUserID = GetSafeID(Request.Form("deluser")(i+1), NULL)
    If strEditUserID = strUserID Then GenerateError obLanguage("SetupSchool","kErrRemoveSelf")
    arrUsers(i) = strEditUserID
Next

On Error REsume Next
nRes = objNSNET.DeleteEMUsers(arrUsers)
TestError obLanguage("SetupSchool","kCantDeleteUser")
RedirectTo strBackPage, null
%>
