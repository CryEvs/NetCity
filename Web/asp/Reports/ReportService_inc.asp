<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim subEms
Dim currFounderID
Dim filterEMID
'Dim nGlobalYearID', strGlobalYearID

Sub InitEmFilters()
	subEms = Not isDull(Request("SubEMs"))
	filterEMID = GetSafeLng(Request("FilterEMID"), obTokenMgr.GetData(strToken, stfilterEmId))
End Sub

Function GetFounderHeader(ByVal colspan, objRs)
	GetFounderHeader = ""
	If subEms Then 
		If currFounderID <> objRs("FOUNDERID") Then 
			currFounderID = objRs("FOUNDERID")
			If colspan > 1 Then colspan= " colspan="""& colspan &"""" Else colspan=""
			GetFounderHeader = "<tr><th"& colspan &">" & DB2HTML(objRs("FNAME")) & "</th></tr>"
		End If
	End if
End Function

Function GetManagementColumn(ByVal rowSpanVal)
	If subEms Then
		If rowSpanVal > 1 Then rowSpanVal= " rowspan="""& rowSpanVal &"""" Else rowSpanVal=""
		GetManagementColumn = "<th" & rowSpanVal & ">" & obLanguage("EM","kManagement") &"</th>"
	Else
		GetManagementColumn = ""
	End If
End Function

Function GetCellManagement(founderName)
	If subEms Then 
		GetCellManagement = "<td align=""center"" " & GetTDBGColor() & ">"& DB2HTML(founderName) &"</td>"
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
