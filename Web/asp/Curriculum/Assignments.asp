<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/SmsAccess_inc.asp" -->
<!-- #INCLUDE FILE="Assignments_inc.asp" -->

<%' © 2007-2015 IRTech. All rights reserved.

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miStudentDiary
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStudentDiary
 End Function

Sub WriteState()
	If Not IsDull(strTermID) Then Call obTokenMgr.SetData(strToken, stCurrTerm, strTermID)
	Call obTokenMgr.SetData(strToken, stCurrStudent, strStudentID)
	Call obTokenMgr.SetData(strToken, stCurrDate, dtWeekStart)
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arAssignmentsViewComplete)
End Function

Sub onHead()
	Dim strNewDiskToken
	IntegrationNewDisk_Available()
	strNewDiskToken = obTokenMgr.GetData(strToken, stNewDiskToken)	
	%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/file-attachments.min.css")%>">
	<script src="<%=GetVersionedJsLink("jquery.iframe-transport.js")%>" type="text/javascript"></script>
	<script><!--
		deferredResLoader.loadScript("/js/fileAttachmentCtrl.min.js");

		var learnApp = false;
		$(document).ready(function() {
			var strNewDiskToken = "<%=strNewDiskToken%>";
			var wasNewDiskRequest = "<%=Bool2Js(obTokenMgr.GetData(strToken, "WASNEWDISKREQUEST"))%>";
			if (strNewDiskToken && !wasNewDiskRequest)
			{
				var srcUrl = "https://obr.nd.ru/showcase?token=" + strNewDiskToken + "&redirect=0"
				$.ajax({
					url: srcUrl,
					type: 'POST',
					dataType: 'iframe',
					success: function (response) {
						jsSubmit({
							action: "/webapi/NewDisk/wasRequest",
							method: 'POST'
						})
					}
				});
			};
			<%If HasUserRole(rlStudent) Then%>
				deferredResLoader.ready(function() {
					$.fn.printUtils().initAdditionalFilters([language.Generic.Common.kStud_FI, "<%=DB2Java(strUserName)%>"]);
				});
			<%End If%>
		});

		var wnd = null;
		function ShowResults(url, sID, aID, productId) {
			learnApp = true;
			var params = {
				PROXYURL: url, 
				TTSURL: '<%=strTTSURL%>',
				STUDENTID: sID,
				AID: aID
			};

			if(productId) {
				params['LAID'] = productId;
			}

			url = urlHelper.makeUrl('/asp/RemoteHostProxy.asp', params);
			var winOptions = { url: url, name: '_blank', specs: 'status=yes, toolbar=yes, menubar=yes, location=no, scrollbars=yes, resizable=yes, directories=no, width=950, height=660', winChild: wnd };
			windowOpen( winOptions );
			wnd = winOptions.winChild;
		}

		function dayschedule(date) {
			$.show.processing();
			postTo("/asp/Calendar/DayViewS.asp", {date: date});
		}

		function StartLA(url, classID, aID, productId) {
			learnApp = true;
			var params = { 
				PROXYURL: url,
				TTSURL: '<%=strTTSURL%>',
				EXTURL: '<%=strExternalURL%>',
				CID: classID,
				AID: aID
			};

			if(productId) {
				params['LAID'] = productId;
			}

			url = urlHelper.makeUrl('/asp/RemoteHostProxy.asp', params);
			var winOptions = { url: url, name: '_blank', specs: 'status=yes, toolbar=yes, menubar=yes, location=no, scrollbars=yes, resizable=yes, directories=no, width=950, height=660', winChild: wnd };
			windowOpen( winOptions );
			wnd = winOptions.winChild;
		}

		function receivingMarksBySms() {
			SetSelectedMenu('16','/asp/MySettings/MarksBySms.asp');
			SetSelectedTab('57','/asp/MySettings/MarksBySms.asp');
		}

		<%If strStudentID <> "0" Then %>
			function changeStudent() {
				DoSubmit(document.Assignments, "");
			}

			function gotoPage(nPageNo) {
				var form = document.Assignments;
				form.elements["PAGE"].value = nPageNo;
				DoSubmit(form, "");
			}
		<%End If%>

		function SubmAssign(AID, CID, TP) {
			jsSubmit({
				data: {AID: AID, CID: CID, TP: TP, PCLID_IUP: '<%=strClassID_IUP%>'},
				action: '/asp/ajax/Assignments/GetAssignmentInfo.asp',
				onSuccess: function(response) {
					if(response.data.strScript) {
						$('body').append(response.data.strScript);
					}

					$.show.dialog({
						size: BootstrapDialog.SIZE_WIDE,
						title: response.data.strTitle,
						message: response.data.strTable,
						onhidden: function() {
							if(learnApp) postTo('/asp/Curriculum/Assignments.asp');
						}
					});
				}
			});
		}

		function formTitle(preform) {
			var preform0 = preform.split(' (')[0];
			return preform0;
		}

		function printStudentBlog() {
			$('.print-block').printUtils().toPrint( { viewHeader: true, formTitle: formTitle } );
		}

		function exportStudentBlog() {
			$('.print-block').printUtils().toExcel( { viewHeader: true, formTitle: formTitle } );
		}
		<%
If strYaClassAuthUrl <> "" Then%>
    wnd = null;
    function gotoYaClass() {
    	var winOptions = { url: '<%=(obContext.ServerSettings.SystemSettings.YaClassUrl & strYaClassAuthUrl)%>', name: '_blank', winChild: wnd };
    	windowOpen( winOptions );
    	wnd = winOptions.winChild;
    }<%
End If%>

	//--></script><%
End Sub

Sub DrawFilters(strForm)
	Dim strChange

	strChange = "OnChangeSelect('" & strForm & "','" & strScriptName & "');"
	Call DrawWeekWithArrows(strForm, dtYearStart, dtYearEnd, kStartNWeek, obLanguage("Calendar","kPrevWeek"), obLanguage("Calendar","kNextWeek"))

	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents
		If bExit Then Exit Sub
	End If

	If strClassID_IUP = "0" Then
		Call DrawInfo(obLanguage("Filter","kStudentNotInClass",strFunctionalityType), False)

		bExit = True
		Exit Sub
	End If

	Call DrawYearClasses_IUP(strForm, False, obLanguage("Filter","kStudentNotInClass",strFunctionalityType))
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = "printStudentBlog()"
End Function

Function ButtonExportHandler()
	ButtonExportHandler = "exportStudentBlog()"
End Function

Sub DrawLinkButtons()
	DrawPrintButtons
End Sub

Sub onDrawPage()
	Dim i

	bHaveLate = False
	bHaveTKR = False%>

	<form method="post" action="/asp/Curriculum/Assignments.asp" name="Assignments" onsubmit="return false;" >
		<%=WriteObligatoryTags()%>

		<%Call DrawButtonsFilters(lngtestsCnt <> 0, "Assignments")%>
	</form>

	<%If bExit Then Exit Sub%>
	
	<div class="row">
		<div class="col-md-12 col-lg-12"><%
			If lngtestsCnt = 0 Then
				Call DrawInfo(obLanguage("Curriculum","kNoAssignmentsOnWeek"), False)
				Call DrawYaklass()
			Else%>
				<div>
					<table class="table table-bordered table-thin table-xs print-block">
						<tr valign="top">
							<th  class="hidden-scr-sm"><%=obLanguage("Curriculum","kDueDateStudent")%></th>
							<th><%=obLanguage("Common","kSubject")%></th>
							<th><%=obLanguage("Assignment","kATAssignmentType")%></th>
							<th class="text-nowrap"><%=obLanguage("Assignment","kATAssignmentTheme")%></th><%
							If bWeight Then%>
								<th><%=obLanguage("Assignment","kWeight")%></th><%
							End if%>
							<th><%=obLanguage("Curriculum","kMk")%></th>
						</tr>
						<%DrawPageTable%>
					</table>

					<%
					Call DrawYaklass()
					%>

					<div class="print-block" style="margin-top: 10px;">
						<br>
						<%=obLanguage("Common","kLegend")%>:
						<div class="legend"><%
							If bHaveLate Or bHaveTKR Then%>
								<div><%
									If bHaveLate Then%>
										<p><span class="legend-label" style="background-color: #ffbbbb"></span><span class="legend-description"> — <%=obLanguage("Curriculum","kExpiredAssignments")%></span></p><%
									End If
									
									If bHaveTKR Then%>
										<p><span class="legend-label" style="background-color: <%=kTKRColor%>"></span><span class="legend-description"> — <%=obLanguage("Assignment","kATTKRTheme")%></span></p><%
									End If%>
								</div><%
							End If%>
						</div>
					</div>

					<%Call ShowTypesLegend(False)%>
				</div><%
			End If%>
		</div>
	</div><%
End Sub

Sub DrawPageTable()
	Dim strT
	Dim vResult
	Dim strDateAnchor
	Dim nATypeId
	Dim dtToday
	
	dtToday = NSDate

	Dim currDate
	While Not objRs.EOF
		vResult = objRs("RESULT") 
		nATypeId = objRs("ATYPEID")
		If objRs("DUEDATE") < dtToday And IsNull(vResult) And objRs("CLASSASSIGNMENT") = 0 Then
			bHaveLate = True
			strT = "BGCOLOR=""#FFBBBB"""
		ElseIf nATypeId = PreDefinedAssignmentType_TKR Then
			bHaveTKR = True
			strT = "BGCOLOR=""" & kTKRColor & """"
		Else
			strT = "BGCOLOR=""#FFFFFF"""
		End If
			IF currDate <> objRs("DUEDATE") Then
				currDate = objRs("DUEDATE")
				strDateAnchor = ShowAnchor("dayschedule('" & DB2Java(Date2Str(currDate)) & "');", obLanguage("Calendar","kViewDaySchedule"), Date2Str(currDate) & ", " & WeekDayName(weekday(currDate, 0), True, 0), "")
				%><tr class="visible-scr-row-sm"><td colspan="5" class="text-center bg-success"><%=strDateAnchor%></td></tr><%
				%><tr <%=strt%>><%
				%><td class="hidden-scr-sm" rowspan="<%=dctAssPerDay(currDate)%>"><%=strDateAnchor%></td><%
			Else
				%><tr <%=strt%>><%
			End If%>

			<td><%=DB2HTML(objRs("SNAME"))%></td>
			<td class="text-center"><%=objRs("TP")%></td>
			<td>
				<%=ShowAnchor("SubmAssign(" & CStr(objRs("ASSIGNMENTID")) & "," & CStr(objRs("ID")) & "," & nATypeId & ");", obLanguage("Curriculum","kViewAssignment"), DB2HTML(objRs("ANAME")), "")%>
			</td><%

			If bWeight Then
				%><td class="text-center"><%
					If kIsTKR And (nATypeId <> PreDefinedAssignmentType_TKR) Then
						%>&nbsp;<%
					Else
						rw GetSafeLng(objRs("WEIGHT"), Null)
					End If%>
				</td><%
			End If

			If IsNull(vResult) Then
				strT = "-"
			Else
				If CLng(vResult) < 0 Then
					strT = GetMark_TKR(CLng(vResult))
				Else
					strT = CLng(objRs("MARK"))
				End If
			End If

			%><td class="text-center"><%=strT%></td>
		</tr><%
		objRs.MoveNext
	Wend
End Sub

Sub DrawReceivingMarksBySmsButton()
	Response.Write ShowButton("ReceivingMarksBySms", "ReceivingMarksBySms", "JavaScript:receivingMarksBySms()", obLanguage("MySettings","kContractForReceivingMarksBySms"), obLanguage("MySettings","kContractForReceivingMarksBySms"))
End Sub

Sub DrawYaklass()
	If strYaClassAuthUrl <> "" Then
		Response.Write "<table border=""0"" cellpadding=""0"" cellspacing=""0""><tr><td>"
		If HasUserRole(rlParent) Then
			Response.Write obLanguage("LearnApp","kYaClassDescription_Parent") & "&nbsp;"
		Else
			Response.Write obLanguage("LearnApp","kYaClassDescription_Student") & "&nbsp;"
		End if
		Response.Write "</td><td>" & ShowAnchor("gotoYaClass();", DB2HTML(obLanguage("LearnApp","kGotoYaClassSite")), "<img src=""/images/Common/yakl_s.gif"">", " style=""color:blue""")
		Response.Write "</td></tr></table>"
	End If
End Sub%>