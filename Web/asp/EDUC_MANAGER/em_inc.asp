<% ' © 2007-2013 IRTech. All rights reserved.

'************************************************************************
' Education Managers settings

Const kEM_MaxIndex = 1 ' 0..1

Const kEMIndex_AttBegin_Day		= 0
Const kEMIndex_AttBegin_Month	= 1

Const kCantGetEMSettings = "Невозможно получить настройки Управления Образования"

Dim arrEMSettings
Dim nGlobalYearId

Sub CheckEducManager()
	If Not bIsEducManager Then
		Response.Redirect( "/asp/educ_manager/em_login.asp" )
	End If
End Sub

Sub InitEM_AllGlobalYears()
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать УЧЕБНЫЕ ГОДА подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objCommonYears = objNSNET.GetEMGlobalYearsList(strFilterEMID, -1, False)
	nGlobalYearId = GetSafeGlobalYearID(objCommonYears)
	'Set objCommonYears = objNSNET.GetEMGlobalYearsList(strEMID, -1, False)
	
		' Call objNSNET.GetEMMoveYearsLimits(nGlobalYearID, dtStartDate,dtEndDate)
		' If IsDull(dtStartDate) Then
			' SetArchConnection
			' Call objNSNET.GetEMMoveYearsLimits(nGlobalYearID, dtStartDate,dtEndDate)
			' SetWorkConnection
		' End If

End Sub
Sub InitEM_NotArchivedGlobalYears()
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать УЧЕБНЫЕ ГОДА подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objCommonYears = objNSNET.GetEMGlobalYearsList(strFilterEMID, -1, True)
	nGlobalYearId = GetSafeGlobalYearID(objCommonYears)
End Sub
Function GetSafeGlobalYearID(objCommonYears)
	GetSafeGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	If GetSafeGlobalYearID <> 0 Then GetSafeGlobalYearID = GetSafeIDForParent(GetSafeGlobalYearID, objCommonYears, "GLOBALYEARID" )
	If GetSafeGlobalYearID = 0 Then GetSafeGlobalYearID = objCommonYears("GLOBALYEARID")
End Function

Sub InitGlobalYear()
	Dim testYear, objCommonYears
	testYear = GetSafeStr(Request("CMNYEARID"),9,obTokenMgr.GetData( strToken, "stCommYearID" ))
	If IsDull(testYear) Then
		Set objCommonYears = objNSNET.GetEMGlobalYearsList(strEMID, -1, False)
		testYear = objCommonYears("GLOBALYEARID")
	End If
	nGlobalYearId = CLng(testYear)
	Call obTokenMgr.SetData(strToken, "stCommYearID", nGlobalYearId)
End Sub

Sub InitEMSettings( strEMID )
	Dim objEMSettings

	Set objEMSettings = objNSNET.GetEMSettings(strEMID )
	If objEMSettings.EOF Then GenerateError kCantGetEMSettings
	arrEMSettings = objEMSettings.GetRows(,,Array("PARAMETERID", "PARAMETERVALUE"))
	If UBound(arrEMSettings, 2) <> kEM_MaxIndex Then GenerateError kCantGetEMSettings
End Sub

Function GetSafeIDForParent( nID, objRs, strIDFieldName )
	GetSafeIDForParent = GetSafeIDForRs_Ex(nID, objRs, strIDFieldName, 0)
End Function
%>
