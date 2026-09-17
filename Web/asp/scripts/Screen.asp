<% ' © 2007-2013 IRTech. All rights reserved.

Const isNormal		= 1
Const isHighlighted = 2
Const isSelected	= 3
Const isDisabled	= 4

'Screen Type constants
Const stNormal	= 1
Const stSimple	= 2
Const stPrint	= 3
Const stAjax	= 4

Dim strPostScriptsBuilder

Const nLargeTextLength = 500

Function GetScreenType()
	If bIsAjaxCall Then
		GetScreenType = stAjax
	Else
		GetScreenType = stPrint
	End If
End Function

Function CheckIsAjaxCall()
	Dim OldError
	OldError = Err.number
	On Error Resume Next

	If LCase(Request.ServerVariables("HTTP_X_REQUESTED_WITH")) = "xmlhttprequest" Then
		CheckIsAjaxCall = True
		Exit Function
	End If

	' for Upload files. check shower.coffee - $.show.fileDialog
	CheckIsAjaxCall = (Request.QueryString("_AJAXCALL_") = "1")
	If Not CheckIsAjaxCall Then
		CheckIsAjaxCall = Not IsEmpty(Request(kAjaxCallFlag))
		If Err.number <> 0 And OldError = 0 Then
			' for Upload files
			CheckIsAjaxCall = False
			Err.Clear
		End If
	End If
End Function

Function GetScreenScheme()
	If bIsAdminInterface Then
		GetScreenScheme = "servadmin"
	ElseIf bIsEducManager Then
		GetScreenScheme = "em"
	Else
		Select Case strFunctionalityType
		Case kFuncType_PreSchool
			GetScreenScheme = "preschool"
		Case kFuncType_Common
			GetScreenScheme = "school"
		Case kFuncType_Add
			GetScreenScheme = "addschool"
		Case kFuncType_Profession
			GetScreenScheme = "profschool"
		Case kFuncType_Orphanage
			GetScreenScheme = "school"
		End Select
	End If
End Function

Function GetScreenColorScheme()
	GetScreenColorScheme = "school"
End Function

Function GetTitle()
	Dim strAddTitle
	strAddTitle = GetPageTitle()
	GetTitle = NETSCHOOL_PRODUCT_NAME
	If Not IsDull(strAddTitle) Then
		GetTitle = GetTitle & ". " & comHelper.StringHelper.NoHtml(strAddTitle)
	End If
End Function

Sub InitMenuPosition()
End Sub

Function onLoad()
	onLoad = ""
End Function

Function GetSaveMsg()
	Dim strMessage, arrMassage, ind, strCurrMsg

	strMessage = obTokenMgr.GetData(strToken, stWasSaved)
	If IsArray(strMessage) Then
		arrMassage = strMessage
		strMessage = ""
		For ind = 0 To UBound(arrMassage)
			strCurrMsg = arrMassage(ind)
			If Not IsDull(strCurrMsg) Then
				strMessage = strMessage & IIf(strMessage = "", "", "\n") & strCurrMsg
			End If
		Next
	End If
	GetSaveMsg = strMessage
End Function

Function onCheckSaveMsg()
	If Not IsDull( GetSaveMsg() ) Then
		onCheckSaveMsg = "WasSaved();"
		Call obTokenMgr.SetData( strToken, stWasSaved, null )
	End If
End Function

Function onUnload()
	onUnload = "" & specialUnload()
End Function

Function specialUnload()
		specialUnload = ""
End Function

Function onKeyPress()
	onKeyPress = ""
End Function

Function onResize()
	onResize = ""
End Function

Sub onHead()
End Sub

Sub onDrawHead()
	Call onHead()
End Sub

Sub ReadState()
End Sub

Sub WriteState()
End Sub

Sub Main()
End Sub

Sub WritePreScripts
End Sub

Sub onWritePostScripts()
	Call WritePostScripts
	Call WritePostScriptsBuilder
	If IsDull(Application("YACOUNTEROFF")) And GetScreenType() <> stAjax Then
		Call DrawMetricaScript()
	End If
End Sub

Sub WritePostScripts
End Sub

Sub AddPostScript(strScriptText)
	If Not IsEmpty(strPostScriptsBuilder) Then
		strPostScriptsBuilder = strPostScriptsBuilder & chr(13) & strScriptText
	Else
		strPostScriptsBuilder = strScriptText
	End If
End Sub

Sub WritePostScriptsBuilder
	If Not IsEmpty(strPostScriptsBuilder) Then
	%>
<script type="text/javascript">
<%=strPostScriptsBuilder%>
</script>
	<%
	End If
End Sub

Function GetPageTitle()
End Function

Function GetPageTitleFor( strPageName, arrPageParams )
	GetPageTitleFor = GetPageTitlePrint(strPageName, arrPageParams)
End Function

Function GetWarning(strMsg)
	GetWarning = GetWarningPrint(strMsg)
End Function

Function GetPageVer()
	GetPageVer = GetPageVerPrint()
End Function

Sub onCurrentDate()
	Response.Write FormatDateTime(NSNow,vbLongDate)
End Sub

Sub onDrawPageBody()
	Call onDrawPageWrap()
End Sub

'Обертка над основным конткентом страницы
'может использоваться для возможности вкладывания контента в произвольные блоки
Sub onDrawPageWrap()
	Call onDrawPage()
End Sub

Sub onDrawPage()
End Sub

Sub onAccessError()
	RedirectTo "/asp/errorAccess.asp?", Null
End Sub

Sub onDrawPageFooter()
	Dim screenType
	screenType = GetScreenType()
	If screenType <> stPrint and screenType <> stAjax Then
		%><!-- #INCLUDE FILE=../FooterForScreen.asp --><%
	End If
End Sub

Sub onEndPage()
End Sub

Function hasUserRightsOnPage()
	Call InitDict()
	hasUserRightsOnPage = True
End Function

Function GreenText( strText )
	GreenText = "<span style='color:green'>" & strText & "</span>"
End Function

Function getBGColor()
	getBGColor = "#FFFFFF"
End Function

Function DB_2_HTML(strValue)
	DB_2_HTML = DB2HTML(strValue)
End Function

Function ConnectionSwitchIsNeeded( bIsYearArchived )
	ConnectionSwitchIsNeeded = bIsYearArchived
End Function

Function IsTopPage()
	IsTopPage = False
End Function

Function WithPageFooter
	WithPageFooter = True
End Function

'Используется на страницах с переопределенным ConnectionSwitchIsNeeded
'для накладывания дополнительных условий на смену подключения
Function AdditionArchCondition()
	AdditionArchCondition = False
End Function

Sub SetReadOnlyAccess()
End Sub

Sub SetViewPort
	%><meta name="viewport" content="width=device-width, initial-scale=1.0"><%
End Sub

Sub DrawMetricaScript()
	Dim nMetricaId
	Dim strOrgName, strFuncTypeName
	Dim strRoleName

	On Error Resume Next

	If bIsEducmanager Then
		strOrgName = strEmFullName
	Else
		strOrgName = strSchoolName
	End If

	Select Case CLng(strFunctionalityType)
		Case FuncType_PreSchool
			strFuncTypeName = obLanguage("Common", "kFuncType_PreSchool")
		Case FuncType_School
			strFuncTypeName = obLanguage("Common", "kFuncType_School")
		Case FuncType_AddSchool
			strFuncTypeName = obLanguage("Common", "kFuncType_AddSchool")
		Case FuncType_ProfSchool
			strFuncTypeName = obLanguage("Common", "kFuncType_ProfSchool")
		Case FuncType_Orphanage
			strFuncTypeName = obLanguage("Common", "kFuncType_Orphanage")
		Case Else
			strFuncTypeName = obLanguage("Common", "kEMName")
	End Select

	'пока упрощенно, 3 группы ролей. 
	'дальше можно будет получать более точно через массив arrRoles
	If HasUserRole(rlStudent) Then
		strRoleName = obLanguage("Common", "kLearner")
	ElseIf HasUserRole(rlParent) Then
		strRoleName = obLanguage("Common", "kParent")
	Else
		strRoleName = obLanguage("Common", "kStaff")
	End If

	If IsDull(Application("YACOUNTEROFF")) Then
		nMetricaId = 28935260
		%>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
			(function (d, w, c) {
				(w[c] = w[c] || []).push(function () {
					var id = <%=nMetricaId%>;
					try {
						var appParams = {
							install: w.location.host
						};

						if (typeof(appContext) != "undefined") {
							appParams.productName = appContext.productName;
							appParams.version = appContext.version;
							appParams.ooType = "<%=strFuncTypeName%>";
							appParams.ooName = "<%=(DB2Java(strOrgName))%>".toLowerCase();
							appParams.role = "<%=strRoleName%>";
							appParams.serverId = appContext.serverId;
							appParams.environment = appContext.environment;
						}

						var metricaArgs = {
							id: id,
							accurateTrackBounce: true,
							ut: "noindex",
							params: appParams
						}

						var metrikaCtrl = new Ya.Metrika(metricaArgs);
						w["yaCounter" + id] = metrikaCtrl;
						var yaCounterCode = "<%=Application("YACOUNTERCODE")%>";
						appContext.yaCounters = [metrikaCtrl];
						if (yaCounterCode) { 
							metricaArgs.id = +yaCounterCode; 
							var addMetrikaCtrl =  new Ya.Metrika(metricaArgs); 
							w["yaCounter" + yaCounterCode] = addMetrikaCtrl;
							appContext.yaCounters.push(addMetrikaCtrl);
						}
						
					} catch(e) {}
				});
 

				var f = function () {
					var n = d.getElementsByTagName("head")[0];
					n.insertBefore(s, n.firstChild);
				};

				var s = d.createElement("script");
				s.type = "text/javascript";
				s.async = true;
				s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
 
				//if (w.opera == "[object Opera]") {
				//	d.addEventListener("DOMContentLoaded", f, false);
				//} else {
				//	f();
				//}
				deferredResLoader.ready(f);
			})(document, window, "yandex_metrika_callbacks");
		</script>
		<!-- /Yandex.Metrika counter -->
		<%
	End If
	Err.Clear
End Sub

Function ReadYearConnectionState()
	Dim bArchived
	Dim objRs
		
	If Not IsEmpty(Request("CURRGLOBALYEAR")) Then
		strCurrGlobalYearId = Request.Form("CURRGLOBALYEAR")
		Call ChangeGlobalYear(strCurrGlobalYearId)
	End If
	strCurrGlobalYearId = obTokenMgr.GetData(strToken, "stCommYearID")
	
	If bIsEducManager Or bIsAdminInterface Then Exit Function

	If GetScreenType() = stSimple Then Exit Function

	If Not IsEmpty(Request("CURRYEAR")) Then
		strCurrYearID = Request.Form("CURRYEAR")
		Call ChangeYear(strCurrYearID)
	End If

	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	readonly = True

	If GetScreenType() = stNormal Then
		If Not IsEmpty(strCurrYearID) Then readonly = objNSNET.IsYearClosed(strCurrYearID)
	End If
	Call InitGlobalYearID()

	bArchived = obTokenMgr.GetData(strToken,"IsArchived")
	If AdditionArchCondition Then 
		bArchived = ConnectionSwitchIsNeeded( bArchived ) 
	ElseIf not readonly Then
		bArchived = False
	End If
	If bArchived Then SetArchConnection
	If bIsEMForSchool Then readonly = True
End Function

Function GetScreenContext()
End Function

If Not hasUserRightsOnPage() Then Call onAccessError()

Call ReadYearConnectionState()
Call StartTimeLog("ReadState")
Call ReadState()
Call EndTimeLog("ReadState")
Call TestError( obLanguage("Common","kUnexpErr") )
Call InitMenuPosition()
Call TestError( obLanguage("Common","kUnexpErr") )
Call SetReadOnlyAccess()
Call StartTimeLog("Main")
Call Main()
Call EndTimeLog("Main")
Call TestError( obLanguage("Common","kUnexpErr") )
Call StartTimeLog("WriteState")
Call WriteState()
Call EndTimeLog("WriteState")

Call TestError( obLanguage("Common","kUnexpErr") )

If GetScreenType() <> stAjax Then
	%><!DOCTYPE html>
	<html><head>
		<title><%=GetTitle()%></title>
		<%Call SetViewPort()%>
		<meta http-equiv="Expires" content="10"/>
		<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"><%
		Call DrawCssLinks()
		Call WritePreScripts()
		Call DrawJSLibsLinks()
		Call DrawJsAppContext()
		%>	
		<script type="text/javascript">
			var strATTok = "<%=DB2Value(strToken)%>";
			var bReadonly = <%=Bool2JS(readonly)%>;
			var kLoginPage = "<%=DB2Value(kLoginPage)%>";
			var pageVer = <%=GetVer()%>;
			var wasSavedMsg = "<%=DB2Value(DB2Java(GetSaveMsg()))%>";
		
		</script>
		<%
		Call onDrawHead()
		Call TestError( obLanguage("Common","kUnexpErr") )%>
	</head><%
	Select Case	GetScreenType()
		'Normal screen with tabs and menu
		Case stNormal
			%><body
				class="<%=GetScreenColorScheme() & GetScreenContext()%>"
				onLoad="setFocus();setDBFree();<%=onLoad()%>;<%=onCheckSaveMsg()%>"
				onUnload="<%=onUnload()%>"
				onKeyPress="<%=onKeyPress()%>"
				onResize="<%=onResize()%>"><%
		'Simple screen without menu and optional tabs
		Case stSimple
			%><body
				class="<%=GetScreenColorScheme() & GetScreenContext()%>"
				onLoad="setFocus();setDBFree();<%=onLoad()%>;<%=onCheckSaveMsg()%>"
				onUnload="<%=onUnload()%>"
				onKeyPress="<%=onKeyPress()%>"
				onResize="<%=onResize()%>"><%
		'Print screen
		Case stPrint
			%><body style="background-color:<%=getBGColor%>" topmargin="10" leftmargin="10" marginwidth="10" marginheight="10"
				class="<%=GetScreenColorScheme() & GetScreenContext()%> print"
				onLoad="<%=onLoad()%>"
				onUnload="<%=onUnload()%>"
				onKeyPress="<%=onKeyPress()%>"
				onResize="<%=onResize()%>"><%
	End Select
End If

%><div class="global-wrapper"><%

Call StartTimeLog("onDrawPageBody")
Call onDrawPageBody()
Call EndTimeLog("onDrawPageBody")
Call TestError( obLanguage("Common","kUnexpErr") )
Call onWritePostScripts()

If GetScreenType() <> stAjax Then
	If WithPageFooter() Then
		Call onDrawPageFooter()
	End If
%>
			</body>
</html><%
End If



Call onEndPage()
Call DisposePageEventsHook
Set objHtmlHelper = Nothing
%>
