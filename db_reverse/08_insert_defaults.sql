/* ============================================================================
   08_insert_defaults.sql
   NOT NULL columns without DEFAULT that the application omits in its own INSERTs
   (legacy SQL / Inserter builders). The original database must have had defaults there.
   VERSION columns (NHibernate optimistic locking) get DEFAULT 1.
   ============================================================================ */

ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_CREATED DEFAULT (GETDATE()) FOR [CREATED];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_DISABILITYCHILDADAPTED DEFAULT ('') FOR [DISABILITYCHILDADAPTED];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_EDUCFORM DEFAULT (0) FOR [EDUCFORM];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_MAXPERSONS DEFAULT (0) FOR [MAXPERSONS];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_MEDREFERENCE DEFAULT ('') FOR [MEDREFERENCE];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_MINPERSONS DEFAULT (0) FOR [MINPERSONS];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_SEATSNUMBER DEFAULT (0) FOR [SEATSNUMBER];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_STATUS DEFAULT (0) FOR [STATUS];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.ADD_PROGRAMS ADD CONSTRAINT DF_ADD_PROGRAMS_TYPEID DEFAULT (0) FOR [TYPEID];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.COMPONENTS ADD CONSTRAINT DF_COMPONENTS_ISDELETED DEFAULT (0) FOR [ISDELETED];  -- omitted by: COMDataAccess, FBDataAccess, NS_DataAccess.FBDataAccess::CreateComponent
GO
ALTER TABLE dbo.COMPONENTS ADD CONSTRAINT DF_COMPONENTS_ORDERNO DEFAULT (0) FOR [ORDERNO];  -- omitted by: COMDataAccess, FBDataAccess, NS_DataAccess.FBDataAccess::CreateComponent
GO
ALTER TABLE dbo.CURICULUMPROFILES ADD CONSTRAINT DF_CURICULUMPROFILES_PROFILENAME DEFAULT ('') FOR [PROFILENAME];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.EVENTS ADD CONSTRAINT DF_EVENTS_VERSION DEFAULT (GETDATE()) FOR [VERSION];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.FAMILYINFO ADD CONSTRAINT DF_FAMILYINFO_FIRSTNAME DEFAULT ('') FOR [FIRSTNAME];  -- omitted by: NS_DataAccess.FBDataAccess::AddStaffRelatives_WT, NetCity.DataAccess.UserDAO::AddStaffRelatives_WT
GO
ALTER TABLE dbo.FAMILYINFO ADD CONSTRAINT DF_FAMILYINFO_MIDDLENAME DEFAULT ('') FOR [MIDDLENAME];  -- omitted by: NS_DataAccess.FBDataAccess::AddStaffRelatives_WT, NetCity.DataAccess.UserDAO::AddStaffRelatives_WT
GO
ALTER TABLE dbo.FILEATTACHMENTS ADD CONSTRAINT DF_FILEATTACHMENTS_STORAGE_TYPE DEFAULT (0) FOR [STORAGE_TYPE];  -- omitted by: COMDataAccess, NS_DAComWrapper.COMDataAccess::CopyAttachment
GO
ALTER TABLE dbo.GROUPS ADD CONSTRAINT DF_GROUPS_SUBJECTID DEFAULT (0) FOR [SUBJECTID];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.LOCATIONS ADD CONSTRAINT DF_LOCATIONS_CITYID DEFAULT (0) FOR [CITYID];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.LOCATIONS ADD CONSTRAINT DF_LOCATIONS_NAME DEFAULT ('') FOR [NAME];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.PRECLASSES ADD CONSTRAINT DF_PRECLASSES_NOINFORMIKA DEFAULT ('') FOR [NOINFORMIKA];  -- omitted by: ClassDAO, CopyClassesToNewYear, NetCity.DataAccess.ClassDAO::InsertPreClasses
GO
ALTER TABLE dbo.PROVINCES ADD CONSTRAINT DF_PROVINCES_STATEID DEFAULT (0) FOR [STATEID];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.SCHEDULETIMES ADD CONSTRAINT DF_SCHEDULETIMES_VARIANTID DEFAULT (0) FOR [VARIANTID];  -- omitted by: FBDataAccess, NS_DataAccess.FBDataAccess::CreateScheduleTime, NS_DataAccess.FBDataAccess::CreateScheduleTime_WT
GO
ALTER TABLE dbo.SCHOOLS ADD CONSTRAINT DF_SCHOOLS_CITYID DEFAULT (0) FOR [CITYID];  -- omitted by: FoundersDAO
GO
ALTER TABLE dbo.STATES ADD CONSTRAINT DF_STATES_COUNTRYID DEFAULT (0) FOR [COUNTRYID];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.STUDENTSPARENTS ADD CONSTRAINT DF_STUDENTSPARENTS_KINSHIPTYPE DEFAULT (0) FOR [KINSHIPTYPE];  -- omitted by: NetCity.DataAccess.UserManager::InitSqlStrings, UserManager
GO
ALTER TABLE dbo.SUBJECTGROUPS ADD CONSTRAINT DF_SUBJECTGROUPS_ISMODULAR DEFAULT (0) FOR [ISMODULAR];  -- omitted by: ClassDAO
GO
ALTER TABLE dbo.SUBJECTS ADD CONSTRAINT DF_SUBJECTS_EXTRACURRICULAR DEFAULT (0) FOR [EXTRACURRICULAR];  -- omitted by: COMDataAccess, LaDAO, NetCity.DataAccess.LaDAO::AddSubject
GO
ALTER TABLE dbo.SUBJECTS ADD CONSTRAINT DF_SUBJECTS_GLOBALSUBJID DEFAULT (0) FOR [GLOBALSUBJID];  -- omitted by: LaDAO, NetCity.DataAccess.LaDAO::AddSubject
GO
ALTER TABLE dbo.SUBJECTS ADD CONSTRAINT DF_SUBJECTS_ISMODULAR DEFAULT (0) FOR [ISMODULAR];  -- omitted by: COMDataAccess, LaDAO, NetCity.DataAccess.LaDAO::AddSubject
GO
ALTER TABLE dbo.SUBJECTS ADD CONSTRAINT DF_SUBJECTS_SCHOOLID DEFAULT (0) FOR [SCHOOLID];  -- omitted by: LaDAO, NetCity.DataAccess.LaDAO::AddSubject
GO
ALTER TABLE dbo.SUBJECTS ADD CONSTRAINT DF_SUBJECTS_USEEXEMPTION DEFAULT (0) FOR [USEEXEMPTION];  -- omitted by: COMDataAccess, LaDAO, NetCity.DataAccess.LaDAO::AddSubject
GO
ALTER TABLE dbo.USERINFOLISTITEMS ADD CONSTRAINT DF_USERINFOLISTITEMS_ITEMNAME DEFAULT ('') FOR [ITEMNAME];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.USERINFOLISTITEMS ADD CONSTRAINT DF_USERINFOLISTITEMS_ITEMNAME2 DEFAULT ('') FOR [ITEMNAME2];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.USERINFOLISTITEMS ADD CONSTRAINT DF_USERINFOLISTITEMS_ITEMNAME3 DEFAULT ('') FOR [ITEMNAME3];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.USERINFOLISTITEMS ADD CONSTRAINT DF_USERINFOLISTITEMS_PARAMETERID DEFAULT (0) FOR [PARAMETERID];  -- omitted by: COMDataAccess
GO
ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_GENDER DEFAULT ('') FOR [GENDER];  -- omitted by: FBDataAccess, NS_DataAccess.FBDataAccess::SetUserCitizenship_WT, NS_DataAccess.SQLDataAccess::SetUserCitizenship_WT
GO
ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_LASTNAME DEFAULT ('') FOR [LASTNAME];  -- omitted by: FBDataAccess, NS_DataAccess.FBDataAccess::SetUserCitizenship_WT, NS_DataAccess.SQLDataAccess::SetUserCitizenship_WT
GO
ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_LOGINNAME DEFAULT ('') FOR [LOGINNAME];  -- omitted by: FBDataAccess, NS_DataAccess.FBDataAccess::SetUserCitizenship_WT, NS_DataAccess.SQLDataAccess::SetUserCitizenship_WT
GO
ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_LOGINTYPE DEFAULT (0) FOR [LOGINTYPE];  -- omitted by: FBDataAccess, NS_DataAccess.FBDataAccess::SetUserCitizenship_WT, NS_DataAccess.SQLDataAccess::SetUserCitizenship_WT
GO
ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_NICKNAME DEFAULT ('') FOR [NICKNAME];  -- omitted by: FBDataAccess, NS_DataAccess.FBDataAccess::SetUserCitizenship_WT, NS_DataAccess.SQLDataAccess::SetUserCitizenship_WT
GO
ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_PASSWORD DEFAULT ('') FOR [PASSWORD];  -- omitted by: FBDataAccess, NS_DataAccess.FBDataAccess::SetUserCitizenship_WT, NS_DataAccess.SQLDataAccess::SetUserCitizenship_WT
GO
ALTER TABLE dbo.USERSETTINGS ADD CONSTRAINT DF_USERSETTINGS_FAVORITEREPORTS DEFAULT ('') FOR [FAVORITEREPORTS];  -- omitted by: NetCity.DataAccess.Commanders.UserCommander+PasswordExpiredCommand::.ctor, UserCommander
GO
ALTER TABLE dbo.USERSETTINGS ADD CONSTRAINT DF_USERSETTINGS_LANGUAGE DEFAULT ('') FOR [LANGUAGE];  -- omitted by: NetCity.DataAccess.Commanders.UserCommander+PasswordExpiredCommand::.ctor, UserCommander
GO
ALTER TABLE dbo.USERSETTINGS ADD CONSTRAINT DF_USERSETTINGS_RECOVERYANSWER DEFAULT ('') FOR [RECOVERYANSWER];  -- omitted by: NetCity.DataAccess.Commanders.UserCommander+PasswordExpiredCommand::.ctor, UserCommander
GO
ALTER TABLE dbo.USERSETTINGS ADD CONSTRAINT DF_USERSETTINGS_RECOVERYQUESTION DEFAULT ('') FOR [RECOVERYQUESTION];  -- omitted by: NetCity.DataAccess.Commanders.UserCommander+PasswordExpiredCommand::.ctor, UserCommander
GO
ALTER TABLE dbo.USERSETTINGS ADD CONSTRAINT DF_USERSETTINGS_SWNETSCHOOLAPP DEFAULT (0) FOR [SWNETSCHOOLAPP];  -- omitted by: NetCity.DataAccess.Commanders.UserCommander+PasswordExpiredCommand::.ctor, UserCommander
GO
ALTER TABLE dbo.USERSETTINGS ADD CONSTRAINT DF_USERSETTINGS_SWSFERUMBANNER DEFAULT (0) FOR [SWSFERUMBANNER];  -- omitted by: NetCity.DataAccess.Commanders.UserCommander+PasswordExpiredCommand::.ctor, NetCity.DataAccess.UserDAO::SaveUserSettings_WT, UserCommander
GO

/* ---- primary keys generated by the database (IDENTITY) ---- */
-- DOUSTUDENT_CORRECT.CORRECTID omitted by: NS_DataAccess.SQLDataAccess::CheckAndMakeDOUStudentCorrect_WT, SQLDataAccess
IF NOT EXISTS (SELECT 1 FROM dbo.DOUSTUDENT_CORRECT) AND COLUMNPROPERTY(OBJECT_ID('dbo.DOUSTUDENT_CORRECT'), 'CORRECTID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_DOUSTUDENT_CORRECT sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.DOUSTUDENT_CORRECT') AND type = 'PK');
    DROP TABLE dbo.DOUSTUDENT_CORRECT;
    CREATE TABLE dbo.DOUSTUDENT_CORRECT (
        [BIRTHDATE_NEW] datetime NULL,
        [BIRTHDATE_OLD] datetime NULL,
        [CORRECTDATE] datetime NULL,
        [CORRECTID] int IDENTITY(1,1) NOT NULL,
        [FIRSTNAME_NEW] nvarchar(255) NULL,
        [FIRSTNAME_OLD] nvarchar(255) NULL,
        [LASTNAME_NEW] nvarchar(255) NULL,
        [LASTNAME_OLD] nvarchar(255) NULL,
        [MIDDLENAME_NEW] nvarchar(255) NULL,
        [MIDDLENAME_OLD] nvarchar(255) NULL,
        [PARENTPAY_MONTH] int NULL,
        [PARENTPAY_PAYVAL] nvarchar(255) NULL,
        [PARENTPAY_YEAR] int NULL,
        [SCHOOLYEARID] int NULL,
        [STUDENTID] int NULL,
        [WAS_SENT] nvarchar(255) NULL,
        CONSTRAINT PK_DOUSTUDENT_CORRECT PRIMARY KEY ([CORRECTID])
    );
END;
GO
-- FILTERCONDITIONS.FILTERCONDITIONID omitted by: COMDataAccess, NS_DataAccess.SQLDataAccess::UpdateFilters, SQLDataAccess
IF NOT EXISTS (SELECT 1 FROM dbo.FILTERCONDITIONS) AND COLUMNPROPERTY(OBJECT_ID('dbo.FILTERCONDITIONS'), 'FILTERCONDITIONID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_FILTERCONDITIONS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.FILTERCONDITIONS') AND type = 'PK');
    DROP TABLE dbo.FILTERCONDITIONS;
    CREATE TABLE dbo.FILTERCONDITIONS (
        [EXPRESSIONID] int NULL,
        [FILTERCONDITIONID] int IDENTITY(1,1) NOT NULL,
        [QUERYID] int NULL,
        [ROOT] nvarchar(255) NULL,
        CONSTRAINT PK_FILTERCONDITIONS PRIMARY KEY ([FILTERCONDITIONID])
    );
END;
GO
-- GROUPINGS.GROUPINGID omitted by: COMDataAccess, NS_DAComWrapper.COMDataAccess+<>c__DisplayClass997_0::<InsertGrouping_WT>b__1, NS_DAComWrapper.COMDataAccess+<>c__DisplayClass998_0::<InsertField_WT>b__1
IF NOT EXISTS (SELECT 1 FROM dbo.GROUPINGS) AND COLUMNPROPERTY(OBJECT_ID('dbo.GROUPINGS'), 'GROUPINGID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_GROUPINGS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.GROUPINGS') AND type = 'PK');
    DROP TABLE dbo.GROUPINGS;
    CREATE TABLE dbo.GROUPINGS (
        [GROUPINGID] int IDENTITY(1,1) NOT NULL,
        [GROUPORDER] int NULL,
        [PROPERTYID] int NULL,
        [QUERYID] int NULL,
        [QUERYOBJID] int NULL,
        [ROOT] nvarchar(255) NULL,
        CONSTRAINT PK_GROUPINGS PRIMARY KEY ([GROUPINGID])
    );
END;
GO
-- QUERIES.QUERYID omitted by: COMDataAccess
IF NOT EXISTS (SELECT 1 FROM dbo.QUERIES) AND COLUMNPROPERTY(OBJECT_ID('dbo.QUERIES'), 'QUERYID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_QUERIES sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.QUERIES') AND type = 'PK');
    DROP TABLE dbo.QUERIES;
    CREATE TABLE dbo.QUERIES (
        [BUILDSTATUS] int NULL,
        [DISPLAYNAME] nvarchar(255) NULL,
        [EDITORID] int NULL,
        [ISDISTINCT] bit NULL,
        [ISGROUPEDREPORT] bit NULL,
        [QUERYID] int IDENTITY(1,1) NOT NULL,
        [SQLQUERY] nvarchar(255) NULL,
        CONSTRAINT PK_QUERIES PRIMARY KEY ([QUERYID])
    );
END;
GO
-- QUERYFIELDS.FIELDID omitted by: COMDataAccess, NS_DAComWrapper.COMDataAccess+<>c__DisplayClass998_0::<InsertField_WT>b__1
IF NOT EXISTS (SELECT 1 FROM dbo.QUERYFIELDS) AND COLUMNPROPERTY(OBJECT_ID('dbo.QUERYFIELDS'), 'FIELDID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_QUERYFIELDS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.QUERYFIELDS') AND type = 'PK');
    DROP TABLE dbo.QUERYFIELDS;
    CREATE TABLE dbo.QUERYFIELDS (
        [DISPLAYNAME] nvarchar(255) NULL,
        [EXPRESSIONID] int NULL,
        [FIELDID] int IDENTITY(1,1) NOT NULL,
        [FIELDORDER] int NULL,
        [ISEXPR] bit NULL,
        [PROPERTYID] int NULL,
        [QUERYID] int NULL,
        [QUERYOBJID] int NULL,
        [ROOT] nvarchar(255) NULL,
        CONSTRAINT PK_QUERYFIELDS PRIMARY KEY ([FIELDID])
    );
END;
GO
-- QUERYOBJECTS.QUERYOBJECTID omitted by: COMDataAccess
IF NOT EXISTS (SELECT 1 FROM dbo.QUERYOBJECTS) AND COLUMNPROPERTY(OBJECT_ID('dbo.QUERYOBJECTS'), 'QUERYOBJECTID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_QUERYOBJECTS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.QUERYOBJECTS') AND type = 'PK');
    DROP TABLE dbo.QUERYOBJECTS;
    CREATE TABLE dbo.QUERYOBJECTS (
        [ISLEFT] bit NULL,
        [MASTEROBJECTID] int NULL,
        [OBJECTID] int NULL,
        [OBJORDER] int NULL,
        [QUERYID] int NULL,
        [QUERYOBJECTID] int IDENTITY(1,1) NOT NULL,
        [QUERYOBJECTS_SEQ] nvarchar(255) NULL,
        [QUERYPARAMS] nvarchar(255) NULL,
        [ROOT] nvarchar(255) NULL,
        CONSTRAINT PK_QUERYOBJECTS PRIMARY KEY ([QUERYOBJECTID])
    );
END;
GO
-- QUERYPARAMS.PARAMID omitted by: COMDataAccess
IF NOT EXISTS (SELECT 1 FROM dbo.QUERYPARAMS) AND COLUMNPROPERTY(OBJECT_ID('dbo.QUERYPARAMS'), 'PARAMID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_QUERYPARAMS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.QUERYPARAMS') AND type = 'PK');
    DROP TABLE dbo.QUERYPARAMS;
    CREATE TABLE dbo.QUERYPARAMS (
        [OBJPARAMETERID] int NULL,
        [PARAMID] int IDENTITY(1,1) NOT NULL,
        [PARAMORDER] int NULL,
        [QUERYID] int NULL,
        [QUERYOBJID] int NULL,
        [ROOT] nvarchar(255) NULL,
        [SQLPARAMEXPR] nvarchar(255) NULL,
        CONSTRAINT PK_QUERYPARAMS PRIMARY KEY ([PARAMID])
    );
END;
GO
-- REPORTS.REPORTID omitted by: COMDataAccess
IF NOT EXISTS (SELECT 1 FROM dbo.REPORTS) AND COLUMNPROPERTY(OBJECT_ID('dbo.REPORTS'), 'REPORTID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_REPORTS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.REPORTS') AND type = 'PK');
    DROP TABLE dbo.REPORTS;
    CREATE TABLE dbo.REPORTS (
        [BEEN] nvarchar(255) NULL,
        [BUILDSTATUS] int NULL,
        [DESCRIPTION] varchar(255) NULL,
        [DISPLAYNAME] nvarchar(255) NULL,
        [EMID] int NULL,
        [FOUND] nvarchar(255) NULL,
        [GROUPID] int NULL,
        [GROUPNAME] varchar(255) NULL,
        [HASN] bit NULL,
        [INEDIT] nvarchar(255) NULL,
        [ISDISTINCT] bit NULL,
        [ISGROUPEDREPORT] bit NULL,
        [ISPUBLISHED] bit NULL,
        [QUERYID] int NULL,
        [REPORTID] int IDENTITY(1,1) NOT NULL,
        [REPTYPE] int NULL,
        [ROOT] nvarchar(255) NULL,
        [SCHOOLID] int NULL,
        [SQLQUERY] nvarchar(255) NULL,
        CONSTRAINT PK_REPORTS PRIMARY KEY ([REPORTID])
    );
END;
GO
-- RESULTSDETAILS.RESULTID omitted by: IRTech.NetCity.Lacc.Processor.Commands.SetBLOBAnswer::Execute
IF NOT EXISTS (SELECT 1 FROM dbo.RESULTSDETAILS) AND COLUMNPROPERTY(OBJECT_ID('dbo.RESULTSDETAILS'), 'RESULTID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_RESULTSDETAILS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.RESULTSDETAILS') AND type = 'PK');
    DROP TABLE dbo.RESULTSDETAILS;
    CREATE TABLE dbo.RESULTSDETAILS (
        [RESULTID] int IDENTITY(1,1) NOT NULL,
        [DETAILS] image NULL,
        [ASSIGNMENTID] int NULL,
        [STUDENTID] int NULL,
        CONSTRAINT PK_RESULTSDETAILS PRIMARY KEY ([RESULTID])
    );
END;
GO
-- SMSEVENTS.EVENTID omitted by: COMDataAccess, NS_DAComWrapper.COMDataAccess::SaveSMSEvent_Prepare, NetCity.DataAccess.SmsDao::SaveSMSEvent_Prepare
IF NOT EXISTS (SELECT 1 FROM dbo.SMSEVENTS) AND COLUMNPROPERTY(OBJECT_ID('dbo.SMSEVENTS'), 'EVENTID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_SMSEVENTS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.SMSEVENTS') AND type = 'PK');
    DROP TABLE dbo.SMSEVENTS;
    CREATE TABLE dbo.SMSEVENTS (
        [EVENTID] int IDENTITY(1,1) NOT NULL,
        [EVENTTYPEID] int NULL,
        [MOBILE] nvarchar(255) NULL,
        [SCHOOLID] int NULL,
        [SMSTIME] datetime NULL,
        [STATUS] int NULL,
        [USERID] int NULL,
        CONSTRAINT PK_SMSEVENTS PRIMARY KEY ([EVENTID])
    );
END;
GO
-- SORTORDERS.SORTORDERID omitted by: COMDataAccess, NS_DAComWrapper.COMDataAccess+<>c__DisplayClass999_0::<InsertSorting_WT>b__1
IF NOT EXISTS (SELECT 1 FROM dbo.SORTORDERS) AND COLUMNPROPERTY(OBJECT_ID('dbo.SORTORDERS'), 'SORTORDERID', 'IsIdentity') = 0
BEGIN
    DECLARE @pk_SORTORDERS sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.SORTORDERS') AND type = 'PK');
    DROP TABLE dbo.SORTORDERS;
    CREATE TABLE dbo.SORTORDERS (
        [PROPERTYID] int NULL,
        [QUERYID] int NULL,
        [QUERYOBJID] int NULL,
        [ROOT] nvarchar(255) NULL,
        [SORTORDER] int NULL,
        [SORTORDERID] int IDENTITY(1,1) NOT NULL,
        CONSTRAINT PK_SORTORDERS PRIMARY KEY ([SORTORDERID])
    );
END;
GO

