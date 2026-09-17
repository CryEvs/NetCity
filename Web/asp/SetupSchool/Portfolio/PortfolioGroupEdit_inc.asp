<% ' © 2007-2008 IRTech. All rights reserved.
Dim strGroupName, bIsGroupsExists, nItemCount
Dim objRsGroups

Function GetPageTitle()
	If strGroupID <> "0" Then GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleGroupEdit") Else GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleGroupCreate") 
End Function

Sub GetPortfolioGroupInfo( strPortfolioID )
	If Not bIsDebug Then On Error Resume Next
	
	If strGroupID <> "0" Then
		strGroupName = objNSNET.GetPortfolioGroupName(strGroupID )
		TestError obLanguage("ResourceGroups","kCantGetGroupName")
	Else
		strGroupName = obLanguage("ResourceGroups","kNewGroup")
	End If
	Set objRsGroups = GetPortfolioGroupTree( strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioTree")

	bIsGroupsExists = Not objRsGroups.EoF
	If strGroupID = "0" Then nItemCount = objRsGroups.RecordCount + 1 Else nItemCount = objRsGroups.RecordCount
		nMaxLen_GroupName = kMaxLen_GroupName
End Sub%>