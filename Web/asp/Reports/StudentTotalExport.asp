<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AttendanceReport_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
'--------- Page Parameters -------
'	AT=<Access Token>
'	CLID=<Class ID>
'	RP="R" - send report

Function onLoad()
End Function

Sub onHead()
End Sub

Sub ReadState()
	Call specialRead()
End Sub

Sub Main()
	Call specialMain()
End Sub

Function GetReport()
	bIsInfoPeriod = True
	If nDaysCnt > 0 Then
		GetReport = DrawTableSTR(True)
	Else
		bIsInfoPeriod = False
	End If
End Function

Sub onDrawPage()
	Dim i, strReport, arrFilter, nUBound
	If bIsInfoPeriod Then
		rw "<div style=""width:700px;"">"
		For i = 0 To UBound(arrStudents)
			Response.Write arrStudents(i, 1)
		Next
		rw "</div>"
	Else 
		arrFilter = Array(obLanguage("Common","kSchoolYear"), strAccYear, obLanguage("Common","kClass",strFunctionalityType), strAccClass, obLanguage("Common","kPeriod"), strAccDateString)
		If Not bNoSeparate Then
			nUBound = UBound(arrFilter)
			ReDim Preserve arrFilter(nUBound + 2)
			arrFilter(nUBound + 1) = obLanguage("Common","Ученик",strFunctionalityType)
			arrFilter(nUBound + 2) = objNSNET.GetUserNickName(strStudentID)
		End If
		strReport = GetPageTitleExcel(obLanguage("ReportNames","kRNStudentGAReport",strFunctionalityType), arrFilter)

		strReport = strReport & GetWarningExcel(obLanguage("Reports","kNoInfoForPeriod"))
		strReport = strReport & GetPageVerExcel()
		Response.Write strReport
	End If
End Sub

Function GetHeader()
	Dim strScName, strStudentFullName

	strScName = GetSchoolNameForPageTitleExcel()
	strStudentFullName = MakeShortNickName(objStudentAttendance)
	GetHeader = "<table border=""0"">" & strScName & "<tr><td nowrap class=""xtl10wr""><b>" & DB2HTML(strStudentFullName) & ",&nbsp;" & strAccClass & ".&nbsp;" & obLanguage("Reports","kGradeAndAttendance") & "</b></td></tr>" & _
		"<tr><td nowrap class=""xtl10wr"">" & obLanguage("Reports","kForPeriod") & "&nbsp;" & strAccDateString &"</td></tr>" & _
		"<tr><td>&nbsp;</td></tr>" & _
		"</table>"
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1""><tr><th rowspan=""2"" valign=""top"">" & obLanguage("Common","kSubject") & "</th>"
End Function

Function GetTableHeaderExt()
	GetTableHeaderExt = "</tr><tr>"
End Function

Function GetNoMarksString()
	GetNoMarksString = GetWarningExcel(obLanguage("Reports","kNoInfoForPeriod"))
End Function

Function GetSignString()
	GetSignString = "<table border=""0""><tr><td>&nbsp;</td></tr><tr><td nowrap class=""xtl10bwr"">" & obLanguage("Reports","kParentsSign") & ":</td></tr><tr><td>&nbsp;</td></tr></table>"
	GetSignString = GetSignString & GetPageVerExcel() 
End Function
Function GetAttendanceLegend(strStyleTable)
	Dim str, strBuilder
	Set strBuilder = new StringBuilder
	str = "<tr><td>&nbsp;{1}&nbsp;</td><td>{0}</td></tr>"
	Call strBuilder.AppendFormat("<table {0}>", Array(strStyleTable))
	Call strBuilder.AppendFormat(str, Array(obLanguage("Assignment","kARMissedUPS"), obLanguage("Assignment","kARMissedUP")))
	Call strBuilder.AppendFormat(str, Array(obLanguage("Assignment","kARMissedS"), obLanguage("Assignment","kARMissed")))
	Call strBuilder.AppendFormat(str, Array(obLanguage("Assignment","kARMissedNPS"), obLanguage("Assignment","kARMissedNP")))
	Call strBuilder.AppendFormat(str, Array(obLanguage("Assignment","kARWasLateS"), obLanguage("Assignment","kARWasLate")))
	Call strBuilder.Append("</table>")
	GetAttendanceLegend = strBuilder.ToString()
End Function
%>
