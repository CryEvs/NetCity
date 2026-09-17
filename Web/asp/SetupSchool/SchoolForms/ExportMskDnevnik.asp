<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->
<% ' © 2012 IRTech. All rights reserved.

Dim objSchoolComponent, exportResult
Dim objDownloadComponent, transferResult
On Error Resume Next

Set objSchoolComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
Set exportResult = objSchoolComponent.ExportSchoolInfo(strCurrYearID)
TestError "Ошибка при выгрузке"
If Not exportResult.IsSuccess Then
	GenerateError exportResult.Message
End If

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
Set transferResult = objDownloadComponent.TransferData(exportResult.Data, "PersonalData.xls")
If Not transferResult.IsSuccess Then
	GenerateError transferResult.Message
End If

Set exportResult = Nothing
Set transferResult = Nothing
Set objDownloadComponent = Nothing

TestError obLanguage("Common", "kLoadError")%>
