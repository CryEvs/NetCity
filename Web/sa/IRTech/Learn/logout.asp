<!-- #INCLUDE FILE="include/header.asp" -->
<%
strPageTitle = PRODUCT_NAME & " - Выход"

strID = Request("id")
If Not IsEmptyStr(strID) Then 
	If CStr(Storage.UserID(strID)) <> "" Then
		lacc.Logout( Storage.GetData( strID, "AccessToken" ) )
		Storage.RemoveToken( strID)
	End If
End If

PrintSimplePageHeader "До свидания"
%>
<CENTER>
	<FONT COLOR="red">
		<H2>Вы только что вышли из <%=PRODUCT_NAME%>.</H2>
		<H3>
			Нажмите кнопку <B><I><U>Войти</U></I></B> для запуска <%=PRODUCT_NAME%>.<BR>
			Нажмите кнопку <B><I><U>Закрыть</U></I></B>, чтобы закрыть окно.
		</H3>
	</FONT>
	<P>
		<%=ShowButton( "Login", "Войти", "login.asp", "Добро пожаловать в " & PRODUCT_NAME & "!" )%>
		&nbsp;&nbsp;&nbsp;
		<%=ShowButton( "Close", "Закрыть", "JavaScript:window.close();", "Закрыть" )%>
	</P>
</CENTER>
<%PrintSimplePageFooter%>
