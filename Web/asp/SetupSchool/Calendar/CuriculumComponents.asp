<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim objComponentList, strComponentName

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleCurriculumComponents")
End Function
Function GetPageMenuItem()
	GetPageMenuItem = miSetupSchoolCalendar
End Function
Function GetPageTabItem()
	GetPageTabItem = tbCuriculumComponents
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub Main
	Set objComponentList = objNSNET.GetCurriculumComponentList(strSchoolID)
'	objComponentList.MoveNext ' пропускаем "Предельно допустимую нагрузку", теперь этого значения в запросе нет.
End Sub

Sub onHead()
%>
<SCRIPT><!--
function createNew()
{
	if( isDBBusy() ) return false;
	var form = document.List;
	if (form.COMPONENTNAME.value=='')
	{
		alert(language.Generic.SetupSchoolCalendar.kEnterComponentName);
		form.COMPONENTNAME.focus();
	}
	else
	{
		setDBBusy();
		DoSubmit( form, "" );
	}
}
function removeClass(){
	if( isDBBusy() ) return false;
	var i;
	var bNoSelected = true;
	var form = document.forms["List"];

	if (form.COMPONENTS)
		if (form.COMPONENTS.length)
			for (i=0; i<form.COMPONENTS.length; i++)  {
				 bNoSelected = (bNoSelected && !form.COMPONENTS[i].checked);
			}
		else
			bNoSelected = (!form.COMPONENTS.checked);

	if (bNoSelected)
		alert(language.Generic.SetupSchoolCalendar.kChooseComponentsForDeleting);
	else
	{
		if( confirm(language.Generic.Common.kMsgAreYouSure) )
		{
			form.elements["ACT"].value = "remove";
			setDBBusy();
			DoSubmit( form, "" );
	}	}
}

//--></SCRIPT>
<%
End Sub

Sub onDrawPage()%>
	<FORM NAME="List" METHOD="post" ACTION="CuriculumComponentsSave.asp">
	<%=WriteObligatoryTags()%>
	<INPUT TYPE="hidden" NAME="ACT" VALUE="new">
	<table border="0" cellspacing="0" cellpadding="3">
	<tr><td valign="top" width="20%">
			<%If not readonly Then%>
				<INPUT TYPE="text" NAME="COMPONENTNAME" VALUE="" MAXLENGTH="50" SIZE="<%=TextInputSize(20)%>"><br /><br /><%
				Call ButtonCreate("createNew()", obLanguage("SetupSchoolCalendar","kCreateNewComponent"))
				Call ButtonDel("removeClass()", obLanguage("SetupSchoolCalendar","kDeleteComponent"))
			End If%>
		</td>
		<td><table><%
			If objComponentList.EOF Then%>
				<tr><td><h3 align="center"><%=obLanguage("SetupSchoolCalendar","kEmptyComponentsList")%></h3></td></tr><%
			Else %>
				<tr><td valign="top">
				<table><tr><th><%=obLanguage("SetupSchoolCalendar","kComponents")%>:</th></tr>
					<tr><td><%Call PopulateComponentCheck(objComponentList)%></td></tr>
				</table>
				</td></tr><%
			End If%>
			</table>
	</td></tr></table>
	</FORM>
<%
End Sub

Sub PopulateComponentCheck( objRs )
	Dim strID, nTemplate, nInUse
	If Not bIsDebug Then On Error Resume Next
	Response.Write "<TABLE class=""ThinTable"" border=""1"" cellspacing=""0""><TR><TH>" & obLanguage("SetupSchoolCalendar","kComponent") & "</TH><TH>" & obLanguage("Common","kDeletingMark") & "</TH></TR>"
	Do While Not objRs.EOF
		strID = GetSafeID(objRs("COMPONENTID"), Null)
		nTemplate = GetSafeLng(objRs("C0"), Null)
		nInUse = GetSafeLng(objRs("C1"), Null)

		Response.Write "<TR><TD>" & DB2HTML(objRs("COMPONENTNAME")) & "</TD><TD ALIGN=""CENTER"">"
		If nTemplate = 0 And nInUse = 0 Then
			Response.Write "<INPUT TYPE=""checkbox"" NAME=""COMPONENTS"" VALUE=""" & (strID)& """" & IIF(readonly, " disabled=""disabled"" ","") & ">"
		Else
			Response.Write obLanguage("Common","kEmploy")
		End If
		Response.Write "</TD></TR>"

		objRs.MoveNext
	Loop
	Response.Write "</TABLE>"
End Sub
%>
