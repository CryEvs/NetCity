<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Calendar/PublicWeekClasses_inc.asp" -->
<% ' © 2007-2008 IRTech. All rights reserved.
Sub onDrawPage()
	Response.Write GetPageTitleExcel( obLanguage("Calendar","kScheduleOn") & nWeekInYear & obLanguage("Calendar","kWeekFrom")&": "&obLanguage("Calendar","kFrom")&" " & Date2Str(BDate) &" "&obLanguage("Calendar","kTo")&" "& Date2Str(EDate), GetArrPageTitle())
	If Not bExit Then
		If objScheduleRs.RecordCount = 0 And Not bHasEvents Then
			Response.Write GetWarningExcel(obLanguage("Calendar","kNoClassMeetings"))
		Else
			Call DrawSubjTable()
		End If
	End If
	Response.Write GetPageVerExcel()
End Sub
%>
