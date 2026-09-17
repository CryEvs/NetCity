<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strRepType, strTermID
Dim strTermName, strClassName, strTeacherID, strTeacherName
Dim arrClasses
Dim bAll

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNJournalAccess",strFunctionalityType)
End Function
Function GetPageParams()
	GetPageParams = Null
End Function

Sub specialRead()
	Dim objClassInfo
	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")
	bAll = CBool(obTokenMgr.GetData(strToken, stReportsViewAll) = 1)

	If strClassID_IUP = "-1" Then ' Такое значение возможно только для bIsStaff
		' Здесь те же классы, что и в ReportJournalAccess.asp
		If bAll Then
			Call InitYearClassesAll_IUP()
		Else
			strTeacherID = strUserID
			Call InitTeacherClasses_IUP(True)
		End If
		arrClasses = objClasses_IUP_rs.GetRows(,,Array("ID", "NAME"))
	Else
		ReDim arrClasses(1,0)
		Call InitIUPClassID(strClassID_IUP)
		
		If Not bIsIupGrade Then
			Set objClassInfo = objNSNET.GetClassInfo(strClassID)
			arrClasses(0,0) = strClassID_IUP
			If Not objClassInfo.EOF Then arrClasses(1,0) = GetSafeStr(objClassInfo("CLASSNAME"), -1, "")
		Else
			arrClasses(0,0) = strClassID_IUP
			arrClasses(1,0) = strIupGrade & " *"
		End If
	End If
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""ThinTable"" border=""1"">"
End Function

Function GetReportTable()
	Dim rsSubjects, i
	Dim objClassInfo

	GetReportTable = ""
	
	For i = 0 To UBound(arrClasses, 2)
		strClassID_IUP = arrClasses(0, i) 

		strClassName = ""
		strTeacherName = ""
		strClassID = Empty
		strIupGrade = Empty

		strClassName = arrClasses(1, i) 
		Call InitIUPClassID(strClassID_IUP)

		If Not bIsIupGrade Then
			Set objClassInfo = objNSNET.GetClassInfo(strClassID)
			strTeacherID = CStr(GetSafeLng(objClassInfo("TEACHERID"), Null))' get class chief ID
			strTeacherName = objNSNET.GetUserNickName(strTeacherID)
		End If

		GetReportTable = GetReportTable & GetPageSubTitle(strClassName, IIF(IsDull(strTeacherName), "", strTeacherName))

		Set rsSubjects = objNSNET.GetLastJournalAccessForClass(strCurrYearID, strClassID, strIupGrade)
		
		If Not rsSubjects.EOF Then
			GetReportTable = GetReportTable & GetHeader_Table() & _
			"<tr align=""center"" class=""body"" style=""background-color: #eaeaea""><td>" & obLanguage("Common","kSubject") & "</td><td>" & obLanguage("Reports","kLastMarkChangeDate") & "</td><td>" & obLanguage("Common","kUser") & "</td></tr>"
			While not rsSubjects.EOF
				GetReportTable = GetReportTable & "<tr><td>" & rsSubjects("SGNAME") & "</td>"
				If Not IsDull(rsSubjects("EVENTTIME")) Then
					GetReportTable = GetReportTable & "<td align='right'>" & Date2Str(rsSubjects("EVENTTIME")) & "&nbsp;" & Time2Str(rsSubjects("EVENTTIME")) & "</td><td>" & rsSubjects("NICKNAME") & "</td></tr>"
				Else
					GetReportTable = GetReportTable & "<td align='center'>-</td><td align='center'>-</td></tr>"
				End iF
				rsSubjects.MoveNext
			Wend
			GetReportTable = GetReportTable & "</table>"
		Else
			GetReportTable = GetReportTable & "<div align='center'><b>" & obLanguage("Reports","kNoClassSubjects") & "</b></div>"
		End If
		GetReportTable = GetReportTable & "<br/>"

	Next
End Function
%>
