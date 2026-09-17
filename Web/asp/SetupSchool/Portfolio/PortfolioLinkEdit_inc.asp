<% ' © 2007-2012 IRTech. All rights reserved.

Dim strLinkID, strGroupID
Dim strLinkName, strLinkURL, strGroupName

Function GetPageTitle()
	If strLinkID <> "0" Then GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitlePortfolioLinkEdit") Else GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitlePortfolioLinkCreate")
End Function

Sub GetPortfolioLinkInfo()
	If Not bIsDebug Then On Error Resume Next

	If strGroupID <> "0" Then
		strGroupName = objNSNET.GetPortfolioGroupName(strGroupID)
		TestError obLanguage("ResourceGroups","kCantGetGroupName")
	Else
		strGroupName = ""
	End If

	If strLinkID <> "0" Then
		Call objNSNET.GetPortfolioLinkInfo(strLinkID, strLinkName, strLinkURL )
		TestError obLanguage("SetupSchoolPortfolio","kErrorCannotGetLinkInfo")
	Else
		strLinkName = ""
		strLinkURL = "http://"
	End If
End Sub

Sub scriptFunc()
End Sub

Sub onHead()%>
<SCRIPT><!--
	function canSubmit() {
		var form = document.forms["LinkEdit"];
		if(trimStr(form.elements["LURL"].value ) == "") {
			alert(language.Generic.SetupSchoolPortfolio.kErrorLinkCannotBeEmpty);
			form.elements["LURL"].focus();

			return false;
		}

		var lname = form.elements["LNAME"].value;
		if (lname)
			if (lname.length>200) {
				alert(language.Generic.SetupSchoolPortfolio.kErrorDescriptionTooLong);
				form.elements["LNAME"].focus();
				return false;
			}
		return true;
	}
	//--></SCRIPT> <%
	Call scriptFunc()
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = ""
End Function

Sub onDrawPage()%>
	<FORM NAME="LinkEdit" METHOD="post" ACTION="PersonalPortfolioSave.asp" onsubmit="return false;" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WritePortfolioObligatoryTags()%><%

		OpenBtnGroup
		Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
		Call ButtonReset("resetScreen('LinkEdit')", obLanguage("Common","kCancel"))
		CloseBtnGroup%>

		<div class="row">
			<div class="col-md-7"><%
				Call DrawTextRow(obLanguage("ResourceGroups", "kGroupName"), strGroupName, "")
				Call DrawInputRow(obLanguage("SetupSchoolPortfolio", "kLinkURL"), strLinkURL, "LURL", "text", 100, kMaxURL, "")
				Call DrawInputRow(obLanguage("SetupSchoolPortfolio", "kLinkName"), strLinkName, "LNAME", "area", 100, 6, "")%>
			</div>
		</div>
	</FORM><%
End Sub%>