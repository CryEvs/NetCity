<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CreateNewYear_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const minGrade = 0
Const maxGrade = 12

If Not HasUserRight(arCreateCloseEditYear) Then GenerateError kErrPageAccess

Dim Item, nItem, nYear
Dim oTmp2, strInvalidComponentName, nInvalidGrade, arrLimits, arrTmp, j, nCnt
Dim strWizardYearName
Dim transaction

nWeekEndSet = 0 : nCnt =0
For Each Item In Request.Form("WeekEndDays")
	nItem = CLng(Item)
	If nItem > 0 Then nWeekEndSet = nWeekEndSet + nItem : nCnt = nCnt + 1
Next

If strSchoolYearID = "0" Then
	If Month( NSDate ) > 4 Then nYear = Year(NSDate) Else nYear = Year(NSDate) - 1
	If Request("Year")="-2" Then
		nYear=-nYear-1
	Else
		If Request("Year")="-1" Then nYear=-nYear Else nYear = GetSafeLng(Request("Year"),-nYear)
	End If
	transaction = objNSNET.GetTransaction()
	strSchoolYearID = objNSNET.CreateYear_WT(transaction, strSchoolID, nYear, nWeekEndSet, strUserID)
	Call TestErrorWithTransaction(transaction,kErrCreateYear)
	objNSNET.CommitTransaction(transaction)
	
	Call obTokenMgr.SetData(strToken, "SCHOOLYEARID", strSchoolYearID)
	Call obTokenMgr.SetData(strToken, stCurrYear, strSchoolYearID)
	Call obTokenMgr.SetData(strToken, stFRightsUpdated, 1)
Else
	Call objNSNET.EditSchoolYear(strSchoolYearID, nWeekEndSet)
	TestError kErrEditYear
End If
strWizardYearName = objNSNET.GetSchoolYearName(strSchoolYearID)
Call obTokenMgr.SetData(strToken, "SCHOOLYEARNAME", strWizardYearName)

Call obTokenMgr.SetData(strToken,stWasSaved, kYearSaved )
RedirectTo "CreateNewYear.asp?", null
%>
