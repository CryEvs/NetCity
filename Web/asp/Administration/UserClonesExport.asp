<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNoPopUp.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim fiops, role, roleName
Dim objComponent, objDownloadComponent, exportResult, transferResult
fiops = GetSafe("FIOPS", "")
roleName = GetSafe("kRoles","kChildren")
role = IIF(roleName = "kChildren", role_Student, IIF(roleName = "kParents", role_Parent, role_Teacher))

Set objComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUserClonesComponent")
TestError obLanguage("ServAdmin", "kUnknownError")

Server.ScriptTimeOut = Server.ScriptTimeOut * 10
Set exportResult = objComponent.ExportUserClones(role, fiops)
TestError obLanguage("ServAdmin", "kUnknownError")

Set objDownloadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IDownloadComponent")
Set transferResult = objDownloadComponent.TransferData(exportResult.Data, roleName & "Clones" & fiops & ".xls")
Call obComponentMgr.ReleaseComponent(objDownloadComponent)

If Not transferResult.IsSuccess Then GenerateError transferResult.Message


Set exportResult = Nothing
Set objDownloadComponent = Nothing

TestError obLanguage("Common", "kLoadError")
%>