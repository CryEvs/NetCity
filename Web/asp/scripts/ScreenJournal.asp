<!-- #INCLUDE VIRTUAL=/asp/scripts/ScreenNonPrint.asp -->
<% ' © 2007-2011 IRTech. All rights reserved.
Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
End Function

Function ConnectionSwitchIsNeeded( bIsYearArchived )
	ConnectionSwitchIsNeeded = bIsYearArchived
End Function

Function ReadYearConnectionState()
	Dim bArchived
	Dim objRs
	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	bArchived = obTokenMgr.GetData(strToken,"IsArchived")
	If ConnectionSwitchIsNeeded( bArchived ) Then
		SetArchConnection
	End If
End Function

If Not hasUserRightsOnPage() Then RedirectTo "/asp/errorAccess.asp?", Null

Call ReadYearConnectionState()
Call StartTimeLog("ReadState")
Call ReadState()
Call EndTimeLog("ReadState")
Call TestError( obLanguage("Common","kUnexpErr") )
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><head>
<meta HTTP-EQUIV="Expires" CONTENT="10">
<meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8"><%
	Call DrawCssLinks()
	Call DrawJSLibsLinks()
	Call onHead()
	Call TestError( obLanguage("Common","kUnexpErr"))
	Call StartTimeLog("onDrawPageBody")%>
</head><%
	%><body style="padding: 0;  min-width: 300px"><%
	Call onDrawPage()
	Call EndTimeLog("onDrawPageBody")
	Call TestError( obLanguage("Common","kUnexpErr") )
	%>
	<script language="JavaScript" src="<%=GetVersionedJsLink("tooltips.js")%>"></script>
</body>
</html>
