<!-- #INCLUDE VIRTUAL="/asp/scripts/FileDocCmn.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub Main()
	Dim strDocID, objDocInfo

	strDocID = GetSafeID(Request("DOCID"), Null)
	strID = strDocID

	Set objDocInfo = objNSNET.GetPortfolioDocInfo(strDocID)
	TestError obLanguage("SetupSchoolPortfolio","kErrorCannotGetPortDocInfo")
	If objDocInfo.EOF Then
		GenerateError obLanguage("SetupSchoolPortfolio","kErrorCannotGetPortDocInfo")
	End If
	strFileNameOrig = objDocInfo("FILENAME_ORIG")

	fileData = objDocInfo("AFILE")

	strDocFolder = kFolderName_Portfolio
End Sub%>