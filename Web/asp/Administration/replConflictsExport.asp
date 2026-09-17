<!-- #INCLUDE FILE="../headerexcel.asp" -->
<!-- #INCLUDE FILE="replConflicts_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub onDrawPage()
	Response.Write GetPageTitlePrint( obLanguage("ServAdmin","kTitleInfoConflicts"), Array(obLanguage("ServAdmin","kTimePeriod"), obLanguage("ServAdmin","kTimeNow"), obLanguage("ServAdmin","kTypeOfErrors"), obLanguage("ServAdmin","kReplConflicts")))
	Call DrawTable()
	Response.Write GetPageVerExcel()
End Sub

Function GreenText(strData)
	GreenText = strData
End Function
%>
