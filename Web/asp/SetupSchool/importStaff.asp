<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

On Error Resume Next

Const STAFF_IMPORT_PATTERN = "sssSsss"

Dim objImportComponent, strImportFileText, nLenImportFile
Dim resParseLine, strLine
Dim bOk, nPos, arrItem, strErrorLines, strWarningLines, i, iSuccess, strSeparator, bIsSimilar
Dim strGender, dtBirthDate
Dim strUniqueCode
Dim dctImportStaff
Dim rsSimilarOtherSchools
Dim nLineCount
Dim strRolesAbbrev
Dim strLetter
Dim strRoles
Dim strRegExpAlphabet, regExpAlphabet, strBadMessage
Dim strRegExpFio, regExpFio


Set dctImportStaff = Server.CreateObject("NetCity.Storage")
strUniqueCode = ""

Do
	Randomize
	strUniqueCode = GetSafeLng(Left(Rnd() * 10000, 4), "1234")
Loop While Len(strUniqueCode) <> 4

strSeparator = GetSafeStr(obTokenMgr.GetData(strToken, "Separator"), 1, ",")

Call obTokenMgr.SetData(strToken, "strUniqueCode", strUniqueCode)

If Not HasUserRight(arUsersEditStaff) Then GenerateError obLanguage("Common","kErrPageAccess")

If IsObject(obTokenMgr.GetData(strToken, "ImportStaff")) Then obTokenMgr.SetData strToken, "ImportStaff", Null

Dim kStaff
kStaff = LCase(obLanguage("Common", "kStaff"))

strErrorLines = ""
strWarningLines = ""
nPos = 0 : i = 0 : iSuccess = 0

Set objImportComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IImportComponent")
strImportFileText = obTokenMgr.GetData(strToken, "ImportFile")
nLenImportFile = Len(strImportFileText)

nLineCount = objImportComponent.GetLineCount(strImportFileText)
TestError obLanguage("Import","kErrImport")

Response.Write nLineCount
Response.Write Chr(1)
Response.Flush

strRolesAbbrev = objNSNET.GetStaffAbbrevStr()

Call AnalyzeFile
TestError obLanguage("Import","kErrImport")

Response.Write Chr(1)
Response.Flush

' количество записей, которые будут импортированы
Response.Write iSuccess
Response.Write Chr(1)
Response.Flush

If strErrorLines <> "" Then
	Response.Write obLanguage("Import","kFailed")
	Response.Write "<br /><table class=""table table-bordered table-striped"">" & strErrorLines & "</table>"
End If

If strWarningLines <> "" Then
	Response.Write obLanguage("Import","kWarnings")
	Response.Write "<br /><table class=""table table-bordered table-striped"">" & strWarningLines & "</table>"
End If

Response.Write "<div class=""well""><b>" & obLanguage("Import","kSuccess") & iSuccess & "</b></div>"
If iSuccess > 0 Then
	Response.Write "<div class=""alert alert-warning"">" & obLanguage("Import","kAssignedPassword") & "<b>" & strUniqueCode & "</b><br>" & obLanguage("Import","kRememberTheUniqueCode") & "</div>"
	Call obTokenMgr.SetData(strToken, "ImportStaff", dctImportStaff)
End If

Response.Flush

Sub WriteAjaxErrorResponse(nErrorCode, strText)
	Response.Write Chr(2)
	Response.Write strText
	Response.Write Chr(2)

	Response.Flush
End Sub

Sub AnalyzeFile()
	Dim ii
	Dim strMaleLetter, strFemaleLetter

	strMaleLetter = obContext.LocalSettings.MaleLetter
	strFemaleLetter = obContext.LocalSettings.FemaleLetter

	strRegExpAlphabet = obContext.LocalSettings.RegExpAlphabet
	strRegExpFio = obContext.LocalSettings.RegExpFio
	strBadMessage = obLanguage("Common","kbadFio")

	Set regExpFio = Nothing
	If Not IsDull(strRegExpFio) Then
		Set regExpFio = new RegExp
		regExpFio.Global = True
		regExpFio.Ignorecase = True
		regExpFio.Pattern = strRegExpFio
	End If

	Set regExpAlphabet = new RegExp
	regExpAlphabet.Global = True
	regExpAlphabet.Pattern = "[" & strRegExpAlphabet & "]"

	Do While nPos < nLenImportFile
		If Not Response.IsClientConnected Then
			Response.End
		End If

		strLine = objImportComponent.GetLine(strImportFileText, nPos)
		Set resParseLine = objImportComponent.ParseLine(strLine, STAFF_IMPORT_PATTERN, strSeparator)
		i = i + 1
		Response.Write i & " "
		Response.Flush
		arrItem = resParseLine.Data
		If Not resParseLine.IsSuccess Then
			strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & IIF(IsDull(resParseLine.Message), obLanguage("Import","kErrParamNum"), resParseLine.Message) & "</td></tr>"
			bOk = False
		ElseIf Not IsArray(arrItem) Then
			strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrParam") & "</td></tr>"
			Exit Do
		Else
			strGender = UCase(Left(Trim(arrItem(4)), 1))
			If Len(strGender) <> 1 Or ((strGender <> obLanguage("Common","kMaleLet")) And (strGender <> obLanguage("Common","kFemaleLet")))  Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrGender") & "</td></tr>"
				bOk = False
			Else
				bOk = True
				arrItem(4) = strGender
				If UCase(Trim(arrItem(6))) = "" Then arrItem(6) = "У"
				strRoles = UCase(Trim(arrItem(6)))
				For ii = 1 to Len(strRoles)
					strLetter = Mid(strRoles, ii, 1)
					If InStr(strRolesAbbrev, strLetter) = 0 Then
						bOk = False : strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kWrongStaffRoles") & "</td></tr>"
						Exit For
					End If
					Next
			End If
		End If

		If bOk Then
			arrItem(1) = CalcName(arrItem(1))	 ' LastName
			arrItem(2) = CalcName(arrItem(2))	 ' FirstName
			arrItem(3) = CalcName(arrItem(3))	 ' MiddleName

			If IsDull(arrItem(1)) Or IsDull(arrItem(2)) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kErrFirstOrLastName") & "</td></tr>"
				bOk = False
			End If
		End If

		If bOk Then
			If IsBadFio(arrItem(1)) Or IsBadFio(arrItem(2)) Or IsBadFio(arrItem(3)) Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & strBadMessage & "</td></tr>"
				bOk = False
			End If
		End If

		If bOk Then
			arrItem(5) = Trim(arrItem(5))
			If Not IsDull(arrItem(5)) Then
				dtBirthDate = Str2Date(arrItem(5))
				If DateDiff("d", dtBirthDate, NSDate(), 0, 0) <= 0 Then
					arrItem(5) = Null
					dtBirthDate = Null
				Else
					arrItem(5) = dtBirthDate
				End If
			Else
				arrItem(5) = Null
				dtBirthDate = Null
			End If

			bIsSimilar = IsSimilarStaff()
			If Not bIsSimilar Then bIsSimilar = (objNSNET.GetYearSimilarUsersCount(strSchoolID, 0, arrItem(1), arrItem(2), arrItem(3), IIf(IsDull(dtBirthDate), Empty, dtBirthDate), strGender) > 0)
			If bIsSimilar Then
				strErrorLines = strErrorLines & "<tr><td>" & strLine & "</td><td>" & kStaff & obLanguage("Import","kFIOExists") & " - " & obLanguage("Import","kIgnored") & "</td></tr>"
			Else
				iSuccess = iSuccess + 1
				dctImportStaff.Add i, arrItem

				If IsNull(arrItem(5)) Then strWarningLines = strWarningLines & "<tr><td>" & strLine & "</td><td>" & obLanguage("Import","kWarnBDay") : bOK = False

				' check other schools
				Set rsSimilarOtherSchools = objNSNET.GetSimilarUsersFromOtherSchools(strSchoolID, 0, UCase(arrItem(1)), UCase(arrItem(2)), UCase(arrItem(3)), strGender, 0)
				If Not rsSimilarOtherSchools.EOF Then
					strWarningLines = strWarningLines & IIF(bOK, "<tr><td>" & strLine & "</td><td>", "<br>") & kStaff & obLanguage("Import","kFIOExistsInOtherSchools") & DB2HTML(rsSimilarOtherSchools("SCHOOLNAME")) & " - " & obLanguage("Import","kDuble")
					bOK = False
				End If

				If Not bOK Then strWarningLines = strWarningLines & "</td></tr>"
			End If
		End If	'bOk
	Loop
End Sub 

Function IsSimilarStaff()
	Dim theItem, i

	For Each theItem in dctImportStaff.Values
		If strGender = theItem(4) Then
			If arrItem(1) = theItem(1) Then
				If arrItem(2) = theItem(2) Then
					If arrItem(3) = theItem(3) Then IsSimilarStaff = True : Exit Function
				End If
			End If
		End If
	Next

	IsSimilarStaff = False
End Function

Function CalcName(ByVal theName)
	Dim strName

	strName = Left(Trim(theName), 20)
	If Not IsDull(strName) Then strName = Ucase(Left(strName, 1)) & Right(strName, Len(strName) - 1)
	CalcName = strName
End Function

Function IsBadFio(theName)
	If regExpFio is Nothing Then
		IsBadFio = IsBadFirstLetter(theName)
		Exit Function
	End If

	IsBadFio = False
	If IsDull(theName) Then
		Exit Function
	End If

	If Not regExpFio.Test(theName) Then
		IsBadFio = True
	End If
End Function

Function IsBadFirstLetter(theName)
	Dim strFLetter

	IsBadFirstLetter = False
	If IsDull(theName) Then
		Exit Function
	End If

	strFLetter = UCase(Left(theName, 1))
	If Not regExpAlphabet.Test(strFLetter) Then
		IsBadFirstLetter = True
	End If
End Function
%>