<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/html_url.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioList_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objUserPortfolios
Dim bIsPortfoliosForViewExists
Dim strGroupID
Dim bIsPortfolioExists, bIsGroupsExists, bCanCreatePortfolio
Dim strPortfolioID
Dim bViewModeOn

Function GetPageTitle()
	If Not bViewModeOn Then GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitlePersonalPortfolios") Else GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleOtherUserPortfolios")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbPersonalPortfolios
 End Function

Sub ReadState()
	strGroupID = GetSafeID( Request("PGRID"), "0" )
	bViewModeOn = (GetSafeStr(Request("V"), 1, "N") = "Y")

	If bViewModeOn Then
		strPortfolioID = GetSafeID(Request("PFID"), "0")
		strGroupID = objNSNET.GetSafePortfolioGroupID(strPortfolioID, strGroupID)
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
		strGroupID = CStr(strGroupID)
	End If

	bCanCreatePortfolio = Not HasUserRole(rlMinorStaff) And Not HasUserRole(rlParent)
End Sub

Sub Main
	If Not bIsDebug Then On Error Resume Next

	bIsGroupsExists = False

	Set objUserPortfolios = objNSNET.GetPersonalPortfoliosForView(strUserID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetOtherPortfolios")
	bIsPortfoliosForViewExists = Not objUserPortfolios.EoF

	If bViewModeOn Then
		bIsPortfolioExists = bIsPortfoliosForViewExists
		If bIsPortfolioExists And strPortfolioID = "0" Then strPortfolioID = GetSafeID(objUserPortfolios("PORTFOLIOID"), "0")
	Else
		bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID)
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	End If
	
	If bIsPortfolioExists Then
		Set objRsGroups = objNSNET.GetPortfolioGroupTree(strPortfolioID, strGroupID)
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioTree")

		bIsGroupsExists = Not objRsGroups.EoF

		Set objRsLinks = objNSNET.GetPortfolioResources(strPortfolioID, strGroupID, kResourceTypeLink)
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioResources")

		Set objRsDocs = objNSNET.GetPortfolioResources(strPortfolioID, strGroupID, kResourceTypeDocument)
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioResources")
	Else
		strPortfolioID = "0"
		strGroupID = "0"
	End If
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/portfolio.min.css")%>">

	<SCRIPT><!--
		function createNewPortfolio() {
			ok_check_db('GroupList', 'PersonalPortfolioCreate.asp');
		}

		function changeData() {
			DoSubmit(document.GroupList, "PersonalPortfolioEdit.asp");
		}

		function viewPortfolios() {
			DoSubmit(document.GroupList, document.GroupList.action + '?V=Y')
		//	location.href = 'PersonalPortfolios.asp?VER=' + getVer() + '&AT=<%=strToken%>&V=Y';
		}

		function Back() {
			document.GroupList.V.value = "N";
			goBack(document.GroupList, "");
		}
	//--></SCRIPT><%
End Sub

Sub DrawLinkButtons
	If bIsPortfolioExists And Not readonly Then ButtonEdit "changeData();", obLanguage("SetupSchoolPortfolio","kEditPortfolio")

	If bIsPortfoliosForViewExists Then
		Call ButtonView("viewPortfolios()", obLanguage("SetupSchoolPortfolio","kViewAvailablePortfolios"))
	End If

	If Not bIsPortfolioExists And Not bViewModeOn Then
		If bCanCreatePortfolio And Not readonly Then
			Call ButtonCreate("createNewPortfolio()", obLanguage("SetupSchoolPortfolio","kCreatePortfolio"))
		End If
	End If
End Sub

Sub DrawFilters(strForm)
	Dim strID, i

	If bIsPortfolioExists Then
		If bViewModeOn And bIsPortfoliosForViewExists Then
			Call DrawSelectInfoRow(obLanguage("Common", "kUser"), strPortfolioID, "PFID", objUserPortfolios, "PORTFOLIOID", "NAME", Null, "JavaScript:ok('GroupList', 'PersonalPortfolios.asp')")
		End If

		If bIsGroupsExists Then
			OpenFormGroup obLanguage("SetupSchoolPortfolio","kPrtfolioGroup")%>
			<SELECT NAME="PGRID" CLASS="form-control" onChange="JavaScript:ok('GroupList','PersonalPortfolios.asp')">
				<OPTION VALUE="0"<%If strGroupID = "0" Then Response.Write " SELECTED "%>><%=obLanguage("SetupSchoolPortfolio","kAllPrtfolioGroups")%></OPTION><%
				While Not objRsGroups.EOF
					strID = CStr(objRsGroups("GROUPID"))
					Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
					If strID = strGroupID Then Response.Write " SELECTED "
					Response.Write ">"
					For i = 0 To CLng(objRsGroups("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
					Response.Write Server.HTMLEncode(objRsGroups("GROUPNAME"))
					Response.Write "</OPTION>"

					objRsGroups.MoveNext
				WEnd%>
			</SELECT><%
			CloseFormGroup
		Else
			Call DrawInfo(obLanguage("SetupSchoolPortfolio","kNoGroupsInPortfolio"), False)%>
			<INPUT type="hidden" name="PGRID" value="0"><%
		End If
	Else
		If bViewModeOn Then
			Call DrawInfo(obLanguage("SetupSchoolPortfolio","kNoAvailablePersonalPortfolios"), False)
		Else
			If bCanCreatePortfolio And Not readonly Then
				Call DrawInfo(obLanguage("SetupSchoolPortfolio","kPortfolioNotExists"), False)
			Else
				Call DrawInfo(obLanguage("SetupSchoolPortfolio","kYouShouldOnlyViewOtherPortfolis"), False)
			End If
		End If
	End If
End Sub

Sub onDrawPage()%>
	<FORM NAME="GroupList" METHOD="post" ACTION="PersonalPortfolios.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%><%

		If bViewModeOn Then%>
			<%=WriteHiddenTags(Array("V","Y"))%><%

			If Not (bIsPortfolioExists And bIsPortfoliosForViewExists) Then%>
				<%=WriteHiddenTags(Array("PFID",strPortfolioID))%><%
			End If
		End If
		
		Call DrawButtonsFilters(Not readonly And Not bViewModeOn, "GroupList")

		If bIsGroupsExists Then%>
			<div class="row">
				<div class="col-md-10"><%
					Call DrawPortfolioResources()%>
				</div>
			</div><%
		End If%>
	</FORM><%
End Sub%>