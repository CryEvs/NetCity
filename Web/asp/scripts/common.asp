<%
	Dim objPageEventsHook, objHtmlHelper
	Set objPageEventsHook = Server.CreateObject("NetCity.Common.Legacy.Hooks.PageExecutionEventsHook")
	Set objHtmlHelper = comHelper.HtmlHelper.GetInstance()%>
<!-- #INCLUDE FILE=Logging.asp -->
<!-- #INCLUDE FILE=ConstantsFull.asp -->
<!-- #INCLUDE FILE=ajaxConstants.asp -->
<!-- #INCLUDE FILE=getsafe.asp -->
<!-- #INCLUDE FILE=errorCommon.asp -->
<!-- #INCLUDE FILE=strCommon.asp -->
<!-- #INCLUDE FILE=EntryPage_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
' перенесено сюда, т.к. этот файл не редактируеся у заказчика и не испортится кодировка UTF
Const kRegExp_Login = "^._\-0-9a-zA-Z" ' разрешены символы '_' '-' '.', цифры, буквы лат. и национальные - из ServerSettings.LocalSettings.RegExpAlphabet
Const kSimbolsForLogin = ". _ -"
Const kRegExp_Snils = "\b[0-9]{3}-[0-9]{3}-[0-9]{3} [0-9]{2}\b" ' 123-456-789 12

Dim nRequestID
Dim tmExec
Dim bIsCheckDates
Dim bIsAbout 'Данная переменная необходима для того, чтобы когда открывалась страница about.asp, не подгружались некоторые фреймворки js и css, иначе страница about.asp искажается
bIsAbout = False

If bIsDebug Then tmExec=Timer

Dim NETSCHOOL_VERSION, NETSCHOOL_VERSION_DATE, NETSCHOOL_PRODUCT_NAME, NETSCHOOL_COPYRIGHT, NETSCHOOL_COPYRIGHT2, NETSCHOOL_REVISION
NETSCHOOL_VERSION = Application("NS_VERSION")
NETSCHOOL_VERSION_DATE = Application("NS_VERSION_DATE")
NETSCHOOL_PRODUCT_NAME = Application("NS_PRODUCT_NAME")
NETSCHOOL_COPYRIGHT = Application("NS_COPYRIGHT")
NETSCHOOL_COPYRIGHT2 = Application("NS_COPYRIGHT2")
NETSCHOOL_REVISION = Application("NS_REVISION")

Dim strStdBodyParam
strStdBodyParam = "MARGINHEIGHT=3 MARGINWIDTH=0 BGCOLOR=""#330099"" COLOR=""BLACK"" VLINK=""BLUE"" LINK=""BLUE"" "

Dim isIE, isIE6, isIE10, isWindows, isGecko, isOpera5, isOpera6, isOpera7, isOpera, bShortTextInput, isMac, isFF, isFF2, isFF3, isChrome, isSafari
Dim nChromeVersion
Dim strUserAgent, strCurrLng, dicPath
strUserAgent = Request.ServerVariables("HTTP_USER_AGENT")
isChrome = InStr( strUserAgent,"Chrome")>0
nChromeVersion = GetChromeVersion()

isIE = InStr( strUserAgent,"MSIE" ) > 0 Or InStr(strUserAgent, "Trident") > 0
isIE6 = InStr( strUserAgent,"MSIE 6.0") > 0
isIE10 = InStr( strUserAgent,"MSIE 10.0") > 0
isGecko = InStr( strUserAgent, "Gecko") > 0
isOpera6 = InStr( strUserAgent, "Opera/6") > 0
isOpera = InStr( strUserAgent, "Opera") > 0
isWindows = InStr( strUserAgent,"Win") > 0
isMac = InStr( strUserAgent, "Mac" ) > 0
isFF = InStr( strUserAgent, "Firefox" ) > 0
isFF2 = InStr( strUserAgent, "Firefox/2" ) > 0
isFF3 = InStr( strUserAgent, "Firefox/3" ) > 0
isSafari = InStr( strUserAgent, "Firefox/3" ) > 0
IF NOT isChrome THEN isSafari = InStr( strUserAgent,"Safari") > 0

strCurrLng = GetSafeStr(Request.Cookies("UserLanguage"), -1, obContext.LocalSettings.DefaultLanguage)
Call obLanguage.SetLanguage(strCurrLng)

Dim nCurrTheme
Sub InitDict
	nCurrTheme = GetSafeLng(obTokenMgr.GetData( strToken, "State138" ), 0)
End Sub

bShortTextInput = (isIE) Or isOpera6 Or isGecko

Function TextInputSize(nSize)
	TextInputSize = nSize
End Function

Function isDull( strPar )
	isDull = (IsNull( strPar ) Or IsEmpty( strPar ))
	If Not isDull Then isDull = (CStr(strPar) = "")
End Function

Sub RW( str)
	Response.Write str
End Sub

Sub dbgStr( errstr)
	If bIsDebug Then response.write errstr : response.end
End Sub

Function IIF(condition, thenclause, elseclause)
	If condition Then IIF = thenclause Else IIF = elseclause
End Function

Function GetRemoteAddr()
	GetRemoteAddr = obContext.HttpContext.Request.GetRemoteAddr()
End Function

Function GetChromeVersion()
	If isChrome Then
		Dim regEx, matches
		Set regEx = New RegExp 
        regEx.Pattern = "Chrom(e|ium)\/([0-9]+)\."
        Set matches = regEx.Execute(strUserAgent)
		GetChromeVersion = CInt(matches(0).SubMatches(1))
	Else
		GetChromeVersion = 0
	End If
End Function

Sub WriteJsonResult(strMessage, IsError, nErrorCode )
	Call WriteJsonResult_Ex(strMessage, IsError, nErrorCode, Empty )
End Sub

Sub WriteJsonResult_Ex(strMessage, IsError, nErrorCode, httpStatusCode )
	Dim result, i
	Set result = new JSONResult
	result.IsError = IsError
	result.ErrorCode = nErrorCode
	result.Message = Replace(strMessage, "\n", CHR(10))
	Response.ContentType = "application/json"
	Response.Status = GetSafeLng(httpStatusCode, IIF(result.IsError, 409, 200))
	Response.Clear
	Response.Write result
	Response.End
End Sub

Function GetTTSURL()
	GetTTSURL = obContext.ServerSettings.Address
End Function

Function GetServerUrl()
	If VarType(Application("SERVER_HOSTNAME")) = 8 And Application("SERVER_HOSTNAME") <> "" Then
		GetServerUrl = "http://" & Application("SERVER_HOSTNAME") & "/"
	Else
		GetServerUrl = "http://" & Request.ServerVariables("HTTP_HOST") & "/"
	End If
End Function

Function IsWinLogonAccess()
End Function

Function Ver()
	Ver = "SVER=" & DateDiff("s", #1/1/1970#, Now, 0, 0 )
End Function

Function GetVer()
	GetVer = DateDiff("s", #1/1/1970#, Now, 0, 0 )
End Function

Function GetReturnUrl 
	Dim strRedirectUri
	Dim strQueryString
	strRedirectUri = Request.ServerVariables("SCRIPT_NAME") 

	If strRedirectUri = "/angular.asp" Then
		strRedirectUri = "/angular/" & Request("module") & "/" & Request("submodule")
		If Len(Request("route")) > 0 Then
			strRedirectUri = strRedirectUri & Request("route")
		End If
		GetReturnUrl = strRedirectUri
		Exit Function
	End If
	If strRedirectUri = "/asp/headersimple_angular.asp" Then
		strRedirectUri = "/app/simple/" & Request("module") 
		If Len(Request("route")) > 0 Then
			strRedirectUri = strRedirectUri & Request("route")
		End If
		GetReturnUrl = strRedirectUri
		Exit Function
	End If
	If strRedirectUri = "/asp/headersimple_angular_popup.asp" Then
		strRedirectUri = "/app/popup/" & Request("module") 
		If Len(Request("route")) > 0 Then
			strRedirectUri = strRedirectUri & Request("route")
		End If
		GetReturnUrl = strRedirectUri
		Exit Function
	End If

	strQueryString = Request.ServerVariables("QUERY_STRING")
	If Len(strQueryString) > 0 Then
		strRedirectUri = strRedirectUri & "?" & strQueryString
	End If

	GetReturnUrl = strRedirectUri
End Function

Function GetJumpPage()
	Dim strRedirectUri
	If obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
		GetJumpPage = kStartPage & "?AL=Y"
		Exit Function
	End If
	If InStr(Request.ServerVariables("CONTENT_TYPE"),"multipart/form-data")>0 Then
		GetJumpPage = kStartPage & "?AL=Y"
	ElseIf kLoginPage = "/authorize" Then
		strRedirectUri = GetReturnUrl()
		'todo. проверить что это первый запрос?
		GetJumpPage = kLoginPage & "?redirect_uri=" & strRedirectUri
	Else
		Select Case Request(kInterfaceTypeKey)
		Case 1 : GetJumpPage = "/asp/administration/salogin.asp"
		Case 2 : GetJumpPage = kStartPage & "?AL=Y"
		Case Else GetJumpPage = kStartPage & "?AL=Y"
		End Select
	End If
End Function

Function GetGradeByNum(GradeNum)
	If Not IsNull(GradeNum) Then
		Select Case CInt(GradeNum)
			Case -1	GetGradeByNum = obLanguage("Common","kNo")
			Case 0	GetGradeByNum = "0"
			Case (Application("LASTGRADE")(strFunctionalityType) + 1)
				GetGradeByNum = obLanguage("Common","kLastGradeName") ' может это совсем убрать??? вроде такое невозможно?
			Case Else
				GetGradeByNum = CStr(GradeNum)
		End Select
	Else
		GetGradeByNum = ""
	End If
End Function

Function GetArrGrades(nFuncType, bPlusValue, bShowAll, bShowNot)
	Dim len, i, ArrNamePreGrades, nAll, bPreSchool
	len = 12
	nAll = 0
	bPreSchool = CLng(nFuncType) = kFuncType_PreSchool
	If bPreSchool Then 
		len = 8
		ArrNamePreGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If
	ReDim arrGrades(1,IIF(bShowAll,len+1,len))
	If bShowAll Then
		arrGrades(0,0) = IIF(bPlusValue,-1,1)
		arrGrades(1,0) = obLanguage("Common","kAll")
		nAll = 1
	End if
	For i=0 to len
		if bPreSchool Then
			arrGrades(1,i+nAll) = ArrNamePreGrades(i)
		Else
			arrGrades(1,i+nAll) = i
		End If
		if bPlusValue Then
			arrGrades(0,i+nAll) = i
		Else
			arrGrades(0,i+nAll) = -i
		End If
	Next
	If Not bPreSchool and bShowNot Then arrGrades(1,0+nAll) = obLanguage("Common","kNo")
	GetArrGrades = arrGrades
End Function

Function GetFileName(fname)
	If InStrRev(fname,"\")>0 Then
		GetFileName = Mid(fname, InStrRev(fname,"\")+1)
	ElseIf InStrRev(fname,"/")>0 Then
		GetFileName = Mid(fname, InStrRev(fname,"/")+1)
	Else
		GetFileName = fname
	End If
	If Not isIE Then
		Dim i,tmpOld, tmpNew
		tmpOld = GetFileName
		tmpNew = ""
		For i=1 To Len(tmpOld)
			If Asc(Mid(tmpOld,i,1))<=Asc(" ") Then
				tmpNew = tmpNew & "_"
			Else
				tmpNew = tmpNew & Mid(tmpOld,i,1)
			End If
		Next
		GetFileName = tmpNew
	End If
End Function

Function GetVersionedResLink(strResourceUrl)
	GetVersionedResLink = strResourceUrl & "?ver=" & Application("NS_VERSION") & "." & Application("NS_REVISION")
End Function

Function GetVersionedJsLink(strScriptName)
	GetVersionedJsLink = GetVersionedResLink("/js/" & strScriptName)
End Function

Function GetVersionedCssLink(strCssName)
	GetVersionedJsLink = GetVersionedResLink("/css/" & strCssName)
End Function

Function GetNoTermsInYearDefineTermsTypes(strForm, isWizard)
	Dim strPageName
	strPageName = IIf(isWizard, "/asp/SetupSchool/WIZARD/TermTypes.asp", "/angular/school/calendar/termtypes/grades/")
	GetNoTermsInYearDefineTermsTypes = obLanguage("Common","kNoTermsInYear") & "<br>" & _
		obLanguage("Common","kDefineTermsTypes_1") & " " & _
		ShowAnchor("ok_check_db('" & strForm & "','" & strPageName & "');", "", obLanguage("SetupSchoolCalendar","kTermTypes"), "") & " " & _
		obLanguage("Common","kDefineTermsTypes_2")
End Function

Sub DrawLngReference
	Dim strFuncTypeTmp
	strFuncTypeTmp = CLng(strFunctionalityType)
	If strFuncTypeTmp = kFuncType_Orphanage Then
		strFuncTypeTmp = kFuncType_Common
	End If%>
	<script src="<%=GetVersionedResLink("/static/dist/lng/language_" & LCase(strCurrLng) & ".js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/lng/language_" & LCase(strCurrLng) & "_" & strFuncTypeTmp & ".js")%>" type="text/javascript"></script><%
End Sub

Sub DrawJSLibsLinks()
	If isIE Or (isChrome And nChromeVersion < 57) Then
		%><script src="/vendor/components/babel-polyfill-standalone/babel-polyfill.min.js" type="text/javascript"></script><%
	End If
	%>
	<script src="/vendor/components/jquery/dist/jquery.min.js" type="text/javascript"></script>
	<script src="/static/vendor/bootstrap/js/bootstrap.js" type="text/javascript"></script>
	<script src="/vendor/bootstrap3-dialog/js/bootstrap-dialog.js" type="text/javascript"></script>
	<script src="/js/libs/bowser.min.js" type="text/javascript"></script>
	<script src="/vendor/components/handlebars/handlebars.min.js" type="text/javascript"></script>
	<script src="/vendor/components/underscore/underscore-min.js" type="text/javascript"></script>
	<script src="/vendor/components/moment/min/moment.min.js" type="text/javascript"></script>
	<script src="/vendor/components/moment/locale/ru.js" type="text/javascript"></script>

	<%Call DrawLngReference()%>
	<script src="<%=GetVersionedResLink("/static/dist/common/js/core-scripts.js")%>" type="text/javascript"></script>
	<%
End Sub

Sub DrawJsAppContext()
	Dim nEnvironment
	nEnvironment = obConfig.StaticInstance.Environment
	
	%>
	<script type="text/javascript">
		var appContext = {
			now: "<%=DB2Java(NSNow)%>",
			productName: "<%=DB2Java(NETSCHOOL_PRODUCT_NAME)%>",
			version: "<%=DB2Java(NETSCHOOL_VERSION & "." & NETSCHOOL_REVISION)%>",
			serverId: "<%=Application("SERVERID")%>",
			isTkr: <%=Bool2JS(kIsTkr)%>,
			serverTimeZone: <%=GetSafeStr(Application("TIMEZONE_SERVER_OFFSET"), 2, "null")%>,
			environment: "<%=IIF(nEnvironment=0, "dev", IIF(nEnvironment=1, "test", "prod"))%>",
			yaCounters: []
		};
	</script>
	<%
End Sub

Sub DrawCssLinks()
	Dim nScreenType

	nScreenType = GetScreenType()
	If Not IsEmpty(nScreenType) Then 
		If nScreenType = stPrint Then 
			%><link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print.min.css")%>"/>
		<%End If
	End If%>
	<link rel="icon" type="image/gif" href="/images/common/faviconnetcity.gif" />
	<link rel="stylesheet" type="text/css" href="/static/vendor/bootstrap/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="/vendor/bootstrap3-dialog/css/bootstrap-dialog.min.css"/>
	<link rel="stylesheet" type="text/css" href="/vendor/select2/css/select2.min.css"/>
	<link rel="stylesheet" type="text/css" href="/vendor/select2/css/select2-bootstrap.min.css"/>

	<%If Not bIsAbout Then%>
		<link rel="stylesheet" type="text/css" href="/static/dist/common/css/core-styles.css"/>
		<link rel="stylesheet" type="text/css" href="/static/dist/common/css/theme-<%=GetScreenColorScheme%>.min.css"/>
		<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/extras/screen.css")%>"/>
	<%End If%>
	<link rel="stylesheet" type="text/css" href="/vendor/custom/fonts/font-awesome/css/font-awesome.min.css"><%
End Sub

'Stub for non screened pages
Function GetScreenType()
	GetScreenType = Empty
End Function

'Ф-я получает путь к папке с Базой Данных. Сейчас вариант - только для IB!
'DB-specific: IB only!
Function GetDBFolder(objFSO)
	Dim strDB_STR, n, strPathDB
	
	GetDBFolder = CStr(Application("NS_FILES_PATH")) ' check explicit definition first
	If GetDBFolder <> "" Then Exit Function
	GetDBFolder = ""
	strDB_STR = CStr(Application("DB_STRING"))

	n = InStr(strDB_STR, "Data Source=")
	If n = 0 Then Exit Function
	strDB_STR = Mid(strDB_STR, n + Len("Data Source="))
	If Len(strDB_STR) = 0 Then Exit Function

	n = InStr(strDB_STR, ":")
	If n = 0 Then Exit Function
	strDB_STR = Mid(strDB_STR, n + Len(":"))
	If Len(strDB_STR) = 0 Then Exit Function

	n = InStr(strDB_STR, ";")
	If n = 0 Then Exit Function
	strPathDB = Left(strDB_STR, n - 1)
	If Len(strPathDB) = 0 Then Exit Function
	
	GetDBFolder = objFSO.GetParentFolderName(strPathDB)
End Function

'Класс формирующий JSON рузультат ajax-запроса
Class JSONResult
	Private obJsonResult
	Private Sub Class_Initialize()
		Set obJsonResult = Server.CreateObject("NetCity.Common.Implementation.JsonResult")
	End Sub

	'Данные
	Public Data

	'Сообщение
	Public Message

	Public IsError

	Public ErrorCode

	'Формирования JSON
	Public Default Property Get GetJSON()
		obJsonResult.Message = Message
		obJsonResult.IsError = GetSafeBool(IsError,False)
		obJsonResult.ErrorCode = ErrorCode
		GetJSON = obJsonResult.GetJson()
	End Property

	'Добавление данных в ответ
	Public Sub AddData(addDataKey, addingData)
		Call obJsonResult.AddData(addDataKey, addingData)
	End Sub

	'Добавление данных в ответ
	Public Sub AddJsonData(addDataKey, addingData)
		Call obJsonResult.AddJsonData(addDataKey, addingData)
	End Sub
End Class

Function IdentifyNextPage()
	Dim strNextEntryPage

	' Поиск следующей непросмотренной страницы
	strNextEntryPage = GetNextEntryPage()
	IdentifyNextPage = IIF(strNextEntryPage = "", GetSafeStr(Request(stBackPage), -1, obTokenMgr.GetData(strToken, stBackPage)), strNextEntryPage)
End Function

Function Module_QA_Available()
	Dim guids
	Dim bModuleQaEnabledForAll, strModuleQaSchoolsCondition
	bModuleQaEnabledForAll = obContext.ServerSettings.SystemSettings.ModuleQaEnabledForAll
	strModuleQaSchoolsCondition = obContext.ServerSettings.SystemSettings.ModuleQaSchoolsCondition

	If bIsEducManager Then
		If bModuleQaEnabledForAll Then 
			Module_QA_Available = True
		Else
			Module_QA_Available = (Len(strModuleQaSchoolsCondition) >= 32)
		End If
	Else
		If bModuleQaEnabledForAll Then 
			Module_QA_Available = True
			Exit Function
		End If
	
		guids = Split(strModuleQaSchoolsCondition, ",")

		If UBound(guids) < 0 Then
			Module_QA_Available = False
			Exit Function
		End If

		Module_QA_Available = CheckSchoolGuid(guids)
	End If
End Function

Function Module_IndividualSupport_Available()
	Dim guids
	Dim bModuleIndividualSupportEnabledForAll, strModuleIndividualSupportSchoolsCondition
	bModuleIndividualSupportEnabledForAll = obContext.ServerSettings.SystemSettings.ModuleIndividualSupportEnabledForAll
	strModuleIndividualSupportSchoolsCondition = obContext.ServerSettings.SystemSettings.ModuleIndividualSupportSchoolsCondition

	
	If bModuleIndividualSupportEnabledForAll Then 
		Module_IndividualSupport_Available = True
		Exit Function
	End If

	guids = Split(strModuleIndividualSupportSchoolsCondition, ",")

	If UBound(guids) < 0 Then
		Module_IndividualSupport_Available = False
		Exit Function
	End If

	Module_IndividualSupport_Available = CheckSchoolGuid(guids)
	
End Function

Function Module_HealthMonitoring_Avalible()
	Module_HealthMonitoring_Avalible = obContext.ServerSettings.SystemSettings.ModuleHealthMonitoring
End Function

Function IntegrationNewDisk_Available()
	Dim guids, tokens, nNewDiskTokenSaved
	Dim bIntegrationNewDiskEnabledForAll, strIntegrationNewDiskSchoolsCondition, strIntegrationNewDiskTokens, strIntegrationNewDiskMainToken
	bIntegrationNewDiskEnabledForAll = obContext.ServerSettings.SystemSettings.IntegrationNewDiskEnabledForAll
	strIntegrationNewDiskSchoolsCondition = obContext.ServerSettings.SystemSettings.IntegrationNewDiskSchoolsCondition
	strIntegrationNewDiskTokens = obContext.ServerSettings.SystemSettings.IntegrationNewDiskTokens
	strIntegrationNewDiskMainToken = obContext.ServerSettings.SystemSettings.IntegrationNewDiskMainToken

	nNewDiskTokenSaved =  GetSafeLng( obTokenMgr.GetData(strToken, stNewDiskTokenSaved), 0)
	If nNewDiskTokenSaved = 0 Then
		If bIntegrationNewDiskEnabledForAll Then 
			IntegrationNewDisk_Available = True
			Call obTokenMgr.SetData(strToken, stNewDiskToken, strIntegrationNewDiskMainToken)
			Call obTokenMgr.SetData(strToken, stNewDiskTokenSaved, 1)
			Exit Function
		End If

		guids = Split(strIntegrationNewDiskSchoolsCondition, ",")
		tokens = Split(strIntegrationNewDiskTokens, ",")

		If UBound(guids) < 0 Then
			IntegrationNewDisk_Available = False
			Call obTokenMgr.SetData(strToken, stNewDiskToken, "")
			Call obTokenMgr.SetData(strToken, stNewDiskTokenSaved, 1)
			Exit Function
		End If

		IntegrationNewDisk_Available = CheckSchoolGuidForNewDisk(guids, tokens)
	End If
End Function

Function CheckSchoolGuid(guids)
	Dim currentSchoolGuid, i,objSchoolInfo

	If IsDull(strSchoolId) Then
		currentSchoolGuid = Null
	Else	
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
		currentSchoolGuid = GetSafeStrParam(objSchoolInfo("UNISCHOOLID"), Null)
	End If

	For i = 0 To UBound(guids)
		If guids(i) = currentSchoolGuid Then 
			CheckSchoolGuid = True
			Exit Function
		End If
	Next

	CheckSchoolGuid = False
End Function

Function CheckSchoolGuidForNewDisk(guids, tokens)
	Dim currentSchoolGuid, i, objSchoolInfo
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
	currentSchoolGuid = GetSafeStrParam(objSchoolInfo("UNISCHOOLID"), Null)
	For i = 0 To UBound(guids)
		If guids(i) = currentSchoolGuid Then 
			Call obTokenMgr.SetData(strToken, stNewDiskToken, tokens(i))
			Call obTokenMgr.SetData(strToken, stNewDiskTokenSaved, 1)
			CheckSchoolGuidForNewDisk = True
			Exit Function
		End If
	Next
	CheckSchoolGuidForNewDisk = False
End Function

Function GetNsSessionStorage()
	Dim hash, nsSession
	hash = Request.Cookies("NSSESSIONID")
	If Not IsDull(hash) Then
		Dim storage
		Set storage = obTokenMgr.GetSession(hash)
		If Not IsEmpty(storage) And IsObject(storage) And hash = Request.Cookies("NSSESSIONID") Then
			Set GetNsSessionStorage = storage
		End If
	End If
End Function

Sub DisposePageEventsHook()
	'явно гененрируем событие окончания обработки запроса
	If IsObject(objPageEventsHook) Then
		If Not (objPageEventsHook Is Nothing) Then
			Call objPageEventsHook.OnEndPage()
			Set objPageEventsHook = Nothing
		End If
	End If
End Sub	

'установка максимального времени выфполнения скрипта. (в секундах)
Sub SetScriptTimeOut(nSeconds)
	'ВАЖНО! настройка установленная менее настройки аналогичного параметра asp.scriptTimeout в web.config - действовать не будет.
	Server.ScriptTimeOut = nSeconds
End Sub

Sub InitJsAppContext()
End Sub
%>
