<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE FILE=ScreenNonPrint.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strSaveScript, strBackScript

Sub ReadState
	strSaveScript = GetSafeStr( Request("SS"), -1, "defaultSave" )
	strBackScript =	GetSafeStr( Request("BS"), -1, "defaultBack" )
End Sub

Function getBGColor()
	getBGColor = "#EEEEEE"
End Function 

Sub onDrawHead()
	Call onHeadNonPrint()%>
	<script>
	<!--
	function defaultBack(){
	    parent.window.close();
	}
	-->
	</script><%
End Sub

Sub onDrawPage()
%>
<table width="90%" border=0 cellspacing=0 cellpadding=0 align=center>
<tr><td><%
	Call InlineButton( "parent." & strSaveScript & "();", obLanguage("Messages","kChooseRecipients"), "disk")%>&nbsp;<%
	Call InlineButton( "parent." & strBackScript & "();", obLanguage("Messages","kGoBackToMessage"), "arrowreturnthick-1-w")
%></td><td align="right"><%
	Call ButtonDel("parent.frames['usersselectorright'].Remove();", obLanguage("Messages","kDeleteSelectedRecipient"))
%>
</td></tr></table>
<%
End Sub
%>
