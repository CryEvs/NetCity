<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim nQueryId, nExpressionId, nLinesCnt

nQueryId	= GetSafeID( obTokenMgr.GetData(strToken, stQueryId), Null )
nLinesCnt	= GetSafeLng ( obTokenMgr.GetData(strToken, stLinesCnt), 0 )

nExpressionId = objNSNETWork.UpdateFilters(nQueryId, nLinesCnt + 2 )

Call obTokenMgr.SetData ( strToken, stExpressionId, nExpressionId )

RedirectTo "ReportBuildWizardStep6.asp", null
%>
