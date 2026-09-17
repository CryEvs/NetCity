<!-- #INCLUDE FILE="../headerajax.asp" -->
<%On Error Resume Next

Dim objMailComponent
Dim json
Dim jtStartIndex, jtPageSize, jtSorting
Dim nBoxID
	
Call InitMailComponent
	
jtStartIndex = Request("jtStartIndex")
jtPageSize = Request("jtPageSize")
jtSorting = Request("jtSorting")

nBoxID = GetSafeLng(Request("nBoxID"), 0)

json = objMailComponent.GetMessageList(strUserId, nBoxID, jtStartIndex, jtPageSize, jtSorting)

If Err.number <> 0 Then
	json = "{""Result"" : ""ERROR"", ""Message"": """ & obLanguage("Messages", "kErrGetMsgs") & """ }"
End If
Response.Write json

Sub InitMailComponent
	Set objMailComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMailComponent")
	If Not IsObject(objMailComponent) Then
		GenerateError obLanguage("Messages","kCantCreateMailComponent")
	End If
End Sub%>