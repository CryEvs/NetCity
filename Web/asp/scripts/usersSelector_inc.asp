<% ' © 2007-2015 IRTech. All rights reserved.
Dim bNoSchoolFilter

Sub DrawUserSelector(strForm, strNameField, strIDsField, strSaveScript, strBackScript)%>
<script>
<!--
var forceClosing = false;
function ResetOpener() { if( !forceClosing && opener ) opener.windABook=null; }
function DoUserSelectorSubmit( url )
{
    var frmDoc = frames['usersselectorright'].document;
    var frmForm = frmDoc.forms.UserSelectorReturner;
    frmForm.target="_parent";
    frames.usersselectorright.DoSubmitWrap(frmForm, url )
}
//-->
</script>
<frameset rows="*,50" cols="*" frameborder="YES" BORDER="1" framespacing="0" onUnload="ResetOpener()"> 
	<frameset rows="*" cols="60%,*">
		<frame scrolling="AUTO" name="usersselectorleft" marginheight="3" src="/asp/scripts/usersSelectorLeft.asp?AT=<%=Request("AT")%>&SF=<%=IIF(bNoSchoolFilter,0,1)%>">
		<frame scrolling="AUTO" name="usersselectorright" marginheight="3" src="/asp/scripts/usersSelectorRight.asp?AT=<%=Request("AT")%>&amp;F=<%=strForm%>&amp;FN=<%=strNameField%>&amp;FID=<%=strIDsField%>&amp;FT=N&amp;AL=<%=strIDsField%>">
	</frameset>
	<frame scrolling="AUTO" name="usersselectorbottom" marginheight="2" src="/asp/scripts/usersSelectorBottom.asp?AT=<%=Request("AT")%>&SS=<%=strSaveScript%>&BS=<%=strBackScript%>">
</frameset>
<noframes><body bgcolor="#FFFFFF"><%=obLanguage("Messages","kFramesAreNotSupported")%></body></noframes>
<%End Sub%>
