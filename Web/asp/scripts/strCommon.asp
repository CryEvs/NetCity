<% ' © 2007-2016 IRTech. All rights reserved.
'============= String Functions =====================================
'    Check if strString1 ends with strString2
Function EndWith( strString1, strString2 )
	EndWith = ( strString2 = Right( strString1, Len( strString2 ) ) )
End Function

'    Return string representation of Date
Function Date2Str( dtmDate )
	If IsNull( dtmDate ) Then
		Date2Str = "&nbsp;"
	Else
		Date2Str = DateTwoStr(dtmDate,strDateFormat)
	End If
End Function

Function Date2Str_NoYear( dtmDate )
	If IsNull( dtmDate ) Then
		Date2Str_NoYear = "&nbsp;"
	Else
		Date2Str_NoYear = DateTwoStr_NoYear(dtmDate,strDateFormat)
	End If
End Function

'    Return string representation of Date
Function Date2Java( dtmDate )
	If IsDull( Trim(dtmDate) ) Then Date2Java = "" : Exit Function
	Date2Java = DateTwoStr(dtmDate,strDateFormat)
End Function


Function Date2IsoFormat(datetime)
	Date2IsoFormat = CStr(Year(datetime)) & "-" & StrN2(Month(datetime)) & "-" & StrN2(Day(datetime))
End Function

Function StrN2(n)
	If Len(CStr(n)) < 2 Then StrN2 = "0" & n Else StrN2 = n
End Function

'--------------------------------------------------------------------
Function DB2Java( strDB )
	If IsNull( strDB ) Then DB2Java = "" : Exit Function
	Dim strNormStr, i, ch
	strNormStr = ""
	For i = 1 To Len(strDB)
		ch = Mid(strDB,i,1)
		select case ch
			case CHR(1) strNormStr = strNormStr & "\001"
			case """"	strNormStr = strNormStr & "\"""
			case "'"	strNormStr = strNormStr & "\'"
			case "\"	strNormStr = strNormStr & "\\"
			case CHR(10)	strNormStr = strNormStr & "\n"
			case CHR(13)
			case else
				If ch < " " Then  ch = " "
				strNormStr = strNormStr & ch
		end select
	Next
	DB2Java = Trim(strNormStr)
End Function

Function NSReplace(str1, patrn, replStr)
	Dim regEx
	If isDull( str1 ) Then NSReplace=str1 : Exit Function
	Set regEx = New RegExp
	regEx.Global = True 
	regEx.Pattern = "(""|\[|\]|\(|\)|\^|[$'.*+?\|{},:=!]|\-)"
	patrn = regEx.Replace(patrn, "\$1")
	regEx.Pattern = patrn
	regEx.IgnoreCase = True	' Make case insensitive.
	NSReplace = regEx.Replace(str1, replStr)	' Make replacement.
End Function

Function Quot2html( byVal theText)
	Quot2html = comHelper.StringHelper.Quot2html(theText)
End Function

Function EscapeTags( byVal theText)
	EscapeTags = comHelper.StringHelper.EscapeTags(theText)
End Function

Function DB2HTML_RN( byVal theText, byVal replStr)
	If IsDull(theText) Then theText = ""
	DB2HTML_RN = comHelper.StringHelper.DB2HTML_RN(CStr(theText), replStr)
End Function

Function DB2HTML( byVal theText )
	DB2HTML = DB2HTML_RN(theText, " ")
End Function

Function DB2HTML_BR( byVal theText )
	DB2HTML_BR = DB2HTML_RN(theText, "BR")
End Function

Function DB2XML_Value( byVal theText )
	If IsDull( theText ) Then DB2XML_Value = "" Else DB2XML_Value = DB2HTML(theText)
End Function

Function DB2TextArea( theText )
	If IsDull(theText) Then DB2TextArea = "" Else DB2TextArea = DB2HTML_RN(theText, "") ' Server.HTMLEncode не использовать!
End Function

Function DB2Value( theText )
	If IsDull(theText) Then DB2Value = "" Else DB2Value = DB2HTML_BR(theText) ' Server.HTMLEncode не использовать!
End Function

Function SetCellFormat( theText )
	SetCellFormat = comHelper.StringHelper.SetCellFormat(theText)
End Function

Function LPad(str, nPadding)
    Dim i, ln
	LPad = CStr(str)
	ln = Len(LPad)
	If ln < nPadding Then
        For i = ln to nPadding-1
            LPad = "0" & LPad
        Next
	End If
End Function

Function Bool2JS(value)
	Bool2JS = IIF(value, "true", "false")
End Function

' Function FirstLetter2Upper(value)
	' FirstLetter2Upper = comHelper.RegexHelper.ToCamelCase(value)
' End Function
Function MakeShortNickName(rs)
	MakeShortNickName = rs("LASTNAME") & " " & rs("FIRSTNAME")
End Function
Function MakeFullNickName(rs)
	MakeFullNickName = rs("LASTNAME") & " " & rs("FIRSTNAME") & " " & rs("MIDDLENAME")
End Function

'Обертка на .NET объект StringBuilder
'Должна использоваться в случае необходимости многочисленных конкатенаций
Class StringBuilder
	Private m_stringBuilder

	Public Sub Class_Initialize()
		Set m_stringBuilder = Server.CreateObject("NetCity.Common.Implementation.NSStringBuilder")
	End Sub
	
	Public Sub Append(str)
		Call m_stringBuilder.Append(str)
	End Sub

	Public Sub SafeAppend(str)
		Call m_stringBuilder.SafeAppend(str)
	End Sub

	Public Sub AppendLine(str)
		Call m_stringBuilder.AppendLine(str)
	End Sub

	Public Sub SafeAppendLine(str)
		Call m_stringBuilder.SafeAppendLine(str)
	End Sub

	Public Sub Remove(startIndex, length)
		Call m_stringBuilder.Remove(startIndex, length)
	End Sub

	Public Sub AppendFormat(str, arrArgs)
		Call m_stringBuilder.AppendFormat(str, arrArgs)
	End Sub

	Public Sub SafeAppendFormat(str, arrArgs)
		Call m_stringBuilder.SafeAppendFormat(str, arrArgs)
	End Sub
	
	Public Property Get ToString
		ToString = m_stringBuilder.ToString
	End Property

	Public Property Get Length
		Length = m_stringBuilder.Length
	End Property

	Public Function Replace(strWhat, strTo)
		Set Replace = m_stringBuilder.Replace(strWhat, strTo)
	End Function

	Public Function Format(par1)
		Format = m_stringBuilder.Format(par1)
	End Function

	Public Function SafeFormat(par1)
		SafeFormat = m_stringBuilder.SafeFormat(par1)
	End Function

	Public Sub Clear()
		Call m_stringBuilder.Clear()
	End Sub
	
	Private Sub Class_Terminate
		Set m_stringBuilder = Nothing
	End Sub
End Class
%>
