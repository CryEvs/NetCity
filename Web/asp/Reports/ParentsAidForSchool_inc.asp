<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim arrAids, nAids, bNoParentsForAid, strAids'FedorovSY, objDSCon
Dim objAidsRs, objQueryAidsRs, objAidsResultsRs, objParentsInClassCntRs, objAidsInClassCntRs

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNParentsAidToSchool",strFunctionalityType)
End Function
Function GetPageParams()
	Dim strTmp
	Dim i
	i = 0

	strTmp = ""
	While i <= nAids
		If GetSafeID(objAidsRs("ITEMID"), Null) = arrAids(i) Then
			If strTmp<>"" Then strTmp = strTmp & ", " & vbNewLine
			strTmp = strTmp & objAidsRs("ITEMNAME")
			i = i + 1
		End If
		objAidsRs.MoveNext
	Wend
	GetPageParams = Array( _
		obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Reports","kAidType"), strTmp )
End Function

Sub specialRead()
	strAids = GetSafeStr(Request("ParentsAids"), -1, Null)
	arrAids = Split(strAids, ", ")
End Sub

Sub specialMain()
	Dim i
	nAids = UBound(arrAids)
	ReDim Preserve arrAids(nAids)

	Set objAidsRs = objNSNET.GetAidsList(strSchoolID)	
	Set objQueryAidsRs = objNSNET.GetParentsAidsForSchool(strSchoolID, strCurrYearID, arrAids )
	bNoParentsForAid = False
	If objQueryAidsRs.EOF Then
		strErrMsg = obLanguage("Reports","kNoParentsForAid")
		bNoParentsForAid = True
	End If
	obTokenMgr.SetData strToken, stAidsFilters, strAids
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print""><tr><th>" & obLanguage("Filter","kClassGB",strFunctionalityType) & "</th>" & _
		"<th>" & obLanguage("Reports","kParentName") & "</th>" & _
		"<th>" & obLanguage("Reports","kAidType") & "</th>" & _
		"<th>" & obLanguage("Reports","kAidDate") & "</th>" & _
		"<th>" & obLanguage("Reports","kAidResult") & "</th></tr>"
End Function

Function GetReportTable()
	Dim strReportID, rsClasses, rsAids, rsParentAids, nCnt
	Dim arrClassAids, arrClassParentAids, nClassAidsCnt, n, i, j, nParentAidsCnt, k, m

	strReport = GetTableHeader()
	
	ReDim arrClassAids(objQueryAidsRs.RecordCount - 1)
	ReDim arrClassParentAids(objQueryAidsRs.RecordCount - 1, 99)
	'если учесть, что макс. кол-во учеников в классе 50, то 100 - макс. кол-во родителей в классе
	
	i = 0
	While Not objQueryAidsRs.EOF
		Set rsClasses = objQueryAidsRs.Fields()("rsClasses").Value
		nClassAidsCnt = 0
		j = 0
		While Not rsClasses.EOF
			Set rsAids = rsClasses.Fields()("rsAids").Value
			nParentAidsCnt = 0
			While Not rsAids.EOF
				Set rsParentAids = rsAids.Fields()("rsParentAids").Value
				n = rsParentAids.RecordCount
				If n = 0 Then n = 1
				nClassAidsCnt = nClassAidsCnt + n
				nParentAidsCnt = nParentAidsCnt + n
				rsAids.MoveNext
			Wend
			arrClassParentAids(i,j) = nParentAidsCnt
			j = j + 1
			rsClasses.MoveNext
		Wend
		arrClassAids(i) = nClassAidsCnt
		i = i + 1 		
		objQueryAidsRs.MoveNext
	Wend
	objQueryAidsRs.MoveFirst
	i = 0
	While Not objQueryaidsRs.EOF
		Set rsClasses = objQueryAidsRs.Fields()("rsClasses").Value
		strReport = strReport & "<tr>" & _
			"<td class=""cell-num"" rowspan=""" & CStr(arrClassAids(i)) & """>&nbsp;" & DB_2_HTML(objQueryAidsRs("CLASSNAME")) & "</td>"
		j = 0
		While Not rsClasses.EOF
			Set rsAids = rsClasses.Fields()("rsAids").Value
			strReport = strReport & "<td class=""cell-text"" rowspan=""" & CStr(arrClassParentAids(i,j)) & """>" & DB_2_HTML(rsClasses("NICKNAME")) & "</td>"
			k = 0
			While Not rsAids.EOF
				Set rsParentAids = rsAids.Fields()("rsParentAids").Value
				nCnt = rsParentAids.RecordCount
				If k > 0 Then strReport = strReport & "<tr>"
				If nCnt = 0 Then nCnt = 1
				strReport = strReport & "<td class=""cell-text"" rowspan=""" & nCnt & """>" & DB_2_HTML(rsAids("AID_NAME")) & "</td>"
				If rsParentAids.EOF Then
					strReport = strReport & "<td class=""cell-date"">&nbsp;</td><td class=""cell-text"">&nbsp;</td></tr>"
				End If
				m = 0
				While Not rsParentAids.EOF
					If m > 0 Then strReport = strReport & "<tr>"
					strReport = strReport & "<td class=""сell-date"">" & DB_2_HTML(Date2Str(rsParentAids("AIDDATE"))) & "</td>" & _
						"<td class=""сell-text"">" & DB_2_HTML(rsParentAids("AID_RESULT")) & "</td></tr>"
					m = j + 1
					rsParentAids.MoveNext
				Wend
				If m > 1 Then strReport = strReport & "</tr>"
				k = k + 1
				rsAids.MoveNext
			Wend
			j = j + 1
			rsClasses.MoveNext
		Wend
		i = i + 1
		objQueryAidsRs.MoveNext
		If Not objQueryaidsRs.EOF Then
			strReport = strReport & "<tr class=""separator""><th colspan=""5""></th></tr>"
		End If
	Wend
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function
%>
