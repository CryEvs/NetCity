<% ' © 2007-2014 IRTech. All rights reserved.
Dim objCmd, objRs
Dim strGroupName, nParentGroupID, nNum
Dim strDocID, strDocName, strDescr
Dim strFileNameOrig, strFileName, strFileNameOld, bNameAlreadyExist, strExt
Dim bIsNewDoc, objDocInfo
Dim objFSO, strDBFolderName
Dim nFileSize

Sub SavePortfolioDoc(strPortfolioID)
	If Not bIsDebug Then On Error Resume Next

	If strAction = "newdoc" Or strAction = "savedoc" Then
		bIsNewDoc = ( strAction = "newdoc" )
		strDocID = GetSafeID( requestData("DOCID"), "0" )
		strDocName = GetSafeStr(Trim(CStr(requestData("DOCNAME"))), kMaxLen_Name, Null)
		strDescr = GetSafeStr(Trim(CStr(requestData("DESCR"))), kMaxLen_Descr, "")
		
		bNameAlreadyExist = objNSNET.DoesPortfolioDocNameAlreadyExist(strGroupID, strDocID, strDocName)
		TestError obLanguage("SetupSchoolPortfolio","kErrorCannotGetPortDocInfo")
		If bNameAlreadyExist Then GenerateHTMLError obLanguage("SetupSchoolPortfolio","kErrorDocNameAlreadyExists"), obTokenMgr.GetData(strToken,stBackPage), strToken
	
		strFileNameOrig = requestData("fileName").Param.Value

		If bIsNewDoc And IsDull( strFileNameOrig ) Then GenerateHTMLError obLanguage("SetupSchoolPortfolio","kDocFile_Empty"), obTokenMgr.GetData(strToken,stBackPage), strToken

		If Not IsDull(strFileNameOrig) Then
			Dim fileData
			fileData = requestData("file").Param.Bytes

			nFileSize = UBound(fileData)
			If nFileSize = -1 Then
				GenerateHTMLError obLanguage("SetupSchoolPortfolio", "kDocFile_Empty"), obTokenMgr.GetData(strToken, stBackPage), strToken
			End If

			If nFileSize > obTokenMgr.Application()("UploadLimits").PortfolioDocFileSizeLimit * 1024 Then
				GenerateHTMLError obLanguage("SetupSchoolPortfolio", "kFileSizeCantBeGreaterThan") & obTokenMgr.Application()("UploadLimits").PortfolioDocFileSizeLimit & " KB", obTokenMgr.GetData(strToken, stBackPage), strToken
			End If

			If bIsNewDoc Then
				Call objNSNET.AddPortfolioDoc(strGroupID, strFileNameOrig, strDocName, strDescr, fileData)
				TestError obLanguage("SetupSchoolPortfolio","kErrorCreateNewDocFailed")
			Else
				Set objDocInfo = objNSNET.GetPortfolioDocInfo(strDocID)
				TestError obLanguage("SetupSchoolPortfolio","kErrorCannotGetPortDocInfo")
		
				Call objNSNET.EditPortfolioDoc(strDocID, strFileNameOrig, strDocName, strDescr, fileData)
				TestError obLanguage("SetupSchoolPortfolio","kErrorEditDocFailed")
			End If
		Else
			Call objNSNET.EditPortfolioDoc_Short(strDocID, strDocName, strDescr)
			TestError obLanguage("SetupSchoolPortfolio","kErrorEditDocFailed")
		End If
	
	Else
		GenerateHTMLError obLanguage("SetupSchoolPortfolio","kUnsupportedAction"), obTokenMgr.GetData(strToken,stBackPage), strToken
	End If
End Sub
%>
