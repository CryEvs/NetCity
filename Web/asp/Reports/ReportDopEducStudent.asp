<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterStudents.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strTeacherID
Dim bOk

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsViewForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
End Sub

Sub specialWrite()
	If HasUserRole(rlParent) Then
		Call obTokenMgr.SetData(strToken,stCurrStudent, strStudentID)
	End If
End Sub

Sub Main()
	bOk = False
	If HasUserRole(rlParent) Then
		strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
		Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false)
		If strStudentID="0" AND Not rsStudents.EOF Then strStudentID=GetSafeID(rsStudents("STUDENTID"),"0")
		If strStudentID = "0" Then Exit Sub
	Else
		strStudentID = strUserID
	End If
	bOk = True
End Sub

Sub specialHead()
End Sub

Sub DrawFilters( strForm )
	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents
		If bExit Then Exit Sub
	End If
	DrawStudentsList
	If Not bOK Then
		DrawInfo obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType), False
		bExit = True : Exit Sub
	End If
End Sub
%>
