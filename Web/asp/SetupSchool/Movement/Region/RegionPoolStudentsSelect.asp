<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE FILE="RegionPoolStudents_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Movement/MoveBook_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dctSelectedUsers
Dim i, strUID
Dim strBackPage, strGoalPage

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMoveBookEdit)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("PoolStudents","kTitleRegionPoolStudentsSelect",strFunctionalityType)
End Function

Sub ReadStateSpecial()
	Dim strEOID, strDepartEOID

	' navigation and selection
	strBackPage = GetSafeStr(Request("BackPage"), -1, Null)
	strGoalPage = GetSafeStr(Request("GoalPage"), -1, Null)

	If Not IsDull(Request("Finish")) Then

		Set dctSelectedUsers = CreateObject("NetCity.Storage")
		' set real selection
		For i = 1 To Request("Students").Count
			strUID = Request("Students")(i)
			strEOID = Request("EOID_" & strUID)
			strDepartEOID = Request("DEPARTEOID_" & strUID)
			dctSelectedUsers.Item(strUID) = Array(strEOID, kEnrollFrom_RegionPool, Empty)
		Next

		Call obTokenMgr.SetData(strToken, stSelectedUsers, dctSelectedUsers)
		RedirectTo strGoalPage & "?", Array("RestoreParams", "1", "ByDirecting", "")
	End If

	If Not IsDull(Request("GoBack")) Then
		Call obTokenMgr.SetData(strToken, stSelectedUsers, Null)
		RedirectTo strBackPage & "?", Array("RestoreParams", "1")
	End If
End Sub

Sub WriteStateSpecial()
	Call obTokenMgr.SetData(strToken, stSelectedUsers, dctSelectedUsers)
End Sub

Sub onHeadSpecial()%>
	<SCRIPT><!--
		function Back() {
			var form = document.MainForm;

			form.Finish.value = "";
			form.GoBack.value = "1";

			$(document).trigger('showProcessing');
			goBack(form, "");
		}

		<%If lngStudentCnt <> 0 Then%>
			function canSubmit() {
				return true;
			}

			function AddUsers(){
				if($('input[name=Students][type=checkbox]:checked').length < 1) {
					alert(language.Movement.kSelectStudentsForDoc);
					return;
				}
	
				var form = document.MainForm;
				form.Finish.value = "1";
				form.GoBack.value = "";

				$(document).trigger('showProcessing');
				ok("MainForm", "");
			}

			function changeUnsuitable(obj) {
				if(obj.checked) $.show.confirmation(language.PoolStudents.kConfirmEnrollUnsuitable).fail(function(){ obj.checked = false; });
			}
		<%End If%>
	//--></SCRIPT><%
End Sub

Sub DrawButtons()
	ButtonAdd "AddUsers();", obLanguage("Movement","kAddStudentsToDoc",strFunctionalityType)
End Sub

Function WriteSpecialTags()
	WriteHiddenTags(Array("GoalPage", strGoalPage, "Finish", "", "GoBack", ""))
End Function

Sub DrawFiltersSpecial(strForm)
	Call DrawSimpleFilterRow(obLanguage("PoolStudents","kAccessCategory"), "ViewType", Array("1", obLanguage("PoolStudents","kOut"), "6", obLanguage("PoolStudents","kGraduation")), nViewType, Null, "ok('MainForm','')")%>
	<hr><%
End Sub%>