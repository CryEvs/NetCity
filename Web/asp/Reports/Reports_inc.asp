<% ' © 2007-2015 IRTech. All rights reserved.

Dim strReportID, strThemeID, strReportName, bNoCorrectScale, bHasGraph 
Dim	bDrawButtonGenerate, bDrawReportButtonPanel, bDrawButtonExportBigRep, bDrawButtonPdf
Dim blnMailConfirm, bIsHeavyReport, bFavoriteReport, bShowFavoriteReport

Function GetPageTitle()
	GetPageTitle = GreenText(GetReportName())
End Function

Function GetReportName()
	GetReportName = strReportName
	'GetNames
	'GetReportName = arrReportsNames(CLng(strThemeID), CLng(strReportID))
End Function

Sub ReadState()
	Call Init()
	
	strReportName = CStr(GetSafe("RPNAME", Null))
	strReportId = CStr(GetSafe("RPTID", Null))
	'strThemeID = CStr(GetSafe("ThmID", Null))
	
	blnMailConfirm = (GetSafeLng(obTokenMgr.GetData(strToken, stMailHasBeenSent), 0) = 1)
	bShowFavoriteReport = Not (HasUserRole(rlStudent) or HasUserRole(rlParent))
	If bShowFavoriteReport Then
		bFavoriteReport = IsFavoriteReport()
	End If

	specialRead
End Sub

Function in_array(element, arr)
	dim i
	in_array = False
	For i=0 To Ubound(arr)
		If Trim(arr(i)) = Trim(element) Then
		in_array = True
		Exit Function
		End If
	Next
End Function

Function IsFavoriteReport()
	Dim objReportsComponent
	Set objReportsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	IsFavoriteReport = objReportsComponent.IsFavoriteReport(strReportId)
End Function

Sub SpecialInit()
End Sub

Sub Init()
	bIsHeavyReport = false
	bIsCheckDates = false

	bNoCorrectScale = False
	bDrawButtonGenerate = True
	bHasGraph = False
	bDrawReportButtonPanel = True
	bDrawButtonExportBigRep = False
	Call SpecialInit()
End Sub

Function onUnload()
	onUnload = specialUnload()
End Function

'Парсит строку полученую как правило из Request("SCRIPT_NAME") до названия отчета без части Report и расширения файла
Function GetShortReportName()
	Dim strUrl
	Dim pointIndex
	strUrl = GetSafeStrParam(Request("SCRIPT_NAME"),Null)
	pointIndex = InStrRev(strUrl,"/")+1
	strUrl = Mid(strUrl,pointIndex)
	pointIndex = InStrRev(strUrl,".")-1
	strUrl = Left(strUrl,pointIndex)
	If Instr(strUrl, "Report")=1 Then strUrl = Mid(strUrl,Len("Report")+1)

	GetShortReportName = strUrl
End Function

Function GetReportFavoriteId()
	Dim strUrl
	Dim pointIndex
	strUrl = GetSafeStrParam(Request("SCRIPT_NAME"),Null)
	pointIndex = InStrRev(strUrl,"/")+1
	strUrl = Mid(strUrl,pointIndex)
	pointIndex = InStrRev(strUrl,".")-1
	strUrl = Left(strUrl,pointIndex)
	If Instr(strUrl, "Report")=1 Then strUrl = Mid(strUrl,Len("Report")+1)

	GetShortReportName = strUrl
End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stMailHasBeenSent, null)
	specialWrite
End Sub

Function OnLoad()
	If blnMailConfirm Then OnLoad = "ShowMailConfirm()"
End Function

Sub onHead( )
	%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/reports.min.js")%>" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/>

	<script><!--

	$(document).ready(function(){
		report.setOptions({title: "<%=(DB2Java(GetReportName()))%>", isHeavyReport: <%=Bool2Js(bIsHeavyReport)%>});
		$(document).on("click", ".generate-report-button", function() { 
			report.generate();
		});
	});

	function Back() {
		DoSubmit(document.forms.Reports, '/angular/em/reports/');
	};

	// переопределяется, чтобы в отчетах при изменении фильтров не выводилось сообщение об изменениях при переходе на другой экран
	function dataChanged() {
		dataWereChanged = false;
	};
	//-->
	</script>
	<%
	
	specialHead

	If bNoCorrectScale Or bIsCheckDates Then %>
		<script>
			$(document).ready(function(){
				<%If bIsCheckDates Then %>
				report.addPreAction(checkDates)
				<%End If %>
				<%If bNoCorrectScale Then %>
				report.setOptions({noCorrectScale: true});
				<%End If %>
			});
		</script><%
	End If
End Sub

Sub specialHead
End Sub

Sub specialFilters( strForm )
End Sub

Sub DrawFilters( strForm )
	specialFilters strForm
End Sub

Sub DrawViewType()
	Dim nHidePrevPeriod, nOrLessViewType, nViewType, i

	nHidePrevPeriod = GetSafeLng(Request("HidePrevPeriod"), GetSafeLng(obTokenMgr.GetData(strToken, "HidePrevPeriod"), 0))
	Call obTokenMgr.SetData(strToken, "HidePrevPeriod", nHidePrevPeriod)
	nViewType = GetSafeLng(Request("ViewType"), GetSafeLng(obTokenMgr.GetData(strToken, "ViewType"), 0))
	Call obTokenMgr.SetData(strToken, "ViewType", nViewType)
	nOrLessViewType = GetSafeLng(Request("OrLessViewType"), GetSafeLng(obTokenMgr.GetData(strToken, "OrLessViewType"), 0))
	Call obTokenMgr.SetData(strToken, "OrLessViewType", nOrLessViewType)

	If strTermID <> kReportYearTermType And strTermID <> kReportTotalTermType Then
		Call DrawSimpleFilterRow(obLanguage("Reports", "kPreviousPeriod"), "HidePrevPeriod", Array(0, obLanguage("Reports", "kShow"), 1, obLanguage("Reports", "kHide")), nHidePrevPeriod, False, ";")
	End If
	Call DrawSimpleFilterRow(obLanguage("Curriculum", "kViewReport"), "ViewType", Array(0, obLanguage("Reports", "kCommonType"), 1, obLanguage("Reports", "kExtended")), nViewType, False, "$('#OrLess').toggle();")
	Call DrawSimpleFilterRow(IIF(InStr(strScriptName, "PreClassCh"), obLanguage("Reports","OrLess"),obLanguage("Reports","kWithoutMark")), "OrLessViewType", Array(0, obLanguage("Reports", "kExtendedView"), 1, obLanguage("Reports", "kFoldedView")), nViewType, False, ";")
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12"
End Function

Function GetFiltersLabelWidth
	GetFiltersLabelWidth = "col-md-4"
End Function

Function GetFiltersWidth
	GetFiltersWidth = "col-md-8"
End Function

Sub onDrawPage()
	%>
	<div class="row">
		<div class="col-md-8">
			<form NAME="Reports" ACTION="<%=strScriptName%>" METHOD="POST">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("PP",strScriptName, "BACK",strScriptName, "ThmID", strThemeID, "RPTID", strReportId, "A", "", "NA", "", "TA", "", "RT", "", "RP", ""))%><%
			Call WriteMoreHiddenTags()
			Call DrawButtonsFilters(False, "Reports" )
			Call DrawReportComment()%>
			</form>
			<%
			Call specialDraw
			%>
		</div>
		<div class="col-md-4">
			<div class="buttons-panel no-actions">
				<div class="buttons-panel-right" style="display: block;">
					<%If bShowFavoriteReport Then
						Call ShowButtonBaseId( "report.delFavoriteReport()", obLanguage("Reports","kDelFromFavoriteReport"), "glyphicon glyphicon-star", obLanguage("Reports","kDelFromFavoriteReport"), "btn-warning", "delFavoriteReport", false, bFavoriteReport)
						Call ShowButtonBaseId( "report.addFavoriteReport()", obLanguage("Reports","kAddFromFavoriteReport"), "glyphicon glyphicon-star-empty", obLanguage("Reports","kAddFromFavoriteReport"), "btn-info", "addFavoriteReport",  false, Not bFavoriteReport)
					End If%>
				</div>
			</div>
		</div>
	</div>
	<hr />
	<div class="row">
		<div class="col-md-12">
			<%Call DrawReportButtonPanel%>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div id="report" class="hidden"></div>
		</div>
	</div>
	<%
End Sub

Sub SpecialDraw()
End Sub

Sub DrawReportButtons()
	ButtonPrintCommon "report.print()", obLanguage("Buttons","kPrint")
	Button "report.window()", obLanguage("Buttons","kInSeparateWindow"), obLanguage("Buttons","kInSeparateWindow"), "glyphicon glyphicon-fullscreen"
	%><div class="display-inline buttons-panel-export-send"><%
		ButtonExport "report.exportReport()"
		If bHasGraph Then
			Button "report.showGraph()", obLanguage("Buttons","kViewGraphReport"), obLanguage("Buttons","kViewGraphReport"), "glyphicon glyphicon-stats"
		End If
		If (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) And Not bIsEMForSchool Then
			If HasUserRight(arMessagesSendReceive) Then 
				If bIsStaff Then ButtonSend "report.send()", obLanguage("Buttons","kSend")
			End If
		End If
	%></div><%
End Sub

Sub DrawReportButtonPanel()
	If bExit Then Exit Sub
	%>
	<div class="buttons-panel" id="buttonPanel">
		<%If bDrawReportButtonPanel Then%>
			<div class="buttons-panel-left <%=IIF(bDrawButtonExportBigRep, "hidden", "") %>"><%
				If bDrawButtonGenerate Then
					ButtonGenerate "", obLanguage("Buttons", "kGenerate")
				End If
				If bDrawButtonPdf Then
					ButtonGeneratePdf "", obLanguage("Buttons", "kGenerate") & " PDF"
				End If
				ButtonGenerateAndSend "", "Отправить выбранным ученикам и родителям"
				%>
			</div>
		<%End If%>
		<div class="buttons-panel-right hidden" id="actionPanel">
			<%Call DrawReportButtons%>
		</div>
		<div class="buttons-panel-right <%=IIF(bDrawButtonExportBigRep, "", "hidden no-actions") %>" id="exportBigRep">
			<%ButtonExport "report.exportBigRep()"%>
		</div>
	</div>
	<%
End Sub

Sub ButtonGenerateAndSend( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, "Отправить выбранным ученикам и родителям", "glyphicon glyphicon-random", theHint, "generate-report-button-emaildelivery hide", False ) 
End Sub

Sub DrawStudentsList()
	Dim id, strSIDArray, strStudentFullName%>
	<table class="table"><%
	If HasUserRole(rlStudent) Then
		strSIDArray = "|" & strUserID & "|"
		Call DrawStudentButtonsScript( strUserID, objNSNET.GetUserNickName(strUserID) )
	ElseIf bIsStaff Then
		Call DrawSelectInfoRow(obLanguage("Common","kStudent",strFunctionalityType), Empty, "SID", rsStudents, "STUDENTID", "NICKNAME", Null, ";")
		strSIDArray = "|"
		While Not rsStudents.EOF
			id = rsStudents("STUDENTID")
			strSIDArray = strSIDArray & id & "|"
			rsStudents.MoveNext
		Wend
	Else
		strSIDArray = "|" & strStudentID & "|"
		Call DrawStudentButtonsScript( strStudentID, objNSNET.GetUserNickName(strStudentID) )
	End If%>
	</table><%
	Call obTokenMgr.SetData(strToken, stAvailableSID, strSIDArray)
End Sub

Sub DrawStudentButtonsScript( stud_ID, studName)
	%><tr>
		<td><%=DB2HTML(studName)%></td>
		<td>
			<%ButtonGenerate "report.generate({data: {SID: " & stud_ID & "}})", obLanguage("Buttons", "kGenerate")%>
		</td>
	</tr><%
End Sub

Sub WriteMoreHiddenTags( )
End Sub

Sub DrawReportComment( )
End Sub
%>
