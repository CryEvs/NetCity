<!-- #INCLUDE FILE=sa_inc.asp -->

<%
Dim strSubjectName, objRs, strSubjectID

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kReplaceGlobalSubject")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Sub ReadState()
	strSubjectID = GetSafeID(Request("SubjectID"), GetSafeID( obTokenMgr.GetData(strToken, stGlobalSubjectID), "0"))
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, "administration/replaceSubject.asp")
End Sub

Sub onHeadSpecial()
%><SCRIPT><!--
function Back()
{
	goBack( document.mainForm, 'EditSubject.asp');
}
function replaceSubject()
{
	if( isDBBusy() ) return false;
	$.show.confirmation(language.Generic.ServAdmin.kReplace + '?').then(function(){
		setDBBusy();
		DoSubmit( document.mainForm, "");
	});
}
//--></SCRIPT>
<%
End Sub

Sub Main()
	Set objRs = objNSNET.GetGlobalSubjects(strSubjectID)
	strSubjectName = DB2HTML(objRs("SUBJNAME"))
End Sub

Sub DrawButtons()
	ButtonSave "replaceSubject();", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()
	Set objRs = objNSNET.GetGlobalSubjects(-1)
	If objRs.EOF Then GenerateError obLanguage("ServAdmin","kErrReplace")%>
	<form method="POST" class="form-horizontal" action="ChangeSubject.asp" name="mainForm">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("SubjectID",strSubjectID, "ParamID", strSubjectID, "ACT", "replace"))%>
		<div class="btn-group">
			<%Call DrawButtons()%>
		</div>
		<div class="span6">
			<div class="widget-box">
				<div class="widget-content">
					<div class="control-group">
						<label class="control-label"><%=obLanguage("Common","kSubject")%>:</label>
						<div class="controls">
							<%=strSubjectName%>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label"><%=obLanguage("ServAdmin","kReplaceTo")%>:</label>
						<div class="controls">
							<%DrawSelectRs objRs, "NSubjectID","GLOBALSUBJID","SUBJNAME",strSubjectID, Null, ""%>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
	<%
End Sub
%>
