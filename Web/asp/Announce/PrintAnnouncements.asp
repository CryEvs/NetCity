<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strTable

Sub ReadState()
	strTable = obTokenMgr.GetData(strToken, stPrintTable)
End Sub

Sub onDrawPage()
	If strTable<>"" Then Response.Write GetPageTitlePrint(obLanguage("Announcement","kTitleViewAnn"), Array(obLanguage("Common","kUser"),strUserName))& strTable & GetPageVerPrint()
End Sub
%>
