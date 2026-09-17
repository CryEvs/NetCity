<% ' © 2007-2013 IRTech. All rights reserved.
Dim bExit

Sub DrawFilterRow(theStrForm, theRowName, theSelectName, theRs, theIDField, theNameField, theID, bAll)
	Dim strChange

	strChange = SelectChangeHandler(theStrForm)
	OpenFormGroup theRowName
	If IsArray(theRs) Then
		DrawSelectArr theRs, theSelectName, theID, GetFirstSelectOptionString(bAll), strChange
	Else
		DrawSelectRs theRs, theSelectName, theIDField, theNameField, theID, GetFIrstSelectOptionString(bAll), strChange
	End If
	CloseFormGroup
End Sub

Sub DrawSimpleFilterRow(theRowName, theSelectName, arr, theID, bAll, strChange)
	If IsDull(strChange) Then strChange = SelectChangeHandler("")
	OpenFormGroup theRowName
	Call DrawSimpleSelectArr(arr, theSelectName, theID, GetFirstSelectOptionString(bAll), strChange)
	CloseFormGroup
End Sub


'отрисовать селект без лейбла
Sub DrawSimpleFilterRowWidouthRowName(theSelectName, arr, theID, bAll, strChange)
	If IsDull(strChange) Then strChange = SelectChangeHandler("")
	Call DrawSimpleSelectArr(arr, theSelectName, theID, GetFirstSelectOptionString(bAll), strChange)
End Sub



Sub DrawFilterRowWithBtns(strInfoName, currInfo, selectName, theRs, theIDField, theNameField, strNull, strChange, arrButtons, strAddContent)
	Dim i, bWithButtons, strButtonHint, strButtonImg, strButtonJs
	bWithButtons = IsArray(arrButtons)
	Call OpenFormGroup( strInfoName )

	If bWithButtons Then
		%><div class="input-group"><%
	End If

	If IsArray(theRs) Then
		DrawSelectArr theRs, selectName, currInfo, strNull, strChange
	Else
		DrawSelectRs theRs, selectName, theIDField, theNameField, currInfo, strNull, strChange
	End If

	If bWithButtons Then 
		%><span class="input-group-btn"><%
			For i = 0 to Ubound(arrButtons) Step 3
				strButtonJs = arrButtons(i)
				strButtonHint = arrButtons(i+1)
				strButtonImg = arrButtons(i+2)
				If IsDull(strButtonImg) Then
					Call SimpleButton(strButtonJs, strButtonHint)
				Else
					Call ImageButton(strButtonJs, strButtonHint, strButtonImg)
				End If
			Next
		%></span>
		</div><%
	End If

	CloseFormGroupWithNote strAddContent
End Sub

Sub DrawFilterRowBtn(strInfoName, currInfo, selectName, arr, strNull, strChange, strPrevHint, strNextHint, strAddContent)
	Dim prevFunc, nextFunc, arrButtons

	prevFunc = "$('select[name=\'" & selectName & "\'] > option:selected').prop('selected', false).prev().prop('selected', true); $('select[name=\'" & selectName & "\']').trigger('change')"
	nextFunc = "$('select[name=\'" & selectName & "\'] > option:selected').prop('selected', false).next().prop('selected', true); $('select[name=\'" & selectName & "\']').trigger('change')"

	arrButtons = Array(prevFunc, strPrevHint,"glyphicon glyphicon-circle-arrow-left", nextFunc, strNextHint, "glyphicon glyphicon-circle-arrow-right")

	Call DrawFilterRowWithBtns(strInfoName, currInfo, selectName, arr, "", "", strNull, strChange, arrButtons, strAddContent)
End Sub

Sub DrawEnumFilterRow(strForm, InfoName, inputName, theRs, theValueField, strNull)
	OpenFormGroup InfoName
	Call DrawSelectNamedEntitiesArr(theRs, inputName, theValueField, strNull, SelectChangeHandler(strForm))
	CloseFormGroup
End Sub

Sub DrawSimpleFilter( domain, strName, defVal, arr )
	Dim theArr

	theArr = convert1Dto2D_Generic(domain, arr)
	If IsDull(defVal) Then defVal = arr(0)
	OpenFormGroup DB2HTML(obLanguage(domain, strName))
	Call DrawSelectArr( theArr, strName, GetSafe( strName, defVal), Null, "_" )
	CloseFormGroup
End Sub

Sub DrawSimpleFilterWithFuncType( domain, strName, defVal, arr )
	Dim theArr

	theArr = convert1Dto2D_FuncTyped(domain, arr)
	If IsDull(defVal) Then defVal = arr(0)
	OpenFormGroup DB2HTML(obLanguage(domain, strName))
	Call DrawSelectArr( theArr, strName, GetSafe( strName, defVal), Null, "_" )
	CloseFormGroup
End Sub

Sub DrawSimpleFilter2D( header, strName, defVal, theArr )
	If IsDull(defVal) Then defVal = arr(0)

	OpenFormGroup header
	Call DrawSelectArr( theArr, strName, GetSafe( strName, defVal), Null, "_" )
	CloseFormGroup
End Sub

Function SelectChangeHandler(theStrForm)
	SelectChangeHandler = IIF(IsDull(theStrForm), "dataChanged();", "OnChangeSelect('" & theStrForm & "','" & strScriptName & "');")
End Function

Function GetFirstSelectOptionString(bAll)
	GetFirstSelectOptionString = IIF(bAll, obLanguage("Common","kAll"), null)
End Function

Function convert1Dto2D_Generic(domain, arr)
	Dim i, theArr

	i = Ubound(arr)
	ReDim theArr(2, i)
	For i = 0 To Ubound(arr)
		theArr(0, i) = arr(i)
		theArr(1, i) = obLanguage(domain, arr(i))
	Next
	convert1Dto2D_Generic = theArr
End Function

Function convert1Dto2D_FuncTyped(domain, arr)
	Dim i, theArr

	i = Ubound(arr)
	ReDim theArr(2, i)
	For i = 0 To Ubound(arr)
		theArr(0, i) = arr(i)
		theArr(1, i) = obLanguage(domain, arr(i), strFunctionalityType)
	Next
	convert1Dto2D_FuncTyped = theArr
End Function

Function GetSafeRs(strId, objRs, strFieldName)
	If strId = "0" Then
		GetSafeRs = strId
		Exit Function
	End If

	If objRs.ExistsByField(strFieldName, strId) Then
		GetSafeRs = strId
	Else
		If Not objRs.EOF Then
			GetSafeRs = GetSafeId(objRs(strFieldName), "0")
		Else
			GetSafeRs = "0"
		End If
	End If
End Function
%>