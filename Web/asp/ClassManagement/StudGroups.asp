<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<%	'©2001 ROOS. All rights reserved.

Const kErrRemoveStudent = "Ќевозможно исключить ученика из класса"
Const kErrAddStudents = "Ќевозможно добавить учеников"

Const kCantRemoveStudent_TOTAL = "Ќевозможно исключить ученика из класса в заданном периоде, т.к. у него есть итоговые отметки за этот либо за последующие периоды."
Const kCantRemoveStudent_RESULT = "Ќевозможно исключить ученика из класса в заданном периоде, т.к. у него есть задани€ с об€зательной оценкой, либо оценки в последующих периодах."
Const kCantRemoveStudent_ATTEND = "Ќевозможно исключить ученика из класса в заданном периоде, т.к. у него есть сведени€ о посещаемости в последующих периодах."

Const kRemoveResult_OK = 0
Const kRemoveResult_TOTAL = 1
Const kRemoveResult_RESULT = 2
Const kRemoveResult_ATTEND = 3


Dim strAction, strClassID, 	strStudentID, arrStudents, i, n
Dim strTermID
Dim nRemoveResult

If Not HasUserRight(arClassMgmEnrollClass) Then GenerateError kErrPageAccess

strClassID = GetSafeID( Request("PCLID"), NULL )
strTermID = GetSafeID( Request("TERMID"), NULL )
objCon.BeginTrans()

strAction = Request("Act")
If strAction = "removestudent" Then
	strStudentID = GetSafeID( Request("StudentID"), NULL )
	On Error Resume Next
	nRemoveResult = obNS2.RemoveStudentFromClass(objCon, strStudentID, strClassID, strTermID, strSchoolYearID)
	TestError kErrRemoveStudent
	If nRemoveResult <> kRemoveResult_OK  Then
		If nRemoveResult = kRemoveResult_TOTAL  Then
			GenerateError kCantRemoveStudent_TOTAL
		ElseIf nRemoveResult = kRemoveResult_RESULT  Then
			GenerateError kCantRemoveStudent_RESULT
		ElseIf nRemoveResult = kRemoveResult_ATTEND  Then
			GenerateError kCantRemoveStudent_ATTEND
		End If
	End If
ElseIf strAction = "addstudents"  Then
	ReDim arrStudents(Request("Students").Count-1)
	n = 0
	For i = 1 To Request("Students").Count
		strStudentID = GetSafeID( Request("Students")(i), "0" )
		If strStudentID <> "0" Then
			arrStudents(n) = strStudentID
			n=  n + 1
		End If
	Next
	If n > 0 Then
		On Error Resume Next
		Call obNS2.AssignStudentsToClass(objCon, strClassID, strTermID, arrStudents)
		TestError kErrAddStudents
	End If
End If

objCon.CommitTrans()
Response.Redirect "Enrollment.asp?"& Ver() &"&AT=" & strToken
%>