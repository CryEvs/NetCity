<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	TID=<Teacher ID>
'	CLID=<Class ID>
'	RPTID=<Report ID>

Dim strTeacherID
Dim bOk
Dim nIsStaff
Dim bNoSeparate, bNeedNotification

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
	If HasUserRole(rlParent) Then
		Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
	End If
End Sub

Sub Main()
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
		If rsStudents.EOF Then Exit Sub
	Else
		nIsStaff=0
		If HasUserRole(rlParent) Then
			strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
			Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false)
			If strStudentID="0" AND Not rsStudents.EOF Then strStudentID=GetSafeID(rsStudents("STUDENTID"),"0")
			If strStudentID = "0" Then Exit Sub
		Else
			strStudentID = strUserID
		End If

		'Call InitYearStudentClassesEx( strStudentID ) #27669
		Call InitYearStudentClasses( strStudentID )

		If objClassesRs.EOF Then Exit Sub
	End If
	bOk = True
	Call InitSubjectGroupsForAllClasses(strClassID)
	If strSubjClassID = "0" Then Exit Sub
End Sub

Sub specialHead()
	If not bOk Then Exit Sub%>
	<script>
		$(document).ready(function(){
			report.setOptions({data: {ISTF: <%=IIF(bIsStaff, 1, 0)%>}});
		});

		function SendReportToAll() {
			$.show.confirmation(language.Reports.kSendReportsToAllParents).then(function(){
				report.generate({data: {RP: "R"}});
			});
		}
	</script><%
End Sub

Sub DrawButtons()
	If objClassesRs.EOF Then Exit Sub
	If IsEmpty(rsStudents) Then Exit Sub
	If rsStudents.EOF Then Exit Sub
	rw "<br>"
	If bNoSeparate Then Call DrawPrintButtons
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
		Call DrawStudentsList()
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
	If bExit Then Exit Sub

	If bIsStaff Then
		DrawSimpleFilterRow obLanguage("Common","kStudents",strFunctionalityType), "SPRT", Array("0", obLanguage("Reports","kSeparately"), "1", obLanguage("Reports","kAllStudentsInClass",strFunctionalityType)), IIF(bNoSeparate, "1", "0"), False, "OnChangeSelect('" & strForm & "', '" & strScriptName & "')"
		If Not bNoSeparate Then DrawStudentsList
		If (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) And Not bIsEMForSchool And bNoSeparate Then
			rw "<hr style=""margin-bottom:0px"">"
			DrawCheckBox obLanguage("Messages", "kNotificationEMailSubject"), "bNeedNotification", "1", bNeedNotification, ""
			Dim NameButton
			NameButton = obLanguage("Messages","kSendAllParents") & " " & obLanguage("ClassManagement","kAnd") & " " & obLanguage("Common", "kStudents_d", strFunctionalityType)
			Button "SendReportToAll()", NameButton, NameButton, "glyphicon glyphicon-envelope"
		End If
	End If
End Sub

Sub specialDraw()
	'If Not bNoSeparate Then DrawStudentsList
End Sub

%>
