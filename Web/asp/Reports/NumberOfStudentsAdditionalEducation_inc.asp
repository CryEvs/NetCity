<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim i, shareCertificates
Dim bOK, strReport, strErrMsg
Dim dsNumberOfStudentsUDOD, totalCount, totalStatement, totalCountCertificate

Sub specialRead()
    strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
    bOk = True
	strErrMsg = ""
End Sub

Sub specialMain()
    Set dsNumberOfStudentsUDOD = objNSNET.GetNumberOfStudentsInUDODGroupBySchool(strSchoolID, strCurrYearID)
	If dsNumberOfStudentsUDOD.EOF Then 
	    bOK = False 
	    strErrMsg = "Нет обучающихся в данном МОДО"
	End If    
	strReport = GetReport()
End Sub

Function GetReportTable()
	strReport = GetTableHeader()
	For i = 1 To dsNumberOfStudentsUDOD.RecordCount
	    shareCertificates = Round(CDbl(dsNumberOfStudentsUDOD("COUNTCERTIFICATE")) / CDbl(dsNumberOfStudentsUDOD("TOTAL")) * RESULT_RATIO)
		strReport= strReport & "<tr><td class=""cell-num"">" & i & "</td>" &_ 
		"<td class=""cell-text"">" & DB2HTML(dsNumberOfStudentsUDOD("DISTRICT")) & "</td><td class=""text-center"">" & dsNumberOfStudentsUDOD("SCHOOLNAME") & "</td><td class=""cell-num"">" & CLng(dsNumberOfStudentsUDOD("TOTAL")) &_
		"</td><td class=""cell-num"">" & CLng(dsNumberOfStudentsUDOD("COUNTSTATEMENT")) & "</td><td class=""cell-num"">" & CLng(dsNumberOfStudentsUDOD("COUNTCERTIFICATE")) & "</td><td class=""cell-num"">" & shareCertificates & "</td></tr>"
		totalCount = totalCount + CLng(dsNumberOfStudentsUDOD("TOTAL"))
		totalStatement = totalStatement + CLng(dsNumberOfStudentsUDOD("COUNTSTATEMENT"))
		totalCountCertificate = totalCountCertificate + CLng(dsNumberOfStudentsUDOD("COUNTCERTIFICATE"))
		If Not dsNumberOfStudentsUDOD.EOF Then dsNumberOfStudentsUDOD.MoveNext
	Next
	shareCertificates = Round(totalCountCertificate / totalCount * RESULT_RATIO)
	strReport = strReport & "<tr class=""totals""><td>" & obLanguage("Reports","kTotalNumber") & "</td><td>&nbsp</td><td>&nbsp</td><td>" & totalCount & "</td><td>" & totalStatement & "</td><td>" & totalCountCertificate & "</td><td>" & shareCertificates & "</td></tr>"
	strReport = strReport & "</table>"
	strReport = strReport & "<br><div class=""body""><b>" & "Подпись руководителя ОО" & "</b></div>"
	GetReportTable = strReport
End Function
%>

