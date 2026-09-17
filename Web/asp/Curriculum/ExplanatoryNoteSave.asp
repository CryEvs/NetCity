<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->
<!-- #INCLUDE FILE="ExplanatoryNoteSave_inc.asp" -->
<!-- #INCLUDE FILE="ExplanatoryNote_inc.asp" -->


<% ' © 2007-2008 IRTech. All rights reserved.
'	ACT={newdoc|deletedoc|savedoc}
'	PGRID=<GroupID>
'	DOCID=<DocID>
'	DOCNAME=<DocName>
'	DESCR=<DocDEscr>


Dim strAction

If Not bIsDebug Then On Error Resume Next
Server.ScriptTimeOut = Server.ScriptTimeOut * 10

strPlanID =GetSafeID(obTokenMgr.GetData(strToken, stPlanIDsave),"-1")
strAction = GetSafeStr( requestData("ACT"), 100, NULL )
Call ExplanatoryNoteDoc(strPlanID)
RedirectTo "Planner.asp", Array("ACT", strAction)


%>
