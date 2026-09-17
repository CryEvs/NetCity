<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngSetupSchoolCalendar.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
On Error Resume Next

If Not HasUserRight(arCreateCloseEditYear) Then GenerateError kErrPageAccess
Dim nYearID
nYearID = objNSNET.DeleteYear(Request("CURRYEAR"))
TestError( kErrorDeleteYear )
Select Case nYearID
	Case -1, -2 : GenerateError( kErrorDeleteYear & ". " &kErrDelYearMarks) ' и "Есть оценки за период"
'	Case -2 : GenerateError("Есть итоговые оценки")
	Case -3 : GenerateError(kErrorDeleteYear & ". " &kErrDelYearAttends)
	Case -4 : GenerateError(kErrorDeleteYear & ". " &kErrDelYearResults)
	Case -5 : GenerateError(kErrorDeleteYear & ". " &kErrDelYearAssigs)
	Case -6 : GenerateError(kErrorDeleteYear & ". " &kErrDelYearMovdocs)
	Case 0 : RedirectTo "/asp/Logout.asp", null
	Case Else
		Call obTokenMgr.SetData(strToken, stCurrYear, nYearID)
		Call obTokenMgr.SetData(strToken, "SCHOOLYEARID", nYearID)
		Call obTokenMgr.SetData(strToken, "SCHOOLYEARNAME", Null)		
		Call obTokenMgr.SetData( strToken,stWasSaved, kDelYearSaved )
End Select

RedirectTo "Years.asp", null
%>
