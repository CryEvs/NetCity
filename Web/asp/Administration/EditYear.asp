<!-- #INCLUDE FILE   ="sa_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim dtYearStart, dtYearEnd, strItemID

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleEditYear")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Sub ReadState()
	strItemID = GetSafeID(Request("ItemID"), GetSafeID( obTokenMgr.GetData(strToken, stGlobalYearID), "0"))
	If strItemID = "0" Then RedirectTo "Refs.asp", Array("ParamID", "-4")
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, strItemID)
End Sub

Sub Main()
	Dim objRs

	Set objRs = objNSNET.GetGlobalYears(strItemID)
	strSchoolYearName = objRs("SCHOOLYEARNAME")
	dtYearStart = objRs("STARTDATE")
	dtYearEnd = objRs("ENDDATE")
End Sub

Sub onHead
	Call scriptCalendar( "eYear", dtYearStart, dtYearEnd)%>

	<script><!--

		function Back() {
			goBack(document.eYear, 'Refs.asp');
		}

		function canSubmit()
		{
			var form = document.forms['eYear'];
			var name = trimStr(form.elements["NYN"].value);
			if (name=='') {
				alert(language.Generic.SetupSchoolCalendar.kYearCantBeEmpty);
				form.elements['NYN'].focus();
				return false;
			}
			return true;
		}

	//-->
	</script><%

End Sub

Sub DrawButtons()
	ButtonSave "ok_check_db('eYear', '')", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()
	DrawButtonPanel%>

	<form name="eYear" method="post" action="ChangeYear.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("YearID",strItemID, "ParamID", kYearParID))%><%
		
		Call SetFiltersWidth("", "col-md-3 col-lg-2 col-sm-4", "col-md-6 col-lg-4 col-sm-6")
		Call DrawReadonlyRow(obLanguage("Common","kSchoolYearName"), DB2HTML(strSchoolYearName))
		Call DrawInputRow( obLanguage("SetupSchoolCalendar","kSchoolYearNewName"), strSchoolYearName, "NYN", "text", 30, 50, "" )
		Call DrawDateInfoRow( obLanguage("Common","kYearStart") & ":", Date2Str(dtYearStart), "SDY", "")
		Call DrawDateInfoRow( obLanguage("Common","kYearEnd") & ":", Date2Str(dtYearEnd), "EDY", "")%>
	</form><%
End Sub

%>
