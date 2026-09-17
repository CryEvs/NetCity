<!-- #INCLUDE VIRTUAL="/asp/scripts/FileDocCmn.asp" -->
<!-- #INCLUDE file="FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub Main()
	Dim strDocID, objDocInfo

	strDocID = GetSafeID(Request("DOCID"), Null)
	strID = strDocID

	' Validation
	If Not (HasUserRight(arSchoolDocsEdit) Or HasUserRight(arSchoolDocsView) Or HasUserRight(arSchoolPublicDocsView)) Then GenerateError obLanguage("Common","kErrPageAccess")
	If Not bIsEMForSchool Then
		If Not objNSNET.IsSchoolDocPermissible(strDocID, strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")
	End If

	Set objDocInfo = objNSNET.GetSchoolDocInfo(strDocID)
	TestError(obLanguage("SetupSchoolResources","kErrorCannotGetDocInfo",strFunctionalityType))
	If objDocInfo.EOF Then
		GenerateError(obLanguage("SetupSchoolResources","kErrorCannotGetDocInfo",strFunctionalityType))
	End If
	strFileNameOrig = objDocInfo("FILENAME_ORIG")

	fileData = objDocInfo("AFILE")

	strDocFolder = kFolderName_SchoolDoc
End Sub
%>
