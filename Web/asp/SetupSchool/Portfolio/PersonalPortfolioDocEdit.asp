<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioDocEdit_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub Main
	Dim bIsPortfolioExists
	Dim strPortfolioID
	If Not bIsDebug Then On Error Resume Next

	bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID)
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	If Not bIsPortfolioExists Then GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	Call GetPortfolioDocInfo(strPortfolioID)
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbPersonalPortfolios
 End Function

Sub scriptFunc() %>
	<script>
		function Back() {
			goBack(document.DocBack, 'PersonalPortfolioEdit.asp');
		}

		function saveChanges() {
			ok_check_db('DocEdit', 'PersonalPortfolioFileSave.asp');
		}
	</script><%
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = _
		WriteHiddenTags(Array("PGRID",strGroupID, "DOCID",strDocID, "ACT",strAct))
End Function%>