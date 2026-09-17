<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim bSGPresent, strCommonMsg
Dim objSubjectGroups

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleSubjectGroups")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolSubjects
 	bTabInternalPage = True
End Function

Sub ReadState()
	strCommonMsg = GetSafeStr( obTokenMgr.GetData( strToken, stCommonAlert ), -1, "" )
End Sub

Function onLoad()
	If strCommonMsg <> "" Then
		onLoad = onLoad & "alert('" & strCommonMsg & "');"
		Call obTokenMgr.SetData( strToken, stCommonAlert, "" )
	End If
End Function

Sub Main()
	Set objSubjectGroups = objNSNET.GetParentSubjectsList(strSchoolId )
	bSGPresent = Not objSubjectGroups.EOF
End Sub

Function onHead()
%><script>
<!--
function Back() {
	goBack(document.SGS,"/asp/SetupSchool/Calendar/SchoolSubjects.asp");
}

function editSG( sgid ) {
	var form = document.SGS;
	if ( sgid ) { form.SGID.value = sgid; } else { form.SGID.value = -1; }
	DoSubmit( form, "/asp/SetupSchool/Calendar/EditSubjectGroup.asp" );
}

function deleteSG() {
	if( isDBBusy() ) return false;
	if ( $('[name=SGIDS]:checked').length == 0 )
		alert(language.Generic.SetupSchoolCalendar.kAltNotSel);
	else $.show.confirmation(language.Generic.SetupSchoolCalendar.kConDelWarn + '. ' + language.Generic.Common.kContinue).then(function()
	{
		setDBBusy();
		ok( 'SGS', '/asp/SetupSchool/Calendar/DeleteParentSubjects.asp' );
	});
}
//-->
</script>
<%
End Function

Sub DrawButtons()
	Call ButtonCreate("editSG()", obLanguage("SetupSchoolCalendar","kCreateSG"))
	Call ButtonDel("deleteSG()", obLanguage("SetupSchoolCalendar","kDeleteSG"))
End Sub

Sub onDrawPage()%>
	<form name="SGS" method="post">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="SGID"><%
		Call DrawButtonPanel
		If Not bSGPresent Then
			DrawInfo obLanguage("SetupSchoolCalendar","kNoSG"), False
		Else
			DrawSubjectGroupsTable
		End If%>
	</form><%
End Sub

Sub DrawSubjectGroupsTable()
	Dim oldID, nPSubjectId, strSubjectName, parentSubjectName, bEmptyList%>
	
	<div class="row">
		<div class="col-md-6">
			<table class="table table-bordered">
				<tr class="success">
					<th><%=obLanguage("SetupSchoolCalendar","kTitleSubjectGroups")%></th>
					<th><%=obLanguage("Common","kSubjects")%></th>
					<th><%=obLanguage("Common","kDeletingMark")%></th>
				</tr><%
				Do
					nPSubjectId = objSubjectGroups("PSUBJECTID")
					parentSubjectName = objSubjectGroups("PSUBJECTNAME")
					'Set objSubjects = objNSNET.GetSubjectNamesForParentSubject(CLng( objSubjectGroups("PSUBJECTID") ) )%>
				<tr>
					<td><%=ShowAnchor("editSG(" & nPSubjectId & ")", obLanguage("SetupSchoolCalendar","kTitleEditSubjectGroup"), DB2HTML(parentSubjectName), "" )%></td>
					<td><%
						strSubjectName = objSubjectGroups("SUBJECTNAME")
						bEmptyList = IsDull(strSubjectName)
						If bEmptyList Then
							rw obLanguage("SetupSchoolCalendar","kNoSubjects")
							objSubjectGroups.MoveNext
						Else
							oldID=nPSubjectId
							Do While oldID = nPSubjectId
								rw DB2HTML( strSubjectName) & "<br>"
								objSubjectGroups.MoveNext
								If objSubjectGroups.EOF Then Exit Do
								strSubjectName = objSubjectGroups("SUBJECTNAME")
								nPSubjectId = objSubjectGroups("PSUBJECTID")
							Loop
						End If%>
					</td>
					<td class="text-center"><%
						If parentSubjectName <> obLanguage("SetupSchoolCalendar","kLanguages") Then
							If bEmptyList Then%>
								<input type="checkbox" name="SGIDS" value="<%=nPSubjectId%>"><%
							Else%>X<%
							End If
						Else%>&nbsp;<%
						End If%>
					</td>
				</tr><%
					If objSubjectGroups.EOF Then Exit Do
					Loop%>
			</table>
		</div>
	</div><%
End Sub
%>
