<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/upload_inc.asp -->
<!-- #INCLUDE file="Photo_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim objForm, strBackPage, strEditUserID, strEditUserName
Dim bExistsPhoto

Function GetPageTitle()
	GetPageTitle = obLanguage("Photo","kTitlePhotoEdit") & ": " & GreenText(DB2HTML(strEditUserName))
End Function

Sub ReadState()
	If Not IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then GenerateError obLanguage("Common","kInvalidParameter")
	Set objForm = obTokenMgr.GetData(strToken,"QA_dct")

	strBackPage = obTokenMgr.GetData(strToken,stBackPage)
	strEditUserID = GetSafeLng( objForm("EDITUSERID"), Null)

	bExistsPhoto = Not IsDull(objNSNET.GetUserPhotoName(strEditUserID))
	strEditUserName = objNSNET.GetUserNickName(strEditUserID)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stValidIDs, Array(strEditUserID))
End Sub

Sub onHead()
%>
<script><!--
function savePhoto(){
	if( isDBBusy() ) return false;
	var form = document.forms["Main"];
	if( trimStr(form.elements["photoFile"].value) == '' ){
		alert(language.Generic.Photo.kErrorFileName);
		form.elements["photoFile"].focus();
		return;
	}
	var sFileName = form.elements["photoFile"].value.toLowerCase();
	var reg = new RegExp(".+[\.](gif|jpeg|jpg|png)$");
	if( sFileName.search(reg) == -1 )
	{
		alert(language.Generic.Photo.kPhotoFileName_Ext);
		form.elements["photoFile"].focus();
		return;
	}
	setDBBusy();
	DoSubmit( form, "PhotoSave.asp" );
}
function cancelEdit(){
	var form = document.forms["Main"];
	if( trimStr(form.elements["photoFile"].value) != '' ){
		if (!confirm(kDataWereChanged)) return;
	}
	DoSubmit( document.MenuForm, "<%=strBackPage%>");
}
<%If bExistsPhoto Then%>
function deletePhoto(){
	if( isDBBusy() ) return false;
	if (!confirm(language.Generic.Photo.kRemovePhotoConfirm + '<%=( strEditUserName & "?")%>'))
		return;
	setDBBusy();
	DoSubmit( document.MenuForm, "PhotoDelete.asp");
}
<%End If%>
//--></script>
<%
End Sub

Sub onDrawPage()%>
<form NAME="Main" METHOD="post" ENCTYPE="multipart/form-data" ACTION="PhotoSave.asp">
<%=WriteObligatoryTags()%>
<p><%=obLanguage("Photo","kPhotoFileName_Ext")%><br>
<%=(obLanguage("Photo","kPhotoFile_TooLarge") & kPhotoFile_MaxSize_KB)%>&nbsp;KB<br>
<%=obLanguage("Photo","kPhotoSize")%></p>
<table border="0" class="ThickTable" width="50%" CELLPADDING="5" CELLSPACING="0">
	<tr><td>
		<table border="0" cellpadding="0" cellspacing="0">
			<tr><td valign="top"><%
			ButtonSave "savePhoto()", obLanguage("Common","kSave")
			ButtonCancel "cancelEdit();", obLanguage("Common","kBack")%><br><%
			If bExistsPhoto Then
				ButtonDel "deletePhoto()", obLanguage("Photo","kRemovePhoto")
			End If%>
			</td>
			<td>&nbsp;&nbsp;&nbsp;</td>
			<td valign="top"><%
			If bExistsPhoto Then
				rw GetPhotoImg(strEditUserID)
			Else
				%>&nbsp;<%
			End If%>
			</td>
		</td></tr></table>
	</td></tr>
	<tr><td>
	<table border="1" class="ThickTable" width="100%" CELLPADDING="5" CELLSPACING="0">
		<tr>
			<th width="20%" valign="top"><%=obLanguage("Photo","kPhotoFile")%></th>
			<td valign="top">
				<input type="file" name="photoFile" SIZE="<%=IIf(isIE, "50", "30")%>"><br>
			</td>
		</tr>
	</table>
	</td></tr>
</table>
</form><%
End Sub
%>
