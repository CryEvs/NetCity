<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE file="SaveInfoQAdd.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Movement/MoveBook_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim strFFirstName, strFLastName, strFMiddleName, strFDisplayName, strMFirstName, strMLastName, strMMiddleName, strMDisplayName, strCategoryId
Dim arrFFirstName, arrFLastName, arrFMiddleName, arrFDisplayName, arrMFirstName, arrMLastName, arrMMiddleName, arrMDisplayName, arrCategoryId
Dim strClass, arrClass

Sub specialReadState
	If Not HasUserRight(arUsersEditStudents) Then GenerateError obLanguage("Common","kErrPageAccess")
	strClass = Request("submit_CID")

	strFLastName = Request("submit_FLN")
	strFFirstName = Request("submit_FFN")
	strFMiddleName = Request("submit_FMN")

	strMLastName =  Request("submit_MLN")
	strMFirstName = Request("submit_MFN")
	strMMiddleName = Request("submit_MMN")

	strCategoryId = Request("submit_CategoryNotEnrolled")
	arrCategoryId = Split(strCategoryId, Chr(1))

	nCurrRole = rlStudent
End Sub

Sub specialMain
	arrClass = Split(strClass, Chr(1))
	
	arrFLastName   = Split(strFLastName, Chr(1))
	arrFFirstName  = Split(strFFirstName, Chr(1))
	arrFMiddleName = Split(strFMiddleName, Chr(1))

	arrMLastName   = Split(strMLastName, Chr(1))
	arrMFirstName  = Split(strMFirstName, Chr(1))
	arrMMiddleName = Split(strMMiddleName, Chr(1))

	Dim objForm
	Set objForm = obTokenMgr.GetData(strToken, stMoveDocState) 
	'сохраняю в сессию данные для  QAddMovement
	Dim qAddComponent, qAddStudents, nDocSubType
	nDocSubType = GetSafeLng(objForm("DOCSUBTYPE"), -1)

	Set qAddComponent = obComponentMgr.Resolve("NetCity.Components.Movement.Enrollment.Sources.Infrastructure.QAdd.IQAddComponent")
	Set qAddStudents = qAddComponent.GetQAdderStudents(arrLastName, arrFirstName, arrMiddleName, arrLoginName, arrPCM, arrEMail, arrPassword, arrPWDExpired, arrBirthday, arrGender,arrFLastName, arrFFirstName, arrFMiddleName,  arrMLastName, arrMFirstName, arrMMiddleName, arrClass, arrCategoryId, nDocSubType)
	qAddStudents.Execute()

	'перенаправление на страницу MoveStudentsList.asp
	Dim nDocID, dtDocDate, strDocNumber, nDocType', nDocSubType 
	Dim dtAdminDate
	nDocID = GetSafeLng(objForm("DOCID"),0)
	dtDocDate = GetSafeDate(objForm("DOCDATE"), Null)
	dtAdminDate = GetSafeDate(objForm("ADMINDATE"), dtDocDate)
	strDocNumber = GetSafeStr(Trim(CStr(objForm("DOCNUMBER"))), 20, Null)
	nDocType = GetSafeLng(objForm("DOCTYPE"), Null)
	

	RedirectTo "Movement\MoveStudentsList.asp", Array("BackPage", "MoveBookEdit.asp", "movementSourceId", kEnrollSource_QuickAdd,_
		"DocId", nDocID, "DocDate", dtDocDate, "AdminDate", dtAdminDate, "DocNumber", strDocNumber, "DocType", nDocType, "DocSubType", nDocSubType)
End Sub
%>