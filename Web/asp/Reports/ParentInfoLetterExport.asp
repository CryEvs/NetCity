<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ParentInfoLetter_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub ReadState()
	specialRead
End Sub

Sub Main()	
	specialMain
End Sub

Sub onDrawPage()
	Dim i
	For i = 0 To UBound(arrReport1)
		Response.Write arrReport1(i)
%>		
<!-- #INCLUDE VIRTUAL="/asp/CustomData/ParentInfoLetter.html" -->
<%
		Response.Write arrReport2(i)
	Next
End Sub

Function GetReport(ind)
	Dim strReport
	
	arrReport1(ind) = GetPageTitle(obLanguage("ReportNames","kRNParentInfoLetter"))
	strReport = GetReportTitle()
	If Not bSubjects Then
		strReport = strReport & GetWarningExcel(obLanguage("Filter","kNoSubjectsForStudent",strFunctionalityType))
	Else
		strReport = strReport & GetReportTable()
	End If
	arrReport2(ind) = strReport & GetPageVerExcel() & IIf(bNoSeparate, "<br>", "")
End Function

Function GetTableHeader()
	GetTableHeader = "<table border=""1"">" & _
		GetTableHeaderString()
End Function

Function GetTableHeaderString()
	GetTableHeaderString = "<tr align=""center"" class=""xtcb"">"
End Function

Function GetSchoolInfoTable(strSchName, strCityName, strAddress, strTel, strFax, strLogoFile)
    Dim strSchoolInfo, strLogo
    
'    strLogo = "<img width=""40"" height=""40"" src=""" & strLogoFile & """>"
    strSchoolInfo = "<div class=""smalltext"" align=""center"">" & DB2HTML(strSchName) & "<br>" & _
        DB2HTML(strCityName) & IIf(IsDull(strAddress), "", ",&nbsp;" & DB2HTML(strAddress)) & ",<br>" & _
        obLanguage("Reports","kPhonesS") & "&nbsp;" & DB2HTML(strTel)
    If Not IsDull(strFax) Then
        strSchoolInfo = strSchoolInfo & ",&nbsp;" & obLanguage("Reports","kFaxS") & "&nbsp;" & DB2HTML(strFax)
    End If
    strSchoolInfo = strSchoolInfo & "</div>"

    GetSchoolInfoTable = strSchoolInfo
End Function

Function GetReportTail()
    Dim strReport
    
    strReport = "<br><br>"
    
    strReport = strReport & "<div class=""smalltext"" align=""left"">" & kCutHR & _
        "<br>" & kDebtDispl & kDebtDispl & kDebtDispl & obLanguage("Reports","kCutLine") & "</div>"

    strReport = strReport & "<br><br>"

    strReport = strReport & "<table border=""0"" width=""100%"">" & _
        "<tr><td align=""left"" class=""xtl10wr""><b>" & obLanguage("Reports","kBackRelation") & ": </b></td>" & _
            "<td align=""right"" class=""xtl10wr"">" & DB2HTML(strStudentName) & ", " & DB2HTML(strClassName) & "</td>" & _
        "</tr>" & _
        "</table><br>"

    strReport = strReport & "<div class=""smalltext"" align=""left"">" & kSolidHR & "</div><br>"
    strReport = strReport & "<div class=""smalltext"" align=""left"">" & kSolidHR & "</div><br>"
    strReport = strReport & "<div class=""smalltext"" align=""left"">" & kSolidHR & "</div><br>"

    strReport = strReport & "<table border=""0"" width=""100%"">" & _
        "<tr><td width=""50%"">&nbsp;</td>" & _
            "<td nowrap align=""right"" class=""xtl10wr""><b>" & obLanguage("Common","kDate") & "</b>&nbsp;" & kSignSolidLine & _ 
                "&nbsp;&nbsp;<b>" & obLanguage("Reports","kSignature") & "</b>&nbsp;" & kSignSolidLine & "</td>" & _
        "</tr>" & _
        "<tr><td colspan=""2"">&nbsp;</td></tr>" & _
        "<tr><td align=""left"" class=""xtl10wr""><b>" & obLanguage("Common","kClassChief",strFunctionalityType) & ": </b></td>" & _
            "<td align=""right"" class=""xtl10wr"">" & DB2HTML(strClassChiefFullName) & "</td>" & _
        "</tr>" & _
        "</table><br>"
    
    GetReportTail = strReport
End Function
%>
