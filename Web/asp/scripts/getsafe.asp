<% ' © 2007-2013 IRTech. All rights reserved.
'============= Parameter parsing functions ==========================
Function GetSafe( strParam, defVal )
	If IsObject(strParam) Then
		GetSafe = strParam.Item
		strParam = Null
	Else
		GetSafe = Request(strParam)
	End If
	If IsDull(GetSafe) Then
		If Not IsNull(strParam) Then GetSafe = obTokenMgr.GetData(strToken, strParam)
		If IsDull(GetSafe) Then GetSafe = defVal
	End If
	If Not IsNull(strParam) Then Call obTokenMgr.SetData(strToken, strParam, GetSafe)
End Function

Function GetSafeParam(strRequestParam, strTokenKey, defVal)
	GetSafeParam = Request(strRequestParam)
	If IsDull(GetSafeParam) Then
		GetSafeParam = obTokenMgr.GetData(strToken, strTokenKey)
		If Not IsDull(GetSafeParam) Then Exit Function
		If IsNull( defVal ) Then GenerateError( obLanguage("Common","kInvalidParameter") )
		GetSafeParam = defVal
	End If
End Function

Function GetSafeRequest(strRequestParam, defVal)
	GetSafeRequest = Request(strRequestParam)
	If IsDull(GetSafeRequest) Then GetSafeRequest = defVal
End Function

'--------------------------------------------------------------------
' GetSafeStr( strText, lngMaxSize, strDefValue )
'	Returns the string from parameter
'	
'   strText - parameter
'   lngMaxSize - maximum size of the parameter
'   strDefValue - default value of the parameter if 
'		strDefValue is NULL error message will be generated
'--------------------------------------------------------------------
Function GetSafeStr( strText, lngMaxSize, strDefValue )
	On Error Resume Next
	If IsDull( strText ) Then
		If IsNull( strDefValue ) Then GenerateError( obLanguage("Common","kInvalidParameter") ) Else GetSafeStr = strDefValue
	ElseIf lngMaxSize >= 0 And Len( strText ) > lngMaxSize Then
		GenerateError( obLanguage("Common","kLongInput")  )
	Else
		GetSafeStr = CStr(strText)
	End If
	TestError( obLanguage("Common","kInvalidParameter") )
End Function

'--------------------------------------------------------------------
' GetSafeID( strText, strDefValue )
'	Returns the id from parameter
'	
'   strText - parameter
'   strDefValue - default value of the parameter if 
'		strDefValue is NULL error message will be generated
'--------------------------------------------------------------------
Function GetSafeID( strText, strDefValue )
	If IsDull( strText ) Then
		If IsNull( strDefValue ) Then GenerateError( obLanguage("Common","kInvalidParameter") ) Else  GetSafeID = strDefValue
	Else
		On Error Resume Next
		GetSafeID = Trim(CStr(Clng(strText)))
		TestError( obLanguage("Common","kInvalidParameter") )
	End If
End Function

'--------------------------------------------------------------------
' GetSafeLng( strText, lngDefValue )
'	Returns the number from parameter
'	
'   strText - parameter
'   strDefValue - default value of the parameter if 
'		strDefValue is NULL error message will be generated
'--------------------------------------------------------------------
Function GetSafeLng( strText, lngDefValue )
    On Error Resume Next
	If IsDull( strText ) Then
		If IsNull( lngDefValue ) Then GenerateError( obLanguage("Common","kInvalidParameter") ) Else  GetSafeLng = CLng(lngDefValue)
	Else
		GetSafeLng = CLng( strText )
		If err.number<>0 or IsEmpty(GetSafeLng) Then err.Clear:GetSafeLng = CLng(lngDefValue)
	End If
	TestError( obLanguage("Common","kInvalidParameter") )
End Function

Function GetSafeLngWithOutError( strText, lngDefValue )
	If Not bIsDebug Then On Error Resume Next
	If IsDull( strText ) Then
		GetSafeLngWithOutError = lngDefValue
	Else
		On Error Resume Next
		Dim lngRes
		lngRes = CLng( strText )
		If Err.number <> 0 Then
			Err.Clear
			GetSafeLngWithOutError = lngDefValue
			Exit Function
		End If
		GetSafeLngWithOutError = lngRes
	End If
End Function

Sub SetNullableLng( ByRef strVar )
	If IsDull( strVar ) Then
		Set strVar = Nothing
	Else
		On Error Resume Next
		strVar = CLng( strVar )
		TestError( obLanguage("Common","kInvalidParameter") )
	End If
End Sub

Function GetSafeLngInRange( strText, nMin, nMax )
	Dim nVal
	nVal = GetSafeLng( strText, Null )
	If nVal < nMin Or nVal > nMax Then
		GenerateError( obLanguage("Common","kInvalidParameter") )	
	End If
	GetSafeLngInRange = nVal
End Function

'--------------------------------------------------------------------
' GetSafeDate( strText, strDefValue )
'	Returns the string from parameter
'	
'   strText - parameter
'   lngMaxSize - maximum size of the parameter
'   strDefValue - default value of the parameter if 
'		strDefValue is NULL error message will be generated
'--------------------------------------------------------------------
Function GetSafeDate( strDate, dtDefValue )
	On Error Resume Next
	If IsDull( strDate ) Then
		If IsNull( dtDefValue ) Then GenerateError( obLanguage("Common","kInvalidParameter") ) Else GetSafeDate = NormalizeDate( dtDefValue )
	Else
		If VarType(strDate) = vbDate Then
			GetSafeDate = strDate
		Else
			GetSafeDate = StrTwoDate( strDate, strDateFormat)
		End If
	End If
End Function

Function GetSafeNullDate( strDate )
	If IsDull( strDate ) Then 
		GetSafeNullDate = Empty 
	Else 
		GetSafeNullDate = Str2Date( strDate )
	End If
End Function

Function GetRequestBool(strTag,strTrueValue)
	GetRequestBool = GetSafeStr(Request(strTag),-1,"") = strTrueValue
End Function

' without test length
Function GetSafeStrParam(strParameter, strDefValue)
	On Error Resume Next
	If IsDull(strParameter) Then 
		If IsNull(strDefValue) Then
			GenerateError(obLanguage("Common","kInvalidParameter"))
		Else
			GetSafeStrParam = strDefValue
		End If
	Else
		GetSafeStrParam = CStr(strParameter)
	End If
End Function

Function GetSafeBool(bVal, bDefValue)
	If IsDull(bVal) Then
		If IsNull(bDefValue) Then GenerateError(obLanguage("Common","kInvalidParameter")) Else GetSafeBool = bDefValue
	Else
		On Error Resume Next
		GetSafeBool = CBool(bVal)
		TestError(obLanguage("Common","kInvalidParameter"))
	End If
End Function

Function GetSafeIDForRs( nID, objRs, strIDFieldName )
	GetSafeIDForRs = GetSafeIDForRs_Ex(nID, objRs, strIDFieldName, 0)
End Function

Function GetSafeIDForRs_Ex( nID, objRs, strIDFieldName, nEmptyVal )
	If Not objRs.EOF Then 
		Do while not objRs.EOF
			If CLng(objRs(strIDFieldName)) = CLng(nID) Then GetSafeIDForRs_Ex = nID: objRs.MoveFirst: Exit Function 
			objRs.MoveNext
		Loop
		objRs.MoveFirst
	End If
	GetSafeIDForRs_Ex = nEmptyVal
End Function

Function GetSafeIDForRs2_Ex( nID, nID2, objRs, strIDFieldName, strIDFieldName2, nEmptyVal )
	Dim tmpRet

	tmpRet = Empty
	If Not objRs.EOF Then 
		Do while not objRs.EOF
			If CLng(objRs(strIDFieldName)) = CLng(nID) Then
				GetSafeIDForRs2_Ex = nID
				objRs.MoveFirst
				Exit Function
			End If
			
			If IsEmpty(tmpRet) Then
				If CLng(objRs(strIDFieldName2)) = CLng(nID2) Then
					tmpRet = CLng(objRs(strIDFieldName))
				End If
			End If

			objRs.MoveNext
		Loop
		objRs.MoveFirst
	End If

	If Not IsDull(tmpRet) Then
		GetSafeIDForRs2_Ex = tmpRet
	Else
		GetSafeIDForRs2_Ex = nEmptyVal
	End If
End Function

Function GetSafeIDForArr( nID, theArr )
	GetSafeIDForArr = GetSafeIDForArr_Ex(nID, theArr, 0, "0")
End Function

Function GetSafeIDForArr_Ex( nID, theArr, nIDIndex, nEmptyVal )
	Dim i, nCurID

	GetSafeIDForArr_Ex = nEmptyVal
	If Not IsArray(theArr) Then
		Exit Function
	End If

	If UBound(theArr, 2) < 0 Then
		Exit Function
	End If

	nID = CLng(nID)
	For i = 0 To  UBound(theArr, 2)
		nCurID = CLng(theArr(nIDIndex, i))
		If nID = nCurID Then
			GetSafeIDForArr_Ex = CStr(nID)
		End If
	Next
End Function

Function GetSafeDbl( strText, dblDefValue )
	On Error Resume Next
	If IsDull( strText ) Then
		If IsNull( dblDefValue ) Then GenerateError( obLanguage("Common","kInvalidParameter") ) Else GetSafeDbl = CDbl(dblDefValue)
	Else
		GetSafeDbl = CDbl( strText )
		If err.number<>0 or IsEmpty(GetSafeDbl) Then err.Clear : GetSafeDbl = CDbl(dblDefValue)
	End If
	TestError( obLanguage("Common","kInvalidParameter") )
End Function

Function RoundNullableDouble(strText, numDecimalPlaces)
	If IsDull( strText ) Then
		RoundNullableDouble = strText
	Else
		RoundNullableDouble = Round(strText, numDecimalPlaces)
	End If
End Function
%>
