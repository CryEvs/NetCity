<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioEdit_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim strGroupID, strLinkID, strDocID

Sub ReadState()
	strGroupID = GetSafeID(Request("PGRID"), GetSafeID(obTokenMgr.GetData( strToken, "PGRID" ), "0" ))
End Sub

Function GetPortfolioGroupTree(strPortfolioID )
	If Not bIsDebug Then On Error Resume Next
	Set GetPortfolioGroupTree = objNSNET.GetPortfolioGroupTree(strPortfolioID, 0)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbPersonalPortfolios
 End Function

Sub Main
	If Not bIsDebug Then On Error Resume Next
	Dim strPortfolioID
	Dim bIsPortfolioExists

	bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID)
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bIsPortfolioExists Then
		strSavePageURL = "PersonalPortfolioSave.asp"
		strBackPageURL = "PersonalPortfolios.asp"
		strRightsPageURL = "PersonalPortfolioRights.asp"
		Call obTokenMgr.SetData(strToken, "PGRID", strGroupID)
		Call obTokenMgr.SetData(strToken, stBackPage, Request.ServerVariables("SCRIPT_NAME").Item)

		Call GetPortfolioData(strPortfolioID)
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kPortfolioNotExists")
	End If
End Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons
	Button "goRights()", obLanguage("SetupSchoolPortfolio","kViewRights"), obLanguage("SetupSchoolPortfolio","kViewRights"), "glyphicon glyphicon-user"
End Sub

Sub onDrawPage()
	Dim i, strID

	Call DrawButtonPanel()%>

	<div class="row">
		<div class="col-md-6">
			<%OpenPanel obLanguage("SetupSchoolPortfolio","kPrtfolioGroups"), "groups", False %>
				<form NAME="GroupList" METHOD="post" ACTION="PersonalPortfolioGroupEdit.asp" class="form-horizontal">
					<%=WriteObligatoryTags()%>
					<%=WriteHiddenTags(Array("ACT", "newgroup"))%><%

					OpenBtnGroup
						Call ButtonCreate("createNewGroup()", obLanguage("Buttons","kCreate"))

						If bIsGroupsExists Then
							ButtonEdit "editGroup()", obLanguage("ResourceGroups","kEditGroup")
							ButtonDel "removeGroup()", obLanguage("ResourceGroups","kDelGroup")
						End If
					CloseBtnGroup%>

					<div class="row">
						<div class="col-md-12">
							<%If Not bIsGroupsExists Then
								DrawInfo obLanguage("SetupSchoolPortfolio","kNoGroupsInPortfolio"), False%>
								<INPUT TYPE="hidden" NAME="PGRID" VALUE="0"><%
							Else
								OpenFormGroup obLanguage("ResourceGroups","kSelectGroup")%>
									<SELECT NAME="PGRID" class="form-control" onChange="JavaScript:ok('GroupList','PersonalPortfolioEdit.asp')"><%
										While Not objRsGroups.EOF
											strID = CStr(objRsGroups("GROUPID"))
											Response.Write "<option VALUE=""" & DB2Value(strID) & """"
											If strID = strGroupID Then Response.Write " SELECTED "
											Response.Write ">"
											For i = 1 To CLng(objRsGroups("GROUPLEVEL")) : rw "&nbsp;&nbsp;" : Next
											Response.Write Server.HTMLEncode(objRsGroups("GROUPNAME"))
											Response.Write "</option>"

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
				OpenPanel obLanguage("SetupSchoolPortfolio","kLinks"), "links", False %>
					<form name="LinkList" METHOD="post" ACTION="PersonalPortfolioLinkEdit.asp" class="form-horizontal">
						<%=WriteObligatoryTags()%>
						<%=WriteHiddenTags(Array("PGRID", strGroupID, "ACT", "newlink"))%><%

						OpenBtnGroup
							Call ButtonCreate("createNewLink()", obLanguage("Buttons","kCreate"))
							If bIsLinksExists Then
								Call ButtonEdit("editLink()", obLanguage("ResourceGroups","kEditLink"))
								Call ButtonDel("removeLink()", obLanguage("ResourceGroups","kDelLink"))
							End If
						CloseBtnGroup%>
			
						<div class="row">
							<div class="col-md-12"><%
								If Not bIsLinksExists Then
									DrawInfo obLanguage("ResourceGroups","kNoLinksInGroup"), False%>
									<INPUT TYPE="hidden" NAME="LINKID" VALUE="0"><%
								Else%>
									<b><%=obLanguage("ResourceGroups","kSelectLinkFromGroup")%></b><br />
									<select NAME="LINKID" SIZE="7" style="width:100%">
										<%PopulateSelect objRsLinks, "RESOURCEID", "URL", strLinkID%>
									</select><%
								End If%>
							</div>
						</div>
					</form><%
				ClosePanel

				OpenPanel obLanguage("SetupSchoolPortfolio","kDocuments"), "documents", False %>
					<form name="DocList" METHOD="post" ACTION="PersonalPortfolioDocEdit.asp" class="form-horizontal">
						<%=WriteObligatoryTags()%>
						<%=WriteHiddenTags(Array("PGRID", strGroupID, "ACT", kAction_NewDoc))%><%

						OpenBtnGroup
							Call ButtonCreate("createNewDoc()", obLanguage("Buttons","kCreate"))
							If bIsDocsExists Then
								Call ButtonEdit("editDoc()", obLanguage("ResourceGroups","kEditDoc"))
								Call ButtonDel("removeDoc()", obLanguage("ResourceGroups","kDelDoc"))
							End If
						CloseBtnGroup%>

						<div class="row">
							<div class="col-md-12"><%
								If Not bIsDocsExists Then
									DrawInfo obLanguage("ResourceGroups","kNoDocsInGroup"), False%>
									<input TYPE="hidden" NAME="DOCID" VALUE="0" /><%
								Else%>
									<b><%=obLanguage("ResourceGroups","kSelectDocFromGroup")%></b><br />
									<select NAME="DOCID" SIZE="7" style="width:100%">
										<%PopulateSelect objRsDocs, "RESOURCEID", "RESOURCENAME", strDocID%>
									</select><%
								End If%>
							</div>
						</div>
					</form><%
				ClosePanel
			End If%>
		</div>
	</div><%
End Sub%>