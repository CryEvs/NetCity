<% ' © 2007-2015 IRTech. All rights reserved.

If Not bIsDebug Then On Error Resume Next

'School Tabs
Const tbSchoolSetup	= 0
Const tbSchoolInfo	= 1
Const tbRegSettings	= 2
Const tbSchoolSettings	= 48
Const tbSecRoles	= 3
Const tbReferenceBook	= 4
Const tbStaff		= 5
Const tbStudents	= 6
Const tbYear		= 7
Const tbDocuments	= 8
Const tbCrtClass	= 10
Const tbEnrlClass	= 11
Const tbApplPol		= 12
Const tbGrScales	= 13
Const tbLessonsPlans	= 15
Const tbClndrYear	= 9
Const tbClndrMonth	= 18
Const tbClndrWeek	= 19
Const tbClndrDay	= 20
Const tbTotals		= 17
Const tbJurnal		= 29
Const tbAttendance	= 23
Const tbReports		= 24
Const tbAnnView		= 25
Const tbQA			= 27
Const tbSettings	= 28
Const tbStudentDiary	= 30
Const tbLearningModules= 31
Const tbSchoolSubjects= 32
Const tbSubjects	= 33
Const tbTimes		= 34
Const tbClassMeets	= 35
Const tbCuriculumComponents= 36
Const tbCuriculumPlan	= 37
Const tbIUP				= 49
Const tbCuriculumLimits	= 38
Const tbParents			= 39
Const tbSchoolResources	= 40
Const tbPersonalPortfolios = 51
Const tbProjectPortfolios = 52
Const tbCuriculumProfiles= 41
Const tbMoveBook		= 42
Const tbMovePoolStudents= 43
Const tbMovePoolStaff	= 44
Const tbAdditionalReports = 45
Const tbReportConstructor = 46
Const tbRooms		= 47
Const tbLAIntegrationND = 59
Const tbParentPay	= 53
Const tbInforms		= 54
Const tbEgeResults	= 55
Const tbAnalytics	= 56
'Const tbInviteStat = 56
Const tbMarksBySms = 57
Const tbStatReports = 58
Const tbPrintAttestat = 60
'Const tbPrintAttestat_Max = 61 ' last value

Const lastTab = 60
Dim strCurrPage
' *******************************************************************

'SA Tabs
Const tb_SA_School = 1
Const tb_SA_Addresses = 2
Const tb_SA_RefBooks = 3
Const tb_SA_Import = 4
Const tb_SA_Movement = 5
Const tb_SA_Statistics = 6
Const tb_SA_Settings = 7
Const tb_SA_Diagnos = 8

'Em Tabs
Const tb_EM_Schools = 1
Const tb_EM_DOUPay = 2
Const tb_EM_EGEInfo = 3
Const tb_EM_Users = 4
Const tb_EM_Reports = 5
Const tb_EM_StandardReports = 6
Const tb_EM_QA = 7
Const tb_EM_StatForms = 8
Const tb_EM_AdditionalReports = 9
Const tb_EM_ReportConstructor = 10
Const tb_EM_StatReports = 11
Const tb_EM_PoolStudentList = 12
Const tb_EM_Statistics = 13

Const maxNumOfFolder = 11
'Folders by pages
Dim arrTabNames
Dim arrTabURLs

Dim arrFolders 'maxNumOfFolder
Dim arrDefaultFolders(17), arrCurrDefaultFolders
Dim nSchMaxGrade, strPageTitle

If GetScreenType() = stSimple Or GetScreenType() = stAjax Or bIsAdminInterface Or bIsEducManager Then
	If bIsAdminInterface Then

		ReDim arrTabNames(8)
		ReDim arrTabURLs(8)

		arrTabNames(tb_SA_School)		= obLanguage("MenuFolders","kFSASchools")
		arrTabNames(tb_SA_Addresses)	= obLanguage("MenuFolders","kFSAAddresses")
		arrTabNames(tb_SA_RefBooks)		= obLanguage("MenuFolders","kFSARefBooks")
		arrTabNames(tb_SA_Import)		= obLanguage("MenuFolders","kFSAImport")
		arrTabNames(tb_SA_Movement)		= obLanguage("MenuFolders","kFSAMovement")
		arrTabNames(tb_SA_Statistics)	= obLanguage("MenuFolders","kFSAStatistics")
		arrTabNames(tb_SA_Settings)		= obLanguage("MenuFolders","kFSASettings")
		arrTabNames(tb_SA_Diagnos)		= obLanguage("MenuFolders","kDiagnos")

		arrTabURLs(tb_SA_School)		= "/angular/admin/schools/"
		arrTabURLs(tb_SA_Addresses)		= "/asp/administration/AddrRefs.asp"
		arrTabURLs(tb_SA_RefBooks)		= "/asp/administration/Refs.asp"
		arrTabURLs(tb_SA_Import)		= "/asp/administration/Import.asp"
		arrTabURLs(tb_SA_Movement)		= "/asp/administration/PoolStudentList.asp"
		arrTabURLs(tb_SA_Statistics)	= "/asp/administration/usermon.asp"
		arrTabURLs(tb_SA_Settings)		= "/asp/administration/options.asp"
		arrTabURLs(tb_SA_Diagnos)		= "/asp/administration/diagnos.asp"

		arrDefaultFolders(mi_SA_School)		= tb_SA_School
		arrDefaultFolders(mi_SA_Addresses)	= tb_SA_Addresses
		arrDefaultFolders(mi_SA_RefBooks)	= tb_SA_RefBooks
		arrDefaultFolders(mi_SA_Import)		= tb_SA_Import
		arrDefaultFolders(mi_SA_Movement)	= tb_SA_Movement
		arrDefaultFolders(mi_SA_Statistics)	= tb_SA_Statistics
		arrDefaultFolders(mi_SA_Settings)	= tb_SA_Settings
		arrDefaultFolders(mi_SA_Diagnos)	= tb_SA_Diagnos

	ElseIf bIsEducManager Then
		ReDim arrTabNames(13)
		ReDim arrTabURLs(13)

		arrTabNames(tb_EM_Schools)				= obLanguage("MenuFolders","kFEOSchools")
		arrTabNames(tb_EM_DOUPay)				= obLanguage("MenuFolders","kFEODOUPay")
		arrTabNames(tb_EM_EGEInfo)				= obLanguage("MenuFolders","kFEOEGEInfo")
		arrTabNames(tb_EM_Users)				= obLanguage("MenuFolders","kUsers")
		arrTabNames(tb_EM_StandardReports)		= obLanguage("MenuFolders","kFEOKPMReports")
		arrTabNames(tb_EM_QA)					= obLanguage("MenuFolders","kFNQAReports")
		arrTabNames(tb_EM_StatForms)			= obLanguage("MenuFolders","kStatForms")
		arrTabNames(tb_EM_AdditionalReports)	= obLanguage("MenuFolders","kFEOAdditionalReports")
		arrTabNames(tb_EM_ReportConstructor)	= obLanguage("MenuFolders","kFEOReportConstructor")
		arrTabNames(tb_EM_StatReports)			= obLanguage("MenuFolders","kStatReports")
		arrTabNames(tb_EM_PoolStudentList)		= obLanguage("MenuFolders","kFSAMovement")
		arrTabNames(tb_EM_Statistics)			= obLanguage("MenuFolders","kFSAStatistics")

		arrTabURLs(tb_EM_Schools)				= "/asp/educ_manager/em_options.asp"
		arrTabURLs(tb_EM_DOUPay)				= "/asp/educ_manager/DOUPay.asp"
		arrTabURLs(tb_EM_EGEInfo)				= "/asp/educ_manager/EGE/EGE.asp"
		arrTabURLs(tb_EM_Users)					= "/asp/educ_manager/emUsers.asp"
		arrTabURLs(tb_EM_Reports) 				= "/asp/educ_manager/Reports/Reports.asp"
		arrTabURLs(tb_EM_StandardReports) 		= "/asp/educ_manager/Reports/Reports.asp"

		arrTabURLs(tb_EM_AdditionalReports)		= "/asp/ReportConstructor/AdditionalReports.asp"
		arrTabURLs(tb_EM_ReportConstructor)		= "/asp/ReportConstructor/ReportConstructor.asp"

		arrTabURLs(tb_EM_QA)					= "/asp/EDUC_MANAGER/Reports/QualityAssessmentAnalytics.asp"
		arrTabURLs(tb_EM_StatForms)				= "/asp/educ_manager/Reports/StatForms/StatForms.asp"
		arrTabURLs(tb_EM_StatReports)			= "/asp/educ_manager/Reports/StatReports/StatReports.asp"

		arrTabURLs(tb_EM_PoolStudentList)		= "/asp/educ_manager/PoolStudentList.asp"
		arrTabURLs(tb_EM_Statistics)			= "/asp/educ_manager/UserStat.asp"

		If GetScreenType() <> stSimple Then
			arrDefaultFolders(mi_EM_Management)				= tb_EM_Schools
			arrDefaultFolders(mi_EM_Users)					= tb_EM_Users
			arrDefaultFolders(mi_EM_Reports)				= tb_EM_Reports
			arrDefaultFolders(mi_EM_PoolStudentList)		= tb_EM_PoolStudentList
			arrDefaultFolders(mi_EM_Statistics)				= tb_EM_Statistics
			arrDefaultFolders(mi_EM_QA)						= tb_EM_QA
		End If
	End If
	arrCurrDefaultFolders = arrDefaultFolders
Else
	ReDim arrTabNames(lastTab)
	ReDim arrTabURLs(lastTab)
	'Names of Tabs
	arrTabNames(tbCuriculumLimits)	= obLanguage("MenuFolders","kFNCurriculumLimits")
	arrTabNames(tbCuriculumPlan)	= obLanguage("MenuFolders","kFNCurriculumPlan")
	arrTabNames(tbIUP)	= obLanguage("MenuFolders","kFNIUP")
	arrTabNames(tbCuriculumComponents)	= obLanguage("MenuFolders","kFNComponents")
	arrTabNames(tbCuriculumProfiles)	= obLanguage("MenuFolders","kFNProfiles",strFunctionalityType)
	arrTabNames(tbSchoolSubjects)	= obLanguage("MenuFolders","kFNSubjects")
	arrTabNames(tbSchoolInfo)		= obLanguage("MenuFolders","kFNSchoolInfoCard_")
	arrTabNames(tbRegSettings)		= obLanguage("MenuFolders","kFNRegionalSettings_")
	arrTabNames(tbSchoolSettings)	= obLanguage("MenuFolders","kFNSchoolSettings",strFunctionalityType)
	arrTabNames(tbSecRoles)			= obLanguage("MenuFolders","kFNSecurityRights")
	arrTabNames(tbReferenceBook)	= obLanguage("MenuFolders","kFNReferenceBooks")
	arrTabNames(tbMoveBook)			= obLanguage("MenuFolders","kFNStudentsMovement",strFunctionalityType)
	arrTabNames(tbMovePoolStudents)	= IIf(MODULE_ESERVICES, obLanguage("MenuFolders","kFNStudentsPool_ES"), obLanguage("MenuFolders","kFNStudentsPool"))
	arrTabNames(tbMovePoolStaff)	= obLanguage("MenuFolders","kFNStaffPool")
	arrTabNames(tbStaff)		= obLanguage("MenuFolders","kFNStaff")
	arrTabNames(tbStudents)		= obLanguage("MenuFolders","kFNStudents",strFunctionalityType)
	arrTabNames(tbParents)		= obLanguage("MenuFolders","kFNParents")
	'arrTabNames(tbInviteStat)   = ""'obLanguage("MenuFolders","kFNInviteStat")
	arrTabNames(tbInforms)		= obLanguage("MenuFolders","kFNInforms")
	arrTabNames(tbYear)			= obLanguage("MenuFolders","kFNSchoolYearAndTerms")
	arrTabNames(tbDocuments)	= obLanguage("MenuFolders","kFNDocuments")
	arrTabNames(tbCrtClass)		= obLanguage("MenuFolders","kFNClasses",strFunctionalityType)
	arrTabNames(tbSubjects)		= obLanguage("MenuFolders","kFNClassSubjects")
	arrTabNames(tbEnrlClass)	= obLanguage("MenuFolders","kFNSubgroups")
	arrTabNames(tbApplPol)		= obLanguage("MenuFolders","kFNAppSettings")
	arrTabNames(tbGrScales)		= obLanguage("MenuFolders","kFNGradingScales")
	arrTabNames(tbLessonsPlans)	= obLanguage("MenuFolders","kLessonPlans",strFunctionalityType)

	arrTabNames(tbClndrYear)	= obLanguage("MenuFolders","kFNYear")
	arrTabNames(tbClndrMonth)	= obLanguage("MenuFolders","kFNMonth")
	arrTabNames(tbClndrWeek)	= obLanguage("MenuFolders","kFNWeek")
	arrTabNames(tbClndrDay)		= obLanguage("MenuFolders","kFNDay")
	arrTabNames(tbClassMeets)	= obLanguage("MenuFolders","kFNCreateSchedule")
	arrTabNames(tbTimes)		= obLanguage("MenuFolders","kFNScheduleTimes", strFunctionalityType)
	arrTabNames(tbRooms)		= obLanguage("MenuFolders","kFNRooms", strFunctionalityType)
	arrTabNames(tbJurnal)		= obLanguage("MenuFolders","kFNJournal",strFunctionalityType)
	arrTabNames(tbTotals)		= obLanguage("MenuFolders","kFNTotals")
	arrTabNames(tbAttendance)	= obLanguage("MenuFolders","kFNAttendance")
	arrTabNames(tbParentPay)	= obLanguage("MenuFolders","kFNParentPay")
	arrTabNames(tbReports)		= obLanguage("MenuFolders","kFNReports")
	arrTabNames(tbStatReports)	= obLanguage("MenuFolders","kStatReports")
	arrTabNames(tbAnnView)		= obLanguage("MenuFolders","kFNViewAnnouncements")
	arrTabNames(tbQA)			= obLanguage("MenuFolders","kFNLearningApplications")
	arrTabNames(tbSchoolResources) = obLanguage("MenuFolders","kFNLinkDirectory")
	arrTabNames(tbPersonalPortfolios) = obLanguage("MenuFolders","kFNPersonalPortfolio")
	arrTabNames(tbProjectPortfolios) = obLanguage("MenuFolders","kFNProjectPortfolio")
	arrTabNames(tbSettings)			= obLanguage("MenuFolders","kMySettings")

	arrTabNames(tbMarksBySms)			= obLanguage("MenuFolders","kMarksBySms")

	arrTabNames(tbStudentDiary)		= obLanguage("MenuFolders","kStudentDiary")
	arrTabNames(tbLearningModules)	= obLanguage("MenuFolders","kFNLearningApplications")
	arrTabNames(tbAdditionalReports) = obLanguage("MenuFolders","kFNAdditionalReports")
	arrTabNames(tbReportConstructor) = obLanguage("MenuFolders","kFNReportConstructor")
	arrTabNames(tbAnalytics) = obLanguage("MenuFolders","kFNQAReports")
	arrTabNames(tbLAIntegrationND)	= obLanguage("LearnApp","kCollectionOfResources")

	arrTabNames(tbEgeResults)	= obLanguage("MenuFolders","kFNEgeResults")
	arrTabNames(tbPrintAttestat)	= obLanguage("MenuFolders","kFNPrintAttestat")

	'URL of Tabs
	arrTabURLs(tbCuriculumLimits)	= "/asp/SetupSchool/Calendar/Curriculum/CuriculumLimits.asp"
	arrTabURLs(tbCuriculumPlan)		= "/asp/SetupSchool/Calendar/Curriculum/Classic/CuriculumPlan.asp"
	arrTabURLs(tbIUP)		= "/asp/SetupSchool/Calendar/Curriculum/IUP/CuriculumPlan.asp"
	arrTabURLs(tbCuriculumComponents) = "/asp/SetupSchool/Calendar/Curriculum/CuriculumComponents.asp"
	arrTabURLs(tbCuriculumProfiles)	= "/asp/SetupSchool/Calendar/Curriculum/CuriculumProfiles.asp"
	arrTabURLs(tbMoveBook)			= "/asp/SetupSchool/Movement/MoveBook.asp"
	arrTabURLs(tbMovePoolStudents)	= "/asp/SetupSchool/Movement/PoolStudents.asp"
	arrTabURLs(tbMovePoolStaff)		= "/asp/SetupSchool/Movement/PoolStaff.asp"
	arrTabURLs(tbSchoolSetup)	= "/asp/SetupSchool/SetUpSchool.asp"
	arrTabURLs(tbSchoolInfo)	= "/asp/SetupSchool/SchoolForms/SchoolInfo.asp"
	arrTabURLs(tbRegSettings)	= "/asp/SetupSchool/RegionalSettings.asp"
	arrTabURLs(tbSchoolSettings)= "/asp/SetupSchool/SchoolSettings.asp"
	arrTabURLs(tbSecRoles)		= "/asp/SetupSchool/SecurityRolesSetup.asp"
	arrTabURLs(tbReferenceBook)	= "/asp/SetupSchool/RefBooks.asp"
	arrTabURLs(tbStaff)			= "/asp/SetupSchool/Staff.asp"
	arrTabURLs(tbStudents)		= "/asp/SetupSchool/Students.asp"
	arrTabURLs(tbParents)		= "/asp/SetupSchool/Parents.asp"
	'arrTabURLs(tbInviteStat)	= ""'"/asp/Administration/InviteStat.asp"
	arrTabURLs(tbInforms)		= "/asp/SetupSchool/Students.asp?Inform=1"
	arrTabURLs(tbYear)			= "/asp/SetupSchool/Calendar/Years.asp"
	arrTabURLs(tbSchoolSubjects)= "/asp/SetupSchool/Calendar/SchoolSubjects.asp"
	arrTabURLs(tbClndrYear)		= "/asp/SetupSchool/Calendar/YearView.asp"
	arrTabURLs(tbCrtClass)		= "/asp/ClassManagement/Classes.asp"
	arrTabURLs(tbSubjects)		= "/asp/ClassManagement/ClassSubjects.asp"
	arrTabURLs(tbEnrlClass)		= "/asp/ClassManagement/Enrollment.asp"
	arrTabURLs(tbApplPol)		= "/asp/LearnApp/AppPolicies.asp"
	arrTabURLs(tbGrScales)		= "/asp/LearnApp/GradeScales.asp"
	arrTabURLs(tbLessonsPlans)		= "/asp/Curriculum/Planner.asp"
	arrTabURLs(tbLAIntegrationND)	= "/asp/LearnApp/EducationPortalND.asp"
	
	If bIsStaff Then
		strCurrPage = obTokenMgr.GetData(strToken, stCalendarMonthViewType)
		If IsEmpty(strCurrPage) Then
			arrTabURLs(tbClndrMonth) = "/asp/Calendar/MonthView.asp"
		Else
			arrTabURLs(tbClndrMonth) = strCurrPage
		End If
		
		strCurrPage = obTokenMgr.GetData(strToken, stCalendarWeekViewType)
		If IsEmpty(strCurrPage) Then
			arrTabURLs(tbClndrWeek) = "/asp/Calendar/WeekViewTime.asp"
		Else
			arrTabURLs(tbClndrWeek) = strCurrPage
		End If
		
		strCurrPage = obTokenMgr.GetData(strToken, stCalendarDayViewType)
		If IsEmpty(strCurrPage) Then
			arrTabURLs(tbClndrDay) = "/asp/Calendar/DayView.asp"
		Else
			arrTabURLs(tbClndrDay) = strCurrPage
		End If

		arrTabURLs(tbTimes) = "/asp/Calendar/STVariants.asp"
		arrTabURLs(tbRooms) = "/asp/Calendar/Rooms.asp"
		arrTabURLs(tbClassMeets) = "/asp/Calendar/ClassMeetings.asp"
		arrTabURLs(tbAdditionalReports) = "/asp/ReportConstructor/AdditionalReports.asp"
		arrTabURLs(tbStatReports)	= "/asp/Reports/StatReports/StatReports.asp"
		arrTabURLs(tbReportConstructor) = "/asp/ReportConstructor/ReportConstructor.asp"
		arrTabURLs(tbDocuments)	= "/asp/SetupSchool/Resources/SchoolDocs.asp"
	Else
		IF HasUserRole(rlParent) THEN
			arrTabURLs(tbDocuments)	= "/asp/SetupSchool/Resources/SchoolDocs.asp"
		END IF
		strCurrPage = obTokenMgr.GetData(strToken, stCalendarMonthViewType)
		If IsEmpty(strCurrPage) Then
			arrTabURLs(tbClndrMonth) = "/asp/Calendar/MonthViewS.asp"
		Else
			arrTabURLs(tbClndrMonth) = strCurrPage
		End If
		
		strCurrPage = obTokenMgr.GetData(strToken, stCalendarWeekViewType)
		If IsEmpty(strCurrPage) Then
			arrTabURLs(tbClndrWeek) = "/asp/Calendar/WeekViewTimeS.asp"
		Else
			arrTabURLs(tbClndrWeek) = strCurrPage
		End If
		
		arrTabURLs(tbClndrDay) = "/asp/Calendar/DayViewS.asp"
	End If

	arrTabURLs(tbReports) = "/asp/Reports/Reports.asp"
	arrTabURLs(tbAnalytics) = "/asp/Reports/QualityAssessmentAnalytics.asp"
	arrTabURLs(tbTotals)	= "/asp/Grade/Totals.asp"
	arrTabURLs(tbJurnal)	= "/asp/Grade/Journal.asp"
	arrTabURLs(tbAttendance)= "/asp/Grade/Attendance.asp"
	arrTabURLs(tbParentPay)= "/asp/Grade/ParentPay.asp"
	arrTabURLs(tbAnnView)	= "/asp/Announce/ViewAnnouncements.asp"
	arrTabURLs(tbQA)		= "/asp/LearnApp/QAssignment.asp"
	arrTabURLs(tbSchoolResources) = "/asp/Curriculum/SchoolResources.asp"
	arrTabURLs(tbPersonalPortfolios) = "/asp/SetupSchool/Portfolio/PersonalPortfolios.asp"
	arrTabURLs(tbProjectPortfolios) = "/asp/SetupSchool/Portfolio/ProjectPortfolios.asp"
	arrTabURLs(tbSettings)	= "/asp/MySettings/MySettings.asp"
	arrTabURLs(tbStudentDiary)= "/asp/Curriculum/Assignments.asp"
	arrTabURLs(tbLearningModules) = "/asp/LearnApp/QAssignment.asp"
	arrTabURLs(tbMarksBySms)	= "/asp/MySettings/MarksBySms.asp"

	arrTabURLs(tbEgeResults)= "/asp/Grade/EGE/Results.asp"
	arrTabURLs(tbPrintAttestat)= "/asp/SetupSchool/SchoolForms/Licences/IVAttestat.asp?gradeType=9"

	arrDefaultFolders(miQA)		= tbAnalytics
	'Default tab for page
'	arrDefaultFolders(miSetupSchool)		= tbSchoolSetup
'	If HasUserRight(arProfileEditSchoolInfo) or HasUserRight(arProfileViewSchoolInfo) Then
'		arrDefaultFolders(miSetupSchoolProfile) = tbSchoolInfo
'	ElseIf HasUserRight(arProfileEditRegionalSettings) Then
'		arrDefaultFolders(miSetupSchoolProfile) = tbRegSettings
'	ElseIf HasUserRight(arEditSchoolSettings) Then
'		arrDefaultFolders(miSetupSchoolProfile) = tbSchoolSettings
'	ElseIf HasUserRight(arProfileDefineSecurityRoles) Then
'		arrDefaultFolders(miSetupSchoolProfile) = tbSecRoles
'	ElseIf HasUserRight(arEditReferenceBook) Then
'		arrDefaultFolders(miSetupSchoolProfile) = tbReferenceBook
'	End If
'	If HasUserRight(arUsersEditStaff) Or HasUserRight(arUsersEditStaffMedInfo) Or HasUserRight(arShortInfoStaff) Then arrDefaultFolders(miSetupSchoolUsers) = tbStaff Else arrDefaultFolders(miSetupSchoolUsers) = tbStaff
'	If HasUserRight(arCreateCloseEditYear) Or HasUserRight(arMoveBookEdit) Then arrDefaultFolders(miSetupSchoolCalendar) = tbYear Else arrDefaultFolders(miSetupSchoolCalendar) = tbCuriculumPlan
'	If HasUserRight(arMoveBookView) Or HasUserRight(arMoveBookEdit) Then
'		arrDefaultFolders(miSetupSchoolMove) = tbMoveBook
'	ElseIf HasUserRight(arMovePoolStudents) Then
'		arrDefaultFolders(miSetupSchoolMove) = tbMovePoolStudents
''	ElseIf HasUserRight(arMovePoolStaff) Then
''		arrDefaultFolders(miSetupSchoolMove) = tbMovePoolStaff
'	End If

'	If HasUserRight(arClassMgmViewClassSubjAll) Then
'		arrDefaultFolders(miClassManagement) = tbCrtClass
'	ElseIf HasUserRight(arClassMgmCreateClass) Then
'		arrDefaultFolders(miClassManagement)= tbCrtClass
'	ElseIf HasUserRight(arClassMgmEditSubjects) Then 
'		arrDefaultFolders(miClassManagement)= tbSubjects
'	ElseIf HasUserRight(arClassMgmEnrollClass) Then 
'		arrDefaultFolders(miClassManagement)= tbEnrlClass
'	End If

'	arrDefaultFolders(miSchoolDocs)				= tbSchoolDocs
'	arrDefaultFolders(miCurriculumManagement)	= tbCreateCur
'	arrDefaultFolders(miMyCalendar)				= tbClndrYear
'	arrDefaultFolders(miGrades)					= IIF(CLng(strFunctionalityType) <> kFuncType_PreSchool, tbJurnal, tbParentPay)
'	arrDefaultFolders(miReports)				= IIF(CLng(strFunctionalityType) = kFuncType_Orphanage, tbStatReports, tbReports)
'	arrDefaultFolders(miAnnouncements)			= tbAnnView
'	arrDefaultFolders(miLearningApplications)	= IIF(kLAIntegrationNewDisk, tbLAIntegrationND, tbQA)
'	arrDefaultFolders(miSchoolResources)		= tbSchoolResources
'	arrDefaultFolders(miStudentDiary)			= tbStudentDiary

	arrCurrDefaultFolders = arrDefaultFolders
End If

Function GetMenuItemFolders_EM(nMenuItem)
	Dim arrRetFolders
	
	Select Case nMenuItem
		Case mi_EM_Management
			ReDim arrRetFolders(0)
			arrRetFolders(0) = tb_EM_Schools
			If Not bIsRegionEMForSchool Then
				If IsPreSchoolExists() Then
					Call AddElementToArray(arrRetFolders, tb_EM_DOUPay)
				End If
				Call AddElementToArray(arrRetFolders, tb_EM_EGEInfo)
			End If
		Case mi_EM_Reports
			ReDim arrRetFolders(0)
			arrRetFolders(0) = tb_EM_StandardReports

			If PERSON_DATA Then
				Call AddElementToArray(arrRetFolders, tb_EM_AdditionalReports)
				Call AddElementToArray(arrRetFolders, tb_EM_ReportConstructor)
			End If
			
			Call AddElementToArray(arrRetFolders, tb_EM_StatForms)
			If kMODULE_STATREPORTS Then
				Call AddElementToArray(arrRetFolders, tb_EM_StatReports)
			End If
		Case mi_EM_QA
			ReDim arrRetFolders(0)
			If Module_QA_Available() Then
				If Not IsDull(MODULE_QA_URL) Then
					Call AddElementToArray(arrRetFolders, tb_EM_QA)
				End If
			End If
		Case Else
			GetMenuItemFolders_EM = Empty
			Exit Function
	End Select

	GetMenuItemFolders_EM = arrRetFolders
End Function

Function GetMenuItemFolders(nMenuItem)
	Dim arrRetFolders(10)
	Dim bOrphanage

	bOrphanage = (CLng(strFunctionalityType) = kFuncType_Orphanage)
	
	Select Case nMenuItem
		Case miManagementSchoolInfo
			If HasUserRight(arProfileEditSchoolInfo) Or HasUserRight(arProfileViewSchoolInfo) Then arrRetFolders(1) = tbSchoolInfo
			If HasUserRight(arProfileEditRegionalSettings) Then arrRetFolders(2) = tbRegSettings
			If HasUserRight(arEditSchoolSettings) Then arrRetFolders(3) = tbSchoolSettings
			If HasUserRight(arProfileDefineSecurityRoles) Then arrRetFolders(4) = tbSecRoles
			If HasUserRight(arEditReferenceBook) Then arrRetFolders(5) = tbReferenceBook
		Case miManagementUsers
			If HasUserRight(arUsersEditStaff) Or HasUserRight(arUsersEditStaffMedInfo) Or HasUserRight(arShortInfoStaff) Then 
				arrRetFolders(1) = tbStaff
				'arrRetFolders(5) = tbInviteStat
			End If
			If HasUserRight(arUsersEditStudents) Or HasUserRight(arEditInfoSelf) Or HasUserRight(arShortInfoStudents) Or HasUserRight(arUsersEditStudentsPsyInfo) Then
				arrRetFolders(2) = tbStudents : arrRetFolders(3) = tbParents
			Else
				If HasUserRight(arUsersEditStudentsMedInfo) Then arrRetFolders(2) = tbStudents
			End If
			'If MODULE_INFORMS And CLng(strFunctionalityType) <> kFuncType_Add And CLng(strFunctionalityType) <> kFuncType_EM Then
			'	If HasUserRight(arMakeInform) Then arrRetFolders(4) = tbInforms
			'End If
		Case miManagementMovements
			If HasUserRight(arMoveBookView) Or HasUserRight(arMoveBookEdit) Then arrRetFolders(1) = tbMoveBook
			If HasUserRight(arMovePoolStudents) Then arrRetFolders(2) = tbMovePoolStudents
'			If HasUserRight(arMovePoolStaff) Then arrRetFolders(3) = tbMovePoolStaff
		Case miTotalAttestat
			If strFunctionalityType = kFuncType_Common Then
				If HasUserRight(arBrowseResultsEGEAllClasses) Or HasUserRight(arBrowseResultsEGEHisClassesOrSubjects) Or bIsEMForSchool Then
					If obTokenMgr.GetData(strToken, "RESULTSEGE") Then arrRetFolders(1) = tbEgeResults
				End If
				If Not bIsEMForSchool Then arrRetFolders(2) = tbPrintAttestat
			End If

		Case miCurriculumPlan
			If HasUserRight(arSchoolSubjects) Then
				If Not bIsEMForSchool Then
					arrRetFolders(2) = tbSchoolSubjects
					arrRetFolders(3) = tbCuriculumComponents
					arrRetFolders(4) = tbCuriculumProfiles
					arrRetFolders(5) = tbCuriculumLimits
				End If

				arrRetFolders(6) = tbCuriculumPlan

				If IsShowIUP() Then
					arrRetFolders(7) = tbIUP
				End If
			End If
			If HasUserRight(arCreateCloseEditYear) Or HasUserRight(arMoveBookEdit) Then arrRetFolders(1) = tbYear

		Case miLessonPlanning
			If HasUserRight(arCurrMgmCreate) Or HasUserRight(arCurrMgmCreateAll) Then
				arrRetFolders(1) = tbLessonsPlans
			ElseIf HasUserRight(arCurrMgmViewSelf) Or HasUserRight(arCurrMgmViewAll) Then
				arrRetFolders(1) = tbLessonsPlans
			End If

		Case miLearningGroups
			If HasUserRight(arClassMgmViewClassSubjAll) Then
				arrRetFolders(1) = tbCrtClass
				arrRetFolders(2) = tbSubjects
				If Not bIsEMForSchool And strFunctionalityType<>kFuncType_PreSchool Then arrRetFolders(3) = tbEnrlClass
			Else
				If HasUserRight(arClassMgmCreateClass) Then arrRetFolders(1) = tbCrtClass
				If HasUserRight(arClassMgmEditSubjects) Then arrRetFolders(2) = tbSubjects
				If HasUserRight(arClassMgmEnrollClass) And strFunctionalityType<>kFuncType_PreSchool Then arrRetFolders(3) = tbEnrlClass
			End If
		Case miLearningApplications
			If kLAIntegrationNewDisk Then arrRetFolders(1) = tbLAIntegrationND
			If HasUserRight(arLAViewMaterials) Or HasUserRight(arLAViewSelf) Or HasUserRight(arLAViewAll) Or HasUserRight(arLAEditSelf) Then arrRetFolders(2) = tbQA
			If HasUserRight(arLASetPolicies) Then arrRetFolders(3) = tbApplPol
			If HasUserRight(arLACreateGradingScales) And strFunctionalityType<>kFuncType_PreSchool Then arrRetFolders(4) = tbGrScales

		Case miCalendar
			If HasUserRight(arCalendarViewSelf) Or HasUserRight(arCalendarViewAll) Then
				arrRetFolders(1) = tbClndrYear
				arrRetFolders(2) = tbClndrMonth
				arrRetFolders(3) = tbClndrWeek
				arrRetFolders(4) = tbClndrDay
			ElseIf HasUserRight(arClassMgmPostClassEventSelf) Or HasUserRight(arClassMgmPostClassEventAll) Or HasUserRight(arPostSchoolEvent) Then
				arrRetFolders(1) = tbClndrYear
			End If
			If HasUserRight(arCalendarCreateCalendar) Then arrRetFolders(5) = tbClassMeets : arrRetFolders(6) = tbTimes : arrRetFolders(7) = tbRooms

		Case miJournal
			If strFunctionalityType <> kFuncType_PreSchool Then
				If HasUserRight(arJournalViewSelf) Or HasUserRight(arJournalViewAll) Or HasUserRight(arJournalEditSelf) Or HasUserRight(arJournalEditAll) Then arrRetFolders(1) = tbJurnal : arrRetFolders(2) = tbAttendance
				If HasUserRight(arTotalsViewSelf) Or HasUserRight(arTotalsViewAll) Or HasUserRight(arTotalsEditSelf) Or HasUserRight(arTotalsEditAll) Then arrRetFolders(3) = tbTotals
			Else
				If HasUserRight(arJournalViewSelf) Or HasUserRight(arJournalViewAll) Or HasUserRight(arJournalEditSelf) Or HasUserRight(arJournalEditAll) Then arrRetFolders(1) = tbParentPay : arrRetFolders(2) = tbAttendance 
			End If

		Case miReports
'			If HasUserRight(arReportsForAssignedClass) Then arrRetFolders(1) = tbReports : Exit Sub
'			If HasUserRight(arReportsForAllClasses) Then arrRetFolders(1) = tbReports : Exit Sub
'			If HasUserRight(arReportsViewForAssignedClass) Then arrRetFolders(1) = tbReports : Exit Sub
			If HasUserRight(arReportsForAssignedClass) Or HasUserRight(arReportsForAllClasses) Or HasUserRight(arReportsViewForAssignedClass) Or HasUserRight(arReportsViewAdministrativeReports) Then
				arrRetFolders(1) = tbReports
			End If

			If PERSON_DATA Then
				If HasUserRight(arReportsViewAdditionalReports) Then arrRetFolders(2) = tbAdditionalReports
				If HasUserRight(arReportsViewAdditionalReports) And HasUserRight(arReportsUseReportConstructor) And Not readonly Then
					arrRetFolders(3) = tbReportConstructor
				ElseIf HasUserRight(arReportsUseReportConstructor) And Not readonly Then
					arrRetFolders(2) = tbReportConstructor
				End If
			End If

			If HasUserAnyRights(Array(arBrowseStatReports, arFillStatReports)) Then
				arrRetFolders(4) = tbStatReports
			End If

		Case miQA
			If Not bFutureMode And Not bIsEMForSchool Then
				If Module_QA_Available() Then
					If Not IsDull(MODULE_QA_URL) And (CLng(strFunctionalityType) = kFuncType_Common) Then 
						If HasUserRoles(Array(rlAdmin, rlPrincipal, rlParent, rlStudent, rlTeacher)) Then 
							arrRetFolders(1) = tbAnalytics
						End If
					End If
				End If
			End If

		Case miResources
			If Not bOrphanage And Not bFutureMode And Not bIsEMForSchool Then
				arrRetFolders(1) = tbSchoolResources
				arrRetFolders(2) = tbPersonalPortfolios
				arrRetFolders(3) = tbProjectPortfolios
			End If
			If bIsStaff Then
				If HasUserRight(arSchoolDocsView) Then
					arrRetFolders(4) = tbDocuments
				ElseIf HasUserRight(arSchoolDocsEdit) Then
					arrRetFolders(4) = tbDocuments
				End If
			Else
				If HasUserRole(rlParent) Then
					If HasUserRight(arSchoolPublicDocsView) Then arrRetFolders(4) = tbDocuments
				End If
			End If

		Case miStudentDiary 'Students interface
			If HasUserRight(arAssignmentsViewComplete) Then arrRetFolders(1) = tbStudentDiary
			If kLAIntegrationNewDisk Then arrRetFolders(2) = tbLAIntegrationND
			If HasUserRight(arLAViewMaterials) Then arrRetFolders(3) = tbLearningModules
			If (HasUserRole(rlParent) Or HasUserRole(rlStudent)) And obTokenMgr.GetData(strToken, "RESULTSEGE") Then arrRetFolders(4) = tbEgeResults

		Case Else
			GetMenuItemFolders = Empty
			Exit Function
	End Select

	GetMenuItemFolders = arrRetFolders
End Function

Sub GetCurMenuFolders()
	If bIsEducManager Then
		Exit Sub
	End If

	arrFolders = GetMenuItemFolders(currMenuItem)
End Sub

Function MarksBySmsAvailable()
	MarksBySmsAvailable = False
	If strFunctionalityType <> kFuncType_Common Then
		Exit Function
	End If
	If Not HasUserRole(rlParent) Then
		Exit Function
	End If
	MarksBySmsAvailable = SendingSchoolSmsAvailable()
End Function

Function ThereIsAnotherFolder(nCurFolder)
	Dim i

	ThereIsAnotherFolder = 0

	For i = nCurFolder + 1 To maxNumOfFolder
		If Not IsEmpty(arrFolders(i)) Then : ThereIsAnotherFolder = i : Exit For
	Next
End Function

Sub DrawFolders()
	Dim bTabs
	bTabs = False
	
	Dim nCurFolder, strTab, nTab
	Dim bSelected
	Dim listTabs

	Call GetCurMenuFolders()

	nCurFolder = 0
	Set listTabs = Server.CreateObject("System.Collections.ArrayList")
	For Each nTab in arrFolders
		If Not IsEmpty(nTab) Then Call listTabs.Add(nTab)
	Next

	If listTabs.Count < 2 Then
		 Exit Sub
	End If%>

	<ul class="top-menu">
		<%
		For Each nTab in listTabs
			bSelected = (nTab = arrCurrDefaultFolders( currMenuItem ) )
			Call DrawTab( nTab, bSelected )
		Next
		%>
	</ul>
<%
End Sub

Function IsShowIUP()
	IsShowIUP = False

	If (strFunctionalityType = kFuncType_Common Or strFunctionalityType = kFuncType_Profession) Then
		IsShowIUP = True
	End If
End Function

Function IsPreSchoolExists()
	Dim rsFuncTypes

	Set rsFuncTypes = objNSNET.GetFuctionalityType(kFuncType_PreSchool)
	IsPreSchoolExists = Not rsFuncTypes.EOF
End Function

Function GetSchoolMaxGrade()
	Dim nMaxGrade, strCrYearID

'	nMaxGrade = obTokenMgr.GetData(strToken, "SchMaxGrade") ' ??? может измениться!
'	If IsDull(nMaxGrade) Then
		nMaxGrade = -1
		If strFunctionalityType = kFuncType_Common Then

			If Not IsEmpty(Request("CURRYEAR")) Then ' copy from Screen.asp
				strCrYearID = Request.Form("CURRYEAR")
			Else
				strCrYearID = obTokenMgr.GetData(strToken,stCurrYear)
			End If

			If Not IsDull(strCrYearID) Then

				nMaxGrade = objNSNET.GetMaxCuriculumGrade(strCrYearID)
				If nMaxGrade <= 9 Then
					nMaxGrade = -1
				End If
			End If

		End If
'		Call obTokenMgr.SetData(strToken, "SchMaxGrade", nMaxGrade)
'	End If
	
	GetSchoolMaxGrade = nMaxGrade
End Function
%>
