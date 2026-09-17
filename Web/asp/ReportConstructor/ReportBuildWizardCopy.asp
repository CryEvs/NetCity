<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName			= "CopyReport"
Const kBackScript		= "ReportConstructor.asp"

Dim strReportName

Function GetPageTitle()
	GetPageTitle = GreenText( obLanguage("Constructor","kTitleCopy") )
End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub ReadState()
	Dim objReportInfo

	strReportID = GetSafeID( Request("RPTID"), Null )
	Set objReportInfo = objNSNETWork.GetReportInfo(strReportID )
	If objReportInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strReportName = GetSafeStr( objReportInfo("DISPLAYNAME"), -1, "" )
	strReportName = obLanguage("Constructor","kPreCopyReportTitle") & ": " & strReportName
End Sub

Sub onHeadSpecial()
%><script><!--
function ReturnBack()
{ ok('<%=kFormName%>', '<%=kBackScript%>'); }

function ReportCopy()
{
	if ( document.forms['<%=kFormName%>'].elements['RPTNAME'].value != '' ){ ok_check_db('<%=kFormName%>', 'CopyReport.asp'); }
	else alert(language.Generic.Constructor.kEnterReportName);
}
function CheckEnter(event){if (event.keyCode == 13) ReportCopy();}
//-->
</script><%
End Sub

Sub DrawButtons()
	Call ButtonSave("ReportCopy()", obLanguage("Constructor","kBtnCopyReport"))
End Sub

Sub OnDrawPage()
%>	<form name="<%=kFormName%>" method="post" class="form form-horizontal form-edit" target="_parent" onsubmit="return false;">
	<%=WriteObligatoryTags()%>
	<input type="hidden" name="RPTID" value="<%=strReportID%>"><%
	Call DrawButtonPanel()
	Call DrawInputRow(obLanguage("Constructor","kReportName") & ":", strReportName, "RPTNAME", "text", 90, 100, "")
	%></form><%
End Sub
%>
