<!-- #INCLUDE VIRTUAL="/asp/headerprint_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ParentInfoLetter_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Messages/SendSaveMsg_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function onLoad()
	If bSendReport And Not bNoSeparate Then
		onLoad = "JavaScript:SendReport();"
	End If
End Function

Sub onHead()
	If bSendReport Then
		Call SendReportScript(obLanguage("ReportNames","kRNParentInfoLetter"))
	End If
End Sub

Sub ReadState()
	bSendReport = CBool(GetSafeStr(Request("RP"), 3, "") = ", R")
	specialRead
End Sub

Sub Main()
	Dim strReportData, i, sAttachment
	Dim strTO, strLTO, strSubject, bNeedNotification, strStyles, styles
	Dim fso, filePath
	specialMain
	If bSendReport Then
		strReportData = ""
		If bNoSeparate Then
			Set fso = CreateObject("Scripting.FileSystemObject")
			filePath = Server.MapPath("\static\dist\pages\common\css\print-tables.min.css")
			Set styles = fso.GetFile(filePath)
			strStyles = styles.OpenAsTextStream(1).ReadAll()
			strStyles = "<style>" & Right(strStyles, Len(strStyles)-3) & "</style>"
			bNeedNotification = GetSafeBool(Request("bNeedNotification"), False)
			For i = 0 To UBound(arrReport1)
				
				sAttachment = strStyles & arrReport1(i) & arrReport2(i)
				strSubject = obLanguage("ReportNames","kRNParentInfoLetter") & " " & "(" & obLanguage("Reports", "kOn") & " " & dtToday & ")"
				NumberMsgToParents = NumberMsgToParents + GetParents(arrStudents(0, i), strTO, strLTO)
				Call GetStudents(arrStudents(0, i), strTO, strLTO)
				Call Send(bxSent, 0, strTO, "", strSubject, "", strLTO, "", "", "", strSubject, sAttachment, "H", "", bNeedNotification)
			Next
			NumberMsgToStudents = UBound(arrReport1) + 1
			Call WriteJsonResult(obLanguage("Common", "kReportSendSuccess") & "\n" & obLanguage("Common", "kToParents") & ": " & NumberMsgToParents & "\n" & obLanguage("Common", "kStudents_d", strFunctionalityType) & ": " & NumberMsgToStudents, False, 0)
		Else
			strReportData = arrReport1(0) & arrReport2(0)
			obTokenMgr.SetData strToken, stMsgReport, strReportData
		End If
	End If
End Sub

Function GetParents(StudentID, byref strTO, byref strLTO)
	Dim rsParentsForStudent
	strTO=""
	strLTO=""

	Set rsParentsForStudent = objNSNET.GetParentsListForStudent(StudentID)
	While Not rsParentsForStudent.EOF
		strTO = strTO & rsParentsForStudent("NICKNAME") & ";"
		strLTO = strLTO & rsParentsForStudent("PARENTID") & ";"
		GetParents = GetParents + 1
		rsParentsForStudent.MoveNext()
	Wend
End Function

Sub GetStudents (StudentID, byref strTO, byref strLTO)
	strTO = strTO & objNSNET.GetUserNickName(StudentID) & ";"
	strLTO = strLTO & StudentID  & ";"
End Sub

Sub onDrawPage()
	Dim i
	If bSendReport Then
		If Not bNoSeparate Then Response.Write "<h3 align=""center"">" & obLanguage("Reports","kReportToSend") & "</h3>"
	Else
		rw "<div style=""width:700px;"">"
		For i = 0 To UBound(arrReport1)
			Response.Write arrReport1(i)
%>		
<!-- #INCLUDE VIRTUAL="/asp/CustomData/ParentInfoLetter.html" -->
<%
			Response.Write arrReport2(i)
		Next
		rw "</div>"
	End if
End Sub

Function GetReport(ind)
	Dim strReport

	arrReport1(ind) = GetPageTitle(obLanguage("ReportNames","kRNParentInfoLetter"))
	strReport = GetReportTitle()
	If Not bSubjects Then
		strReport = strReport & obLanguage("Filter","kNoSubjectsForStudent",strFunctionalityType)
	Else
		strReport = strReport & GetReportTable()
	End If
	arrReport2(ind) = strReport & GetPageVerPrint() & IIf(bNoSeparate, "<br style='page-break-after: always'>", "")
End Function
	
Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		GetTableHeaderString()
End Function

Function GetTableHeaderString()
	GetTableHeaderString = "<tr>"
End Function

Function GetSchoolInfoTable(strSchName, strCityName, strAddress, strTel, strFax, strLogoFile)
    Dim strSchoolInfo, strLogo
    
    strSchoolInfo = DB2HTML(strSchName) & "<br/>" & _
        DB2HTML(strCityName) & IIf(IsDull(strAddress), "", ",&nbsp;" & DB2HTML(strAddress)) & ",<br>" & _
        obLanguage("Reports","kPhonesS") & "&nbsp;" & DB2HTML(strTel)
    If Not IsDull(strFax) Then
        strSchoolInfo = strSchoolInfo & ",&nbsp;" & obLanguage("Reports","kFaxS") & "&nbsp;" & DB2HTML(strFax)
    End If
	If bSendReport and bNoSeparate Then
		strLogo = ""
	Else
		strLogo = "<img width=""40"" height=""40"" src=""" & strLogoFile & """>"
	End If
    GetSchoolInfoTable = "<table class=""NullTable""><tr><td>" & strLogo & "</td>" & _
        "<td colspan=""6"" class=""text-center"">" & strSchoolInfo & "</td></tr></table>"
End Function

Function GetReportTail()
	Dim strReport
    
	strReport = "<br><br>"

	strReport = strReport & "<table border=""0"" align=""left""><tr><td nowrap align=""center"">" & _
		"<div class=""smalltext"">" & kCutHR & _
		"<br>" & obLanguage("Reports","kCutLine") & "</div></td></tr></table>"

	strReport = strReport & "<br><br><br><br>"

	strReport = strReport & "<table border=""0"" width=""100%"">" & _
		"<tr><td align=""left""><div class=""select""><b>" & obLanguage("Reports","kBackRelation") & ": </b></div></td>" & _
			"<td align=""right""><div class=""select"">" & DB2HTML(strStudentName) & ", " & DB2HTML(strClassName) & "</div></td>" & _
		"</tr>" & _
		"<tr><td colspan=""2"">&nbsp;</td></tr>" & _
		"<tr><td colspan=""6"">" & kSolidHR & "<br></td></tr>" & _
		"<tr><td colspan=""6"">" & kSolidHR & "<br></td></tr>" & _
		"<tr><td colspan=""6"">" & kSolidHR & "<br></td></tr>" & _
		"<tr><td width=""50%"">&nbsp;</td>" & _
			"<td nowrap align=""right""><div class=""select""><b>" & obLanguage("Common","kDate") & "</b>&nbsp;" & kSignSolidLine & _ 
				"&nbsp;&nbsp;<b>" & obLanguage("Reports","kSignature") & "</b>&nbsp;" & kSignSolidLine & "</div></td>" & _
		"</tr>" & _
		"<tr><td colspan=""2"">&nbsp;</td></tr>" & _
		"<tr><td align=""left""><div class=""select""><b>" & obLanguage("Common","kClassChief",strFunctionalityType) & ": </b></div></td>" & _
			"<td align=""right""><div class=""select"">" & DB2HTML(strClassChiefFullName) & "</div></td>" & _
		"</tr>" & _
		"</table><br>"
	GetReportTail = strReport
End Function
%>
