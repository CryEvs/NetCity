<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_Year.asp -->
<!-- #INCLUDE VIRTUAL="asp/SetupSchool/MoveDoc_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
On Error Resume Next

'требуется синхронизировать с функцией маппинга в объект MoveStudentListData (см. метод EditSubDoc)
Const kSaveData_Student_Ind = 0
Const kSaveData_Reason_Ind = 1
Const kSaveData_EO_Ind = 2
Const kSaveData_Award_Ind = 3
Const kSaveData_OutSideType_Ind = 4
Const kSaveData_DebtPass_Ind = 5

Dim nDocType, nFutureYearID, strDocID
Dim nCount
Dim i, nStudentId, arrStudents, nDocSubType
Dim nResult, nReason
Dim rsExists
Dim nSubDocID
Dim bPreSchool, bAddSchool
Dim transaction
Dim strErr, strErrDetail
Dim strNotification
Dim bConditionalMoving, dtPassDate, strPassDateFieldName
Dim bIsPastEditingGraduateDocs

strDocID = GetSafeID(Request("DOCID"), Null)
nDocType = GetSafeLng(Request("DOCTYPE"), kDocType_YEAR)

nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), -1)
nDocSubType = GetSafeDocSubType(nDocType, nDocSubType, False)

bConditionalMoving = (nDocSubType = kYearDocSubType_Conditional)

nFutureYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
bIsPastEditingGraduateDocs = IsPastEditingGraduateDocs()
If bIsPastEditingGraduateDocs Then
	nFutureYearID = strSchoolYearId
End If

bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)

nSubDocID = GetSafeLng( Request("SUBDOCID"), Null)
nCount = Request("incStudent").Count
'для единообразия всегда инициализируем массив с данными одинакового размера. 
'заполняем только теми данными, которые необходимы
ReDim arrStudents(5, nCount-1)

'заполнение общей информации
For i = 1 To nCount
	nStudentId = GetSafeLng(Request("incStudent")(i), Null)
	arrStudents( kSaveData_Student_Ind, i-1 ) = nStudentId
Next

If nDocType <> kDocType_GRADUATE Then
	If bConditionalMoving Then
		'заполнение даннных о дате погашения задолженности
		For i = 1 To nCount
			nStudentId = GetSafeLng(Request("incStudent")(i), Null)
			strPassDateFieldName = "PassDate_" & nStudentId
			If IsDull(Request(strPassDateFieldName)) Then 
				arrStudents( kSaveData_DebtPass_Ind, i-1 ) = Empty 
			Else 
				arrStudents( kSaveData_DebtPass_Ind, i-1 ) = Str2Date(Request(strPassDateFieldName))
			End If
		Next
	End If
Else
	For i = 1 To nCount
		nStudentId = GetSafeLng(Request("incStudent")(i), Null)
		nReason = GetSafeLng(Request("REASON_" & nStudentId), IIf(bConditionalMoving, 0, Null))
		If nReason > 0 Then 
			arrStudents(kSaveData_Reason_Ind, i-1) = nReason
		End If
		arrStudents(kSaveData_EO_Ind, i-1) = GetSafeLng(Request("EOS_" & nStudentId), -1)
		If CLng( arrStudents(kSaveData_EO_Ind, i-1) ) = -1 Then 
			arrStudents(kSaveData_EO_Ind, i-1) = Empty
		End If
		arrStudents( kSaveData_OutSideType_Ind, i-1 ) = GetSafeLng(Request("OST_"&nStudentId), -1)

		If Not bPreSchool Then
			'заполняем информацию о аттестатах
			If IsDull(Request("AWARD" & nStudentId)) Then
				arrStudents( kSaveData_Award_Ind, i-1 ) = Empty ' Для выпуска из 4 класса - нет никакого аттестата
			Else
				arrStudents( kSaveData_Award_Ind, i-1 ) = GetSafeLng(Request("AWARD"&nStudentId), Null)
			End If
			'заполняем информацию о дате погашения задолженности для условников
			If bConditionalMoving Then
				strPassDateFieldName = "PassDate_" & nStudentId
				If IsDull(Request(strPassDateFieldName)) Then 
					arrStudents( kSaveData_DebtPass_Ind, i-1 ) = Empty 
				Else 
					arrStudents( kSaveData_DebtPass_Ind, i-1 ) = Str2Date(Request(strPassDateFieldName))
				End If
			End If
		End If
	Next
End If

Call objNSNET.EditSubDoc(nSubDocID, strCurrYearID, nFutureYearID, arrStudents, nDocType, nDocSubType)
TestError obLanguage("Movement","kCantEditMoveDoc")

Call obTokenMgr.SetData( strToken, stWasSaved, obLanguage("Movement","kMoveDocSuccessfulSaved") )
Call WriteJsonResult(obLanguage("Movement","kMoveDocSuccessfulSaved" ), False, 0)

Function IsPastEditingGraduateDocs
	If nDocType <> kDocType_GRADUATE And Not bConditionalMoving Then IsPastEditingGraduateDocs = False : Exit Function
	If CBool(objNSNET.IsYearClosed(strCurrYearID)) Then IsPastEditingGraduateDocs = True : Exit Function
	IsPastEditingGraduateDocs = (Not IsWorkYear() And nFutureYearID = 0)
End Function
%>
