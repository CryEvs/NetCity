/* ============================================================================
   05_external_databases.sql
   Objects used ONLY by code that talks to OTHER databases (not main4).
   Kept for completeness; do not create them in main4.
   ============================================================================ */


/* ---------------- KLADR (address classifier DB) ---------------- */

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetMovedLocations; NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetNewCode; NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetNewProvinceCode
CREATE TABLE ALTNAMES (
    NEWCODE                          NVARCHAR(255) NULL,
    OLDCODE                          NVARCHAR(255) NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetByName; NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetKladrByOkato; NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetKladrCities (+6)
CREATE TABLE KLADR (
    CODE                             VARCHAR(5) NULL,
    INDEX                            INT NULL,
    NAME                             VARCHAR(200) NULL,
    OCATD                            NVARCHAR(255) NULL,
    SOCR                             NVARCHAR(255) NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetAvailabilityOfStreetFromKladr; NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetKladrLocation; NetCity.DataAccess.dll NetCity.DataAccess.KladrDAO::GetKladrLocations (+6)
CREATE TABLE STREET (
    CODE                             VARCHAR(5) NULL,
    INDEX                            INT NULL,
    NAME                             VARCHAR(200) NULL,
    SOCR                             NVARCHAR(255) NULL
);


/* ---------------- LA (la4.gdb, Firebird: learning content / tests) ---------------- */

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaAccessDAO::GetArticles; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddOrUpdateArticle; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::GetArticlesByAn (+12)
CREATE TABLE ARTICLES (
    AN                               NVARCHAR(255) NULL,
    ANVALUE                          NVARCHAR(255) NULL,
    ARTICLEID                        INT NULL,
    ARTICLES_SEQ                     NVARCHAR(255) NULL,
    CITATION                         NVARCHAR(255) NULL,
    FULLTEXT                         NVARCHAR(255) NULL,
    READINGLEVEL                     INT NULL,
    SOURCE                           NVARCHAR(255) NULL,
    SUBJECTID                        INT NULL,
    SUMMARY                          NVARCHAR(255) NULL,
    TESTID                           INT NULL,
    TITLE                            VARCHAR(250) NULL,
    TYPE                             NVARCHAR(255) NULL,
    TYPEID                           INT NULL,
    VERSION                          DATETIME NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddArticleType
CREATE TABLE ARTICLETYPES (
    ARTICLETYPEID                    INT NULL,
    ARTICLETYPEIDVALUE               NVARCHAR(255) NULL,
    TYPE                             NVARCHAR(255) NULL,
    USAGENOTES                       NVARCHAR(255) NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddChoice; Web\sa\IRTech\Learn\cn_clonetest_editable.asp; Web\sa\IRTech\Learn\cn_clonetest_readonly.asp (+9)
CREATE TABLE CHOICES (
    CHOICENUMBER                     INT NULL,
    CTEXT                            NVARCHAR(255) NULL,
    CVALUE                           NVARCHAR(255) NULL,
    DESTINATIONQUESTIONID            INT NULL,
    QUESTIONID                       INT NULL,
    SOURCEQUESTIONID                 INT NULL
);

-- used by: Web\sa\IRTech\Learn\cn_articles.asp; Web\sa\IRTech\Learn\cn_clonetest.asp; Web\sa\IRTech\Learn\cn_clonetest_update.asp
CREATE TABLE CUSTOMTESTS (
    CLASSID                          INT NULL,
    TEACHERID                        INT NULL,
    TESTID                           INT NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddProductTest; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::GetExtendedProductsList; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::GetProductTest (+2)
CREATE TABLE PRODUCTTEST (
    PRODUCTID                        INT NULL,
    TESTID                           INT NULL
);

-- used by: Web\sa\IRTech\Learn\cn_studenttestview.asp; Web\sa\IRTech\Learn\reviewtest.asp; Web\sa\IRTech\Learn\test.asp (+1)
CREATE TABLE QUESTIONINFO (
    QUESTIONID                       INT NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaAccessDAO::GetQuestionsByArticle; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddQuestion; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::DeleteQuestionsByTest (+6)
CREATE TABLE QUESTIONS (
    ARTICLEID                        INT NULL,
    ARTICLEIDVALUE                   NVARCHAR(255) NULL,
    QNUMBER                          INT NULL,
    QTEXT                            NVARCHAR(255) NULL,
    QUESTIONID                       INT NULL,
    QUESTIONIDTODELETE               NVARCHAR(255) NULL,
    QUESTIONS_SEQ                    NVARCHAR(255) NULL,
    QVALUE                           NVARCHAR(255) NULL,
    TESTID                           INT NULL,
    TESTIDVALUE                      NVARCHAR(255) NULL,
    TYPEID                           INT NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddQuestionType; Web\sa\IRTech\Learn\cn_results.asp; Web\sa\IRTech\Learn\results.asp
CREATE TABLE QUESTIONTYPES (
    QUESTIONTYPEID                   INT NULL,
    QUESTIONTYPEIDVALUE              NVARCHAR(255) NULL,
    TYPE                             NVARCHAR(255) NULL,
    USAGENOTES                       NVARCHAR(255) NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddTest; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::GetExtendedProductsList; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::GetTestsByArticleAndProduct (+3)
CREATE TABLE TESTS (
    ARTICLEID                        INT NULL,
    NAME                             VARCHAR(200) NULL,
    PRODUCTID                        INT NULL,
    TESTID                           INT NULL,
    TYPEID                           INT NULL
);

-- used by: NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddTestType; NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::GetTestTypes
CREATE TABLE TESTTYPES (
    TESTTYPEID                       INT NULL,
    TYPE                             NVARCHAR(255) NULL,
    USAGENOTES                       NVARCHAR(255) NULL
);

-- used by: Web\sa\IRTech\Learn\cn_articles.asp; Web\sa\IRTech\Learn\cn_clonetest.asp; Web\sa\IRTech\Learn\cn_fulltext.asp (+2)
-- table-valued function / selectable procedure TESTVIEW(...)

-- used by: IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentResults::Execute; IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.GetStudentTotalResults::Execute
CREATE TABLE V_RESULTS (
    ID INT NULL
);


/* ---------------- SKUD / turnstile access-control DB ---------------- */

-- used by: Web\asp\Reports\StudentsInOut_inc.asp
CREATE TABLE CLIENT (
    EXTERNALID                       INT NULL,
    ID                               INT NULL
);

-- used by: Web\asp\Reports\StudentsInOut_inc.asp
CREATE TABLE DOOR (
    ID                               INT NULL
);

-- used by: Web\asp\Reports\StudentsInOut_inc.asp
CREATE TABLE JOURNAL (
    ATTEMPTDATE                      DATETIME NULL,
    CLIENTID                         INT NULL,
    NUMDOOR                          NVARCHAR(255) NULL
);

