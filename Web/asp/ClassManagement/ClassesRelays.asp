<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/ClassManagement/ClassesRelays_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("ClassManagement","kTitleRelays") & obLanguage("Common","kClass_es",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCrtClass
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	If HasUserRight( arClassMgmCreateClass ) Then bAll=True :  hasUserRightsOnPage = True: Exit Function
	If HasUserRight( arClassMgmViewClassSubjAll ) Then bAll=False : hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialMain()
	nWizard = 0
End Sub
%>
