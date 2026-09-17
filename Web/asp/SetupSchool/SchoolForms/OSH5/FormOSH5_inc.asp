<% ' © 2007-2015 IRTech. All rights reserved.
Const kYearAndGraduateInfoUnavalable = "Не удается получить сведения об обучающихся, окончивших классы!"
Const kAwardsInfoUnavalable = "Не удается получить сведения о выпускниках!"
Const kStudentsAgeInfoUnavalable = "Не удается получить сведения о возрасте учащихся!"
Const kSeniorStudentsAgeInfoUnavalable = "Не удается получить сведения о возрасте учащихся старших классов!"
Const kStudentsOutInfoUnavalable = "Не удается получить сведения о выбывших обучающихся!"

Const kOtherReason = 15

Function GetFormId()
	GetFormId = 5
End Function

Function GetFormName()
	GetFormName = "OSH5"
End Function

Function GetFormTitle()
	GetFormTitle = obLanguage("SchoolInfo","kFormOSH5")
End Function%>