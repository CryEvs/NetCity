<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim result
Dim objSecurityComponent
Dim activeSessionsList
	
Set objSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
Set activeSessionsList = objSecurityComponent.GetActiveSessions(strSchoolId)

TestError Err.Description
	
Set result = new JSONResult

Call result.AddData("activeSessions", activeSessionsList)

Response.Write result%>