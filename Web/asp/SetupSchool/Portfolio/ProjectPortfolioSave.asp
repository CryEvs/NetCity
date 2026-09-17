<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioSave_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID
Dim strAction, strGroupID
Dim bCanEditProjectlPortfolio

Dim strName

If Not bIsDebug Then On Error Resume Next

strAction = GetSafeStr( Request.Form("ACT"), 100, NULL )
strPortfolioID = GetSafeID( Request.Form("PFID"), NULL )
strGroupID = GetSafeID( Request.Form("PGRID"), NULL )

bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

If bCanEditProjectlPortfolio Then
	If strAction = "editName"  Then
		strName = GetSafeStr( Request("PFNAME"), kMaxLen_PortfolioName, NULL )
		Call objNSNET.EditProjectPortfolioName(strPortfolioID, strName )
		TestError obLanguage("SetupSchoolPortfolio","kErrorCannotEditName")
	Else
		Call ProcessPortfolioAction( strPortfolioID, strGroupID, strAction )
	End If
Else
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If

RedirectTo "ProjectPortfolioEdit.asp", Array( "PFID", strPortfolioID, "PGRID", strGroupID)
%>
