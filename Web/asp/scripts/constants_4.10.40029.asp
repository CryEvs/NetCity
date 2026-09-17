' © 2007-2014 IRTech. All rights reserved.

' ***************************************************************************************************
' placed from common.asp

Const kSMARTSEnabledForAll = False
Const kSMARTSSchoolsCondition = ""

Const strStdTableParam = " BORDER=1 BORDERCOLOR=""#849CB5"" BORDERCOLORLIGHT=""#C0C0C0"" BORDERCOLORDARK=""#FFFFFF"" CELLSPACING=""0"""
Const strTTSCookieName = "TTSLogin"

Const Ora_DB_Provider = "Oracle"
Const IB_DB_Provider = "IB6"

Const DB_Provider = "IB6"
'Const DB_Provider = "Oracle"

Const bIsDebug = False
Const MODULE_EM = True ' Для определения продукта - флаг1 (по умолчанию True)
Const MODULE_KPM = False

Const MODULE_INFORMS = False
Const bIsRegionEMWithOUDOD = False
Const PERSON_DATA = True

Const IMPORT_EXT = True
Const IMPORT_EASY = False
Const IMPORT_EXT_NEW_ADDRESS_ALLOW = True

Const REPORT_TITLE = True
Const EXCLUDE_SOME_UDODS = True
Const bUseRepl = False
Const bUseKLADR = True
Const bUseReadOnlyAccess = False
Const bEditReferences = True
Const kUseSignatureLogon = False
Const UDOD_MAY_EDIT_PROGRAMM_DIRECTION = True

Const kDefLng = "ru"

Const kIsTKR = False
Const isComplexTeacherReport = False

Const bAllowAllIP = True

Const PORTAL = False
Const strThemeFolder = "/Images"
Const strCommonImgFolder = "/Images/Common"
Const ADMIN_NAME = "ADMIN"  ' user in school which can be protected
Const EM_ADMIN_NAME = "EDUCMANAGER"  ' user in EM which can be protected

Const k_min_SOU_b	= 6
Const k_max_SOU_b	= 20
const minGradeForTotals = 2

Const kMinTrustedAppCode = 6
Const kMinPasswordLength = 6
Const kMinLoginLength = 3

Const kEuristicSearch = True

Const bExtendedEMForSchoolAccess = False

Const kRNTimeOfEntryAndExit = False
Const kLAIntegrationNewDisk = True
Const kEM_MayEditExtraSchoolInfo = False

Const kShowEserviceReceiptNotice = False

Const kShowReadonlyOldParameters = False

' ***************************************************************************************************
' constants ...

Const RESULT_RATIO = 100
Const RESULT_RATIO10 = 10
Const RATIO_1000 = 1000
Const k_5	= 5
Const kMaxPassword = 40
Const kMaxLogin = 35
Const kMaxLastname = 30
Const kDisplayNameLen = 95
Const kMaxURL=2083
Const kMainSchoolInfoPage = 1
Const kLicenceSchoolInfoPage = 2
'' Should be in-sync with COM
Const kTermType = 1
Const kYearType = 2
Const kExamType = 3
Const kTotalType = 4
Const kExamVerbalType = 5
Const kExamWrittenType = 6
Const kExamEGEType = 7
Const kExamTypePredefMax = 100
Const kReportYearTermType = "-1"
Const kReportTotalTermType = "-2"

'' Should be in-sync with COM
Const kSchoolEvent = 1
Const kClassEvent = 2
Const kVacation = 3
Const kHoliday = 4

'' Should be in-sync with COM
'Const kFirstGrade = 4 'Нижняя граница - Выпускные классы
'Const kMiddleGrade = 9 ' Средняя граница - Выпускные классы
'Const kLastGrade = 12 ' Верхняя граница - Выпускные классы ' Теперь это Application("LASTGRADE")(strFunctionalityType)
Const kActivityID_Manual = "manual"

'' Should be in-sync with COM
'Roles constants		14
Const lastRole			= 14
Const rlAdmin			= 1
Const rlPrincipal		= 2
Const rlTeacher			= 3
Const rlStudent			= 4
Const rlParent			= 5
Const rlMinorStaff		= 6
Const rlSecretary		= 7
Const rlMedicalStaff	= 8
Const rlPsychologist	= 9
Const rlSpecialistStaff	= 10
Const rlEmAdmin			= 11
Const rlHDEM			= 12
Const rlOFREM			= 13
Const rlEmOper			= 14 'LAST VALUE

Const kStartNWeek = 1 ' from this constant enumeration of school weeks is started

Const kUETError = 1
Const kUETWarning = 2
Const kUETSaveJournal = 50
Const kUETSaveAttencance = 51

Const bxInbox=1
Const bxDraft=2
Const bxSent=3
Const bxDeleted=4

Const kDepartReasonParID = "1027"

'Справочники
Const kNationParID = "-2"
Const kExamTypeParID = "-3"
Const kYearParID = "-4"
Const kSubjectsParID = "-5"
Const kForeignLangsParID = "-6"
Const kAssignmentTypesID = "-7"
Const kTemTypeID = "-8"
'Гражданство, зависит от варианта локализации системы(языка по умолчанию)
Const kNationMin = 2
Const kHomeCountry = 2

Const kDefaultUsersPageSize = 100
Const kDefaultUsersPageSize_IE6 = 20
Const kRoleType_All = 0 ' ROLETYPE для Всех ролей в USERINFOPARAMETERS
Const kRoleType_Staff = 1 ' ROLETYPE для Сотрудников в USERINFOPARAMETERS
Const kRoleType_Student = 2 ' ROLETYPE для Учеников в USERINFOPARAMETERS
Const kRoleType_Parent = 3 ' ROLETYPE для Родителей в USERINFOPARAMETERS
Const kRoleType_EM = 4 ' ROLETYPE для пользователей из Управления Образованием в USERINFOPARAMETERS

Const kMinSchoolYearDays = 60
Const kMinSchoolYearDaysMs = 5097600000 ' depend on kMinSchoolYearDays: ( kMinSchoolYearDays - 1 ) * 86400000

Const kMaxUsersInSchoolYear = 1000000

Const kMinGrade = 0 ' Min и Max - возможные в системе параллели классов
Const kMaxGrade = 12

Const kWizardSteps = 12

Const kArchiveStatusCleared = 4 ' используется при определении - какую базу использовать - архивную или рабочую, для обычного пользователя (не Упр.Обр.) считается, что после архивации ТЕКУЩЕГО года всё равно будет использоваться рабочая база

' FunctionalityTypes
Const kFuncType_EM = 0
Const kFuncType_PreSchool = 1 ' совпадает с EOTYPEID
Const kFuncType_Common = 2 ' !!! не совпадает с EOTYPEID=5
Const kFuncType_Add = 3 ' совпадает с EOTYPEID
Const kFuncType_Profession = 4
Const kFuncType_Orphanage = 5

' InformFilterTypesForSearch
Const kInformFilterType_PreSchool = 1
Const kInformFilterType_Common = 2

' EO Types
Const kEOTypeID_PrimarySchool = 2
Const kEOTypeID_Evening = 8

' LoginTypes
Const kLoginType_Usual = 1
Const kLoginType_EToken = 2
Const kLoginType_Family = 3
Const kLoginType_ECard = 4

'SubjectPlanView
Const kAjaxCallFlag = "_AJAXCALL_"

'EMHierarchyLevel
Const kMixedLevel = 1
Const kProvinceLevel = 2
Const kCityLevel = 3
Const kDistrictCityLevel = 4

'FounderTypes
Const kMunicipality = 1
Const kEducManagement = 2
Const kOther = 3
Const kHighEducation = 4

Const kInterfaceTypeKey = "LoginType"
Const kInterfaceType_School	= 0
Const kInterfaceType_ServAdmin = 1
Const kInterfaceType_EducManager = 2

' Дата, с которой разрешено создавать будущий год
Const kFutureYearAllow_Month = 4 ' Апрель
Const kFutureYearAllow_Day = 1 ' 1-ое число месяца

' #16545 Дата, с которой разрешено создавать документы О ЗАЧИСЛЕНИИ В БУДУЩИЙ ГОД
Const kFutureYearEnrollDocDate_Month = 2 ' Февраль
Const kFutureYearEnrollDocDate_Day = 1 ' 1-ое число месяца

' Система итоговых оценок - бальная или зачёт/незачёт
Const kGradingSystem_Mark = 0
Const kGradingSystem_Pass = 1
Const kGradingSystem_NotRated = 2

' Текущий статус сотрудника - все/работающие/уволенные
Const kWorkStatus_All = -1
Const kWorkStatus_Dismissed = 0
Const kWorkStatus_Working = 1

Const kEGEMinMark = 0
Const kEGEMaxMark = 100

Const kDefValue = -1

'id для значения "Задайте собственный вопрос" списка контрольных вопросов
Const kAskYouOwnQuestionKey = 8

Const kGradeSchoolCertificationType = 0
Const kOgeCertificationType = 1
Const kEgeCertificationType = 2

'Задает максимально допустимую длину для поля E-mail
Const kMaxLengthEmail = 80

'USERINFOPARAMETERS значение
Const MOBPHONE_FOR_SCHOOL_SMS_PARAMID = 2013

Const GENERATE_MOB_PHONE_FOR_SCHOOL_SMS = 1

Const NOT_HAVE_PARENTS = 1
Const NOT_HAVE_SMS_CONTACTS = 2
Const NOT_SUBSCRIBE_PARENTS = 3
Const AVAILABLE_SMS_SENDING = 0

Const MOBILE_PHONE_RUSSIAN_CODE = "7"
Const MOBILE_PHONE_LENGTH = 11

'Задает длину темы урока
Const kAssignmentNameLength = 400

'#13625. Теперь это значение не должно меняться! Всегда должно быть False.
'Осталось от возможности показывать/не показывать сведения о здоровье.
Const bDisableHealthData = False

Const kCommonStartPage = "/" ' корень сайта

Const kStartPage = "/" ' корень сайта
Const kLoginPage = "/"
