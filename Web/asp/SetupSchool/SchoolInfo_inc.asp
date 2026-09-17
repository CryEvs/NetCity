
<% ' © 2007-2008 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub

Const kFormNameOSH1 = "OSH"
Const kFormNameOSH5 = "OSH5"
Const kFormNameOSH9 = "OSH9"

Dim arrSchoolInfo, intRows
Dim blnIsOSHClosed, blnIsOSH5Closed, blnIsOSH9Closed, blnIsForm85KClosed
Dim blnIsOSHAvailable, blnIsOSH5Available, blnIsOSH9Available, blnIsForm85KAvailable
Dim blnIsOSHArchived, blnIsOSH5Archived, blnIsOSH9Archived, blnIsForm85KArchived
Dim strShoolYearStart, strShoolYearEnd
Dim strShoolPrevYearStart, strShoolPrevYearEnd
Dim bIsNextYearCreated

' NOTE: The following variables will be set up in the "IsOSHxClosed" function
strShoolYearStart = ""
strShoolYearEnd = ""
strShoolPrevYearStart = ""
strShoolPrevYearEnd = ""
bIsNextYearCreated = False

Sub LoadShoolInfo(page)
	Dim objInfo
	On Error Resume Next
	Select Case CLng(strFunctionalityType) 
		Case kFuncType_PreSchool
			If page > 0 Then 
				Set objInfo = objNSNET.GetForm85KInfo(strCurrYearID, page)
			Else
				Set objInfo = objNSNET.GetSchoolOSHInfo(strCurrYearID, page)
			End If
		Case Else
			Set objInfo = objNSNET.GetSchoolOSHInfo(strCurrYearID, page)
	End Select
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))

	If objInfo.EOF Then
		intRows = 0
	Else
		arrSchoolInfo = objInfo.GetRows(1000)
		intRows = UBOUND(arrSchoolInfo, 2)+1
	End If
End Sub

Function ITS(id, l, ml)
	Dim str, value, i, typ

  On Error Resume Next
    str = "" : value = "" : typ = ""

	For i = 0 To intRows - 1
		If arrSchoolInfo(0,i) = id Then
			typ = Trim(arrSchoolInfo(1,i))
			value = Trim(arrSchoolInfo(2,i))
			Exit For
		End If
	Next

	If Not readonly Then
		If IsNull(l) Then l = 5
		If IsNull(ml) Then ml = 10
		str = "<input style=""border-color:#A5ACB2; border-style:ridge; background-color:#E7E7E7;"" type=""text"" name=""" & id & """ size=""" & TextInputSize(l) & """ maxlength=""" & ml & """"
		If Not IsNull(value) And value <> "" Then str = str & " value=""" & DB2HTML(value) & """"
		str = str & " readonly onkeypress=""return false;"" >"
	Else
		If Not IsNull(value) And value <> "" Then
			str = "<b>" & value & "</b>"
		Else
			str = "&nbsp;"
		End If
	End If

	ITS = str
End Function

Sub SetLoadedOSHValue( theID, theValue )
	Dim i

	For i = 0 To intRows - 1
		If arrSchoolInfo( 0, i ) = theID Then
			arrSchoolInfo( 2, i ) = theValue
			Exit For
		End If
	Next
End Sub

Function FormatValueIndex( theIndex )
	FormatValueIndex = CStr( theIndex )
	If Len( FormatValueIndex ) = 1 Then
		FormatValueIndex = "0" & FormatValueIndex
	End If
End Function

Sub ClearAvtoCalcFields(sName,nRowStart,nRowFinish,nColStart, nColFinish)
    Dim nCount,i,j
    For j=nColStart to nColFinish 
        For i=nRowStart to nRowFinish
            Call SetLoadedOSHValue( SName & FormatValueIndex(i)& IIF(nColStart>0 And nColFinish>0,FormatValueIndex(j),""), "")
        Next
    Next    
End Sub

Function IT(id, l, ml)
	Dim str, value, i, typ

	On Error Resume Next
    str = "" : value = "" : typ = ""

	For i = 0 To intRows - 1
		If arrSchoolInfo(0,i) = id Then
			typ = Trim(arrSchoolInfo(1,i))
			value = Trim(arrSchoolInfo(2,i))
			Exit For
		End If
	Next

	If Not readonly Then
		If IsNull(l) Then l = 5
		If IsNull(ml) Then ml = 10
		str = "<input type=""text"" name=""" & id & """ size=""" & TextInputSize(l) & """ maxlength=""" & ml & """"
		If Not IsNull(value) And value <> "" Then str = str & " value=""" & DB2Value(value) & """"
		str = str & " OnChange=""return OSHdataChanged(this, '" & typ & "');"">"
	Else
		str = DB2HTML(value)
	End If

	IT = str
End Function

Function IB(id)
	Dim str, value, i, typ
    str = "" : value = "" : typ = ""

	For i = 0 To intRows - 1
		If arrSchoolInfo(0,i) = id Then
			typ = Trim(arrSchoolInfo(1,i))
			value = Trim(arrSchoolInfo(2,i))
			Exit For
		End If
	Next

'	value = id

	If Not readonly Then
		str = "<select name=""" & id & """ OnChange=""return OSHdataChanged(this, '" & typ & "');"">"

		str = str & "<option value="""""
		If value="" Then str = str & " selected"
		str = str & ">&nbsp;</option>"

		str = str & "<option value=""" & obLanguage("Common","kYes") & """"
		If UCase(value)=UCase(obLanguage("Common","kYes")) Then str = str & " selected"
		str = str & "> " & obLanguage("Common","kYes") & "</option>"

		str = str & "<option value=""" & obLanguage("Common","kNo") & """"
		If UCase(value)=UCase(obLanguage("Common","kNo")) Then str = str & " selected"
		str = str & "> " & obLanguage("Common","kNo") & "</option>"

		str = str & "</select>"
	Else
		str = DB2HTML(value)
	End If

	IB = str
End Function

'Да - 1; Нет - 0
Function IB0(id)
	Dim str, value, i, typ
    str = "" : value = "" : typ = ""

	For i = 0 To intRows - 1
		If arrSchoolInfo(0,i) = id Then
			typ = Trim(arrSchoolInfo(1,i))
			value = Trim(arrSchoolInfo(2,i))
			Exit For
		End If
	Next

'	value = id

	If Not readonly Then
		str = "<select name=""" & id & """ OnChange=""return OSHdataChanged(this, '" & typ & "');"">"

		str = str & "<option value="""""
		If value="" Then str = str & " selected"
		str = str & ">&nbsp;</option>"

		str = str & "<option value=""1"""
		If value="1" Then str = str & " selected"
		str = str & "> " & obLanguage("Common","kYes") & "</option>"

		str = str & "<option value=""0"""
		If value="0" Then str = str & " selected"
		str = str & "> " & obLanguage("Common","kNo") & "</option>"

		str = str & "</select>"
	Else
		str = DB2HTML(value)
	End If

	IB0 = str
End Function

'Да - 1; Нет - 2
Function IB2(id)
	Dim str, value, i, typ
    str = "" : value = "" : typ = ""

	For i = 0 To intRows - 1
		If arrSchoolInfo(0,i) = id Then
			typ = Trim(arrSchoolInfo(1,i))
			value = Trim(arrSchoolInfo(2,i))
			Exit For
		End If
	Next

'	value = id

	If Not readonly Then
		str = "<select name=""" & id & """ OnChange=""return OSHdataChanged(this, '" & typ & "');"">"

		str = str & "<option value="""""
		If value="" Then str = str & " selected"
		str = str & ">&nbsp;</option>"

		str = str & "<option value=""1"""
		If value="1" Then str = str & " selected"
		str = str & "> " & obLanguage("Common","kYes") & "</option>"

		str = str & "<option value=""2"""
		If value="2" Then str = str & " selected"
		str = str & "> " & obLanguage("Common","kNo") & "</option>"

		str = str & "</select>"
	Else
		str = DB2HTML(value)
	End If

	IB2 = str
End Function

Function IBArrValue(id,arr)
	Dim str, value, i, typ
	str = "" : value = "" : typ = ""

	For i = 0 To intRows - 1
		If arrSchoolInfo(0,i) = id Then
			typ = Trim(arrSchoolInfo(1,i))
			value = Trim(arrSchoolInfo(2,i))
			Exit For
		End If
	Next
	If Not readonly Then
		str = "<select name=""" & id & """ OnChange=""return OSHdataChanged(this, '" & typ & "');"">"
		str = str & "<option value="""""
		If value="" Then str = str & " selected"
		str = str & ">&nbsp;</option>"
        For i = 0 To Ubound(arr)
		    str = str & "<option value=""" & arr(i) & """"
		    If value=arr(i) Then str = str & " selected"
		    str = str & "> " & arr(i) & "</option>"
        Next
		str = str & "</select>"
	Else
		str = DB2HTML(value)
	End If

	IBArrValue = str
End Function

Function ITA(id, cols, rows)
	Dim str, value, i, typ
	On Error Resume Next

	str = "" : value = "" : typ = ""

	For i = 0 To intRows - 1
		If arrSchoolInfo(0,i) = id Then
			typ = Trim(arrSchoolInfo(1,i))
			value = Trim(arrSchoolInfo(2,i))
			Exit For
		End If
	Next

	If Not readonly Then
		str = ShowTextArea( id, rows, cols, "return OSHdataChanged(this, '" & typ & "');", value )
	Else
		str = DB2HTML(value)
	End If

	ITA = str
End Function

Function GetOSHValue(theID, theGroupID)
	If Not bIsDebug Then On Error Resume Next
	GetOSHValue = objNSNET.GetSchoolOSHParamValue(strCurrYearID, theGroupID, theID)
	TestError(obLanguage("SchoolInfo","kErrorCantGetOSHInfo"))
End Function

Sub IsOSHClosed( strCurrYearID )
	If Not bIsDebug Then On Error Resume Next

	Dim objInfo, objArchInfo
	Dim blnIsOpenedOSHFound, blnIsOpenedOSH5Found, blnIsOpenedOSH9Found
	Dim nYearID, strErr

	If Not objNSNET.IsCanConnect(TRUE, strErr) Then GenerateError obLanguage("Common","kErrNoAccessDB_Work") & strErr

	strShoolYearStart = ""
	strShoolYearEnd = ""

	blnIsOSHClosed = True
	blnIsOSH5Closed = True
	blnIsOSH9Closed = True

	blnIsOpenedOSHFound = False
	blnIsOpenedOSH5Found = False
	blnIsOpenedOSH9Found = False

	blnIsOSHAvailable = False
	blnIsOSH5Available = False
	blnIsOSH9Available = False

	blnIsOSHArchived = False
	blnIsOSH5Archived = False
	blnIsOSH9Archived = False

	nYearID = CLng(strCurrYearID)

	Set objInfo = objNSNETWork.GetSchoolYearList(strSchoolID, False )
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))

	Do While Not objInfo.EOF
		If CLng(objInfo("SCHOOLYEARID")) = nYearID Then
			Set objArchInfo = objNSNETWork.GetOSHArchiveStatus(nYearID )
			TestError( obLanguage("SchoolInfo","kErrorOSHArchivedInfo") )

			blnIsOSHClosed = CBool( Not IsNull(objInfo("OSHCLOSED")) And objInfo("OSHCLOSED") = "Y" )
			blnIsOSHAvailable = Not blnIsOpenedOSHFound
			If Not blnIsOSHAvailable Then blnIsOSHClosed = True ' This is because returned value will be used as 	"readonly" value
			blnIsOSHArchived = ( objArchInfo("ISOSHARCHIVED") = 1 )


			blnIsOSH5Closed = CBool( objInfo("OSH5CLOSED") = "Y" )
			blnIsOSH5Available = Not blnIsOpenedOSH5Found
			If Not blnIsOSH5Available Then blnIsOSH5Closed = True ' This is because returned value will be used as "readonly" value
			blnIsOSH5Archived = ( objArchInfo("ISOSH5ARCHIVED") = 1 )

			blnIsOSH9Closed = CBool( objInfo("OSH9CLOSED") = "Y" )
			blnIsOSH9Available = Not blnIsOpenedOSH9Found
			If Not blnIsOSH9Available Then blnIsOSH9Closed = True ' This is because returned value will be used as "readonly" value
			blnIsOSH9Archived = ( objArchInfo("ISOSH9ARCHIVED") = 1 )

			strShoolYearStart = Year(objInfo("STARTDATE"))
			strShoolYearEnd =  Year(objInfo("ENDDATE"))

			objInfo.MoveNext
			bIsNextYearCreated = Not objInfo.EOF
			If IsDull(strShoolPrevYearStart) or IsDull(strShoolPrevYearEnd) Then
				strShoolPrevYearEnd = strShoolYearStart
				strShoolPrevYearStart = strShoolPrevYearEnd - 1
			End If
			TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
			Exit Do
		End If
        strShoolPrevYearStart = Year(objInfo("STARTDATE"))
        strShoolPrevYearEnd = Year(objInfo("ENDDATE"))
		If IsNull(objInfo("OSHCLOSED")) Or objInfo("OSHCLOSED") <> "Y" Then blnIsOpenedOSHFound = True
		If objInfo("OSH5CLOSED") <> "Y" Then blnIsOpenedOSH5Found = True
		If objInfo("OSH9CLOSED") <> "Y" Then blnIsOpenedOSH9Found = True

		objInfo.MoveNext
	Loop

	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Sub

Sub IsForm85KClosed( strCurrYearID )
	If Not bIsDebug Then On Error Resume Next

	Dim objInfo, objArchInfo
	Dim blnIsOpenedForm85KFound
	Dim nYearID, strErr

	If Not objNSNET.IsCanConnect(TRUE, strErr) Then GenerateError obLanguage("Common","kErrNoAccessDB_Work") & strErr

	blnIsForm85KClosed = True
	blnIsOpenedForm85KFound = False
	blnIsForm85KAvailable = False
	blnIsForm85KArchived = False


	nYearID = CLng(strCurrYearID)

	Set objInfo = objNSNETWork.GetForm85KSchoolYearList(strSchoolID, False )
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))

	Do While Not objInfo.EOF
		If CLng(objInfo("SCHOOLYEARID")) = nYearID Then
			Set objArchInfo = objNSNETWork.GetForm85KArchiveStatus(nYearID )
			TestError( obLanguage("SchoolInfo","kErrorOSHArchivedInfo") )

			blnIsForm85KClosed = CBool( Not IsNull(objInfo("FORM85CLOSED")) And objInfo("FORM85CLOSED") = "Y" )
			blnIsForm85KAvailable = Not blnIsOpenedForm85KFound
			If Not blnIsForm85KAvailable Then blnIsForm85KClosed = True ' This is because returned value will be used as 	"readonly" value
			blnIsForm85KArchived = ( objArchInfo("ISFORM85ARCHIVED") = 1 )


			objInfo.MoveNext
			bIsNextYearCreated = Not objInfo.EOF

			TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
			Exit Do
		End If

		If IsNull(objInfo("FORM85CLOSED")) Or objInfo("FORM85CLOSED") <> "Y" Then blnIsOpenedForm85KFound = True

		objInfo.MoveNext
	Loop

	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Sub

Function LPad2(nVal)
	LPad2 = CStr(nVal)
	If Len(LPad2) = 1 Then
			LPad2 = "0" & LPad2
	End If
End Function

Function GetOshFieldName(nSection, nRow, nCol)
	On Error Resume Next

	GetOshFieldName = "T" & LPad2(nSection) & LPad2(nRow) & LPad2(nCol)

	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Function
%>
