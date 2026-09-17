<% ' © 2007-2012 IRTech. All rights reserved.
Sub ProcessPortfolioAction( strPortfolioID, strGroupID, strAction )
	If Not bIsDebug Then On Error Resume Next

	Dim objCmd, objRs
	Dim strGroupName, nParentGroupID, nNum
	Dim strLinkURL, strLinkID, strLinkName
	Dim strDocID, strDocName, strDescr
	Dim objDocInfo
	Dim objFSO, strDBFolderName, strFileName
	Dim transaction

	If strAction = "deletedoc"  Then
		strDocID = GetSafeID( Request.Form("DOCID"), NULL )
		Call objNSNET.RemovePortfolioDoc(strDocID)
		TestError obLanguage("SetupSchoolPortfolio","kErrorCannotDeleteDoc")
	Elseif strAction = "savelink" Then
		strLinkID = GetSafeID( Request.Form("LINKID"), NULL )
		strLinkURL = Trim( GetSafeStr( Request.Form("LURL"), kMaxURL, NULL ) )
		strLinkName = GetSafeStr( Request.Form("LNAME"), -1, "" )
		Call objNSNET.EditPortfolioLink(strLinkID, strLinkName, strLinkURL )
		TestError obLanguage("SetupSchoolPortfolio","kEditPortfolioLinkFailed")
	ElseIf strAction = "deletelink"  Then
		strLinkID = GetSafeID( Request.Form("LINKID"), NULL )
		Call objNSNET.RemovePortfolioLink(strLinkID )
		TestError obLanguage("SetupSchoolPortfolio","kDelPortfolioLinkFailed")
	ElseIf strAction = "newlink" Then
		strLinkURL = Trim( GetSafeStr( Request.Form("LURL"), kMaxURL, NULL ) )
		If strLinkURL <> "http://" Then
			strLinkName = GetSafeStr( Request.Form("LNAME"), -1, "" )
			Call objNSNET.AddPortfolioLink(strGroupID, strLinkName, strLinkURL )
			TestError obLanguage("SetupSchoolPortfolio","kAddPortfolioLinkFailed")
		End If
	Elseif strAction = "savegroup" Then
		strGroupName = Trim( GetSafeStr( Request.Form("GRNAME"), kMaxLen_GroupName, NULL ) )
		nParentGroupID = CLng(GetSafeID( Request.Form("ParentGRID"), NULL ) )
		nNum = CLng(GetSafeLng( Request.Form("GRNum"), NULL ) )

    	transaction = objNSNET.GetTransaction()
		Call objNSNET.EditPortfolioGroup_WT(transaction, strGroupID, strGroupName, nParentGroupID, nNum )
		TestErrorWithTransaction transaction, obLanguage("SetupSchoolPortfolio","kEditPortfolioGroupFailed")
    	objNSNET.CommitTransaction(transaction)
	ElseIf strAction = "deletegroup"  Then
    	transaction = objNSNET.GetTransaction()
		Call objNSNET.RemovePortfolioGroup_WT(transaction, strGroupID )
		TestErrorWithTransaction transaction, obLanguage("SetupSchoolPortfolio","kRemovePortfolioGroupFailed")
    	objNSNET.CommitTransaction(transaction)

		strGroupID = "0"
	ElseIf strAction = "newgroup" Then
		strGroupName = Trim( GetSafeStr( Request.Form("GRNAME"), kMaxLen_GroupName, NULL ) )
		nParentGroupID = CLng(GetSafeID( Request.Form("ParentGRID"), NULL ) )
		nNum = CLng(GetSafeLng( Request.Form("GRNum"), NULL ) )

    	transaction = objNSNET.GetTransaction()
		strGroupID = objNSNET.AddPortfolioGroup_WT(transaction, strPortfolioID, strGroupName, nParentGroupID, nNum, strUserID )
		TestErrorWithTransaction transaction, obLanguage("SetupSchoolPortfolio","kAddPortfolioGroupFailed")
    	objNSNET.CommitTransaction(transaction)
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kUnsupportedAction")
	End If
End Sub
%>
