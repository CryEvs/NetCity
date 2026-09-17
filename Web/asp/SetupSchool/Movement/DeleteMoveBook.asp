<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strDocID
Dim nDocType
Dim nFailedStudentID, nID, nResult
Dim strErr, strErrDetail
Dim objDocInfo, strDocSchoolID, dtDocDate, strDocNumber, strDocSchoolName

Server.ScriptTimeout = Server.ScriptTimeout * 10

strDocID = GetSafeID(Request("DOCID"), Null)
nDocType = GetSafeLng(Request("DOCTYPE"), Null)

nFailedStudentID = 0
nID = 0
nResult = 0

On Error Resume Next

If Not objNSNETArch.IsCanConnect(FALSE, strErr) Then GenerateError obLanguage("Common","kErrNoAccessDB_Arch") & ": " & strErr
nResult = objNSNET.DeleteMoveDoc(strDocID, nDocType, strFunctionalityType, nFailedStudentID, nID)
TestError obLanguage("Movement","kCantDeleteMoveDoc")
On Error Goto 0

strErr = ""
strErrDetail = ""
Select Case nResult
Case kResult_IN_LATER_DOC :
	Set objDocInfo = objNSNET.GetMoveDocInfo(nID) ' nID = later DocID
	If objDocInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strDocSchoolID = GetSafeID(objDocInfo("SCHOOLID"), Null)
	If strSchoolID = strDocSchoolID Then
		dtDocDate = GetSafeDate(objDocInfo("DOCDATE"), Null)
		strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, Null)
		strErrDetail = obLanguage("Movement","kMoveDocStudent",strFunctionalityType) & ": " & objNSNET.GetUserNickName(nFailedStudentID) & ", " & obLanguage("Movement","kMoveDoc") & ": " & strDocNumber & " " & obLanguage("Movement","kMoveDocFrom") & " " & Date2Str(dtDocDate)
	Else
		strDocSchoolName = objNSNET.GetSchoolName(strDocSchoolID)
		strErrDetail = obLanguage("Movement","kMoveDocStudent",strFunctionalityType) & ": " & objNSNET.GetUserNickName(nFailedStudentID) & ", " & obLanguage("Movement","kMoveDoc") & " " & obLanguage("Movement","kMoveDocSchool",strFunctionalityType) & " '" & strDocSchoolName & "'"
	End If
	strErr = obLanguage("Movement","kDelDoc_InLaterDoc",strFunctionalityType) & " (" & strErrDetail & ")"
Case kResult_IN_SCHOOL :
	strDocSchoolName = objNSNET.GetSchoolName(nID) ' nID = SchoolID
	strErr = obLanguage("Movement","kDelDoc_InSchool",strFunctionalityType) & " '" & strDocSchoolName & "'" & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveResult_TOTAL :
	strErr = obLanguage("Movement","kDelDoc_Student_TOTAL",strFunctionalityType) & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveResult_RESULT :
	strErr = obLanguage("Movement","kDelDoc_Student_RESULT",strFunctionalityType) & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveResult_ATTEND :
	strErr = obLanguage("Movement","kDelDoc_Student_ATTEND",strFunctionalityType) & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveResult_IN_ADDSCHOOL :
	strErr = obLanguage("Movement","kCantRemoveStudent_IN_ADDSCHOOL",strFunctionalityType) & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveResult_NotHaveReturnToPoolDoc
	strErr = obLanguage("Movement","kCantRemoveStudent_NotHaveReturnToPoolDoc",strFunctionalityType) & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveResult_HasDOUParentPay :
	strErr = obLanguage("Movement","kCantRemoveStudent_HasDOUParentPay") & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveResult_StudentNotInActivePool
	strErr = MakeErrMessage_StudentNotInActivePool() & " (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
Case kRemoveStudentsFromMovDocException :
	strErr = obLanguage("Common","kUnexpErr")
	If nFailedStudentID > 0 Then
		strErr = strErr & "\n (" & objNSNET.GetUserNickName(nFailedStudentID) & ")"
	End If
End Select

If strErr = "" Then
	Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("Movement","kMoveDocSuccessfulDeleted")) )
	RedirectTo "MoveBook.asp?", Array("DOCTYPE", nDocType, "DOCSUBTYPE", Request("DOCSUBTYPE"))
Else
	Call obTokenMgr.SetData( strToken, stWasSaved, strErr )
	If nDocType=kDocType_MOVE Then
		RedirectTo "ClassesMoveBookEdit.asp?", Array("DOCID", strDocID, "DOCTYPE", nDocType)
	Else
		RedirectTo "MoveBookEdit.asp?", Array("DOCID", strDocID, "DOCTYPE", nDocType, "DOCSUBTYPE", Request("DOCSUBTYPE"))
	End If
End If

Sub GenerateError( strText )
	If Not bIsDebug Then Call SaveError : On Error Resume Next
	WriteToLog kUETError, strText
	Call obTokenMgr.SetData( strToken, stWasSaved, strText )
	RedirectTo "MoveBook.asp?", Array("DOCTYPE", nDocType)
End Sub
%>
