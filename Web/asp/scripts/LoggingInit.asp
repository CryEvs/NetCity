<% ' © 2007-2010 IRTech. All rights reserved.
Sub TraceLog(message)
	Call comHelper.LogHelper.Trace(message)
End Sub

Sub StartTimeLog(logger)
	Call comHelper.LogHelper.StartTimeLog(logger)
End Sub

Sub EndTimeLog(logger)
	Call comHelper.LogHelper.EndTimeLog(logger)
End Sub
%>