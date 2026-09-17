<!-- #INCLUDE FILE=sa_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kPositionParID = "6"
Const kMaxRealParamID = "3000"

Dim strParamID, strParamName
Dim strItemID, strItemName, strItemName2, strItemName3
Dim bStaffPos, objStatuses
Dim bExamTypePredef, bExamType
Dim bReplaceAllow

Function hasUserRightsOnPage()
	hasUserRightsOnPage = objNSNET.IsAdminOfServer(strUserID)
End Function

Function GetPageTitle()
	Dim strPageTitle

	If strItemID <> "0" Then strPageTitle = obLanguage("ServAdmin","kTitleUserParamItem_Edit") Else strPageTitle = obLanguage("ServAdmin","kTitleUserParamItem_New")
	
	strPageTitle = strPageTitle & " " & GreenText(DB2HTML(strParamName))
	GetPageTitle = strPageTitle
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Function onKeyPress()
	onKeyPress = "JavaScript:CheckEnter(event);"
End Function

Sub ReadState()
	strParamID = GetSafeID(Request("ParamID"), GetSafeID( obTokenMgr.GetData(strToken, stParamID), "0"))
	strParamName = GetSafeStrParam(Request("ParamName"), GetSafeStr( obTokenMgr.GetData(strToken, stParamName), -1, ""))
	bStaffPos = (strParamID = kPositionParID) '(CStr(Request("StaffPos")) = "1")
	strItemID = GetSafeID(Request("ItemID"), GetSafeID( obTokenMgr.GetData(strToken, stParamItemID), "0"))
End Sub


Sub WriteState()
	Call obTokenMgr.SetData(strToken, stParamID, strParamID)
	Call obTokenMgr.SetData(strToken, stParamName, strParamName)
	Call obTokenMgr.SetData(strToken, stParamItemID, strItemID)
End Sub

Sub Main()
	Dim objRs

	bExamTypePredef = False
	bExamType = False
	bReplaceAllow = False

	If strItemID <> "0" Then
		If strParamID = kExamTypeParID Then
			Set objRs = objNSNET.GetExamTypeInfo(strItemID)
			If objRs.EOF Then GenerateError obLanguage("ServAdmin","kErrItemNotFound")
			strItemName = objRs("TITLE")
			strItemName2 = objRs("ABBR")
			bExamTypePredef = CLng(strItemID) < kExamTypePredefMax
			bExamType = True
		ElseIf strParamID = kNationParID Then
			Set objRs = objNSNET.GetNationItemInfo(strItemID)
			If objRs.EOF Then GenerateError obLanguage("ServAdmin","kErrItemNotFound")
			strItemName = objRs("NAME")
			strItemName2 = ""
			strItemName3 = ""
		Else
			Set objRs = objNSNET.GetUserParamItemInfo(strItemID)
			If objRs.EOF Then GenerateError obLanguage("ServAdmin","kErrItemNotFound")
			strItemName = GetSafeStr(objRs("ITEMNAME"), -1, "")
			strItemName2 = GetSafeStr(objRs("ITEMNAME2"), -1, "")
			strItemName3 = GetSafeStr(objRs("ITEMNAME3"), -1, "")
			bReplaceAllow = (CLng(strParamID) <> CLng(kDepartReasonParID)) And (CLng(strParamID) < CLng(kMaxRealParamID))
		End If
	Else
		strItemName = ""
		strItemName2 = ""
		strItemName3 = ""
	End If

	If bStaffPos Then Set objStatuses = objNSNET.GetStaffPositionStatuses()
End Sub

Sub onHeadSpecial()
%>
<SCRIPT><!--
function CheckEnter(event){ if (event.keyCode == 13) saveItem(); }

function saveItem(){
	if(isDBBusy()) return false;
	var form = document.forms.main;


	<%If Not bExamTypePredef Then%>
		var el = form.ITEMNAME;

		if (trimStr(el.value) == '') {
			alert(language.Generic.ServAdmin.kErrMsgParamName);
			el.focus();

			return;
		}
	<%End If%>

	<%If bExamType Then%>
		var el = form.ITEMNAME2;

		if (trimStr(el.value) == '') {
			alert(language.Generic.ServAdmin.kErrMsgParamName2);
			el.focus();

			return;
		}
	<%End If%>

	setDBBusy();
	DoSubmit( form, "" );
}

<%If bReplaceAllow Then%>
	function replaceItem()
	{
		var form = document.forms['main'];
		DoSubmit( form, "replaceItem.asp" );
	}
<%End If%>

function Back() {
	goBack(document.main, 'Refs.asp');
}
//--></SCRIPT>
<%End Sub

Sub DrawButtons()
	ButtonSave "saveItem()", obLanguage("Common","kSave")
	If bReplaceAllow Then
		rw ShowButton("replace", "replace", "JavaScript:replaceItem()", obLanguage("ServAdmin","kReplace"), obLanguage("ServAdmin","kReplace"))
	End If
End Sub

Sub onDrawPage()
	DrawButtonPanel%>

	<form name="main" method="post" class="form-horizontal" action="UserParamItemSave.asp" onsubmit="return false;">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("ParamID", strParamID, "ItemID", strItemID) )%><%
		If bStaffPos Then
			WriteHiddenTags( Array("StaffPos", 1))
		End If

		Call SetFiltersWidth("", "col-md-3 col-lg-2 col-sm-4", "col-md-6 col-lg-4 col-sm-6")
		If strParamID = kExamTypeParID Then
			Call DrawExamTypeFields()
		ElseIf strParamID = kNationParID Then
			If CLng(strItemID) < kNationMin  and CLng(strItemID) > 0 Then
				Call DrawReadonlyRow(obLanguage("Common","kName"), strItemName)
			Else
				Call DrawInputRowWithClass(obLanguage("Common","kName") & ":", strItemName, "ITEMNAME", "text", 50, 50, "", "FilterWhiteSpace")
			End If
		Else
			Call DrawInputRowWithClass( IIf(strParamID <> kDepartReasonParID, obLanguage("Common","kName") & ":", obLanguage("ServAdmin","kAbbrNameS") & ":"), strItemName, "ITEMNAME", "text", 50, 200, "", "FilterWhiteSpace" )
			Call DrawInputRowWithClass( IIf(strParamID <> kDepartReasonParID, obLanguage("ServAdmin","kAbbrNameS") & ":", obLanguage("Common","kName") & ":"), strItemName2, "ITEMNAME2", "text", 50, 200, "", "FilterWhiteSpace" )

			If bStaffPos Then
				Call DrawSelectInfoRow(obLanguage("ServAdmin","kStatus") & ":", strItemName3, "ITEMNAME3", objStatuses, "POSSTATUSID", "STATUSNAME", "", "")
			End If
		End If%>
	</form><%
End Sub

Sub DrawExamTypeFields()
	If bExamTypePredef Then
		Call DrawReadonlyRow( obLanguage("Common","kName") & ":", strItemName )
	Else
		Call DrawInputRowWithClass( obLanguage("Common","kName") & ":", strItemName, "ITEMNAME", "text", 50, 50, "", "FilterWhiteSpace" )
	End If
	Call DrawInputRowWithClass( obLanguage("ServAdmin","kAbbrNameS") & ":", strItemName2, "ITEMNAME2", "text", 20, 7, "", "FilterWhiteSpace" )
End Sub
%>
