<!-- #INCLUDE FILE="../headernoscreen_Year.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim objIntegrationNDComponent, objHelper, objDownloadComponent
Dim exportResult, strFileName
Dim transferResult

Set objIntegrationNDComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IIntegrationNDComponent")
Set objHelper = comHelper.AspHelper

TestError obLanguage("LearnApp","kErrUsersNDExport")
If objIntegrationNDComponent Is Nothing Then GenerateError obLanguage("LearnApp","kErrUsersNDExport") 'Исправить

Set exportResult = objIntegrationNDComponent.ExportUsersToXML(strSchoolID)
TestError obLanguage("LearnApp","kErrUsersNDExport")
If Not exportResult.IsSuccess Then GenerateError exportResult.Message

strFileName = strSchoolName & ".xml"

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
Set transferResult = objDownloadComponent.TransferData(exportResult.Data, strFileName)
If Not transferResult.IsSuccess Then
	GenerateError transferResult.Message
End If

Set exportResult = Nothing
Set transferResult = Nothing
Set objDownloadComponent = Nothing

TestError obLanguage("Common", "kLoadError")
%>
