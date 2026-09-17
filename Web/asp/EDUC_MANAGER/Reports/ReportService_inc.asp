
<% ' © 2007-2008 IRTech. All rights reserved.
Dim subEms
Dim currFounderID
Dim filterEMID

Sub InitEmFilters()
	subEms = Not isDull(Request("SubEMs"))
	filterEMID = GetSafeLng(Request("FilterEMID"), obTokenMgr.GetData(strToken, stfilterEmId))
End Sub

Function GetFounderHeader(colspan, objRs)
	GetFounderHeader = ""
	If subEms Then 
		If currFounderID <> objRs("FOUNDERID") Then 
			currFounderID = objRs("FOUNDERID")
			GetFounderHeader = "<tr><td colspan="& colspan &" style=""background-color: #eaeaea""><b>" & DB2HTML(objRs("FNAME")) & "</b></td></tr>"
		Else
			GetFounderHeader = ""
		End If
	Else
		GetFounderHeader = ""
	End if
End Function

Function GetManagementColumn(rowSpanVal)
	If subEms Then
		GetManagementColumn = "<td rowspan=" & rowSpanVal & ">" & obLanguage("EM","kManagement") &"</td>"
	Else
		GetManagementColumn = ""
	End If
End Function

Function GetCellManagement(objRs)
	If subEms Then 
		GetCellManagement = "<td align=""center"" " & GetTDBGColor() & ">"& DB2HTML(objRs("FNAME")) &"</td>"
	Else
		GetCellManagement = ""
	End If
End Function

'Применять только при просмотре формы ФГСН
Function GetFormNumber()
	Dim pageUrl
	Dim resultStr
	Dim leftstr
	Dim rightStr
	Dim Num
	Dim pageNum

	pageUrl = Request.ServerVariables("SCRIPT_NAME")'Извлекаем URL
	Num = GetSafeLng(InStr(pageUrl, "Page")+3, Null)
	leftstr = Left(pageUrl,Num)'Получаем левую часть строки от номера страницы
	resultStr = Replace(pageUrl,leftstr, "")'Получаем номер страницы + .asp
	pageNum = Replace(resultStr,"_print.asp","")'Убираем .asp
	GetFormNumber = pageNum
End Function
%>
