<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim i
Dim dctVacationGrades, nTermTypeID, nGrade, nGradeSet
Dim arrTermTypes, nProfileID, prof_grade
Dim arrKeys

If Not HasUserRight(arPostSchoolEvent) Then GenerateError obLanguage("Common","kErrPageAccess")

Set dctVacationGrades = Server.CreateObject( "NetCity.Storage" )
Set arrKeys = Request("vacationGradeKeys")

For Each prof_grade in arrKeys
	nTermTypeID =  GetSafeLng(Request.Form("Grade_" & prof_grade), 0)
	dctVacationGrades(prof_grade) = nTermTypeID
Next
Call objNSNET.SaveVacationGrades(strCurrYearId, dctVacationGrades)
TestError obLanguage("Common","kErrorMsg")
Call WriteJsonResult(obLanguage("SetupSchoolCalendar", "kMsgSave"), False, 0)
%>
