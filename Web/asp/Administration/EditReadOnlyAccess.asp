<!-- #INCLUDE FILE="sa_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objSchoolRS

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleReadOnlyAccess") & "<br/>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Settings
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Settings
 End Function

Sub ReadState()
End Sub

Sub Main
	Set objSchoolRS = objNSNET.GetReadOnlyAccessSchoolList()
End Sub

Sub DrawTable()
	Dim i
	Dim nDaySumCnt

	If objSchoolRS.EOF Then
		DrawInfo obLanguage("ServAdmin","kNoAccessEO"), False
	Else 
		i = 1%>
		<div class="row">
			<div class="col-md-6">
				<table class="table table-bordered table-condensed" style="margin-top:5px;">
					<tr>
						<th><%=obLanguage("Filter","kN_PP")%></th>
						<th><%=obLanguage("ServAdmin","kShortEOName_")%></th>
						<th><%=obLanguage("ServAdmin","kModeView")%></th>
					<tr/>
					<tr class="text-center">
						<th colspan="2">&nbsp;</th>
						<th><label class="checkbox"><input type="checkbox" name="CheckAllSchools" checked="checked" onclick="CheckAll()"/></label></th>
					</tr><%
					Do While Not objSchoolRS.EOF%>
						<tr class="text-center">
							<td class="text-right"><%=i%>&nbsp;</td>
							<td class="text-left"><%=DB2HTML(objSchoolRS("SCHOOLNAME"))%></td>
							<td><label class="checkbox"><input type="checkbox" name="schoolID" value="<%=objSchoolRS("SCHOOLID")%>" <%=IIF(objSchoolRS("readonlyaccess")=1, " checked ","")%> onclick="dataChanged()" ></label></td>
						</tr><%
						i = i + 1
						objSchoolRS.MoveNext
					Loop%>
				</table>
			</div>
		</div><%
	End If
End Sub

Sub onHeadSpecial()%>
	<script><!--
		function SaveReadOnlyAccess() {
			if (!dataWereChanged) return;
			if (isDBBusy()) return;
			var form = document.forms["ReadOnlyAccess"];
			setDBBusy();
			DoSubmit(form, 'UpdateReadOnlyAccess.asp');
		}

		function CheckAll() {
			dataChanged();
			var bValue = $('input[name=CheckAllSchools]').is(':checked');
			$('input[name=schoolID]').prop('checked', bValue);
		}

		function Back() {
			goBack(document.ReadOnlyAccess, 'options.asp');
		}
	//-->
	</script><%
End Sub

Sub DrawButtons()
	ButtonSave "SaveReadOnlyAccess();", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()%>
	<form name="ReadOnlyAccess" class="form-horizontal" action="EditReadOnlyAccess.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonPanel()%>
		<%Call DrawTable()%>
	</form><%
End Sub%>
