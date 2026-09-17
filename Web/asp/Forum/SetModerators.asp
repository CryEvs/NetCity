<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="ForumConstants_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim strTopicID, strUserIDs, arrUsers

Call CheckRightOnEditForum(-1)

strTopicID = obTokenMgr.GetData( strToken, "ForumTopicID")
strUserIDs = GetSafeStr( Request("SELECTEDUSERSIDS"), -1, "")
If Len(strUserIDs) > 2 Then
	strUserIDs = Replace(strUserIDs, ";;", ";")
	strUserIDs = Left(strUserIDs,Len(strUserIDs)-1)
	strUserIDs = Right(strUserIDs,Len(strUserIDs)-1)
	arrUsers = Split(Trim(strUserIDs),";")
Else
	arrUsers = Array()
End If
Call objNSNETWork.SetModerators(strSchoolID,strTopicID,arrUsers)
RedirectTo "/asp/Forum/Forum.asp", null
%>
