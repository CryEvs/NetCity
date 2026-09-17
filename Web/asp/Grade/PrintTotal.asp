<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE FILE="PublicTotal_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterTerms.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Sub onDrawPage()
	If Not bIsDebug Then On Error Resume Next
	Response.Write GetPageTitlePrint(obLanguage("Grade","kTotals"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Filter","kClassGB",strFunctionalityType)&"/"&obLanguage("Filter","kCourseGB"), objNSNET.GetSubjectClassName(strSubjClassID), obLanguage("Filter","kTeacherGB",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID)))
	Call DrawTotalTable(objStudentMarksRs)
	Response.Write GetPageVerPrint()
End Sub

Sub	DrawTableHeader
	Dim i
	Dim nExamRowSpan, nExamColSpan, strExamTitle
	
	Call PrepareExamColumn(nExamRowSpan, nExamColSpan, strExamTitle)
	
	Response.write "<tr><th rowspan=2>"& obLanguage("Grade","kStudentsColumn",strFunctionalityType) &"</th><th colspan="&Ubound(arrTerms, 2)+1&">"& obLanguage("Grade","kPeriodsColumn") &"</th>"
	Response.write "<th rowspan=2>"&obLanguage("Grade","kYearTitle")&"</th><th rowspan=" & nExamRowSpan & " colspan=" & nExamColSpan & ">" & strExamTitle & "</th><th rowspan=2>"&obLanguage("Grade","kTotalTitle")&"</th>"
	Response.write "</tr><tr>"
	For i=0 To UBound(arrTerms, 2)
		Response.write "<th>"&  DB2HTML(arrTerms(ind_TermName, i)) &"</th>"
	Next
	Call DrawExamSubColumn(nExamColSpan, False)
	Response.write "</tr>"
End	Sub
%>	
