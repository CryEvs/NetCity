<% ' © 2007-2016 IRTech. All rights reserved.

'режимы отображения ошибки:
Const kErrPageMode_Redirect = 0 'редирект на error.asp
Const kErrPageMode_Transfer = 1 'на текущем url - путем выполения внутреннего запроса к error.asp

Function GetErrorPageMode
	'по умолчанию выполняем редирект на страницу error.asp. при необходимости перекрывается
	GetErrorPageMode = kErrPageMode_Redirect
End Function

Sub WriteToLog( nErrorType, strErrorText )
	On Error Resume Next
	Dim strSCID, strText, strErrDeatail
	If (nErrorType = kUETError) Or (nErrorType = kUETWarning) Then
		' Если файл делает двоичное чтение, т.е. включён headerUpload.asp, то после нельзя использовать обращение вида Request("SCID"),
		' поэтому разворачиваем здесь выражение для получения значения strSCID
		'strSCID = GetSafeID( strSchoolID, GetSafeID(obTokenMgr.GetData(strToken,"SCHOOLID"), CStr(Request("SCID"))) )
		strSCID = strSchoolID
		If IsDull(strSCID) Or strSchoolID = 0 Then strSCID = GetSafe("SCHOOLID", Empty)
		If IsDull(strSCID) Then
			Err.Clear
			strSCID = GetSafe("SCID", Empty)
			If Err.number <> 0 Then strSCID = Empty
			Err.Clear
		End If
		If IsDull(strSCID) Then strSCID = Empty
		If IsDull(strUserID) Then strUserID = Empty
		
		strText = strErrorText
		If nErrorType = kUETError Then
			If Not bIsDebug Then strText = strText & GetError() 'Иначе детали добавились в TestError
			strText = Request.ServerVariables("URL") & ": " & strText
		End If

		Call objNSNET.SaveUserEvent_WT(Empty, nErrorType, strSCID,  strUserID, Now(), GetRemoteAddr(), Empty, strText)

		If Err.number <> 0 Then
			strText =  obLanguage("Common","kCantSaveUserEvent") & ":"""&strText&""""
			Call RedirectAnyError(-1, strText, Null)
		End If
	End If
End Sub

Sub RedirectAnyError( nErrorCode, strText, strDest )
	If IsNull(strDest) Then strDest = comHelper.AspHelper.GetRelativeUrlFromAbsoluteUrl(Request.ServerVariables("HTTP_REFERER" ))
	
	Call DisposePageEventsHook
	If bIsAjaxCall Then 
		Call WriteAjaxErrorResponse( nErrorCode, strText) 
		Exit Sub
	End If

	If GetErrorPageMode = kErrPageMode_Transfer Then
		'strDest - по факту как правило является предыдущей страницей
		Call TransferError( strText, GetNsSessionStorage())
	End If
	Call RedirectError( strText, strDest )
End Sub

Function GetRandomKey()
	GetRandomKey = LCase(Cstr(objNSNET.GenerateGUID()))
End Function

Function SaveErrData(objData, nSeconds, strKeyPrefix)
	Dim objCacheComponent, strUniqueKey, objTestData
	Set objCacheComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ICacheComponent")
	TestError obLanguage("Security","LoginError")

	' уникальный ключ
	strUniqueKey = GetRandomKey()
	objTestData = objCacheComponent.Get(strKeyPrefix & strUniqueKey)

	Do While Not IsDull(objTestData)
		strUniqueKey = strKeyPrefix & GetRandomKey()
		objTestData = objCacheComponent.Get(strKeyPrefix & strUniqueKey)
	Loop

	Call objCacheComponent.Add(strKeyPrefix & strUniqueKey, objData, nSeconds)
	SaveErrData = strUniqueKey
End Function

Sub RedirectError( strText, strDest )
	Dim storage, strErrorId
	If IsNull(strDest) Then strDest = comHelper.AspHelper.GetRelativeUrlFromAbsoluteUrl(Request.ServerVariables("HTTP_REFERER" ))
	If Len(strText) > 250 Then
		Set storage = Server.CreateObject("NetCity.Storage")

Err.Clear
On Error Resume Next

		storage("ET") = strText
		storage("DEST") = strDest
		storage("AT") = strToken
		storage("SCRIPT") = strScriptName ' иногда может быть не определена эта переменная, тогда ошибка вообще не показывается!

Err.Clear

		strErrorId = SaveErrData(storage, 60 * 5, "error:")
		Response.Redirect "/asp/error.asp?at=" & strToken & "&errid=" & strErrorId
	Else
		strText = Server.URLEncode( strText )
		strDest = Server.URLEncode( strDest )
		Response.Redirect "/asp/error.asp?DEST=" &strDest & "&ET=" & strText & "&AT=" & strToken
	End If
End Sub

Sub TransferError(strText, storage)
	Response.Clear
	If Not IsEmpty(storage) And IsObject(storage) Then
		storage("ET") = strText
		Server.Transfer("/asp/error.asp")
	End If
End Sub

Sub RedirectHTMLError( nErrorCode, strText, strDest, strAT, strParam, bToken )
	If bIsAjaxCall Then Call WriteAjaxErrorResponse( nErrorCode, strText) : Exit Sub

	strParam = strParam & "&HTML=YES"
	If bToken Then strParam = "&TOK=YES"
	
	' странно но в strToken иногда приходит &"&PT="&GetPageTitle()
	strText = Server.URLEncode( strText )
	strDest = Server.URLEncode( strDest )
	Response.Redirect "/asp/error.asp?DEST=" &strDest & "&ET=" & strText & "&AT=" & strToken & strParam
End Sub

Sub WriteAjaxErrorResponse( nErrorCode, strText )
	Call WriteJsonResult(strText, True, nErrorCode)
End Sub

Sub SaveError
	If Err <> 0 Then Session("ERROR_DETAIL") = GetErrDetails(Err)
End Sub

Function GetError
	GetError = Session("ERROR_DETAIL")
	Session("ERROR_DETAIL") = Null
End Function

Function GetErrDetails( objErr )
	GetErrDetails = "(" & objErr.Source & ": " & Replace(objErr.Description, CHR(10), " ") & ", " & objErr.Number & ")"
End Function

Sub SetDetailedErrMessage( strErr )
	AddErrorDetails strErr, GetErrDetails(Err), "\n"
End Sub

Sub AddErrorDetails( strErr, strDetails, strSeparator )
	strErr = strErr & strSeparator & strDetails
End Sub

Sub TestError( strErr )
	If Err <> 0 Then
		If Err.Number > (AppExceptionNumber_Common - 100) And Err.Number <= AppExceptionNumber_Common Then
			'диапазон c -3100 по -3000 зарезервирован для собственных исключений. обрабатываем их иначе
			Select Case Err.Number
			Case AppExceptionNumber_DetailException
				'используем подробности ошибки из AppDetailException
				AddErrorDetails strErr, Err.Description, "\n"
			Case AppExceptionNumber_DbException
				'для AppDbException используем стандартный текст. подробности в Description
				AddErrorDetails strErr, obLanguage("Common", "kErrAccessDB"), "\n"
				SetDetailedErrMessage strErr
			Case AppExceptionNumber_DbTimeoutException
				'для AppDbException используем стандартный текст. подробности в Description
				AddErrorDetails strErr, obLanguage("Common", "kErrAccessDBTimeout"), "\n"
				SetDetailedErrMessage strErr
			Case Else
				'остальные исключения (AppException) должны нести полный текст ошибки
				strErr = Err.Description
			End Select
		Else
			'добавляем подробности для отладки
			If bIsDebug Then SetDetailedErrMessage strErr
		End If
		GenerateError strErr
	End If
End Sub

Sub TestResult( objResult, strDefText )
	If IsDull(strDefText) Then 
		strDefText = obLanguage("Common","kUnexpErr")
	End If
	TestError strDefText

	On Error Resume Next

	If IsEmpty(objResult) Then
		GenerateError strDefText
	End If

	If objResult.IsSuccess Then
		Exit Sub
	End If

	Dim strErrMessage
	strErrMessage = GetSafeStr(objResult.Message, -1, strDefText)

	If Not objResult.Exception Is Nothing Then
		Err.Raise 61500, objResult.Exception.Source, objResult.Exception.Message
		TestError strErrMessage
	Else
		GenerateError strErrMessage
	End If
End Sub

Sub TestErrorWithTransaction(transaction, objErr )
	If Err <> 0 Then
		objNSNET.RollbackTransaction(transaction)
		TestError objErr
	End If
End Sub

%>
