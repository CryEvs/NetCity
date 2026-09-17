<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim nPortfolioID

nPortfolioID = objNSNET.CreatePersonalPortfolio(strUserID )
RedirectTo "PersonalPortfolios.asp" , null
%>
