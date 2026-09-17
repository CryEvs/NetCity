<% ' © 2007-2016 IRTech. All rights reserved.

Sub MarkEntryPage(strScriptName)
	Dim objContextComponent
	On Error Resume Next

	Set objContextComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IContextComponent")
	Call objContextComponent.MarkEntryPage(strScriptName)
End Sub

Function GetNextEntryPage()
	Dim objContextComponent
	On Error Resume Next

	Set objContextComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IContextComponent")
	GetNextEntryPage = objContextComponent.GetNextEntryPage()
End Function
%>