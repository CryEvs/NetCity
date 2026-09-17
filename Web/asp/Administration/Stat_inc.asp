<!-- #INCLUDE FILE="sa_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="DatePeriod_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stStartDate, dtStartDate)
	Call obTokenMgr.SetData(strToken, stEndDate, dtEndDate)
	Call obTokenMgr.SetData(strToken, "ViewSchoolID", nViewSchoolID)
End Sub

Sub onHeadSpecial()
	bIsCheckDates = True
	shortReportName = GetShortReportName()
	printPostFix="Print"
	Call DrawCommonScripts()
	Call scriptCalendar( "StatForm", dtMinDate, dtMaxDate )
	%>
	<script><!--
	function Back(){
		goBack(document.StatForm, '/angular/admin/stats/usermon/');
	}
	//--></script>
	<%
End Sub

Sub DrawLinkButtons
	ButtonRefresh "ok('StatForm','')", obLanguage("ServAdmin","kRefresh")
	If Not objStat.EOF Then 
		ButtonPrintCommon "showPrintVersion()", obLanguage("Buttons","kPrint")
		ButtonExport "exportToExcel()"
	End If
End Sub

Sub specialFilters( strForm )
End Sub

Sub DrawSchoolsFilter( strForm ) 
	OpenFormGroup obLanguage("Common","kEO")
%>	<select class="form-control" name="SCHOOL" onChange="dataChanged();"><%
		If objSchoolRS.RecordCount > 1 Then%>
			<option value="-3"<%If nViewSchoolID=-3 Then%> selected<%End If%>><%=obLanguage("Common","kAll")%></option>
		<%End If
		PopulateSelect objSchoolRS, "SCHOOLID", "SCHOOLNAME", nViewSchoolID%>
		<option value="-1"<%If nViewSchoolID=-1 Then%> selected<%End If%>><%=obLanguage("ServAdmin","kSAName")%></option>
		<option VALUE="-2"<%If nViewSchoolID=-2 Then%> selected<%End If%>><%=obLanguage("Common","kEMName")%></option>
	</select>
	<%
	CloseFormGroup
End Sub

Sub DrawFilters( strForm )
	Call SetFiltersWidth (empty, "col-md-5 col-lg-4", "col-md-7 col-lg-5")
	DrawSchoolsFilter( strForm )
	DrawDateIntervalRowEx obLanguage("ServAdmin","kTimePeriod"),  "ADT", dtStartDate, "DDT", dtEndDate
	specialFilters( strForm )
End Sub

Sub onDrawPage()
 %>
	<FORM NAME="StatForm" ACTION="<%=strScriptName%>" METHOD="POST">
	<%=WriteObligatoryTags()%><%
	Call DrawButtonsFilters( True, "StatForm" )
	%></FORM><%
	Call DrawTable()
	Response.Write "<br>"
	Call DrawExcelForm()
End Sub%>
