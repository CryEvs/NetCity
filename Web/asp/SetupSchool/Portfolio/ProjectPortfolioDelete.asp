<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID
Dim objRsGroups, objRsDocs
Dim strGroupID, strDocID

strPortfolioID = GetSafeID( Request("PFID"), GetSafeID( obTokenMgr.GetData( strToken, stProjPortfolioID ), "0" ) )

Set objRsGroups = GetPortfolioGroupTree( strPortfolioID )
While Not objRsGroups.EOF
	strGroupID = CStr( objRsGroups("GROUPID") )
	Set objRsDocs = objNSNET.GetPortfolioResources(strPortfolioID, strGroupID, kResourceTypeDocument )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioResources")
	While Not objRsDocs.EOF
		strDocID = GetSafeID( objRsDocs("RESOURCEID"), NULL )

		Call objNSNET.RemovePortfolioDoc(strDocID)
		TestError obLanguage("SetupSchoolPortfolio","kErrorCannotDeleteDoc")
		objRsDocs.MoveNext
	Wend
	objRsGroups.MoveNext
Wend

Call objNSNET.DeleteProjectPortfolio(strPortfolioID )
Call obTokenMgr.SetData(strToken, stProjPortfolioID, "0")
RedirectTo "ProjectPortfolios.asp", Array("PFID",0)

Function GetPortfolioGroupTree( strPortfolioID )
	If Not bIsDebug Then On Error Resume Next
	Set GetPortfolioGroupTree = objNSNET.GetProjectPortfolioGroupTree(strUserID, strPortfolioID, 0 )
End Function
%>
