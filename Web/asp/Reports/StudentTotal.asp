<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AttendanceReport_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Messages/SendSaveMsg_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function onLoad()
	If bSendReport And Not bNoSeparate And bIsInfoPeriod Then
		onLoad = "JavaScript:SendReport();"
	End If
End Function

Sub onHead()
	If Not bIsInfoPeriod Then%>
			<script><!--
				$(document).ready(function () { alert('<%=obLanguage("Reports","kNoInfoForPeriod")%>', { close: function () { window.close(); } }); })
			//--></script>
	<%Else
		If bSendReport Then
			If bNoSeparate Then %>
					<script><!--
						$(document).ready(function () { alert('<%=obLanguage("Common", "kReportSendSuccess") & " -<br/> " & obLanguage("Common", "kToParents") & ": " & NumberMsgToParents & "<br/> " & obLanguage("Common", "kStudents_d", strFunctionalityType) & ": " & NumberMsgToStudents%>', { close: function () { window.close(); } }); })
					//--></script>
			<%Else
				Call SendReportScript(obLanguage("ReportNames","kRNStudentGAReport", strFunctionalityType))
			End If
		End If
	End If
End Sub

Sub Main()
	Dim sAttachment, strSubject, strTO, strLTO, i, strReport, bNeedNotification, strStyles, styles
	Dim fso, filePath
	Call specialMain()
	If bIsInfoPeriod Then
		If bSendReport Then 
			If bNoSeparate Then
				Set fso = CreateObject("Scripting.FileSystemObject")
				filePath = Server.MapPath("\vendor\pages\css\print-tables.css")
				Set styles = fso.GetFile(filePath)
				strStyles = styles.OpenAsTextStream(1).ReadAll()
				strStyles = "<style>" & Right(strStyles, Len(strStyles)-3) & "</style>"
				bNeedNotification = GetSafeBool(Request("bNeedNotification"), False)
				For i = 0 To UBound(arrStudents)
					sAttachment= strStyles & arrStudents(i, 1)
					strSubject = obLanguage("ReportNames", "kRNStudentGAReport", strFunctionalityType) & " " & "(" & obLanguage("Reports", "kOn") & " " & NSDate() & ")"
					NumberMsgToParents = NumberMsgToParents + GetParents(arrStudents(i, 0), strTO, strLTO)
					Call GetStudents(arrStudents(i, 0), strTO, strLTO)
					Call Send(bxSent, 0, strTO, "", strSubject, "", strLTO, "", "", "", strSubject, sAttachment, "H", "", bNeedNotification)
				Next
				NumberMsgToStudents = UBound(arrStudents) + 1
				Call WriteJsonResult(obLanguage("Common", "kReportSendSuccess") & "\n" & obLanguage("Common", "kToParents") & ": " & NumberMsgToParents & "\n" & obLanguage("Common", "kStudents_d", strFunctionalityType) & ": " & NumberMsgToStudents, False, 0)
			Else 
				strReport = arrStudents(0, 1)
				obTokenMgr.SetData strToken, stMsgReport, strReport
			End If
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

Function GetReport()
	bIsInfoPeriod = True
	If nDaysCnt > 0 and isArray(arrSubjClassName) Then
		GetReport = DrawTableSTR(False)
	Else
		bIsInfoPeriod = False
	End If
End Function

Sub onDrawPage()
	Dim i
	If bIsInfoPeriod Then
		If bSendReport Then
			If bNoSeparate Then Response.Write "<h3 align=""center"">" & obLanguage("Reports","kReportToSend") & "</h3>"
		Else
			rw "<div style=""width:700px;"">"
			For i = 0 To UBound(arrStudents)
				Response.Write arrStudents(i, 1)
			Next
			rw "</div>"
		End If
	Else
		%><script><!--
			$(document).ready(function () { alert('<%=obLanguage("Reports","kNoInfoForPeriod")%>'); })
		//--></script><%
	End If
End Sub

Function GetHeader()
	Dim strPhotoImg, strStudentFullName
	If PERSON_DATA Then strPhotoImg = GetWrappedPhotoImg(objStudentAttendance("STUDENTID"))
	strStudentFullName =  MakeShortNickName(objStudentAttendance)
	GetHeader = GetSchoolNameForPageTitlePrint() & "<table><tr><td>" & strPhotoImg & "</td><td>" & "<div class=""body"">" & DB2HTML(strStudentFullName) & ",&nbsp;" & strAccClass & ".&nbsp;" & obLanguage("Reports","kGradeAndAttendance") & "</div>" & _
		"<div class=""select"">"& obLanguage("Reports","kForPeriod") & "&nbsp;" & strAccDateString &"</div> </td></tr></table><br>"
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		"<tr><th rowspan=""2"">" & obLanguage("Common","kSubject") & "</th>"
End Function

Function GetTableHeaderExt()
	GetTableHeaderExt = "</tr><tr style=""background-color: #eaeaea"" class=""body"">"
End Function

Function GetNoMarksString()
	GetNoMarksString = GetWarningPrint(obLanguage("Reports","kNoInfoForPeriod"))
End Function

Function GetSignString()
	GetSignString = "<br><div class=""body"">" & obLanguage("Reports","kParentsSign") & ":</div>"
	GetSignString = GetSignString & GetPageVerPrint()
End Function
%>
