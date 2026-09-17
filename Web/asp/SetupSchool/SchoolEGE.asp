<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE FILE="SchoolEGE_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strSchoolCode, objGrades

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo)
End Function

Function GetPageTitle()
	GetPageTitle = IIF(strFunctionalityType<>kFuncType_PreSchool, kEGEData, kCodeOU)
End Function

Sub Main()
	Dim objRs
	Set objRs = objNSNET.GetSchoolInfo(strSchoolID)
	If objRs.EOF Then GenerateError obLanguage("SetupSchool","kCantGetSchoolInfo")
	strSchoolCode = GetSafeStr(objRs("SCHOOLCODE"), kSchoolCodeMaxLen, "")
	if strFunctionalityType<>kFuncType_PreSchool  Then Set objGrades = objNSNET.GetSchoolYearsGrades(strSchoolYearID)
End Sub

Sub onHead()
%>
<SCRIPT><!--
function CancelEdit() {
	if (dataWereChanged && !confirm(kDataWereChanged)) return;
	ok('main','/asp/SetupSchool/SchoolForms/SchoolInfo.asp');
}
function saveCode(){
	if( isDBBusy() ) return false;
	if(!dataWereChanged) return;

	var form = document.forms.main;
	var el = form.SCHOOLCODE;
	el.value = trimStr(el.value);
	var sCode = el.value;
	if( sCode != "" ){
		for( var i = 0; i < sCode.length; i++ ){
			if( isNaN( sCode.charAt(i) ) ){
				alert('<%=kCodeHasOnlyNumbers%>');
				el.focus();
				return;
			}
		}
	}
	setDBBusy();
	DoSubmit( form, "" );
}

<% if strFunctionalityType<>kFuncType_PreSchool  Then %>
function importEGEInfo() {
	if( isDBBusy() ) return false;
	if (dataWereChanged && !confirm(kDataWereChanged)) return;

	var form = document.forms.Export;
	if( trimStr( form.elements["File"].value ) == '' )
	{
		alert(language.Generic.SetupSchoolUI.kMsgSelectFileName );
		form.elements["File"].focus();
		return false;
	}

	var chkBoxes = $('input[checked][name="GRADES"]:checkbox')
	var nCount = chkBoxes.length;

	if ( nCount == 0)
	{
		alert( '<%=kMsgSelectGrades%>' );
		return false;
	}
	var selectedGrades = '';
	for( var i = 0; i < chkBoxes.length; i++ )
		selectedGrades = selectedGrades + chkBoxes[i].value + ',';
	selectedGrades = selectedGrades.substr(0, selectedGrades.length - 1);
	form.elements["S_GRADES"].value = selectedGrades;

//	setDBBusy(); do not set here!
	form.elements["FilePath"].value = form.elements["File"].value;
	DoSubmit( form, "" );
}
<%End If%>
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()%>
<form NAME="main" METHOD="post" ACTION="SchoolCodeSave.asp">
<%=WriteObligatoryTags()%>
<br>
<table border="0" cellspacing="0" cellpadding ="3">
	<tr valign="top">
		<td><%
			ButtonSave "saveCode()", obLanguage("Common","kSave")
			ButtonCancel "CancelEdit();", obLanguage("Common","kBack")%>
		</td>
		<td>
			<table class="ThickTable" border="1" align="center" cellpadding="3" cellspacing="0"><%
			Call DrawInputRow(kSchoolCode, strSchoolCode, "SCHOOLCODE", "text", kSchoolCodeMaxLen + 1, kSchoolCodeMaxLen, "")%>
			</table>
		</td>
	</tr>
</table><br>
</form>
<% if strFunctionalityType<>kFuncType_PreSchool  Then %>
<form NAME="Export" METHOD="post" ENCTYPE="multipart/form-data" ACTION="ImportEGEInfo.asp" TARGET="import_ege">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags(Array("FilePath", ""))%>
<table border="0" cellspacing="0" cellpadding ="3">
	<tr><td><hr></td></tr><%
	If strSchoolCode = "" Then%>
		<tr><td><div class="SmallHeader"><%=kSchoolCodeNotDefined%></div></td></tr><%
	ElseIf objGrades.EOF Then%>
		<tr><td><div class="SmallHeader"><%=obLanguage("Reports","kNoClasses",strFunctionalityType)%></div></td></tr><%
	Else%>
		<tr><td align="left">
			<input type="hidden" name="S_GRADES">
			<table class="ThickTable" border="1" align="center" cellpadding="3" cellspacing="0"><%
		While Not objGrades.EOF
			Response.Write "<tr><td>" & objGrades("GRADE") & " " & LCase(obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)) & "</td><td><input type=""checkbox"" name=""GRADES"" value=""" & objGrades("GRADE") & """></td></tr>"
			objGrades.MoveNext
		Wend%>
		</table>
			</td></tr>
		<tr><td>
			<%=ShowButton("exportege", "exportege", "javascript: importEGEInfo()", kEGEData, kEGEData)%>
		</td></tr>
		<tr><td>
			<table class="ThickTable" border="1" align="center" cellpadding="3" cellspacing="0">
				<tr><th valign="top"><%=kSchoolsFile%></th>
				<td valign="top">
					<input type="file" name="File" SIZE="<%=IIf(isIE, "50", "30")%>">
				</td></tr>
			</table>
		</td></tr><%
	End If%>
</table>

</form><%
	End if
End Sub
%>
