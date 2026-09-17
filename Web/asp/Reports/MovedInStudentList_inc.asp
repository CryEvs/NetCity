<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL = "/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL = "/asp/SetupSchool/MoveDoc_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

dim objRs

Dim strTitle
Dim strTermName
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate

Sub ReadState()
	ReadDateRange
	strTermName = obLanguage("Common","kFromDate") & dtStartDate & obLanguage("Common","kToDate") & dtEndDate
End Sub

Sub Main()
	Dim objYearInfo
	Set objYearInfo = objNSNET.GetYearInfo(strCurrYearID)
	strTitle = obLanguage("Reports","kMovedInStudentListsForTerm",strFunctionalityType) & ": " & strTermName & "<br>" & Year(objYearInfo("STARTDATE")) & "-" & Year(objYearInfo("ENDDATE")) & " " & obLanguage("Reports","kOfSchoolYear_s")
	Call GetTable()
End Sub

Function GetPageTitleFor( strPageName, arrPageParams )
	GetPageTitleFor = "<div class=""report-title-school"">" & DB2HTML(objNSNET.GetSchoolName(strSchoolID)) & "</div>" & "<div class=""report-title"">" & strTitle & "</div><br>"
End Function


Sub GetTable()
	' #16545, #16629
	'Set objRs = objNSNET.GetMovedStudentList(objNSNET.GetSchoolInfo(strSchoolID)("EOID"),-1, kDocType_ENROLL, Str2Date(dtStartDate), Str2Date(dtEndDate)) 'strCurrYearID=-1 игнорируем год
	Set objRs = objNSNET.GetMovedStudentList(-1, strCurrYearID, kDocType_ENROLL, Str2Date(dtStartDate), Str2Date(dtEndDate)) 'EOID=-1 теперь игнорируем EOID
End Sub

Function GetReportTable()
	Dim i, j
	'Dim strSchoolShortName
	'strSchoolShortName = objNSNET.GetSchoolName(strSchoolID)
	i = 1
	j = 0
	If Not objRs.EOF Then 
		Response.Write "<table class=""table-print-text""><tr><th>" & obLanguage("Reports","kOrderNumberS") & "</th><th class=""text-nowrap"">" & obLanguage("Reports","kNameEducInstitution") & "</th><th>" & obLanguage("Reports","kLastNameFirstName") & "</th><th>" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th>" & obLanguage("Reports","kEnrollFrom") &"</th><th>" & obLanguage("Common","kInstitutSpecifedInDocOfDisposal") & "</th><th>" & obLanguage("Reports","kDocEnrollDateAndNumberInSchool",strFunctionalityType) & "</th></tr>"
		While Not objRs.EOF
			Response.Write "<tr><td class=""cell-num"">" & i & "</td><td>" & DB2HTML(strSchoolShortName) & "</td><td>" & DB2HTML(objRs("LASTNAME")) & " " & DB2HTML(objRs("FIRSTNAME")) & "</td><td>" & DB2HTML(objRs("CLASSNAME")) & "</td><td>" & DB2HTML(objRs("EONAME")) & "</td><td>" & DB2HTML(objRs("DEPARTEONAME")) & "</td><td>" & DB2HTML(objRs("DOCNUMBER")) & " (" & Date2Str(objRs("DOCDATE")) & ")" & "</td></tr>"
			If j = 1000 Then Response.Flush: j = 0
			objRs.MoveNext
			i = i + 1
		Wend
		Response.Write "</table>"
		Call GetBottom()
	Else
		Response.Write GetWarningPrint(obLanguage("Reports","kMovementDocsEmpty",strFunctionalityType))
	End If
End Function

Sub GetBottom()
	Response.Write "<div class=""normaltext""><br><br>" & obLanguage("Common","kPrincipal",strFunctionalityType) &"<br><br>" & obLanguage("Common","kPerformer") & "_____________________________<br>_________________________________________<br>" & obLanguage("Common","kContactNumber") & "</div>"
End Sub
%>
