<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="asp/SetupSchool/Calendar/Curriculum/Float_js_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const MAX_FLOOR = 7
Const kMaxRoomLength = 50
Const kRoomSize = 27
Const kSeatSize = 3

Dim objStaffList, arrStaffs

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarCreateCalendar)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleRooms",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbRooms
 End Function

Sub Main
	Dim nTmp

	' список работающих сотрудников
	Set objStaffList = objNSNET.GetStaffList(strSchoolID,strCurrYearID, " ", " ", "", 0, True, 0, 0, nTmp, "", kWorkStatus_Working)
	arrStaffs = objStaffList.GetRows(,,Array("USERID", "NICKNAME"))
End Sub

Sub onHead()%>

	<script src="<%=GetVersionedResLink("/vendor/pages/js/roomsInfoEdit.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>

	<SCRIPT><!--
		var schoolId = <%=strSchoolId%>;
		var staffs = <%=objStaffList.ToJSON(Array("userid", "nickname"))%>;

		var roomsInfoCtrl;
		$(document).ready(function() {
			roomsInfoCtrl = new RoomsCtrl();
			roomsInfoCtrl.InitRooms()
				.then(function() {
					roomsInfoCtrl.NotifyUserOfDuplicateTitles();
				});
		});

		var wndStat;
		function Stat() {
			var winOptions = { url: urlHelper.makeUrl( "StatRooms.asp" ), name: '_stat', specs: 'status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=500', winChild: wndStat };
			windowOpen( winOptions );
			wndStat = winOptions.winChild;
			center(wndStat, 750, 500);
		}
	//--></SCRIPT><%
End Sub

Sub DrawButtons()
	If readonly Then Exit Sub
	
	ButtonAdd "roomsInfoCtrl.AddNew()", obLanguage("Calendar","kAddRoom",strFunctionalityType)
End Sub

Sub DrawLinkButtons
	Dim hint, bPreSchool

	bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool

	If bPreSchool Then
		hint = obLanguage("MenuFolders", "kFNClasses", strFunctionalityType)
		Call Button("postTo('/asp/ClassManagement/Classes.asp');", hint, hint, "")
	End If
End Sub

Sub onDrawPage()
	Dim i
	
	Call DrawButtonPanel()%>

	<div>
		<style>
			.room-cell-invalid {
				border: solid 1px #7eb3f6 !important;
				border-color: #ee0000 !important;
			}
		</style>
	</div>
	<div id="NoRooms"></div>
	<div id="roomsInfo"></div><%
End Sub%>