<% ' © 2007-2013 IRTech. All rights reserved.
If Not bIsDebug Then On Error Resume Next

'Forders images
Dim flCornerLeft, flCornerRight, flTopLeft, flTopMiddle, flBottomLeft, flBottomMiddle, flBottomRight, flNoneMiddle, flBottomLeftSel, sFBMimgName

Sub InitFolderImages
	Dim strFolderPath
	strFolderPath = clsPathHelper.FolderPath
	sFBMimgName = "/FBM" & nCurrTheme & ".gif"
	If nCurrTheme = kCompactUITheme Then
		If bFutureMode Then sFBMimgName = "/FBM" & nCurrTheme & "F.gif"
	End If
	flCornerLeft	= strThemeFolder & strFolderPath & sFBMimgName
	flCornerRight	= strThemeFolder & strFolderPath & sFBMimgName
	flTopLeft		= strThemeFolder & strFolderPath & "/FT.gif"
	flTopMiddle		= strThemeFolder & strFolderPath & "/FTM.gif"
	flBottomLeft	= strThemeFolder & strFolderPath & "/FB.gif"
	flBottomLeftSel	= strThemeFolder & strFolderPath & "/FBS.gif"
	flBottomMiddle	= strThemeFolder & strFolderPath & sFBMimgName
	flBottomRight	= strThemeFolder & strFolderPath & "/FBF.gif"
	flNoneMiddle	= strThemeFolder & strFolderPath & sFBMimgName
End Sub

Call InitFolderImages()

'Tabs
Const tbSchoolSetup	= 0
Const tbSchoolInfo	= 1
Const tbRegSettings	= 2
Const tbSchoolSettings	= 48
Const tbSecRoles	= 3
Const tbReferenceBook	= 4
Const tbStaff		= 5
Const tbStudents	= 6
Const tbYear		= 7
Const tbSchoolDocs	= 8
Const tbCrtClass	= 10
Const tbEnrlClass	= 11
Const tbApplPol		= 12
Const tbGrScales	= 13
Const tbCreateCur	= 15
Const tbClndrYear	= 9
Const tbClndrMonth	= 18
Const tbClndrWeek	= 19
Const tbClndrDay	= 20
Const tbTotals		= 17
Const tbJurnal		= 29
Const tbAttendance	= 23
Const tbReports		= 24
Const tbAnnView		= 25
Const tbAnnPost		= 26
Const tbQA			= 27
Const tbSettings	= 28
Const tbAssignments	= 30
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
Const tbLAImport = 50
Const tbLAIntegrationND = 59
Const tbParentPay	= 53
Const tbInforms		= 54
Const tbEgeResults	= 55 ' last value
Const tbAnalytics	= 56
'Const tbInviteStat = 56
Const tbMarksBySms = 57
Const tbStatReports = 58
Const lastTab = 59
Dim strCurrPage
' *******************************************************************

Const tb_EM_Options = 1
Const tb_EM_Users = 2
Const tb_EM_Reports = 3
Const tb_EM_QA = 4
Const tb_EM_StatForms = 5
Const tb_EM_AdditionalReports = 6
Const tb_EM_ReportConstructor = 7
Const tb_EM_StatReports = 8
Const tb_EM_PoolStudentList = 9
Const tb_EM_Statistics = 10
Const tb_EM_Diagnos = 11

Const maxNumOfFolder = 11
'Folders by pages
Dim arrTabNames
Dim arrTabURLs

Dim arrFolders(11) 'maxNumOfFolder
Dim arrDefaultFolders(17), arrCurrDefaultFolders

If GetScreenType() = stSimple Or GetScreenType() = stAjax Or bIsAdminInterface Or bIsEducManager Then
	If bIsAdminInterface Then
		arrTabNames = Array("", obLanguage("MenuFolders","kFSASchools"), obLanguage("MenuFolders","kFSAAddresses"), obLanguage("MenuFolders","kFSARefBooks"), obLanguage("MenuFolders","kFSAImport"), _
			obLanguage("MenuFolders","kFSAMovement"), obLanguage("MenuFolders","kFSAStatistics"), obLanguage("MenuFolders","kFSASettings"), obLanguage("MenuFolders","kDiagnos"), obLanguage("Common","kExit"))
		arrTabURLs = Array( "" _
			, "/asp/administration/createSchool.asp" _
			, "/asp/administration/AddrRefs.asp" _
			, "/asp/administration/Refs.asp" _
			, IIF(bIsRegionEMForSchool, "", "/asp/administration/Import.asp") _
			, IIF(bIsRegionEMForSchool, "", "/asp/administration/PoolStudentList.asp") _
			, IIF(bIsRegionEMForSchool, "", "/asp/administration/usermon.asp") _
			, IIF(bIsRegionEMForSchool, "", "/asp/administration/options.asp") _
			, IIF(bIsRegionEMForSchool, "", "/asp/administration/diagnos.asp") _
			, "Logout(true);" )

		arrFolders(1) = 1
		arrFolders(2) = 2
		arrFolders(3) = 3
		If Not bIsRegionEMForSchool And bETokenAuthentication Then arrFolders(4) = 4
		If Not bIsRegionEMForSchool Then arrFolders(5) = 5
		If Not bIsRegionEMForSchool Then arrFolders(6) = 6
		If Not bIsRegionEMForSchool Then arrFolders(7) = 7
		If Not bIsRegionEMForSchool And bIsDebug Then arrFolders(8) = 8 'Вкладка "Диагностика". Зависит от константы bIsDebug
		arrFolders(9) = 9
		arrDefaultFolders( 0 ) = 1
	ElseIf bIsEducManager Then
		arrTabNames = Array("" _
			, obLanguage("MenuFolders","kFEOSettings") _
			, "Пользователи" _
			, obLanguage("MenuFolders","kFEOKPMReports") _
			, IIF(Module_QA_Available() And Not IsDull(MODULE_QA_URL), obLanguage("MenuFolders","kFNQAReports"), "") _
			, obLanguage("MenuFolders","kStatForms") _
			, obLanguage("MenuFolders","kFEOAdditionalReports") _
			, IIF(bIsEMRO, "", obLanguage("MenuFolders","kFEOReportConstructor")) _
			, obLanguage("MenuFolders","kStatReports") _
			, IIF(bIsEMRO, "", obLanguage("MenuFolders","kFSAMovement")) _
			, IIF(bIsEMRO, obLanguage("MenuFolders","kFSAStatistics") _
			, obLanguage("MenuFolders","kFSAStatisticsVisits")),"")

		arrTabURLs = Array( "" _
			, "/asp/educ_manager/em_options.asp" _
			, "/asp/educ_manager/emUsers.asp" _
			, "/asp/educ_manager/Reports/Reports.asp" _
			, IIF(Module_QA_Available() And Not IsDull(MODULE_QA_URL), "/asp/EDUC_MANAGER/Reports/QualityAssessmentAnalytics.asp", "") _
			, "/asp/educ_manager/Reports/StatForms/StatForms.asp" _
			, "/asp/ReportConstructor/AdditionalReports.asp" _
			, IIF(bIsEMRO, "", "/asp/ReportConstructor/ReportConstructor.asp") _
			, "/asp/educ_manager/Reports/StatReports/StatReports.asp" _
			, IIF(bIsEMRO Or bIsRegionEMForSchool, "", "/asp/educ_manager/PoolStudentList.asp" ) _
			, "/asp/educ_manager/UserStat.asp","")

		arrFolders(1) = tb_EM_Options	'- em_options
		arrFolders(2) = tb_EM_Users		'- em_users
		arrFolders(3) = tb_EM_Reports	'- Hard Reports
		If Module_QA_Available() And Not IsDull(MODULE_QA_URL) Then arrFolders(4) = tb_EM_QA
		arrFolders(5) = tb_EM_StatForms	'- Hard Reports
		arrFolders(6) = tb_EM_AdditionalReports	'- AdditionalReports
		If Not bIsEMRO Then arrFolders(7) = tb_EM_ReportConstructor	'- ReportConstructor
		If kMODULE_STATREPORTS Then arrFolders(8) = tb_EM_StatReports
		If Not (bIsEMRO Or bIsRegionEMForSchool) Then arrFolders(9) = tb_EM_PoolStudentList
		arrFolders(10) = tb_EM_Statistics
		arrDefaultFolders(0) = IIF(bIsEMRO, 2, 1)
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
	arrTabNames(tbSchoolDocs)	= obLanguage("MenuFolders","kFNDocuments")
	arrTabNames(tbCrtClass)		= obLanguage("MenuFolders","kFNClasses",strFunctionalityType)
	arrTabNames(tbSubjects)		= obLanguage("MenuFolders","kFNClassSubjects")
	arrTabNames(tbEnrlClass)	= obLanguage("MenuFolders","kFNSubgroups")
	arrTabNames(tbApplPol)		= obLanguage("MenuFolders","kFNAppSettings")
	arrTabNames(tbGrScales)		= obLanguage("MenuFolders","kFNGradingScales")
	arrTabNames(tbCreateCur)	= obLanguage("MenuFolders","kLessonPlans",strFunctionalityType)

	arrTabNames(tbClndrYear)	= obLanguage("MenuFolders","kFNYear")
	arrTabNames(tbClndrMonth)	= obLanguage("MenuFolders","kFNMonth")
	arrTabNames(tbClndrWeek)	= obLanguage("MenuFolders","kFNWeek")
	arrTabNames(tbClndrDay)		= obLanguage("MenuFolders","kFNDay")
	arrTabNames(tbClassMeets)	= obLanguage("MenuFolders","kFNCreateSchedule")
	arrTabNames(tbTimes)		= obLanguage("MenuFolders","kFNScheduleTimes", strFunctionalityType)
	arrTabNames(tbRooms)		= obLanguage("MenuFolders","kFNRooms", strFunctionalityType)
	arrTabNames(tbJurnal)		= obLanguage("MenuFolders","kFNJournal",strFunctionalityType)
	arrTabNames(tbTotals)		= obLanguage("MenuFolders","kFNTotals")
	arrTabNames(tbEgeResults)	= obLanguage("MenuFolders","kFNEgeResults")
	arrTabNames(tbAttendance)	= obLanguage("MenuFolders","kFNAttendance")
	arrTabNames(tbParentPay)	= obLanguage("MenuFolders","kFNParentPay")
	arrTabNames(tbReports)		= obLanguage("MenuFolders","kFNReports")
	arrTabNames(tbStatReports)	= obLanguage("MenuFolders","kStatReports")
	arrTabNames(tbAnnView)		= obLanguage("MenuFolders","kFNViewAnnouncements")
	arrTabNames(tbAnnPost)		= obLanguage("MenuFolders","kFNSendAnnouncements")
	arrTabNames(tbQA)			= obLanguage("MenuFolders","kFNLearningApplications")
	arrTabNames(tbSchoolResources) = obLanguage("MenuFolders","kFNLinkDirectory")
	arrTabNames(tbPersonalPortfolios) = obLanguage("MenuFolders","kFNPersonalPortfolio")
	arrTabNames(tbProjectPortfolios) = obLanguage("MenuFolders","kFNProjectPortfolio")
	arrTabNames(tbSettings)			= obLanguage("MenuFolders","kMySettings")

	arrTabNames(tbMarksBySms)			= obLanguage("MenuFolders","kMarksBySms")

	arrTabNames(tbAssignments)		= obLanguage("MenuFolders","kStudentDiary")
	arrTabNames(tbLearningModules)	= obLanguage("MenuFolders","kFNLearningApplications")
	arrTabNames(tbAdditionalReports) = obLanguage("MenuFolders","kFNAdditionalReports")
	arrTabNames(tbReportConstructor) = obLanguage("MenuFolders","kFNReportConstructor")
	arrTabNames(tbAnalytics) = obLanguage("MenuFolders","kFNQAReports")
	arrTabNames(tbLAImport)	= obLanguage("MenuFolders","kFNCreateCourses")
	arrTabNames(tbLAIntegrationND)	= obLanguage("LearnApp","kCollectionOfResources")

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
	arrTabURLs(tbCreateCur)		= "/asp/Curriculum/Planner.asp"
	arrTabURLs(tbLAImport)		= "/asp/LearnApp/LAImport.asp"
	arrTabURLs(tbLAIntegrationND)		= "/asp/LearnApp/EducationPortalND.asp"
	
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
		arrTabURLs(tbSchoolDocs)	= "/asp/SetupSchool/Resources/SchoolDocs.asp"
	Else
		IF HasUserRole(rlParent) THEN
			arrTabURLs(tbSchoolDocs)	= "/asp/SetupSchool/Resources/SchoolDocs.asp"
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
	arrTabURLs(tbEgeResults)= "/asp/Grade/EGE/Results.asp"
	arrTabURLs(tbJurnal)	= "/asp/Grade/Journal.asp"
	arrTabURLs(tbAttendance)= "/asp/Grade/Attendance.asp"
	arrTabURLs(tbParentPay)= "/asp/Grade/ParentPay.asp"
	arrTabURLs(tbAnnView)	= "/asp/Announce/ViewAnnouncements.asp"
	arrTabURLs(tbAnnPost)	= "/asp/Announce/Announcements.asp"
	arrTabURLs(tbQA)		= "/asp/LearnApp/QAssignment.asp"
	arrTabURLs(tbSchoolResources) = "/asp/Curriculum/SchoolResources.asp"
	arrTabURLs(tbPersonalPortfolios) = "/asp/SetupSchool/Portfolio/PersonalPortfolios.asp"
	arrTabURLs(tbProjectPortfolios) = "/asp/SetupSchool/Portfolio/ProjectPortfolios.asp"
	arrTabURLs(tbSettings)	= "/asp/MySettings/MySettings.asp"
	arrTabURLs(tbAssignments)= "/asp/Curriculum/Assignments.asp"
	arrTabURLs(tbLearningModules) = "/asp/LearnApp/QAssignment.asp"
	arrTabURLs(tbMarksBySms)	= "/asp/MySettings/MarksBySms.asp"

	'Default tab for page
	arrDefaultFolders(miSetupSchool)		= tbSchoolSetup
	If HasUserRight(arProfileEditSchoolInfo) or HasUserRight(arProfileViewSchoolInfo) Then
		arrDefaultFolders(miSetupSchoolProfile) = tbSchoolInfo
	ElseIf HasUserRight(arProfileEditRegionalSettings) Then
		arrDefaultFolders(miSetupSchoolProfile) = tbRegSettings
	ElseIf HasUserRight(arEditSchoolSettings) Then
		arrDefaultFolders(miSetupSchoolProfile) = tbSchoolSettings
	ElseIf HasUserRight(arProfileDefineSecurityRoles) Then
		arrDefaultFolders(miSetupSchoolProfile) = tbSecRoles
	ElseIf HasUserRight(arEditReferenceBook) Then
		arrDefaultFolders(miSetupSchoolProfile) = tbReferenceBook
	End If
	If HasUserRight(arUsersEditStaff) Or HasUserRight(arUsersEditStaffMedInfo) Or HasUserRight(arShortInfoStaff) Then arrDefaultFolders(miSetupSchoolUsers) = tbStaff Else arrDefaultFolders(miSetupSchoolUsers) = tbStaff
	If HasUserRight(arCreateCloseEditYear) Or HasUserRight(arMoveBookEdit) Then arrDefaultFolders(miSetupSchoolCalendar) = tbYear Else arrDefaultFolders(miSetupSchoolCalendar) = tbCuriculumPlan
	If HasUserRight(arMoveBookView) Or HasUserRight(arMoveBookEdit) Then
		arrDefaultFolders(miSetupSchoolMove) = tbMoveBook
	ElseIf HasUserRight(arMovePoolStudents) Then
		arrDefaultFolders(miSetupSchoolMove) = tbMovePoolStudents
'	ElseIf HasUserRight(arMovePoolStaff) Then
'		arrDefaultFolders(miSetupSchoolMove) = tbMovePoolStaff
	End If

	If HasUserRight(arClassMgmViewClassSubjAll) Then
		arrDefaultFolders(miClassManagement) = tbCrtClass
	ElseIf HasUserRight(arClassMgmCreateClass) Then
		arrDefaultFolders(miClassManagement)= tbCrtClass
	ElseIf HasUserRight(arClassMgmEditSubjects) Then 
		arrDefaultFolders(miClassManagement)= tbSubjects
	ElseIf HasUserRight(arClassMgmEnrollClass) Then 
		arrDefaultFolders(miClassManagement)= tbEnrlClass
	End If

	arrDefaultFolders(miSchoolDocs)				= tbSchoolDocs
	arrDefaultFolders(miCurriculumManagement)	= tbCreateCur
	arrDefaultFolders(miMyCalendar)				= tbClndrYear
	arrDefaultFolders(miGrades)					= IIF(strFunctionalityType <> kFuncType_PreSchool,tbJurnal,tbParentPay)
	arrDefaultFolders(miReports)				= tbReports
	arrDefaultFolders(miAnnouncements)			= tbAnnView
	arrDefaultFolders(miLearningApplications)	= tbLAIntegrationND
	arrDefaultFolders(miSchoolResources)		= tbSchoolResources
	arrDefaultFolders(miAssignments)			= tbAssignments

	arrCurrDefaultFolders = arrDefaultFolders

End If

Sub GetCurMenuFolders()
	Select Case currMenuItem
		Case miSetupSchoolProfile
			If HasUserRight(arProfileEditSchoolInfo) Or HasUserRight(arProfileViewSchoolInfo) Then arrFolders(1) = tbSchoolInfo
			If HasUserRight(arProfileEditRegionalSettings) Then arrFolders(2) = tbRegSettings
			If HasUserRight(arEditSchoolSettings) Then arrFolders(3) = tbSchoolSettings
			If HasUserRight(arProfileDefineSecurityRoles) Then arrFolders(4) = tbSecRoles
			If HasUserRight(arEditReferenceBook) Then arrFolders(5) = tbReferenceBook
		Case miSetupSchoolUsers
			If HasUserRight(arUsersEditStaff) Or HasUserRight(arUsersEditStaffMedInfo) Or HasUserRight(arShortInfoStaff) Then 
				arrFolders(1) = tbStaff
				'arrFolders(5) = tbInviteStat
			End If
			If HasUserRight(arUsersEditStudents) Or HasUserRight(arEditInfoSelf) Or HasUserRight(arShortInfoStudents) Or HasUserRight(arUsersEditStudentsPsyInfo) Then
				arrFolders(2) = tbStudents : arrFolders(3) = tbParents
			Else
				If HasUserRight(arUsersEditStudentsMedInfo) Then arrFolders(2) = tbStudents
			End If
			If HasUserRight(arMakeInform) Then arrFolders(4) = tbInforms
		Case miSetupSchoolCalendar
			If HasUserRight(arSchoolSubjects) Then
				If Not bIsEMForSchool Then
					arrFolders(2) = tbSchoolSubjects
					arrFolders(3) = tbCuriculumComponents
					arrFolders(4) = tbCuriculumProfiles
					arrFolders(5) = tbCuriculumLimits
				End If
				arrFolders(6) = tbCuriculumPlan
				If IsShowIUP() Then
					arrFolders(7) = tbIUP
				End If
			End If
			If HasUserRight(arCreateCloseEditYear) Or HasUserRight(arMoveBookEdit) Then arrFolders(1) = tbYear
		Case miSetupSchoolMove
			If HasUserRight(arMoveBookView) Or HasUserRight(arMoveBookEdit) Then arrFolders(1) = tbMoveBook
			If HasUserRight(arMovePoolStudents) Then arrFolders(2) = tbMovePoolStudents
'			If HasUserRight(arMovePoolStaff) Then arrFolders(3) = tbMovePoolStaff
		Case miSchoolDocs
			arrFolders(1) = tbSchoolDocs
		Case miClassManagement
			If HasUserRight(arClassMgmViewClassSubjAll) Then
				arrFolders(1) = tbCrtClass
				arrFolders(2) = tbSubjects
				If Not bIsEMForSchool And strFunctionalityType<>kFuncType_PreSchool Then arrFolders(3) = tbEnrlClass
			Else
				If HasUserRight(arClassMgmCreateClass) Then arrFolders(1) = tbCrtClass
				If HasUserRight(arClassMgmEditSubjects) Then arrFolders(2) = tbSubjects
				If HasUserRight(arClassMgmEnrollClass) And strFunctionalityType<>kFuncType_PreSchool Then arrFolders(3) = tbEnrlClass
			End If
		Case miCurriculumManagement
			If HasUserRight(arCurrMgmCreate) Or HasUserRight(arCurrMgmCreateAll) Then
				arrFolders(1) = tbCreateCur
			ElseIf HasUserRight(arCurrMgmViewSelf) Or HasUserRight(arCurrMgmViewAll) Then
				arrFolders(1) = tbCreateCur
			End If
		Case miMyCalendar
			If HasUserRight(arCalendarViewSelf) Or HasUserRight(arCalendarViewAll) Then
				arrFolders(1) = tbClndrYear
				arrFolders(2) = tbClndrMonth
				arrFolders(3) = tbClndrWeek
				arrFolders(4) = tbClndrDay
			ElseIf HasUserRight(arClassMgmPostClassEventSelf) Or HasUserRight(arClassMgmPostClassEventAll) Or HasUserRight(arPostSchoolEvent) Then
				arrFolders(1) = tbClndrYear
			End If
			If HasUserRight(arCalendarCreateCalendar) Then arrFolders(5) = tbClassMeets : arrFolders(6) = tbTimes : arrFolders(7) = tbRooms
		Case miGrades
			If strFunctionalityType <> kFuncType_PreSchool Then
				If HasUserRight(arJournalViewSelf) Or HasUserRight(arJournalViewAll) Or HasUserRight(arJournalEditSelf) Or HasUserRight(arJournalEditAll) Then arrFolders(1) = tbJurnal : arrFolders(2) = tbAttendance
				If HasUserRight(arTotalsViewSelf) Or HasUserRight(arTotalsViewAll) Or HasUserRight(arTotalsEditSelf) Or HasUserRight(arTotalsEditAll) Then arrFolders(3) = tbTotals
				If( HasUserRight(arBrowseResultsEGEAllClasses) Or HasUserRight(arBrowseResultsEGEHisClassesOrSubjects) Or HasUserRole(rlParent)_
					Or HasUserRole(rlStudent)) And obTokenMgr.GetData(strToken, "RESULTSEGE") Then arrFolders(4) = tbEgeResults
			Else
				If HasUserRight(arJournalViewSelf) Or HasUserRight(arJournalViewAll) Or HasUserRight(arJournalEditSelf) Or HasUserRight(arJournalEditAll) Then arrFolders(1) = tbParentPay : arrFolders(2) = tbAttendance 
			End If
		Case miReports
'			If HasUserRight(arReportsForAssignedClass) Then arrFolders(1) = tbReports : Exit Sub
'			If HasUserRight(arReportsForAllClasses) Then arrFolders(1) = tbReports : Exit Sub
'			If HasUserRight(arReportsViewForAssignedClass) Then arrFolders(1) = tbReports : Exit Sub
			If HasUserRight(arReportsForAssignedClass) Or HasUserRight(arReportsForAllClasses) Or HasUserRight(arReportsViewForAssignedClass) Or HasUserRight(arReportsViewAdministrativeReports) Then
				arrFolders(1) = tbReports
			End If
			If PERSON_DATA Then
				If HasUserRight(arReportsViewAdditionalReports) Then arrFolders(2) = tbAdditionalReports
				If HasUserRight(arReportsViewAdditionalReports) And HasUserRight(arReportsUseReportConstructor) And Not readonly Then
					arrFolders(3) = tbReportConstructor
				ElseIf HasUserRight(arReportsUseReportConstructor) And Not readonly Then
					arrFolders(2) = tbReportConstructor
				End If
			End If

			If HasUserAnyRights(Array(arBrowseStatReports, arFillStatReports)) Then
				arrFolders(4) = tbStatReports
			End If

			If Not bFutureMode And Not bIsEMForSchool And Module_QA_Available() And Not IsDull(MODULE_QA_URL) And (CLng(strFunctionalityType) = kFuncType_Common) Then 
				If HasUserRoles(Array(rlAdmin, rlPrincipal, rlParent, rlStudent, rlTeacher)) Then arrFolders(5) = tbAnalytics
			End If
		Case miAnnouncements
			arrFolders(1) = tbAnnView
			If HasUserRight(arAnnouncementPost) And Not readonly Then arrFolders(2) = tbAnnPost
		Case miLearningApplications
			arrFolders(1) = tbLAIntegrationND
			If HasUserRight(arLAViewMaterials) Or HasUserRight(arLAViewSelf) Or HasUserRight(arLAViewAll) Or HasUserRight(arLAEditSelf) Then arrFolders(2) = tbQA
			If HasUserRight(arAddLA) Then arrFolders(3) = tbLAImport
			If HasUserRight(arLASetPolicies) Then arrFolders(4) = tbApplPol
			If HasUserRight(arLACreateGradingScales) And strFunctionalityType<>kFuncType_PreSchool Then arrFolders(5) = tbGrScales
		Case miSchoolResources
			arrFolders(1) = tbSchoolResources
			arrFolders(2) = tbPersonalPortfolios
			arrFolders(3) = tbProjectPortfolios	
		Case miAssignments
			If HasUserRight(arAssignmentsViewComplete) Then arrFolders(1) = tbAssignments
			If HasUserRight(arLAViewMaterials) Then arrFolders(2) = tbLAIntegrationND
			If HasUserRight(arLAViewMaterials) Then arrFolders(3) = tbLearningModules
			If (HasUserRight(arBrowseResultsEGEAllClasses) Or HasUserRight(arBrowseResultsEGEHisClassesOrSubjects) Or HasUserRole(rlParent)_
				Or HasUserRole(rlStudent)) And obTokenMgr.GetData(strToken, "RESULTSEGE") Then arrFolders(4) = tbEgeResults
	End Select
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
	For i=nCurFolder+1 To maxNumOfFolder
		If Not IsEmpty(arrFolders(i)) Then : ThereIsAnotherFolder = i : Exit For
	Next
End Function

Sub DrawTabSelected( nTab )
%>		<td><img src="<%=flTopLeft%>" border="0" width="6"></td>
		<td nowrap background="<%=flTopMiddle%>" bgcolor="#FEE6C0" class="FolderLink">
			<font face="Arial, Helvetica, sans-serif" color="<%=Application("TABFONTCOLOR")(strFunctionalityType)%>">&nbsp;<%=arrTabNames(nTab)%>&nbsp;</font>
		</td>
<%
End Sub

Sub DrawTab( nTab, flSplitter )
	If Not (MODULE_INFORMS And CLng(strFunctionalityType) <> kFuncType_Add And CLng(strFunctionalityType) <> kFuncType_EM) And nTab = tbInforms Then Exit Sub%>
	<td><img src="<%=flSplitter%>" border="0" width="6"></td>
	<td nowrap><font face="Arial, Helvetica, sans-serif"><%
	If nTab = UBound(arrTabNames,1) And (bIsAdminInterface Or bIsEducManager) Then %>
		<b>&nbsp;<%=ShowAnchor( arrTabURLs(nTab), arrTabNames(nTab), arrTabNames(nTab), "class=""FolderLink"" style=""color:" & Application("TABFONTCOLOR")(strFunctionalityType)& """")%>&nbsp;</b></font></td>
	<%Else %>
		<b>&nbsp;<%=ShowAnchor( "SetSelectedTab("&nTab&",'"&arrTabURLs(nTab)&"')", arrTabNames(nTab), arrTabNames(nTab), "class=""FolderLink"" style=""color:" & Application("TABFONTCOLOR")(strFunctionalityType)& """")%>&nbsp;</b></font></td><%
	End If			
End Sub

Sub DrawFolders()
	Dim bTabs
	bTabs = False
	Call GetCurMenuFolders()%>
	<td<%
	If nCurrTheme <> kCompactUITheme Then
		%> background="<%=flNoneMiddle%>"><img src="<%=flCornerLeft%>" border="0" width="6"><%
	Else
		%> valign="top"><img src="<%=strThemeFolder& clsPathHelper.MenuPath%>/MP<%=IIF(bFutureMode,"F","")%>.gif" border="0"><%
	End If
	%></td>
	<td background="<%=flNoneMiddle%>" width="100%">
		<table border="0" cellspacing="0" cellpadding="0">
			<tr>
	<%
	If nCurrTheme = kCompactUITheme Then%>
				<td nowrap><img src="<%=strThemeFolder& clsPathHelper.MenuPath%>/MT<%=IIF(bFutureMode,"F","")%>.gif"><br>
					<img src="<%=strThemeFolder& clsPathHelper.MenuPath%>/N.gif"><img src="<%=strThemeFolder& clsPathHelper.MenuPath%>/MR<%=IIF(bFutureMode,"F","")%>.gif"></td>
				<td width="100%" height="100%">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<!-- #INCLUDE VIRTUAL=/asp/scripts/ScreenHeader.asp -->			
						</tr>
					</table>
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
	<%End If%>
<%	Dim bLastSel
	Dim nCurFolder, strTab, nTab
		nCurFolder = 0
		Do
			nCurFolder = ThereIsAnotherFolder(nCurFolder)
			If nCurFolder=0 Then Exit Do
			nTab = arrFolders(nCurFolder)
			If nTab = arrCurrDefaultFolders( currMenuItem ) Then ' find selected tab
				bTabs = True
				Call DrawTabSelected( nTab )
				bLastSel = True
				nCurFolder = ThereIsAnotherFolder(nCurFolder)
				If nCurFolder=0 Then Exit Do
				Call DrawTab( arrFolders(nCurFolder), flBottomLeftSel )
				bLastSel = False
				Do ' optimization Loop because rest tabs not selected
					nCurFolder = ThereIsAnotherFolder(nCurFolder)
					If nCurFolder=0 Then Exit Do
					Call DrawTab( arrFolders(nCurFolder), flBottomLeft )
					bLastSel = False
				Loop
				Exit Do
			Else ' not selected tabs
				bTabs = True
				Call DrawTab( nTab, flBottomLeft )
				bLastSel = False
			End If
		Loop
		If bTabs Then
			%><td><img src="<%=IIF(bLastSel,flBottomLeftSel,flBottomRight)%>" border="0" width="6"></td><%
		End If
		If nCurrTheme = kCompactUITheme Then
			%><td height="24"></td></tr></table></td><%
		Else
			%><td width="100%" background="<%=flNoneMiddle%>"></td><%
		End If
		%></tr></table>
	</td>
	<td background="<%=flNoneMiddle%>"><img src="<%=flCornerRight%>" border="0" width="6"></td>
<%
End Sub

Function IsShowIUP()
	IsShowIUP = False
	If (strFunctionalityType = kFuncType_Common Or strFunctionalityType = kFuncType_Profession) Then
		IsShowIUP = True
	End If
End Function

%>
