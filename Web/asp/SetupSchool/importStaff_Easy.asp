<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim rsFuncTypes, strFuncTypeID
Dim rsSchools, strFromSchoolID
Dim rsStaff

Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kEasyImport")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
 	bTabInternalPage = True
End Function

Sub DrawButtons()
	ButtonImport "doImport()", obLanguage("Common","kImport")
End Sub

Sub DrawFuncTypes(strForm)
	strFuncTypeID = GetSafe("FUNCTYPE", strFunctionalityType)
	DrawFilterRow StrForm, obLanguage("Common","kEOType"), "FUNCTYPE", rsFuncTypes, "FUNCTIONALITYTYPEID", "NAME", strFuncTypeID, False
End Sub

Sub	onHead()%>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>

	<script>
		$(function () {
			$('#All').on("click", function () {
				$('input[name="StaffID"]').trigger("click");
			});

			$('select[name="FROMSCHOOLID"]').find('option[value="'+<%=strSchoolId%>+'"]').remove();
			$('select[name="FROMSCHOOLID"]').select2({ language: "ru" });
		});

		function doImport(){
			if($('input[name="StaffID"]:checked').length < 1) {
				alert(language.Generic.ServAdmin.kMustSelectStaff);
				return false;
			}

			setDBBusy();
			DoSubmit(document.MainForm, 'doImportStaff_Easy.asp');
		}
	</script><%
End	Sub

Sub DrawFilters(strForm)
	Set rsFuncTypes = objNSNETWork.GetFuctionalityTypes(-1)
	DrawFuncTypes(strForm)

	Set rsSchools = objNSNETWork.GetSchoolsWithSchoolYears(strFuncTypeID)

	strFromSchoolID = GetSafe("FROMSCHOOLID", 0)
	strFromSchoolID = GetSafeIDForRs_Ex(strFromSchoolID, rsSchools, "SCHOOLID", rsSchools("SCHOOLID"))

	Do While Clng(strFromSchoolID) = Clng(strSchoolID)
		rsSchools.MoveNext
		If rsSchools.EOF Then Exit Do
		strFromSchoolID = rsSchools("SCHOOLID")
	Loop

	DrawFilterRow StrForm, obLanguage("Reports","kNameEducInst"), "FROMSCHOOLID", rsSchools, "SCHOOLID", "SCHOOLNAME", strFromSchoolID, False
End Sub

Sub onDrawPage()%>
	<form name="MainForm" action="doImportStaff_Easy.asp" method = "POST">
		<%=WriteObligatoryTags()%>

		<%Call DrawButtonsFilters(True, "MainForm")
		Set rsStaff = objNSNETWork.GetSchoolStaff(strFromSchoolID)%>
		<input type="checkbox" id="All"> 

		<%rw obLanguage("Common","kAll") & "<br />"
		Call PopulateCheck(rsStaff, "StaffID", "USERID", "NICKNAME", "")%>
	</form><%
End Sub%>