<% ' © 2007-2008 IRTech. All rights reserved.
Dim objCmd, objRs
Dim strPlanID, strDocName, strDescr
Dim strFileNameOrig, strFileNameOld, bNameAlreadyExist
Dim bIsNewDoc, objDocInfo
Dim objFSO, strDBFolderName
Dim nFileSize

Sub ExplanatoryNoteDoc(strPlanID)
	If Not bIsDebug Then On Error Resume Next

	If strAction = "newdoc" Or strAction = "savedoc" Then
		bIsNewDoc = ( strAction = "newdoc" )
		strDocName = GetSafeStr(Trim(CStr(requestData("FILENAME_ORIG"))), kMaxLen_Name, "")
		strDescr = GetSafeStr(Trim(CStr(requestData("DESCR"))), kMaxLen_Descr, "")
	
		strFileNameOrig = requestData("docFile").Param.GetHeader("filename")
		If bIsNewDoc And IsDull( strFileNameOrig ) Then GenerateError obLanguage("SetupSchoolPortfolio","kDocFile_Empty")

		If Not IsDull( strFileNameOrig ) Then
			Set objFSO = CreateObject("Scripting.FileSystemObject")
			strDocName = objFSO.GetFileName(strFileNameOrig)
		
			Dim fileData		
			fileData = requestData("docFile").Param.Bytes

			nFileSize = UBound(fileData)
			If nFileSize = -1 Then
				GenerateError obLanguage("SetupSchoolPortfolio","kDocFile_Empty")
			End If

			If nFileSize > kPlannerDocFileNote_MaxSize_KB * 1024 Then
				GenerateError obLanguage("SetupSchoolPortfolio","kFileSizeCantBeGreaterThan") & kPlannerDocFileNote_MaxSize_KB & " KB"
			End If
		
			If bIsNewDoc Then
				Call objNSNET.AddExplanatoryNoteDoc(strPlanID, strDocName, strDescr, fileData)
				TestError obLanguage("SetupSchoolPortfolio","kErrorCreateNewDocFailed")
			Else
				Set objDocInfo = objNSNET.GetExplanatoryNoteDocInfo(strPlanID)
				TestError kErrorCannotGetSubjPlansInfo
				If objDocInfo.EOF Then
					GenerateError kErrorCannotGetSubjPlansInfo
				End If
		
				Call objNSNET.AddExplanatoryNoteDoc(strPlanID, strDocName, strDescr, fileData)
				TestError obLanguage("SetupSchoolPortfolio","kErrorEditDocFailed")
			End If
		Else
			Call objNSNET.EditExplanatoryNote_Short(strPlanID, strDescr)
			TestError obLanguage("SetupSchoolPortfolio","kErrorEditDocFailed")
		End If
	
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kUnsupportedAction") 
	End If
End Sub
%>
