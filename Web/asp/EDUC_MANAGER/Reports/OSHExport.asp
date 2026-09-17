<!-- #INCLUDE FILE="../../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim strGlobalYearID, nStatFormId, statFromEnumItem
Dim objHelper
Dim objSchoolFormComponent, objMorfComponent, AddressRefComponent, exportResult
Dim objDownloadComponent, transferResult, strFileName, bIsEmForm
Dim filterEMID
bIsEmForm = GetSafeBool(Request("bIsEmForm"), False)
strGlobalYearID = GetSafeStr(Request("CMNYEAR"),9,GetSafeStr(obTokenMgr.GetData( strToken, stGlobalYearID ),9,"0"))
nStatFormId = GetSafeLng(Request("STATFORM"), StatForm_Osh1)
filterEMID = GetSafeLng(Request("FilterEMID"),Null)'Локальный EmId из фильтра
Dim bIsMNS
Dim bFormSpec

SetScriptTimeOut 900
bIsMNS = GetSafeLng(Request("MNS"), 0)=1
bFormSpec = GetSafeLng(Request("FS"), 0)

If strGlobalYearID = "0" Then GenerateError obLanguage("EMReports","kNoSchoolYearsInDB")
Call obTokenMgr.SetData(strToken, stGlobalYearID, strGlobalYearID)
If Request("expType") <> "morf" Then
	Set objHelper = comHelper.AspHelper
	Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
	TestError obLanguage("SchoolInfo","kErrFSSOFormxport")
	If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("SchoolInfo","kErrFSSOFormxport")
	Set statFromEnumItem = objHelper.GetEnumItem(objHelper.Enums.SchoolForm, nStatFormId)

	If bIsEmForm Then
		Set exportResult = objSchoolFormComponent.ExportEmForm(nStatFormId, CLng(strGlobalYearID), CLng(filterEMID), bFormSpec)
		TestError obLanguage("SchoolInfo","kErrFSSOFormxport")

		strFileName = statFromEnumItem.Name & ".xls"
	Else
		If Request("expType") = "aggregate" Then
			Set exportResult = objSchoolFormComponent.AggregateEmForms(filterEMID, strGlobalYearID, nStatFormId, bFormSpec)
			strFileName = objNSNET.GetEducManagementName(filterEMID) & "_" & statFromEnumItem.Name & ".xls"
		Else
			Set exportResult = objSchoolFormComponent.ExportEmForms(filterEMID, strGlobalYearID, nStatFormId, bIsMNS)
			strFileName = statFromEnumItem.Name & ".zip"
		End If
	End If
Else
	Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
	Set AddressRefComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IAddressRefComponent")
	Set objMorfComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IMorfComponent")

	TestError obLanguage("EMReports","kCantCreateMorfComponent")
	If objMorfComponent Is Nothing Then GenerateError obLanguage("EMReports","kCantCreateMorfComponent")

	Set exportResult = objMorfComponent.ExportEmForm(nStatFormId, filterEMID, strGlobalYearID)

	strFileName = "Экспорт в МОРФ.zip"
End if

TestResult exportResult, Null

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
'TODO. убрать в objDownloadComponent.TransferData
Response.Cookies("fileDownloadToken") = Request("VER")
Set transferResult = objDownloadComponent.TransferData(exportResult.Data, strFileName)
If Not transferResult.IsSuccess Then
	GenerateError transferResult.Message
End If

Set exportResult = Nothing
Set transferResult = Nothing
Set objDownloadComponent = Nothing

TestError obLanguage("Common", "kLoadError")
%>
