<% ' © 2007-2008 IRTech. All rights reserved.

Dim arrOperators, arrStartMobiles

Sub InitMobileOperators()
	' Смартс, Билайн, Мегафон, МТС
	arrOperators = Array("sms.samara-gsm.ru", "sms.beemail.ru", "sms.mgsm.ru", "sms.mts.ru")
	ReDim arrStartMobiles(3)
	arrStartMobiles(0) = Array("7902", "7904", "7908")
	arrStartMobiles(1) = Array("7903", "7905", "7906", "7909", "7960", "7961")
	arrStartMobiles(2) = Array("7920", "7926", "7921", "7927", "7928", "7922", "7923", "7924")
	arrStartMobiles(3) = Array("7910", "7916", "7911", "7917", "7918", "7912", "7913", "7914")
End Sub
%>
