<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/ReportConstructor_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FiltersCommon.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.


Const kFormName			= "ExportReport"
Const kBackScript		= "ReportConstructor.asp"

Dim strReportName
Dim objSchoolsRs, bNoSchools
Dim rsCities

Function GetPageTitle()
	GetPageTitle = obLanguage("Constructor","kTitleAccess") & ": " & GreenText( DB2HTML(strReportName) )
End Function

Sub ReadState()
	Dim objReportInfo

	strReportID = GetSafeID( Request("RPTID"), Null )
	Set objReportInfo = objNSNETWork.GetReportInfo(strReportID )
	If objReportInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strReportName = GetSafeStr( objReportInfo("DISPLAYNAME"), -1, "" )
End Sub
'Эта страница и таблица из БД должны быть удалены к моменту обновления репликации  -- Алексеев В
Sub Main()
	Dim objSchoolInfo
	If bIsEducManager Then		
		Set objSchoolsRs = objNSNETWork.GetEMSchoolsPermitedToReport(strEMID, "0", strReportID )
	Else
		Set objSchoolInfo = objNSNETWork.GetSchoolInfo(strSchoolID )
		If objSchoolInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		Set objSchoolsRs = objNSNETWork.GetEMSchoolsPermitedToReport(GetSafeID(objSchoolInfo("CITYID"), Null), strSchoolID, strReportID )
	End If
	bNoSchools = objSchoolsRs.EOF
End Sub

Sub onHeadSpecial()
%><script><!--
function ReturnBack() 
{ ok('<%=kFormName%>', '<%=kBackScript%>'); }

function ReportExport()
{ ok_check_db('<%=kFormName%>', 'SetReportAccess.asp'); }
//-->
</script><%
End Sub

Sub DrawButtons()
	Response.Write ShowButton("Cancel", "Cancel", "JavaScript:ReturnBack()", obLanguage("Constructor","kBtnReturn"), obLanguage("Constructor","kBtnReturn")) & "<br>"
	If Not bNoSchools Then
		ButtonSave "ReportExport()", obLanguage("Common","kSave")
	End If
End Sub

Sub DrawFilters(strForm)
	Dim strSID, bCheck	
	If bNoSchools Then%>
		<tr><td valign="top" class="SmallHeader"><%=obLanguage("Constructor","kEmptySchools")%></td></tr><%
	Else%>
		<tr><td valign="top" class="SmallHeader"><%=obLanguage("Constructor","kSelectSchools")%></td></tr><%
		While Not objSchoolsRs.EOF
			strSID = GetSafeID(objSchoolsRs("SCHOOLID"), Null) ' SchoolID
			bCheck = Not IsDull(objSchoolsRs("REPORTID"))%>
			<tr><td valign="top">&nbsp;&nbsp;
			<input type="checkbox" name="SID" value="<%=strSID%>" OnClick="dataChanged()" <%=IIF(bCheck, " checked", "")%>>
			&nbsp;&nbsp;<%=DB2HTML(objSchoolsRs("SCHOOLNAME"))%>
			</td></tr><%
			objSchoolsRs.MoveNext
		Wend
	End If
End Sub

Sub OnDrawPage()
%>	<form name="<%=kFormName%>" method="post" action="">
	<%=WriteObligatoryTags()%>
	<input type="hidden" name="RPTID" value="<%=strReportID%>"><%
	Call DrawButtonsFilters(True, False, False, kFormName)
	%></form><%
End Sub
%>
