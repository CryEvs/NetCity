<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE FILE="EducQualityCmn_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames",IIf(bSecondaryEduc, "kRNSecondaryEducQuality","kRNGeneralEducQuality"))
End Function
Function GetPageParams()
	GetPageParams = Array( obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName") )
End Function

Sub specialRead()
	SetScriptTimeOut 900
	Call ReadStateCmn()
End Sub

Sub specialMain()
	Dim nPrevYearID
	Dim strErrMessage

	nPrevYearID = objNSNET.GetPrevSchoolYearId(strCurrYearID)
	bNoPrevYear = (CLng(nPrevYearID) = 0)
	If Not bNoPrevYear Then
		strErrMessage = ""
		Set objEducQuality = objNSNET.GetEducQualityReportForSchool(nPrevYearID, strCurrYearID, bSecondaryEduc, strErrMessage)
		If objEducQuality Is Nothing Then
			If strErrMessage <> "" Then
				GenerateError strErrMessage
			Else
				GenerateError obLanguage("Common","kUnexpErr") 
			End If
		End If
	End If
	'strSchoolShortName = objNSNET.GetSchoolName(strSchoolID)
End Sub
%>
