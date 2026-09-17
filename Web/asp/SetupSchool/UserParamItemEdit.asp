<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strParamID, strParamName
Dim strItemID, strItemName, strItemName2

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arEditReferenceBook)
End Function

Function GetPageTitle()
	Dim strPageTitle

	If strItemID <> "0" Then strPageTitle = obLanguage("SetupSchool","kPageTitle_Edit") Else strPageTitle = obLanguage("SetupSchool","kPageTitle_New")
	strPageTitle = strPageTitle & GreenText(strParamName)
	GetPageTitle = strPageTitle
End Function

Sub ReadState()
	strParamID = GetSafeID(Request("ParamID"),obTokenMgr.GetData(strToken,ParamId))
	strParamName = GetSafeStrParam(Request("ParamName"), obTokenMgr.GetData(strToken,ParamName))
	strItemID = GetSafeID(Request("ItemID"), obTokenMgr.GetData(strToken,ItemId))
End Sub

Sub Main()
	Dim objRs

	If strItemID <> "0" Then
		Set objRs = objNSNET.GetUserParamItemInfo(strItemID)
		If objRs.EOF Then GenerateError obLanguage("SetupSchool","kErrItemNotFound")
		strItemName = objRs("ITEMNAME")
		strItemName2 = objRs("ITEMNAME2")
	Else
		strItemName = ""
		strItemName2 = ""
	End If
End Sub

Sub WriteState
	Call obTokenMgr.SetData(strToken, ParamId, strParamID)
	Call obTokenMgr.SetData(strToken, ParamName, strParamName)
	Call obTokenMgr.SetData(strToken, ItemId, strItemID)
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function Back() {
			goBack(document.main,'RefBooks.asp');
		}

		function saveItem() {
			if(isDBBusy()) return false;
			if(!dataWereChanged) return;

			var form = document.forms.main;

			if (form.ITEMNAME.value == '') {
				alert(language.Generic.SetupSchool.kErrMsgParamName);
				form.ITEMNAME.focus();
				return;
			}

			setDBBusy();
			DoSubmit(form, "");
		}
	//--></SCRIPT>
<%End Sub

Sub DrawButtons()
	ButtonSave "saveItem()", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()%>
	<form name="main" method="post" action="UserParamItemSave.asp" class="form-horizontal form-edit">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("ParamID", strParamID, "ItemID", strItemID) )%>
		<%Call DrawButtonPanel%>
		<%Call DrawInputFields%>
	</form><%
End Sub

Sub DrawInputFields()
	Call DrawInputRowWithClass(obLanguage("SetupSchool","kFullName"), strItemName, "ITEMNAME", "text", 50, 200, "", "FilterWhiteSpace")
	Call DrawInputRowWithClass(obLanguage("SetupSchool","kAbbrName"), strItemName2, "ITEMNAME2", "text", 50, 200, "", "FilterWhiteSpace")
End Sub%>
