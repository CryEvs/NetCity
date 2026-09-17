<% ' © 2007-2011 IRTech. All rights reserved.
Const MAX_AT_SIZE = 255
'--------- Check for Access token -------
Dim strToken
Dim strUserID, strUserName
Dim strSchoolName, strSchoolShortName, strSchoolID, strSchoolYearID, strSchoolYearName, strCurrYearID, readonly, bFutureMode, strCurrGlobalYearId
Dim bExistsIupClasses
Dim strDateFormat, strTimeFormat, strTimeOffset, strTimeServerOffset', nEMUserDistrictID
Dim strEmFullName, strEMID, bIsEducManager, bIsAdminInterface, bIsEMForSchool, bIsSchool, bIsEMRO, strHLevel
Dim strFunctionalityType
Dim filterClasses
Dim bIsAjaxCall
Const DefEMUserDistrict=0

Response.Expires = 10
bIsAjaxCall = CheckIsAjaxCall()
If Not bIsDebug Then On Error Resume Next

Sub GetTokenParams()
	Dim objCtxData
	Call InitRegionalSettings

	' Current page requires authentication
	strUserID = GetSafeID(obTokenMgr.UserID( strToken ), "0")
	Call CheckUserID()
	
	Set objCtxData = obContext.ReadContextData(strToken)

	strSchoolName = objCtxData("SCHOOLNAME")
	strSchoolShortName = objCtxData("SchoolShortName")
	strFunctionalityType = objCtxData("FUNCTIONALITYTYPE")
	strSchoolID = objCtxData("SCHOOLID")
	strSchoolYearID = objCtxData("SCHOOLYEARID")
	strSchoolYearName = objCtxData("SCHOOLYEARNAME")
	bFutureMode = objCtxData(stFutureMode)
	strUserName = objCtxData("NICKNAME")
	strCurrLng = GetSafeStr(objCtxData(stUserLanguage), -1, obContext.LocalSettings.DefaultLanguage)
	strCurrYearID = objCtxData(stCurrYear)

	bExistsIupClasses = GetSafeBool(obTokenMgr.GetData(strToken, ExistsIupClasses), False)
	If bExistsIupClasses Then 
		filterClasses = obLanguage("Common","kClass",strFunctionalityType) & "\" & obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)
	Else
		filterClasses = obLanguage("Common","kClass",strFunctionalityType)
	End If

	Call obLanguage.SetLanguage(strCurrLng)
	Session.LCID = obLanguage.LCID

	bIsEducManager = objCtxData("bIsEducManager")
	strEMID = objCtxData("EMID")
	strHLevel = objCtxData("HL")

	If bIsEducManager Then
		bIsEMRO = False 'HasUserRole(rlHDEM)'obTokenMgr.GetData(strToken, "EMRO") изменим значения после определения роли пользователя
		Call CheckEducManager()
		strEmFullName = objCtxData("EMFULLNAME")
	End If

	bIsAdminInterface = (GetSafeLng(obTokenMgr.GetData(strToken, "AdminInterface"), 0) = 1)
	' #23959. Может переопределиться в SecurityRoles.asp - см. там важный комментарий!
	bIsEMForSchool = GetSafeBool(obTokenMgr.GetData(strToken, "IsEMForSchool"), False)
	
	bIsSchool = (Not (bIsAdminInterface Or bIsEMForSchool Or bIsEducManager))
	Call obTokenMgr.KeepAlive(strToken)
End Sub

Sub InitRegionalSettings
	Dim bDefault
	' Get Date/Time regional settings
	strTimeOffset = obTokenMgr.GetData( strToken, "REGIONAL_SETTINGS_GMT" )
	If isDull( strTimeOffset ) Then strTimeOffset = TZOffset() : bDefault = True
	strDateFormat = obTokenMgr.GetData( strToken, "RegionalSettingsDateFormat" )
	If isDull( strDateFormat ) Then strDateFormat = "dd" & chr(1) & "mm" & chr(1) & "yyyy" & chr(1) & "." : bDefault = True
	strTimeFormat =  obTokenMgr.GetData( strToken, "REGIONAL_SETTINGS_FormatT" )
	If isDull( strTimeFormat ) Then strTimeFormat = "h" & chr(1) & "mm" & chr(1) & ":" & chr(1) & "" & chr(1) & "" : bDefault = True
	If bDefault Then
		Call obTokenMgr.SetData( strToken, "REGIONAL_SETTINGS_GMT", strTimeOffset )
		Call obTokenMgr.SetData( strToken, "RegionalSettingsDateFormat", strDateFormat )
		Call obTokenMgr.SetData( strToken, "REGIONAL_SETTINGS_FormatT", strTimeFormat )
	End If
End Sub

Function IsWorkYear()
	Dim nCurrYearId
	nCurrYearId = GetSafeLng(strCurrYearID,obTokenMgr.GetData(strToken,stCurrYear))
	IsWorkYear = (CLng(strSchoolYearID) = nCurrYearId)
End Function

Sub CheckUserInYear(schoolYearId)
	Dim tmpNSNET, bUserInYear
	On Error Resume Next

	If Not objNSNETWork.IsArchYear(schoolYearId) Then
		set tmpNSNET = objNSNETWork
	Else
		set tmpNSNET = objNSNETArch
	End If
	bUserInYear = tmpNSNET.IsUserInYear(strUserID, schoolYearId)
	If Not bUserInYear Then GenerateError obLanguage("MySettings","kErrUserNotInYear")
End Sub

Sub ChangeYear(schoolYearId)
	Dim objContextComponent, changeYearResult
	On Error Resume Next

	' 2013_05_16. #6806
	'If Not (bIsEMForSchool Or bIsStaff) Then CheckUserInYear(schoolYearId)
	If Not bIsEMForSchool Then
		If Not bIsStaff Then
			CheckUserInYear(schoolYearId)
		End If
	End If

	Set objContextComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IContextComponent")
	Set changeYearResult = objContextComponent.ChangeYear(schoolYearId, "")
	If Not changeYearResult.IsSuccess Then GenerateError changeYearResult.Message
	TestError err.number
End Sub

Sub ChangeGlobalYear(globalYearId)
	Dim objContextComponent, changeYearResult
	On Error Resume Next

	Set objContextComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IContextComponent")
	Set changeYearResult = objContextComponent.ChangeGlobalYear(globalYearId, "")
	If Not changeYearResult.IsSuccess Then GenerateError changeYearResult.Message
	TestError err.number
End Sub

Function CheckIsAjaxCall()
	Dim OldError
	OldError = Err.number
	On Error Resume Next

	If LCase(Request.ServerVariables("HTTP_X_REQUESTED_WITH")) = "xmlhttprequest" Then
		CheckIsAjaxCall = True
		Exit Function
	End If
	CheckIsAjaxCall = Not IsEmpty(Request(kAjaxCallFlag))
	If Err.number <> 0 And OldError <> 0 Then
		' for Upload files
		CheckIsAjaxCall = False
		Err.Clear
	End If
End Function

Sub CheckEducManager()
End Sub

Sub DrawRedirectForm(strRequestId)
	Dim objCacheComponent, objRequestData
	Dim dctFParams, dctQSParams, strQS, param
	Dim nKeyIndex, strKeyName
	Dim strAction 
	
	Set objCacheComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ICacheComponent")

	Set objRequestData = objCacheComponent.Get(strRequestId)
	objCacheComponent.Remove(strRequestId)

	Set dctQSParams = objRequestData("qs")
	Set dctFParams = objRequestData("form")
	
	strAction = objRequestData("screenName")

	strQS = ""
	For Each param In dctQSParams
		strQS = strQS & "&" & param & "=" & dctQSParams(param)
	Next
	If strQS <> "" Then
		strQS = "?" & Mid(strQS,2)
	End If
	
	%>
	<form name="rf" method="post" action="<%=straction & strqs%>">
		<input type="hidden" name="foo" value="">
		<%
		For Each param in dctfparams
			%><input type="hidden" name="<%=param%>" value="<%=dctfparams(param)%>"><%
		Next
		%>
	</form>
	<%
End Sub

Sub RedirectTo(strAction, Params )
	Dim i

	If Right(strAction,1) = "?" Then
		strAction = strAction & "AT=" &strToken & "&" & Ver()
		If Not IsNull( Params ) Then
			For i=0 To Ubound( Params ) Step 2
				strAction = strAction & "&"&Params(i)&"="&Params(i+1)
			Next
		End If
		Response.Redirect strAction
		Exit Sub
	End If
	Response.Clear%>
	<html lang="<%=strCurrLng%>"><head></head>
		<body>
			<FORM NAME="RF" METHOD="post" ACTION="<%=strAction%>">
				<INPUT TYPE="HIDDEN" NAME="AT" VALUE="<%=strToken%>">
				<INPUT TYPE="HIDDEN" NAME="VER" VALUE="<%=DateDiff("s", #1/1/1999#,NSNow, 0, 0 )%>"><%
				If Not IsNull( Params ) Then
					For i=0 To Ubound( Params ) Step 2%>
						<INPUT TYPE="HIDDEN" NAME="<%=Params(i)%>" VALUE="<%=Params(i+1)%>"><%
					Next
				End If%>
			</FORM>
			<script>
				var form=document.forms[0];
				form.submit();
			</script>
	</body></html><%
	Response.End
End Sub

Sub ServerRedirect(strPage)
	Response.Clear
	Server.Transfer( strPage )
	Response.End
End Sub

Function MakeAbsoluteUrl(strRelativeUrl)
	Dim strHTTP

	If InStr(LCase(strRelativeUrl), "http:") = 1 Or InStr(LCase(strRelativeUrl), "https:") = 1 Then
		MakeAbsoluteUrl = strRelativeUrl
	Else
		strHTTP = IIF(Request.ServerVariables("HTTPS") = "off", "http://", "https://")
		MakeAbsoluteUrl = strHTTP & Request.ServerVariables("HTTP_HOST") & strRelativeUrl
	End If
End Function

Sub InitJsAppContext
	%>
	<script type="text/javascript">
		(function() {
			appContext.at = "<%=DB2Value(strToken)%>";
			appContext.readOnly = <%=Bool2JS(readonly)%>;
			appContext.funcType = <%=GetSafeLng(strFunctionalityType, 0)%>;
			appContext.language = "<%=GetSafeStr(strCurrLng, 10, obContext.LocalSettings.DefaultLanguage)%>";
			<%If Not IsDull(strToken) Then%>
			appContext.roles = <%=comHelper.JsonHelper.SerializeObject(obContext.AppContext.Principal.GetRoles()) %>;
			appContext.rights = <%=comHelper.JsonHelper.SerializeObject(obContext.AppContext.Principal.GetRights()) %>;
			appContext.tokenTimeOut = <%=obTokenMgr.GetTokenTimeout(strToken)%>;
			<%Else%>
			appContext.roles = [];
			appContext.rights = [];
			appContext.tokenTimeOut = 0;
			<%End If%>
			appContext.hasAnyRight = function (checkRights){
				return _.intersection(appContext.rights, checkRights).length > 0;
			}
			appContext.hasRights = function(checkRights){
				var res = _.intersection(appContext.rights, checkRights).length === checkRights.length;
				return res;
			}
			appContext.hasRole = function (checkRole){
				return appContext.roles.indexOf(checkRole) != -1;
			}
			appContext.userId = <%=GetSafeLng(strUserId, 0)%>;
			appContext.dateFormat = "<%=DB2Java(strDateFormat)%>";
			appContext.timeFormat = "<%=DB2Java(strTimeFormat)%>";
			appContext.globalYearId = <%=GetSafeLng(strCurrGlobalYearId, 0)%>;
			
			<%If bIsEducManager Then%>
			appContext.emId = <%=GetSafeLng(strEmId, 0)%>;
			appContext.fullSchoolName = "<%=DB2Java(strEmFullName)%>";
			appContext.isTopEm = <%=Bool2JS(GetSafeBool(obTokenMgr.GetData(strToken, "TOPEM"), False))%>;
			appContext.authorityType = <%=DB2Java(GetSafeLng(obTokenMgr.GetData(strToken, "AUTHORITYTYPE"), -1))%>;
			if (appContext.authorityType = 1) {
				appContext.authorityType = "Educations";
			}
			appContext.nationOlympOrg = <%=Bool2JS(GetSafeBool(obTokenMgr.GetData(strToken, "NATIONOLYMPORG"), False))%>;
			appContext.hlevel = <%=GetSafeLng(strHLevel, 0)%>;
			<%Else%>
			appContext.isEmForSchool = <%=Bool2JS(GetSafeBool(obTokenMgr.GetData(strToken, "IsEMForSchool"), False)) %>;
			appContext.fullSchoolName = "<%=DB2Java(strSchoolName)%>";
			appContext.schoolName = "<%=DB2Java(strSchoolShortName)%>";
			appContext.currYear = "<%=DB2Java(obTokenMgr.GetData(strToken, "CurrYearName"))%>";
			appContext.yearId = "<%=DB2Java(GetSafeID(strCurrYearId, strSchoolYearID))%>";
			appContext.schoolId = "<%=DB2Java(strSchoolId)%>";
			<%End If%>
		})();
	</script>
	<%
End Sub

Function CheckIsExternalAddress()
	Dim serverUrl, baseUri, queryString
	CheckIsExternalAddress = True

	serverUrl = LCase(Replace(DB2Java(Application("SERVER_URL")), ":80/", ""))
	baseUri = MakeAbsoluteUrl(Request.ServerVariables("URL"))

	queryString = Request.ServerVariables("QUERY_STRING")
	If Not IsDull(queryString) Then
		baseUri = baseUri & "?" & queryString
	End If

	baseUri = LCase(baseUri)
	'используется для проверки url на стороне заказчика
	If Request("test_url") = "1" Then
		rw "serverExtUrl: " & CStr(serverUrl) & "<br />currentUrl: " & CStr(baseUri)
	End If

	If InStr(baseUri, serverUrl) <> 1 Then CheckIsExternalAddress = False
End Function

Sub InitGlobalYearID()
	Dim objYearInfo

	If Not IsDull(strCurrYearID) Then
		Set objYearInfo = objNSNET.GetYearInfo(strCurrYearId)
		strCurrGlobalYearId = CLng(objYearInfo("GLOBALYEARID"))
	End If
End Sub
%>
<!-- #INCLUDE FILE=stdTime.asp -->
<!-- #INCLUDE FILE=openconn.asp -->