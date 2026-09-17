<!-- #INCLUDE FILE="Total_inc.asp" -->
<!-- #INCLUDE FILE=../scripts/FilterClasses_IUP.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim	arrTerms, strSubjClassID, objStudentMarksRs
Dim strClassID
Dim strTeacherID

Sub	ReadState()
	strClassID_IUP = obTokenMgr.GetData(strToken, stCurrClass_IUP)
	Call ParseIupClassId(strClassID_IUP, strClassID, strIupGrade, bIsIupGrade)
	strSubjClassID = obTokenMgr.GetData(strToken, stCurrSubjClass)
	Call InitTermsForClass_IUP(False)
	arrTerms = objTerms.GetRows(,,Array("TERMID", "TERMNAME", "STARTDATE"))
End	Sub

Sub	Main
	Set objStudentMarksRs = objNSNET.GetStudentsMarksList(strSubjClassID)
	strTeacherID = objNSNET.GetSubjectGroupTeacher(strSubjClassID)
End	Sub

%>
