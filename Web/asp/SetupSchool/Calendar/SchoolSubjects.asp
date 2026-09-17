<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim bIsSubjFieldsExists
Dim objRs, objNonBoundedFieldList, objSubjectList, objSubjectGroups
Dim strSubjectName, strBackPage
Dim bPreSchool

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight( arSchoolSubjects )
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolSubjects
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kSubjectList")
End Function

Sub Main
	Set objSubjectList = objNSNET.GetSubjectList(strSchoolID, strCurrYearID)

	Set objNonBoundedFieldList = objNSNET.GetNotBoundSubjectFieldList(strSchoolID)
	Set objSubjectGroups = objNSNET.GetParentSubjects(strSchoolId )

	If objSubjectList.EOF Then bIsSubjFieldsExists = False Else bIsSubjFieldsExists = objSubjectList("FIELDID") <> 0
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
End Sub

Sub ReadState()
	strBackPage = strScriptName
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
End Sub

Sub onHead()
	If readonly Then Exit Sub%>

	<style>
		.move {
			background-color: white;
			border: 1px solid #ddd;
			height: 29px;
		}

		table.subjects tr:first-child td {
			border-top: 0 !important;
		}

		table.subjects td:nth-child(-n+3) {
			border-right: 1px solid #ddd;
		}

		table.subjects {
			margin-bottom: 0;
			cursor: move;
		}

		table.subjects input[type="checkbox"]:not(:disabled) {
			cursor: default;
		}

		.glyphicon-resize-vertical {
			opacity: 0.5;
		}

		.highlight {
			background-color: #fff5c0;
			height: 29px;
		}

		.highlight > td:nth-child(-n+3) {
			border-right: 0 !important;
		}

		.not-active > td > table {
			background-color: #d3d3d3 !important;
		}
	</style>

	<SCRIPT type="text/javascript"><!--
		$(function () {
			var fixHelperModified = function (e, tr) {
				var $originals = tr.children();
				var $helper = tr.clone();

				$helper.children().each(function (index) {
					$(this).width($originals.eq(index).width());
				});

				return $helper;
			};

			$(".subjects tbody").sortable({
				helper: fixHelperModified,
				placeholder: "highlight",
				stop: function (event, element) {
					var arrIds = $('a[name="subjorder"]');
					var ids = '';

					$(element.item).parent().parent().parent().parent().prevAll().removeClass('not-active');
					$(element.item).parent().parent().parent().parent().nextAll().removeClass('not-active');

					for (i = 0; i < arrIds.length; i++) {
						ids += arrIds[i].id + " ";
					}
					jsSubmit({
						action: '/asp/ajax/ReorderSubjects_Ajax.asp',
						data: {
							"ids": ids
						}
					});
				},
				start: function (event, ui) {
					$(ui.helper).parent().parent().parent().parent().prevAll().addClass('not-active'); //tr
					$(ui.helper).parent().parent().parent().parent().nextAll().addClass('not-active'); //tr

					$(ui.helper).addClass('move');
					$(ui.helper).children().css('border-top', 0);
				}
			});
		});
	//--></SCRIPT>

	<SCRIPT><!--
		function createNewSubject() {
			var form = document.forms.SubjectList;
			form.elements["ACT"].value = "new";
			DoSubmit(form, "EditSchoolSubject.asp");
		}

		function removeSubject() {
			var chkSubj = 0;
			var form = document.forms.SubjectList;
			var chkBox = form.elements.SUBJS;

			if (chkBox) {
				if (chkBox.length) {
					for (var j = 0; j < chkBox.length; j++) {
						if (chkBox[j].checked == true) { 
							chkSubj = 1; 
							break;
						}
					}
				}
				else if (chkBox.checked == true)
					chkSubj = 1;
			}

			if(chkSubj > 0) {
				extDeferred.when($.show.getConfirmation(language.SetupSchoolCalendar.kRemoveSubjectWarning + ". " + language.Generic.Common.kContinue), $.show.getConfirmation(language.Generic.Common.kMsgAreYouSure)).then(function() {
					$(document).trigger('showProcessing');
					DoSubmit(form, "SaveSubject.asp");
				});
			}
			else {
				alert(language.Generic.Common.kNoDelSubjects); 
				return;
			}
		}

		function editSubject(el) {
			var form = document.forms.SubjectList;
			form.elements["SBJID"].value = el.id;
			form.elements["ACT"].value = "edit";
			DoSubmit( form, "EditSchoolSubject.asp" );
		}

		function createNewSubjectField() {
			var addBtn = function(dialog) { 
				document.forms.editSubjectField.act.value = 'add';
				$(document).trigger('showProcessing');
				ok('editSubjectField', 'SaveSubjectField.asp');
			};

			$.show.dialog({
				title: language.Generic.SetupSchoolCalendar.kAddSubjectField,
				message: $('#editSubjectFieldTempl'),
				buttons: [{label: language.Generic.Buttons.kCreate, action: addBtn, cssClass: 'btn-primary'}]
			});
		}

		function editSubjectField(id, anchor, bAssignedSchoolSubjectsExists) {
			var name = $(anchor).text();
			var saveBtn = function(dialog) { 
				document.forms.editSubjectField.act.value = 'edit';
				document.forms.editSubjectField.SBJFID.value = id;

				$(document).trigger('showProcessing');
				ok('editSubjectField', 'SaveSubjectField.asp');
			};

			var removeBtn = function() {
				jsSubmit({
					data: {subjectFieldId: id},
					action: '/asp/ajax/GetSubjectFieldInfo.asp',
					showProcessing: true,
					onSuccess: function(response) {
						if(response.data.bAssignedSubjectsExists) {
							alert(language.Generic.SetupSchoolCalendar.kErrDeleteExistsAssignedSubject);
							return;
						}

						var message = bAssignedSchoolSubjectsExists
											? language.Generic.SetupSchoolCalendar.kExcludeSubjectsFromRemovedField + ". " + language.Generic.Common.kContinue
											: language.Generic.Common.kMsgAreYouSure + "<%= " " & obLanguage("Common","kContinue")%>";

						$.show.confirmation(message).then(function() {
							document.forms.editSubjectField.act.value = 'remove';
							document.forms.editSubjectField.SBJFID.value = id;

							$(document).trigger('showProcessing');
							ok('editSubjectField', 'SaveSubjectField.asp');
						});
						return;
					}
				});
			}
			
			$.show.dialog({
				title: language.Generic.SetupSchoolCalendar.kEditSubjectField,
				message: $('#editSubjectFieldTempl'),
				buttons: [
					{label: language.Generic.Buttons.kSave, action: saveBtn}, 
					{label: language.Generic.Buttons.kRemove, action: removeBtn}
				],
				onshown: function() {
					$("input[name='SUBJECTFIELDNAME']").val(name);
				}
			});
		}

		function editSubjectGroups() {
			DoSubmit(document.SubjectList, "SubjectGroups.asp");
		}
	//--></SCRIPT><%
End Sub

Sub WritePostScripts()
	%>
	<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
	<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
	<%
End Sub

Sub onDrawPage()%>
	<form name="SubjectList" method="post" action="SaveSubject.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("SBJID", "", "SBJFID", "", "BackPage", strBackPage, "ACT", "")) %>
		<div class="row">
			<div class="col-md-9 col-md-push-3"><%
				DrawListSubjectsPanel%>
			</div>
			<div class="col-md-3 col-md-pull-9"><%
				DrawSubjectGroupsPanel
				DrawSubjectFieldsPanel%>
			</div>
		</div>
	</form>
	
	<script id="editSubjectFieldTempl" type="text/html">
		<form class="form-horizontal" id="editSubjectField" name="editSubjectField" method="post">
			<%=WriteObligatoryTags()%>
			<input type="hidden" name="act" value="">
			<input type="hidden" name="SBJFID" value=""><%

			SetFiltersWidth "", "col-md-4", "col-md-8"
			
			Call DrawInputRowWithClass(obLanguage("Common","kName"), "", "SUBJECTFIELDNAME", "text", TextInputSize(50), 50, "", "FilterWhiteSpace")

			RestoreDefFiltersWidth%>
		</form>
	</script><%
End Sub

Sub DrawSubjectFieldsPanel()
	OpenPanelEx obLanguage("SetupSchoolCalendar","kSubjectFields"), "subject_fields", "", False, "panel-success"
		If Not readonly Then
			OpenBtnGroup
			ButtonCreate "createNewSubjectField()", obLanguage("SetupSchoolCalendar","kAddSubjectField")
			CloseBtnGroup
		End If
		If strFunctionalityType = FuncType_School Then Call DrawNonBoundedFields()
	ClosePanel
End Sub

Sub DrawSubjectGroupsPanel()
	If Not bPreSchool Then
		OpenPanelEx obLanguage("SetupSchoolCurPlan","kSubjectGroups"), "subject_groups", "", False, "panel-danger"
			If Not readonly Then
				OpenBtnGroup
				ButtonChange "editSubjectGroups()", obLanguage("SetupSchoolCalendar","kEditSubjectGroups")
				CloseBtnGroup
			End If

			Call DrawSubjectGroups
		ClosePanel
	End If
End Sub

Sub DrawListSubjectsPanel()
	OpenPanelEx obLanguage("Common","kSubjects"), "list_subjects", "", False, "panel-info"
		If Not readonly Then
			OpenBtnGroup
			ButtonAdd "createNewSubject()", obLanguage("Common","kAddSubject")
			ButtonDel "removeSubject()", obLanguage("SetupSchoolCalendar","kRemoveSubjects")
			CloseBtnGroup
		End If

		If objSubjectList.EOF Then
			DrawInfo obLanguage("SetupSchoolCalendar","kNoSbjectList") & ".", False
		Else%>
			<table class="table table-bordered table-sm table-striped">
				<tr>
					<th width="55%"><%=obLanguage("Common","kName")%></th>
					<th width="15%"><%=obLanguage("Common","kTeachers", strFunctionalityType)%></th>
					<%If Not bPreSchool Then%><th width="15%"><%=obLanguage("MenuFolders","kFNSubgroups")%></th><%End If%>
					<th width="15%"><%=obLanguage("Common","kDeletingMark")%></th>
				</tr>
				<%PopulateCheckLong objSubjectList, "SUBJS", "SUBJECTID", "SUBJECTNAME", "SUBJECTABBREV", "", "FIELDID", "FIELDNAME" %>
			</table>
			<%
		End If
	ClosePanel
End Sub

Function PopulateCheckLong(objRs, strNam, strIDField, strNameField, strShortName, strSubjRSName, strSubjFieldID_RS, strSubjFieldName_RS)
	If Not bIsDebug Then On Error Resume Next
	Dim strID, bSelected, strFName, strSName
	Dim rsSubjField, nSubjCnt, rsGroups, rsFields, arrTeachers, strTeachers, nTeachers
	Dim strSubjFieldID, strSubjFieldName
	Dim i, j

	bSelected = False
	If objRs.EOF Then Exit Function
	Set rsFields = objRs("chapFields").Value

	Do
		If bIsSubjFieldsExists Then
			nSubjCnt = rsFields("cnt")
			strSubjFieldID = rsFields(strSubjFieldID_RS)

			rw "<tr><th colspan=""4"" class=""text-center"">"

			If strSubjFieldID <> 0 Then
				strSubjFieldName = CStr(objRs(strSubjFieldName_RS))

				If Not readonly Then
					rw ShowAnchor("editSubjectField('" & strSubjFieldID & "', this, true)", obLanguage("SetupSchoolCalendar","kEditSubjectField"), DB2HTML(strSubjFieldName), "")
				Else
					rw DB2HTML(strSubjFieldName)
				End if
			Else
				rw DB2HTML(obLanguage("SetupSchoolCalendar", "kFreeSF"))
			End If

			rw "&nbsp;</th></tr>"
		Else
			nSubjCnt = rsFields("cnt")
		End If
		'rsFields.MoveNext	странно но происходит само из-за отношения с objRs
		
		rw "<tr><td colspan=""4"" style=""padding: 0;""><table class=""subjects table table-condensed table-sm"">"

		For i = 1 To nSubjCnt
			strID = CStr(objRs(strIDField))
			strFName = CStr(objRs(strNameField))
			strSName = objRs(strShortName)
			If isNull(strSName) Then strSName = strFName Else strSName = CStr(strSName)

			rw "<tr><td width=""55%"">"
			If Not readonly Then
				rw "<span class=""glyphicon glyphicon-resize-vertical""></span>" & ShowAnchor("editSubject(this)", obLanguage("SetupSchoolCalendar","kEditSubject"), DB2HTML(strFName), "name='subjorder' id='" & strID & "'") & "&nbsp;"
			Else
				rw DB2HTML(strFName)
			End If

			rw "&nbsp;(" & DB2HTML(strSName) & ")"
			Set rsGroups = objRs("chapTeachers").Value
			arrTeachers = rsGroups.GetRows()
			rw "</td><td class='text-center' width=""15%"">"
			nTeachers = 1 + Ubound(arrTeachers, 2)
			If nTeachers > 0 Then
				strTeachers = DB2HTML(arrTeachers(2, 0))
				For j = 1 to nTeachers - 1
					strTeachers = strTeachers & chr(10) & DB2HTML(arrTeachers(2, j))
				Next
				rw "<abbr title=""" & strTeachers & """>" & nTeachers & "</abbr>"
			Else
				rw nTeachers
			End If

			rw " </td>"
			If Not bPreSchool Then
				rw "<td class='text-center' width=""15%"">"
				
				Set rsGroups = objRs("chapGroups").Value
				If Not rsGroups.EOF Then
					strTeachers = ""
					strSName = ""
					nTeachers = 0
					Do
						nTeachers = nTeachers + 1
						strTeachers = strTeachers & DB2HTML(rsGroups("GROUPNAME"))
						strSName = strSName  & DB2HTML(rsGroups("GROUPABBREV"))
						rsGroups.MoveNext
						If rsGroups.EOF Then Exit Do
						strSName = strSName  & ", &nbsp;"
						strTeachers = strTeachers & chr(10)
					Loop
					rw "<abbr title=""" & strTeachers & """>" & nTeachers &"&nbsp;("& strSName & ")</abbr>"
				Else
					rw "&nbsp;"
				End If
				rw "</td>"
			End If

			rw "<td class='text-center' width=""15%"">"
			If IsNull(objRs("Removable").Value) Then
				If Not readonly Then
					rw "<input type=""checkbox"" name=" & strNam & " value=""" & (strID) & """ >"
				Else
					rw "&nbsp;"
				End If
			Else
				rw "<input type=""checkbox"" disabled title=""" & obLanguage("Common","kEmploy") & """>" 
			End If

			rw "</td></tr>"
			objRs.MoveNext
		Next

		rw "</table></td></tr>"

		response.flush
	Loop Until objRs.EOF

	PopulateCheckLong = bSelected
End Function

Sub DrawNonBoundedFields()
	If Not objNonBoundedFieldList.EOF Then%>
		<h3><%=obLanguage("SetupSchoolCalendar","kNonBoundedFields")%></h3>
		<table class="table table-bordered table-xs table-bright-striped"><%
			While Not objNonBoundedFieldList.EOF%>
				<tr><td><%
					If Not readonly Then
						rw ShowAnchor("editSubjectField('" & objNonBoundedFieldList("FIELDID") & "', this, false)", obLanguage("SetupSchoolCalendar","kEditSubjectField"), DB2HTML(objNonBoundedFieldList("FIELDNAME")), "")
					Else
						rw DB2HTML(objNonBoundedFieldList("FIELDNAME"))
					End If%>
				</td></tr><%

				objNonBoundedFieldList.MoveNext
			Wend%>
		</table><%
	End If
End Sub

Sub DrawSubjectGroups()
	If Not objSubjectGroups.EOF Then%>
		<table class="table table-bordered table-sm"><%
			While Not objSubjectGroups.EOF
					rw "<tr><td>" & DB2HTML(objSubjectGroups("PSUBJECTNAME")) & "</td></tr>"
				objSubjectGroups.MoveNext
			Wend%>
		</table><%
	End If
End Sub%>