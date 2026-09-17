/* ============================================================================
   02_legacy_tables.sql
   Tables NOT covered by NHibernate mappings, reconstructed from raw SQL found in
   NS_DataAccess.dll, NS_DAComWrapper.dll, NetCity.DataAccess.dll, ASP pages, etc.
   Column list = union of all columns seen in INSERT / UPDATE / SELECT for the table.
   Types are INFERRED (same-named ORM column type, otherwise naming heuristics).
   Nullability is unknown -> everything except the guessed PK is NULL.
   Confidence per column: [+] seen with explicit alias/insert/update, [?] unqualified only.
   ============================================================================ */

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetActivityList; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetActivityList; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetActivityList (+1)
CREATE TABLE dbo.ACTIVITYGROUPS (
    GROUPID                          INT NOT NULL,  -- [+] PK (guessed)
    NAME                             VARCHAR(200) NULL,  -- [+]
    ORDERNO                          INT NULL,  -- [+]
    PUBCODE                          NVARCHAR(255) NULL,  -- [+]
    CONSTRAINT PK_ACTIVITYGROUPS PRIMARY KEY (GROUPID)
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetGradingScale::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentAssignmentInfo::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentAssignmentInfoForTeacher::Execute (+9)
CREATE TABLE dbo.ACTIVITYPARAMETERS (
    ACTIVITYID                       VARCHAR(255) NULL,  -- [+]
    DEFAULTVALUE                     VARCHAR(2000) NULL,  -- [+]
    EDITABLE                         CHAR(1) NULL,  -- [+]
    GRADING                          NVARCHAR(255) NULL,  -- [+]
    LAEDITABLE                       NVARCHAR(255) NULL,  -- [+]
    LAVISIBLE                        BIT NULL,  -- [+]
    LISTITEMS                        NVARCHAR(255) NULL,  -- [+]
    NAME                             VARCHAR(200) NULL,  -- [+]
    PARAMETERID                      INT NOT NULL,  -- [+] PK (guessed)
    SORTABLE                         NVARCHAR(255) NULL,  -- [+]
    TITLE                            VARCHAR(250) NULL,  -- [+]
    TYPE                             NVARCHAR(255) NULL,  -- [+]
    VISIBLE                          BIT NULL,  -- [+]
    CONSTRAINT PK_ACTIVITYPARAMETERS PRIMARY KEY (PARAMETERID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetActivityList; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetActivityList; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetActivityList
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.ACTIVITYPUBLISHERS (
    CODE                             VARCHAR(5) NULL,  -- [+]
    NAME                             VARCHAR(200) NULL,  -- [+]
    ORDERNO                          INT NULL   -- [+]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetAddSchoolReasons; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetAddSchoolReasons
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
-- WARNING: no columns could be inferred for ADDSCHOOL_REASONS
CREATE TABLE dbo.ADDSCHOOL_REASONS (
    DUMMY_ INT NULL  -- placeholder
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::DeleteAllowedIPRanges; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolAllowedIPRanges; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SaveAllowedIPRanges (+3)
CREATE TABLE dbo.ALLOWEDIPRANGES (
    LEFTBOUND                        NVARCHAR(255) NULL,  -- [+]
    RANGEID                          INT NULL,  -- [?]
    RIGHTBOUND                       NVARCHAR(255) NULL,  -- [+]
    SCHOOLID                         INT NULL   -- [+]
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentAssignmentInfo::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentAssignmentInfoForTeacher::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.Transactional.SetStudentAssignmentInfo::Execute (+1)
CREATE TABLE dbo.ASSIGNMENTINFO (
    ASSIGNMENTID                     INT NULL,  -- [+]
    PARAMETERID                      INT NULL,  -- [+]
    STUDENTID                        INT NULL   -- [+]
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentAssignmentInfo::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentAssignmentInfoForTeacher::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.Transactional.SetStudentAssignmentInfo::Execute (+1)
CREATE TABLE dbo.ASSIGNMENTPARAMETERS (
    PARAMETERID                      INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_ASSIGNMENTPARAMETERS PRIMARY KEY (PARAMETERID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetClassesFormsByClassId; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SaveClassForms_WT
CREATE TABLE dbo.CLASSESFORMS (
    CLASSFORMID                      INT NULL,  -- [+]
    CLASSID                          INT NULL   -- [+]
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentInfo::Execute; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetActivityParameters; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetParametrizedActivityList (+2)
CREATE TABLE dbo.CLASSPARAMETERS (
    PARAMETERID                      INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_CLASSPARAMETERS PRIMARY KEY (PARAMETERID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::CalcEducQuality1Year; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetClass2AddClassInfo; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetClassStudentListForDateRange (+10)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.CLASSSTUDENTSRANGES (
    CLASSID                          INT NULL,  -- [+]
    DEPART                           DATETIME NULL,  -- [+]
    ENROLL                           DATETIME NULL,  -- [+]
    GRADE                            INT NULL,  -- [+]
    SCHOOLYEARID                     INT NULL,  -- [+]
    STUDENTID                        INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStVariantsForClassesAndGrades
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.CLS_ST_VARIANTS (
    CLASSID                          INT NULL,  -- [+]
    GRADE                            INT NULL,  -- [+]
    IS_IUP                           BIT NULL,  -- [+]
    SCHOOLYEARID                     INT NULL,  -- [+]
    VARIANTID                        INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_CLS_ST_VARIANTS PRIMARY KEY (VARIANTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetCommissTypeName; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetCommissInfo; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetCommissTypes (+4)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.COMMISSTYPES (
    COMMISSTYPEID                    INT NOT NULL,  -- [+] PK (guessed)
    GETCOMMISSTYPENAME               NVARCHAR(255) NULL,  -- [?]
    NTYPEID                          INT NULL,  -- [?]
    TYPENAME                         VARCHAR(100) NULL,  -- [+]
    WRONG                            NVARCHAR(255) NULL,  -- [?]
    CONSTRAINT PK_COMMISSTYPES PRIMARY KEY (COMMISSTYPEID)
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.Base.ApiCommand::IsJuniorLA; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetClassInfo::IsJuniorLA; NS_DataAccess.dll NS_DataAccess.FBDataAccess::CreateLACourse (+3)
CREATE TABLE dbo.COURSES (
    PRODUCTID                        INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentAssignmentList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::IsCSGBoundedWithAllStudents
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.CSG_CLASSES_TERMS_STUDENTS (
    CLASSID                          INT NULL,  -- [+]
    SGID                             INT NULL,  -- [+]
    STUDENTID                        INT NOT NULL,  -- [+] PK (guessed)
    TERMID                           INT NULL,  -- [+]
    CONSTRAINT PK_CSG_CLASSES_TERMS_STUDENTS PRIMARY KEY (STUDENTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass979_0::<SaveMasterObject_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass984_0::<DeleteQueryObjects>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetAvailableFucTypesForReport (+36)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DATAOBJECTS (
    DESCRIPTION                      VARCHAR(255) NULL,  -- [?]
    DISPLAYNAME                      NVARCHAR(255) NULL,  -- [+]
    ISPUBLIC                         BIT NULL,  -- [+]
    NAME                             VARCHAR(200) NULL,  -- [+]
    OBJECTID                         INT NOT NULL,  -- [+] PK (guessed)
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    SQLWHEREEXPR                     NVARCHAR(255) NULL,  -- [+]
    CONSTRAINT PK_DATAOBJECTS PRIMARY KEY (OBJECTID)
);
GO

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.SchoolYearDAO+<>c__DisplayClass51_0::<CreateWizardYear>b__0
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DEFAULTCURICULUMLIMITS (
    FUNCTYPEID                       INT NULL,  -- [+]
    GRADEID                          INT NULL,  -- [+]
    HOURS                            NUMERIC(10,2) NULL,  -- [+]
    WEEKENDDAYS                      NVARCHAR(255) NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SetDefaultSubjectsCurriculum
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DEFAULTGROUPS (
    SUBJECTID                        INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SETDEFAULTPARENTSUBJECTS; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SetDefaultSubjectsCurriculum
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DEFAULTPARENTSUBJECTS (
    PSUBJECTID                       INT NULL,  -- [+]
    PSUBJECTNAME                     VARCHAR(255) NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::RetrieveUserRolesAndRights; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SaveSchoolRoleRights_WT; NetCity.DataAccess.dll NetCity.DataAccess.UserDAO::GetDefaultRightsForRole (+1)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DEFAULTROLESRIGHTS (
    RIGHTID                          INT NOT NULL,  -- [+] PK (guessed)
    ROLEID                           INT NULL,  -- [+]
    CONSTRAINT PK_DEFAULTROLESRIGHTS PRIMARY KEY (RIGHTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SetDefaultSubjectsCurriculum
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DEFAULTSUBJECTFIELDS (
    FIELDID                          INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_DEFAULTSUBJECTFIELDS PRIMARY KEY (FIELDID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SetDefaultSubjectsCurriculum
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DEFAULTSUBJECTS (
    FIELDID                          INT NULL,  -- [+]
    PARENTSUBJECTID                  INT NULL,  -- [+]
    SUBJECTID                        INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_DEFAULTSUBJECTS PRIMARY KEY (SUBJECTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStaffListWithDetails; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentListG
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.DOCTYPES (
    DOCTYPE                          INT NULL,  -- [+]
    DOCTYPEID                        INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_DOCTYPES PRIMARY KEY (DOCTYPEID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.SQLDataAccess::CheckAndMakeDOUStudentCorrect_WT; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetDOUStudentsCorrections; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::MarkDeletedDOUStudentsCorrections (+1)
CREATE TABLE dbo.DOUSTUDENT_CORRECT (
    BIRTHDATE_NEW                    DATETIME NULL,  -- [+]
    BIRTHDATE_OLD                    DATETIME NULL,  -- [+]
    CORRECTDATE                      DATETIME NULL,  -- [+]
    CORRECTID                        INT NOT NULL,  -- [?] PK (guessed)
    FIRSTNAME_NEW                    NVARCHAR(255) NULL,  -- [+]
    FIRSTNAME_OLD                    NVARCHAR(255) NULL,  -- [+]
    LASTNAME_NEW                     NVARCHAR(255) NULL,  -- [+]
    LASTNAME_OLD                     NVARCHAR(255) NULL,  -- [+]
    MIDDLENAME_NEW                   NVARCHAR(255) NULL,  -- [+]
    MIDDLENAME_OLD                   NVARCHAR(255) NULL,  -- [+]
    PARENTPAY_MONTH                  INT NULL,  -- [+]
    PARENTPAY_PAYVAL                 NVARCHAR(255) NULL,  -- [+]
    PARENTPAY_YEAR                   INT NULL,  -- [+]
    SCHOOLYEARID                     INT NULL,  -- [+]
    STUDENTID                        INT NULL,  -- [+]
    WAS_SENT                         NVARCHAR(255) NULL,  -- [+]
    CONSTRAINT PK_DOUSTUDENT_CORRECT PRIMARY KEY (CORRECTID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetEMAdminList
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.EDUCMANAGERS (
    EMID                             INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SetEMSchools
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.EM_DISTRICTS (
    DISTRICTID                       INT NOT NULL,  -- [+] PK (guessed)
    EMID                             INT NULL,  -- [+]
    CONSTRAINT PK_EM_DISTRICTS PRIMARY KEY (DISTRICTID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetEMUserRoles; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetEMUserList; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetEMUserListByRole (+4)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.EM_ROLES (
    ROLEID                           INT NULL   -- [+]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetEMSettings; NS_DataAccess.dll NS_DataAccess.FBDataAccess::SetEMSettings; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetEMSettings (+1)
CREATE TABLE dbo.EM_SETTINGS (
    EMID                             INT NULL,  -- [?]
    PARAMETERID                      INT NULL,  -- [?]
    PARAMETERVALUE                   VARCHAR(255) NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL   -- [?]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetExpressionData; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetExpFunctionsList; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetFunctionCode (+2)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.EXPFUNCTIONS (
    DISPLAYSIGN                      NVARCHAR(255) NULL,  -- [+]
    FUNCTIONID                       INT NOT NULL,  -- [+] PK (guessed)
    NAME                             VARCHAR(200) NULL,  -- [+]
    CONSTRAINT PK_EXPFUNCTIONS PRIMARY KEY (FUNCTIONID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass872_0::<UpdateExpLine_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass876_0::<UpdateExpLines>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::DeleteFiltersByIds (+35)
CREATE TABLE dbo.EXPLINES (
    CONSTANT                         NVARCHAR(255) NULL,  -- [+]
    EXPRESSIONID                     INT NULL,  -- [+]
    FUNCTIONID                       INT NULL,  -- [+]
    LINEID                           INT NULL,  -- [+]
    LINEORDER                        INT NULL,  -- [+]
    LPARENTH                         NVARCHAR(255) NULL,  -- [+]
    OPERATIONID                      INT NULL,  -- [+]
    PROPERTYID                       INT NULL,  -- [+]
    QUERYOBJID                       INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    RPARENTH                         NVARCHAR(255) NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetExpOperationsList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetExpressionData; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetQueryFilters (+1)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.EXPOPERATIONS (
    DISPLAYSIGN                      NVARCHAR(255) NULL,  -- [+]
    NAME                             VARCHAR(200) NULL,  -- [+]
    OPERATIONID                      INT NOT NULL,  -- [+] PK (guessed)
    OPERTYPE                         INT NULL,  -- [?]
    CONSTRAINT PK_EXPOPERATIONS PRIMARY KEY (OPERATIONID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::DeleteQueryFieldsByIds_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::CleanQueryOnMasterObjectChange_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::CleanUpQueryFields (+16)
CREATE TABLE dbo.EXPRESSIONS (
    EXPRESSIONID                     INT IDENTITY(1,1) NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_EXPRESSIONS PRIMARY KEY (EXPRESSIONID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetRelationshipTypeName; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetRelationshipTypes; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetStaffFamilyInfo (+3)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.FAMILYRELATIONS (
    ERROR                            NVARCHAR(255) NULL,  -- [?]
    E_INVALIDARG                     NVARCHAR(255) NULL,  -- [?]
    NAME                             VARCHAR(200) NULL,  -- [+]
    NFAMILYRELATIONTYPEID            INT NULL,  -- [?]
    RELATIONSHIPTYPEID               INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+ReportConstructorDAO::GetFilterConditions; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::DeleteObjectEntry_WT; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::UpdateReportInfo_WT (+14)
CREATE TABLE dbo.FILTERCONDITIONS (
    EXPRESSIONID                     INT NULL,  -- [+]
    FILTERCONDITIONID                INT NOT NULL,  -- [+] PK (guessed)
    QUERYID                          INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    CONSTRAINT PK_FILTERCONDITIONS PRIMARY KEY (FILTERCONDITIONID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetClassLanguageStat; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetForeignLanguages_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetStudentInfo2_WT (+1)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.FOREIGNLANGNAMES (
    FOREIGNLANGID                    INT NULL,  -- [+]
    NAME                             VARCHAR(200) NULL   -- [+]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::IsForumModerator; NS_DataAccess.dll NS_DataAccess.FBDataAccess::SetModerators; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::IsForumModerator (+1)
CREATE TABLE dbo.FORUMMODERATORS (
    SCHOOLID                         INT NULL,  -- [+]
    USERID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetForumTopics; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetForumTopics; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetModeratorsList (+6)
CREATE TABLE dbo.FORUMTOPICMODERATORS (
    SCHOOLID                         INT NULL,  -- [+]
    TOPICID                          INT NULL,  -- [+]
    USERID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetFoundersCommon; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetFoundersSql; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStateEOFounders (+6)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.FOUNDERTYPES (
    TYPEID                           INT NULL,  -- [+]
    TYPENAME                         VARCHAR(100) NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass951_0::<UpdateGroupings_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass952_0::<UpdateQueryFields_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass953_0::<UpdateSortOrders_WT>b__0 (+37)
CREATE TABLE dbo.GROUPINGS (
    GROUPINGID                       INT NOT NULL,  -- [+] PK (guessed)
    GROUPORDER                       INT NULL,  -- [+]
    PROPERTYID                       INT NULL,  -- [+]
    QUERYID                          INT NULL,  -- [+]
    QUERYOBJID                       INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    CONSTRAINT PK_GROUPINGS PRIMARY KEY (GROUPINGID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetInformsLastNum; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::SetInformsInfo
CREATE TABLE dbo.INFORMS_LASTNUMS (
    LASTNUM                          INT NULL,  -- [+]
    SCHOOLYEARID                     INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.Republisher+Fixer::FixConstructor; NS_DAComWrapper.dll NS_DAComWrapper.Republisher+Fixer::RemoveRelations; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetObjectData (+3)
CREATE TABLE dbo.JOINEDTABLES (
    ALIAS                            NVARCHAR(255) NULL,  -- [+]
    JOINEDTABLEID                    INT NOT NULL,  -- [+] PK (guessed)
    SQLJOINEXPR                      NVARCHAR(255) NULL,  -- [+]
    TABLEID                          INT NULL,  -- [+]
    CONSTRAINT PK_JOINEDTABLES PRIMARY KEY (JOINEDTABLEID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolLogoutTime; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SetSchoolLogoutTime_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetSchoolLogoutTime (+4)
CREATE TABLE dbo.LOGOUTS (
    LOGOUTTIME                       DATETIME NULL,  -- [+]
    ROLEID                           INT NULL,  -- [+]
    SCHOOLID                         INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetMailBoxList; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetMailBoxName; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetMailBoxName
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.MAILBOXES (
    BOXNAME                          NVARCHAR(255) NULL,  -- [?]
    BOXTYPE                          INT NULL,  -- [?]
    CODE                             VARCHAR(5) NULL,  -- [?]
    ERROR                            NVARCHAR(255) NULL,  -- [?]
    E_INVALIDARG                     NVARCHAR(255) NULL,  -- [?]
    GETPROVINCENAME                  NVARCHAR(255) NULL   -- [?]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::Prepare_UpdateStudentMovement; NetCity.Components.Movement.dll NetCity.Components.Movement.Validation.AddSchoolMovementValidator::GetSqlQuery; NetCity.Components.Movement.dll NetCity.Components.Movement.Validation.MovementValidator::GetSqlQuery
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.MOVE_TYPES (
    NOUNNAME                         NVARCHAR(255) NULL,  -- [+]
    TYPEID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetCountStudInGradeByDocTypeOnDateInPrevYear_WT; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetCountStudPreSchoolInGradeByDocTypeOnDateInPrevYear; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetDepartGrades (+21)
CREATE TABLE dbo.MOV_DOCSCLASSES (
    DOCID                            INT NULL,  -- [+]
    GRADE                            INT NULL,  -- [+]
    GRADEFROM                        NVARCHAR(255) NULL,  -- [+]
    GRADETO                          NVARCHAR(255) NULL,  -- [+]
    NAME                             VARCHAR(200) NULL,  -- [+]
    NAMEFROM                         NVARCHAR(255) NULL,  -- [+]
    NAMETO                           NVARCHAR(255) NULL   -- [+]
);
GO

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.MovementDAO::RemoveFromPoolRegional; NetCity.DataAccess.dll NetCity.DataAccess.MovementDAO::ReturnToPoolRegional
CREATE TABLE dbo.MOV_RETURNTOPOOL_REGIONAL (
    CATEGORYID                       INT NULL,  -- [+]
    DOCID2                           INT NULL,  -- [+]
    GRADE                            INT NULL,  -- [+]
    OLDSCHOOLID                      INT NULL,  -- [+]
    OLDSYID                          INT NULL,  -- [+]
    STUDENTID                        INT NULL   -- [+]
);
GO

-- used by: NetCity.Components.dll NetCity.Components.Services.Users.MergeClonesService+<>c::<ClearAddSchoolLegacySpecific>b__32_16
CREATE TABLE dbo.MSL_TRG_EXCLUDE (
    STUDENTID                        INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetFieldValuesList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetParamsList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetQueryParametersData (+13)
CREATE TABLE dbo.OBJPARAMETERS (
    IDNAME                           NVARCHAR(255) NULL,  -- [+]
    ITEMNAME                         VARCHAR(200) NULL,  -- [+]
    OBJECTID                         INT NULL,  -- [+]
    OBJPARAMETERID                   INT NOT NULL,  -- [+] PK (guessed)
    OBJPARAMID                       INT NULL,  -- [+]
    PARAMDISPLAYNAME                 NVARCHAR(255) NULL,  -- [+]
    PARAMETERID                      INT NULL,  -- [+]
    RELOBJECTID                      INT NULL,  -- [+]
    CONSTRAINT PK_OBJPARAMETERS PRIMARY KEY (OBJPARAMETERID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass997_0::<InsertGrouping_WT>b__1; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass998_0::<InsertField_WT>b__1; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass999_0::<InsertSorting_WT>b__1 (+55)
CREATE TABLE dbo.OBJPROPS (
    DESCRIPTION                      VARCHAR(255) NULL,  -- [+]
    DISPLAYNAME                      NVARCHAR(255) NULL,  -- [+]
    ISPUBLIC                         BIT NULL,  -- [+]
    NAME                             VARCHAR(200) NULL,  -- [+]
    OBJECTID                         INT NULL,  -- [+]
    OUTFILTER                        NVARCHAR(255) NULL,  -- [+]
    PROPERTYID                       INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    SORTORDERID                      INT NULL,  -- [?]
    SORTORDERS                       NVARCHAR(255) NULL,  -- [?]
    SQLEXPR                          NVARCHAR(255) NULL,  -- [+]
    SQL_LIST                         NVARCHAR(255) NULL,  -- [+]
    TYPEID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass984_0::<DeleteQueryObjects>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetDataObjectsList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetObjectRelationShips (+8)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.OBJRELATIONSHIPS (
    DETAILID                         INT NULL,  -- [+]
    MASTERID                         INT NULL,  -- [+]
    RELATIONID                       INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    SQLWHEREEXPR                     NVARCHAR(255) NULL   -- [?]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetObjectData; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetObjectData
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.OBJTABLES (
    OBJECTID                         INT NULL,  -- [+]
    TABLEID                          INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::IsSerialNumberExist; NS_DataAccess.dll NS_DataAccess.FBDataAccess::ImportETokenKeys; NetCity.Security.dll NetCity.Security.DataAccess.SecurityDAO::GetKeyData (+1)
CREATE TABLE dbo.OTPKEYS (
    COUNTER                          NVARCHAR(255) NULL,  -- [+]
    SEED                             NVARCHAR(255) NULL,  -- [+]
    SERIALNUMBER                     CHAR NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetMoveSubDocStudents_Prepare; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetOutsideTypes; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetPoolStudentDetails (+3)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.OUTSIDETYPES (
    NAME                             VARCHAR(200) NULL,  -- [+]
    OUTSIDETYPEID                    INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_OUTSIDETYPES PRIMARY KEY (OUTSIDETYPEID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetParentPayAccessMonth; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::SaveParentPayAccessMonth
CREATE TABLE dbo.PARENTPAY_ACCESS (
    ACCESSMONTH                      INT NULL,  -- [+]
    EMID                             INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass1500_0::<SaveAnnouncement>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::EditAnnouncement_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetPortalAnnouncementInfo (+1)
CREATE TABLE dbo.PORTAL_ANNOUNCE (
    ANNOUNCEMENTID                   INT NULL,  -- [+]
    VIEWTYPE                         INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass607_0::<CreateEvent>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass608_0::<EditEvent>b__0; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetPortalEventInfo (+1)
CREATE TABLE dbo.PORTAL_EVENTS (
    EVENTID                          INT NOT NULL,  -- [+] PK (guessed)
    VIEWTYPE                         INT NULL,  -- [+]
    CONSTRAINT PK_PORTAL_EVENTS PRIMARY KEY (EVENTID)
);
GO

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AppendProduct; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::DeleteProductById; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::GetExtendedProductsList (+11)
CREATE TABLE dbo.PRODUCTS (
    DESCRIPTION                      VARCHAR(255) NULL,  -- [+]
    PRODUCTID                        INT NOT NULL,  -- [+] PK (guessed)
    PRODUCTIDVALUE                   NVARCHAR(255) NULL,  -- [?]
    PRODUCTNAME                      VARCHAR(400) NULL,  -- [+]
    VERSION                          DATETIME NULL,  -- [+]
    CONSTRAINT PK_PRODUCTS PRIMARY KEY (PRODUCTID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::SetProjectPortfolioMemberRight; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::SetProjectPortfolioMemberRight
CREATE TABLE dbo.PROJECTMEMBERS (
    GROUPID                          INT NULL,  -- [+]
    PORTFOLIOID                      INT NULL,  -- [+]
    USERID                           INT NULL   -- [+]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetFunctionCode; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetPropertyCode; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetPropsNameAndDescription (+5)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.PROPERTYTYPES (
    CODE                             VARCHAR(5) NULL,  -- [+]
    TYPEID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass889_0::<PublishReport>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass984_0::<DeleteQueryObjects>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::ExecuteQuerySql (+28)
CREATE TABLE dbo.QUERIES (
    BUILDSTATUS                      INT NULL,  -- [+]
    DISPLAYNAME                      NVARCHAR(255) NULL,  -- [?]
    EDITORID                         INT NULL,  -- [+]
    ISDISTINCT                       BIT NULL,  -- [+]
    ISGROUPEDREPORT                  BIT NULL,  -- [+]
    QUERYID                          INT NOT NULL,  -- [+] PK (guessed)
    SQLQUERY                         NVARCHAR(255) NULL,  -- [+]
    CONSTRAINT PK_QUERIES PRIMARY KEY (QUERYID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass876_0::<UpdateExpLines>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass952_0::<UpdateQueryFields_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass997_0::<InsertGrouping_WT>b__1 (+36)
CREATE TABLE dbo.QUERYFIELDS (
    DISPLAYNAME                      NVARCHAR(255) NULL,  -- [+]
    EXPRESSIONID                     INT NULL,  -- [+]
    FIELDID                          INT NOT NULL,  -- [?] PK (guessed)
    FIELDORDER                       INT NULL,  -- [+]
    ISEXPR                           BIT NULL,  -- [+]
    PROPERTYID                       INT NULL,  -- [+]
    QUERYID                          INT NULL,  -- [+]
    QUERYOBJID                       INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    CONSTRAINT PK_QUERYFIELDS PRIMARY KEY (FIELDID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass854_0::<UpdateQueryObjects_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass979_0::<SaveMasterObject_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass984_0::<DeleteQueryObjects>b__0 (+61)
CREATE TABLE dbo.QUERYOBJECTS (
    ISLEFT                           BIT NULL,  -- [+]
    MASTEROBJECTID                   INT NULL,  -- [+]
    OBJECTID                         INT NULL,  -- [+]
    OBJORDER                         INT NULL,  -- [+]
    QUERYID                          INT NULL,  -- [+]
    QUERYOBJECTID                    INT NOT NULL,  -- [+] PK (guessed)
    QUERYOBJECTS_SEQ                 NVARCHAR(255) NULL,  -- [?]
    QUERYPARAMS                      NVARCHAR(255) NULL,  -- [?]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    CONSTRAINT PK_QUERYOBJECTS PRIMARY KEY (QUERYOBJECTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetParamsList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetQueryParametersData; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetQueryParametersList (+17)
CREATE TABLE dbo.QUERYPARAMS (
    OBJPARAMETERID                   INT NULL,  -- [+]
    PARAMID                          INT NOT NULL,  -- [?] PK (guessed)
    PARAMORDER                       INT NULL,  -- [?]
    QUERYID                          INT NULL,  -- [+]
    QUERYOBJID                       INT NULL,  -- [?]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    SQLPARAMEXPR                     NVARCHAR(255) NULL,  -- [+]
    CONSTRAINT PK_QUERYPARAMS PRIMARY KEY (PARAMID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.Republisher+Fixer::FixConstructor; NS_DAComWrapper.dll NS_DAComWrapper.Republisher+Fixer::RemoveRelation; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetObjectRelations (+1)
CREATE TABLE dbo.RELTABLES (
    RELATIONID                       INT NULL,  -- [+]
    TABLEID                          INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetConstructedReportList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetExternalReportsSQL; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetPublishedReports (+8)
CREATE TABLE dbo.REPORTGROUPS (
    EMID                             INT NULL,  -- [+]
    GROUPID                          INT NOT NULL,  -- [+] PK (guessed)
    GROUPNAME                        VARCHAR(255) NULL,  -- [+]
    REPORTGROUPS_SEQ                 NVARCHAR(255) NULL,  -- [?]
    SCHOOLID                         INT NULL,  -- [+]
    CONSTRAINT PK_REPORTGROUPS PRIMARY KEY (GROUPID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass936_0::<CreateReport_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass979_0::<SaveMasterObject_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+ReportConstructorDAO::GetReportQueries (+22)
CREATE TABLE dbo.REPORTQUERIES (
    QUERYID                          INT NOT NULL,  -- [+] PK (guessed)
    REPORTID                         INT NULL,  -- [+]
    CONSTRAINT PK_REPORTQUERIES PRIMARY KEY (QUERYID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass889_0::<PublishReport>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass979_0::<SaveMasterObject_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+ReportConstructorDAO::GetSimilarReportNames (+30)
CREATE TABLE dbo.REPORTS (
    BEEN                             NVARCHAR(255) NULL,  -- [?]
    BUILDSTATUS                      INT NULL,  -- [?]
    DESCRIPTION                      VARCHAR(255) NULL,  -- [+]
    DISPLAYNAME                      NVARCHAR(255) NULL,  -- [+]
    EMID                             INT NULL,  -- [+]
    FOUND                            NVARCHAR(255) NULL,  -- [?]
    GROUPID                          INT NULL,  -- [+]
    GROUPNAME                        VARCHAR(255) NULL,  -- [?]
    HASN                             BIT NULL,  -- [?]
    INEDIT                           NVARCHAR(255) NULL,  -- [+]
    ISDISTINCT                       BIT NULL,  -- [?]
    ISGROUPEDREPORT                  BIT NULL,  -- [?]
    ISPUBLISHED                      BIT NULL,  -- [+]
    QUERYID                          INT NULL,  -- [?]
    REPORTID                         INT NOT NULL,  -- [+] PK (guessed)
    REPTYPE                          INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    SCHOOLID                         INT NULL,  -- [+]
    SQLQUERY                         NVARCHAR(255) NULL,  -- [?]
    CONSTRAINT PK_REPORTS PRIMARY KEY (REPORTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetParamsList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetQueryParametersData; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetQueryParametersList (+6)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.REPPARAMETERS (
    DISPLAYNAME                      NVARCHAR(255) NULL,  -- [+]
    NAME                             VARCHAR(200) NULL,  -- [?]
    OBJPARAMETERID                   INT NULL,  -- [?]
    OBJPARAMETERS                    NVARCHAR(255) NULL,  -- [?]
    PARAMETERID                      INT NOT NULL,  -- [+] PK (guessed)
    PARAMID                          INT NULL,  -- [?]
    QUERYPARAMS                      NVARCHAR(255) NULL,  -- [?]
    CONSTRAINT PK_REPPARAMETERS PRIMARY KEY (PARAMETERID)
);
GO

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::GetRevisionByGYear; NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::GetRevisionByYear; NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::GetStatFormsPathsByGYear (+2)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.REVISIONS (
    ID                               INT NOT NULL,  -- [+] PK (guessed)
    NOTE                             VARCHAR(400) NULL,  -- [+]
    CONSTRAINT PK_REVISIONS PRIMARY KEY (ID)
);
GO

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::GetEmFormInfo; NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::GetEmSchoolFormParameters; NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::GetFormInfo (+10)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.REVISIONSYEARS (
    REVID                            INT NULL,  -- [+]
    YEARID                           INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_REVISIONSYEARS PRIMARY KEY (YEARID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetJournalEditTimeLimit; NS_DataAccess.dll NS_DataAccess.FBDataAccess::SetJournalEditTimeLimit; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetJournalEditTimeLimit (+1)
CREATE TABLE dbo.RIGHTADDPARAMS (
    JOURNALEDITTIMELIMIT             NVARCHAR(255) NULL,  -- [?]
    PARAMNAME                        NVARCHAR(255) NULL,  -- [+]
    RIGHTID                          INT NULL,  -- [+]
    SCHOOLID                         INT NULL,  -- [+]
    VALUE                            INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolRoleRightList
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.RIGHTS (
    RIGHTID                          INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_RIGHTS PRIMARY KEY (RIGHTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSecurityRoles; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStaffSecurityRoles_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetEMUserRole (+14)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.ROLES (
    ROLEID                           INT NOT NULL,  -- [+] PK (guessed)
    ROLENAME                         NVARCHAR(255) NULL,  -- [+]
    SHORTNAME                        VARCHAR(20) NULL,  -- [+]
    CONSTRAINT PK_ROLES PRIMARY KEY (ROLEID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolRoleRightList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::RetrieveUserRolesAndRights; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SaveSchoolRoleRights_WT (+3)
CREATE TABLE dbo.ROLESRIGHTS (
    RIGHTID                          INT NOT NULL,  -- [+] PK (guessed)
    ROLEID                           INT NULL,  -- [+]
    SCHOOLID                         INT NULL,  -- [+]
    CONSTRAINT PK_ROLESRIGHTS PRIMARY KEY (RIGHTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetClassMeetingsForExport; NS_DataAccess.dll NS_DataAccess.FBDataAccess::ClearYearScheduleTemplate_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::CreateScheduleTemplate_Prepare_WT (+2)
CREATE TABLE dbo.SCHEDULETEMPLATE (
    CSG_ID                           INT NULL,  -- [+]
    FIX                              NVARCHAR(255) NULL,  -- [+]
    ROOMID                           INT NULL,  -- [+]
    SCHEDULETIMEID                   INT NULL,  -- [+]
    WDAY                             INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetReadOnlyAccessSchoolList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::IsReadOnlyAccessOfSchool; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::UpdateReadOnlyAccess
CREATE TABLE dbo.SCHOOLREADONLYACCESS (
    SCHOOLID                         INT NULL   -- [+]
);
GO

-- used by: IRTech.NetCity.Edu.Mobile.ClientService.Settings.exe IRTech.NetCity.Edu.Mobile.ClientService.Settings.ViewModels.MaintenanceViewModel+<<ReadSettings>b__48_0>d::MoveNext; IRTech.NetCity.Edu.Mobile.ClientService.Settings.exe IRTech.NetCity.Edu.Mobile.ClientService.Settings.ViewModels.MaintenanceViewModel+<<get_RegisterServer>b__18_1>d::MoveNext; IRTech.NetCity.Edu.Mobile.ClientService.Settings.exe IRTech.NetCity.Edu.Mobile.ClientService.Settings.ViewModels.MaintenanceViewModel+<<get_SetExternalUri>b__21_1>d::MoveNext (+9)
CREATE TABLE dbo.SERVERSETTINGS (
    CALLBACK                         NVARCHAR(255) NULL,  -- [?]
    COREAPI                          NVARCHAR(255) NULL,  -- [?]
    EXTERNALURIPATH                  NVARCHAR(255) NULL,  -- [?]
    HTTPS                            NVARCHAR(255) NULL,  -- [?]
    IRTECH                           NVARCHAR(255) NULL,  -- [?]
    JSON                             NVARCHAR(MAX) NULL,  -- [?]
    LINK                             NVARCHAR(255) NULL,  -- [?]
    LOGIN                            NVARCHAR(255) NULL,  -- [?]
    LOGOUT                           NVARCHAR(255) NULL,  -- [?]
    MOBILEGATE                       NVARCHAR(255) NULL,  -- [?]
    NC2003                           NVARCHAR(255) NULL,  -- [?]
    PARAMETERID                      INT NULL,  -- [+]
    PARAMETERVALUE                   VARCHAR(255) NULL,  -- [+]
    REGISTERSERVER                   NVARCHAR(255) NULL,  -- [?]
    RESULT                           FLOAT NULL,  -- [?]
    SERVERID                         VARCHAR(255) NULL,  -- [?]
    SERVERURL                        NVARCHAR(255) NULL,  -- [?]
    USERSERVICE                      BIT NULL   -- [?]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetCitySettlementTypeName; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetSettlementTypes; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetCitySettlementTypeName (+1)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.SETTLEMENTTYPES (
    SETTLEMENTTYPEID                 INT NOT NULL,  -- [+] PK (guessed)
    SETTLEMENTTYPENAME               NVARCHAR(255) NULL,  -- [+]
    CONSTRAINT PK_SETTLEMENTTYPES PRIMARY KEY (SETTLEMENTTYPEID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::ClearWrongSubjectGroups; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetCSGTotalsForStudent; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::ValidateStudents (+3)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.SGG_CLASSES_TERMS_STUDENTS (
    CLASSID                          INT NULL,  -- [+]
    SGID                             INT NULL,  -- [+]
    STUDENTID                        INT NOT NULL,  -- [+] PK (guessed)
    TERMID                           INT NULL,  -- [+]
    CONSTRAINT PK_SGG_CLASSES_TERMS_STUDENTS PRIMARY KEY (STUDENTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetAverageTotalMarksForDynamic; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetExportSubjectsListForClass; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetYearIupClassesWithSubjGroupsForExport (+1)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.SG_CLASSES_TERMS (
    CLASSID                          INT NULL,  -- [+]
    SGID                             INT NULL,  -- [+]
    TERMID                           INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_SG_CLASSES_TERMS PRIMARY KEY (TERMID)
);
GO

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.MarksDao::GetClassTotalMarksForSubjectByPassForStageAndGrade
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.SG_GRADES (
    CLASSNAME                        VARCHAR(60) NULL,  -- [+]
    ID                               INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_SG_GRADES PRIMARY KEY (ID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSMSEventsStat; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SaveSMSEvent_Prepare; NetCity.Components.dll NetCity.Components.Services.Organizations.DeleteSchoolService::RemoveSchool (+3)
CREATE TABLE dbo.SMSEVENTS (
    EVENTID                          INT NOT NULL,  -- [?] PK (guessed)
    EVENTTYPEID                      INT NULL,  -- [+]
    MOBILE                           NVARCHAR(255) NULL,  -- [+]
    SCHOOLID                         INT NULL,  -- [+]
    SMSTIME                          DATETIME NULL,  -- [+]
    STATUS                           INT NULL,  -- [+]
    USERID                           INT NULL,  -- [+]
    CONSTRAINT PK_SMSEVENTS PRIMARY KEY (EVENTID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSMSEventsStat; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetSMSEventTypes; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetSMSEventTypes
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.SMSEVENTTYPES (
    EVENTTYPEID                      INT NULL,  -- [+]
    TYPENAME                         VARCHAR(100) NULL   -- [+]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::AddSMSRegistry_Prepare; NS_DataAccess.dll NS_DataAccess.FBDataAccess::AddSMSRegistry_Prepare_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetSMSRegistryUnreg_Prepare (+8)
CREATE TABLE dbo.SMSREGISTRY (
    REGDATA                          NVARCHAR(MAX) NULL,  -- [+]
    REGID                            INT NULL,  -- [+]
    REGTIME                          DATETIME NULL,  -- [+]
    REGTYPE                          INT NULL,  -- [+]
    RESULT                           FLOAT NULL,  -- [+]
    SCHOOLID                         INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass953_0::<UpdateSortOrders_WT>b__0; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass997_0::<InsertGrouping_WT>b__1; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass999_0::<InsertSorting_WT>b__1 (+21)
CREATE TABLE dbo.SORTORDERS (
    PROPERTYID                       INT NULL,  -- [+]
    QUERYID                          INT NULL,  -- [+]
    QUERYOBJID                       INT NULL,  -- [+]
    ROOT                             NVARCHAR(255) NULL,  -- [?]
    SORTORDER                        INT NULL,  -- [+]
    SORTORDERID                      INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_SORTORDERS PRIMARY KEY (SORTORDERID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStaffList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStaffListWithDetails; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStaffSecurityRoles_WT (+3)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.STAFFROLES (
    ABBREV                           VARCHAR(10) NULL,  -- [+]
    ROLEID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::Get85KSection33Exper
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.STAFFSENIORITY (
    TOTAL                            NVARCHAR(255) NULL,  -- [+]
    USERID                           INT NULL   -- [+]
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentInfo::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.Transactional.SetStudentInfo::Execute; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetActivityParameters (+3)
CREATE TABLE dbo.STUDENTINFO (
    PARAMETERID                      INT NULL,  -- [+]
    SGID                             INT NULL,  -- [+]
    STUDENTID                        INT NULL,  -- [+]
    VALUE                            INT NULL   -- [+]
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentInfo::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.Transactional.SetStudentInfo::Execute; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetActivityParameters (+3)
CREATE TABLE dbo.STUDENTPARAMETERS (
    PARAMETERID                      INT NOT NULL,  -- [+] PK (guessed)
    CONSTRAINT PK_STUDENTPARAMETERS PRIMARY KEY (PARAMETERID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetTermFilter_ForTotalPerfomance; NetCity.DataAccess.dll NetCity.DataAccess.ClassDAO::GetClassStudentsSqlBuilder; NetCity.DataAccess.dll NetCity.DataAccess.DateRangeDAO::GetNegativeRanges (+1)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.STUDENTSRANGES (
    CLASSID                          INT NULL,  -- [+]
    DEPART                           DATETIME NULL,  -- [+]
    ENROLL                           DATETIME NULL,  -- [+]
    GRADE                            INT NULL,  -- [+]
    SCHOOLYEARID                     INT NULL,  -- [+]
    STUDENTID                        INT NULL   -- [+]
);
GO

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.MarksDao::RecalcStudentInPeriod; NetCity.DataAccess.dll NetCity.DataAccess.MarksDao::RecalcStudentInPeriod_old
CREATE TABLE dbo.STUDENTS_IN_PERIOD (
    CLASSID                          INT NULL,  -- [+]
    GLOBALYEARID                     INT NULL,  -- [+]
    PERIODID                         INT NOT NULL,  -- [+] PK (guessed)
    PERIODNAME                       NVARCHAR(255) NULL,  -- [+]
    SCHOOLID                         INT NULL,  -- [+]
    SCHOOLYEARID                     INT NULL,  -- [+]
    SGID                             INT NULL,  -- [+]
    STUDENTID                        INT NULL,  -- [+]
    CONSTRAINT PK_STUDENTS_IN_PERIOD PRIMARY KEY (PERIODID)
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetChildrenListForInforms; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetStudentLastInformDate; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::SetInformsInfo
CREATE TABLE dbo.STUDENTS_LASTINFORMS (
    LASTINFORMDATE                   DATETIME NULL,  -- [+]
    SCHOOLYEARID                     INT NULL,  -- [+]
    STUDENTID                        INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetCountStudentsInUDODBYSchoolType; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetAddStudentsStudyLoad; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetAddStudentsStudyLoadPersonal (+2)
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.STUDENTS_YEARS_CATEGORIES (
    CATEGORYID                       INT NOT NULL,  -- [+] PK (guessed)
    CLASSID                          INT NULL,  -- [+]
    GLOBALYEARID                     INT NULL,  -- [+]
    SCHOOLID                         INT NULL,  -- [+]
    STUDENTID                        INT NULL,  -- [+]
    CONSTRAINT PK_STUDENTS_YEARS_CATEGORIES PRIMARY KEY (CATEGORYID)
);
GO

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetGradingScale::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentInfo::Execute; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetActivityParameters (+4)
CREATE TABLE dbo.SUBJECTGROUPINFO (
    PARAMETERID                      INT NULL,  -- [+]
    SGID                             INT NULL,  -- [+]
    VALUE                            INT NULL   -- [+]
);
GO

-- used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetFunctionCode; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetFunctionCode
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.SUPPORTEDTYPES (
    FUNCTIONID                       INT NULL,  -- [+]
    TYPEID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.Republisher+Fixer::FixConstructor; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetObjectData; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetObjectRelations (+4)
CREATE TABLE dbo.TABLES (
    ALIAS                            NVARCHAR(255) NULL,  -- [+]
    TABLEID                          INT NOT NULL,  -- [+] PK (guessed)
    TABLENAME                        NVARCHAR(255) NULL,  -- [+]
    CONSTRAINT PK_TABLES PRIMARY KEY (TABLEID)
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetEGEStudentsAssertions
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.USERPARAMITEMS (
    GLOBALYEARID                     INT NULL,  -- [+]
    ITEMORDERNO                      INT NULL,  -- [+]
    PARAMETERID                      INT NULL,  -- [+]
    USERID                           INT NULL   -- [+]
);
GO

-- used by: NetCity.Integration.Contingent.dll NetCity.Integration.ContingentConverter.Mapping.Infrastructura.StudentDoublicatHelper::GetStudentDuplicateInfo
-- NOTE: only READ by the code (never inserted/updated) -> may actually be a VIEW
CREATE TABLE dbo.USERPARAMVALUES (
    PARAMETERID                      INT NULL,  -- [+]
    PARAMVALUE                       VARCHAR(255) NULL,  -- [+]
    USERID                           INT NULL   -- [+]
);
GO

-- used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStaffECard; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::SaveStaffECard; NetCity.DataAccess.dll NetCity.DataAccess.UserDAO::GetECard (+2)
CREATE TABLE dbo.USERSECARD (
    ECARDID                          INT NOT NULL,  -- [+] PK (guessed)
    USERID                           INT NULL,  -- [+]
    CONSTRAINT PK_USERSECARD PRIMARY KEY (ECARDID)
);
GO


/* ---- Probable foreign keys (by column-name convention; review before enabling) ---- */
-- ALTER TABLE dbo.ACTIVITYPARAMETERS ADD CONSTRAINT FK_ACTIVITYPARAMETERS_ACTIVITYID FOREIGN KEY (ACTIVITYID) REFERENCES dbo.ACTIVITIES(ACTIVITYID);
-- ALTER TABLE dbo.ALLOWEDIPRANGES ADD CONSTRAINT FK_ALLOWEDIPRANGES_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.ASSIGNMENTINFO ADD CONSTRAINT FK_ASSIGNMENTINFO_ASSIGNMENTID FOREIGN KEY (ASSIGNMENTID) REFERENCES dbo.ASSIGNMENTACTIVITYDETAILS(ASSIGNMENTID);
-- ALTER TABLE dbo.ASSIGNMENTINFO ADD CONSTRAINT FK_ASSIGNMENTINFO_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.ASSIGNMENTINFO ADD CONSTRAINT FK_ASSIGNMENTINFO_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.CLASSESFORMS ADD CONSTRAINT FK_CLASSESFORMS_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.CLASSSTUDENTSRANGES ADD CONSTRAINT FK_CLASSSTUDENTSRANGES_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.CLASSSTUDENTSRANGES ADD CONSTRAINT FK_CLASSSTUDENTSRANGES_SCHOOLYEARID FOREIGN KEY (SCHOOLYEARID) REFERENCES dbo.SCHOOLYEARS(SCHOOLYEARID);
-- ALTER TABLE dbo.CLASSSTUDENTSRANGES ADD CONSTRAINT FK_CLASSSTUDENTSRANGES_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.CLS_ST_VARIANTS ADD CONSTRAINT FK_CLS_ST_VARIANTS_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.CLS_ST_VARIANTS ADD CONSTRAINT FK_CLS_ST_VARIANTS_SCHOOLYEARID FOREIGN KEY (SCHOOLYEARID) REFERENCES dbo.SCHOOLYEARS(SCHOOLYEARID);
-- ALTER TABLE dbo.COURSES ADD CONSTRAINT FK_COURSES_PRODUCTID FOREIGN KEY (PRODUCTID) REFERENCES dbo.PRODUCTS(PRODUCTID);
-- ALTER TABLE dbo.CSG_CLASSES_TERMS_STUDENTS ADD CONSTRAINT FK_CSG_CLASSES_TERMS_STUDENTS_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.CSG_CLASSES_TERMS_STUDENTS ADD CONSTRAINT FK_CSG_CLASSES_TERMS_STUDENTS_TERMID FOREIGN KEY (TERMID) REFERENCES dbo.TERMS(TERMID);
-- ALTER TABLE dbo.DEFAULTGROUPS ADD CONSTRAINT FK_DEFAULTGROUPS_SUBJECTID FOREIGN KEY (SUBJECTID) REFERENCES dbo.SUBJECTS(SUBJECTID);
-- ALTER TABLE dbo.DEFAULTPARENTSUBJECTS ADD CONSTRAINT FK_DEFAULTPARENTSUBJECTS_PSUBJECTID FOREIGN KEY (PSUBJECTID) REFERENCES dbo.PARENTSUBJECTS(PSUBJECTID);
-- ALTER TABLE dbo.DEFAULTROLESRIGHTS ADD CONSTRAINT FK_DEFAULTROLESRIGHTS_ROLEID FOREIGN KEY (ROLEID) REFERENCES dbo.ROLES(ROLEID);
-- ALTER TABLE dbo.DEFAULTSUBJECTS ADD CONSTRAINT FK_DEFAULTSUBJECTS_FIELDID FOREIGN KEY (FIELDID) REFERENCES dbo.SUBJECTFIELDS(FIELDID);
-- ALTER TABLE dbo.DOUSTUDENT_CORRECT ADD CONSTRAINT FK_DOUSTUDENT_CORRECT_SCHOOLYEARID FOREIGN KEY (SCHOOLYEARID) REFERENCES dbo.SCHOOLYEARS(SCHOOLYEARID);
-- ALTER TABLE dbo.DOUSTUDENT_CORRECT ADD CONSTRAINT FK_DOUSTUDENT_CORRECT_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.EDUCMANAGERS ADD CONSTRAINT FK_EDUCMANAGERS_EMID FOREIGN KEY (EMID) REFERENCES dbo.EDUCMANAGEMENTS(EMID);
-- ALTER TABLE dbo.EM_DISTRICTS ADD CONSTRAINT FK_EM_DISTRICTS_EMID FOREIGN KEY (EMID) REFERENCES dbo.EDUCMANAGEMENTS(EMID);
-- ALTER TABLE dbo.EM_ROLES ADD CONSTRAINT FK_EM_ROLES_ROLEID FOREIGN KEY (ROLEID) REFERENCES dbo.ROLES(ROLEID);
-- ALTER TABLE dbo.EM_SETTINGS ADD CONSTRAINT FK_EM_SETTINGS_EMID FOREIGN KEY (EMID) REFERENCES dbo.EDUCMANAGEMENTS(EMID);
-- ALTER TABLE dbo.EM_SETTINGS ADD CONSTRAINT FK_EM_SETTINGS_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.EXPLINES ADD CONSTRAINT FK_EXPLINES_EXPRESSIONID FOREIGN KEY (EXPRESSIONID) REFERENCES dbo.EXPRESSIONS(EXPRESSIONID);
-- ALTER TABLE dbo.EXPLINES ADD CONSTRAINT FK_EXPLINES_FUNCTIONID FOREIGN KEY (FUNCTIONID) REFERENCES dbo.EXPFUNCTIONS(FUNCTIONID);
-- ALTER TABLE dbo.EXPLINES ADD CONSTRAINT FK_EXPLINES_OPERATIONID FOREIGN KEY (OPERATIONID) REFERENCES dbo.EXPOPERATIONS(OPERATIONID);
-- ALTER TABLE dbo.FILTERCONDITIONS ADD CONSTRAINT FK_FILTERCONDITIONS_EXPRESSIONID FOREIGN KEY (EXPRESSIONID) REFERENCES dbo.EXPRESSIONS(EXPRESSIONID);
-- ALTER TABLE dbo.FILTERCONDITIONS ADD CONSTRAINT FK_FILTERCONDITIONS_QUERYID FOREIGN KEY (QUERYID) REFERENCES dbo.QUERIES(QUERYID);
-- ALTER TABLE dbo.FORUMMODERATORS ADD CONSTRAINT FK_FORUMMODERATORS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.FORUMMODERATORS ADD CONSTRAINT FK_FORUMMODERATORS_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
-- ALTER TABLE dbo.FORUMTOPICMODERATORS ADD CONSTRAINT FK_FORUMTOPICMODERATORS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.FORUMTOPICMODERATORS ADD CONSTRAINT FK_FORUMTOPICMODERATORS_TOPICID FOREIGN KEY (TOPICID) REFERENCES dbo.FORUMTOPICS(TOPICID);
-- ALTER TABLE dbo.FORUMTOPICMODERATORS ADD CONSTRAINT FK_FORUMTOPICMODERATORS_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
-- ALTER TABLE dbo.FOUNDERTYPES ADD CONSTRAINT FK_FOUNDERTYPES_TYPEID FOREIGN KEY (TYPEID) REFERENCES dbo.ADDACTIVITYTYPES(TYPEID);
-- ALTER TABLE dbo.GROUPINGS ADD CONSTRAINT FK_GROUPINGS_QUERYID FOREIGN KEY (QUERYID) REFERENCES dbo.QUERIES(QUERYID);
-- ALTER TABLE dbo.INFORMS_LASTNUMS ADD CONSTRAINT FK_INFORMS_LASTNUMS_SCHOOLYEARID FOREIGN KEY (SCHOOLYEARID) REFERENCES dbo.SCHOOLYEARS(SCHOOLYEARID);
-- ALTER TABLE dbo.JOINEDTABLES ADD CONSTRAINT FK_JOINEDTABLES_TABLEID FOREIGN KEY (TABLEID) REFERENCES dbo.TABLES(TABLEID);
-- ALTER TABLE dbo.LOGOUTS ADD CONSTRAINT FK_LOGOUTS_ROLEID FOREIGN KEY (ROLEID) REFERENCES dbo.ROLES(ROLEID);
-- ALTER TABLE dbo.LOGOUTS ADD CONSTRAINT FK_LOGOUTS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.MOVE_TYPES ADD CONSTRAINT FK_MOVE_TYPES_TYPEID FOREIGN KEY (TYPEID) REFERENCES dbo.ADDACTIVITYTYPES(TYPEID);
-- ALTER TABLE dbo.MOV_DOCSCLASSES ADD CONSTRAINT FK_MOV_DOCSCLASSES_DOCID FOREIGN KEY (DOCID) REFERENCES dbo.MOV_BOOK(DOCID);
-- ALTER TABLE dbo.MOV_RETURNTOPOOL_REGIONAL ADD CONSTRAINT FK_MOV_RETURNTOPOOL_REGIONAL_CATEGORYID FOREIGN KEY (CATEGORYID) REFERENCES dbo.DOUGROUPAGECATEGORIES(CATEGORYID);
-- ALTER TABLE dbo.MOV_RETURNTOPOOL_REGIONAL ADD CONSTRAINT FK_MOV_RETURNTOPOOL_REGIONAL_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.MSL_TRG_EXCLUDE ADD CONSTRAINT FK_MSL_TRG_EXCLUDE_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.OBJPARAMETERS ADD CONSTRAINT FK_OBJPARAMETERS_OBJECTID FOREIGN KEY (OBJECTID) REFERENCES dbo.DATAOBJECTS(OBJECTID);
-- ALTER TABLE dbo.OBJPARAMETERS ADD CONSTRAINT FK_OBJPARAMETERS_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.OBJPROPS ADD CONSTRAINT FK_OBJPROPS_OBJECTID FOREIGN KEY (OBJECTID) REFERENCES dbo.DATAOBJECTS(OBJECTID);
-- ALTER TABLE dbo.OBJPROPS ADD CONSTRAINT FK_OBJPROPS_SORTORDERID FOREIGN KEY (SORTORDERID) REFERENCES dbo.SORTORDERS(SORTORDERID);
-- ALTER TABLE dbo.OBJPROPS ADD CONSTRAINT FK_OBJPROPS_TYPEID FOREIGN KEY (TYPEID) REFERENCES dbo.ADDACTIVITYTYPES(TYPEID);
-- ALTER TABLE dbo.OBJTABLES ADD CONSTRAINT FK_OBJTABLES_OBJECTID FOREIGN KEY (OBJECTID) REFERENCES dbo.DATAOBJECTS(OBJECTID);
-- ALTER TABLE dbo.OBJTABLES ADD CONSTRAINT FK_OBJTABLES_TABLEID FOREIGN KEY (TABLEID) REFERENCES dbo.TABLES(TABLEID);
-- ALTER TABLE dbo.PARENTPAY_ACCESS ADD CONSTRAINT FK_PARENTPAY_ACCESS_EMID FOREIGN KEY (EMID) REFERENCES dbo.EDUCMANAGEMENTS(EMID);
-- ALTER TABLE dbo.PORTAL_ANNOUNCE ADD CONSTRAINT FK_PORTAL_ANNOUNCE_ANNOUNCEMENTID FOREIGN KEY (ANNOUNCEMENTID) REFERENCES dbo.ANNOUNCEMENTS(ANNOUNCEMENTID);
-- ALTER TABLE dbo.PROJECTMEMBERS ADD CONSTRAINT FK_PROJECTMEMBERS_GROUPID FOREIGN KEY (GROUPID) REFERENCES dbo.GROUPS(GROUPID);
-- ALTER TABLE dbo.PROJECTMEMBERS ADD CONSTRAINT FK_PROJECTMEMBERS_PORTFOLIOID FOREIGN KEY (PORTFOLIOID) REFERENCES dbo.PORTFOLIOS(PORTFOLIOID);
-- ALTER TABLE dbo.PROJECTMEMBERS ADD CONSTRAINT FK_PROJECTMEMBERS_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
-- ALTER TABLE dbo.PROPERTYTYPES ADD CONSTRAINT FK_PROPERTYTYPES_TYPEID FOREIGN KEY (TYPEID) REFERENCES dbo.ADDACTIVITYTYPES(TYPEID);
-- ALTER TABLE dbo.QUERYFIELDS ADD CONSTRAINT FK_QUERYFIELDS_EXPRESSIONID FOREIGN KEY (EXPRESSIONID) REFERENCES dbo.EXPRESSIONS(EXPRESSIONID);
-- ALTER TABLE dbo.QUERYFIELDS ADD CONSTRAINT FK_QUERYFIELDS_QUERYID FOREIGN KEY (QUERYID) REFERENCES dbo.QUERIES(QUERYID);
-- ALTER TABLE dbo.QUERYOBJECTS ADD CONSTRAINT FK_QUERYOBJECTS_OBJECTID FOREIGN KEY (OBJECTID) REFERENCES dbo.DATAOBJECTS(OBJECTID);
-- ALTER TABLE dbo.QUERYOBJECTS ADD CONSTRAINT FK_QUERYOBJECTS_QUERYID FOREIGN KEY (QUERYID) REFERENCES dbo.QUERIES(QUERYID);
-- ALTER TABLE dbo.QUERYPARAMS ADD CONSTRAINT FK_QUERYPARAMS_OBJPARAMETERID FOREIGN KEY (OBJPARAMETERID) REFERENCES dbo.OBJPARAMETERS(OBJPARAMETERID);
-- ALTER TABLE dbo.QUERYPARAMS ADD CONSTRAINT FK_QUERYPARAMS_QUERYID FOREIGN KEY (QUERYID) REFERENCES dbo.QUERIES(QUERYID);
-- ALTER TABLE dbo.RELTABLES ADD CONSTRAINT FK_RELTABLES_TABLEID FOREIGN KEY (TABLEID) REFERENCES dbo.TABLES(TABLEID);
-- ALTER TABLE dbo.REPORTGROUPS ADD CONSTRAINT FK_REPORTGROUPS_EMID FOREIGN KEY (EMID) REFERENCES dbo.EDUCMANAGEMENTS(EMID);
-- ALTER TABLE dbo.REPORTGROUPS ADD CONSTRAINT FK_REPORTGROUPS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.REPORTQUERIES ADD CONSTRAINT FK_REPORTQUERIES_REPORTID FOREIGN KEY (REPORTID) REFERENCES dbo.REPORTS(REPORTID);
-- ALTER TABLE dbo.REPORTS ADD CONSTRAINT FK_REPORTS_EMID FOREIGN KEY (EMID) REFERENCES dbo.EDUCMANAGEMENTS(EMID);
-- ALTER TABLE dbo.REPORTS ADD CONSTRAINT FK_REPORTS_GROUPID FOREIGN KEY (GROUPID) REFERENCES dbo.GROUPS(GROUPID);
-- ALTER TABLE dbo.REPORTS ADD CONSTRAINT FK_REPORTS_QUERYID FOREIGN KEY (QUERYID) REFERENCES dbo.QUERIES(QUERYID);
-- ALTER TABLE dbo.REPORTS ADD CONSTRAINT FK_REPORTS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.REPPARAMETERS ADD CONSTRAINT FK_REPPARAMETERS_OBJPARAMETERID FOREIGN KEY (OBJPARAMETERID) REFERENCES dbo.OBJPARAMETERS(OBJPARAMETERID);
-- ALTER TABLE dbo.REPPARAMETERS ADD CONSTRAINT FK_REPPARAMETERS_PARAMID FOREIGN KEY (PARAMID) REFERENCES dbo.EM_INFOPARAMS(PARAMID);
-- ALTER TABLE dbo.RIGHTADDPARAMS ADD CONSTRAINT FK_RIGHTADDPARAMS_RIGHTID FOREIGN KEY (RIGHTID) REFERENCES dbo.DEFAULTROLESRIGHTS(RIGHTID);
-- ALTER TABLE dbo.RIGHTADDPARAMS ADD CONSTRAINT FK_RIGHTADDPARAMS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.ROLESRIGHTS ADD CONSTRAINT FK_ROLESRIGHTS_ROLEID FOREIGN KEY (ROLEID) REFERENCES dbo.ROLES(ROLEID);
-- ALTER TABLE dbo.ROLESRIGHTS ADD CONSTRAINT FK_ROLESRIGHTS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.SCHEDULETEMPLATE ADD CONSTRAINT FK_SCHEDULETEMPLATE_ROOMID FOREIGN KEY (ROOMID) REFERENCES dbo.ROOMS(ROOMID);
-- ALTER TABLE dbo.SCHEDULETEMPLATE ADD CONSTRAINT FK_SCHEDULETEMPLATE_SCHEDULETIMEID FOREIGN KEY (SCHEDULETIMEID) REFERENCES dbo.SCHEDULETIMES(SCHEDULETIMEID);
-- ALTER TABLE dbo.SCHOOLREADONLYACCESS ADD CONSTRAINT FK_SCHOOLREADONLYACCESS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.SERVERSETTINGS ADD CONSTRAINT FK_SERVERSETTINGS_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.SGG_CLASSES_TERMS_STUDENTS ADD CONSTRAINT FK_SGG_CLASSES_TERMS_STUDENTS_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.SGG_CLASSES_TERMS_STUDENTS ADD CONSTRAINT FK_SGG_CLASSES_TERMS_STUDENTS_TERMID FOREIGN KEY (TERMID) REFERENCES dbo.TERMS(TERMID);
-- ALTER TABLE dbo.SG_CLASSES_TERMS ADD CONSTRAINT FK_SG_CLASSES_TERMS_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.SMSEVENTS ADD CONSTRAINT FK_SMSEVENTS_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.SMSEVENTS ADD CONSTRAINT FK_SMSEVENTS_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
-- ALTER TABLE dbo.SMSREGISTRY ADD CONSTRAINT FK_SMSREGISTRY_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.SORTORDERS ADD CONSTRAINT FK_SORTORDERS_QUERYID FOREIGN KEY (QUERYID) REFERENCES dbo.QUERIES(QUERYID);
-- ALTER TABLE dbo.STAFFROLES ADD CONSTRAINT FK_STAFFROLES_ROLEID FOREIGN KEY (ROLEID) REFERENCES dbo.ROLES(ROLEID);
-- ALTER TABLE dbo.STAFFSENIORITY ADD CONSTRAINT FK_STAFFSENIORITY_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
-- ALTER TABLE dbo.STUDENTINFO ADD CONSTRAINT FK_STUDENTINFO_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.STUDENTINFO ADD CONSTRAINT FK_STUDENTINFO_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.STUDENTSRANGES ADD CONSTRAINT FK_STUDENTSRANGES_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.STUDENTSRANGES ADD CONSTRAINT FK_STUDENTSRANGES_SCHOOLYEARID FOREIGN KEY (SCHOOLYEARID) REFERENCES dbo.SCHOOLYEARS(SCHOOLYEARID);
-- ALTER TABLE dbo.STUDENTSRANGES ADD CONSTRAINT FK_STUDENTSRANGES_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.STUDENTS_IN_PERIOD ADD CONSTRAINT FK_STUDENTS_IN_PERIOD_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.STUDENTS_IN_PERIOD ADD CONSTRAINT FK_STUDENTS_IN_PERIOD_GLOBALYEARID FOREIGN KEY (GLOBALYEARID) REFERENCES dbo.GLOBALYEARS(GLOBALYEARID);
-- ALTER TABLE dbo.STUDENTS_IN_PERIOD ADD CONSTRAINT FK_STUDENTS_IN_PERIOD_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.STUDENTS_IN_PERIOD ADD CONSTRAINT FK_STUDENTS_IN_PERIOD_SCHOOLYEARID FOREIGN KEY (SCHOOLYEARID) REFERENCES dbo.SCHOOLYEARS(SCHOOLYEARID);
-- ALTER TABLE dbo.STUDENTS_IN_PERIOD ADD CONSTRAINT FK_STUDENTS_IN_PERIOD_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.STUDENTS_LASTINFORMS ADD CONSTRAINT FK_STUDENTS_LASTINFORMS_SCHOOLYEARID FOREIGN KEY (SCHOOLYEARID) REFERENCES dbo.SCHOOLYEARS(SCHOOLYEARID);
-- ALTER TABLE dbo.STUDENTS_LASTINFORMS ADD CONSTRAINT FK_STUDENTS_LASTINFORMS_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.STUDENTS_YEARS_CATEGORIES ADD CONSTRAINT FK_STUDENTS_YEARS_CATEGORIES_CLASSID FOREIGN KEY (CLASSID) REFERENCES dbo.CLASSES(CLASSID);
-- ALTER TABLE dbo.STUDENTS_YEARS_CATEGORIES ADD CONSTRAINT FK_STUDENTS_YEARS_CATEGORIES_GLOBALYEARID FOREIGN KEY (GLOBALYEARID) REFERENCES dbo.GLOBALYEARS(GLOBALYEARID);
-- ALTER TABLE dbo.STUDENTS_YEARS_CATEGORIES ADD CONSTRAINT FK_STUDENTS_YEARS_CATEGORIES_SCHOOLID FOREIGN KEY (SCHOOLID) REFERENCES dbo.SCHOOLS(SCHOOLID);
-- ALTER TABLE dbo.STUDENTS_YEARS_CATEGORIES ADD CONSTRAINT FK_STUDENTS_YEARS_CATEGORIES_STUDENTID FOREIGN KEY (STUDENTID) REFERENCES dbo.STUDENTS(STUDENTID);
-- ALTER TABLE dbo.SUBJECTGROUPINFO ADD CONSTRAINT FK_SUBJECTGROUPINFO_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.SUPPORTEDTYPES ADD CONSTRAINT FK_SUPPORTEDTYPES_FUNCTIONID FOREIGN KEY (FUNCTIONID) REFERENCES dbo.EXPFUNCTIONS(FUNCTIONID);
-- ALTER TABLE dbo.SUPPORTEDTYPES ADD CONSTRAINT FK_SUPPORTEDTYPES_TYPEID FOREIGN KEY (TYPEID) REFERENCES dbo.ADDACTIVITYTYPES(TYPEID);
-- ALTER TABLE dbo.USERPARAMITEMS ADD CONSTRAINT FK_USERPARAMITEMS_GLOBALYEARID FOREIGN KEY (GLOBALYEARID) REFERENCES dbo.GLOBALYEARS(GLOBALYEARID);
-- ALTER TABLE dbo.USERPARAMITEMS ADD CONSTRAINT FK_USERPARAMITEMS_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.USERPARAMITEMS ADD CONSTRAINT FK_USERPARAMITEMS_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
-- ALTER TABLE dbo.USERPARAMVALUES ADD CONSTRAINT FK_USERPARAMVALUES_PARAMETERID FOREIGN KEY (PARAMETERID) REFERENCES dbo.USERINFOPARAMETERS(PARAMETERID);
-- ALTER TABLE dbo.USERPARAMVALUES ADD CONSTRAINT FK_USERPARAMVALUES_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
-- ALTER TABLE dbo.USERSECARD ADD CONSTRAINT FK_USERSECARD_USERID FOREIGN KEY (USERID) REFERENCES dbo.USERS(USERID);
