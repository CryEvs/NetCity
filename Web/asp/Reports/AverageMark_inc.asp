<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

'Тип усреднения оценок
Const AverageMark_ArithmeticMean = 0
Const AverageMark_Weighted = 1

'Объект оценка
'Используется пока только при расчете средней оценки
Class Mark
	Private m_Mark
	Private m_DueDate
	Private m_MarkWeight

	'Инициализация/псевдоконструктор
	Public Function Init(mark, weight, duedate)
		m_Mark = mark
		m_DueDate = duedate
		m_MarkWeight = weight
		Set Init = Me
	End Function

	'Проверка на актуальность оценки(влияние на среднюю оценку)
	Public Function IsActual()
		IsActual = True
		If clsSchoolSettings.IsWeghtedAverageMark Then
			If IsNull(m_Mark) Then
				' Не учитываем весовые "точки", которые находятся в будущем
				If IsDull(m_DueDate) Then
					IsActual = False
				Else
					If DateDiff( "d", NSNow(), m_DueDate, 0, 0 ) >= 0 Then
						IsActual = False
					End If
				End If
			End If
		End If
	End Function
End Class

'Калькулятор средней оценки
Class AverageMarkCalc
	Private m_SumMark
	Private m_MarkCount
	Private m_TotalWeight
	Private m_MinMark
	Private m_MaxMark
	Private m_AverageMethod

	Public Sub Class_Initialize()
		Dim schoolSettingMarksAveraging

		schoolSettingMarksAveraging = clsSchoolSettings.GetSetting(kSSIndex_MarksAveraging)
		If schoolSettingMarksAveraging = 1 Then
			m_AverageMethod = AverageMark_Weighted
		Else
			m_AverageMethod = AverageMark_ArithmeticMean
		End If

		m_MaxMark = CLng(clsSchoolSettings.GetSetting(kSSIndex_MaxMark))
		m_MinMark = CLng(clsSchoolSettings.GetSetting(kSSIndex_MinMark))

		m_MarkCount = 0
		m_SumMark = 0
		m_TotalWeight = 0
	End Sub

	'Добавление в расчет "точки"
	Public Sub AddMandatoryMark(weight)
		If m_AverageMethod = AverageMark_Weighted Then
			m_TotalWeight = m_TotalWeight + weight
		End If
	End Sub

	'Добавление оценки в расчет
	Public Sub AddMark(markResult, markWeight)
		m_MarkCount = m_MarkCount + 1
		m_TotalWeight = m_TotalWeight + markWeight
		If markResult = 0 Then Exit Sub
		
		If m_AverageMethod = AverageMark_ArithmeticMean Then 
			m_SumMark = m_SumMark + markResult
		ElseIf m_AverageMethod = AverageMark_Weighted Then
			m_SumMark = m_SumMark + (markResult - m_MinMark) * markWeight
		End If
	End Sub
	
	'Расчет средней оценки
	Public Property Get AverageMark
		If m_MarkCount = 0 Then
			AverageMark = 0
			Exit Property
		End If
		If m_AverageMethod = AverageMark_ArithmeticMean Then
			AverageMark = Round(m_SumMark/CDbl(m_MarkCount),2)
		ElseIf m_AverageMethod = AverageMark_Weighted Then
			If m_TotalWeight = 0 Then m_TotalWeight = 1
			AverageMark = Round((m_SumMark/CDbl(m_TotalWeight)) + m_MinMark,2)
		End If
	End Property
End Class
%>