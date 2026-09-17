<!-- #INCLUDE FILE="../headernoscreen_YearNoPopUp.asp" -->
<!-- #INCLUDE FILE="../scripts/usersSelector_inc.asp" -->
<!-- #INCLUDE FILE="ForumConstants_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strTopicID, strBackPage, bSelectForumModers
Dim objModeratorsRs, strModeratorsIDs, strModeratorsNames

strBackPage = GetSafeStr(obTokenMgr.GetData(strToken, "Back"), -1, Request.ServerVariables("HTTP_REFERER"))
strTopicID = GetSafeLng(Request("TID"),-1)
Call CheckRightOnEditForum(strTopicID)

bNoSchoolFilter = True
Set objModeratorsRs = objNSNETWork.GetModeratorsList(strSchoolID, strTopicID)
If Not objModeratorsRs.EOF Then
	While Not objModeratorsRs.EOF
		strModeratorsIDs = strModeratorsIDs & ";" & objModeratorsRs("USERID") & ";"
		objModeratorsRs.MoveNext
	Wend
	strModeratorsIDs = Replace(strModeratorsIDs,";;",";")
End If
Call obTokenMgr.SetData(strToken,"ForumTopicID", strTopicID)
%>
<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
<html lang="<%=strCurrLng%>">
<head><title>Выбор модераторов</title>
<script language="JavaScript" src="<%=GetVersionedJsLink("screen1.js")%>"></script>
</head>

<script>
<!--
function SetModerators()
{
	DoUserSelectorSubmit('/asp/Forum/SetModerators.asp');
}
function BackToTopics() {
	DoUserSelectorSubmit('<%=strBackPage%>');
}
//-->
</script>
<%
Call DrawUserSelector(null, strModeratorsNames, strModeratorsIDs, "SetModerators", "BackToTopics")
%>
</html>
