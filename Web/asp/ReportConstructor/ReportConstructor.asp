<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->
<!-- #INCLUDE FILE="ReportGroups_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kCommonState		= "C"
Const kAllState			= "A"

Const kFormName			= "ReportConstructorViewer"
Const kFileFormName		= "ReportXMLLoader"

Dim strReportsFilterState, objReportsRs
Dim strReportType
Dim strGroupID, objRepGroups

Function GetPageTitle()
	GetPageTitle = obLanguage("Constructor","kTitleReportConstructor")
End Function

Sub ReadState()
	bTabInternalPage = False
	If bIsEducManager Then
		strReportType = GetSafeStr( Request("REPTYPE"),1,GetSafeStr(obTokenMgr.GetData(strToken, stConstrReportType),1 ,"A") )
	Else
		strReportType = "S"
	End If
	strReportsFilterState = GetSafeStr( Request("REPFLT"),1,GetSafeStr(obTokenMgr.GetData(strToken, stReportsFilterState),1 ,"A") )
	If (CLng(Request("STI")) = 1) Then obTokenMgr.SetData strToken, "ImportReportFile", Empty
End Sub

Sub WriteState()
	obTokenMgr.SetData strToken, stReportsFilterState, strReportsFilterState
	If bIsEducManager Then obTokenMgr.SetData strToken, stConstrReportType, strReportType
End Sub

Sub Main()
	Call InitReportGroups()
	Set objReportsRs = GetConstructedReportsList(strReportsFilterState, strReportType, strGroupID)
	bNoReport = objReportsRs.EOF
End Sub

Sub onHeadSpecial()
%><script><!--
	function onSelectChange( sForm, sScript )
	{ ok( sForm, sScript ); }

	function CreateReport()
	{	document.forms['<%=kFormName%>'].elements.NEW.value = 'Y';
		ok( '<%=kFormName%>', 'ReportBuildWizardStep1.asp' ); }

	function CopyReport()
	{ ok('<%=kFormName%>', 'ReportBuildWizardCopy.asp'); }

	function EditReport()
	{ ok('<%=kFormName%>', 'EditReport.asp'); }

	function DeleteReport()
	{	if( isDBBusy() ) return false;
		$.show.confirmation(language.Generic.Constructor.kConfirmDelReport).then(function(){
			setDBBusy();
			ok('<%=kFormName%>', 'DeleteReport.asp');
		});
	}
	function ReportGroups()
	{ ok('<%=kFormName%>', 'ReportGroups.asp'); }

	function ReportExportXML() {
		var reportIds = [];
		$("input[name=RPTID]:checked").each(function(){reportIds.push($(this).val());});
		if (reportIds.length == 0)
		{
			alert(language.Generic.Constructor.kNeedMoreReportsForExport);
			return false;
		}
		postTo({path: "/webapi/reportdesigner/export", formParams: {method: "GET"}, params: { reportId: reportIds }});
	}

	function removeEvent(obj, type, fn) {
		if(obj.removeEventListener) {
			obj.removeEventListener(type, fn, false);
		}
		else if(obj.detachEvent) {
			obj.detachEvent("on" + type,obj[type+fn]);
			obj[type+fn] = null;
			obj["e"+type+fn] = null;
		}
	}

	function ReportImportXML() {
		$.show.fileDialog({
			title: language.Generic.Constructor.kButtonImportName,
			fileExts: ['.json', '.nsr'],
			additionalContent: '<input id="grIDFile" type="hidden" name="GroupID" />',
			invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFile + 'json или nsr',
			url: '/asp/ReportConstructor/ReportImportXML.asp',
			onShownDlg: function() {
				$('#grIDFile').val($('#grID').val() == null ? '-1' : $('#grID').val());
			}
		});
	}

	function BeginExport() {
		var $inputs = $("input[name=RPTID][type=radio]");
		var selIndex = $("input[name=RPTID]:checked").eq(0).val();
		var _checkFirst = function()
		{
			$("input[name=RPTID]").parent().css('textAlign', 'center')
				.end().each(function()
					{
						var $self = $(this);

						if ($self.val() == selIndex)
						{
							if($self.attr('type') == 'radio' || ($self.attr('type') == 'checkbox' && $self.hasClass("published")))
								$self.prop('checked', true);
						}
					}
				);
			if ($("input[name=RPTID][type=radio]:checked").length == 0)
				$("input[name=RPTID][type=radio]").eq(0).prop('checked', true);
		}
		$inputs.off();
		if ($inputs.length > 0)
		{
			$inputs.each(function(){
				var name = $(this).attr('name');
				var value = $(this).attr('value');
				var html;
				if($(this).hasClass("published"))
				{
					html = '<input type="checkbox" class="published" name="'+name+'" value="'+value+'"/>';
				}
				else html = '<input type="checkbox" name="'+name+'" value="'+value+'"/>';
				$(this).after(html).remove();
			});

			var $changedInputs =
				$("input[name=RPTID]")
						.not(".published")
							.prop("disabled", true).end()
						.filter(".published");

			_checkFirst();
			$("#export-button").addClass("hidden");
			$("#export-actions-buttons").removeClass("hidden");

			$("#tCorner").html("<input type='checkbox' id='allChecker' onclick=\"$(\'input[name=RPTID].published\').prop('checked', $(this).is(':checked'));\" />");
			$("#allChecker").prop('checked', false);
			$changedInputs.on("change", function() {
					if ($("input[name=RPTID].published:checked").length != $changedInputs.length)
					{
						$("#allChecker").prop('checked', false);
					}
					else $("#allChecker").prop('checked', true);
				}
			);
		}
		else
		{
			$('#BeginExport').parent().find('a').show();
			$("#export-button").removeClass("hidden");
			$("#export-actions-buttons").addClass("hidden");

			$inputs = $("input[name=RPTID][type=checkbox]");
			$inputs.each(function(){
				var name = $(this).attr('name');
				var value = $(this).attr('value');
				var html;
				if($(this).hasClass("published"))
				{
					html = '<input type="radio" class="published" name="'+name+'" value="'+value+'" />';
				}
				else html = '<input type="radio" name="'+name+'" value="'+value+'" />';
				$(this).after(html).remove();
			});

			_checkFirst();

			$("#tCorner").html("&nbsp;");
		}
	}
//-->
</script><%
End Sub

Sub DrawButtons()
	Dim bExport
	bExport = False

	ButtonCreate "CreateReport()", obLanguage("Constructor","kBtnCreateReport")
	If Not bNoReport Then
		ButtonCopy "CopyReport()", obLanguage("Constructor","kBtnCopyReport")
		If Not strReportsFilterState = kCommonState Then
			ButtonEdit "EditReport()", obLanguage("Constructor","kBtnEditReport")
			ButtonDel "DeleteReport()", obLanguage("Constructor","kBtnDeleteReport")
		End If
	End If

	If obConfig.StaticInstance.DbConfiguration.ServerType = DbConnectionServerType_MSSqlServer Then
		If strReportsFilterState = kAllState And Not bNoReport Then
			%><div id="export-button" class="display-inline"><%
			ButtonExportCommon "BeginExport()", obLanguage("Constructor","kButtonTooltipExport")
			%></div><%
			%><div id="export-actions-buttons" class="display-inline hidden"><%
			Button "ReportExportXML()", obLanguage("Constructor","kTooltipBeginExport"), obLanguage("Constructor","kTooltipBeginExport"), "glyphicon glyphicon-export"
			Button "BeginExport()", obLanguage("Constructor","kTooltipCancelExport"), obLanguage("Constructor","kTooltipCancelExport"), "glyphicon glyphicon-remove"
			%></div><%
		End If
	End If
End Sub

Sub DrawLinkButtons
	If Not strReportsFilterState = kCommonState And Application("MSSQL") = "1" Then 
		ButtonImport "ReportImportXML()", obLanguage("Constructor","kButtonImportName")
	End If
	Button "ReportGroups()", obLanguage("Constructor","kReportGroups"), obLanguage("Constructor","kReportGroups"), "glyphicon glyphicon-th-list"
End Sub

Sub DrawFilters(strForm)
	OpenFormGroup obLanguage("Constructor","kViewReports")
	%>
		<select name="REPFLT" class="form-control" onChange="onSelectChange('<%=strForm%>', '<%=strScriptName%>')">
			<option value="C"<%If strReportsFilterState="C" Then Response.Write " selected"%>><%=obLanguage("Constructor","kPreInstalled")%></option>
			<option value="A"<%If strReportsFilterState="A" Then Response.Write " selected"%>><%=obLanguage("Constructor","kAllInternal")%></option>
		</select>
	<%
	CloseFormGroup

	If bIsEducManager Then
		OpenFormGroup obLanguage("Constructor","kReportType")
		%>
				<select name="REPTYPE" class="form-control"  onChange="onSelectChange('<%=strForm%>', '<%=strScriptName%>')">
					<option value="A"<%If strReportType="A" Then Response.Write " selected"%>><%=obLanguage("Constructor","kSystemReport")%></option>
					<option value="R"<%If strReportType="R" Then Response.Write " selected"%>><%=obLanguage("Constructor","kAdminReport")%></option>
					<%If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then%>
					<option value="S"<%If strReportType="S" Then Response.Write " selected"%>><%=obLanguage("Constructor","kSchoolReport",strFunctionalityType)%></option>
					<%End If%>
				</select>
		<%
		CloseFormGroup
	End If

	If strReportsFilterState <> kCommonState Then
		OpenFormGroup obLanguage("Constructor","kReportGroups")
			%>
				<select id="grID" class="form-control"  name="GroupID" onChange="OnChangeSelect('<%=kFormName%>','<%=strScriptName%>');">
					<option Value="-1" <%=IIf(strGroupID = "-1", "selected", "")%>><%=DB2HTML(obLanguage("Constructor","kAllReports"))%></option>
					<option Value="0" <%=IIf(strGroupID = "0", "selected", "")%>><%=DB2HTML(obLanguage("Constructor","kNoReportGroup"))%></option><%
					PopulateSelect objRepGroups, "GROUPID", "GROUPNAME", strGroupID%>
				</select>
			<%
		CloseFormGroup
	End If
End Sub

Sub onDrawPage()
	Dim bFirst%>

	<form NAME="<%=kFormName%>" class="form-horizontal" METHOD="POST" TARGET="_parent">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("NEW","", "BACK", strScriptName))%><%
		Call DrawButtonsFilters(True, False, False, kFormName)
		If bNoReport Then
			DrawInfo obLanguage("Constructor","kNoAdditionalReports"), False
		Else
			%>
			<table class="table table-striped table-hover">
				<tr><th><span id="tCorner">&nbsp;</span></th><th><%=obLanguage("Constructor","kReportName")%></th><%DrawTableTitle%></tr><%
				bFirst = True
				While Not objReportsRs.EOF
					strReportID = GetSafeID(objReportsRs("REPORTID"), Null)
					%><tr><td>
					<input class="<%If objReportsRs("ISPUBLISHED")="Y" Then%>published<%End If%>" type="radio" name="RPTID" value="<%=strReportID%>"
						<%
						If bFirst Then%>
							checked="checked"<%
							bFirst = False
						End If%>
						/></td>
					<td><%=DB2HTML(objReportsRs("DISPLAYNAME"))%>
						<%DrawReportInfo%>
					</td></tr><%
					objReportsRs.MoveNext
				Wend%>
			</table>
			<%
		End If%>
		
	</form><%
End Sub

Sub DrawTableTitle()
	Select Case strReportsFilterState
		Case kAllState Response.Write "<th>" & obLanguage("Constructor","kArePublishedAbbr") & "</th><th>" & obLanguage("Constructor","kNotFinishedAbbr") & "</th><th>" & obLanguage("Constructor","kEditableAbbr") & "</th>"
	End Select
End Sub

Sub DrawReportInfo()
	Select Case strReportsFilterState
		Case kAllState
			If objReportsRs("ISPUBLISHED")="Y" Then%><td style="text-align: center"><b>X</b></td><%Else%><td>&nbsp;</td><%End If
			If objReportsRs("BUILDSTATUS") < 9 Then%><td style="text-align: center"><b>X</b></td><%Else%><td>&nbsp;</td><%End If
			If objReportsRs("INEDIT") = "Y" Then%><td style="text-align: center"><b>X</b></td><%Else%><td>&nbsp;</td><%End If
	End Select
End Sub

Function GetConstructedReportsList(strState, strType, strRepGroupID)
	Dim strSQL, strID

	strID = CLng(IIf(bIsEducManager, strEMID, strSchoolID))
	strSQL = ""

	Select Case strState
		Case kCommonState : strID = Null
		Case kAllState : strSQL = ""
	End Select

	Set GetConstructedReportsList = objNSNETWork.GetConstructedReportList(strType, bIsEducManager, strID, strSQL, strRepGroupID )
End Function

Sub InitReportGroups()
	Dim bFound

	strGroupID = GetSafeID(Request("GroupID"), GetSafeID(obTokenMgr.GetData(strToken, stReportGroupID), "-1"))
	If strReportsFilterState = kCommonState Then
		strGroupID = "-1"
		Call obTokenMgr.SetData(strToken, stReportGroupID, strGroupID)
		Exit Sub
	End If

	Set objRepGroups = GetReportGroups()

	If strGroupID <> "-1" And strGroupID <> "0" Then
		bFound = False
		If Not objRepGroups.EOF Then
			Do While Not objRepGroups.EOF
				If strGroupID = GetSafeID(objRepGroups("GROUPID"), Null) Then
					bFound = True
					Exit Do
				End If
				objRepGroups.MoveNext
			Loop
			objRepGroups.MoveFirst
		End If

		If Not bFound Then
			strGroupID = "-1"
		End If
	End If

	Call obTokenMgr.SetData(strToken, stReportGroupID, strGroupID)
End Sub%>