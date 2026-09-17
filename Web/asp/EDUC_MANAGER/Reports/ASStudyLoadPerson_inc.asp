<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim objStudents, bEmpty
Dim nCategoryID, nLoadNum

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNASStudyLoadPerson")
End Function

Function GetPageParams()
	Dim strCategory, objPoolCategory

	If nCategoryID = "-1" Then
		strCategory = obLanguage("Common","kAll")
	Else
		Set objPoolCategory = objNSNET.GetPoolCategory(nCategoryID)
		If objPoolCategory.EOF Then
			GenerateError obLanguage("Import","kCantGetPoolCategories")
		End If
		strCategory = GetSafeStr(objPoolCategory("REPORTNAME"), -1, "")
	End If
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("EMReports","kCategoryLearning"), strCategory, _
		obLanguage("EMReports","kStudyLoad"), GetStudyLoad(nLoadNum) )
End Function

Sub specialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	nCategoryID = GetSafe("selectType", Null)
	nLoadNum = GetSafe("LOAD_NUM", 1)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, "selectType", nCategoryID)
	Call obTokenMgr.SetData(strToken, stLoadNum, nLoadNum)
End Sub

Sub specialMain()
	Set objStudents = objNSNET.GetAddStudentsStudyLoadPersonal(filterEMID, nGlobalYearID, nCategoryID, nLoadNum)
	bEmpty = objStudents.EOF
	If bEmpty Then strErrMsg = obLanguage("EMReports","kNoDataForFilter")
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-text"">" & _
		"<tr><th>" & "№" & "</th>" & _
		"<th>" & obLanguage("Filter","kFIO") & "</th><th>" & obLanguage("EMReports","kMOY") & "</th><th>" & obLanguage("Common","kClass",2) & "</th><th>" & obLanguage("EMReports","kStudyLoad2") & "</th><th>" & obLanguage("EMReports","kAddClassesList") & "</th><th>" & obLanguage("EMReports","kProgDirectionsList") & "</th><th>" & obLanguage("EMReports","kAddSchoolsList") & "</th></tr>"
End Function

Function GetReportTable()
	Dim i, j, strStudentName
	Dim objMainSchool, strMainSchoolName, strClassName
	Dim objAddSchools, strAddSchools, strAddClasses, strDirections

	Response.Write GetTableHeader()
	i=0: j = 0
	Set objMainSchool = objStudents("chapMainSchool").Value
	Set objAddSchools = objStudents("chapAddSchools").Value
	While Not objStudents.EOF
		i = i + 1
		j = j + 1
		Response.Write GetFounderHeader(8,objStudents)
		strStudentName = GetSafeStr(objStudents("LASTNAME"), -1, Null)
		If Not IsDull(objStudents("FIRSTNAME")) Then
			strStudentName = strStudentName & " " & GetSafeStr(objStudents("FIRSTNAME"), -1, "")
		End If
		If Not IsDull(objStudents("MIDDLENAME")) Then
			strStudentName = strStudentName & " " & GetSafeStr(objStudents("MIDDLENAME"), -1, "")
		End If

		strMainSchoolName = ""
		strClassName = ""
		If Not objMainSchool.EOF Then
			strMainSchoolName = GetSafeStr(objMainSchool("EONAME"), -1, "")
			strClassName = GetSafeStr(objMainSchool("CLASSNAME"), -1, "")
		End If
		Call GetAddSchoolInfo(objAddSchools, strAddSchools, strAddClasses, strDirections)

		Response.Write "<tr><td class=""cell-num"">" & j & "</td><td>" & DB2HTML(strStudentName) & "</td>" &_
			"<td>" & DB2HTML(strMainSchoolName) & "</td>" &_
			"<td>" & DB2HTML(strClassName) & "</td>" &_
			"<td  class=""cell-num"">" & DB2HTML(objStudents("HOURS_CNT")) & "</td>" &_
			"<td>" & strAddClasses & "</td>" &_
			"<td>" & strDirections & "</td>" &_
			"<td>" & strAddSchools & "</td></tr>"
		objStudents.MoveNext  
		if i=1000 then Response.Flush: i=0
	Wend
	Response.Write "</table>"
End Function

Sub GetAddSchoolInfo(objAddSchools, strAddSchools, strAddClasses, strDirections)
	Dim strPrevEOName, strCurrEOName
	Dim strCurrClassName
	Dim strDirIDs, strCurrDirID, strCurrDirName

	strAddSchools = ""
	strAddClasses = ""
	strDirections = ""

	strPrevEOName = ""
	strDirIDs = ","
	While Not objAddSchools.EOF
		strCurrClassName = GetSafeStr(objAddSchools("CLASSNAME"), -1, "")
		strCurrEOName = GetSafeStr(objAddSchools("EONAME"), -1, "")
		strCurrDirID = GetSafeID(objAddSchools("DIRECTIONID"), Null)

		strAddClasses = strAddClasses & DB2HTML(strCurrClassName) & "<br>"
		If strCurrEOName <> strPrevEOName Then
			strAddSchools = strAddSchools & DB2HTML(strCurrEOName) & "<br>"
			strPrevEOName = strCurrEOName
		End If

		If InStr(strDirIDs, "," & strCurrDirID & ",") = 0 Then
			strCurrDirName = GetSafeStr(objAddSchools("DIRECTIONNAME"), -1, "")
			strDirections = strDirections & DB2HTML(strCurrDirName) & "<br>"
			strDirIDs = strDirIDs & strCurrDirID & ","
		End If

		objAddSchools.MoveNext    
	Wend

	If Not IsDull(strAddSchools) Then
		strAddSchools = Left(strAddSchools,Len(strAddSchools)-4)
	Else
		strAddSchools = "&nbsp;"
	End If

	If Not IsDull(strAddClasses) Then
		strAddClasses = Left(strAddClasses,Len(strAddClasses)-4)
	Else
		strAddClasses = "&nbsp;"
	End If

	If Not IsDull(strDirections) Then
		strDirections = Left(strDirections,Len(strDirections)-4)
	Else
		strDirections = "&nbsp;"
	End If
End Sub

Function GetStudyLoad(nNum)
	Dim arrLoads
	ReDim arrLoads(4)

	arrLoads(0) = obLanguage("EMReports","kLoad_Less_5")
	arrLoads(1) = obLanguage("EMReports","kLoad_5_10")
	arrLoads(2) = obLanguage("EMReports","kLoad_11_24")
	arrLoads(3) = obLanguage("EMReports","kLoad_25_32")
	arrLoads(4) = obLanguage("EMReports","kLoad_Greater_32")

	GetStudyLoad = arrLoads(nNum - 1)
End Function
%>
