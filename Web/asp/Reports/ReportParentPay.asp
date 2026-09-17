<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strTeacherID
Dim bOk, bNoSeparate, strTokenValue
Dim arrClasses

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	If HasUserRole(rlParent) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	strTokenValue = GetSafeStr(obTokenMgr.GetData(strToken, stSeparate), 1, "0")
	bNoSeparate = CBool(GetSafeStr(Request("STDNT"), 1, strTokenValue) = "1")
End Sub

Sub specialWrite()
	WriteClass
	If HasUserRole(rlParent) Then Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
End Sub

Sub Main()
	Dim dtYearStart_1, dtYearEnd_1, dtYearEnd_30
	Dim nCnt
	bOk = False
	If bIsStaff Then
		If bAll Then
			Call InitYearClassesAll()
			If objClassesRs.EOF Then Exit Sub ' for Classes test objClassesRs.EOF but not strClassID = "0" because GetClassListForYearStudent do not set strClassID = "0" for objClassesRs.EOF. It is for using one style.
		Else
			strTeacherID = strUserID
			Call InitTeacherClasses(False)
			If objClassesRs.EOF Then Exit Sub
		End If
	Else'Parent
		strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
		Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, true)
		If strStudentID = "0" And Not rsStudents.EOF Then strStudentID = GetSafeID(rsStudents("STUDENTID"),"0")
		If strStudentID = "0" Then Exit Sub
		Call InitYearStudentClasses( strStudentID )
		If objClassesRs.EOF Then Exit Sub
	End If

	arrClasses = objClassesRs.GetRows(,,Array("CLASSID", "CLASSNAME"))
	If bAll Then
		nCnt = UBound(arrClasses, 2)
		nCnt = nCnt + 1
		ReDim Preserve arrClasses(1, nCnt)
		arrClasses(0, nCnt) = -1
		arrClasses(1, nCnt) = obLanguage("Reports","kOutDebt_2")
	End If
	' Сверху сделали из objClassesRs - arrClasses, в конец arrClasses добавляем ещё элемент, если надо.
	' Заменяем objClassesRs на arrClasses, после этого DrawYearClasses сама разберётся, что надо отрисовать массив
	objClassesRs = arrClasses

	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )

	dtYearStart_1 = DateSerial(Year(dtYearStart), Month(dtYearStart), 1)
	dtYearEnd_1 = DateSerial(Year(dtYearEnd), Month(dtYearEnd), 1)

    dtYearEnd_30 = DateAdd("m", 1, dtYearEnd_1)
    dtYearEnd_30 = DateAdd("d", -1, dtYearEnd_30)

	If bIsStaff Then Set rsStudents = objNSNET.GetParentPayForDates(strSchoolID, strCurrYearID, strClassID, dtYearStart_1, dtYearEnd_30)
	If rsStudents.EOF Then Exit Sub

	bOk = True
End Sub

Sub specialHead()
End Sub

Sub DrawFilters( strForm )
	If bIsStaff Then
		Call DrawYearClasses(strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)))
	Else'Parent
		DrawStudents strForm, rsStudents
	End If
	If bExit Then Exit Sub
	If bIsStaff Then
		If Not bOK Then
			DrawInfo obLanguage("Movement","kNoStudentsInClass",strFunctionalityType), False
			bExit = True : Exit Sub
		End If
	
		DrawSimpleFilterRow obLanguage("Common","kStudents",strFunctionalityType), "STDNT", Array("0", obLanguage("Reports","kSeparately"), "1", obLanguage("Reports","kAllStudentsInClass",strFunctionalityType)), IIF(bNoSeparate, "1", "0"), False, "OnChangeSelect('" & strForm & "', '" & strScriptName & "')"
	End If
	If Not bNoSeparate Then DrawStudentsList
End Sub

Sub specialDraw()
	If obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Or bIsEMForSchool Then Exit Sub
End Sub

%>
