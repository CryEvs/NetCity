<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioFileSave_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
'	ACT={newdoc|deletedoc|savedoc}
'	PGRID=<GroupID>
'	DOCID=<DocID>
'	DOCNAME=<DocName>
'	DESCR=<DocDEscr>

Dim strAction, strGroupID
Dim strPortfolioID
Dim bCanEditProjectlPortfolio

If Not bIsDebug Then On Error Resume Next

strAction = GetSafeStr( requestData("ACT"), 100, NULL )
strPortfolioID = GetSafeID( requestData("PFID"), NULL )
strGroupID = GetSafeID( requestData("PGRID"), NULL )

bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

If bCanEditProjectlPortfolio Then
	Call SavePortfolioDoc( strPortfolioID )
Else
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If

Call DisposeUpload()
RedirectTo "ProjectPortfolioEdit.asp", Array("PFID",strPortfolioID, "PGRID",strGroupID)
%>
