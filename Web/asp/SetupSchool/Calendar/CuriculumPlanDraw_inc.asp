<% ' © 2007-2008 IRTech. All rights reserved.

' Возвращает вариант записи для readonly
' bRO не всегда = readonly
Function PrintHours( strVal, nClassRecCurr, nClassRecMax, bRO )
	Dim strRet, bEquals, strVals, strVal_0, strValCurr

	If bViewByGrade Then ' readonly = True here!
		strRet = ""
		If nClassRecCurr = 0 Then
			ReDim arrGradeClassesValues(nClassRecMax)
		End If
		arrGradeClassesValues(nClassRecCurr) = GetSafeStr(strVal, -1, "-")
		If nClassRecCurr = nClassRecMax Then
			strVal_0 = GetSafeStr(arrGradeClassesValues(0), -1, "-")
			strVals = strVal_0
			bEquals = True
			For i = 1 To nClassRecMax
				strValCurr = GetSafeStr(arrGradeClassesValues(i), -1, "-")
				If bEquals Then
					If strVal_0 <> strValCurr Then bEquals = False
				End If
				strVals = strVals & " " & strValCurr
			Next
			If bEquals Then
				strVals = strVal_0
				If strVals = "-" Then strVals = ""
			End If
			strRet = "<TD nowrap" & IIf(bEquals, strAttr, " class=""xtl"" ") & ">" & DB2HTML(strVals) &"</TD>"
			Response.Write strRet
		End If
	Else
		strRet = "<TD" & strAttr & ">" & DB2HTML(strVal) & "</TD>"
		If bRO Then
			Response.Write strRet
		Else
			%><TD<%=strAttr%>><INPUT TYPE="text" NAME="HOURS" VALUE="<%=strVal%>" MAXLENGTH="5" SIZE="<%=TextInputSize(2)%>" OnChange="dataChanged()"></TD><%
		End If
	End If
	PrintHours = strRet
End Function
%>
