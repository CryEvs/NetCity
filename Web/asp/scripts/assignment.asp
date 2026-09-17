<% ' © 2007-2015 IRTech. All rights reserved.
Const kTKRColor = "#E9967A"
Const kLengthAssignmentType	 = 3

Dim dctAssignmentTypes
Dim clsAssignmentTypes

Sub InitAssignmentTypesHelper()
	Set clsAssignmentTypes = New AssignmentTypes
End Sub

Sub ShowTypesLegend(bWithoutHomeAssType)
	Dim i, objItems, arrTypes
	Set objItems = objNSNET.GetAssignmentTypes(False, False, bWithoutHomeAssType)

	If not Module_QA_Available() Then
		objItems.Filter = "TYPEID <> " & PreDefinedAssignmentType_DKR
	End If

	arrTypes = objItems.GetRows(,,Array("ABBR", "NAME", "TYPEID"))
	
	%><div class="legend print-block"><%
		If kIsTKR Then
			%><p><span class="legend-label" style="background-color:#DCDCDC"></span><span class="legend-description"> — <%=DB2Html(arrTypes(1, i))%></span></p><%
		End If
		For i = 0 To UBound( arrTypes, 2 ) Step 3%>
			<div>
				<p><span class="legend-label"><%=DB2Html(arrTypes(0, i))%></span><span class="legend-description"> — <%=DB2Html(arrTypes(1, i))%></span></p>
				<%If i + 1 <= UBound( arrTypes, 2 ) Then%>
				<p><span class="legend-label"><%=DB2Html(arrTypes(0, i + 1))%></span><span class="legend-description"> — <%=DB2Html(arrTypes(1, i + 1))%></span></p>
				<%End If%>
				<%If i + 2 <= UBound( arrTypes, 2 ) Then%>
				<p><span class="legend-label"><%=DB2Html(arrTypes(0, i + 2))%></span><span class="legend-description"> — <%=DB2Html(arrTypes(1, i + 2))%></span></p>
				<%End If%>
			</div><%
		Next%>
	</div><%
End Sub

Sub ShowTypesCombo(strAssignmentType, bTKR, bDrawDKR)
	Dim objItems, nId

	'выкинут ДЗ так как оно теперь создается с явной передачей параметра
	Set objItems = clsAssignmentTypes.GetTypesByParam(false, bTKR, bDrawDKR)
	
	%><select name="AType" class="form-control" onchange="showConsiderDKR(this)"><%
		If strAssignmentType = 0 Then
			%><option value="0" selected="selected"><%=obLanguage("Assignment","kATChooseType")%></option><%
		End If
		For Each nId In objItems%>
			<option<%If strAssignmentType=nId Then%> selected="selected" <%End If%> value="<%=nId%>"><%=objItems(nId)%></option><%
		Next
	%></select><%
End Sub

Sub ShowAttendanceLegend()
	rw GetAttendanceLegend()
End Sub

Function GetLegendItem(byval kUps, byval kUp)
	kUps = DB2Html(obLanguage("Assignment",kUps))
	kUp = DB2Html(obLanguage("Assignment",kUp))
	GetLegendItem =  "<p><span class=""legend-label"">" & kUps & "</span><span class=""legend-description""> — " & kUp & "</span></p>"
End Function

Function GetAttendanceLegend()
	Dim strReport
		strReport ="<div class=""legend""><div>"
			strReport = strReport & GetLegendItem("kARMissedUPS", "kARMissedUP")
			strReport = strReport & GetLegendItem("kARMissedIllS", "kARMissedIll")
			strReport = strReport & GetLegendItem("kARMissedNPS", "kARMissedNP")
		strReport = strReport & "</div><div>"
			strReport = strReport & GetLegendItem("kARMissedS", "kARMissed")
			strReport = strReport & GetLegendItem("kARWasLateS", "kARWasLate")
		strReport = strReport & "</div><div>"
		If strFunctionalityType <> kFuncType_PreSchool Then
			strReport = strReport & GetLegendItem("kARReleasedS", "kARReleased")
		End If
		strReport = strReport & "</div></div>"
	GetAttendanceLegend = strReport
End Function

'Вспомогательный класс для работы с настройками школы
Class AssignmentTypes
	Private m_AssignmentTypes
	Private arr_AssignmentTypes

	'Метод получения типов
	Public Function GetTypes()
		If IsEmpty(m_AssignmentTypes) Then
			Dim objItems

			Set objItems = objNSNET.GetAssignmentTypes(False, True, False)
			If objItems.EOF Then GenerateError obLanguage("SchoolSettings","kCantGetAssignmentTypes")
			Set dctAssignmentTypes = Server.CreateObject("Scripting.Dictionary")
			While Not objItems.EOF
				Call dctAssignmentTypes.Add(objItems("TYPEID").Value, objItems("NAME").Value)
				objItems.MoveNext
			Wend
			Set m_AssignmentTypes = dctAssignmentTypes
		End If
		Set GetTypes = m_AssignmentTypes
	End Function

	Public Function GetType(abbr)
		 GetType = GetTypes()(abbr)
	End Function

	Public Function GetTypesByParam(bIsHome, bIsTKR, bDrawDKR)
		Dim dctBufer
		Set dctBufer = CopyDct(GetTypes())
		Set GetTypesByParam = FilterTypesByParam(dctBufer, bIsHome, bIsTKR, bDrawDKR)
	End Function

	Private Function CopyDct(byVal dct)
		Dim dctBufer, key
		Set dctBufer = Server.CreateObject("Scripting.Dictionary")
		For Each key In dct
			Call dctBufer.Add(key, dct(key))
		Next
		Set CopyDct = dctBufer
	End Function

	Private Function FilterTypesByParam(byVal dct, bIsHome, bIsTKR, bDrawDKR)
		Dim strHomeWorkS, strTKRThemeS, strDKRS
		If Not bIsHome Then
			strHomeWorkS = PreDefinedAssignmentType_HomeWork
			dct.Remove(strHomeWorkS)
		End If
		If Not bIsTKR Then
			strTKRThemeS = PreDefinedAssignmentType_TKR
			dct.Remove(strTKRThemeS)
		End If
		If Not bDrawDKR Then
			strDKRS = PreDefinedAssignmentType_DKR
			dct.Remove(strDKRS)
		End If
		Set FilterTypesByParam = dct
	End Function
End Class




%>
