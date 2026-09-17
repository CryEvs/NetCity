<!-- #INCLUDE FILE="em_screen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objDOUPayNorms, strPNID
Dim bEmpty, bLastPayNorm
Dim objDOUPayNormInfo, strPayNormTitle
Dim objPayNorms

Function GetPageTitle()
	GetPageTitle = obLanguage("EM","kTitlePayNorms")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Management
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_DOUPay
 End Function

Sub Main()
	readonly = Not HasUserRight(arEMDouPayNormEdit)

	Call InitPayNorms()
	If bEmpty Then
		Exit Sub
	End If

	Set objDOUPayNormInfo = objNSNET.GetDOUPayNormInfo(strPNID)
	If objDOUPayNormInfo.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
	End If
	strPayNormTitle = GetSafeStr(objDOUPayNormInfo("PAYNORMTITLE"), -1, Null)

	Set objPayNorms = objNSNET.GetPayNorms(strPNID)
End Sub

Sub InitPayNorms()
	Set objDOUPayNorms = objNSNET.GetDOUPayNorms(strEMID)

	bLastPayNorm = False
	bEmpty = objDOUPayNorms.EOF
	If bEmpty Then
		strPNID = "0"
		Exit Sub
	End If

	strPNID = GetSafeID(Request("PNID"), "0")
	If strPNID <> "0" Then
		strPNID = CStr(GetSafeIDForRs(strPNID, objDOUPayNorms, "PAYNORMID"))
	End If

	If strPNID = "0" Then
		strPNID = GetSafeID(objDOUPayNorms("PAYNORMID"), Null)
	End If

	bLastPayNorm = (strPNID = GetSafeID(objDOUPayNorms("PAYNORMID"), Null))
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stPayNormID, strPNID)
End Sub

Sub onHead()%>
	<SCRIPT><!--
		<%If Not readonly Then%>
		function editPayNorm(id) {
			var form = document.forms.MainForm;

			form.EditPNID.value = id;

			DoSubmit(form, "EditPayNorm.asp");
		}
		<%End If%>

		function Back() {
			goBack(document.forms.MainForm, 'DOUPay.asp');
		}
	//--></SCRIPT><%
End Sub

Sub onDrawPage()%>
	<FORM Name="MainForm" METHOD="POST" ACTION="EditPayNorm.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("EditPNID", "0"))%><%

		Call DrawButtonsFilters(True, "MainForm")%>

		<div class="row">
			<div class="col-md-10 col-lg-8"><%
				If bEmpty Then
					Call DrawInfo(obLanguage("EM","kNoNormTables"), False)
				Else
					If Not objPayNorms.EOF Then Call DrawNormsTable()
				End If%>
			</div>
		</div>
	</FORM><%
End Sub

Sub DrawButtons()
	If Not readonly Then
		ButtonAdd "editPayNorm(0);", obLanguage("EM","kAddNormTable")
		If bLastPayNorm Then
			ButtonEdit "editPayNorm(" & strPNID & ");", obLanguage("EM","kEditLastNormTable")
		End If
	End If
End Sub

Sub DrawFilters(strForm)
	Call DrawPageFilter()
End Sub

Sub DrawPageFilter()
	Dim strID, bSelected

	If bEmpty Then
		Exit Sub
	End If
	
	SetFiltersWidth "", "col-md-5 col-lg-5", "col-md-7 col-lg-5"

	OpenFormGroup obLanguage("EM","kStartNorms")
		Response.Write "<SELECT Name=""PNID"" class=""form-control"" onChange=""OnChangeSelect('MainForm','PayNorms.asp');"">"
			Do While Not objDOUPayNorms.EOF
				strID = DB2Value(objDOUPayNorms("PAYNORMID"))
				Response.Write "<OPTION VALUE=""" & strID & """"
				If strID = strPNID And Not bSelected Then
					Response.Write " SELECTED "
					bSelected = True
				End If
				Response.Write ">" & DB2HTML(Date2Str(objDOUPayNorms("STARTDATE")))
				Response.Write "</OPTION>"

				objDOUPayNorms.MoveNext
			Loop
		Response.Write "</SELECT>"
	CloseFormGroup
	
	Call DrawReadonlyRow(obLanguage("EM","kRuleResolution"), DB2HTML(strPayNormTitle))

	RestoreDefFiltersWidth
End Sub

Sub DrawNormsTable()
Dim bNoAttendance%>
	<table class="table table-bordered table-xs table-bright-striped table-bright-hover">
		<tr><th colspan="5"><%=obLanguage("EM","kNormsTable")%></th></tr>
		<tr class="text-center">
			<th><%=obLanguage("EM","kNorm")%></th>
			<th><%=obLanguage("EM","kNormSumm")%></th>
			<th><%=DB2HTML_BR(obLanguage("EM","kNormAver"))%></th>
			<th><%=obLanguage("EM","kDouPayKind")%></th>
			<th><%=obLanguage("EM","kNormComment")%></th>
		</tr><%

		While Not objPayNorms.EOF
			bNoAttendance = GetSafeBool(objPayNorms("NOATTENDANCE"), False)%>
			<tr class="text-center">
				<td><%=DB2HTML(objPayNorms("ABBREV"))%></td>
				<td><%=DB2HTML(objPayNorms("NORMVAL"))%></td>
				<td><%=DB2HTML(objPayNorms("AVERVAL"))%></td>
				<td><%=IIf(bNoAttendance, obLanguage("EM","kForNoAttendance"), "&nbsp;")%></td>
				<td class="text-left"><%=DB2HTML_BR(objPayNorms("COMMENT"))%></td>
			</tr><%
			objPayNorms.MoveNext
		WEnd%>
	</table><%
End Sub%>