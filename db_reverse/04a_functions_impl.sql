/* ============================================================================
   04a_functions_impl.sql
   Re-implementations of programmable objects whose bodies existed only in the lost database.
   Each one is reconstructed from how the application calls it; replaces the stub from 04.
   ============================================================================ */

/* ---------------------------------------------------------------------------
   FOUNDERS_TREE(@founderId) - hierarchy of founders (учредители / органы управления)

   Call sites (NetCity.DataAccess, NS_DAComWrapper, NetCity.DataAccess.Nhibernate):
     FOUNDERS_TREE(null)            whole forest, "where parentfounderid is null" = roots,
                                    "ORDER BY FT.Tree_Order"
     FOUNDERS_TREE(@id)             subtree of @id including @id itself
                                    ("select 1 from FOUNDERS_TREE(@parent) where FOUNDERID=@child" = cycle check,
                                     EM_SCHOOLS_ALL.TREE_LEVEL = tree.TREE_LEVEL, "TREE_LEVEL > 0" = strict descendants)
     cross apply FOUNDERS_TREE(ft1.ROOTFOUNDERID) ... where ft2.Tree_level <= ft1.Tree_level
   Columns: FOUNDERID, PARENTFOUNDERID, FNAME, STATEID, CITYID ("C.STATE_PROVINCEID = FT.STATEID"), Tree_level (0 = node passed as argument,
            or top-level founder for null), Tree_Order (int, pre-order position), ROOTFOUNDERID (top-most ancestor).
   Parent link: PARENTFOUNDERS(FOUNDERID = child, PARENTFOUNDERID = parent).
   --------------------------------------------------------------------------- */
IF OBJECT_ID(N'dbo.FOUNDERS_TREE') IS NOT NULL DROP FUNCTION dbo.FOUNDERS_TREE;
GO
CREATE FUNCTION dbo.FOUNDERS_TREE (@founderId INT)
RETURNS TABLE
AS
RETURN
WITH nodes AS (
    SELECT f.FOUNDERID, f.FNAME, f.STATEID, f.CITYID,
           (SELECT MIN(pf.PARENTFOUNDERID) FROM dbo.PARENTFOUNDERS pf
             WHERE pf.FOUNDERID = f.FOUNDERID AND pf.PARENTFOUNDERID <> f.FOUNDERID) AS PARENTFOUNDERID
    FROM dbo.FOUNDERS f
),
full_tree AS (
    SELECT n.FOUNDERID, n.PARENTFOUNDERID, n.FNAME, n.STATEID, n.CITYID, n.FOUNDERID AS ROOTFOUNDERID, 0 AS LVL,
           CAST(n.FNAME + NCHAR(1) + RIGHT(REPLICATE(N'0', 10) + CAST(n.FOUNDERID AS NVARCHAR(10)), 10) AS NVARCHAR(4000)) AS PATH
    FROM nodes n
    WHERE n.PARENTFOUNDERID IS NULL
       OR NOT EXISTS (SELECT 1 FROM dbo.FOUNDERS p WHERE p.FOUNDERID = n.PARENTFOUNDERID)
    UNION ALL
    SELECT n.FOUNDERID, n.PARENTFOUNDERID, n.FNAME, n.STATEID, n.CITYID, t.ROOTFOUNDERID, t.LVL + 1,
           CAST(t.PATH + NCHAR(2) + n.FNAME + NCHAR(1) + RIGHT(REPLICATE(N'0', 10) + CAST(n.FOUNDERID AS NVARCHAR(10)), 10) AS NVARCHAR(4000))
    FROM nodes n
    JOIN full_tree t ON n.PARENTFOUNDERID = t.FOUNDERID
    WHERE t.LVL < 50                                   -- protection against cycles in PARENTFOUNDERS
),
base AS (
    SELECT t.PATH, t.LVL FROM full_tree t WHERE t.FOUNDERID = @founderId
)
SELECT t.FOUNDERID,
       t.PARENTFOUNDERID,
       t.FNAME,
       t.STATEID,
       t.CITYID,
       t.LVL - ISNULL(b.LVL, 0) AS Tree_level,
       CAST(ROW_NUMBER() OVER (ORDER BY t.PATH) AS INT) AS Tree_Order,
       t.ROOTFOUNDERID
FROM full_tree t
LEFT JOIN base b ON 1 = 1
WHERE @founderId IS NULL
   OR (b.PATH IS NOT NULL
       AND LEFT(t.PATH, LEN(b.PATH)) = b.PATH
       AND (LEN(t.PATH) = LEN(b.PATH) OR SUBSTRING(t.PATH, LEN(b.PATH) + 1, 1) = NCHAR(2)));
GO

/* ---------------------------------------------------------------------------
   APPLY_SCHEDTIME_WEEK - "Применить ко всем дням недели" on /asp/Calendar/ScheduleTimes.asp

   Call site: NS_DataAccess.SQLDataAccess.ApplyScheduleToWeek(nYearID, nVariantID, nWeekDayNum)
     ExecuteSimpleProcedureWithParams("APPLY_SCHEDTIME_WEEK", NSYID, NVARIANTID, NWEEKDAYNUM, NSCHEDTIMEID OUTPUT)
   SaveScheduleTimes.asp: NSCHEDTIMEID <> 0 -> kErrApplyScheduleToWeek_Use + GetScheduleTimeInfo(NSCHEDTIMEID)
     ("(weekday, relay, lesson N)") = a bell of another day that cannot be changed because lessons use it;
     0 -> kApplyScheduleToWeekSuccess. Firebird variant: APPLY_SCHEDTIME_WEEK(year, weekday) returning the same id.
   SCHEDULETIMES: SCHEDULETIMEID, SCHOOLYEARID, VARIANTID, WEEKDAYNUM (1 = Sunday .. 7 = Saturday, VBScript), RELAY,
     SCHEDULETIMENUMBER, STARTTIME, ENDTIME. Lessons reference it: CLASSMEETINGS.SCHEDULETIMEID (FK, no cascade).
   The page lets any of the 7 days be chosen, so the source day is copied to all other 6 days.
   Reconstruction: rows with the same (RELAY, SCHEDULETIMENUMBER) are updated in place (ids kept -> lessons stay attached),
   missing ones inserted, extra ones deleted; if an extra one is used by a lesson nothing is changed and its id is returned.
   --------------------------------------------------------------------------- */
IF OBJECT_ID(N'dbo.APPLY_SCHEDTIME_WEEK', N'P') IS NOT NULL DROP PROCEDURE dbo.APPLY_SCHEDTIME_WEEK;
GO
CREATE PROCEDURE dbo.APPLY_SCHEDTIME_WEEK
    @NSYID        INT,
    @NVARIANTID   INT,
    @NWEEKDAYNUM  INT,
    @NSCHEDTIMEID INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON;
    SET @NSCHEDTIMEID = 0;

    DECLARE @src TABLE (RELAY INT, SCHEDULETIMENUMBER INT, STARTTIME DATETIME, ENDTIME DATETIME);
    INSERT INTO @src (RELAY, SCHEDULETIMENUMBER, STARTTIME, ENDTIME)
    SELECT RELAY, SCHEDULETIMENUMBER, MIN(STARTTIME), MIN(ENDTIME)
    FROM dbo.SCHEDULETIMES
    WHERE SCHOOLYEARID = @NSYID AND VARIANTID = @NVARIANTID AND WEEKDAYNUM = @NWEEKDAYNUM
    GROUP BY RELAY, SCHEDULETIMENUMBER;

    -- bells of the other days that would disappear but are used by lessons
    SELECT TOP (1) @NSCHEDTIMEID = st.SCHEDULETIMEID
    FROM dbo.SCHEDULETIMES st
    WHERE st.SCHOOLYEARID = @NSYID AND st.VARIANTID = @NVARIANTID AND st.WEEKDAYNUM <> @NWEEKDAYNUM
      AND NOT EXISTS (SELECT 1 FROM @src s WHERE s.RELAY = st.RELAY AND s.SCHEDULETIMENUMBER = st.SCHEDULETIMENUMBER)
      AND EXISTS (SELECT 1 FROM dbo.CLASSMEETINGS cm WHERE cm.SCHEDULETIMEID = st.SCHEDULETIMEID)
    ORDER BY st.WEEKDAYNUM, st.RELAY, st.SCHEDULETIMENUMBER;
    IF @NSCHEDTIMEID <> 0 RETURN;

    BEGIN TRANSACTION;

    DELETE st
    FROM dbo.SCHEDULETIMES st
    WHERE st.SCHOOLYEARID = @NSYID AND st.VARIANTID = @NVARIANTID AND st.WEEKDAYNUM <> @NWEEKDAYNUM
      AND NOT EXISTS (SELECT 1 FROM @src s WHERE s.RELAY = st.RELAY AND s.SCHEDULETIMENUMBER = st.SCHEDULETIMENUMBER);

    UPDATE st SET STARTTIME = s.STARTTIME, ENDTIME = s.ENDTIME
    FROM dbo.SCHEDULETIMES st
    JOIN @src s ON s.RELAY = st.RELAY AND s.SCHEDULETIMENUMBER = st.SCHEDULETIMENUMBER
    WHERE st.SCHOOLYEARID = @NSYID AND st.VARIANTID = @NVARIANTID AND st.WEEKDAYNUM <> @NWEEKDAYNUM;

    INSERT INTO dbo.SCHEDULETIMES (STARTTIME, ENDTIME, SCHEDULETIMENUMBER, RELAY, SCHOOLYEARID, VARIANTID, WEEKDAYNUM)
    SELECT s.STARTTIME, s.ENDTIME, s.SCHEDULETIMENUMBER, s.RELAY, @NSYID, @NVARIANTID, d.WEEKDAYNUM
    FROM @src s
    CROSS JOIN (VALUES (1), (2), (3), (4), (5), (6), (7)) d(WEEKDAYNUM)
    WHERE d.WEEKDAYNUM <> @NWEEKDAYNUM
      AND NOT EXISTS (SELECT 1 FROM dbo.SCHEDULETIMES st
                      WHERE st.SCHOOLYEARID = @NSYID AND st.VARIANTID = @NVARIANTID AND st.WEEKDAYNUM = d.WEEKDAYNUM
                        AND st.RELAY = s.RELAY AND st.SCHEDULETIMENUMBER = s.SCHEDULETIMENUMBER);

    COMMIT TRANSACTION;
END;
GO
