<!-- #INCLUDE FILE="../../headernoscreen.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Dim strRedirect

If Not HasUserRight(arSchoolSubjects) Then 
	GenerateError obLanguage("Common","kErrPageAccess")
End If

Dim SchoolYearComponent, result, strError
Set SchoolYearComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.ISchoolYearComponent")

Call SchoolYearComponent.QueueFutureYear(strSchoolID)
TestError obLanguage("SetupSchoolCalendar","kErrCreateFutureYear")

Call obTokenMgr.SetData( strToken, stWasSaved, obLanguage("SetupSchoolCalendar","kFutureYearCreationInQueue").Format(Array(obLanguage("Common", "kClass_es", strFunctionalityType))))
RedirectTo "Years.asp", null
%>
