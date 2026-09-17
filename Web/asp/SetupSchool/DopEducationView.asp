<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="DopEducationView_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleDopEducation") & " " & GreenText(objNSNET.GetUserNickName(strStudentID))
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStudents
 	bTabInternalPage = True
End Function

Sub DrawButtons()
	If bMaySave Then
		ButtonSave "saveInfo()", obLanguage("Common","kSave")
		ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
	End If
End Sub

Sub specialDraw()%>
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("UID", strStudentID))%><%
	Call DrawButtonsFilters(True, "main")
End Sub
%>
