<% ' © 2007-2008 IRTech. All rights reserved.

Const kParamID_ADDEDUC_SERTIF_NO = 1044
Const kParamID_ADDEDUC_SERTIF_DATE = 1045

' Необходима "синхронизация" некоторых параметров, которые сейчас существуют физически отдельно,
' но в сущности это один параметр, редактируется в осн. школе, но виден также и в доп. школах (ОДО),
' там они не редактируются. По-хорошему, это параметры-ссылки, но сейчас нет такого механизма, поэтому просто копируем.
Sub CyncroAddSchoolParams(transaction, strStudentID, strSYID, strErrMsg)
	On Error Resume Next
	Dim i
	Dim objRsAddSchools, strAddSchoolID, strAddSYID
	Dim objParamVal, strParamID, strVal, dtVal
	Dim objParamVal_Add

	' Get DOPEDUCATION Schools
	Set objRsAddSchools = objNSNET.GetStudentAddSchools_WT(transaction, strStudentID, strSYID)
	Call TestErrorWithTransaction (transaction, strErrMsg)
	If objRsAddSchools.EOF Then Exit Sub
	For i = 0 To 1
		strParamID = IIf(i = 0, kParamID_ADDEDUC_SERTIF_NO, kParamID_ADDEDUC_SERTIF_DATE)

		Set objParamVal = objNSNET.GetUserParamValue_WT(transaction, strStudentID, strParamID, strSchoolID, strSYID)
		If objParamVal.EOF Then
			While Not objRsAddSchools.EOF
				strAddSYID = GetSafeID(objRsAddSchools("SCHOOLYEARID"), Null)
				If CStr(strSYID) <> strAddSYID Then
					Call objNSNET.DeleteUserParamValue_WT(transaction, strStudentID, strParamID, strAddSYID)
					Call TestErrorWithTransaction (transaction, strErrMsg)
				End If
				objRsAddSchools.MoveNext
			WEnd
		Else
			strVal = Null
			dtVal = Null
			If i = 0 Then
				strVal = GetSafeStr(objParamVal("PARAMVALUE"), -1, "")
			Else
				dtVal = objParamVal("PARAMVALUE_DT").Value
			End If
			While Not objRsAddSchools.EOF
				strAddSchoolID = GetSafeID(objRsAddSchools("SCHOOLID"), Null)
				strAddSYID = GetSafeID(objRsAddSchools("SCHOOLYEARID"), Null)

				If CStr(strSYID) <> strAddSYID Then
					Set objParamVal_Add = objNSNET.GetUserParamValue_WT(transaction, strStudentID, strParamID, strAddSchoolID, strAddSYID)
					If objParamVal_Add.EOF Then
						Call objNSNET.AddUserParamValue_WT(transaction, strStudentID, strParamID, strAddSYID, strVal, dtVal, Null)
					Else
						Call objNSNET.UpdateUserParamValue_WT(transaction, strStudentID, strParamID, strAddSYID, strVal, dtVal, Null)
					End If
					Call TestErrorWithTransaction (transaction, strErrMsg)
				End If
				objRsAddSchools.MoveNext
			WEnd
		End If
		objRsAddSchools.MoveFirst
	Next
End Sub
%>
