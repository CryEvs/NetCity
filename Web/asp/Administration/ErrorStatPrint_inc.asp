<!-- #INCLUDE FILE="DatePeriod_inc.asp" -->
<!-- #INCLUDE FILE="ErrorStat_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtMinDate, dtMaxDate

Sub onDrawPage()
	Dim strErrorType, strScName
	Select Case nErrorType
	  Case kErrorType: strErrorType = obLanguage("ServAdmin","kErrors")
	  Case kWarningType: strErrorType = obLanguage("ServAdmin","kWarnings")
	End Select
	If nViewSchoolID=-1 Then
		strScName = obLanguage("ServAdmin","kSAName")
	ElseIf nViewSchoolID=-2 Then
		strScName = obLanguage("Common","kEMName")
	ElseIf nViewSchoolID=-3 Then
		strScName = obLanguage("Common","kAll")
	Else
		strScName = DB2HTML(objNSNET.GetSchoolName(nViewSchoolID))
	End If

	Response.Write GetPageTitleFor( obLanguage("ServAdmin","kTitleErrorStat"), _
		Array(obLanguage("Common","kSchool",strFunctionalityType), strScName, _
			obLanguage("ServAdmin","kTimePeriod"), obLanguage("ServAdmin","kTimeFrom") &" "& Date2Str(dtStartDate) &" "& obLanguage("ServAdmin","kTimeTo") &" "& Date2Str(dtEndDate), _
			obLanguage("ServAdmin","kTypeOfErrors"), strErrorType ) )
	Call DrawTable()
	Response.Write GetPageVer()
End Sub
%>
