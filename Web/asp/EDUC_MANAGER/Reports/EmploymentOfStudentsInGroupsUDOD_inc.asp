<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

'Тип школ,в которые помещают дошкольниов,студентов,работающих и т.д...(В Тольятти)
'Const EOFORMID=33

Dim i, nTypeId
Dim objSchoolRes, objStudentRes 
Dim nGlobalYearId

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNEmploymentOfStudentsInGroupsUDOD")
End Function

Function GetPageParams()
	Dim strCategory, objPoolCategory

	If nTypeId = "-1" Then
		strCategory = obLanguage("Common","kAll")
	Else
		Set objPoolCategory = objNSNET.GetPoolCategory(nTypeId)
		If objPoolCategory.EOF Then
			GenerateError obLanguage("Import","kCantGetPoolCategories")
		End If
		strCategory = GetSafeStr(objPoolCategory("REPORTNAME"), -1, "")
	End If
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("EMReports","kCategoryLearning"), strCategory)
End Function

Sub specialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	bOk = True
	strErrMsg = ""
	nTypeId = GetSafe("selectType", Null)
End Sub

Sub specialMain()
	Call objNSNET.GetEmploymentOfStudentsInGroups(nGlobalYearID, filterEMID, nTypeId, objSchoolRes, objStudentRes)
	If objSchoolRes.EOF Then 
		bOK = False 
		strErrMsg = obLanguage("EMReports","kNoAddSchools")
	End If
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num"">" & _
		"<tr>" & _
		"<th rowspan=""2"">" & obLanguage("EMReports","kOrderNum") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("EMReports","kShortNameUDOD") & "</th>" & _
		"<th rowspan=""2"">" & obLanguage("EMReports","kCountTrained") & "</th>" & _
		"<th colspan=""5"">" & obLanguage("EMReports","kUnionsCount") & "</th></tr>" & _
		"<tr>" & _
		"<th>" & "1" & "</th>" & _
		"<th>" & "2" & "</th>" & _
		"<th>" & "3" & "</th>" & _
		"<th>" & "4" & "</th>" & _
		"<th>" & obLanguage("EMReports","kMoreThan4") & "</th></tr>"
End Function

Function GetReportTable()
	strReport = GetTableHeader()
	For i = 1 To objSchoolRes.RecordCount
		strReport = strReport & GetFounderHeader(19,objSchoolRes)
		strReport= strReport & "<tr><td>" & i & "</td><td class=""cell-text"">" & DB2HTML(objSchoolRes("SCHOOLNAME")) & "</td>" & _
		"<td>" & CDbl(objSchoolRes("TOTAL")) & "</td><td>" & CDbl(objSchoolRes("COUNT_1")) & "</td><td>" & CDbl(objSchoolRes("COUNT_2")) & "</td>" & _ 
		"<td>" & CDbl(objSchoolRes("COUNT_3")) & "</td><td>" & CDbl(objSchoolRes("COUNT_4")) & "</td><td>" & CDbl(objSchoolRes("COUNT_5")) & "</td></tr>"
		If Not objSchoolRes.EOF Then objSchoolRes.MoveNext
	Next
	strReport = strReport & "</table>"
	strReport = strReport & "<br><br>"
	'Таблица Кол-во объединений-учеников
	strReport = strReport & GetTableHeaderByCountAssociation()
	strReport= strReport & _
		"<tr><td>" & 1 & "</td><td>" & CDbl(objStudentRes("COUNT_1")) & "</td></tr>" &_
		"<tr><td>" & 2 & "</td><td>" & CDbl(objStudentRes("COUNT_2")) & "</td></tr>" &_
		"<tr><td>" & 3 & "</td><td>" & CDbl(objStudentRes("COUNT_3")) & "</td></tr>" &_
		"<tr><td>" & 4 & "</td><td>" & CDbl(objStudentRes("COUNT_4")) & "</td></tr>" &_
		"<tr><td>" & obLanguage("EMReports","kMoreThan4") & "</td><td>" & CDbl(objStudentRes("COUNT_5")) & "</td></tr>"
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetTableHeaderByCountAssociation()
	GetTableHeaderByCountAssociation = "<table class=""table-print"">" & _
		"<tr><th colspan=""2"">" & obLanguage("EMReports","kQuantity") &  "</th></tr>" & _
		"<tr><th>" & obLanguage("EMReports","kAssociations") & "</th><th>" & obLanguage("EMReports","kTrained") &  "</th></tr>"
End Function

%>
