<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
On Error Resume Next

Dim nNewUserID, strGender, strLastName, strDisplayName, strFirstName, strMiddleName, strComment
Dim dtBirthDate, strTmp, arrRoles, n
Dim dctImportStaff, arrItem, i, j, iErrors,  iSuccess, strSave, strBackPage
Dim strUniqueCode, objStaffRoles

strBackPage = GetSafeStr(Request("Back"), 255, "/angular/school/users/staff/")
If Not IsObject(obTokenMgr.GetData(strToken,"ImportStaff") ) Then RedirectTo strBackPage, null
Set dctImportStaff = obTokenMgr.GetData(strToken,"ImportStaff")
strUniqueCode = GetSafeStr(obTokenMgr.GetData(strToken,"strUniqueCode"),4,"1234")

iErrors = 0
iSuccess = objNSNET.ImportStaff(strSchoolID, strCurrYearID, strUniqueCode, dctImportStaff.Values, iErrors)
TestError obLanguage("Common", "kUnexpErr")

strSave = strSave & obLanguage("Import","kSuccessImport") & iSuccess
If iErrors > 0 Then strSave = strSave &"\n" & obLanguage("Import","kErrCreateUser") & iErrors
Call obTokenMgr.SetData(strToken,stWasSaved, strSave )

RedirectTo strBackPage, null
%>
