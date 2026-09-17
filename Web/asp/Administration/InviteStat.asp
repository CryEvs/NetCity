<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateInput.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="InviteStat_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Const kFindUser = "Поиск пользовтеля"

Function hasUserRightsOnPage()
	hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kUserStatistics") & " в " &" <i>" & GreenText(strSchoolName) & "</i><br>"
End Function

Function GetPageTabItem()
	GetPageTabItem = tbInviteStat
End Function

Function GetPageMenuItem()
	GetPageMenuItem = miManagementUsers
End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stStartDate, dtStartDate)
	Call obTokenMgr.SetData(strToken, stEndDate, dtEndDate)
	Call obTokenMgr.SetData(strToken, "ViewSchoolID", strViewSchoolID)
	Call obTokenMgr.SetData(strToken, "StatUserType", nUserType)
	Call obTokenMgr.SetData(strToken, "StatViewType", nViewType)
End Sub

Sub onHeadSpecial()
	bIsCheckDates = True
	shortReportName = GetShortReportName()
	printPostFix="Print"
	Call DrawCommonScripts()
	Call scriptCalendar( "StatForm", dtMinDate, dtMaxDate )
End Sub

Sub DrawButtons()
	'ButtonCancel "goBack( document.StatForm, 'usermon.asp');", obLanguage("Common","kBack")
	Response.Write "<br>" & ShowButton("refresh","refresh","JavaScript:ok('StatForm','')", obLanguage("Buttons","kRefresh"), obLanguage("Buttons","kRefresh"))
	If Not objStat.EOF Then Call DrawPrintButtons()
End Sub

Sub DrawFilters( strForm ) %>
	<tr><th align="left" VALIGN="TOP" CLASS="body"><%=obLanguage("ServAdmin","kTimePeriod")%>:</th><td><%
	Response.Write obLanguage("ServAdmin","kTimeFrom") & " " & ShowDateInput( "ADT", Date2Java(dtStartDate), obLanguage("Common","kCalendar") )
	Response.Write " " & obLanguage("ServAdmin","kTimeTo") & " " & ShowDateInput( "DDT", Date2Java(dtEndDate), obLanguage("Common","kCalendar") )
	%></td></tr>
	
	<tr><th align="left"><%=obLanguage("Common","kView")%>:&nbsp;</th>
		<td class="select"><select NAME="ViewType" onChange="ok('<%=strForm%>','')">
		<%If CLng(strViewSchoolID) > 0 Then  %>
			<option value="<%=kTypeTime%>"<%If nViewType = kTypeTime Then%> selected<%End If%>><%=obLanguage("Common","kByTime")%></option>
			<option value="<%=kTypeUser%>"<%If nViewType = kTypeUser Then%> selected<%End If%>><%=obLanguage("Common","kByUsers")%></option>
			<option value="<%=kTypeClass%>"<%If nViewType = kTypeClass Then%> selected<%End If%>><%=obLanguage("Common","kByClass")%></option>
		<%End if%>
		</select></td>
	</tr><%

	If nViewType = kTypeTime Then %>
	<tr><th align="left"><%=obLanguage("ServAdmin","kUserCategory")%>:&nbsp;</th>
		<td class="select"><select NAME="UserType" onChange="ok('<%=strForm%>','')">
		<option value="<%=kTypeAll%>"<%If nUserType = kTypeAll Then%> selected<%End If%>><%=obLanguage("Common","kAll")%></option>
		<%If CLng(strViewSchoolID) <> -2 Then  %>
			<option value="<%=kTypeStaff%>"<%If nUserType = kTypeStaff Then%> selected<%End If%>><%=obLanguage("Common","kStaff")%></option>
			<option value="<%=kTypeStudent%>"<%If nUserType = kTypeStudent Then%> selected<%End If%>><%=obLanguage("Common","Ученик",strFunctionalityType)%></option>
			<option value="<%=kTypeParent%>"<%If nUserType = kTypeParent Then%> selected<%End If%>><%=obLanguage("Common","kParent")%></option>
		<%End if%>
		</select></td>
	</tr><%
	End If

	If nViewType = kTypeUser Then %>
	<tr><th align="left"><%=obLanguage("Common","kUser")%>:&nbsp;</th>
		<td>
			<% =ShowButton("import2", "import2", "JavaScript:FindUsers()", kFindUser, kFindUSer) %>
		</td>
	</tr><%
	End If
End Sub

Sub onDrawPage() %>
	<FORM NAME="StatForm" ACTION="InviteStat.asp" METHOD="POST">
	<%=WriteObligatoryTags()%><%
	Call DrawButtonsFilters( True, "StatForm" )
	%></FORM><%
	Call DrawTable()
	Response.Write "<br>"
	Call DrawExcelForm()
End Sub%>
