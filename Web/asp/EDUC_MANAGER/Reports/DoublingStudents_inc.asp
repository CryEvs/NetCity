<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Const kStudentID = "ID"
Const kStudentIDPrefix = "s"

Dim nGlobalYearId
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim bDoubling, objStudents
Dim cmdClasses

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNDoublingStudents")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("EMReports","kStartPeriod"), strStartDate, _
		obLanguage("EMReports","kEndPeriod"), strEndDate _
		)
End Function

Sub specialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))

	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	'WriteState - not called from Export to Excel
	Call obTokenMgr.SetData(strToken, stRepDoubling_Start, dtStartDate)
	Call obTokenMgr.SetData(strToken, stRepDoubling_End, dtEndDate)
End Sub

Sub SpecialMain()
	Set objStudents = objNSNET.GetDoublingStudents(filterEMID, dtStartDate, dtEndDate, nGlobalYearID)
	bDoubling = Not objStudents.EOF
	If bDoubling Then
		Set cmdClasses = objNSNET.GetStudentYearClasses_Prepare()
	Else
		bOk = False
		strErrMsg = obLanguage("EMReports","kNoDoublingStudents")
	End If

End Sub

Function GetReportTable()
	Dim nInd
	Dim objStudentClasses, strClasses
	Dim strStudentID, strSchoolID, strPrevStudentID, strPrevSchoolID
	Dim strSYID
	Dim strStudentID2
	Dim strBuilder, strBuilder2
	Dim currArray, strRowTemplate, strRowTemplate2
	Dim nCount

	Set strBuilder = new StringBuilder
	Set strBuilder2 = new StringBuilder
	
	Call strBuilder.Append(GetTableHeader())
	Call strBuilder.AppendFormat("<th class=""text-nowrap"">{0}</th><th>{1}</th><th>{2}</th><th>{3}</th><th>{4}</th><th>{5}</th><th>{6}</th><th>{7}</th><th>{8}</th><th>{9}</th><th>{10}</th><th>{11} {14}</th><th>{12} {14}</th><th>{13} {14}</th></tr>", _
		Array(obLanguage("EMReports","kOrderNum"),_
			obLanguage("Common","kTerritorialManagement"), _
			obLanguage("EMReports","kStudentFIO"), _
			kStudentID, _
			obLanguage("Common","kGender"), _
			obLanguage("Common","kBDate"), _
			obLanguage("EMReports","kOU"), _
			obLanguage("Common","kProvince"), _
			obLanguage("Common","kCity"), _
			obLanguage("Common","kClass",strFunctionalityType), _
			obLanguage("EMReports","kIntersectPeriods"), _
			obLanguage("EMReports","kOU"), _
			obLanguage("Common","kProvince"), _
			obLanguage("Common","kCity"), _
			obLanguage("EMReports","kOfDoubling")))
	
	strRowTemplate = "<tr><td class=""cell-num"" rowspan=""{18}"">{0}</td><td rowspan=""{18}"">{1}</td><td rowspan=""{18}"">{2} {3} {4}" & _
		"</td><td rowspan=""{18}"">{5}</td><td rowspan=""{18}"">{6}</td>" & _
		"<td class=""cell-date"" rowspan=""{18}"">{7}</td><td rowspan=""{18}"">{8}</td><td rowspan=""{18}"">{9}</td><td rowspan=""{18}"">{10}" & _
		"</td><td rowspan=""{18}"">{11}</td><td>{12}-{13} ({14})</td><td>{15}</td><td>{16}</td><td>{17}</td></tr>"

	strRowTemplate2 = "<tr><td>{0}-{1} ({2})</td><td>{3}</td><td>{4}</td><td>{5}</td></tr>"

	strPrevStudentID = ""
	strPrevSchoolID = ""
	nInd = 1
	nCount = 1
	While Not objStudents.EOF
		strStudentID = GetSafeID(objStudents("STUDENTID"), Null)
		strStudentID2 = GetSafeID(objStudents("STUDENTID2"), Null)
		strSchoolID = GetSafeID(objStudents("SCHOOLID"), Null)
		
		If (strStudentID <> strPrevStudentID) Or (strSchoolID <> strPrevSchoolID) Then
			strSYID = GetSafeID(objStudents("SCHOOLYEARID"), Null)
			Set objStudentClasses = objNSNET.GetStudentYearClasses_Execute(cmdClasses, strSYID, strStudentID)
			strClasses = ""
			While Not objStudentClasses.EOF
				strClasses = strClasses & objStudentClasses("CLASSNAME") & ", "
				objStudentClasses.MoveNext
			Wend
			If strClasses <> "" Then
				strClasses = Left(strClasses, Len(strClasses) - 2)
			End If

			If nInd <> 1 Then
				currArray(18) = nCount
				Call strBuilder.AppendFormat(strRowTemplate, currArray)
				Call strBuilder.Append(strBuilder2.ToString)
			End If
			currArray = Array(nInd,DB2HTML(objStudents("TERRMANAGMENT")), _
					DB2HTML(objStudents("LASTNAME")), DB2HTML(objStudents("FIRSTNAME")), DB2HTML(objStudents("MIDDLENAME")), _
					kStudentIDPrefix & strStudentID, _
					DB2HTML(objStudents("GENDER")), _
					Date2Str(objStudents("BIRTHDATE")), _
					DB2HTML(objStudents("SCHOOLNAME")), _
					DB2HTML(objStudents("PROVINCENAME")), _
					DB2HTML(objStudents("CITYNAME")), _
					DB2HTML(strClasses), _
					DB2HTML(objStudents("STARTDATE")), _
					DB2HTML(objStudents("ENDDATE")), _
					kStudentIDPrefix & strStudentID2, _
					DB2HTML(objStudents("SCHOOLNAME2")), _
					DB2HTML(objStudents("PROVINCENAME2")), _
					DB2HTML(objStudents("CITYNAME2")), _
					1)

			strPrevStudentID = strStudentID
			strPrevSchoolID = strSchoolID
			nInd = nInd + 1
			nCount = 1
			Call strBuilder2.Clear()
		Else
			Call strBuilder2.AppendFormat(strRowTemplate2, _
				Array(Date2Str(objStudents("STARTDATE")), Date2Str(objStudents("ENDDATE")), kStudentIDPrefix & strStudentID2, _
					DB2HTML(objStudents("SCHOOLNAME2")), _
					DB2HTML(objStudents("PROVINCENAME2")), _
					DB2HTML(objStudents("CITYNAME2"))))
			nCount = nCount + 1
		End If

		objStudents.MoveNext
	Wend
	objNSNET.DisposeCommand(cmdClasses)

	If nInd <> 1 Then
		currArray(18) = nCount
		Call strBuilder.AppendFormat(strRowTemplate, currArray)
		Call strBuilder.Append(strBuilder2.ToString)
	End If
	Call strBuilder.Append("</table>")
	GetReportTable = strBuilder.ToString
End Function

Function GetTableHeader()
End Function
%>
