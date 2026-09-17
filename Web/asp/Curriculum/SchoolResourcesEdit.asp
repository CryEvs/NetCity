<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim objRsGroups, objRsLinks, bNoGroups, bNoLinks, strGroupID, strLinkID

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitleSchoolResourcesEdit")
End Function

Sub ReadState()
	If Not bIsStaff Then GenerateError obLanguage("Common","kErrPageAccess")
	strGroupID = GetSafeID( Request("PGRID"), "0" )
End Sub

Sub Main
	Set objRsGroups = objNSNET.GetSchoolResourcesGroupTree(strSchoolID, 0)
	bNoGroups = objRsGroups.EOF

	If (Not bNoGroups) And (strGroupID="0" Or strGroupID="-1") Then strGroupID = CStr(objRsGroups("GROUPID"))

	Set objRsLinks = objNSNET.GetSchoolResourcesLinkList(strGroupID)
	bNoLinks = objRsLinks.EOF
	If bNoLinks Then strLinkID = "0" Else strLinkID = objRsLinks("RESOURCEID")
End Sub

Sub onHead()
%>
<SCRIPT><!--
function createNewGroup(){
	var form = document.GroupList;
	form.elements["ACT"].value = "newgroup";
	DoSubmit(form, "");
}
<%If Not bNoGroups Then%>
	function editGroup(){
		var form = document.GroupList;
		var el = form.elements["PGRID"];
		if( el.selectedIndex == -1){
			alert(language.Generic.ResourceGroups.kSelectGroupForEdit);
			return;
		}
		form.elements["ACT"].value = "savegroup";
		DoSubmit(form, "");
	}
	function removeGroup(){
		if( isDBBusy() ) return false;
		var form = document.GroupList;
		if( form.elements['PGRID'].selectedIndex == -1){
			alert(language.Generic.ResourceGroups.kSelectGroupForDel);
			return;
		}
		$.show.confirmation(language.Generic.Curriculum.kGroupCurrDelConfirm).then(function() {
			form.elements["ACT"].value = "deletegroup";
			setDBBusy();
			DoSubmit(form, "SchoolResourcesSave.asp");
		});
	}
	function createNewLink(){
		var form = document.LinkList;
		var element = form.elements["LINKID"].value = "0";
		DoSubmit(form, "");
	}
	function editLink(){
		var form = document.LinkList;
		if( form.elements['LINKID'].selectedIndex == -1){
			alert(language.Generic.ResourceGroups.kSelectLinkForEdit);
			return;
		}
		form.elements["ACT"].value = "savelink";
		DoSubmit(form, "");
	}
	function removeLink(){
		if( isDBBusy() ) return false;
		var form = document.LinkList;
		if( form.elements['LINKID'].selectedIndex == -1){
			alert(language.Generic.ResourceGroups.kSelectLinkForDel);
			return;
		}
		$.show.confirmation(language.Generic.ResourceGroups.kAreYouSureToDeleteLink).then(function() {
			form.elements["ACT"].value = "deletelink";
			setDBBusy();
			DoSubmit(form, "SchoolResourcesSave.asp");
		});
	}
<%End If%>

function Back() {
	goBack(document.GroupList, 'SchoolResources.asp');
}
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
	Dim i, strID%>

	<div class="row">
		<div class="col-md-6">
			<%OpenPanel obLanguage("Curriculum","kResourceGroups"), "groups", False %>
				<form NAME="GroupList" METHOD="post" ACTION="SRGroupEdit.asp" class="form-horizontal">
					<%=WriteObligatoryTags()%>
					<%=WriteHiddenTags(Array("ACT", "newgroup"))%><%

					OpenBtnGroup

					Call ButtonCreate("createNewGroup()", obLanguage("Buttons","kCreate"))
					If Not bNoGroups Then
						ButtonEdit "editGroup()", obLanguage("ResourceGroups","kEditGroup")
						ButtonDel "removeGroup()", obLanguage("ResourceGroups","kDelGroup")
					End If
		
					CloseBtnGroup

					If bNoGroups Then%>
						<h3><%=obLanguage("Curriculum","kNoGroupsInCatalog")%></h3>
						<%=WriteHiddenTags(Array("PGRID", "0"))%><%
					Else%>
						<div class="row">
							<div class="col-md-12"><%
								OpenFormGroup obLanguage("ResourceGroups","kSelectGroup")%>
								<select name="PGRID" class="form-control" onChange="JavaScript:ok('GroupList','SchoolResourcesEdit.asp')"><%
									While Not objRsGroups.EOF
										strID = CStr(objRsGroups("GROUPID"))
										Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
										If strID = strGroupID Then Response.Write " SELECTED "
										Response.Write ">"
										For i = 1 To CLng(objRsGroups("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
										Response.Write Server.HTMLEncode(objRsGroups("GROUPNAME"))
										Response.Write "</OPTION>"
										objRsGroups.MoveNext
									WEnd%>
								</select><%
								CloseFormGroup%>
							</div>
						</div><%
					End If%>
				</form>
			<%ClosePanel %>

			<%If Not bNoGroups Then
				OpenPanel obLanguage("Curriculum","kLinks"), "links", False %>
					<form NAME="LinkList" METHOD="post" ACTION="SRLinkEdit.asp">
						<%=WriteObligatoryTags()%>
						<%=WriteHiddenTags(Array("PGRID", strGroupID, "ACT", "newlink"))%><%

						OpenBtnGroup
			
						Call ButtonCreate("createNewLink()", obLanguage("Buttons","kCreate"))
						If Not bNoLinks Then
							Call ButtonEdit("editLink()", obLanguage("ResourceGroups","kEditLink"))
							Call ButtonDel("removeLink()", obLanguage("ResourceGroups","kDelLink"))
						End If
			
						CloseBtnGroup

						If bNoLinks Then%>
							<h3><%=obLanguage("ResourceGroups","kNoLinksInGroup")%></h3>
							<%=WriteHiddenTags(Array("LINKID", "0"))%><%
						Else%>
							<div class="row">
								<div class="col-md-12">
									<b><%=obLanguage("ResourceGroups","kSelectLinkFromGroup")%>:</b>
									<select NAME="LINKID" SIZE="7" class="form-control" style="overflow-y: auto;">
										<%PopulateSelect objRsLinks, "RESOURCEID", "URL", strLinkID%>
									</select>
								</div>
							</div><%
						End If%>
					</form><%
				ClosePanel
			End If%>
		</div>
	</div><%
End Sub%>