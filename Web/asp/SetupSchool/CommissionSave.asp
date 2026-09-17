<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kCommissNumMaxLen = 100
Const kCommissTypeID_PMPK   = "1"
Const kCommissTypeID_MSE    = "2"
Const kCommissTypeID_VK     = "3"
Const kCommissTypeID_Privilege	= "4"


Dim strStudentID, strCommissID, bNewComm
Dim strCommissTypeID, strCommissNum, dtStartDate, dtEndDate
Dim strEducFormID, strEducProgrammID
Dim strViolID, strPrivilID
Dim strCosialStatusItemID
Dim strViolationItemID
Dim arrCommissItems, nInd, nSize
Dim i

Dim component, uow

Function hasUserRightsOnPage()
	Dim strClassID
	If HasUserAnyRights(Array(arUsersEditStudents, arUsersEditStudentsMedInfo)) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then
		strClassID = GetSafeID( obTokenMgr.GetData(strToken,stStudClassID), "0" )
		If strClassID <> "0" Then
			If objNSNET.IsClassChief(strClassID, strUserID) Then hasUserRightsOnPage = True: Exit Function
		End If
	End If
	hasUserRightsOnPage = False
End	Function

If Not hasUserRightsOnPage() Then GenerateError obLanguage("Common","kErrPageAccess")

strStudentID = GetSafeID(Request("UID"), Null)
strCommissID = GetSafeID(Request("CommissID"), Null)
bNewComm = (strCommissID = "0")

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
Set uow = component.GetEditUserInfoWork(strUserId, strStudentID, strSchoolId, strCurrYearId, strCurrGlobalYearId)

If Request("ACT") = "delete" Then
	Call uow.RemoveCommission(strCommissID)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantDeleteCommission"))
Else

	strCommissTypeID = GetSafeID(Request("CommissTypeID"), Null)
    If strCommissTypeID <> kCommissTypeID_Privilege Then
	    strCommissNum = GetSafeStr(Request("CommissNum"), kCommissNumMaxLen, Null)
	Else
	    strCommissNum = Null
	End If
    dtStartDate = GetSafeDate(Request("StartDate"), Null)
    dtEndDate = GetSafeDate(Request("EndDate"), Null)

    If strCommissTypeID = kCommissTypeID_PMPK Then
        ReDim arrCommissItems(1)
        nInd = -1
        strEducFormID = GetSafeID(Request("EducFormID"), "-1") ' "-1" - потому, что для садиков этого параметра нет.
        If strEducFormID <> "-1" Then
            nInd = nInd + 1
            arrCommissItems(nInd) = strEducFormID
        End If
        strEducProgrammID = GetSafeID(Request("EducProgrammID"), Null)
        If strEducProgrammID <> "-1" Then
            nInd = nInd + 1
            arrCommissItems(nInd) = strEducProgrammID
        End If

	    nSize = Request("ViolID").Count
	    If nSize = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	    ReDim Preserve arrCommissItems(nInd + nSize)
	    For i = 1 To nSize
		    strViolID = GetSafeID(Request("ViolID")(i), Null)
            nInd = nInd + 1
            arrCommissItems(nInd) = strViolID
	    Next

    ElseIf strCommissTypeID = kCommissTypeID_MSE Then
        ReDim arrCommissItems(0)

        strCosialStatusItemID = GetSafeID(Request("ItemID_invalid"), Null)
        arrCommissItems(0) = strCosialStatusItemID

    ElseIf strCommissTypeID = kCommissTypeID_VK Then
        ReDim arrCommissItems(1)

        strEducFormID = GetSafeID(Request("EducFormID"), Null)
        arrCommissItems(0) = strEducFormID

        strViolationItemID = GetSafeID(Request("ItemID_SOM"), Null)
        arrCommissItems(1) = strViolationItemID

    ElseIf strCommissTypeID = kCommissTypeID_Privilege Then
	    nSize = Request("PrivilID").Count
	    If nSize = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	    ReDim arrCommissItems(nSize - 1)
	    For i = 1 To nSize
		    strPrivilID = GetSafeID(Request("PrivilID")(i), Null)
            arrCommissItems(i - 1) = strPrivilID
	    Next

    End If

	Call uow.SetCommission(strCommissID, CInt(strCommissTypeID), strCommissNum, dtStartDate, dtEndDate, arrCommissItems)
	Call TestErrorWithTransaction(uow.Transaction, obLanguage("SetupSchool","kCantSaveCommission"))
End If

Call uow.Commit()
Call uow.Dispose()

RedirectTo "Commissions.asp", Array("UID", strStudentID)
%>
