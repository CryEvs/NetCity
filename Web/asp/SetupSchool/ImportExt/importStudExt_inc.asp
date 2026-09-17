<% ' © 2007-2015 IRTech. All rights reserved.

On Error Resume Next

Const kDimens =	64

Dim bOk, arrItem, strLine, strErrorLines, strWarningLines
Dim strGender, strClass, nClassID, dtBirthDate
Dim nStudents, nFathers, nMothers
Dim strUniqueCode
Dim arrImportStudents
Dim rsSimilar
Dim strRecord, iNew, iSuccessParents, iNewParents, iOtherSchoolsParents, iSuccess, i, j
Dim nLineCount, strImportFileText, objImportComponent

SetScriptTimeOut 9000

strUniqueCode = ""

Do
	Randomize
	strUniqueCode = GetSafeLng(Left(Rnd() * 10000, 4), "1234")
Loop While Len(strUniqueCode) <> 4

Set objImportComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IImportComponent")
bFutureMode = (GetSafeLng(Request("FutureMode"), 0) = 1)

Call obTokenMgr.SetData(strToken, "strUniqueCode", strUniqueCode)%>

<!-- #INCLUDE FILE="importExtAddress_inc.asp" --><%

Dim objForm, nDocSubType, bMoveBook
Set objForm = Server.CreateObject("NetCity.Storage")

If GetSafeLng(CLng(Request("DOCID")), 0) > 0 Then objForm.Add "DOCID", CLng(Request("DOCID"))

If IsDull(Request("DOCTYPE")) Then
	If Not HasUserRight(arUsersEditStudents) Then GenerateError obLanguage("Common","kErrPageAccess")
	bMoveBook = False
Else
	If Not HasUserRight(arMoveBookEdit) Then GenerateError obLanguage("Common","kErrPageAccess")
	bMoveBook = True
	objForm.Add "DOCDATE", CStr(Request("DOCDATE"))
	objForm.Add "DOCTYPE", GetSafeLng(Request("DOCTYPE"), Null)
	nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), Null)
	objForm.Add "DOCSUBTYPE", nDocSubType
	objForm.Add "DOCNUMBER", CStr(Request("DOCNUMBER"))
	objForm.Add "CLASSID", CStr(Request("PCLID"))
	objForm.Add "ENROLLFROM", GetSafeLng(Request("ENROLLFROM"), Null)
End If

If bFutureMode Then strSchoolYearID = objNSNET.GetSchoolFutureYear(strSchoolID)

Call obTokenMgr.SetData(strToken, "QA_dct", objForm)

If IsObject(obTokenMgr.GetData(strToken, "ImportStudents")) Then obTokenMgr.SetData strToken, "ImportStudents", Null
Redim arrImportStudents(0)

strErrorLines = ""
strWarningLines = ""
nPos = 0 : i = 0 : iSuccess = 0
iNew = 0
iSuccessParents = 0
iNewParents = 0
iOtherSchoolsParents = 0

strImportFileText = obTokenMgr.GetData(strToken, "ImportFile")

Call InitSchoolCityInfo()

nLineCount = objImportComponent.GetLineCount(strImportFileText)
TestError obLanguage("Import","kErrImport")

Response.Write nLineCount - 4 'первые 4 строки файла импорт - это заголовок
Response.Write Chr(1)
Response.Flush
		
Err.Clear

Call ProcessFile()
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
	Response.Write "<br /><table class=""table table-bordered table-striped""><tr><th>" & obLanguage("Import","kRecord") & "</th><th>" & obLanguage("Common","kComment") & "</th></tr>" & strWarningLines & "</table>"
End If

Response.Write "<div class=""well""><b>" & obLanguage("Import","kSuccess") & iSuccess & "<br/>"
Response.Write obLanguage("Import","kNewRecords") & iNew & "<br/>"
Response.Write obLanguage("Import","kSuccessParents") & iSuccessParents & "<br/>"
Response.Write obLanguage("Import","kNewRecords") & iNewParents

If iOtherSchoolsParents > 0 Then
	Response.Write "<br/>" & obLanguage("Import","kFromOtherEOs") & iOtherSchoolsParents
End If

Response.Write "</b></div>"

If iSuccess > 0 Then
	Response.Write "<div class=""alert alert-warning"">" & obLanguage("Import","kAssignedPasswordNew") & "<b>" & strUniqueCode & "</b><br>" & obLanguage("Import","kRememberTheUniqueCode") & "</div>"
End If

Response.Flush

Call obTokenMgr.SetData(strToken, "ImportStudents", arrImportStudents)

Sub WriteAjaxErrorResponse(nErrorCode, strText)
	Response.Write Chr(2)
	Response.Write strText
	Response.Write Chr(2)

	Response.Flush
End Sub

Sub GetSimilarSFM()
	Dim theItem, i

	nStudents = 0 ': nFathers = 0 : nMothers = 0
	For i = 0 To UBound(arrImportStudents) - 1
		theItem = arrImportStudents(i)

		If strGender = theItem(7) Then
			If arrItem(3) = theItem(3) Then
				If arrItem(4) = theItem(4) Then
					If arrItem(5) = theItem(5) Then nStudents = 1 : Exit Sub
				End If
			End If
		End If
	Next
End Sub

' 10"А"2007ст.зв. -> 10А (Tog...)
Function CorrectClassName(strClassName)
	Dim arrTmp

	CorrectClassName = strClassName
	If IsDull(strClassName) Then
		Exit Function
	End If

	arrTmp = Split(strClassName, """")
	If UBound(arrTmp) > 0 Then
		CorrectClassName = arrTmp(0) & arrTmp(1)
	End If
End Function

Function GetValidClassName(theClassName)
	Dim strGrade, lngGrade, n

	If theClassName = "" Then GetValidClassName = "" : Exit Function
	
	strGrade = ""
	For n = 1 To Len(theClassName)
		If Not IsNumeric(Mid(theClassName, n, 1)) Then Exit For
		strGrade = strGrade & Mid(theClassName, n, 1)
	Next

	If strGrade = "" Then
		GetValidClassName = Null
	Else
		lngGrade = CLng(strGrade)
		If (lngGrade < 0) Or (lngGrade > 12) Then GetValidClassName = Null Else GetValidClassName = theClassName
	End If
End Function

Function CalcName(ByVal theName)
	Dim strName

	strName = Left(Trim(theName), 20)
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
	If strFLetter <> obLanguage("Common","kYoLetter") And (obLanguage.Compare(strFLetter,obLanguage("Common","kFirstLetter")) < 0 Or obLanguage.Compare(strFLetter,obLanguage("Common","kLastLetter")) > 0) Then
		IsBadFirstLetter = True
	End If
End Function%>