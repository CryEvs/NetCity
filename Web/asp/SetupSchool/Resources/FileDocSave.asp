<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->
<!-- #INCLUDE FILE="FileDoc_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim strAction
Dim nParentGroupID, nNum
Dim nResult
Dim strGroupID, strDocID, strDocName, strDescr, dtDocDate, strDocPath
Dim strFileNameOrig, strFileName, strFileNameOld, bNameAlreadyExist, strExt
Dim bNewDoc, objDocInfo
Dim objFSO, strDBFolderName
Dim fileData, nFileSize

On Error Resume Next

If Not HasUserRight(arSchoolDocsEdit) Then GenerateError obLanguage("Common","kErrPageAccess")

strAction	= GetSafeStr( requestData("ACT"), 100, Null)
bNewDoc		= (strAction = "newdoc")
If Not bNewDoc And (strAction <> "savedoc") Then
	GenerateError(obLanguage("SetupSchoolResources","kUnsupportedAction"))	
End If

strGroupID			= GetSafeID(requestData("PGRID"), Null)
strDocID			= GetSafeID(requestData("DOCID"), "0")
strDocName			= GetSafeStr(Trim(CStr(requestData("DOCNAME"))), kMaxLen_DocName, Null)
bNameAlreadyExist	= objNSNET.DoesSchoolDocNameAlreadyExist(strGroupID, strDocID, strDocName)
TestError(obLanguage("SetupSchoolResources","kErrorCannotGetDocInfo",strFunctionalityType))
If bNameAlreadyExist Then GenerateError(obLanguage("SetupSchoolResources","kErrorDocNameAlreadyExists"))

strDescr			= GetSafeStr(Trim(CStr(requestData("DESCR"))), kMaxLen_Descr, "")
strFileNameOrig		= requestData("fileName").Param.Value

If bNewDoc And IsDull(strFileNameOrig) Then GenerateError obLanguage("SetupSchoolResources","kDocFile_Empty")

If Not IsDull(strFileNameOrig) Then
	fileData = requestData("file").Param.Bytes
	
	nFileSize = UBound(fileData)
	If nFileSize = -1 Then
		GenerateError obLanguage("SetupSchoolResources","kDocFile_Empty")
	End If

	If nFileSize > obTokenMgr.Application()("UploadLimits").SchoolDocFileSizeLimit * 1024 Then
		GenerateError obLanguage("SetupSchoolResources","kFileSizeCantBeGreaterThan") & obTokenMgr.Application()("UploadLimits").SchoolDocFileSizeLimit & " KB"
	End If

	dtDocDate = NSNow()

	If bNewDoc Then
		Call objNSNET.AddSchoolDoc(strGroupID, strFileNameOrig, strDocName, strDescr, strUserID, dtDocDate, fileData)
		TestError(obLanguage("SetupSchoolResources","kCantCreateNewDoc"))
	Else
		Call objNSNET.EditSchoolDoc(strDocID, strFileNameOrig, strDocName, strDescr, strUserID, dtDocDate, fileData)
		TestError(obLanguage("SetupSchoolResources","kCantEditDoc",strFunctionalityType))
	End If
Else
	Call objNSNET.EditSchoolDoc_Short(strDocID, strDocName, strDescr)
	TestError(obLanguage("SetupSchoolResources","kCantEditDoc",strFunctionalityType))
End If

Call DisposeUpload()
RedirectTo "SchoolDocsEdit.asp" , Array("PGRID", strGroupID)%>