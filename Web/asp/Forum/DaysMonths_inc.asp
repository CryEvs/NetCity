
<% ' © 2007-2008 IRTech. All rights reserved.

Dim arrMonths, arrWeekDays, arrMonthsShort

Sub InitDaysMonths
	ReDim arrMonthsShort(11)
	arrMonthsShort(0)	=	obLanguage("DaysMonths","kMonJanuaryS")
	arrMonthsShort(1)	=	obLanguage("DaysMonths","kMonFebruaryS")
	arrMonthsShort(2)	=	obLanguage("DaysMonths","kMonMarchS")
	arrMonthsShort(3)	=	obLanguage("DaysMonths","kMonAprilS")
	arrMonthsShort(4)	=	obLanguage("DaysMonths","kMonMayS")
	arrMonthsShort(5)	=	obLanguage("DaysMonths","kMonJuneS")
	arrMonthsShort(6)	=	obLanguage("DaysMonths","kMonJulyS")
	arrMonthsShort(7)	=	obLanguage("DaysMonths","kMonAugustS")
	arrMonthsShort(8)	=	obLanguage("DaysMonths","kMonSeptemberS")
	arrMonthsShort(9)	=	obLanguage("DaysMonths","kMonOctoberS")
	arrMonthsShort(10)	=	obLanguage("DaysMonths","kMonNovemberS")
	arrMonthsShort(11)	=	obLanguage("DaysMonths","kMonDecemberS")

	ReDim arrWeekDays(6)
	arrWeekDays(0)	=	obLanguage("DaysMonths","kWDMondayS")
	arrWeekDays(1)	=	obLanguage("DaysMonths","kWDTuesdayS")
	arrWeekDays(2)	=	obLanguage("DaysMonths","kWDWednesdayS")
	arrWeekDays(3)	=	obLanguage("DaysMonths","kWDThursdayS")
	arrWeekDays(4)	=	obLanguage("DaysMonths","kWDFridayS")
	arrWeekDays(5)	=	obLanguage("DaysMonths","kWDSaturdayS")
	arrWeekDays(6)	=	obLanguage("DaysMonths","kWDSundayS")
End Sub

Function GetTimeStr ( dtTimeStamp )
	If Not IsDull( dtTimeStamp ) Then
		GetTimeStr = arrWeekDays( DatePart( "w", dtTimeStamp, 2, 0 ) - 1 ) & ", " &_
				DatePart( "d", dtTimeStamp ) &_
				" " & arrMonthsShort( DatePart("m", dtTimeStamp)-1 ) & " " &_
				DatePart( "yyyy", dtTimeStamp ) & " " & FormatDateTime( dtTimeStamp, vbShortTime )
	Else
		GetTimeStr = ""
	End If
End Function
%>
