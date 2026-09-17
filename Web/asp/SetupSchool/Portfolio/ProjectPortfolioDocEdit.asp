<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE FILE="PortfolioDocEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID

Sub ReadStateSpecial()
	strPortfolioID = GetSafeID(Request("PFID"), GetSafeID(obTokenMgr.GetData(strToken, stProjPortfolioID), "0"))
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbProjectPortfolios
 End Function

Sub Main
	Dim bCanEditProjectlPortfolio

	If Not bIsDebug Then On Error Resume Next

	bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID)
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bCanEditProjectlPortfolio Then
		Call GetPortfolioDocInfo(strPortfolioID)
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
	End If
End Sub

Sub scriptFunc() %>
	<SCRIPT><!--
		function Back() {
			goBack(document.DocBack, 'ProjectPortfolioEdit.asp');
		}

		function saveChanges(){
			ok_check_db('DocEdit', 'ProjectPortfolioFileSave.asp');
		}
	//--></SCRIPT><%
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = _
		WriteHiddenTags(Array("PFID",strPortfolioID,"PGRID",strGroupID,"DOCID",strDocID,"ACT",strAct))
End Function%>