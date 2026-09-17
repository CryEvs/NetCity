<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Screen.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/ScreenNonPrint.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim blobData, strSchoolNotImportedList, bSchoolsAlreadyCreated, schoolList
Dim objEGEComponent, readResult, readResultData
Dim strGlobalYearID
Dim nEGEResultsCount
Dim bError, strErrorMsg

Sub ReadState
	strGlobalYearID = GetSafeID(obTokenMgr.GetData(strToken, stGlobalYearID), GetSafeID(request.QueryString("CMNYEAR"), Null))
	blobData = requestData("file").Param.Bytes
End Sub

Sub Main
	Dim resultList, i, egeResult
	Set objEGEComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGiaComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")

	Set readResult = objEGEComponent.ParseImportEGEFile(blobData, strGlobalYearID, strEMID)
	TestResult readResult, obLanguage("Import", "kImportEGEResultsFaild")

	Set readResultData = readResult.Data
	resultList = readResultData.EGEResultRowList.ToArray()

	nEGEResultsCount = UBound(resultList) + 1
	Call obTokenMgr.SetData(strToken, stReadEGEResults, readResultData)

	If bError Then
		Call WriteJsonResult(strErrorMsg, True, -1)
	Else
		Call WriteJsonResult(Replace(obLanguage("Import","kEGEResultsWillBeImported"), "%", nEGEResultsCount), False, 0)
	End If
End Sub
%>
