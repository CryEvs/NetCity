<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->

<%
Dim objSmsComponent,mobPhone,isShowMobile, successMsg
Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
successMsg = obLanguage("SetupSchoolCalendar","kMsgSave")
mobPhone = GetSafeStrParam(Request("MOBILEPHONE"),"")
isShowMobile = DetermineShowMobilePhone()


Call objNSNET.SetMobilePhoneForUser(strUserID,mobPhone)
Call objSmsComponent.UpdateShowMobileParameter(strUserID, isShowMobile)
Call WriteState()
RedirectTo "MarksBySms.asp", null

Function DetermineShowMobilePhone()
	Dim showPhoneValue, result
	showPhoneValue = GetSafeLng(Request("SHOWMOBILEPHONE"),0)
	Select Case showPhoneValue
		Case 0
			result = False
			DetermineShowMobilePhone = result
		Case 1
			result = True
			DetermineShowMobilePhone = result
		Case kDefValue
			GenerateError "ShowMobilePhone invalid"
		Case Else
			GenerateError "Unknown Error.ShowMobilePhone invalid"
	End Select
End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stWasSaved, successMsg)
End Sub
%>
