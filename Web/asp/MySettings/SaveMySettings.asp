<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->
<!-- #INCLUDE VIRTUAL=/asp/MySettings/UserSettings_inc.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.
Call InitComponents()
Call InitVariables()
'если включили параметр readonly, не сохраняем личные данные пользователя(в основном чтобы убрать конфликты репликации)
If Not readonly Then
	'--------
	'Если в поле winLogon есть значение, то проверяем не принадлежит ли этот winAccount другим пользователям
	'Если принадлежит выдаем окно с текстом "Учетная запись Windows уже связана с другим пользователем системы"
	'Если не принадлежит никому то сохраняем.
	'Если пользователь удаляет существующий windows аккаунт или просто сохраняет данные с пустым значением в этом поле, то происходит сохранение windows аккаунта.
	Call ChangeLanguage()
	Call SaveUsersettings()
	Call WriteState()
End If

If CLng(obTokenMgr.GetData(strToken,stCurrYear)) <> CLng(strCurrYearID) Then
	Call ChangeYear(strCurrYearID)
	RedirectTo strBackPage, null
End If

rw result
%>
