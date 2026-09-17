<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim bEdit
Dim strTitle, strDescription, arrRoleList, nRoleID, nAnnouncementID
Dim dtPost, dtToday, objForm
Dim nPortal, nPublic
Dim strFilesJson

Function GetPageTitle()
	GetPageTitle = obLanguage("Announcement", IIf(Not bEdit, "kTitleAnnounce", "kEditingAnnouncements"))
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arAnnouncementPost)
End Function

Sub ReadState()
	bIsCheckDates = False
	bEdit = Request("ACTION") = "edit"	
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, "")
End Sub

Sub Main()
	Dim objAnnInfo, objPortalAnnInfo, objHelper

	Set objHelper = comHelper.AspHelper
	
	Set arrRoleList = objHelper.GetEnums(objHelper.Enums.Role, Array(Role_EmAdmin, Role_EMHDEM, Role_EmOFREM, Role_EmOper, Role_EmCoordOD))
	TestError obLanguage("Common", "kErrCantAccessToRights")

	nRoleID = 0
	
	If IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then
		Set objForm				= obTokenMgr.GetData(strToken, "QA_dct")
		strTitle				= GetSafeStr(objForm("TITLE"), 50,"")
		strDescription			= GetSafeStr(objForm("AD"), 4000, "")
		nRoleID					= objForm("ROLEID")
		dtPost					= objForm("ADT")
		bEdit					= objForm("BEdit")
		nAnnouncementID			= objForm("ANNOUNCEMENTID")

		If PORTAL Then
			nPortal = GetSafeLng(objForm("PORTAL"), 0)
			nPublic = GetSafeLng(objForm("PUBLIC"), 0)
		End If

		Set objForm = Nothing
		Call obTokenMgr.SetData(strToken, "QA_dct", Null)
	Else
		If Not bEdit Then
			strTitle			= ""
			strDescription		= ""
			dtPost				= ""

			If PORTAL Then
				nPortal = 0
				nPublic = 0
			End If
		Else
			nAnnouncementID			= Request("ANNOUNCEMENTID")
			Set objAnnInfo			= objNSNET.GetAnnouncementInfo(nAnnouncementID)
			strTitle				= GetSafeStr(objAnnInfo("TITLE"), 50, "")
			strDescription			= GetSafeStr(objAnnInfo("Description"), 4000, "")
			nRoleID					= objAnnInfo("POSTTO")
			dtPost					= Date2Java(objAnnInfo("DELETEDATE"))

			Set objForm = Nothing

			If PORTAL Then
				Set objPortalAnnInfo = objNSNET.GetPortalAnnouncementInfo(nAnnouncementID)

				If Not objPortalAnnInfo.EOF Then
					nPortal = 1
					nPublic = GetSafeLng(objPortalAnnInfo("VIEWTYPE"), Null)
				Else
					nPortal = 0
					nPublic = 0
				End If
			End If
		End IF
	End IF

	If dtPost = "" Then dtPost = DateAdd("d", 10, NSNow())
	'stop
	'dtPost = DateAdd("d", 6010, NSNow())

	strFilesJson = ""
	If bEdit Then
		Dim result, oAttachmentsComponent

		Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")
		
		Set result = oAttachmentsComponent.GetFileAttachmentInfoAnnouncement(nAnnouncementId)
		strFilesJson = ConvertJsonObject2Str(result)
	End If
End Sub

Sub onHead()
	Call scriptCalendar("Edit", NSDate(), DateAdd("yyyy", 2, NSDate()))%>

	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/file-attachments.min.css")%>">
	<script src="<%=GetVersionedJsLink("fileAttachmentCtrl.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

	<script>
		var fileAttachmentCtrl;

		$(document).ready(function() {
			fileAttachmentCtrl = new FileAttachmentCtrl({
					multiple: true,
					showDescription: true,
					block: $('#attachFiles')
				}, {
					wasChanged: true,
					context: {
						AnnouncementId: <%=GetSafeLng(nAnnouncementID, 0)%>
					}
					<%If bEdit And Not IsDull(strFilesJson) Then%>,
						files: <%=strFilesJson%>
					<%End If %>
				}
			);
		});

		function checkDate() {
			var dateFilter = getDateFilterInfo("ADT");

			return dateFilter.check();
		}

		function save() {
			fileAttachmentCtrl.appendInputToForm(document.forms["Edit"]);
			
			ok_check_db('Edit', '');
		}

		function canSubmit() {
			var form = document.forms["Edit"];

			if(trimStr(form.elements["TITLE"].value) == "") {
				focusAlert(form.TITLE, language.Generic.Announcement.kEnterAnnName);
				return false;
			}

			if(!checkDate(form)) {
				return false;
			}

			<%If PORTAL Then%>
				if(!form.elements["PORTAL"].checked && form.elements["PUBLIC"].checked) {
					focusAlert(form.PORTAL, language.Generic.Announcement.kErrPublicOnPortal );
					return false;
				}
			<%End If%>

			var arrChecks = new Array()

			CutTextarea(form.elements["AD"], 3900, arrChecks)

			return extDeferred.when(arrChecks);
		}

		function CutTextarea(txArea, maxLength, arrChecks) {
			var valueText = txArea.value;
			if (valueText.length <= maxLength) {
				return;
			}

			arrChecks.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.Announcement.kAnnouncementLengthWarning), 
				function(){ txArea.value = valueText.substring(0, maxLength);}, 
				function(){ txArea.focus(); }) );
		}
		<%If Not bEdit Then%>
			function clearScreen() {
				var form = document.forms["Edit"];

				form.elements["TITLE"].value = "";
				form.elements["AD"].value = "";
				dataWereChanged = false;

				<%If PORTAL Then%>
					form.elements["PORTAL"].checked = false;
					form.elements["PUBLIC"].checked = false;
				<%End If%>
			}
		<%End IF%>
	</script><%
End Sub

Sub DrawButtons
	If bEdit Then
		Call ButtonSave("save('Edit', '')", obLanguage("Announcement", "kSaveAnnouncement"))
	Else
		ButtonSend "save('Edit', '')", obLanguage("Announcement", "kSendAnnouncement")
	End If

	If Not bEdit Then
		ButtonReset "clearScreen()", obLanguage("Announcement", "kClearAll")
	End If
End Sub

Sub onDrawPage()%>
	<form NAME="Edit" METHOD="POST" ACTION="SaveAnnouncements.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%><%
		If bEdit Then
			rw WriteHiddenTags(Array("ACTION", "edit", "ANNOUNCEMENTID", nAnnouncementID))
		End If

		Call DrawButtonPanel() 

		Call DrawSelectNamedEntitiesArrRow(obLanguage("Announcement", "kAnnouncementRecepient"), nRoleID, "ROLEID", arrRoleList.ToArray(), obLanguage("Common","kAll"), "dataChanged()")
					
		Call DrawDateInfoRow(obLanguage("Announcement", "kDeleteAfter"), dtPost, "ADT", obLanguage("Common", "kCalendar"))
					
		Call DrawInputRow(obLanguage("Announcement", "kTopic"), strTitle, "TITLE", "text", 44, 50, "")
					
		If PORTAL Then
			Call DrawCheckBox(obLanguage("Announcement", "kPublicOnPortal"), "PORTAL", 1, nPortal = 1, "dataChanged()")
			Call DrawCheckBox(obLanguage("Announcement", "kPublicAnnounce"), "PUBLIC", 1, nPublic = 1, "dataChanged()")
		End If

		Call DrawInputRow(obLanguage("Announcement", "kAnnouncement"), strDescription, "AD", "area", 50, 15, "")

		Call OpenFormGroup(obLanguage("Common","kAttachedFile"))%>
			<div id="attachFiles"></div><%
		Call CloseFormGroup%>
	</form><%
End Sub%>