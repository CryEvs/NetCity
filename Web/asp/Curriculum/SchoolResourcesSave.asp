<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Const kGroupNameLen=100

Dim strAction, strLinkURL, strLinkID, strLinkName, strGroupID,strGroupName, objCmd, objRs, strClause, strClause2
Dim nParentGroupID, nNum

On Error Resume Next

If Not bIsStaff Then GenerateError obLanguage("Common","kErrPageAccess")
strAction = GetSafeStr( Request.Form("ACT"), 100, NULL )
strGroupID = GetSafeID( Request.Form("PGRID"), NULL )

If strAction = "savelink" Then
	strLinkID = GetSafeID( Request.Form("LINKID"), NULL )
	strLinkURL = Trim( GetSafeStr( Request.Form("LURL"), kMaxURL, NULL ) )
	strLinkName = GetSafeStr( Request.Form("LNAME"), -1, "" )

  Call objNSNET.EditSchoolResourcesLink(strLinkID, strLinkName, strLinkURL)
	TestError(obLanguage("Curriculum","kCantEditLink"))
ElseIf strAction = "deletelink"  Then
	strLinkID = GetSafeID( Request.Form("LINKID"), NULL )

  Call objNSNET.RemoveSchoolResourcesLink(strLinkID)
	TestError(obLanguage("Curriculum","kCantDeleteLink"))
ElseIf strAction = "newlink" Then
	strLinkURL = Trim( GetSafeStr( Request.Form("LURL"), kMaxURL, NULL ) )
	If strLinkURL <> "http://" Then
    strLinkName = GetSafeStr( Request.Form("LNAME"), -1, "" )
	  
    Call objNSNET.AddSchoolResourcesLink(strGroupID, strLinkName, strLinkURL)
    TestError(obLanguage("Curriculum","kCantAddLink"))
	End If
ElseIf strAction = "savegroup" Then
	strGroupName = Trim( GetSafeStr( Request.Form("GRNAME"), kGroupNameLen, NULL ) )
	nParentGroupID = CLng(GetSafeID( Request.Form("ParentGRID"), NULL ) )
	nNum = CLng(GetSafeLng( Request.Form("GRNum"), NULL ) )

  Call objNSNET.EditSchoolResourcesGroup(strGroupID, strGroupName, nParentGroupID, nNum)
	TestError(obLanguage("ResourceGroups","kCantEditGroup"))
ElseIf strAction = "deletegroup"  Then

  Call objNSNET.RemoveSchoolResourcesGroup(strGroupID)
	TestError(obLanguage("ResourceGroups","kCantDeleteGroup"))
	strGroupID = "0"
ElseIf strAction = "newgroup" Then
	strGroupName = Trim( GetSafeStr( Request.Form("GRNAME"), kGroupNameLen, NULL ) )
	nParentGroupID = CLng(GetSafeID( Request.Form("ParentGRID"), NULL ) )
	nNum = CLng(GetSafeLng( Request.Form("GRNum"), NULL ) )
 
  strGroupID = objNSNET.AddSchoolResourcesGroup(strSchoolID, strGroupName, nParentGroupID, nNum)
  TestError(obLanguage("Curriculum","kCantAddGroup"))
Else
	GenerateError(obLanguage("Curriculum","kUnknownAction"))
End If

Response.Redirect "SchoolResourcesEdit.asp?" & Ver() & "&PGRID="& strGroupID &"&AT=" & strToken
%>
