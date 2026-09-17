<%

Const JSON_OBJECT	= 0
Const JSON_ARRAY	= 1

Class jsCore
	Public Collection
	Public Count
	Public QuotedVars
	Public Kind ' 0 = object, 1 = array

	Private Sub Class_Initialize
		Set Collection = CreateObject("NetCity.Storage")
		QuotedVars = True
		Count = 0
	End Sub

	Private Sub Class_Terminate
		Set Collection = Nothing
	End Sub

	' counter
	Private Property Get Counter 
		Counter = Count
		Count = Count + 1
	End Property

	' - data maluplation
	' -- pair
	Public Property Let Pair(p, v)
		If IsNull(p) Then p = Counter
		Collection(p) = v
	End Property

	Public Property Set Pair(p, v)
		If IsNull(p) Then p = Counter
		If TypeName(v) <> "jsCore" Then
			Err.Raise &hD, "class: class", "Tьr uyumsuz: '" & TypeName(v) & "'"
		End If
		Set Collection(p) = v
	End Property

	Public Default Property Get Pair(p)
		If IsNull(p) Then p = Count - 1
		If IsObject(Collection(p)) Then
			Set Pair = Collection(p)
		Else
			Pair = Collection(p)
		End If
	End Property
	' -- pair
	Public Sub Clean
		Collection.RemoveAll
	End Sub

	Public Sub Remove(vProp)
		Collection.Remove vProp
	End Sub
	' data maluplation

	' encoding
	Function jsEncode(str)
		Dim i, j, aL1, aL2, c, p

		aL1 = Array(&h22, &h5C, &h2F, &h08, &h0C, &h0A, &h0D, &h09)
		aL2 = Array(&h22, &h5C, &h2F, &h62, &h66, &h6E, &h72, &h74)
		For i = 1 To Len(str)
			p = True
			c = Mid(str, i, 1)
			For j = 0 To 7
				If c = Chr(aL1(j)) Then
					jsEncode = jsEncode & "\" & Chr(aL2(j))
					p = False
					Exit For
				End If
			Next

			If p Then 
				Dim a
				a = AscW(c)
				If (a > 31 And a < 127) Or (a > 1023 And a < 1280) Then
					jsEncode = jsEncode & c
				ElseIf a > -1 Or a < 65535 Then
					jsEncode = jsEncode & "\u" & String(4 - Len(Hex(a)), "0") & Hex(a)
				End If 
			End If
		Next
	End Function

	' converting
	Public Function toJSON(vPair)
		Select Case VarType(vPair)
			Case 1	' Null
				toJSON = "null"
			Case 7	' Date
				toJSON = """" & CStr(vPair) & """"
			Case 8	' String
				toJSON = """" & jsEncode(vPair) & """"
			Case 9	' Object
				Dim bFI,i 
				bFI = True
				If vPair.Kind Then toJSON = toJSON & "[" Else toJSON = toJSON & "{"
				For Each i In vPair.Collection
					If bFI Then bFI = False Else toJSON = toJSON & ","

					If vPair.Kind Then 
						toJSON = toJSON & toJSON(vPair(i))
					Else
						If QuotedVars Then
							toJSON = toJSON & """" & i & """:" & toJSON(vPair(i))
						Else
							toJSON = toJSON & i & ":" & toJSON(vPair(i))
						End If
					End If
				Next
				If vPair.Kind Then toJSON = toJSON & "]" Else toJSON = toJSON & "}"
			Case 11
				If vPair Then toJSON = "true" Else toJSON = "false"
			Case 12, 8192, 8204
				Dim sEB
				'toJSON = generateArray(vPair)
				toJSON = MultiArray(vPair, 1, "", sEB)
			Case Else
				toJSON = Replace(vPair, ",", ".")
		End select
	End Function

    Function generateArray(val)
		dim item, i
		generateArray = generateArray & "["
		i = 0
		for each item in val
			if i > 0 Then generateArray = generateArray & ","
			generateArray = generateArray & toJSON(item)
			i = i + 1
		next
		generateArray = generateArray & "]"
	End Function
	
	Function MultiArray(aBD, iBC, sPS, ByRef sPT)    ' Array BoDy, Integer BaseCount, String PoSition
        Dim iDU, iDL, i, temp    ' Integer DimensionUBound, Integer DimensionLBound
        On Error Resume Next
        iDL = LBound(aBD, iBC)
        iDU = UBound(aBD, iBC)
        
        Dim sPB1, sPB2    ' String PointBuffer1, String PointBuffer2
        If Err = 9 Then
            sPB1 = sPT & sPS
            temp = Split(sPB1,"|")
            For i = 0 To UBound(temp, 1)
                If i <> 0 Then sPB2 = sPB2 & ","
                sPB2 = sPB2 & temp(i)
            Next
            MultiArray = MultiArray & toJSON(Eval("aBD(" & sPB2 & ")"))
        Else
            If Not (IsNull(sPt) Or IsEmpty(sPt)) Then 
                sPT = sPT & sPS & "|"
            Else
                sPT = sPT & sPS   
            End If
            MultiArray = MultiArray & "["
            For i = iDL To iDU
                MultiArray = MultiArray & MultiArray(aBD, iBC + 1, i, sPT)
                If i < iDU Then MultiArray = MultiArray & ","
            Next
            MultiArray = MultiArray & "]"
            sPT = Left(sPT, iBC - 2)
        End If
    End Function


	Public Property Get jsString
		jsString = toJSON(Me)
	End Property

	Sub Flush
		If TypeName(Response) <> "Empty" Then 
			Response.Write(jsString)
		ElseIf WScript <> Empty Then 
			WScript.Echo(jsString)
		End If
	End Sub

	Public Function Clone
		Set Clone = ColClone(Me)
	End Function

	Private Function ColClone(core)
		Dim jsc, i
		Set jsc = new jsCore
		jsc.Kind = core.Kind
		For Each i In core.Collection
			If IsObject(core(i)) Then
				Set jsc(i) = ColClone(core(i))
			Else
				jsc(i) = core(i)
			End If
		Next
		Set ColClone = jsc
	End Function

End Class

Function jsObject
	Set jsObject = new jsCore
	jsObject.Kind = JSON_OBJECT
End Function

Function jsArray
	Set jsArray = new jsCore
	jsArray.Kind = JSON_ARRAY
End Function

Function toJSON(val)
	toJSON = (new jsCore).toJSON(val)
End Function
%>