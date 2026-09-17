<% ' © 2007-2016 IRTech. All rights reserved.
Dim objNSNET, objNSNETWork, objNSNETArch, objLA
Call StartTimeLog("OpenConn")

On Error Resume Next
Set objNSNETWork = obComponentMgr.Resolve("NS_DAComWrapper.ICOMDataAccess", "work")
if err.number<>0 Then ShowError(err.description)

objNSNETWork.SetWorkConnection()
if err.number<>0 Then ShowError(err.description)
Set objNSNETArch = obComponentMgr.Resolve("NS_DAComWrapper.ICOMDataAccess", "arch")
if err.number<>0 Then ShowError(err.description)

objNSNETArch.SetArchConnection()
if err.number<>0 Then ShowError(err.description)
SetWorkConnection
if err.number<>0 Then ShowError(err.description)

Set objLA = obComponentMgr.Resolve("NetCity.Components.Abstraction.ILaComponent")
if err.number<>0 Then ShowError(err.description)

If Not objLA.CheckConnection Then
	ShowError obLanguage("Common","kErrNoAccessDB_LA") & ": " & err.description
End If
Call EndTimeLog("OpenConn")

Sub SetWorkConnection
	Dim strErr
	If Not objNSNETWork.IsCanConnect(TRUE, strErr) Then ShowError obLanguage("Common","kErrNoAccessDB_Work") & ": " & strErr
	Set objNSNET = objNSNETWork
	
	Call CheckVersion(True)
End Sub

Sub SetArchConnection
	Dim strErr
	If Not objNSNETArch.IsCanConnect(FALSE, strErr) Then ShowError obLanguage("Common","kErrNoAccessDB_Arch") & ": " & strErr 
	TestError(obLanguage("Common","kErrNoAccessDB_Work"))
	Set objNSNET = objNSNETArch

	Call CheckVersion(False)
End Sub

' VERSION FORMAT: NN.NN
Sub CheckVersion( bWork )
	Call objNSNET.CheckVersion()
End Sub

Sub ShowError( strError )
	If CheckIsAjaxCall() Then
		Call WriteAjaxErrorResponse(500, strError)
	Else
		Response.Clear
		%><html><head><meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8"></head><body><%=DB2HTML_BR(strError)%></body></html><%
		Response.End
	End If
End Sub
%>
