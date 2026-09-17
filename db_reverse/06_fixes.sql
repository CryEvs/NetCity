/* ============================================================================
   06_fixes.sql
   Corrections of legacy tables whose structure was guessed wrong by static analysis
   and is now confirmed by decompiled code (NS_DAComWrapper / NetCity.DataAccess).
   ============================================================================ */

-- ROLESRIGHTS: SaveSchoolRoleRights_WT inserts (ROLEID, RIGHTID, SCHOOLID) many rows per right
DROP TABLE IF EXISTS dbo.ROLESRIGHTS;
CREATE TABLE dbo.ROLESRIGHTS (
    ROLEID   INT NOT NULL,
    RIGHTID  INT NOT NULL,
    SCHOOLID INT NOT NULL,
    CONSTRAINT PK_ROLESRIGHTS PRIMARY KEY (SCHOOLID, ROLEID, RIGHTID)
);
GO

-- DEFAULTROLESRIGHTS: template copied into ROLESRIGHTS for every new school
DROP TABLE IF EXISTS dbo.DEFAULTROLESRIGHTS;
CREATE TABLE dbo.DEFAULTROLESRIGHTS (
    ROLEID  INT NOT NULL,
    RIGHTID INT NOT NULL,
    CONSTRAINT PK_DEFAULTROLESRIGHTS PRIMARY KEY (ROLEID, RIGHTID)
);
GO

-- RIGHTS: "select R.RIGHTID, RIGHTNAME ... from RIGHTS R"
DROP TABLE IF EXISTS dbo.RIGHTS;
CREATE TABLE dbo.RIGHTS (
    RIGHTID   INT NOT NULL CONSTRAINT PK_RIGHTS PRIMARY KEY,
    RIGHTNAME NVARCHAR(255) NULL
);
GO

-- LOGOUTS: UserDAO.GetUserLogoutTime -> MIN(LOGOUTTIME) cast to int (minutes)
DROP TABLE IF EXISTS dbo.LOGOUTS;
CREATE TABLE dbo.LOGOUTS (
    SCHOOLID   INT NOT NULL,
    ROLEID     INT NOT NULL,
    LOGOUTTIME INT NOT NULL,
    CONSTRAINT PK_LOGOUTS PRIMARY KEY (SCHOOLID, ROLEID)
);
GO

-- DEFAULTEVENTS: template of holidays (ETYPE=4) and vacations (ETYPE=3) copied into a new school year
-- by SchoolYearDAO.CopyEventsToNewYear (dates are shifted by whole years)
DROP TABLE IF EXISTS dbo.DEFAULTEVENTS;
CREATE TABLE dbo.DEFAULTEVENTS (
    ID        INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_DEFAULTEVENTS PRIMARY KEY,
    NAME      NVARCHAR(255) NOT NULL,
    STARTTIME DATETIME NOT NULL,
    ENDTIME   DATETIME NOT NULL,
    ETYPE     INT NOT NULL
);
GO

-- ACCESS_REPORTS: "SCH.SCHOOLID in (select SCHOOLID from ACCESS_REPORTS where REPORTID=R.REPORTID)"
DROP TABLE IF EXISTS dbo.ACCESS_REPORTS;
CREATE TABLE dbo.ACCESS_REPORTS (
    REPORTID INT NOT NULL,
    SCHOOLID INT NOT NULL,
    CONSTRAINT PK_ACCESS_REPORTS PRIMARY KEY (REPORTID, SCHOOLID)
);
GO

-- CLASSFORMS: "select CLASSFORMID, CLASSFORMNAME from CLASSFORMS" (ReferencesController.ClassForms)
DROP TABLE IF EXISTS dbo.CLASSFORMS;
CREATE TABLE dbo.CLASSFORMS (
    CLASSFORMID   INT NOT NULL CONSTRAINT PK_CLASSFORMS PRIMARY KEY,
    CLASSFORMNAME NVARCHAR(255) NOT NULL
);
GO

-- Table-valued parameter types used by NetCity.DataAccess.Common.DbFactory.*TvpBuilder
-- (SqlParameter TypeName = list_int / list_bigint / list_str / tuple_int / list_int_unique)
IF TYPE_ID(N'dbo.list_int') IS NULL        CREATE TYPE dbo.list_int        AS TABLE (item INT NULL);
IF TYPE_ID(N'dbo.list_bigint') IS NULL     CREATE TYPE dbo.list_bigint     AS TABLE (item BIGINT NULL);
IF TYPE_ID(N'dbo.list_str') IS NULL        CREATE TYPE dbo.list_str        AS TABLE (item NVARCHAR(MAX) NULL);
IF TYPE_ID(N'dbo.tuple_int') IS NULL       CREATE TYPE dbo.tuple_int       AS TABLE (item1 INT NULL, item2 INT NULL);
IF TYPE_ID(N'dbo.list_int_unique') IS NULL CREATE TYPE dbo.list_int_unique AS TABLE (item INT NOT NULL PRIMARY KEY);
GO

-- DUAL: Oracle/Firebird-style single-row table used by legacy SQL on MS SQL too
-- ("insert into X (...) select @a, @b from DUAL where not exists (...)", "SELECT * FROM dual WHERE 1=2")
IF OBJECT_ID(N'dbo.DUAL', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.DUAL (DUMMY CHAR(1) NOT NULL CONSTRAINT PK_DUAL PRIMARY KEY CONSTRAINT CK_DUAL_ONE_ROW CHECK (DUMMY = 'X'));
    INSERT INTO dbo.DUAL (DUMMY) VALUES ('X');
END;
GO

-- CURICULUMLIMITS: the "maximum load" row has no component. NHibernate writes NULL for
-- Component { Id = 0 } (unsaved-value), legacy SQL writes COMPONENTID = 0 and queries "COMPONENTID > 0".
-- So COMPONENTID must be nullable -> the ORM composite id cannot be the physical PK.
DECLARE @pk_cl sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.CURICULUMLIMITS') AND type = 'PK');
IF @pk_cl IS NOT NULL EXEC('ALTER TABLE dbo.CURICULUMLIMITS DROP CONSTRAINT [' + @pk_cl + ']');
ALTER TABLE dbo.CURICULUMLIMITS ALTER COLUMN COMPONENTID INT NULL;
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE object_id = OBJECT_ID('dbo.CURICULUMLIMITS') AND name = 'IX_CURICULUMLIMITS_YEAR_GRADE')
    CREATE CLUSTERED INDEX IX_CURICULUMLIMITS_YEAR_GRADE ON dbo.CURICULUMLIMITS (SCHOOLYEARID, GRADEID, COMPONENTID);
GO

-- DEFAULTCOMPONENTS: curriculum components copied into COMPONENTS for every new school
-- (COMDataAccess.InsertDefaultCurriculum: "COMPONENTNAME, @SCHOOLID, ORDERNO from DEFAULTCOMPONENTS [where COMPONENTID=1]")
IF OBJECT_ID(N'dbo.DEFAULTCOMPONENTS', N'U') IS NULL
    CREATE TABLE dbo.DEFAULTCOMPONENTS (
        COMPONENTID   INT NOT NULL CONSTRAINT PK_DEFAULTCOMPONENTS PRIMARY KEY,
        COMPONENTNAME NVARCHAR(255) NOT NULL,
        ORDERNO       INT NOT NULL
    );
GO

-- Default subjects templates copied into a new school (COMDataAccess.SetDefaultSubjectsCurriculum / SETDEFAULTPARENTSUBJECTS):
--   select SUBJECTNAME, SUBJECTABBREV, GROUPNAME, GROUPABBREV, FIELDNAME, s.FIELDID, ps.PSUBJECTID PARENTSUBJECTID
--   from DEFAULTSUBJECTS s left join defaultsubjectfields sf on s.fieldid = sf.fieldid
--     left join defaultgroups g on s.subjectid = g.subjectid
--     left join defaultParentSubjects dps on s.PARENTSUBJECTID = dps.PSUBJECTID
--     left join PARENTSUBJECTS ps on dps.PSUBJECTNAME = ps.PSUBJECTNAME and SCHOOLID=@SCHOOLID
--   preschool: "from DEFAULTSUBJECTS s where s.SUBJECTID in (5,10,3,25,17,16,18,22)"
-- Unqualified columns were not attributed by analyze.py -> tables lacked the name columns.
-- Column sizes follow the target tables SUBJECTS/GROUPS/SUBJECTFIELDS/PARENTSUBJECTS. SCHOOLID must NOT exist here.
DROP TABLE IF EXISTS dbo.DEFAULTGROUPS;
DROP TABLE IF EXISTS dbo.DEFAULTSUBJECTS;
DROP TABLE IF EXISTS dbo.DEFAULTSUBJECTFIELDS;
DROP TABLE IF EXISTS dbo.DEFAULTPARENTSUBJECTS;
CREATE TABLE dbo.DEFAULTSUBJECTFIELDS (
    FIELDID   INT NOT NULL CONSTRAINT PK_DEFAULTSUBJECTFIELDS PRIMARY KEY,
    FIELDNAME VARCHAR(255) NOT NULL
);
CREATE TABLE dbo.DEFAULTPARENTSUBJECTS (
    PSUBJECTID   INT NOT NULL CONSTRAINT PK_DEFAULTPARENTSUBJECTS PRIMARY KEY,
    PSUBJECTNAME VARCHAR(255) NOT NULL
);
CREATE TABLE dbo.DEFAULTSUBJECTS (
    SUBJECTID       INT NOT NULL CONSTRAINT PK_DEFAULTSUBJECTS PRIMARY KEY,
    SUBJECTNAME     VARCHAR(255) NOT NULL,
    SUBJECTABBREV   VARCHAR(255) NULL,
    FIELDID         INT NULL,
    PARENTSUBJECTID INT NULL
);
CREATE TABLE dbo.DEFAULTGROUPS (
    SUBJECTID   INT NOT NULL,
    GROUPNAME   VARCHAR(255) NOT NULL,
    GROUPABBREV VARCHAR(255) NULL
);
GO

-- DEFAULTCURICULUMPROFILES: COMDataAccess.InsertDefaultCuriculumProfiles
--   insert into CURICULUMPROFILES (PROFILENAME, GRADESET, SCHOOLID) select PROFILENAME, GRADESET[ & 247], @SCHOOLID from DEFAULTCURICULUMPROFILES
-- (only an Inserter argument, so it was missed by il_sql.tsv)
IF OBJECT_ID(N'dbo.DEFAULTCURICULUMPROFILES', N'U') IS NULL
    CREATE TABLE dbo.DEFAULTCURICULUMPROFILES (
        PROFILENAME VARCHAR(50) NOT NULL,
        GRADESET    INT NOT NULL
    );
GO

-- USERS.NOMIDDLENAME: NetCity.DataAccess.Mappings.PersonMapping casts (bool)x["NOMIDDLENAME"], but
-- COMDataAccess.CreateSchoolAdmin_WT / BuildUserInserter do not pass it -> NULL -> InvalidCastException on school login.
UPDATE dbo.USERS SET NOMIDDLENAME = 0 WHERE NOMIDDLENAME IS NULL;
ALTER TABLE dbo.USERS ALTER COLUMN NOMIDDLENAME BIT NOT NULL;
IF NOT EXISTS (SELECT 1 FROM sys.default_constraints WHERE parent_object_id = OBJECT_ID('dbo.USERS') AND COL_NAME(parent_object_id, parent_column_id) = 'NOMIDDLENAME')
    ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_NOMIDDLENAME DEFAULT (0) FOR NOMIDDLENAME;
GO

-- USERS.MODIFYDATE: User.ModifyDate is a non-nullable DateTime in the ORM, but COMDataAccess.CreateSchoolAdmin_WT
-- (BuildUserInserter) does not set it -> NULL is loaded as DateTime.MinValue, the user becomes dirty and the next flush
-- that touches it (e.g. QueueComponent.PersistDbTask with Task.User) fails with "SqlDateTime overflow".
UPDATE dbo.USERS SET MODIFYDATE = GETDATE() WHERE MODIFYDATE IS NULL;
IF NOT EXISTS (SELECT 1 FROM sys.default_constraints WHERE parent_object_id = OBJECT_ID('dbo.USERS') AND COL_NAME(parent_object_id, parent_column_id) = 'MODIFYDATE')
    ALTER TABLE dbo.USERS ADD CONSTRAINT DF_USERS_MODIFYDATE DEFAULT (GETDATE()) FOR MODIFYDATE;
GO

-- CLASSESTYPES.TYPECODE: SQLDataAccess.GetDefaultPreClassType "SELECT TYPEID FROM CLASSESTYPES WHERE FUNCTYPEID=1 AND TYPECODE='01'"
-- (not in the ORM mapping)
IF COL_LENGTH('dbo.CLASSESTYPES', 'TYPECODE') IS NULL ALTER TABLE dbo.CLASSESTYPES ADD TYPECODE VARCHAR(10) NULL;
GO

-- STUDENTSCLASSES: a student is in a class per term ("insert into STUDENTSCLASSES (STUDENTID, CLASSID, TERMID) select ... T.TERMID",
-- "sc.TERMID=TRM.TERMID"). The ORM set mapping produced PRIMARY KEY (STUDENTID, CLASSID) -> duplicate key when
-- enrolling a student (one row per term).
DECLARE @pk_sc sysname = (SELECT name FROM sys.key_constraints WHERE parent_object_id = OBJECT_ID('dbo.STUDENTSCLASSES') AND type = 'PK');
IF @pk_sc IS NOT NULL AND @pk_sc <> 'PK_STUDENTSCLASSES' EXEC('ALTER TABLE dbo.STUDENTSCLASSES DROP CONSTRAINT [' + @pk_sc + ']');
IF OBJECT_ID('dbo.PK_STUDENTSCLASSES', 'PK') IS NULL
    ALTER TABLE dbo.STUDENTSCLASSES ADD CONSTRAINT PK_STUDENTSCLASSES PRIMARY KEY (STUDENTID, CLASSID, TERMID);
GO

-- MOV_SUBDOCS.CLASSID1/CLASSID2: no FK to CLASSES. CreateMoveSubDocCommand writes fromClassId.GetValueOrDefault() = 0
-- (enrollment has no "from" class) and negative values for "grade without class"; the FKs come from the ORM mapping only.
-- Also MOV_SUBDOCS gets CLASSID2 = NULL when classes of a year are deleted (SchoolYearDAO), history must survive.
DECLARE @fk_sd nvarchar(max) = N'';
SELECT @fk_sd += N'ALTER TABLE dbo.MOV_SUBDOCS DROP CONSTRAINT ' + QUOTENAME(fk.name) + N';'
FROM sys.foreign_keys fk JOIN sys.foreign_key_columns fkc ON fkc.constraint_object_id = fk.object_id
WHERE fk.parent_object_id = OBJECT_ID('dbo.MOV_SUBDOCS') AND fk.referenced_object_id = OBJECT_ID('dbo.CLASSES')
  AND COL_NAME(fkc.parent_object_id, fkc.parent_column_id) IN ('CLASSID1', 'CLASSID2');
EXEC (@fk_sd);
GO

-- MOV_DOCSCLASSES: snapshot of "from"/"to" grade and class name of a movement sub-document (MOV_SUBDOCS).
-- Code only reads/updates it (GetMoveDocClasses_Prepare, UpdateMovDocClassNames: "set GRADEFROM = c.GRADE, NAMEFROM = c.CLASSNAME"),
-- never inserts, and deletes MOV_SUBDOCS without touching it -> originally filled by a trigger, removed by cascade.
-- CLASSID1/CLASSID2 < 0 mean "grade without class" (GetMoveSubDocCommand: "@classId1 = -MDC.GRADEFROM"), 0/NULL = none.
-- analyze.py guessed NVARCHAR for GRADEFROM/GRADETO ("nvarchar is invalid for operator minus" when adding students).
DROP TABLE IF EXISTS dbo.MOV_DOCSCLASSES;
CREATE TABLE dbo.MOV_DOCSCLASSES (
    DOCID     INT NOT NULL CONSTRAINT PK_MOV_DOCSCLASSES PRIMARY KEY
              CONSTRAINT FK_MOV_DOCSCLASSES_SUBDOC FOREIGN KEY REFERENCES dbo.MOV_SUBDOCS (SUBDOCID) ON DELETE CASCADE,
    GRADEFROM INT NULL,
    NAMEFROM  VARCHAR(60) NULL,
    GRADETO   INT NULL,
    NAMETO    VARCHAR(60) NULL
);
INSERT INTO dbo.MOV_DOCSCLASSES (DOCID, GRADEFROM, NAMEFROM, GRADETO, NAMETO)
SELECT s.SUBDOCID,
       CASE WHEN s.CLASSID1 < 0 THEN -s.CLASSID1 ELSE c1.GRADE END, c1.CLASSNAME,
       CASE WHEN s.CLASSID2 < 0 THEN -s.CLASSID2 ELSE c2.GRADE END, c2.CLASSNAME
FROM dbo.MOV_SUBDOCS s
LEFT JOIN dbo.CLASSES c1 ON c1.CLASSID = s.CLASSID1
LEFT JOIN dbo.CLASSES c2 ON c2.CLASSID = s.CLASSID2;
GO
CREATE OR ALTER TRIGGER dbo.TR_MOV_SUBDOCS_DOCSCLASSES ON dbo.MOV_SUBDOCS AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO dbo.MOV_DOCSCLASSES (DOCID, GRADEFROM, NAMEFROM, GRADETO, NAMETO)
    SELECT i.SUBDOCID,
           CASE WHEN i.CLASSID1 < 0 THEN -i.CLASSID1 ELSE c1.GRADE END, c1.CLASSNAME,
           CASE WHEN i.CLASSID2 < 0 THEN -i.CLASSID2 ELSE c2.GRADE END, c2.CLASSNAME
    FROM inserted i
    LEFT JOIN dbo.CLASSES c1 ON c1.CLASSID = i.CLASSID1
    LEFT JOIN dbo.CLASSES c2 ON c2.CLASSID = i.CLASSID2
    WHERE NOT EXISTS (SELECT 1 FROM dbo.MOV_DOCSCLASSES d WHERE d.DOCID = i.SUBDOCID);
END;
GO

-- SERVERSETTINGS: ServerSettingsDAO -> key/value (PARAMETERID, PARAMETERVALUE)
DROP TABLE IF EXISTS dbo.SERVERSETTINGS;
CREATE TABLE dbo.SERVERSETTINGS (
    PARAMETERID    INT NOT NULL CONSTRAINT PK_SERVERSETTINGS PRIMARY KEY,
    PARAMETERVALUE NVARCHAR(4000) NULL
);
GO
