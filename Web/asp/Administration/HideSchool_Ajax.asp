<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim i, strAID, arrData, n
Dim bDelAllResults
Dim dtCurTime, strSubjClassID
Dim transaction
Dim result, act
Dim component, uow

act = Request("act")
'If Not HasUserRight(arJournalEditAll) And Not HasUserRight(arJournalEditSelf) Then GenerateError obLanguage("Common","kErrPageAccess")
Function hasUserRightsOnPage()
	hasUserRightsOnPage = objNSNET.IsAdminOfServer(strUserID) 
End Function

Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
Set uow = component.GetEditSchoolInfoWork(Request("sch"), strUserID)
Call uow.HideSchool((act="1"))
Call uow.Commit()
Call uow.Dispose()



Set result = new JSONResult
Call result.AddData("act", act)

Response.Write result
%>
