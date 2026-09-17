<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
If request("EventType") <> "2" Then
	If Not HasUserRight(arPostSchoolEvent) Then GenerateError obLanguage("Common","kErrPageAccess")
End If
Dim strEventID, arrEvents, i, nClassID

If Not IsDull( Request("delEvent") ) Then 
	ReDim arrEvents(Request("delEvent").Count-1)
	For i = 0 To UBound(arrEvents)
		arrEvents(i) = GetSafeID( Request("delEvent")(i+1), Null )
	Next
Else 
	ReDim arrEvents(0)
	arrEvents(0) = GetSafeID( Request("EventID"), Null )
End If
For i = 0 To UBound(arrEvents)
	nClassID = objNSNET.GetEventClassID(arrEvents(i))
	If nClassID <> 0 Then
		If Not HasUserRight(arClassMgmPostClassEventAll) Then 
			If Not HasUserRight(arClassMgmPostClassEventSelf) Then GenerateError obLanguage("Common","kErrPageAccess")
			If Not objNSNET.IsClassChief(nClassID, strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")
		End If
	Else
		If Not HasUserRight(arPostSchoolEvent) Then GenerateError obLanguage("Common","kErrPageAccess")
	End If
Next

Call objNSNET.RemoveEvents(arrEvents)
TestError obLanguage("SetupSchoolCalendar","kErrDelEvent")

RedirectTo Request("BackPage"), null
%>


