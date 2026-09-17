<% ' © 2007-2008 IRTech. All rights reserved.
'============= ADO Commands =========================================
Function ADOCmd( objCon, strCmd )
	On Error Resume Next
	Dim objCmd
	Set objCmd = Server.CreateObject("ADODB.Command")
	objCmd.ActiveConnection = objCon
	objCmd.CommandText = strCmd
	TestError "ADO Command Error"
	Set ADOCmd = objCmd
End Function

Sub ADOCmdAddStr( objCmd, strParName, strParValue, lngSize )
	On Error Resume Next
	objCmd.Parameters.Append objCmd.CreateParameter( strParName, adVarChar, adParamInput, lngSize, strParValue )
	TestError "Invalid ADO Parameter (" & strParName & ")"
End Sub

Sub ADOCmdAddLng( objCmd, strParName, lngParValue )
	On Error Resume Next
	objCmd.Parameters.Append objCmd.CreateParameter( strParName, adInteger, adParamInput, 4, lngParValue )
	TestError "Invalid ADO Parameter (" & strParName & ")"
End Sub

Sub ADOCmdAddDbl( objCmd, strParName, dblParValue )
	On Error Resume Next
	objCmd.Parameters.Append objCmd.CreateParameter( strParName, adDouble, adParamInput, , dblParValue )
	TestError "Invalid ADO Parameter (" & strParName & ")"
End Sub

Sub ADOCmdAddDate( objCmd, strParName, dblParValue )
	On Error Resume Next
	objCmd.Parameters.Append objCmd.CreateParameter( strParName, adDate, adParamInput, , dblParValue )
	TestError "Invalid ADO Parameter (" & strParName & ")"
End Sub

Sub ADOCmdAddDateP( objCmd, strParName )
	On Error Resume Next
	objCmd.Parameters.Append objCmd.CreateParameter( strParName, adDate, adParamInput )
	TestError "Invalid ADO Parameter (" & strParName & ")"
End Sub
%>
