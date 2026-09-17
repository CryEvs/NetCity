<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objParams, strParamID, objItems

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleRefBooks")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementSchoolInfo
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbReferenceBook
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arEditReferenceBook)
End Function

Sub ReadState()
	strParamID = GetSafeID(Request("ParamID"), "0")
End Sub

Sub Main()
	Set objParams = objNSNET.GetUserEditableParams(strSchoolID, "")
	If Not objParams.EOF Then
		If strParamID = "0" Then strParamID = objParams("PARAMETERID")
		' ParamType = 'L' or 'M' assume here
		Set objItems = objNSNET.GetUserEditableParamItems(Null, strParamID, strSchoolID)
	End If
End Sub

Sub onHead()
	If (Not readonly) And (strParamID <> "0") Then%>
<SCRIPT><!--

	var userParamAddCtrl;

	deferredResLoader.loadScript("/vendor/pages/js/RefBooks.js");

	deferredResLoader.ready(function() {
		 userParamAddCtrl = new userParamAddCtrl(<%=strParamID %>,<%=strSchoolID %>);
	});

	

function editItem(nItemID) {
	var form=document.forms['View'];
	form.ItemID.value = nItemID;
	form.ParamName.value = $('[name="ParamID_label"]').length ? $('[name="ParamID_label"]').val() : getListText(form.ParamID);
	form.ACT.value = 'edit';
	ok( 'View', 'UserParamItemEdit.asp' );
}
<%If Not objItems.EOF Then%>
function deleteItems() {
	if( isDBBusy() ) return false;
	var form=document.forms['View'];

	var chkBox = $('input:checked', form);

	if (chkBox.length) {
		$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function() {
			form.ACT.value = 'delete';
			setDBBusy();
			ok( 'View', 'UserParamItemSave.asp' );
		});
	}
	else {alert(language.Generic.Common.kErrMsgNoChecks); return};
}
<%End If%>
//--></SCRIPT>
<%
	End If
End Sub

Sub DrawFilters( strForm )
	If strFunctionalityType = FuncType_AddSchool Then
		objParams.Filter = "PARAMETERID <> " & UserParams_helpSchool
	End If
	Call DrawSelectInfoRow( obLanguage("SetupSchool","kRef"), strParamID, "ParamID", objParams, "PARAMETERID", "TITLE", null, "ok('" & strForm & "','')" )
End Sub

Sub DrawButtons()
	If (Not readonly) And (strParamID <> "0") Then

		
		ButtonAdd "userParamAddCtrl.showModalAddOrUpdateParameter(0,'','','add')", obLanguage("SetupSchool","kAddItem")	

		If Not objItems.EOF Then ButtonDel "deleteItems();", obLanguage("Common","kRemove")
	End If
End Sub

Sub onDrawPage()
	Dim strDate, strEventID, strEventType%>
	<form name="View" action="RefBooks.asp" method="POST" class="form-horizontal">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("ACT", "", "ItemID", "", "ParamName", "") )%><%
	If strParamID = "0" Then
		DrawInfo obLanguage("SetupSchool","kParamsEmpty"), False
		%></form><%
		Exit Sub
	End If
	Call DrawButtonsFilters( True, "View" )
	If objItems.EOF Then
		DrawInfo obLanguage("SetupSchool","kItemsEmpty"), False
	Else
		Call DrawRefsTable
	End If%>
	</form><%
End Sub

Sub DrawRefsTable()%>
	<div class="row">
		<div class="col-md-9 col-lg-6">
			<table class="col-md-4 table table-bordered"><tr>
			<th><%=obLanguage("SetupSchool","kFullName")%></th><th><%=obLanguage("SetupSchool","kAbbr_Name")%></th>
			<%=ShowDelCellHeader(1)%></tr><%
			If readonly Then
				While Not objItems.EOF%>
					<tr><td><%=DB2HTML(objItems("ITEMNAME"))%></td>
					<td><%=DB2HTML(objItems("ITEMNAME2"))%></td>
					</tr><%
					objItems.MoveNext
				WEnd
			Else
				While Not objItems.EOF%>
					<tr><td><%=ShowAnchor("userParamAddCtrl.showModalAddOrUpdateParameter (" & objItems("ITEMID") & "," &"'"& DB2HTML(objItems("ITEMNAME")) &"'" & "," & "'" & DB2HTML(objItems("ITEMNAME2")) & "'" & ", 'edit' )", obLanguage("SetupSchool","kEditItem"), DB2HTML(objItems("ITEMNAME")), "")%></td>

					<td><%=DB2HTML(objItems("ITEMNAME2"))%></td>
					<td class="text-center"><%
					If Not IsNull(objItems("PARAMVALUE")) Then%><%=obLanguage("Common","kEmploy")%><%
					Else%><INPUT TYPE="checkbox" NAME="delItem" VALUE="<%=objItems("ITEMID")%>"><%
					End If%>
					</td></tr><%
					objItems.MoveNext
				WEnd
			End If%>
			</table>
		</div>
	</div><%
End Sub
%>

