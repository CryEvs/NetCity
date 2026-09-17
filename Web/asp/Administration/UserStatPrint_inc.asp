<!-- #INCLUDE FILE="DatePeriod_inc.asp" -->
<!-- #INCLUDE FILE="UserStat_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtMinDate, dtMaxDate

Sub onDrawPage()
	Dim strUserType, strScName, is_EO
	Select Case nUserType
	  Case kTypeAll: strUserType = obLanguage("Common","kAll")
	  Case kTypeStaff: strUserType = obLanguage("Common","kStaff")
	  Case kTypeStudent: strUserType = obLanguage("Common","Ученик",strFunctionalityType)
	  Case kTypeParent: strUserType = obLanguage("Common","kParent")
	End Select
	If nViewSchoolID="-1" Then
		strScName = obLanguage("ServAdmin","kSAName")
	ElseIf nViewSchoolID="-2" Then
		strScName = obLanguage("Common","kEMName")
	ElseIf nViewSchoolID="-3" Then
		strScName = obLanguage("Common","kAll")
	Else
		strScName = DB2HTML(objNSNET.GetSchoolName(nViewSchoolID))
	End If
	
	is_EO = (CLng(nViewSchoolID) > 0 Or CLng(nViewSchoolID) = -3)
	
	Response.Write GetPageTitleFor( obLanguage("ServAdmin","kTitleUserStat"), Array( _
			obLanguage("Common", IIF(is_EO, "kEO","kUser")), strScName, _
			obLanguage("ServAdmin","kTimePeriod"), obLanguage("ServAdmin","kTimeFrom") &" "& Date2Str(dtStartDate) &" "& obLanguage("ServAdmin","kTimeTo") &" "& Date2Str(dtEndDate), _
			obLanguage("ServAdmin","kUserCategory"), strUserType ) )
	Call DrawTable()
	Response.Write GetPageVer()
End Sub
%>
