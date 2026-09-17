<%
const kInvalidParameter = "Неправильный параметр"
const kLongInput = "Слишком длинный текст"
const CONTENT_SERVER = "https://obr.nd.ru/"
Dim strToken, strTTSURL, bIsDebug

bIsDebug = True

Dim PRODUCT_NAME, LAID, COPYRIGHT
Dim LA_VERSION, HTML_TITLE, BODY_PARAMS, ABOUT_PRODUCT
Dim bBrowserIE, bSection, strID

bBrowserIE = InStr( 1, Request("HTTP_USER_AGENT"), "MSIE", 1 ) > 0

LAID		= Application("LAID")
PRODUCT_NAME	= Application("PRODUCT_NAME")
COPYRIGHT	= Application("COPYRIGHT")
LA_VERSION	= Application("LA_VERSION")
HTML_TITLE	= Application("HTML_TITLE")
BODY_PARAMS	= Application("BODY_PARAMS")
ABOUT_PRODUCT	= Application("ABOUT_PRODUCT")
bSection	= (Application("SECTION") = "yes")

Function IsEmptyStr( strSource )
	IsEmptyStr = IsEmpty(strSource) Or strSource = "" Or IsNull(strSource)
End Function

Function GetSafeStr( strText, lngMaxSize, strDefValue )
	If Not bIsDebug Then On Error Resume Next
	If IsNull( strText ) Or IsEmpty( strText ) Or strText = "" Then
		If IsNull( strDefValue ) Then
			HandleFatalError( kInvalidParameter )
		Else 
			GetSafeStr = strDefValue
		End If
	ElseIf lngMaxSize >= 0 And Len( strText ) > lngMaxSize Then
		HandleFatalError( kLongInput )
	Else
		GetSafeStr = CStr(strText)
	End If
End Function

Function GetSafeLng( value, defvalue )
	On Error Resume Next
	If IsEmptyStr( value ) Then
		GetSafeLng = defvalue
	Else
		GetSafeLng = CLng(value)
		If Err <> 0 Then
			GetSafeLng = defvalue
			Err.Clear
		End If
	End If
End Function

Function Ver()
    Randomize
	Ver = DateDiff("s", #1/1/1999#,now() , 0, 0) & Rnd()
End Function

Sub Writeln( strText )
	Response.Write strText & Chr(10)
End Sub

Sub HandleFatalError( errMsg )
    Response.Clear
    Writeln "<HTML><HEAD>"
    Writeln "<TITLE>"& PRODUCT_NAME &"</TITLE>"
    Writeln "<META HTTP-EQUIV=""Content-type"" CONTENT=""text/html; charset=utf-8"">"
    Writeln "</HEAD>"
    Writeln "<BODY background=""../images/back.gif"">"
    Writeln "<H2><FONT COLOR=""red"">" & errMsg & "</FONT></H2><BR>"
    Writeln "<HR><FONT SIZE=-1><I>"& COPYRIGHT &"</I></FONT>"
    Writeln "</BODY></HTML>"
    Response.End
End Sub

Sub CheckCNTeacherLogin
	strToken = Request("AT")
	strTTSURL = Request("TTSURL")
	If IsEmptyStr(strToken) Or IsEmptyStr(strTTSURL) Then HandleFatalError "Ошибка при связи с сервером"

	lacc.SetupConnection strTTSURL & "api/lacc.asp"
	lacc.KeepAlive( strToken )

	If Err <> 0 Then Call HandleFatalError( "Ошибка при связи с сервером NetSchool: " & Err.Description )
	If lacc.LastErrorCode = 10012 Then HandleFatalError "Извините, нет доступа"
	If lacc.LastErrorCode = 10007 Then HandleFatalError "Пожалуйста, попробуйте еще раз набрать имя и пароль."
	If lacc.LastErrorCode <> 0 Then Call HandleFatalError( "Ошибка при связи с сервером NetSchool: " & lacc.LastError )
End Sub
%>
