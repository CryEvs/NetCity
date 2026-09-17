<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioLinkEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID
Dim strAct

Sub ReadState()
	strPortfolioID = GetSafeID( Request("PFID"), "0" )
	strGroupID = GetSafeID( Request("PGRID"), "0" )
	strLinkID = GetSafeID( Request("LINKID"), "0" )
	strAct = GetSafeStr(Request("ACT"),20, "newlink" )
End Sub

Sub Main
	Dim bCanEditProjectlPortfolio
	If Not bIsDebug Then On Error Resume Next

	bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bCanEditProjectlPortfolio Then
		Call GetPortfolioLinkInfo()
  	Else
  		GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
  	End If
End Sub

Sub scriptFunc() %>
<SCRIPT><!--
function back() {
	goBack(document.LinkEdit, 'ProjectPortfolioEdit.asp');
}
function saveChanges(){
	ok_check_db('LinkEdit', 'ProjectPortfolioSave.asp');
}
//--></SCRIPT><%
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = _
		WriteHiddenTags( Array("PFID",strPortfolioID,"PGRID",strGroupID,"LINKID",strLinkID,"ACT",strAct) )
End Function%>