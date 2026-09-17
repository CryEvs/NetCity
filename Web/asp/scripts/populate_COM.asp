<% ' © 2007-2013 IRTech. All rights reserved.
'--------------------------------------------------------------------
' PopulateSelect( objRs, strIDField, strNameField, strCurrentField)
'  Populate Select from record set
'   objRs - record set
' strIDField - name of the ID field
' strNameField - name of the name field
' strCurrentField - ID of the current field
'
' returns record count
'--------------------------------------------------------------------
Function PopulateSelect( objRs, strIDField, strNameField, strCurID )
	Dim strRetHtml
	PopulateSelect = objHtmlHelper.PopulateSelect(objRs, strIDField, strNameField, strCurID, strRetHtml)
	rw strRetHtml
End Function

Function PopulateCheck( objRs, strNam, strIDField, strNameField, strCurIDs )
	Dim strMarkUp

	PopulateCheck = objHtmlHelper.PopulateCheck( objRs, strNam, strIDField, strNameField, strCurIDs, strMarkUp )
	rw strMarkUp
End Function

Sub DrawSelectRs(objCRS, strName, strID, strDisplay, curID, strNull, strChange)
	rw objHtmlHelper.DrawSelectRs(objCRS, strName, strID, strDisplay, curID, strNull, strChange)
End Sub

Sub DrawSelectRsProp(objCRS, strName, strID, strDisplay, curID, strNull, strChange, strProp)
	rw objHtmlHelper.DrawSelectRsProp(objCRS, strName, strID, strDisplay, curID, strNull, strChange, strProp)
End Sub

Sub DrawSelectRsEx(objCRS, strName, strID, strDisplay, curID, strChange, arrCustomOpts)
	rw objHtmlHelper.DrawSelectRsEx(objCRS, strName, strID, strDisplay, curID, strChange, arrCustomOpts)
End Sub

Sub DrawSimpleSelectArr(theArr, strName, curID, strNull, strChange)
	rw objHtmlHelper.DrawSimpleSelectArr(theArr, strName, curID, strNull, strChange)
End Sub

Sub DrawSelectArr( theArr, strName, curID, strNull, strChange )
	Dim arrCustomOptions
	If Not IsDull(strNull) Then
		arrCustomOptions = Array(-1, strNull)
	End If
	DrawSelectArrEx theArr, strName, curID, strChange, arrCustomOptions
End Sub

Sub DrawSelectArrEx( theArr, strName, curID, strChange, theArrCustomOptions )
	Dim bIsSingleOption, strAttrs, arrCustomOpts
	bIsSingleOption = True
	If IsDull(strChange) Then strChange = "dataChanged();"

	If Not IsArray( theArr ) Then 
		%>&nbsp;<input type="hidden" name="<%=strName%>" value="" /><%
		Exit Sub
	End If

	If strChange <> "_" Then
		strAttrs = "onChange=""" & strChange & """"
	End If

	If UBound( theArr, 2 ) > 0 Then
		bIsSingleOption = False
	ElseIf IsArray(theArrCustomOptions) Then
		bIsSingleOption = False
	End If

	If bIsSingleOption Then%>
		<input type="text" class="form-control" value="<%=DB2Value( theArr(1, 0) )%>" disabled>
		<input type="hidden" name="<%=strName%>" value="<%=DB2Value( theArr(0, 0) )%>"><%
	Else
		%><select class="form-control" Name="<%=strName%>" <%=strAttrs%>><%
			If IsArray(theArrCustomOptions) Then
				PopulateSelectArray convert1Dto2D(theArrCustomOptions), curID 
			End If 
			PopulateSelectArray theArr, curID 
		%></select><%
	End If
End Sub

Sub DrawSelectEnumItemArr(theArr, strName, curID, strNull, strChange)
	rw objHtmlHelper.DrawSelectEnumItemArr(theArr, strName, curID, strNull, strChange)
End Sub

Sub PopulateSelectArray(theArr, strCurID)
	Dim strID, strCCurID, i, j

	If IsNull(strCurID) Then
		Response.Write "<option value=""" & DB2Value( theArr( 0, 0 ) ) & """ selected>" & DB2HTML( theArr( 1, 0 ) ) & "</option>"
		For i = 1 To  UBound( theArr, 2 )
			strID = DB2Value( theArr( 0, i ) )
			Response.Write "<option value=""" & strID & """>" & DB2HTML( theArr( 1, i ) ) & "</option>"
		Next

		Exit Sub
	End If

	strCCurID = DB2Value(strCurID)
	For i = 0 To  UBound(theArr, 2)
		strID = DB2Value(theArr(0, i))

		If strID = strCCurID Then
			Response.Write "<option value=""" & strID & """ selected>" & DB2HTML( theArr( 1, i ) ) & "</option>"

			For j = i + 1 To  UBound(theArr, 2)
				strID = DB2Value(theArr(0, j))
				Response.Write "<option value=""" & strID & """>" & DB2HTML(theArr(1, j)) & "</option>"
			Next

			Exit Sub
		End If

		Response.Write "<option value=""" & strID & """>" & DB2HTML(theArr(1, i)) & "</option>"
	Next
End Sub

Sub PopulateSelectEnumItemArray( theArr, strCurID )
	rw objHtmlHelper.PopulateSelectEnumItemArray( theArr, strCurID )
End Sub

Sub PopulateSelectEntities( theArr, strCurID )
	Dim strID, strCCurID, i, j
	Dim nCount
	nCount = theArr.Count
	If IsNull(strCurID) Then
		Response.Write "<option value=""" & DB2Value( theArr(0).Id ) & """ selected>" & DB2HTML( theArr(0).ToString() ) & "</option>"
		For i = 1 To nCount - 1
			strID = DB2Value( theArr(i).Id )
			Response.Write "<option value=""" & strID & """>" & DB2HTML( theArr(i).ToString() ) & "</option>"
		Next
		Exit Sub
	End If
	strCCurID = DB2Value( strCurID )
	For i = 0 To nCount - 1
		strID = DB2Value( theArr(i).Id )
		If strID = strCCurID Then
			Response.Write "<option value=""" & strID & """ selected>" & DB2HTML( theArr(i).ToString() ) & "</option>"
			For j = i+1 To nCount - 1
				strID = DB2Value( theArr(j).Id )
				Response.Write "<option value=""" & strID & """>" & DB2HTML( theArr(j).ToString() ) & "</option>"
			Next
			Exit Sub
		End If
		Response.Write "<option value=""" & strID & """>" & DB2HTML( theArr(i).ToString() ) & "</option>"
	Next
End Sub

Sub PopulateSelectNamedEntities( theArr, strCurID )
	rw objHtmlHelper.PopulateSelectNamedEntities( theArr, strCurID )
End Sub

Function Adapt2D(arr)
	Dim m, n, l, i, arr2D
	m = Ubound(arr)
	If m < 1 Then
		l = m + 1
		n = Ubound(arr, 2)
		ReDim arr2D(2,n)
		For i = 0 To n
			arr2D(m, i) = arr(m, i)
			arr2D(l, i) = arr(m, i)
		Next
	End If
	Adapt2D = arr2D
End Function

Function convert1Dto2D(arr)
	Dim i, m, theArr

	i = Ubound(arr) + 1
	ReDim theArr(2, i / 2 - 1)
	m = 0
	For i = 0 To Ubound(arr) step 2
		theArr(0, m) = arr(i)
		theArr(1, m) = arr(i + 1)
		m = m + 1
	Next

	convert1Dto2D = theArr
End Function

Function convertSimple1Dto2D(arr)
	Dim i, m, theArr

	i = Ubound(arr)
	ReDim theArr(2, i)
	m = 0
	For i = 0 To Ubound(arr) step 1
		theArr(0, m) = arr(i)
		theArr(1, m) = arr(i)
		m = m + 1
	Next

	convertSimple1Dto2D = theArr
End Function


Function convert2Dto1D(arr)
	Dim i
	Dim retArr

	ReDim retArr((Ubound(arr, 2) * 2) + 1)
	
	For i = 0 To Ubound(arr, 2)
		retArr(i * 2) = arr(0, i)
		retArr(i * 2 + 1) = arr(1, i)
	Next

	convert2Dto1D = retArr
End Function
%>
