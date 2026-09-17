<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next
Dim nEditUserID, strBackPage, bUpdate, nAddParamValue, nCategory, result
Dim bPseudoPool

Function hasUserRightsOnPage()
	If bIsEducManager Then
		hasUserRightsOnPage = true 
		Exit Function
	ElseIf objNSNET.IsAdminOfServer(strUserID) Then 
		hasUserRightsOnPage = True : Exit Function
	Else
		hasUserRightsOnPage = HasUserRight(arMovePoolStudents)
	End If
End Function

If Not hasUserRightsOnPage() Then
	GenerateError obLanguage("Common","kErrPageAccess")
End If

bUpdate = false
nCategory = Clng(Request("Category"))
nEditUserID = GetSafeLng( Request("UID"), Null)
bPseudoPool = (Clng(Request("PseudoPool")) = 1)

If nCategory = Clng(Request("DefCategory")) Then bUpdate = true
If nCategory = 0 Then 
	nAddParamValue = Request("Reason")
ElseIf bPseudoPool Then
	nAddParamValue = GetSafeLng(Request("PoolCategory"), 2)
Else 
	nAddParamValue = Request("EOS_" & nEditUserID)
End If
Call objNSNET.SetPoolStudent(nEditUserID, nCategory, nAddParamValue, Request("REASON_" & nEditUserID), Request("OST_" & nEditUserID), bUpdate, bPseudoPool)
TestError(obLanguage("PoolStudents","kErrCantChangeInfo"))
If bIsAjaxCall Then
	Set result = new JSONResult
	result.message = obLanguage("PoolStudents","kSaveSuccess")
	Response.Write result
Else
	strBackPage = GetSafeStr(Request("BackPage"), 255, "PoolStudents.asp")
	RedirectTo strBackPage, Null
End If
%>
