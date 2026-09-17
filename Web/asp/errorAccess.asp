<!-- #INCLUDE FILE=header1.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.

Sub onDrawPage()
	DrawWarning obLanguage("Common","kErrPageAccess")
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("Login","kErrAccessDenied")
End Function

Sub onHead()
	If (bIsAdminInterface Or bIsEducManager) Then
%><SCRIPT><!--
	isHaveToLogout=true;
	bNewWindow=true;
	function Logout()
	{
		if( bNewWindow ) document.MenuForm.target ="_blank";
		document.MenuForm.action ="/asp/logout.asp";
		document.MenuForm.submit();
	}
//--></SCRIPT>
<%
	End If
End Sub
%>
