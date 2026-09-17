<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bPermit, nPeriodID
Dim objMovePeriods
Dim nPeriodsCount, arrPeriods
Dim dtStart, dtEnd, i
Dim strGlobalYearID

On Error Resume Next

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")

bPermit = (CStr(Request("Permit")) = "1")
strGlobalYearID = GetSafeID(Request("CMNYEAR"), Null)

If bPermit then
    nPeriodID = GetSafeLng(Request("PeriodID"), Null)
    Call objNSNET.SaveMovePeriodPermission(strGlobalYearID, nPeriodID)
    TestError( obLanguage("ServAdmin","kErrSaveMovePeriodPermission") )
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kMovePeriodPermissionWasSaved")), False, 0)
Else
    Set objMovePeriods = objNSNET.GetMovePeriodsInfo(strGlobalYearID)
    If objMovePeriods.EOF Then
        GenerateError obLanguage("ServAdmin","kCantGetMovePeriodsInfo")
    End If
    nPeriodsCount = objMovePeriods.RecordCount
    ReDim arrPeriods(2, nPeriodsCount - 1) ' 0 - PeriodID, 1 - StartDate, 2 - EndDate

    i = 0
    While Not objMovePeriods.EOF
        nPeriodID = GetSafeLng(objMovePeriods("PERIODID"), Null)
        dtStart = GetSafeDate(Request("SDT_" & nPeriodID), Null)
        dtEnd = GetSafeDate(Request("EDT_" & nPeriodID), Null)
	    arrPeriods(0, i) = nPeriodID
	    arrPeriods(1, i) = dtStart
	    arrPeriods(2, i) = dtEnd
        i = i + 1
        objMovePeriods.MoveNext
    WEnd

    Call objNSNET.SaveMovePeriods(strGlobalYearID, arrPeriods)
    TestError( obLanguage("ServAdmin","kErrSaveMovePeriodsInfo") )
	Call WriteJsonResult(CStr(obLanguage("ServAdmin","kMovePeriodsWasSaved")), False, 0)
End If
%>
