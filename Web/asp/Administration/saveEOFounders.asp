<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngServAdmin.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim nEOID, nPID, nCount
Dim nFounderID, arrFounders, i

On Error Resume Next

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError kErrPageAccess

nPID = GetSafeLng(Request("PID"), Null)
nEOID = GetSafeLng(Request("AreaID"), Null)
nCount = Request("FID").Count
ReDim arrFounders(nCount - 1)

For i = 1 To nCount
	nFounderID = GetSafeID(Request("FID")(i), Null)
	arrFounders(i - 1) = nFounderID
Next

Call objNSNET.SaveEOFounders(nEOID, arrFounders)
TestError( kErrSaveFounders )

RedirectTo "createArea.asp", Array("PID", nPID, "AreaID", nEOID, "City", nPID, "EditSchoolID", Request("EditSchoolID"), "act", Request("act"))
%>
