<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/html_url.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Photo_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objRs, strTable, strLine, bCanRemove
Dim strDocIDs
Dim bEdit

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arAnnouncementView) Or HasUserRight(arAnnouncementPost)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Announcement", "kTitleViewAnn")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miTop
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbAnnView
End Function

Sub ReadState()
End Sub

Sub WriteState()
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/view-announcements.min.css")%>">
	<link rel="stylesheet" type="text/css" href="/vendor/custom/fonts/font-awesome/css/font-awesome.min.css">

	<SCRIPT><!--
		var wndPrintVersion = null;
		<%Call DrawAttachmentsScripts()%>

		function addAnnouncement() {
			if(isDBBusy()) return false;

			var form = document.forms['MenuForm']

			DoSubmit(form, "Announcements.asp");
		}

		function deleteAnnouncements() {
			if(isDBBusy()) return false;

			var form = document.forms['announcements'];
			var el = form.elements['del'];
			var chkdCnt = 0;

			if (el) {
				if (el.length) {
					for (var i = 0; i < el.length; i++)
						if (el[i].checked) {
							chkdCnt++;
						}
				}
				else {
					if (el.checked) chkdCnt++;
				}

				if (chkdCnt == 0) {
					alert(language.Generic.Announcement.kCheckMessageToDelete);
				}
				else {
					$.show.confirmation(language.Generic.Announcement.kAreYouSureToDelete).then(function() {
						setDBBusy();
						DoSubmit(form, "");
					});
				}
			}
		}

		function editAnnouncement(AnID) {
			var form = document.forms['announcements'];

			form.elements['ANNOUNCEMENTID'].value = AnID;
			form.elements['ACTION'].value = 'edit';

			DoSubmit(form, "Announcements.asp");
		}

		//-->
	</SCRIPT><%
End Sub

Sub Main()
	Set objRs = objNSNET.GetAnnouncementList(strUserId, strSchoolID, bCanRemove)
	bEdit = (HasUserRole(rlAdmin) or (bCanRemove And HasUserRight(arAnnouncementPost))) and not readonly
End	Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons
	Call ButtonSend("addAnnouncement()", "Отправить")

	If bEdit And Not objRs.EOF Then
		Call ButtonDel("deleteAnnouncements()", obLanguage("Common","kRemove"))
	End If
End Sub

Sub onDrawPage()%>
	<form name="announcements" method="POST" action="AnnouncementsDelete.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ACTION","", "ANNOUNCEMENTID", ""))%><%

		If HasUserRight(arAnnouncementPost) And Not readonly Then Call DrawButtonPanel()%>

		<div class="row">
			<div class="col-md-12"><%
				If objRs.EOF Then
					DrawInfo obLanguage("Announcement", "kNoAnnoun"), False
				Else
					Call DrawAnnouncementsTable()
				End If%>
			</div>
		</div>
	</form><%
End Sub
	
Sub DrawAnnouncementsTable()
	Dim rsAttachments, strNickName, arrValidIds(), i, temp

	i = 0
	
	rsAttachments = objRs("rsAttachments")%>
	<div class="adver-container"><%
		While Not objRs.EOF
			ReDim Preserve arrValidIds(i)

			arrValidIds(i) = objRs("USERID")
			strNickName = DB2HTML(objNSNET.GetUserNickName(objRs("USERID")))%>

			<div class="advertisement">
				<div class="adver-body">
					<h3><span><%=obLanguage("Announcement", "kTopic")%>:</span><%=DB2HTML(objRs("TITLE"))%></h3>
					<div class="visible-xs">
						<a href="#" class="username-coloured"><%=strNickName%></a>
					</div>
					<div class="adver-info">
						<span><%=Date2Str(objRs("POSTDATE"))%></span><%
						If bEdit And (HasUserRole(rlAdmin) Or (bCanRemove And CLng(objRs("USERID")) = Clng(strUserID))) Then%>
							<input type="checkbox" name="del" value="<%=objRs("ANNOUNCEMENTID")%>">
							<a href="JavaScript:editAnnouncement(<%=objRs("ANNOUNCEMENTID")%>)" tooltip="<%=obLanguage("Common","kEdit")%>" onclick="JavaScript:editAnnouncement(<%=objRs("ANNOUNCEMENTID")%>)">
								<span class="icon-pencil"></span>
							</a><%
						End If%>
					</div>

					<%If Not IsDull(objRs("DESCRIPTION")) Or Not IsNull(rsAttachments("ATTACHMENTID")) Then%>
						<div class="adver-content">
							<%=DB2HTML_BR_URL(objRs("DESCRIPTION"))%><%
							If Not IsNull(rsAttachments("ATTACHMENTID")) Then%>
								<div class="fieldset">
									<span><%=obLanguage("Common", "kAttachedFiles")%></span><%
									While Not rsAttachments.EOF
										nAttachmentID = CLng(rsAttachments("ATTACHMENTID"))
										strAFileName = rsAttachments("AFileName")
										strADescription = rsAttachments("ADESCRIPTION")
										strDocIDs = strDocIDs & nAttachmentID & ","%>

										<div><%
											Call AttachmentLink(nAttachmentID, strAFileName)
										
											If Not IsDull(strADescription) Then
												rw "&nbsp;" & DB2HTML(strADescription)
											End If%>
										</div><%

										rsAttachments.MoveNext
									WEnd%>
								</div><%
							End If%>
						</div>
					<%End If%>
				</div>
				<div class="adver-profile hidden-xs">
					<div class="profile-image">
						<%=GetPhotoStyleBackground(objRs("USERID"))%>
					</div>
					<div>
						<span class="username-coloured"><%=strNickName%></span>
					</div>
				</div>
			</div><%

			i = i + 1
			objRs.MoveNext
		WEnd%>
	</div><%

	temp = arrValidIds
	Call obTokenMgr.SetData(strToken, stValidIDs, temp)
	Call obTokenMgr.SetData(strToken, stDocIDs, strDocIDs)
End Sub%>