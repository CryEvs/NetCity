<!-- #INCLUDE FILE   ="sa_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strSubjectName, strSubjectAbbrName, bIsFederal
Dim bAddSubjectMode

Dim strItemID

Function GetPageTitle()
	GetPageTitle = IIF(bAddSubjectMode,obLanguage("ServAdmin","kAddGlobalSubject"),obLanguage("ServAdmin","kTitleGlobalSubjectEdit"))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Sub ReadState()
	strItemID = GetSafeID(Request("ItemID"), GetSafeID( obTokenMgr.GetData(strToken, stGlobalSubjectID), "0"))
	bAddSubjectMode = (strItemID = 0)
	'If strItemID = "0" Then RedirectTo "Refs.asp", Array("ParamID", kSubjectsParID)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stGlobalSubjectID, strItemID)
End Sub

Sub Main()
	Dim objRs
	If Not bAddSubjectMode	Then
		Set objRs = objNSNET.GetGlobalSubjects(strItemID)
		strSubjectName = objRs("SUBJNAME")
		strSubjectAbbrName = objRs("SUBJABBR")
		bIsFederal = objRs("ISFEDERAL")
	Else
		strSubjectName = ""
		strSubjectAbbrName = ""
		bIsFederal = False
	End IF
End Sub

Sub onHead
%>
<SCRIPT><!--

<% If bIsFederal Then %>
$(function(){
	var inputs = $("input[type='text']");
	for(var index = 0;index < inputs.length;index++)
		inputs[index].disabled = true;
});
<% End If %>


function Back() {
    goBack(document.eSubject, 'Refs.asp');
}

function canSubmit()
{
	var form = document.forms['eSubject'];
	var name = trimStr(form.elements["NYN"].value);
	var abbrname = trimStr(form.elements["NAN"].value);
	if (name=='') {
		alert(language.Generic.ServAdmin.kGlobalSubjectNameCantBeEmpty);
		form.elements['NYN'].focus();
		return false;
	}
	if (abbrname=='') {
		alert(language.Generic.ServAdmin.kGlobalSubjectAbbrNameCantBeEmpty);
		form.elements['NAN'].focus();
		return false;
	}
	return true;
}
function replaceArea()
{
	var form = document.forms['eSubject'];
	DoSubmit( form, "replaceSubject.asp" );
}
//-->
</SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "ok_check_db('eSubject', '')", obLanguage("Common","kSave")
	If Not bAddSubjectMode and Not bIsFederal Then
		rw ShowButton("replace", "replace", "JavaScript:replaceArea()", obLanguage("ServAdmin","kReplace"), obLanguage("ServAdmin","kReplace"))
	End If
End Sub

Sub onDrawPage()
	DrawButtonPanel%>

	<form name="eSubject" method="post" class="form-horizontal" action="ChangeSubject.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("SubjectID",strItemID, "ParamID", kSubjectsParID, "oldNYN", DB2Value(strSubjectName), "oldNAN", DB2Value(strSubjectAbbrName)))%><%

		Call SetFiltersWidth("", "col-md-3 col-lg-2 col-sm-4", "col-md-6 col-lg-4 col-sm-6")
		Call DrawInputRowWithClass( obLanguage("ServAdmin","kFullName"), strSubjectName, "NYN", "text", 50, 100, "", "FilterWhiteSpace" )
		Call DrawInputRowWithClass( obLanguage("ServAdmin","kAbbrNameS") & ":", strSubjectAbbrName, "NAN", "text", 30, 70, "", "FilterWhiteSpace" )

		OpenFormGroup ""%>
			<label class="checkbox">
				<input name="isFederal" type="checkbox" <%If bIsFederal Then%>checked<%End If%>>
				<%=obLanguage("ServAdmin", "kFederalGlobalSubjecName")%>
			</label>
		<%CloseFormGroup%>
	</form>
<%End Sub%>
