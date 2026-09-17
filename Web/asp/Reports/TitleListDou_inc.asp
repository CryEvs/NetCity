<!-- #INCLUDE FILE="TitleListDouCmn_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strSchoolPrincipal
Dim bEmpty

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNTitleListDou")
End Function

Function GetTitleEx()
	GetTitleEx = obLanguage("SetupSchool","kTitleStateOn")& " " & strEndDate
End Function

Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kDate"), strEndDate)
End Function

Sub specialRead()
	ReadSingleDate
	bTotalBySchools = False
	nFilterStep = -1
End Sub

Sub specialMain()
	Dim objData

	bOK = True
	Call GetParamsInfo()

	' Для УО strYearID - nGlobalYearID, strEMID - задан
	' Для детсада strYearID - strCurrYearID, strEMID = 0
	Set objData = objNSNET.GetTitleListDou(0, strCurrYearID, -1, False, dtEndDate)
	bEmpty = objData.EOF
	If bEmpty Then
		strErrMsg = obLanguage("EMReports","kNoDataForFilter")
		bOK = False
	Else
		arrData = GetReportArray(objData)
	End If

	strSchoolPrincipal = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00fio1") 
End Sub

Function GetBottom()
	GetBottom = GetBottom & "<br />"
	GetBottom = GetBottom & _
		"<table class=""table-print-num"">" & _
			"<tr><th class=""text-right"">" & "Направление ГКП" & "</th><td width=""100px"">" & "&nbsp;" & "</td></tr>" & _
			"<tr><th class=""text-right"">" & "Режим работы ГКП, часов в неделю" & "</th><td>" & "&nbsp;" & "</td></tr>" & _
			"<tr><th class=""text-right"">" & "Форма обучения в группах кратковременного пребывания" & "</th><td>" & "&nbsp;" & "</td></tr>" & _
			"<tr><th class=""text-right"">" & "Режим работы круглосуточных групп (в неделю)" & "</th><td>" & "&nbsp;" & "</td></tr>" & _
		"</table>"
	GetBottom = GetBottom & "<br />" & _
		"<table class=""table-print-num"">" & _
			"<tr><th class=""text-right"">" & "Наличие бассейнов" & "</th><th>" & "Количество " & "</th><th>" & "состояние (функционирует/не функционирует) " & "</th></tr>" & _
			"<tr><td class=""text-right"">" & "стационарный" & "</td><td>" & "&nbsp;" & "</td><td>" & "&nbsp;" & "</td></tr>" & _
			"<tr><td class=""text-right"">" & "плескательный" & "</td><td>" & "&nbsp;" & "</td><td>" & "&nbsp;" & "</td></tr>" & _
		"</table>"
End Function

Function GetManager()
	GetManager = "<div class=""normaltext""><br><br>" & obLanguage("SetupSchoolUI","kOUDirector",strFunctionalityType) & " <b>" & strSchoolPrincipal & "</b></div>"
End Function
%>
