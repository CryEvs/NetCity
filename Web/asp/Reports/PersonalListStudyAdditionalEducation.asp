<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="PersonalListStudyAdditionalEducation_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function onLoad()
End Function

Sub onHead()
	
End Sub

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

	strReport = GetPageTitlePrint(obLanguage("ReportNames","kRNPersonalListStudyAdditionalEducation"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName")))
	If Not bOK Then
		strReport = strReport & GetwarningPrint(strErrMsg)
	Else
		strReport = strReport & GetReportTable()
	End If
	GetReport = strReport & GetPageVerPrint()
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-text"">" & _
		"<tr><th>" & obLanguage("Reports","kNumberRow") & "</th>" & _
		"<th>" & obLanguage("Reports","kNumberAssociation") & "</th><th>" & obLanguage("Reports","kNameEducInst") & "</th><th>" & obLanguage("Reports","kClass") & "</th><th>" & _
		obLanguage("Reports","kFIOstud") & "</th><th>" & obLanguage("Reports","kBirthDateS") & "</th><th>" & obLanguage("Common","kGender") & "</th><th>" & _
		obLanguage("Reports","kProgramDirection") & "</th><th>" & obLanguage("Common","kYear") & "</th><th>" & obLanguage("Reports","kAssociation") & "</th><th>" & obLanguage("Reports","kWeekHours") & "</th></tr>"
End Function
%>
