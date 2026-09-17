<% ' © 2007-2012 IRTech. All rights reserved.

Dim dictSchoolInfo

'AutoCalcStub
Sub AutoCalcShoolInfo()
End Sub

Sub AutoCalcJSON()
	Dim result

	Set result = new JSONResult

	Set dictSchoolInfo = Server.CreateObject("NetCity.Storage")
	If bIsEducManager Then
		Call AutoCalcEMInfo()
	Else
		AutoCalc()
	End If
	Call result.AddData("calcvalues", dictSchoolInfo.Values)
	Response.Clear
	rw result
	Response.End
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = False
End Function

Sub CalcTypeValue(id, ByRef typ, ByRef val)
	Dim typeValueInfo
	val = "" : typ = ""
	If IsEmpty(dictSchoolInfo) Then Exit Sub
	If Not dictSchoolInfo.Contains(id) Then Exit Sub
	typeValueInfo = dictSchoolInfo(id)
	typ = typeValueInfo(0)
	val = typeValueInfo(1)
End Sub

Function GetParamValue(id)
	Dim typeValueInfo
	If IsEmpty(dictSchoolInfo) Then Exit Function
	If Not dictSchoolInfo.Contains(id) Then Exit Function

	typeValueInfo = dictSchoolInfo(id)
	GetParamValue = typeValueInfo(1)
End Function

Function ITSEx(id, l, ml, bDisabledFormCell)
	Dim str, value, i, typ, strDisabledFormCell, strReadonlyAndKeyPress

	str = "" : value = "" : typ = ""
	Call CalcTypeValue(id,typ,value)
	strDisabledFormCell = IIF(bDisabledFormCell, "class=""form-cell-disabled""", "")
	strReadonlyAndKeyPress = IIF(bDisabledFormCell, " readonly onkeypress=""return false;""", "")

	If Not readonly Then
		If IsNull(l) Then l = 5
		If IsNull(ml) Then ml = 10
		str = "<input " & strDisabledFormCell & " type=""text"" id=""" & id & """ name=""" & id & """ size=""" & TextInputSize(l) & """ maxlength=""" & ml & """"
		If Not IsNull(value) And value <> "" Then str = str & " value=""" & DB2HTML(value) & """"
		str = str & strReadonlyAndKeyPress & " >"
	Else
		If Not IsNull(value) And value <> "" Then
			str = "<b>" & value & "</b>"
		Else
			str = "&nbsp;"
		End If
	End If

	ITSEx = str
End Function

Function ITS(id, l, ml)
	ITS = ITSEx(id, l, ml, True)
End Function

Sub SetLoadedOSHValue( theID, theValue )
	dictSchoolInfo(theID)=Array(theID, CStr(theValue))
End Sub

Function FormatValueIndex( theIndex )
	FormatValueIndex = CStr( theIndex )
	If Len( FormatValueIndex ) = 1 Then FormatValueIndex = "0" & FormatValueIndex
End Function

Sub ClearAvtoCalcFields(sName,nRowStart,nRowFinish,nColStart, nColFinish)
	Dim nCount,i,j

	For j=nColStart to nColFinish
		For i=nRowStart to nRowFinish
			Call SetLoadedOSHValue( SName & FormatValueIndex(i)& IIF(nColStart>0 And nColFinish>0,FormatValueIndex(j),""), "")
		Next
	Next
End Sub

dim params

Function IT(id, l, ml)
	IT = ITWithClass(id, l, ml, "")
End Function

Function ITWithClass(id, l, ml, strClass)
	Dim str, value, i, typ

	If Not IsDull(strClass) Then strClass = " class=""" & strClass & """"

	ITWithClass = ITEx(id, l, ml, strClass)
End Function

Function ITEx(id, l, ml, strAuth)
	Dim str, value, i, typ
	
	str = "" : value = "" : typ = ""
	Call CalcTypeValue(id,typ,value)
	If Not readonly Then
		If IsNull(l) Then l = 5
		If IsNull(ml) Then ml = 10
		str = "<input type=""text""" & strAuth & " id=""" & id & """ name=""" & id & """ size=""" & TextInputSize(l) & """ maxlength=""" & ml & """"
		If Not IsNull(value) And value <> "" Then str = str & " value=""" & DB2Value(value) & """"
		str = str & " OnChange=""return OSHdataChanged(this, '" & typ & "');"">"
	Else
		str = DB2HTML(value)
	End If

	ITEx = str
End Function

Function ITDisabled(id, l, ml, bDisabledFormCell)
	Dim strAuth
	If bDisabledFormCell Then strAuth = "form-cell-disabled readonly onkeypress=""return false;"""
	ITDisabled = ITWithClass(id, l, ml, strAuth)
End Function

Function Quot(str)
	Quot = """"&str&""""
End Function

Function ISelect(id, arrOpt, di)
	ISelect = ISelectWithAuth(id, Empty, arrOpt, di)
End Function

Function ISelectWithAuth(id, auth, arrOpt, di)
	Dim str, value, i, typ
	str = "" : value = "" : typ = ""
	Call CalcTypeValue(id,typ,value)
	If Not readonly Then
		str = "<select id=""" & id & """ name=""" & id & """" & auth & " OnChange=""return OSHdataChanged(this, '" & typ & "');"">"

		str = str & "<option value="""">&nbsp;</option>"
		i=0
		do while i<=Ubound(arrOpt)
			str = str & "<option value=" & Quot(arrOpt(i)) & IIf (UCase(value)=UCase(arrOpt(i)) ," selected","") & "> "
			i=i+di
			str = str & arrOpt(i) & "</option>"
			i=i+1
		Loop

		str = str & "</select>"
	Else
		If CLng(di) = 0 Then
			str = value
		Else
			i=0
			Do While i <= Ubound(arrOpt)
				If UCase(value) = UCase(arrOpt(i)) Then
					i=i+di
					str = arrOpt(i)
					Exit Do
				End If

				i=i+di
				i=i+1
			Loop
		End If
		'str = "<div " & auth & " disabled>" & DB2HTML(str) & "</div>"
		str = DB2HTML(str)
	End If

	ISelectWithAuth = str
End Function

Function ISelectText(id, obj, fieldName)
	Dim str, value, i, typ, arr
	str = "" : value = "" : typ = ""
	Call CalcTypeValue(id,typ,value)
	If Not readonly Then
		str = "<select id=""" & id & """ name=""" & id & """"" OnChange=""return OSHdataChanged(this, '" & typ & "');"">"

		str = str & "<option value="""">&nbsp;</option>"
		arr = obj.GetRows(,,Array("ITEMNAME"))
		i=0
		do while i<=Ubound(arr, 2)
			str = str & "<option value=" & Quot(arr(0, i)) & IIf (UCase(value)=UCase(arr(0, i)) ," selected","") & "> "
			str = str & arr(0, i) & "</option>"
			i=i+1
		Loop

		str = str & "</select>"
	Else
		str = DB2HTML(value)
	End If

	ISelectText = str
End Function

Function IBArrValue(id,arr)
	IBArrValue = ISelect(id, arr, 0)
End Function

Function IB(id)
	Dim str, value, i, typ
	str = "" : value = "" : typ = ""
	Call CalcTypeValue(id,typ,value)

	If Not readonly Then
		str = ISelect(id, Array(obLanguage("Common","kYes"), obLanguage("Common","kNo")), 0)
	Else
		str = DB2HTML(value)
	End If

	IB = str
End Function

'Да - 1; Нет - 0
Function IB0(id)
	IB0 = IB0Ex(id, Empty)
End Function

Function IB0Disabled(id, isDisabled)
	IB0Disabled = IB0(id)
	If isDisabled Then IB0Disabled = IB0Ex(id, " disabled ")
End Function

Function IB0Ex(id, auth)
	Dim str, value, i, typ
	Dim strValue
	str = "" : value = "" : typ = ""
	Call CalcTypeValue(id,typ,value)
	value = GetSafeLng(value, -1)
	If Not readonly Then
		str = ISelectWithAuth(id, auth, Array(1, obLanguage("Common","kYes"), 0, obLanguage("Common","kNo")), 1)
	Else
		Select Case value
		Case 1
			str = obLanguage("Common","kYes")
		Case 0
			str = obLanguage("Common","kNo")
		Case Else 
			str = "&nbsp;"
		End Select
	End If

	IB0Ex = str
End Function

'Да - 1; Нет - 2
Function IB2(id)
	Dim str, value, i, typ
	str = "" : value = "" : typ = ""

	Call CalcTypeValue(id,typ,value)

	If Not readonly Then
		str = ISelect(id, Array(1, obLanguage("Common","kYes"), 2, obLanguage("Common","kNo")), 1)
	Else
		Select Case value
		Case 1
			str = obLanguage("Common","kYes")
		Case 2
			str = obLanguage("Common","kNo")
		End Select
	End If

	IB2 = str
End Function

Function ITA(id, cols, rows, strClass, strAux)
	Dim str, value, i, typ

	str = "" : value = "" : typ = ""

	Call CalcTypeValue(id,typ,value)

	If Not readonly Then
		str = ShowTextAreaEx(id, rows, cols, "return OSHdataChanged(this, '" & typ & "');", value, strClass, strAux)
	Else
		str = DB2HTML(value)
	End If

	ITA = str
End Function

Function LPad2(nVal)
	LPad2 = LPad(nVal,2)
End Function

Sub DrawFormRows(arrRows, nCols, strSection)
	dim i, nRow, szRow, szCell, bSum, szArr
	nRow = 0%>
<!--0 row-->
	<tr align="center" valign="middle"><%For i = 1 To 30%><td><%=i%></td><%Next%></tr><%
	Do While nRow <= Ubound(arrRows)
		szArr = arrRows(nRow)
		If IsArray(szArr) Then
			bSum=(szArr(1)=1)
			szRow = szArr(0)
		Else
			szRow=szArr
			bSum=Instr(szRow, "сумма стр")
		End If
		szRow = Replace(szRow, " ", "&nbsp;&nbsp;")
		If bSum Then szRow = "<b>" & szRow & "</b>"
		nRow = nRow+1
		%>
	<!--<%=nRow%> row-->
	<tr align="center" valign="middle">
		<td align="left"><%=szRow%></td>
		<td><%=LPad2(nRow)%></td><%
			for i = 3 to nCols
				szCell = "T" & strSection & LPad2(nRow) & LPad2(i)
				If bSum Then szCell = ITS(szCell, 4, 5 ) Else szCell = IT(szCell, 4, 5 )
				rw "<td>" & szCell & "</td>"
			next%>
	</tr><%
	Loop
End Sub

Sub DrawLine(nSection, nRowCount, nColCount)
	Dim i
	For i = 3 to nRowCount
		Response.Write("<td align='center'>" & IT(GetOshFieldName(nSection, nColCount, i ), 4, 5 ) & "</td>")
	Next
End Sub

Function DrawIB0Line(nSection, nRowCount, nColCount)
	Dim i

	For i = 3 to nColCount
		Response.Write("<td align='center'>" & IB0(GetOshFieldName(nSection, nRowCount, i )) & "</td>")
	Next
End Function

Sub DrawLineWithSumCols(nSection, nRowCount, nColCount, arrSumCols)
	Dim i, j, bSumCell
	For i = 3 to nRowCount
		bSumCell = False
		For j = 0 to UBound(arrSumCols)
			If arrSumCols(j) = i Then bSumCell = True: Exit For
		Next
		If bSumCell Then
			Response.Write("<td align='center'>" & ITS(GetFieldName(nSection, nColCount, i ), 4, 5 ) & "</td>")
		Else
			Response.Write("<td align='center'>" & IT(GetFieldName(nSection, nColCount, i ), 4, 5 ) & "</td>")
		End If
	Next
End Sub

Sub DrawLineWithEmptyAndSum(nSection, nEndCol, nRowNumber, arrEmptyCell, arrSumCols)
	Dim i, j, bEmptyCell, bSumCell
	For i = 3 to nEndCol
		bEmptyCell = False
		bSumCell = False
		For j = 0 to UBound(arrEmptyCell)
			If arrEmptyCell(j) = i Then bEmptyCell = True: Exit For
		Next
		For j = 0 to UBound(arrSumCols)
			If arrSumCols(j) = i Then bSumCell = True: Exit For
		Next
		If bEmptyCell Then 
			Response.Write("<td align='center'>X</td>")
		ElseIf bSumCell Then
			Response.Write("<td align='center'>" & ITS(GetFieldName(nSection, nRowNumber, i ), 4, 5 ) & "</td>")
		Else
			Response.Write("<td align='center'>" & IT(GetFieldName(nSection, nRowNumber, i ), 4, 5 ) & "</td>")
		End If
	Next
End Sub

Sub DrawSLine(nSection, nColCount, nRowCount)
	Dim i
	
	For i = 3 to nColCount
		Response.Write("<td align='center'>" & ITS(GetFieldName(nSection, nRowCount, i), 4, 5 ) & "</td>")
	Next
End Sub

Sub DrawWithSumLine(nSection, nColCount, nRowCount, sumColIndex)
	Dim i

	For i = 3 to nColCount
		If i <> sumColIndex Then
			Response.Write("<td align='center'>" & IT(GetFieldName(nSection, nRowCount, i), 4, 5 ) & "</td>")
		Else
			Response.Write("<td align='center'>" & ITS(GetFieldName(nSection, nRowCount, i), 4, 5 ) & "</td>")
		End If
	Next
End Sub

Function GetFieldName(nSection, nRow, nCol)
	On Error Resume Next
	Dim strColPart

	If Not IsEmpty(nCol) Then strColPart = LPad2(nCol)
	GetFieldName = "T" & LPad2(nSection) & LPad2(nRow) & strColPart
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Function

Function DrawInputs(section,nstr,firstCol,lastCol)
	DrawInputs = DrawInputsEx(section,nstr,firstCol,lastCol, 4, 5)
End Function

Function DrawInputsEx(section,nstr,firstCol,lastCol, l, ml)
	Dim i

	For i = firstCol to lastCol
		Response.write "<td>" & IT(GetFieldName(section,nstr,i),l, ml ) & "</td>"
	Next
End Function

Function DrawInputsWithTotals(nstr,firstCol,lastCol,groupid,arrTotals)
	DrawInputsWithTotals = DrawInputsWithTotalsEx(nstr,firstCol,lastCol,groupid,arrTotals,4,5)
End Function

Function DrawInputsWithTotalsEx(nstr,firstCol,lastCol,groupid,arrTotals, l, ml)
	DrawInputsWithTotalsEx = DrawInputsWithTotalsExDisabled(nstr,firstCol,lastCol,groupid,arrTotals, l, ml, True)
End Function

Function DrawInputsWithTotalsExDisabled(nstr,firstCol,lastCol,groupid,arrTotals, l, ml, bDisabledFormCell)
	Dim i, j, bIsTotalCell, strITS
	
	If Not IsArray( arrTotals ) Then Exit Function
	For i = firstCol to lastCol
		bIsTotalCell = False
		For j = 0 to Ubound( arrTotals, 1 )
			If i = arrTotals(j) Then bIsTotalCell = True : Exit For
		Next
		If bIsTotalCell Then
			If bDisabledFormCell Then 
				strITS = ITS(GetFieldName(groupid,nstr,i),l, ml)
			Else
				strITS = ITSEx(GetFieldName(groupid,nstr,i),l, ml, False)
			End If
			Response.write "<td>" & strITS & "</td>"
		Else
			Response.write "<td>" & IT(GetFieldName(groupid,nstr,i),l, ml ) & "</td>"
		End IF
	Next
End Function

Sub CheckAvailabilityForm(formId, eoTypeId)
	Dim objInfo, statFromEnumItem, objHelper
	Dim strSchoolListWithoutSY, strNotAvailOSHSchoolList
	Dim bIsMNS

	bIsMNS = GetSafeLng(Request("MNS"), 0)=1

	Set objHelper = comHelper.AspHelper
	Set statFromEnumItem = objHelper.GetEnumItem(objHelper.Enums.SchoolForm, formId)
	Set objInfo = objSchoolFormComponent.GetEmSchoolsStatformAvalabilityInfo(filterEMID, strCommonYearID, formId, eoTypeId, true, bIsMNS)
	While Not objInfo.EOF
		If objInfo("syexists") <> 0 Then
			If objInfo("unclosed") = 1 Then strNotAvailOSHSchoolList = strNotAvailOSHSchoolList & " - " & Replace(objInfo("foundername"),"""","") & "\n"
		Else
			strSchoolListWithoutSY = strSchoolListWithoutSY & " - " & Replace(objInfo("foundername"),"""","") & "\n"
		End IF
		objInfo.MoveNext
	Wend
	If strSchoolListWithoutSY <> "" Then strWarningMessage = "Внимание!\nВ следующих ОО:\n" & strSchoolListWithoutSY & "Не был открыт выбранный учебный год!"
	If strNotAvailOSHSchoolList <> "" Then strWarningMessage = strWarningMessage & IIF(strWarningMessage<>"","\n\n","") & "Внимание!\nВ следующих ОО:\n" & strNotAvailOSHSchoolList & "недоступны формы " & statFromEnumItem.Name & " на выбранный учебный год!"
End Sub

Function GenerateArrayCells(section, rowStart, rowEnd, colStart, colEnd, nPadding)
	Dim ArrayClearValues(), i, j, cCount, rCount, index, count

	rCount = rowEnd - rowStart + 1
	cCount = colEnd - colStart + 1
	count = rCount * cCount
	ReDim ArrayClearValues(count - 1)

	index = 0
	For i = rowStart To rowEnd
		For j = colStart To colEnd
			ArrayClearValues(index) = "T" & LPad(section, nPadding) & FormatValueIndex( i ) & FormatValueIndex( j )
			index = index + 1
		Next
	Next
	GenerateArrayCells = ArrayClearValues
End Function
%>
