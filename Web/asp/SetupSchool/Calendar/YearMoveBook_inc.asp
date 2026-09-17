<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Movement/MoveBook_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim arrAward, nAwardDefault

Sub DrawSelectDocType(strForm, bAll, strChange)%>
	<td class="select">
		<select NAME="DOCTYPE" onChange="<%=strChange%>">
			<%If bAll Then%><option value="-2"<%=IIf( nDocType = -2," selected","")%>><%=obLanguage("Common","kAll")%></option><%End If%>
			<option value="<%=kDocType_YEAR%>"<%=IIf( nDocType = kDocType_YEAR," selected","")%>><%=obLanguage("Movement","kDocName_YEAR")%></option><%
			If CLng(strFunctionalityType)<>kFuncType_Add And CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
			<option value="<%=kDocType_STAY%>"<%=IIf( nDocType = kDocType_STAY," selected","")%>><%=obLanguage("Movement","kDocName_STAY")%></option><%
			End If%>
			<option value="<%=kDocType_GRADUATE%>"<%=IIf( nDocType = kDocType_GRADUATE," selected","")%>><%=obLanguage("Movement","kDocName_GRADUATE")%></option>
		</select>
	</td><%
End Sub

Sub InitAwardArray(bMiddleStep, bConditionalMvg)
	Dim arr

	If bMiddleStep Then
		ReDim arr(1,4)
		arr(0,0) = 1 : arr(0,1) = 6 : arr(0,2) = 7 : arr(0,3) = 8 : arr(0,4) = 9
		arr(1,0) = obLanguage("Movement","kAward1") : arr(1,1) = obLanguage("Movement","kAward6") : arr(1,2) = obLanguage("Movement","kAward7") : arr(1,3) = obLanguage("Movement","kAward8") : arr(1,4) = obLanguage("Movement","kAward9")
		nAwardDefault = 1

		If bConditionalMvg Then
			ReDim Preserve arr(1,5)
			arr(0,5) = 10
			arr(1,5) = obLanguage("Movement","kAward10")
			nAwardDefault = 10
		End If
	Else
		ReDim arr(1,6)
		arr(0,0) = 1 : arr(0,1) = 2 : arr(0,2) = 3 : arr(0,3) = 4 : arr(0,4) = 5 : arr(0,5) = 6 : arr(0,6) = 7
		arr(1,0) = obLanguage("Movement","kAward1") : arr(1,1) = obLanguage("Movement","kAward2") : arr(1,2) = obLanguage("Movement","kAward3") : arr(1,3) = obLanguage("Movement","kAward4") : arr(1,4) = obLanguage("Movement","kAward5") : arr(1,5) = obLanguage("Movement","kAward8") : arr(1,6) = obLanguage("Movement","kAward9")
		nAwardDefault = 2
	End If
	arrAward = arr
End Sub

Sub DrawAward(theAWARDTYPE)
	Dim i, nInd

	nInd = UBound(arrAward, 2)
	If Not IsDull(theAWARDTYPE) Then
		For i = 0 To UBound(arrAward, 2)
			If CLng(theAWARDTYPE) = arrAward(0, i) Then
				nInd = i
				Exit For
			End If
		Next
	End If
	Response.Write "<td>" & DB2HTML( arrAward(1, nInd)) & "</td>"
End Sub
%>
