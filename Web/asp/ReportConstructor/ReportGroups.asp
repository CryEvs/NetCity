<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->
<!-- #INCLUDE FILE="ReportGroups_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kFormName			= "ReportGroups"
Const kBackScript		= "ReportConstructor.asp"

Dim objRepGroups, bNoGroups

Function GetPageTitle()
	GetPageTitle = obLanguage("Constructor","kTitleReportGroups")
End Function

Sub Main()
	Set objRepGroups = GetReportGroups()
	bNoGroups = objRepGroups.EOF
End Sub

Sub onHeadSpecial()
%><script><!--
function Back()
{ ok('<%=kFormName%>', '<%=kBackScript%>'); }
function editGroup(nGroupID)
{
	var form=document.forms['<%=kFormName%>'];
	form.GroupID.value = nGroupID;
	form.ACT.value = 'edit';
	ok_check_db( '<%=kFormName%>', 'ReportGroupEdit.asp' );
}
<%If Not bNoGroups Then%>
function deleteGroups()
{
	if( isDBBusy() ) return false;
	var form=document.forms['<%=kFormName%>'];
	var chkBox=form.elements.delGroup, chkGroups=0;
	if (chkBox) {
		if (chkBox.length) {
			for (var j=0;j<chkBox.length;j++)
				if (chkBox[j].checked==true) {chkGroups=1; break;}
		}
		else if (chkBox.checked==true)
			chkGroups=1;
	}
	if (chkGroups>0){
		$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function(){
			form.ACT.value = 'delete';
			setDBBusy();
			ok( '<%=kFormName%>', 'ReportGroupSave.asp' );
		});
	}
	else {alert(language.Generic.Common.kErrMsgNoChecks); return};
}
<%End If%>
//-->
</script><%
End Sub

Sub DrawButtons()
	ButtonAdd "editGroup(0);", obLanguage("Constructor","kAddReportGroup")
	If Not bNoGroups Then ButtonDel "deleteGroups();", obLanguage("Common","kRemove") & "<br>"
End Sub

Sub OnDrawPage()%>
	<form name="<%=kFormName%>" method="post" action="">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("ACT", "", "GroupID", "") )%>
	<%DrawButtonPanel%>
	<%Call DrawGroups()%>
	</form><%
End Sub

Sub DrawGroups()
	Dim nRepCount

	If bNoGroups Then
		DrawInfo obLanguage("Constructor","kNoReportGroups"), False
		Exit Sub
	End If
	%>
	<div class="row">
		<div class="col-lg-8 col-md-10">
			<table class="table"><tr>
			<th><%=obLanguage("Constructor","kReportGroupName")%></th>
			<%=ShowDelCellHeader(1)%></tr><%
			While Not objRepGroups.EOF%>
				<tr><td><%=ShowAnchor("editGroup(" & objRepGroups("GROUPID") & ")", obLanguage("Constructor","kEditReportGroup"), DB2HTML(objRepGroups("GROUPNAME")), "")%></td>
				<td class="text-center"><%
				nRepCount = GetSafeLng(objRepGroups("CNT"), Null)
				If nRepCount = 0 Then%><INPUT TYPE="checkbox" NAME="delGroup" VALUE="<%=objRepGroups("GROUPID")%>"><%
				Else%><%=(obLanguage("Constructor","kReportsInGroup") & ": " & nRepCount)%><%
				End If%>
				</td></tr><%
				objRepGroups.MoveNext
			WEnd%>
			</table>
		</div>
	</div>
	<%
End Sub
%>
