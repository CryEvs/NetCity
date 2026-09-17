<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->
<!-- #INCLUDE FILE="ExplanatoryNoteSave_inc.asp" -->
<!-- #INCLUDE FILE="ExplanatoryNote_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
'	ACT={deletedoc}
    Dim strAction
    If Not bIsDebug Then On Error Resume Next
    Server.ScriptTimeOut = Server.ScriptTimeOut * 10

    strPlanID =GetSafeID(Request("PlanID"),"-1")
    strAction = GetSafeStr(Request("ACT"), 100, NULL )

    If strAction = "deletedoc"  Then
		Set objDocInfo = objNSNET.GetExplanatoryNoteDocInfo(strPlanID)
		TestError kErrorCannotGetSubjPlansInfo
		If objDocInfo.EOF Then
			GenerateError kErrorCannotGetSubjPlansInfo
		End If

		Call objNSNET.AddExplanatoryNoteDoc(strPlanID,"","",empty)
		TestError obLanguage("SetupSchoolPortfolio","kErrorCannotDeleteDoc")
	End If	
    RedirectTo "Planner.asp", Array("ACT", strAction)
%>
