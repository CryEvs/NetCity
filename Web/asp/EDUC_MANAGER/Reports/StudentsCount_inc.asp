<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<%	' © 2007-2014 IRTech. All rights reserved.

Dim nGlobalYearId
Dim strEOTypeID
Dim dtEndDate, strEndDate
Dim nSchoolsCount
Dim nMinGradeTot, nMaxGradeTot
Dim arrClassesCount
Dim arrGrades
Dim strSchoolsYears
Dim nCurrFuncType

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNStudentsCount")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate _
		)
End Function

Sub SpecialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	SetScriptTimeOut 900
	strEndDate = GetSafe("DDT",  "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	strEOTypeID = GetSafe("EOTYPEID",Null)
	nCurrFuncType = objNSNET.GetFuncTypeByEOTypeID(strEOTypeID)
End Sub

Sub SpecialMain()
	Dim objSchoolsYears
	Dim bNeedAccessToArchDB
	Dim strSYID
	Dim nMinGrade, nMaxGrade
	Dim currentEmId0,currentEmId1

	nSchoolsCount = 0
	Set objSchoolsYears = objNSNET.GetEMShoolsYearsList(nGlobalYearID, strEOTypeID, -1, filterEMID, EXCLUDE_SOME_UDODS)'подсовываем "локальный" или глобальный EmId в currentEmId1
	ReDim arrClassesCount(objSchoolsYears.RecordCount - 1,12)
	ReDim arrGrades(objSchoolsYears.RecordCount - 1,15)
	bNeedAccessToArchDB = False
	While not objSchoolsYears.EOF
		strSYID = objSchoolsYears("SCHOOLYEARID")
		Call objNSNET.GetEMMinMaxGrades(strSYID, nMinGrade, nMaxGrade)
		If Not IsDull(nMinGrade) Then ' Проверка на нормальный учебный год, где хотя бы есть классы
			arrGrades(nSchoolsCount,13) = objSchoolsYears("SCHOOLYEARID")
			arrGrades(nSchoolsCount,14) = objSchoolsYears("SCHOOLNAME")
			arrGrades(nSchoolsCount,15) = objSchoolsYears("FNAME")
			If objSchoolsYears("ARCHIVESTATUS") = 4 Then bNeedAccessToArchDB = True
			nSchoolsCount = nSchoolsCount + 1
			If Not IsDull(objSchoolsYears("SCHOOLYEARID")) Then strSchoolsYears = strSchoolsYears & IIF(strSchoolsYears="","",", ") & objSchoolsYears("SCHOOLYEARID")
		End If
		objSchoolsYears.MoveNext
	Wend
	nMinGradeTot = 12
	nMaxGradeTot = 0

	If nSchoolsCount = 0 Then
		bOk = False
		strErrMsg = obLanguage("Common","kNoDataForFilter")
		Exit Sub
	End If

	Call GetReportArray
	If bNeedAccessToArchDB Then 
		SetArchConnection
		Call GetReportArray
		SetWorkConnection
	End If
End Sub

Sub GetReportArray
	Dim i, j
	Dim nMinGrade, nMaxGrade
	Dim nSYID, objStudClassCount

	Call objNSNET.GetEMMinMaxGrades(strSchoolsYears, nMinGrade, nMaxGrade)
	If nMinGradeTot > nMinGrade Then nMinGradeTot = nMinGrade
	If nMaxGradeTot < nMaxGrade Then nMaxGradeTot = nMaxGrade


	For j = 0 to nSchoolsCount - 1
		nSYID = arrGrades(j,13)
		Set objStudClassCount = objNSNET.GetClassStudentsCountByGrades(nSYID, dtEndDate)
		
		For i = nMinGrade To nMaxGrade
			If Not objStudClassCount.EOF Then
				If i = CLng(objStudClassCount("GRADE")) Then
					arrGrades(j,i) = CLng(objStudClassCount("STUD_CNT"))
					arrClassesCount(j,i) = CLng(objStudClassCount("CLS_CNT"))
					objStudClassCount.MoveNext
				End If
			End If
		Next
	Next
End Sub

Function GetReportTable
	Dim i, j
	Dim nEducInstitutionStudentsCount, nEducInstitutionClassesCount

	GetReportTable = GetTableHeader()
	For j = 0 to nSchoolsCount - 1
		GetReportTable = GetReportTable & "<tr class=""text-nowrap"">"
		' ЕСЛИ ЕСТЬ ПОДЧИНЕННЫЕ УО, ТО ЗАПОЛНЯЕМ КОЛОНКУ- "УПРАВЛЕНИЕ"
		If subEms Then
			GetReportTable = GetReportTable & "<td class=""cell-text"">" & arrGrades(j,15) & "</td>"
		End If
		GetReportTable = GetReportTable & "<td class=""cell-text"">" & arrGrades(j,14) & "</td>"
		nEducInstitutionStudentsCount = 0
		nEducInstitutionClassesCount = 0
		For i = nMinGradeTot To nMaxGradeTot
			GetReportTable = GetReportTable &  "<td>" & DB2HTML(arrClassesCount(j,i)) & "</td><td>" & IIF(arrGrades(j,i)>0,DB2HTML(arrGrades(j,i)),"&nbsp;") & "</td>"
			nEducInstitutionStudentsCount = nEducInstitutionStudentsCount + arrGrades(j,i)
			nEducInstitutionClassesCount = nEducInstitutionClassesCount + arrClassesCount(j,i)
			If nCurrFuncType = 2 Then 
				If i = 4 then 
					GetReportTable = GetReportTable & "<td>" & DB2HTML(arrClassesCount(j,0) + arrClassesCount(j,1) + arrClassesCount(j,2) + arrClassesCount(j,3) + arrClassesCount(j,4)) & _
						"</td><td>" & DB2HTML(arrGrades(j,0) + arrGrades(j,1) + arrGrades(j,2) + arrGrades(j,3) + arrGrades(j,4)) & "</td>"
				ElseIf i = 9 then 
					GetReportTable = GetReportTable & "<td>" & DB2HTML(arrClassesCount(j,5)+arrClassesCount(j,6)+arrClassesCount(j,7)+arrClassesCount(j,8)+arrClassesCount(j,9)) & _
						"</td><td>" & DB2HTML(arrGrades(j,5) + arrGrades(j,6) + arrGrades(j,7) + arrGrades(j,8) + arrGrades(j,9)) & "</td>"
				ElseIf i = 11 then 
					GetReportTable = GetReportTable & "<td>" & DB2HTML(arrClassesCount(j,10)+arrClassesCount(j,11)) _
						&"</td><td>" & DB2HTML(arrGrades(j,10) + arrGrades(j,11)) & "</td>"
				End If
			End If
		Next
		GetReportTable = GetReportTable &  "<td>" & IIF(nEducInstitutionClassesCount>0,DB2HTML(nEducInstitutionClassesCount),"&nbsp;") & _
			"</td><td>" & IIF(nEducInstitutionStudentsCount>0,DB2HTML(nEducInstitutionStudentsCount),"&nbsp;") & "</td></tr>"
	Next
	GetReportTable = GetReportTable & "</table>"
End Function

Function GetTableHeader()
	Dim i, strClasses, strCounts
	strClasses = obLanguage("SchoolSettings","kClasses",nCurrFuncType)
	strCounts =  "<th>" &  Replace(obLanguage("Reports","kClassesCountS",nCurrFuncType),"-","&ndash;") & "</th>" & _
		"<th>" & Replace(DB2HTML_BR(obLanguage("Reports","kStudentsCountS",nCurrFuncType)),"-","&ndash;") & "</th>"
	GetTableHeader = "<table class=""table-print-num"">" & _
	"<tr>"
	'ЕСЛИ ЕСТЬ ПОДЧИНЕННЫЕ УО, ТО ДОБАВЛЯЕМ КОЛОНКУ- "УПРАВЛЕНИЕ"
	GetTableHeader = GetTableHeader & GetManagementColumn(2)
	GetTableHeader = GetTableHeader & "<th rowspan=2>" & obLanguage("Reports","kNameEducInstitution")&"</th>"

	For i=nMinGradeTot to nMaxGradeTot
		GetTableHeader = GetTableHeader & "<th colspan=2>" & GetGradeName(i) & " " & strClasses &"</th>"
		If nCurrFuncType = 2 Then 
			If i = 4 then GetTableHeader = GetTableHeader & "<th colspan=2>" & "1&mdash;4" & " " & strClasses &"</th>"
			If i = 9 then GetTableHeader = GetTableHeader & "<th colspan=2>" & "5&mdash;9" & " " & strClasses &"</th>"
			If i = 11 then GetTableHeader = GetTableHeader & "<th colspan=2>" & "10&mdash;11" & " " & strClasses &"</th>"
		End If
	Next
	GetTableHeader = GetTableHeader & "<th colspan=2>" & obLanguage("Reports","kTotalInEI") & "</th></tr><tr>"
	For i=nMinGradeTot to nMaxGradeTot + 1
		GetTableHeader = GetTableHeader & strCounts
		If nCurrFuncType = 2 Then 
			If i = 4 or i = 9 or i = 11 then GetTableHeader = GetTableHeader & strCounts
		End If
	Next
	GetTableHeader = GetTableHeader & "</tr>"
End Function


Function GetGradeName(theGrade)
	If CInt(strEOTypeID) = 1 Then
		Select Case theGrade
			Case 0: GetGradeName = obLanguage("Common","kGr0_s")
			Case 1: GetGradeName = obLanguage("Common","kGr1_s")
			Case 2: GetGradeName = obLanguage("Common","kGr2_s")
			Case 3: GetGradeName = obLanguage("Common","kGr3_s")
			Case 4: GetGradeName = obLanguage("Common","kGr4_s")
			Case 5: GetGradeName = obLanguage("Common","kGr5_s")
			Case 6: GetGradeName = obLanguage("Common","kGr6_s")
			Case 7: GetGradeName = obLanguage("Common","kGr7_s")
			Case 8: GetGradeName = obLanguage("Common","kGr8_s")
			Case Else: GetGradeName = theGrade
		End Select
	Else
		GetGradeName = theGrade
	End IF
End Function

%>
