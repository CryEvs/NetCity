<!-- #INCLUDE FILE="../em_screen.asp" -->
<!-- #INCLUDE FILE="../../scripts/dateInput.asp" -->
<!-- #INCLUDE FILE="EmReports_inc.asp" -->
<!-- #INCLUDE FILE=../../scripts/populate.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.

'Dim nGlobalYearId
Dim objCommonYears', nGlobalYearId
Dim dtStartDate, dtEndDate
Dim dtYearStart, dtYearEnd
Dim strStartPeriod, strEndPeriod, strErrStartDateGreaterEndDate
Dim objEMSchools,strEMSchoolID, bNoEMSchools

Sub specialHead()
	Call scriptCalendar( "Reports", dtMinDate, dtMaxDate )
End Sub

Sub SpecialInit()
	bIsCheckDates = True
End Sub

Sub SpecialWrite()
	WriteGlobalYear
End Sub

Sub WriteGlobalYear()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearId)
End Sub

Sub FilterGlobalYear()
	FilterGlobalYearWithMsg obLanguage("EMReports","kNoSchoolYearsInDB")
End Sub

Sub FilterGlobalYearWithMsg( strErr )
	If objCommonYears.EOF Then
		Call DrawInfo(strErr, False)
		bExit = True
		Exit Sub
	End If
	DrawFilterRow "Reports", obLanguage("Common","kSchoolYear"), "CMNYEAR", objCommonYears, "GLOBALYEARID", "SCHOOLYEARNAME", nGlobalYearId, False
End Sub

Sub FilterYearAndDates()
	FilterGlobalYear
	If bExit Then Exit Sub
	DrawDateRange
End Sub

Sub FilterYearAndOneDate()
	FilterGlobalYear
	If bExit Then Exit Sub
	Call DrawDateRangeItem("DDT", dtEndDate, "kDate")
End Sub

Sub InitEM_PreSchools()
	strEMSchoolID = GetSafe("EMSCHOOLID", "0")
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать ТИПЫ ОО подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objEMSchools = objNSNET.GetEMSchoolsForFuncTypes(strFilterEMID, kWizardSteps, kFuncType_PreSchool, -1)
	If Not objEMSchools.EOF Then
		If strEMSchoolID = "0" Or strEMSchoolID = "-1" Then strEMSchoolID = GetSafeID(objEMSchools("SCHOOLID"), Null)
		bNoEMSchools = False
	Else
		bNoEMSchools = True
	End If
End Sub

Sub InitEM_PreSchoolsAndSchools()
	strEMSchoolID = GetSafe("EMSCHOOLID", "0")
	'Подсовываем strFilterEMID из Report_inc.asp
	Set objEMSchools = objNSNET.GetEMSchoolsForFuncTypes(strFilterEMID, kWizardSteps, kFuncType_PreSchool & ", " & kFuncType_Common, -1)
	If Not objEMSchools.EOF Then
		If CLng(strEMSchoolID) > 0 Then strEMSchoolID = GetSafeIDForRs(strEMSchoolID, objEMSchools, "SCHOOLID")
		If strEMSchoolID = "0" Then strEMSchoolID = GetSafeID(objEMSchools("SCHOOLID"), Null)
	Else
		bExit = True
	End If
End Sub

Sub InitEM_ForFuncType(strFuncTypeID, nGlobalYearID, bAllowAll)
	strEMSchoolID = GetSafe("EMSCHOOLID", "-1")
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать ОО подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objEMSchools = objNSNET.GetEMSchoolsForFuncTypes(strFilterEMID, kWizardSteps, strFuncTypeID, nGlobalYearID)
	bNoEMSchools = True
	If objEMSchools.EOF Then Exit Sub
	bNoEMSchools = False
	
	If strEMSchoolID <> "-1" Or Not bAllowAll Then
		strEMSchoolID = CStr(GetSafeIDForRs(strEMSchoolID, objEMSchools, "SCHOOLID"))
		If strEMSchoolID = "0" Then strEMSchoolID = GetSafeID(objEMSchools("SCHOOLID"), Null)
	End If
End Sub

Sub InitEM_ForEOType(strEOTypeID, nGlobalYearID)
	strEMSchoolID = GetSafe("EMSCHOOLID", "0")
	Set objEMSchools = objNSNET.GetEMSchoolsForEOType(strFilterEMID, kWizardSteps, strEOTypeID, nGlobalYearID)
	bNoEMSchools = True
	If objEMSchools.EOF Then Exit Sub
	bNoEMSchools = False
	
	If strEMSchoolID <> "-1" Then
		strEMSchoolID = CStr(GetSafeIDForRs(strEMSchoolID, objEMSchools, "SCHOOLID"))
		If strEMSchoolID = "0" Then strEMSchoolID = GetSafeID(objEMSchools("SCHOOLID"), Null)
	End If
End Sub

Sub DrawEM_PreSchools()
	If objEMSchools.EOF Then
		Call DrawInfo(obLanguage("EMReports","kNoDOUSchoolYearsInDB"), False)
		bExit = True
		Exit Sub
	End If
	DrawEM_EOs obLanguage("EMReports","kDOU")
End Sub

Sub DrawEM_Schools()
	If objEMSchools.EOF Then
		 %><tr><td align="left" class="body" nowrap><%=obLanguage("EMReports","kNoSchoolForFilter")%>&nbsp;</td></tr><%
		bExit = True
		Exit Sub
	End If
	DrawEM_EOsEx obLanguage("EMReports","kOU"), "Reports", True
End Sub

Sub DrawEM_EOs(strTitle)
	Call DrawEM_EOsEx(strTitle, "", True)
End Sub

Sub DrawEM_EOsEx(strTitle, strFormName, bAll)
	DrawFilterRow strFormName, strTitle, "EMSCHOOLID", objEMSchools, "SCHOOLID", "SCHOOLNAME", strEMSchoolID, bAll
End Sub
%>
