<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim bEmpty
Dim objStudyLoad
Dim objSchools
Dim arrSchools

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNAddSchoolStudentsIntersect")
End Function
Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID) )
End Function

Function GetDarkColor()
	GetDarkColor = "style=""background-color: #DCDCDC"""
End Function

Sub specialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
End Sub

Sub specialMain()
	Set objSchools = objNSNET.GetAddSchoolIntersectByStudents(filterEMID, nGlobalYearID)
	bEmpty = objSchools.EOF

	If bEmpty Then
		strErrMsg = obLanguage("EMReports","kNoAddSchoolStudentsIntersect")
	Else
		arrSchools = objSchools.GetRows(,,Array("EONAME", "SCHOOLID"))
		objSchools.MoveFirst
	End If
End Sub

Function GetReportTable()
	Dim strReport
	Dim i
	Dim strPrevSchID, strCurrSchID, strCurrEOName, strCurrEOName2
	Dim nHoursCnt, nStudCnt

	Dim objIntersect, strMainSchID, strInterSchID

	strReport = GetHeader_Table()
	strReport = strReport & "<tr><td " & GetDarkColor() & ">&nbsp;</td>"

	For i = 0 To UBound(arrSchools, 2)
		strCurrEOName = GetSafeStr(arrSchools(0, i), -1, "")
		strReport = strReport & "<td class=""cell-text"">" & DB2HTML(strCurrEOName) & "</td>"
	Next
	strReport = strReport & "</tr>"

	Set objIntersect = objSchools("rsIntersect").Value
	While Not objSchools.EOF
		strCurrEOName = GetSafeStr(objSchools("EONAME"), -1, "")
		strMainSchID = GetSafeID(objSchools("SCHOOLID"), Null)
		strReport = strReport & GetFounderHeader(19, objIntersect)
		strReport = strReport & "<tr><td class=""cell-text"">" & DB2HTML(strCurrEOName) & "</td>"

		strInterSchID = GetSafeID(objIntersect("SCHOOLID2"), Null)
		nStudCnt = GetSafeLng(objIntersect("STUD_CNT"), 0)

		For i = 0 To UBound(arrSchools, 2)
			strCurrSchID = GetSafeID(arrSchools(1, i), Null)

			If strCurrSchID = strMainSchID Then
				strReport = strReport & "<td " & GetDarkColor() & ">&nbsp;</td>"
			ElseIf strCurrSchID = strInterSchID Then

				strReport = strReport & "<td class=""cell-num"">" & nStudCnt & "</td>"
				
				If Not objIntersect.EOF Then
					objIntersect.MoveNext    
				End If
				
				If Not objIntersect.EOF Then
					strInterSchID = GetSafeID(objIntersect("SCHOOLID2"), Null)
					nStudCnt = GetSafeLng(objIntersect("STUD_CNT"), 0)
				Else
					strInterSchID = ""
					nStudCnt = 0
				End If
			Else
				strReport = strReport & "<td>&nbsp;</td>"
			End If
		Next
		strReport = strReport & "</tr>"

		objSchools.MoveNext
	WEnd

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function
%>
