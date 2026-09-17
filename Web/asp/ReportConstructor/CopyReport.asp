<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim nReportId, strReportName
Dim strRepEMID, strRepSchoolID ' differ from strEMID, strSchoolID
Dim nResult

nReportId = GetSafeLng( Request("RPTID"), Null )
strReportName = GetSafeStr( Request("RPTNAME"), -1, Null )
strRepEMID = strEMID
strRepSchoolID = strSchoolID

If bIsEducManager Then strRepSchoolID = Null Else strRepEMID = Null

'nResult = obModMan.ReportManager_isReportExist(strReportName)
'If nResult = True Then Call GenerateHTMLError( obLanguage("Constructor","kReportNameExists"), "/asp/ReportConstructor/ReportConstructor.asp",strToken )

Call objNSNETWork.CopyReport(nReportId, strUserId, strReportName, strRepEMID, strRepSchoolID )
TestError  obLanguage("Common","kUnexpErr")

Call obTokenMgr.SetData(strToken, stWasSaved,obLanguage("ReportImport","kReportCopied") & "<br>" & obLanguage("ReportImport","kReportNonGroups"))

RedirectTo "ReportConstructor.asp", Null
%>
