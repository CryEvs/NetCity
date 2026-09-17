<!-- #INCLUDE FILE="../headernoscreen.asp" -->
<!-- #INCLUDE FILE="../scripts/teacher.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	CLID=<Class ID>
'   GSPID=<GRADINGSYSTEM ParameterID>
'	GSID=<GRADINGSYSTEM's ID>
'   CP=<Names of class parameter fields>
'   SP=<Names of student parameter fields>

Function NormalizeValue( strValue, strType )
	If Not bIsDebug Then On Error Resume Next
	Dim lngValue
	If strType = "B" Then
		NormalizeValue = IIF( Not IsEmpty(strValue) And strValue <> "N", "Y", "N" )
	ElseIf strType = "N" Then
		NormalizeValue = IIF( Not IsEmpty(GetSafeLngWithOutError(strValue, Empty)), strValue, "0" )
	ElseIf strType = "L" Then
		lngValue = GetSafeLngWithOutError( strValue, Empty )
		If IsEmpty(lngValue) Then 
			NormalizeValue = "0"
		ElseIf lngValue < 0 Then
			NormalizeValue = "0"
		Else 
			NormalizeValue = strValue
		End If
	Else 
		NormalizeValue = strValue
	End If
End Function 

If Not HasUserRight(arLASetPolicies) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strSubjectGroupId, strActivityID, strGradingID
Dim strGSPID
Dim arrCParams, arrSParams
Dim i, strName, strType, strPID, strSID, strValue

strSubjectGroupId = GetSafeID( Request.Form("CLID"), NULL ) 
strActivityID = GetSafeActivityID( Request.Form("LAID") )
If strActivityID = "" then GenerateError(obLanguage("Common","kNoAccess"))

If Request.Form("CP").Count > 0 Then
	strGSPID = GetSafeID(Request.Form("GSPID"),"0")
	If strGSPID = "0" Then
		ReDim arrCParams( 1, Request.Form("CP").Count - 1 )
	Else
		ReDim arrCParams( 1, Request.Form("CP").Count )
	End If

	For i = 1 To Request.Form("CP").Count
		strName = Request.Form("CP")(i)

		strType = Mid(strName, 2, 1)
		strPID = Mid(strName, 3)
		strValue = NormalizeValue( GetSafeStr(Request.Form(strName), 2000, Empty), strType )
		
		arrCParams(0, i-1) = CLng(strPID)
		arrCParams(1, i-1) = strValue
	Next

	If strGSPID <> "0" Then
		arrCParams(0, UBound(arrCParams,2)) = CLng(strGSPID)
		arrCParams(1, UBound(arrCParams,2)) = GetSafeID(Request.Form("GSID"),"0")
	End If
Else
	strGSPID = GetSafeID(Request.Form("GSPID"),"0")
	If strGSPID <> "0" Then
		ReDim arrCParams( 1, 0 )
		arrCParams(0, 0) = CLng(strGSPID)
		arrCParams(1, 0) = GetSafeID(Request.Form("GSID"),"0")
	End If
End If

If Request.Form("SP").Count > 0 Then
	ReDim arrSParams( 2, Request.Form("SP").Count - 1 )

	For i = 1 To Request.Form("SP").Count
		strName = Request.Form("SP")(i)

		strType = Mid(strName, 2, 1)
		strPID = Mid(strName, 3, InStr(3, strName, "S") - 3 )
		strSID = Mid(strName, InStr(3, strName, "S") + 1 )
		strValue = NormalizeValue( GetSafeStr(Request.Form(strName), 2000, Empty), strType )
		
		arrSParams(0, i-1) = CLng(strSID)
		arrSParams(1, i-1) = CLng(strPID)
		arrSParams(2, i-1) = strValue
	Next
End If

On Error Resume Next
Call objNSNET.SaveActivityParameters(strSubjectGroupId, strActivityID, arrCParams, arrSParams)
TestError obLanguage("LearnApp","kErrSavingParameters")

Call WriteJsonResult(CStr(obLanguage("LearnApp","kPoliciesAreSaved")), False, 0)
%>
