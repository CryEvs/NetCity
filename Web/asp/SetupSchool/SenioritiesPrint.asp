<!-- #INCLUDE VIRTUAL="/asp/headerPrint.asp" -->
<!-- #INCLUDE FILE="SenioritiesPrn_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub onDrawPage()
	Dim strTitle
	
	strTitle = obLanguage("SetupSchool","kTitleSenioritiesEdit") & ": " & objNSNET.GetUserNickName(strStaffID) & " " & obLanguage("SetupSchool","kTitleStateOn") & " " & Date2Str(dtSeniorityOn)
	Response.Write GetPageTitlePrint(strTitle, Empty)
	Call DrawTable()
	Response.Write GetPageVerPrint()
End Sub
%>
