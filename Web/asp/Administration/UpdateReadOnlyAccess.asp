<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="../scripts/readonlyaccess.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim i, strSchoolIDs, nSchools, strEditSchoolID

If Not HasUserRole(rlAdmin) Then GenerateError obLanguage("Common","kErrPageAccess")

nSchools = Request.Form("schoolID").Count

For i = 1 To nSchools
	strEditSchoolID = GetSafeID(Request.Form("schoolID")(i), NULL)
	strSchoolIDs = strSchoolIDs + IIF(i=1, strEditSchoolID, ","+strEditSchoolID)
Next

On Error REsume Next
objNSNET.UpdateReadOnlyAccess(strSchoolIDs)
TestError obLanguage("SetupSchool","kCantSaveReadOnlyAccessSettings")
Call MarkUserToUpdateAccess()
Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("ServAdmin","kReadOnlyAccessWasSaved")))
RedirectTo "EditReadOnlyAccess.asp", null
%>
