<!-- #INCLUDE FILE=../headernoscreen.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strStudentID, strSubDocID, strClassID
Dim strReasonID, strNumYear, strDescr, strClassName
Dim arrDopClasses, i, cnt
Dim nResult

strStudentID = GetSafeID(Request("UID"), Null)

cnt = Request("SUBDOCID").Count
If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
ReDim arrDopClasses(3, cnt-1)
' (0, i) - SUBDOCID1, (1, i) - REASONID, (2, i) - DESCRIPTION
For i = 1 To cnt
	arrDopClasses(0, i-1) = GetSafeID(Request("SUBDOCID")(i), Null)
	arrDopClasses(1, i-1) = GetSafeID(Request("REASONID")(i), Null)
	arrDopClasses(2, i-1) = GetSafeStr(Request("DESCR")(i), -1, "")
Next

nResult = objNSNET.SaveStudentDopEducationInfo(strStudentID, strCurrYearID, arrDopClasses)
TestError obLanguage("SetupSchool","kCantSaveStudentDopEducationInfo")

If nResult = -1 Then
    GenerateError obLanguage("SetupSchool","kErrTooMoreSertificatReasons")
End If

RedirectTo "/angular/school/userinfo/students/" & strStudentID, Null
%>
