<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportService_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterEMs.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Sub InitCommonYear()
	strCommonYearID = GetSafeParam("CMNYEARID", "stCommYearID", strCurrGlobalYearId)
	
	If Not IsEmpty(objCommonYears) Then
		If objCommonYears.EOF Then
			Response.write "Нет информации об учебных годах"
			Exit Sub
		End If
		Call GetSafeCommonYear()
	End If
	strCommonYearName = objNSNET.GetGlobalYearName(strCommonYearID)
End Sub

Sub GetSafeCommonYear()
	objCommonYears.Filter = "GLOBALYEARID=" & strCommonYearID
	If objCommonYears.EoF Then
		objCommonYears.Filter = ""
		objCommonYears.MoveFirst
		strCommonYearID = objCommonYears("GLOBALYEARID")
	Else
		objCommonYears.Filter = ""
	End If
End Sub

'Отрисовывает фильтр учебного года
Sub DrawCommonYears
	OpenFormGroup obLanguage("Common","kSchoolYear")
		Call DrawSelectRs( objCommonYears, "CMNYEARID", "GLOBALYEARID", "SCHOOLYEARNAME", strCommonYearID, Null, "changeCommonYear()")
	CloseFormGroup
End Sub

'Отрисовывает иерархический фильтр "Управление" и фильтр текущего учебного года
Sub DrawFilterTitlePage()%>
	<% Call DrawEMRegionFilter_2("SchoolEdit") %>
	<% Call DrawCommonYears() %><%
End Sub

Sub isReadOnly()
	Dim filterEMID
	filterEMID = obTokenMgr.GetData(strToken,stfilterEmId)
	'Если выбрано подчиненное УО в фильтре, то делаем странцы только для чтения
	If (filterEMID <> strEMID) Then readonly=true Else readonly=false
End Sub
%>
