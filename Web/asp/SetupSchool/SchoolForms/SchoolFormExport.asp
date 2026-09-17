<!-- #INCLUDE FILE="../../headernoscreen_Year.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim nStatFormId, statFromEnumItem
Dim objSchoolFormComponent, objHelper, objDownloadComponent
Dim exportResult, strFileName
Dim transferResult, strShortSchoolName
Dim bIsMNS

nStatFormId = GetSafeLng(Request("STATFORM"), StatForm_Osh1)
bIsMNS = Not IsDull(Request("MNS"))

Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
Set objHelper = comHelper.AspHelper
TestError obLanguage("SchoolInfo","kErrFSSOFormxport")
If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("SchoolInfo","kErrFSSOFormxport")

strShortSchoolName = objNSNET.GetSchoolName(strSchoolID)

Set exportResult = objSchoolFormComponent.ExportForm(nStatFormId, strCurrYearID, bIsMNS)
TestError obLanguage("SchoolInfo","kErrFSSOFormxport")
If Not exportResult.IsSuccess Then GenerateError exportResult.Message

Set statFromEnumItem = objHelper.GetEnumItem(objHelper.Enums.SchoolForm, nStatFormId)
strFileName = strShortSchoolName & "_" & statFromEnumItem.Name & ".xls"
TestError obLanguage("SchoolInfo","kErrFSSOFormxport")

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
Set transferResult = objDownloadComponent.TransferData(exportResult.Data, strFileName)
If Not transferResult.IsSuccess Then
	GenerateError transferResult.Message
End If
Set exportResult = Nothing
Set transferResult = Nothing
Set statFromEnumItem = Nothing
Set objDownloadComponent = Nothing
TestError obLanguage("Common", "kLoadError")
%>
