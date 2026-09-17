<!-- #INCLUDE FILE=sa_inc.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.
Dim title

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kDiagnos")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Diagnos
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Diagnos
 End Function

Sub DrawButtons()
	SimpleButton "DoSubmit(document.MenuForm, 'diagMovement.asp')", obLanguage("MenuFolders","kMovement")

	If PERSON_DATA Then
		SimpleButton "DoSubmit(document.MenuForm, 'userClones.asp')", "Дубли"
		SimpleButton "DoSubmit(document.MenuForm, 'userDocuments.asp');", obLanguage("MenuFolders","kFNDocuments")
	End If
End Sub

Sub onDrawPage()
	DrawButtonPanel
End Sub
	
Function IsTopPage()
	IsTopPage = True
End Function
%>
