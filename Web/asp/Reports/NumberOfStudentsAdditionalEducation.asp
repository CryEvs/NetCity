<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="NumberOfStudentsAdditionalEducation_inc.asp" -->

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
	strReport = GetPageTitlePrint(obLanguage("ReportNames","kRNNumberOfStudentsAdditionalEducation"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName")))
	If Not bOK Then
		strReport = strReport & GetwarningPrint(strErrMsg)
	Else
		strReport = strReport & GetReportTable()
	End If
	GetReport = strReport & GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		"<tr><th>" & obLanguage("Reports","kNumberRow") & "</th>" & _
		"<th>" & obLanguage("Reports","kDistrictCity") & "</th><th>" & obLanguage("Reports","kNameEducInst") & "</th><th>" & obLanguage("Reports","kCountTrained") & "</th><th>" & obLanguage("Reports","kNumberOfStudentsEnrolledOnTheStatement") & "</th><th>" & obLanguage("Reports","kNumberOfStudentsEnrolledOnTheCertificate") & "</th><th>" & obLanguage("Reports","kShareCertificates") & "</th></tr>"
End Function
%>
