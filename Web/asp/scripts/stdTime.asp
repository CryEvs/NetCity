<% ' © 2007-2008 IRTech. All rights reserved.
'Год начала интервала возможных дат(19<kFirstYear> .. 20<kFirstYear>)
Dim kFirstYear
	kFirstYear = Application("YEARLIMITEDAGE")

Function GetPart(  item, date1 )
	Select Case ( item )
		Case  "m"		GetPart = DatePart("m",date1, 0, 0 )
		Case  "mm"		GetPart = ZeroPad( item, DatePart("m",date1, 0, 0 ) )
		Case  "d"		GetPart = DatePart("d",date1, 0, 0 )
		Case  "dd"		GetPart = ZeroPad( item, DatePart("d",date1, 0, 0 ) )
		Case  "yyyy"	GetPart = DatePart("yyyy",date1, 0, 0 )
		Case  "yy"		GetPart = DatePart("yyyy",date1, 0, 0 ) : GetPart=Mid(GetPart,3,2)
	End Select 
End Function 

Function ZeroPad( item, t1 )
	ZeroPad = CStr(t1)
	If Len(item)=2 Then
		 If Len(ZeroPad)=1 Then ZeroPad="0"&ZeroPad
	End If
End Function 

Function GetPartTime( item, t1 )
	Select Case ( item )
		Case  "m", "mm": GetPartTime = DatePart("n",t1, 0, 0 )
		Case  "h", "hh" : GetPartTime = DatePart("h",t1, 0, 0 )
	End Select 
	GetPartTime = ZeroPad(item, GetPartTime )
End Function 

Function Str2Time( strTime )
	Str2Time = StrTwoTime( strTime, strTimeFormat )
End Function

Function StrTwoTime( strTime, theFormat )
	If Not bIsDebug Then On Error Resume Next
	Dim ho,mi,deli
	Dim formatArr, TimeArr,i
	formatArr = Split( theFormat, chr(1) )
	deli = formatArr(3)
	TimeArr = Split( strTime, deli )
	for i = 0 To 1
		If (formatArr(i) = "h") or (formatArr(i) = "hh") Then
			ho=Clng( TimeArr(i) )
		elseif (formatArr(i) = "m") or (formatArr(i) = "mm") Then
			mi=Clng( TimeArr(i) )
		end If
	next
	If( formatArr(3)= TimeArr(4) ) Then ho=ho+12
	StrTwoTime = TimeSerial(ho , mi , 0 )
	If Err<>0 Then StrTwoTime = NSTime()
End Function

Function Time2Str( dtTime )
	Time2Str = TimeTwoStr( dtTime, strTimeFormat )
End Function

Function TimeTwoStr( dtTime, theFormat )
	Dim ho,mi,deli, d1,d2,d3
	Dim Farra, isHourFirst

	If IsNull(dtTime) Then dtTime = TimeSerial(0 , 0 , 0 )
	Farra = Split( theFormat, chr(1) )
	d1 = GetPartTime( Farra(0), dtTime )
	d2 = GetPartTime( Farra(1), dtTime )
	deli = Farra(2)
	d3 = Farra(3)
	If d3 <> "" Then
		isHourFirst = CBool(Left(Farra(0),1)="h")
		ho = CLng( IIf(isHourFirst, d1, d2))
		If ho = 12 Then 
			d3 = Farra(4)
		Else
			If ho > 12 Then
				ho = ho - 12: d3 = Farra(4)
			ElseIf ho = 0 Then 
				ho = 12
			End If
			If isHourFirst Then d1 = ZeroPad(Farra(0), ho ) Else d2 = ZeroPad(Farra(1), ho )
		End If
		d3 = " " &d3
	End If
	TimeTwoStr = d1 & deli & d2 & d3
End Function

Function Time2Str_h_mm_ss( dtTime )
	Dim ho, mi, se
	If IsNull(dtTime) Then Time2Str_h_mm_ss = "00:00:00": Exit Function

	ho =  ZeroPad("h", Hour(dtTime))
	mi = ZeroPad("mm", Minute(dtTime))
	se = ZeroPad("ss", Second(dtTime))
	Time2Str_h_mm_ss = ho & ":" & mi & ":" & se
End Function

Function Str2Date( strDate )
	Str2Date = StrTwoDate( strDate, strDateFormat )
End Function

Function IsAllNumeric( arrData )
	Dim i
	For i=0 To UBound(arrData)
		If Not IsNumeric(arrData(i)) Then IsAllNumeric = False : Exit Function
	Next
	IsAllNumeric = True
End Function

Function StrTwoDate( strDate, datFormat )
	On Error Resume Next ' if error appears then return current date
	Dim mo,ye,da,deli
	Dim formatArr, dateArr, i

	StrTwoDate = NSDate
	If IsDull(strDate) Then Exit Function
	formatArr = Split( datFormat, chr(1) )
	deli = formatArr(3)
	dateArr = Split( strDate, deli )
	If Ubound(dateArr)<2 Then Exit Function
	If Not IsAllNumeric(dateArr) Then Exit Function
	For i = 0 To 2
		If (formatArr(i) = "m") Or (formatArr(i) = "mm") Then
			mo=Clng( dateArr(i) )
		ElseIf (formatArr(i) = "d") Or (formatArr(i) = "dd") Then
			da=Clng( dateArr(i) )
		ElseIf (formatArr(i) = "yy") Or (formatArr(i) = "yyyy") Then
			ye=Clng( dateArr(i) )
			If( ye < 100 ) Then
				If( ye < kFirstYear ) Then ye = 2000 + ye : Else ye = 1900 + ye 
			End If
		End If
	Next

	StrTwoDate = IIF(ye < 1000, NormalizeDate(DateSerial(ye , mo , da)), DateSerial(ye , mo , da))
	
	If Err <> 0 Then StrTwoDate = NSDate
End Function

Function Date2Js(dtDate)
	Dim nYearPart, nMonthPart, nDayPart

	nYearPart	= Year(dtDate)
	nMonthPart	= Month(dtDate)
	nDayPart	= Day(dtDate)

	Date2Js = "new Date(Date.UTC(" & nYearPart & ", " & nMonthPart - 1 & ", " & nDayPart & "))"
End Function

Function DateTwoStr( dtDate, datFormat )
	Dim deli, d1,d2,d3
	Dim Farra
	 
	Farra = Split( datFormat, chr(1) )
	deli = Farra(3)
	d1 = GetPart( Farra(0), dtDate )
	d2 = GetPart( Farra(1), dtDate )
	d3 = GetPart( Farra(2), dtDate )
	DateTwoStr = d1 & deli & d2 & deli & d3
End Function

Function DateTwoStr_NoYear( dtDate, datFormat )
	Dim deli, d1,d2
	Dim Farra
	Dim nIndex_1, nIndex_2

	Farra = Split( datFormat, chr(1) )
	deli = Farra(3)

	If Left(Farra(0), 1) = "y" Then
		nIndex_1 = 1
		nIndex_2 = 2
	ElseIf Left(Farra(1), 1) = "y" Then
		nIndex_1 = 0
		nIndex_2 = 2
	Else
		nIndex_1 = 0
		nIndex_2 = 1
	End If
	
	d1 = GetPart( Farra(nIndex_1), dtDate )
	d2 = GetPart( Farra(nIndex_2), dtDate )
	DateTwoStr_NoYear = d1 & deli & d2
End Function

Function NSNow()
	NSNow = DateAdd("h", CInt(strTimeOffset) - TZOffset() ,Now())
End Function

Function NSDate()
	NSDate = DateAdd("h", CInt(strTimeOffset) - TZOffset() ,Now())
	NSDate = DateSerial( Year(NSDate), Month(NSDate), Day(NSDate) )
End Function

Function NSTime()
	NSTime = DateAdd("h", CInt(strTimeOffset) - TZOffset() ,Time())
End Function

Function NormalizeDate( theDate )
	Dim nFirstYear
	nFirstYear = 1900 + kFirstYear
	If Year( theDate ) < nFirstYear Then NormalizeDate = DateSerial( nFirstYear, Month(theDate), Day(theDate) ) Else NormalizeDate = theDate
End	Function

Function GetFullDateFormat()
	GetFullDateFormat = Replace("dd mm yyyy .", " ", chr(1))
End Function

Function Date2SMS(dtDate)
	Date2SMS = DateTwoStr( dtDate, GetFullDateFormat() )
End Function

Function Date2SMSWithoutYear(dtDate)
	Dim arr
	arr = Split(Date2SMS(dtDate), ".")

	Date2SMSWithoutYear = arr(0) & "." & arr(1)
End Function

Function GetMinFromDates(dt1, dt2)
	GetMinFromDates = comHelper.DateHelper.GetMinFromDates(dt1, dt2)
End Function

' Local deployment patch: the original server-side JScript TZOffset() (see stdTime.asp.original)
' crashes the ASP script engine (ASP 0240, C0000005) on Windows 11 24H2+ where JScript is served by
' jscript9legacy. Same result in VBScript: server UTC offset in hours, from the active time zone bias.
Function TZOffset()
	Dim nBias
	On Error Resume Next
	nBias = CreateObject("WScript.Shell").RegRead("HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation\ActiveTimeBias")
	If Err.Number <> 0 Then nBias = 0
	On Error GoTo 0
	If nBias > 2147483647 Then nBias = nBias - 4294967296
	TZOffset = -nBias / 60
End Function
%>
