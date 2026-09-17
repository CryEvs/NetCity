<!-- #INCLUDE FILE=../headerprint.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
'	AURL=<Activity View URL>

Dim strTF, strTTSURL, strFormName, strLA

Sub ReadState()
	strTF = GetSafeStr(Request("TF"), 50, NULL)
	strTTSURL = Request("TTSURL")
	strLA = GetSafeStr(Request("LAID"), -1, "" )
End Sub

Sub onHead()
%>
<SCRIPT><!--
function FillParams(){
	if ( window.opener && !window.opener.closed )
	{
		var form = window.opener.document.forms['<% = strTF %>']; 
		if (form) {
			var form1 = document.forms["ProxyForm"];
			form1.elements['PROBLEMNAME'].value = form.elements['PROBLEMNAME'].value;
			form1.elements['PARAMETERS'].value = form.elements['PARAMETERS'].value; 
			form1.elements['EDITABLE'].value = form.elements['EDITABLE'].value; 
			form1.submit();
		}
	}
}
//-->
</SCRIPT>
<%
End Sub

Function onLoad()
	onLoad = "FillParams()"
End Function
	
Sub onDrawPage()
%>
<H3 ALIGN="CENTER"> <%=obLanguage("Curriculum","kPleaseWait")%> </H3> 
<FORM NAME="ProxyForm" METHOD="post" ACTION="<%= Request("AURL")%>" >
	<INPUT TYPE="hidden" NAME="AT" VALUE="<%= strToken %>">
	<INPUT TYPE="hidden" NAME="TF" VALUE="<%= strTF %>">
	<INPUT TYPE="hidden" NAME="TTSURL" VALUE="<%= strTTSURL %>">
	<INPUT TYPE="hidden" NAME="PROBLEMNAME" VALUE="">
	<INPUT TYPE="hidden" NAME="PARAMETERS" VALUE="">
	<INPUT TYPE="hidden" NAME="EDITABLE" VALUE=""><%
	If strLA <> "" Then
	%><INPUT TYPE="hidden" NAME="LAID" value="<%=strLA%>"><%
	End If
%></FORM>
<%
End Sub
%>
