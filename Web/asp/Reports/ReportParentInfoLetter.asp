<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterWeeks.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTeacherID
Dim bOk, bNoSeparate, strTokenValue
Dim strRepType, bType_CurrentMarks
Dim dtStartDate, dtEndDate
Dim dtStartYear, dtEndYear
Dim bShowWeeks, dtToday, bCurrTerm, bYearIsClosed, bNeedNotification

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsViewForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	bNeedNotification = False
	strRepType = GetSafeStrParam(Request("ReportType"), GetSafeStrParam(obTokenMgr.GetData(strToken, stRT_ParentInfoLetter),"1"))
	bType_CurrentMarks = (strRepType = "1")
	bYearIsClosed = objNSNET.IsYearClosed(strCurrYearID)
	strTokenValue = GetSafeStr(obTokenMgr.GetData(strToken, stSeparate), 1, "0")
	If bIsStaff Then bNoSeparate = (GetSafeLng(GetSafe("SPRT", 1),0) = 1)
End Sub

Sub specialWrite()
	WriteClass
	Call obTokenMgr.SetData(strToken, stRT_ParentInfoLetter, strRepType)
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
	Call InitTermsForClass(True, strClassID)
	If strTermID < 0 Then
		Set objTerms = objNSNET.GetClassTermList(strClassID)
		If objTerms.EOF Then Exit Sub
		strTermID=objTerms("TERMID")
	End IF

	If strTermID = "0" Then Exit Sub

	If bIsStaff Then
		Set rsStudents = objNSNET.GetClassStudentListForTerm(strClassID, strTermID, True)
		If rsStudents.EOF Then Exit Sub
	End If

	bShowWeeks = False
	Call TermLimits( strTermID )

	dtToday = NSNow()
	dtToday = DateSerial(Year(dtToday), Month(dtToday), Day(dtToday))
 	bCurrTerm = (DateDiff("d", dtToday, dtTermStart, 0, 0) <= 0) And (DateDiff("d", dtToday, dtTermEnd, 0, 0) >= 0)

	bShowWeeks = (bType_CurrentMarks And bCurrTerm)
	If bShowWeeks Then
		Call GetYearLimits(dtStartYear, dtEndYear)
		Call InitWeek(dtTermStart, dtTermEnd)

		dtStartDate = IIF( DateDiff("d", dtWeekStart, dtTermStart, 0, 0) > 0, dtTermStart, dtWeekStart )
		dtEndDate = IIF( DateDiff("d", dtWeekEnd, dtTermEnd, 0, 0) < 0 , dtTermEnd, dtWeekEnd )
	End If

	bOk = True
End Sub

Sub GetYearLimits( dtYearStart, dtYearEnd )
	Dim objRs

	Set objRs = objNSNET.GetYearInfo(strCurrYearID)
	dtYearStart = objRs("STARTDATE")
	dtYearEnd = objRs("ENDDATE")
	objRs.Close
End Sub

Sub GetDateLimits()
	dtMin = dtCurrYearStart
	If DateDiff("d", dtStartYear, dtCurrYearStart) < 0 Then
		dtMax = dtCurrYearEnd
		dtStartDate = dtMin
		dtEndDate = dtMax
	Else
		dtMax = dtCurrYearEnd
	End If
End Sub

Sub specialHead()
%>
<script>
$(document).ready(function (){
	var form = document.forms['Reports'];
	if( form.DATE) {
		$(form.DATE).on("change",
			function ( e ) {
				form.dtWeek.value = form.DATE.value;
				return false;
			});
	}
});
function SendReportToAll() {
	$.show.confirmation(language.Reports.kSendReportsToAllParents).then(function(){
		report.generate({data: {RP: "R"}});
	});
}
</script>
<%
End Sub

Sub WriteMoreHiddenTags( )
	Dim sWeek
	If bShowWeeks Then sWeek = Date2Str(dtWeekStart)
	WriteHiddenTags Array("dtWeek", sWeek)
End Sub

Sub specialFilters( strForm )
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

	DrawSimpleFilterRow obLanguage("Reports","kTypeReport"), "ReportType", Array(1, obLanguage("Reports","kPeriodCurrentMarks"), 2, obLanguage("Reports","kPeriodTotals")), strRepType, False, IIF(bCurrTerm, SelectChangeHandler(strForm), SelectChangeHandler(strForm))
	DrawTerms (StrForm)

	If bShowWeeks Then
		Call DrawWeek( strForm, dtTermStart, dtTermEnd, kStartNWeek + DateDiff("ww", dtStartYear, dtTermStart, 0, 0) )
	End If

	If bIsStaff Then
		DrawSimpleFilterRow obLanguage("Common","kStudents",strFunctionalityType), "SPRT", Array(0, obLanguage("Reports","kSeparately"), 1, obLanguage("Reports","kAllStudentsInClass",strFunctionalityType)), IIF(bNoSeparate,1,0), False, SelectChangeHandler(strForm)
		If (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) And Not bIsEMForSchool And bNoSeparate Then
			OpenFormGroup ""
				SimpleButton "SendReportToAll()", obLanguage("Messages","kSendAllParents") & " " & obLanguage("ClassManagement","kAnd") & " " & obLanguage("Common", "kStudents_d", strFunctionalityType)
				rw ShowCheckbox("bNeedNotification", "1", bNeedNotification, " " &obLanguage("Messages", "kNotificationEMailSubject"), "")
			CloseFormGroup
		End If
	End If

	If Not bOK Then
		DrawInfo obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType), False
		bExit = True : Exit Sub
	End If
	If Not bNoSeparate Then DrawStudentsList 
End Sub
%>
