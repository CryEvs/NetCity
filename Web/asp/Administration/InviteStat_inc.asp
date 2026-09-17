
<% ' © 2007-2013 IRTech. All rights reserved.

Const kTypeAll = -1
Const kTypeStaff = 1
Const kTypeStudent = 4
Const kTypeParent = 5
Const kTypeEMAdmin = 11
Const kTypeHDEM = 12
Const kTypeOFREM = 13

Const kTypeTime = 15
Const kTypeUser = 16
Const kTypeClass = 17

Dim objSchoolRS, objStat, nUserType, strViewSchoolID
Dim dtStartDate, dtEndDate
Dim bEmptyStat, nViewSchoolID, objStatAdmin, objStatEM
Dim nViewType

%>
<script language="javascript" id="FindUsers">
	function FindUsers() {
		var form = document.forms['MenuForm'];
		ShowInDialog(form, 'FindUsers.asp', null);
		//DoSubmit(form, 'FindUsers.asp');
	}
</script>
<%

Sub ReadState()
	Dim dtToday
		strViewSchoolID = strSchoolId
			'Set objSchoolRS = objNSNET.GetSchools()
			'If objSchoolRS.EOF Then GenerateError obLanguage("ServAdmin","kErrSchoolsNotExist")
			'If CLng(strViewSchoolID)=0 Then strViewSchoolID = CStr(objSchoolRS("SCHOOLID"))

	nViewSchoolID = CLng(strSchoolID)

	'If Not bIsEducManager Then
		nUserType = CLng(GetSafeID(Request("UserType"), GetSafeID( obTokenMgr.GetData(strToken, "StatUserType"), kTypeAll)))
		nViewType = CLng(GetSafeID(Request("ViewType"), GetSafeID( obTokenMgr.GetData(strToken, "StatViewType"), kTypeTime)))
	'End If
	' possible dates are within the current school year + summer time
	dtToday = NSDate()
	If Month(dtToday)>=9 Then
		dtMinDate = DateSerial( Year(dtToday)  , 6, 1 )
		dtMaxDate = DateSerial( Year(dtToday)+1, 8, 31 )
	Else
		dtMinDate = DateSerial( Year(dtToday)-1, 6, 1 )
		dtMaxDate = DateSerial( Year(dtToday)  , 8, 31 )
	End If

	If IsDull(Request("ADT")) Then
		If IsDull(obTokenMgr.GetData(strToken, stStartDate)) Then
			dtStartDate = dtToday
		Else
			dtStartDate = obTokenMgr.GetData(strToken, stStartDate)
		End If
	Else
		dtStartDate = Str2Date(Request("ADT"))
	End If
	If IsDull(Request("DDT")) Then
		If IsDull(obTokenMgr.GetData(strToken, stEndDate)) Then
			dtEndDate = dtToday
		Else
			dtEndDate = obTokenMgr.GetData(strToken, stEndDate)
		End If
	Else
		dtEndDate = Str2Date(Request("DDT"))
	End If
	If DateDiff("d",dtStartDate,dtMinDate,0,0)>0 Or DateDiff("d",dtStartDate,dtMaxDate,0,0)<0 Then dtStartDate = dtMinDate
	If DateDiff("d",dtEndDate,dtMinDate,0,0)>0 Or DateDiff("d",dtEndDate,dtMaxDate,0,0)<0 Then dtEndDate = dtMaxDate
End Sub

Sub Main
'FedorovSY	Dim objShapeCon
'FedorovSY	Set objShapeCon = Server.CreateObject("ADODB.Connection")
'FedorovSY	objShapeCon.Open "Provider=MSDataShape;Data " & obTokenMgr.GetData(strToken,"DB_STRING")
	Dim nAdminCnt, nEMCnt
	If Not bIsEducManager Then
		Set objStat = objNSNET.GetUserLoginStats(CLng(strSchoolID), nUserType, dtStartDate, dtEndDate)
		bEmptyStat = objStat.EOF
	Else
		Select Case nViewSchoolID
			Case -1
				Set objStat = objNSNET.GetEMUserLoginStatsForAdmins(True, nViewSchoolID, 0, dtStartDate, dtEndDate)
			Case -2
				Set objStat = objNSNET.GetEMUserLoginStats(strEMID, dtStartDate, dtEndDate)
			Case -3
				Set objStat = objNSNET.GetEMUserLoginStatsForSchools(strEMID, nViewSchoolID, dtStartDate, dtEndDate)
				Set objStatAdmin = objNSNET.GetEMUserLoginStatsForAdmins(False, -1, 0, dtStartDate, dtEndDate)
				Set objStatEM = objNSNET.GetEMUserLoginStatsForAdmins(False, -2, strEMID, dtStartDate, dtEndDate)
			Case Else
				Set objStat = objNSNET.GetEMUserLoginStatsForSchools(strEMID, nViewSchoolID, dtStartDate, dtEndDate)
		End Select
		If nViewSchoolID = -3 Then
			bEmptyStat = False
			If objStat.EOF Then
				nAdminCnt = 0
				nEMCnt = 0
				If Not objStatAdmin.EOF Then nAdminCnt = GetSafeLng(objStatAdmin("cntAdmins"), Null)
				If Not objStatEM.EOF Then nEMCnt = GetSafeLng(objStatEM("cntAdmins"), Null)
				bEmptyStat = (nAdminCnt = 0) And (nEMCnt = 0)
			End If
		Else
			bEmptyStat = objStat.EOF
		End If
	End If
	TestError obLanguage("ServAdmin","kErrCantGetUserStatistics")
End Sub

Sub DrawTable()
	Dim strLogoutTime, bShowDate, objRolesRs, nRole, strRoles, n, i, strClassList, arrList
	Dim objRsStudCounts
	Dim objRsStaffsCounts
	Dim objRsParentsCounts
	Dim nDaySumCnt
	If bEmptyStat Then%>
		<h3 align="left"><%=obLanguage("ServAdmin","kNoUserStatistics")%></h3><%
	Else 
		n = 0 
		If Not bIsEducManager Then%>
			<TABLE border="1" cellpadding="3" cellspacing="0" class="thintable">
			<TR>
			<%If CLng(strViewSchoolID)=-3 Then%><TH><%=obLanguage("ServAdmin","kEducInst")%></TH><%End IF%>
			<TH><%=obLanguage("Common","kDisplayName")%></TH><%If CLng(strViewSchoolID) > 0 Or CLng(strViewSchoolID) = -3 Then%><TH><%=obLanguage("Common","kRoles")%></TH><%End If%>
			<TH><%=obLanguage("ServAdmin","kLoginTime")%></TH><TH><%=obLanguage("ServAdmin","kLogoutTime")%></TH><TH><%=obLanguage("ServAdmin","kIPAddress")%></TH><%
			If (CLng(strViewSchoolID)>0) And ((nUserType=kTypeStudent) Or (nUserType=kTypeParent)) Then%><TH><%=obLanguage("Common","kClass",strFunctionalityType)%></TH><%End If%></TR><%
			bShowDate = ( Day(dtStartDate) <> Day(dtEndDate) )
			If Not bShowDate Then
				bShowDate = (Month(dtStartDate) <> Month(dtEndDate)) Or (Year(dtStartDate) <> Year(dtEndDate))
			End If
			Do While Not objStat.EOF
				Response.Write "<TR>"
				If CLng(strViewSchoolID)=-3 Then Response.Write "<TD nowrap>" & DB2HTML(objStat("SCHOOLNAME")) & "</TD>"
				Response.Write "<TD>"& DB2HTML(objStat("NICKNAME")) &"</TD>"

				If CLng(strViewSchoolID) > 0 Or CLng(strViewSchoolID) = -3 Then
					Set objRolesRs = objStat("ROLES").Value
					If objRolesRs.EOF Then
						strRoles = "-"
					Else
						nRole = CLng(objRolesRs("ROLEID"))
						If nRole=rlStudent Then
							strRoles = obLanguage("Common","Ученик",strFunctionalityType)
						ElseIf nRole=rlParent Then
							strRoles = obLanguage("Common","kParent")
						ElseIf nRole=rlMinorStaff Then
							strRoles = obLanguage("ServAdmin","kRoleAbbr_Tech")
						Else
							strRoles = ""
							Do While Not objRolesRs.EOF
								strRoles = strRoles & objRolesRs("ABBREV")
								objRolesRs.MoveNext
							Loop
						End If
					End If
					Response.Write "<TD ALIGN=""CENTER""><B>"& strRoles &"</B></TD>"
				End If
				Response.Write "<TD>"

				If bShowDate Then Response.Write Date2Str(objStat("TIME1")) &" "
				Response.Write Time2Str_h_mm_ss(objStat("TIME1")) &"</TD>"
				If IsNull(objStat("TIME2")) Then
					strLogoutTime = "-"
				Else
					If bShowDate Then strLogoutTime = Date2Str(objStat("TIME2")) &" " Else strLogoutTime = ""
					strLogoutTime = strLogoutTime & Time2Str_h_mm_ss(objStat("TIME2"))
				End If
				Response.Write "<TD>"& strLogoutTime &"</TD><TD>"& CStr(objStat("REMOTEADDR")) &"</TD>"
				If (CLng(strViewSchoolID)>0) And ((nUserType=kTypeStudent) Or (nUserType=kTypeParent)) Then
					strClassList = ""
					If Not IsNull(objStat("EXTRAINFO")) Then
						arrList = Split( CStr(objStat("EXTRAINFO")), "|" )
						i=0
						Do While i<=UBound(arrList)
							If Len(CStr(arrList(i)))>0 Then
								If strClassList="" Then
									strClassList = objNSNET.GetClassNameIfExist(CStr(arrList(i)))
								Else
									strClassList = strClassList & ", " & objNSNET.GetClassNameIfExist(CStr(arrList(i)))
								End If
							End If
							i=i+1
						Loop
					End If
					If strClassList="" Then strClassList="&nbsp;"
					Response.Write "<TD>"& strClassList &"</TD>"
				End If
				Response.Write "</TR>" & Chr(13)&Chr(10)
				n = n+1
				objStat.MoveNext
			Loop
			%></TABLE><%
		Else 'EducManager
			n = DrawTableEM()
		End IF
		Response.Write "<br><div class=""smallheader"">" & obLanguage("ServAdmin","kTotalLogins") & ": " & GreenText(CStr(n)) & "</div>"
	End If
End Sub

Function DrawTableEM()
	Dim strRowSpan, strColName, bByRoles
	Dim bByDates
	Dim nCnt
	Dim nDaySumCnt, nCntStudents, nCntStaff, nCntParents

	bByDates = nViewSchoolID <> -3
	strColName = IIf(bByDates, obLanguage("Common","kDate"), obLanguage("ServAdmin","kEducInst"))
	bByRoles = Not (nViewSchoolID = -1) ' Or nViewSchoolID = -2)
	strRowSpan = IIf(bByRoles, "rowspan=""2""", "")%>

	<TABLE border="1" cellpadding="3" cellspacing="0" class="thintable">
	<TR><TH <%=strRowSpan%>><%=strColName%></TH><TH <%=strRowSpan%>><%=obLanguage("ServAdmin","kAllLoginsCount")%></TH><%
	If bByRoles Then%>
		<TH colspan="3"><%=obLanguage("ServAdmin","kIncluding")%></TH></TR>
		<TR><TH><%=IIF(nViewSchoolID=-2,obLanguage("ServAdmin","kEMAdmins"),obLanguage("Common","kStudents",strFunctionalityType))%></TH><TH><%=IIF(nViewSchoolID=-2,obLanguage("ServAdmin","kHDEMs"),obLanguage("Common","kStaffs"))%></TH><TH><%=IIF(nViewSchoolID=-2,obLanguage("ServAdmin","kOFREMs"),obLanguage("Common","kParents"))%></TH><%
	End If%>
	</TR><%

	nCnt = 0
	While Not objStat.EOF
		Response.Write "<TR><TD>"
		If bByDates Then
			Response.Write Date2Str(objStat("LOGDATE"))
		Else
			Response.Write DB2HTML(objStat("SCHOOLNAME"))
		End If
		Response.Write "</TD>"
		If bByRoles Then
			nCntStudents = GetSafeLng(objStat(IIF(nViewSchoolID=-2,"cntEMAdmin","cntStudents")), Null)
			nCntStaff = GetSafeLng(objStat(IIF(nViewSchoolID=-2,"cntHDEM","cntStaff")), Null)
			nCntParents = GetSafeLng(objStat(IIF(nViewSchoolID=-2,"cntOFREM","cntParents")), Null)
			nDaySumCnt = nCntStudents + nCntStaff + nCntParents
			Response.Write "<TD ALIGN=""CENTER"">" & nDaySumCnt & _
				"</TD><TD ALIGN=""CENTER"">" & IIF(nCntStudents > 0, nCntStudents, "&nbsp;") & _
				"</TD><TD ALIGN=""CENTER"">" & IIF(nCntStaff > 0, nCntStaff, "&nbsp;") & _
				"</TD><TD ALIGN=""CENTER"">" & IIF(nCntParents > 0, nCntParents, "&nbsp;") & "</TD>"
		Else
			nDaySumCnt = GetSafeLng(objStat("cntAdmins"), Null)
			Response.Write "<TD ALIGN=""CENTER"">" & nDaySumCnt & "</TD>"
		End If
		Response.Write "</TR>"
		nCnt = nCnt + nDaySumCnt

		objStat.MoveNext
	Wend

	If Not bByDates Then ' By SchoolNames
		If Not objStatAdmin.EOF Then
			nDaySumCnt = GetSafeLng(objStatAdmin("cntAdmins"), Null)
			If nDaySumCnt > 0 Then
				Response.Write "<TR><TD>" & obLanguage("ServAdmin","kSAName") & "</TD><TD ALIGN=""CENTER"">" & nDaySumCnt & "</TD><TD COLSPAN=""3"">&nbsp;</TD></TR>"
				nCnt = nCnt + nDaySumCnt
			End If
		End If
		If Not objStatEM.EOF Then
			nDaySumCnt = GetSafeLng(objStatEM("cntAdmins"), Null)
			If nDaySumCnt > 0 Then
				Response.Write "<TR><TD>" & obLanguage("Common","kEMName") & "</TD><TD ALIGN=""CENTER"">" & nDaySumCnt & "</TD><TD COLSPAN=""3"">&nbsp;</TD></TR>"
				nCnt = nCnt + nDaySumCnt
			End If
		End If
	End If%>
	</TABLE><%

	DrawTableEM = nCnt
End Function
%>
