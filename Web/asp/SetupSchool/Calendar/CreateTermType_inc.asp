<% ' © 2007-2014 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleCreateTermType")
End Function

Sub onSpecialHead()%>
<SCRIPT><!--
function canSaveTermType()
{
	var form = document.forms['MainForm'];
	var name = form.elements['TermTypeName'].value;

	if(name == ''){
		alert(language.Generic.SetupSchoolCalendar.kTermTypeNameCantBeEmpty);
		form.elements['TermTypeName'].focus();
		return false;
	}

	var nCount = str2lngEx(form.elements['TermsCount']);

	if(isNaN(nCount) || (nCount < 1) || (nCount > <%=kMinSchoolYearDays%>)){
		alert(language.Generic.Common.kEnterIntegerFrom1To + '<%=( " " & kMinSchoolYearDays)%>');
		form.elements['TermsCount'].focus();
		return false;
	}

	return true;
}

function saveTermType()
{
	if(isDBBusy()) return false;


	if(canSaveTermType()) {
		setDBBusy();
		DoSubmit(document.MainForm, '');
	}
}
//--></SCRIPT>
<%End Sub

Sub DrawButtons()
	Dim strBackPage

	strBackPage = GetSafeStr( obTokenMgr.GetData(strToken,stBackPage), -1, "TermTypes.asp")
	ButtonSave "saveTermType();", obLanguage("SetupSchoolCalendar","kSaveTermType")
	ButtonCancel "DoSubmit(document.MainForm, '"&strBackPage&"');", obLanguage("Common","kBack")
End Sub

Sub onDrawPage()%>
	<FORM NAME="MainForm" ACTION="/asp/SetupSchool/Calendar/SaveDeleteTermType.asp" METHOD="POST">
	<%=WriteObligatoryTags()%>
		<table border=0 cellspacing=0 cellpadding=5>
			<tr>
				<td valign="top"><%DrawButtons%></td>
				<td valign="top">
					<table class="ThickTable" border="1" cellspacing="0" cellpadding=3>
						<tr>
							<th><%=obLanguage("SetupSchoolCalendar","kTermTypeName")%>:</th>
							<td><input type="text" size="<%=TextInputSize(40)%>" maxlength="30" name="TermTypeName" class="FilterWhiteSpace" value=""></td>
						</tr>
						<tr>
							<th><%=obLanguage("SetupSchoolCalendar","kTermsCount")%>:</th>
							<td><input type="text" size="<%=TextInputSize(10)%>" maxlength="3" name="TermsCount" class="FilterWhiteSpace" value=""></td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</FORM>
<%End Sub%>
