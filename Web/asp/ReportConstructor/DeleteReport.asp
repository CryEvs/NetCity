<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim nReportID

nReportID = GetSafeLng( Request("RPTID"), Null )
Call objNSNETWork.DeleteReport(nReportID )
RedirectTo "ReportConstructor.asp", Null
%>
