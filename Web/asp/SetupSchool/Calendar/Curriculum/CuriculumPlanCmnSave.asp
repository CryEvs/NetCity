<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/Year_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strComponentID, strSubjID, strHours, nGradeId
Dim arrCuriculumGrades, arrProfiles, nPCount, arrIsAvailableColumn
Dim j,i,k,m, strSQL, objInsCmd, objSTTLCmd
Dim lngReturnClass, lngReturnSubj, lngReturnProfile, lngResult, strClassName, strSubjName, strProfileName, strMsg
Dim dctTermTypes, arrGradeSet
Dim arrClasses, bClassesExists, arrGradeClasses, strClassID
Dim lngNCreated, lngNFailed, lngNDeleted
Dim transaction
Dim bAddToPlan
Dim strTermID, strProfileID, strDirectionID
Dim jsResult, strDecimalSymbol, bCanCopy

Dim str_kErrCantGenerateCSG
Dim str_kErrCantClearCSG
Dim str_kNumberPairClassSubjectWasCreated
Dim str_kNumberPairClassSubjectWasNotCreated_1
Dim str_kNumberPairClassSubjectWasNotCreated_2
Dim str_kNumberPairClassSubjectWasDeleted

Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

strTermID = obTokenMgr.GetData(strToken, stCurrTerm)
strProfileID = obTokenMgr.GetData(strToken, stCurrProfile) ' Для ИУП не используется
strDirectionID = obTokenMgr.GetData(strToken, stCurrDirection) ' Для ОДО

nFilterGradeMin = GetSafeLng(Request("GradeMin"), -1)
nFilterGradeMax = GetSafeLng(Request("GradeMax"), -1)
If nFilterGradeMin <> -1 And nFilterGradeMax <> -1 Then
	If minGrade < nFilterGradeMin Then minGrade = nFilterGradeMin
	If maxGrade > nFilterGradeMax Then maxGrade = nFilterGradeMax
End If
bAddToPlan = (Request("bAdd") = "True")

Call GetCurriculumColumnsCmn()
Call InitSpecific()

lngResult = 0
transaction = objNSNET.GetTransaction()

If Not bAddToPlan Then
	Call ClearCurriculumCmn()
	TestErrorWithTransaction transaction,obLanguage("SetupSchoolCurPlan","kErrCantSaveCurriculumPlan")
End If

Call CreateCurriculumPrepareCmn()
TestErrorWithTransaction transaction, obLanguage("SetupSchoolCurPlan","kErrCantSaveCurriculumPlan")

Set dctTermTypes = CreateObject("NetCity.Storage")
strDecimalSymbol = GetDecimalSymbol()
For j = 1 To Request("COMPID").Count
	strComponentID = GetSafeID( Request("COMPID")(j), NULL )
	strSubjID = GetSafeID( Request("SUBJID")(j), NULL )
	strClassID = GetSafeStr( Request("CLASSID")(j), -1, NULL )
	strHours = Request("HOURS")(j) & ""
	strHours = Replace(strHours, ".", strDecimalSymbol)

	If strHours <> "" And strHours <> "0" Then
		Call CreateCurriculumExecuteCmn()
		TestErrorWithTransaction transaction, obLanguage("SetupSchoolCurPlan","kErrCantSaveCurriculumPlan")
	End If
Next

If Not bAddToPlan Then
	' здесь проверка что после ClearCurriculum_WT нужно восстановить часы если существуют класс-предмет-группы
	CheckCurriculumHoursCmn()
	TestErrorWithTransaction transaction, obLanguage("SetupSchoolCurPlan","kErrCantCheckHours")
End If

Call InitLanguageMessages()

lngNCreated = GenerateCSGByCurriculumCmn()
TestErrorWithTransaction transaction, str_kErrCantGenerateCSG

lngNDeleted = ClearCSGByCurriculumCmn()
TestErrorWithTransaction str_kErrCantClearCSG

strMsg = CStr(obLanguage("Common","kDataSaved"))

If lngNCreated > 0 Then
	strMsg = strMsg & vbCrLf & str_kNumberPairClassSubjectWasCreated & Bold(lngNCreated) & "."
End If
If lngNFailed > 0 Then
	strMsg = strMsg & vbCrLf & str_kNumberPairClassSubjectWasNotCreated_1 & Bold(lngNFailed) & str_kNumberPairClassSubjectWasNotCreated_2
End If
If lngNDeleted > 0 Then
	strMsg = strMsg & vbCrLf & str_kNumberPairClassSubjectWasDeleted & Bold(lngNDeleted) & "."
End If

Call obTokenMgr.SetData(strToken, stCurrPlannerTreeFilter, "")

objNSNET.CommitTransaction(transaction)
objNSNET.DisposeCommand(objInsCmd) ' нельзя убивать команду раньше - а то transaction.Connection = null
bCanCopy = CanCopyCuriculum(strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)
Set jsResult = new JSONResult
jsResult.Message = strMsg
Call jsResult.AddData("canCopy", bCanCopy)
Response.Write jsResult

Function Bold(strText)
	Bold = "<b>" & strText & "</b>"
End Function

Function GetDecimalSymbol()
	Dim strSeparator
	Select Case Session.LCID
	Case "1033" ' English
		strSeparator = "."
	Case "1048" ' Russian
		strSeparator = ","
	Case "1058" ' Ukraine
		strSeparator = ","
	Case Else   ' Default
		strSeparator = ","
	End Select
	GetDecimalSymbol = strSeparator
End Function

Sub InitLanguageMessages()
End Sub

Sub InitSpecific()
End Sub
%>
