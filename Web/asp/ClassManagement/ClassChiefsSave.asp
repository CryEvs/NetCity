<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<% ' © 2007-2011 IRTech. All rights reserved.

If Not HasUserRight(arClassMgmCreateClass) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strAction
Dim strClassID, strClassName, strSubjectID, strCSGID, strTermID
Dim arrTeachers

strClassID = GetSafeID(Request("PCLID"), Null)
arrTeachers = Split( CStr(Request("teachersID")), ", " )

On Error Resume Next
Call objNSNET.SetClassChiefs(strClassID, arrTeachers)
TestError(obLanguage("ClassManagement","kCantSaveStudentGroup"))

RedirectTo "ClassProfile.asp", Array("PCLID", strClassID )
%>
