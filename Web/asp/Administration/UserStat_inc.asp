<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Const kTypeAll = -1
Const kTypeStaff = 1
Const kTypeStudent = 4
Const kTypeParent = 5
Const kTypeEMAdmin = 11
Const kTypeHDEM = 12
Const kTypeOFREM = 13

Const kExtraInfoRolePart = 0
Const kExtraInfoClassPart = 1

Const kOrgType_EO = 1
Const kOrgType_EM = 2
Const kOrgType_ServAdmin = 3

Dim objSchoolRS, objStat, nUserType
Dim bEmptyStat, nViewSchoolID, objStatAdmin, objStatEM
Dim nOrgType


Sub ReadState()
	Dim dtToday
	SetScriptTimeOut 900
	nOrgType = GetSafeLng(Request("OrgType"), kOrgType_EO)
	Call InitSchools()
	'If Not bIsEducManager Then
		nUserType = CLng(GetSafeID(Request("UserType"), GetSafeID( obTokenMgr.GetData(strToken, "StatUserType"), kTypeAll)))
	'End If
	' possible dates are within the current school year + summer time + one past year
	dtToday = NSDate()
	If Month(dtToday)>=9 Then
		dtMinDate = DateSerial( Year(dtToday)-1, 6, 1 )
		dtMaxDate = DateSerial( Year(dtToday)+1, 8, 31 )
	Else
		dtMinDate = DateSerial( Year(dtToday)-2, 6, 1 )
		dtMaxDate = DateSerial( Year(dtToday)  , 8, 31 )
	End If
	Call ReadDatePeriod(dtToday, dtMinDate, dtMaxDate)

End Sub

Sub InitSchools
	If bIsSchool Then
		nViewSchoolID = strSchoolId
	Else
		nViewSchoolID = GetSafeID(Request("SCHOOL"), GetSafeID( obTokenMgr.GetData(strToken, "ViewSchoolID"), 0) )
		If bIsAdminInterface Then
			Set objSchoolRS = objNSNET.GetSchools()
			If objSchoolRS.EOF Then GenerateError obLanguage("ServAdmin","kErrSchoolsNotExist")
			If CLng(nViewSchoolID)=0 Then nViewSchoolID = CStr(objSchoolRS("SCHOOLID"))
		ElseIf bIsEducManager Then
			Set objSchoolRS = objNSNET.GetEMSchools(strEMID, kWizardSteps)
			If CLng(nViewSchoolID)=0 Then 
				If objSchoolRS.EOF Then
					nViewSchoolID = -2
				Else
					nViewSchoolID = CStr(objSchoolRS("SCHOOLID"))
				End If
			End If
		End If
	End If
	nViewSchoolID = CLng(nViewSchoolID)
End Sub

Sub Main
	Dim nAdminCnt, nEMCnt
	If Not bIsEducManager Then
		Set objStat = objNSNET.GetUserLoginStats(CLng(nViewSchoolID), nUserType, dtStartDate, dtEndDate)

		bEmptyStat = objStat.EOF
	Else
		Select Case nOrgType
			Case kOrgType_EO
				If nViewSchoolID = -1 Then nViewSchoolID = -3
				Set objStat = objNSNET.GetEMUserLoginStatsForSchools(strEMStateID, strEMProvinceID, strEMCityID, strEMSchoolTypeID, nViewSchoolID, dtStartDate, dtEndDate)
				bEmptyStat = objStat.EOF
			Case kOrgType_EM
				nViewSchoolID = -2
				Set objStat = objNSNET.GetEMUserLoginStats(strFilterEMID, dtStartDate, dtEndDate)
				bEmptyStat = objStat.EOF
			Case kOrgType_ServAdmin
				nViewSchoolID = -1
				Set objStat = objNSNET.GetEMUserLoginStatsForAdmins(True, -1, 0, dtStartDate, dtEndDate)
			Case Else
				GenerateError obLanguage("Common","kUnexpErr") 
		End Select
	End If
	TestError obLanguage("ServAdmin","kErrCantGetUserStatistics")
End Sub

Sub ParseExtraInfo(strExtraInfo, nSessionRole, ClassInfo)
	Dim arrExtraInfo
	If Not IsDull(strExtraInfo) Then
		If InStr(1, strExtraInfo, "+") > 0 Then
			arrExtraInfo = Split( strExtraInfo, "+" )
			nSessionRole = CLng((Split(arrExtraInfo(kExtraInfoRolePart), "|"))(1))
			ClassInfo = arrExtraInfo(kExtraInfoClassPart)
		Else
			nSessionRole = Empty
			ClassInfo = strExtraInfo
		End If
	Else
		nSessionRole = Empty
		ClassInfo = Empty
	End If
End Sub

Function isShowRoles()
	isShowRoles = (CLng(nViewSchoolID) > 0 Or CLng(nViewSchoolID) = -3)
End Function

Function isDrawClassName()
	isDrawClassName = (CLng(nViewSchoolID)>0) And ((nUserType=kTypeStudent) Or (nUserType=kTypeParent))
End Function

Sub DrawTable()
	Dim strLogoutTime, bShowDate, nRole, strRoles, n, i, strClassList, arrExtraInfo
	Dim objRsStudCounts
	Dim objRsStaffsCounts
	Dim objRsParentsCounts
	Dim nDaySumCnt
	Dim ClassInfo

	If bEmptyStat Then
		Call DrawInfo(obLanguage("ServAdmin","kNoUserStatistics"), True)
		Exit Sub
	End If
	n = 0 
	If Not bIsEducManager Then%>
		<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block">
		<tr>
		<%If CLng(nViewSchoolID)=-3 Then%><th><%=obLanguage("ServAdmin","kEducInst")%></th><%End IF%>
		<th><%=obLanguage("Common","kDisplayName")%></th>
			<%If isShowRoles() Then%><th><%=obLanguage("Common","kRoles")%></th><%End If%>
		<th><%=obLanguage("ServAdmin","kLoginTime")%></th>
		<th><%=obLanguage("ServAdmin","kLogoutTime")%></th>
		<th><%=obLanguage("ServAdmin","kIPAddress")%></th><%
		If isDrawClassName() Then%><th><%=obLanguage("Common","kClass",strFunctionalityType)%></th><%End If%></tr><%
		bShowDate = ( Day(dtStartDate) <> Day(dtEndDate) )
		If Not bShowDate Then
			bShowDate = (Month(dtStartDate) <> Month(dtEndDate)) Or (Year(dtStartDate) <> Year(dtEndDate))
		End If
		Do While Not objStat.EOF
			'stop
			'Call ParseExtraInfo(objStat("EXTRAINFO"), nRole, ClassInfo)
			nRole = GetSafeLng(objStat("USERSTATROLEID"), -1)
			if nRole = -1 Then
				nRole = Empty
			End If
			'nRole = objStat("USERSTATROLEID")
			ClassInfo = GetSafeLng(objStat("USERSTATCLASSID"), "-1")
			'if ClassInfo = -1 Then
			'	ClassInfo = Empty
			'End If
			If IsDrawUserRow(nRole, ClassInfo) Then
				Call DrawUserRow(nRole, ClassInfo, bShowDate)
				n = n + 1
			End If
			objStat.MoveNext
		Loop
		%></table><%
	Else 'EducManager
		n = DrawTableEM()
	End IF%>
	<div class="row print-block">
		<div class="col-md-6"> 
			<span class="glyphicon glyphicon-user"></span>
			<small><%= obLanguage("ServAdmin","kTotalLogins")%></small>
			<strong><%= CStr(n)%></strong>
		</div>
	</div><%
End Sub

Function IsDrawUserRow(sessionRole, ClassInfo)
	IsDrawUserRow = False

	If IsDull(sessionRole) Then 
		IsDrawUserRow = True
		Exit Function
	End IF

	If nUserType = kTypeAll Then
		IsDrawUserRow = True
	End If

	If sessionRole = RoleGroup_Parents And nUserType = kTypeParent Then
		IsDrawUserRow = True
		Exit Function
	End If
	
	If sessionRole = RoleGroup_Staffs And nUserType = kTypeStaff Then
		IsDrawUserRow = True
		Exit Function
	End If
		
	If sessionRole = RoleGroup_Students And nUserType = kTypeStudent Then
		IsDrawUserRow = True
		Exit Function
	End If

End Function

Function GetStaffAbbrev(objRolesRs)
	Dim strAbbr
	Do While Not objRolesRs.EOF
		strAbbr = strAbbr & objRolesRs("ABBREV")
		objRolesRs.MoveNext
	Loop
	GetStaffAbbrev = strAbbr
End Function

Function GetUserRoles(objRolesRs, nSessionRole)
	Dim strRoles
	If objRolesRs.EOF Then
		strRoles = "-"
	Else
		If isEmpty(nSessionRole) Then
			nSessionRole = CLng(objRolesRs("ROLEID"))
			If nSessionRole = rlStudent Then
				strRoles = obLanguage("Common","kStudent",strFunctionalityType)
			Else
				if nUserType = rlParent Then
					objRolesRs.Find("ROLEID=" & rlParent)
					strRoles = IIF(objRolesRs.EOF, "-", obLanguage("Common","kParent"))
				Else
					objRolesRs.Find("ROLEID=" & rlParent)
					If Not objRolesRs.EOF Then
						'Родитель
						strRoles = obLanguage("Common","kParent") & " "
						If objRolesRs.RecordCount > 1 Then 
							objRolesRs.Filter = "ROLEID<>" & rlParent
							'+Сотрудник
							strRoles = GetStaffAbbrev(objRolesRs) & " " & strRoles
						End If
					Else
						'Сотрудник
						objRolesRs.MoveFirst
						strRoles = GetStaffAbbrev(objRolesRs)
					End If
				End If
			End If
		Else
			If nSessionRole = RoleGroup_Staffs Then
				strRoles = GetStaffAbbrev(objRolesRs)
			ElseIf nSessionRole = RoleGroup_Parents Then
				strRoles = obLanguage("Common","kParent")
			End If
		End If
	End If
	GetUserRoles = strRoles
End Function

Sub DrawUserRow(nRole, strClassList, bShowDate)
	Dim strLogoutTime
	Response.Write "<tr>"
	If CLng(nViewSchoolID)=-3 Then Response.Write "<td class=""text-nowrap"">" & DB2HTML(objStat("SCHOOLNAME")) & "</td>"
	Response.Write "<td>" & DB2HTML(objStat("NICKNAME")) & "</td>"

	If isShowRoles() Then
		Response.Write "<td align=""CENTER""><b>" & GetUserRoles( objStat("ROLES").Value, nRole) & "</b></td>"
	End If

	Response.Write "<td>"
	If bShowDate Then Response.Write Date2Str(objStat("TIME1")) & " "
	Response.Write Time2Str_h_mm_ss(objStat("TIME1")) &"</td>"

	If IsNull(objStat("TIME2")) Then
		strLogoutTime = "-"
	Else
		strLogoutTime = IIF(bShowDate, Date2Str(objStat("TIME2")) & " ", "") & Time2Str_h_mm_ss(objStat("TIME2"))
	End If
	Response.Write "<td>"& strLogoutTime &"</td><td>"& CStr(objStat("REMOTEADDR")) &"</td>"

	If isDrawClassName() Then
		'Response.Write "<td>" & GetUserClassNames(strClassList) & "</td>"
		Response.Write "<td>" & objNSNET.GetClassNameIfExist(strClassList) &"</td>"
	End If
	Response.Write "</tr>" & Chr(13)&Chr(10)
End Sub

Function GetUserClassNames(strClassExtraInfo)
	Dim i
	Dim strClassList, arrList
	strClassList = ""
	arrList = Split( strClassExtraInfo, "|" )
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
	If strClassList = "" Then strClassList="&nbsp;"
	GetUserClassNames = strClassList
End Function

Function DrawTableEM()
	Dim strRowSpan, strColName, bByRoles
	Dim bByDates
	Dim nCnt
	Dim nDaySumCnt, nCntStudents, nCntStaff, nCntParents

	bByDates = nViewSchoolID <> -3
	strColName = IIf(bByDates, obLanguage("Common","kDate"), obLanguage("ServAdmin","kEducInst"))
	bByRoles = Not (nViewSchoolID = -1) ' Or nViewSchoolID = -2)
	strRowSpan = IIf(bByRoles, "rowspan=""2""", "")%>

	<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block">
	<tr><th <%=strRowSpan%>><%=strColName%></th><th <%=strRowSpan%>><%=obLanguage("ServAdmin","kAllLoginsCount")%></th><%
	If bByRoles Then%>
		<th colspan="3"><%=obLanguage("ServAdmin","kIncluding")%></th></tr>
		<tr><th><%=IIF(nViewSchoolID=-2,obLanguage("ServAdmin","kEMAdmins"),obLanguage("Common","kStudents",strFunctionalityType))%></th><th><%=IIF(nViewSchoolID=-2,obLanguage("ServAdmin","kHDEMs"),obLanguage("Common","kStaffs"))%></th><th><%=IIF(nViewSchoolID=-2,obLanguage("ServAdmin","kOFREMs"),obLanguage("Common","kParents"))%></th><%
	End If%>
	</tr><%

	nCnt = 0
	While Not objStat.EOF
		Response.Write "<tr><td>"
		If bByDates Then
			Response.Write Date2Str(objStat("LOGDATE"))
		Else
			Response.Write DB2HTML(objStat("SCHOOLNAME"))
		End If
		Response.Write "</td>"
		If bByRoles Then
			nCntStudents = GetSafeLng(objStat(IIF(nViewSchoolID=-2,"cntEMAdmin","cntStudents")), Null)
			nCntStaff = GetSafeLng(objStat(IIF(nViewSchoolID=-2,"cntHDEM","cntStaff")), Null)
			nCntParents = GetSafeLng(objStat(IIF(nViewSchoolID=-2,"cntOFREM","cntParents")), Null)
			nDaySumCnt = nCntStudents + nCntStaff + nCntParents
			Response.Write "<td class=""text-center"">" & nDaySumCnt & _
				"</td><td class=""text-center"">" & IIF(nCntStudents > 0, nCntStudents, "&nbsp;") & _
				"</td><td class=""text-center"">" & IIF(nCntStaff > 0, nCntStaff, "&nbsp;") & _
				"</td><td class=""text-center"">" & IIF(nCntParents > 0, nCntParents, "&nbsp;") & "</td>"
		Else
			nDaySumCnt = GetSafeLng(objStat("cntAdmins"), Null)
			Response.Write "<td class=""text-center"">" & nDaySumCnt & "</td>"
		End If
		Response.Write "</tr>"
		nCnt = nCnt + nDaySumCnt

		objStat.MoveNext
	Wend

'	If Not bByDates Then ' By SchoolNames
	If False Then ' By SchoolNames
		If Not objStatAdmin.EOF Then
			nDaySumCnt = GetSafeLng(objStatAdmin("cntAdmins"), Null)
			If nDaySumCnt > 0 Then
				Response.Write "<tr><td>" & obLanguage("ServAdmin","kSAName") & "</td><td class=""text-center"">" & nDaySumCnt & "</td><td colspan=""3"">&nbsp;</td></tr>"
				nCnt = nCnt + nDaySumCnt
			End If
		End If
		If Not objStatEM.EOF Then
			nDaySumCnt = GetSafeLng(objStatEM("cntAdmins"), Null)
			If nDaySumCnt > 0 Then
				Response.Write "<tr><td>" & obLanguage("Common","kEMName") & "</td><td class=""text-center"">" & nDaySumCnt & "</td><td colspan=""3"">&nbsp;</td></tr>"
				nCnt = nCnt + nDaySumCnt
			End If
		End If
	End If%>
	</TABLE><%

	DrawTableEM = nCnt
End Function
%>
