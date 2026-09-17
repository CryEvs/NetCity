<% ' © 2007-2013 IRTech. All rights reserved.

Sub MakeFileDialogForm(strFieldTitle, strAction, strTarget, arrHiddenTags)%>
	<div id='selectFileDlg' style='display:none; overflow: hidden;'>
		<form action="<%=strAction%>" enctype="multipart/form-data" method="post" name="f" id="Form1" <%If Not IsDull(strTarget) Then%>target="<%=strTarget%>"<%End If%>>
			<%=WriteObligatoryTags()%>
			<%If IsArray(arrHiddenTags) Then%><%=WriteHiddenTags(arrHiddenTags)%><%End If%>
			<table cellspacing="0" cellpadding="3" border="1" style="" class="ThickTable">
				<tr>
					<th nowrap="" align="LEFT"><%=strFieldTitle%></th>
					<td><input type="file" name="File"></td>
				</tr>
			</table>
		</form>
	</div><%
End Sub

Sub MakeFileDialogJS(strDlgTitle, strFileExt, strInvalidFileExtMsg, strTarget)
	Dim nFileExtLen
	nFileExtLen = Len(strFileExt)
%>
var fileExt = '<%=strFileExt%>';
var extLen = fileExt.length;
function doProcessFile() {
	var form = $('form', '#selectFileDlg')[0];
	var fileName = trimStr(form.elements["File"].value)
	if( fileName == '' ){
		alert(language.Generic.SetupSchoolUI.kMsgSelectFileName);
		form.elements["File"].focus();
		return false;
	}
	if( extLen > 0 ){
		if( fileName.toLowerCase().substr(fileName.length - extLen, extLen) != fileExt.toLowerCase() ){
			alert('<%=strInvalidFileExtMsg%>');
			form.elements["File"].focus();
			return false;
		}
	}
	<%If Not IsDull(strTarget) Then%>
		form.target = "<%=strTarget%>";
		window.open('/asp/blank.htm', '<%=strTarget%>', 'status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no, width=1200px, height=500px');
	<%Else%>
		setDBBusy();
	<%End If%>
	DoSubmit(form, ""); 
	return true;
}

function processFile() {
	var $dialog = $('#selectFileDlg').dialog({
		autoOpen: false,
		dialogClass: 'alert',
		buttons: { "Ok": function() { if (doProcessFile()) {$(this).dialog("close"); <%If IsDull(strTarget) Then%>$(document).trigger('showProcessing');<%End If%>} }, "Cancel": function() { $(this).dialog("close"); } },
		title: '<%=strDlgTitle%>',
		closeOnEscape: true,
		modal: true,
		resizable: true,
		draggable: true,
		width: 400,
		minHeight: 30
	});
	//$dialog.html('<div><table cellspacing="0" cellpadding="3" border="1" style="" class="ThickTable" id="ImportSettingID"><tr><th nowrap="" align="LEFT">Файл импорта:</th><td><input type="file" size="50" name="File"></td></tr></table></div>');

	$dialog.dialog('open');
}
<%
End Sub
%>
