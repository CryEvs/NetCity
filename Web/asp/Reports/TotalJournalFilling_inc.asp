<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kViewType_BySubjects = 1
Const kViewType_ByTeachers = 2

Dim nViewType, nTeachersType
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate
Dim objJournalFilling, objPivot, objPivotIup

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNTotalJournalFilling")
End Function

Function GetPageParams()
	If nViewType = kViewType_BySubjects Then
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
			obLanguage("Reports","strViewType"), obLanguage("Calendar","kForSubjects_2", strFunctionalityType), _
			obLanguage("Common","kStartDate"), strStartDate, _
			obLanguage("Common","kEndDate"), strEndDate)
	Else
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
			obLanguage("Reports","strViewType"), obLanguage("Calendar","kForTeachers_2", strFunctionalityType), _
			obLanguage("Reports","kShowTeachers", strFunctionalityType), IIf(nTeachersType = -1, obLanguage("Common", "kAll_2"), obLanguage("Reports", "kNotFilledLessons", strFunctionalityType)), _
			obLanguage("Common","kStartDate"), strStartDate, _
			obLanguage("Common","kEndDate"), strEndDate)
	End If
End Function

Sub specialRead()
	nViewType = GetSafeLng(Request("ViewType"), 1)
	nTeachersType = GetSafeLng(Request("TeachersType"), -1)
	SetScriptTimeOut 900
	ReadDateRange
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stViewTypeBySubjOrTeacher, nViewType)
	Call obTokenMgr.SetData(strToken, stTeachersType, nTeachersType)
	Call obTokenMgr.SetData(strToken, stStartDate, dtStartDate)
	Call obTokenMgr.SetData(strToken, stEndDate, dtEndDate)
End Sub

Sub specialMain()
	Dim component
	Dim strErrMessage

	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")

	Call component.CalcTotalJournalFilling(strCurrYearID, nViewType, nTeachersType, dtStartDate, dtEndDate, objPivot, objPivotIup)

	strErrMessage = ""
End Sub

Sub onDrawPage()
	rw GetReportNameAndNumber() & GetPageTitleFor( GetPageTitle() & " " & GetTitleEx(), GetPageParams() )
	DrawReportTable
	rw GetPageVer()
End Sub

Sub DrawReportTable()
	Dim row, cell, value
	Dim X_Axis, Y_Axis, x, y
	Dim sumUnfilledLessons, sumUnfilledHomework, style, sumTotal, val
	Dim totals, lessons, homeworks

	'Для классических классов%>
	<table class = "table-print-num">
		<tr>
			<th>&nbsp;</th>
			<th colspan="<%=(objPivot.X_Axis.Count() * 3)%>"><%=obLanguage("Calendar", "kClasses")%></th>
		</tr>
		<tr>
			<th class="text-left"><%
	If nViewType = kViewType_BySubjects Then%>
				<%=obLanguage("Common", "kSubject")%>
			</th><%
	Else%>
				<%=obLanguage("Common", "kTeacher", strFunctionalityType)%>
			</th><%
	End If

	For Each x in objPivot.X_Axis%>
			<th colspan="3"><%=x%></th><%
	Next%>
		</tr><%

	Set X_Axis = objPivot.X_Axis
	Set Y_Axis = objPivot.Y_Axis

	'Кол-во незаполненных тем/ДЗ%>
		<tr>
			<th class="text-left"><%=(obLanguage("Reports", "kNumberUnfilledOrder1") & " " & obLanguage("Reports", "kNumberUnfilledOrder2"))%></th><%
	For Each x in X_Axis
		sumUnfilledLessons = 0
		sumUnfilledHomework = 0
		sumTotal = 0
		style = Empty
		For Each y in Y_Axis
			Set cell = objPivot.GetCross(x, y)
			If Not cell Is Nothing Then
				If Not IsEmpty(cell.Value) Then
					Set value = cell.Value
					sumUnfilledLessons = sumUnfilledLessons + (value.TotalNumberLessons - value.NumberFilledLessons)
					sumUnfilledHomework = sumUnfilledHomework + (value.TotalNumberLessons - value.NumberFilledHomework)
					sumTotal = sumTotal + value.TotalNumberLessons
				End If
			End If
		Next
		If sumTotal <> 0 Then
			val = sumTotal - ((sumUnfilledLessons + sumUnfilledHomework) / 2)
			style = GetCellTextStyle(sumTotal, val, False)
			If IsEmpty(style) Then style = " style=""font-weight:bold;background:green;"""
		End If%>
			<td class="cell-text-center" colspan="3"<%=style%>><%=(sumUnfilledLessons & "/" & sumUnfilledHomework)%></td><%
	Next

	For Each row in objPivot.Rows%>
		<tr>
			<td class="cell-text"><%=row.Y%></td><%
		For Each cell in row.Cells
			If IsEmpty(cell.Value) Then%>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td><%
			Else
				Set value = cell.Value
				totals = value.TotalNumberLessons
				lessons = value.NumberFilledLessons
				homeworks = value.NumberFilledHomework%>
			<td><%=totals%></td>
			<td<%=GetCellTextStyle(totals, lessons, True)%>><%=lessons%></td>
			<td<%=GetCellTextStyle(totals, homeworks, True)%>><%=homeworks%></td><%
			End If
		Next%>
		</tr><%
	Next%>
	</table><%

	'Для ИУП%>
	<br>
	<table class="table-print-num">
		<tr><%
	If nViewType = kViewType_BySubjects Then%>
			<th colspan="4">
				<%=obLanguage("ClassManagement", "kSubjectGroups")%>
			</th>
			<th class="text-left">
				<small class="text-vertical text-compact"><i><%=obLanguage("Reports", "kNumberUnfilledOrder1")%></i></small>
				<small class="text-vertical text-compact"><i><%=obLanguage("Reports", "kNumberUnfilledOrder2")%></i></small>
			</th>
		</tr><%
	Else%>
			<th>&nbsp;</th>
			<th colspan="<%=(objPivotIup.X_Axis.Count() * 3)%>"><%=obLanguage("ClassManagement", "kSubjectGroups")%></th>
			<th nowrap class="text-left vertical" rowspan="2">
				<small class="text-vertical text-compact"><i><%=obLanguage("Reports", "kNumberUnfilledOrder1")%></i></small>
				<small class="text-vertical text-compact"><i><%=obLanguage("Reports", "kNumberUnfilledOrder2")%></i></small>
			</th>
		</tr>
		<tr>
			<th class="text-left"><%=obLanguage("Common", "kTeacher", strFunctionalityType)%></th><%

		For Each x in objPivotIup.X_Axis%>
			<th colspan="3"><%=x%></th><%
		Next%>
		</tr><%
	End If

	For Each row in objPivotIup.Rows

		' Для расчета Кол-во незаполненных тем/ДЗ
		sumUnfilledLessons = 0
		sumUnfilledHomework = 0
		sumTotal = 0
		style = Empty
		val = 0%>

		<tr><td class="cell-text"><%=row.Y%></td><%
		For Each cell in row.Cells
			If IsEmpty(cell.Value) Then%>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td><%
			Else
				Set value = cell.Value
				totals = value.TotalNumberLessons
				lessons = value.NumberFilledLessons
				homeworks = value.NumberFilledHomework

				' Накопление в суммы кол-ва незаполненных тем, кол-ва незаполненных дз, кол-ва заданий
				sumUnfilledLessons = sumUnfilledLessons + (totals - lessons)
				sumUnfilledHomework = sumUnfilledHomework + (totals - homeworks)
				sumTotal = sumTotal + totals
				%>

			<td><%=totals%></td>
			<td<%=GetCellTextStyle(totals, lessons, True)%>><%=lessons%></td>
			<td<%=GetCellTextStyle(totals, homeworks, True)%>><%=homeworks%></td><%

			End If
		Next

		' Заполнение колонки Кол-во незаполненных тем/ДЗ
		If sumTotal <> 0 Then
			val = sumTotal - ((sumUnfilledLessons + sumUnfilledHomework) / 2)
			style = GetCellTextStyle(sumTotal, val, False)
			If IsEmpty(style) Then style = " style=""font-weight:bold;background:green;"""
		End If%>
			<td class="cell-text-center" <%=style%>><%=(sumUnfilledLessons & "/" & sumUnfilledHomework)%></td><%
		%>

		</tr><%
	Next
	%>
	</table><%
End Sub

Function GetCellTextStyle(totalNum, filledNum, IsTextColor)
	Dim val
	Dim tdAttr
	
	If totalNum = 0 Then Exit Function

	tdAttr = "font-weight:bold;background:"
	If IsTextColor Then tdAttr = "font-weight:bold;color:"

	val = filledNum / totalNum
	If val < 0.5 Then 
		GetCellTextStyle = " style=""" & tdAttr & "red;"""
	ElseIf val >= 0.5 And val <= 0.8 Then
		GetCellTextStyle = " style=""" & tdAttr & "orange;"""
	ElseIf val > 0.8 And val < 1 Then
		GetCellTextStyle = " style=""" & tdAttr & "green;"""
	End If
End Function
%>