<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE FILE="PortfolioGroupNavigation_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioGroupEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strAct
Dim strGroupID, strParentGroupID
Dim strPortfolioID

Sub ReadState()
  strPortfolioID = GetSafeID( Request("PFID"), "0" )
  strAct = GetSafeStr(Request("ACT"),20, "newgroup" )
  If strAct = "newgroup" Then
	strGroupID = "0"
	strParentGroupID = GetSafeID( Request("PGRID"), "0" )
  Else
	strGroupID = GetSafeID( Request("PGRID"), "0" )
	strParentGroupID = "0"
  End If
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
	Dim bCanEditProjectlPortfolio
	If Not bIsDebug Then On Error Resume Next

	bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bCanEditProjectlPortfolio Then
		Call GetPortfolioGroupInfo( strPortfolioID )
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	End If
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = _
		WriteHiddenTags( Array("PFID",strPortfolioID,"PGRID",strGroupID))
End Function

Sub onHead()%>
	<SCRIPT><!--
	function back() {
		goBack(document.GroupEdit, 'ProjectPortfolioEdit.asp');
	}

	function saveChanges() {
		ok_check_db('GroupEdit', 'ProjectPortfolioSave.asp');
	}
	//--></SCRIPT><%
	Call scriptResGroupNavigation()
End Sub%>