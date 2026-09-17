/* ============================================================================
   09_test_school.sql  (OPTIONAL - not needed when schools are created in the UI)
   A school inserted directly into the tables, bypassing COMDataAccess.CreateSchool.
   Kept only for quick smoke tests. Login: admin / admin.
   ============================================================================ */
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;

-- ---------------------------------------------------------------- test geography
DECLARE @country INT, @state INT, @province INT, @city INT, @eo INT, @school INT, @user INT, @sy INT;

SET @country = (SELECT TOP 1 COUNTRYID FROM dbo.COUNTRIES ORDER BY COUNTRYID);
INSERT INTO dbo.STATES (STATEPROVINCENAME, KLADRCODE, COUNTRYID) VALUES (N'Тестовый регион', '00', @country);  SET @state = SCOPE_IDENTITY();
INSERT INTO dbo.PROVINCES (PROVINCENAME, KLADRCODE, STATEID) VALUES (N'Тестовый район', '00001', @state);      SET @province = SCOPE_IDENTITY();
-- KLADRCODE '000001' + Province -> "main city" of the database (SchoolComponent spec)
-- SETTLEMENTTYPEID / AVAILABILITYOFSTREET are read as (int) without NULL check (Mappings.CityMapping)
INSERT INTO dbo.CITIES (NAME, KLADRCODE, PROVINCEID, STATE_PROVINCEID, AVAILABILITYOFSTREET, SETTLEMENTTYPEID) VALUES (N'Тестовый город', '000001', @province, @state, 1, 1);  SET @city = SCOPE_IDENTITY();

-- ---------------------------------------------------------------- school (mirrors COMDataAccess.CreateEO_WT + CreateSchool)
INSERT INTO dbo.MOV_EOS (EONAME, CITYID, EOFORMID, EOLEGALFORMID) VALUES (N'МБОУ Тестовая школа', @city, 18, 1);  SET @eo = SCOPE_IDENTITY();
INSERT INTO dbo.SCHOOLS (SCHOOLNAME, SCHOOLNUMBER, CITYID, EOID, FUNCTYPEID, UNISCHOOLID, SERVERID, MODIFYDATE)
VALUES (N'Тестовая школа', '1', @city, @eo, 2, CONVERT(varchar(36), NEWID()), CONVERT(varchar(36), NEWID()), SYSDATETIME());
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
    (25, '2025/2026', '20250901', '20260831'),
    (26, '2026/2027', '20260901', '20270831'),
    (27, '2027/2028', '20270901', '20280831'); */
-- ---------------------------------------------------------------- administrator admin/admin (mirrors CreateSchoolAdmin_WT)
-- NOMIDDLENAME is read as (bool) without NULL check (NetCity.DataAccess.Mappings.PersonMapping)
INSERT INTO dbo.USERS (LASTNAME, FIRSTNAME, MIDDLENAME, NOMIDDLENAME, NICKNAME, LOGINNAME, PASSWORD, GENDER, LOGINTYPE, ISDELETED, MODIFYDATE)
VALUES ('admin', '', '', 0, 'admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', N'М', 0, 0, SYSDATETIME());
SET @user = SCOPE_IDENTITY();
INSERT INTO dbo.SCHOOLSUSERS (SCHOOLID, USERID) VALUES (@school, @user);
INSERT INTO dbo.USERSROLES (USERID, SCHOOLID, ROLEID) VALUES (@user, @school, 1);

COMMIT;
SELECT @school AS SCHOOLID, @user AS ADMIN_USERID;

