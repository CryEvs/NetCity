<% ' © 2007-2008 IRTech. All rights reserved.
Const miSetupSchool = 1
Const miSetupSchoolProfile = 2
Const miSetupSchoolUsers = 3
Const miSetupSchoolCalendar = 4
Const miSetupSchoolMove = 5
Const miSchoolDocs = 6
Const miClassManagement = 7
Const miCurriculumManagement = 8
Const miLearningApplications = 9
Const miMyCalendar = 10
Const miGrades = 11
Const miReports = 12
Const miAnnouncements = 13
Const miAssignments = 14
Const miSchoolResources = 15
Const miMySettings = 16
Const miInquiryReg = 17
Const miLogOut = 18

Dim arrMenuItems(18)
Dim MenuItemName(18)

Dim currMenuItem
currMenuItem = 0

Function miFileName(menuItem, state)
	Select Case state
		Case isNormal  miFileName = strThemeFolder& clsPathHelper.MenuPath & "/" & arrMenuItems(menuItem) & ".gif"
		Case isHighlighted  miFileName = strThemeFolder&clsPathHelper.MenuPath & "/" & arrMenuItems(menuItem) & "H.gif"
		Case isSelected  miFileName = strThemeFolder&clsPathHelper.MenuPath & "/" & arrMenuItems(menuItem) & "S.gif"
		Case Else miFileName = ""
	End Select
End Function

Function InitMenu()
	arrMenuItems(miSetupSchool)				= "MSS"
	arrMenuItems(miSetupSchoolProfile)		= "MSP"
	arrMenuItems(miSetupSchoolUsers)		= "MSU"
	arrMenuItems(miSetupSchoolCalendar)		= "MSC"
	arrMenuItems(miSetupSchoolMove)			= "MSM"
	arrMenuItems(miSchoolDocs)				= "MSD"
	arrMenuItems(miClassManagement)			= "MCL"
	arrMenuItems(miCurriculumManagement)	= "MCU"
	arrMenuItems(miMyCalendar)				= "MMC"
	arrMenuItems(miGrades)					= "MGR"
	arrMenuItems(miReports)					= "MRP"
	arrMenuItems(miAnnouncements)			= "MAN"
	arrMenuItems(miLearningApplications)	= "MLA"
	arrMenuItems(miMySettings)				= "MMS"
	arrMenuItems(miAssignments)				= "MAS"
	arrMenuItems(miSchoolResources)			= "MSR"
	arrMenuItems(miInquiryReg)				= "MIR"
	arrMenuItems(miLogOut)					= "MLO"

	MenuItemName(miSetupSchool)				= obLanguage("MenuFolders","kSchoolManagement",strFunctionalityType)
	MenuItemName(miSetupSchoolProfile)		= obLanguage("MenuFolders","kSchoolManagement",strFunctionalityType) &"/"& obLanguage("MenuFolders","kSchoolInfo",strFunctionalityType)
	MenuItemName(miSetupSchoolUsers)		= obLanguage("MenuFolders","kSchoolManagement",strFunctionalityType) &"/"& obLanguage("MenuFolders","kUsers")
	MenuItemName(miSetupSchoolCalendar)		= obLanguage("MenuFolders","kSchoolManagement",strFunctionalityType) &"/"& obLanguage("MenuFolders","kCurriculumPlan")
	MenuItemName(miSetupSchoolMove)			= obLanguage("MenuFolders","kSchoolManagement",strFunctionalityType) &"/"& obLanguage("MenuFolders","kMovement")
	MenuItemName(miSchoolDocs)				= obLanguage("MenuFolders","kSchoolDocs")
	MenuItemName(miClassManagement)			= obLanguage("MenuFolders","kClassManagement",strFunctionalityType)
	MenuItemName(miCurriculumManagement)	= obLanguage("MenuFolders","kCurriculumManagement",strFunctionalityType)
	MenuItemName(miMyCalendar)				= obLanguage("Common","kSchedule")
	MenuItemName(miGrades)					= obLanguage("Common","kJournal",strFunctionalityType)
	MenuItemName(miReports)					= obLanguage("MenuFolders","kSchoolReports")
	MenuItemName(miAnnouncements)			= obLanguage("MenuFolders","kAnnouncements")
	MenuItemName(miLearningApplications)	= obLanguage("MenuFolders","kLearningApplications")
	MenuItemName(miAssignments)				= obLanguage("MenuFolders","kStudentDiary")
	MenuItemName(miSchoolResources)			= obLanguage("MenuFolders","kSchoolResources",strFunctionalityType)
	MenuItemName(miMySettings)				= obLanguage("MenuFolders","kMySettings")
	MenuItemName(miInquiryReg)				= obLanguage("Common","kInquiryRegistration") ' "Регистрация заявления"
	MenuItemName(miLogOut)					= obLanguage("Common","kExit")
End Function

Sub ShowMenuItemMode( bName, miName, nMode )
	%><img src="<%=miFileName(miName, nMode)%>" name="<%=bName%>" border="0" width=<%=IIF(nCurrTheme <> kCompactUITheme, """92""", """35""" )%> alt='<%=MenuItemName(miName)%>'><br><%
End Sub

Sub ShowMenuItem( bName, miName )
	Dim urlToGo
	urlToGo = "JavaScript:SetSelectedMenu('" & miName &"','"&arrTabURLs(arrCurrDefaultFolders(CInt(miName)))&"')"
	Response.Write "<a href=""" & urlToGo & """ title='" & MenuItemName(miName) & "' " & _
		" onMouseOut=""MM_swapImgRestore(); return true; "" "&_
		" onMouseOver=""MM_swapImage('" & bName & "','','" & miFileName(miName,isHighlighted) & "',1); return true;"" " &_
		" onMouseDown=""MM_swapImage('" & bName & "','','" & miFileName(miName,isSelected)& "',1)"">"
	Call ShowMenuItemMode( bName, miName, isNormal )
	%></a><%
End Sub

Sub ShowExitMenuItem( bName, miName )
	Response.Write "<a href=""JavaScript:bAskConf = true;Logout()"" title='" & MenuItemName(miName) & "'" & _
		" onMouseOut=""MM_swapImgRestore(); return true; "" "&_
		" onMouseOver=""MM_swapImage('" & bName & "','','" & miFileName(miName,isHighlighted) & "',1); return true;"" " &_
		" onMouseDown=""MM_swapImage('" & bName & "','','" & miFileName(miName,isHighlighted)& "',1)"">"
		%><img src="<%=miFileName(miName,isNormal)%>" name="<%=bName%>" border="0" width=<%=IIF(nCurrTheme <> kCompactUITheme, """92"" height=""26""", """35""" )%>
		alt='<%=MenuItemName(miName)%>'></a><br><%
End Sub

Sub ShowInquiryRegMenuItem( bName, miName )
	Response.Write "<a href=""JavaScript:ShowInquiryReg();"" title='" & MenuItemName(miName) & "'" & _
		" onMouseOut=""MM_swapImgRestore(); return true; "" "&_
		" onMouseOver=""MM_swapImage('" & bName & "','','" & miFileName(miName,isHighlighted) & "',1); return true;"" " &_
		" onMouseDown=""MM_swapImage('" & bName & "','','" & miFileName(miName,isSelected)& "',1)"">"
		%><img src="<%=miFileName(miName,isNormal)%>" name="<%=bName%>" border="0" width=<%=IIF(nCurrTheme <> kCompactUITheme, """92"" height=""26""", """35""" )%>
		alt='<%=MenuItemName(miName)%>'></a><br><%
End Sub

Sub DrawMenu()
	Dim i
	Dim bDrawMail, bMessageInBox
	Dim bDrawForum
	Dim nMenuWidth

	If nCurrTheme = kCompactUITheme Then 
		nMenuWidth = 36
	Else
		nMenuWidth = 92
	End If

	bDrawMail = HasUserRight(arMessagesSendReceive) And objNSNET.IsWorkConnection()
	bDrawForum = HasUserRight(arForumSendReceive) And objNSNET.IsWorkConnection()
	
	nCurrTheme = obTokenMgr.GetData( strToken, stCurrTheme )
	%><table cellspacing="0" cellpadding="0" width="<%=nMenuWidth%>">
		<tr><td height=<%=IIF(nCurrTheme = kCompactUITheme, """81"" valign=""bottom""", """40""" )%>><%
	If bDrawMail Then
		bMessageInBox = (Clng( objNSNET.GetNumberOfNewMessages(strUserID, bxInbox)) > 0 )
		Response.Write "<span id='MessagesInBox' style='display:" & IIF(bMessageInBox,"","none") & "; visibility:" & IIF(bMessageInBox,"visible","hidden") & "'>"
		Call DrawOneCB(cbMessagesInbox,"cbMessagesInbox")
		Response.Write "</span>"
		Response.Write "<span id='Messages' style='display:" & IIF(bMessageInBox,"none","") & "; visibility:" & IIF(bMessageInBox,"hidden","visible") & "'>"
		Call DrawOneCB(cbMessages,"cbMessages")
		Response.Write "</span>"
	Else
		If Not bIsRegionEMForSchool Then
			Call DrawDisabledCB(cbMessages)
		End If
	End If

	If Not bIsEMForSchool Then
		If nCurrTheme = kCompactUITheme Then 
			%><br><%
		End If
		If bDrawForum Then
			Call DrawOneCB(cbForum,"cbForum")
		Else
			Call DrawDisabledCB(cbForum)
		End If
	End If
	
	If nCurrTheme = kCompactUITheme Then
		%><br><%
	End If

If Not bIsRegionEMForSchool Or bIsRegionEMWithOUDOD Then
	If isHelpAvailable() Then 
		Call DrawOneCB(cbHelp,"cbHelp")
	Else
		Call DrawDisabledCB(cbHelp)
	End If
	If nCurrTheme = kCompactUITheme Then
		%><br><img src="<%=strThemeFolder & clsPathHelper.MenuPath%>/lmb.gif"><%
	End If
End If
	%></td><%
	
	%></tr></table><%
	If currMenuItem = 0 Then  'not selected menu
		Exit Sub
	ElseIf currMenuItem = miSetupSchool Then
		Call ShowMenuItemMode( "bMenuItem1", miSetupSchool, isSelected)			'miSetupSchool selected painted
	ElseIf currMenuItem < miSchoolDocs Then  
		Call ShowMenuItemMode( "bMenuItem1", miSetupSchool, isSelected)			'miSetupSchool selected	painted
		For i = miSetupSchool+1 To CInt(currMenuItem) -1
			If isInARGroup(i) Then Call ShowMenuItem( "bMenuItem" & i, i) ' not selected subMenus painted
		Next
		Call ShowMenuItemMode( "bMenuItem"&i, i, isSelected)	'and its subMenu selected painted
	Else 'other menu selected
		If isInARGroup(1) Then Call ShowMenuItem( "bMenuItem1", 1)		' miSetupSchool not selected painted
		For i = miSchoolDocs To CInt(currMenuItem) -1		' subMenus not painted
			If isInARGroup(i) Then Call ShowMenuItem( "bMenuItem"&i, i) ' not selected Menus paint
		Next
		Call ShowMenuItemMode( "bMenuItem"&i, i, isSelected) 'Menu selected
	End If
	For i = CInt(currMenuItem) +1  To miMySettings		'all rest items not selected painted
		If i = miSchoolDocs Then %><img src="<%=strThemeFolder & clsPathHelper.MenuPath%>/lmb.gif" name="line_motion" border="0"><br><%End If
		If isInARGroup(i) Then Call ShowMenuItem( "bMenuItem"&i, i)
	Next

	If isInquiryRegAvailable() Then
		Call ShowInquiryRegMenuItem("bInquiryReg", miInquiryReg)
	End If

	Call ShowExitMenuItem("bLogOut",miLogOut)
End Sub

Function isInquiryRegAvailable()
	Dim bPreSchool
	isInquiryRegAvailable = False: Exit Function
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	isInquiryRegAvailable = MODULE_ESERVICES And bIsStaff And bPreSchool
End Function

Function isInARGroup( nGroup )
	Dim bPreSchool, bOrphanage
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bOrphanage = (CLng(strFunctionalityType) = kFuncType_Orphanage)

	isInARGroup = False
	Select Case nGroup
		Case miSetupSchool
			If isInARGroup(miSetupSchoolProfile)  Then isInARGroup = True : Exit Function
			If isInARGroup(miSetupSchoolUsers)  Then isInARGroup = True : Exit Function
			If isInARGroup(miSetupSchoolCalendar)  Then isInARGroup = True : Exit Function
			If isInARGroup(miSetupSchoolMove)  Then isInARGroup = True : Exit Function
		Case miSetupSchoolProfile
			If HasUserRight(arProfileEditSchoolInfo) Then isInARGroup = True : Exit Function
			If HasUserRight(arProfileViewSchoolInfo) Then isInARGroup = True : Exit Function
			If HasUserRight(arProfileEditRegionalSettings)  Then isInARGroup = True : Exit Function
			If HasUserRight(arEditSchoolSettings)  Then isInARGroup = True : Exit Function
			If HasUserRight(arProfileDefineSecurityRoles)  Then isInARGroup = True : Exit Function
			If HasUserRight(arEditReferenceBook)  Then isInARGroup = True : Exit Function
		Case miSetupSchoolUsers
			If HasUserRight(arUsersEditStaff) Or HasUserRight(arUsersEditStaffMedInfo) Or HasUserRight(arShortInfoStaff) Then isInARGroup = True : Exit Function
			If HasUserRight(arUsersEditStudents) Or HasUserRight(arUsersEditStudentsMedInfo) Or HasUserRight(arEditInfoSelf) Or HasUserRight(arShortInfoStudents) Or HasUserRight(arUsersEditStudentsPsyInfo) Then isInARGroup = True : Exit Function
			If HasUserRight(arShortInfoStudents) Then isInARGroup = True: Exit Function
			If HasUserRight(arShortInfoStaff) Then isInARGroup = True: Exit Function
		Case miSetupSchoolCalendar
			If HasUserRight(arCreateCloseEditYear)  Then isInARGroup = True : Exit Function
			If HasUserRight(arSchoolSubjects)  Then isInARGroup = True : Exit Function
			If HasUserRight(arCreateEditTerm)  Then isInARGroup = True : Exit Function
		Case miSetupSchoolMove
			If HasUserRight(arMoveBookView) Or HasUserRight(arMoveBookEdit) Then isInARGroup = True : Exit Function
			If HasUserRight(arMovePoolStudents)  Then isInARGroup = True : Exit Function
			If HasUserRight(arMovePoolStaff)  Then isInARGroup = True : Exit Function
		Case miSchoolDocs
			If bIsStaff Then
				If HasUserRight(arSchoolDocsView) Then isInARGroup = True : Exit Function
				If HasUserRight(arSchoolDocsEdit) Then isInARGroup = True : Exit Function
			End If
			IF HasUserRole(rlParent) THEN 
				If HasUserRight(arSchoolPublicDocsView) Then isInARGroup = True : Exit Function
			END IF

		Case miClassManagement
			If HasUserRight(arClassMgmViewClassSubjAll)  Then isInARGroup = True : Exit Function
			If HasUserRight(arClassMgmCreateClass)  Then isInARGroup = True : Exit Function
			If HasUserRight(arClassMgmEditSubjects)  Then isInARGroup = True : Exit Function
			If HasUserRight(arClassMgmEnrollClass)  Then isInARGroup = True : Exit Function 
		Case miCurriculumManagement
			If HasUserRight(arCurrMgmViewSelf)  Then isInARGroup = True : Exit Function
			If HasUserRight(arCurrMgmViewAll)  Then isInARGroup = True : Exit Function
			If HasUserRight(arCurrMgmCreate)  Then isInARGroup = True : Exit Function
			If HasUserRight(arCurrMgmCreateAll)  Then isInARGroup = True : Exit Function
		Case miMyCalendar
			If HasUserRight(arCalendarViewSelf)  Then isInARGroup = True : Exit Function
			If HasUserRight(arCalendarViewAll)  Then isInARGroup = True : Exit Function
			If HasUserRight(arCalendarCreateCalendar)  Then isInARGroup = True : Exit Function
			If HasUserRight(arPostSchoolEvent)  Then isInARGroup = True : Exit Function
			If HasUserRight(arClassMgmPostClassEventSelf)  Then isInARGroup = True : Exit Function
			If HasUserRight(arClassMgmPostClassEventAll)  Then isInARGroup = True : Exit Function
		Case miGrades
			If HasUserRight(arJournalViewSelf)  Then isInARGroup = True : Exit Function
			If HasUserRight(arJournalViewAll)  Then isInARGroup = True : Exit Function
			If HasUserRight(arJournalEditSelf)  Then isInARGroup = True : Exit Function
			If HasUserRight(arJournalEditAll)  Then isInARGroup = True : Exit Function
			If HasUserRight(arTotalsViewSelf)  Then isInARGroup = True : Exit Function
			If HasUserRight(arTotalsViewAll)  Then isInARGroup = True : Exit Function
			If HasUserRight(arTotalsEditSelf)  Then isInARGroup = True : Exit Function
			If HasUserRight(arTotalsEditAll)  Then isInARGroup = True : Exit Function
		Case miReports
			If HasUserRight(arReportsViewAdministrativeReports)  Then isInARGroup = True : Exit Function
			If HasUserRight(arReportsForAssignedClass)  Then isInARGroup = True : Exit Function
			If HasUserRight(arReportsForAllClasses)  Then isInARGroup = True : Exit Function
			If HasUserRight(arReportsViewForAssignedClass)  Then isInARGroup = True : Exit Function
			If HasUserRight(arReportsViewAdditionalReports)  Then isInARGroup = True : Exit Function
			If HasUserRight(arReportsUseReportConstructor)  Then isInARGroup = True : Exit Function
			If HasUserRight(arBrowseStatReports)  Then isInARGroup = True : Exit Function
			If HasUserRight(arFillStatReports)  Then isInARGroup = True : Exit Function
		Case miAnnouncements
			If HasUserRight(arAnnouncementView)  Then isInARGroup = True : Exit Function
			If HasUserRight(arAnnouncementPost) Then isInARGroup = True : Exit Function
		Case miLearningApplications
			If bIsRegionEMWithOUDOD Then Exit Function
			If bIsStaff Then
				If HasUserRight(arLAViewMaterials)  Then isInARGroup = True : Exit Function
				If HasUserRight(arLAViewSelf)  Then isInARGroup = True : Exit Function
				If HasUserRight(arLAViewAll)  Then isInARGroup = True : Exit Function
				If HasUserRight(arLAEditSelf)  Then isInARGroup = True : Exit Function

				If HasUserRight(arLASetPolicies)  Then isInARGroup = True : Exit Function
				If HasUserRight(arLACreateGradingScales)  Then isInARGroup = True : Exit Function
			End If
		Case miAssignments
			If Not bIsStaff And Not bPreSchool Then
				If HasUserRight(arAssignmentsViewComplete) Then isInARGroup = True : Exit Function
				If HasUserRight(arLAViewMaterials)  Then isInARGroup = True : Exit Function
			End If
		Case miSchoolResources, miMySettings
			If bOrphanage Then Exit Function
			If Not bFutureMode And Not bIsEMForSchool Then isInARGroup = True : Exit Function
	End Select
End Function

Sub DrawOneCB(button,bName)
	dim btName
	If arrEnabledCButtons(button) Then
		btName = bName & "text"
	%><a href="<%=arrCBURLs(button)%>" title="<%=DB2JAVA(arrCBStatusLine(button))%>"onMouseOut="MM_swapImgRestore();return true;" onMouseOver="MM_swapImage('<%=bName%>','','<%=cbFileName(button,isHighlighted)%>');return true;"><img src="<%=cbFileName(button,isNormal)%>" name="<%=bName%>" border="0" alt="<%=arrCBStatusLine(button)%>" hspace="<%=IIF(nCurrTheme = kCompactUITheme, 7, 3 )%>" width="22"></a><%
	End If
End Sub

Sub DrawDisabledCB(button)
	%><img src="<%=cbFileName(button,isDisabled)%>" border="0" alt="<%=arrCBStatusLine( button )%>" hspace="<%=IIF(nCurrTheme = kCompactUITheme, 7, 3 )%>"><%
End Sub
%>
