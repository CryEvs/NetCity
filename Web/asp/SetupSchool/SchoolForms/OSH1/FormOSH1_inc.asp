<% ' © 2007-2012 IRTech. All rights reserved.

Const kYearAndGraduateInfoUnavalable = "Не удается получить сведения об обучающихся, окончивших классы!"
Const kAwardsInfoUnavalable = "Не удается получить сведения о выпускниках!"

Const kClassInfoUnavalable = "Не удается получить сведения о классах!"
Const kClassStudentsInfoUnavalable = "Не удается получить сведения об учащихся!"

Const kStudentsAgeInfoUnavalable = "Не удается получить сведения о возрасте учащихся!"
Const kSeniorStudentsAgeInfoUnavalable = "Не удается получить сведения о возрасте учащихся старших классов!"

Const kStudentsOutInfoUnavalable = "Не удается получить сведения о выбывших обучающихся!"
Const kForeignLangUnavalable = "Не удается получить сведения о преподавнии иностранных языков!"
Const kForeignLangStudentsUnavalable = "Не удается получить сведения об обучающихся иностранным языкам!"
Const kSecondForeignLangInfoUnavalable = "Не удается получить сведения о классах, изучающих 2-ой язык!"
Const kSecondForeignLangStudentsInfoUnavalable = "Не удается получить сведения об учащихся, изучающих 2-ой язык!"

Const kGradeMinorMin		= 0
Const kGradeMinorMax10		= 3
Const kGradeMinorMax11_12	= 4

Const kMinAge		=  5
Const kMinSeniorAge	= 14
Const kMaxAge		= 23
Const kGraduateGrade = 11

Const kGradeLevelMinor	=  1
Const kGradeLevelMiddle	=  2
Const kGradeLevelSenior	=  3
Const kGradeLevelUndef	= -1

Const kLangEnglish		=  1
Const kLangFrench		=  2
Const kLangGerman		=  3
Const kLangItalian		=  4
Const kLangSpanish		=  5
Const kLangChina		=  6
Const kLangArabic		=  7
Const kLangOthers		=  8

Function GetFormTitle()
	GetFormTitle = obLanguage("SchoolInfo","kFormOSH1")
	If bIsMNS Then GetFormTitle = obLanguage("SchoolInfo","kFormOSH1_MNS")
End Function

Function GetFormId()
	GetFormId = 1
End Function

Function GetFormName()
	GetFormName = "OSH1"
End Function

Function GetFormPresentationDate()
	Dim rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	GetFormPresentationDate = DateSerial(Year(rsYear("STARTDATE")), 9, 20)
End Function
%>
