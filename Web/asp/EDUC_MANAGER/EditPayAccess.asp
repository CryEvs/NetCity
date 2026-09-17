<!-- #INCLUDE FILE="em_screen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nAccessMonth

Function GetPageTitle()
	GetPageTitle = obLanguage("EM","kTitleEditPayAccess")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Management
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_DOUPay
 End Function

Sub Main()
	nAccessMonth = objNSNET.GetParentPayAccessMonth(strEMID)
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function savePayAccess(){
			var form = document.forms.MainForm;

			$(document).trigger('showProcessing');
			DoSubmit(form, "SavePayAccess.asp");
		}

		function Back(){
			goBack(document.forms.MainForm, 'DOUPay.asp');
		}
	//--></SCRIPT><%
End Sub

Sub onDrawPage()%>
	<FORM Name="MainForm" METHOD="POST" ACTION="SavePayAccess.asp">
		<%=WriteObligatoryTags()%><%

		Call DrawButtonsFilters(True, "MainForm")%>
	</FORM><%
End Sub

Sub DrawButtons()
	ButtonSave "savePayAccess();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
End Sub

Sub DrawFilters(strForm)
	Dim nYear, i
	Dim arrMonth
	
	OpenFormGroup obLanguage("EM","kAllowEdit")%>
		<select name="AccessMonth" onChange="dataChanged();" class="form-control">
			<option value="-1" <%If nAccessMonth = -1 Then%>selected<%End If%>>--<%=obLanguage("EM","kFullAccess")%>--</option>
			<option value="0" <%If nAccessMonth = 0 Then%>selected<%End If%>>--<%=obLanguage("EM","kFullDenied")%>--</option>
			<%For i = 1 To 12%>
				<option value="<%=i%>" <%If nAccessMonth = i Then%>selected<%End If%>><%=obLanguage.GetMonthName(i, False)%></option>
			<%Next%>
		</select><%
	CloseFormGroup
End Sub%>