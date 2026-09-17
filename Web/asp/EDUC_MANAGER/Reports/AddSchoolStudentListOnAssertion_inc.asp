<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Dim dsStudentCount
Dim nGlobalYearId

SetScriptTimeOut 900

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNAddSchoolStudentListOnAssertion")
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID) )
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	bOk = True
	strErrMsg = ""
End Sub

Sub specialMain()
	SetScriptTimeOut 90000
	Set dsStudentCount = objNSNET.GetEMAddSchoolStudentListAttendOnAssertion(filterEMID, nGlobalYearID)
	If dsStudentCount.EOF Then
		bOK = False
		strErrMsg = obLanguage("Common","kNoDataForFilter")
	End If
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-text"">" & _
		"<tr><th>" & "№" & "</th>" & _
		"<th>" & obLanguage("Filter","kFIO") & "</th><th>" & obLanguage("EMReports","kMOY") & _
		"</th><th>" & obLanguage("Common","kClass",2) & _
		"</th><th>" & obLanguage("EMReports","kUnionsCount_Wrap") & _
		"</th><th>" & obLanguage("EMReports","kListAddAschools_Wrap") & "</th></tr>"
End Function

Sub GetAddSchoolList(objRs, strAddSchoolList, nClassCnt)
	Dim strStudentID
	strStudentID = objRs("STUDENTID")
	nClassCnt = 0
	strAddSchoolList = ""
	Do While Not objRs.EOF
		If strStudentID <> objRs("STUDENTID") Then
			If Len(strAddSchoolList) = 0 Then
				strAddSchoolList = "&nbsp;"
			Else
				strAddSchoolList = Left(strAddSchoolList,Len(strAddSchoolList)-4)
			End If
			Exit Do
		End If
		nClassCnt = nClassCnt + CLng(objRs("classcnt"))
		strAddSchoolList = strAddSchoolList & objRs("eoname") & "<br>"
		objRs.MoveNext
	Loop
End Sub

Sub GetSchoolAndClassName ( objRs, strSchoolName, strClassName )
	Dim strRet
	If Not objRs.EOF Then
		strSchoolName = objRs("EONAME")
		strClassName = objRs("CLASSNAME")
	Else
		strSchoolName = "&nbsp;"
		strClassName = "&nbsp;"
	End If
End Sub

Function GetReportTable()
	Dim strSchoolName, strClassName
	Dim strAddSchoolList, nClassCnt
	Response.Write GetTableHeader()
	Dim i, j
	i=0: j = 0
	While Not dsStudentCount.EOF
		i = i + 1
		j = j + 1
		Response.Write GetFounderHeader(6,dsStudentCount )
		Response.Write "<tr><td class=""cell-num"">" & j & "</td><td>" & DB2HTML(dsStudentCount("FIO")) & "</td>"
		Call GetSchoolAndClassName(dsStudentCount.Fields()("rsStudSchoolsClasses").Value, strSchoolName, strClassName)
		Call GetAddSchoolList(dsStudentCount, strAddSchoolList, nClassCnt)
		Response.Write "<td>" & strSchoolName & "</td>" &_
			"<td>" & strClassName & "</td>" &_
			"<td class=""cell-num"">" & DB2HTML(nClassCnt) & "</td>" &_
			"<td>" & strAddSchoolList & "</td></tr>"
		if i=1000 then Response.Flush: i=0
	Wend
	Response.Write "</table>"
End Function
%>
