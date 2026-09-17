
<% ' © 2007-2015 IRTech. All rights reserved.

Const strPhotoDivRegExpPattern = "<div id=""photowrap"" photowrap_userid=""(\d*)"">([^>]+>)</div>"

Function GetPhotoImg(strPhotoUserID)
	GetPhotoImg = GetPhotoImgEx(strPhotoUserID, 100)
End Function

Function GetPhotoStyleBackground(strPhotoUserID)
	If IsDull(strPhotoUserID) Then
		GetPhotoStyleBackground = "<a href=""#"" class=""glyphicon glyphicon-user""></a>"
	Else
		GetPhotoStyleBackground = "<a href=""#"" style=""background: url(/webapi/users/photo?AT=" & strToken & "&SVER=" & getVer() & "&UID=" & strPhotoUserID & ") center center no-repeat; background-size: cover;""></a>"
	End If
End Function

Function GetPhotoImgEx(strPhotoUserID, nHeight)
	GetPhotoImgEx = "<img src=""/webapi/users/photo?AT="& strToken& "&VER=" & getVer() &"&userId=" & strPhotoUserID & """ border=""0"" alt=""" & obLanguage("Common", "kAltUserPhoto") & """style=""max-height: 100px; max-width: 100px;"">"
End Function

Function GetWrappedPhotoImg(strPhotoUserID)
	GetWrappedPhotoImg = "<div id=""photowrap"" photowrap_userid=""" & strPhotoUserID & """>" & GetPhotoImg(strPhotoUserID) & "</div>"       
End Function

Function RewritePhotos(strHTMLText)
	Dim regState, Matches, strPhotoImg, strPhotoUserID, arrUsersPhoto, i
	Set regState = New RegExp
	regState.Pattern = strPhotoDivRegExpPattern
	regState.Global = True
	regState.IgnoreCase = True

	Set Matches = regState.Execute(strHTMLText)
	ReDim arrUsersPhoto(Matches.Count-1)
	For i = 0 To Matches.Count-1
		strPhotoUserID = Matches(i).SubMatches(0)
		arrUsersPhoto(i) = strPhotoUserID
		strPhotoImg = GetPhotoImg(strPhotoUserID)
		strHTMLText = Replace(strHTMLText, Matches(i).SubMatches(1), strPhotoImg)
	Next

	Call obTokenMgr.SetData(strToken, stValidIDs, arrUsersPhoto)
	RewritePhotos = strHTMLText
End Function%>