<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
On Error Resume Next
Dim nEditUserID
Dim nResult

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
nEditUserID = GetSafeLng(Request("UID"), Null)
Err.Clear
nResult = objNSNET.ReturnStudentToEService(nEditUserID)
'If bIsAjaxCall Then ' only AjaxCall here
	TestError obLanguage("PoolStudents","kErrCantRefuseToEnroll") ' if err then: Response.Write "[-1, "err message"]" ' return failed via ajax call
'	Response.Write "[0,0]" ' return success via ajax call, 1st 0 - success, 2nd 0 - not used here
'End If

If nResult = -1 Then
	GenerateError obLanguage("PoolStudents","kErrCantRefuseToEnroll") & " (" & obLanguage("PoolStudents","kErrEServicesNotify") & ")"
End If
%>
