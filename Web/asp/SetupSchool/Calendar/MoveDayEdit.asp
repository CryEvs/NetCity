<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const kstrFormName = "EditForm"
Const kNameFrom = "FromD"
Const kNameTo = "ToD"

Dim strBackPage

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arPostSchoolEvent)
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleMoveDayEdit")
End Function

Sub ReadState()
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	strBackPage = GetSafeStr( Request("BackPage"), -1, "MoveDays.asp")
End Sub

Sub onHead()
%>
<script><!--
	function Back()
	{
		if (dataWereChanged && !confirm(kDataWereChanged) ) return;
		var form = document.<%=kstrFormName%>;
		form.action = '<%=strBackPage%>';
		DoSubmit( form, "" );
	}
//-->
</script><%
Call scriptCalendar( kstrFormName, dtYearStart, dtYearEnd )
%>
<script>
<!--
function CanSaveEvent()
{
	var form = document.<%=kstrFormName%>;
	var name = trimStr(form.Desc.value);
	if (name.length == 0)
	{
		alert(language.Generic.SetupSchoolCalendar.kErrDescriptionEmpty );
		form.Desc.focus();
		return false;
	}

	var dtStartYr = new Date(<%=Year(dtYearStart)%>, <%=Month(dtYearStart) - 1%>, <%=Day(dtYearStart)%>);
	var dtEndYr = new Date(<%=Year(dtYearEnd)%>, <%=Month(dtYearEnd) - 1%>, <%=Day(dtYearEnd)%>);
	<%Call CheckDate( "startDate", kNameFrom, True ) %>
	if(( startDate < dtStartYr ) || ( startDate > dtEndYr ))
	{
		focusAlert(el, language.Generic.SetupSchoolCalendar.kErrDateOutOfYear );
		return false;
	}
	<%Call CheckDate( "endDate", kNameTo, True ) %>

	if(( endDate < dtStartYr ) || ( endDate > dtEndYr ))
	{
		focusAlert(el, language.Generic.SetupSchoolCalendar.kErrDateOutOfYear );
		return false;
	}
	if( startDate - endDate == 0 )
	{
		focusAlert(el, language.Generic.SetupSchoolCalendar.kErrMsgEqual );
		return false;
	}
	return confirm(language.Generic.SetupSchoolCalendar.kConfirmMoveDay)
}
function SaveEvent()
{
	if( isDBBusy() ) return false;
	var form = document.<%=kstrFormName%>;
	if (CanSaveEvent()){
		setDBBusy();
		DoSubmit( form, "" );
	}
}

//-->
</script><%
End Sub

Sub onDrawPage()
%>
<FORM NAME="<%=kstrFormName%>" ACTION="MoveDaySave.asp" METHOD="POST" >
<%=WriteObligatoryTags()%>
<input type="hidden" name="backpage" value="<%=strBackPage%>">
<table border="0" cellspacing="0" cellpadding="5">
<tr><td valign="top"><%
	ButtonSave "SaveEvent();", obLanguage("Common","kSave")
	ButtonCancel "Back();", obLanguage("Common","kBack")%>
	</td>
	<td valign="top">
	<table class="ThickTable" border="1" cellspacing="0" cellpadding="3"><%
	Call DrawDateInfoRow( obLanguage("SetupSchoolCalendar","kStrFrom") &":", "", kNameFrom, obLanguage("SetupSchoolCalendar","kChooseWorkday"), null, null )
	Call DrawDateInfoRow( obLanguage("SetupSchoolCalendar","kStrTo") &":", "", kNameTo, obLanguage("SetupSchoolCalendar","kChooseFreeday"), null, null )
	Call DrawInputRow( obLanguage("SetupSchoolCalendar","kMoveDayReason"), "", "Desc", "area", 40, 5, "" )%>
	</table>
</td></tr></table>
</FORM>
<%
End Sub
%>
