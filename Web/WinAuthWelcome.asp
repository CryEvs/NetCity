<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"

Const kURLWinAuthLogin = "WinAuthLogin.asp"
%>
<html lang="ru">
<head>
<title>Идет авторизация...</title>
<meta HTTP-EQUIV="Expires" CONTENT="0">
<meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8">
<meta HTTP-EQUIV="Refresh" CONTENT="3;URL=<%=kURLWinAuthLogin%>">
</head>
<body>
После истечения времени ожидания произошел выход из Net Школы.<br>
Пожалуйста, подождите. Идет авторизация Вашей учетной записи Windows...<br>
</body>
</html>
