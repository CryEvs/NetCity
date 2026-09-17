<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim rsFuncTypes, strFuncTypeID

Sub SpecialRead()
	bExit = False
	Call InitFuncTypes
	If bExit Then Exit Sub
	
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать учебные года подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objCommonYears = objNSNET.GetEMGlobalYearsForFuncType(strFilterEMID, strFuncTypeID)
	If objCommonYears.EOF Then Exit Sub

	nGlobalYearId = GetSafeGlobalYearID(objCommonYears)
	SetDefault_EndDate
	Call InitEM_ForFuncType(strFuncTypeID, nGlobalYearID, True)
End Sub

Sub SpecialWrite()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, stEMSchoolID, strEMSchoolID)
End Sub

Sub SpecialFilters( strForm )
	If bExit Then Exit Sub
	DrawFilterRow strForm, obLanguage("Common","kEOType"), "FUNCTIONALITYTYPEID", rsFuncTypes, "FUNCTIONALITYTYPEID", "NAME", strFuncTypeID, False
	FilterYearAndOneDate
	If objEMSchools.EOF Then bExit=True: Exit Sub
	OpenFormGroup obLanguage("EMReports","kEMSchool")
		DrawSelectRs objEMSchools, "EMSCHOOLID", "SCHOOLID", "SCHOOLNAME", strEMSchoolID, GetFIrstSelectOptionString(True), "drawBtnExportBegRep()"
	CloseFormGroup

	Call DrawSelectGRade(strFuncTypeID)

	If Clng(strFuncTypeID) = kFuncType_PreSchool Then
		Call DrawDOUGroupTypesFilter()
	End If
End Sub

Sub SpecialHead
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
	%><script><!--
		function drawBtnExportBegRep() {
			var selected = $('select[name="EMSCHOOLID"]').val()
			var all = "-1"
			if (selected == all){
				$('div.buttons-panel-left').addClass("hidden")
				$('#actionPanel').addClass("hidden")
				$('#exportBigRep').removeClass("hidden")
			}
			else{
				$('div.buttons-panel-left').removeClass("hidden")
				$('#exportBigRep').addClass("hidden")
			}
		}

	//--></script><%
End Sub

Sub InitFuncTypes
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать ТИП ОО подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set rsFuncTypes = objNSNET.GetFuncTypeListForEM(strFilterEMID)
	If rsFuncTypes.EOF Then bExit = True: Exit Sub
	strFuncTypeID = GetSafe("FUNCTIONALITYTYPEID", "-1")
	If strFuncTypeID = "-1" Then strFuncTypeID = rsFuncTypes("FUNCTIONALITYTYPEID")
	Call obTokenMgr.SetData(strToken, "FUNCTIONALITYTYPEID", strFuncTypeID)
End Sub
%>
