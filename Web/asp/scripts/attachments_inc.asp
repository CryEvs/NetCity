<% ' © 2007-2015 IRTech. All rights reserved.
Dim nAttachmentID, strAFileName, strADescription

Sub DrawAttachmentsScripts()
	%>
	function openAttachment(fileName, attachId) {
		downloadFile("/webapi/attachments/" + attachId, {filename: fileName})
	}
	<%
End Sub

Sub WriteCheckAttachmentSizeJsScript()
	%>
	var maxFileSize = <%=obTokenMgr.Application()("UploadLimits").SchoolDocFileSizeLimit%>;

	$(document).ready(function() {
		$('input[type="file"]').on('change', function() {
			var elements = this.value.split('\\');
			var fileName = elements[elements.length - 1];

			if(this.files && this.files[0] && this.files[0].size > maxFileSize * 1024) {
				return alert(language.Generic.SetupSchoolPortfolio.kFileSizeCantBeGreaterThan + maxFileSize + ' KB');
			}
			$(this).closest('.input-group').find('#fileName').val(fileName).attr('title', fileName);
		});
	});
	<%
End Sub

'Добавление "разрешимых" документов для текущей сессии
Sub AppendStateDocs(strDocIds)
	Dim arrAppendDocs
	Dim strCurrDocs, arrCurrDocs
	Dim strAppendDocId, strDocId
	Dim bExists
	If IsDull(strDocIds) Then Exit Sub

	strCurrDocs = GetSafeStr(obTokenMgr.GetData(strToken, stDocIDs),-1,"")
	If IsDull(strCurrDocs) Then
		Call obTokenMgr.SetData(strToken, stDocIDs, strDocIds)
		Exit Sub
	End If

	arrAppendDocs = Split(strDocIds, ",")
	arrCurrDocs = Split(strCurrDocs, ",")

	For Each strAppendDocId In arrAppendDocs
		bExists = False
		For Each strDocId In arrCurrDocs
			If strAppendDocId = strDocId Then
				bExists = True
				Exit For
			End If
		Next
		If Not bExists Then
			strCurrDocs = strCurrDocs & strAppendDocId & ","
		End If
	Next

	Call obTokenMgr.SetData(strToken, stDocIDs, strCurrDocs)
End Sub

Sub AttachmentLink(attachmentId, fileName)
	If IsDull(fileName) Then Exit Sub%>

	<span class="AttachmentSpan">
		<a HREF="JavaScript:openAttachment('<%=(DB2Java(GetFileName(fileName)))%>', <%=attachmentId%>);"><%=fileName%></a>
	</span><%
End Sub

Function ConvertJsonObject2Str(result)
	If Not result.IsSuccess Then GenerateError result.Message

	ConvertJsonObject2Str = ""

	If Ubound(result.data) > -1 Then
		Dim i, objFileInfo, strAttachments, arrFiles

		arrFiles = result.data

		For i = 0 To UBound(arrFiles)
			strAttachments = strAttachments & arrFiles(i).FileAttachmentId & ","
		Next

		Call AppendStateDocs(strAttachments)

		ConvertJsonObject2Str = comHelper.JsonHelper.SerializeObject(result.data)
	End If
End Function%>