<!-- #INCLUDE VIRTUAL="/asp/scripts/FileDocCmn.asp" -->
<!-- #INCLUDE file="ExplanatoryNote_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub Main()
	Dim strPlanID, objDocInfo

	strPlanID = GetSafeID(Request("PlanID"), Null)
	strID = strPlanID

	Set objDocInfo = objNSNET.GetExplanatoryNoteDocInfo(strPlanID)
	TestError kErrorCannotGetSubjPlansInfo
	If objDocInfo.EOF Then
		GenerateError kErrorCannotGetSubjPlansInfo
	End If
	strFileNameOrig = objDocInfo("FILENAME_ORIG")

	fileData = objDocInfo("AFILE")

	strDocFolder = kFolderName_Subjectplans
End Sub
%>
