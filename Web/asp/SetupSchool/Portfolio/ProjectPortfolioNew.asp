<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleProjectPortfolioNew")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbProjectPortfolios
 End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub onHead()%>
<SCRIPT><!--
	function Back() {
		goBack(document.PortfolioEdit, 'ProjectPortfolios.asp');
	}

	function saveChanges() {
		ok_check_db('PortfolioEdit', 'ProjectPortfolioCreate.asp');
	}

	function canSubmit() {
		var el = document.PortfolioEdit.PFNAME;
		el.value = trimStr(el.value);

		if(el.value == "") {
			alert(language.Generic.SetupSchoolPortfolio.kErrEmptyPortfolioName);
			el.focus();

			return false;
		}

		return true;
	}

	function CheckEnter(event){if (event.keyCode == 13) saveChanges();}
//--></SCRIPT><%
End Sub

Sub onDrawPage() %>
	<FORM NAME="PortfolioEdit" METHOD="post" onsubmit="return false;" class="form-horizontal">
		<%=WriteObligatoryTags()%><%
		
		OpenBtnGroup
		Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
		Call ButtonReset("resetScreen('PortfolioEdit')", obLanguage("Common","kCancel"))
		CloseBtnGroup%>
		
		<div class="row">
			<div class="col-md-7">
				<%Call DrawInputRow(obLanguage("SetupSchoolPortfolio","kPortfolioName"), "", "PFNAME", "text", 45, kMaxLen_PortfolioName, "")%>
			</div>
		</div>
	</FORM><%
End Sub%>
