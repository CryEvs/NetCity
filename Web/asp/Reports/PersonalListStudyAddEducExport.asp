<!-- #INCLUDE FILE="../headerexcel.asp" -->
<!-- #INCLUDE FILE="PersonalListStudyAddEduc_inc.asp" -->

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
	strReport = GetPageTitleExcel(obLanguage("ReportNames","kRNPersonalListStudyAdditionalEducation"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName")))
	If Not bOK Then
		strReport = strReport & GetwarningPrint(strErrMsg)
	Else
		strReport = strReport & GetReportTable()
	End If
	strReport = strReport & GetPageVerExcel
	GetReport=strReport
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""ThinTable""  border=""1"" cellspacing=""0"">" & _
		"<tr class=""body"" style=""background-color: #eaeaea"" align=""center""><td>" & obLanguage("Reports","kNumberRow") & "</td>" & _
		"<td>" & obLanguage("Reports","kNumberAssociation") & "</td><td>" & obLanguage("Reports","kNameEducInst") & "</td><td>" & obLanguage("Reports","kClass") & "</td><td>" & obLanguage("Reports","kFIOstud") & "</td><td>" & obLanguage("Reports","kBirthDateS") & "</td><td>" & obLanguage("Reports","kProgramDirection") & "</td><td>" & obLanguage("Common","kYear") & "</td><td>" & obLanguage("Reports","kAssociation") & "</td><td>" & obLanguage("Reports","kNunberCertificate") & "</td><td>" & obLanguage("Reports","kWeekHours") & "</td></tr>"
End Function
%>
