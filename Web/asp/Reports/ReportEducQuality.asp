<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim bSecondaryEduc
Dim bNoPrevYear, bPrevYearArchAndClear
Dim strPrevSYName

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	bSecondaryEduc = GetSafeBool(GetSafe("SecondaryEduc", false), false)
End Sub

Sub specialWrite()
End Sub

Sub Main()
	Dim nPrevYearID, objYearInfo

	bNoPrevYear = False
	bPrevYearArchAndClear = False
	nPrevYearID = objNSNET.GetPrevSchoolYearId(strCurrYearID)
	If nPrevYearID = 0 Then
		bNoPrevYear = True
		bDrawButtonGenerate = False
	Else
		Set objYearInfo = objNSNET.GetYearInfo(nPrevYearID)
		If objYearInfo.EOF Then
			GenerateError obLanguage("Common","kUnexpErr")
		Else
			bPrevYearArchAndClear = GetSafeLng(objYearInfo("ARCHIVESTATUS"), Null) >= 3
			strPrevSYName = GetSafeStr(objYearInfo("SCHOOLYEARNAME"), -1, Null)
		End If
	End If
End Sub

Sub specialHead()
End Sub

Sub specialFilters( strForm )
	If bNoPrevYear Or bPrevYearArchAndClear Then
		DrawInfo obLanguage("Reports","kReportForPrevYear"), False
		If bNoPrevYear Then
			DrawInfo obLanguage("Reports","kNoPrevYear"), False
		Else
			DrawInfo DB2HTML(strPrevSYName) & " " & obLanguage("Reports","kSchoolYearIsArchevedAndCleared"), False
		End If
	End If
End Sub
%>
