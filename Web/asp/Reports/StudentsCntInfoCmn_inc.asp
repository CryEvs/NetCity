<!-- #INCLUDE FILE="ReportService_inc.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Const kEducForm_IndividCommon = "индивидуальная%"
Const kEducForm_Extern = "экстернат"
Const kEducForm_FullTime = "очная"
Const kEducForm_Evening = "очно-заочная (вечерняя)"
Const kEducForm_Family = "семейное образование"
Const kEducForm_SelfEduc = "самообразование"

'Const kEducProgramm_BaseCommon = "основная общеобразовательная%" ' Все др. сейчас - это "СКО"

Const kClassTypeID_Common = 1
Const kClassTypeID_ProfileCommon = 4
Const kClassTypeID_SKO = 6

Const kClassTypeID_DepthSubj = 2
Const kClassTypeID_Profile = 3
Const kClassTypeID_ProfileDepth = 5


Dim dtEndDate, strEndDate
Dim nSchoolsCnt
Dim arrStudCnt, arrStudCntTotals
Dim arrSchoolNums
Dim arrEmTreeLvl
Dim arrFounderName

Dim strID_EducForm_Extern, strID_EducForm_FullTime
Dim strID_EducForm_Evening
Dim strID_EducForm_Family, strID_EducForm_SelfEduc

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNStudentsCntInfo")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kDate"), strEndDate _
		)
End Function

Sub GetParamsInfo()
	Dim transaction

	transaction = objNSNET.GetTransaction()

	strID_EducForm_Extern = objNSNET.GetUserInfoListItem_WT(transaction, 1041, -1, kEducForm_Extern) & ""
	strID_EducForm_FullTime = objNSNET.GetUserInfoListItem_WT(transaction, 1041, -1, kEducForm_FullTime) & ""
	strID_EducForm_Evening = objNSNET.GetUserInfoListItem_WT(transaction, 1041, -1, kEducForm_Evening) & ""
	strID_EducForm_Family = objNSNET.GetUserInfoListItem_WT(transaction, 1041, -1, kEducForm_Family) & ""
	strID_EducForm_SelfEduc = objNSNET.GetUserInfoListItem_WT(transaction, 1041, -1, kEducForm_SelfEduc) & ""

	objNSNET.RollbackTransaction(transaction)

	If strID_EducForm_Extern = "0" Or strID_EducForm_FullTime = "0" Or strID_EducForm_Evening = "0" Or strID_EducForm_Family = "0" Or strID_EducForm_SelfEduc = "0" Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
End Sub

Sub GetReportData(strSYID, nInd)
	Dim nStudCnt, nGrade, nClassType, nDispl
	Dim objStudCnt, i

	' 2-27
	Set objStudCnt = objNSNET.GetStudentsCountByGrade_DepthSubj(strSYID, dtEndDate, _
						kClassTypeID_Common, kClassTypeID_ProfileCommon, _
						kClassTypeID_DepthSubj, kClassTypeID_Profile, kClassTypeID_ProfileDepth, _
						strID_EducForm_FullTime)
	While Not objStudCnt.EOF
		nStudCnt = GetSafeLng(objStudCnt("CNT"), 0)
		nGrade = GetSafeLng(objStudCnt("GRADE"), 0)
		If nGrade > 0 Then
			nClassType = GetSafeLng(objStudCnt("CLS_TYPE"), 0)
			' nClassType <> 0 - означает nClassType = kClassTypeID_DepthSubj
			nDispl = IIf(nClassType = 0, 2, 15)
			arrStudCnt(nGrade + nDispl, nInd) = nStudCnt
		End If
		objStudCnt.MoveNext
	WEnd

	For i = 3 To 14
		arrStudCnt(2, nInd) = arrStudCnt(2, nInd) + arrStudCnt(i, nInd)
	Next

	For i = 16 To 27
		arrStudCnt(15, nInd) = arrStudCnt(15, nInd) + arrStudCnt(i, nInd)
	Next

	' 28-29
	Set objStudCnt = objNSNET.GetStudentsCountByStep_Individ(strSYID, dtEndDate, _
						kClassTypeID_Common, kClassTypeID_ProfileCommon, kClassTypeID_SKO, _
						kClassTypeID_DepthSubj, kClassTypeID_Profile, kClassTypeID_ProfileDepth, _
						kEducForm_IndividCommon)

	While Not objStudCnt.EOF
		nStudCnt = GetSafeLng(objStudCnt("CNT"), 0)
		nClassType = GetSafeLng(objStudCnt("CLS_TYPE"), 0)

		If nClassType = 0 Then
			arrStudCnt(28, nInd) = nStudCnt
		Else ' nClassType = kClassTypeID_DepthSubj
			arrStudCnt(29, nInd) = nStudCnt
		End If

		objStudCnt.MoveNext
	WEnd

	' 31
	Set objStudCnt = objNSNET.GetStudentsCount_SKO(strSYID, dtEndDate, kClassTypeID_SKO, strID_EducForm_FullTime)
	If Not objStudCnt.EOF Then
		nStudCnt = GetSafeLng(objStudCnt("CNT"), 0)
		arrStudCnt(31, nInd) = nStudCnt
	End If

	' 32
	Set objStudCnt = objNSNET.GetStudentsCount_Evening(strSYID, dtEndDate, kClassTypeID_Common, kClassTypeID_ProfileCommon, strID_EducForm_Evening)
	If Not objStudCnt.EOF Then
		nStudCnt = GetSafeLng(objStudCnt("CNT"), 0)
		arrStudCnt(32, nInd) = nStudCnt
	End If

	' 33
	Set objStudCnt = objNSNET.GetStudentsCountForEducForm(strSYID, dtEndDate, strID_EducForm_Extern)
	If Not objStudCnt.EOF Then
		nStudCnt = GetSafeLng(objStudCnt("CNT"), 0)
		arrStudCnt(33, nInd) = nStudCnt
	End If

	' 34
	Set objStudCnt = objNSNET.GetStudentsCountForEducForm(strSYID, dtEndDate, strID_EducForm_Family)
	If Not objStudCnt.EOF Then
		nStudCnt = GetSafeLng(objStudCnt("CNT"), 0)
		arrStudCnt(34, nInd) = nStudCnt
	End If

	' 35
	Set objStudCnt = objNSNET.GetStudentsCountForEducForm(strSYID, dtEndDate, strID_EducForm_SelfEduc)
	If Not objStudCnt.EOF Then
		nStudCnt = GetSafeLng(objStudCnt("CNT"), 0)
		arrStudCnt(35, nInd) = nStudCnt
	End If

	arrStudCnt(1, nInd) = arrStudCnt(2, nInd) + arrStudCnt(15, nInd) + arrStudCnt(28, nInd) + arrStudCnt(29, nInd) + arrStudCnt(31, nInd) + arrStudCnt(32, nInd)
End Sub

Sub CalcTotals()
	Dim i, j

	For i = 0 To UBound(arrStudCnt, 1)
		For j = 0 To nSchoolsCnt - 1
			arrStudCntTotals(i) = arrStudCntTotals(i) + arrStudCnt(i, j)
		Next
	Next
End Sub

Function GetReportTable()
	Dim i, j, nPos
	Dim bTotal
	Dim colspanCount

	bTotal = (nSchoolsCnt > 1)
	strReport = "<table class=""table-print-num"">"
	If subEms Then
		strReport = strReport & _
						"<tr>" & _
						"<th rowspan=""3"">&nbsp;</th>" & _
						IIf(bTotal, "<th rowspan=""3"">&nbsp;</th><th rowspan=""3"">Итого</th><th colspan=" & nSchoolsCnt & ">" & obLanguage("EM","kManagement") &"</th>","<th></th><th colspan=" & nSchoolsCnt & ">" & obLanguage("EM","kManagement") & "</th>")
		strReport = strReport & "</tr>"

		'strReport = strReport & "<tr>" & _
		'				"<th>&nbsp;</th><th colspan=" & nSchoolsCnt & ">" & obLanguage("EM","kManagement") & "</th>" & _
		'				"</tr>"
		'Если ОО>1 то рисуем пустой <th>, для нормальной компоновки с заголовком "Итого"
		strReport = strReport & _
		"<tr>" & _
			IIf(bTotal, "","<th>&nbsp;</th>")
	
		For i = 0 To nSchoolsCnt - 1
			If currFounderID <> arrEmTreeLvl(i) Then 
				currFounderID = arrEmTreeLvl(i)
				colspanCount = 0
				colspanCount = colspanCount + 1
				'Если за УО, идущем в массиве последним, закреплено 1 ОО, то рисуем заголовок с названием УО
				If (i+1) > Ubound(arrFounderName) Then 
					strReport = strReport & "<th colspan=" & colspanCount & ">" & arrFounderName(i) & "</th>"
				End If
			Else 
				colspanCount = colspanCount + 1
				
				If (i+1) > Ubound(arrFounderName) Then 
					strReport = strReport & "<th colspan=" & colspanCount & ">" & arrFounderName(i) & "</th>"'Если за УО, идущем в массиве последним, закреплено 1 ОО, то рисуем заголовок с названием УО
				ElseIf arrFounderName(i + 1) <> arrFounderName(i) Then 
					strReport = strReport & "<th colspan=" & colspanCount & ">" & arrFounderName(i) & "</th>"'Если УО закрепленое за следующей в массиве школой отличается от текущего то рисуем заголовок с названием УО
				End If
			End If
		Next
		strReport = strReport & "</tr>" & _
						"<tr>" & IIf(bTotal, "","<th>&nbsp;</th>")
	Else
		strReport = strReport & _
			"<tr>" & _
			IIf(bTotal, "<th>&nbsp;</th><th>&nbsp;</th><th>Итого</th>","<th>&nbsp;</th><th>&nbsp;</th>")         ' & IIf(bTotal, "<th rowspan=""1"">Итого</th>", "<th></th>")
	End If

	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<th>" & DB2HTML(arrSchoolNums(i)) & "</th>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>ЦСР - 4210300 (без дет. садов структ. подр. школ):</th><th>01</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(1) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(1, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><td>в том числе:</td><td>&nbsp;</td>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>общеобразовательные школы (и общеобразовательные классы гимназий, лицеев и школ с углубленным изучением)</th><th>02</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(2) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(2, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	For j = 1 To 12
		nPos = j + 2
		strReport = strReport & _
			"<tr><td>" & j & " парал.</td><td>" & Pos2Str(nPos) & "</td>" & IIf(bTotal, "<td>" & arrStudCntTotals(nPos) & "</td>", "")
		For i = 0 To nSchoolsCnt - 1
			strReport = strReport & _
				"<td>" & arrStudCnt(nPos, i) & "</td>"
		Next
		strReport = strReport & "</tr>"
	Next

	strReport = strReport & _
		"<tr><th>гимназии, лицеи и школы с углубленным изучением предметов</th><th>15</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(15) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(15, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	For j = 1 To 12
		nPos = j + 15
		strReport = strReport & _
			"<tr><td>" & j & " парал.</td><td>" & Pos2Str(nPos) & "</td>" & IIf(bTotal, "<td>" & arrStudCntTotals(nPos) & "</td>", "")
		For i = 0 To nSchoolsCnt - 1
			strReport = strReport & _
				"<td>" & arrStudCnt(nPos, i) & "</td>"
		Next
		strReport = strReport & "</tr>"
	Next

	strReport = strReport & _
		"<tr><th>индивидуальное обучение школьников по медицицинским показаниям** в общеобразовательных ОО</th><th>28</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(28) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(28, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>индивидуальное обучение школьников по медицицинским показаниям ** в лицеях, гимназиях, школах углубленного изучения отдельных предметов</th><th>29</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(29) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(29, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>учащиеся, находящиеся на длительном лечении в больницах</th><th>30</th>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>обучающиеся с отклонениями в развитии в общеобразовательных школах**</th><th>31</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(31) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(31, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>вечерние общеобразовательные отделения при школах</th><th>32</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(32) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(32, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>кроме того,</th><th>&nbsp;</th>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>учащиеся, получающие образование в форме экстерната</th><th>33</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(33) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(33, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>учащиеся, получающие образование в форме семейного образования</th><th>34</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(34) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(34, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>учащиеся, получающие образование в форме самообразования</th><th>35</th>" & IIf(bTotal, "<td>" & arrStudCntTotals(35) & "</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>" & arrStudCnt(35, i) & "</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>ЦСР - 4210300 (дет. сады структ. подр. школ):</th><th>36</th>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><td>в том числе:</td><td>&nbsp;</td>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><td>дошкольные группы</td><td>37</td>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><td>ясельные группы</td><td>38</td>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><td>коррекционные дошкольные группы</td><td>39</td>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><td>коррекционные ясельные группы</td><td>40</td>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><th>ЦСР - 4350400 (центры):</th><th>41</th>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & _
		"<tr><td>Прочие организации</td><td>42</td>" & IIf(bTotal, "<td>&nbsp;</td>", "")
	For i = 0 To nSchoolsCnt - 1
		strReport = strReport & _
			"<td>&nbsp;</td>"
	Next
	strReport = strReport & "</tr>"

	strReport = strReport & "</table>"

	strReport = strReport & _
		"<div class=""select"">** - количество обучающихся по медицинским показаниям<br>*  - количество обучающихся подтвержденные выписками с ПМПК</div><br>"

	strReport = strReport & GetBottom()

	GetReportTable = strReport
End Function

Function GetClassBoldLeft()
	GetClassBoldLeft = ""
End Function

Function GetClassTextLeft()
	GetClassTextLeft = ""
End Function

Function Pos2Str(nPos)
	Pos2Str = IIf(nPos < 10, "0" & nPos, "" & nPos)
End Function
%>
