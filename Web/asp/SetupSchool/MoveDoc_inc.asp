<% ' © 2007-2015 IRTech. All rights reserved.

Const kDocType_OUT		= 1
Const kDocType_ENROLL	= 2
Const kDocType_MOVE		= 3
Const kDocType_YEAR		= 4
Const kDocType_STAY		= 5
Const kDocType_GRADUATE	= 6

Const kAwardType_General	= 1
Const kAwardType_Secondary	= 2
Const kAwardType_Silver		= 3
Const kAwardType_Gold		= 4
Const kAwardType_None		= 5

'EMoveDocSubTypes:
Const kmdstNoClassEnroll = 0
Const kmdstAllClassesEnroll  = 6

Const kYearDocSubType_NotEnrolled	= 0
Const kYearDocSubType_Simple		= 1
Const kYearDocSubType_AfterExams	= 2
Const kYearDocSubType_Conditional	= 3 ' Этот подтип используется и для типа документа kDocType_GRADUATE
Const kYearDocSubType_Adapted		= 5

Const kDocSubType_Simple					= 1 ' Простой универсальный подтип
Const kClassesDocSubType_Stay				= 4
Const kClassesDocSubType_FromNotEnrolled	= 0

Function IsExistsNotEnrolledNotYearMoved()
	Dim objTemp, pageCount
	Set objTemp = objNSNET.GetStudentList(strSchoolID, strSchoolYearID, obLanguage("Common","kFirstLetter"), obLanguage("Common","kLastLetter"), "", -4, 0, "kNotEnrolledNotYearMoved", False, False, 1, 1, pageCount, 0, "" )
	IsExistsNotEnrolledNotYearMoved = (pageCount > 0)
End Function

Function IsNotExistsNotEnrolledClasses(nDocType, nDocSubType)
	Dim objTemp
	Dim strFuncTypeTmp

	strFuncTypeTmp = strFunctionalityType
	If CLng(nDocType) = kDocType_GRADUATE And Application("MSSQL") = "0" And Application("IsCollege") Then
		strFuncTypeTmp = kFuncType_Profession
	End If
	Set objTemp = objNSNET.GetNotEnrolledClasses(strSchoolYearID, nDocType, nDocSubType, strFuncTypeTmp, strCurrYearID)
	IsNotExistsNotEnrolledClasses = objTemp.EOF
End Function%>