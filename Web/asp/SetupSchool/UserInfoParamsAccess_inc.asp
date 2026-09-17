<% ' © 2007-2015 IRTech. All rights reserved.

Dim nLastRightParamAccess, arrUserInfoParamsAccess
Dim strAccessibleParamNames, strAccessibleParamIDs
Dim nRoleFilter

Const ParamAccess_Hidden = 0
Const ParamAccess_Full = 1
Const ParamAccess_ReadOnly = 2

Sub GetUsersInfoParamsAccess()
'0 - RightId
'1 - UserInfoForRole (staff,student,parent)
'2 - ParameterName
'3 - AccessType
	Dim i
	
	nLastRightParamAccess = 31
	ReDim arrUserInfoParamsAccess(3,nLastRightParamAccess)

	arrUserInfoParamsAccess(0,0) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,0) = Array(False,True,False)
	arrUserInfoParamsAccess(2,0) = "FGROUP"
	arrUserInfoParamsAccess(3,0) = ParamAccess_Full

	arrUserInfoParamsAccess(0,1) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,1) = Array(False,True,False)
	arrUserInfoParamsAccess(2,1) = "MED_NO"
	arrUserInfoParamsAccess(3,1) = ParamAccess_Full

	arrUserInfoParamsAccess(0,2) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,2) = Array(False,True,False)
	arrUserInfoParamsAccess(2,2) = "HEALTH"
	arrUserInfoParamsAccess(3,2) = ParamAccess_Full

	arrUserInfoParamsAccess(0,3) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,3) = Array(False,True,False)
	arrUserInfoParamsAccess(2,3) = "ILLNESS"
	arrUserInfoParamsAccess(3,3) = ParamAccess_Full

	arrUserInfoParamsAccess(0,4) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,4) = Array(False,True,False)
	arrUserInfoParamsAccess(2,4) = 1021'Мед полис
	arrUserInfoParamsAccess(3,4) = ParamAccess_Full

	arrUserInfoParamsAccess(0,5) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,5) = Array(False,True,False)
	arrUserInfoParamsAccess(2,5) = "MED_ORG"
	arrUserInfoParamsAccess(3,5) = ParamAccess_Full

	arrUserInfoParamsAccess(0,6) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,6) = Array(False,True,False)
	arrUserInfoParamsAccess(2,6) = "PERSONALREC"
	arrUserInfoParamsAccess(3,6) = ParamAccess_Full

	arrUserInfoParamsAccess(0,7) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,7) = Array(False,True,False)
	arrUserInfoParamsAccess(2,7) = "COMMENTS"
	arrUserInfoParamsAccess(3,7) = ParamAccess_Full

	arrUserInfoParamsAccess(0,8) = arUsersEditStudentsPsyInfo
	arrUserInfoParamsAccess(1,8) = Array(False,True,False)
	arrUserInfoParamsAccess(2,8) = "CHARACTER"
	arrUserInfoParamsAccess(3,8) = ParamAccess_Full

	arrUserInfoParamsAccess(0,9) = arUsersEditStudentsPsyInfo
	arrUserInfoParamsAccess(1,9) = Array(False,True,False)
	arrUserInfoParamsAccess(2,9) = "SOCIAL"
	arrUserInfoParamsAccess(3,9) = ParamAccess_Full

	arrUserInfoParamsAccess(0,10) = arUsersEditStudentsPsyInfo
	arrUserInfoParamsAccess(1,10) = Array(False,True,False)
	arrUserInfoParamsAccess(2,10) = "DEVIANT"
	arrUserInfoParamsAccess(3,10) = ParamAccess_Full

	arrUserInfoParamsAccess(0,11) = arUsersEditStudentsPsyInfo
	arrUserInfoParamsAccess(1,11) = Array(False,True,False)
	arrUserInfoParamsAccess(2,11) = "COMMENTS"
	arrUserInfoParamsAccess(3,11) = ParamAccess_Full

	arrUserInfoParamsAccess(0,12) = arUsersEditStudentsPsyInfo
	arrUserInfoParamsAccess(1,12) = Array(False,True,False)
	arrUserInfoParamsAccess(2,12) = "PERSONALREC"
	arrUserInfoParamsAccess(3,12) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,13) = arShortInfoStaff
	arrUserInfoParamsAccess(1,13) = Array(True,False,False)
	arrUserInfoParamsAccess(2,13) = "POS"
	arrUserInfoParamsAccess(3,13) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,14) = arShortInfoStaff
	arrUserInfoParamsAccess(1,14) = Array(True,False,False)
	arrUserInfoParamsAccess(2,14) = "POS2"
	arrUserInfoParamsAccess(3,14) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,15) = arShortInfoStaff
	arrUserInfoParamsAccess(1,15) = Array(True,False,False)
	arrUserInfoParamsAccess(2,15) = "COMMENTS"
	arrUserInfoParamsAccess(3,15) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,16) = arShortInfoStudents
	arrUserInfoParamsAccess(1,16) = Array(False,True,False)
	arrUserInfoParamsAccess(2,16) = "MOVEMENT"
	arrUserInfoParamsAccess(3,16) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,17) = arUsersEditStaffMedInfo
	arrUserInfoParamsAccess(1,17) = Array(True,False,False)
	arrUserInfoParamsAccess(2,17) = "COMMENTS"
	arrUserInfoParamsAccess(3,17) = ParamAccess_Full

	arrUserInfoParamsAccess(0,18) = arShortInfoStaff
	arrUserInfoParamsAccess(1,18) = Array(True,False,False)
	arrUserInfoParamsAccess(2,18) = "RATING"
	arrUserInfoParamsAccess(3,18) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,19) = arShortInfoStaff
	arrUserInfoParamsAccess(1,19) = Array(True,False,False)
	arrUserInfoParamsAccess(2,19) = "CATEGORY"
	arrUserInfoParamsAccess(3,19) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,20) = arShortInfoStaff
	arrUserInfoParamsAccess(1,20) = Array(True,False,False)
	arrUserInfoParamsAccess(2,20) = "ATT_LAST"
	arrUserInfoParamsAccess(3,20) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,21) = arShortInfoStaff
	arrUserInfoParamsAccess(1,21) = Array(True,False,False)
	arrUserInfoParamsAccess(2,21) = "POSITION2"
	arrUserInfoParamsAccess(3,21) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,22) = arShortInfoStaff
	arrUserInfoParamsAccess(1,22) = Array(True,False,False)
	arrUserInfoParamsAccess(2,22) = "RATING2"
	arrUserInfoParamsAccess(3,22) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,23) = arShortInfoStaff
	arrUserInfoParamsAccess(1,23) = Array(True,False,False)
	arrUserInfoParamsAccess(2,23) = "CATEGORY2"
	arrUserInfoParamsAccess(3,23) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,24) = arShortInfoStaff
	arrUserInfoParamsAccess(1,24) = Array(True,False,False)
	arrUserInfoParamsAccess(2,24) = "ATT_LAST2"
	arrUserInfoParamsAccess(3,24) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,25) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,25) = Array(False,True,False)
	arrUserInfoParamsAccess(2,25) = "SCOPE_RESTRICT"
	arrUserInfoParamsAccess(3,25) = ParamAccess_Full

	arrUserInfoParamsAccess(0,26) = arShortInfoStudents
	arrUserInfoParamsAccess(1,26) = Array(False,True,False)
	arrUserInfoParamsAccess(2,26) = "ADDEDUC_SERTIF"
	arrUserInfoParamsAccess(3,26) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,27) = arShortInfoStudents
	arrUserInfoParamsAccess(1,27) = Array(False,True,False)
	arrUserInfoParamsAccess(2,27) = "DOPEDUCATION"
	arrUserInfoParamsAccess(3,27) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,28) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,28) = Array(False,True,False)
	arrUserInfoParamsAccess(2,28) = "DISABILITY"
	arrUserInfoParamsAccess(3,28) = ParamAccess_Full

	arrUserInfoParamsAccess(0,29) = arShortInfoStudents
	arrUserInfoParamsAccess(1,29) = Array(False,True,False)
	arrUserInfoParamsAccess(2,29) = "PERSONALREC"
	arrUserInfoParamsAccess(3,29) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,30) = arShortInfoStaff
	arrUserInfoParamsAccess(1,30) = Array(True,False,False)
	arrUserInfoParamsAccess(2,30) = "POSITION"
	arrUserInfoParamsAccess(3,30) = ParamAccess_ReadOnly

	arrUserInfoParamsAccess(0,31) = arUsersEditStudentsMedInfo
	arrUserInfoParamsAccess(1,31) = Array(False,True,False)
	arrUserInfoParamsAccess(2,31) = "COMMISSIONS"
	arrUserInfoParamsAccess(3,31) = ParamAccess_Full
End Sub

Sub GetAccessibleParamsString()
	Dim i
	For i = 0 to nLastRightParamAccess
		If HasUserRight(arrUserInfoParamsAccess(0,i)) Then 
			If arrUserInfoParamsAccess(1,i)(nRoleFilter) Then
				If arrUserInfoParamsAccess(3,i) = ParamAccess_Full Or arrUserInfoParamsAccess(3,i) = ParamAccess_ReadOnly Then
					If IsNumeric(arrUserInfoParamsAccess(2,i)) Then
						strAccessibleParamIDs = strAccessibleParamIDs & IIF(strAccessibleParamIDs<>"",", ","") & arrUserInfoParamsAccess(2,i)
					Else
						strAccessibleParamNames = strAccessibleParamNames & IIF(strAccessibleParamNames<>"",", ","") & "'" & arrUserInfoParamsAccess(2,i) & "'"
					End If
				End If
			End If
		End If
	Next
End Sub
%>