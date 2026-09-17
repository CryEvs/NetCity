<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioSave_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strAction, strGroupID
Dim nPortfolioID
Dim bIsPortfolioExists

If Not bIsDebug Then On Error Resume Next

strAction = GetSafeStr( Request.Form("ACT"), 100, NULL )
strGroupID = GetSafeID( Request.Form("PGRID"), NULL )

bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, nPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

If bIsPortfolioExists Then
	Call ProcessPortfolioAction( nPortfolioID, strGroupID, strAction )
Else
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If

RedirectTo "PersonalPortfolioEdit.asp", Array("PGRID",strGroupID)
%>
