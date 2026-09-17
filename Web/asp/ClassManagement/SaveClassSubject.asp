<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nTeacherID, strAction, nSubj, strDesc, nSubjectGroupID, nGroupID, nIupLevel
Dim strName
Dim j, cnt, n, bOk
Dim arrData
Dim nCSGID, nGS_CSGID, nGredingSys
Dim arrTerms, arrIupGrades
Dim objSGComponent, result

If Not HasUserRight(arClassMgmEditSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")
If yearIsClosed Then RedirectTo "ClassSubjects.asp?" , null

strAction = Request("ACT")
Set objSGComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISubjectGroupComponent")

If strAction = "delete" Then
	cnt = Request("delClass").Count
	If cnt>0 Then' delete Subjects
		ReDim arrData(cnt-1)
		For j=1 To cnt
			arrData(j-1) = GetSafeID(Request("delClass")(j), NULL)
		Next
		On Error Resume Next
		Set result = objSGComponent.RemoveSubjectGroups(arrData)
		TestError obLanguage("ClassManagement","kCantDelClassSubject",strFunctionalityType)
		If Not result.IsSuccess Then
			GenerateError result.Message
		End If
	End If
ElseIf Request("TEACHERID").Count>0 Then' update classSubjects teachers
	cnt = Request("TEACHERID").Count
	ReDim arrData(2,cnt-1)
	n = 0
	For j = 1 To cnt
		arrData(0,n) = GetSafeLng(Request("Teacherid")(j), 0)
		If arrData(0,n) <> 0 Then 
			nCSGID = GetSafeLng(Request("ID")(j), NULL)
			arrData(1,n) = nCSGID
			nGredingSys = GetSafeLng(Request("GredingSys_" & nCSGID), -1)
			arrData(2,n) = nGredingSys
			n = n + 1
		End If
	Next
	If n > 0 Then
		ReDim Preserve arrData(2,n-1)
		On Error Resume Next
		Set result = objSGComponent.UpdateSubjectGroups(arrData)
		TestError obLanguage("ClassManagement","kCantUpdateClass") & obLanguage("Common","kClass_v",strFunctionalityType)
		If Not result.IsSuccess Then
			GenerateError result.Message
		End If
	End If
	Call WriteJsonResult(CStr(obLanguage("Common","kDataSaved")), False, 0)
Else
	nSubjectGroupID = GetSafeLng(Request("CLID"), 0 )
	nGroupID = GetSafeLng(Request("GROUP"),0)
	arrTerms = Split(Request("TERMS"), ",")
	If Not IsDull(Request("GRADES")) Then
		arrIupGrades = Split(Request("GRADES"), ",")	
	End If
	strDesc = GetSafeStr( Request("Desc"), -1, "" )
	nTeacherID = GetSafeLng( Request("TID"), NULL )
	nSubj = GetSafeLng( Request("SJID"), NULL )
	strName = Trim(GetSafeStr(Request("NAME"), 20, ""))
	strClassID_IUP = GetSafeStr(Request("PCLID_IUP"), -1, Null)
	nIupLevel = GetSafeLng(Request("LevelID"), 0)

	Call InitIUPClassID(strClassID_IUP)
	If strAction = "check" Then
		If Len(strName) > 0 Then
			Dim nConflictGrade
			strName = objSGComponent.MakeSubjectGroupName(nSubj, strName)
			If Not objSGComponent.CheckAvailableName(strName, strCurrYearId, arrIupGrades, IIF(nSubjectGroupID > 0, Array(nSubjectGroupID), Empty), nConflictGrade) Then
				GenerateError obLanguage("ClassManagement","kSubjectGroupWithNameAlreadyExists", strFunctionalityType).Format(Array(strName, nConflictGrade))
			End If
		End If
		Set result = objSGComponent.CheckSubjectGroup(strCurrYearId, nSubj, arrTerms, strClassID, arrIupGrades, nIupLevel)
		TestError obLanguage("ClassManagement","kCantBoundSubjectAndClass") & obLanguage("Common","kClass_v",strFunctionalityType)
		If Not result.IsSuccess Then
			GenerateError obLanguage("ClassManagement","kCantBoundSubjectAndClass") & obLanguage("Common","kClass_v",strFunctionalityType) & ".\n" & result.Message
		End If
		Set result = new JSONResult
		Response.Write result
		Response.End
	End If

	If nSubjectGroupID <> 0 Then		'edit
		Set result = objSGComponent.EditSubjectGroup(nSubjectGroupID, strCurrYearId, strName, nGroupID, nTeacherID, nIupLevel, arrTerms, arrIupGrades, strDesc)
		TestError obLanguage("ClassManagement","kCantBoundSubjectAndClass") & obLanguage("Common","kClass_v",strFunctionalityType)
		If Not result.IsSuccess Then
			GenerateError result.Message
		End If
	Else'If strAction = "new"
		If bIsIupGrade Then
			nIupLevel = GetSafeLng(Request("LevelID"), Null)
			Set result = objSGComponent.CreateSubjectGroup(strCurrYearId, nTeacherID, nSubj, nIupLevel, strName, arrTerms, arrIupGrades, strDesc)
		Else
			Set result = objSGComponent.CreateClassSubectGroup(strCurrYearId, nTeacherID, nSubj, strClassId, nGroupID, arrTerms, strDesc)
		End If
		TestError obLanguage("ClassManagement","kCantBoundSubjectAndClass") & obLanguage("Common","kClass_v",strFunctionalityType)
		If Not result.IsSuccess Then
			GenerateError obLanguage("ClassManagement","kCantBoundSubjectAndClass") & obLanguage("Common","kClass_v",strFunctionalityType) & "." & result.Message
		End If
		Call WriteClass_IUP()
	End If
End If

RedirectTo "ClassSubjects.asp", null
%>
