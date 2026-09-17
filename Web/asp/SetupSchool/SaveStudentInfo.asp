<!-- #INCLUDE file="SaveUserInfo.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetRoleGroup()
	GetRoleGroup = RoleGroup_Students
End Function

Sub SaveSpecialInfo_WT()
	On Error Resume Next
	Dim strForeignID, strForeignID2

	If Not (HasUserRight(arUsersEditStudents) Or HasUserRight(arEditInfoSelf)) Then
		Call GenerateErrorWithTransaction (uow.Transaction, obLanguage("Common","kErrPageAccess"))
	End If
	
End Sub

Sub ValidateOnSaving(transaction)
	Dim objParamVal
	Dim bOrphan, bWithoutCare

	Set objParamVal = objNSNET.GetUserParamValue_WT(transaction, strEditUserID, 1032, strSchoolID, strCurrYearID)
	If Not objParamVal.EOF Then
		If GetSafeStr(objParamVal("ITEMNAME"), -1, "") = obLanguage("SetupSchool","kParamName_Ward") Then

			bOrphan = False
			bWithoutCare = False
			Set objParamVal = objNSNET.GetUserParamValue_WT(transaction, strEditUserID, 1026, strSchoolID, strCurrYearID)
			Do While Not objParamVal.EOF
				If Not bOrphan Then
					bOrphan = (GetSafeStr(objParamVal("ITEMNAME"), -1, "") = obLanguage("SetupSchool","kParamName_Orphan"))
				End If
				If Not bWithoutCare Then
					bWithoutCare = (GetSafeStr(objParamVal("ITEMNAME"), -1, "") = obLanguage("SetupSchool","kParamName_WithoutCare"))
				End If
				If bOrphan And bWithoutCare Then Exit Do
				objParamVal.MoveNext
			Loop

			If Not (bOrphan Or bWithoutCare) Then
				strAddInfoOnSave = obLanguage("SetupSchool","kSelect_Orphan_Or_WithoutCare")
			ElseIf bOrphan And bWithoutCare Then
				strAddInfoOnSave = obLanguage("SetupSchool","kSelect_Orphan_Or_WithoutCare_OnlyOne")
			End If

		End If
	End If
End Sub

Sub PreSaveUserInfo_WT(transaction)
End Sub
%>
