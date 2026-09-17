<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Dim nGlobalYearId
Dim strEMSchoolID
Dim dtEndDate, strEndDate
Dim strEOTypeID, strEOTypeName
Dim arrReportData

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = True
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNListClassCompleteSet")
End Function

Function GetPageParams()
	Dim strEMSchoolName
	If strEMSchoolID = "-1" Then
		strEMSchoolName = obLanguage("Common","kAll")
	Else
		strEMSchoolName = objNSNET.GetSchoolName(strEMSchoolID)
	End If
	GetPageParams = Array( _
		obLanguage("Common","kEMName"), objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kEOType"), strEOTypeName, _
		obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate, _
		obLanguage("EMReports","kEMSchool"), strEMSchoolName)
End Function

Sub specialRead()
	SetScriptTimeOut 900

	strEOTypeID = GetSafeID(obTokenMgr.GetData(strToken, "stCurrEOTypeID"), Null)
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))

	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	Call obTokenMgr.SetData(strToken, stRepDoubling_End, dtEndDate)

	strEMSchoolID = GetSafe("EMSCHOOLID", Null)
End Sub

Sub specialMain()
	Dim objInfo

	Set objInfo = objNSNET.GetEOTypeInfo(strEOTypeID)
	If Not objInfo.EOF Then
		strEOTypeName = GetSafeStr(objInfo("NAME"), -1, "")
	End If

	Set arrReportData = objNSNET.GetClass2AddClassInfo(filterEMID, strEOTypeID, nGlobalYearID, dtEndDate, strEMSchoolID)
	
	If arrReportData.Count = 0 Then
		strErrMsg = obLanguage("EMReports","kNoClass2AddClass")
	End If
End Sub

Function GetTableHeader()
End Function

Function GetReportTable()
	Dim i, nIndex
	Dim strBuilder, strBuilder2
	Dim strRowTemplate, strRowTemplate2
	Dim classData, arrAddClasses, nAddClassesCount, addClassInfo

	Set strBuilder = new StringBuilder
	Set strBuilder2 = new StringBuilder
	
	Call strBuilder.Append(GetTableHeader())
	Call strBuilder.AppendFormat("<tr><th class=""text-nowrap"">{0}</th><th>{1}</th><th>{2}</th><th>{3}</th><th>{4}</th><th>{5}</th><th>{6}</th></tr>", _
		Array(obLanguage("EMReports","kOrderNum"),_
			obLanguage("EMReports","kSchoolName"), _
			obLanguage("EMReports","kClassGroup"), _
			obLanguage("EMReports","kStudentInClassCount"), _
			obLanguage("EMReports","kAddSchoolName"), _
			obLanguage("EMReports","kAddProgDirection"), _
			obLanguage("EMReports","kCombining")))

	strRowTemplate = "<tr><td class=""cell-num"" rowspan=""{4}"">{0}</td>" & _
		"<td class=""cell-text"" rowspan=""{4}"">{1}</td>" & _
		"<td class=""cell-text"" rowspan=""{4}"">{2}</td>" & _
		"<td class=""cell-num"" rowspan=""{4}"">{3}</td>"

	strRowTemplate2 = "<td class=""cell-text"">{0}</td>" & _
		"<td class=""cell-text"">{1}</td>" & _
		"<td class=""cell-text"">{2}</td>"

	For Each classData in arrReportData
		nIndex = nIndex + 1

		arrAddClasses = classData.AddClasses.ToArray()
		nAddClassesCount = UBound(arrAddClasses) + 1

		Call strBuilder2.AppendFormat(strRowTemplate, _
			Array(nIndex, _
				DB2HTML(classData.SchoolName), _
				DB2HTML(classData.ClassName), _
				DB2HTML(classData.StudentsCount), _
				nAddClassesCount))

		For i = 0 To nAddClassesCount - 1
			Set addClassInfo = arrAddClasses(i)

			If i > 0 Then
				Call strBuilder2.Append("<tr>")
			End If

			Call strBuilder2.AppendFormat(strRowTemplate2, _
				Array(DB2HTML(addClassInfo.AddSchoolName), _
					DB2HTML(addClassInfo.AddSchoolDirection), _
					DB2HTML(addClassInfo.AddClassName)))

			Call strBuilder2.Append("</tr>")
		Next

		Call strBuilder.Append(strBuilder2.ToString)
		Call strBuilder2.Clear()
	Next

	Call strBuilder.Append("</table>")
	GetReportTable = strBuilder.ToString
End Function
%>
