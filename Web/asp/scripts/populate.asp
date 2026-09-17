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

Sub DrawSelectNamedEntitiesArr(theArr, strName, curID, strNull, strChange)
	rw objHtmlHelper.DrawSelectNamedEntitiesArr(theArr, strName, curID, strNull, strChange)
End Sub

Sub PopulateSelectArray(theArr, strCurID)
	rw objHtmlHelper.PopulateSelectArr(theArr, strCurID)
End Sub

Sub PopulateSelectNamedEntities( theArr, strCurID )
	rw objHtmlHelper.PopulateSelectNamedEntities( theArr, strCurID )
End Sub

Function Adapt2D(arr)
	Adapt2D = comHelper.ArrayHelper.Adapt2D(arr)
End Function

Function convert1Dto2D(arr)
	convert1Dto2D = comHelper.ArrayHelper.Convert1Dto2D(arr)
End Function

Function convert2Dto1D(arr)
	convert2Dto1D = comHelper.ArrayHelper.Convert2Dto1D(arr)
End Function
%>
