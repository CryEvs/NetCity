<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	ACT={deletedoc | newgroup|deletegroup|savegroup}
'	PGRID=<GroupID>
'	DOCID=<DocID>

Dim strAction, strGroupID, strGroupName
Dim nParentGroupID, nNum
Dim nResult
Dim strDocID, strDocName, strDescr, dtDocDate
Dim objDocInfo
Dim objFSO, strDBFolderName, strFileName
Dim objDocList
Dim nSchoolDocType

On Error Resume Next

If Not HasUserRight(arSchoolDocsEdit) Then GenerateError obLanguage("Common","kErrPageAccess")
strAction = GetSafeStr( Request.Form("ACT"), 100, NULL )
strGroupID = GetSafeID( Request.Form("PGRID"), NULL )

'*** Documents **************************************************************************	
If strAction = "deletedoc"  Then
	strDocID = GetSafeID( Request.Form("DOCID"), NULL )

	Call objNSNET.RemoveSchoolDoc(strDocID)
	TestError(obLanguage("SetupSchoolResources","kCantDeleteDoc",strFunctionalityType))
'*** Groups **************************************************************************	
ElseIf strAction = "savegroup" Then
	strGroupName = Trim( GetSafeStr( Request.Form("GRNAME"), kMaxLen_DocGroupName, NULL ) )
	nParentGroupID = CLng(GetSafeID( Request.Form("ParentGRID"), NULL ) )
	nNum = CLng(GetSafeLng( Request.Form("GRNum"), NULL ) )

'DB-specific
' запросы аналогичные как в Curriculum/SchoolResourcesSave.asp

'	objCon.BeginTrans
	transaction = objNSNET.GetTransaction()
	nResult = objNSNET.EditSchoolDocsGroup_WT(transaction, strGroupID, strGroupName, IIf(nParentGroupID=0, Null, nParentGroupID), nNum)
	Call TestErrorWithTransaction(transaction, obLanguage("ResourceGroups","kCantEditGroup"))
	If nResult = -1 Then
		Call GenerateErrorWithTransaction(transaction, obLanguage("SetupSchoolResources","kGroupNameExists"))
	End If
'	objCon.CommitTrans
    objNSNET.CommitTransaction(transaction)
ElseIf strAction = "deletegroup"  Then
'DB-specific
' запросы аналогичные как в Curriculum/SchoolResourcesSave.asp

	Call objNSNET.RemoveSchoolDocsGroup(strGroupID)
	TestError(obLanguage("ResourceGroups","kCantDeleteGroup"))
	strGroupID = "0"
ElseIf strAction = "newgroup" Then
	strGroupName = Trim( GetSafeStr( Request.Form("GRNAME"), kMaxLen_DocGroupName, NULL ) )
	nParentGroupID = CLng(GetSafeID( Request.Form("ParentGRID"), NULL ) )
	nNum = CLng(GetSafeLng( Request.Form("GRNum"), NULL ) )
	nSchoolDocType = GetSafeLng(obTokenMgr.GetData(strToken,stSchoolDocType), 1)

'DB-specific
' запросы аналогичные как в Curriculum/SchoolResourcesSave.asp

'	objCon.BeginTrans
    Dim transaction
	transaction = objNSNET.GetTransaction()
	strGroupID = objNSNET.AddSchoolDocsGroup_WT(transaction, strSchoolID, strGroupName, IIf(nParentGroupID=0, Null, nParentGroupID), nNum, IIf(nSchoolDocType=2, 1, Null))
	Call TestErrorWithTransaction(transaction, obLanguage("SetupSchoolResources","kCantCreateGroup"))
	If strGroupID = -1 Then
		Call GenerateErrorWithTransaction(transaction, obLanguage("SetupSchoolResources","kGroupNameExists"))
	End If
'	objCon.CommitTrans
    objNSNET.CommitTransaction(transaction)
Else
	GenerateError(obLanguage("SetupSchoolResources","kUnsupportedAction"))	
End If

Response.Redirect "SchoolDocsEdit.asp?" & Ver() & "&PGRID="& strGroupID &"&AT=" & strToken
%>
