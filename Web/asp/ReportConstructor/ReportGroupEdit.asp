<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kGroupNameMaxSize = 100

Const kFormName			= "main"
Const kBackScript		= "ReportGroups.asp"
Const kSaveScriptName	= "ReportGroupSave.asp"

Dim strGroupID, strGroupName, bNewGroup

Function GetPageTitle()
	GetPageTitle = IIf(bNewGroup, obLanguage("Constructor","kTitleReportGroupNew"), obLanguage("Constructor","kTitleReportGroupEdit"))
End Function

Sub ReadState()
	strGroupID = GetSafeID(Request("GroupID"), Null)
	bNewGroup = (strGroupID = "0")
End Sub

Sub Main()
	Dim objRs

	If Not bNewGroup Then
		Set objRs = objNSNETWork.GetReportGroupInfo(strGroupID)
		If objRs.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		strGroupName = GetSafeStr(objRs("GROUPNAME"), kGroupNameMaxSize, Null)
	Else
		strGroupName = ""
	End If
End Sub

Sub onHeadSpecial()
%>
<SCRIPT><!--
function Back() {
	goBack(document.forms['<%=kFormName%>'], '<%=kBackScript%>');
}
function saveGroup(){
	if( isDBBusy() ) return;
	var form = document.forms['<%=kFormName%>'];
	if (trimStr(form.GROUPNAME.value) == '') {
		alert(language.Generic.Constructor.kErrEmptyReportGroupName);
		form.GROUPNAME.focus();
		return;
	}
	if(!dataWereChanged) return;
	setDBBusy();
	DoSubmit(form, '<%=kSaveScriptName%>');
}
//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "saveGroup()", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()
	%><form name="<%=kFormName%>" METHOD="post" class="form-horizontal form-edit">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("GroupID", strGroupID) )%>
	<%DrawButtonPanel%>
	<%Call DrawInputRow(obLanguage("Constructor","kReportGroupName") & ":", strGroupName, "GROUPNAME", "text", 50, kGroupNameMaxSize, "") %>
	</form><%
End Sub
%>
