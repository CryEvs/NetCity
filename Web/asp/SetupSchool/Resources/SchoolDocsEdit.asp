<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objRsGroups, objRsDocs, bNoGroups, bNoDocs, strGroupID, strDocID
Dim nSchoolDocType
Dim bIsForService

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolResources", "kTitleSchoolDocsEdit")
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolDocsEdit)
End Function

Sub ReadState()
	strGroupID = GetSafeID(Request("PGRID"), "-1")
	nSchoolDocType = GetSafeLng(Request("SchoolDocType"), GetSafeLng(obTokenMgr.GetData(strToken,stSchoolDocType), 1))
End Sub

Sub Main
	Dim vSchoolDocType
	Dim objGroupInfo

	vSchoolDocType = IIf(nSchoolDocType = 2, 1, Null)
	Set objRsGroups = objNSNET.GetSchoolDocsGroupTree(strSchoolID, Null, vSchoolDocType)
	bNoGroups = objRsGroups.EOF
	If (Not bNoGroups) And (strGroupID = "-1") Then strGroupID = CStr(objRsGroups("GROUPID"))

	Set objRsDocs = objNSNET.GetSchoolDocList(strGroupID)
	bNoDocs = objRsDocs.EOF
	If bNoDocs Then strDocID = "0" Else strDocID = objRsDocs("SCHOOLDOCID")
	
	bIsForService = False
	If strGroupID <> "-1" Then
		Set objGroupInfo = objNSNET.GetSchoolDocsGroupInfo(strGroupID)
		If Not objGroupInfo.EOF Then
			bIsForService = (GetSafeLng(objGroupInfo("SERVICE_NUM"), 0) <> 0)
		End If
	End If
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function createNewGroup() {
			var form = document.forms["GroupList"];
			form.elements["ACT"].value = "newgroup";
			DoSubmit(form, "");
		}

		<%If Not bNoGroups Then%>
			function editGroup() {
				var form = document.forms["GroupList"];
				var el = form.elements["PGRID"];

				if(el.selectedIndex == -1) {
					alert(language.Generic.ResourceGroups.kSelectGroupForEdit);
					return;
				}

				form.elements["ACT"].value = "savegroup";
				DoSubmit(form, "");
			}

			function removeGroup() {
				var form = document.forms["GroupList"];

				if(form.elements['PGRID'].selectedIndex == -1) {
					alert(language.Generic.ResourceGroups.kSelectGroupForDel);
					return;
				}

				$.show.confirmation(language.SetupSchoolResources.kGroupDelConfirm).then(function() {
					form.elements["ACT"].value = "deletegroup";
					$(document).trigger('showProcessing');
					DoSubmit(form, "SchoolDocsSave.asp");
				});
			}

			function createNewDoc() {
				var form = document.forms["DocList"];
				if(bowser.msie)
					form.elements["DOCID"].value = "0";
				else
					$('[name=DOCID]').val(0);

				DoSubmit(form, "");
			}

			function editDoc() {
				var form = document.forms["DocList"];

				if(form.elements['DOCID'].selectedIndex == -1) {
					alert(language.Generic.ResourceGroups.kSelectDocForEdit);
					return;
				}

				form.elements["ACT"].value = "savedoc";
				DoSubmit(form, "");
			}

			function removeDoc() {
				var form = document.forms["DocList"];

				if(form.elements['DOCID'].selectedIndex == -1) {
					alert(language.Generic.ResourceGroups.kSelectDocForDel);
					return;
				}

				$.show.confirmation(language.Generic.ResourceGroups.kAreYouSureToDeleteDoc).then(function() {
					form.elements["ACT"].value = "deletedoc";
					$(document).trigger('showProcessing');
					DoSubmit(form, "SchoolDocsSave.asp");
				});
			}
		<%End If%>

		function Back() {
			goBack(document.GroupList, 'SchoolDocs.asp');
		}
	//--></SCRIPT><%
End Sub

Sub onDrawPage()
	Dim i, strID%>

	<div class="row">
		<div class="col-lg-6 col-md-8"><%
			OpenPanel obLanguage("SetupSchoolResources","kGroups"), "groups", False%>
				<form NAME="GroupList" METHOD="post" ACTION="SDGroupEdit.asp" class="form-horizontal">
					<%=WriteObligatoryTags()%>
					<INPUT TYPE="hidden" NAME="ACT" VALUE="newgroup"><%
					
					OpenBtnGroup
						Call ButtonCreate("createNewGroup()", obLanguage("ResourceGroups","kCreateGroup"))
						If Not bNoGroups Then
							ButtonChange "editGroup()", obLanguage("ResourceGroups","kEditGroup")
							If Not bIsForService Then ButtonDel "removeGroup()", obLanguage("ResourceGroups","kDelGroup")
						End If
					CloseBtnGroup
					
					If bNoGroups Then
						Call DrawInfo(obLanguage("SetupSchoolResources","kNoGroupsInCatalog"), False)%>
						<INPUT TYPE="hidden" NAME="PGRID" VALUE="0"><%
					Else
						OpenFormGroup obLanguage("ResourceGroups","kSelectGroup")%>
							<SELECT NAME="PGRID" onChange="JavaScript:ok('GroupList','SchoolDocsEdit.asp')" class="form-control"><%
								While Not objRsGroups.EOF
									strID = CStr(objRsGroups("GROUPID"))
									Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
									If strID = strGroupID Then Response.Write " SELECTED "
									Response.Write ">"
									For i = 1 To CLng(objRsGroups("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
									Response.Write Server.HTMLEncode(objRsGroups("GROUPNAME"))
									Response.Write "</OPTION>"
									objRsGroups.MoveNext
								WEnd
							%></SELECT><%
						CloseFormGroup
					End If%>
				</form>
			<%ClosePanel
			
			If Not bNoGroups Then
				OpenPanel obLanguage("SetupSchoolResources","kDocuments"), "documents", False%>
					<form NAME="DocList" METHOD="post" ACTION="SDDocumentEdit.asp" class="form-horizontal">
						<%=WriteObligatoryTags()%>
						<INPUT TYPE="hidden" NAME="PGRID" VALUE="<%=strGroupID%>">
						<INPUT TYPE="hidden" NAME="ACT" VALUE="newdoc"><%

						OpenBtnGroup
							Call ButtonCreate("createNewDoc()", obLanguage("ResourceGroups","kCreateDoc"))

							If Not bNoDocs Then
								ButtonChange "editDoc()", obLanguage("ResourceGroups","kEditDoc")
								ButtonDel "removeDoc()", obLanguage("ResourceGroups","kDelDoc")
							End If
						CloseBtnGroup
						
						If bNoDocs Then
							Call DrawInfo(obLanguage("ResourceGroups","kNoDocsInGroup"), False)%>
							<INPUT TYPE="hidden" NAME="DOCID" VALUE="0"><%
						Else
							OpenFormGroup obLanguage("ResourceGroups","kSelectDocFromGroup")%>
								<select NAME="DOCID" SIZE="7" class="form-control">
									<% PopulateSelect objRsDocs, "SCHOOLDOCID", "DOCNAME", strDocID %>
								</select><%
							CloseFormGroup
						End If%>
					</form><%
				ClosePanel
			End If%>
		</div>
	</div><%
End Sub%>