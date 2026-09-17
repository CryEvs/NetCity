<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kVariantNameMaxLength = 100

Dim nVariantID, strName, strGradeID, strSubjectID, lngAuthorID
Dim i, n, cnt, arrData, rsTmp, strBackPage

strSubjectID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), Null)
strGradeID = GetSafeID(obTokenMgr.GetData( strToken, stCurrGrade), Null)

If Not HasUserRight(arCurrMgmCreateAll) Then
	If Not HasUserRight(arCurrMgmCreate) Then GenerateError obLanguage("Common","kErrPageAccess")
	If Not objNSNET.IsSubjectTeacher(strSubjectID, strUserID) Then
		GenerateError obLanguage("Common","kErrPageAccess")
	End If
End If

strBackPage = "VariantsEdit.asp"
Select Case Request("ACT")
Case "delete"
	Call objNSNET.DeleteSubjPlanVariants(Request("delVariant"))
	TestError(obLanguage("Curriculum","kCantDeleteVariant"))
Case "add"
	If HasUserAnyRoles(Array(rlAdmin, rlPrincipal)) Then
		lngAuthorID = GetSafeLng(Request("AUTHORID_NEW"), -1)
	Else
		lngAuthorID = CLng(strUserID)
	End If

	Call objNSNET.AddSubjPlanVariant(strCurrYearID,strSubjectID,strGradeID,GetSafeStr(Trim(Request("VARIANTNAME_NEW")),kVariantNameMaxLength,Null),lngAuthorID)
	
	Dim msgSaved
	msgSaved = CStr(obLanguage("Curriculum","kVariantWasAdded"))

	If Instr(Err.Description, "already exists") Then
		msgSaved = Err.Description
		msgSaved = CStr(obLanguage("Common","kErrMsgExist"))
		err.clear
	End If

	TestError(obLanguage("Curriculum","kCantAddVariant"))
	strBackPage = "VariantsEdit.asp"
	Call obTokenMgr.SetData(strToken, stWasSaved, msgSaved)
Case "edit"
	Dim strNewName, nOldVariantID 'strOldName, 
	cnt = Request("VARIANTNAME").Count
	ReDim arrData(2,cnt-1)
	n = 0
	For i = 1 To cnt
		
		lngAuthorID = GetSafeLng(Request("AUTHORID")(i), -1)
		
		nOldVariantID = Request("VARIANTID")(i)
		'strOldName = Request("OLDNAME")(i)
		strNewName = GetSafeStr(Trim(Request("VARIANTNAME")(i)),kVariantNameMaxLength,Null)
		arrData(0,n) = nOldVariantID
		arrData(1,n) = strNewName
		arrData(2,n) = lngAuthorID
		n = n + 1
	Next
	If n > 0 Then
		ReDim Preserve arrData(2,n-1)
		On Error Resume Next
		Call objNSNET.EditSubjPlanVariants(strCurrYearID,strSubjectID,strGradeID,arrData)
		TestError(obLanguage("Curriculum","kCantChangeVariantsInfo"))
		Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("Curriculum","kVariantsWereChanged")) )
		Call obTokenMgr.SetData(strToken,"VARIANTID", "-1")
	End If
Case Else
	GenerateError obLanguage("Common","kUnexpErr")
End Select
Call obTokenMgr.SetData(strToken, stCurrPlannerTreeFilter, "")

RedirectTo strBackPage, null%>