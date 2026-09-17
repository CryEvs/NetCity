<% ' © 2007-2015 IRTech. All rights reserved.

If Not bIsDebug Then On Error Resume Next

'Right constants		5
'Const lastRight		= 82

Const arProfileEditSchoolInfo			= 1
Const arProfileViewSchoolInfo			= 65
Const arProfileEditRegionalSettings		= 2
Const arProfileDefineSecurityRoles		= 3
Const arEditReferenceBook				= 45
Const arEditSchoolSettings				= 58

Const arUsersEditStaff					= 5
Const arUsersEditStaffMedInfo			= 66
Const arUsersEditStudents				= 6
Const arUsersEditStudentsMedInfo 		= 67
Const arUsersEditStudentsPsyInfo		= 68
Const arUsersEditAccountStaff			= 73
Const arUsersEditAccountStudentsParents	= 74
Const arUsersEditAccountStudentsParentsInClass = 75

Const arCreateCloseEditYear				= 29
Const arSchoolSubjects					= 37
Const arCreateEditTerm					= 30
Const arEditSchoolTermTypes				= 44
Const arMoveBookView					= 50
Const arMoveBookEdit					= 51
Const arMovePoolStudents				= 52
Const arMovePoolStaff					= 53

Const arSchoolDocsView					= 61
Const arSchoolDocsEdit					= 62

Const arClassMgmViewClassSubjAll		= 36
Const arClassMgmCreateClass				= 7
Const arClassMgmEditSubjects			= 38
Const arClassMgmEnrollClass				= 8
Const arClassMgmPostClassEventSelf		= 11
Const arClassMgmPostClassEventAll		= 14

Const arCurrMgmViewSelf					= 40
Const arCurrMgmViewAll					= 39
Const arCurrMgmCreate					= 12
Const arCurrMgmCreateAll				= 13
Const arAddLA							= 60

Const arCalendarViewSelf				= 15
Const arCalendarViewAll					= 16
Const arCalendarCreateCalendar			= 19
Const arPostSchoolEvent					= 33

Const arJournalViewSelf					= 20
Const arJournalViewAll					= 18
Const arJournalEditSelf					= 17
Const arJournalEditAll					= 23
Const arJournalEditHAOnlyOnFuture		= 59
Const arTotalsViewSelf					= 34
Const arTotalsViewAll					= 31
Const arTotalsEditSelf					= 41
Const arTotalsEditAll					= 32

Const arLASetPolicies					= 9
Const arLACreateGradingScales			= 10
Const arLAViewMaterials					= 35
Const arLAEditSelf						= 4		'Assignments and Results
Const arLAViewSelf						= 42	'Assignments and Results
Const arLAViewAll						= 43

Const arReportsForAssignedClass			= 21
Const arReportsForAllClasses			= 22
Const arReportsViewForAssignedClass		= 24
Const arReportsViewAdditionalReports	= 54
Const arReportsUseReportConstructor		= 55
Const arReportsViewAdministrativeReports= 64

Const arAnnouncementView				= 25
Const arAnnouncementPost				= 26
Const arMessagesSendReceive				= 27
Const arForumSendReceive				= 56
Const arForumEdit						= 57 ' В интерфейсе это право называется "Назначать модераторов форума"
Const arAssignmentsViewComplete			= 28

Const arShortInfoStaff			= 46
Const arShortInfoStudents		= 47
Const arEditInfoSelf			= 48
Const arEnrollSelf				= 49

Const arDeleteUsers				= 63

Const arSetPhoto				= 72

Const arEditSchoolResources		= 69

Const arBrowseResultsEGEAllClasses					= 76
Const arBrowseResultsEGEHisClassesOrSubjects		= 77

Const arSchoolPublicDocsView		= 78

Const arBrowseStatReports			= 79
Const arFillStatReports				= 80

Const arBrowseAccessJournal			= 81
Const arUserStat					= 82

Const arReportsViewSpecialEducNeeds	= 100

' #17155. EM rights.
Const arEMUsersView 			= 1001
Const arEMUsersEdit				= 1002
Const arEMEventsView			= 1003
Const arEMEventsEdit			= 1004
Const arEMReports				= 1005
Const arEMPersonDataReports		= 1006
Const arEMAddReportsView		= 1007
Const arEMAddReportsEdit		= 1008
Const arEMMovement				= 1009
Const arEMStats					= 1010
Const arEMEgeView				= 1011
Const arEMEgeImport				= 1012
Const arEMMsoko					= 1013
Const arEMDouPayNormView		= 1014
Const arEMDouPayNormEdit		= 1015


' Storage of roles and rights
Dim dctUserRoles, dctUserRights, bIsStaff

Function HasUserRole(nRole)
	HasUserRole = dctUserRoles.Contains(CLng(nRole))
End Function

Function IsArrayContainsItem(arrRoles, roleId)
	Dim role, i, bRole

	bRole = False
	For i = 0 To Ubound(arrRoles)
		role = CLng(arrRoles(i))
		If role = CLng(roleId) Then
			bRole = True
			Exit For
		End If
	Next
	IsArrayContainsItem = bRole
End Function

Function HasUserAnyRoles(arrRoles)
	Dim role, i

	role = False
	For i = 0 To Ubound(arrRoles)
		If dctUserRoles.Contains(CLng(arrRoles(i))) Then 
			role = True
			Exit For
		End If
	Next
	HasUserAnyRoles = role
End Function

Function HasUserAllRoles(arrRoles)
	Dim bRole, i

	bRole = False
	For i = 0 To Ubound(arrRoles)
		bRole = True
		If Not dctUserRoles.Contains(CLng(arrRoles(i))) Then
			bRole = False
			Exit For
		End If
	Next
	HasUserAllRoles = bRole
End Function

Function HasUserRight(nRight)
	HasUserRight = dctUserRights.Contains(CLng(nRight))
End Function

Function HasUserAnyRights(arrRights)
	Dim right, i

	right = False
	For i = 0 To Ubound(arrRights)
		If dctUserRights.Contains(CLng(arrRights(i))) Then 
			right = True
			Exit For
		End If
	Next
	HasUserAnyRights = right
End Function

Sub MarkUserToUpdateRights( strUserID )
	Dim secComponent
	Set secComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	Call secComponent.MarkUserToUpdateRights(CLng(strUserID))
End Sub

Sub RetrieveUserRolesAndRights()
	Dim objAuthData
	Dim objSecRoles, sessionRole

	Call InitDict()
	bIsStaff = False

	Set objAuthData = obContext.ReadRolesAndRights(strToken)

	If IsObject(objAuthData) Then
		Set dctUserRoles = objAuthData("roles")
		Set dctUserRights = objAuthData("rights")
		If bIsEMForSchool Then
			Call CheckEMSchool()
		End IF
	Else

		' Вроде эта ветка сейчас не используется, сюда не заходит, вместо неё работает SecurityPageEventListner
		Set dctUserRoles = Server.CreateObject("NetCity.Storage")
		Set dctUserRights = Server.CreateObject("NetCity.Storage")
		sessionRole = obTokenMgr.GetData(strToken, stSessionRole)

		If IsEmpty(strUserID) Then
			strUserID = 0
		Else
			On Error Resume Next
			Call objNSNETWork.RetrieveUserRolesAndRights(strUserID, IIF(bIsEMForSchool, Empty, strSchoolID), sessionRole, IIF(bIsEMForSchool, bIsEMForSchool, bIsEducManager), dctUserRoles, dctUserRights)
			TestError obLanguage("Common","kErrCantAccessToRights")
			If bIsEMForSchool Then
				Call CheckEMSchool()
			End If
			Call obTokenMgr.SetData(strToken, stUserRoles, dctUserRoles)
			Call obTokenMgr.SetData(strToken, stUserRights, dctUserRights)
		End If
		Call obTokenMgr.SetData(strToken, stFRightsUpdated, 0)
	End If
	bIsStaff = Not HasUserAnyRoles(Array(rlStudent, rlParent))
End Sub

Call RetrieveUserRolesAndRights()
If bIsEducManager Then bIsEMRO = HasUserRole(rlHDEM)

' #23959. Для АСП этот флаг выставляется в stdhead.asp, но здесь может переопределиться.
' Уточнение этого флага именно здесь, т.к. в stdhead.asp - ещё нет Ролей/Прав.
' ЗАМЕЧАНИЕ!
' Вообще в obTokenMgr - этот флаг не меняем, т.к. в некоторых местах системы нужно именно его истинное значение, а не переопределённое!
' Флаг сбрасываем - если он выставлен, и включена нужная настройка (строго сейчас - это лишнее),
' и у пользователя есть роль "Админ ОО" - именно эта роль искусственно добавляется при расширенном заходе пользователя УО в ОО.
' См. EducManagerSchoolAuthCommander:GetPermissionContainer
If bIsEMForSchool Then
	If obContext.ServerSettings.SystemSettings.ExternalAccessEmUserToSchool And HasUserRole(rlAdmin) Then
		bIsEMForSchool = False
		ReadOnly = False
	Else
		ReadOnly = True
	End If
End If

' #17155 устарело.
' Право пользователя как Управления Образования на Школу проверяется здесь.
Sub SetRightsForEMInSchool(dctUserRights)
	Dim bEMRight
	bEMRight = False
	bIsEMRO = HasUserRole(rlHDEM)
	bEMRight = objNSNET.IsEMForSchool(strEMID, strSchoolID)
	If Not bEMRight or bIsEMRO Then
		Response.Redirect "/asp/loginerror.asp?PR=" & Server.URLEncode( Request.ServerVariables("HTTP_REFERER" )) & "&ET=" & Server.URLEncode( obLanguage("Common","kErrPageAccess") )
'		GenerateError obLanguage("Common","kErrPageAccess")
	End If

	ReadOnly = True

	If CLng(strFunctionalityType) = kFuncType_Orphanage Then
		dctUserRights(arProfileEditSchoolInfo) = True
		dctUserRights(arFillStatReports) = True
		Exit Sub
	End If

	dctUserRights(arProfileEditSchoolInfo) = True
	'If bIsEMRO Then Exit Sub
	dctUserRights(arMoveBookView) = True
	If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then dctUserRights(arMovePoolStudents) = True
	dctUserRights(arClassMgmViewClassSubjAll) = True
	dctUserRights(arSchoolSubjects) = True
	If obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Or bExtendedEMForSchoolAccess Then 
		dctUserRights(arJournalViewAll) = True
		dctUserRights(arTotalsViewAll) = True
	End If
	dctUserRights(arReportsForAllClasses) = True
	If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then dctUserRights(arReportsViewAdditionalReports) = True
	dctUserRights(arReportsViewAdministrativeReports) = True
	dctUserRights(arReportsViewSpecialEducNeeds) = True
	dctUserRights(arShortInfoStaff) = True
	dctUserRights(arShortInfoStudents) = True
	If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then dctUserRights(arMessagesSendReceive) = True
	dctUserRights(arSchoolDocsView) = True
	dctUserRights(arBrowseStatReports) = True
End Sub

Sub CheckEMSchool
	Dim bEMRight

	bEMRight = objNSNET.IsEMForSchool(strEMID, strSchoolID)
	If Not bEMRight Then
		Response.Redirect "/asp/loginerror.asp?PR=" & Server.URLEncode( Request.ServerVariables("HTTP_REFERER" )) & "&ET=" & Server.URLEncode( obLanguage("Common","kErrPageAccess") )
	End If

	'ReadOnly = True
End Sub
%>
