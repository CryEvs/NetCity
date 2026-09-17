<!-- #INCLUDE FILE=sa_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nEditSchoolID, objRs

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleListAdmins") & GreenText(strSchoolName)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_School
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_School
 End Function

Sub ReadState()
	nEditSchoolID = GetSafeLng(Request("EditSchoolID"), Null)
	strSchoolName = Request("SchoolName")
	If IsDull(strSchoolName) Then strSchoolName = objNSNET.GetSchoolName(nEditSchoolID)
End Sub

Sub Main()
	Set objRs = objNSNET.GetSchoolAdmins(nEditSchoolID)
End Sub

Sub onHeadSpecial()%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/users/js/changePassword.js")%>" type="text/javascript"></script>

	<script><!--
		var changePasswordCtrl = new changePasswordCtrl({userEditHimself: false, minPasswordLength: <%=obContext.ServerSettings.SecuritySettings.MinPasswordLength%>});

		function Back() {
			goBack(document.main, '<%=obTokenMgr.GetData(strToken, "Back")%>');
		}
	//--></script><%
End Sub

Sub onDrawPage()%>
	<form name="main" class="form-horizontal" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("EditSchoolID", nEditSchoolID))%>

		<div class="row">
			<div class="col-md-5">
				<table class="table table-condensed">
					<tr>
						<th><%=obLanguage("ServAdmin","kLoginName")%></th>
						<th style="width: 19%;">&nbsp;</th>
					</tr><%

					While Not objRs.EOF%>
						<tr>
							<td><%=DB2HTML(objRs("LOGINNAME"))%></td>
							<td>
								<%InlineButton "changePasswordCtrl.changePassword(" & objRs("ID") & ")", obLanguage("Common","kChangePassword"), "key"%>
							</td>
						</tr><%
						objRs.MoveNext
					Wend%>
				</table>
			</div>
		</div>
	</form><%
End Sub%>