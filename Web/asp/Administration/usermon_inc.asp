
<% ' © 2007-2015 IRTech. All rights reserved.

Dim arrTokens, arrUserInfo, objStaffRoles
Dim currSchoolId
Dim arrHeavySessions
Dim arrayActiveSessions

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Statistics
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Statistics
 End Function

Sub Main()
	SetScriptTimeOut 900
	Dim i, nCurrUserId
	Dim objSecurityComponent
	Dim activeSessionsList

	Call InitHeavySessions()
	
	Set objSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")

	Set activeSessionsList = objSecurityComponent.GetActiveSessions(strSchoolId)

	If Not (activeSessionsList Is Nothing) Then
		arrayActiveSessions = activeSessionsList.ToArray()
	End If
End Sub

Sub onHeadSpecial()
	%>
	<style>
		.removed *
		{
			color: grey;
			text-decoration: line-through;
		}
		.nowrap {
			white-space: nowrap;
		}
		.heavySession > td {
			background-color: pink !important;
		}
	</style>
	<script>
		function removeToken(token)
		{
			$.show.confirmation(language.Generic.ServAdmin.kConfirmRemoveUserSession)
				.then(function(){
					var row = $('#token_' + token);
					var on_success = function(response)
					{
						row.addClass('removed');
						row.find('button').remove();
					};
					jsSubmit({
						action: '/asp/scripts/ajaxmethods.asp',
						data: {method: "<%=kRemoveToken%>", token:token },
						showProcessing:true,
						onSuccess: on_success
					});
			});
		}
	</script>
	<%
End Sub

Sub DrawLinkButtons
	Call ButtonRefresh("DoSubmit(document.MenuForm, 'usermon.asp');", obLanguage("ServAdmin","kRefresh"))
	InlineButton "DoSubmit(document.MenuForm, 'userStat.asp');", obLanguage("ServAdmin","kUserStatistics"), ""
	InlineButton "DoSubmit(document.MenuForm, 'smsstat.asp');", obLanguage("ServAdmin","kSMSStatistics"), ""
	InlineButton "DoSubmit(document.MenuForm, 'errorstat.asp');", obLanguage("ServAdmin","kErrorStatistics"), ""
End Sub

Sub DrawUsermonTable()
		Dim i, n, bIsHeavySession, logTime
		n = 0

		If bIsAdminInterface Then
			DrawButtonPanel
		End If
		
		
		If Err.Number <> 0 Then
		Response.Write "<h2>" & obLanguage("ServAdmin","kCantGetUsersInfo") & "</h2>"
		Exit Sub
		End If
		%><table class="table table-bordered table-bright-striped table-bright-hover table-condensed">
				<thead> 
					<th>№</th>
					<th><%=obLanguage("Common","kEO")%></th>
					<th><%=obLanguage("Common","kEMName")%></th>
					<th><%=obLanguage("Common","kDisplayName")%></th>
					<th><%=obLanguage("Common","kUserName")%></th>
					<th><%=obLanguage("ServAdmin","kLoginTime")%></th>
					<th>ip</th>
					<th><%=obLanguage("Common","kRoles")%></th>
					<th>&nbsp;</th>
				</thead> <%
					If Not IsEmpty(arrayActiveSessions) Then 
							For i = 0 To UBound(arrayActiveSessions)
								bIsHeavySession = IsHeavySession(arrayActiveSessions(i).AT)
								logTime = DateTwoStr(arrayActiveSessions(i).LoginTime, strDateFormat) & " " & Time2Str_h_mm_ss(arrayActiveSessions(i).LoginTime)
								n = n + 1%>
								<tr class="nowrap <%=IIF(bIsHeavySession,"heavySession","")%>" id ="token_<%=arrayActiveSessions(i).AT%>"><%
								%><td class="text-right"><%= n %></td><%
								%><td><%=DB2HTML(arrayActiveSessions(i).EoName)%></td><%
								%><td><%=DB2HTML(arrayActiveSessions(i).EMs)%></td><%
								%><td><%=DB2HTML(arrayActiveSessions(i).NickName)%></td><%
								%><td><%=DB2HTML(arrayActiveSessions(i).LoginName)%></td><%
								%><td><%=logTime%></td><%
								%><td><%=DB2HTML(arrayActiveSessions(i).Ip)%></td><%
								%><td align="center" class="body"><%=DB2HTML(arrayActiveSessions(i).Roles)%></td><%
								%><td><%Call DrawContextButtons(Array("removeToken('" & arrayActiveSessions(i).AT & "')", obLanguage("ServAdmin","kRemoveUserSession"), "danger", "glyphicon glyphicon-remove"), , , "ctx-btns-icons-center")%></td><%
								%></tr><%
							Next
					Else 
						%><tr><td colspan="8" class="body" align="center"><%=obLanguage("ServAdmin","kNoUsersInSystem")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i></td></tr><% 
					End If
		%></table><%

End Sub

Function IsHeavySession(strCurrToken)
	IsHeavySession = arrHeavySessions.Contains(strCurrToken)
End Function

Sub InitHeavySessions()
	Dim component, result

	Set component = obComponentMgr.Resolve("NetCity.Components.Abstraction.IHeavySessionsComponent")
	Set result = component.GetHeavySessionsTokens()
	If Not result.IsSuccess Then GenerateError result.Message
	Set arrHeavySessions = result.Data
End Sub
%>
