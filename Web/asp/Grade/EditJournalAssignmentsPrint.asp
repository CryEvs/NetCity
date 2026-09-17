<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->

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
	Call InitAssignmentTypesHelper()
	If strTable<>"" Then
		Response.Write strTable & "<br>" & _
			"<div class=""select"">" & obLanguage("Common","kLegend") & "</div><div class=""select"">" & obLanguage("Grade","kAssignsTypes") & "</div>"
		Call ShowTypesLegend(True)
	Else
		Response.Write GetWarningPrint(obLanguage("Grade","kNoClassMeetings"))
	End If
	Response.Write GetPageVerPrint()
End Sub
%>
