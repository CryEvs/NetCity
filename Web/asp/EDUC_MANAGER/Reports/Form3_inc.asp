<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate, nMaxGrade
Dim objResult
Dim arrSchoolInfo

Function GetReportNameAndNumber()
	GetReportNameAndNumber = "<div class=""normaltext"">("&obLanguage("EMReportNames","kRNSummaryForm3")&")</div>"
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","KRNInfoAboutMoving",strFunctionalityType)
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Common","kFromDate") & dtStartDate & obLanguage("Common","kToDate") & dtEndDate
End Function

Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID) )
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
End Sub

Sub specialMain()
	Dim nTemp
	Call objNSNET.GetEMGYMinMaxGrades(filterEMID, nGlobalYearID, "2,5,6", "30,31,33", nTemp, nMaxGrade)
	If nMaxGrade>11 Then nMaxGrade = 11
	Set objResult = objNSNET.GetEMMovingInfo(filterEMID, nGlobalYearID, dtStartDate, dtEndDate)
End Sub

Function GetReportTable()
	Dim strRepTmp, nCntTmp, nGrade, bTotal
	Dim rsOut, rsIn, arrSteps, i, j, i0, arrSum, arrTot, cntCells, nCntOtherState, nCntOtherCity, nCntOut, nCntCity, nCntOther, nCntOtherCityInState
	Dim bGradeSkip

	strReport = GetTableHeader()
	strRepTmp = GetTableHeader_()
	GetReportTable = strReport

	arrSteps = Array(4, 9, nMaxGrade, 13)
	cntCells = 36 '= (сумма столбцов в 2-ух таблицах) -1

	Redim arrSum(cntCells), arrTot(cntCells)
	For i0 = 0 to cntCells
		arrSum(i0) = 0 : arrTot(i0) = 0
	Next
	i0=1 : j=0 : i = arrSteps(j)
	If Not objResult.EOF Then
		nGrade = CInt(objResult("GRADE"))
		If nGrade > 1 Then
			nGrade = 1
			bGradeSkip = True
		Else
			i0 = nGrade
		End IF
	Else
		nGrade = 1
		bGradeSkip = True
	End If
	Do While Not objResult.EOF Or nGrade<=11
		If Not bGradeSkip Then
			strReport = strReport & "<tr><td>" & DB2HTML(nGrade) & "</td>"
			Set rsOut = objResult("mov_out_info").Value
			If Not rsOut.EOF Then
				nCntOtherCityInState = CLng(rsOut("cntOutOtherCityInState"))
				nCntOtherState = CLng(rsOut("cntOutOtherState"))

				arrSum(2) = arrSum(2) +  nCntOtherState                             'в другие регионы
				arrSum(3) = arrSum(3) +  nCntOtherCityInState                       'в другие города области

				'1-2 столбцы
				strReport = strReport & "<td>" & RepValue(nCntOtherState) & "</td><td>" & RepValue(nCntOtherCityInState) & "</td>"

				'данные показатели считают учеников у которых в приказе указаны следующие места выбытия:
				nCntOther = CLng(rsOut("cntMOY")) - CLng(rsOut("cntEvening"))
				arrSum(5) = arrSum(5) +  nCntOther                                  'в городские МОО  ''дневные
				arrSum(6) = arrSum(6) +  CLng(rsOut("cntEvening"))                  'в городские вечерние МОО
				arrSum(7) = arrSum(7) +  CLng(rsOut("cntNOY"))                      'в городские ЧОО
				arrSum(8) = arrSum(8) +  CLng(rsOut("cntNPON"))                     'в городские ЧОО НПО
				arrSum(9) = arrSum(9) +  CLng(rsOut("cntSPON"))                     'в городские ЧОО СПО
				arrSum(10) = arrSum(10) +  CLng(rsOut("cntGOY"))                    'в городские ГОО
				arrSum(11) = arrSum(11) +  CLng(rsOut("cntSK"))                     'в городские ГОО СКОО
				arrSum(12) = arrSum(12) +  CLng(rsOut("cntNPO"))                    'в городские ГОО НПО
				arrSum(13) = arrSum(13) +  CLng(rsOut("cntSPO"))                    'в городские ГОО СПО
				arrSum(14) = arrSum(14) +  CLng(rsOut("cntVTK")) 'городские         'в спец. учебно-воспитательные организации

				strReport = strReport  &"<td>"& RepValue(CLng(rsOut("cntMOY"))+CLng(rsOut("cntNOY"))+CLng(rsOut("cntGOY")))& "</td><td>"&RepValue(nCntOther)& "</td><td>"& RepValue(rsOut("cntEvening"))& "</td>"
				strReport = strReport  &"<td>"& RepValue(rsOut("cntNOY"))& "</td><td>"&RepValue(rsOut("cntNPON"))& "</td><td>"&RepValue(rsOut("cntSPON"))& "</td>"
				strReport = strReport  &"<td>"& RepValue(rsOut("cntGOY"))& "</td><td>"&RepValue(rsOut("cntSK"))& "</td><td>"& RepValue(rsOut("cntNPO"))& "</td><td>"& RepValue(rsOut("cntSPO"))& "</td><td>"& RepValue(rsOut("cntVTK"))& "</td>"

				'данные показатели считают учеников у которых в приказе не указано место выбытия а указаны следующие причины:
				arrSum(15) = arrSum(15) +  CLng(rsOut("cntWorkCours"))              'трудоустройство/курсы
				arrSum(16) = arrSum(16) +  CLng(rsOut("cntBadMark"))                'отчислены по неуспеваемости
				arrSum(17) = arrSum(17) +  CLng(rsOut("cntNoWork"))                 'не работают и не учатся
				arrSum(18) = arrSum(18) +  CLng(rsOut("cntAge18"))                  'отчислены по достижению 18 лет
				arrSum(19) = arrSum(19) +  CLng(rsOut("cntDeath"))
				arrSum(20) = arrSum(20) +  CLng(rsOut("cntOtherReason"))            'остальные причины


				arrSum(21) = arrSum(21) +  CLng(rsOut("cntAll"))                    'общее кол-во выбывших учеников

				arrSum(4) = arrSum(5) + arrSum(6) + arrSum(7) + arrSum(10)

				strReport = strReport  &"<td>"& RepValue(rsOut("cntWorkCours"))& "</td><td>"& RepValue(rsOut("cntBadMark"))& "</td>"
				strReport = strReport  &"<td>"& RepValue(rsOut("cntNoWork"))& "</td><td>"& RepValue(rsOut("cntAge18"))& "</td><td>"& RepValue(rsOut("cntDeath"))& "</td>"
				strReport = strReport  &"<td>"& RepValue(CLng(rsOut("cntOtherReason"))) & "</td><td>"& RepValue(CLng(rsOut("cntAll"))) & "</td>"
			Else
				strReport = strReport & "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			End If

			strReport = strReport&"</tr>"
			strRepTmp = strRepTmp & "<tr><td>" & DB2HTML(nGrade) & "</td>"

			Set rsIn = objResult("mov_in_info").Value

			If Not rsIn.EOF Then
				nCntOtherCityInState = CLng(rsIn("cntInFromOtherCityInState"))
				nCntOtherState = CLng(rsIn("cntInFromOtherState"))
				arrSum(22) = arrSum(22) +  nCntOtherState                           ' из других регионов
				arrSum(23) = arrSum(23) +  nCntOtherCityInState                     ' из других городов области

				'1-2 столбцы
				strRepTmp = strRepTmp  &"<td>"& RepValue(nCntOtherState)& "</td><td>"& RepValue(nCntOtherCityInState)& "</td>"

				nCntOther = CLng(rsIn("cntMOY")) - CLng(rsIn("cntEvening"))
				arrSum(24) = arrSum(24) +  CLng(rsIn("cntMOY"))+CLng(rsIn("cntNOY"))+CLng(rsIn("cntGOY"))
				arrSum(25) = arrSum(25) +  nCntOther                                'из дневных МОО
				arrSum(26) = arrSum(26) +  CLng(rsIn("cntEvening"))                 'из вечерних МОО
				arrSum(27) = arrSum(27) +  CLng(rsIn("cntNOY"))                     'из ЧОО
				arrSum(28) = arrSum(28) +  CLng(rsIn("cntNPON"))                   'из городских ЧОО НПО
				arrSum(29) = arrSum(29) +  CLng(rsIn("cntSPON"))                   'из городских ЧОО СПО
				arrSum(30) = arrSum(30) +  CLng(rsIn("cntGOY"))                     'из ГОО
				arrSum(31) = arrSum(31) +  CLng(rsIn("cntSK"))                      'из ГОО СКОО
				arrSum(32) = arrSum(32) +  CLng(rsIn("cntSPO"))                     'из городские ГОО СПО
				arrSum(33) = arrSum(33) +  CLng(rsIn("cntNPO"))                     'из городские ГОО НПО
				arrSum(34) = arrSum(34) +  CLng(rsIn("cntVTK"))                     'из спец. учебно-воспитательных организаций
				arrSum(35) = arrSum(35) +  CLng(rsIn("cntOther"))                   'другие причины
				arrSum(36) = arrSum(36) +  CLng(rsIn("cntAll"))                     'общее кол-во прибывших независимо от места и причины

				strRepTmp = strRepTmp  &"<td>"& RepValue(CLng(rsIn("cntMOY"))+CLng(rsIn("cntNOY"))+CLng(rsIn("cntGOY")))& "</td><td>"& RepValue(nCntOther)& "</td><td>"& RepValue(rsIn("cntEvening"))& "</td>"
				strRepTmp = strRepTmp  &"<td>"& RepValue(CLng(rsIn("cntNOY")))& "</td><td>"& RepValue(CLng(rsIn("cntNPON")))& "</td><td>"& RepValue(CLng(rsIn("cntSPON")))& "</td>"
				strRepTmp = strRepTmp  &"<td>"& RepValue(CLng(rsIn("cntGOY")))& "</td><td>"&RepValue(CLng(rsIn("cntSK")))& "</td><td>"& RepValue(CLng(rsIn("cntNPO")))& "</td><td>"& RepValue(CLng(rsIn("cntSPO")))& "</td><td>"& RepValue(CLng(rsIn("cntVTK")))& "</td>"
				strRepTmp = strRepTmp  &"<td>"& RepValue(CLng(rsIn("cntOther"))) & "</td><td>"& RepValue(CLng(rsIn("cntAll")))  & "</td>"
			Else
				strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"
			End If
		Else
			strReport = strReport & "<tr><td>" & DB2HTML(nGrade) & "</td>"
			strReport = strReport & "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"

			strRepTmp = strRepTmp & "<tr><td>" & DB2HTML(nGrade) & "</td>"
			strRepTmp = strRepTmp  &"<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"
		End IF

		If Not bGradeSkip Then objResult.MoveNext
		bTotal=True
		If Not objResult.EOF Then
			bGradeSkip = (CInt(objResult("GRADE")) <> nGrade+1)
		ElseIf nGrade < 11 Then
			bGradeSkip = True
		End If
		nGrade = nGrade + 1
		If nGrade <=i Then bTotal=False
		If bTotal Then
			strReport = strReport & "<tr class=""subtotals""><td>'" & i0&"-"&i & "</td>"
			strRepTmp = strRepTmp & "<tr class=""subtotals""><td>'" & i0&"-"&i & "</td>"
			For i0 = 2 to 21
				arrTot(i0) = arrTot(i0) + arrSum(i0)
				strReport = strReport & "<td>" & arrSum(i0) & "</td>"
				arrSum(i0) = 0
			Next
			For i0 = 22 to cntCells
				arrTot(i0) = arrTot(i0) + arrSum(i0)
				strRepTmp = strRepTmp & "<td>" & arrSum(i0) & "</td>"
				arrSum(i0) = 0
			Next
			i0=i+1 : j=j+1 : i = arrSteps(j)
		End If
	Loop
	strReport = strReport & "<tr class=""totals""><td>" & obLanguage("Reports","kTotal_2") & "</td>"
	For i0 = 2 to 21
		strReport = strReport & "<td>" & arrTot(i0) & "</td>"
	Next
	strRepTmp = strRepTmp & "<tr class=""totals""><td>" & obLanguage("Reports","kTotal_2") & "</td>"
	For i0 = 22 to cntCells
		strRepTmp = strRepTmp & "<td>" & arrTot(i0) & "</td>"
	Next
	strReport = strReport & "</table>"
	strReport = strReport & strRepTmp & "</table>"

	GetReportTable = strReport
End Function

Function GetTableHeader()
	dim i, strH
	strH = "<p><table class=""table-print-num""><tr><th rowspan=""5"">" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th colspan=""20"">" & obLanguage("Reports","kOut") & "</th></tr>"
	strH=strH & "<tr><th colspan=""13"">Место</th><th colspan=""6"">Причина</th><th rowspan=""4"">" &obLanguage("Reports","kTotalNumber")  & "</th></tr>"
	strH=strH & "<tr><th rowspan=""3"">" & obLanguage("Reports","kIn_") &obLanguage("Reports","kNonRegionEO")  & "</th><th rowspan=""3"">" & obLanguage("Reports","kIn_") &obLanguage("Reports","kRegionEO")  & "</th><th colspan=""11"">" &obLanguage("Reports","kIn_") & obLanguage("Reports","kEOCity")  & "</th>"
	strH=strH & "<th rowspan=""3"">" & obLanguage("Reports","kWorkCours") & "</th><th rowspan=""3"">" & obLanguage("Reports","kBadMark") & "</th><th rowspan=""3"">" & obLanguage("Reports","cntNoWork") & "</th><th rowspan=""3"">" & obLanguage("Reports","kAge18") & "</th><th rowspan=""3"">" & obLanguage("Common","kDeath") & "</th><th rowspan=""3"">" & obLanguage("Reports","kOtherReason") & "</th></tr>"
	strH=strH & "<tr><th rowspan=""2"">" & obLanguage("Reports","kTotalNumber")  & "</th><th colspan=""2"">" & obLanguage("Reports","kIn_") &"МОО"  & "</th><th colspan=""3"">" &obLanguage("Reports","kIn_") & obLanguage("Reports","kNonGosEO")  & "</th><th colspan=""5"">" &obLanguage("Reports","kIn_") & obLanguage("Reports","kGosEO")  & "</th></tr>"
	strH=strH & "<tr><th>" & obLanguage("Reports","kIn_") & "дневн."  & "</th><th>" & obLanguage("Reports","kIn_") &obLanguage("Reports","kEveningEO") & "</th><th>" &obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kIn_") & "НПО"  & "</th><th>" &obLanguage("Reports","kIn_") & "СПО"  & "</th><th>"
	strH=strH &obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kSKO")  & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kNPO")  & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kSPO") & "</th><th>" &obLanguage("Reports","kIn_") & obLanguage("Reports","kVTK")  & "</th></tr>"
	For i = 1 to 21
		strH=strH & "<th>"&i&"</th>"
	Next
	GetTableHeader=strH & "</tr>"
End Function

Function GetTableHeader_()
	dim i, strH
	strH = "<br><p><br><table class=""table-print-num""  border=""1"" cellspacing=""0""><tr><th rowspan=""5"">" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th colspan=""15"">" & obLanguage("Reports","kInto") & "</th></tr>"
	strH=strH & "<tr><th colspan=""13"">Место</th><th>&nbsp;</th><th rowspan=""4"">" &obLanguage("Reports","kTotalNumber")  & "</th></tr>"
	strH=strH & "<tr><th rowspan=""3"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kNonRegionEO")  & "</th><th rowspan=""3"">" & obLanguage("Reports","kOut_") &obLanguage("Reports","kRegionEO")  & "</th><th colspan=""11"">" &obLanguage("Reports","kOut_") & obLanguage("Reports","kEOCity")  & "</th>"
	strH=strH & "<th rowspan=""3"">" & obLanguage("Reports","kOtherReason") & "</th></tr>"
	strH=strH & "<tr><th rowspan=""2"">" & obLanguage("Reports","kTotalNumber")  & "</th><th colspan=""2"">" & obLanguage("Reports","kOut_") &"МОО"  & "</th><th colspan=""3"">" &obLanguage("Reports","kOut_") & obLanguage("Reports","kNonGosEO")  & "</th><th colspan=""5"">" &obLanguage("Reports","kOut_") & obLanguage("Reports","kGosEO")  & "</th></tr>"
	strH=strH & "<tr><th>" & obLanguage("Reports","kOut_") & "дневн."  & "</th><th>" & obLanguage("Reports","kOut_") &obLanguage("Reports","kEveningEO") & "</th><th>" &obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kOut_") & "НПО"  & "</th><th>" &obLanguage("Reports","kOut_") & "СПО"  & "</th><th>"
	strH=strH & obLanguage("Reports","kTotalNumber")  & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kSKO")  & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kNPO")  & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kSPO") & "</th><th>" &obLanguage("Reports","kOut_") & obLanguage("Reports","kVTK")  & "</th></tr>"
	For i = 1 to 16
		strH=strH & "<th>"&i&"</th>"
	Next
	GetTableHeader_=strH & "</tr>"
End Function

Function RepValue(value)
	If CLng(value) = 0 Then RepValue = "&nbsp;" Else RepValue = value
End Function
%>
