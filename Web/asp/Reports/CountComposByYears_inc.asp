<!-- #INCLUDE VIRTUAL="/asp/Reports/CountComposByYearsCmn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Function GetPageParams()
	If strFunctionalityType = 3 Then
		GetPageParams = Array( _
		obLanguage("Common","kSchoolYear"), objNSNET.GetSchoolYearName(strCurrYearID), _
		obLanguage("Common","kDate"), strEndDate)
	ElseIf strFunctionalityType = 0 Then
		GetPageParams = Array( _
		obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(strCurrYearID), _
		obLanguage("Common","kDate"), strEndDate)
	End If
End Function

Dim intRows, objInfo, strSchoolPrincipal
Dim bEmpty

Sub specialRead()
	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)

	bAge = GetSafeBool(GetSafe(stReportAgeCompos, false), false)
End Sub

Sub specialMain()
	If bAge Then
		Call InitArraysForAge()
		bEmpty = Not GetReportInfoForSYForAge(strCurrYearID, -1)
	Else
		Call InitArrays()
		bEmpty = Not GetReportInfoForSY(strCurrYearID, -1)
	End If

	strSchoolPrincipal = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00fio1") 
End Sub

Function GetBottom()
	GetBottom = "<div class=""normaltext""><br><br>" & obLanguage("Reports","kSchoolChief") & " <b>" & strSchoolPrincipal & "</b></div>"
End Function
%>
