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
	GetPageTabItem = TabItem_tbPersonalPortfolios
 End Function

Function GetPortfolioGroupTree( strPortfolioID )
	If Not bIsDebug Then On Error Resume Next
	Set GetPortfolioGroupTree = objNSNET.GetPortfolioGroupTree(strPortfolioID, 0 )
End Function

Sub Main
	Dim bIsPortfolioExists
	If Not bIsDebug Then On Error Resume Next

	bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bIsPortfolioExists Then
		Call GetPortfolioGroupInfo( strPortfolioID )
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	End If
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = _
		WriteHiddenTags( Array("PGRID",strGroupID))
End Function

Sub onHead()%>
	<SCRIPT><!--
function Back(){
	goBack(document.GroupEdit, 'PersonalPortfolioEdit.asp');
		}

		function saveChanges(){
			ok_check_db('GroupEdit', 'PersonalPortfolioSave.asp');
		}
	//--></SCRIPT><%
	Call scriptResGroupNavigation()
End Sub%>