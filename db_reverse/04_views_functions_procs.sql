/* ============================================================================
   04_views_functions_procs.sql
   Programmable objects referenced by the application. Their BODIES ARE NOT IN THE
   CODE (they lived only in the database), so these are compilable STUBS with the
   column list / usage the application expects. They must be re-implemented.
   ============================================================================ */

-- VIEW, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetParentPayDebtForMonthNum; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetDebtStudentsCountForPreSchool; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetParentPayForDates (+3)
CREATE VIEW dbo.GET_PARENTPAY_DEBT AS
SELECT
    CAST(NULL AS NUMERIC(10,2)) AS DEBT,
    CAST(NULL AS INT) AS NUMMONTH,
    CAST(NULL AS INT) AS PARENTID,
    CAST(NULL AS INT) AS SCHOOLYEARID,
    CAST(NULL AS INT) AS STUDENTID
WHERE 1 = 0;
GO

-- VIEW, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentDopEducation; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetAddStudentsStudyLoad; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetAddStudentsStudyLoadPersonal (+1)
CREATE VIEW dbo.GET_STUDENTSCLASSES AS
SELECT
    CAST(NULL AS INT) AS CLASSID,
    CAST(NULL AS INT) AS SCHOOLID,
    CAST(NULL AS INT) AS SCHOOLYEARID,
    CAST(NULL AS INT) AS STUDENTID
WHERE 1 = 0;
GO

-- VIEW, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolDocsGroupTree; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolDocsGroupTreeDocList; NetCity.DataAccess.dll NetCity.DataAccess.FileDAO::GetFiles (+2)
CREATE VIEW dbo.SCHOOL_DOC_GROUP_TREE AS
SELECT
    CAST(NULL AS INT) AS GROUPID,
    CAST(NULL AS VARCHAR(255)) AS GROUPNAME,
    CAST(NULL AS BIT) AS IS_PUBLIC,
    CAST(NULL AS NVARCHAR(255)) AS ORDERFILED,
    CAST(NULL AS INT) AS SCHOOLID,
    CAST(NULL AS INT) AS SERVICE_NUM
WHERE 1 = 0;
GO

-- VIEW, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentsGroups; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentsGroups_IUP; NetCity.DataAccess.dll NetCity.DataAccess.SubjectGroupDAO::GetUsingStudentTermGroup
CREATE VIEW dbo.TOTALS_AND_LAST_TERM_YEARTOTALS AS
SELECT
    CAST(NULL AS INT) AS PERIODID,
    CAST(NULL AS INT) AS SGID,
    CAST(NULL AS INT) AS STUDENTID
WHERE 1 = 0;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetAuthorities; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetAuthoritiesByEms; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetPossibleTopEMs (+9)
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.FOUNDERS_TREE (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetStudentsAgeCompositionBySchoolTypes; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetStudentsCountComposByYearsBySchoolTypes
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.GET_STUDENTSCATEGORIES_ON_DATE_FUNC (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetPMPKRecommend; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetStudentsAgeCompositionBySchoolTypes; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetStudentsCountComposByYears (+1)
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.GET_STUDENTSCLASSES_ON_DATE (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetProjectPortfolioClassStudentsMembersList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetProjectPortfolioMembersList; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetProjectPortfolioRightsList
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.PORFOLIO_GET_ACCESSTYPE (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetPortfolioGroupTree; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetPortfolioResources; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetPortfolioResources (+1)
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.PORTFOLIO_GROUP_TREE (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::CreatePersonalPortfolio
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.PORTFOLIO_PERSONAL_ADD (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::CreateProjectPortfolio
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.PORTFOLIO_PROJECT_ADD (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetProjectPortfolioGroupTree
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.PORTFOLIO_PROJECT_GROUP_TREE (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolResourcesGroupTreeLinkList; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetSchoolResourcesGroupTree; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetSchoolResourcesGroupTree
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.SCHOOL_RESOURCE_GROUP_TREE (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::Get1DO_StudentsClassesInfo; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::Get85KChildTypeDisabilityInfo; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::Get85KGroupCount (+46)
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.STUDENTSCLASSES_ON_DATE (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- TABLE-VALUED FUNCTION, used by: NS_DataAccess.dll NS_DataAccess.FBDataAccess::UpdatePosByAttest
-- TODO: parameters unknown; see call sites
CREATE FUNCTION dbo.UPDATE_POSITIONS_BY_ATTEST (/* params */)
RETURNS @r TABLE (
        ID INT
)
AS
BEGIN
    RETURN;
END;
GO

-- SCALAR FUNCTION dbo.GET_MAX_ENROLL, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetInvalidsCount
-- CREATE FUNCTION dbo.GET_MAX_ENROLL (/* params */) RETURNS INT AS BEGIN RETURN NULL; END;

-- SCALAR FUNCTION dbo.GET_MIN_OUT, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetInvalidsCount
-- CREATE FUNCTION dbo.GET_MIN_OUT (/* params */) RETURNS INT AS BEGIN RETURN NULL; END;

-- SCALAR FUNCTION dbo.PARSE, used by: NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetQueryAllObjectsList
-- CREATE FUNCTION dbo.PARSE (/* params */) RETURNS INT AS BEGIN RETURN NULL; END;

-- STORED PROCEDURE dbo.PORTFOLIO_PROJECT_GROUP_TREE, used by: NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetProjectPortfolioGroupTree; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetProjectPortfolioGroupTree
-- CREATE PROCEDURE dbo.PORTFOLIO_PROJECT_GROUP_TREE AS BEGIN SET NOCOUNT ON; /* TODO */ END;

-- STORED PROCEDURE dbo.UPDATE_POSITIONS_BY_ATTEST, used by: NS_DataAccess.dll NS_DataAccess.SQLDataAccess::UpdatePosByAttest
-- CREATE PROCEDURE dbo.UPDATE_POSITIONS_BY_ATTEST AS BEGIN SET NOCOUNT ON; /* TODO */ END;

