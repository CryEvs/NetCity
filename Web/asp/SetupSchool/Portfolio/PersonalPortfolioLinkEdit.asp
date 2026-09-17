<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioLinkEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
'	PGRID=<GroupID>
'	LINKID=<LinkID>

Dim strPortfolioID
Dim strAct

Sub ReadState()
	strGroupID = GetSafeID(Request("PGRID"), "0")
	strLinkID = GetSafeID(Request("LINKID"), "0")
	strAct = GetSafeStr(Request("ACT"), 20, "newlink")
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbPersonalPortfolios
 End Function

Sub Main
	Dim bIsPortfolioExists
	If Not bIsDebug Then On Error Resume Next

	bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bIsPortfolioExists Then
		Call GetPortfolioLinkInfo()
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	End If
End Sub

Sub scriptFunc() %>
<SCRIPT><!--
function Back(){
	goBack(document.LinkEdit, 'PersonalPortfolioEdit.asp');
}
function saveChanges(){
	ok_check_db('LinkEdit', 'PersonalPortfolioSave.asp');
}
//--></SCRIPT><%
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = _
		WriteHiddenTags(Array("PGRID",strGroupID,"LINKID",strLinkID,"ACT",strAct))
End Function%>