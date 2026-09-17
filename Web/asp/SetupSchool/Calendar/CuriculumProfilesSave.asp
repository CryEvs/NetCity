<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const nProfileNameLen = 50
If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim i, j, arrProfiles, bOk, nGradeSet
Dim strProfileID
Dim transaction

'objCon.BeginTrans
transaction = objNSNET.GetTransaction()

' delete profile(s)
If Request("DEL").Count > 0 Then
	ReDim arrProfiles(Request("DEL").Count-1)
	j = 0
	For i = 0 To UBound(arrProfiles)
		strProfileID = GetSafeID(Request("DEL")(i+1), NULL)
		If strProfileID <> "0" Then
			arrProfiles(j) = strProfileID
			j = j + 1
		End If
	Next
	If j > 0 Then ' j - a real count of deleting Profiles, without used Profiles (Request("DEL")="0")
		If Request("PRID").Count > j Then
			ReDim Preserve arrProfiles(j-1)
			Call objNSNET.RemoveProfiles_WT(transaction, arrProfiles)
			TestErrorWithTransaction transaction,obLanguage("SetupSchoolCalendar","kErrRemoveProfile")
		Else
			Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kAlertDeleteAll")))
		End If
	End If
End If
	
' edit existing profiles
bOk = True
For i = 1 To Request("PRID").Count
	bOk = bOk And CBool( objNSNET.EditProfile_WT(transaction, GetSafeID(Request("PRID")(i), NULL), GetSafeStr(Request("PROFILENAME")(i), nProfileNameLen, NULL), GetSafeLng(Request("GRADESET")(i), NULL) ) )
	TestErrorWithTransaction transaction,obLanguage("SetupSchoolCalendar","kErrEditProfile")
Next
If Not bOk Then Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kProfileExist")))

' create a new profile
nGradeSet = GetSafeLng( Request("NEWGRADESET"), NULL )
If nGradeSet > 0 Then
	bOk = CBool( objNSNET.CreateProfile_WT(transaction, strSchoolID, GetSafeStr(Request("PRNEW"), nProfileNameLen, NULL), nGradeSet) )
	TestErrorWithTransaction transaction,obLanguage("SetupSchoolCalendar","kErrCreateProfile")
	If Not bOk Then Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kProfileExist")))
End If

'objCon.CommitTrans
objNSNET.CommitTransaction(transaction)

RedirectTo GetSafeStr( obTokenMgr.GetData(strToken,stBackPage), -1, "CuriculumProfiles.asp"), null
%>
