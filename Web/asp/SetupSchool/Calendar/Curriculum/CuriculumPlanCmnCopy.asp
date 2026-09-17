<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim minGrade, maxGrade
Dim transaction
Dim strTermID, strProfileID, strDirectionID
Dim lngNFailed

strTermID = GetSafeLng(Request("termID"), Null)
strProfileID = obTokenMgr.GetData(strToken, stCurrProfile) ' Для ИУП не используется
strDirectionID = obTokenMgr.GetData(strToken, stCurrDirection) ' Для ОДО

Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

minGrade = GetSafeLng(Request("GradeMin"), minGrade)
maxGrade = GetSafeLng(Request("GradeMax"), maxGrade)

transaction = objNSNET.GetTransaction()
Call CopyCSGByCurriculumCmn()
Call GenerateCSGByCurriculumCmn()

TestErrorWithTransaction transaction, obLanguage("SetupSchoolCalendar","kCantSaveCurriculumLimits")

Call objNSNET.CommitTransaction(transaction)

RedirectTo "CuriculumPlan.asp", null

Function CopyCSGByCurriculumCmn()
End Function

Function GenerateCSGByCurriculumCmn()
End Function
%>
