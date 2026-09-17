<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim nPortfolioID
Dim strName

strName = GetSafeStr( Request("PFNAME"), kMaxLen_PortfolioName, NULL )

nPortfolioID = objNSNET.CreateProjectPortfolio(strUserID, strName )
RedirectTo "ProjectPortfolios.asp", Array("PFID",nPortfolioID)
%>
