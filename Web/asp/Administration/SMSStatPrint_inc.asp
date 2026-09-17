<!-- #INCLUDE FILE="DatePeriod_inc.asp" -->
<!-- #INCLUDE FILE="SMSStat_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtMinDate, dtMaxDate

Sub onDrawPage()
	Dim strTypeName, strScName

	strScName = DB2HTML(objNSNET.GetSchoolName(strViewSchoolID))
	strTypeName = GetSMSTypeName()
	
	Response.Write GetPageTitleFor( obLanguage("ServAdmin","kTitleSMSStat"), _
		Array(obLanguage("Common","kEO"), strScName, _
			obLanguage("ServAdmin","kTimePeriod"), obLanguage("ServAdmin","kTimeFrom") &" "& Date2Str(dtStartDate) &" "& obLanguage("ServAdmin","kTimeTo") &" "& Date2Str(dtEndDate), _
			obLanguage("ServAdmin","kSMSType"), strTypeName ) )

	Call DrawTable()
	Response.Write GetPageVer()
End Sub
%>
