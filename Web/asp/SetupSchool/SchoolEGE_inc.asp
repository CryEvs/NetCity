<% ' © 2007-2008 IRTech. All rights reserved.

Const kTitleExportEGE = "Экспорт информации об учениках <br>в формат ЕГЭ (RCMCSVConsole)"
Const kTitleWait = "Этот процесс займет некоторое время.<br>Пожалуйста, подождите..."
Const kBeginExport = "Начать экспорт"

Const kEGEData = "Данные для ЕГЭ"
Const kSchoolCode = "Код образовательного учреждения"
Const kCodeHasOnlyNumbers = "Код ОУ должен содержать только цифры"

Const kSchoolCodeNotDefined = "Код ОУ не определён, экспорт в формат ЕГЭ невозможен"
Const kSchoolsFile = "Файл с информацией об ОУ"
Const kMsgSelectGrades = "Пожалуйста, выберите параллели для экспорта"

Const kInvalidRegCodeFormat = "Неправильный формат кода региона"
Const kSchoolCodeNotFound = "В указанном файле не найдена информация для ОУ с кодом"

Const kInvalidSchoolsFormat = "Не соответствуют ожидаемому формату справочника ОУ строки"

Const kGenerateInfoForRegCode = "Будет сгенерирована информация для кода региона"
Const kAndGenerateInfoForSchoolCode =  "и для кода ОУ"

Const kRecommendFilePath = "Полученный файл рекомендуется сохранить по следующему пути"
Const kNoStudentsForEGE = "Нет учеников с выбранными для ЕГЭ экзаменами"

Const kNoEGESubjects = "В системе не определены экзамены для ЕГЭ"
Const kInvalidEGESubjects = "Неправильная последовательность предметов для ЕГЭ"
Const kTooManyStudentsForEGE = "Слишком много студентов для экспорта в ЕГЭ, максимально возможно"

Const kEGEStatisticsByClasses = "Количество учеников с данными для ЕГЭ, по классам"
Const kTotalEGEStudents = "Всего учеников"
Const kEGEDataChanged = "Данные для ЕГЭ были изменены. Попробуйте сделать экспорт ещё раз."

' Errors for data validation
Const kEGE_ExportImpossible = "Экспорт в формат ЕГЭ невозможен."
Const kEGE_EmptyFirstName = "Не задано имя ученика."
Const kEGE_InvalidFirstName = "Имя не может быть экспортировано в формат ЕГЭ."
Const kEGE_InvalidLastName = "Фамилия не может быть экспортирована в формат ЕГЭ."
Const kEGE_InvalidMiddleName = "Отчество не может быть экспортировано в формат ЕГЭ."
Const kEGE_EmptyClass = "У ученика не определён класс."
Const kEGE_InvalidClassName = "Название класса не может быть экспортировано в формат ЕГЭ."
Const kEGE_EmptyDocType = "Не задан тип документа для ЕГЭ."
Const kEGE_EmptyScopeRestrict = "Не задано ограничение возможностей."
Const kEGE_EmptyDocNum = "Не задан номер документа."
Const kEGE_InvalidDocNum = "Номер документа не может быть экспортирован в формат ЕГЭ."
Const kEGE_EmptyDocSer = "Не задана серия документа."
Const kEGE_InvalidDocSer = "Серия документа не может быть экспортирована в формат ЕГЭ."
Const kEGE_InvalidGender = "Пол не может быть экспортирован в формат ЕГЭ."
Const kEGE_EmptyBirthDate = "Не задана дата рождения."
' Errors

Const kParticipantsBaseName = "Participants.cs_"

Const kRegCodeLen = 2
Const kDocTypeLen = 2
Const kScopeRestrictLen = 2
Const kSchoolCodeMaxLen = 6
Const kEGESeparator = "#"
Const kEGESubjectsSeparator = ";"
Const kEGESubjectsParamID = 1037

Const kEGEDataCount = 25 ' 26.02.2009 - changed 24 '15
Const kConstInStudentCode = "2"
Const kEGEWorkField = "0"
Const kEGESchoolPriority = "0"
Const kStudentSubCodeLen = 7 ' In StudentCode: RegCode_kConstInStudentCode_SchoolCode_StudentSubCode
Const kEGEStringDataLen = 80

Const kEGEDocType_PASSPORT = 1
Const kEGEDocType_BIRTHCERTIF = 4

Const kEGE_RemouteNo = "0"
Const kEGE_Early = "0"
Const kCodeOU = "Код образовательного учреждения"
Const kCodeOUshort = "Код ОУ"
%>
