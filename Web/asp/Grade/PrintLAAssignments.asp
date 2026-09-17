<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
Dim strHeader, strTable 

Sub ReadState()
	strHeader = obTokenMgr.GetData(strToken, stTempString)
	strTable = obTokenMgr.GetData(strToken, stPrintTable)
End Sub

Sub onDrawPage()
Dim arr, n, strTitle
	If IsDull(strHeader) Then Exit Sub
	arr = Split(strHeader, "|")
	n = UBound(arr)
	strTitle = arr(n)
	ReDim Preserve arr(n-1)
	Response.Write GetPageTitlePrint(strTitle, arr)
	If strTable<>"" Then
		Response.Write strTable
	Else
		Response.Write GetWarningPrint(obLanguage("Grade","kNoClassMeetings"))
	End If
	Response.Write GetPageVerPrint()
End Sub
%>
