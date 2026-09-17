<!-- #INCLUDE FILE="ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved

Dim lngCurrMonth, lngCurrYear, rsStudents
Dim bAll, nYID

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports","kInfoParentPay")
End Function
Function GetPageParams()
	Dim filters
	filters = Array(_
		Empty , "", _
		obLanguage("Reports","kMDOU2"),IIF(bAll,obLanguage("Common","kAll"),IIF(bIsEducManager,Request("sSCHOOLNAME"),strSchoolName)), _
		obLanguage("Common","kYear"),lngCurrYear, _
		obLanguage("Common","kMonth"),obLanguage.GetMonthName(lngCurrMonth) _
		)
	If strFunctionalityType = kFuncType_EM Then
		filters(0) = obLanguage("Common","kEMName")
		filters(1) = objNSNET.GetEducManagementName(filterEMID)
	End If
	GetPageParams = filters
End Function

Sub specialRead()
	Dim dtCurrDate
	Call InitEmFilters()
	SetScriptTimeOut 900
	bAll = (Request("EMSCHOOLYEARID")="-1")
	nYID = IIF(bAll,Request("CMNYEAR"),GetSafeId(Request("EMSCHOOLYEARID"), strCurrYearID))
	lngCurrMonth = Request("Month")
	lngCurrYear = Request("Year")
End Sub

Sub specialMain()
	Set rsStudents = objNSNET.GetStudentsList_ParentPayForMonth(filterEMID, nYID, lngCurrMonth, bAll)
End Sub

Function GetReportTable( )
	GetReportTable = GetParentPayInfoTable( )
End Function
Function GetParentPayInfoTable( )
	Dim strReport
	Dim i, strEmptyText

	GetParentPayInfoTable = ""
	If rsStudents.EOF Then
		strEmptyText = "<div align=""center""><b>" & obLanguage("Reports","kNoInfoForPeriod") & "</b></div>"
		If bSendReport Then
			GetParentPayInfoTable = strEmptyText
		Else
			Response.Write strEmptyText
		End If
		Exit Function
	End If

	strReport = "<table class=""table-print"">"
	strReport = strReport & "<tr><th rowspan=""2"">"& obLanguage("Reports","kCodeOU") &"</th><th colspan=""4"">"& obLanguage("Reports","kInfoChild") &"</th><th colspan=""6"">"& obLanguage("Reports","kInfoParentPay") &"</th><th colspan=""3"">"& obLanguage("Reports","kInfoParent") & "</th><th rowspan=""2"" width=""25%"">" & obLanguage("Reports","kNote2") & "</th></tr>"
	strReport = strReport & "<tr><th>"& obLanguage("Common","kLastName") &"</th><th>"& obLanguage("Common","kFirstName") &"</th><th>"& obLanguage("Common","kMiddleName") &"</th><th>"& obLanguage("Reports","kBirthdate") &"</th><th>"& obLanguage("Reports","kYearPay") &"</th><th>"& obLanguage("Reports","kMonthPay") & _
		"</th><th>"& obLanguage("Reports","kFactVisitDays") &"</th><th>"& obLanguage("Reports","kNorm_2") &"</th><th>"& obLanguage("Reports","kContent") &"</th><th>"& obLanguage("Reports","kCompens") &"</th><th>"& obLanguage("Common","kLastName") &"</th><th>"& obLanguage("Common","kFirstName") &"</th><th>"& obLanguage("Common","kMiddleName") &"</th></tr>"

	If bSendReport Then
		While Not rsStudents.EOF
			strReport = strReport & GetFounderHeader(15,rsStudents)
			strReport = strReport & "<tr>"
			strReport = strReport & "<td class=""cell-text"">" & DB2HTML(rsStudents("SCHOOLCODE")) & "</td><td class=""cell-text"">" &DB2HTML(rsStudents("LASTNAME"))& "</td><td class=""cell-text"">" &DB2HTML(rsStudents("FIRSTNAME"))& "</td><td class=""cell-text"">" &DB2HTML(rsStudents("MIDDLENAME"))&"</td><td class=""cell-date"">" &Date2Str(rsStudents("BIRTHDATE"))&"</td><td class=""cell-num"">" &rsStudents("YEARNAME")&"</td><td class=""cell-num"">" &rsStudents("MONTHNAME") & _
				"</td><td class=""cell-num"">" & GetSafeLng(rsStudents("ATTENDCOUNT"), 0) & "</td><td class=""cell-text"">" & DB2HTML(rsStudents("LASTNORM")) & "</td><td class=""cell-num-2"">" & rsStudents("CONTENT") & "</td><td class=""cell-num-2"">" & rsStudents("COMPENS") & "</td><td class=""cell-text"">" & DB2HTML(rsStudents("PARENT_L_NAME"))&"</td><td class=""cell-text"">" &DB2HTML(rsStudents("PARENT_F_NAME"))&"</td><td class=""cell-text"">" & DB2HTML(rsStudents("PARENT_M_NAME")) & "</td><td>&nbsp;</td>"
			strReport = strReport & "</tr>"
			rsStudents.MoveNext
		Wend
		GetParentPayInfoTable = strReport & "</table><br>"
	Else
		Response.Write strReport
		i=0
	
		While Not rsStudents.EOF
			i = i + 1
			Response.Write GetFounderHeader(15,rsStudents)
			Response.Write "<tr>"
			Response.Write "<td class=""cell-text"">" & DB2HTML(rsStudents("SCHOOLCODE")) & "</td><td class=""cell-text"">" &DB2HTML(rsStudents("LASTNAME"))& "</td><td class=""cell-text"">" &DB2HTML(rsStudents("FIRSTNAME"))& "</td><td class=""cell-text"">" &DB2HTML(rsStudents("MIDDLENAME"))&"</td><td class=""cell-date"">" &Date2Str(rsStudents("BIRTHDATE"))&"</td><td class=""cell-num"">" &rsStudents("YEARNAME")&"</td><td class=""cell-num"">" &rsStudents("MONTHNAME") & _
				"</td><td class=""cell-num"">" & GetSafeLng(rsStudents("ATTENDCOUNT"), 0) & "</td><td class=""cell-text"">" & DB2HTML(rsStudents("LASTNORM")) & "</td><td class=""cell-num-2"">" & rsStudents("CONTENT") & "</td><td class=""cell-num-2"">" & rsStudents("COMPENS") & "</td><td class=""cell-text"">" & DB2HTML(rsStudents("PARENT_L_NAME"))&"</td><td class=""cell-text"">" &DB2HTML(rsStudents("PARENT_F_NAME"))&"</td><td class=""cell-text"">" &DB2HTML(rsStudents("PARENT_M_NAME")) & "</td><td>&nbsp;</td>"
			Response.Write "</tr>"
			rsStudents.MoveNext
		Wend
		Response.Write "</table><br>"
		If i=1000 Then Response.Flush: i=0
	End If
End Function
%>
