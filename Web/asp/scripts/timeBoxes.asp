<% ' © 2007-2008 IRTech. All rights reserved.
Sub ShowTimeBox(strName, tmTime)
	Dim Farra, hasAM, maxHour, minHour
	Dim nHours, nMinutes, i, nAM

	Farra = Split(strTimeFormat, chr(1))
	hasAM = (Farra(3) <> "")
	If hasAM Then maxHour = 12 : minHour = 1 Else maxHour = 23 : minHour = 0

	If IsNull( tmTime ) Then
		nHours		= -1
		nMinutes	= -1
		nAM			= -1
	Else
		nHours		= Hour(tmTime)
		nMinutes	= Minute(tmTime)

		If nHours = 0 And nMinutes = 0 Then
			nHours		= -1
			nMinutes	= -1
			nAM			= -1
		Else
			If hasAM Then 
				If nHours < 12 Then nAM = 1 Else nAM = 2

				If nHours = 0 Then
					nHours = 12
				ElseIf nHours > 12 Then
					nHours = nHours - 12
				End If
			End If

			nMinutes = Fix(nMinutes/5) * 5
		End If
	End If%>

	<div class="row">
		<div class="col-md-8">
			<div class="input-group"><%
				Response.Write "<SELECT NAME=""" & strName & "H"" OnChange=""dataChanged()"" class=""form-control"">"
				Response.Write "<OPTION "
				If nHours = -1 Then Response.Write "SELECTED "
				Response.Write "VALUE=""-1"">&nbsp;&nbsp;</OPTION>"

				For i = minHour To maxHour
					Response.Write "<OPTION "
					If i = nHours Then Response.Write "SELECTED "
					Response.Write "VALUE=""" & i & """>"
					If i < 10 Then Response.Write "0"
					Response.Write i & "</OPTION>"
				Next

				Response.Write "</SELECT>"

				Response.Write "<span class=""input-group-addon"">:</span>"

				Response.Write "<SELECT NAME=""" & strName & "M"" OnChange=""dataChanged()"" class=""form-control"">"
				Response.Write "<OPTION "
				If nMinutes = -1 Then Response.Write "SELECTED "
				Response.Write "VALUE=""-1"">&nbsp;&nbsp;</OPTION>"

				For i = 0 To 11
					Response.Write "<OPTION "
					If 5 * i = nMinutes Then Response.Write "SELECTED "
					Response.Write "VALUE=""" & 5 * i & """>"
					If 5 * i < 10 Then Response.Write "0"
					Response.Write 5 * i & "</OPTION>"
				Next

				Response.Write "</SELECT>"%>
			</div>
		</div>
		<div class="col-md-4"><%
			If hasAM Then
				Response.Write "<SELECT NAME=""" & strName & "A"" OnChange=""dataChanged()"" class=""form-control"">"
				Response.Write "<OPTION "

				If nAM = -1 Then Response.Write "SELECTED "
				Response.Write "VALUE=""-1"">&nbsp;&nbsp;</OPTION>"

				Response.Write "<OPTION "
				If nAM = 1 Then Response.Write "SELECTED "
				Response.Write "VALUE=""AM"">AM</OPTION>"

				Response.Write "<OPTION "
				If nAM = 2 Then Response.Write "SELECTED "
				Response.Write "VALUE=""PM"">PM</OPTION>"

				Response.Write "</SELECT>"
			End If%>
		</div>
	</div><%
End Sub

Function GetBoxTime(strName)
	Dim nHours, nMinutes, Farra

	nHours = GetSafeLng(Request(strName&"H"),-1)
	If nHours = -1 Then
		GetBoxTime = null
	Else
		Farra = Split(strTimeFormat, chr(1))

		If Farra(3) <> "" Then
			If GetSafeStr(Request( strName & "A"),2,"") = "AM" Then
				If nHours = 12 Then nHours = 0
			Else
				If nHours = 12 Then nHours = 12 Else  nHours = 12 + nHours
			End If
		End If

		nMinutes = GetSafeLng(Request(strName&"M"),0)
		GetBoxTime = TimeSerial(nHours,nMinutes,0)
	End If
End Function

Function GetBoxTimeIndexed(strName, j)
	Dim nHours, nMinutes, Farra

	nHours = GetSafeLng(Request(strName & "H")(j),-1)

	If nHours = -1 Then
		GetBoxTimeIndexed = null
	Else
		Farra = Split( strTimeFormat, chr(1) )
		If Farra(3) <> "" Then
			If GetSafeStr(Request( strName&"A")(j),2,"") = "AM" Then
				If nHours = 12 Then nHours = 0
			Else
				If nHours = 12 Then nHours = 12 Else  nHours = 12 + nHours
			End If
		End If

		nMinutes = GetSafeLng(Request(strName&"M")(j),0)
		GetBoxTimeIndexed = TimeSerial(nHours,nMinutes,0)
	End If
End Function

Sub CheckTime(varName, FieldName)
	Dim Farra

	Farra = Split( strTimeFormat, chr(1) )%>
	var <%=varName%>;
	elHours = form.elements['<%=FieldName%>H'];
	hours = getListValue(elHours);
	elMinutes = form.elements['<%=FieldName%>M'];
	minutes = getListValue(elMinutes);
	
	if ((hours == -1 ) && (minutes == -1 ))
		<%=varName%> = null;
	else {
		if (hours == -1){
			focusAlert(elHours, language.Generic.Common.kErrMissTime)
			return false;
		}
		if (minutes == -1) {
			focusAlert(elMinutes, language.Generic.Common.kErrMissTime)
			return false;
		}
		hh = str2lng(hours);
	<%If Farra(3) <> ""  Then%>
		elAMPM = form.elements['<%=FieldName%>A'];
		ampm = getListValue(elAMPM);
		if (ampm == -1) {
			focusAlert(elAMPM, language.Generic.Common.kErrMissTime)
			return false;
		}
		if(ampm == 'AM') {
			if ( hh == 12 ) hh = 0;
		}
		else {
			if ( hh != 12 ) hh= hh + 12;
		}
	<%End If%>
		<%=varName%> = 60 *hh + str2lng(minutes);
	}<%
End Sub%>