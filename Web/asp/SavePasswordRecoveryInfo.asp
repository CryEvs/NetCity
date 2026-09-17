<!-- #INCLUDE FILE="headernoscreen.asp" -->

<% ' © 2013 IRTech. All rights reserved.
Dim userComponent, strWorkPage
Set userComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IUserComponent")
strWorkPage = GetSafeStrParam(obTokenMgr.GetData(strToken, stNextPage), Null)
Call Save()

RedirectTo strWorkPage, null

Sub Save()
	Dim strQuestion, strAnswer, saveResult
	strQuestion = Request("RecoveryQuestion")
	strAnswer = Request("RecoveryAnswer")
	IF ((StrComp(strQuestion, "0") = 0 Or Len(strQuestion) = 0) And Len(strAnswer) = 0) Then
		GenerateError obLanguage("Common","kQuestionAbsent")
		return 0
	END IF
	Set saveResult =  userComponent.SaveRecoveryInfo(strQuestion, strAnswer, strUserId)
	IF NOT saveResult.IsSuccess THEN GenerateError saveResult.Message
	Call obTokenMgr.SetData( strToken, stWasSaved, saveResult.Message)
End Sub
%>
