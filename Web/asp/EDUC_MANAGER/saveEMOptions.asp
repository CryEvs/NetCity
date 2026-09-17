<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE=em_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kCantSetEMSettings = "Невозможно сохранить настройки Управления Образования"
Const kEMSettingsWasSaved = "Настройки Управления Образования успешно сохранены"
Const kCantUpdatePosByAttest = "Невозможно обновить должностные данные согласно последней аттестации"

Dim strAct, dtBeginAttest
Dim objUpdatePosStatistics, arrUpdatePosStatistics

If Not HasUserRole(rlEmAdmin) Then GenerateError obLanguage("Common","kErrPageAccess")

strAct = GetSafeStr(Request("Act"), -1, Null)
If strAct = "save" Then
	' Предполагается, что ID параметра совпадает с индексом в массиве + 1.
	ReDim arrEMSettings(kEM_MaxIndex)
	arrEMSettings(kEMIndex_AttBegin_Day) = CStr(GetSafeLngInRange(Request("AttBegin_Day"), 1, 31))
	arrEMSettings(kEMIndex_AttBegin_Month) = CStr(GetSafeLngInRange(Request("AttBegin_Month"), 1, 12))

	On Error Resume Next
	Call objNSNET.SetEMSettings(strEMID, arrEMSettings )
	TestError kCantSetEMSettings
	Call obTokenMgr.SetData(strToken, stWasSaved, kEMSettingsWasSaved)
ElseIf strAct = "update_attest" Then
	dtBeginAttest = GetBeginAttestData( strEMID )

	On Error Resume Next
	Set objUpdatePosStatistics = objNSNET.UpdatePosByAttest(strEMID, dtBeginAttest )
	TestError kCantUpdatePosByAttest

	If objUpdatePosStatistics.EOF Then
		ReDim arrUpdatePosStatistics(3, -1)
	Else
		arrUpdatePosStatistics = objUpdatePosStatistics.GetRows(,,Array("SCHOOLID", "SCHOOLNAME", "REQCOUNT", "REQCOUNT2"))
	End If
	Call obTokenMgr.SetData(strToken, stUpdatePosStatistics, arrUpdatePosStatistics)
Else
	GenerateError obLanguage("Common","kInvalidParameter")
End If

RedirectTo "em_options.asp?", Null

Function GetBeginAttestData( strEMID )
	Dim dtBeginAttest, nAttBegin_Day, nAttBegin_Month
	Dim dtToday, nYear

	Call InitEMSettings( strEMID )
	nAttBegin_Day = GetSafeLng(arrEMSettings(1, kEMIndex_AttBegin_Day), Null)
	nAttBegin_Month = GetSafeLng(arrEMSettings(1, kEMIndex_AttBegin_Month), Null)
	
	dtToday = NSNow()
	nYear = Year(dtToday)
	
	If (nAttBegin_Month * 31 + nAttBegin_Day) >= (Month(dtToday) * 31 + Day(dtToday)) Then
		nYear = nYear - 1
	End If
	dtBeginAttest = DateSerial(nYear, nAttBegin_Month, nAttBegin_Day)
	GetBeginAttestData = dtBeginAttest
End Function
%>
