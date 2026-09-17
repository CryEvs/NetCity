<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->
<!-- #INCLUDE FILE="ReportImport_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim strSerializedRaw
Dim reportGroupID
Dim isStartImport
Dim reportInfos
Dim strGroupsName
Dim i
Dim objReportManagerComp
Dim bIsXmlFormat

Const kFormName = "ImportReportForm"

Sub ReadState()
	on error resume next
	strScriptName = "ReportImportXMLPrev.asp"
	reportGroupID = GetSafeLng(Request("GroupID"), Null)
	isStartImport = CLng(Request("STI"))

	strSerializedRaw = obTokenMgr.GetData(strToken, kImportReportFile)
	bIsXmlFormat = obTokenMgr.GetData(strToken, kImportReportFormat) = "xml"
	Set objReportManagerComp = obComponentMgr.Resolve("NetCity.Components.Abstraction.IReportManagerComponent")

	If (isStartImport = 1) Then
		Call objReportManagerComp.ImportReports(strSerializedRaw, reportGroupID, bIsXmlFormat)
		obTokenMgr.SetData strToken, kImportReportFile, Empty
		TestError Array("ReportConstructor.asp", "Ошибка импорта отчетов", Array("GroupID", reportGroupID))
		RedirectTo "ReportConstructor.asp", Array("GroupID", reportGroupID)
	End If

	Dim objReportList
	Set objReportList = objReportManagerComp.GetReportsInfo(strSerializedRaw, bIsXmlFormat)
	TestError Array("ReportConstructor.asp", "Ошибка получения информации по отчетам", Array("GroupID", reportGroupID))

	reportInfos = objReportList.ToArray()
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportImport","kReportPageTitle")
End Function

Sub Main()
	If (reportGroupID = -1) Then
		strGroupsName = obLanguage("ReportImport","kReportGroupsDefault")
	Else
		If (reportGroupID = 0) Then
			strGroupsName = obLanguage("ReportImport","kReportGroupsDefault") 'kReportNonGroups
		Else
			strGroupsName = obLanguage("ReportImport","kReportInCurrentGroup") & objReportManagerComp.GetReportGroupName(reportGroupID)
		End If
	End If
End Sub

Sub onHead()
%>
	<script>
	function StartImport()
	{
		ok('<%=kFormName%>', 'ReportImportXMLPrev.asp');
	}
	function CancelImport()
	{
		ok('<%=kFormName%>', 'ReportConstructor.asp');
	}
	</script>
<%
End Sub

Sub DrawButtons()
	ButtonClass "StartImport();", obLanguage("Common","kContinue"), obLanguage("ReportImport","kStartReportImportFromXML"), ""
End Sub

Sub onDrawPage()%>
	<form NAME="<%=kFormName%>" ACTION="" METHOD="POST" TARGET="_parent">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="BACK" value="<%=strScriptName%>" />
		<input type="hidden" name="GroupID" value="<%=reportGroupID%>" />
		<input type="hidden" name="STI" value="1" />
		<%Call DrawButtonsFilters( True, False, False, kFormName )%>
	</form>

	<%DrawInfo obLanguage("ReportImport","kReportsImporting") & " " & strGroupsName, False  %>

	<table class="table table-thin table-bordered">
		<tr>
			<th><%=obLanguage("Constructor","kReport")%></th>
			<th><%=obLanguage("Common","kGroupA")%></th>

		</tr>
	<%For i = 0 To Ubound(reportInfos) Step 2%>
		<tr>
			<td><%= reportInfos(i) %></td>
			<td><%
		If reportInfos(i+1) <> "" Then
			rw reportInfos(i+1)
		Else
			rw Teg("i", obLanguage("Constructor","kNoReportGroup"))
		End If%>
			</td>
		</tr>
	<%Next%>
	</table>
<%
End Sub

Function Teg(tg, body)
	rw "<" & tg & ">" & body & "</" & tg & ">"
End Function

Sub onEndPage()
End Sub

Sub AddErrorDetails( arrErr, strDetails, strSeparator )
	arrErr(1) = arrErr(1) & strSeparator & strDetails
End Sub

Sub GenerateError( strText )
	If Not bIsDebug Then Call SaveError : On Error Resume Next
	If IsArray(strText) Then
		Dim strAction, strTextError, Params, i
		strAction = strText(0)
		strTextError = strText(1)
		Params = strText(2)

		WriteToLog kUETError, strTextError

		strAction = strAction & "?AT=" &strToken & "&" & Ver()
		If Not IsNull( Params ) Then
			For i=0 To Ubound(Params) Step 2
				strAction = strAction & "&"&Params(i)&"="&Params(i+1)
			Next
		End If
		Call obTokenMgr.SetData( strToken,stWasSaved, strTextError)
		Response.Redirect strAction
		Exit Sub
	End If
	WriteToLog kUETError, strText
	Call RedirectAnyError(-1, strText, Null)
End Sub

%>
