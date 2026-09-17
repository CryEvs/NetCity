<% ' © 2007-2008 IRTech. All rights reserved.
'Common buttons constants
Const cbMessages        = 1
Const cbMessagesInbox   = 2
Const cbForum		    = 4
Const cbHelp            = 5
Const cbUpdateWrkCnt    = 6
Const cbEditUser        = 7
Const cbExit            = 8

Dim btnTextEmpty
btnTextEmpty = strThemeFolder& clsPathHelper.CommonButtonPath & "/TTextEmpty.gif"

Dim arrCBPictures(8)
arrCBPictures(cbMessages) = "CM"
arrCBPictures(cbMessagesInbox) = "CA"
arrCBPictures(cbForum) = "CF"
arrCBPictures(cbHelp) = "CH"
arrCBPictures(cbUpdateWrkCnt) = "TU"
arrCBPictures(cbEditUser) = "CEU"
arrCBPictures(cbExit) = "CE"

Dim arrCBStatusLine(8)
arrCBStatusLine(cbMessages)		= obLanguage("Common","kCBMail")
arrCBStatusLine(cbMessagesInbox)= obLanguage("Common","kCBMailNewMessages")
arrCBStatusLine(cbForum)		= obLanguage("Common","kCBForum")
arrCBStatusLine(cbHelp)			= obLanguage("Common","kCBHelp")
arrCBStatusLine(cbUpdateWrkCnt) = obLanguage("Common","kCBUpdateWrkCnt")
arrCBStatusLine(cbEditUser)		= obLanguage("Common","kCBEditUser")
arrCBStatusLine(cbExit)			= obLanguage("Common","kExit")

Dim arrCBURLs(8)
arrCBURLs(cbMessages)       = "JavaScript:ShowMail()"
arrCBURLs(cbMessagesInbox)  = "JavaScript:ShowMail()"
arrCBURLs(cbForum)		    = "JavaScript:ShowForum()"
arrCBURLs(cbHelp)           = "JavaScript:ShowHelp()"
arrCBURLs(cbUpdateWrkCnt)   = "JavaScript:GetOnlineUsersList()"
arrCBURLs(cbEditUser)       = "JavaScript:EditUser()"
arrCBURLs(cbExit)           = "JavaScript:Logout(true);"

Dim arrEnabledCButtons(8)
arrEnabledCButtons(cbMessages) = True
arrEnabledCButtons(cbMessagesInbox) = True
arrEnabledCButtons(cbForum) = True
arrEnabledCButtons(cbHelp) = True
arrEnabledCButtons(cbUpdateWrkCnt) = True
arrEnabledCButtons(cbEditUser) = True
arrEnabledCButtons(cbExit) = True

Sub EnableCB(button, enable, sURL)
	arrEnabledCButtons(button) = enable
	arrCBURLs(button) = sURL
End Sub

Function cbFileName(button, state)
	Select Case state
		Case isNormal
			cbFileName = strThemeFolder & clsPathHelper.CommonButtonPath & "/" & arrCBPictures(button) & ".gif"
		Case isHighlighted
			cbFileName = strThemeFolder & clsPathHelper.CommonButtonPath & "/" & arrCBPictures(button) & "H.gif"
		Case isDisabled
			cbFileName = strThemeFolder & clsPathHelper.CommonButtonPath & "/" & arrCBPictures(button) & "N.gif"
		Case Else           cbFileName = ""
	End Select
End Function

Function getCommonButtonImages()
	getCommonButtonImages = getOneCBImages(cbHelp) & "," & _
							getOneCBImages(cbMessages)& "," & _
							getOneCBImages(cbMessagesInbox)& "," & _
							getOneCBImages(cbForum)& "," & _
							getOneCBImages(cbEditUser)
End Function

Function getOneCBImages(button)
	getOneCBImages = "'" & _
		cbFileName(button,isNormal) & "','" & _
		cbFileName(button,isHighlighted) & "'"
End Function
%>
