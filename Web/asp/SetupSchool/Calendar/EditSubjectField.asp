<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim strSubjectFieldName, strSubjectFieldID
Dim strBackPage, strCom, objRs, objCmd, bAssignedSubjectsExists, bAssignedSchoolSubjectsExists

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Function GetPageTitle()
	If strSubjectFieldID <> "0" Then GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleEditSubjectField") Else GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleNewSubjectField")
End Function

Sub ReadState()
	strBackPage = obTokenMgr.GetData(strToken,stBackPage)
	strSubjectFieldID=GetSafeID(Request("SBJFID"), "0")
	strSubjectFieldName=""
End Sub

Sub Main()
	If strSubjectFieldID <> "0" Then
		strSubjectFieldName = objNSNET.GetSubjectFieldName(strSubjectFieldID)
		bAssignedSchoolSubjectsExists = objNSNET.GetSubjFieldAssignInfo(strSubjectFieldID, strSchoolID)
		bAssignedSubjectsExists = objNSNET.GetSubjFieldAssignInfo(strSubjectFieldID, 0)
	End If
End Sub

Sub onHead()%>
<SCRIPT><!--
$(document).keypress(function (e) {
	if( e.which == 13)
	{
		saveName();

		return false;
	}
});

function saveName()
{
	if(isDBBusy()) return false;


	var form = document.forms.main;
	if (form.SUBJECTFIELDNAME.value == '') {
		alert(language.Generic.SetupSchoolCalendar.kEnterSubjectFieldName);
		form.SUBJECTFIELDNAME.focus(); 
	
		return false;
	}
	setDBBusy();
	DoSubmit( form, "" );
}

<%If strSubjectFieldID <> "0" Then%>
	function removeSubjectField(){
		if( isDBBusy() ) return false;
		var form = document.forms.main;
		<% If bAssignedSchoolSubjectsExists Then%>
			if(confirm(language.Generic.SetupSchoolCalendar.kExcludeSubjectsFromRemovedField + ". " + language.Generic.Common.kContinue))
			{
				form.SBJFID.value = - form.SBJFID.value;
				setDBBusy();
				DoSubmit( form, "" );
			}
		<%ElseIf bAssignedSubjectsExists Then%>
			alert(language.Generic.SetupSchoolCalendar.kErrDeleteExistsAssignedSubject);
			return false;
		<%Else %>
			if(confirm(language.Generic.Common.kMsgAreYouSure + "<%= " " & obLanguage("Common","kContinue")%>"))
			{
				form.SBJFID.value = - form.SBJFID.value;
				setDBBusy();
				DoSubmit( form, "" );
			}
		<%End If %>
	}
<%End If%>
//--></SCRIPT>
<%End Sub

Sub onDrawPage()%>
	<FORM NAME="main" METHOD="post" ACTION="SaveSubjectField.asp">
		<%=WriteObligatoryTags()%>
		<INPUT TYPE="hidden" NAME="SBJFID" VALUE="<%=strSubjectFieldID%>">
		<table border="0" cellspacing="0">
			<tr valign="top">
				<td align="left" width="40%"><%
					ButtonSave"saveName()", obLanguage("Common","kSave")
					If strSubjectFieldID <> "0"  Then ButtonDel "removeSubjectField()", obLanguage("SetupSchoolCalendar","kRemoveSubjectField")
					ButtonCancel "goBack(document.main,'"&strBackPage&"');", obLanguage("Common","kBack")%>
				</td>
				<th align="left" width="60%"><%=obLanguage("Common","kName")%>:<br>
					<INPUT TYPE="text" NAME="SUBJECTFIELDNAME" class="FilterWhiteSpace" VALUE="<%=DB2Value(strSubjectFieldName)%>" MAXLENGTH="50" SIZE="<%=TextInputSize(50)%>" OnChange="dataChanged();"><br><br>
				</th>
			</tr>
		</table>
	</FORM>
<%End Sub%>
