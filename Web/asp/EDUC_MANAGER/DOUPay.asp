<!-- #INCLUDE FILE="em_screen.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Management
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_DOUPay
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kEMName") & " " & GreenText(DB2HTML(objNSNET.GetEducManagementName(strEMID)))
End Function

Sub onHeadSpecial()
%>
<SCRIPT><!--
function submitToPage(pageName){
	var form = document.forms.PayNorms;
	DoSubmit(form, pageName);
}
//--></SCRIPT><%
End Sub

Sub onDrawPage()
	Dim nAccessMonth
	Dim bHasRightOnView, bHasRightOnEdit

	bHasRightOnView = HasUserRight(arEMDouPayNormView)
	bHasRightOnEdit = HasUserRight(arEMDouPayNormEdit)%>

	<form method="POST" action="PayNorms.asp" name="PayNorms" OnSubmit="return false;">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("FType", kFuncType_PreSchool))%>
		<%OpenPanel oblanguage("EM","kParentPay"), "parentPay", False %>
		<%If bHasRightOnView Or bHasRightOnEdit Then
			nAccessMonth = objNSNET.GetParentPayAccessMonth(strEMID)%>
			<div class="select"><%=ShowAnchor("submitToPage('PayNorms.asp');", obLanguage("Reports","kPayNorms"), obLanguage("Reports","kPayNorms"), "")%></div>
			<div class="select"><%If bHasRightOnEdit Then%><%=ShowAnchor("submitToPage('EditPayAccess.asp');", oblanguage("EM","kParentPayAccess"), oblanguage("EM","kParentPayAccess"), "")%><%Else%><%=oblanguage("EM","kParentPayAccess")%><%End If%>&nbsp;&nbsp;<%=GetAccessMonthName(nAccessMonth)%></div>
		<%End If%>
		<div class="select"><%=ShowAnchor("submitToPage('/angular/em/doupay/schoolcodes/');", obLanguage("EM","kPreSchoolsCodes"), obLanguage("EM","kPreSchoolsCodes"), "")%></div>
		<%ClosePanel %>
	</form><%
End Sub

Function GetAccessMonthName(nAccessMonth)
	Dim strMonthName

	strMonthName = ""
	If nAccessMonth = -1 Then
		strMonthName = obLanguage("EM","kFullAccess")
	ElseIf nAccessMonth = 0 Then
		strMonthName = obLanguage("EM","kFullDenied")
	ElseIf (1 <= nAccessMonth) And (nAccessMonth <= 12) Then
		strMonthName = obLanguage.GetMonthName(nAccessMonth, False)
	End If

	GetAccessMonthName = ""
	If strMonthName <> "" Then
		GetAccessMonthName = "(" & strMonthName & ")"
	End If
End Function
%>
