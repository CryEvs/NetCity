<% ' © 2007-2008 IRTech. All rights reserved.
Dim objRsGroups, objRsLinks, objRsDocs
Dim bIsGroupsExists, bIsLinksExists, bIsDocsExists
Dim strSavePageURL, strBackPageURL, strRightsPageURL

bIsGroupsExists = False
bIsLinksExists = False
bIsDocsExists = False

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitlePortfolioEdit")
End Function

Sub GetPortfolioData(strPortfolioID)
	If Not bIsDebug Then On Error Resume Next

	Set objRsGroups = GetPortfolioGroupTree( strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioTree")

	bIsGroupsExists = Not objRsGroups.EoF
	If (bIsGroupsExists) And (strGroupID = "0") Then strGroupID = CStr(objRsGroups("GROUPID"))

	Set objRsLinks = objNSNET.GetPortfolioResources(strPortfolioID, strGroupID, kResourceTypeLink)
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioResources")

	objRsLinks.Filter = "GROUPID=" & strGroupID
	bIsLinksExists = Not objRsLinks.EoF
	If bIsLinksExists Then strLinkID = objRsLinks("RESOURCEID") Else strLinkID = "0"

	Set objRsDocs = objNSNET.GetPortfolioResources(strPortfolioID, strGroupID, kResourceTypeDocument)
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioResources")

	objRsDocs.Filter = "GROUPID=" & strGroupID
	bIsDocsExists = Not objRsDocs.EoF
	If bIsDocsExists Then strDocID = objRsDocs("RESOURCEID") Else strDocID = "0"
End Sub

Sub CustomScripts()
End Sub

Sub onHead()%>
<SCRIPT><!--
	function createNewGroup() {
		if( isDBBusy() ) return false;

		var form = document.forms["GroupList"];
		form.elements["ACT"].value = "newgroup";

		setDBBusy();
		DoSubmit(form, "");
	}

	<%If bIsGroupsExists Then%>
		function editGroup() {
			if(isDBBusy()) return false;

			var form = document.forms["GroupList"];
			var el = form.elements["PGRID"];
			if( el.selectedIndex == -1){
				alert(language.Generic.ResourceGroups.kSelectGroupForEdit);
				return;
			}

			form.elements["ACT"].value = "savegroup";

			setDBBusy();
			DoSubmit(form, "");
		}

		function removeGroup() {
			if( isDBBusy() ) return false;
			var form = document.forms["GroupList"];
			if( form.elements['PGRID'].selectedIndex == -1){
				alert(language.Generic.ResourceGroups.kSelectGroupForDel);
				return;
			}

			$.show.confirmation(language.Generic.SetupSchoolPortfolio.kGroupPortDelConfirm).then(function(){
				form.action = "<%=strSavePageURL%>"
				form.elements["ACT"].value = "deletegroup";
				setDBBusy();
				DoSubmit(form, "");
			});
		}<%
	End If

	If bIsLinksExists Then %>
		function editLink() {
			if(isDBBusy()) return false;

			var form = document.forms["LinkList"];

			if(form.elements['LINKID'].selectedIndex == -1) {
				alert(language.Generic.ResourceGroups.kSelectLinkForEdit);
				return;
			}

			form.elements["ACT"].value = "savelink";
			setDBBusy();
			DoSubmit(form, "");
		}

		function removeLink() {
			if(isDBBusy()) return false;

			var form = document.forms["LinkList"];

			if( form.elements['LINKID'].selectedIndex == -1) {
				alert(language.Generic.ResourceGroups.kSelectLinkForDel);
				return;
			}

			$.show.confirmation(language.Generic.ResourceGroups.kAreYouSureToDeleteLink).then(function() {
				form.action = "<%=strSavePageURL%>"
				form.elements["ACT"].value = "deletelink";
				setDBBusy();
				DoSubmit(form, "");
			});
		}
	<%End If

	If bIsGroupsExists Then%>
		function createNewDoc() {
			if(isDBBusy()) return false;

			var form = document.forms["DocList"];
			form.elements["DOCID"].value = "0";

			setDBBusy();
			DoSubmit(form, "");
		}

		function createNewLink() {
			if(isDBBusy()) return false;

			var form = document.forms["LinkList"];
			var element = form.elements["LINKID"].value = "0";

			setDBBusy();
			DoSubmit(form, "");
		}
	<%End If

	If bIsDocsExists Then%>
		function editDoc() {
			if(isDBBusy()) return false;
			var form = document.forms["DocList"];

			if( form.elements['DOCID'].selectedIndex == -1){
				alert(language.Generic.ResourceGroups.kSelectDocForEdit);
				return;
			}

			form.elements["ACT"].value = "savedoc";
			setDBBusy();
			DoSubmit(form, "");
		}

		function removeDoc() {
			if(isDBBusy()) return false;

			var form = document.forms["DocList"];
			if(form.elements['DOCID'].selectedIndex == -1) {
				alert(language.Generic.ResourceGroups.kSelectDocForDel);
				return;
			}

			$.show.confirmation(language.Generic.ResourceGroups.kAreYouSureToDeleteDoc).then(function() {
				form.action = "<%=strSavePageURL%>"
				form.elements["ACT"].value = "deletedoc";
				setDBBusy();
				DoSubmit(form, "");
			});
		}
	<%End If%>

	function Back() {
		goBack(document.GroupList, '<%=strBackPageURL%>');
	}

	function goRights() {
		DoSubmit(document.GroupList, '<%=strRightsPageURL%>');
	}

	<%Call CustomScripts()%>
//--></SCRIPT><%
End Sub%>