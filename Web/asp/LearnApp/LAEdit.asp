<!-- #INCLUDE FILE=../header1.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kFormName = "LAEDIT"

Dim bNew
Dim strLAId, strTitle
Dim objRs

Function GetPageTitle()
	GetPageTitle = strTitle
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight( arAddLA )
End Function

Sub ReadState()
	strLAId = GetSafeStr( Request("LAID"), -1, "" )
End Sub

Sub onHead()
%>
<script><!--
var changed = false;

function Back() {
	$.when( !changed || $.show.confirmation(language.Generic.Common.kConfirmNoSave) ).then(function()
	{ ok('<%=kFormName%>','LAList.asp'); });
}

function save() {
	if( isDBBusy() ) return false;
	var elems = document.<%=kFormName%>.elements;
	if ((new RegExp("^\\s*$","g")).test(elems.NAME.value)) {
		alert(language.Generic.LearnApp.kEnterLAName);
		elems.NAME.focus();
		return;
	}
	if ( elems.DESCR.value.length > 2000 ) {
		alert(language.Generic.LearnApp.kCommentTooLong);
		elems.DESCR.focus();
		return;
	}
	setDBBusy();
	ok('<%=kFormName%>','LaDoSave.asp');
}
//--></script>
<%
End Sub

Sub Main()
	If strLAId <> "" Then
		Set objRs = objLa.GetProductsWithDescription(strLAId)
		strTitle = obLanguage("LearnApp","kTitleLAEdit")
		bNew = False
	Else
		strTitle = obLanguage("LearnApp","kTitleLAAdd")
		bNew = True
	End If
End Sub

Sub DrawButtons()
	ButtonCancel "Back()", obLanguage("Common","kBack")
	ButtonSave "save()", obLanguage("Common","kSave")
	ButtonReset "resetScreen('" & kFormName & "');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()
	
	DrawButtonPanel%>

	<form name="<%=kFormName%>" method="post" class="form-horizontal form-edit"><%
		
		SetFiltersWidth "", "col-md-2", "col-md-6"
		OpenFormGroup obLanguage("Common","kName")%>
			<input type="text" name="NAME" <%
				If Not bNew Then%>
					value="<%=DB2Value(objRs("PRODUCTNAME"))%>" <%
				End If%>
			size="70" maxlength="200" class="FilterWhiteSpace" onchange="changed=true;return true;"><%
		CloseFormGroup
		
		OpenFormGroup obLanguage("LearnApp","kShortDescription")%>
			<textarea name="DESCR" cols="70" rows="15" onchange="changed=true;return true;"><%
				If Not bNew Then%>
					<%=DB2TEXTAREA(objRs("DESCRIPTION"))%><%
				End If
			%></textarea><%
		CloseFormGroup%>

		<%=WriteObligatoryTags()%>
		<input type="hidden" name="LAID" value="<%=strLAId%>">
	</form>
	<%
End Sub
%>
