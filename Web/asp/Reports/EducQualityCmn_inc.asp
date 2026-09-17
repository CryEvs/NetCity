<% ' © 2007-2014 IRTech. All rights reserved.

Dim bSecondaryEduc
Dim bNoPrevYear
Dim objEducQuality

Sub ReadStateCmn()
	bSecondaryEduc = GetSafeBool(GetSafe("SecondaryEduc", false), false)
End Sub

Function GetReportTable()
	Dim strReportHeader
	Dim strRow, strPeoplesAndPercent
	Dim strStudentsCountHeader
	strPeoplesAndPercent = "<th>" & obLanguage("SetupSchoolCalendar","kPeoples_") & "</th><th>%</th>"
	strStudentsCountHeader = Replace(obLanguage("Reports","kStudentsCountFinished"), "%", IIF(bSecondaryEduc, 11, 9))
	strReportHeader = "<table class=""table-print-num"">" & _
		"<tr>" & _
		"<th rowspan=""3"">" & obLanguage("Common","kEO") & _
		"</th><th rowspan=""3"">" & strStudentsCountHeader & _
		"</th><th rowspan=""3"">" & obLanguage("Reports","kLearningLevel") & _
		"</th><th rowspan=""3"">" & obLanguage("Reports","kLearningQuality") & _
		"</th><th colspan=""6"">" & obLanguage("Reports","kContinueEducation") & _
		"</th><th colspan=""2"">" & obLanguage("Reports","kSatisfactionEducation") & "</th></tr>"
	strReportHeader = strReportHeader & "<tr class=""body"" align=""center"">" & _
		"<th colspan=""2"" nowrap>" & IIF(bSecondaryEduc, obLanguage("Reports","kInUniversities"), obLanguage("Reports","kIn_10_Class")) & _
		"</th><th colspan=""2"">" & obLanguage("Reports","kNPO") & _
		"</th><th colspan=""2"">" & obLanguage("Reports","kSPO") & _
		"</th><th rowspan=""2"">" & obLanguage("Common","kParents") & _
		"</th><th rowspan=""2"">" & obLanguage("Reports","kLearners") & "</th></tr>"
	strReportHeader = strReportHeader & "<tr class=""body"" align=""center"">" & _
		strPeoplesAndPercent & _
		strPeoplesAndPercent & _
		strPeoplesAndPercent & _
		"</tr>"

	strRow = "<tr><td class=""cell-text"">" & DB2HTML(strSchoolShortName) & _
		"</td><td>" & CLng(objEducQuality.StudentsCountFinished) & _
		"</td><td>" & CLng(objEducQuality.LearningLevel) & _
		"</td><td>" & CLng(objEducQuality.LearningQuality)
	If bSecondaryEduc Then
		strRow = strRow & _
			"</td><td>" & CLng(objEducQuality.ContinueEducUnivers) & _
			"</td><td>" & CLng(objEducQuality.ContinueEducUniversPerc)
	Else
		strRow = strRow & _
			"</td><td>" & CLng(objEducQuality.ContinueEduc10) & _
			"</td><td>" & CLng(objEducQuality.ContinueEduc10Perc)
	End If
	strRow = strRow & _
		"</td><td>" & CLng(objEducQuality.ContinueEducNpo) & _
		"</td><td>" & CLng(objEducQuality.ContinueEducNpoPerc) & _
		"</td><td>" & CLng(objEducQuality.ContinueEducSpo) & _
		"</td><td>" & CLng(objEducQuality.ContinueEducSpoPerc) & "</td>"
	strRow = strRow & "<td>&nbsp;</td><td>&nbsp;</td></tr>"
	GetReportTable = "<div class=""select"">" & DB2HTML(obLanguage("Reports","kReportForPrevYear")) & "</div>"
	GetReportTable = GetReportTable & strReportHeader & strRow & "</table>"
End Function
%>
