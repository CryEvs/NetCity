<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim arrImportStudents, strSave, strBackPage
Dim strUniqueCode, objImportResult
Dim movementComponent
Dim strImportFileName

SetScriptTimeOut 900

strBackPage = GetSafeStr(Request("Back"), 255, "Students.asp")
arrImportStudents = obTokenMgr.GetData(strToken, "ImportStudents")
strImportFileName = obTokenMgr.GetData(strToken, "ImportFileName")

If Not IsArray(arrImportStudents) Then RedirectTo strBackPage, null
strUniqueCode = GetSafeStr(obTokenMgr.GetData(strToken,"strUniqueCode"),4,"1234")

Dim objForm
Dim dtDocDate, strDocNumber, nDocType, nDocID, nDocSubType
Dim strRequest, getQueueResult

Set objForm = obTokenMgr.GetData(strToken, "QA_dct")

nDocID			= GetSafeLng(objForm("DOCID"),0)
dtDocDate		= GetSafeDate(objForm("DOCDATE"), Null)
strDocNumber	= GetSafeStr(Trim(CStr(objForm("DOCNUMBER"))), 20, Null)
nDocSubType		= GetSafeLng(objForm("DOCSUBTYPE"), Null)

TestError obLanguage("Common","kUnexpErr")
Set movementComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IMovementComponent")
TestError obLanguage("Common","kUnexpErr")

Set objImportResult = movementComponent.ImportStudents(strCurrYearID, nDocID, strDocNumber, dtDocDate, nDocSubType, strUniqueCode, strImportFileName, arrImportStudents, IMPORT_WITH_DOCS)
TestError obLanguage("Import","kErrImport")

strSave = objImportResult.Message

Call obTokenMgr.SetData(strToken,stWasSaved, strSave)
If nDocID > 0 Then
	RedirectTo "/asp/SetupSchool/Movement/MoveBookEdit.asp", Array("DOCTYPE", nDocType, "DOCSUBTYPE", nDocSubType, "DOCID", nDocID, "RestoreParams", IIF(nDocID = 0, 1, ""))
Else
	RedirectTo "/asp/SetupSchool/Movement/MoveBook.asp", Null
End If

Sub GenerateError(strText)
	GenerateHTMLError strText, "/asp/SetupSchool/Movement/MoveBook.asp", strToken
End Sub%>