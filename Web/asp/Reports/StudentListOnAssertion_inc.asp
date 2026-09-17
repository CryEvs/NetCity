
<% ' © 2007-2009 IRTech. All rights reserved.
'Тип школ,в которые помещают дошкольниов,студентов,работающих и т.д...(В Тольятти)(Вечерние школы тип 8.4)

CONST EOFormIdUDOD=33

dim classCount
DIM studID,count,i,j
DIM bOK,strReport, strErrMsg
Dim rsStudentList

Sub specialRead()
    bOk = True
	strErrMsg = ""
End Sub

Sub specialMain()
    Set rsStudentList = objNSNET.GetStudentListAttendOnAssertion(strCurrYearID,EOFormIdUDOD)
	If rsStudentList.EOF Then 
	    bOK = False 
	    strErrMsg = obLanguage("Reports","kWrnNoStudentsOnlyOnAssertion")
	End If    
	strReport = GetReport()
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		"<tr><th>" & obLanguage("Reports","kNumberRow") & "</th>" & _
		"<th>" & obLanguage("Reports","kFIOstud") & "</th><th>" & obLanguage("Reports","kNameEducInst") & "</th><th>" & obLanguage("Reports","kClass") & "</th><th>" & obLanguage("Reports","kCountOfAssociation_Wrap")  & "</th></tr>"
End Function

Function GetReportTable()
    Dim rsRealClass,EOF, recCount
	strReport = GetTableHeader()
	Set rsRealClass = rsStudentList("rsAddSchoolStudInfo").Value
	SetScriptTimeOut 900
	For i = 1 To rsStudentList.RecordCount
	    EOF = rsRealClass.EOF
		strReport= strReport &_
		"<tr><td class=""cell-num"">" & i & "</td>" &_ 
		"<td class=""cell-text"">" & rsStudentList("FIO") & "</td><td class=""cell-text"">"
		If EOF Then
		    strReport = strReport & "-</td><td>-"
		Else
		    strReport = strReport & DB2HTML(rsRealClass("SCHOOLNAME")) & "</td><td class=""cell-text"">" & DB2HTML(rsRealClass("CLASSNAME"))
		End IF  
		strReport= strReport & "</td><td class=""cell-num"">" & CDbl(rsStudentList("UNIONSCOUNT")) & "</td></tr>"
		If i<rsStudentList.RecordCount Then rsStudentList.MoveNext
	Next
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetTableHeaderByCountAssociation()
	GetTableHeaderByCountAssociation = "<table class=""table-print"">" & _
		"<tr><th colspan=""2"">" & obLanguage("Reports","kQuantity") &  "</th></tr>" & _
		"<tr><th>" & obLanguage("Reports","kAssociations") & "</th><th>" & obLanguage("Reports","kTrained") &  "</th></tr>"
End Function

%>
