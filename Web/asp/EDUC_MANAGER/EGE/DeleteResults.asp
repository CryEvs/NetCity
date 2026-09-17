<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/EGE/EGE_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim strGlobalYearID

Call InitEgeComponent()
strGlobalYearID = GetSafeLng(Request("CMNYEAR"), Null)

Call objEGEComponent.DeleteResults(strGlobalYearID, strEmId)
TestError obLanguage("Import","kCantDeleteEGEResults")

Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Import","kDeletingEGEResultsSuccess")))
RedirectTo "EGE.asp", Null
%>
