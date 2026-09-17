<!-- #INCLUDE File="FormFilter_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub DrawFilters( strForm )
	SpecialFilters strForm
End Sub

Sub DrawLinkButtons()
	If bExit Then Exit Sub
	ButtonExportCommon "openExcel('xls')", obLanguage("Common","kBtnExcel")
	ButtonExportCommonEx "openExcel('aggregate')", obLanguage("Reports","kExportAggregatedForm"), obLanguage("Reports","kExportAggregatedForm")
	ButtonExportCommonEx "openExcel('morf')", obLanguage("Reports","kExportMorf"), obLanguage("Reports","kExportMorf")
End Sub

Sub onDrawPage()
	%><form name="Reports" method="POST" action="?" <%If isIE Then %> target="_blank" <%End if%> >
	<%=WriteObligatoryTags()%>
	<%onHeadReport%>
	<%Call DrawButtonsFilters( True, "Reports" )
	%></form>
<%
End Sub

Function GetFiltersPanelWidth
	If IsEmpty(strFilterPanelWidth) Then 
		GetFiltersPanelWidth = kDefFilterPanelWidth
	Else
		GetFiltersPanelWidth = strFilterPanelWidth
	End If
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports","kReport") & ": " & GreenText(obLanguage("EMReportNames","kReportExportStatForms"))
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatReports 
End Function

Sub onHeadReport()
%>
<script>
<!--
var mnsForms = new Array();

<%Dim i
For i=0 To Ubound(arrMNSStatForms)%>
	mnsForms.push(<%=arrMNSStatForms(i)%>);
<%Next%>

function openExcel(exType)
{
	var mnsLabel = document.getElementsByName('MNS');

	var form = document.forms['Reports'];
	var formExport = document.forms['ExportForm'];
	var filterEmID=GetLocalEmId(<%=strEMID%>);
	var yearId = $(':input[name=CMNYEAR]', form).val();
	var statFormId = $(':input[name=STATFORM]', form).val();
	var subEmId = $(':input[name=SUBEMID]', form).val();
	var isMNSValue = 0;
	if(mnsLabel && mnsLabel.checked) isMNSValue = 1;
	
	postTo("OSHExport.asp", {CMNYEAR : yearId, STATFORM: statFormId, SUBEMID: subEmId, expType: exType, FilterEMID : filterEmID, MNS : isMNSValue}, {download: true});
}

function changeSelectedElement()
{
	var mnsRow = $('#MNSCheckBox');
	var mnsFlag = document.getElementsByName('MNS');
	var _expMorfButton = $('button:contains("Экспорт в МОРФ")');
	var statFormId = parseInt($("select[name='STATFORM'] option:selected").val());

	if(mnsRow.length == 0)
		return;

	if(mnsForms.indexOf(statFormId) >= 0)
	{
		mnsRow.show();
	}
	else
	{
		mnsRow.hide();
		mnsFlag.checked = false;
	}

	if(!_expMorfButton.is(':visible'))
	{
		_expMorfButton.show();
	}
}
function changeChecked()
{
	var mnsFlag = document.getElementsByName('MNS');
	var _expMorfButton = $('button:contains("Экспорт в МОРФ")');

	if(mnsFlag.checked)
	{
		_expMorfButton.hide();
	}
	else
	{
		_expMorfButton.show();
	}
}

function ReturnBack(){
	DoSubmit(document.forms.Reports, '/asp/educ_manager/Reports/StatForms/StatForms.asp');
}

//-->
</script><%
End Sub
%>
