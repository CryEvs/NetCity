
<% ' © 2007-2015 IRTech. All rights reserved.
Dim objTeachers, nSubjectID, action, strBackPage

Function GetPageTitle()
	GetPageTitle = IIF(action = "DELTEACHERS", obLanguage("SetupSchoolCalendar","kDelSubjectTeachers",strFunctionalityType), obLanguage("SetupSchoolCalendar","kAddSubjectTeachers",strFunctionalityType)) & GreenText( DB2HTML( objNSNET.GetSubjectName(nSubjectID) ) )
End Function

Sub ReadState()
	strBackPage = GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER" ))
End Sub

Sub Main()
	nSubjectID = GetSafeLng( Request("SBJID"), NULL )
	action = GetSafeStr( Request("FLAG"), -1, NULL )
	If action = "DELTEACHERS" Then
		Set objTeachers = objNSNET.GetSubjectTeacherList(nSubjectID)
	Else
		Set objTeachers = objNSNET.GetAvailableTeacherListForSubject(nSubjectID, strCurrYearID)
	End If
End Sub

Sub onSpecialHead()
%>
<script>
function DoSave() {
	if( isDBBusy() ) return false;
	var form=document.forms.TeacherList;
	var el = form.elements['<%=action%>'];
	var chkdCnt = 0;
	if (el) {
		if (el.length) {
			for (var i=0;i<el.length;i++)
					if (el[i].checked) chkdCnt++;
		}
		else {
			if (el.checked) chkdCnt++;
		}
		if (chkdCnt==0) alert(language.SetupSchoolCalendar.kMarkTeachers);
		else {
			setDBBusy();
			ok('TeacherList', '');
		}
	}
}

function Back() {
	goBack(document.TeacherList,'<%=strBackPage%>');
}
</script>
<%
End Sub

Sub DrawButtons()
	If Not objTeachers.EOF Then
		If action = "DELTEACHERS" Then
			ButtonDel "DoSave()", obLanguage("Common","kRemove")
		Else
			ButtonSave "DoSave()", obLanguage("Common","kSave")
		End If
	End If
End Sub

Sub onDrawPage()%>
	<form name="TeacherList" method="post" action = "/asp/SetupSchool/SaveTeachersSubjects.asp"><%
		rw WriteObligatoryTags()
		rw WriteHiddenTags( Array("SBJID", nSubjectID, "BackPage", strBackPage) )
		DrawButtonPanel

		If objTeachers.EOF Then
			DrawInfo obLanguage("SetupSchoolCalendar","kNoSubjectTeachers",strFunctionalityType) & ".", False%>
			</form><%
			Exit Sub
		End If
		DrawCheckboxListTeachers%>
	</form><%
End Sub

Sub DrawCheckboxListTeachers()
	Dim QuickLetter, CurLetter, CurName, strCurUserID

	QuickLetter = ""
	While Not objTeachers.EOF
		CurName = DB2HTML( objTeachers("NICKNAME") )
		CurLetter = UCase( Left(objTeachers("NICKNAME"), 1) )
		strCurUserID = objTeachers("TEACHERID")

		If action = "DELTEACHERS" Then
			If IsDull(objTeachers("TID")) Then
				OpenCheckBoxDiv False%>
				<input type="checkbox" name="<%=action%>" value="<%=strCurUserID %>" onClick="dataChanged()"><%
			Else
				OpenCheckBoxDiv True%>
				<input type="checkbox" disabled><%
			End If
			If CurLetter<>QuickLetter Then%><a name="<%=DB2HTML( CurLetter )%>"></a><%
				QuickLetter=CurLetter
			End If%>
			<%=CurName%><%
			CloseCheckBoxDiv
		Else
			OpenCheckBoxDiv False%>
				<input type="checkbox" name="<%=action%>" value="<%=strCurUserID %>" onClick="dataChanged()"><%
				If CurLetter<>QuickLetter Then%><a name="<%=DB2HTML( CurLetter )%>"></a><%
					QuickLetter=CurLetter
				End If%>
				<%=CurName%><%
			CloseCheckBoxDiv
		End If
		objTeachers.MoveNext
	WEnd
End Sub

Sub OpenCheckBoxDiv(isDisabled)
	Dim strClass

	strClass = "checkbox"
	If isDisabled Then strClass = strClass & " disabled"%>
	
	<div class="<%=strClass%>">
		<label><%
End Sub

Sub CloseCheckBoxDiv()%>
		</label>
	</div><%
End Sub
%>
