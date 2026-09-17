<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/qadd_vb.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/qadd.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleParentQAdd")
End Function

Sub ReadState()
	strBackPage = Request("BACK") & ""
	If IsDull(strBackPage) Then strBackPage = "/angular/school/users/parents/"
	Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
	strPagePostTo = "SaveParentInfoQAdd.asp"
	strListTitle = obLanguage("SetupSchoolUI","kListParentQAdd")
	bIsBDateObligatory = False
End Sub

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbParents
End Function

Sub Main()
	If Not HasUserRight(arUsersEditStudents) Then GenerateError obLanguage("Common","kErrPageAccess")
	QuickAddInit
End Sub

Sub onHead()
	Dim bStudent 

	bStudent = (InStrRev(Request.ServerVariables("SCRIPT_NAME"),"Student") > 0) 
	qadd_edit_name = Array("FN", "MN", "LN", "GN", "LON", "PW", "PW2", "ChangePW", "PCM", "EM", "BDT")
	Call qAddScript()
%>
	<script>
		function Back() {
			goBack(document.UserInfo, "<%=strBackPage%>");
		}
	</script>
<%
	
End Sub
%>
