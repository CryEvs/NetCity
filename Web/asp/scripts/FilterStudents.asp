<% ' © 2007-2015 IRTech. All rights reserved.

Dim strStudentID, rsStudents, bStudentsIsEmpty

Sub InitStudents()
	If HasUserRole(rlParent) Then
		If IsDull( Request("SID") ) Then
			strStudentID = GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0")
		Else
			strStudentID = GetSafeID( Request("SID"), "0")
		End If
		Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false)
		bStudentsIsEmpty = rsStudents.EOF
		If bStudentsIsEmpty Then Exit Sub
		If strStudentID = "0" Then strStudentID = GetSafeID( rsStudents("STUDENTID"), NULL )
	Else
		bStudentsIsEmpty = False 
		strStudentID = strUserID
	End If
End Sub

'отрисовка контрола выбора ребенка в родительском интерфейсе
Sub DrawParentStudents()
	Dim strIdColumn, strNameColumn
	
	'пока не рисуем, требуется доработка самих страниц
	Exit Sub

	If IsEmpty(rsStudents) Then
		Exit Sub
	End If

	rsStudents.MoveFirst

	If rsStudents.Fields.Exists("STUDENTID") Then
		strIdColumn = "STUDENTID"
	ElseIf rsStudents.Fields.Exists("ID") Then
		strIdColumn = "ID"
	End If

	If rsStudents.Fields.Exists("STUDENTNAME") Then
		strNameColumn = "STUDENTNAME"
	ElseIf rsStudents.Fields.Exists("NICKNAME") Then
		strNameColumn = "NICKNAME"
	End If

	If IsEmpty(strIdColumn) Or IsEmpty(strNameColumn) Then
		Exit Sub
	End If

	%>
	<li>
		<div class="childs_select">
			<div>Дети: <select class="ch_select" onchange="$('select[name=SID]').val($(this).val()).trigger('change');">
						<%PopulateSelect rsStudents, strIdColumn, strNameColumn, strStudentID %>
					   </select
			></div>
		</div>
	</li>
	<%
End Sub

Sub InitSubjectsForStudent()
	'InitSubjectsForStudent ни разу не вызывается 
	Dim objRs
	If IsDull( Request("SCLID") ) Then
		strSubjClassID = GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"0")
	Else
		strSubjClassID = GetSafeID( Request("SCLID"), "0")
	End If
	' strClassID should be OK here!
	Set oSubjClassesRs = objNSNET.GetClassSubjectGroupsForStudent(strStudentID, strClassID, -1, False)
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	If not oSubjClassesRs.ExistsByField("ID", strSubjClassID) Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )
End Sub

Sub InitSubjectsForStudent_IUP()
	Dim objRs, strSubjID
	If IsDull( Request("SCLID") ) Then
		strSubjClassID = GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass),"0")
	Else
		strSubjClassID = GetSafeID( Request("SCLID"), "0")
	End If
	' strClassID should be OK here!
	Set oSubjClassesRs = objNSNET.GetClassSubjectListForStudentAndClassOrGrade_IUP(strStudentID, strClassId, strIupGrade, strCurrYearID, False)
	If oSubjClassesRs.EOF Then strSubjClassID = "0" :Exit Sub
	If not oSubjClassesRs.ExistsByField("ID", strSubjClassID) Then strSubjClassID = GetSafeID( oSubjClassesRs("ID"), NULL )

	' WriteSubject
	strSubjID = GetSafeID(objNSNET.GetSGSubjectID(strSubjClassID),"0")
	Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjID)
End Sub

Sub DrawStudents (strForm, rsStudents)
	If strStudentID = "0" Then
		DrawInfo obLanguage("Filter","kNoStudentsForYou",strFunctionalityType), False
		bExit = True
		Exit Sub
	End If
	DrawFilterRow StrForm, obLanguage("Common","kStudents",strFunctionalityType), "SID", rsStudents, "STUDENTID", "STUDENTNAME", strStudentID, false
End Sub
%>
