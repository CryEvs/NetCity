<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
'<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudents_inc.asp" -->

Dim strBackPage

Function GetPageMenuItem()
	GetPageMenuItem = miManagementMovements
End Function
Function GetPageTabItem()
	GetPageTabItem = tbMovePoolStaff
End Function
Function GetPageTitle()
	GetPageTitle = "Список сотрудников - будет в следующих версиях"
End Function

Sub ReadStateSpecial()
	nViewType = GetSafeLng(Request("ViewType"), 1)
	strBackPage = strScriptName
End Sub

'Sub InitPoolSchools
'	strPoolSchoolID = strSchoolID
'End Sub
Sub DrawPoolSchools(strForm)%>
	<th><%=obLanguage("PoolStudents","kPoolSchool")%></th><td class="select"><%=strSchoolName%><input type="hidden" name="POOLSCHOOL" value="<%=strPoolSchoolID%>"></td><%
End Sub

Sub onHeadSpecial()
%>
<SCRIPT><!--
function changeView()
{
	var form=document.MainForm;
	var val = getListValue(form.ViewType);
	DoSubmit( form, "" );
}
function editUser( id )
{
	var form = document.forms.MainForm;
	form.UID.value = id;
	DoSubmit( form, '/asp/administration/StudentInfo.asp' );
}
//--></SCRIPT><%
End Sub
%>
