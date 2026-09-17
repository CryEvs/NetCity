<%
CONST DEFAULT_TEACHER_TIMEOUT = 15
Dim strToken, strTTSURL

Sub CheckCNTeacherLogin
	strToken = Request("AT")
	strTTSURL = Request("TTSURL")
	If IsEmptyStr(strToken) Or IsEmptyStr(strTTSURL) Then HandleFatalError "Неверные параметры"

	lacc.SetupConnection strTTSURL & "api/lacc.asp"
	lacc.KeepAlive( strToken )

    If Err <> 0 Then Call HandleFatalError( "Ошибка при обращении к TTS серверу: " & Err.Description )
    If lacc.LastErrorCode = 10012 Then HandleFatalError "Извините, нет доступа"
    If lacc.LastErrorCode = 10007 Then HandleFatalError "Пожалуйста, попробуйте еще раз набрать имя и пароль."
    If lacc.LastErrorCode <> 0 Then Call HandleFatalError( "Ошибка при обращении к TTS серверу: " & lacc.LastError )
End Sub

Sub CheckCNLogin
	strToken = Request("AT")
	strTTSURL = Request("TTSURL")
	If IsEmptyStr(strToken) Or IsEmptyStr(strTTSURL) Then HandleFatalError "Неверные параметры"

	lacc.SetupConnection strTTSURL & "api/lacc.asp"
	lacc.KeepAlive( strToken )

    If Err <> 0 Then Call HandleFatalError( "Ошибка при обращении к TTS серверу: " & Err.Description )
    If lacc.LastErrorCode = 10012 Then HandleFatalError "Извините, нет доступа"
    If lacc.LastErrorCode = 10007 Then HandleFatalError "Пожалуйста, попробуйте еще раз набрать имя и пароль."
    If lacc.LastErrorCode <> 0 Then Call HandleFatalError( "Ошибка при обращении к TTS серверу: " & lacc.LastError )
End Sub

Sub BeginTeacherForm( strAction, strName )
	Writeln "<FORM ACTION=""" & strAction & """ METHOD=""POST"" ID=""" & strName & """ NAME=""" & strName & """>"
	Writeln "<INPUT TYPE=""HIDDEN"" NAME=""AT"" VALUE=""" & strToken & """>"
	Writeln "<INPUT TYPE=""HIDDEN"" NAME=""TTSURL"" VALUE=""" & strTTSURL & """>"
	Writeln "<INPUT TYPE=""HIDDEN"" NAME=""LAID"" VALUE=""" & LAID_A & """>"
End Sub

Sub EndTeacherForm
	Writeln "</FORM>"
End Sub
%>