<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTeacherID
Dim dtCurrYearStart, dtCurrYearEnd
Dim bOk, bNoSeparate, dtStartDate, dtEndDate, bNeedNotification

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsViewForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	bNeedNotification = False
	bNoSeparate = False
	If bIsStaff Then bNoSeparate = (GetSafeLng(GetSafe("SPRT", 1),0) = 1)
End Sub

Sub specialWrite()
	WriteClass
	If HasUserRole(rlParent) Then Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
End Sub

Sub Main()
	bOk = False
	
	If bIsStaff Then
		If bAll Then
			Call InitYearClasses()
			If objClassesRs.EOF Then Exit Sub ' for Classes test objClassesRs.EOF but not strClassID = "0" because GetClassListForYearStudent do not set strClassID = "0" for objClassesRs.EOF. It is for using one style.
		Else
			strTeacherID = strUserID
			Call InitTeacherClasses(False)
			If objClassesRs.EOF Then Exit Sub
		End If
		Set rsStudents = objNSNET.GetClassStudentListForTerm(strClassID, -1, False)
		If rsStudents.EOF Then Exit Sub
	Else
		If HasUserRole(rlParent) Then
			strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
			Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false)
			If strStudentID="0" AND Not rsStudents.EOF Then strStudentID=GetSafeID(rsStudents("STUDENTID"),"0")
			If strStudentID = "0" Then Exit Sub
		Else
			strStudentID = strUserID
		End If
		Call InitYearStudentClasses( strStudentID )
		If objClassesRs.EOF Then Exit Sub
	End If

	Call CalcCurrYearLimits(dtCurrYearStart, dtCurrYearEnd)
	dtMinDate = dtCurrYearStart
	dtMaxDate = dtCurrYearEnd
	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	Call InitTermsForClass(True, strClassID)
	If Clng(strTermID) >  0 Then
		Call TermLimits(strTermID)
		dtStartDate = dtTermStart
		dtEndDate = dtTermEnd
	End If
	bOk = True
End Sub


Sub specialHead()
	bIsCheckDates=True
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
%>
<script>
function SendReportToAll() {
	$.show.confirmation(language.Reports.kSendReportsToAllParents).then(function(){
		report.generate({data: {RP: "R"}});
	});
}
</script>
<%
End Sub

Sub specialFilters( strForm )
	If objClassesRs.EOF Then Exit Sub
	
	If HasUserRole(rlParent) Then
		If IsEmpty(rsStudents) Then Exit Sub
		If rsStudents.EOF Then Exit Sub
		DrawStudents strForm, rsStudents
		If bExit Then Exit Sub
	End If
	
	If bIsStaff Then
		Call DrawYearClasses(strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)))
	Else
		Call DrawYearClasses(strForm, False, obLanguage("Filter","kStudentNotInClass",strFunctionalityType))
	End If

	If Not bOK Then
		DrawInfo obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType), False
		bExit = True
	End If

	If bExit Then Exit Sub

	Call DrawDateRange()
	If bIsStaff Then
		DrawSimpleFilterRow obLanguage("Common","kStudents",strFunctionalityType), "SPRT", Array(0, obLanguage("Reports","kSeparately"), 1, obLanguage("Reports","kAllStudentsInClass",strFunctionalityType)), IIF(bNoSeparate,1,0), False, SelectChangeHandler(strForm)	

		If (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) And Not bIsEMForSchool And bNoSeparate Then
			OpenFormGroup ""
				SimpleButton "SendReportToAll()", obLanguage("Messages","kSendAllParents") & " " & obLanguage("ClassManagement","kAnd") & " " & obLanguage("Common", "kStudents_d", strFunctionalityType)
				rw ShowCheckbox("bNeedNotification", "1", bNeedNotification, " " &obLanguage("Messages", "kNotificationEMailSubject"), "")
			CloseFormGroup
		End If
		If Not bNoSeparate Then DrawStudentsList
	Else
		DrawStudentsList
	End If
End Sub

%>
