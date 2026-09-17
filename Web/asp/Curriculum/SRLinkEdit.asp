<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim strAct, strLinkID, strGroupID, strLinkName, strLinkURL, strGroupName
Dim bNewLink

Sub ReadState()
	If Not bIsStaff Then GenerateError obLanguage("Common","kErrPageAccess")
	strGroupID = GetSafeID( Request("PGRID"), "0" )
	strLinkID = GetSafeID( Request("LINKID"), "0" )
	strAct = GetSafeStr(Request("ACT"),20, "newlink" )
	bNewLink = (strAct = "newlink" Or strLinkID = "0")
End Sub

Function GetPageTitle()
	If Not bNewLink Then GetPageTitle = obLanguage("Curriculum","kTitleSRLinkEdit") Else GetPageTitle = obLanguage("Curriculum","kTitleSRLinkCreate")
End Function

Sub Main
	On Error Resume Next

	If strGroupID <> "0" Then
		strGroupName = objNSNET.GetSchoolResourcesGroupName(strGroupID)
		TestError(obLanguage("ResourceGroups","kCantGetGroupName"))
	Else
		strGroupName = ""
	End If

	If Not bNewLink Then
		Call objNSNET.GetSchoolResourcesLinkInfo(strLinkID, strLinkName, strLinkURL)
		TestError(obLanguage("Curriculum","kCantGetLinkInfo"))
	Else
		strLinkName = ""
		strLinkURL = "http://"
	End If
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function canSubmit() {
			var form = document.forms["LinkEdit"];
			if( trimStr( form.elements["LURL"].value ) == "" )
			{
				alert(language.Generic.Curriculum.kErrLinkCantBeEmpty);
				form.elements["LURL"].focus();
				return false;
			}

			var lname = form.elements["LNAME"].value;
			if (lname)
				if (lname.length>200) {
					alert(language.Generic.Curriculum.kErrDescriptionTooLong);
					form.elements["LNAME"].focus();
					return false;
				}
			return true;
		}

		function back() {
			var form = document.LinkEdit;
			goBack(form, 'SchoolResourcesEdit.asp');
		}

		function saveChanges(){
			ok_check_db('LinkEdit', 'SchoolResourcesSave.asp');
		}
	//--></SCRIPT><%
End Sub

Sub onDrawPage()%>
	<FORM NAME="LinkEdit" METHOD="post" ACTION="SchoolResourcesSave.asp" onsubmit="return false;" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PGRID",strGroupID,"LINKID",strLinkID,"ACT",strAct))%><%

		OpenBtnGroup

		Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
		Call ButtonReset("resetScreen('LinkEdit')", obLanguage("Common","kCancel"))
		
		CloseBtnGroup%>

		<div class="row">
			<div class="col-md-7"><%
				Call DrawTextRow(obLanguage("ResourceGroups","kGroupName"), strGroupName, "")
				Call DrawInputRow(obLanguage("Curriculum","kLinkURL"), strLinkURL, "LURL", "text", 100, kMaxURL, "")
				Call DrawInputRow(obLanguage("Curriculum","kLinkDescr"), strLinkName, "LNAME", "area", 100, 6, "")%>
			</div>
		</div>
	</FORM><%
End Sub%>