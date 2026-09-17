<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentTotalMarks_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Messages/SendSaveMsg_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim bSendMail

Sub ReadState()
	bSendMail = CBool(GetSafeStr(Request("action"), -1, "") = "sendReport")
	If bSendMail Then
		bSendReport = True
	Else
		bSendReport = CBool(GetSafeStr(Request("RP"), 3, "") = ", R")
	End If
	specialRead
End Sub

Sub Main()
	Dim sAttachment, strSubject, strTO, strLTO, i, strReport, bNeedNotification
	specialMain
	Dim fso, filePath, strStyles, styles
	If Not bNoMarks Then
		If bSendReport Then
			Set fso = CreateObject("Scripting.FileSystemObject")
			filePath = Server.MapPath("\static\dist\pages\common\css\print-tables.min.css")
			Set styles = fso.GetFile(filePath)
			strStyles = styles.OpenAsTextStream(1).ReadAll()
			strStyles = "<style>" & Right(strStyles, Len(strStyles)-3) & "</style>"
			bNeedNotification = GetSafeBool(Request("bNeedNotification"), False)
			For i = 0 To UBound(arrStudents, 2)
				sAttachment= strStyles & arrStudents(1, i)
				strSubject = obLanguage("ReportNames", "kRNTotalReportsForStaff", strFunctionalityType) & " " & "(" & obLanguage("Reports", "kOn") & " " & NSDate() & ")"
				NumberMsgToParents = NumberMsgToParents + GetParents(arrStudents(0, i), strTO, strLTO)
				Call GetStudents(arrStudents(0, i), strTO, strLTO)
				Call Send(bxSent, 0, strTO, "", strSubject, "", strLTO, "", "", "", strSubject, sAttachment, "H", "", bNeedNotification)
			Next
			NumberMsgToStudents = UBound(arrStudents, 2) + 1
			Call WriteJsonResult(obLanguage("Common", "kReportSendSuccess") & "\n" & obLanguage("Common", "kToParents") & ": " & NumberMsgToParents & "\n" & obLanguage("Common", "kStudents_d", strFunctionalityType) & ": " & NumberMsgToStudents, False, 0)
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
	GetReport = DrawTableSTR(False)
End Function

Sub onDrawPage()
	Dim i

	If Not bNoMarks Then
		If bSendReport Then
			If Not bNoSeparate Then Response.Write "<H3 align=""center"">" & obLanguage("Reports","kReportToSend") & "</H3>"
		Else
			rw "<div style=""width:700px;"">"
			For i = 0 To UBound(arrStudents, 2)
				Response.Write arrStudents(1, i)
			Next
			rw "</div>"
		End If
	Else
		Response.Write "<H3 align=""center"">" & obLanguage("Reports","kNoStudentMarks") & "</H3>"
	End If
End Sub

Function GetHeader(strStudentID, strStudentNickName)
	Dim strPhotoImg
	Dim strAccClass, strAccDateString

	If PERSON_DATA Then strPhotoImg = GetWrappedPhotoImg(strStudentID)
	GetHeader = GetSchoolNameForPageTitlePrint() & _
		"<H3 align=""center"">" & strReportName & "</H3>" & _
		"<table><tr><td>" & strPhotoImg & "</td><td>" & _
		"<div class=""body"">" & "<b>" & obLanguage("Common","kStud_FI") & ":&nbsp;" & "</b>" & DB2HTML(strStudentNickName) & _
		"<div class=""select"">"& "<b>" & obLanguage("Common","kSchoolYear") & ":&nbsp;" & "</b>" & obTokenMgr.GetData(strToken, "CurrYearName") & "</div>" & _
		"<div class=""body"">" & "<b>" & obLanguage("Common","kClass",strFunctionalityType) & "</b>" & ":&nbsp;" & strClassName & "</div>" & "</td></tr></table><br>"
End Function

Function GetFooter()
	GetFooter = GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=table-print-num>" & "<tr>"
End Function%>
