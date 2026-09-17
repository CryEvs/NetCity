<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/timeBoxes.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.

Const kstrFormName = "EditForm"
Const kNameFrom = "ADT"
Const kNameTo = "DDT"

Dim strEventID, strEventName
Dim dtDate, tmStartTime, tmEndTime, strDescription, bPeriodicity
Dim objRs, strBackPage, nViewType, strTitle
Dim strClassID, rsRooms, arrRooms, strRoomID, bNoRooms
Dim nPortal, nPublic, bPortal, bNoTime
Dim hasDescription

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
End Function

Function GetCommonTitle()
	GetCommonTitle = strTitle
End Function

Function GetPageTitle()
	Dim strCommonTitle

	strCommonTitle = GetCommonTitle()

	If Not IsDull(strClassID) Then
		GetPageTitle = strCommonTitle & GreenText(" (" & objNSNET.GetClassName(strClassID) & ")")
	Else
		GetPageTitle = strCommonTitle
	End If
End Function

Sub ReadState()
	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)

	dtDate			= Str2Date(Request("DATE"))
	strEventID		= GetSafeID(Request("EventID"), "0")
	strBackPage		= GetSafeStr(Request("BackPage"), -1, "/asp/SetupSchool/Calendar/Events.asp")
	nViewType		= Request("EventType")

	If IsDull(nViewType) Then
		nViewType = GetSafeLng(obTokenMgr.GetData(strToken, "stEventsMonthViewType"), kSchoolEvent)
	Else
		nViewType = GetSafeLng(nViewType, kSchoolEvent)
	End If

	Call obTokenMgr.SetData(strToken, "stEventsMonthViewType", nViewType)
	readonly = objNSNET.IsYearClosed(strCurrYearID)

	If nViewType = kClassEvent Then
		If strEventID <> "0" Then ' получаем ClassID через EventID или напрямую, если создаём новый Event для класса
			strClassID = objNSNET.GetEventClassID(strEventID)
		Else
			strClassID = GetSafeID( obTokenMgr.GetData(strToken, stCurrClass), Null)
		End If

		If Not readonly Then
			If HasUserRight(arClassMgmPostClassEventAll) Then
			ElseIf HasUserRight(arClassMgmPostClassEventSelf) Then
				If strEventID <> "0" Then
					If Not objNSNET.IsClassChief(strClassID, strUserId) Then readonly = True
				End If
			Else
				readonly = True
			End If
		End If

		strTitle = obLanguage("Common","kClassEventHeader",strFunctionalityType)
	Else
		If Not readonly Then readonly = Not HasUserRight(arPostSchoolEvent)

		Select Case nViewType
			Case kSchoolEvent		strTitle = obLanguage("Common","kSchoolEventHeader",strFunctionalityType)
			Case kVacation		strTitle = obLanguage("Common","kVacationHeader")
			Case kHoliday		strTitle = obLanguage("Common","kHolidayHeader")
			Case Else GenerateError obLanguage("Common","kUnexpErr")
		End Select
	End If
	If strEventID = "0" And readonly Then GenerateError obLanguage("Common","kErrPageAccess")
End Sub

Sub Main()
	Dim objPortalEventInfo

	bNoTime = False
	bPeriodicity = False

	Select Case nViewType
	Case kVacation, kHoliday
		bNoTime = True
		bPeriodicity = True
	End Select

	bPortal = PORTAL And (nViewType = kSchoolEvent)
	If strEventID = "0" Then
		strEventName	= ""
		tmStartTime		= dtDate
		tmEndTime		= dtDate
		strDescription	= ""

		If bPortal Then
			nPortal = 0
			nPublic = 0
		End If
	Else
		Set objRs = objNSNET.GetEventInfo(strEventID, nViewType)
		strEventName		= objRs("EVENTNAME")
		tmStartTime			= objRs("STARTTIME")
		tmEndTime			= objRs("ENDTIME")
		bPeriodicity		= (objRs("periodicity") = "Y")
		strDescription		= objRs("EVENTDESCRIPTION")

		If bPortal Then
			Set objPortalEventInfo = objNSNET.GetPortalEventInfo(strEventID)

			If Not objPortalEventInfo.EOF Then
				nPortal = 1
				nPublic = GetSafeLng(objPortalEventInfo("VIEWTYPE"), Null)
			Else
				nPortal = 0
				nPublic = 0
			End If
		End If
	End If

	hasDescription = CBool((nViewType = kClassEvent) Or (nViewType = kSchoolEvent))

	If hasDescription Then
		If strEventID <> "0" Then strRoomID = objRs("ROOMID")
		' get list of rooms to display
		Set rsRooms = objNSNET.GetRooms(strSchoolID, True)
		bNoRooms = rsRooms.EOF

		If Not bNoRooms Then arrRooms = rsRooms.GetRows(,, Array("ROOMID","ROOMNAME"))
	End If
End Sub

Sub onHead()%>

	<script><!--
		function Back() {
			goBack(document.<%=kstrFormName%>,'<%=strBackPage%>');
		}
	//--></script><%

	If readonly Then Exit Sub

	Call CalcCurrYearLimits(dtMinDate, dtMaxDate)
	bIsCheckDates = True
	Call scriptCalendar(kstrFormName, dtYearStart, dtYearEnd)

	%><script><!--
	function CanSaveEvent() {
		var form = document.<%=kstrFormName%>;
		var name = trimStr(form.EventName.value);

		if(name.length == 0) {
			focusAlert(form.EventName, language.Generic.SetupSchoolCalendar.kCalendarDescriptionCannot );
			return false;
		}
		if(!checkDates(form)) return false;

		<%If Not bNoTime Then
			Call CheckTime("startTime", "Start")
			Call CheckTime("endTime", "End")%>

			if(form.ADT.value == form.DDT.value && startTime != null) {
				if(endTime == null) endTime = 0;

				if(startTime > endTime) {
					focusAlert(form.EndH, language.Generic.SetupSchoolCalendar.kEndTimeMustBeLater );
					return false;
				}
			}

		<%End If%>

		<%If bPortal Then%>
			if(!form.elements["PORTAL"].checked && form.elements["PUBLIC"].checked) {
				focusAlert(form.PORTAL, language.Generic.SetupSchoolCalendar.kErrPublicEventOnPortal);
				return false;
			}
		<%End If%>

		return true;
	}

	function SaveEvent() {
		if(isDBBusy()) return false;

		var form = document.<%=kstrFormName%>;

		if(CanSaveEvent()) {
			setDBBusy();
			DoSubmit(form, "");
		}
	}

	function DeleteEvent() {
		if(isDBBusy()) return false;

		var form = document.<%=kstrFormName%>;

		setDBBusy();
		DoSubmit(form, "DeleteEvent.asp");
	}
	//--></script><%
End Sub

Sub DrawButtons()
	ButtonCancel "Back()", obLanguage("Common","kBack")
	If Not readonly Then
		ButtonSave "SaveEvent();", obLanguage("SetupSchoolCalendar", "kSaveEvent")
		ButtonReset "resetScreen('" & kstrFormName & "');", obLanguage("Common","kReset")
		If strEventID <> "0" Then ButtonDel "DeleteEvent();", obLanguage("SetupSchoolCalendar","kDeleteEvent")
	End If
End Sub

Sub onDrawPage()
	Dim strRoomName, i%>

	<FORM NAME="<%=kstrFormName%>" ACTION="SaveEvent.asp" METHOD="POST" class="form-horizontal form-edit">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("eventID", strEventID, "BackPage", strBackPage, "TableName", Request("TableName")))%>

		<div class="row">
			<div class="col-md-12"><%
				DrawButtonPanel%>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8"><%
				If readonly Then
					Call DrawReadonlyRow(obLanguage("Common","kName") & ":", strEventName)
					Call DrawReadonlyRow(obLanguage("Common","kStartTime") & ":", IIF(bNoTime, "", Time2Str(tmStartTime)) & " " & Date2Str(tmStartTime))
					Call DrawReadonlyRow(obLanguage("Common","kEndTime") & ":", IIF(bNoTime, "", Time2Str(tmEndTime)) & " " & Date2Str(tmEndTime))
					
					If nViewType <> kClassEvent Then 
						Call DrawReadonlyRow(obLanguage("SetupSchoolCalendar","kPeriodicity") & ":", IIF(bPeriodicity, obLanguage("SetupSchoolCalendar","kYearPeriod"), obLanguage("SetupSchoolCalendar","kNotPeriodicity")))
					End If

					If hasDescription Then
						If Not bNoRooms Then
							strRoomName = ""

							For i = 0 To Ubound(arrRooms, 2)
								If arrRooms(0, i) = strRoomID Then strRoomName = arrRooms(1, i) : Exit For
							Next

							Call DrawReadonlyRow(obLanguage("Common","kRoom",strFunctionalityType) & ":", strRoomName)
						End If
					End If

					If hasDescription Then Call DrawReadonlyRow(obLanguage("SetupSchoolCalendar","kDescription") & ":", strDescription)
				Else
					Call DrawInputRow(obLanguage("Common","kName") & ":", strEventName, "EventName", "text", 50, 200, "")
					
					If Not bNoTime Then
						OpenFormGroup obLanguage("Common","kStartTime") & ":"
							ShowTimeBox "Start", tmStartTime
						CloseFormGroup
					End If
					
					OpenFormGroup "Дата начала"
						Call DrawDateInput(kNameFrom, tmStartTime, obLanguage("Common","kCalendar"))
					CloseFormGroup
					
					If Not bNoTime Then
						OpenFormGroup obLanguage("Common","kEndTime") & ":"
							ShowTimeBox "End", tmEndTime
						CloseFormGroup
					End If

					OpenFormGroup "Дата окончания"
						Call DrawDateInput(kNameTo, tmEndTime, obLanguage("Common","kCalendar"))
					CloseFormGroup
							
					If nViewType <> kClassEvent Then
						Call DrawSimpleFilterRow(obLanguage("SetupSchoolCalendar","kPeriodicity"), "Periodicity", Array("", obLanguage("SetupSchoolCalendar","kNotPeriodicity"), "Y", obLanguage("SetupSchoolCalendar","kYearPeriod")), IIF(bPeriodicity, "Y", ""), Null, Null)
					End If

					If hasDescription Then
						If bNoRooms Then
							Call DrawReadonlyRow(obLanguage("Common","kRoom",strFunctionalityType) & ":", obLanguage("Common","kNoRooms",strFunctionalityType))
						Else
							Call DrawFilterRow("", obLanguage("Common","kRoom",strFunctionalityType), "Room", arrRooms, Null, Null, strRoomID, Null)
						End If
					End If

					If hasDescription Then Call DrawInputRow(obLanguage("SetupSchoolCalendar","kDescription") & ":", strDescription, "Desc", "area", 40, 5, "")
							
					If bPortal Then
						Call DrawCheckBox(obLanguage("SetupSchoolCalendar","kPublicEventOnPortal"), "PORTAL", "1", nPortal = 1, "dataChanged()")
						Call DrawCheckBox(obLanguage("SetupSchoolCalendar","kPublicEvent"), "PUBLIC", "1", nPublic = 1, "dataChanged()")
					End If
				End If%>
			</div>
		</div>
	</FORM><%
End Sub%>