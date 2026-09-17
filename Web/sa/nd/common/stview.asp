<%@ Language=VBScript %>
<%
Option Explicit
Response.Buffer = TRUE
'Response.Expires = 0
'Response.AddHeader "pragma", "no-cache"
%>
<!-- #INCLUDE FILE="common.asp" -->
<%
Dim List, Item, strClassID, strAssignmentID, bFound, strParameters, strMediaObject, strExternalURL

CheckCNTeacherLogin

strClassID = Request("CID")
strAssignmentID = Request("AID")
If IsEmptyStr(strClassID) Or IsEmptyStr(strAssignmentID) Then HandleFatalError "Не заданы параметры ClassID или AssignmentID"
strExternalURL = Request("EXTURL")

Set List = lacc.GetAssignment( strToken, strClassID, Application("LAID") )
If Err <> 0 Then HandleFatalError( "Ошибка получения списка заданий: " & Err.Description )
If lacc.LastErrorCode <> 0 Then Call HandleFatalError( "Ошибка связи с сервером NetSchool: " & lacc.LastError )

strParameters = ""
bFound = False
If List.Count > 0 Then
	For Each Item In List		
	    If CStr(Item.Field("assignmentid"))=CStr(strAssignmentID) Then
            bFound = True
            strParameters = CStr(Item.Field("parameters"))
	        Exit For
		End If
	Next
	If bFound Then 
	    If IsEmptyStr(strParameters) Then
	        HandleFatalError "Пустая ссылка для перехода к медиаобъекту, AssignmentID=" & CStr(strAssignmentID)
	    End If
	Else
	    HandleFatalError "Не найдено задание с AssignmentID=" & CStr(strAssignmentID)
	End If
Else
    HandleFatalError "Не найдено заданий для ученика. Возможно, все задания уже выполнены"
End If
		    
' здесь strParameters имеет вид: sgo/ni_phys_9/1/start.html;2;4
If InStr(strParameters,";")>0 Then
    strMediaObject = Left(strParameters, InStr(strParameters,";")-1)
Else
    strMediaObject = strParameters
End If

%>
<HTML><HEAD>
<TITLE>Переход к медиаобъекту...</TITLE>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8">
<% if InStr(strParameters,"Theoretical") Then %>
<SCRIPT LANGUAGE="JAVASCRIPT">
	var request = new XMLHttpRequest();
	request.open("POST", "<%=strExternalURL%>api/lacc.asp?Function=SetScoreAnswers&Result=1000&AccessToken=<%=strToken%>&AssignmentID=<%=strAssignmentID%>", false);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();
</SCRIPT>
<% end if %>
<meta http-equiv="Refresh" content="0; URL=<%=CONTENT_SERVER & strMediaObject & "?AT="&strToken &"&TTSURL="&Server.URLEncode(strExternalURL) &"&CID="&strClassID &"&AID="&strAssignmentID %>">
</HEAD></HTML>
