<!-- #INCLUDE File="master_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 3

Dim strSubjectName, strBackPage
Dim objSubjectList, objRs, objLanguagesList, objForeignL
Dim bLanguagesGroup
Dim thePSUBJECTID', theFIELDID

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kWizardTitleSubjects",strFunctionalityType)
End Function

Function CanBack()
	CanBack = False
End Function

Sub Main()
	Dim strSQL

	Set objSubjectList = objNSNET.GetSubjectListForStep3( strSchoolID )

	Set objLanguagesList = objNSNET.GetForeignLanguagesParentSubjectForSchool(strSchoolID)
	bLanguagesGroup = (CLng(strFunctionalityType) <> kFuncType_PreSchool And CLng(strFunctionalityType) <> kFuncType_Add)
	If bLanguagesGroup Then
		If Not objLanguagesList.EOF Then
			thePSUBJECTID = objLanguagesList("PSUBJECTID")
			'theFIELDID = IIf( IsDull( objLanguagesList("FIELDID") ), -1, objLanguagesList("FIELDID") )
		End If
	End If
End Sub

Sub ReadState()
	strBackPage = Request.ServerVariables("SCRIPT_NAME")
End Sub

Sub WriteState()
	InitStep
	Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
	Call obTokenMgr.SetData( strToken, stCommonAlert, "" )
End Sub

Function OnSubmit()
	Dim strHangSubjects, oRs

	strHangSubjects=obLanguage("SetupSchoolCalendar","kHanging") & ":\n\n"
	Set oRs = objNSNET.GetHangingSubjects(-strSchoolID, False )
	If Not oRs.EOF Then
		While Not oRs.EOF
			strHangSubjects = strHangSubjects & (DB2Java(oRs("SUBJECTNAME"))) & "\n"
			oRs.MoveNext
		Wend
		OnSubmit = "$.show.getConfirmation('"&strHangSubjects& obLanguage("Common","kContinue")&"')"
	else
		OnSubmit = "function(){return true;}"
	End If
End Function

Sub onSpecialHead()%>
	<script src="<%=GetVersionedResLink("/js/tableExt.js")%>" type="text/javascript"></script>
	<script><!--
		function NextStep() {
			extDeferred.when(<%=OnSubmit()%>).then(function() {
				DoSubmit( document.MainForm, '<%=strNext%>' );
			});
		}

		function createNewSubject() {
			var form = document.forms.MainForm;
			form.elements["ACT"].value = "new";
			DoSubmit( document.MainForm, 'EditSchoolSubject.asp' );
		}

		function removeSubject() {
			if( isDBBusy() ) return false;
			var chkSubj=0;
			var form = document.forms.MainForm;
			var chkBox=form.elements.SUBJS;
			if (chkBox) {
				if (chkBox.length) {
					for (var j=0;j<chkBox.length;j++)
						if (chkBox[j].checked==true) { chkSubj=1; break;}
				}
				else if (chkBox.checked==true)
					chkSubj=1;
			}
			if (chkSubj>0) {
				$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function() {
					setDBBusy();
					DoSubmit( document.MainForm, '../Calendar/SaveSubject.asp' );
				});
			}
			else {alert(language.Generic.Common.kNoDelSubjects); return};
		}

		function editSubject( id ) {
			var form = document.forms.MainForm;
			form.elements["SBJID"].value = id;
			form.elements["ACT"].value = "edit";
			DoSubmit( form, "EditSchoolSubject.asp" );
		}

		<%If bLanguagesGroup Then %>
			function editLanguages() {
				DoSubmit( document.MainForm, 'EditLanguages.asp' );
			}
		<%End If%>
	//-->
	</script><%
End Sub

Sub DrawSpecialButtons
	ButtonAdd "createNewSubject()", obLanguage("Common","kAddSubject")
	ButtonDel "removeSubject()", obLanguage("SetupSchoolCalendar","kRemoveSubjects")
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="../Calendar/SaveSubject.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("SBJID","", "ACT","", "SGID",thePSUBJECTID, "BackPage", strBackPage))%>
		<%DrawButtonPanel%>
		<%DrawSubjectsPanel%>
	</form><%
End Sub

Sub DrawSubjectsPanel()
	If objSubjectList.EOF Then
		DrawInfo obLanguage("SetupSchoolCalendar","kNoSbjectList"), False
	Else%>
		<table class="table table-bordered table-xs table-striped table-hover with-check-all">
			<tr>
				<th><%=obLanguage("Common","kName")%></th>
				<th><%=obLanguage("Common","kDeletingMark")%></th>
			</tr>
			<%PopulateCheckLong objSubjectList, "SUBJS", "SUBJECTID", "SUBJECTNAME", "SUBJECTABBREV", "", "", ""%>
		</table><%
	End If
End Sub

Function PopulateCheckLong( objRs, strNam, strIDField, strNameField, strShortName, strSubjRSName, strSubjFieldID_RS, strSubjFieldName_RS )
	If Not bIsDebug Then On Error Resume Next
	Dim strID, bSelected, strFName, strSName
	Dim rsSubjField, nSubjCnt, strTRTag, rsGroups
	bSelected = False
	Do While Not objRs.EOF
		strID = CStr(objRs(strIDField))
		strFName=CStr(objRs(strNameField))
		strSName=objRs(strShortName)
		If	isNull(strSName) then strSName=strFName else strSName=CStr(strSName)
		strTRTag = "<tr>"
		rw	strTRTag & "<td nowrap>" &ShowAnchor("editSubject('" & strID & "')", obLanguage("SetupSchoolCalendar","kEditSubject"), DB2HTML(strFName), "") & "&nbsp;"
		rw "&nbsp;(" & DB2HTML(strSName) & ")"
		Set rsGroups = objRs("chapTeachers").Value
		While Not rsGroups.EOF
			rw "<br>&nbsp;&nbsp;&nbsp;" & DB2HTML(rsGroups("NICKNAME"))
			rsGroups.MoveNext
		Wend
		rw "</td><td align=""center""><INPUT TYPE=""checkbox"" NAME="&strNam&" VALUE=""" & (strID)& """ ></td></tr>"
		objRs.MoveNext
	Loop
	PopulateCheckLong = bSelected
End Function

Sub DrawSubMasterMenuBlock()
	If bLanguagesGroup Then
		OpenPanelEx obLanguage("SetupSchoolCalendar","kLanguages"), "languages", "", False, "panel-info"
			OpenBtnGroup
			ButtonEdit "editLanguages()", obLanguage("SetupSchoolCalendar","kEditLang")
			CloseBtnGroup
			If Not objLanguagesList.EOF Then%>
				<table class="table table-bordered table-condensed"><%
					While Not objLanguagesList.EOF%>
						<tr><td><%=DB2HTML(objLanguagesList("SUBJECTNAME"))%></td></tr><%
						objLanguagesList.MoveNext
					Wend%>
				</table><%
			Else
				DrawInfo obLanguage("Common","kNo"), False
			End If
		ClosePanel
	End If
End Sub
%>
