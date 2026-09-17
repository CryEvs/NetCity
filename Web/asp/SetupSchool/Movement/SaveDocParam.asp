<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

On Error Resume Next

Dim strBackPage
Dim objForm

'данные по документу
Dim nDocId, nDocType, nDocSubType, nEnrollFrom, dtDocDate, dtAdminDate, nDocYearID

'направление движения
Dim strSourceId
Dim nClassIdTo, nClassIdFrom, nGradeTo, nGradeFrom

'чтение данных о документе из запроса
Call ReadDocData()
TestError "Ошибка чтения данных о документе о движении"

'валидаци движения в случае добавления новых пользователей или изменении даы документа
Call CheckValidation()
TestError obLanguage("Movement","kCantCheckMoveDoc")

Call RedirectNext()

Sub ReadDocData()
	nDocId = GetSafeLng(Request("DOCID"), 0)
	nDocType = GetSafeLng(Request("DOCTYPE"), Null)
	strSourceId = GetSafeStr(Request("ENROLLFROM"), -1, "")
	dtDocDate =	GetSafeDate(Request.Form("DOCDATE"), NULL)
	dtAdminDate = GetSafeDate(Request.Form("ADMINDATE"), dtDocDate)
	nDocYearID = GetSafeLng(Request("DOCYEARID"), 0)

	Set objForm = Server.CreateObject("NetCity.Storage")
	objForm.Add "DOCDATE", dtDocDate
	objForm.Add "ADMINDATE", dtAdminDate
	objForm.Add "DOCYEARID", nDocYearID
	nDocSubType =  GetSafeLng(Request("DOCSUBTYPE"), 0)

	objForm.Add "DOCSUBTYPE", nDocSubType
	If nDocId > 0 Then objForm("DOCID") = nDocId
	objForm.Add "DOCTYPE", nDocType
	objForm.Add "DOCNUMBER", CStr(Request("DOCNUMBER"))
	strBackPage = GetSafeStr(Request("BackPage"), -1, "MoveBookEdit.asp")

	nGradeFrom = GetSafeLng(Request("GRADE_FROM"), -100)
	nGradeTo = GetSafeLng(Request("GRADE_TO"), -100)

	nClassIdFrom = GetSafeLng(Request("CLASSID_FROM"), 0)
	nClassIdTo = GetSafeLng(Request("CLASSID_TO"), 0)

	objForm.Add "CLASSID_FROM", nClassIdFrom
	objForm.Add "CLASSID_TO", nClassIdTo
	objForm.Add "GRADE_FROM", nGradeFrom
	objForm.Add "GRADE_TO", nGradeTo


	If nClassIdFrom > 0 Then
		Call obTokenMgr.SetData(strToken, stCurrClass, nClassIdFrom)
	End If

	If nClassIdTo > 0 Then
		Call obTokenMgr.SetData(strToken, "EducGroupTo", nClassIdTo)
	End If

	Call obTokenMgr.SetData(strToken, stMoveDocState, objForm)
End Sub

Sub CheckValidation()
	Dim objMovementComponent
	On Error Resume Next
	If nDocId > 0 Then
		Set objMovementComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMovementComponent")
		Call objMovementComponent.ValidateMoveDocDate(nDocId, dtDocDate)
		If Err.number <> 0 Then
			Call obTokenMgr.SetData( strToken, stWasSaved, obLanguage("Movement", "kErrAddStudentsToDoc", strFunctionalityType) & vbCrLf & Err.Description )
			Call RedirectToMoveDoc
		End If
	End If
End Sub

Sub RedirectNext()
	Select Case nDocType
	Case kDocType_ENROLL
		Select Case strSourceId
			Case kEnrollSource_QuickAdd
				RedirectTo "/asp/SetupSchool/StudentQAdd.asp", Null
			Case Else
				Call RedirectToSourceList()
		End Select
	Case Else
		Call RedirectToSourceList()
	End Select
End Sub

Sub RedirectToMoveDoc()
	RedirectTo strBackPage, Array("DocId", nDocId, "DocDate", dtDocDate, "AdminDate", dtAdminDate, "DocNumber", Request("DocNumber"), "DocType", nDocType, "DocSubType", nDocSubType)
End Sub

Sub RedirectToSourceList()
	RedirectTo "MoveStudentsList.asp", Array("BackPage", strBackPage, _
			"DocId", nDocId, "DocDate", dtDocDate, "AdminDate", dtAdminDate, "DocNumber", Request("DocNumber"), "DocType", nDocType, "DocSubType", nDocSubType, _
			"CLASSID_FROM", nClassIdFrom, "CLASSID_TO", nClassIdTo, "GRADE_FROM", nGradeFrom, "GRADE_TO", nGradeTo, _
			"movementSourceId", strSourceId, "ShowOutOfSystem", true)
End Sub

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function
%>
