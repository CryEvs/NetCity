<!-- #INCLUDE Virtual="/asp/headersimple.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/ClassManagement/ClassesRelays_inc.asp -->

<% ' © 2007-2011 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRole(rlAdmin)
	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	readonly = False
End Function

Function GetWizardTitle()
	GetWizardTitle = obLanguage("ClassManagement","kTitleRelays") & obLanguage("Common","kClass_es",strFunctionalityType)
End Function

Sub SpecialMain()
	bAll = True
	nWizard = 1
End Sub
%>
