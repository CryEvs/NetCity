<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/NumberOfStudentsAdditionalEducation_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Sub ReadState()
	specialRead
End Sub

Sub Main()
	specialMain
End Sub

Sub onDrawPage()
	Response.Write strReport
End Sub

Function GetReport()
	Dim strReport
	strReport = GetPageTitleExcel(obLanguage("ReportNames","kRNNumberOfStudentsAdditionalEducation"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName")))
	If Not bOK Then
		strReport = strReport & GetwarningPrint(strErrMsg)
	Else
		strReport = strReport & GetReportTable()
	End If
	GetReport = strReport & GetPageVerExcel
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""ThinTable""  border=""1"" cellspacing=""0"">" & _
		"<tr class=""body"" style=""background-color: #eaeaea"" align=""center""><td>" & obLanguage("Reports","kNumberRow") & "</td>" & _
		"<td>" & obLanguage("Reports","kDistrictCity") & "</td><td>" & obLanguage("Reports","kNameEducInst") & "</td><td>" & obLanguage("Reports","kCountTrained") & "</td><td>" & obLanguage("Reports","kNumberOfStudentsEnrolledOnTheStatement") & "</td><td>" & obLanguage("Reports","kNumberOfStudentsEnrolledOnTheCertificate") & "</td><td>" & obLanguage("Reports","kShareCertificates") & "</td></tr>"
End Function
%>
