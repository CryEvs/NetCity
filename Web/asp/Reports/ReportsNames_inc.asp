<% ' © 2007-2012 IRTech. All rights reserved.

Const kThemes					= 9 ' 0..9
Const kMaxReportsInTheme		= 11 ' точнее (макс - 1)

Dim arrReportsThemes, arrReportsNames, arrReportsFiles, arrReportsInTheme
Dim bCommonSchool, bPreSchool, bAddSchool, bProfession
Dim bIsNotFutureMode
Dim bPrimarySchool
Dim bIsHaveModuleUDOD

Sub GetThemes()
	Dim objFuncType, bModule_AddSchool

	Redim arrReportsThemes(kThemes)
	bPreSchool = (strFunctionalityType = kFuncType_PreSchool)
	bCommonSchool = (strFunctionalityType = kFuncType_Common)
	bAddSchool = (strFunctionalityType = kFuncType_Add)
	bProfession = (strFunctionalityType = kFuncType_Profession)
	bIsHaveModuleUDOD = objNSNET.HaveModuleUDOD()
	Call CheckPrimarySchool()

	' bIsNotFutureMode - этот флаг применяем только для разрешения показа отчётов в двух группах
	' "Административные отчеты" и "Административные отчеты для Департамента образования",
	' т.к. на только эти группы даны права в "будущем" году, т.е. остальные и так не покажутся
	bIsNotFutureMode = Not bFutureMode

	If MODULE_KPM Then
		'KPM
		arrReportsThemes(0) = obLanguage("ReportNames","kRGComplexPedMonitoring")
	End If

	If bIsStaff Then
		'for staff reports
		arrReportsThemes(1) = obLanguage("ReportNames","kRGAdministrativeReports")
		If bCommonSchool Or (bPreSchool And REPORT_TITLE And PERSON_DATA) Then
			arrReportsThemes(2) = obLanguage("ReportNames","kRGEducManagerReports")
		End If

		If bIsNotFutureMode Then
			arrReportsThemes(3) = obLanguage("ReportNames","kRGElectronicJournalControl")
		End If

		arrReportsThemes(4) = obLanguage("ReportNames","kRGClassTotalReports",strFunctionalityType)
		If Not bPreSchool Then ' Для ДОО убираем группу Итоги успеваемости и посещаемости
			arrReportsThemes(5) = obLanguage("ReportNames","kRGSchoolTotalReports",strFunctionalityType)
		End If
		If Not bIsEMForSchool Or bExtendedEMForSchoolAccess Then ' Для ОО убираем последнюю группу
			arrReportsThemes(6) = obLanguage("ReportNames","kRGCurrentReports",strFunctionalityType)
		End If
		If bAddSchool Then
			arrReportsThemes(7) = obLanguage("ReportNames","kRGAdministrativeReportsAdditionalEducation")
		End If

		If Not bAddSchool And HasUserRole(rlPrincipal) Then
			arrReportsThemes(8) = obLanguage("ReportNames","kRGSpecificEducationReports")
		End If
		If bPreSchool Then
			arrReportsThemes(9) = obLanguage("ReportNames","kRGParentPay")
		End If
	Else
		Set objFuncType = objNSNET.GetFuctionalityType(kFuncType_Add)
		bModule_AddSchool = Not objFuncType.EOF

		'for parents and students reports
		If Not bPreSchool Then arrReportsThemes(1) = obLanguage("ReportNames","kRGTotalReportsForStudParent")
		arrReportsThemes(2) = obLanguage("ReportNames","kRGCurrentReports",strFunctionalityType)
		If bModule_AddSchool Then arrReportsThemes(3) = obLanguage("ReportNames","kRGDopEducationReports")
		If bPreSchool Then arrReportsThemes(4)=obLanguage("ReportNames","kRGParentPay")
	End If
	
	ReDim arrReportsInTheme(kThemes) ' указывается кол-во отчётов - 1

	If bIsStaff Then
		arrReportsInTheme(0) = 0
		arrReportsInTheme(1) = 11

		' 2 раздел ...
		'If bCommonSchool Then
		'	If REPORT_TITLE Then
		'		arrReportsInTheme(2,0) = 13
		'	Else
		'		arrReportsInTheme(2,0) = 17
		'	End If
		'	arrReportsInTheme(2,1) = 18
		'End If

		'If bCommonSchool Then
		'	If REPORT_TITLE Then
		'		arrReportsInTheme(2) = 5
		'	Else
		'		arrReportsInTheme(2) = 1
		'	End If
		'End If
		' Во 2-ом разделе несколько позапутаннее ситуация для определения arrReportsNames(2, x) и arrReportsFiles(2, x).
		' Было бы проще, если бы массив arrReportsInTheme был 2-мерный (начало, конец), но ради только
		' этого случая не стоит делать 2-мерный массив вместо 1-мерного (где задаётся только кол-во).
		' Также было бы проще, если 2 последних отчёта из этого раздела перенести в самое начало, тогда сделали бы переменное кол-во в arrReportsInTheme(2), как выше закомментировано.
		' Но порядок отчётов внутри раздела решили не менять. Поэтому при определении arrReportsNames(2, x) и arrReportsFiles(2, x) - получились несколько запутанные условия.

		arrReportsInTheme(2) = 7

		arrReportsInTheme(3) = 4

		arrReportsInTheme(4) = 6
		arrReportsInTheme(5) = IIF(bSummerTimeSpending And (strFunctionalityType = kFuncType_Common), 9, 8)
		arrReportsInTheme(6) = 9
		arrReportsInTheme(7) = 4
		arrReportsInTheme(8) = 0
		arrReportsInTheme(9) = 4
	Else
		arrReportsInTheme(1) = 2
		arrReportsInTheme(2) = 5
		arrReportsInTheme(3) = 0
		arrReportsInTheme(4) = 0
	End If
End Sub

Sub GetNames()
	If IsDull(bPreSchool) Then bPreSchool = (strFunctionalityType = kFuncType_PreSchool)
	If IsDull(bCommonSchool) Then
		bCommonSchool = (strFunctionalityType = kFuncType_Common)
		Call CheckPrimarySchool()
	End If
	If IsDull(bAddSchool) Then bAddSchool = (strFunctionalityType = kFuncType_Add)
	If IsDull(bProfession) Then bProfession = (strFunctionalityType = kFuncType_Profession)
	If IsDull(bIsHaveModuleUDOD) Then bIsHaveModuleUDOD = objNSNET.HaveModuleUDOD()

	' ф-ция GetNames() - может вызываться независимо от GetThemes(), поэтому снова выставляем здесь флаг bIsNotFutureMode
	bIsNotFutureMode = Not bFutureMode

	ReDim arrReportsNames(kThemes, kMaxReportsInTheme)

	If Not bIsStaff Then
		Call GetNames_ForStudents()
		Exit Sub
	End If
	
	If bIsNotFutureMode Then arrReportsNames(0, 0) = obLanguage("ReportNames","kRNKnowledgeTesting")

	If PERSON_DATA Then arrReportsNames(1, 0) = obLanguage("ReportNames","kRNSecretaryAndClassChief",strFunctionalityType)

	If bIsNotFutureMode Then
		If PERSON_DATA AND strFunctionalityType <> 3 Then arrReportsNames(1, 1) = obLanguage("ReportNames","kRNParentsAidToSchool",strFunctionalityType)
		arrReportsNames(1, 2) = obLanguage("ReportNames","kRNStudentsMovement",strFunctionalityType)
		arrReportsNames(1, 3) = obLanguage("ReportNames","kRNStudentsMovementDyn",strFunctionalityType)
	End If

	arrReportsNames(1, 4) = obLanguage("ReportNames","KRNMovedOutStudentList",strFunctionalityType)
	arrReportsNames(1, 5) = obLanguage("ReportNames","KRNMovedInStudentList",strFunctionalityType)
	arrReportsNames(1, 6) = obLanguage("ReportNames","kRNClassesFilling",strFunctionalityType)
	If PERSON_DATA Then arrReportsNames(1, 7) = obLanguage("ReportNames","kRNTotalStudentsInfo",strFunctionalityType)

	If bIsNotFutureMode Then
		arrReportsNames(1, 8) = obLanguage("ReportNames","kRNTeacherHoursCalc", strFunctionalityType)
	End If

	If Not bDisableHealthData And PERSON_DATA Then arrReportsNames(1, 9) = obLanguage("ReportNames","kRNInvalidsInfo")

	If bIsNotFutureMode Then
		If bCommonSchool Or bProfession Then
			If bCommonSchool Then
				If PERSON_DATA Then arrReportsNames(1, 10) = obLanguage("ReportNames","kRNEGEStudentAssertions")
				If bIsHaveModuleUDOD Then arrReportsNames(1, 11) = obLanguage("ReportNames","kCoverageAddEducationStudents")
			End If
		ElseIf bPreSchool Then
			If Not bDisableHealthData And PERSON_DATA Then arrReportsNames(1, 10) = obLanguage("ReportNames","kRNInvalidsCount")
		End If

		If (bCommonSchool Or bPreSchool) And REPORT_TITLE Then
			If PERSON_DATA Then arrReportsNames(2, 0) = obLanguage("ReportNames","kRNStudentListG",strFunctionalityType)
		End If
	End If

	If REPORT_TITLE Then
		If bCommonSchool Then
			arrReportsNames(2, 1) = obLanguage("ReportNames","kRNTitleList")
		ElseIf bPreSchool Then
			arrReportsNames(2, 1) = obLanguage("ReportNames","kRNTitleListDou")
		End If
	End If

	If bIsNotFutureMode Then
		If bCommonSchool Then
			If REPORT_TITLE Then
				arrReportsNames(2, 2) = obLanguage("ReportNames","KRNInfoAboutMoving",strFunctionalityType) & obLanguage("ReportNames","kFormN2")
				arrReportsNames(2, 3) = obLanguage("ReportNames","KRNInfoAboutMoving",strFunctionalityType) & obLanguage("ReportNames","kFormN3")
			End If
			arrReportsNames(2, 4) = obLanguage("ReportNames","kRNStudentsCntInfo")
			arrReportsNames(2, 5) = obLanguage("ReportNames","kRNMovement")
		End If
	End If

	If bCommonSchool Then
		If Not bPrimarySchool Then
			arrReportsNames(2, 6) = obLanguage("ReportNames","kRNGeneralEducQuality")
			arrReportsNames(2, 7) = obLanguage("ReportNames","kRNSecondaryEducQuality")
		End If
	ElseIf bPreSchool Then
		arrReportsNames(2, 7) = obLanguage("ReportNames","kRNDouComplectAddInfo")
	End If


	'Контроль заполняемости данных по учащимся
	If bIsNotFutureMode Then
		If bEnableStudentsDataQuality Then
			arrReportsNames(3, 0) = obLanguage("ReportNames","kStudentsDataFilling",strFunctionalityType)
		End If
		arrReportsNames(3, 1) = obLanguage("ReportNames","kRNJournalAccess",strFunctionalityType)
		If bCommonSchool Or bProfession Then
			arrReportsNames(3, 2) = obLanguage("ReportNames","kRNJournalTimeliness")
			arrReportsNames(3, 3) = obLanguage("ReportNames","kRNJournalFilling",strFunctionalityType)
			arrReportsNames(3, 4) = obLanguage("ReportNames","kRNTotalJournalFilling")
		End If
	End If

	'Итоги успеваемости и посещаемости
	If Not bPreSchool Then arrReportsNames(4, 0) = obLanguage("ReportNames","kRNGradeSummary")
	arrReportsNames(4, 1) = obLanguage("ReportNames","kRNAttendanceSummary")
	If Not bPreSchool Then 
		arrReportsNames(4, 2) = obLanguage("ReportNames","kRNClassChiefReportForTerm",strFunctionalityType)
		arrReportsNames(4, 3) = obLanguage("ReportNames","kRNClassTotalReport",strFunctionalityType)
		arrReportsNames(4, 4)	= obLanguage("ReportNames","kRNStudentAverageMark",strFunctionalityType)
		arrReportsNames(4, 5) = obLanguage("ReportNames","kRNStudentAverageMarkDyn",strFunctionalityType)
		arrReportsNames(4, 6) = obLanguage("ReportNames","kRNTotalReportsForStaff",strFunctionalityType)
	End If

	'Итоги успеваемости и посещаемости - ???
'	arrReportsNames(26) = obLanguage("ReportNames","KRNTotalTermPerfomanceForSubj")
'	arrReportsNames(27) = obLanguage("ReportNames","KRNTotalTermPerfomance")

	arrReportsNames(5, 0) = obLanguage("ReportNames","KRNClassCheifPeriodGrade",strFunctionalityType)
	If Not bPreSchool Then arrReportsNames(5, 1) = obLanguage("ReportNames","KRNTotalSchoolPerfomanceForTerm") & obLanguage("Common","kSchool_d",strFunctionalityType)
	arrReportsNames(5, 2) = obLanguage("ReportNames","KRNTotalSubjectPerfomanceForTerm")
	arrReportsNames(5, 3) = obLanguage("ReportNames","kRNTeacherReport",strFunctionalityType)
	arrReportsNames(5, 4) = obLanguage("ReportNames","kRNAverageMarkForSubj")
	arrReportsNames(5, 5) = obLanguage("ReportNames","kRNAverageMarkForSubjDyn")
	arrReportsNames(5, 6) = obLanguage("ReportNames","kRNTeacherAverageMark",strFunctionalityType)
	arrReportsNames(5, 7) = obLanguage("ReportNames","kRNTeacherAverageMarkDyn",strFunctionalityType)
	arrReportsNames(5, 8) = obLanguage("ReportNames","kTotalSchoolQualityForTerm") & obLanguage("Common","kSchool_d",strFunctionalityType)
	If bSummerTimeSpending Then arrReportsNames(5, 9) = obLanguage("ReportNames","kStudentsSummerInfo",strFunctionalityType)
	
	'Текущая успеваемость и посещаемость
	If bExtendedEMForSchoolAccess And bIsEMForSchool Then
		arrReportsNames(6, 0) = obLanguage("ReportNames","KRNClassJournal",strFunctionalityType)
	Else
		If Not bPreSchool Then arrReportsNames(6, 0) = obLanguage("ReportNames","KRNClassJournal",strFunctionalityType)
		If Not bPreSchool Then arrReportsNames(6, 1) = obLanguage("ReportNames","kRNClassSubjectReport",strFunctionalityType)
		arrReportsNames(6, 2) = obLanguage("ReportNames","kRNAttendanceReport",strFunctionalityType)
		If Not bPreSchool Then arrReportsNames(6, 3) = obLanguage("ReportNames","kRNStudentGradeReport",strFunctionalityType)
		arrReportsNames(6, 4) = obLanguage("ReportNames","kRNStudentGAReport",strFunctionalityType)
		If Not bPreSchool Then 
			arrReportsNames(6, 5) = obLanguage("ReportNames","kRNStudentQualityReport",strFunctionalityType)
			arrReportsNames(6, 6) = obLanguage("ReportNames","kRNPreClassChiefReportForTerm",strFunctionalityType)
			arrReportsNames(6, 7) = obLanguage("ReportNames","kRNGAForParentsBySMSReport")
			arrReportsNames(6, 8) = obLanguage("ReportNames","kRNParentInfoLetter")
			If kRNTimeOfEntryAndExit Then arrReportsNames(6, 9) = obLanguage("ReportNames","kRNTimeOfEntryAndExit")
		End If
	End If
	
	arrReportsNames(7, 0) = obLanguage("ReportNames","kRNPersonalListStudyAdditionalEducation")
	arrReportsNames(7, 1) = obLanguage("ReportNames","kRNStudentListOnAssertion")
	arrReportsNames(7, 2) = obLanguage("ReportNames","kRNNumberOfStudentsAdditionalEducation")
	arrReportsNames(7, 3) = obLanguage("ReportNames","kRNCountComposByYears")
	arrReportsNames(7, 4) = obLanguage("ReportNames","kRNAgeComposition")

	arrReportsNames(8, 0) = obLanguage("ReportNames","kRNPMPKRecommendation")

	If bPreSchool Then 
		arrReportsNames(9, 0) = obLanguage("ReportNames","kRNParentPay")
		If HasUserRight(arReportsForAllClasses) Then
			arrReportsNames(9, 1) = obLanguage("ReportNames","kRNParentPayInfo")
			arrReportsNames(9, 2) = obLanguage("ReportNames","kRNParentPayDebt")
			arrReportsNames(9, 3) = obLanguage("ReportNames","kRNPayBenefitRecipientList")
			arrReportsNames(9, 4) = obLanguage("ReportNames","kRNPayBenefitRecipientCount")
		End If
	End If
End Sub

' Для учеников и родителей
Sub GetNames_ForStudents()
	'Текущая успеваемость и посещаемость
	arrReportsNames(1, 0) = obLanguage("ReportNames","kRNTotals")
	arrReportsNames(1, 1) = obLanguage("ReportNames","kRNAverageMark")
	arrReportsNames(1, 2) = obLanguage("ReportNames","kRNAverageMarkDyn")

	If Not bPreSchool Then arrReportsNames(2, 0) = obLanguage("ReportNames","kRNGradeReport")
	arrReportsNames(2, 1) = obLanguage("ReportNames","kRNGAReport")
	If Not bPreSchool Then arrReportsNames(2, 2) = obLanguage("ReportNames","kRNQualityReport")
	If Not bPreSchool Then
		arrReportsNames(2, 3) = obLanguage("ReportNames","kRNJournalAccess",strFunctionalityType)
	End If
	arrReportsNames(2, 4) = obLanguage("ReportNames","kRNParentInfoLetter")
	If Not bPreSchool And kRNTimeOfEntryAndExit Then arrReportsNames(2, 5) = obLanguage("ReportNames","kRNTimeOfEntryAndExit")

	arrReportsNames(3, 0) = obLanguage("ReportNames","kRNDopEducationStudent")

	If bPreSchool Then 
		If HasUserRole(rlParent) Then
			arrReportsNames(4, 0) = obLanguage("ReportNames","kRNParentPay")
		End If
	End If
End Sub


Sub GetLinks()
	ReDim arrReportsFiles(kThemes, kMaxReportsInTheme)

	If Not bIsStaff Then
		Call GetLinks_ForStudents()
		Exit Sub
	End If

	If bIsNotFutureMode Then arrReportsFiles(0, 0) = "/asp/Reports/KPM/KPM.asp"

	If PERSON_DATA Then arrReportsFiles(1, 0) = "ReportSecretaryAndClassChief.asp"
	If bIsNotFutureMode Then
		If Not bIsRegionEMForSchool Then
			If PERSON_DATA Then arrReportsFiles(1, 1) = "ReportParentsAidForSchool.asp"
		End If
		arrReportsFiles(1, 2) = "ReportStudentsMoving.asp"
		arrReportsFiles(1, 3) = "ReportStudentsMovingDyn.asp"
	End If
	arrReportsFiles(1, 4) = "ReportMovedOutStudentList.asp"
	arrReportsFiles(1, 5) = "ReportMovedInStudentList.asp"
	arrReportsFiles(1, 6) = "ReportClassesFilling.asp"
	If PERSON_DATA Then arrReportsFiles(1, 7) = "ReportTotalStudentsInfo.asp"
	If bIsNotFutureMode Then
		arrReportsFiles(1, 8) = "ReportTeacherHoursCalc.asp"
	End If
	If Not bDisableHealthData And PERSON_DATA Then arrReportsFiles(1, 9) = "ReportInvalidsInfo.asp"
	If bIsNotFutureMode Then
		If bCommonSchool Or bProfession Then
			If bCommonSchool Then
				If PERSON_DATA Then arrReportsFiles(1, 10) = "ReportEGEStudentAssertions.asp"
				If bIsHaveModuleUDOD Then arrReportsFiles(1, 11) = "ReportCoverageAddEducationStudentsByOU.asp"
			End If
		ElseIf bPreSchool Then
			If Not bDisableHealthData And PERSON_DATA Then arrReportsFiles(1, 10) = "ReportInvalidsCount.asp"
		End If

		If (bCommonSchool Or bPreSchool)  And REPORT_TITLE Then
			If PERSON_DATA Then arrReportsFiles(2, 0) = "ReportStudentListG.asp"
		End If
	End If

	If REPORT_TITLE Then
		If bCommonSchool Then
			arrReportsFiles(2, 1) = "ReportTitleList.asp"
		ElseIf bPreSchool Then
			arrReportsFiles(2, 1) = "ReportTitleListDou.asp"
		End If
	End If

	If bIsNotFutureMode Then
		If bCommonSchool Then
			If REPORT_TITLE Then
				arrReportsFiles(2, 2) = "ReportInfoAboutMoving.asp?ViewType=0"
				arrReportsFiles(2, 3) = "ReportInfoAboutMoving.asp?ViewType=1"
			End If
			arrReportsFiles(2, 4) = "ReportStudentsCntInfo.asp" ' - temporary for testing
			arrReportsFiles(2, 5) = "ReportMovement.asp"
		End If
	End If

	If bCommonSchool Then
		If Not bPrimarySchool Then
			arrReportsFiles(2, 6) = "ReportEducQuality.asp?SecondaryEduc=0"
			arrReportsFiles(2, 7) = "ReportEducQuality.asp?SecondaryEduc=1"
		End If
	ElseIf bPreSchool Then
		arrReportsFiles(2, 7) = "ReportDouComplectAddInfo.asp"
	End If

	'Контроль наполняемости электронного журнала
	If bIsNotFutureMode Then
		If bEnableStudentsDataQuality Then
			arrReportsFiles(3, 0) = "ReportStudentsDataFilling.asp"
		End If
		arrReportsFiles(3, 1) = "ReportJournalAccess.asp"
		If bCommonSchool Or bProfession Then
			arrReportsFiles(3, 2) = "ReportJournalTimeliness.asp"
			arrReportsFiles(3, 3) = "ReportJournalFilling.asp"
			arrReportsFiles(3, 4) = "ReportTotalJournalFilling.asp"
		End If
	End If

	'Итоги успеваемости и посещаемости
	If Not bPreSchool Then arrReportsFiles(4, 0) = "ReportBulletinOfProgress.asp"
	arrReportsFiles(4, 1) = "ReportClassAttendanceTerm.asp"
	If Not bPreSchool Then
		arrReportsFiles(4, 2) = "ReportClassChiefPeriod.asp"
		arrReportsFiles(4, 3) = "ReportClassTotalProgress.asp"
		arrReportsFiles(4, 4) = "ReportStudentAverageMark.asp"
		arrReportsFiles(4, 5) = "ReportStudentAverageMarkDyn.asp"
		arrReportsFiles(4, 6) = "ReportStudentTotalMarks.asp"
	End If

	arrReportsFiles(5, 0) = "ReportClassChiefPeriodGrade.asp"
	If Not bPreSchool Then arrReportsFiles(5, 1) = "ReportTotalSchoolPerfomanceForTerm.asp"
	arrReportsFiles(5, 2) = "ReportTotalSubjectPerfomanceForTerm.asp"
	arrReportsFiles(5, 3) = "ReportClassSubjectTotals.asp"
	arrReportsFiles(5, 4) = "ReportAverageMarkForSubject.asp"
	arrReportsFiles(5, 5) = "ReportAverageMarkForSubjectDyn.asp"
	arrReportsFiles(5, 6) = "ReportTeacherAverageMark.asp"
	arrReportsFiles(5, 7) = "ReportTeacherAverageMarkDyn.asp"
	arrReportsFiles(5, 8) = "ReportTotalSchoolQualityForTerm.asp"
	If bSummerTimeSpending Then arrReportsFiles(5, 9) = "ReportStudentsSummerInfo.asp"
	
	'Текущая успеваемость и посещаемость
	If bExtendedEMForSchoolAccess And bIsEMForSchool Then
		arrReportsFiles(6, 0) = "ReportClassJournal.asp"
	Else
		If Not bPreSchool Then arrReportsFiles(6, 0) = "ReportClassJournal.asp"
		If Not bPreSchool Then arrReportsFiles(6, 1) = "ReportClassGrades.asp"
		arrReportsFiles(6, 2) = "ReportClassAttendance.asp"
		If Not bPreSchool Then arrReportsFiles(6, 3) = "ReportStudentGrades.asp"
		arrReportsFiles(6, 4) = "ReportStudentTotal.asp"
		If Not bPreSchool Then 
			arrReportsFiles(6, 5) = "ReportStudentAttendanceGrades.asp"
			arrReportsFiles(6, 6) = "ReportPreClassChiefPeriod.asp"
			arrReportsFiles(6, 7) = "ReportAGForParentsBySMS.asp"
			arrReportsFiles(6, 8) = "ReportParentInfoLetter.asp"
			If kRNTimeOfEntryAndExit Then arrReportsFiles(6, 9) = "ReportStudentsInOut.asp"
		End If
	End If

	arrReportsFiles(7, 0) = "ReportPersonalListStudyAdditionalEducation.asp"
	arrReportsFiles(7, 1) = "ReportStudentListOnAssertion.asp"
	arrReportsFiles(7, 2) = "ReportNumberOfStudentsAdditionalEducation.asp"
	arrReportsFiles(7, 3) = "ReportCountComposByYears.asp?Age=0"
	arrReportsFiles(7, 4) = "ReportCountComposByYears.asp?Age=1"

	arrReportsFiles(8, 0) = "ReportPMPKRecommend.asp"

	If bPreSchool Then
		arrReportsFiles(9, 0) = "ReportParentPay.asp"
		If HasUserRight(arReportsForAllClasses) Then
			arrReportsFiles(9, 1) = "ReportParentPayInfo.asp"
			arrReportsFiles(9, 2) = "ReportParentPayDebt.asp"
			arrReportsFiles(9, 3) = "ReportPayBenifitRecipient.asp?List=1"
			arrReportsFiles(9, 4) = "ReportPayBenifitRecipient.asp?List=0"
		End If
	End If
End Sub


' Для учеников и родителей
Sub GetLinks_ForStudents()
	'Текущая успеваемость и посещаемость
	arrReportsFiles(1, 0) = "ReportStudentTotalMarks.asp"
	arrReportsFiles(1, 1) = "ReportStudentAverageMark.asp"
	arrReportsFiles(1, 2) = "ReportStudentAverageMarkDyn.asp"

	If Not bPreSchool Then arrReportsFiles(2, 0) = "ReportStudentGrades.asp"
	arrReportsFiles(2, 1) = "ReportStudentTotal.asp"
	If Not bPreSchool Then arrReportsFiles(2, 2) = "ReportStudentAttendanceGrades.asp"
	If Not bPreSchool Then
		arrReportsFiles(2, 3) = "ReportJournalAccess.asp"
	End If
	arrReportsFiles(2, 4) = "ReportParentInfoLetter.asp"
	If Not bPreSchool And kRNTimeOfEntryAndExit Then arrReportsFiles(2, 5) = "ReportStudentsInOut.asp"

	arrReportsFiles(3, 0) = "ReportDopEducStudent.asp"

	If bPreSchool Then
		arrReportsFiles(4, 0) = "ReportParentPay.asp"
	End If
End Sub

Sub CheckPrimarySchool()
	Dim objSchoolInfo

	bPrimarySchool = False
	If bCommonSchool Then
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
		If objSchoolInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		bPrimarySchool = GetSafeLng(objSchoolInfo("EOTYPEID"), 0) = CLng(kEOTypeID_PrimarySchool)
	End If
End Sub

Function IncrementID(ID)
End Function
%>
