<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioFileSave_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
'	ACT={newdoc|deletedoc|savedoc}
'	PGRID=<GroupID>
'	DOCID=<DocID>
'	DOCNAME=<DocName>
'	DESCR=<DocDEscr>

Dim strAction, strGroupID
Dim strPortfolioID
Dim bIsPortfolioExists

If Not bIsDebug Then On Error Resume Next
SetScriptTimeOut 900

strAction = GetSafeStr( requestData("ACT"), 100, NULL )
strGroupID = GetSafeID( requestData("PGRID"), NULL )

bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

If bIsPortfolioExists Then
	Call SavePortfolioDoc( strPortfolioID )
Else
	Call DisposeUpload()
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If
Call DisposeUpload()
RedirectTo "PersonalPortfolioEdit.asp", Array("PGRID", strGroupID)
%>
