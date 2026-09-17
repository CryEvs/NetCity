<%
Function SendingSchoolSmsAvailable()
	IF kSMARTSEnabledForAll THEN 
		SendingSchoolSmsAvailable = True
		Exit Function
	End If
	Dim guids
	guids = Split(kSMARTSSchoolsCondition,",")
	If UBound(guids) < 0 Then
		SendingSchoolSmsAvailable = False
		Exit Function
	End If
	SendingSchoolSmsAvailable = CheckSchoolGuid(guids)
End Function

Function ParentHasMobilePhoneForSchoolSms (userId)
	Dim objSmsComponent, mobilePhoneForSchoolSms

	If Not MarksBySmsAvailable() Then
		ParentHasMobilePhoneForSchoolSms = False
		Exit Function
	End If

	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
	mobilePhoneForSchoolSms = objSmsComponent.GetParentMobPhoneForSchoolSms(userId)
	ParentHasMobilePhoneForSchoolSms = Not IsDull(mobilePhoneForSchoolSms)
End Function%>