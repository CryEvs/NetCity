<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/html_url.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Portfolio/PortfolioList_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objRsGroupsFilters, bHasRightToChange, strGroupID, bEmpty
Dim nCntLevel

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitleSchoolResources")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolResources
 End Function

Sub ReadState()
	bHasRightToChange = bIsStaff And HasUserRight(arEditSchoolResources)
	strGroupID = GetSafeID(Request("PGRID"), "0")
End Sub

Sub Main
	Set objRsGroupsFilters = objNSNET.GetSchoolResourcesGroupTree(strSchoolID, 0)
	bEmpty = objRsGroupsFilters.EOF
	
	If Not bEmpty Then
		Set objRsGroups = objNSNET.GetSchoolResourcesGroupTree(strSchoolID, strGroupID)
		If objRsGroups.EOF Then GenerateError(obLanguage("Curriculum","kCantGetResourceListInGroup"))
		Set objRsLinks = objNSNET.GetSchoolResourcesGroupTreeLinkList(strSchoolID, strGroupID)
	End If
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/portfolio.min.css")%>"><%

	If bHasRightToChange Then%>
		<SCRIPT><!--
			function changeData() {
				DoSubmit(document.GroupList, "SchoolResourcesEdit.asp");
			}
		//--></SCRIPT><%
	End If
End Sub

Sub DrawLinkButtons
	If bHasRightToChange Then
		ButtonEdit "changeData();", obLanguage("Curriculum","kEditLinks")
	End If
End Sub

Sub DrawFilters(strForm)
	Dim strID, i

	If Not bEmpty Then
		OpenFormGroup obLanguage("Curriculum","kResourceGroup")%>
			<SELECT NAME="PGRID" CLASS="form-control" onChange="JavaScript:ok('GroupList','SchoolResources.asp')">
				<OPTION VALUE="0"<%If strGroupID = "0" Then Response.Write " SELECTED "%>><%=obLanguage("Curriculum","kAllGroups")%></OPTION><%
				While Not objRsGroupsFilters.EOF
					strID = CStr(objRsGroupsFilters("GROUPID"))
					Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
					If strID = strGroupID Then Response.Write " SELECTED "
					Response.Write ">"
					For i = 0 To CLng(objRsGroupsFilters("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
					Response.Write Server.HTMLEncode(objRsGroupsFilters("GROUPNAME"))
					Response.Write "</OPTION>"

					objRsGroupsFilters.MoveNext
				WEnd%>
			</SELECT><%
		CloseFormGroup
	Else%>
		<INPUT type="hidden" name="PGRID" value="0" /><%
	End If
End Sub
	
Sub onDrawPage()
	Dim i, nStartLevel, nPrevLevel, nLevel, strDescription, bFirst%>

	<FORM NAME="GroupList" METHOD="post" ACTION="SchoolResources.asp">
		<%=WriteObligatoryTags()%><%

		Call DrawButtonsFilters(bHasRightToChange And Not readonly, "GroupList")%>

		<div class="row">
			<div class="col-md-12"><%
				If Not bEmpty Then
					Call DrawPortfolioResources()
				Else
					Call DrawInfo(obLanguage("Curriculum","kNoGroupsInCatalog"), False)
				End If%>
			</div>
		</div>
	</FORM><%
End Sub%>