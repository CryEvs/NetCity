<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strTermTypeIndex, strTermID
If Not HasUserRole(rlAdmin) Then GenerateError obLanguage("Common","kErrPageAccess")

Call objNSNET.ClearSchoolWizard(strSchoolID)
	RedirectTo obTokenMgr.GetData(strToken,stBackPage), Null
%>
