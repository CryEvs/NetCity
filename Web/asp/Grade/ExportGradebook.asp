<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
Dim strHeader, strTable, strTitle

Sub ReadState()
	strHeader = obTokenMgr.GetData(strToken, stTempString)
	strTable = obTokenMgr.GetData(strToken, stPrintTable)
End Sub

Sub onDrawPage()
	Dim nPos, arr, n

	If IsDull(strHeader) Then Exit Sub
	arr = Split(strHeader,"|")
	n = UBound(arr)
	strTitle = arr(n)
	ReDim Preserve arr(n-1)
	Response.Write GetPageTitleExcel(strTitle, arr)
	If strTable<>"" Then
		nPos = InStr( strTable, Chr(1) )
		If nPos > 0 Then 
			Response.Write Left(strTable, nPos-1)
			Response.Write Mid(strTable, nPos+1)
		Else
			Response.Write strTable
		End If
	Else
		Response.Write GetWarningExcel(obLanguage("Grade","kNoMarks"))
	End If
	Response.Write GetPageVerExcel()
End Sub
%>
