<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const NameLen = 50
Dim i, strGSID, strGSName, sBack
Dim gradeComponent
Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")

If Not HasUserRight( arLACreateGradingScales ) Then GenerateError obLanguage("Common","kErrPageAccess")
sBack = "/asp/LearnApp/GradeScales.asp"
strGSID = GetSafeID( Request("GSID"), "0" )
strGSName = Trim(GetSafeStr( Request("GSName"), NameLen, "" ))
If Request("ACT") = "save" Then
	i = -1
	Dim arrScales()
	While GetSafeStr( Request("mark" & i + 1 ), -1, "" ) <> ""
		i = i + 1
		Redim Preserve arrScales( 1, i )
		arrScales( 0, i ) = Request("absmark" & i)
		arrScales( 1, i ) = Request("mark" & i)
	Wend
	'FedorovSY т.к. не удается передать массивы объявленные как Dim arrScales()
	Dim arrScalesTmp
	arrScalesTmp = arrScales
	strGSID = gradeComponent.SaveGradingSystem(strGSID, strSchoolYearID, strGSName, arrScalesTmp )
	TestError( obLanguage("LearnApp","kErrSavingGradingScale") )
	If strGSID = -1 Then GenerateHTMLError obLanguage("LearnApp","kGradingScaleExists"), sBack, strToken

ElseIf Request("ACT") = "remove" Then
	If strGSID = "0" Then GenerateHTMLError obLanguage("Common","kInvalidParameter"), sBack, strToken
	Call gradeComponent.RemoveGradingSystem(strGSID )
	TestError( obLanguage("LearnApp","kErrDeletingGradingScale") )
	strGSID = "0"
Else
	GenerateHTMLError obLanguage("Common","kInvalidParameter"), sBack, strToken
End If

RedirectTo "GradeScales.asp", Array( "GSID", strGSID )
%>
