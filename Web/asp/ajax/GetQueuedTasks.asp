<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<%On Error Resume Next

Dim objQueueComponent
Dim result
Dim objGetTasksResult
	
Call InitQueueComponent

Set result = new JSONResult

Set objGetTasksResult = objQueueComponent.GetQueuedTasks(strUserId)
TestResult objGetTasksResult, Null

Call result.AddData("tasks", objGetTasksResult.Data)

Response.Write result

Sub InitQueueComponent
	Set objQueueComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQueueComponent")
	If Not IsObject(objQueueComponent) Then
		GenerateError obLanguage("Messages","kCantCreateMailComponent")
	End If
End Sub
%>