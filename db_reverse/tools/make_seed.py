"""Generate 06_fixes.sql and 07_seed_minimal.sql from enums in decompiled sources.

usage: python make_seed.py <decompiled src dir> <db_reverse dir>
"""
import os, re, sys, datetime

SRC, OUT = sys.argv[1], sys.argv[2]


def parse_enum(path):
    text = open(path, encoding='utf-8-sig', errors='replace').read()
    body = re.search(r'enum\s+\w+[^{]*\{(.*)\}', text, re.S).group(1)
    body = re.sub(r'\[[^\]]*\]', '', body)
    body = re.sub(r'///[^\n]*|//[^\n]*', '', body)
    items, cur = [], -1
    for part in body.split(','):
        part = part.strip()
        if not part:
            continue
        m = re.match(r'(\w+)\s*(?:=\s*(-?\d+))?$', part)
        if not m:
            continue
        cur = int(m.group(2)) if m.group(2) is not None else cur + 1
        items.append((m.group(1), cur))
    return items


def q(s):
    return "N'" + str(s).replace("'", "''") + "'"


enum_dir = os.path.join(SRC, 'NetCity.Common')
roles = parse_enum(os.path.join(enum_dir, 'NetCity.Common.Enums.RolesAndRights', 'Role.cs'))
rights = parse_enum(os.path.join(enum_dir, 'NetCity.Common.Enums.RolesAndRights', 'Right.cs'))
functypes = parse_enum(os.path.join(enum_dir, 'NetCity.Common.Enums', 'FuncType.cs'))
eoforms = parse_enum(os.path.join(enum_dir, 'NetCity.Common.Enums', 'EoForm.cs'))

ROLE_RU = {
    'Admin': ('Администратор', 'Адм'), 'Principal': ('Завуч', 'Зав'), 'Teacher': ('Учитель', 'Уч'),
    'Student': ('Ученик', 'Ученик'), 'Parent': ('Родитель', 'Родит'), 'MinorStaff': ('Младший персонал', 'МлПерс'),
    'Secretary': ('Секретарь', 'Секр'), 'MedicalStaff': ('Медработник', 'Мед'), 'Psychologist': ('Психолог', 'Псих'),
    'SpecialistStaff': ('Специалист', 'Спец'), 'EmAdmin': ('Администратор ОУО', 'АдмОУО'),
    'EMHDEM': ('Руководитель ОУО', 'РукОУО'), 'EmOFREM': ('Специалист ОУО', 'СпецОУО'),
    'EmOper': ('Оператор ОУО', 'ОперОУО'), 'EmCoordOD': ('Координатор ДО', 'КоордДО'),
    'EmCoordMer': ('Координатор мероприятий', 'КоордМер'),
}
FT_RU = {'Generic': 'Общая', 'EducMgr': 'Орган управления образованием', 'PreSchool': 'Дошкольная образовательная организация',
         'School': 'Общеобразовательная организация', 'AddSchool': 'Организация дополнительного образования',
         'ProfSchool': 'Профессиональная образовательная организация', 'Orphanage': 'Детский дом',
         'University': 'Образовательная организация высшего образования'}
FT_ID = dict(functypes)


def eoform_functype(name):
    for prefix, ft in (('PreSchool', 'PreSchool'), ('AddSchool', 'AddSchool'), ('Muk', 'AddSchool'),
                       ('Prof', 'ProfSchool'), ('Spo', 'ProfSchool'), ('Orphan', 'Orphanage'), ('DetDom', 'Orphanage'),
                       ('Univ', 'University'), ('Vuz', 'University'), ('Em', 'EducMgr')):
        if name.startswith(prefix):
            return FT_ID[ft]
    return FT_ID['School']


# ------------------------------------------------------------------ 06_fixes.sql
fixes = """/* ============================================================================
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
"""
open(os.path.join(OUT, '06_fixes.sql'), 'w', encoding='utf-8-sig').write(fixes)

# ------------------------------------------------------------------ 07_seed_minimal.sql
year = datetime.date.today().year if datetime.date.today().month >= 9 else datetime.date.today().year - 1
admin_md5 = '21232f297a57a5a743894a0e4a801fc3'  # PasswordHelper.ComputeHash("admin") = md5(cp1251)
import hashlib
servadmin_md5 = hashlib.md5('servadmin'.encode('cp1251')).hexdigest()

S = ["""/* ============================================================================
   07_seed_reference.sql
   Reference data the application needs before anything can be created in the UI.
   Roles, rights, functionality types and EO forms are generated from the enums in NetCity.Common.
   Server administrator: /asp/administration/salogin.asp, password: servadmin
   ============================================================================ */
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;
"""]

S.append("-- DB version checked by COMDataAccess.CheckVersion: STR = MMmm, REV = revision")
S.append("DELETE FROM dbo.VERSN;\nINSERT INTO dbo.VERSN (STR, PRODUCT, ID, REV) VALUES ('0514', 'NS', 1, 65351);\n")

S.append("-- FUNCTIONALITYTYPES <- enum FuncType")
S.append("DELETE FROM dbo.FUNCTIONALITYTYPES;")
for n, v in functypes:
    S.append(f"INSERT INTO dbo.FUNCTIONALITYTYPES (FUNCTIONALITYTYPEID, NAME) VALUES ({v}, {q(FT_RU.get(n, n)[:50])});")

# EO_TYPES <- enum EoType; EO_FORMS <- enum EoForm (types/kinds of educational institutions, RF classifier).
# createArea.asp / CreateOU.asp default to EOTYPEID = 5 (School) and EOFORMID = 20 (School3).
EOTYPE_RU = {
    'PreSchool': 'Дошкольные образовательные учреждения',
    'SubSchool': 'Образовательные учреждения для детей дошкольного и младшего школьного возраста',
    'AddSchool': 'Образовательные учреждения дополнительного образования детей',
    'Muk': 'Межшкольные учебные комбинаты',
    'School': 'Общеобразовательные учреждения',
    'Internat': 'Общеобразовательные школы-интернаты',
    'Kadet': 'Кадетские школы и кадетские школы-интернаты',
    'Evening': 'Вечерние (сменные) общеобразовательные учреждения',
    'PsyhPedMedHelp': 'Образовательные учреждения для детей, нуждающихся в психолого-педагогической и медико-социальной помощи',
    'Deviant': 'Специальные учебно-воспитательные учреждения для детей и подростков с девиантным поведением',
    'SpecKor': 'Специальные (коррекционные) образовательные учреждения',
    'Orphan': 'Образовательные учреждения для детей-сирот и детей, оставшихся без попечения родителей',
    'San': 'Оздоровительные образовательные учреждения санаторного типа',
    'Suvor': 'Суворовские военные, нахимовские военно-морские училища и кадетские корпуса',
    'Npo': 'Образовательные учреждения начального профессионального образования',
    'Spo': 'Образовательные учреждения среднего профессионального образования',
    'Vpo': 'Образовательные учреждения высшего профессионального образования',
    'ArmyVpo': 'Военные образовательные учреждения высшего профессионального образования',
    'AddPo': 'Образовательные учреждения дополнительного профессионального образования',
}
EOFORM_RU = {
    'PreSchool': ['Детский сад', 'Детский сад общеразвивающего вида', 'Детский сад компенсирующего вида',
                  'Детский сад присмотра и оздоровления', 'Детский сад комбинированного вида', 'Центр развития ребенка - детский сад'],
    'SubSchool': ['Начальная школа - детский сад', 'Прогимназия', 'Начальная школа - детский сад компенсирующего вида'],
    'AddSchool': ['Дворец (дом) детского творчества', 'Центр дополнительного образования детей', 'Станция юных техников (натуралистов, туристов)',
                  'Детско-юношеская спортивная школа', 'Детская школа искусств', 'Детско-юношеский центр', 'Детский (подростковый) клуб'],
    'Muk': ['Межшкольный учебный комбинат'],
    'School': ['Начальная общеобразовательная школа', 'Основная общеобразовательная школа', 'Средняя общеобразовательная школа',
               'Средняя общеобразовательная школа с углубленным изучением отдельных предметов', 'Гимназия', 'Лицей'],
    'Internat': ['Школа-интернат начального общего образования', 'Школа-интернат основного общего образования',
                 'Школа-интернат среднего (полного) общего образования', 'Школа-интернат с углубленным изучением отдельных предметов'],
    'Kadet': ['Кадетская школа', 'Кадетская школа-интернат'],
    'Evening': ['Вечерняя (сменная) общеобразовательная школа', 'Открытая (сменная) общеобразовательная школа',
                'Центр образования', 'Общеобразовательная школа при исправительно-трудовом учреждении'],
    'PsyhPedMedHelp': ['Центр диагностики и консультирования', 'Центр психолого-медико-социального сопровождения',
                       'Центр психолого-педагогической реабилитации и коррекции', 'Центр социально-трудовой адаптации и профориентации',
                       'Центр лечебной педагогики и дифференцированного обучения'],
    'Deviant': ['Специальная общеобразовательная школа', 'Специальное профессиональное училище',
                'Специальная (коррекционная) общеобразовательная школа для детей с девиантным поведением',
                'Специальное (коррекционное) профессиональное училище'],
    'SpecKor': ['Специальная (коррекционная) общеобразовательная школа', 'Специальная (коррекционная) общеобразовательная школа-интернат',
                'Специальный (коррекционный) класс'],
    'Orphan': ['Детский дом', 'Детский дом-школа', 'Школа-интернат для детей-сирот и детей, оставшихся без попечения родителей',
               'Специальный (коррекционный) детский дом', 'Специальная (коррекционная) школа-интернат для детей-сирот'],
    'San': ['Санаторная школа-интернат', 'Санаторно-лесная школа', 'Санаторный детский дом'],
    'Suvor': ['Суворовское военное училище', 'Нахимовское военно-морское училище', 'Кадетский (морской кадетский) корпус',
              'Военно-музыкальное училище', 'Казачий кадетский корпус'],
    'Npo': ['Профессиональное училище', 'Профессиональный лицей', 'Учебный центр', 'Учебно-производственный центр',
            'Технический лицей', 'Учебно-курсовой комбинат'],
    'Spo': ['Техникум', 'Колледж'],
    'Vpo': ['Университет', 'Академия', 'Институт'],
    'ArmyVpo': ['Военный университет', 'Военная академия', 'Военный институт'],
    'AddPo': ['Академия дополнительного профессионального образования', 'Институт повышения квалификации',
              'Курсы повышения квалификации', 'Центр повышения квалификации'],
}
EOTYPE_FT = {'PreSchool': 'PreSchool', 'SubSchool': 'School', 'AddSchool': 'AddSchool', 'Muk': 'AddSchool', 'School': 'School',
             'Internat': 'School', 'Kadet': 'School', 'Evening': 'School', 'PsyhPedMedHelp': 'AddSchool', 'Deviant': 'School',
             'SpecKor': 'School', 'Orphan': 'Orphanage', 'San': 'School', 'Suvor': 'School', 'Npo': 'ProfSchool', 'Spo': 'ProfSchool',
             'Vpo': 'University', 'ArmyVpo': 'University', 'AddPo': 'ProfSchool'}
eotypes = parse_enum(os.path.join(enum_dir, 'NetCity.Common.Enums', 'EoType.cs'))
eotype_id = dict(eotypes)
legalforms = parse_enum(os.path.join(enum_dir, 'NetCity.Common.Enums', 'EoLegalForm.cs'))
LEGAL_RU = {'Gov': 'Государственная', 'Area': 'Муниципальная (район)', 'City': 'Муниципальная (городской округ)',
            'Priv': 'Негосударственная (частная)', 'Individual': 'Индивидуальный предприниматель'}

S.append("\n-- EO_TYPES <- enum EoType (MOV_EOS -> EO_FORMS -> EO_TYPES); replaced only while no organization exists")
S.append("IF NOT EXISTS (SELECT 1 FROM dbo.MOV_EOS)\nBEGIN\n    DELETE FROM dbo.EO_FORMS; DELETE FROM dbo.EO_TYPES; DELETE FROM dbo.EO_LEGALFORMS; DELETE FROM dbo.EO_LEGALFORMS_83;\nEND;")
S.append("SET IDENTITY_INSERT dbo.EO_TYPES ON;")
for n, v in eotypes:
    S.append(f"IF NOT EXISTS (SELECT 1 FROM dbo.EO_TYPES WHERE EOTYPEID = {v}) INSERT INTO dbo.EO_TYPES (EOTYPEID, CLASSIFIERCODE, NAME) VALUES ({v}, {v}, {q(EOTYPE_RU.get(n, n))});")
S.append("SET IDENTITY_INSERT dbo.EO_TYPES OFF;")

S.append("\n-- EO_LEGALFORMS <- enum EoLegalForm; EO_LEGALFORMS_83 = institution type under 83-FZ")
for n, v in legalforms:
    S.append(f"IF NOT EXISTS (SELECT 1 FROM dbo.EO_LEGALFORMS WHERE EOLEGALFORMID = {v}) INSERT INTO dbo.EO_LEGALFORMS (EOLEGALFORMID, NAME) VALUES ({v}, {q(LEGAL_RU.get(n, n))});")
for v, name in ((1, 'Бюджетное'), (2, 'Казённое'), (3, 'Автономное')):
    S.append(f"IF NOT EXISTS (SELECT 1 FROM dbo.EO_LEGALFORMS_83 WHERE EOLEGALFORM83ID = {v}) INSERT INTO dbo.EO_LEGALFORMS_83 (EOLEGALFORM83ID, NAME) VALUES ({v}, {q(name)});")

S.append("\n-- EO_FORMS <- enum EoForm: member '<Type><n>' belongs to EoType '<Type>' (School3 = 20 = default of createArea.asp)")
for n, v in eoforms:
    m = re.match(r'([A-Za-z]+?)(\d+)$', n)
    tname, idx = (m.group(1), int(m.group(2))) if m else (n, 1)
    names = EOFORM_RU.get(tname, [])
    ru = names[idx - 1] if 0 < idx <= len(names) else n
    ft = FT_ID[EOTYPE_FT.get(tname, 'School')]
    S.append(f"IF NOT EXISTS (SELECT 1 FROM dbo.EO_FORMS WHERE EOFORMID = {v}) INSERT INTO dbo.EO_FORMS (EOFORMID, CLASSIFIERCODE, NAME, FUNCTIONALITYTYPEID, REAL_FUNCTIONALITYTYPEID, EOTYPEID) VALUES ({v}, '{eotype_id.get(tname, 5)}.{idx}', {q(ru)}, {ft}, {ft}, {eotype_id.get(tname, 5)});")

S.append("\n-- ROLES <- enum Role")
S.append("DELETE FROM dbo.ROLES;")
for n, v in roles:
    ru, short = ROLE_RU.get(n, (n, n[:20]))
    S.append(f"INSERT INTO dbo.ROLES (ROLEID, ROLENAME, SHORTNAME) VALUES ({v}, {q(ru)}, {q(short)});")

S.append("\n-- RIGHTS <- enum Right; DEFAULTROLESRIGHTS: administrator gets everything")
S.append("DELETE FROM dbo.RIGHTS; DELETE FROM dbo.DEFAULTROLESRIGHTS;")
seen = set()
for n, v in rights:
    if v in seen:
        continue
    seen.add(v)
    S.append(f"INSERT INTO dbo.RIGHTS (RIGHTID, RIGHTNAME) VALUES ({v}, {q(n)});")
S.append("INSERT INTO dbo.DEFAULTROLESRIGHTS (ROLEID, RIGHTID) SELECT 1, RIGHTID FROM dbo.RIGHTS;")

S.append("""
-- TERMTYPES: ids are hard-coded in SchoolYearDAO.GenerateTermsRanges (1 -> 4 terms, 2 -> 3, 3 -> 2, 4 -> whole year)
-- and COMDataAccess (TERMTYPEID = 4 for "year" profiles). TERMNAME = "<n> <TERMTYPENAME>".
DELETE FROM dbo.TERMTYPES WHERE NOT EXISTS (SELECT 1 FROM dbo.TERMS t WHERE t.TERMTYPEID = TERMTYPES.TERMTYPEID);
SET IDENTITY_INSERT dbo.TERMTYPES ON;
INSERT INTO dbo.TERMTYPES (TERMTYPEID, TERMSCOUNT, TERMTYPENAME, ENABLED)
SELECT v.id, v.cnt, v.name, 'Y' FROM (VALUES (1, 4, N'четверть'), (2, 3, N'триместр'), (3, 2, N'полугодие'), (4, 1, N'год')) v(id, cnt, name)
WHERE NOT EXISTS (SELECT 1 FROM dbo.TERMTYPES x WHERE x.TERMTYPEID = v.id);
SET IDENTITY_INSERT dbo.TERMTYPES OFF;

-- PERIODTYPES: kinds of final marks in YEARTOTALS. Code relies on ids 2 (year mark) and 4 (final mark),
-- ISEXAM='Y' for exams; names are reconstructed.
SET IDENTITY_INSERT dbo.PERIODTYPES ON;
INSERT INTO dbo.PERIODTYPES (PERIODTYPEID, NAME, ABBR, TITLE, TYPEORDER, IsExam, GradingSys)
SELECT v.id, v.name, v.abbr, v.title, v.ord, v.ex, 0 FROM (VALUES
    (1, N'Промежуточная', N'Пром', N'Промежуточная оценка', 1, 'N'),
    (2, N'Годовая',       N'Год',  N'Годовая оценка',       2, 'N'),
    (3, N'Экзаменационная', N'Экз', N'Экзаменационная оценка', 3, 'Y'),
    (4, N'Итоговая',      N'Итог', N'Итоговая оценка',      4, 'N')) v(id, name, abbr, title, ord, ex)
WHERE NOT EXISTS (SELECT 1 FROM dbo.PERIODTYPES x WHERE x.PERIODTYPEID = v.id);
SET IDENTITY_INSERT dbo.PERIODTYPES OFF;
""")
S.append("""
-- DEFAULTCOMPONENTS (FGOS curriculum parts); id 1 is the only one copied for pre-schools
DELETE FROM dbo.DEFAULTCOMPONENTS;
INSERT INTO dbo.DEFAULTCOMPONENTS (COMPONENTID, COMPONENTNAME, ORDERNO) VALUES
    (1, N'Обязательная часть', 1),
    (2, N'Часть, формируемая участниками образовательных отношений', 2),
    (3, N'Внеурочная деятельность', 3);
""")
S.append("""
-- Service component 0 ("no component" / total load): legacy SQL inserts COMPONENTID = 0 into CURICULUM* tables
IF NOT EXISTS (SELECT 1 FROM dbo.COMPONENTS WHERE COMPONENTID = 0)
BEGIN
    SET IDENTITY_INSERT dbo.COMPONENTS ON;
    INSERT INTO dbo.COMPONENTS (COMPONENTID, COMPONENTNAME, ORDERNO, ISDELETED, SCHOOLID) VALUES (0, N'Предельно допустимая нагрузка', 0, 1, NULL);
    SET IDENTITY_INSERT dbo.COMPONENTS OFF;
END;
""")
S.append("""
-- DEFAULTEVENTS template (base school year 2000/2001; CopyEventsToNewYear shifts by whole years)
DELETE FROM dbo.DEFAULTEVENTS;
INSERT INTO dbo.DEFAULTEVENTS (NAME, STARTTIME, ENDTIME, ETYPE) VALUES
    (N'Осенние каникулы',          '20001028', '20001105', 3),
    (N'Зимние каникулы',           '20001229', '20010108', 3),
    (N'Весенние каникулы',         '20010324', '20010401', 3),
    (N'Летние каникулы',           '20010601', '20010831', 3),
    (N'День народного единства',   '20001104', '20001104', 4),
    (N'Новогодние праздники',      '20010101', '20010108', 4),
    (N'День защитника Отечества',  '20010223', '20010223', 4),
    (N'Международный женский день','20010308', '20010308', 4),
    (N'Праздник Весны и Труда',    '20010501', '20010501', 4),
    (N'День Победы',               '20010509', '20010509', 4),
    (N'День России',               '20010612', '20010612', 4);

DELETE FROM dbo.CLASSFORMS;
INSERT INTO dbo.CLASSFORMS (CLASSFORMID, CLASSFORMNAME) VALUES (1, N'Очная'), (2, N'Очно-заочная'), (3, N'Заочная');
""")

# ---------------------------------------------------------------- school info parameters
# SCHOOLINFOPARAMS (PARAMID, NAME, PageNum, PTYPE, cellOrder): the school "passport" card.
#  PARAMID  = enum SchoolInfoParameterField (SchoolInfoDao uses (int)field; OrganizationsController.CreateSchool writes PARAMID 19)
#  NAME     = SchoolInfoParamNames constants (StatFormDAO looks params up by NAME), enum member name otherwise
#  PageNum  = 2 for License/LicenseAes/Certificate groups (SchoolLicensesController.SaveSchoolInfoCard(2, ...)), else 1
#  PTYPE    = Mappings.ParamTypeMapping: STRING/FLOAT/BOOL/NUMBER (SchoolInfoParameterType.Bool -> BOOL)
_sip_dir = os.path.join(enum_dir, 'NetCity.Common.ObjectModel.Nhibernate.AccessJournal.SchoolAccessJournal')
_sip_fields = parse_enum(os.path.join(_sip_dir, 'SchoolInfoParameterField.cs'))
_sip_consts = set(re.findall(r'=> "(\w+)"', open(os.path.join(enum_dir, 'NetCity.Common.ObjectModel.Nhibernate', 'SchoolInfoParamNames.cs'), encoding='utf-8-sig').read()))
_sip_attr = open(os.path.join(_sip_dir, 'SchoolInfoParameterFieldAttribute.cs'), encoding='utf-8-sig').read()
_sip_group, _sip_bool = {}, set()
for g, f, rest in re.findall(r'SchoolInfoParameterFieldEnumItem\(SchoolInfoGroup\.(\w+), SchoolInfoParameterField\.(\w+),(.*)', _sip_attr):
    _sip_group.setdefault(f, g)
    if 'SchoolInfoParameterType.Bool' in rest:
        _sip_bool.add(f)
_sip_rows = []
for name, pid in _sip_fields:
    dbname = name if name in _sip_consts else next((c for c in _sip_consts if c.lower() in ('t00' + name.lower(), name.lower().replace('type', ''))), name)
    page = 2 if _sip_group.get(name) in ('License', 'LicenseAes', 'Certificate') else 1
    ptype = 'BOOL' if name in _sip_bool else 'STRING'
    _sip_rows.append(f"    ({pid}, '{dbname}', {page}, '{ptype}', {pid})")
S.append("""
-- ---------------------------------------------------------------- school info parameters (SchoolInfoParameterField)
DELETE FROM dbo.SCHOOLINFOPARAMS WHERE NOT EXISTS (SELECT 1 FROM dbo.SCHOOLINFO si WHERE si.PARAMID = SCHOOLINFOPARAMS.PARAMID);
-- PARAMID is IDENTITY after 08_insert_defaults.sql (new card params inserted by the app), ids must follow the enum
IF COLUMNPROPERTY(OBJECT_ID('dbo.SCHOOLINFOPARAMS'), 'PARAMID', 'IsIdentity') = 1 SET IDENTITY_INSERT dbo.SCHOOLINFOPARAMS ON;
INSERT INTO dbo.SCHOOLINFOPARAMS (PARAMID, NAME, PageNum, PTYPE, cellOrder)
SELECT v.id, v.name, v.page, v.ptype, v.ord FROM (VALUES
""" + ",\n".join(_sip_rows) + """) v(id, name, page, ptype, ord)
WHERE NOT EXISTS (SELECT 1 FROM dbo.SCHOOLINFOPARAMS p WHERE p.PARAMID = v.id);
IF COLUMNPROPERTY(OBJECT_ID('dbo.SCHOOLINFOPARAMS'), 'PARAMID', 'IsIdentity') = 1 SET IDENTITY_INSERT dbo.SCHOOLINFOPARAMS OFF;
""")

# ---------------------------------------------------------------- schedule relays (shifts)
# SCHEDULE_RELAYS (RELAY): shift numbers; ClassRelayInfo.Relay FK (a new class gets relay 1 for every term),
# ASP ClassesRelays_inc.asp / ScheduleTimes.asp raise kCantGetScheduleRelays when empty.
S.append("""
-- ---------------------------------------------------------------- schedule relays (shifts 1..3)
IF COLUMNPROPERTY(OBJECT_ID('dbo.SCHEDULE_RELAYS'), 'RELAY', 'IsIdentity') = 1 SET IDENTITY_INSERT dbo.SCHEDULE_RELAYS ON;
INSERT INTO dbo.SCHEDULE_RELAYS (RELAY) SELECT v.r FROM (VALUES (1), (2), (3)) v(r) WHERE NOT EXISTS (SELECT 1 FROM dbo.SCHEDULE_RELAYS s WHERE s.RELAY = v.r);
IF COLUMNPROPERTY(OBJECT_ID('dbo.SCHEDULE_RELAYS'), 'RELAY', 'IsIdentity') = 1 SET IDENTITY_INSERT dbo.SCHEDULE_RELAYS OFF;
""")

# ---------------------------------------------------------------- class types
# CLASSESTYPES: "Тип класса" (ClassesController refs/classTypes -> ClassTypeDao.GetAllClassTypes(funcType)).
# The list itself is not in the code. Known from code: school type named LocalSettings.ClassTypeSko
# ("СПЕЦИАЛЬНОЕ КОРРЕКЦИОННОЕ ОБУЧЕНИЕ", matched by upper(TYPENAME) in OSH-1 reports) and preschool default TYPECODE='01'.
# Without rows the class form hides the field and ClassesService.UpdateClass fails on dto.ClassType.Id.
CLASS_TYPES = [
    # (FuncType, TYPECODE, name)
    ('PreSchool', '01', 'Общеразвивающей направленности'),
    ('PreSchool', '02', 'Компенсирующей направленности'),
    ('PreSchool', '03', 'Оздоровительной направленности'),
    ('PreSchool', '04', 'Комбинированной направленности'),
    ('School', None, 'Общеобразовательный'),
    ('School', None, 'С углублённым изучением отдельных предметов'),
    ('School', None, 'Профильный'),
    ('School', None, 'Гимназический'),
    ('School', None, 'Лицейский'),
    ('School', None, 'Кадетский'),
    ('School', None, 'Специальное коррекционное обучение'),
    ('AddSchool', None, 'Общеразвивающий'),
    ('ProfSchool', None, 'Общий'),
    ('Orphanage', None, 'Общий'),
    ('University', None, 'Общий'),
]
_ct_rows, _ct_order = [], {}
for i, (ft, code, name) in enumerate(CLASS_TYPES, 1):
    _ct_order[ft] = _ct_order.get(ft, 0) + 1
    _ct_rows.append(f"    ({i}, {q(name)}, {FT_ID[ft]}, {_ct_order[ft]}, {'NULL' if code is None else repr(code)})")
S.append("""
-- ---------------------------------------------------------------- class types (CLASSESTYPES)
IF NOT EXISTS (SELECT 1 FROM dbo.CLASSESTYPES)
BEGIN
    IF COLUMNPROPERTY(OBJECT_ID('dbo.CLASSESTYPES'), 'TYPEID', 'IsIdentity') = 1 SET IDENTITY_INSERT dbo.CLASSESTYPES ON;
    INSERT INTO dbo.CLASSESTYPES (TYPEID, TYPENAME, FUNCTYPEID, SORTORDER, TYPECODE) VALUES
""" + ",\n".join(_ct_rows) + """;
    IF COLUMNPROPERTY(OBJECT_ID('dbo.CLASSESTYPES'), 'TYPEID', 'IsIdentity') = 1 SET IDENTITY_INSERT dbo.CLASSESTYPES OFF;
END;
""")

S.append(f"""
-- ---------------------------------------------------------------- global school years
-- GLOBALYEARID = year - 2000 (SchoolYearDAO.CreateWizardYear: new DateTime(2000 + gYearID, 9, 1)).
DELETE FROM dbo.GLOBALYEARS WHERE NOT EXISTS (SELECT 1 FROM dbo.SCHOOLYEARS sy WHERE sy.GLOBALYEARID = GLOBALYEARS.GLOBALYEARID);
INSERT INTO dbo.GLOBALYEARS (GLOBALYEARID, SCHOOLYEARNAME, STARTDATE, ENDDATE)
SELECT v.id, v.name, v.s, v.e FROM (VALUES
    ({year - 2001}, '{year - 1}/{year}', CAST('{year - 1}0901' AS datetime2), CAST('{year}0831' AS datetime2)),
    ({year - 2000}, '{year}/{year + 1}', CAST('{year}0901' AS datetime2), CAST('{year + 1}0831' AS datetime2)),
    ({year - 1999}, '{year + 1}/{year + 2}', CAST('{year + 1}0901' AS datetime2), CAST('{year + 2}0831' AS datetime2))) v(id, name, s, e)
WHERE NOT EXISTS (SELECT 1 FROM dbo.GLOBALYEARS g WHERE g.GLOBALYEARID = v.id);

-- ---------------------------------------------------------------- movement periods
-- MOV_PERIODS: the app creates them together with a global year (SchoolYearDAO/CreateSchoolYearService.ProcessMovePeriods,
-- GetDefaultMovePeriods(calendarYear = YEAR(STARTDATE)), STATUS=1). Years seeded above bypass that code, and without
-- rows the move book shows "Движение запрещено администратором сервера" (EditMovePeriods.asp only UPDATEs existing rows).
INSERT INTO dbo.MOV_PERIODS (GLOBALYEARID, PERIODID, STARTDATE, ENDDATE, STATUS)
SELECT g.GLOBALYEARID, p.id,
       DATEFROMPARTS(YEAR(g.STARTDATE) + p.sy, p.sm, p.sd), DATEFROMPARTS(YEAR(g.STARTDATE) + p.ey, p.em, p.ed), 1
FROM dbo.GLOBALYEARS g
CROSS JOIN (VALUES (1, 0, 6, 1, 0, 9, 20), (2, 0, 9, 21, 0, 12, 19), (3, 0, 12, 20, 1, 3, 10), (4, 1, 3, 11, 1, 5, 31)) p(id, sy, sm, sd, ey, em, ed)
WHERE NOT EXISTS (SELECT 1 FROM dbo.MOV_PERIODS m WHERE m.GLOBALYEARID = g.GLOBALYEARID AND m.PERIODID = p.id);

-- ---------------------------------------------------------------- country
-- Regions, districts, cities and schools are created by the server administrator in the UI
-- (/asp/administration/manageArea.asp, createschool.asp). There is no UI for countries.
IF NOT EXISTS (SELECT 1 FROM dbo.COUNTRIES) INSERT INTO dbo.COUNTRIES (COUNTRYNAME) VALUES (N'Россия');

-- ---------------------------------------------------------------- ATO_TYPES (KLADR SOCRBASE abbreviations)
-- LEVELABBR = KLADR level: 1 region, 2 district, 3 city, 4 settlement, 5 street
-- (AddressRefsDao.GetAtoTypes(level), GetAtoTypeIdByNameAndLevel(..., 4)).
INSERT INTO dbo.ATO_TYPES (FULLNAME, SHORTNAME, LEVELABBR)
SELECT v.f, v.s, v.l FROM (VALUES
    (N'Республика', N'Респ', 1), (N'Край', N'край', 1), (N'Область', N'обл', 1), (N'Город федерального значения', N'г', 1),
    (N'Автономная область', N'Аобл', 1), (N'Автономный округ', N'АО', 1),
    (N'Район', N'р-н', 2), (N'Улус', N'у', 2), (N'Городской округ', N'г.о.', 2), (N'Муниципальный округ', N'м.о.', 2), (N'Территория', N'тер', 2),
    (N'Город', N'г', 3), (N'Поселок городского типа', N'пгт', 3), (N'Рабочий поселок', N'рп', 3), (N'Курортный поселок', N'кп', 3),
    (N'Сельсовет', N'с/с', 3), (N'Сельская администрация', N'с/а', 3), (N'Сельское поселение', N'с/п', 3), (N'Наслег', N'наслег', 3),
    (N'Город', N'г', 4), (N'Поселок городского типа', N'пгт', 4), (N'Рабочий поселок', N'рп', 4), (N'Поселок', N'п', 4),
    (N'Село', N'с', 4), (N'Деревня', N'д', 4), (N'Станица', N'ст-ца', 4), (N'Хутор', N'х', 4), (N'Аул', N'аул', 4),
    (N'Слобода', N'сл', 4), (N'Местечко', N'м', 4), (N'Микрорайон', N'мкр', 4), (N'Станция', N'ст', 4), (N'Садовое товарищество', N'снт', 4),
    (N'Улица', N'ул', 5), (N'Проспект', N'пр-кт', 5), (N'Переулок', N'пер', 5), (N'Площадь', N'пл', 5), (N'Бульвар', N'б-р', 5),
    (N'Шоссе', N'ш', 5), (N'Проезд', N'проезд', 5), (N'Набережная', N'наб', 5), (N'Тупик', N'туп', 5), (N'Микрорайон', N'мкр', 5),
    (N'Квартал', N'кв-л', 5), (N'Аллея', N'аллея', 5), (N'Тракт', N'тракт', 5), (N'Линия', N'линия', 5)) v(f, s, l)
WHERE NOT EXISTS (SELECT 1 FROM dbo.ATO_TYPES a WHERE a.SHORTNAME = v.s AND a.LEVELABBR = v.l);

-- ---------------------------------------------------------------- installation region / district / city
-- Every address registry (schools, regions, cities) sets its default filters from the "main city"
-- (CityDao.TryGetMainCityInfo: the city with most schools) and throws NullReferenceException when there
-- is no city at all - so the first city cannot be created in the UI. The installer normally creates
-- the installation region and city; rename them in "Справочники" as needed.
IF NOT EXISTS (SELECT 1 FROM dbo.CITIES)
BEGIN
    DECLARE @inst_country INT = (SELECT TOP 1 COUNTRYID FROM dbo.COUNTRIES ORDER BY COUNTRYID), @inst_state INT, @inst_province INT;
    INSERT INTO dbo.STATES (STATEPROVINCENAME, COUNTRYID) VALUES (N'Регион установки', @inst_country);  SET @inst_state = SCOPE_IDENTITY();
    INSERT INTO dbo.PROVINCES (PROVINCENAME, STATEID) VALUES (N'Район установки', @inst_state);          SET @inst_province = SCOPE_IDENTITY();
    -- SETTLEMENTTYPEID / AVAILABILITYOFSTREET are read as (int) without NULL check (Mappings.CityMapping)
    INSERT INTO dbo.CITIES (NAME, PROVINCEID, STATE_PROVINCEID, SETTLEMENTTYPEID, AVAILABILITYOFSTREET) VALUES (N'Населённый пункт установки', @inst_province, @inst_state, 1, 1);
END;

-- ---------------------------------------------------------------- server administrator
-- ServAdminAuthData always logs in as '_sad_min_'; SecurityDAO.IsStandardPassword() = md5('servadmin'),
-- the system asks to change it on first login. Login page: /asp/administration/salogin.asp (password only).
IF NOT EXISTS (SELECT 1 FROM dbo.USERS WHERE LOGINNAME = '_sad_min_')
    INSERT INTO dbo.USERS (LASTNAME, FIRSTNAME, MIDDLENAME, NOMIDDLENAME, NICKNAME, LOGINNAME, PASSWORD, GENDER, LOGINTYPE, ISDELETED, MODIFYDATE)
    VALUES (N'Администратор', N'сервера', '', 0, N'Администратор сервера', '_sad_min_', '{servadmin_md5}', N'М', 0, 0, SYSDATETIME());

COMMIT;
""")
open(os.path.join(OUT, '07_seed_reference.sql'), 'w', encoding='utf-8-sig').write('\n'.join(S) + '\n')

# ------------------------------------------------------------------ 09_test_school.sql (optional)
T = [f"""/* ============================================================================
   09_test_school.sql  (OPTIONAL - not needed when schools are created in the UI)
   A school inserted directly into the tables, bypassing COMDataAccess.CreateSchool.
   Kept only for quick smoke tests. Login: admin / admin.
   ============================================================================ */
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;
"""]
T.append(f"""-- ---------------------------------------------------------------- test geography
DECLARE @country INT, @state INT, @province INT, @city INT, @eo INT, @school INT, @user INT, @sy INT;

SET @country = (SELECT TOP 1 COUNTRYID FROM dbo.COUNTRIES ORDER BY COUNTRYID);
INSERT INTO dbo.STATES (STATEPROVINCENAME, KLADRCODE, COUNTRYID) VALUES (N'Тестовый регион', '00', @country);  SET @state = SCOPE_IDENTITY();
INSERT INTO dbo.PROVINCES (PROVINCENAME, KLADRCODE, STATEID) VALUES (N'Тестовый район', '00001', @state);      SET @province = SCOPE_IDENTITY();
-- KLADRCODE '000001' + Province -> "main city" of the database (SchoolComponent spec)
-- SETTLEMENTTYPEID / AVAILABILITYOFSTREET are read as (int) without NULL check (Mappings.CityMapping)
INSERT INTO dbo.CITIES (NAME, KLADRCODE, PROVINCEID, STATE_PROVINCEID, AVAILABILITYOFSTREET, SETTLEMENTTYPEID) VALUES (N'Тестовый город', '000001', @province, @state, 1, 1);  SET @city = SCOPE_IDENTITY();

-- ---------------------------------------------------------------- school (mirrors COMDataAccess.CreateEO_WT + CreateSchool)
INSERT INTO dbo.MOV_EOS (EONAME, CITYID, EOFORMID, EOLEGALFORMID) VALUES (N'МБОУ Тестовая школа', @city, {dict(eoforms).get('School1', 1)}, 1);  SET @eo = SCOPE_IDENTITY();
INSERT INTO dbo.SCHOOLS (SCHOOLNAME, SCHOOLNUMBER, CITYID, EOID, FUNCTYPEID, UNISCHOOLID, SERVERID, MODIFYDATE)
VALUES (N'Тестовая школа', '1', @city, @eo, {FT_ID['School']}, CONVERT(varchar(36), NEWID()), CONVERT(varchar(36), NEWID()), SYSDATETIME());
SET @school = SCOPE_IDENTITY();
INSERT INTO dbo.ROLESRIGHTS (ROLEID, RIGHTID, SCHOOLID) SELECT ROLEID, RIGHTID, @school FROM dbo.DEFAULTROLESRIGHTS;
-- COMDataAccess.InsertDefaultCurriculum
INSERT INTO dbo.COMPONENTS (COMPONENTNAME, SCHOOLID, ORDERNO, ISDELETED) SELECT COMPONENTNAME, @school, ORDERNO, 0 FROM dbo.DEFAULTCOMPONENTS;

-- ---------------------------------------------------------------- years
-- GLOBALYEARID = year - 2000 (SchoolYearDAO.CreateWizardYear: new DateTime(2000 + gYearID, 9, 1)).
-- No SCHOOLYEARS row on purpose: with SchoolYearId == 0 the administrator is sent to the
-- school setup wizard, which creates the year with default settings, grading, events, limits.
-- GLOBALYEARS are created by 07_seed_reference.sql
/* DELETE FROM dbo.GLOBALYEARS;
INSERT INTO dbo.GLOBALYEARS (GLOBALYEARID, SCHOOLYEARNAME, STARTDATE, ENDDATE) VALUES
    ({year - 2001}, '{year - 1}/{year}', '{year - 1}0901', '{year}0831'),
    ({year - 2000}, '{year}/{year + 1}', '{year}0901', '{year + 1}0831'),
    ({year - 1999}, '{year + 1}/{year + 2}', '{year + 1}0901', '{year + 2}0831'); */
-- ---------------------------------------------------------------- administrator admin/admin (mirrors CreateSchoolAdmin_WT)
-- NOMIDDLENAME is read as (bool) without NULL check (NetCity.DataAccess.Mappings.PersonMapping)
INSERT INTO dbo.USERS (LASTNAME, FIRSTNAME, MIDDLENAME, NOMIDDLENAME, NICKNAME, LOGINNAME, PASSWORD, GENDER, LOGINTYPE, ISDELETED, MODIFYDATE)
VALUES ('admin', '', '', 0, 'admin', 'admin', '{admin_md5}', N'М', 0, 0, SYSDATETIME());
SET @user = SCOPE_IDENTITY();
INSERT INTO dbo.SCHOOLSUSERS (SCHOOLID, USERID) VALUES (@school, @user);
INSERT INTO dbo.USERSROLES (USERID, SCHOOLID, ROLEID) VALUES (@user, @school, 1);

COMMIT;
SELECT @school AS SCHOOLID, @user AS ADMIN_USERID;
""")

open(os.path.join(OUT, '09_test_school.sql'), 'w', encoding='utf-8-sig').write('\n'.join(T) + '\n')
print('roles', len(roles), 'rights', len(seen), 'functypes', len(functypes), 'eoforms', len(eoforms))









