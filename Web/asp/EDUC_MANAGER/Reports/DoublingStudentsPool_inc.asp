<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Const kStudentID = "ID"
Const kStudentIDPrefix = "s"
Const kStudentIDPoolPrefix = "p"

Dim bDoubling, objStudents

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNDoublingStudentsPool")
End Function
Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID) _
		)
End Function

Sub specialRead()
	SetScriptTimeOut 900
'	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
End Sub

Sub SpecialMain()
	Set objStudents = objNSNET.GetDoublingStudentsPool(filterEMID)
	bDoubling = Not objStudents.EOF

	If Not bDoubling Then
		bOk = False
		strErrMsg =obLanguage("EMReports","kNoDoublingStudents")
	End If
End Sub

Function GetReportTable()
	Dim nInd
	Dim objStudentClasses, strClasses
	Dim strStudentID, strSchoolID, strPrevStudentID, strPrevSchoolID
	Dim strSYID
	Dim strStudentID2
	Dim strBuilder

	Set strBuilder = new StringBuilder
	Call strBuilder.Append(GetTableHeader())

	Call strBuilder.Append("<th>" & obLanguage("EMReports","kOrderNum") &"</th>")
	strBuilder.Append(GetManagementColumn(1))
	Call strBuilder.AppendFormat("<th>{0}</th><th>{1}</th><th>{2}</th><th>{3}</th><th>{4}</th><th>{5}</th><th>{6}</th></tr>", _
		Array(obLanguage("EMReports","kStudentFIO"), _
			kStudentID, _
			obLanguage("Common","kGender"), _
			obLanguage("Common","kBDate"), _
			obLanguage("Common","kSchool",0), _
			obLanguage("Common","kClass",strFunctionalityType), _
			obLanguage("Common","kSchoolYear")))
	strPrevStudentID = ""
	nInd = 0
	While Not objStudents.EOF
		strStudentID = GetSafeID(objStudents("STUDENTID"), Null)
		strStudentID2 = GetSafeID(objStudents("STUDENTID2"), Null)
		
		If strStudentID <> strPrevStudentID Then
			nInd = nInd + 1
			
			Call strBuilder.AppendFormat("<tr><td class=""cell-num"" {0}>{1}</td>", Array(GetTDBGColor(), nInd))
			strBuilder.Append(GetCellManagement(objStudents("FNAME")))
			Call strBuilder.AppendFormat("<td {0}>{1} {2} {3}" &_
				"</td><td {0}>{4}</td><td {0}>{5}</td><td class=""cell-date"" {0}>{6}" & _
				"</td><td {0}>{7}</td><td {0}>{8}</td><td class=""cell-date"" {0}>{9}</td></tr>", _
				Array(GetTDBGColor(),DB2HTML(objStudents("LASTNAME")), DB2HTML(objStudents("FIRSTNAME")), DB2HTML(objStudents("MIDDLENAME")), kStudentIDPoolPrefix & strStudentID, DB2HTML(objStudents("GENDER")), Date2Str(objStudents("BIRTHDATE")), DB2HTML(objStudents("SCHOOLNAME")), DB2HTML(objStudents("CLASSNAME")), DB2HTML(objStudents("SCHOOLYEARNAME"))))
		End If
		nInd = nInd + 1
		Call strBuilder.Append("<tr><td class=""cell-num"">" & nInd &"</td>")
		strBuilder.Append(GetCellManagement(objStudents("FNAME2")))
		Call strBuilder.AppendFormat("<td>{0} {1} {2}" & _
			"</td><td>{3}</td><td>{4}</td><td class=""cell-date"">{5}" & _
			"</td><td>{6}</td><td>{7}</td><td class=""cell-date"">{8}</td></tr>", _
			Array(DB2HTML(objStudents("LASTNAME")), DB2HTML(objStudents("FIRSTNAME")), DB2HTML(objStudents("MIDDLENAME")), kStudentIDPoolPrefix & strStudentID2, DB2HTML(objStudents("GENDER")), Date2Str(objStudents("BIRTHDATE")), DB2HTML(objStudents("SCHOOLNAME2")), DB2HTML(objStudents("CLASSNAME2")), DB2HTML(objStudents("SCHOOLYEARNAME2"))))

		strPrevStudentID = strStudentID
		objStudents.MoveNext
	Wend
	Call strBuilder.Append("</table>")
	GetReportTable = strBuilder.ToString
End Function

Function GetTableHeader()
End Function

Function GetTDBGColor()
	GetTDBGColor = ""
End Function
%>
