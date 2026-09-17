<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/html_url.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioList_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>

Dim strPortfolioID, strGroupID
Dim objProjectPortfolios
Dim bIsPortfolioExists, bIsGroupsExists, bHasRightToChange, bCanCreatePortfolio
Dim bCanEditProjectlPortfolio
Dim bIsProjectPortfolioLeader
Dim nDisplayProjectPortfoliosMode
Dim arrDisplayMode

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleProjectPortfolios")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbProjectPortfolios
 End Function

Sub ReadState()
	Redim arrDisplayMode(1,1)
	arrDisplayMode(0,0) = 0
	arrDisplayMode(0,1) = 1
	arrDisplayMode(1,0) = obLanguage("SetupSchoolPortfolio","kOnlyTheir")
	arrDisplayMode(1,1) = obLanguage("SetupSchoolPortfolio","kProjPortfoliosAllUsersInSchool")
	bHasRightToChange = True
	bCanCreatePortfolio = HasUserRole(rlAdmin) Or HasUserRole(rlPrincipal) Or HasUserRole(rlTeacher)
	nDisplayProjectPortfoliosMode = GetSafeLng(Request("DisplayProjectPortfoliosMode"), obTokenMgr.GetData(strToken, stDisplayProjectPortfoliosMode))
	strPortfolioID = GetSafeID(Request("PFID"), GetSafeID(obTokenMgr.GetData( strToken, stProjPortfolioID), "0"))
	strGroupID = GetSafeID(Request("PGRID"), GetSafeID(obTokenMgr.GetData( strToken, stProjGroupID), "0"))
	
	If nDisplayProjectPortfoliosMode = 0 Then 'Если в селекте выбрали пункт "Не выбрано", то проверяем есть ли у пользователя портфолио проектов из формы
		strPortfolioID = GetSafeID(objNSNET.GetSafeUserPortfolioID(strPortfolioID), Null)
	End If

	strGroupID = objNSNET.GetSafePortfolioGroupID(strPortfolioID, strGroupID)
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	strGroupID = CStr(strGroupID)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stProjPortfolioID, strPortfolioID)
	Call obTokenMgr.SetData(strToken, stProjGroupID, strGroupID)

	If HasUserRole(rlAdmin) Then 
		Call obTokenMgr.SetData(strToken, stDisplayProjectPortfoliosMode, nDisplayProjectPortfoliosMode)'пишет в токен менеджер, только если пользователь админ, т.к чекбокс доступен только ему
	End If
End Sub

Function HasAccessToGroup(objRs)
	HasAccessToGroup = (CLng(GetSafeLng( objRs("ACCESSTYPE"), 0)) <> 0)
End Function

Sub Main
	If Not bIsDebug Then On Error Resume Next
	bIsGroupsExists = False

	If nDisplayProjectPortfoliosMode = 1 Then
		Set objProjectPortfolios = objNSNET.GetProjectPortfoliosListForAdmin(strUserID, strSchoolID)
	Else
		Set objProjectPortfolios = objNSNET.GetProjectPortfoliosList(strUserID)
	End If

	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	bIsPortfolioExists = Not objProjectPortfolios.EoF

	If bIsPortfolioExists Then
		If strPortfolioID = "0" Then
			strPortfolioID = GetSafeID( objProjectPortfolios("PORTFOLIOID"), Null)
		End If
		bIsProjectPortfolioLeader = objNSNET.IsProjectPortfolioLeader(strPortfolioID, strUserID)
	
		Set objRsGroups = objNSNET.GetProjectPortfolioGroupTree(strUserID, strPortfolioID, strGroupID )
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioTree")
	
		bIsGroupsExists = Not objRsGroups.EoF
	
		Set objRsLinks = objNSNET.GetPortfolioResources(strPortfolioID, strGroupID, kResourceTypeLink)
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioResources")
	
		Set objRsDocs = objNSNET.GetPortfolioResources(strPortfolioID, strGroupID, kResourceTypeDocument )
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioResources")
	
		bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	Else
		strPortfolioID = "0"
		strGroupID = "0"
	End If
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/portfolio.min.css")%>">

	<SCRIPT><!--
		function ChangeDisplayMode() {
			var form = document.forms["GroupList"];
			DoSubmit(form, "ProjectPortfolios.asp");
		}

		function createNewPortfolio() {
			ok_check_db('GroupList', 'ProjectPortfolioNew.asp');
		}

		function changeData() {
			ok_check_db('GroupList', 'ProjectPortfolioEdit.asp');
		}

		function deletePortfolio() {
			$.show.confirmation(language.Generic.SetupSchoolPortfolio.kProjectDelConfirm).then(function(){
				ok_check_db('GroupList', 'ProjectPortfolioDelete.asp');
			});
		}
	//--></SCRIPT><%
End Sub

Sub DrawLinkButtons
	If bCanCreatePortfolio Then
		Call ButtonCreate("createNewPortfolio()", obLanguage("SetupSchoolPortfolio","kCreateProjPortfolio"))
	End If

	If bIsPortfolioExists Then
		If bCanEditProjectlPortfolio Then ButtonEdit "changeData();", obLanguage("SetupSchoolPortfolio","kEditPortfolio")
		If bIsProjectPortfolioLeader Then ButtonDel "deletePortfolio();", obLanguage("Common","kRemove")
	End If
End Sub

Sub DrawFilters(strForm)
	Dim strID, i

	If bIsPortfolioExists Then 
		Call DrawShowAllPortfoliosSelect()
		
		Call DrawSelectInfoRow(obLanguage("SetupSchoolPortfolio","kProjectPortfolios"), strPortfolioID, "PFID", objProjectPortfolios, "PORTFOLIOID", "NAME", Null, "JavaScript:ok('GroupList','ProjectPortfolios.asp')") 
		
		If bIsGroupsExists Then
			OpenFormGroup obLanguage("SetupSchoolPortfolio","kPrtfolioGroup")%>
				<select name="PGRID" class="form-control" onChange="JavaScript:ok('GroupList','ProjectPortfolios.asp')">
					<option VALUE="0"<%If strGroupID = "0" Then Response.Write " SELECTED "%>><%=obLanguage("SetupSchoolPortfolio","kAllPrtfolioGroups")%></option><%
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
				</select><%
			CloseFormGroup
		Else
			DrawInfo obLanguage("SetupSchoolPortfolio","kNoGroupsInPortfolio"), False
		End If
	Else
		Call DrawShowAllPortfoliosSelect()

		If bCanCreatePortfolio Then
			DrawInfo obLanguage("SetupSchoolPortfolio","kEmptyProjectPortfolios"), False
		Else
			DrawInfo obLanguage("SetupSchoolPortfolio","kYouShouldOnlyViewProjectPortfolis"), False
		End If
	End If
End Sub

Sub DrawShowAllPortfoliosSelect()
	If HasUserRole(rlAdmin) Then
		Call DrawSelectInfoRow(obLanguage("SetupSchoolPortfolio","kShowMode"), nDisplayProjectPortfoliosMode, "DisplayProjectPortfoliosMode", arrDisplayMode, Null, Null, Null, "ChangeDisplayMode()")
	End If
End Sub

Sub onDrawPage()%>
	<FORM NAME="GroupList" METHOD="post" ACTION="ProjectPortfolios.asp">
		<%=WriteObligatoryTags()%><%

		Call DrawButtonsFilters(bHasRightToChange And Not readonly And (bCanCreatePortfolio Or (bIsPortfolioExists And bCanEditProjectlPortfolio) Or (bIsPortfolioExists And bIsProjectPortfolioLeader)), "GroupList")

		If bIsGroupsExists Then
			Call DrawPortfolioResources()
		End If%>
	</FORM><%
End Sub%>