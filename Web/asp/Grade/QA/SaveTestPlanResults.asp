<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/GradingScale_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strNewAssignmentID, nClassAssignment, nAssignType
Dim nTestPlanId
Dim arrList, strReqItem, arrResList
Dim arrScores, arrSplit, i, arrMarks
Dim objQAComponent, gradingManager, gradeComponent
Dim result
Dim transaction, nSGId, dtCurTime, nClassMeetingId, arrData, arrAssigns, nAssignmentId, strStudentID, nMaxMark, mark, arrDKRAssigns, nScore

On Error Resume Next

nTestPlanId = GetSafeLng(Request("TESTPLANID"), Null)

Set arrList = Server.CreateObject("System.Collections.ArrayList")
Set arrResList = Server.CreateObject("System.Collections.ArrayList")

For Each strReqItem in Request.Form
	If InStr(strReqItem, "SCORE_") > 0 Then
		arrList.Add strReqItem
	End If
	If InStr(strReqItem, "RESULT_") > 0 Then
		arrResList.Add strReqItem
	End If
Next

ReDim arrScores(2, arrList.Count-1)
i = 0

For Each strReqItem in arrList
	arrSplit = Split(strReqItem,"_")
	nScore = GetSafeLng(Request(strReqItem), -1)
	arrScores(0, i) = Clng(arrSplit(1))
	arrScores(1, i) = CLng(arrSplit(2))
	If nScore <> -1 Then
		arrScores(2, i) = nScore
	End If
	i = i + 1
Next

ReDim arrMarks(1, arrResList.Count-1)
i = 0
For Each strReqItem in arrResList
	arrSplit = Split(strReqItem,"_")
	arrMarks(0, i) = CLng(arrSplit(1))
	arrMarks(1, i) = Trim(Request(strReqItem))
	i = i + 1
Next

Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")

'Сохранение Балов
Dim testPlanResults
Set testPlanResults = objQAComponent.SaveTestPlanResults(nTestPlanId, arrScores)
TestResult testPlanResults, Null

'Сохранение оценки
transaction = objNSNET.GetTransaction()
nSGId = GetSafeLng(Request("SCLID"), 0)
dtCurTime = NSNow()
nClassMeetingId = GetSafeParam("CMID", stClassMeetingID, "0")
nAssignmentId = GetSafeParam("AID", stAssignmentId, 0)
nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))

Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
Set gradingManager = gradeComponent.GetGradingManager(strCurrYearId, nSGId)

'Собираем массив данных Где: 
'1-ое значение studentId
'2-ое значение Оценка, если оценка не поставлена, то ставится или null, или Empty, взависимости от MARKED
ReDim arrData(2, arrResList.Count-1)

For i = 0 To UBound(arrData, 2)
	arrData(0, i) = arrMarks(0, i)
	mark = arrMarks(1, i)
	If IsDull(mark) Then
		arrData(1, i) = IIF(Request("MARKED_" & arrData(0, i)) <> 0, Null, Empty)
	Else
		arrData(1, i) = gradingManager.ThousandsPointScale(nAssignmentId, mark)
	End If
Next

Set gradeComponent = Nothing
Set gradingManager = Nothing

ReDim arrAssigns(0)
arrAssigns(0) = nAssignmentId

nAssignType = GetSafeLng(Request("ATYPE"), 0)
If nAssignType = PreDefinedAssignmentType_DKR Then 
	arrDKRAssigns = arrAssigns
End If
	
Call objNSNET.SaveStudentsResults_WT(transaction, nSGId, dtCurTime, nClassMeetingId, arrData, arrAssigns, false, strSchoolID, arrDKRAssigns)
TestErrorWithTransaction transaction,obLanguage("Grade","kErrSaveGrades")

objNSNET.CommitTransaction(transaction)
transaction = Empty

Set result = new JSONResult
rw result
%>
