<!-- #INCLUDE FILE="../headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strStudID, arrCMIDs, arrAtt

strStudID = GetSafeID(Request("StudID"), "")
arrCMIDs = Split( CStr(Request("CMID")), ", ")
arrAtt = Split( CStr(Request("arrAtt")), ", ")

On Error Resume Next
Call objNSNET.SaveAttendance(strUserID, strSchoolID, strStudID, arrCMIDs, arrAtt, GetRemoteAddr())
TestError obLanguage("Grade","kErrCantSaveAttendance")

Call WriteJsonResult(obLanguage("Common", "kDataSaved"), False, 0)
%>
