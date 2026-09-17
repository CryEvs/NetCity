<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'Тип школ,в которые помещают дошкольниов,студентов,работающих и т.д...(В Тольятти)(Вечерние школы тип 8.4)
CONST EOFormIdUDOD=33
CONST MaxCountClassArray=6 'Нумерация итоговой таблицы в отчете будет от 1 до 7

DIM classCount
DIM studID,count,i,j
DIM bOK,strReport, strErrMsg
Dim rsStudentList

Sub specialRead()
    strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
    bOk = True
	strErrMsg = ""
End Sub

Sub specialMain()
	SetScriptTimeOut 900
    Set rsStudentList = objNSNET.GetAddEducationStudentsList(strCurrYearID,EOFormIdUDOD)
	If rsStudentList.EOF Then 
	    bOK = False 
	    strErrMsg = "Нет обучающихся в данном МОДО"
	End If    
	strReport = GetReport()
End Sub


Function countClass(id)
     IF studID=id THEN
        count=count+1
     ELSE
		If (count-1) > UBound(classCount) Then
			ReDim Preserve classCount(count-1)
		End If
        classCount(count-1)=classCount(count-1)+1
        count=1
     END IF
     studID=id
     countClass=count
End Function



Sub GetArray()
    ReDim classCount(MaxCountClassArray)
     For j = 0 To Ubound(classCount)
		classCount(j)=0
	Next
End Sub

Function GetReportTable()
	Dim rsRealClass,EOF, recCount
	Dim strSchName, strClName

	strReport = GetTableHeader()
	Call GetArray()
	'Таблица Персональный список обучающихся в МОДО
	Set rsRealClass = rsStudentList("rsAddSchoolStudInfo").Value
	studID = rsStudentList("STUDENTID")
	count = 0
	recCount = rsStudentList.RecordCount
	For i = 1 To recCount
		EOF = rsRealClass.EOF
		strReport= strReport & "<tr><td class=""cell-num"">" & i & "</td>"
		
		If EOF Then
			strSchName = "-"
		Else
			strSchName = GetSafeStr(rsRealClass("SCHOOLNAME"),-1,"не указано")
		End If
		If EOF Then
			strClName = "-"
		Else
			strClName = GetSafeStr(rsRealClass("CLASSNAME"),-1,"")
		End If

		strReport= strReport & _
		"<td class=""cell-num"">" & countClass(rsStudentList("STUDENTID")) & "</td><td>" & strSchName & "</td><td>" & strClName & "</td><td>" & _
		rsStudentList("FIO") & "</td><td class=""cell-date"">" & Date2Str(rsStudentList("BIRTHDATE")) & "</td><td>" & rsStudentList("GENDER") & "</td><td>" & _
		rsStudentList("DIRECTIONNAME") & "</td><td class=""cell-num"">" & rsStudentList("GRADE") & "</td><td>" & rsStudentList("CLASSSUBNAME") & "</td><td class=""cell-num"">" & DB2HTML(GetSafeLng(rsStudentList("WEEKHOURS"), 0)) & "</td></tr>"
		If i<recCount Then rsStudentList.MoveNext
	Next
	classCount(count-1)=classCount(count-1)+1
	strReport = strReport & "</table>"
	strReport = strReport & "<br><br><br><br>"
	'Таблица Кол-во объединений-учеников
	strReport = strReport & GetTableHeaderByCountAssociation()
	For i = 0 To Ubound(classCount)
		strReport= strReport & "<tr><td>" & i+1 & "</td><td>" & classCount(i) & "</td></tr>"
	Next
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetTableHeaderByCountAssociation()
	GetTableHeaderByCountAssociation = "<table class=""table-print-num"">" & _
		"<tr><th colspan=""2"">" & obLanguage("Reports","kQuantity") &  "</th></tr>" & _
		"<tr><th>" & obLanguage("Reports","kAssociations") & "</th><th>" & obLanguage("Reports","kTrained") &  "</th></tr>"
End Function

%>
