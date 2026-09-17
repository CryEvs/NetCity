/* ============================================================================
   03_orm_tables_extra_columns.sql
   Columns referenced by raw SQL on ORM-mapped tables but absent from the mappings
   (legacy columns the ORM does not know about). Only alias-qualified / INSERT / UPDATE
   evidence is used here, to avoid false positives. Types are inferred.
   ============================================================================ */

-- ACTIVITIES
ALTER TABLE dbo.ACTIVITIES ADD INTERNALID INT NULL;  -- IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.ImportMoodleGrade::CreateActivity; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetActivityList (+5)
ALTER TABLE dbo.ACTIVITIES ADD STUDENT_TOOLTIP NVARCHAR(255) NULL;  -- Web\asp\RegActivity.asp
ALTER TABLE dbo.ACTIVITIES ADD TEACHER_TOOLTIP NVARCHAR(255) NULL;  -- Web\asp\RegActivity.asp
GO

-- ADDCLASSES_STUDENTS
ALTER TABLE dbo.ADDCLASSES_STUDENTS ADD REASONID INT NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentDopEducation; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::SaveStudentDopEducationInfo (+1)
GO

-- ADD_PROGRAMS
ALTER TABLE dbo.ADD_PROGRAMS ADD ARTTYPE INT NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass1146_0::<EditAddProgram>b__0
ALTER TABLE dbo.ADD_PROGRAMS ADD USEDISTANCETECH BIT NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess+<>c__DisplayClass1146_0::<EditAddProgram>b__0
GO

-- CLASSES
ALTER TABLE dbo.CLASSES ADD CAPACITY NVARCHAR(255) NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::EditClassType; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetClassInfo_WT (+3)
GO

-- CLASSMEETINGS
ALTER TABLE dbo.CLASSMEETINGS ADD TEACHERID INT NULL;  -- NS_DataAccess.dll NS_DataAccess.FBDataAccess::CreateClassMeeting_Prepare_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::EditClassMeeting_Prepare_WT (+2)
GO

-- CLASSSUBJECTGROUPS
ALTER TABLE dbo.CLASSSUBJECTGROUPS ADD SUBJECTID INT NULL;  -- NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetSubjectAbbrev; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetSubjectAbbrev (+1)
GO

-- EDUCMANAGEMENTS
ALTER TABLE dbo.EDUCMANAGEMENTS ADD EDUSCHOOLID INT NULL;  -- IRTech.NetCity.Mail.Api.dll IRTech.NetCity.Mail.Api.Dao.EmSchoolDao::GetEmSchoolIds; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetEMSchoolID (+1)
GO

-- EM_FORMPARAM
ALTER TABLE dbo.EM_FORMPARAM ADD FORMSPEC NVARCHAR(255) NULL;  -- NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::GetEmFormInfo; NetCity.DataAccess.dll NetCity.DataAccess.StatFormDAO::LoadMainPageList
GO

-- EM_SCHOOLS_ALL
ALTER TABLE dbo.EM_SCHOOLS_ALL ADD ACTUAL_ON NVARCHAR(255) NULL;  -- NetCity.DataAccess.dll NetCity.DataAccess.FoundersDAO::SyncEMSchoolsAll
GO

-- MESSAGES
ALTER TABLE dbo.MESSAGES ADD FILEATTACHID INT NULL;  -- NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetAttachmentInfo_WT; NS_DataAccess.dll NS_DataAccess.SQLDataAccess::GetAttachmentInfo_WT
GO

-- RESULTSDETAILS
ALTER TABLE dbo.RESULTSDETAILS ADD ASSIGNMENTID INT NULL;  -- IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.SetBLOBAnswer::Execute
ALTER TABLE dbo.RESULTSDETAILS ADD STUDENTID INT NULL;  -- IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.SetBLOBAnswer::Execute
GO

-- SCHOOLDOCS
ALTER TABLE dbo.SCHOOLDOCS ADD AFILE_GUID INT NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolDocsGroupTreeDocList; NetCity.DataAccess.dll NetCity.DataAccess.FileDAO::GetFileNameById (+4)
GO

-- STATES
ALTER TABLE dbo.STATES ADD STATEID INT NULL;  -- IRTech.NetCity.Lacc.Processor.dll IRTech.NetCity.Lacc.Processor.Commands.Address.GetStateList::Execute; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolStateList
GO

-- STUDENTS
ALTER TABLE dbo.STUDENTS ADD LANG_ID2 NVARCHAR(255) NULL;  -- NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetForeignLanguages_WT; NS_DataAccess.dll NS_DataAccess.FBDataAccess::GetStudentInfo2_WT (+2)
GO

-- STUDENTS_TERMS_GROUPS
ALTER TABLE dbo.STUDENTS_TERMS_GROUPS ADD ID INT NULL;  -- NetCity.Components.dll NetCity.Components.Services.Curriculum.GenerateCurriculumService::GenerateCSGByCurriculumForList; NetCity.Components.dll NetCity.Components.Services.Curriculum.GenerateCurriculumService::GenerateIUP_SGByCurriculumForList (+2)
GO

-- SUBJECTS
ALTER TABLE dbo.SUBJECTS ADD SUBJECT NVARCHAR(255) NULL;  -- NetCity.DataAccess.dll NetCity.DataAccess.LaDAO::AddSubject; Web\sa\IRTech\Learn\cn_articles.asp (+1)
GO

-- TOTALS
ALTER TABLE dbo.TOTALS ADD IS_YEAR BIT NULL;  -- NetCity.Reports.dll NetCity.Reports.PotentialSchoolMedalistsEm.GetStudentsDao::GetStudentAverageMarks; NetCity.Reports.dll NetCity.Reports.PotentialSchoolMedalistsEm.GetStudentsDao::GetStudents
ALTER TABLE dbo.TOTALS ADD PERIODTYPEID INT NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetClassTotalMarks; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentSubjectTotals (+2)
ALTER TABLE dbo.TOTALS ADD SCHOOLYEARID INT NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentSubjectTotals; NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetStudentTotalMarks (+1)
GO

-- USERS
ALTER TABLE dbo.USERS ADD THUMBPRINT NVARCHAR(255) NULL;  -- NS_DAComWrapper.dll NS_DAComWrapper.COMDataAccess::GetSchoolUserInfo; NetCity.DataAccess.dll NetCity.DataAccess.Commanders.UserCommander+GetUserInfoCommand::get_Sql (+13)
GO

