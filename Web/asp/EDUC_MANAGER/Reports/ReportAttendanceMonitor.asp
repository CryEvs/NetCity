<!-- #INCLUDE FILE="YearDates_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nSchYearID, strTermID, objTerms
Dim bAllSchools

Sub SpecialFilters( strForm )
	FilterGlobalYear
	If bExit Then Exit Sub
	DrawEM_Schools
	If bExit Then Exit Sub

	If bAllSchools Then
		DrawDateRange
	Else
		DrawTermsAll strForm
	End If
End Sub

Sub SpecialRead()
	'Для того чтобы отрисовывать УЧЕБНЫЕ ГОДА подотчетных УО из фильтров, если их нет берет самое вышестоящее
	InitEM_NotArchivedGlobalYears
	If objCommonYears.EOF Then Exit Sub

	Call InitEM_ForFuncType(kFuncType_Common, nGlobalYearID, True)

	bAllSchools = (CStr(strEMSchoolID) = "-1")
	nSchYearID = 0
	
	If bAllSchools Then
		Call objNSNET.GetRangeOfDateForEM(strEMId, nGlobalYearId, dtMinDate, dtMaxDate)
		Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
		bIsCheckDates=True
	Else
		If Not bNoEMSchools Then
			nSchYearID = objNSNET.GetSchoolYearBySchoolAndGlobalYear(strEMSchoolID, nGlobalYearID)
		End If
		If nSchYearID > 0 Then
			InitSchoolTerms
		End If
	End If
End Sub

Sub WriteMoreHiddenTags()
	WriteHiddenTags Array("SchYearID", nSchYearID)
End Sub

Sub InitSchoolTerms()
	strTermID = GetSafeID(Request("TERMID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "-1"))
	Set objTerms = objNSNET.GetAssignedTermList(nSchYearID)
	If objTerms.EOF Then strTermID = "0" : Exit Sub
	If CLng(strTermID) > 0 Then
		strTermID = objNSNET.GetSafeTermIDForYearEM(strTermID, nSchYearID)
		strTermID = CStr(strTermID)
	End If
	If strTermID <> "0" Then Exit Sub
	strTermID = GetSafeID(objTerms("TERMID"), Null)
End Sub

Sub DrawTermsAll( theStrForm )
	Dim errMsg
	errMsg = obLanguage("Common","kNoTermsInYear")
	If strTermID = "0" Then%><tr><td colspan="2" class="SmallHeader"><%=errMsg%></td></tr><% bExit = True
	Else
		DrawFilterRow "", obLanguage("Common","kPeriod"), "TERMID", objTerms, "TERMID", "TERMNAME", strTermID, True
	End If
End Sub

Sub CalcCurrYearLimits( byref outStart, byref outEnd )
End Sub
%>
