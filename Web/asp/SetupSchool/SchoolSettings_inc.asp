
<% ' © 2007-2011 IRTech. All rights reserved.
Const kSchoolSettings_MaxIndex	= 13 ' 0..13
Const kSSIndex_MaxMark			= 0
Const kSSIndex_GradeJunior_Min	= 1
Const kSSIndex_GradeJunior_Max	= 2
Const kSSIndex_GradeMiddle_Min	= 3
Const kSSIndex_GradeMiddle_Max	= 4
Const kSSIndex_GradeSenior_Min	= 5
Const kSSIndex_GradeSenior_Max	= 6
Const kSSIndex_AdminEdit		= 7
Const kSSIndex_WinAuth			= 8
Const kSSIndex_MinMark			= 9
Const kSSIndex_MoveYear			= 10
Const kMoveYearMonth = 9 ' September

Const kSSIndex_SMSEmail			= 11

Const kSMSTextMaxLen = 800 '5 Latin part
Const kSMSMaxLen_Cyril = 67
Const kSMSMaxLen_Latin = 160

Const kSMSView_Report = "0"
Const kSMSView_Arbitr = "1"

Const kSSIndex_SMSGate			= 12

Const kSSIndex_MarksAveraging	= 13
Const kMarksWeightMax = 100
Const kMarksWeightMin = 0


Const kMinSchoolMark = 1
Const kMaxSchoolMark = 100
Const kMinSchoolGrade = 0
Const kMaxSchoolGrade = 12

Const kMaxSSValueLen = 50
Dim arrSchoolSettings
Dim clsSchoolSettings


' Здесь на самом деле в качестве objCon передаётся objNSNET.
Sub InitSchoolSettings( objCon )
	Dim objSchoolSettings

	Set objSchoolSettings = objCon.GetSchoolSettings(strCurrYearID )
	If objSchoolSettings.EOF Then GenerateError obLanguage("SchoolSettings","kCantGetSettings") & obLanguage("Common","kOfSchool",strFunctionalityType)
	arrSchoolSettings = objSchoolSettings.GetRows(,,Array("PARAMETERID", "PARAMETERVALUE"))
	If UBound(arrSchoolSettings, 2) <> kSchoolSettings_MaxIndex Then GenerateError obLanguage("SchoolSettings","kCantGetSettings") & obLanguage("Common","kOfSchool",strFunctionalityType)
End Sub

Sub InitSchoolSettingsManager()
	Set clsSchoolSettings = New SchoolSettings
End Sub

' Определяем границы года по движению
' 17.08.2009. Теперь дата начала года по движению определяется не из настроек школы, а из настроек админа сервера - это начало второго отчётного периода по движению.
' Флаг bFullYear - определяет, надо ли брать весь год от начала года по движению, или же ограничится концом последнего (четвёртого) периода по движению.
Sub CalcMoveCurrYearLimits( outStart, outEnd, bFullYear )
	Dim rsYear', nMoveYearDay, nMoveYearMonth
	Dim strGlobalYearID
	Dim objInfo

	Call InitSchoolSettings( objNSNET )

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	If rsYear.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
	End If
	strGlobalYearID = GetSafeID(rsYear("GLOBALYEARID"), Null)
	Set objInfo = objNSNET.GetMovePeriodsInfo(strGlobalYearID)
	If objInfo.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
	End If
	objInfo.MoveNext ' начало второго периода
	If objInfo.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
	End If
	outStart = objInfo("STARTDATE")

	If bFullYear Then
		outEnd = outStart 'DateSerial(Year(outStart), nMoveYearMonth, nMoveYearDay)
		outEnd = DateAdd("yyyy", 1, outEnd)
		outEnd = DateAdd("d", -1, outEnd)
	Else
		objInfo.MoveNext ' третий период
		If objInfo.EOF Then
			GenerateError obLanguage("Common","kUnexpErr")
		End If
		objInfo.MoveNext ' четвёртый период
		If objInfo.EOF Then
			GenerateError obLanguage("Common","kUnexpErr")
		End If
		outEnd = objInfo("ENDDATE")
	End If
End Sub

'Вспомогательный класс для работы с настройками школы
Class SchoolSettings
	Private m_schoolSettings

	'Метод получения настройки
	Public Function GetSetting(propertyIndex)
		If IsEmpty(m_schoolSettings) Then
			If IsEmpty(arrSchoolSettings) Then
				Call InitSchoolSettings( objNSNET )
			End If
			m_schoolSettings = arrSchoolSettings
		End If
		GetSetting = m_schoolSettings(1,propertyIndex)
	End Function

	'Средневзвешанный ли способ усреднения оценок
	Public Function IsWeghtedAverageMark()
		IsWeghtedAverageMark = (GetSetting(kSSIndex_MarksAveraging) = "1")
	End Function
End Class

%>
