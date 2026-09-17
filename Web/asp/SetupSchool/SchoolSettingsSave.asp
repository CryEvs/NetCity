<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE FILE="SchoolSettings_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nMoveYearDay

If Not HasUserRight(arEditSchoolSettings) Then GenerateError obLanguage("Common","kErrPageAccess")
' Предполагается, что ID параметра совпадает с индексом в массиве + 1.
ReDim arrSchoolSettings(kSchoolSettings_MaxIndex)
If CLng(strFunctionalityType)=kFuncType_PreSchool Then
	arrSchoolSettings(kSSIndex_MaxMark) = CStr(GetSafeLngInRange(Request.Form("OLDMAX"), kMinSchoolMark, kMaxSchoolMark))
	arrSchoolSettings(kSSIndex_MinMark) = CStr(GetSafeLngInRange(Request.Form("OLDMIN"), kMinSchoolMark, kMaxSchoolMark ))
Else	
	arrSchoolSettings(kSSIndex_MaxMark) = CStr(GetSafeLngInRange(Request.Form("MaxMark"), kMinSchoolMark, kMaxSchoolMark))
	arrSchoolSettings(kSSIndex_MinMark) = CStr(GetSafeLngInRange(Request.Form("MinMark"), kMinSchoolMark, kMaxSchoolMark ))
End If
arrSchoolSettings(kSSIndex_GradeJunior_Min) = CStr(GetSafeLngInRange(Request.Form("GradeJunior_Min"), kMinSchoolGrade, kMaxSchoolGrade))
arrSchoolSettings(kSSIndex_GradeJunior_Max) = CStr(GetSafeLngInRange(Request.Form("GradeJunior_Max"), kMinSchoolGrade, kMaxSchoolGrade))
arrSchoolSettings(kSSIndex_GradeMiddle_Min) = CStr(GetSafeLngInRange(Request.Form("GradeMiddle_Min"), kMinSchoolGrade, kMaxSchoolGrade))
arrSchoolSettings(kSSIndex_GradeMiddle_Max) = CStr(GetSafeLngInRange(Request.Form("GradeMiddle_Max"), kMinSchoolGrade, kMaxSchoolGrade))
arrSchoolSettings(kSSIndex_GradeSenior_Min) = CStr(GetSafeLngInRange(Request.Form("GradeSenior_Min"), kMinSchoolGrade, kMaxSchoolGrade))
arrSchoolSettings(kSSIndex_GradeSenior_Max) = CStr(GetSafeLngInRange(Request.Form("GradeSenior_Max"), kMinSchoolGrade, kMaxSchoolGrade))

arrSchoolSettings(kSSIndex_AdminEdit) = CStr(GetSafeLngInRange(Request.Form("AdminEdit"), 0, 1))
If Request.Form("WinAuth").Count > 0 Then
	arrSchoolSettings(kSSIndex_WinAuth) = CStr(GetSafeLngInRange(Request.Form("WinAuth"), 0, 1))
Else
	arrSchoolSettings(kSSIndex_WinAuth) = "0"
End If

'Следующие 3 строчки - Скрытые настройки, на данный момент не нужны, но в БД Остались
'nMoveYearDay = GetSafeLngInRange(Request.Form("MoveYearBegin"), 1, 30)
'Call ValidateNewMoveYearEndDate(nMoveYearDay)
arrSchoolSettings(kSSIndex_MoveYear) = "6" ' - constant, not used. 'CStr(nMoveYearDay)

arrSchoolSettings(kSSIndex_SMSEmail) = "1" ' - constant, not used. CStr(GetSafeLngInRange(Request.Form("SMSEmail"), 0, 1))
arrSchoolSettings(kSSIndex_SMSGate) = CStr(GetSafeLngInRange(Request.Form("SMSGate"), 0, 1))

arrSchoolSettings(kSSIndex_MarksAveraging) = CStr(GetSafeLngInRange(GetSafeLng(Request.Form("MarksAveraging"), 0), 0, 1))

On Error Resume Next
Call objNSNET.SetSchoolSettings(strCurrYearID, arrSchoolSettings )
TestError obLanguage("SchoolSettings","kCantSetSettings") & obLanguage("Common","kOfSchool",strFunctionalityType)
Call obTokenMgr.SetData( strToken, stMaxMark, arrSchoolSettings( kSSIndex_MaxMark ) )

' update grading scales
If GetSafeLng( Request("UPDATESC"), 0 ) = 1 Then
	Dim gradeComponent
	Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	Call gradeComponent.UpdateYearGradingSystems(strCurrYearId)
	TestError obLanguage("SchoolSettings","kCantUpdateGradingScales")
End If

Call WriteJsonResult(obLanguage("SchoolSettings","kTitleSettings") & obLanguage("Common","kOfSchool",strFunctionalityType) & obLanguage("SchoolSettings","kSuccessfulSaved"), False, 0)

' Допустимая дата приказа ограничена с одной стороны началом просто учебного года, с другой - концом учебного года по движению.
' Sub ValidateNewMoveYearEndDate( nMoveYearDay )
	' Dim rsYear, dtYearStart, nMoveYearMonth
	' Dim dtMoveYearEnd, nErrDocID
	
	' Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	' dtYearStart = rsYear("STARTDATE")
	' rsYear.Close
	
	' nMoveYearMonth = kMoveYearMonth
	
	' dtMoveYearEnd = DateSerial(Year(dtYearStart), nMoveYearMonth, nMoveYearDay) 
	' dtMoveYearEnd = DateAdd("yyyy", 1, dtMoveYearEnd)
	' dtMoveYearEnd = DateAdd("d", -1, dtMoveYearEnd)
	
	' nErrDocID = objNSNET.GetFirstInvalidDocID(strCurrYearID, dtMoveYearEnd)
	
	' If nErrDocID <> 0 Then
		' RedirectTo "SchoolSettings.asp", Array("ErrDocID", nErrDocID)
	' End If
' End Sub
%>
