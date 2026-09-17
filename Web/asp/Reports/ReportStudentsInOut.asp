<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterStudents.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strTeacherID
Dim bOk
Dim nIsStaff
Dim dtStartDateTerm, strTermID, dtStartDate, dtEndDate
Dim objTermsRs

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsViewForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
End Sub

Sub specialWrite()
	WriteClass
	If HasUserRole(rlParent) Then
		Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
	End If
End Sub

Sub Main()
	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	bOk = False
	If bIsStaff Then
		nIsStaff=1
		If bAll Then 
			Call InitYearClasses() 
			If objClassesRs.EOF Then Exit Sub ' for Classes test objClassesRs.EOF but not strClassID = "0" because GetClassListForYearStudent do not set strClassID = "0" for objClassesRs.EOF. It is for using one style. 
		Else 
			strTeacherID = strUserID
			Call InitTeacherClasses(False)
			If objClassesRs.EOF Then Exit Sub
		End If
		Set rsStudents = objNSNET.GetClassStudentListForTerm(strClassID, "-1", False)
		strTermID = objNSNET.GetCurrentClassTermID(strClassID, strSchoolYearID)
		Set objTermsRs = objNSNET.GetTermInfo(strTermID)
		If rsStudents.EOF Then Exit Sub
	Else
		nIsStaff=0
		If HasUserRole(rlParent) Then
			strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
			Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, False)
			If strStudentID="0" AND Not rsStudents.EOF Then strStudentID=GetSafeID(rsStudents("STUDENTID"),"0")
			If strStudentID = "0" Then Exit Sub
		Else
			strStudentID = strUserID
		End If
		Set objTermsRs = objNSNET.GetCurrentTermInfo(strStudentID, FormatDateTime(Now(),vbShortDate))
		Call InitYearStudentClassesEx( strStudentID )
		If objClassesRs.EOF Then Exit Sub
	End If
	bOk = True
	Call InitSubjectGroupsForAllClasses(strClassID)
	
	If Not IsEmpty(objTermsRs) Then
		If Not objTermsRs.EOF Then dtStartDateTerm = objTermsRs("STARTDATE")
	End If
	
	If strSubjClassID = "0" Then Exit Sub
End Sub

Sub specialHead()
	If bOk Then	
	  bIsCheckDates=True
	  Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
	End If
End Sub

Sub specialFilters( strForm )
	Call DrawDateRange()
	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents
		If bExit Then Exit Sub
	End If

	If bIsStaff Then
		Call DrawYearClasses(strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)))
		If bExit Then Exit Sub
	Else
		Call DrawYearClasses(strForm, False, obLanguage("Filter","kStudentNotInClass",strFunctionalityType))
		If bExit Then Exit Sub
	End If
	If Not bOK Then
		DrawInfo obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType), False
		bExit = True : Exit Sub
	End If
	If strSubjClassID = "0" Then
		DrawInfo obLanguage("Filter","kNoClassSubjectsGB",strFunctionalityType), False
		bExit = True : Exit Sub
	End If

	DrawStudentsList
End Sub

Sub specialDraw()
    
End Sub

Sub DrawDateRange()
	If IsDull(dtStartDateTerm) Then dtStartDateTerm = dtStartDate
	Call DrawDateRangeItem("ADT", IIF(IsWorkYear, dtStartDateTerm, dtStartDate), "kStartDate")
	Call DrawDateRangeItem("DDT", IIF(IsWorkYear, FormatDateTime(NSNow,vbShortDate), dtEndDate), "kEndDate")
End Sub
%>
