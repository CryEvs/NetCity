<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strGroupID, strLinkID, strDocID
Dim strPortfolioID, strPortfolioName
Dim bIsProjectLeaderRole

Sub ReadState()
	strPortfolioID = GetSafeID( Request("PFID"), GetSafeID( obTokenMgr.GetData( strToken, stProjPortfolioID ), "0" ) )
	strGroupID = GetSafeID( Request("PGRID"), GetSafeID( obTokenMgr.GetData( strToken, stProjGroupID ), "0" ) )
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbProjectPortfolios
 End Function

Function GetPortfolioGroupTree( strPortfolioID )
	If Not bIsDebug Then On Error Resume Next
	Set GetPortfolioGroupTree = objNSNET.GetProjectPortfolioGroupTree(strUserID, strPortfolioID, 0 )
End Function

Sub Main
	If Not bIsDebug Then On Error Resume Next
	Dim bCanEditProjectlPortfolio

	bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bCanEditProjectlPortfolio Then
		bIsProjectLeaderRole = objNSNET.IsProjectPortfolioLeader(strPortfolioID, strUserID )
		strSavePageURL = "ProjectPortfolioSave.asp"
		strBackPageURL = "ProjectPortfolios.asp"
		Call obTokenMgr.SetData(strToken, stBackPage, Request.ServerVariables("SCRIPT_NAME").Item)

		strPortfolioName = objNSNET.GetPortfolioName(strPortfolioID )
		TestError obLanguage("SetupSchoolPortfolio","kGetPortfolioNameFailed")

		Call GetPortfolioData( strPortfolioID )
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kPortfolioNotExists")
	End If
End Sub

Sub CustomScripts()%>
	function goProjectRights(){
		ok_check_db('NameEdit','ProjectPortfolioRights.asp')
	}
	function goProjectLeaders(){
		ok_check_db('NameEdit','ProjectPortfolioLeaders.asp')
	}
	function goProjectMembers(){
		ok_check_db('NameEdit','ProjectPortfolioMembers.asp')
	}
	function saveChanges(){
		ok_check_db('NameEdit', 'ProjectPortfolioSave.asp');
	}<%
End Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons
	If bIsProjectLeaderRole Then
		Button "goProjectRights()", obLanguage("SetupSchoolPortfolio","kProjectRights"), obLanguage("SetupSchoolPortfolio","kProjectRights"), "glyphicon glyphicon-user"
		Button "goProjectLeaders()", obLanguage("SetupSchoolPortfolio","kProjectLeaders"), obLanguage("SetupSchoolPortfolio","kProjectLeaders"), ""
		Button "goProjectMembers()", obLanguage("SetupSchoolPortfolio","kProjectMembers"), obLanguage("SetupSchoolPortfolio","kProjectMembers"), ""
	End If
End Sub

Sub onDrawPage()
	Dim i, strID, bCanChangeGroupResources, bHasAccessToGroup

	Call DrawButtonPanel()%>

	<div class="row">
		<div class="col-md-7"><%
			If bIsProjectLeaderRole Then%>
				<%OpenPanel obLanguage("Common","kName"), "name", False %>
					<form NAME="NameEdit" METHOD="post" ACTION="ProjectPortfolioSave.asp" onsubmit="return false;" class="form-horizontal">
						<%=WriteObligatoryTags()%>
						<%=WriteHiddenTags(Array("PFID", strPortfolioID, "PGRID", strGroupID, "ACT", "editName"))%><%

						OpenBtnGroup
							ButtonSave "saveChanges()", obLanguage("SetupSchoolPortfolio","kSaveName")
						CloseBtnGroup%>

						<div class="row">
							<div class="col-md-12">
								<%Call DrawInputRow(obLanguage("SetupSchoolPortfolio","kPortfolioName"), strPortfolioName, "PFNAME", "text", 45, kMaxLen_PortfolioName, "")%>
							</div>
						</div>
					</form>
				<%ClosePanel %><%
			End If
			
			OpenPanel obLanguage("SetupSchoolPortfolio","kGroups"), "groups", False
				If bIsProjectLeaderRole Then
					OpenBtnGroup
						Call ButtonCreate("createNewGroup()", obLanguage("Buttons","kCreate"))
						If bIsGroupsExists Then
							ButtonEdit "editGroup()", obLanguage("ResourceGroups","kEditGroup")
							ButtonDel "removeGroup()", obLanguage("ResourceGroups","kDelGroup")
						End If
					CloseBtnGroup
				End If
					
				%><form NAME="GroupList" METHOD="post" ACTION="ProjectPortfolioGroupEdit.asp" class="form-horizontal">
					<%=WriteObligatoryTags()%>
					<%=WriteHiddenTags(Array("PFID", strPortfolioID, "ACT", "newgroup"))%>
						
					<div class="row">
						<div class="col-md-12"><%
							If Not bIsGroupsExists Then
								DrawInfo obLanguage("SetupSchoolPortfolio","kNoGroupsInPortfolio"), False
								%><input type="hidden" name="PGRID" value="0"><%
							Else
								OpenFormGroup obLanguage("ResourceGroups","kSelectGroup")%>
								<SELECT NAME="PGRID" onChange="JavaScript:ok('GroupList','ProjectPortfolioEdit.asp')" class="form-control"><%
									While Not objRsGroups.EOF
										strID = CStr(objRsGroups("GROUPID"))
										Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"

										If strID = strGroupID Then
											Response.Write " SELECTED "
											bCanChangeGroupResources = (GetSafeLng(objRsGroups("ACCESSTYPE"), 0) = 2)
											bHasAccessToGroup = (GetSafeLng(objRsGroups("ACCESSTYPE"), 0) <> 0)
										End If

										Response.Write ">"
										For i = 1 To CLng(objRsGroups("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
										Response.Write Server.HTMLEncode(objRsGroups("GROUPNAME"))
										Response.Write "</OPTION>"

										objRsGroups.MoveNext
									Wend%>
								</SELECT><%
								CloseFormGroup
							End If%>
						</div>
					</div>
				</form><%
			ClosePanel
			
			If bIsGroupsExists Then
				OpenPanel obLanguage("SetupSchoolPortfolio","kLinks"), "links", False
					If bCanChangeGroupResources Then
						OpenBtnGroup
							Call ButtonCreate("createNewLink()", obLanguage("Buttons","kCreate"))

							If bIsLinksExists Then
								Call ButtonEdit("editLink()", obLanguage("ResourceGroups","kEditLink"))
								Call ButtonDel("removeLink()", obLanguage("ResourceGroups","kDelLink"))
							End If
						CloseBtnGroup
					End If%>

					<div class="row">
						<div class="col-md-12">
							<form NAME="LinkList" METHOD="post" ACTION="ProjectPortfolioLinkEdit.asp" class="form-horizontal">
								<%=WriteObligatoryTags()%>
								<%=WriteHiddenTags(Array("PFID", strPortfolioID, "ACT", "newlink", "PGRID", strGroupID))%><%
							
								If Not (bHasAccessToGroup And bIsLinksExists) Then
									DrawInfo obLanguage("ResourceGroups","kNoLinksInGroup"), False
									%><input type="hidden" name="LINKID" value="0"><%
								Else%>
									<b><%=obLanguage("ResourceGroups","kSelectLinkFromGroup")%></b><br />
									<select NAME="LINKID" SIZE="7" class="form-control" style="width: 100%; overflow-y: auto;">
										<%PopulateSelect objRsLinks, "RESOURCEID", "URL", strLinkID%>
									</select><%
								End If%>
							</form>
						</div>
					</div><%
				ClosePanel

				OpenPanel obLanguage("SetupSchoolPortfolio","kDocuments"), "documents", False

					If bCanChangeGroupResources Then
						OpenBtnGroup
							Call ButtonCreate("createNewDoc()", obLanguage("Buttons","kCreate"))

							If bIsDocsExists Then
								Call ButtonEdit("editDoc()", obLanguage("ResourceGroups","kEditDoc"))
								Call ButtonDel("removeDoc()", obLanguage("ResourceGroups","kDelDoc"))
							End If
						CloseBtnGroup
					End If%>

					<div class="row">
						<div class="col-md-12">
							<FORM NAME="DocList" METHOD="post" ACTION="ProjectPortfolioDocEdit.asp" class="form-horizontal">
								<%=WriteObligatoryTags()%>
								<%=WriteHiddenTags(Array("PFID", strPortfolioID, "ACT", "newdoc", "PGRID", strGroupID))%><%
							
								If Not (bHasAccessToGroup And bIsDocsExists) Then
									DrawInfo obLanguage("ResourceGroups","kNoDocsInGroup"), False
									%><input type="hidden" name="DOCID" value="0"><%
								Else%>
									<b><%=obLanguage("ResourceGroups","kSelectDocFromGroup")%></b><br />
									<select NAME="DOCID" SIZE="7" class="form-control" style="width: 100%; overflow-y: auto;">
										<%PopulateSelect objRsDocs, "RESOURCEID", "RESOURCENAME", strDocID%>
									</select><%
								End If%>
							</form>
						</div>
					</div><%
				ClosePanel
			End If%>
		</div>
	</div><%
End Sub%>