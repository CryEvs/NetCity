<% ' © 2007-2012 IRTech. All rights reserved.

Const kThemes	= 5 ' 0..5
Const kMaxReportsInTheme	= 13 ' точнее (макс - 1)

Dim arrReportsThemes, arrReportsNames, arrReportsFiles, arrReportsInTheme
Dim bNoReportInfo
Sub GetThemes()
	Redim arrReportsThemes(kThemes) ' указывается кол-во отчётов - 1
	
	If MODULE_KPM Then
		'KPM
		arrReportsThemes(0) = obLanguage("EMReportNames","kComplexTeachingMonitoring")
	End If

	arrReportsThemes(1) = obLanguage("EMReportNames","kReportByStudents")
	arrReportsThemes(2) = obLanguage("EMReportNames","kControlOfOccupOfData")
	If bIsHaveSchoolsDOU Then arrReportsThemes(3) = obLanguage("EMReportNames","kReportByDOU")
	If bIsHaveSchoolsUDOD Then arrReportsThemes(4) = obLanguage("EMReportNames","kReportByUDOD")
	If Not bDisableHealthData Then arrReportsThemes(5) = obLanguage("EMReportNames","kReportByChildrenWithSpecialNeeds")
	
	ReDim arrReportsInTheme(kThemes) ' указывается кол-во отчётов - 1
	arrReportsInTheme(0) = 0
	arrReportsInTheme(1) = IIF(bSummerTimeSpending, 13, 12)
	arrReportsInTheme(2) = 3
	arrReportsInTheme(3) = 9
	arrReportsInTheme(4) = 13
	arrReportsInTheme(5) = 0

End Sub

Sub GetNames()
	ReDim arrReportsNames(kThemes, kMaxReportsInTheme)

	arrReportsNames(0, 0) = obLanguage("EMReportNames","kTestingKnowledge")

	arrReportsNames(1, 0) = obLanguage("EMReportNames","kRNStudentsCount")
	arrReportsNames(1, 1) = obLanguage("EMReportNames","kRNDoublingStudents")
	arrReportsNames(1, 2) = obLanguage("EMReportNames","kRNDoublingStudentsPool")
	arrReportsNames(1, 3) = obLanguage("EMReportNames","kRNMovement")
	arrReportsNames(1, 4) = obLanguage("EMReportNames","kRNTitleListEM")
	arrReportsNames(1, 5) = obLanguage("EMReportNames","kRNTotalTitleList")
	arrReportsNames(1, 6) = obLanguage("EMReportNames","kRNSummaryForm3")
	arrReportsNames(1, 7) = obLanguage("EMReportNames","kRNTotalStudentsCntInfo")
	arrReportsNames(1, 8) = obLanguage("ReportNames","kRNStudentListG",0)
	arrReportsNames(1, 9) = obLanguage("EMReportNames","kRNGeneralEducQuality")
	arrReportsNames(1, 10) = obLanguage("EMReportNames","kRNSecondaryEducQuality")
	arrReportsNames(1, 11) = obLanguage("EMReportNames","kRNTotalSchoolPerfomance")
	arrReportsNames(1, 12) = obLanguage("EMReportNames","kRNAttendanceMonitor")
	If bSummerTimeSpending Then arrReportsNames(1, 13) = obLanguage("EMReportNames","kStudentsSummerInfo")
	If bEnableStudentsDataQuality Then
		arrReportsNames(2, 0) = obLanguage("ReportNames","kStaffDataFilling")
		arrReportsNames(2, 1) = obLanguage("ReportNames","kStudentsDataFilling",kFuncType_Common)
	End If
	arrReportsNames(2, 2) = obLanguage("ReportNames","kRNJournalFilling",kFuncType_Common)
	arrReportsNames(2, 3) = obLanguage("ReportNames","kRNEnrolling")
	
	arrReportsNames(3, 0) = obLanguage("EMReportNames","kRNChildrenNotAttendingDOU")
	arrReportsNames(3, 1) = obLanguage("EMReportNames","kRNMovedOutStudentListDOUG")
	arrReportsNames(3, 2) = obLanguage("EMReportNames","kRNParentPayInfo")
	arrReportsNames(3, 3) = obLanguage("EMReportNames","kRNPayBenefitRecipientList")
	arrReportsNames(3, 4) = obLanguage("EMReportNames","kRNPayBenefitRecipientCount")
	arrReportsNames(3, 5) = obLanguage("ReportNames","kRNInvalidsCount")
	arrReportsNames(3, 6) = obLanguage("EMReportNames","kRNParentPayForCommiss")
	arrReportsNames(3, 7) = obLanguage("EMReportNames","kRNTitleListDouEM")
	arrReportsNames(3, 8) = obLanguage("EMReportNames","kRNTotalTitleListDou")
	arrReportsNames(3, 9) = obLanguage("ReportNames","kRNJournalFilling",kFuncType_PreSchool)

	arrReportsNames(4, 0) = obLanguage("EMReportNames","kRNCoverageAddEducationStudents")
	arrReportsNames(4, 1) = obLanguage("EMReportNames","kRNCoverageAddEducation")
	arrReportsNames(4, 2) = obLanguage("EMReportNames","kRNAddSchoolStudentListOnAssertion")
	arrReportsNames(4, 3) = obLanguage("EMReportNames","kRNEmploymentOfStudentsInGroupsUDOD")
	arrReportsNames(4, 4) = obLanguage("EMReportNames","kRNListClassCompleteSet")
	arrReportsNames(4, 5) = obLanguage("EMReportNames","kRNCountComposByYears")
	arrReportsNames(4, 6) = obLanguage("EMReportNames","kRNAgeComposition")
	arrReportsNames(4, 7) = obLanguage("EMReportNames","kRNAddStudentsStudyLoad")
	arrReportsNames(4, 8) = obLanguage("EMReportNames","kRNASStudyLoadPerson")
	arrReportsNames(4, 9) = obLanguage("EMReportNames","kRNAddSchoolStudentsIntersect")
	arrReportsNames(4, 10) = obLanguage("EMReportNames","kRNEmploymentStudentsOUInTheAssociationsUDOD")
	arrReportsNames(4, 11) = obLanguage("EMReportNames","kRNChildrenAddEducation")
	arrReportsNames(4, 12) = obLanguage("EMReportNames","kRNEmploymentStudentsByTypes")
	arrReportsNames(4, 13) = obLanguage("ReportNames","kRNJournalFilling",kFuncType_Add)

	arrReportsNames(5, 0) = obLanguage("EMReportNames","kRNPMPKRecommendationEM")
End Sub

Sub GetLinks()
	ReDim arrReportsFiles(kThemes, kMaxReportsInTheme)
	arrReportsFiles(0, 0) = "/asp/Reports/KPM/KPM.asp"

	arrReportsFiles(1, 0) = "ReportStudentsCount.asp"
	arrReportsFiles(1, 1) = "ReportDoublingStudents.asp"
	arrReportsFiles(1, 2) = "ReportDoublingStudentsPool.asp"
	arrReportsFiles(1, 3) = "ReportMovement.asp"
	arrReportsFiles(1, 4) = "ReportTitleList.asp?Regime=1"
	arrReportsFiles(1, 5) = "ReportTitleList.asp?Regime=2"
	arrReportsFiles(1, 6) = "ReportForm3.asp"
	arrReportsFiles(1, 7) = "ReportStudentsCntInfo.asp"
	arrReportsFiles(1, 8) = "ReportStudentListG.asp"
	arrReportsFiles(1, 9) = "ReportEducQuality.asp?SecondaryEduc=0"
	arrReportsFiles(1, 10) = "ReportEducQuality.asp?SecondaryEduc=1"
	arrReportsFiles(1, 11) = "ReportTotalSchoolPerfomanceForTerm.asp"
	arrReportsFiles(1, 12) = "ReportAttendanceMonitor.asp"
	If bSummerTimeSpending Then arrReportsFiles(1, 13) = "ReportStudentsSummerInfoEM.asp"
	If bEnableStudentsDataQuality Then
		arrReportsFiles(2, 0) = "ReportStaffDataFillingEM.asp"
		arrReportsFiles(2, 1) = "ReportStudentsDataFillingEM.asp?FuncTp=2"
	End If
	arrReportsFiles(2, 2) = "ReportJournalFilling.asp?FuncTp=2"
	arrReportsFiles(2, 3) = "ReportEnrolling.asp"

	arrReportsFiles(3, 0) = "ReportChildrenNotAttendingDOU.asp"
	arrReportsFiles(3, 1) = "ReportMovedOutStudentListDOUG.asp"
	arrReportsFiles(3, 2) = "ReportParentPayInfo.asp"
	arrReportsFiles(3, 3) = "ReportPayBenifitRecipient.asp?List=1"
	arrReportsFiles(3, 4) = "ReportPayBenifitRecipient.asp?List=0"
	arrReportsFiles(3, 5) = "ReportInvalidsCount.asp"
	arrReportsFiles(3, 6) = "ReportParentPayForCommiss.asp"
	arrReportsFiles(3, 7) = "ReportTitleListDou.asp?Regime=1"
	arrReportsFiles(3, 8) = "ReportTitleListDou.asp?Regime=2"
	arrReportsFiles(3, 9) = "ReportJournalFilling.asp?FuncTp=1"

	arrReportsFiles(4, 0) = "ReportCoverageAddEducationStudents.asp"
	arrReportsFiles(4, 1) = "ReportCoverageAddEducation.asp"
	arrReportsFiles(4, 2) = "ReportAddSchoolStudentListOnAssertion.asp"
	arrReportsFiles(4, 3) = "ReportEmploymentOfStudentsInGroupsUDOD.asp"
	arrReportsFiles(4, 4) = "ReportClass2AddClass.asp"
	arrReportsFiles(4, 5) = "ReportCountComposByYears.asp?Age=0"
	arrReportsFiles(4, 6) = "ReportCountComposByYears.asp?Age=1"
	arrReportsFiles(4, 7) = "ReportAddStudentsStudyLoad.asp"
	arrReportsFiles(4, 8) = "ReportASStudyLoadPerson.asp"
	arrReportsFiles(4, 9) = "ReportAddSchoolIntersect.asp"
	arrReportsFiles(4, 10) = "ReportEmploymentStudentsOUInTheAssociationsUDOD.asp"
	arrReportsFiles(4, 11) = "ReportChildrenAddEducation.asp"
	arrReportsFiles(4, 12) = "ReportEmploymentStudentsByTypes.asp"
	arrReportsFiles(4, 13) = "ReportJournalFilling.asp?FuncTp=3"

	arrReportsFiles(5, 0) = "ReportPMPKRecommend.asp"
End Sub
%>
