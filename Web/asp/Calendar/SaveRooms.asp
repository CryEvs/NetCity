<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<% ' © 2007-2008 IRTech. All rights reserved.
'--------- Page Parameters -------
'	AT=<Access Token>
Const kMaxRoomLength = 50

If Not HasUserRight(arCalendarCreateCalendar) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim nFloor, nSeats, strRoomName, strAction
Dim i, arrData
Dim transaction

strAction = Request("act")

If strAction = "remove" Then
	If Request("DeleteID").Count > 0 Then
		Call objNSNET.RemoveRooms(Request("DeleteID"))
		TestError obLanguage("Calendar","kErrDelRoom",strFunctionalityType)
	End If
Else
	If strAction <> "add" And strAction <> "save" Then GenerateError obLanguage("Common","kUnexpErr")

	strRoomName = GetSafeStr(Request("NewRoomName"), kMaxRoomLength, "")

	'objCon.BeginTrans
	transaction = objNSNET.GetTransaction()
	
	If Not IsDull(strRoomName) Then ' add new
		nFloor = GetSafeLng(Request("NewFloor"), Null)
		nSeats = GetSafeLng(Request("NewSeats"), 0)

		Call objNSNET.CreateRoom_WT(transaction, strSchoolID, strRoomName, nFloor, nSeats)

		TestErrorWithTransaction transaction, obLanguage("Calendar","kErrInsRoom",strFunctionalityType)
	End If

	If strAction = "save" Then
		If Request("RoomID").Count > 0 Then
			ReDim arrData(3, Request("RoomID").Count - 1)
			For i = 0 To UBound(arrData, 2)
				arrData(0, i) = GetSafeID(Request("RoomID")(i+1), Null)
				arrData(1, i) = GetSafeStr(Trim(Request("RoomName")(i+1)), kMaxRoomLength, "-")
				arrData(2, i) = GetSafeLng(Request("Floor")(i+1), Null)
				arrData(3, i) = GetSafeLng(Request("Seats")(i+1), 0)
			Next

			Call objNSNET.EditRooms_WT(transaction, arrData)
			TestErrorWithTransaction obLanguage("Calendar","kErrUpdRoom",strFunctionalityType)
		End If
	End If

	objNSNET.CommitTransaction(transaction)
End If

If strAction = "save" Then
	Call WriteJsonResult(obLanguage("Common","kDataSaved"), False, 0)
End If

RedirectTo "Rooms.asp", Null%>