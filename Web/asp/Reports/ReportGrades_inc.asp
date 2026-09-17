<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterStudents.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTeachers.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE=../scripts/dateInput.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtEndDate, dtStartDate
Dim objParentChildren
Dim bOk, bDrawStudentList

Sub specialRead()
	bNoCorrectScale = GetbNoCorrectScale()
End Sub

Sub specialWrite()
	WriteClass
	Call obTokenMgr.SetData(strToken,stCurrSubjClass, strSubjClassID)
	If HasUserRole(rlParent) Then
		Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
	End If
	Call WriteDateRange(dtStartDate, dtEndDate)
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) then bAll = False: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsViewForAssignedClass) then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub Main()
	bOk = False
	If bIsStaff Then
		strStudentID = "0" ' get all students later
		If bAll Then
			Call InitYearClasses_IUP
			If objClasses_IUP_rs.EOF Then Exit Sub ' for Classes test objClassesRs.EOF but not strClassID = "0" because GetClassListForYearStudent do not set strClassID = "0" for objClassesRs.EOF. It is for using one style.
			Call InitSubjectGroups_IUP
			If strSubjClassID = "0" Then Exit Sub
		Else
			strTeacherID = strUserID
			Call InitTeacherClasses_IUP(False)
			If objClasses_IUP_rs.EOF Then Exit Sub
			Call InitSubjectGroups_IUP
			If strSubjClassID = "0" Then Exit Sub
		End If
	Else
		If HasUserRole(rlParent) Then
			strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
			Set objParentChildren = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false)
			If strStudentID = "0" AND Not objParentChildren.EOF Then strStudentID=GetSafeID(objParentChildren("STUDENTID"),"0")
			If strStudentID = "0" Then Exit Sub
		Else
			strStudentID = strUserID
		End If

		Call InitYearStudentClasses_IUP(strStudentID, False)
		If objClasses_IUP_rs.EOF Then Exit Sub

		Call InitSubjectsForStudent_IUP()
		If strSubjClassID = "0" Then Exit Sub
	End If
	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	bIsCheckDates = True

	' strClassID should be OK here
	Set rsStudents = objNSNET.GetStudentListForSubjGroup(strSubjClassID, Empty, dtStartDate, dtEndDate, False, strStudentID)
	bOk = Not rsStudents.EOF
End Sub

Sub specialHead()
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate)
End Sub

Sub SetJavaReportFunction
End Sub

Sub specialFilters( strForm )
	Dim strMsg
	If HasUserRole(rlParent) Then
		DrawStudents strForm, objParentChildren
		If bExit Then Exit Sub
	End If
	
	If bIsStaff Then
		strMsg = IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
	Else
		strMsg = obLanguage("Filter","kStudentNotInClass",strFunctionalityType)
	End If
	Call DrawYearClasses_IUP(strForm, False, strMsg)
	If bExit Then Exit Sub

	Call DrawSubjectGroups( strForm, False )
	If bExit Then Exit Sub

	If Not bOK Then
		DrawInfo obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType), False
		bExit = True : Exit Sub
	End If

	Call DrawDateRange()

	If bDrawStudentList Then
		Call DrawStudentsList()
	End If
End Sub
%>
