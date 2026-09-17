<!-- #INCLUDE FILE="ReportService_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

' Режим пребывания
Const kStayRegime_GKP		= 4	' кратковременного пребывания
Const kStayRegime_DayNight	= 5	' круглосуточного пребывания

' Направленности
Const kDirect_Common =	1	' общеразвивающая
Const kDirect_Helth =	2	' оздоровительная
Const kDirect_Comby =	3	' комбинированная
Const kDirect_Compens =	4	' компенсирующая 
Const kDirect_Early =	5	' для детей раннего возраста
Const kDirect_Look =	6	' по присмотру и уходу
Const kDirect_Family =	7	' семейная дошкольная


' Кол-во специализаций
Const kSpecialsCount = 22

' Специализации
Const kSpecial_Sort_01 = 101 ' Без ограничений (I группа здоровья)

' Для Комбинир/Компенсир направленности
Const kSpecial_Sort_02 = 120 ' Глухие
Const kSpecial_Sort_03 = 113 ' Слабослышащие и позднооглохшие
Const kSpecial_Sort_04 = 121 ' Слепые
Const kSpecial_Sort_05 = 103 ' Слабовидящие
Const kSpecial_Sort_06 = 102 ' С тяжелыми нарушениями речи
Const kSpecial_Sort_07 = 105 ' С нарушениями опорно-двигательного аппарата (НОДА)
Const kSpecial_Sort_08 = 109 ' С задержкой психического развития
Const kSpecial_Sort_09 = 122 ' С расстройством аутистического спектра
Const kSpecial_Sort_10 = 108 ' С умственной отсталостью (нарушением интеллекта)
Const kSpecial_Sort_11 = 123 ' С тяжелыми и множественными нарушениями развития
Const kSpecial_Sort_12 = 124 ' С синдромом дефицита внимания и гиперактивности (СДВГ)
Const kSpecial_Sort_13 = 125 ' Дети после операции по кохлеарной имплантации

' Для Оздоровит направленности
Const kSpecial_Sort_14 = 106 ' С туберкулезной интоксикацией
Const kSpecial_Sort_15 = 107 ' Часто болеющие дети
Const kSpecial_Sort_16 = 126 ' Иной профиль
Const kSpecial_Sort_17 = 116 ' С аллергопатологией
Const kSpecial_Sort_18 = 114 ' С сахарным диабетом
Const kSpecial_Sort_19 = 127 ' С pаболеваниями органов дыхания
Const kSpecial_Sort_20 = 128 ' С заболеваниями сердечно-сосудистой системы
Const kSpecial_Sort_21 = 129 ' С нефро-урологическими заболеваниями
Const kSpecial_Sort_22 = 130 ' С целиакией



Dim dtEndDate, strEndDate
Dim bTotalBySchools
Dim nFilterStep
Dim nTotalAreaCnt, nTotalSeats
Dim arrData
Dim arrRowTitles


Sub GetParamsInfo()

	arrRowTitles = Array(_
		"Кол-во групп", _
		"группы раннего возраста", _
		"комбинированные группы раннего возраста", _
		"группы дошкольного возраста", _
		"комбинированные группы дошкольного возраста", _
		"Кол-во детей", _
		"детей раннего возраста", _
		"детей в комбинированных группах раннего возраста", _
		"детей дошкольного возраста", _
		"детей в комбинированных группах дошкольного возраста")

	nTotalAreaCnt = 0
	nTotalSeats = 0
End Sub

Function GetReportArray(objData)
	Dim arrTmpData

	ReDim arrTmpData(35, 9) ' 35 - чтобы соответствовало номеру колонки в Excel. Получается, что индексы от 0 до 1 не используются.
							' Для Сводного отчёта для УО - в этих индексах хранятся сведения об ОУ.

	Call ZeroArray(arrTmpData)
	Call Rs2Array(objData, arrTmpData)
	Call TotalArray(arrTmpData)

	GetReportArray = arrTmpData
End Function

' Здесь определяется, какие ячейки будут пустыми (Empty), а какие со значениями (здесь выставляется 0)
Sub ZeroArray(arr)
	Dim i, j

	For i = 2 To 32
		arr(i, 0) = 0
		arr(i, 1) = 0
		arr(i, 3) = 0
		arr(i, 5) = 0
		arr(i, 6) = 0
		arr(i, 8) = 0
	Next

	arr(4, 7) = 0
	arr(4, 9) = 0

	For i = 5 To 16
		arr(i, 2) = 0
		arr(i, 4) = 0
		arr(i, 7) = 0
		arr(i, 9) = 0
	Next

	arr(35, 5) = 0
	arr(35, 6) = 0
	arr(35, 7) = 0
	arr(35, 8) = 0
	arr(35, 9) = 0
End Sub

' Считаем суммарные ячейки
Sub TotalArray(arr)
	Dim i, j

	' Предварительная сумма ГКП
	arr(27, 1) = arr(28, 1) + arr(29, 1)
	arr(27, 3) = arr(28, 3) + arr(29, 3)
	arr(27, 6) = arr(28, 6) + arr(29, 6)
	arr(27, 8) = arr(28, 8) + arr(29, 8)

	arr(4, 0) = arr(4, 1) + arr(4, 3)
	For i = 5 To 16
		For j = 1 To 4
			arr(i, 0) = arr(i, 0) + arr(i, j)
		Next
	Next
	For i = 17 To 32
		arr(i, 0) = arr(i, 0) + arr(i, 1) + arr(i, 3)
	Next

	For i = 4 To 16
		For j = 6 To 9
			arr(i, 5) = arr(i, 5) + arr(i, j)
		Next
	Next
	For i = 17 To 32
		arr(i, 5) = arr(i, 5) + arr(i, 6) + arr(i, 8)
	Next
	arr(35, 5) = arr(35, 6) + arr(35, 7) + arr(35, 8) + arr(35, 9)

	For j = 0 To 9
		For i = 4 To 25
			arr(3, j) = arr(3, j) + arr(i, j)
		Next
		arr(2, j) = arr(3, j) + arr(27, j) + arr(30, j) + arr(31, j) + arr(32, j)
	Next
End Sub

Function CanContinue(objRs)
	CanContinue = (Not objRs.EOF)
End Function

Sub Rs2Array(objRs, arr)
	Dim ind, ind2
	Dim nStep, nDirectionID, nSpecializingID, nStayRegimeID
	Dim bCombyDir, bDayNight
	Dim nClsCnt, nAreaCnt, nSeats, nStudCnt, nInvCnt, nCommonCnt

	While CanContinue(objRs)
		ind = -1
		bCombyDir = False

		nStep = GetSafeLng(objRs("STEP"), 0)
		If nStep = 3 Then nStep = 2 ' В отчёте объединены средняя и старшая ступени

		' Фильтрация по ступени происходит не в компоненте, а здесь - чтобы из отчёта не пропали детсады, у которых нет выбранной ступени,
		' и чтобы в запросе не использовать "шейп".
		If nFilterStep > 0 Then
			If nStep <> nFilterStep Then
				nStep = 0 ' в отчёт не попадёт
			End If
		End If

		If nStep = 1 Or nStep = 2 Then
			nDirectionID = GetSafeLng(objRs("PRETYPEID"), 0) ' Направленность
			nSpecializingID = GetSafeLng(objRs("TYPEID"), 0) ' Специализация
			nStayRegimeID = GetSafeLng(objRs("STAYID"), 0) ' Режим пребывания

			If nStayRegimeID = kStayRegime_GKP Then
				If nDirectionID = kDirect_Common Then
					ind = 28
				ElseIf nDirectionID = kDirect_Compens Then
					ind = 29
				End If

			Else ' nStayRegimeID <> kStayRegime_GKP
				Select Case nDirectionID
				Case kDirect_Common
					If nSpecializingID = kSpecial_Sort_01 Then 
						ind = 4
					End If

				Case kDirect_Compens, kDirect_Comby
					Select Case nSpecializingID
					Case kSpecial_Sort_02: ind = 5
					Case kSpecial_Sort_03: ind = 6
					Case kSpecial_Sort_04: ind = 7
					Case kSpecial_Sort_05: ind = 8
					Case kSpecial_Sort_06: ind = 9
					Case kSpecial_Sort_07: ind = 10
					Case kSpecial_Sort_08: ind = 11
					Case kSpecial_Sort_09: ind = 12
					Case kSpecial_Sort_10: ind = 13
					Case kSpecial_Sort_11: ind = 14
					Case kSpecial_Sort_12: ind = 15
					Case kSpecial_Sort_13: ind = 16

					' про это у меня нет сведений
					'Case kSpecial_Code_09
					'	If nDirectionID = kDirect_Compens Then ind = 17

					End Select

					bCombyDir = (nDirectionID = kDirect_Comby)

				Case kDirect_Helth
					Select Case nSpecializingID
					Case kSpecial_Sort_14: ind = 17
					Case kSpecial_Sort_15: ind = 18
					Case kSpecial_Sort_16: ind = 19
					Case kSpecial_Sort_17: ind = 20
					Case kSpecial_Sort_18: ind = 21
					Case kSpecial_Sort_19: ind = 22
					Case kSpecial_Sort_20: ind = 23
					Case kSpecial_Sort_21: ind = 24
					Case kSpecial_Sort_22: ind = 25
					End Select

				Case kDirect_Early: ind = 30
				Case kDirect_Look: ind = 31
				Case kDirect_Family: ind = 32
				End Select
			End If
		End If ' If nStep = 1 Or nStep = 2

		If ind > 0 Then
			nClsCnt = GetSafeLng(objRs("CLS_CNT"), 0)
			nAreaCnt = GetSafeLng(objRs("AREA_CNT"), 0)
			nSeats = GetSafeLng(objRs("SEATS"), 0)
			nStudCnt = GetSafeLng(objRs("STUD_CNT"), 0)
			nInvCnt = GetSafeLng(objRs("INV_CNT"), 0)
			nCommonCnt = GetSafeLng(objRs("COMMON_CNT"), 0)

			' кол-во групп
			ind2 = IIf(nStep = 1, 1, 3)
			If bCombyDir Then ind2 = ind2 + 1
			arr(ind, ind2) = arr(ind, ind2) + nClsCnt

			nTotalAreaCnt = nTotalAreaCnt + nAreaCnt
			nTotalSeats = nTotalSeats + nSeats

			' Круглосуточные
			bDayNight = (ind < 26) And Not bCombyDir And (nStayRegimeID = kStayRegime_DayNight)
			If bDayNight Then
				arr(26, ind2) = arr(26, ind2) + nClsCnt
			End If

			' кол-во детей
			ind2 = ind2 + 5

			If bCombyDir Then
				' для "комбинированных" строк для детей - детей без ограничений по здоровью считаем в отдельной колонке
				arr(ind, ind2) = arr(ind, ind2) + (nStudCnt - nCommonCnt)
				arr(4, ind2) = arr(4, ind2) + nCommonCnt
			Else
				arr(ind, ind2) = arr(ind, ind2) + nStudCnt
			End If

			If bDayNight Then
				arr(26, ind2) = arr(26, ind2) + nStudCnt
			End If

			arr(35, ind2) = arr(35, ind2) + nInvCnt
		End If

		objRs.MoveNext
	WEnd
End Sub

Function GetReportTable()
	GetReportTable = GetReportTable_Sum()
End Function

Function GetReportTable_Sum()
	Dim i

	strReport = strReport & GetTop() & "<br />"

	strReport = strReport & GetTableHeader()
	For i = 0 To 9
		strReport = strReport & GetRow(i, IIf(i = 0 Or i = 5, "totals", "text-buttom"))
	Next
	strReport = strReport & "</table>"

	strReport = strReport & GetBottom()

	strReport = strReport & GetManager()

	GetReportTable_Sum = strReport
End Function

Function GetRow(ind, strTRClass)
	Dim strRow, i, j, nCnt

	If strTRClass <> "" Then
		strRow = strRow & "<tr class=""" & strTRClass & """>" ' открывающаяся <tr> не всегда рисуется здесь
	End If
	strRow = strRow & "<td>" & arrRowTitles(ind) & "</td>"
	For i = 2 To UBound(arrData, 1)
		strRow = strRow & "<td>" & DB2HTML(arrData(i, ind)) & "</td>"
	Next
	strRow = strRow & "</tr>"

	GetRow = strRow
End Function

Function GetTop()
	GetTop = _
		"<table class=""table-print-num"">" & _
			"<tr><th>" & "Фактическое количество" & "</th><th>" & "&nbsp;" & "</th></tr>" & _
			"<tr class=""text-buttom""><td>" & nTotalAreaCnt & "</td><td>" & "групп" & "</td></tr>" & _
			"<tr class=""text-buttom""><td>" & nTotalSeats & "</td><td>" & "мест" & "</td></tr>" & _
		"</table>"
End Function

Function GetTableHeader()
	Dim arrSpecializations, currSpec

	arrSpecializations = objNSNET.GetDouGroupSpecializations()
	If Not IsArray(arrSpecializations) Then GenerateError (obLanguage("Common","kUnexpErr"))
	If UBound(arrSpecializations) <> (kSpecialsCount - 1) Then GenerateError (obLanguage("Common","kUnexpErr"))


	GetTableHeader = "<table class=""table-print-num"">" & _
		"<tr>"
	If bTotalBySchools Then
		GetTableHeader = GetTableHeader & GetManagementColumn(3)
		GetTableHeader = GetTableHeader & _
			"<th rowspan=""3"">" & obLanguage("ServAdmin","kShortEOName_") & "</th>"
	End If
	GetTableHeader = GetTableHeader & _
			"<th rowspan=""3"">" & "&nbsp;" & "</th>"

	GetTableHeader = GetTableHeader & _
		"<th rowspan=""3"">" & "ВСЕГО" & "</th>" & _
		"<th rowspan=""3"">" & "ВСЕГО без ГКП" & "</th>" & _
		"<th colspan=""22"">" & "в том числе" & "</th>" & _
		"<th>" & "из них" & "</th>" & _
		"<th colspan=""6"">" & "кроме того" & "</th>" & _
		"<th rowspan=""2"" colspan=""2"">" & "Количество закрытых групп" & "</th>" & _
		"<th rowspan=""3"">" & "Кол-во детей-инвалидов, в том числе в ГКП" & "</th></tr>" & _
	GetHeader_TR() & _
		"<th>" & "Общеразвивающей направленности" & "</th>" & _
		"<th colspan=""12"">" & "Компенсирующей направленности" & "</th>" & _
		"<th colspan=""9"">" & "Оздоровительной направленности" & "</th>" & _
		"<th rowspan=""2"">" & "Круглосуточные" & "</th>" & _
		"<th rowspan=""2"">" & "Всего ГКП" & "</th>" & _
		"<th colspan=""2"">" & "из них  ГКП" & "</th>" & _
		"<th rowspan=""2"">" & "группы для детей раннего возраста" & "</th>" & _
		"<th rowspan=""2"">" & "группы по присмотру и уходу" & "</th>" & _
		"<th rowspan=""2"">" & "семейные дошкольные группы" & "</th>" & _
	GetHeader_TR()

	For Each currSpec In arrSpecializations
		GetTableHeader = GetTableHeader & _
		"<th>" & DB2HTML(currSpec.Name) & "</th>"
	Next

	GetTableHeader = GetTableHeader & _
		"<th>" & "общеразвивающей направленности" & "</th>" & _
		"<th>" & "компенсирующей направленности" & "</th>" & _
		"<th>" & "аренда" & "</th>" & _
		"<th>" & "спец. кабинеты" & "</th></tr>"

End Function
%>
