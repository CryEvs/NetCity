<%@ Language=VBScript %>
<% ' © 2007-2012 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Charset = "utf-8"
Server.ScriptTimeOut = Server.ScriptTimeOut * 10

Const NODE_ELEMENT	= 1
Const PARAMS_CNT	= 2
Const kArrSerial	= 0
Const kArrSeedGUID	= 1
Const kArrCounter	= 2
Const kInvalidTagError		    = "Неверный тэг "
Const kInvalidAttribError	    = "Неверный атрибут "
Const kDuplicateTagError	    = "Дублирование тэга "
Const kEmptyXML					= "В XML нет записей ключей eToken"
Const kErrorXML                 = "Указанный файл не является .xml файлом"
Const kNodesNotFound    		= "Тег <Token> не содержит дочерних тегов"
Const kTagNotFound_Serial		= "Тег <Token> не содержит аттрибут Serial"
Const kTagNotFound_Seed			= "Тег <Application> не содержит тега <Seed>"
Const kTagNotFound_Counter		= "Тег <Application> не содержит тега <MovingFactor>"
Const kWasImport	            = "Импортировано записей"
Const kImportedKeysAlreadyExist = "Импортируемые ключи уже есть в БД"

Dim uploadData, strXML, xmlDoc, aNode
Dim arrTokens, nTokensCnt, nRecs, objRequestParsing, requestData
Dim bExit, i
Dim nCurrIndex

%>
<!-- #INCLUDE FILE=../scripts/common.asp -->
<%

Set uploadData = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUploadComponent")
Set objRequestParsing = uploadData.ParseRequest()
Set requestData = objRequestParsing.Data
strToken = requestData("AT")
Call GetTokenParams()
%>
<!-- #INCLUDE FILE=../scripts/Popup.asp -->
<!-- #INCLUDE FILE=../scripts/stdhead.asp -->
<!-- #INCLUDE FILE=../scripts/PageStates.asp --><%
If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")
strXML = requestData("FILE")
If InStr(strXML, "<?") = 0 Then  GenerateError kErrorXML
Set xmlDoc = CreateObject("msxml2.DOMDocument")
xmlDoc.async = False
xmlDoc.loadXML(Mid(strXML, InStr(strXML, "<?")))
bExit = False

If IsNull(xmlDoc.documentElement ) Or xmlDoc.xml="" Then GenerateError "Ошибка чтения xml-документа"
Response.Write "<html lang="&""""&strCurrLng&""""&"><head><meta http-equiv=""Content-Type"" content=""text/html; charset=utf-8""></head>" & _
	"<body style=""font-family: verdana, arial, helvetica; font-size:8pt"">" & _
	"<script>window.focus()</script>" & _	
	"<h3 align=""center"">Импорт ключей eToken</h3>"
Response.Flush
If UCase(xmlDoc.documentElement.nodeName) <> "TOKENS" Then
	ShowErrorMessage(kInvalidTagError & "<" & xmlDoc.documentElement.nodeName & ">") : bExit = True
Else
	nTokensCnt = xmlDoc.documentElement.childNodes.length
	If nTokensCnt = 0 Then
		ShowErrorMessage(kEmptyXML) : bExit = True
	End If
End If

If Not bExit Then
	nCurrIndex = 0
	ReDim arrTokens(PARAMS_CNT, nTokensCnt - 1)
	For Each aNode In xmlDoc.documentElement.childNodes
		Select Case UCase(aNode.nodeName)
			Case "TOKEN"
				Call ProcessPlan(aNode, nCurrIndex)
			Case Else
				ShowErrorMessage(kInvalidTagError & "<" & aNode.nodeName & ">") : bExit = True
		End Select
		If bExit Then Exit For
		nCurrIndex = nCurrIndex + 1
	Next
	If Not bExit Then
		nRecs = objNSNET.ImportETokenKeys(arrTokens)
		Response.Write "<br><br><div class=""body"">"
		If nRecs = 0 Then 
		    Response.Write "<b>" & kImportedKeysAlreadyExist & "</b>"			
		Else
			Response.Write "<b>" & kWasImport & ":&nbsp;" & nRecs & "</b>"
		End If
		Response.Write "</div>"
	End If
End If

Response.Write "<br><input type=""button"" value=""Вернуться"" OnClick=""window.close();"" id=button1 name=button1></body></html>"

Sub ProcessPlan( theNode, nIndex )
	Dim aNode, n
	Dim aAttrib, vNode
    Dim strSerial, strSeedGUID, strCounter

	If Not IsObject(theNode) Then GenerateError obLanguage("Common","kUnexpErr")
	If IsObject(theNode.Attributes) Then
		For Each aAttrib In theNode.Attributes
			If UCase(aAttrib.nodeName) = "SERIAL" Then
			    strSerial = GetSafeStr(aAttrib.nodeValue, 12, "")
			    If strSerial <> "" Then arrTokens(kArrSerial, nIndex) = strSerial
				Exit For
			End If
		Next
	End If
	If IsEmpty(arrTokens(kArrSerial, nIndex)) Then
		Call ShowErrorMessage(kTagNotFound_Serial) : bExit = True : Exit Sub
	End If
    If Not theNode.hasChildNodes() Then Call ShowErrorMessage(kNodesNotFound) : bExit = True : Exit Sub
	For Each aNode In theNode.childNodes
		If UCase(aNode.nodeName) = "APPLICATIONS" Then
		    If UCase(aNode.childNodes(0).nodeName) = "APPLICATION" Then
		        For Each vNode In aNode.childNodes(0).childNodes
		            If UCase(vNode.nodeName) = "SEED" Then 
		                strSeedGUID = GetSafeStr(vNode.text, 48, "")
		                If strSeedGUID <> "" Then arrTokens(kArrSeedGUID, nIndex) = strSeedGUID
		            End If
		            If UCase(vNode.nodeName) = "MOVINGFACTOR" Then 
		                strCounter = GetSafeID(vNode.text, "-1")
		                If strCounter <> "-1" Then arrTokens(kArrCounter, nIndex) = strCounter
		            End If		
                Next		                
		    End If	        
		End If
		If bExit Then Exit Sub
	Next

	If IsEmpty(arrTokens(kArrSeedGUID, nIndex)) Then
		Call ShowErrorMessage(kTagNotFound_Seed) : bExit = True : Exit Sub
	End If

	If IsEmpty(arrTokens(kArrCounter, nIndex)) Then
		Call ShowErrorMessage(kTagNotFound_Counter) : bExit = True : Exit Sub
	End If
End Sub

Sub ShowErrorMessage(strMessage)
	Response.Write "<div class=""body""><b>" & DB2HTML(strMessage) & "</b></div>"
End Sub
%>
