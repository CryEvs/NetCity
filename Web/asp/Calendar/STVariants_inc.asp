<% ' © 2007-2014 IRTech. All rights reserved.

Const kSTVariantNameLen = 100

Const kVarUsageLevel_Undef = -1
Const kVarUsageLevel_School = 0
Const kVarUsageLevel_Grade = 1
Const kVarUsageLevel_Class = 2
Const kVarUsageLevel_IupGrade = 3

Dim arrSTVariantsLevels

' Ф-я возвращает базовый вариант, назначеннный для всего ОО
Function MakeArraySTVariantsLevels(objCMComponent)
	Dim objResult, strICPPostfix
	Dim objSchoolVariant, strSchoolVarID

	ReDim arrSTVariantsLevels(1, 3)
	arrSTVariantsLevels(0, kVarUsageLevel_School) = kVarUsageLevel_School
	arrSTVariantsLevels(1, kVarUsageLevel_School) = obLanguage("Calendar","kBaseEOVariant")

	Set objResult = objCMComponent.GetScheduleTimeVariantForSchool(strCurrYearID)
	Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))

	If IsEmpty(objResult.Data) Then
		strSchoolVarID = "0"
	Else
		Set objSchoolVariant = objResult.Data
		strSchoolVarID = GetSafeID(objSchoolVariant.Id, Null)
	End If

	If strSchoolVarID = "0" Then
		Set MakeArraySTVariantsLevels = Nothing
		Exit Function
	Else
		Set MakeArraySTVariantsLevels = objSchoolVariant
	End If

	Set objResult = Nothing

	' Здесь не попорядку, т.к. наличие ИУПовских параллелей будет далее определять - надо ли использовать "КУП" для классических параллелей и классов
	Set objResult = objCMComponent.GetIupGradesForScheduleTimeVariants(strCurrYearID, True)
	Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))
	If objResult.Data.Count > 0 Then
		strICPPostfix = " " & obLanguage("Curriculum","kClassicCP_S")
		arrSTVariantsLevels(0, kVarUsageLevel_IupGrade) = kVarUsageLevel_IupGrade
		arrSTVariantsLevels(1, kVarUsageLevel_IupGrade) = obLanguage("SetupSchoolCalendar","kGradeset",strFunctionalityType) & " " & obLanguage("Curriculum","kIndividualCP_S")
	Else
		strICPPostfix = ""
		arrSTVariantsLevels(0, kVarUsageLevel_IupGrade) = kVarUsageLevel_Undef
		arrSTVariantsLevels(1, kVarUsageLevel_IupGrade) = ""
	End If

	Set objResult = Nothing
	Set objResult = objCMComponent.GetGradesForScheduleTimeVariants(strCurrYearID, True)
	Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))
	If objResult.Data.Count > 0 Then
		arrSTVariantsLevels(0, kVarUsageLevel_Grade) = kVarUsageLevel_Grade
		arrSTVariantsLevels(1, kVarUsageLevel_Grade) = obLanguage("SetupSchoolCalendar","kGradeset",strFunctionalityType) & strICPPostfix
	Else
		arrSTVariantsLevels(0, kVarUsageLevel_Grade) = kVarUsageLevel_Undef
		arrSTVariantsLevels(1, kVarUsageLevel_Grade) = ""
	End If

	Set objResult = Nothing
	Set objResult = objCMComponent.GetClassesForScheduleTimeVariantsRo(strCurrYearID)
	Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))
	If objResult.Data.Count > 0 Then
		arrSTVariantsLevels(0, kVarUsageLevel_Class) = kVarUsageLevel_Class
		arrSTVariantsLevels(1, kVarUsageLevel_Class) = obLanguage("MenuFolders","kFNClasses",strFunctionalityType) & strICPPostfix
	Else
		arrSTVariantsLevels(0, kVarUsageLevel_Class) = kVarUsageLevel_Undef
		arrSTVariantsLevels(1, kVarUsageLevel_Class) = ""
	End If
	Set objResult = Nothing
End Function

Sub TestResult (objRes, strErrorMessage)
	TestError strErrorMessage
	If Not objRes.IsSuccess Then
		GenerateError strErrorMessage & IIf(bIsDebug, vbCrLf & "(" & DB2HTML_BR(objRes.Message) & ")", "")
	End If
End Sub
%>
