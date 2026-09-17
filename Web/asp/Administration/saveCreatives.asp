<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngServAdmin.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim nEOID, nPID, nTypeCount
Dim nTypeID, nTeamCount, arrCreatives, i

On Error Resume Next

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError kErrPageAccess

nPID = GetSafeLng(Request("PID"), Null)
nEOID = GetSafeLng(Request("AreaID"), Null)
nTypeCount = Request("TypeID").Count
ReDim arrCreatives(1, nTypeCount - 1) ' 0 - nTypeID, 1 - nTeamCount

For i = 1 To nTypeCount
	nTypeID = GetSafeID(Request("TypeID")(i), Null)
	nTeamCount = GetSafeLng(Request("TeamCount")(i), 0)
	arrCreatives(0, i - 1) = nTypeID
	arrCreatives(1, i - 1) = nTeamCount
Next

Call objNSNET.SaveEOCreatives(nEOID, arrCreatives)
TestError( kErrSaveCreatives )

RedirectTo "createArea.asp", Array("PID", nPID, "AreaID", nEOID, "City", nPID, "EditSchoolID", Request("EditSchoolID"), "act", Request("act"))
%>
