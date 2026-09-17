<!-- #INCLUDE FILE=DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL = "/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL = "/asp/SetupSchool/MoveDoc_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
dim objRs

Sub GetTable()
'	SetScriptTimeOut 9000
	' #16545, #16629
	'Set objRs = objNSNET.GetMovedStudentList(objNSNET.GetSchoolInfo(strSchoolID)("EOID"),-1, kDocType_OUT, Str2Date(dtStartDate), Str2Date(dtEndDate)) 'strCurrYearID=-1 игнорируем год
	Set objRs = objNSNET.GetMovedStudentList(-1, strCurrYearID, kDocType_OUT, Str2Date(dtStartDate), Str2Date(dtEndDate)) 'EOID=-1 теперь игнорируем EOID
End Sub

Dim strTitle
Dim strTermName
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate

Sub onDrawPage()
	Response.Write strReport
End Sub

Sub ReadState()
	ReadDateRange
	strTermName = obLanguage("Common","kFromDate") & dtStartDate & obLanguage("Common","kToDate") & dtEndDate
End Sub

Function DrawTable()
	Dim objRealInfo
	Dim i
	Dim bAddSchool
	'Dim strSchoolShortName

	'strSchoolShortName = objNSNET.GetSchoolName(strSchoolID)
	i=1
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	If Not objRs.EOF Then
		DrawTable = "<table class=""table-print-text""><tr><th>" & obLanguage("Reports","kOrderNumberS") & "</th><th class=""text-nowrap"">" & obLanguage("Reports","kNameEducInstitution") & "</th><th>" & obLanguage("Reports","kLastNameFirstName") & " " & obLanguage("Reports","kOfStudent",strFunctionalityType) & "</th><th>" & obLanguage("Reports","kFromClass",strFunctionalityType) & "</th><th>" & obLanguage("Reports","kOutWhere") & "</th><th>" & obLanguage("Movement","kDepartReason") & "</th><th>" & obLanguage("Reports","kDocOutDateAndNumber",strFunctionalityType) & "</th><th>" & obLanguage("PoolStudents","kInstitutEnrollment") & "</th><th>" & obLanguage("Reports","kDocEnrollDateAndNumber") & "</th></tr>"
		While Not objRs.EOF
			DrawTable = DrawTable & "<tr><td class=""cell-num"">" & i & "</td><td>" & DB2HTML(strSchoolShortName) & "</td><td>" & DB2HTML(objRs("LASTNAME")) & " " & DB2HTML(objRs("FIRSTNAME")) & "</td><td>" & DB2HTML(objRs("CLASSNAME")) & "</td><td>"
			If Not bAddSchool Then
				Set objRealInfo = objNSNET.GetMovedOutStudentInfo(objRs("STUDENTID"),objRs("NUMORDER"))
				If Not objRealInfo.EOF Then
					DrawTable = DrawTable & DB2HTML(objRs("EONAME")) & "</td><td>"& DB2HTML(objRs("ITEMNAME")) &"</td><td>" & DB2HTML(CSTR(objRs("DOCNUMBER"))) & " (" & DB2HTML(objRs("DOCDATE")) & ")"& "</td><td>" & DB2HTML(objRealInfo("EONAME")) & "</td><td>" & objRealInfo("DOCNUMBER") & " (" & DB2HTML(objRealInfo("DOCDATE")) & ")"
				Else
					DrawTable = DrawTable & DB2HTML(objRs("EONAME")) & "</td><td>"& DB2HTML(objRs("ITEMNAME")) &"</td><td>" & DB2HTML(objRs("DOCNUMBER")) & " (" & DB2HTML(objRs("DOCDATE")) & ")"& "</td><td colspan=""2"" class=""text-center"">" & obLanguage("Reports","kUntilNotEnrolled")
				End IF
			Else
				DrawTable = DrawTable & DB2HTML(objRs("EONAME")) & "</td><td></td><td>" & DB2HTML(objRs("DOCNUMBER")) & " (" & DB2HTML(objRs("DOCDATE")) & ")"& "</td><td></td><td>" & ""
			End If
			DrawTable = DrawTable & "</td></tr>"
			objRs.MoveNext
			i = i + 1
		Wend
		DrawTable = DrawTable & "<tr><td class=""totals"">" & obLanguage("Reports","kTotalForSchool",strFunctionalityType) & " " & i-1 & "</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>" & GetBottom()
	Else
		DrawTable = DrawTable & GetWarningPrint(obLanguage("Reports","kMovementDocsEmpty",strFunctionalityType))
	End IF
End Function

Function GetForm()
	GetForm = "<div class=""report-title-school"">" & DB2HTML(objNSNET.GetSchoolName(strSchoolID)) & "</div>" & "<div class=""report-title"">" & strTitle & "</div><br>" & DrawTable()
End Function

Function GetBottom()
	GetBottom = "<div class=""normaltext""><br><br>" & obLanguage("Common","kPrincipal",strFunctionalityType) &"<br><br>" & obLanguage("Common","kPerformer") & "_____________________________<br>_________________________________________<br>" & obLanguage("Common","kContactNumber") & "</div>"
End Function
%>
