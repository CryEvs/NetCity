<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->

<% ' © 2012 IRTech. All rights reserved.

Dim objKTPComponent, exportResult
Dim objDownloadComponent, transferResult

Dim nPlanID

On Error Resume Next

nPlanID = GetSafeLng(Request("PLANID"), Null)

Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")
TestError obLanguage("Curriculum", "kCantCreateObj")

Set exportResult = objKTPComponent.ExportKTP(nPlanID)
TestError obLanguage("Curriculum", "kCantExportVariant")
If Not exportResult.IsSuccess Then
	GenerateError exportResult.Message
End If

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
Set transferResult = objDownloadComponent.TransferData(exportResult.Data, "КТП.xls")
If Not transferResult.IsSuccess Then
	GenerateError transferResult.Message
End If

Set exportResult = Nothing
Set transferResult = Nothing
Set objDownloadComponent = Nothing

TestError obLanguage("Common", "kLoadError")%>
