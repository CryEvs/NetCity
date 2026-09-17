<% ' © 2007-2013 IRTech. All rights reserved.
Const kBlank = "&nbsp;"
Dim bSendReport, bOK, strErrMsg
Dim strReport

Const kGraphTableLabelsRow = "chart-labels-row"
Const kGraphTableDataRow = "chart-data-row"
Const kGraphTableDataNameCell = "chart-data-name"

Function GetPageTitle()
	GetPageTitle = ""
End Function

Function GetTitleEx()
	GetTitleEx = ""
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), "CurrYearName"_
		)
End Function

Function GetReportTable()
	GetReportTable=""
End Function

Function GetReportNameAndNumber()
	GetReportNameAndNumber = ""
End Function

Function GetReport()
	GetReport = GetReportNameAndNumber() & GetPageTitleFor( GetPageTitle() & " " & GetTitleEx(), GetPageParams() )
	If strErrMsg <> "" Then
		GetReport = GetReport & Getwarning(strErrMsg)
	Else
		GetReport = GetReport & GetReportTable()
	End If
	GetReport = GetReport & GetPageVer()
End Function

Function WriteReport()
	rw GetReportNameAndNumber() & GetPageTitleFor( GetPageTitle() & " " & GetTitleEx(), GetPageParams() )
	If strErrMsg <> "" Then
		rw Getwarning(strErrMsg)
	Else
		rw GetReportTable()
		rw WriteEpilog()
	End If
	rw GetPageVer()
End Function

Function WriteEpilog()
End Function

Function onLoad()
	If bSendReport Then onLoad="JavaScript:SendReport();"
End Function

Sub specialRead()
End Sub

Sub specialMain()
End Sub

Sub InitEmFilters()
' перекрывается в ReportService_inc
End Sub

Sub ReadState()
	bSendReport = CBool(GetSafeStr(Request("RP"), 3, "") = ", R")
	Call InitEmFilters()
	specialRead
End Sub

Sub ReadDateRange()
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
End Sub

Sub ReadSingleDate()
	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
End Sub

Sub Main()
	bOk = True
	strErrMsg = ""
	specialMain
	If bSendReport Then
		strReport = GetReport()
		obTokenMgr.SetData strToken, stMsgReport, strReport
	End If
End Sub

Sub SendReportScript( theNA )
	If bSendReport Then%>
<SCRIPT>
<!--
function SendReport()
{
	var wnd = window.opener;
	if (wnd){
		var form = wnd.document.forms['Reports'];
		if(form){
			form.elements['A'].value = 'T';
			form.elements['TA'].value = 'H';
			form.elements['NA'].value = '<%=theNA%>' + ' (' + language.Generic.Reports.kOn + ' <%=Date2Java(NSNow)%>)';
			form.elements.RT.value = 'R';
			form.elements.RP.value = 'R';
			var oldAction = form.action;
			form.action = '/asp/Messages/composemessage.asp';
			form.target = '_report';
			form.submit();
			form.action = oldAction; form.target = '_self';

}	}	}
//-->
</SCRIPT><%
	End If
End Sub

Sub onDrawPage()
	If bSendReport Then
		Response.Write "<h3 align=""center"">"& obLanguage("Reports","kReportToSend") &"</h3>"
	Else
		WriteReport
	End If
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print"">"
End Function

Function DrawEmptyCells(ByRef nCell, ByVal nLimit, ByVal strChar)
	Dim str
	str = ""
	While nCell <= nLimit
		str = str & "<td>" & strChar & "</td>"
		nCell = nCell + 1
	Wend
	
	DrawEmptyCells = str
End Function

%>

