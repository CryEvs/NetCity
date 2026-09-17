<%@ Language=VBScript %>
<% ' © 2007-2011 IRTech. All rights reserved.

Option Explicit
Response.Buffer = TRUE
Response.Charset = "utf-8"
SetScriptTimeOut 900
Randomize
On Error Resume Next

Const PARENT_EXT_IMPORT_PATTERN = "ssssssssssssssssssssssssssssss" ' 30s

Dim objUploadComponent, resRequestParsing, requestData
Dim objImportComponent, strImportFileText, nLenImportFile
Dim resParseLine, strLine
Dim bOk, nPos, arrItem, strErrorLines, strWarningLines, i, iSuccess, strSeparator, nCnt
Dim strGender, dtBirthDate
Dim strUniqueCode
Dim arrImportParents
Dim rsSimilarOtherSchools
Dim rsSimilar
Dim j
Dim strRecord, iNew

strUniqueCode = ""

Do
	Randomize
	strUniqueCode = GetSafeLng(Left(Rnd()*10000,4),"1234")
Loop While Len(strUniqueCode) <> 4

%>
<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<%

Set objUploadComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUploadComponent")
Set resRequestParsing = objUploadComponent.ParseRequest()
If Not resRequestParsing.IsSuccess Then
	GenerateError obLanguage("Common","kUnexpErr")
End If
Set requestData = resRequestParsing.Data
strSeparator = GetSafeStr(requestData("Separator"), 1, ",")
strToken = requestData("AT")
Call GetTokenParams()
Call obTokenMgr.SetData(strToken,"strUniqueCode", strUniqueCode)
%>
<!-- #INCLUDE VIRTUAL=/asp/scripts/PageStates.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Popup.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE="importExtAddress_inc.asp" -->
<%If Not HasUserRight(arUsersEditStudents) Then GenerateError obLanguage("Common","kErrPageAccess")%>

<html lang="<%=strCurrLng%>"><head><title><%=NETSCHOOL_PRODUCT_NAME & " -  " & kTitleImportParents%></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
<body style="font-family: verdana, arial, helvetica; font-size:8pt">
<script>window.focus()</script>
<H2 align="center"><%=kTitleImportParents%></H2>
<H3 align="center"><%=obLanguage("Import","kTitle3")%>.<br><%=obLanguage("Curriculum","kPleaseWait")%>...</H3>
<%
If IsObject(obTokenMgr.GetData(strToken,"ImportParents") ) Then obTokenMgr.SetData strToken,"ImportParents", Null
Redim arrImportParents(0)

strErrorLines=""
strWarningLines=""
nPos = 0 : i = 0 : iSuccess = 0
iNew = 0

Call InitSchoolCityInfo()

Set objImportComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IImportComponent")
strImportFileText = requestData("File").Value

' title
For j = 1 To 3
	strLine = objImportComponent.GetLine(strImportFileText, nPos)
	Set resParseLine = objImportComponent.ParseLine(strLine, PARENT_EXT_IMPORT_PATTERN, strSeparator)
	If Not resParseLine.IsSuccess Then Exit For
Next

nLenImportFile = Len(strImportFileText)
Do While nPos < nLenImportFile
	If Not Response.IsClientConnected Then
		Response.End
	End If
	strLine = objImportComponent.GetLine(strImportFileText, nPos)
	Set resParseLine = objImportComponent.ParseLine(strLine, PARENT_EXT_IMPORT_PATTERN, strSeparator)
	i=i+1
	Response.Write i & " "
	Response.Flush
	arrItem = resParseLine.Data
	If Not resParseLine.IsSuccess Then
		strErrorLines = strErrorLines & strLine & "<br>&nbsp; " & IIF(IsDull(resParseLine.Message), obLanguage("Import","kErrParamNum"), resParseLine.Message)
		bOk = False
	ElseIf Not IsArray(arrItem) Then
		strErrorLines = strErrorLines & strLine & "<br>&nbsp; " & obLanguage("Import","kErrParam")
		Exit Do
	Else
		strGender = UCase(Left( Trim(arrItem(6) ), 1 ) )
		If Len(strGender)<>1 Or ((strGender<>obLanguage("Common","kMaleLet")) And (strGender<>obLanguage("Common","kFemaleLet")))  Then
			strErrorLines = strErrorLines & strLine&"<br>&nbsp; " & obLanguage("Import","kErrGender")
			bOk = False
		Else
			bOk = True
			arrItem(6) = strGender
		End If
	End If

	If bOk Then
		strRecord = obLanguage("Import","kRecord") & " " & Trim(CStr(arrItem(1))) & ": "
		arrItem(2) = CalcName(arrItem(2))	 ' LastName
		arrItem(3) = CalcName(arrItem(3))	 ' FirstName
		arrItem(4) = CalcName(arrItem(4))	 ' MiddleName

		If IsDull(arrItem(2)) Or IsDull(arrItem(3)) Then
			strErrorLines = strErrorLines & strLine & "<br>&nbsp; " & obLanguage("Import","kErrFirstOrLastName")
			bOk = False
		End If
	End If

	If bOk Then
		If IsBadFirstLetter(arrItem(2)) Or IsBadFirstLetter(arrItem(3)) Or IsBadFirstLetter(arrItem(4)) Then
			strErrorLines = strErrorLines & strLine & "<br>&nbsp; " & obLanguage("Common","kErrFirstLetter")
			bOk = False
		End If
	End If

	If bOk Then
		arrItem(5) = Trim(arrItem(5))
		If Not IsDull(arrItem(5)) Then
			dtBirthDate = Str2Date( arrItem(5) )
			If DateDiff( "d", dtBirthDate, NSDate(), 0,0) <= 0 Then
				arrItem(5) = Null
				dtBirthDate = Null
			End If
		Else
			dtBirthDate = Null
		End If

		Call GetSimilarParents()
		If nCnt > 0 Then
			strErrorLines = strErrorLines & strLine & obLanguage("Import","kWarn") & LCase(obLanguage("Common","kParent")) & obLanguage("Import","kFIOExistsInImportFile") &" - "& obLanguage("Import","kIgnored") &" )<br>"
		Else
			nCnt = objNSNET.GetYearSimilarUsersCount(strSchoolID, rlParent, arrItem(2), arrItem(3), arrItem(4), IIf(IsDull(dtBirthDate), Empty, dtBirthDate), strGender)
			If nCnt > 1 Then
				strErrorLines = strErrorLines & strLine & obLanguage("Import","kWarn") & obLanguage("Import","kParentFIOExists_Grater2") & " - " & obLanguage("Import","kIgnored") &" )<br>"
			Else
				If IsNull(arrItem(5)) Then
					strWarningLines = strWarningLines & strRecord & obLanguage("Import","kWarn2") & obLanguage("Import","kWarnBDay")
					bOK = False
				End If

	'			' check other schools
	'			Set rsSimilarOtherSchools = objNSNET.GetSimilarUsersFromOtherSchools(strSchoolID, rlParent, UCase(arrItem(2)), UCase(arrItem(3)), UCase(arrItem(4)), strGender)
	'			If Not rsSimilarOtherSchools.EOF Then
	'				strWarningLines = strWarningLines & IIF(bOK, strLine & obLanguage("Import","kWarn"),  "<br>") & LCase(obLanguage("Common","kParent")) & obLanguage("Import","kFIOExistsInOtherSchools") & DB2HTML(rsSimilarOtherSchools("SCHOOLNAME")) & " - "& obLanguage("Import","kDuble")
	'				bOK = False
	'			End If

				' new or not
				If nCnt = 0 Then
					strWarningLines = strWarningLines & IIF(bOK, strRecord & obLanguage("Import","kWarn2"),  "<br>") & arrItem(2) & " " & arrItem(3) & " " & arrItem(4) & " - " & obLanguage("Import","kNewParent")
					iNew = iNew + 1
					bOK = False
				End If

				Call CheckAddress(arrItem, nCnt = 0, 2, 3, 4, 8, 9, 10, 14, 15, 16) ' arrItem may be changed here!

				iSuccess = iSuccess+1
				arrImportParents(Ubound(arrImportParents)) = arrItem
				Redim Preserve arrImportParents(1+Ubound(arrImportParents))
			End If
		End If
		If Not bOK Then strWarningLines = strWarningLines &")<br>"
	End If	'bOk
Loop

Response.Write "<br>"
If strErrorLines<> "" Then
	Response.Write obLanguage("Import","kFailed")
	Response.Write strErrorLines
End If
If strWarningLines<> "" Then
	Response.Write obLanguage("Import","kWarnings")
	Response.Write strWarningLines
End If
Response.Write "<br><br><b>" & obLanguage("Import","kSuccess") & iSuccess & "<br>" & obLanguage("Import","kNewRecords") & iNew & "</b>"
Response.Write "<br><br>" & obLanguage("Import","kAssignedPasswordNew") & "<b>" & strUniqueCode & "</b><br>" & obLanguage("Import","kRememberTheUniqueCode")
Call obTokenMgr.SetData(strToken, "ImportParents", arrImportParents )

%><br><br>
<input type="button" value="<%=obLanguage("Common","kBack")%>" onclick="window.close();">
<%If iSuccess>0 Then%><input type="button" value="<%=obLanguage("Import","kBeginImport")%>" onclick="opener.ok('MainForm','/asp/SetupSchool/ImportExt/importParentsExtSave.asp');window.close();"><%End If%>
</body></html>

<%
Sub GetSimilarParents()
	Dim theItem, i
	nCnt = 0
	For i = 0 To UBound(arrImportParents)-1
		theItem = arrImportParents(i)
		If strGender = theItem(6) Then
			If arrItem(2) = theItem(2) Then
				If arrItem(3) = theItem(3) Then
					If arrItem(4) = theItem(4) Then nCnt = 1 : Exit Sub
				End If
			End If
		End If
	Next
End Sub

Function CalcName( ByVal theName )
	Dim strName
	strName = Left( Trim( theName ), 20 )
	If Not IsDull(strName) Then strName = Ucase(Left(strName, 1)) & Right(strName, Len(strName) - 1)
	CalcName = strName
End Function

Function IsBadFirstLetter(theName)
	Dim strFLetter

	IsBadFirstLetter = False
	If IsDull(theName) Then
		Exit Function
	End If
	strFLetter = UCase(Left(theName, 1))
	If strFLetter <> obLanguage("Common","kYoLetter") And (obLanguage.Compare(strFLetter,obLanguage("Common","kFirstLetter")) < 0 Or obLanguage.Compare(strFLetter,obLanguage("Common","kLastLetter")) > 0 ) Then
		IsBadFirstLetter = True
	End If
End Function
%>
