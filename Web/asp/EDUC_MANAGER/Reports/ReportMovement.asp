<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kDispl = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

Sub SpecialRead()
	Set objCommonYears = objNSNET.GetEMGlobalYearsList(strFilterEMID, -1, True)
	If objCommonYears.EOF Then
		bExit = True
		Exit Sub
	End If

	Call ReadEMMovementInterval(objCommonYears)
End Sub

Sub SpecialWrite()
	Call WriteGlobalYear()
End Sub

Sub SpecialFilters( strForm )
	If bExit Then Exit Sub
	InitEOTypes
	Call DrawEOTypes2(strForm)
	Call FilterYearAndDates()
	OpenFormGroup ""
	Dim i

	%><ul class="list-unstyled"><%
	For i=1 To 4
		 %><li class="text-right"><%
		rw obLanguage("EMReports","kAppend_" & i) & " "
		ButtonWithClass "report.generate({reportUrl: 'MovementAppend.asp', data: {Append: " & i & "}})", "Сформировать", "Сформировать", "", "btn-sm"
		 %></li><%
	Next
	%></ul><%
	CloseFormGroup
End Sub

%>
