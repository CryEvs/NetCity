<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentTotalMarks_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub ReadState()
	specialRead
End Sub

Sub Main()
	specialMain
End Sub

Sub onDrawPage()
	Dim i, strReport, arrFilter, nUBound
	Dim strNickNameTitle, strNickNameValue

	If Not bNoMarks Then
		rw "<div style=""width:700px;"">"
		For i = 0 To UBound(arrStudents, 2)
			Response.Write arrStudents(1, i)
		Next
		rw "</div>"
	Else 
		If bNoSeparate Then
			strNickNameTitle = Empty
			strNickNameValue = Empty
		Else
			strNickNameTitle = obLanguage("Reports","kLastNameFirstName")&" "&obLanguage("Reports","kOfStudent",strFunctionalityType)
			strNickNameValue = objNSNET.GetUserNickName(strStudentID)
		End If
		arrFilter = Array(strNickNameTitle, strNickNameValue, obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),strClassName)

		strReport = GetPageTitleExcel(strReportName, arrFilter)

		strReport = strReport & GetWarningExcel(obLanguage("Reports","kNoStudentMarks"))
		strReport = strReport & GetPageVerExcel()
		Response.Write strReport
	End If
End Sub

Function GetReport()
	GetReport = DrawTableSTR(True)
End Function

Function GetHeader(strStudentID, strStudentNickName)
	Dim strScName
	strScName = GetSchoolNameForPageTitleExcel()
	GetHeader = "<table border=""0"">" & strScName & "<tr><td nowrap class=""xtl10wr""><b>" & DB2HTML(strStudentNickName) & ",&nbsp;" & strClassName & ".&nbsp;" & strReportName & "</b></td></tr>" & _
		"<tr><td nowrap class=""xtl10wr"">" & obLanguage("Common","kSchoolYear") & "&nbsp;" & obTokenMgr.GetData(strToken, "CurrYearName") &"</td></tr>" & _
		"<tr><td>&nbsp;</td></tr>" & _
		"</table>"
End Function

Function GetFooter()
	GetFooter = GetPageVerExcel()
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1"">" & _
		"<tr align=""center"" class=""xtcb"">"
End Function

Function GetTableHeaderString()
	GetTableHeaderString = "<tr align=""center"" class=""xtcb"">"
End Function
%>
