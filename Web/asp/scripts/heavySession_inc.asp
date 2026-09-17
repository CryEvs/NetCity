<% ' © 2007-20011 IRTech. All rights reserved.
Dim heavySessionComponent
Set heavySessionComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IHeavySessionsComponent")
Dim heavySessionId

Sub StartHeavySession( sessionType )
	Dim result
	Set result = heavySessionComponent.StartHeavySession(sessionType)
	If Not result.IsSuccess Then
		GenerateError result.Message
	End If
	heavySessionId = result.Data
	Call obTokenMgr.SetData(strToken, stHeavySessionD, heavySessionId)
End Sub

Function IsHeavySessionPosible()
	IsHeavySessionPosible = heavySessionComponent.HeavySessionPosible
End Function

Sub ReleaseHeavySession()
	Dim result
	If IsEmpty(heavySessionId) Then
		heavySessionId = obTokenMgr.GetData(strToken, stHeavySessionD)
	End If
	Call obTokenMgr.SetData(strToken, stHeavySessionD, Empty)
	Set result = heavySessionComponent.ReleaseHeavySession(heavySessionId)
	If Not result.IsSuccess Then
		GenerateError result.Message
	End If
End Sub
%>
